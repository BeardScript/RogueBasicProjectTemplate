import { Container } from 'golden-layout';
import { UIGroup } from './WindowUIComponents/UIGroup';
export default abstract class EditorWindow {
    protected _uiGroup: UIGroup;
    protected _onStateChanged: ((prop: string, window: EditorWindow) => void)[];
    private _title;
    private _component;
    private _name;
    private _width;
    private _height;
    private _isOpen;
    private _glContainer;
    constructor();
    uiGroup: UIGroup;
    readonly targetContainer: string;
    title: string;
    component: string;
    name: string;
    width: number;
    height: number;
    isOpen: boolean;
    glContainer: Container;
    onStateChanged(callback: (prop?: string, window?: EditorWindow) => void): void;
    private open;
    private close;
}
