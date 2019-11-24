export declare class FileServer {
    private constructor();
    private static _server;
    private static _killing;
    static start(): void;
    static restart(): void;
    static stop(): void;
}
