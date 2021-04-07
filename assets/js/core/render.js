import * as THREE from "../../../node_modules/three/build/three.module.js";

export default class Render {
    static scene;
    static canvas;
    static renderer;

    constructor() {
        throw new Error("This is a static class");
    }

    static init(sceneClass) {
        this.setupRenderer();
        this.run(sceneClass);
        this.gameLoop();
        this.setupEventHandlers();
    }

    static setupRenderer() {
        this.canvas = document.querySelector("#canvas");
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setClearColor(0x8b8e7b, 1.0);
        this.renderer.shadowMap.enabled = true;
        // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }

    static run(sceneClass) {
        this.scene = new sceneClass();
    }

    static setupEventHandlers() {
        this.onWindowResize();
        window.addEventListener("resize", this.onWindowResize.bind(this));
    }

    static gameLoop() {
        this.scene.update();
        this.scene.render();
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    static onWindowResize() {
        const pixelRatio = window.devicePixelRatio;
        const width = (this.canvas.clientWidth * pixelRatio) | 0;
        const height = (this.canvas.clientHeight * pixelRatio) | 0;
        this.renderer.setSize(width, height, false);
        this.scene.onWindowResize(width / height);
    }
}
