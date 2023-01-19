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

/**
 * Index properties
 *  - Sometimes we just want to create flexible classes/interfaces, and this means that we don't know exactly the number of properties it would have
 *  - One example of this is that we might want to create an Error interface for our forms, but they differ from one another
 */

interface ErrorContainer {
  id: string;
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  //mandatory
  id: "someErrorId",
  //optional
  message: "some error message",
  date: "date",
};
