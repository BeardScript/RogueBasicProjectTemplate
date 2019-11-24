import { Vector3, Euler, Quaternion } from 'three';
import { Component } from 'rogue-engine';
export default class Transform extends Component {
    position: Vector3;
    rotation: Euler;
    rotationQuaternion: Quaternion;
    scale: Vector3;
    translateX(distance: number): void;
    translateY(distance: number): void;
    translateZ(distance: number): void;
    translateOnAxis(axis: Vector3, distance: number): void;
    rotateX(angle: number): void;
    rotateY(angle: number): void;
    rotateZ(angle: number): void;
    rotateOnAxis(axis: Vector3, angle: number): void;
    rotateOnWorldAxis(axis: Vector3, angle: number): void;
    getWorldPosition(target: Vector3): Vector3;
    getWorldDirection(target: Vector3): Vector3;
    getWorldQuaternion(target: Quaternion): Quaternion;
    getWorldScale(target: Vector3): Vector3;
}
