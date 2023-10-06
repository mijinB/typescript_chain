type Head<T> = T[];

interface IhasIn<T> {
    [key: string]: T;
}

type IsBoolean<T> = T;

declare module "lodash" {
    function head<T>(array: Head<T>): T;
    function hasIn<T>(object: IhasIn<T>, key: string): boolean;
    function isBoolean<T>(value: IsBoolean<T>): boolean;
}
