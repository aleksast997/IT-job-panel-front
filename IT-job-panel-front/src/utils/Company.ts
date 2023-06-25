import { Town } from "./Town";

export interface Company {
  id: number,
  name: string,
  description: string,
  field: string,
  employeeNumber: string,
  foundingYear: number,
  email: string,
  companyHeadquarters: string,
  phoneNumber: string,
  averageRating: number,
  towns: []
}

export const initialCompanyValue: Company = {
  id: 0,
  name: "",
  description: "",
  field: "",
  employeeNumber: "",
  foundingYear: 0,
  email: "",
  companyHeadquarters: "",
  phoneNumber: "",
  averageRating: 0,
  towns: []
}
