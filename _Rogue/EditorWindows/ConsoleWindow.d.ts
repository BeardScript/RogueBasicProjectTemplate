import { EditorWindow, WindowUIComponent } from 'rogue-editor';
import { Log } from 'rogue-engine';
export default class ConsoleWindow extends EditorWindow {
    clearOnPlay: string;
    logsUI: WindowUIComponent[];
    constructor();
    private getLogsUI;
    addLog(log: Log): void;
    render(): void;
}
