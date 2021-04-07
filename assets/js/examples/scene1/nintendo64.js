import * as THREE from "../../../../node_modules/three/build/three.module.js";
import GameObject from "../../core/game_object.js";
import Render from "../../core/render.js";

const blue = 0x011da9;
const yellow = 0xffc001;
const red = 0xfe2015;
const green = 0x069330;

export default class Nintendo64 extends GameObject {
    constructor(...args) {
        super(args);
        this.interactive = true;
        this.translateY(1.82);
        this.translateX(1.08);
        this.translateZ(1);
        this.rotation.y = -0.3;
        this.scale.set(0.2, 0.2, 0.2);
    }

    initialize() {
        this.name = "N64";
    }

    create() {
        this._createN({ x: 0, y: 0, z: 0.3 });
        this._createN({ x: 0, y: 0, z: -0.3 }, Math.PI);
        this._createN({ x: -0.3, y: 0, z: 0 }, -Math.PI / 2, 2);
        this._createN({ x: 0.3, y: 0, z: 0 }, Math.PI / 2, 2);
    }

    _createN(translate, rotation = 0, style = 0) {
        const n = new THREE.Group();

        const m1 = this._createMesh(style + 1);
        m1.translateX(-0.3);
        m1.castShadow = true;

        const m2 = this._createMesh(style + 1);
        m2.translateX(0.3);
        m2.castShadow = true;
        //m2.rotateY(Math.PI / 2);

        const m3 = this._createMesh(style + 2, 0.825);
        m3.rotateZ(Math.PI / 4 - 0.06);
        m3.castShadow = true;
        //m3.rotateY(Math.PI / 2);

        n.add(m1, m2, m3);

        n.translateX(translate.x);
        n.translateY(translate.y);
        n.translateZ(translate.z);

        n.rotateY(rotation);

        this.add(n);
    }

    _createMesh(type, length = 0.75) {
        const material = new THREE.MeshPhongMaterial({
            flatShading: true,
            vertexColors: THREE.FaceColors,
        });
        let color;

        const geometry = new THREE.BoxGeometry(0.2, length, 0.2);

        for (let i = 0; i <= 11; i++) {
            if (type === 1) {
                color = this._getColor1(i);
            } else if (type === 2) {
                color = this._getColor2(i);
            } else if (type === 3) {
                color = this._getColor3(i);
            } else {
                color = this._getColor4(i);
            }
            geometry.faces[i].color.setHex(color);
        }
        const mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }

    _getColor1(i) {
        if (i < 4) return green;
        if (i < 8) return yellow;
        if (i < 12) return blue;
    }

    _getColor2(i) {
        if (i < 2) return green;
        if (i < 4) return red;
        if (i < 8) return yellow;
        if (i < 12) return blue;
    }

    _getColor3(i) {
        if (i < 4) return blue;
        if (i < 8) return yellow;
        if (i < 12) return green;
    }

    _getColor4(i) {
        if (i < 2) return blue;
        if (i < 4) return red;
        if (i < 8) return yellow;
        if (i < 12) return green;
    }

    onMouseOver() {
        super.onMouseOver();
        //this.label.style.opacity = 1;
    }

    onMouseOut() {
        super.onMouseOut();
        //this.label.style.opacity = 0;
    }

    onMouseClick() {
        super.onMouseClick();
    }

    update() {
        //this.rotation.y += 0.005;
    }

    render() {
        super.render();
    }
}
