import { Object3D } from 'three';
import Component from '../Model/Component';
import SceneController from '../Model/SceneController';
export declare function onObjectAdded(callback: (object: Object3D, target: Object3D) => void): {
    stop: () => any;
};
export declare function onComponentAdded(callback: (component: Component, target: Object3D) => void): {
    stop: () => any;
};
export declare function onObjectRemoved(callback: (object: Object3D, target: Object3D) => void): {
    stop: () => any;
};
export declare function onComponentRemoved(callback: (component: Component, target: Object3D) => void): {
    stop: () => any;
};
export declare function onPlay(callback: () => void): {
    stop: () => any;
};
export declare function onStop(callback: () => void): {
    stop: () => any;
};
export declare function onBeforeUpdate(callback: (sceneController: SceneController) => void): {
    stop: () => any;
};
export declare function onUpdate(callback: (sceneController: SceneController) => void): {
    stop: () => any;
};
export declare function onAfterUpdate(callback: (sceneController: SceneController) => void): {
    stop: () => any;
};
