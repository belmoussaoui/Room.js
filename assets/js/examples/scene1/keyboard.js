import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Desktop extends GameObject {
    constructor(...args) {
        super(args);
    }

    create() {
        const geom = new THREE.BoxBufferGeometry(0.15, 0.02, 0.4);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom, mat);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
    }
}
