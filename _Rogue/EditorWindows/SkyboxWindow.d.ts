import { EditorWindow, UIGroup } from 'rogue-editor';
export default class SkyboxWindow extends EditorWindow {
    skyboxProceduralProperties: UIGroup;
    skyboxCubemapProperties: UIGroup;
    constructor();
    render(): void;
}
