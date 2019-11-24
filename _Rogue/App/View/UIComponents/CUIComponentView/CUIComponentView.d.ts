import * as React from 'react';
import './CUIComponentView.css';
import { EventEmitter } from 'events';
import { Container } from 'golden-layout';
import { UIComponentView } from 'rogue-editor';
interface State {
}
interface Props extends React.Props<CUIComponentView> {
    glContainer: Container;
    glEventHub: EventEmitter;
    uiComponent: UIComponentView;
}
export default class CUIComponentView extends React.Component<Props, State> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
