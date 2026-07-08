const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z = 40;

const renderer = new THREE.WebGLRenderer({
alpha:true,
antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

renderer.domElement.style.position="fixed";
renderer.domElement.style.top="0";
renderer.domElement.style.left="0";
renderer.domElement.style.zIndex="-20";

document.body.appendChild(renderer.domElement);

const geometry=new THREE.BufferGeometry();

const count=5000;

const positions=new Float32Array(count*3);

for(let i=0;i<count*3;i++){

positions[i]=(Math.random()-0.5)*600;

}

geometry.setAttribute(
'position',
new THREE.BufferAttribute(positions,3)
);

const material=new THREE.PointsMaterial({

color:0xffffff,

size:0.6,

transparent:true,

opacity:0.9

});

const stars=new THREE.Points(

geometry,

material

);

scene.add(stars);

function animate(){

requestAnimationFrame(animate);

stars.rotation.y+=0.00015;

stars.rotation.x+=0.00005;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
