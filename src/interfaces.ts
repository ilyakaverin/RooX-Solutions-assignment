export interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Input {
  value: string;
  onChange: (event: InputType) => void;
  name: string;
  readOnly: boolean;
  type?: string;
}
export type InputType =
  | React.FormEvent<HTMLTextAreaElement>
  | React.FormEvent<HTMLInputElement>;

export interface State {
  isLoading: boolean;
  data: Array<User>;
}
export interface UserCard {
  name: string;
  city: string;
  companyName: string;
  id: number;
}
interface Address {
  city: string;
  geo: {
    [props: string]: string;
  };
  street: string;
  suite: string;
  zipcode: string;
}
interface Company {
  [props: string]: string;
}
