interface IFolderOptions {
    indentation: number;
    fontSize: number;
    fontColor: string;
    selectionColor: string;
}
export default class SystemObject {
    private _name;
    private _path;
    private _data;
    private _options;
    constructor(path: string);
    data: any;
    options: IFolderOptions;
    readonly path: string;
    name: string;
}
export {};
