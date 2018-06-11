const pathToTree = (input) => {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        var chain       = input[i].split("/");
        var currentNode = output;
        for (var j = 0; j < chain.length; j++) {
            if (chain[j] === '') {
                break;
            }
            var wantedNode = chain[j];

            var lastNode = currentNode;

            for (var k = 0; k < currentNode.length; k++) {
                if (currentNode[k].title == wantedNode) {
                    currentNode = currentNode[k].children;
                    break;
                }
            }
            // If we couldn't find an item in this list of children
            // that has the right name, create one:
            if (lastNode == currentNode) {
                //创造对于层级的key
                var node =input[i];
                var newNode = currentNode[k] = {
                    key:chain.slice(0,j+1).join("/"),
                    title:wantedNode,
                    children:[]
                }
                currentNode = newNode.children;
                //原来的key保留
                // var newNode     = currentNode[k] = { key: input[i], title: wantedNode, children: [] };
                //     currentNode = newNode.children;
            } else {
                delete currentNode.children
            }
        }
    }
    return output;
}



export default pathToTree;