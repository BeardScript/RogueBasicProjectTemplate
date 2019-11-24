import { WindowUIComponent } from './WindowUIComponent';
export declare class UITextField extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    value: string;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    constructor(obj: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    setOnChange(onChange: (newValue: string, oldValue: string) => void): this;
}
