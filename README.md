# pathToTree
path string to object tree


## use

```js
import pathToTree from './pathToTress'

var arr=[
    "root/",
    "root/a/",
    "root/a/new_b.png",
    "root/a/qa/",
    "root/a/qa/新建文本文档 (3).txt",
    "root/asdfasdfasdfasdfasdfasdfasdf.txt",
    "root/b.png",
    "root/instqj_gfzqhk.exe",
    "root/jupyter_notebook.png",
    "root/new_b.png",
    "root/output/new_b.png",
    "root/soffice.exe",
    "root/ti/asdfasdfasdfasdfasdfasdfasdf.txt",
    "root/watermark.zip",
    "root/中华人民共和国国民经济和社会发展 第十三个五年规划纲要 .pdf",
    "root/国务院发布《中国制造2025》%28全文%29.pdf",
    "root/新建文本文档 (3).txt",
    "root/新建文本文档.txt",
    "root/沧海一声笑.docx",
    "root/理光C2011SP.exe"
]

console.log(pathToTree(arr))
console.log(traverseTree(pathToTree(arr)))
```
output

![image](https://raw.githubusercontent.com/Liaozhenting/pathToTree/master/example.png)

![image](https://github.com/Liaozhenting/pathToTree/blob/master/example2.PNG?raw=true)

