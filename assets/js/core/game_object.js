import * as THREE from "../../../node_modules/three/build/three.module.js";
import Render from "./render.js";

export default class GameObject extends THREE.Object3D {
    constructor(args) {
        super();
        this.interactive = false;
        this.isMouseOver = false;
        this.name = "";
        this.initialize(...args);
        this.setupLabel();
        this.setupEvent();
        this.create();
    }

    setupLabel() {
        this.label = document.createElement("span");
        this.label.textContent = this.name;
        document.querySelector("#labels").appendChild(this.label);
    }

    setupEvent() {
        window.addEventListener("click", (e) => {
            if (this.interactive && this.isMouseOver) {
                this.onMouseClick(e);
            }
        });
    }

    onMouseOver() {
        this.isMouseOver = true;
        document.body.style.cursor = "pointer";
    }

    onMouseOut() {
        this.isMouseOver = false;
        document.body.style.cursor = "auto";
    }

    onMouseClick() {
        const temp = new THREE.Vector3();
        this.updateWorldMatrix(true, false);
        this.getWorldPosition(temp);
        Render.scene.camera.lookGameObject(this, temp);
    }

    initialize() {}

    create() {}

    update() {}

    render() {
        //this.renderLabel();
    }

    renderLabel() {
        const temp = new THREE.Vector3();

        this.updateWorldMatrix(true, false);
        this.getWorldPosition(temp);

        temp.project(Render.scene.camera);

        const x = (temp.x * 0.5 + 0.5) * Render.canvas.clientWidth;
        // this.span.getBoundingClientRect().width +
        // 5;
        const y = (temp.y * -0.5 + 0.5) * Render.canvas.clientHeight - 5;
        this.label.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
    }
}
