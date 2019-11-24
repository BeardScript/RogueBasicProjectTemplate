import { UIDialog } from '../Model/WindowUIComponents/UIDialog';
export declare class DialogManager {
    private static _dialogs;
    private static _onRegisterDialogCallbacks;
    private static _onOpenDialogCallbacks;
    private static _onCloseDialogCallbacks;
    private constructor();
    static readonly dialogs: UIDialog[];
    static registerDialog<T extends UIDialog>(dialogClass: new (...args: any[]) => T): T;
    static getDialog<T extends UIDialog>(dialogClass: new (...args: any[]) => T): T;
    static openDialog<T extends UIDialog>(dialogClass: new (...args: any[]) => T): void;
    static closeDialog<T extends UIDialog>(dialogClass: new (...args: any[]) => T): void;
    static onRegisterDialog(callback: (dialog: UIDialog) => void): {
        stop: () => void;
    };
    static onOpenDialog(callback: (dialog: UIDialog) => void): {
        stop: () => void;
    };
    static onCloseDialog(callback: (dialog: UIDialog) => void): {
        stop: () => void;
    };
    private static flushOnRegisterDialogCallbacks;
    private static flushOnOpenDialogCallbacks;
    private static flushOnCloseDialogCallbacks;
}
