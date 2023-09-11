const calcNode = (i, radius, numOfSegments) => {
    const angle = (2 * Math.PI * i) / numOfSegments;
    const node = {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        z: 0
    }

    return node;
}

const calcTriangulation = (height, radius, numOfSegments) => {
    const setOfTriangles = [];
    const nodeA = {
        x: 0,
        y: 0,
        z: height
    }

    for (let i = 0; i < numOfSegments; i++){
        const nodeP = calcNode(i, radius, numOfSegments);
        const nodePNext = calcNode(i + 1, radius, numOfSegments);
        setOfTriangles.push([nodeA, nodeP, nodePNext]);
    }
    
    return setOfTriangles;
}

const calcUnitSurfaceNormal = (endPoint, radius, height) => {
    const startPoint = {
        x: 0,
        y: 0,
        z: (- radius * radius)/ height
    }

    const vectorCoordX = endPoint.x - startPoint.x;
    const vectorCoordY = endPoint.y - startPoint.y;
    const vectorCoordZ = endPoint.z - startPoint.z

    const vectorMagnitude = Math.sqrt(vectorCoordX * vectorCoordX + vectorCoordY * vectorCoordY + vectorCoordZ * vectorCoordZ);
    
    const unitSurfaceNormal = {
        x: vectorCoordX / vectorMagnitude,
        y: vectorCoordY / vectorMagnitude,
        z: vectorCoordZ / vectorMagnitude
    }

    return unitSurfaceNormal;
}

const calcSmoothTriangulation = (height, radius, numOfSegments) => {
    const setOfTriangles = [];
    const nodeA = {
        x: 0,
        y: 0,
        z: height
    }

    for (let i = 0; i < numOfSegments; i++){
        const nodeP = calcNode(i, radius, numOfSegments);
        const nodePNext = calcNode(i + 1, radius, numOfSegments);
        const normalP = calcUnitSurfaceNormal(nodeP, radius, height);
        const normalPNext = calcUnitSurfaceNormal(nodePNext, radius, height);
        setOfTriangles.push([nodeA, nodeP, nodePNext, normalP, normalPNext]);
    }
    
    return setOfTriangles;
}

module.exports = {
    calcTriangulation,
    calcSmoothTriangulation
};