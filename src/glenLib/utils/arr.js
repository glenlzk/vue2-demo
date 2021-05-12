/**
 * Created by Glen Lin on 2020/7/22.
 */

/*
* 判断是否是数组
* */

export const isArr = (arr) => {
  return Array.isArray(arr) || arr instanceof Array;
}

/*
* 数组转化为字符串
*
* 输入：[1,2,3,4,5,6]
* 输出：'1,2,3,4,5,6'
* */

export const arrToStr = (arr) => {
  if(!isArr(arr)) {
    throw new Error('请输入数组');
  }

  return arr.join();
}

export const arrToStr2 = (arr) => {
  if(!isArr(arr)) {
    throw new Error('请输入数组');
  }

  return arr.toString();
}

/*
  数组求和
* */

export const arrSum = (arr) => {
  if(arr.length == 0) {
    return 0;
  } else {
    return arr[0] + arrSum(arr.slice(1, arr.length))
  }
};

export const arrSum2 = (arr) => {
  return eval(arr.join('+'));
}


/* 求数组由高到底排序
 *  */
export const maxArr = (arr) => {

  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }


  for(let i=0; i<arr.length; i++) {
    for(let j=i; j<arr.length; j++) {
      let temp = null;
      if(arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else {
        continue;
      }
    }
  }

  return arr;
};

/* 求数组由低到高排序
* */

export const minArr = (arr) => {

  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  return maxArr(arr).reverse();
}

export const minArr1 = (arr) => {

  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  let lens = arr.length;

  for(let i=0; i<lens; i++) {
    let temp = null;
    for(let j=i+1; j<lens; j++) {
      if(arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else {
        continue;
      }
    };
  };

  return arr;
};

/*
* 找出数组最大的值：
*
* */

export const getMaxOfArr = (arr) => {
  return Math.max.apply(null, arr);
}

export const getMaxOfArr2 = (arr) => {
  return Math.max(...arr);
}

/* 找出数组最小的值
* */
export const getMinOfArr = (arr) => {
  return Math.min.apply(null, arr);
}

export const getMinOfArr2 = (arr) => {
  return Math.min(...arr);
}

/*
*  拷贝数组
* */

export const copyArr = (arr) => {
  return JSON.parse(JSON.stringify(arr))
}

/*
* Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
* 和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）
*
* 具体参阅：ES6 数组语法
* */

// ES6写法
export const copyArr1 = (arr) => {
  return Array.from(arr);
}
// ES5写法
export const copyArr2 = (arr) => {
  return [].slice.call(arr);
}
// 解构写法
export const copyArr3 = (arr) => {
  return [...arr];
}
// 传统写法
export const copyArr4 = (arr) => {

  if(arr instanceof Array) {
    throw new Error('请输入数组');
  }

  let newArr = [];
  for(let item of arr) {
    newArr.push(item);
  };

  return newArr;
}

/* Array sort 函数排序
*  1.在没有使用参数时，按字符（字母、数字）编码顺序排序
*  2.在使用参数时，按照指定规则排序（数字大小，其他排序规则）
 *  */

/*

 1.在没有使用参数时，按字符（字母、数字）编码顺序排序

 sort() 在没有使用参数时，默认按支付编码循序进行排序

  --------------------------------

  如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，
  说得更精确点，
  是按照字符编码的顺序进行排序。
  要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

   输入：字符串

   实例1：
   输入：let arr = ['George','John','Thomas','James','Adrew','Martin'];
   输出： ["Adrew", "George", "James", "John", "Martin", "Thomas"]

   实例2：
   输入：let arr = ['10','5', '40', '25', '1000', '1']
   输出：["1", "10", "1000", "25", "40", "5"]


   输入：数字

   输入：let arr = [10,5,40,25,1000,1];
   输出： [1, 10, 1000, 25, 40, 5]

* */
export const arrSortNotArg = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  return arr.sort();
};

/*
*  2.在使用参数时，按照指定规则排序（数字大小，其他排序规则）
*
*  如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，
*  然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个
*  参数 a 和 b，其返回值如下：

    若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
    若 a 等于 b，则返回 0。
    若 a 大于 b，则返回一个大于 0 的值。
* */


/*
* 输入：[10,5,40,25,1000,1]
* 输出： [1, 5, 10, 25, 40, 1000]
*
* 输入：["1", "10", "1000", "25", "40", "5"]
* 输出： ["1", "5", "10", "25", "40", "1000"]
* */
export const arrSortWithArgNum = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  return arr.sort(function(a, b) {
    return a - b;
  });
}

/*
* 对象，按某属性排序
*
*   按数字大小排序
*
*   输入：[
*           {name:'glen',key: 155},
*           {name: 'selina', key: 14},
*           {name: 'stanley', key: 15}
*         ]
*
*  输出：
       [
         {name: 'ohshit', key: 14},
         {name: 'stanley', key: 15},
         {name:'glen',key: 155},
       ]
*
* */
export const arrSortWithArgObj = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  return arr.sort(function(aItem, bItem) {
    return aItem.key - bItem.key;
  });
}

/*
* 对象，按某属性排序
*
*   按首字母编码排序
*
*   输入：[
           {name: 'ohshit', key: 14},
           {name: 'stanley', key: 15},
           {name:'glen',key: 155},
*         ]
*
*  输出：
       [
         {name:'glen',key: 155},
         {name: 'ohshit', key: 14},
         {name: 'stanley', key: 15},
       ]
*
* */
export const arrSortWithObjLetter = (arr) => {
  if(!Array.isArray(arr)) {
    throw new Error('请输入数组');
  }

  return arr.sort(function (aItem, bItem) {
      return aItem.name.localeCompare(bItem.name)
  });

}

/*
* 按数字、字母、拼音排序
*
* 参阅有道笔记：
*   数组按中英文数字排序sort和Localecompare的经历
*
* 输入：
*   ['测图', 'a','案头','d', '不投', '3','c', '2', '1' ]
* 输出：
*   ["1", "2", "3", "a", "c", "d", "案头", "不投", "测图"]
*/

export const certainSort =(arr) => {
  //let reg = /[0-9a-z]+/i;
  // /g 不支持多次匹配，全局匹配，否则匹配出错
  let reg = /[0-9a-zA-Z]+/;

  return arr.sort(function(a, b) {

    // 数字、字母排前面
    if(reg.test(a) && !(reg.test(b))) {
      return -1;
    }

    // 数字、字母之外排后面
    if(!(reg.test(a)) && reg.test(b)) {
      return 1;
    }

    return a.localeCompare(b)

  });
}

/*
* 初始化一个二维数组
* */

export const matrix = (numrows, numcols, initial) => {
  var arr = [];
  for (var i = 0; i < numrows; ++i) {
    var columns = [];
    for (var j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

export const matrix2 = (rows, cols, init) => {
  let arr = [];

  for(let i=0; i<rows; i++) {
    arr[i] = [];
    for(let j=0; j<cols; j++) {
      arr[i][j] = init;
    };
  };

  return arr;
}




