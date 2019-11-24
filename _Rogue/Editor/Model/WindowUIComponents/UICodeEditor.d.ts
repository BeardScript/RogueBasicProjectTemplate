import { WindowUIComponent } from './WindowUIComponent';
export declare class UICodeEditor extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    mode: string;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    modifier?: (value: any) => number;
    invertModifier?: (value: any) => number;
    constructor(obj: Object, prop: string, mode: string, label?: string);
    readonly value: any;
    setOnChange(onChange: (newValue: string, oldValue: string) => void): this;
    setModifiers(modifier: (value: any) => any, invertModifier: (value: any) => any): this;
}
