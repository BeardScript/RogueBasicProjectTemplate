import * as React from 'react';
import { EventEmitter } from 'events';
import { UISelect } from 'rogue-editor';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUISelect> {
    glEventHub: EventEmitter;
    uiComponent: UISelect;
}
export default class CUISelect extends React.Component<Props, State> {
    readonly value: any;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    setInputValue(value: any): void;
    handleOnBlur: (evt: any) => void;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: any): void;
    handleOnFocus: (evt: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
