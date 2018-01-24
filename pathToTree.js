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
                var newNode     = currentNode[k] = { key: input[i], title: wantedNode, children: [] };
                    currentNode = newNode.children;
            } else {
                delete currentNode.children
            }
        }
    }
    return output;
}
// traverse tree to do something
const traverseTree = function(data) {
    return data.map((item) => {

        item.title = item.title.length > 10 ? item.title.substring(0,7)+"..." : item.title
        if (item.children.length === 0) {
            delete item.children
            return item
        } else {
            beautify(item.children)
            return item
        }
    })
}

export default {
    pathToTree:pathToTree,
    traverseTree:traverseTree
}