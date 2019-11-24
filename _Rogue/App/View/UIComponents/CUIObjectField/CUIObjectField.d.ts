import * as React from 'react';
import { EventEmitter } from 'events';
import { Object3D } from 'three';
import { UIObjectField } from 'rogue-editor';
import RuntimeUIComponent from '../../Utils/RuntimeUIComponent';
interface State {
    inputValue: Object3D;
}
interface Props extends React.Props<CUIObjectField> {
    glEventHub: EventEmitter;
    uiComponent: UIObjectField;
}
export default class CUIObjectField extends RuntimeUIComponent {
    props: Props;
    state: State;
    constructor(props: any);
    readonly value: any;
    hasStateChanged: () => boolean;
    handleOnDrop: (evt: any) => void;
    private onObjectDrop;
    private onFileDrop;
    private isValidExtension;
    private getExtension;
    onDragOver: (e: any) => void;
    onClear: () => void;
    render(): JSX.Element;
}
export {};
