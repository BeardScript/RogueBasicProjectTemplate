import { UIGroup } from './UIGroup';
import { WindowUIComponent } from './WindowUIComponent';
export declare class UIExpansionPanel extends WindowUIComponent {
    component: string;
    private _isExpanded;
    private _header;
    private _label;
    private _body;
    private _ui;
    onExpand: (panel: UIExpansionPanel) => void;
    onFold: (panel: UIExpansionPanel) => void;
    constructor(label: WindowUIComponent, body: WindowUIComponent[]);
    isExpanded: boolean;
    readonly ui: UIGroup;
    readonly header: UIGroup;
    readonly label: WindowUIComponent;
    toggleExpand(): void;
    setExpanded(value: boolean): this;
    setOnExpand(onExpand: (panel: UIExpansionPanel) => void): this;
    setOnFold(onFold: (panel: UIExpansionPanel) => void): this;
    private handleExpand;
}
