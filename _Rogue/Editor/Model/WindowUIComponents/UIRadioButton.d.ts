import { WindowUIComponent } from './WindowUIComponent';
export declare class UIRadioButton extends WindowUIComponent {
    component: string;
    name: string;
    obj: Object | Object[];
    prop: string;
    selectedValue: string;
    value: any;
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    constructor(name: string, obj: Object, prop: string, selectedValue: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    setOnChange(callback: (newValue: any, oldValue: any) => void): this;
}
