/**
 * Created by Glen Lin on 2020/7/22.
 */

/*KOKO吃香蕉

    可可喜欢吃香蕉，这里有N堆香蕉，第i堆中有piles[i]根香蕉。警卫已经离开了，将在H小时候回来

    可可可以决定她吃香蕉的速度K（单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉K根。
    如果这堆香蕉少于K根，她将吃掉这堆的所有香蕉，然后，这一个小时内不会再吃更多的香蕉。

    可可喜欢慢慢吃，但仍然想在警卫回来前吃掉所有香蕉。

    返回她可以在H小时内吃掉所有香蕉的最小速度K（K为整数）

    实例1：
      输入piles = [3,6,7,11]; H=8;
      输出 4

    实例2：
      输入piles = [30,11,23,4,20]; H=5;
      输出 30

* */

import {maxArr} from '../../utils/arr'

export const kkFun = (arr, H) => {
  let maxK = maxArr(arr)[0];
  let midK = Math.ceil(maxK/2);

  if(arr.length > H) {
    console.log(`在${H}小时内，无法吃完`);
    return null;
  }

  if(arr.length == H) {
    return maxK;
  }

  // left
  for(let i=1; i<midK; i++) {
    let _h = 0;
    for(let j=0; j<arr.length; j++) {
      _h += Math.ceil(arr[j]/i);
    }
    if(_h == H) {
      return i;
    }
  };
  //right
  for(let i=midK; i<=maxK; i++) {
    let _h = 0;
    for(let j=0; j<arr.length; j++) {
      _h += Math.ceil(arr[j]/i);
    }
    if(_h == H) {
      return i;
    }
  };

  return maxK;
}

/*
console.log(kkFun([30, 11, 23, 4, 20], 5));
console.log(kkFun([3,6,7,11], 8));
console.log(kkFun([3,6,7,11], 3));
*/
