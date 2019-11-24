export declare class BuildManager {
    private _targetPlatform;
    private _sceneOrder;
    private _path;
    private constructor();
    /** Builds the project with the current configuration */
    build(): void;
    /** Creates a JSON file with the current build configuration */
    saveBuildConfig(): void;
    /** Loads a buildConfig.json file */
    loadBuildConfig(): void;
}
