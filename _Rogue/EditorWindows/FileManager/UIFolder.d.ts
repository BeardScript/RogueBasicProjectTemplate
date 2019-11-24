import { UITreeNode, UILabel } from 'rogue-editor';
import UIFile from './UIFile';
export default class UIFolder extends UITreeNode {
    data: {
        path: string;
    };
    onSetUILabel(newUILabel?: UILabel, oldUILabel?: UILabel): void;
    add(node: UIFolder | UIFile): void;
    remove(value: any): void;
}
