import { UnionToTuple } from "./types";
export declare function getTypedKeys<T extends object>(obj: T): UnionToTuple<keyof T>;
export declare function getNestedItemByKeys<T>(obj: object, keys: string[]): T | null;
