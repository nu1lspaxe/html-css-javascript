// After ES6

class Merchandise {
    constructor() {
        // private properties
        this.catalog = ['coffee', 'chicken', 'pizze'];
    };

    // public methods
    getCatalogs() {
        return this.catalog.join(',');
    };

    addItem(item) {
        this.catalog.push(item);
    };
}

export default Merchandise;