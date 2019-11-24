import { WindowUIComponent } from "./WindowUIComponent";
export declare class UIObjectField extends WindowUIComponent {
    private _isClearable;
    component: string;
    obj: Object;
    prop: string;
    label: string;
    type: 'Object3D' | 'Texture' | 'Material' | 'Component';
    onChange: (newValue: any, oldValue: any, uiComponent: WindowUIComponent) => void;
    onClear: (oldValue: any, uiComponent: UIObjectField) => void;
    constructor(object: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    constructor(type: 'Object3D' | 'Texture' | 'Material' | 'Component', object: Object, prop: string, label?: string, onChange?: (newValue: any, oldValue: any) => void);
    readonly value: any;
    readonly isClearable: boolean;
    setOnChange(onChange: (newValue: any, oldValue: any, uiComponent: WindowUIComponent) => void): this;
    setOnClear(onClear: (oldValue: any, uiComponent: UIObjectField) => void): this;
    setClearable(isClearable: boolean): this;
    clear(): void;
}
