
class Node {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function deserialize(s){
    return JSON.parse(s);
}

function serialize(root){
    return JSON.stringify(root);
}

module.exports = { Node, deserialize, serialize };