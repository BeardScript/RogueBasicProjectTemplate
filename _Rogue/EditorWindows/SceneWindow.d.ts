import { SceneController } from 'rogue-engine';
import { EditorWindow } from 'rogue-editor';
import { Scene, Camera } from 'three';
export default class SceneWindow extends EditorWindow {
    private _activeSceneController;
    private _editorCamera;
    private _isPlaying;
    private _currentScene;
    private _lastSceneState;
    private _lastAssetManagerState;
    RogueRenderer: any;
    constructor();
    readonly currentScene: Scene;
    readonly isPlaying: boolean;
    readonly activeSceneController: SceneController;
    editorCamera: Camera;
    setSceneDimensions(width: number, height: number): void;
    private onProjectSceneLoaded;
    loadScene(scene: Scene): void;
    togglePlay(): void;
    play(): void;
    stop(): void;
    pause(): void;
    private onSelectObject;
}
