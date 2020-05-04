class Department {
  static fiscalYear = 2020;

  // Give access to base properties from derived objects.
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  // Static method; Note taht static members cannot be accessed from within non-static members using 'this' keyword.
  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  private lastReport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

console.log(`**** Accounting Department ****`);
const accounting = new AccountingDepartment("d2", []);

// Set
accounting.mostRecentReport = "Year end report";

// Get
accounting.addReport("Something went wrong..");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();
