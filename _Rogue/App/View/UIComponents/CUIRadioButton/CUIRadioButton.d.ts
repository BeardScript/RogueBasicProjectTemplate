import * as React from 'react';
import { EventEmitter } from 'events';
import { UIRadioButton } from 'rogue-editor';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUIRadioButton> {
    glEventHub: EventEmitter;
    uiComponent: UIRadioButton;
}
export default class CUIRadioButton extends React.Component<Props, State> {
    private _stopOnUpdate;
    readonly value: any;
    readonly checked: boolean;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    setInputValue(value: any): void;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: any): void;
    handleOnFocus: (evt: any) => void;
    handleOnBlur: (evt: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
