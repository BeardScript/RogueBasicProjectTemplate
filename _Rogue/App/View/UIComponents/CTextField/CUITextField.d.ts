import * as React from 'react';
import { EventEmitter } from 'events';
import { UITextField } from 'rogue-editor';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUITextField> {
    glEventHub: EventEmitter;
    uiComponent: UITextField;
}
export default class CUITextField extends React.Component<Props, State> {
    readonly value: any;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    setInputValue(value: any): void;
    handleOnBlur: (evt: any) => void;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: any): void;
    handleOnFocus: (evt: any) => void;
    handleKeyPress: (evt: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
