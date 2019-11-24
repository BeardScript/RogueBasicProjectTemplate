import * as React from 'react';
import './Dialog.css';
import FileManager from 'src/EditorWindows/FileManager/FileManager';
interface State {
}
interface Props {
    headerText: string;
    inputText: string;
    btn1Text: string;
    btn2Text: string;
    onClose: (e: React.BaseSyntheticEvent) => void;
    fm: FileManager;
}
export default class CreateFolderDialog extends React.Component {
    state: State;
    props: Props;
    inputEl: HTMLInputElement | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleCancel: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    handleConfirm: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    onMouseUp: (e: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
}
export {};
