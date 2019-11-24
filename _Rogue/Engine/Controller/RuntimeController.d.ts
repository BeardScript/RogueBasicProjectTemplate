import Component from '../Model/Component';
import SceneController from '../Model/SceneController';
import { WebGLRenderer, Scene } from 'three';
export declare class RuntimeController extends SceneController {
    play(scene: Scene, renderer?: WebGLRenderer): void;
    stop(): void;
    protected afterUpdate(): void;
    protected traverseSceneComponents(callback: (component: Component) => void): void;
    protected beginUpdateCycle(): void;
}
export declare const runtimeController: RuntimeController;
