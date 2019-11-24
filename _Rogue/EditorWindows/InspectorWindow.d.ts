import { EditorWindow, UIGroup, WindowUIComponent } from 'rogue-editor';
/** Displays information of any selected object */
export default class InspectorWindow extends EditorWindow implements IInspectorWindow {
    protected _propertyHandlers: IPropertyHandlers;
    protected _uiGroup: UIGroup;
    constructor();
    readonly propertyHandlers: IPropertyHandlers;
    readonly targetContainer: string;
    uiGroup: UIGroup;
    render(): void;
    private renderMultipleObjectsUI;
    private renderSingleObjectUI;
}
export interface IInspectorWindow {
    render(): void;
}
export interface IPropertyHandlers {
    [propName: string]: WindowUIComponent;
}
