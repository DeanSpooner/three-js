// Creates a scene, like the stage. Container like a div.
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x37825f);

// Creates the mathematical geometry of the shape.
const geometry = new THREE.BoxBufferGeometry(1, 1, 1);
const cubeTwo = new THREE.BoxBufferGeometry(1, 1, 1);
const sphereGeom = new THREE.SphereGeometry(1.5, 12, 12);
// Sets the material, i.e how it looks, color, material etc.
const material = new THREE.MeshBasicMaterial({ color: 0xff5555 });
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0x5555ff });
const yellowMaterial = new THREE.MeshBasicMaterial({ color: 0xc8d033 });
// Mesh combines these into a new shape.
const mesh = new THREE.Mesh(geometry, material);
const blueCube = new THREE.Mesh(cubeTwo, blueMaterial);
const yellowSphere = new THREE.Mesh(sphereGeom, yellowMaterial);

// Shape positions
blueCube.position.x = -1.3;
blueCube.position.y = 1.3;
blueCube.position.z = -1.3;
blueCube.rotateX(50);
blueCube.rotateY(310);
blueCube.rotateZ(310);

yellowSphere.position.x = -4;
yellowSphere.position.y = 1;
yellowSphere.position.z = -1;

// Make sure you add to the mesh/shape/3D object to the scene!
scene.add(mesh, blueCube, yellowSphere);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera now needs adding. PerspectiveCamera is normal/default type.
// First parameter is FOV in degrees, vertical vision angle.
// Second param is aspect ratio of our visible scene.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.x = -2;
camera.position.z = 3;

scene.add(camera);

// Then create a canvas for renderer in html. This takes a 'snapshot' from the camera POV.
const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
