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

module.exports = calcTriangulation;
   