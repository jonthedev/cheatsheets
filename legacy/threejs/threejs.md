# THREE JS

## Basic Scene Setup

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>07 - Cameras</title>
  </head>
  <body>
    <canvas class="webgl"></canvas>
  </body>
</html>
```

**script.js**

```js
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// );
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
camera.position.x = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  //   mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
```

---

## Cameras

**Orthographic Camera**

The OrthographicCamera is used to create orthographic renders of your scene without perspective. It's useful if you make an RTS game like Age of Empire. Elements will have the same size on the screen regardless of their distance from the camera.

**Perspective Camera**

The PerspectiveCamera is the one we already used and simulated a real-life camera with perspective.

**CubeCamera**

The CubeCamera is used to get a render facing each direction (forward, backward, leftward, rightward, upward, and downward) to create a render of the surrounding. You can use it to create an environment map for reflection or a shadow map.

**StereoCamera**

The StereoCamera is used to render the scene through two cameras that mimic the eyes in order to create what we call a parallax effect that will lure your brain into thinking that there is depth. You must have the adequate equipment like a VR headset or red and blue glasses to see the result.

## Aspect Ratio

```js
const sizes = {
  width: 800,
  height: 600,
};

const aspectRatio = sizes.width / sizes.height;
```

---

## Built-in controls

If you type "controls" in the Three.js documentation, you'll see that there are a lot of pre-made controls. We will only use one of them for the rest of the course, but it can be interesting to know their role.

### DeviceOrientationControls

DeviceOrientationControls will automatically retrieve the device orientation if your device, OS, and browser allow it and rotate the camera accordingly. You can use it to create immersive universes or VR experiences if you have the right equipment.

### FlyControls

FlyControls enable moving the camera like if you were on a spaceship. You can rotate on all 3 axes, go forward and go backward.

### FirstPersonControls

FirstPersonControls is just like FlyControls, but with a fixed up axis. You can see that like a flying bird view where the bird cannot do a barrel roll. While the FirstPersonControls contains "FirstPerson," it doesn't work like in FPS games.

### PointerLockControls

PointerLockControls uses the pointer lock JavaScript API. This API hides the cursor, keeps it centered, and keeps sending the movements in the mousemove event callback. With this API, you can create FPS games right inside the browser. While this class sounds very promising if you want to create that kind of interaction, it'll only handle the camera rotation when the pointer is locked. You'll have to handle the camera position and game physics by yourself.

### OrbitControls

OrbitControls is very similar to the controls we made in the previous lesson. You can rotate around a point with the left mouse, translate laterally using the right mouse, and zoom in or out using the wheel.

### TrackballControls

TrackballControls is just like OrbitControls but there are no limits in terms of vertical angle. You can keep rotating and do spins with the camera even if the scene gets upside down.

### TransformControls

TransformControls has nothing to do with the camera. You can use it to add a gizmo to an object to move that object.

### DragControls

Just like the TransformControls, DragControls has nothing to do with the camera. You can use it to move objects on a plane facing the camera by drag and dropping them.
