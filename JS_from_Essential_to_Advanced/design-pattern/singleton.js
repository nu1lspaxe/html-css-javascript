// Before ES6

const Singleton = (function() {
    // Instance stroes a reference to the Singleton
    var instance;
    
    // Singleton
    function init() {   
        // Private methods and variables
        function privateMethod() {
            console.log("I'm private");
        }
        var privateVariable = "I'm also private";
        var privateRandomNum = Math.random();
        return {
            // Public methods and variables
            publicMethod: function() {
                console.log("The public can see me!");
            },
            publicProperty: "I'm also public",
            getRandomNum: function() {
                return privateRandomNum;
            }
        };
    };

    return {
        // Get the Singleton instance if one exists
        // or create one if it doesn't
        getInstance: function() {
            return instance ? instance : instance = init();
        }
    };
})()    // note: `()` means that it's a function

var singleA = Singleton.getInstance();
var singleB = Singleton.getInstance();
singleA.publicMethod();
console.log(singleA.publicProperty);
console.log("Are singleA and singleB the same? Answer:", singleA === singleB);