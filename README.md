# GL Matrix swept sphere triangle collision
This code is is a reproduction of [a gist from the creator of gl-matrix](https://gist.github.com/toji/2802287). This code implements a ellipsoid space swepth sphere collision detction algoritim from the paper ["Improved Collision detection and Response" by Kasper Fauerby](http://www.peroxide.dk/papers/collision/collision.pdf)

## Install

```
npm install gl-swept-sphere-triangle
```


## Example

```javascript
import { traceSphereTriangle, TraceInfo } from 'gl-swept-sphere-triangle';
var traceInfo = new TraceInfo();
var startPoint = [-10, 0, 0];
var endPoint = [10, 0, 0];
var radius = 0.5;
// Tracing a 0.5 radius sphere moving from X:-10 to X:10
traceInfo.resetTrace(startPoint, endPoint, radius);
// You really need to do a good broadphase triangle set reduction (ie: octree)
// to reduce the number of triangles you're colliding against. This is not a cheap
// test!
for(i in sceneTriangles) {
  tri = sceneTriangles[i];
  traceSphereTriangle(tri.verts[0], tri.verts[1], tri.verts[2], traceInfo);
}

if(traceInfo.collision) {
  // This will get the position of the sphere when it collided with the closest triangle
  traceInfo.getTraceEndpoint(endPoint);

  // This is the point on the triangle where the sphere collided.
  traceInfo.intersectPoint;
  // You can use the above two values to generate an appropriate collision response.
}
 ```


## Development roadmap
~~The original gist uses a really old version of gl-matrix 1.3.8. Later versions of gl-matrix had non-backwards compatible API changes. This has old copy of gl-matrix has been hard coded in the code base. This was to evaluate if the gist code actually worked. Future iterations of this module will work to bring the dependencies up to speed and review potential performance gains.~~

This module has been updated to a moder version of `gl-matrix` future road map will be purely optimization.
