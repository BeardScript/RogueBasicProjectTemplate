import { Scene, Object3D } from 'three';
export declare class App {
    private static _title;
    private static _settings;
    private static _currentScene;
    private static _activeCamera;
    private static _scenes;
    private constructor();
    static activeCamera: string;
    static readonly settings: any;
    static title: string;
    static currentScene: Scene;
    static readonly scenes: {
        name: string;
        path: string;
    }[];
    static toJSON(): {
        title: string;
        scenes: {
            name: string;
            path: string;
        }[];
    };
    static fromJSON(json: {
        title: string;
        scenes: {
            name: string;
            path: string;
        }[];
    }): void;
    static play(): void;
    static loadScene(name: string | number): Promise<void>;
    static instantiate(object: Object3D, parent?: Object3D): Object3D;
    private static loadComponentsRecursive;
}
