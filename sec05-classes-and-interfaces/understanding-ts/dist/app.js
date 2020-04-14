"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    // 1 Adding a TS hint:
    // - By associating 'this' like in describe(this: Department) (ie not really a parameter but more like a hint for TS) we are specifying that when executing the method,
    // the 'this' should always refer to an instance that is based on the Department class on which the method is executing.
    // - describe(this: Department) is a special instruction understood by TS.
    // - Applying the hint also ensures we are adhering to the structure of the class.
    describe() {
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = {
    name: "Sailor4",
    describe: accounting.describe,
}; // passing the accounting.describe function itself
accountingCopy.describe();
// We could use .call(), .bind()
// accountingCopy.describe.call({ name: "Sailor" });
// accountingCopy.describe.bind({ name: "Sailor2" })();
//# sourceMappingURL=app.js.map