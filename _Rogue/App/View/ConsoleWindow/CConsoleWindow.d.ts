import * as React from 'react';
import { Container } from 'golden-layout';
import { EventEmitter } from 'events';
import { UIGroup } from 'rogue-editor';
import ConsoleWindow from '../../../EditorWindows/ConsoleWindow';
declare global {
    interface Window {
        require: any;
    }
}
interface State {
    uiGroup: UIGroup;
}
interface Props extends React.Props<CConsoleWindow> {
    glContainer: Container;
    glEventHub: EventEmitter;
}
export default class CConsoleWindow extends React.Component {
    state: State;
    props: Props;
    consoleWindow: ConsoleWindow;
    logsLength: number;
    stopClearLogsListener: () => void;
    stopOnAddLogListener: () => void;
    constructor(props: any);
    renderConsole(): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    onMouseOver(): void;
    render(): JSX.Element;
}
export {};
