const Author = require("../models/author");
const Book = require("../models/book");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

// Display list of all Authors.
exports.author_list = asyncHandler(async (req, res, next) => {
  const allAuthors = await Author.find().sort({ last_name: 1 }).exec();
  res.render("author_list", {
    title: "Author List",
    author_list: allAuthors,
  });
});

// Display detail page for a specific Author.
exports.author_detail = asyncHandler(async (req, res, next) => {
  // Get details of author and all their books (in parallel)
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    // No results.
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }

  res.render("author_detail", {
    title: "Author Detail",
    author: author,
    author_books: allBooksByAuthor,
  });
});

// Display Author create from on GET
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.render("author_form", { title: "Create Author" });
});

// Handle Author create on POST.
exports.author_create_post = [
  // Validate and sanitize fields.
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape() // prevent from XSS attack
    .withMessage("First name must be specified.") // error message for above
    .isAlphanumeric() // if only alphabet and number
    .withMessage("First name has non-alphanumeric characters."), // error message for above
  body("last_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Last name must be specified.")
    .isAlphanumeric()
    .withMessage("Last name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" }) // it can be passed with falsy value(null, 0, empty string, false, etc.)
    .isISO8601() // if it's an ISO8601-compliant date
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("author_form", {
        title: "Create Author",
        author: author,
        errors: errors.array(),
      });
      return;
    } else {
      await author.save(); // save author
      res.redirect(author.url); // redirect to new author record
    }
  }),
];

// Display Author delete form on GET
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (author === null) {
    res.redirect("/catalog/authors");
  }

  res.render("author_delete", {
    title: "Delete Author",
    author: author,
    author_books: allBooksByAuthor,
  });
});

// Handle Author delete on POST
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  const [author, allBooksByAuthor] = await Promise.all([
    Author.findById(req.params.id).exec(),
    Book.find({ author: req.params.id }, "title summary").exec(),
  ]);

  if (allBooksByAuthor.length > 0) {
    // Author has books, render in same way as for GET route
    res.render("author_delete", {
      title: "Delete Author",
      author: author,
      author_books: allBooksByAuthor,
    });
    return;
  } else {
    // Author has no books, delete object and redirect to the list of authors
    await Author.findByIdAndDelete(req.params.id);
    res.redirect('/catalog/authors');
  }
});

// Display Author update form on GET
exports.author_update_get = asyncHandler(async (req, res, next) => {
  const author = await Author.findById(req.params.id).exec();
  if (author === null) {
    const err = new Error("Author not found");
    err.status = 404;
    return next(err);
  }
  res.render("author_form", { title: "Update Author", author: author });
});

// Handle Author update on POST
exports.author_update_post = [
    // Validate and sanitize fields.
    body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape() // prevent from XSS attack
    .withMessage("First name must be specified.") // error message for above
    .isAlphanumeric() // if only alphabet and number
    .withMessage("First name has non-alphanumeric characters."), // error message for above
  body("last_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Last name must be specified.")
    .isAlphanumeric()
    .withMessage("Last name has non-alphanumeric characters."),
  body("date_of_birth", "Invalid date of birth")
    .optional({ values: "falsy" }) // it can be passed with falsy value(null, 0, empty string, false, etc.)
    .isISO8601() // if it's an ISO8601-compliant date
    .toDate(),

  // Process request after validation and sanitization.
  asyncHandler(async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    // Create Author object with escaped and trimmed data
    const author = new Author({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: req.body.date_of_birth,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render("author_form", {
        title: "Update Author",
        author: author,
        errors: errors.array(),
      });
      return;
    } else {
      const updateAuthor = await Author.findByIdAndUpdate(req.params.id, author);
      res.redirect(author.url); // redirect to new author record
    }
  }),
];
