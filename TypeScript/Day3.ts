class TreeNode{
    value:string;
    left?:TreeNode;
    right?:TreeNode;

    constructor(value:string){
        if (value == undefined) { throw new Error("undefined value while creation") }
        this.value = value
    }

    /**
     * serialize
     */
    public serialize():string {
        var result:string[] = []
        var nextToExpand:TreeNode[] = []
        nextToExpand.push(this);
        
        var i = 0;
        while(i < nextToExpand.length){
            var next:TreeNode = nextToExpand[i]

            result.push(next.value)

            if(next.left != undefined) nextToExpand.push(next.left)
            if(next.right != undefined) nextToExpand.push(next.right)
            i++;
        }

        var encoded:string = "";
        for(i = 0; i<result.length; i++){
            encoded = encoded.concat(result[i])
            if((i+1 < result.length)){
                encoded = encoded.concat(";")
            }
        }

        return encoded
    }

}

function deserialize(encodedTree:string) :TreeNode{
    var values:string[] = encodedTree.split(";")
    //converti in nodi
    var nodes:TreeNode[] = []
    for(var i = 0; i < values.length; i++){
        nodes.push(new TreeNode(values[i]))
    }
    
    //reconstruct relations
    for(var i = 0; i < nodes.length; i++){
        var node:TreeNode = nodes[i]
        // if sons exist set child node
        if((2*i)+1 < nodes.length) node.left = nodes[(2*i)+1]
        if((2*i)+2 < nodes.length) node.right = nodes[(2*i)+2]
    }

    return nodes[0]
}


var root:TreeNode = new TreeNode("Root")

root.left = new TreeNode("Left")
root.right = new TreeNode("Right")
root.left.left = new TreeNode("Left.Left")

console.log(root.serialize());

console.log("serialization of Deserialization:".concat( 
    deserialize(root.serialize()).serialize())
)