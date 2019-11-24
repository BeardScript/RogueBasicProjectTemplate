import { Object3D, Texture, Material } from 'three';
declare class AssetManagerClass {
    private _assets;
    saveAsset(object: Object3D | Texture | Material): void;
    removeAsset(key: string): any;
    removeAsset(object: Object3D | Texture | Material): any;
    loadAsset(uuid: string): Object3D | Texture | Material;
    clearAssets(): void;
    fromJSON(json: any): void;
    toJSON(): {
        materials: {};
        textures: {};
        objects: {};
    };
}
export declare let AssetManager: AssetManagerClass;
export {};
