import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Book extends GameObject {
    constructor(...args) {
        super(args);
    }

    initialize(color = 0xb04542) {
        this.c = color;
    }

    create() {
        let geom1 = new THREE.BoxBufferGeometry(0.3, 0.02, 0.2);
        let mat1 = new THREE.MeshPhongMaterial({
            color: this.c,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.add(this.object);

        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(0.05);

        let geom2 = new THREE.BoxBufferGeometry(0.3, 0.07, 0.01);
        this.object = new THREE.Mesh(geom2, mat1);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.object.translateZ(-0.105);
        this.object.translateY(0.025);
        this.add(this.object);

        mat1 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });

        geom1 = new THREE.BoxBufferGeometry(0.28, 0.029, 0.19);
        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.object.translateZ(-0.01);
        this.object.translateY(0.025);
        this.add(this.object);
    }
}
