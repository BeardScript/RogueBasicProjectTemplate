import * as React from 'react';
import { Container } from 'golden-layout';
import { EventEmitter } from 'events';
import { UIGroup } from 'rogue-editor';
import SkyboxWindow from '../../../EditorWindows/SkyboxWindow';
declare global {
    interface Window {
        require: any;
    }
}
interface State {
    uiGroup: UIGroup;
}
interface Props extends React.Props<CSkyboxWindow> {
    glContainer: Container;
    glEventHub: EventEmitter;
}
export default class CSkyboxWindow extends React.Component {
    state: State;
    props: Props;
    skyboxWindow: SkyboxWindow;
    constructor(props: any);
    componentDidMount(): void;
    onMouseOver(): void;
    render(): JSX.Element;
}
export {};
