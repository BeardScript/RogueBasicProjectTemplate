import * as React from 'react';
import { Container } from 'golden-layout';
interface State {
    bgx: number;
    x: number;
    color: string;
}
interface Props extends React.Props<CDivider> {
    glContainer: Container;
    update: (x: number) => void;
}
export default class CDivider extends React.Component {
    isOutOfContainer: boolean;
    props: Props;
    state: State;
    componentDidMount(): void;
    update: (x: number) => void;
    handleMouseMove: (e: MouseEvent) => void;
    onMouseDown: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    componentWillUnmount(): void;
    onMouseUp: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    onMouseOver: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    render(): JSX.Element;
}
export {};
