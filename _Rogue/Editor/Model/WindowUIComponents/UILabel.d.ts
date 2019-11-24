import { WindowUIComponent } from "./WindowUIComponent";
import { CSSProperties } from 'react';
export declare class UILabel extends WindowUIComponent {
    component: string;
    private _text;
    constructor(text: string, config?: IUILabelConfiguration);
    text: string;
}
export interface IUILabelConfiguration {
    style?: CSSProperties;
}
