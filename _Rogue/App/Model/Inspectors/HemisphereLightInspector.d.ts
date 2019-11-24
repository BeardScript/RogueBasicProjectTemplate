import { HemisphereLight } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class HemisphereLightInspectorClass extends Inspector {
    getType(): typeof HemisphereLight;
    getUI(light: HemisphereLight): WindowUIComponent[];
}
export declare let HemisphereLightInspector: HemisphereLightInspectorClass;
export {};
