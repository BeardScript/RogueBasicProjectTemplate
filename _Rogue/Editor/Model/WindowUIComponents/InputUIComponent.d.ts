import { WindowUIComponent } from './WindowUIComponent';
export declare abstract class InputUIComponent extends WindowUIComponent {
    abstract component: string;
    obj: Object | Object[];
}
