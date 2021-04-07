import * as THREE from "../../../node_modules/three/build/three.module.js";
import Render from "./render.js";
import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

export default class Camera extends THREE.OrthographicCamera {
    constructor(size = 2, near = 0.1, far = 20) {
        super(-size / 2, size / 2, size / 2, -size / 2, near, far);
        this.controls = null;
        this.object = null;
        this.setupBack();
        this.setupPosition();
        this.setupControl();
    }

    setupBack() {
        this.back = document.querySelector("#back");
        this.back.addEventListener("click", (e) => {
            this.lookRoom();
        });
    }

    resize(aspect) {
        this.left = -aspect;
        this.right = aspect;
        this.refresh();
    }

    refresh() {
        this.updateProjectionMatrix();
    }

    lookGameObject(object, pos) {
        this.object = object;
        this.controls.target.set(pos.x, pos.y, pos.z);
        this.controls.minZoom = 5;
        this.controls.maxZoom = 9;
        //  this.controls.maxPolarAngle = Math.PI;
        //   this.controls.minAzimuthAngle = Infinity;
        this.zoom = this.controls.minZoom;
        this.refresh();
        this.back.style.display = "initial";
    }

    setupPosition() {
        this.position.x = -3;
        this.position.y = 3;
        this.position.z = 3;
        //  this.position.y = 100;
    }

    setupControl() {
        this.controls = new OrbitControls(this, Render.canvas);
        this.lookRoom();
    }

    lookRoom() {
        this.controls.minZoom = 0.8;
        this.controls.maxZoom = 2.5;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.maxAzimuthAngle = 0;
        this.controls.minAzimuthAngle = -Math.PI / 2;
        this.controls.target.set(0, 0.4, 0);
        this.zoom = 1;
        this.object = null;
        this.back.style.display = "none";
        this.refresh();
    }

    update() {
        this.controls.update();
    }
}
