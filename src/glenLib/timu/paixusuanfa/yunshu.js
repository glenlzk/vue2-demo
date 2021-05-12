/**
 * Created by Glen Lin on 2020/7/22.
 */

/*
*  包裹运输问题
*
*  传送带上的第i个包裹重量为weight[i]。每一天我们都会按给出重量的顺序往传送带上转载包裹。
*  我们转载的重量不会超过船的最大运载重量
*
*  返回能在D天内将传送带上的所有包裹送达的船的最低匀速能力
*
*
*  实例1
*   输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5;
*   输出：15
*
*   解释：
*     船舶最低载重15就能够在5天内送达所有包裹，所下所示：
*       第一天：1,2,3,4,5
*       第二天：6,7
*       第三天：8
*       第四天：9
*       第五天：10
*
*     请注意：货物必须按照给定的顺序装运，因此使用载重能力为14的船舶并将包装分成
*     （2,3,4,5），（1,6,7），（8），（9），（10）是不允许的
* */

import {arrSum, maxArr} from '../../utils/arr'

export const smPack = (pack, D) => {
  let lens = pack.length;
  let sum = arrSum(pack);
  let minYz = maxArr(pack)[0];
  let startNum = minYz ;

  /*
  * 1.数组未知位数相加 >=11 往回退一位；
  *   且满足数组5天都有运载货物；
  *
  *   剩余位数必须 >= D -1;
  *   否则，不够分配；
  * 2.minYz为满足最小值 + 数组下一位
  * */

  if(lens < D) {
    console.log('货物无法每天分配到船只...');
    return;
  }

  if(lens == D) {
    return minYz;
  }

  while(startNum >= minYz) {
    let curSum = 0;
    let res = [];
    let outOfdate = false;

    for(let i=0; i<lens; i++) {
      curSum += pack[i];

      // 剩余装载车数不能为0
      if(D - res.length <= 0) {
        outOfdate = true;
        break;
      };

      // 剩余包裹数必须大于、等于剩余车数；
      if((lens - i) > (D - res.length)) {
        if(curSum >= startNum) {
          if(curSum == startNum) {
            res.push(curSum);
          } else {
            res.push(curSum - pack[i]);
            i--;
          }
          curSum = 0;
        };
      } else {

        if(curSum > startNum) {
          res.push(curSum - pack[i]);
          i--;
        } else {
          res.push(curSum);
        };
        curSum = 0;
      }
    };

    if(res.length == D && !outOfdate && arrSum(res) == sum) {
      console.log(res);
      return  startNum;
    } else {
      startNum += 1;
    };

  }
}
/*
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(smPack(arr, 5));*/







