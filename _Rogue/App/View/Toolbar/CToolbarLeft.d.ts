import * as React from 'react';
import './CToolbarLeft.css';
import './CToolbar.css';
interface State {
    btnMoveIsActive: boolean;
    btnRotateIsActive: boolean;
    btnScaleIsActive: boolean;
}
interface Props extends React.Props<CToolbarLeft> {
}
export default class CToolbarLeft extends React.Component<Props, State> {
    state: {
        btnMoveIsActive: boolean;
        btnRotateIsActive: boolean;
        btnScaleIsActive: boolean;
    };
    handleBtnMoveOnClick: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    handleBtnRotateOnClick: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    handleBtnScaleOnClick: (e: React.BaseSyntheticEvent<object, any, any>) => void;
    render(): JSX.Element;
}
export {};
