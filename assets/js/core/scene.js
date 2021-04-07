import * as THREE from "../../../node_modules/three/build/three.module.js";
import GameObject from "./game_object.js";
import Camera from "./camera.js";
import Render from "./render.js";

export default class Scene extends THREE.Scene {
    constructor() {
        super();
        this.camera = null;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2(0, 0);
        this.setupLight();
        this.setupCamera();
        this.scale.set(0.3, 0.3, 0.3);
        this.target = null;
    }

    setupLight() {
        this.ambientLight = new THREE.AmbientLight(0xefefef, 0.7);
        this.ambientLight.position.set(0, 10, 0);
        this.add(this.ambientLight);
    }

    setupCamera() {
        this.camera = new Camera();
        window.addEventListener("mousemove", this.setMousePosition.bind(this));
    }

    onWindowResize(aspect) {
        this.camera.resize(aspect);
    }

    update() {
        for (const child of this.children) {
            if (child instanceof GameObject) {
                child.update();
            }
        }
        this.camera.update();
        this.updateRaycaster();
    }

    updateRaycaster() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const children = this.children.filter((e) => e instanceof GameObject);
        let objects = this.raycaster.intersectObjects(children, true);

        // in input
        if (objects.length) {
            let target = objects[0].object;

            // get the game object of mesh
            while (!(target instanceof GameObject) && target.parent) {
                target = target.parent;
            }
            if (this.target && target !== this.target) {
                this.target.onMouseOut();
            }

            this.target = null;

            if (target.interactive) {
                target.onMouseOver();
                this.target = target;
            }
        } else {
            if (this.target) {
                this.target.onMouseOut();
                this.target = null;
            }
        }
    }

    render() {
        Render.renderer.render(this, this.camera);
        for (const child of this.children) {
            if (child instanceof GameObject) {
                child.render();
            }
        }
    }

    terminate() {}

    setMousePosition(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
}
