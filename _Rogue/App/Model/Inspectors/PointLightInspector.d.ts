import { PointLight } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class PointLightInspectorClass extends Inspector {
    getType(): typeof PointLight;
    getUI(light: PointLight): WindowUIComponent[];
}
export declare let PointLightInspector: PointLightInspectorClass;
export {};
