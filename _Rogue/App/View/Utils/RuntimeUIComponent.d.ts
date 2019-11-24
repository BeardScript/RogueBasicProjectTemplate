import * as React from "react";
declare class DestroyedReceipt {
}
export default class RuntimeUIComponent extends React.Component {
    private unwatchFunctions;
    watch(expression: () => any, deep?: boolean, onChange?: (value: any, oldValue: any) => any, noShallow?: boolean, priorityKey?: string): void;
    componentWillUnmount(): DestroyedReceipt;
}
export {};
