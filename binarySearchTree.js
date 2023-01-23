
class Node {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right
    }
}

class BinarySearchTree {
    constructor(value){
        this.root = new Node(value)
    }


    insert(value){
        let currentNode = this.root

        while(true){
            if (currentNode.value < value) {
                if (!currentNode.right) {
                    let newNode = new Node(value)
                    currentNode.right = newNode
                    break
                }
                currentNode = currentNode.right
            }
            else {
                if (!currentNode.left) {
                    let newNode = new Node(value)
                    currentNode.left = newNode
                    break
                }
                currentNode = currentNode.left

            }
        }
        
    }

    search (value){
        let currentNode = this.root

        while(currentNode){
            if(currentNode.value === value){
                return 'Data is ' + currentNode.value + ' and Found'
            }
            else if(currentNode.value < value){
                currentNode = currentNode.right

            }
            else {
                currentNode = currentNode.left
            }

        }
        return 'Data Not Found'
    }

    predecessor(){
        let currentNode = this.root.left

        while(true){
            if (!currentNode.right) {
                return currentNode.value
            }
            currentNode = currentNode.right
        }
    }

    successor(){
        let currentNode = this.root.right

       while(true){
        if (!currentNode.left) {
            return currentNode.value
        }
        currentNode = currentNode.left
       }
    }

    BFS(){
        // Level order Traversing is BFS
        // this is Breadth First Search (traversing with the help of Que) --> BFS
        let que = []
        que.push(this.root)

        while(que.length){
            let current = que[0]
            console.log(current.value);

            if (current.left) {
                que.push(current.left)
            }

            if (current.right) {
                que.push(current.right)
            }

            que.shift()

        }
    }

    
        // DFS Traversing --
            // 1. In order Traversing   -->  L - N - R            n-node,l-left,r-right 
            // 2. Pre Order Traversing  -->  N - L - R
            // 3. Post Order Traversing -->  L - R - N
    inorder(node){

        if (node.left) {    
        inorder(node.left)
        }

        console.log(node.value);

        if (node.right) {    
            inorder(node.right)
            }
    }

}


tree = new BinarySearchTree(10)
tree.insert(20)
tree.insert(9)
tree.insert(90)
tree.insert(15)
tree.insert(1)
tree.BFS()
console.log(tree.predecessor());
console.log(tree.successor());

console.log(tree.search(90));

console.log(ree);
