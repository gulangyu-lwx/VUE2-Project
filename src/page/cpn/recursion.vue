<template>
  <div>
    <div class="list" v-for="(item, index) in list" :key="index">
      <div style="display: flex">
        <span>{{ setName(item.id) }} </span>
        <el-input v-model="item.value" style="width: 500px" />
        <div v-if="isQuestion(setName(item.id))">
          <el-button @click="addItem(item)">增加选项</el-button>
          <el-button @click="talkItem">关联问题</el-button>
          <el-button @click="deleteItem(item)">删除</el-button>
        </div>
        <div v-else>
          <el-button @click="addItem(item)">增加子问题</el-button>
          <el-button @click="talkItem">关联事项</el-button>
          <el-button @click="deleteItem(item)">删除</el-button>
        </div>
      </div>
      <recursion :list="item.children" @open="open"></recursion>
    </div>
  </div>
</template>
<script>
export default {
  name: "recursion",
  props: {
    list: Array,
  },
  methods: {

    isQuestion(str) {
      let arr = str.split("-");
      return arr[arr.length - 1].includes("问题") == true;
    },
    setName(id) {
      let msg = "";
      const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      if (id.length == 4) {
        msg = `问题${id.slice(1).replace(/^0+/, "")}`;
      }
      if (id.length > 4) {
        msg = `问题${id.slice(1, 4).replace(/^0+/, "")}`;
        let preVal = id.slice(0, 4);
        let curVal = id.slice(4);
        let result = [];
        for (let i = 0; i < curVal.length; i += 2) {
          result.push(curVal.slice(i, i + 2));
        }
        result = result.map((item) => item.replace(/^0+/, ""));
        // 上面代码得到具体的正确的数字
        for (let i = 0; i < result.length; i++) {
          if (i % 2 == 0) {
            let num = result[i] - 1;
            if (i == 0) {
              msg += `-选项${letters[num]}`;
            } else {
              msg += `-子选项${letters[num]}`;
            }
          }
          if (i % 2 != 0) {
            let num = result[i];
            msg += `-子问题${num}`;
          }
        }
      }
      return msg;
    },
    addItem(item) {
      let length = item.children.length + 1;
      let obj = {
        value: "",
        id: item.id + String(length).padStart(2, "0"),
        parentId: item.id,
        children: [],
      };
      item.children.push(obj);
    },
    deleteItem(item) {
      function removeById(idArray, targetId) {
        for (let i = 0; i < idArray.length; i++) {
          const currentItem = idArray[i];
          if (currentItem.id === targetId) {
            idArray.splice(i, 1); // 从数组中删除当前对象
            return true;
          } else if (currentItem.children) {
            const result = removeById(currentItem.children, targetId);
            if (result) {
              return true;
            }
          }
        }
        return false;
      }
      removeById(this.list, item.id);
    },
    talkItem(){
      this.$emit('open',true)
    },
     open(item){
      console.log(item,'成功拿到了');
    }
  },
};
</script>

<style scoped>
.list {
  text-align: center;
}
</style>