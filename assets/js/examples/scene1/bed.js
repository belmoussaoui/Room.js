import GameObject from "../../core/game_object.js";
import * as THREE from "../../../../node_modules/three/build/three.module.js";

export default class Bed extends GameObject {
    constructor(...args) {
        super(args);
    }

    create() {
        this.createPart1();
        this.createPart2();
        this.createPart3();
    }

    createPart1() {
        const geom = new THREE.BoxGeometry(2, 0.15, 1);
        const mat = new THREE.MeshPhongMaterial({
            color: 0x734125,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom, mat);
        this.object.castShadow = false;
        this.object.receiveShadow = true;

        this.add(this.object);
    }

    createPart2() {
        const geom = new THREE.BoxGeometry(1.49, 0.15, 0.98);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xb04542,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom, mat);
        this.object.castShadow = false;
        this.object.receiveShadow = true;
        this.object.translateY(0.15);
        this.object.translateX(-0.23);
        this.add(this.object);

        const geom3 = new THREE.BoxGeometry(0.3, 0.16, 1);
        const mat3 = new THREE.MeshPhongMaterial({
            color: 0xb04542,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom3, mat3);
        this.object.castShadow = false;
        this.object.receiveShadow = true;
        this.object.translateY(0.165);
        this.object.translateX(0.36);
        this.add(this.object);

        const geom1 = new THREE.BoxGeometry(0.5, 0.15, 1);
        const mat2 = new THREE.MeshPhongMaterial({
            color: 0xcdcdcd,
            flatShading: true,
        });
        this.object = new THREE.Mesh(geom1, mat2);
        this.object.castShadow = false;
        this.object.receiveShadow = true;
        this.object.translateY(0.15);
        this.object.translateX(0.76);
        this.add(this.object);
    }

    createPart3() {
        const geom = new THREE.BoxGeometry(0.35, 0.15, 0.6);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xcdcdcd,
            flatShading: true,
        });

        // for find the vertices to change...
        // const v = geom.vertices.map((e) => e.y);
        // console.log(v.indexOf(Math.max(...v)));

        // for (const v of geom.vertices) {
        //     if (v.y > 0.2) {
        //         v.y -= 0.01;
        //     }

        //     if (v.z > 0.2) {
        //         v.z -= 0.03;
        //     }
        //     if (v.z < -0.2) {
        //         v.z += 0.03;
        //     }
        // }

        // geom.vertices[17].x += 0.02;
        // geom.vertices[21].x -= 0.02;
        // geom.vertices[19].z -= 0.04;
        // geom.vertices[23].z += 0.04;
        this.object = new THREE.Mesh(geom, mat);
        this.object.castShadow = false;
        this.object.receiveShadow = true;

        this.object.translateZ(-0.03);
        this.object.translateY(0.25);
        this.object.translateX(0.75);
        // this.object.scale.set(0.8, 0.4, 1.3);

        this.add(this.object);
    }
}
