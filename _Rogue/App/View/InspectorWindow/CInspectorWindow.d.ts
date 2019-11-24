import * as React from 'react';
import './CInspectorWindow.css';
import { Container } from 'golden-layout';
import { EventEmitter } from 'events';
import { UIGroup } from 'rogue-editor';
import InspectorWindow from '../../../EditorWindows/InspectorWindow';
interface State {
    uiGroup: UIGroup;
}
interface Props extends React.Props<CInspectorWindow> {
    glContainer: Container;
    glEventHub: EventEmitter;
}
export default class CInspectorWindow extends React.Component<Props, State> {
    state: State;
    inspectorWindow: InspectorWindow;
    constructor(props: any);
    onComponentsListChanged(): void;
    onSelectObject(): void;
    onMouseOver(ev: React.BaseSyntheticEvent): void;
    render(): JSX.Element;
}
export {};
