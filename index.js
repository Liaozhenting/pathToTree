const compare = (() => {
    function compareArray(a, b) {
        if (a.length !== b.length) {
            return false;
        }
        const length = a.length;
        for (let i = 0; i < length; i++) {
            if (!compare(a[i], b[i])) {
                return false;
            }
        }

        return true;
    }

    function compareObject(a, b) {
        const keya = Object.keys(a);
        const keyb = Object.keys(b);

        if (keya.length !== keyb.length) {
            return false;
        }

        return keya.every(key => {
            if (!compare(a[key], b[key])) {
                return false;
            }
            return true;
        });
    }

    function compare(a, b) {
        if (a === b) {
            return true;
        }

        if (typeof a !== typeof b || a === null || b === null) {
            return false;
        }

        if (Array.isArray(a)) {
            if (!Array.isArray(b)) {
                return false;
            }
            return compareArray(a, b);
        }

        if (typeof a === "object") {
            return compareObject(a, b);
        }

        return false;
    }

    return compare;
})();


function arrayToPid(data) {

    let sorted = data.sort((a, b) => {
        return a.split('/').length - b.split('/').length
    })
    console.log(sorted)
    let index = 1;

    let new_arr = [];

    sorted.map((ele, i) => {
        let obj           = {}
            obj.id        = index;
            obj.title     = ele
        let completedPath = ele.split('/')
            obj.pid       = 0;
        new_arr.map((new_arr_ele, new_arr_index) => {

            let new_arr_ele_completedPath = new_arr_ele.title.split('/');
            let front_string              = completedPath.slice(0, completedPath.length - 1);
            if (compare(new_arr_ele_completedPath.slice(-1), [''])) {
                if (compare(front_string, new_arr_ele_completedPath.slice(0, new_arr_ele_completedPath.length - 1))) {
                    obj.pid = new_arr_ele.id;
                    return;
                }
            }
            if (compare(front_string, new_arr_ele_completedPath)) {
                obj.pid = new_arr_ele.id;
                return
            }

        })
        index++

        new_arr.push(obj);

    })
    return new_arr
}

function arrayToJson(treeArray) {
    var r      = [];
    var tmpMap = {};

    for (var i = 0, l = treeArray.length; i < l; i++) {
        // 以每条数据的id作为obj的key值，数据作为value值存入到一个临时对象里面
        tmpMap[treeArray[i]["id"]] = treeArray[i];
    }

    for (i = 0, l = treeArray.length; i < l; i++) {
        var key = tmpMap[treeArray[i]["pid"]];

        //循环每一条数据的pid，假如这个临时对象有这个key值，就代表这个key对应的数据有children，需要Push进去
        if (key) {
            if (!key["children"]) {
                key["children"] = [];
                key["children"].push(treeArray[i]);
            } else {
                key["children"].push(treeArray[i]);
            }
        } else {
            //如果没有这个Key值，那就代表没有父级,直接放在最外层
            r.push(treeArray[i]);
        }
    }
    return r
}

function main(arr) {
    return arrayToJson(arrayToPid(arr))
}

export default main;



/*****使用
var arr = [
    "0000000001/",
    "0000000001/b.png",
    "0000000001/new_b.png",
    "0000000001/watermark.zip",
    "0000000001/ass",
    "0000000001/ass/ass.txt",
    "0000000001/tes",
    "0000000001/tes/test.txt",
]

console.log(main(arr))
******/
