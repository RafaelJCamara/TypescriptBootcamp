/**
 * Intersection types:
 * - Types that merge two types into one another
 */

type Admin = {
  name: string;
  roles: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// this type will have all the properties of the Admin type as well as from the Employee type
type SuperEmployee = Admin & Employee;

const e1: SuperEmployee = {
  name: "Rafael",
  roles: ["role"],
  startDate: new Date(),
};
