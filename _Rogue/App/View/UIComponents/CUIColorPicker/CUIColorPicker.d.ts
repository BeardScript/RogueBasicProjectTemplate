import * as React from 'react';
import { EventEmitter } from 'events';
import { Color } from 'three';
import { UIColorPicker } from 'rogue-editor';
interface State {
    inputValue: string;
    focused: boolean;
}
interface Props extends React.Props<CUIColorPicker> {
    glEventHub: EventEmitter;
    uiComponent: UIColorPicker;
}
export default class CUIColorPicker extends React.Component<Props, State> {
    readonly value: Color;
    constructor(props: any);
    onUpdate: () => void;
    hasStateChanged: () => boolean;
    handleOnChange: (evt: any) => void;
    setPropertyValue(value: string): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
