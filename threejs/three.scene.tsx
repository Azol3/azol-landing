import  { Component } from "react";
import * as THREE from 'three';

class ThreeScene extends Component {
    mount: any;



    componentDidMount() {
        //scene
        const scene = new THREE.Scene();
        const camera =  new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight);
        camera.position.z = 3.5;
        camera.position.x = -1.5;

        scene.add(camera);

        
        const geometry = new THREE.BoxGeometry(1.5, 1, .1);
        const material = new THREE.MeshBasicMaterial( {color: 0x78d9fc} );
        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);
        
        const renderer = new THREE.WebGLRenderer({
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);


        const cursor = { x: 1.5, y: 0 }
        
        window.addEventListener('mousemove', (e) => {
            cursor.x = e.clientX / window.innerWidth + 0.5;
            cursor.y = e.clientY / window.innerHeight - 0.5;
        })

        const tick = () => {
            window.requestAnimationFrame(tick);

            mesh.rotation.y += 0.005;
            mesh.rotation.x += 0.001;

            const cameraX = cursor.x;
            const cameraY = cursor.y;


            // camera.position.x += (-cameraX - camera.position.x)/10;
            // camera.position.y += (cameraY - camera.position.y)/10;


            renderer.render(scene, camera);
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