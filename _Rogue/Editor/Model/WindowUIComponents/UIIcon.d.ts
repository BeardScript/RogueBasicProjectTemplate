import { WindowUIComponent } from "./WindowUIComponent";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { CSSProperties } from 'react';
export declare class UIIcon extends WindowUIComponent {
    component: string;
    private _icon;
    constructor(icon: string | IconDefinition, config?: IUIIconConfiguration);
    icon: string | IconDefinition;
}
export interface IUIIconConfiguration {
    style?: CSSProperties;
}
