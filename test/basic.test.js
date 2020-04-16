import { traceSphereTriangle, TraceInfo } from '../dist';
import { cube } from 'primitive-geometry';

describe("Against a Cube", () => {
  const c = cube(100);
  const tris = c.cells.map((tri) => {
    return [
      c.positions[tri[0]],
      c.positions[tri[1]],
      c.positions[tri[2]],
    ];
  })


  const traceInfo = new TraceInfo();

  it('collides on Y+ ', () => {
    const end = [0, 200, 0];
    traceInfo.resetTrace(
      [0, -200, 0],
      end,
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.intersectPoint[0]).toEqual(0);
    expect(traceInfo.intersectPoint[1]).toEqual(-50);
    expect(traceInfo.intersectPoint[2]).toEqual(0);

    const traceEnd = traceInfo.getTraceEndpoint(end)
    expect(traceEnd[0]).toEqual(0);
    expect(traceEnd[1]).toEqual(-60);
    expect(traceEnd[2]).toEqual(0);

    expect(traceInfo.getTraceDistance()).toEqual(140)

    expect(traceInfo.collision).toBeTruthy();
  });


  it('collides on Y- ', () => {
    const end = [0, -200, 0];

    traceInfo.resetTrace(
      [0, 200, 0],
      end,
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.intersectPoint[0]).toEqual(0);
    expect(traceInfo.intersectPoint[1]).toEqual(50);
    expect(traceInfo.intersectPoint[2]).toEqual(0);

    const traceEnd = traceInfo.getTraceEndpoint(end)
    expect(traceEnd[0]).toEqual(0);
    expect(traceEnd[1]).toEqual(60);
    expect(traceEnd[2]).toEqual(0);


    expect(traceInfo.getTraceDistance()).toEqual(140)

    expect(traceInfo.collision).toBeTruthy();
  });


  it('collides on X+ ', () => {
    traceInfo.resetTrace(
      [-200, 0, 0],
      [200, 0, 0],
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.collision).toBeTruthy();
  });

  it('collides on X- ', () => {
    traceInfo.resetTrace(
      [200, 0, 0],
      [-200, 0, 0],
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.collision).toBeTruthy();
  });


  it('collides on Z+ ', () => {
    traceInfo.resetTrace(
      [0, 0, -200],
      [0, 0, 200],
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.collision).toBeTruthy();
  });

  it('collides on Z- ', () => {
    traceInfo.resetTrace(
      [0, 0, 200],
      [0, 0, -200],
      10
    );

    for(var i =0; i<tris.length; i++) {
      var tri = tris[i];
      traceSphereTriangle(tri[0], tri[1], tri[2], traceInfo);
    }

    expect(traceInfo.collision).toBeTruthy();
  });

});
