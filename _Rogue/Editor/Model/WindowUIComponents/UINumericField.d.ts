import { WindowUIComponent } from './WindowUIComponent';
export declare class UINumericField extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    value: number;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    modifier?: (value: any) => number;
    invertModifier?: (value: any) => number;
    constructor(obj: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    setOnChange(onChange: (newValue: number, oldValue: number) => void): this;
    setModifiers(modifier: (value: any) => number, invertModifier: (value: any) => number): this;
}
