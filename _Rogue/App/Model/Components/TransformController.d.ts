import * as TransformControls from 'three-transform-ctrls';
import { Component } from 'rogue-engine';
export default class TransformController extends Component {
    selectedObjectId: string | undefined;
    transformControls: TransformControls;
    static isEditorComponent: boolean;
    start(): void;
    update(): void;
}
