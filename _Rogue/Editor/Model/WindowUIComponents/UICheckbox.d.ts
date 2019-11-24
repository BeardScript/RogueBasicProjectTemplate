import { WindowUIComponent } from './WindowUIComponent';
export declare class UICheckbox extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    value: boolean;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    constructor(obj: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    setOnChange(onChange: (newValue: boolean, oldValue: boolean) => void): this;
}
