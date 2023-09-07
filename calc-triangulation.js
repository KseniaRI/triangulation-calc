const calcNode = (i, radius, numOfSegments) => {
    const angle = (2 * Math.PI * i) / numOfSegments;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
        z: 0
    }
}

const calcTriangulation = (height, radius, numOfSegments) => {
    const setOfTriangles = [];
    const nodeA = {
        x: 0,
        y: 0,
        z: height
    }

    for (let i = 0; i < numOfSegments; i++){
       setOfTriangles.push([nodeA, calcNode(i, radius, numOfSegments), calcNode(i + 1, radius, numOfSegments)]);
    }

    return setOfTriangles;
}

module.exports = calcTriangulation;