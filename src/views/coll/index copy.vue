<template>
  <div>
    <canvas id="three"></canvas>
  </div>
</template>

<script>
import * as THREE from "three"; //引入three.js
import { MTLLoader } from "three-obj-mtl-loader"; //引入加载外部模型
// const OrbitControls = require("three-orbit-controls")(THREE);  //引入控制器
import { OBJLoader } from "three-obj-mtl-loader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer";
export default {
  data() {
    return {};
  },

  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 1,我们首先为Three.js创建一个scene:
      const scene = new THREE.Scene()
      // 2,scene可以理解为我们将要渲染的环境、背景。我们可以给它换个颜色:
      scene.background = new THREE.Color('#eee')
      // 3,接下来我们拿到canvas:
      const canvas = document.querySelector('#three')
      // 4,创建一个WebGLRenderer，将canvas和配置参数传入:
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
      

      // /**
      //  * 1，创建场景
      //  *
      //  */
      // const scene = new THREE.Scene();
      // /**
      //  * 2，创建摄像机
      //  * 参数配置
      //  * 第一个参数是视野角度（FOV）
      //  * 第二个参数是长宽比（aspect ratio）
      //  * 接下来的两个参数是近截面（near）和远截面（far）
      //  *
      //  */
      // const camera = new THREE.PerspectiveCamera(
      //   60,
      //   window.innerWidth / window.innerHeight,
      //   0.5,
      //   1000
      // );
      // /**
      //  * 3，将元素放入渲染区
      //  *
      //  */
      // const renderer = new THREE.WebGLRenderer();
      // renderer.setSize(window.innerWidth, window.innerHeight);
      // document.getElementById("three-3d").appendChild(renderer.domElement);
      // /**
      //  * 4，设置2d平面图图元
      //  *
      //  */
      // const geometry = new THREE.SphereGeometry(
       
      // );
      // // const radius = 7; // ui: radius
      // // const widthSegments = 12; // ui: widthSegments
      // // const heightSegments = 8; // ui: heightSegments
      // // const phiStart = Math.PI * 0.25; // ui: phiStart
      // // const phiLength = Math.PI * 1.5; // ui: phiLength
      // // const thetaStart = Math.PI * 0.25; // ui: thetaStart
      // // const thetaLength = Math.PI * 0.5; // ui: thetaLength
      // // const geometry = new THREE.SphereGeometry(
      // //   radius,
      // //   widthSegments,
      // //   heightSegments,
      // //   phiStart,
      // //   phiLength,
      // //   thetaStart,
      // //   thetaLength
      // // );
      // /**
      //  * 5，设置材质
      //  *
      //  */
      // const material = new THREE.MeshBasicMaterial();
      // /**
      //  * 6，设置网格
      //  *
      //  */
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);
      // camera.position.z = 5;
      // /**
      //  * 添加背景图
      //  *
      //  */
      // const loader = new THREE.TextureLoader();
      // // const bgTexture = loader.load("/model/tex0.png");
      // // scene.background = bgTexture;

      // /**
      //  * 7，加载obj文件和mtl文件
      //  *
      //  */
      // const mtlLoader = new MTLLoader();
      // const objLoader = new OBJLoader();
      // mtlLoader.load("/model/3.mtl", (mtl) => {
      //   mtl.preload();
      //   objLoader.setMaterials(mtl);
      //   for (const material of Object.values(mtl.materials)) {
      //     material.side = THREE.DoubleSide;
      //   }
      //   objLoader.load("/model/3.obj", (root) => {
      //     scene.add(root);
      //   });
      // });
      // /**
      //  * 8，控制是否能拖动系列
      //  *
      //  */
      // const controls = new OrbitControls(camera, renderer.domElement); // 创建控制器变量
      // controls.autoRotate = true; //是否自动旋转
      // controls.enableZoom = true; //是否可以缩放
      // /**
      //  * 9，放入动画
      //  *
      //  */
      // function animate() {
      //   requestAnimationFrame(animate);
      //   renderer.render(scene, camera);
      //   renderer.setClearColor("white", 1.0); // 改变相机渲染器背景色
      // }
      // animate();
    },
  },
};
</script>

<style  scoped>
.three-boss{
  margin-top: 100px;
  height: 800px;
  background: red;
  width: 90%;
  margin-left: 5%;
}

.height-null{
  width: 100%;
  height: 100%;
}
</style>
