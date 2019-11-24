import { OrthographicCamera } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class OrthographicCameraInspectorClass extends Inspector {
    private _isPanelExpanded;
    getType(): typeof OrthographicCamera;
    getUI(camera: OrthographicCamera): WindowUIComponent[];
}
export declare let OrthographicCameraInspector: OrthographicCameraInspectorClass;
export {};
