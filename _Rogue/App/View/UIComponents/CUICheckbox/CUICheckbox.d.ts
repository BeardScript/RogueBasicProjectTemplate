import * as React from 'react';
import { EventEmitter } from 'events';
import { UICheckbox } from 'rogue-editor';
interface State {
    inputValue: boolean;
    focused: boolean;
}
interface Props extends React.Props<CUICheckbox> {
    glEventHub: EventEmitter;
    uiComponent: UICheckbox;
}
export default class CUICheckbox extends React.Component<Props, State> {
    private _stopOnUpdate;
    readonly value: any;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: any): void;
    componentWillUnmount(): void;
    handleOnFocus: (evt: any) => void;
    handleOnBlur: (evt: any) => void;
    render(): JSX.Element;
}
export {};
