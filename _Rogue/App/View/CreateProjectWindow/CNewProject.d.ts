import * as React from 'react';
import './CNewProject.css';
interface Props extends React.Props<CNewProject> {
    history: any;
}
interface State {
    location: string;
    projectName: string;
    isValidProjectName: boolean;
    isLoading: boolean;
}
export default class CNewProject extends React.Component<Props, State> {
    state: {
        location: string;
        projectName: string;
        isValidProjectName: boolean;
        isLoading: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    getDefaultPath(): string;
    validateProjectName(): boolean;
    renameTemplateProject(): void;
    openProject(projectId: string): void;
    createProject(): void;
    unzipTemplateProject(): void;
    handleCreateProject: () => void;
    handleOpenProject: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleOnKeyDown: (e: React.KeyboardEvent<Element>) => void;
    render(): JSX.Element;
}
export {};
