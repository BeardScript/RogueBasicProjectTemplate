import { CSSProperties } from 'react';
export declare class WindowUIComponent {
    private _id;
    private _contextMenu;
    component: string;
    options?: any;
    style: CSSProperties;
    draggable: boolean;
    onClick?: (e: any, uiComponent?: WindowUIComponent) => void;
    onDoubleClick?: (e: any, uiComponent?: WindowUIComponent) => void;
    onMouseDown?: (e: any, uiComponent?: WindowUIComponent) => void;
    onMouseUp?: (e: any, uiComponent?: WindowUIComponent) => void;
    onMouseOver?: (e: any, uiComponent?: WindowUIComponent) => void;
    onMouseEnter?: (e: any, uiComponent?: WindowUIComponent) => void;
    onMouseLeave?: (e: any, uiComponent?: WindowUIComponent) => void;
    onDrag?: (e: any, uiComponent?: WindowUIComponent) => void;
    onDrop?: (e: any, uiComponent?: WindowUIComponent) => void;
    onBeforeCreate?: (e: any, uiComponent?: WindowUIComponent) => void;
    onCreate?: (e: any, uiComponent?: WindowUIComponent) => void;
    onBeforeDestroy?: (e: any, uiComponent?: WindowUIComponent) => void;
    onDestroy?: (e: any, uiComponent?: WindowUIComponent) => void;
    onContextMenu?: (e: any, uiComponent: WindowUIComponent) => void;
    onDragOver: (e: any, uiComponent: WindowUIComponent) => void;
    private _onStateChangedFunctions;
    onStyleChanged: (newValue: CSSProperties, oldValue: CSSProperties) => void;
    constructor();
    readonly id: string;
    readonly contextMenu: any;
    setContextMenu(menuItems: any): this;
    setStyle(style: CSSProperties): this;
    onStateChanged(onStateChanged: (porp: string, component: WindowUIComponent) => void): () => void;
    protected executeSateChangeListeners(prop: string): void;
    setOnMouseDown(onMouseDown: (e: MouseEvent, uiComponent: WindowUIComponent) => void): this;
    setOnMouseUp(onMouseUp: (e: MouseEvent, uiComponent: WindowUIComponent) => void): this;
}