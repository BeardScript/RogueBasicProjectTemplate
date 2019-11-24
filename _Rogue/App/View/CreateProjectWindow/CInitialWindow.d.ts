import * as React from 'react';
import './CInitialWindow.css';
interface Props extends React.Props<CInitialWindow> {
    history: any;
}
interface State {
    isLoading: boolean;
}
export default class CInitialWindow extends React.Component<Props, State> {
    constructor(props: any);
    handleOpenProject: () => void;
    render(): JSX.Element;
}
export {};
