import { UIGroup, UITreeNode, WindowUIComponent } from 'rogue-editor';
import FileManager from './FileManager';
export declare class UIIconView extends WindowUIComponent {
    component: string;
    fileManager: FileManager;
    selectedIconGroup: UIGroup[];
    selectionBgColor: string;
    update: boolean;
    ui: UIGroup;
    constructor(fileManager: any);
    initIconGroupEvents(item: UIGroup, treeNode: UITreeNode): void;
    getSelectedNodes(): UITreeNode[];
    selectItem(item: UIGroup): void;
    deselectItems(): void;
    getIconGroup(treeNode: UITreeNode): UIGroup;
    generateNodesContent(): void;
}
