import { Object3D } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class Object3DInspectorClass extends Inspector {
    getType(): typeof Object3D;
    getUI(object3d: Object3D, ui?: WindowUIComponent[]): WindowUIComponent[];
    getComponentsInspector(object3d: Object3D): WindowUIComponent[];
}
export declare let Object3DInspector: Object3DInspectorClass;
export {};
