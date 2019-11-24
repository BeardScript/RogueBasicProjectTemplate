import { Component } from 'rogue-engine';
export default class Rotator extends Component {
    _props: {
        xRotation: number;
        yRotation: number;
        xTransalion: number;
    };
    start(): void;
    update(): void;
}
