import { WindowUIComponent } from "./WindowUIComponent";
import { CSSProperties } from 'react';
export declare class UIGroup extends WindowUIComponent {
    component: string;
    orientation: string;
    label?: string;
    private _ui;
    data: any;
    static orientations: {
        horizontal: string;
        vertical: string;
    };
    constructor(orientation: string, label: string, ui: WindowUIComponent[], config?: IUIGroupOptions);
    constructor(orientation: string, ui: WindowUIComponent[], config?: IUIGroupOptions);
    ui: WindowUIComponent[];
    add(...ui: WindowUIComponent[]): void;
    remove(ui: WindowUIComponent): void;
    clear(): void;
    moveItem(item: WindowUIComponent, from: number, to: number): void;
}
export interface IUIGroupOptions {
    style?: CSSProperties;
    draggable?: boolean;
}
