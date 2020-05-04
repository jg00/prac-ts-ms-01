abstract class Department {
  static fiscalYear = 2020;

  // Give access to base properties from derived objects.
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  // Static method
  static createEmployee(name: string) {
    return { name: name };
  }

  // Abstract - Convert to abstract method to enforce that all derived classes implement a method with that signature.
  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("No. of employees: " + this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  // Requires implementation of abstract method
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

// Using Singleton make sure we only have one instance.
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // variable of this class type.

  // Getter and setter
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value.");
    }
    this.addReport(value);
  }

  // By making the constructor 'private' now we cannot instantiate ie can't call 'new'.  However we can still get and instance through static method.
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  // Singleton
  static getInstance() {
    // Check if an instance already exists else return new instrance.
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  // Override base method
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

//  IT Department Object
console.log(`**** IT Department ****`);
const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Mel");
it.addEmployee("Dane");
it.describe();
it.printEmployeeInformation();
console.log(it);
console.log("");

// Accounting Department Object
console.log(`**** Accounting Department ****`);
// const accounting = new AccountingDepartment("d2", []); // Can no longer create instance directly because of private constructor.
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2); // Exactly equal since we only want one instance

// Set
accounting.mostRecentReport = "Year end report";

// Get
accounting.addReport("Something went wrong..");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();

accounting.describe();
