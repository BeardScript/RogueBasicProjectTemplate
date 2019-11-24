import * as React from 'react';
import { EventEmitter } from 'events';
import { Container } from 'golden-layout';
import { UIExpansionPanel } from 'rogue-editor';
interface State {
}
interface Props extends React.Props<CUIExpansionPanel> {
    glContainer: Container;
    glEventHub: EventEmitter;
    uiComponent: UIExpansionPanel;
}
export default class CUIExpansionPanel extends React.PureComponent {
    props: Props;
    state: State;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
