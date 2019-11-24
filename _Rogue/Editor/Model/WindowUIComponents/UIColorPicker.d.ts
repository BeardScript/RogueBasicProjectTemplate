import { Color } from 'three';
import { WindowUIComponent } from './WindowUIComponent';
export declare class UIColorPicker extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    value: Color;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    constructor(obj: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
}
