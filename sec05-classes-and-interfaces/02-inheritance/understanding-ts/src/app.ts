class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // Ex 3 Shortcut for auto properties.
  // Ex 4 Readonly - fields that should not change after initialization
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  // 1 Adding a TS hint:
  // - By associating 'this' like in describe(this: Department) (ie not really a parameter but more like a hint for TS) we are specifying that when executing the method,
  // the 'this' should always refer to an instance that is based on the Department class on which the method is executing.
  // - describe(this: Department) is a special instruction understood by TS.
  // - Applying the hint also ensures we are adhering to the structure of the class.
  // So below, 'this: Department' is a hint for TS that specify that 'this' should refer to an instance that is based on Department class.
  // Improves our code to ensure describe() method is called 'only' on an instance object of type Department.
  describe(this: Department) {
    // console.log("Department: " + this.name);
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation code..
    // this.id = "d2"; // remember id is 'readonly' and cannot change after initialization
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("No. of employees: " + this.employees.length);
    console.log(this.employees);
  }
}

// 5 Inheritance
// When you extend, the constructor of the base class is automatically inherited unless you specify a constructor in the derived class that requires a call to the parent constructor using super();
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// Ex 2 - private and public modifiers
// const accounting = new Department("d1", "Accounting");
const it = new ITDepartment("d2", ["Ted"]);

it.addEmployee("Mel");
it.addEmployee("Dane");

// it.employees[2] = "Anna"; // Issue is this field should be private
// it.name = "NEW NAME";

it.describe();
it.printEmployeeInformation();

// Ex 1 - 'this' hint on describe(this: Department)
/* 
  const accounting = new Department("Accounting");
  accounting.describe();

  // Note that below is an "object literal" which is a different object from accounting object above.
  const accountingCopy = {
    name: "Finance",
    describe: accounting.describe,
    // describe: accounting.describe.call({ name: "Sailor3" }), // We could use .call({name: "Sailor3"}) and provide the "name property."
  }; // passing the accounting.describe function itself

  accountingCopy.describe(); // "Department: undefined" unless we provide the 'this' hint that tells TS that describe() should be called on an object of type Department.

  // We could use .call(), .bind()
  // accountingCopy.describe.call({ name: "Sailor" });
  // accountingCopy.describe.bind({ name: "Sailor2" })();
*/

const accounting = new AccountingDepartment("d3", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
