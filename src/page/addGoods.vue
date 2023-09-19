<template>
  <div>
    <button @click="showDialog">打开弹框</button>
    <dialog-component v-if="isDialogVisible" :data="dialogData" @submit="handleDialogSubmit"></dialog-component>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import DialogComponent from "./cpn/component.vue";

export default {
  components: {
    DialogComponent,
  },
  data() {
    return {
      isDialogVisible: false,
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
      ],
      dialogData: {
        id: 0,
        name: ''
      }
    };
  },
  methods: {
    showDialog() {
      this.isDialogVisible = true;
    },
    handleDialogSubmit(updatedData) {
      // 更新列表数据
      const index = this.list.findIndex(item => item.id === updatedData.id);
      if (index !== -1) {
        this.list[index] = updatedData;
      } else {
        this.list.push(updatedData);
      }

      // 更新弹框数据
      this.dialogData = {
        id: 0,
        name: ''
      };

      this.isDialogVisible = false;
    }
  }
};
</script>