import { SpotLight } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class SpotLightInspectorClass extends Inspector {
    getType(): typeof SpotLight;
    getUI(light: SpotLight): WindowUIComponent[];
}
export declare let SpotLightInspector: SpotLightInspectorClass;
export {};
