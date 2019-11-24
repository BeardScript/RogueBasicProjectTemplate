import { UITreeNode, UILabel } from 'rogue-editor';
export default class UIFile extends UITreeNode {
    data: {
        path: string;
    };
    path: string;
    onSetUILabel(newUILabel?: UILabel, oldUILabel?: UILabel): void;
    add(value: any): void;
    remove(value: any): void;
    getExtensionFromName(path: string): string;
}
