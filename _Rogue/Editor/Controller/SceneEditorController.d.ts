import { WebGLRenderer, Scene, Object3D } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { SceneController, Component } from 'rogue-engine';
export declare class SceneEditorController extends SceneController {
    editorScene: Scene;
    editorObjectsContainer: Object3D;
    cameraControls: OrbitControls;
    constructor();
    play(scene: Scene, renderer?: WebGLRenderer): void;
    stop(): void;
    addSceneEditorObject(object3d: Object3D): Object3D;
    removeSceneEditorObject(object3d: Object3D): void;
    removeSceneEditorObjectById(uuid: string): void;
    private cleanSceneFromEditorComponents;
    protected traverseSceneComponents(callback: (component: Component) => void): void;
    protected update(): void;
    protected afterUpdate(): void;
}
export declare const sceneEditorController: SceneEditorController;
