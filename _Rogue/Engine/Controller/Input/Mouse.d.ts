export declare class Mouse {
    private _x;
    private _y;
    private _isMoving;
    private _isLeftButtonDown;
    private _isLeftButtonHold;
    private _isLeftButtonUp;
    private _isRightButtonDown;
    private _isRightButtonUp;
    private _enabled;
    readonly x: number;
    readonly y: number;
    readonly isMoving: boolean;
    readonly isLeftButtonDown: boolean;
    readonly isLeftButtonHold: boolean;
    readonly isLeftButtonUp: boolean;
    readonly isRightButtonDown: boolean;
    readonly isRightButtonUp: boolean;
    enabled: boolean;
    constructor();
    private onMouseMove;
    private onMouseDown;
    private onMouseUp;
}
