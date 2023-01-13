class Department {
  constructor(public name: string, private employees: string[]) {}

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  listEmployees() {
    dev.employees.forEach((employee) => console.log(employee));
  }
}

let dev = new Department("development", []);

console.log(dev.name);

dev.addEmployee("PersonA");
dev.addEmployee("PersonB");
dev.addEmployee("PersonC");

dev.listEmployees();

class ITDepartment extends Department {
  //you can explicitly call the Department contructor by using the super(constructor_arguments) inside this class's constructor
  private recentEmail: string = "admin@admin.com";

  //defines the getter of the recentEMail property
  get mostRecentEmail(): string {
    return this.recentEmail;
  }

  //defines the setter of the recentEmail property
  set mostRecentEmail(recent: string) {
    this.recentEmail = recent;
  }

  //this will override the method definition defined in the base class
  addEmployee(employee: string): void {}
}

let itDep = new ITDepartment("IT", []);
// we deal with getters and setters as if they are properties from the class
console.log(itDep.mostRecentEmail);
itDep.mostRecentEmail = "rafael@email.com";
console.log(itDep.mostRecentEmail);

abstract class absClass {
  abstract someAbsMethod(name: string): void;
}
