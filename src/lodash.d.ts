interface IhasIn<T> {
    [key: string]: T;
}

declare module "lodash" {
    function head<T>(array: T[]): T;
    function hasIn<T>(object: IhasIn<T>, key: string): boolean;
    function isBoolean<T>(value: T): boolean;
    function toString<T>(value: T): string;
}
