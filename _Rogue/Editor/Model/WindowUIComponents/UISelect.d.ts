import { WindowUIComponent } from './WindowUIComponent';
export declare class UISelect extends WindowUIComponent {
    component: string;
    obj: Object | Object[];
    prop: string;
    value: any;
    options: {
        name: string;
        value: any;
    }[];
    label: string;
    onChange?: (newValue: any, oldValue: any) => void;
    private _formatValue;
    constructor(obj: Object, prop: string, options: {
        name: string;
        value: any;
    }[], label?: string, onChange?: (newValue: any, oldValue: any) => void);
    formatValue: (value: any) => any;
    setFormatValue(method: (value: any) => any): this;
}
