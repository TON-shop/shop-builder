import { UnionToTuple } from "./types";

export function getTypedKeys<T extends object>(obj: T) {
  return Object.keys(obj) as UnionToTuple<keyof T>;
}

export function getNestedItemByKeys<T>(obj: object, keys: string[]): T | null {
  let result = obj;
  for (let key of keys) {
    if (result.hasOwnProperty(key)) {
      result = result[key as keyof typeof result];
    } else {
      return null; // Key not found
    }
  }

  return result as any;
}
