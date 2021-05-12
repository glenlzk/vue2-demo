//noinspection JSAnnotator
/**
 * Created by lenovo on 2020/7/22.
 */

/* 美元校验 */
export const isUSD = (str) => {
  // /^\$[1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/.test(str)
  let reg = /^\$[1-9]\d{0,2}(,\d{3})*(\.\d{2})?$/g;
  return reg.test(str);
};
