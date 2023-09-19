<template>
  <div>
    <el-button @click="addQuestion">新增问题</el-button>
    <Recursion :list="list" @open="open"></Recursion>
  </div>
</template>

<script>
import Recursion from "./cpn/recursion.vue";
export default {
  components: {
    Recursion,
  },
  data() {
    return {
      // 问题下面有选项，选项下面有子问题，子问题下面有子选项....
      list: [
        {
          value: "问题1",
          id: "1001", // 2＋2的组合，前两位是层数，后两位是当前层的个数
          parentId: "0000",
          children: [
            {
              value: "问题1 - 选项a",
              id: "100101",
              parentId: "1001",
              children: [
                {
                  value: "问题1 - 选项a - 子问题1",
                  id: "10010101",
                  parentId: "100101",
                  children: [
                    {
                      label: "问题1 - 选项a - 子问题1 -子选项a",
                      value: "问题1 - 选项a - 子问题1 -子选项a",
                      id: "1001010101",
                      parentId: "10010101",
                      children: [
                        {
                          label: "问题1 - 选项a - 子问题1 -子选项a - 子问题1",
                          value: "问题1 - 选项a - 子问题1 -子选项a - 子问题1",
                          id: "100101010101",
                          parentId: "1001010101",
                        },
                      ],
                    },
                  ],
                },
                
                // 更多子问题...
              ],
            },
            {
              value: "问题1 - 选项b",
              id: "100102",
              parentId: "1001",
              children: [
                // 其他选项的子问题...
              ],
            },
            // 更多选项...
          ],
        }
      ],
    };
  },
  methods: {
        // 新增问题   不能简单通过length来判断数字或者字母的值，在删除时复现这个问题
    addQuestion() {
     let arr = Array(4).fill(0);
     arr[0]=1;
     let brr = (this.list.length+1 + '').split('')
     arr[3]=brr[brr.length-1]||0
     arr[2]=brr[brr.length-2]||0
     arr[1]=brr[brr.length-3]||0
     let id =arr.join('')
      this.list.push({
        value: "",
        id: id, // 2＋2的组合，前两位是层数，后两位是当前层的个数
        parentId: "0000",
        children: [],
      });
    },
    open(item){
      console.log(item,'成功拿到了');
    }
  },
};
</script>

<style>
</style>