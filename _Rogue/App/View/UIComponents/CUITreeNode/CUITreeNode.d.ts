import * as React from 'react';
import { EventEmitter } from 'events';
import { Container } from 'golden-layout';
import { UITreeNode } from 'src/Editor/Model/WindowUIComponents/UITreeNode';
interface State {
}
interface Props extends React.Props<CUITreeNode> {
    glContainer: Container;
    glEventHub: EventEmitter;
    uiComponent: UITreeNode;
}
export default class CUITreeNode extends React.Component {
    props: Props;
    state: State;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
