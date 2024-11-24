// Binary Search Tree insert and search also there
// --------------------------------------------------

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         let newNode = new Node(value);
//         if(this.isEmpty()) {
//             this.root = newNode;
//         }else {
//             this.insertNode(this.root , newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if(newNode.value < root.value) {
//             if(root.left === null) {
//                 root.left = newNode;
//             }else {
//                 this.insertNode(root.left, newNode);
//             }
//         }else {
//             if(root.right === null) {
//                 root.right = newNode;
//             }else {
//                 this.insertNode(root.right , newNode);
//             }
//         }
//     }

//     search(root,value) {
//         if(!root) {
//             return false;
//         }else {
//             if(root.value == value) {
//                 return true;
//             }else if(value < root.value) {
//                 return this.search(root.left, value);
//             }else {
//                 return this.search(root.right, value);
//             }
//         }
//     }
// }

// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root,10));
// console.log(bst.search(bst.root,54656));
// console.log(bst.search(bst.root,15));
// console.log(bst.search(bst.root,3));
// console.log(bst.search(bst.root,7));


// ===========================================================

// there is fully completed DFS & BFS
// ------------------------------------

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root === null;
//     }

//     insert(value) {
//         let newNode = new Node(value);
//         if (this.isEmpty()) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(root, newNode) {
//         if (newNode.value < root.value) {
//             if (root.left === null) {
//                 root.left = newNode;
//             } else {
//                 this.insertNode(root.left, newNode);
//             }
//         } else {
//             if (root.right === null) {
//                 root.right = newNode;
//             } else {
//                 this.insertNode(root.right, newNode);
//             }
//         }
//     }

//     search(root, value) {
//         if (!root) {
//             return false;
//         } else {
//             if (root.value === value) {
//                 return true
//             } else if (value < root.value) {
//                 return this.search(root.left, value);
//             } else {
//                 return this.search(root.right, value);
//             }
//         }
//     }

//     PreOrder(root) {
//         if (root) {
//             console.log(root.value);
//             this.PreOrder(root.left);
//             this.PreOrder(root.right);
//         }
//     }

//     InOrder(root) {
//         if (root) {
//             this.InOrder(root.left);
//             console.log(root.value);
//             this.InOrder(root.right);
//         }
//     }

//     PostOrder(root) {
//         if (root) {
//             this.PostOrder(root.left);
//             this.PostOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder() {
//         const queue = [];
//         queue.push(this.root);
//         while (queue.length) {
//             let curr = queue.shift();
//             console.log(curr.value)
//             if (curr.left) {
//                 queue.push(curr.left);
//             }
//             if (curr.right) {
//                 queue.push(curr.right);
//             }
//         }
//     }

//     min(root) {
//         if (!root.left) {
//             return root.value;
//         } else {
//             return this.min(root.left);
//         }
//     }

//     max(root) {
//         if (!root.right) {
//             return root.value
//         } else {
//             this.max(root.right);
//         }
//     }
// }

// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 54656));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 3));
// console.log(bst.search(bst.root, 7));

// console.log("Pre Order: ")
// bst.PreOrder(bst.root);

// console.log("InOrder :");
// bst.InOrder(bst.root);

// console.log("Post Order: ");
// bst.PostOrder(bst.root);

// console.log("BFS:");
// bst.levelOrder();

// console.log("Min Value :", bst.min(bst.root));
// console.log("Max Value :", bst.max(bst.root));








// ===========================================================================================

// Graph
// -----------------


// class Graph {
//     constructor() {
//         this.adjecencyList = {};
//     }

//     addVertex(vertex) {
//         if(!this.adjecencyList[vertex]) {
//             this.adjecencyList[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if(!this.adjecencyList[vertex1]) {
//             this.addVertex(vertex1)
//         }
//         if(!this.adjecencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }

//         this.adjecencyList[vertex1].add(vertex2);
//         this.adjecencyList[vertex2].add(vertex1)
//     }

//     hasEdge(vertex1, vertex2) {
//         return (
//             this.adjecencyList[vertex1].has(vertex2) &&
//             this.adjecencyList[vertex2].has(vertex1)
//         )
//     }

//     removeEdge(vertex1, vertex2) {
//         this.adjecencyList[vertex1].delete(vertex2);
//         this.adjecencyList[vertex2].delete(vertex1);
//     }

//     removeVertex(vertex) {
//         if(!this.adjecencyList[vertex]) {
//             return
//         }
//         for(let adjecentVertex in this.adjecencyList[vertex]) {
//             this.removeEdge(vertex, adjecentVertex);
//         }
//         delete this.adjecencyList[vertex];
//     }

//     display() {
//         for(let vertex in this.adjecencyList) {
//             console.log(vertex + "->" + [...this.adjecencyList[vertex]])
//         }
//     }
// }

// const graph = new Graph();

// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A","B");
// graph.addEdge("B","C");

// graph.display();

// console.log(graph.hasEdge("A","B"));
// console.log(graph.hasEdge("A","C"));


// console.log("remove Edge:");
// graph.removeEdge("A","B");
// graph.display();

// console.log("remove Vertex: ");
// graph.removeVertex("A");
// graph.display()