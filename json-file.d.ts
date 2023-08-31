import { JSONValue } from "./json-value";

declare module "*.json" {
  const jsonValue: JSONValue;
  export default jsonValue;
}
