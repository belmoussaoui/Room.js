import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Screen extends GameObject {
    constructor(...args) {
        super(args);
    }

    create() {
        const geom = new THREE.BoxBufferGeometry(0.02, 0.3, 0.51);
        const mat = new THREE.MeshPhongMaterial({
            color: 0x444341,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom, mat);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);

        let geom0 = new THREE.BoxBufferGeometry(0.001, 0.3, 0.5);
        let mat0 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom0, mat0);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateX(0.0097);

        let geom1 = new THREE.BoxBufferGeometry(0.02, 0.02, 0.55);
        let mat1 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(0.16);

        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(-0.16);

        geom1 = new THREE.BoxBufferGeometry(0.02, 0.3, 0.02);

        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateZ(-0.265);

        this.object = new THREE.Mesh(geom1, mat1);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateZ(0.265);

        let geom2 = new THREE.BoxBufferGeometry(0.02, 0.07, 0.1);
        let mat2 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom2, mat2);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(-0.205);

        geom2 = new THREE.BoxBufferGeometry(0.1, 0.02, 0.2);
        mat2 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom2, mat2);
        this.object.castShadow = true;
        //this.object.receiveShadow = true;
        this.add(this.object);
        this.object.translateY(-0.25);
    }
}
