import { PerspectiveCamera } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class PerspectiveCameraInspectorClass extends Inspector {
    private _isPanelExpanded;
    getType(): typeof PerspectiveCamera;
    getUI(camera: PerspectiveCamera): WindowUIComponent[];
}
export declare let PerspectiveCameraInspector: PerspectiveCameraInspectorClass;
export {};
