const rootA = document.getElementById("rootA");
const rootB = document.getElementById("rootB");
const nodeA = document.getElementById("nodeA");

const findParallelDOMValue = (rootA, rootB, firstNode) => {
    const path = getPathFromFirstNode(rootA, firstNode);
    const value = getValueFromPath(rootB, path);
    return value;
}

// Get root from first Node
const getPathFromFirstNode = (parent, firstNode) => {
    let currentNode = firstNode;
    const pathArray = [];
    while(currentNode !== parent){
        const parentEle = currentNode.parentElement;
        const childrenArray = Array.from(parentEle.children);
        pathArray.push(childrenArray.indexOf(currentNode));
        currentNode = parentEle;
    }
    return pathArray;
}

// Get Value from parent rootB to nodeB
const getValueFromPath = (parent, path) => {
    let currentNode = parent;
    while(path.length){
        currentNode = currentNode.children[path.pop()];
    }
    return currentNode.innerText;
}

const foundValue = findParallelDOMValue(rootA, rootB, nodeA);
document.getElementById("found").innerText = foundValue;