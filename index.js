let depthFirstSearch = (startNode, vertices, edges) => {
  let queue = [startNode];
  startNode.discovered = true;
  let visitedQueue = [startNode];

  while(queue.length != 0) {
    let currentNode = queue.pop()
    if (!currentNode.discovered) {
      currentNode.discovered = true
      findAdjacentNodes(currentNode.name, vertices, edges).forEach(node => queue.push(node))
    }
  }
}

let findAdjacentNodes = (nodeName, vertices, edges) => {
  edges.filter(edge => {
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
