import * as React from 'react';
import './CToolbarCenter.css';
import './CToolbar.css';
import SceneWindow from '../../../EditorWindows/SceneWindow';
interface State {
}
interface Props extends React.Props<CToolbarCenter> {
}
export default class CToolbarCenter extends React.Component<Props, State> {
    sceneWindow: SceneWindow;
    constructor(props: any);
    togglePlay(): void;
    render(): JSX.Element;
}
export {};
