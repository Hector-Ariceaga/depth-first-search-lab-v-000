let depthFirstSearch = (startNode, vertices, edges) => {
  let queue = [startNode];
  startNode.discovered = true;
  let visitedQueue = [startNode];

  while(queue.length != 0) {
    let currentNode = queue.pop()
    if (!currentNode.discovered) {
      currentNode.discovered = true
    }
  }
}
