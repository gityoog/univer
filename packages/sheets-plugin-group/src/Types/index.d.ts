export * from '../index';
declare module '@univerjs/sheets-plugin-group' {}

// use css module
declare module '*.less' {
    const resource: { [key: string]: string };
    export = resource;
}