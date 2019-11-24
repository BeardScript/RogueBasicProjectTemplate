import { WindowUIComponent } from '../Model/WindowUIComponents/WindowUIComponent';
import { Inspector } from '../Model/Inspector';
declare class InspectorFactoryClass {
    private _registry;
    register(inspector: Inspector): void;
    getInspectorUI(object: Object): WindowUIComponent[];
}
export declare let InspectorFactory: InspectorFactoryClass;
export {};
