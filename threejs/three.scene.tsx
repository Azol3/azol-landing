import  { Component } from "react";
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

class ThreeScene extends Component {
    mount: any;



    componentDidMount() {



        //scene

        const scene = new THREE.Scene();
        const camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);

        scene.add( new THREE.AmbientLight( 0xffffff, 1 ) ); // optional

        scene.add(camera);
        camera.position.set( -4, 0, 10 );
        const light = new THREE.PointLight( 0xffffff, 6, 100 );
        light.position.set( 50, 50, 50 );
        scene.add( light );


        let model;
        const loader = new GLTFLoader();
        loader.load('/card3d.glb', function (gltf) {
            scene.add(gltf.scene);

            var box = new THREE.Box3().setFromObject(gltf.scene);
            box.getCenter(gltf.scene.position);
            gltf.scene.position.multiplyScalar(-1);
            model = new THREE.Group();
            scene.add(model);
            model.add(gltf.scene);

        });

  
        const renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const tick = () => {
            window.requestAnimationFrame(tick);
            renderer.render(scene, camera);
            if(model) {
                model.rotation.y += 0.005;
                model.rotation.x += 0.001;
                model.rotation.z += 0.001;
            }
        }
        tick();

        this.mount.appendChild(renderer.domElement);
    }


    render() {
        return (
            <div
                ref={mount => {
                    this.mount = mount;
                }}
            ></div>
        )
    }
}

export default ThreeScene;