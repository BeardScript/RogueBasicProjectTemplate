import * as React from 'react';
import './CHierarchy.css';
import { Container } from 'golden-layout';
import { EventEmitter } from 'events';
import { UIGroup } from 'rogue-editor';
import HierarchyWindow from '../../../EditorWindows/HierarchyWindow';
import { Object3D } from 'three';
declare global {
    interface Window {
        require: any;
    }
}
interface State {
    uiGroup: UIGroup;
}
interface Props extends React.Props<CHierarchy> {
    glContainer: Container;
    glEventHub: EventEmitter;
}
export default class CHierarchy extends React.Component {
    state: State;
    props: Props;
    hierarchyWindow: HierarchyWindow;
    constructor(props: any);
    onSelectObject: (object: Object3D) => void;
    onSceneLoaded: () => void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    onMouseOver(): void;
    render(): JSX.Element;
}
export {};
