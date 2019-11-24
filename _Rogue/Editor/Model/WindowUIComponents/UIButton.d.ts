import { WindowUIComponent } from "./WindowUIComponent";
export declare class UIButton extends WindowUIComponent {
    component: string;
    label: string;
    constructor(label: string, onMouseUp?: (evt: MouseEvent) => void, onMouseDown?: (evt: MouseEvent) => void);
}
