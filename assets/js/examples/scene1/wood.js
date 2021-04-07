import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

let id = 0;
export default class Wood extends GameObject {
    constructor(...args) {
        id++;
        super(args);
    }

    initialize(floor) {
        this.floor = floor;
    }

    create() {
        const geom = new THREE.BoxGeometry(0.285, 0.025, 2.8 - 0.15);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xc2a182,
            vertexColors: THREE.FaceColors,
            flatShading: true,
        });
        if (id !== 1) {
            geom.faces[2].color.setHex(0x898989);
            geom.faces[3].color.setHex(0x898989);
        }
        this.object = new THREE.Mesh(geom, mat);
        //this.object.castShadow = true;
        this.object.receiveShadow = true;

        this.add(this.object);
    }
}
