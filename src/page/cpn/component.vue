<template>
  <div>
    <el-input v-model="computedData.name"></el-input>
    <button @click="handleSubmit">提交</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    computedData: {
      get() {
        return { ...this.data };
      },
      set(newValue) {
        this.$emit('update:data', newValue);
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.computedData);
    }
  }
};
</script>
