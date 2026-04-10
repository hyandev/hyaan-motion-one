export interface User {
  id: number;
  name: string;
  role: string;
  email: string;
  company: string;
  verified: boolean;
}

const users: User[] = [
  {
    id: 1,
    name: "Thomas Shelby",
    role: "Founder",
    email: "Thimas@Sby.com",
    company: "Shelby.co",
    verified: true,
  },
  {
    id: 2,
    name: "Jack Daniel",
    role: "Founder",
    email: "justin@main.com",
    company: "Xavier LLC",
    verified: true,
  },
  {
    id: 3,
    name: "Gorge Chapel",
    role: "Founder",
    email: "gorge@mail.com",
    company: "Chapel LLC",
    verified: true,
  },
  {
    id: 4,
    name: "Mike Tylor",
    role: "Founder",
    email: "mike@Cmb.com",
    company: "CMB LLC",
    verified: true,
  },
];
export default users;
