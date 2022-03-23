import {User} from '../interfaces';

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function getProperty(obj: User, path: string) {
  return  path.split(`.`).reduce((nested: any, key) => nested && nested[key], obj);
}
   