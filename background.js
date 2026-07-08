const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
3000
);

camera.position.z = 120;

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.domElement.style.position="fixed";
renderer.domElement.style.inset="0";
renderer.domElement.style.zIndex="-50";

document.body.appendChild(renderer.domElement);

const stars=[];

const geometry=new THREE.SphereGeometry(0.18,6,6);

const material=new THREE.MeshBasicMaterial({
color:0xffffff
});

for(let i=0;i<4000;i++){

const star=new THREE.Mesh(geometry,material);

star.position.x=(Math.random()-0.5)*1200;
star.position.y=(Math.random()-0.5)*1200;
star.position.z=(Math.random()-0.5)*1200;

scene.add(star);

stars.push(star);

}

let mouseX=0;
let mouseY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=(e.clientX/window.innerWidth-.5)*0.5;
mouseY=(e.clientY/window.innerHeight-.5)*0.5;

});

function animate(){

requestAnimationFrame(animate);

scene.rotation.y+=0.00015;

scene.rotation.x+=0.00003;

scene.rotation.y+=(mouseX-scene.rotation.y)*0.01;
scene.rotation.x+=(-mouseY-scene.rotation.x)*0.01;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
