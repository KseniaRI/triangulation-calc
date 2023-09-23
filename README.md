# triangulation-calc

Back-end node.js implementation for cone-3d project (https://github.com/KseniaRI/cone-3d)
Recive parameters (cone height, radius and number of segments on a circle) and compute triangulation of the cone (a set of triangles to be used for display) and pass it back to the client.

--request POST
--url https://triangulation-calc-54d134bfc721.herokuapp.com/triangulate-cone

--request parameters
{
height: number,
radius: number,
segments: number
}
