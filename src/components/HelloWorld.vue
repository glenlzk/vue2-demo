<template>
  <div class="hello">
    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <!-- -->
  </div>
</template>

<script>

  import {isUSD} from '../glenLib/utils/common'
  import {maxArr, minArr1, getMinOfArr2} from '../glenLib/utils/arr'
  import {kkFun} from '../glenLib/timu/paixusuanfa/koko'
  import baseLayout from './baseLayout'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '13',
        radio: 3,
        user: {
          name:'glen'
        },
        attrsObj: {
          required: true,
          class:'test-layout',
          placeholder: 'Enter your username'
        },
        dataList: [
          {
            name: 'selina',
            id: 111,
            isComplete: true,
          },
          {
            name: 'glen',
            id: 222,
            isComplete: false,
          },
          {
            name: 'stanley',
            id: 333,
            isComplete: true,
          },
        ]
      }
    },
    components: {
      testLayout: baseLayout,
    },
    mounted() {
      let self = this;




    },
    methods: {
      changeData(val) {
        console.log(val);
        console.log(this.msg);
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
