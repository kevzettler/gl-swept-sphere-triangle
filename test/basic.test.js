import { traceSphereTriangle, TraceInfo } from '../dist';

const sceneTriangles = [
  [
    [-10, 0, 0],
    [0, 10, 0],
    [10, 0, 0],
  ]
];

it('works', () => {
  var traceInfo = new TraceInfo();
  var startPoint = [-10, 0, -10];
  var endPoint = [10, 0, 10];
  var radius = 5;

  // Tracing a 0.5 radius sphere moving from X:-10 to X:10
  traceInfo.resetTrace(startPoint, endPoint, radius);

  // You really need to do a good broadphase triangle set reduction (ie: octree)
  // to reduce the number of triangles you're colliding against. This is not a cheap
  // test!
  for(var i =0; i<sceneTriangles.length; i++) {

    var tri = sceneTriangles[i];
    traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
  }

  console.log('**********traceInfo.collision*********', traceInfo.collision);
  expect(traceInfo.collision).toBeTruthy();

  if(traceInfo.collision) {
    // This will get the position of the sphere when it collided with the closest triangle
    var endpoint = traceInfo.getTraceEndpoint(endPoint);

    // This is the point on the triangle where the sphere collided.
    traceInfo.intersectPoint;

    console.log('**********traceInfo*********', traceInfo.intersectPoint);

    expect(traceInfo.intersectPoint).toBeDefined();
  }
});
