import Lifecycle from './Lifecycle';
import { Object3D } from 'three';
export default class Component extends Lifecycle {
    private _name;
    private _object3d;
    interface: ComponentInterface;
    constructor(name: string);
    /**
     * The name by which to search a component.
     *
     * For best results, make sure you don't
     * repeat them within the same Object3D.
    */
    name: string;
    /**
     * Reference to the Object3D asociated to this component.
     *
     * Caution!! It can only be set internally by the engine
     */
    object3d: Object3D;
    toJSON(): any;
    fromJSON(json: any): void;
    private serializeInterfaceRefs;
    private loadInterfaceRefs;
    awake(): void;
    start(): void;
    beforeUpdate(): void;
    update(): void;
    afterUpdate(): void;
}
export declare type ComponentInterface = {
    [propName: string]: 'String' | 'Number' | 'Boolean' | 'Object3D' | 'Texture' | 'Material' | 'Component';
};
