import * as THREE from "../../../../node_modules/three/build/three.module.js";
import Room from "../../core/room.js";
import Scene from "../../core/scene.js";
import Shelf from "./shelf.js";
import Wood from "./wood.js";
import Bed from "./bed.js";
import Desktop from "./desktop.js";
import Keyboard from "./keyboard.js";
import Screen from "./screen.js";
import Nintendo64 from "./nintendo64.js";
import Book from "./book.js";
import Chair from "./chair.js";

export default class Scene_Example1 extends Scene {
    constructor() {
        super();
        this.createGameObjects();
    }

    setupLight() {
        super.setupLight();
        this.directionalLight = new THREE.DirectionalLight(0xd68251, 0.65);
        this.directionalLight.position.set(-6, 2, -4);
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.add(this.directionalLight);
        this.directionalLight.castShadow = true;

        this.l = new THREE.PointLight(0xffffff, 0.25, 10);
        this.l.position.set(0.3, 1.5, 2.5);
        this.add(this.l);
        //this.directionalLight.castShadow = true;

        // const light = new THREE.PointLight(0xff0000, 1, 0.5);
        // light.position.set(0, 1, 0);
        // this.add(light);
        // light.castShadow = true;
    }

    createGameObjects() {
        this.createRoom();
        this.createShelfs();
        this.createWoods();
        this.createBed();
        this.createDesktop();
        this.createBooks();
        this.createChair();
        this.createNintendo64();
    }

    createRoom() {
        this.room = new Room();
        this.add(new Room());
    }

    createShelfs() {
        this.shelf1 = new Shelf();
        // this.shelf1.object.receiveShadow = false;
        this.shelf1.translateY(1.3);
        this.shelf1.translateZ(-0.6);
        this.shelf1.translateX(this.room.wall2.position.x - 0.25);
        this.shelf1.rotation.set(0, Math.PI / 2, 0);
        this.add(this.shelf1);

        this.shelf2 = new Shelf();
        this.shelf2.translateY(1.7);
        this.shelf2.translateZ(0.6);
        this.shelf2.translateX(this.room.wall2.position.x - 0.25);
        this.shelf2.rotation.set(0, Math.PI / 2, 0);
        this.add(this.shelf2);
    }

    createWoods() {
        this.woods = [];
        for (let i = 0; i < 9; i++) {
            const wood = new Wood();
            wood.translateY(0.0925);
            wood.translateX(-1.25 + i * 0.295);
            wood.translateZ(0.075);
            this.add(wood);
            this.woods.push(wood);
        }
    }

    createBed() {
        this.bed = new Bed();
        this.bed.translateY(0.18);
        this.bed.translateZ(-0.74);
        this.bed.translateX(0.25);
        this.add(this.bed);
    }

    createDesktop() {
        this.desktop = new Desktop();
        this.desktop.translateZ(0.6);
        this.desktop.translateY(0.45);
        this.desktop.translateX(this.room.wall2.position.x - 0.4);
        this.add(this.desktop);

        this.keyboard = new Keyboard();
        this.keyboard.translateY(0.85);
        this.keyboard.translateX(0.78);
        this.keyboard.translateZ(0.6);
        this.add(this.keyboard);

        this.screen1 = new Screen();
        this.screen1.translateY(1.1);
        this.screen1.translateX(0.95);
        this.screen1.translateZ(0.35);
        this.screen1.rotation.set(0, 0.3, 0);
        this.add(this.screen1);

        this.screen2 = new Screen();
        this.screen2.translateY(1.1);
        this.screen2.translateX(1.0);
        this.screen2.translateZ(0.95);
        this.screen2.rotation.set(0, -0.1, 0);
        this.add(this.screen2);
    }

    createBooks() {
        this.books = [];
        let book;

        book = new Book();
        book.translateY(0.85);
        book.translateX(0.72);
        book.translateZ(0.12);
        book.rotation.set(0, -0.45, 0);
        book.scale.set(0.75, 0.75, 0.75);
        this.add(book);
        this.books.push(book);

        book = new Book(0xd3b558);
        book.translateY(1.36);
        book.translateX(1.05);
        book.translateZ(-0.95);
        book.rotation.set(0, 1.2, 0);
        book.scale.set(1.2, 1.1, 1.5);
        this.add(book);
        this.books.push(book);

        book = new Book(0x638e9f);
        book.translateY(1.53);
        book.translateX(1.08);
        book.translateZ(-0.6);
        book.rotation.set(0, Math.PI / 2, Math.PI / 2);
        book.scale.set(1.2, 1.2, 1.3);
        this.add(book);
        this.books.push(book);

        book = new Book();
        book.translateY(1.93);
        book.translateX(1.11);
        book.translateZ(0.2);
        book.rotation.set(0, Math.PI / 2, Math.PI / 2);
        book.scale.set(1.2, 1.2, 1.3);
        this.add(book);
        this.books.push(book);

        book = new Book();
        book.translateY(1.9);
        book.translateX(1.148);
        book.translateZ(0.6);
        book.rotation.set(0, Math.PI / 2, Math.PI / 2);
        book.scale.set(1, 0.8, 1);
        this.add(book);
        this.books.push(book);

        book = new Book(0x51965e);
        book.translateY(1.905);
        book.translateX(1.148);
        book.translateZ(0.515);
        book.rotation.set(0, Math.PI / 2, Math.PI / 2 + 0.2);
        book.scale.set(1, 0.8, 1);
        this.add(book);
        this.books.push(book);

        book = new Book(0xd3b558);
        book.translateY(1.905);
        book.translateX(1.148);
        book.translateZ(0.457);
        book.rotation.set(0, Math.PI / 2, Math.PI / 2 + 0.2);
        book.scale.set(1, 0.8, 1);
        this.add(book);

        this.books.push(book);
    }

    createChair() {
        this.chair = new Chair();
        this.chair.rotation.set(0, -0.5, 0);
        this.chair.translateZ(0.1);
        this.chair.translateX(0.4);
        this.chair.translateY(0.55);
        this.chair.scale.set(1.1, 1.1, 1.1);
        this.add(this.chair);
    }

    createNintendo64() {
        this.nintendo64 = new Nintendo64();
        this.add(this.nintendo64);
    }
}
