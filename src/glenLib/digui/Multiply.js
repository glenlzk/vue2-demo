/**
 * Created by Glen Lin on 2020/7/22.
 */

/*
* 求1*2*3*4*5..n的值
	求5*4*3*2*1..n的值
* */

/* 求1*2*3*4*5..n的值 */
export const factor = (n) => {
  let res = 1;
  for(let i=1; i<=n; i++) {
    res *= i;
  }
  return res;
};


export const factor3 = (start, num) => {

  if(start == num) {
    return num;
  } else {
    return start*factor3(start + 1, 5)
  }

};


/* 求1*2*3*4*5..n的值 */
export const factor2 = (num) => {
  if(1 == num) {
    return num;
  } else {
    return num*factor2(--num);
  }
};
