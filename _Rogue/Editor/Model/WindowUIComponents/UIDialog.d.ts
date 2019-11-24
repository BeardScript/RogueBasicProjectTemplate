import { UIGroup } from './UIGroup';
import { WindowUIComponent } from './WindowUIComponent';
export declare class UIDialog extends UIGroup {
    private _header;
    private _title;
    private _body;
    private _acceptButton;
    private _cancelButton;
    private _onDisplay;
    private _onHide;
    private _onAccept;
    private _onCancel;
    constructor(title: WindowUIComponent, body: WindowUIComponent[]);
    onDisplay(onDisplay: (uiDialog: UIDialog) => void): this;
    onHide(onHide: (uiDialog: UIDialog) => void): this;
    onAccept(onAccept: (uiDialog: UIDialog) => void): this;
    onCancel(onCancel: (uiDialog: UIDialog) => void): this;
    showAcceptButton(show: boolean): this;
    showCancelButton(show: boolean): this;
    setAcceptButtonText(text: string): this;
    setCancelButtonText(text: string): this;
    isVisible: boolean;
    readonly title: WindowUIComponent;
    readonly header: UIGroup;
}
