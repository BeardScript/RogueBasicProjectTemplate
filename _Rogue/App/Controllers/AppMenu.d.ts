import { UITreeNode } from 'rogue-editor';
import UIFolder from '../../EditorWindows/FileManager/UIFolder';
export default class AppMenu {
    private constructor();
    static init(): void;
    private static newProject;
    private static openProject;
    private static appSettings;
    private static saveScene;
    private static validateObjectTreeNode;
    static getAddObjectMenu(node?: UITreeNode): any;
    static getAddFileMenu(treeNode?: UIFolder): {
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
    };
}
