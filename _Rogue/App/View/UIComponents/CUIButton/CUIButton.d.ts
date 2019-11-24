import * as React from 'react';
import { EventEmitter } from 'events';
import { UIButton } from 'rogue-editor';
interface State {
    focused: boolean;
}
interface Props extends React.Props<CUIButton> {
    glEventHub: EventEmitter;
    uiComponent: UIButton;
}
export default class CUIButton extends React.Component<Props, State> {
    constructor(props: any);
    onMouseDown: (evt: React.MouseEvent<Element, MouseEvent>) => void;
    onMouseUp: (evt: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
}
export {};
