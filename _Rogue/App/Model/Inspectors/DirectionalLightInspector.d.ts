import { DirectionalLight } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class DirectionalLightInspectorClass extends Inspector {
    getType(): typeof DirectionalLight;
    getUI(light: DirectionalLight): WindowUIComponent[];
}
export declare let DirectionalLightInspector: DirectionalLightInspectorClass;
export {};
