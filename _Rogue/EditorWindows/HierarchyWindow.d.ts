import { Scene, Object3D } from 'three';
import { EditorWindow, UIGroup, UITreeNode } from 'rogue-editor';
export default class HierarchyWindow extends EditorWindow {
    protected _uiGroup: UIGroup;
    private _lastSelectedNode;
    private _selectedNodes;
    private _expandedNodes;
    private _nodesMap;
    constructor();
    readonly selectedNodes: UITreeNode[];
    uiGroup: UIGroup;
    render(): void;
    initTreeNodeEvents(treeNode: UITreeNode): void;
    private handleDuplicate;
    private handleCopy;
    private handlePaste;
    private handleDrop;
    expandParentNode(treeNode: UITreeNode): void;
    selectNode(treeNode: UITreeNode | undefined): void;
    getSelectedStatus(object: Object3D): boolean;
    findTreeNodeByObject(object3D: Object3D): UITreeNode | undefined;
    addNode(object: Object3D): void;
    removeNode(object: Object3D): void;
    generateTreeNode(object: Object3D, parentNode: UITreeNode): void;
    generateSceneTree(scene: Scene | Object3D, tree: UITreeNode): void;
}
