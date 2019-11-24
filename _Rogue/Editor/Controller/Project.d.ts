import ProjectSettings from '../Model/ProjectSettings';
import { Object3D, Scene, PerspectiveCamera } from 'three';
/**
 * A Singleton that manages the state of the the project
 */
export declare class Project {
    private static _path;
    private static _settings;
    private static _selectedObjects;
    private static _currentScene;
    private static _openedScenePath;
    private static _editorCamera;
    private static _objectClipboard;
    private constructor();
    static path: string;
    static readonly id: string;
    static readonly selectedObjects: Object3D[];
    static readonly settings: ProjectSettings;
    static readonly editorCamera: PerspectiveCamera;
    static readonly currentScene: Scene;
    static readonly openedScenePath: string;
    static copySelectedObjects(): void;
    static pasteClipboardObjects(parent: Object3D): void;
    static createPrefab(object: Object3D): any;
    private static packObjectComponents;
    static selectObject(object3d: Object3D): void;
    static loadScene(scene: Scene | string): void;
    static saveScene(path: string): void;
    static clearSelection(): void;
    static reselectObjects(): void;
    static getIdByPath(): string;
}
