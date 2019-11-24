import EditorWindow from "../Model/EditorWindow";
/**
 * A Singleton that manages the editor windows
 */
export declare class WindowManager {
    private static _windows;
    private static _hoveringWindow;
    private static _focusedWindow;
    private constructor();
    /** An array containing all editor windows */
    static readonly windows: EditorWindow[];
    static hoveringWindow: EditorWindow | undefined;
    static focusedWindow: EditorWindow;
    static registerWindow<T extends EditorWindow>(windowClass: new (...args: any[]) => T): T;
    static getWindow<T extends EditorWindow>(windowClass: new (...args: any[]) => T): T;
    static openWindow<T extends EditorWindow>(windowClass: new (...args: any[]) => T): void;
    static closeWindow<T extends EditorWindow>(windowClass: new (...args: any[]) => T): void;
}
