import * as React from 'react';
import './CSceneWindow.css';
import { Container } from 'golden-layout';
import SceneWindow from '../../../EditorWindows/SceneWindow';
import RuntimeUIComponent from '../Utils/RuntimeUIComponent';
interface State {
    sceneWindow: SceneWindow;
}
interface Props extends React.Props<CSceneWindow> {
    glContainer: Container;
}
export default class CSceneWindow extends RuntimeUIComponent {
    state: State;
    props: Props;
    sceneWindow: SceneWindow;
    constructor(props: any);
    componentDidMount(): void;
    setupSceneWindow(): void;
    handleOnResize(): void;
    onDrop: (ev: React.DragEvent<Element>) => void;
    onMouseOver(ev: React.BaseSyntheticEvent): void;
    onMouseLeave(): void;
    render(): JSX.Element;
}
export {};
