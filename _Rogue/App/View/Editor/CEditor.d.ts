import * as React from 'react';
interface Props extends React.Props<CEditor> {
    history: any;
}
interface State {
    maximized: boolean;
}
export default class CEditor extends React.Component<Props, State> {
    state: State;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    setProjectPathFromHistory(): void;
    render(): JSX.Element;
}
export {};
