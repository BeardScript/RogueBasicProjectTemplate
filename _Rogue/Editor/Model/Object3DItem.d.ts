import { Object3D } from 'three';
import { SystemObject } from 'rogue-editor';
export default class Object3DItem extends SystemObject {
    private _children;
    private _object3D;
    constructor(path: string);
    readonly uuid: string;
    children: SystemObject[];
    object3D: Object3D;
}
