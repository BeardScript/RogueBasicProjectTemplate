import * as React from 'react';
import './CFileManager.css';
import { Container } from 'golden-layout';
import { EventEmitter } from 'events';
import { UIGroup } from 'rogue-editor';
import FileManager from '../../../EditorWindows/FileManager/FileManager';
declare global {
    interface Window {
        require: any;
    }
}
interface State {
    uiGroup: UIGroup;
    width: number;
    height: number;
    folderPortal: boolean;
    componentPortal: boolean;
}
interface Props {
    glContainer: Container;
    glEventHub: EventEmitter;
    history: any;
}
export default class CFileManager extends React.Component {
    state: State;
    props: Props;
    fileManager: FileManager;
    uiGroup: UIGroup;
    constructor(props: any);
    handleOnResize: () => void;
    onFolderItemsListChanged(): void;
    closeFolderPortal: () => void;
    openFolderPortal: () => void;
    closeComponentPortal: () => void;
    openComponentPortal: () => void;
    componentDidMount(): void;
    setProjectPathFromHistory(): void;
    onMouseOver(): void;
    render(): JSX.Element;
}
export {};
