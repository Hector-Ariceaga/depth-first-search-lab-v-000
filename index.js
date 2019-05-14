let depthFirstSearch = (startNode, vertices, edges) => {
  let stack = [startNode];
  let visited = [startNode];

  while(stack.length != 0) {
    let currentNode = stack.pop();
    if (!currentNode.discovered) {
      currentNode.discovered = true
      findAdjacentNodes(currentNode.name, vertices, edges).forEach(node => {
        visited.push(node);
        stack.push(node);
      })
    }
  }
  return visited;
}

let find = (vertexName, vertices) => {
  return vertices.find(vertex => vertex.name ==  vertexName)
}

let findAdjacentNodes = (nodeName, vertices, edges) => {
  return edges.filter(edge => {
    return edge.includes(nodeName)
  }).map(edge => {
    return edge.filter(node => {
      return node != nodeName
    })
  }).map(vertexName => {
    return vertices.find(vertex => {
      return vertex.name == vertexName
    })
  }).filter(node => {
    return node.discovered == null
  })
}
