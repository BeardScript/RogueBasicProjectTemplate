import * as React from 'react';
import { UIDialog } from 'rogue-editor';
export default class CDialogManager extends React.Component {
    stopRegisterDialogListener: () => void;
    stopOpenDialogListener: () => void;
    stopCloseDialogListener: () => void;
    state: {
        dialogs: UIDialog[];
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
