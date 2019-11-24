import { WindowUIComponent } from './WindowUIComponents/WindowUIComponent';
export declare abstract class Inspector {
    abstract getType(): typeof Object.prototype;
    abstract getUI(object: Object): WindowUIComponent[];
}
