/**
 * Created by Glen Lin on 2020/7/22.
 */

/* // 树状获取父节点、子节点
   let list = [{
      label: '一级 1',
      id: '1',
      pid: '',
      list: [],
      children: [{
          label: '二级 1-1',
          id: '11',
          pid: '1',
          list: [],
          children: [{
              label: '三级 1-1-1',
              id: '111',
              pid: '11',
              list: [],
          }]
      }]
  }]
*/

/*
* 递归 ---- 获取树状子节点
* */
export const getChildNode = (list) => {
  let arr = [];

  if(list.children && list.children.length > 0) {
    arr = arr.concat(list.children);
    for(let i=0; i<list.children.length; i++) {
      arr = arr.concat(getChildNode(list.children[i]));
    }
  }

  return arr;
}

/*
* 递归 ---- 获取树状父节点
* */

export const getParNode = (orgList, list, pid) => {
  let arr = [];

  for(let item of list) {
    if(item.id == pid) {
      arr.push(item);
      if(item.pid) {
        // 重头开始寻找
        arr = arr.concat(getPar(orgList, orgList, item.pid));
      }
    } else {
        if(Array.isArray(item.children)) {
          // 往下级继续寻找
          arr = arr.concat(getPar(orgList, item.children, pid));
        }
    };
  };

  return arr;
}
