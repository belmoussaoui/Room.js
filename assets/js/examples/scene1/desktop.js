import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Desktop extends GameObject {
    constructor(...args) {
        super(args);
    }

    create() {
        this.createPart1();
        this.createPart2();
    }

    createPart1() {
        const geom = new THREE.BoxBufferGeometry(0.8, 0.08, 1.4);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xd0b78a,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom, mat);
        //this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(0.35);

        const geom1 = new THREE.BoxBufferGeometry(0.8, 0.7, 0.1);
        const mat1 = new THREE.MeshPhongMaterial({
            color: 0xd0b78a,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateZ(0.65);

        const geom2 = new THREE.BoxBufferGeometry(0.8, 0.7, 0.1);
        const mat2 = new THREE.MeshPhongMaterial({
            color: 0xd0b78a,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom2, mat2);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateZ(0.2);

        const geom3 = new THREE.BoxBufferGeometry(0.8, 0.7, 0.1);
        const mat3 = new THREE.MeshPhongMaterial({
            color: 0xd0b78a,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom3, mat3);
        this.object.castShadow = true;
        this.object.receiveShadow = true;
        this.object.translateZ(-0.65);
        this.add(this.object);
    }

    createPart2() {
        const geom = new THREE.BoxBufferGeometry(0.8, 0.2, 0.4);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xd0b78a,
            flatShading: true,
        });
        let object = new THREE.Mesh(geom, mat);
        //object.castShadow = true;
        object.receiveShadow = true;
        object.translateZ(0.42);
        object.translateY(0.21);
        object.translateX(0.02);
        this.add(object);

        const geom1 = new THREE.BoxBufferGeometry(0.02, 0.025, 0.08);
        const mat1 = new THREE.MeshPhongMaterial({
            color: 0x4b5167,
            flatShading: true,
        });
        object = new THREE.Mesh(geom1, mat1);
        //object.castShadow = true;
        object.receiveShadow = true;
        object.translateZ(0.425);
        object.translateY(0.21);
        object.translateX(-0.38);
        this.add(object);

        object = new THREE.Mesh(geom1, mat1);
        //object.castShadow = true;
        object.receiveShadow = true;
        object.translateZ(0.425);
        object.translateY(0);
        object.translateX(-0.38);
        this.add(object);

        object = new THREE.Mesh(geom, mat);
        //object.castShadow = true;
        object.receiveShadow = true;
        object.translateZ(0.42);
        object.translateY(0.0);
        object.translateX(0.02);
        this.add(object);
    }
}
