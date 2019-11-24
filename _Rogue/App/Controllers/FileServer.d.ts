import { ChildProcess } from 'child_process';
export declare class FileServer {
    private constructor();
    private static _server;
    static readonly server: ChildProcess | undefined;
    static start(): void;
    static stop(): void;
}
