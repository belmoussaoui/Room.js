import GameObject from "./game_object.js";
import * as THREE from "../../../node_modules/three/build/three.module.js";

export default class Room extends GameObject {
    constructor(...args) {
        super(args);
    }

    initialize(width = 2.8, height = 2.5, depth = 2.8, thickness = 0.15) {
        this.w = width;
        this.h = height;
        this.d = depth;
        this.t = thickness;
    }

    create() {
        this.createFloor();
        this.createWall1();
        this.createWall2();
    }

    createFloor() {
        const geom = new THREE.BoxGeometry(this.w, this.t, this.d);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xfdecef,
            vertexColors: THREE.FaceColors,
        });
        // geom.faces[4].color.setHex(0x232323);
        // geom.faces[5].color.setHex(0x232323);
        this.floor = new THREE.Mesh(geom, mat);
        this.floor.castShadow = true;
        this.floor.receiveShadow = true;
        this.add(this.floor);
    }

    createWall1() {
        const geom = new THREE.BoxGeometry(this.w, this.h, this.t);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xfdf5de,
            vertexColors: THREE.FaceColors,
        });

        geom.faces[8].color.setHex(0xcf7644);
        geom.faces[9].color.setHex(0xcf7644);

        this.wall1 = new THREE.Mesh(geom, mat);
        this.wall1.translateZ(-this.d / 2 + this.t / 2);
        this.wall1.translateY(this.h / 2 + this.t / 2);
        this.wall1.castShadow = true;
        this.wall1.receiveShadow = true;
        this.add(this.wall1);
    }

    createWall2() {
        const geom = new THREE.BoxGeometry(this.t, this.h, this.d);
        const mat = new THREE.MeshPhongMaterial({
            color: 0xfdf5de,
        });
        this.wall2 = new THREE.Mesh(geom, mat);
        this.wall2.translateX(this.w / 2 - this.t / 2);
        this.wall2.translateY(this.h / 2 + this.t / 2);
        this.wall2.castShadow = true;
        this.wall2.receiveShadow = true;
        this.wall2.castShadow = true;
        this.wall2.receiveShadow = true;
        this.add(this.wall2);
    }
}
