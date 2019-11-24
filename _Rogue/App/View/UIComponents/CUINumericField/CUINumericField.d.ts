import * as React from 'react';
import { EventEmitter } from 'events';
import { UINumericField } from 'rogue-editor';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUINumericField> {
    glEventHub: EventEmitter;
    uiComponent: UINumericField;
}
export default class CUINumericField extends React.Component<Props, State> {
    readonly value: any;
    constructor(props: any);
    getFormatedPropValue(): any;
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    setInputValue(value: any): void;
    handleOnBlur: (evt: any) => void;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: number): void;
    handleOnFocus: (evt: any) => void;
    handleKeyPress: (evt: any) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
