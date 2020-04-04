import { traceSphereTriangle, TraceInfo } from '../dist';

const sceneTriangles = [
  [
    [-100, 0, 0],
    [0, 100, 0],
    [100, 0, 0],
  ]
];

it('works', () => {
  var traceInfo = new TraceInfo();
  var startPoint = [0, 0, 10];
  var endPoint = [0, 0, -10];
  var radius = 5;

  // Tracing a 5 radius sphere moving from X:-10 to X:10
  traceInfo.resetTrace(startPoint, endPoint, radius);

  // You really need to do a good broadphase triangle set reduction (ie: octree)
  // to reduce the number of triangles you're colliding against. This is not a cheap
  // test!
  for(var i =0; i<sceneTriangles.length; i++) {
    var tri = sceneTriangles[i];
    traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
  }

  expect(traceInfo.collision).toBeTruthy();

  if(traceInfo.collision) {
    // This will get the position of the sphere when it collided with the closest triangle
    var endpoint = traceInfo.getTraceEndpoint(endPoint);
    expect(endPoint.length).toEqual(3);
    expect(endPoint[0]).toEqual(0)
    expect(endPoint[1]).toEqual(0)
    expect(endPoint[2]).toEqual(5)

    // This is the point on the triangle where the sphere collided.
    traceInfo.intersectPoint;

    expect(traceInfo.intersectPoint).toBeDefined();
    expect(traceInfo.intersectPoint.length).toEqual(3);
    expect(traceInfo.intersectPoint[0]).toEqual(0)
    expect(traceInfo.intersectPoint[1]).toEqual(0)
    expect(traceInfo.intersectPoint[2]).toEqual(0)
  }
});
