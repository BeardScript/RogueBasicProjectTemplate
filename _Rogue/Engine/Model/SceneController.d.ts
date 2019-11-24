import { WebGLRenderer, Scene, Object3D, Camera } from 'three';
import Lifecycle from './Lifecycle';
import Component from '../Model/Component';
export default abstract class SceneController extends Lifecycle {
    private _onUpdateCallbacks;
    protected _scene: Scene;
    protected _containerId: HTMLElement;
    protected _rogueDOMContainer: HTMLElement;
    protected _camera: Camera;
    protected _renderer: WebGLRenderer;
    protected _isRunning: boolean;
    protected _isPaused: boolean;
    protected _width: number;
    protected _height: number;
    protected _request: number;
    protected _stop: () => void;
    readonly height: number;
    readonly width: number;
    readonly containerId: HTMLElement;
    camera: Camera;
    readonly renderer: WebGLRenderer;
    readonly isRunning: boolean;
    readonly isPaused: boolean;
    readonly rogueDOMContainer: HTMLElement;
    onUpdate(callback: () => any): void;
    onStop(callback: () => any): void;
    play(scene: Scene, renderer?: WebGLRenderer): void;
    stop(): void;
    pause(): void;
    traverseScene(callback: (object: Object3D) => void): void;
    traverseObject3d(object: Object3D, callback: (object3d: Object3D) => void): void;
    protected abstract traverseSceneComponents(callback: (component: Component) => void): void;
    protected awake(): void;
    protected start(): void;
    protected beforeUpdate(): void;
    protected update(): void;
    protected afterUpdate(): void;
    private startRenderer;
    setSceneDimensions(width: number, height: number): void;
    setCameraDimensions(width: number, height: number): void;
    protected beginUpdateCycle(): void;
    protected runOnUpdateCallbacks(): void;
}
