import { EditorWindow, UIGroup, UITreeNode } from 'rogue-editor';
import UIFile from './UIFile';
import UIFolder from './UIFolder';
import { Material, Object3D } from 'three';
export default class FileManager extends EditorWindow {
    protected _uiGroup: UIGroup;
    private _currentFolderPath;
    private _selectedFolderItems;
    private _fileWatchers;
    private _selectedNodes;
    private _treeRoot;
    private _iconView;
    private _splitView;
    private _selectedPath;
    private _expandedNodes;
    constructor();
    readonly targetContainer: string;
    uiGroup: UIGroup;
    readonly selectedNodes: UITreeNode[];
    splitView: boolean;
    createFolder(name: string): any;
    createFolder(folderPath: string, name: string): any;
    handleObjectDrop(e: any): void;
    handleSystemObjectDrop(e: any): void;
    findTreeNodeFromPath(path: string): any;
    private findTreeNodeFromPathRecursive;
    createFile(name: string, extension: string, content: string, override?: boolean): string | undefined;
    createMaterialFile(material: Material, fileName: string, override?: boolean): string | undefined;
    createPrefabFile(object: Object3D): void;
    private validateFileName;
    openFile(treeNode: UIFile): void;
    findInFolder(treeNode: UIFile | UIFolder): void;
    render(): void;
    createSceneFile(name: string): void;
    toggleExpandNode(treeNode: UITreeNode): void;
    expandParentNode(treeNode: UITreeNode): void;
    selectNode(treeNode: UITreeNode): void;
    initTreeNodeEvents(treeNode: UITreeNode): void;
    getExtensionFromPath(filePath: string): string;
    getNameFromPath(filePath: string, omitExtension?: boolean): string;
    deleteTreeNode(treeNode: UITreeNode): void;
    setTreeNodeVisibility(treeNode: UIFile): void;
    initSelection(treeNode: UIFolder | UIFile): void;
    private getName;
    generateFileTree(tree: UIFolder): void;
    generateUserScriptBundle(): void;
    getFolderContextMenu(treeNode: UIFolder): ({
        enabled: boolean;
        label: string;
        submenu: ({
            label: string;
            click: () => void;
            type?: undefined;
        } | {
            type: string;
            label?: undefined;
            click?: undefined;
        })[];
    } | {
        type: string;
        label?: undefined;
        click?: undefined;
    } | {
        label: string;
        click: () => void;
        type?: undefined;
    })[];
    private watchFSItem;
    private triggerGenerateUserScriptBundleByPath;
    private clearFSItemWatchers;
}
