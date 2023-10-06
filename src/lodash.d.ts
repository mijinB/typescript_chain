interface IObject<T> {
    [key: string]: T;
}

declare module "lodash" {
    function head<T>(array: T[]): T;
    function hasIn<T>(object: IObject<T>, key: string): boolean;
    function isBoolean<T>(value: T): boolean;
    function toString<T>(value: T): string;
    function split(string: string, separator: RegExp | string, limit: number): string[];
    function hasPath<T>(object: IObject<T>, path: T[] | string): boolean;
    function filter<T>(array: T[], predicate: Function): T[];
    function every<T>(array: T[], predicate: Function): boolean;
    function map<T>(array: T[], iteratee: Function): T[];
}
