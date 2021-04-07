import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Chair extends GameObject {
    constructor(...args) {
        super(args);
        this.interactive = true;
    }

    initialize() {
        this.name = "Chair";
    }

    create() {
        const geom = new THREE.BoxGeometry(0.04, 0.35, 0.04);
        geom.vertices[2].z -= 0.01;
        geom.vertices[2].x -= 0.01;
        geom.vertices[3].z += 0.01;
        geom.vertices[3].x -= 0.01;
        geom.vertices[6].z += 0.01;
        geom.vertices[6].x += 0.01;
        geom.vertices[7].z -= 0.01;
        geom.vertices[7].x += 0.01;
        const mat = new THREE.MeshPhongMaterial({
            color: 0x574c4a,
            flatShading: true,
        });
        let object;

        object = new THREE.Mesh(geom, mat);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);
        object.translateY(0.27 - 0.5);
        object.translateX(-0.15);
        object.translateZ(0.15);

        object = new THREE.Mesh(geom, mat);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);
        object.translateY(0.27 - 0.5);
        object.translateX(0.15);
        object.translateZ(0.15);

        object = new THREE.Mesh(geom, mat);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);
        object.translateY(0.27 - 0.5);
        object.translateX(-0.15);
        object.translateZ(-0.15);

        object = new THREE.Mesh(geom, mat);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);
        object.translateY(0.27 - 0.5);
        object.translateX(0.15);
        object.translateZ(-0.15);

        let geom1 = new THREE.BoxGeometry(0.34, 0.03, 0.34);
        let mat1 = new THREE.MeshPhongMaterial({
            color: 0xffffff,
            flatShading: true,
        });
        object = new THREE.Mesh(geom1, mat1);
        object.translateY(0.45 - 0.5);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);

        let geom2 = new THREE.BoxGeometry(0.03, 0.34, 0.34);
        object = new THREE.Mesh(geom2, mat1);
        object.translateY(0.63 - 0.5);
        object.translateX(-0.186);
        object.rotation.set(0, 0, 0.18);
        object.castShadow = true;
        object.receiveShadow = true;
        this.add(object);
    }

    update() {}
}
