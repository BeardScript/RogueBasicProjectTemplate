import { AmbientLight } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class AmbientLightInspectorClass extends Inspector {
    getType(): typeof AmbientLight;
    getUI(light: AmbientLight): WindowUIComponent[];
}
export declare let AmbientLightInspector: AmbientLightInspectorClass;
export {};
