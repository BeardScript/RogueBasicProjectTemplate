import * as React from 'react';
import { EventEmitter } from 'events';
import { UICodeEditor } from 'rogue-editor';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/darcula.css';
import '../../../glsl';
import 'codemirror/mode/javascript/javascript';
import './CUICodeEditor.css';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUICodeEditor> {
    glEventHub: EventEmitter;
    uiComponent: UICodeEditor;
}
export default class CUICodeEditor extends React.Component<Props, State> {
    readonly value: any;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    setInputValue(value: any): void;
    handleOnBlur: (editor: any, evt: any) => void;
    handleOnChange: (editor: any, data: any, value: any) => void;
    setPropertyValue(value: any): void;
    handleOnFocus: (editor: any, evt: any) => void;
    handleKeyPress: (evt: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
