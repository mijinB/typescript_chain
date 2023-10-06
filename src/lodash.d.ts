interface IHead<T> {
    array: T[];
}

declare module "lodash" {
    function head<T>(array: IHead<T>): T;
}
