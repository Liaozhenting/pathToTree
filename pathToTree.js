const pathToTree =  (input) => {
  var root = [];
  for (let i=0;i<input.length;i++){
    var chain = input[i].split("/");
    var currentHierarchy = root;
    for(var j = 0; j < chain.length;j++){
      var wantedNode = chain[j]
      // 最后一级是文件夹
      if(wantedNode === ''){
        break;
      }
      let lastHierarchy = currentHierarchy;

      // 遍历root是否已有该层级
      for(let k = 0; k < currentHierarchy.length;k++){
        if(currentHierarchy[k].title === wantedNode){
          currentHierarchy = currentHierarchy[k].children;
          break;
        }
      }

      if(lastHierarchy === currentHierarchy) {
        let newNode = {
          key: input[i],
          title: wantedNode,
          children: []
        };
        // 文件，最后一个字符不是"/“符号
        if(j=== chain.length-1){
          delete newNode.children;
        }
        currentHierarchy.push(newNode);
        currentHierarchy = newNode.children;
      }
    }
  }

  return root;
}

export default pathToTree
