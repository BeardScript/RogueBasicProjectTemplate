import { Component } from 'rogue-engine';
import { UIGroup } from './UIGroup';
import { WindowUIComponent } from './WindowUIComponent';
export declare class UIComponentView extends WindowUIComponent {
    component: string;
    ui: UIGroup;
    constructor(component: Component);
}
