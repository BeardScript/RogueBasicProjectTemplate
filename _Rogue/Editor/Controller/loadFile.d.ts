import { Object3D, Texture, Material } from 'three';
export declare function loadFile(path: string, onLoad: (object: Object3D | Texture | Material) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
