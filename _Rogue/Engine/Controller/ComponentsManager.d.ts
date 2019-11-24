import { Object3D, Scene } from 'three';
import Component from '../Model/Component';
export declare let components: IComponentsMap;
export declare let editorComponents: IComponentsMap;
export interface IComponentsMap {
    [objectId: string]: Component[];
}
export declare function getComponentPrototypes(): {
    [className: string]: typeof Component;
};
export declare function clearComponents(): void;
export declare function registerComponent<T extends Component>(ComponentClass: new (...args: any[]) => T): void;
export declare const initComponents: (scene: Scene, componentsToLoad?: Object | undefined) => void;
export declare const initEditorComponents: (scene: Scene) => void;
export declare const loadComponents: (object: Object3D, objectComponents: Component[]) => void;
export declare const serializeComponents: () => {};
export declare const runThreeJsAdapter: () => void;
