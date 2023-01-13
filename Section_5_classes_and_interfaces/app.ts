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
