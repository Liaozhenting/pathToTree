const pathToTree =  (input) => {
  let root = [];
  for (let i=0;i<input.length;i++){
    let chain = input[i].split("/");
    let currentHierarchy = root;
    for(let j = 0; j < chain.length;j++){
      let wantedNode = chain[j]
      if(wantedNode === ''){
        continue;
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
        let key;
        if(j === chain.length - 1){
          key = input[i];
        } else {
          key = chain.slice(0,j+1).join('/')+'/';
        }
        let newNode = {
          key: key,
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
