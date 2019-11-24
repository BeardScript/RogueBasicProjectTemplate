import { Mesh } from 'three';
import { Inspector, WindowUIComponent } from 'rogue-editor';
declare class MeshInspectorClass extends Inspector {
    isGeometryPanelExpanded: boolean;
    isMaterialPanelExpanded: boolean;
    getType(): typeof Mesh;
    getUI(mesh: Mesh): WindowUIComponent[];
    private getGeometryInspector;
    private getMaterialInspector;
    private getBoxGeometryUI;
    private getIcosahedronGeometryUI;
    private getCylinderGeometryUI;
    private getCircleGeometryUI;
    private getLatheGeometryUI;
    private getOctahedronGeometryUI;
    private getPlaneGeometryUI;
    private getRingGeometryUI;
    private getSphereGeometryUI;
    private getTetrahedronGeometryUI;
    private getTorusGeometryUI;
    private getTorusKnotGeometryUI;
    private getTubeGeometryUI;
    private getStandardMaterialUI;
    private getMeshBasicMaterialUI;
    private getMeshDepthMaterialUI;
    private getMeshDistanceMaterialUI;
    private getMeshLambertMaterialUI;
    private getMeshNormalMaterialUI;
    private getMeshMatcapMaterialUI;
    private getMeshPhongMaterialUI;
    private getMeshPhysicalMaterialUI;
    private getMeshToonMaterialUI;
    private getPointsMaterialUI;
    private getShaderMaterialUI;
    private getMaterialUI;
}
export declare let MeshInspector: MeshInspectorClass;
export {};