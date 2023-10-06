interface IHead<T> {
    array: T[];
}

interface IhasIn<T> {
    [key: string]: T;
}

declare module "lodash" {
    function head<T>(array: IHead<T>): T;
    function hasIn<T>(object: IhasIn<T>, key: string): boolean;
}
