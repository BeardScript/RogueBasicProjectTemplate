import { Raycaster } from 'three';
import { Component } from 'rogue-engine';
export default class ObjectSelector extends Component {
    raycaster: Raycaster;
    canSelect: boolean;
    static isEditorComponent: boolean;
    start(): void;
    update(): void;
    private isSelectableEditorObject;
    private isSelectableObject;
}
