this.otherDatas.loadingList.sltjLoading = false
if (this.$refs["sltjForm"]) {
  this.$refs["sltjForm"].validateForm().then((v) => {
    // 是否 "新增"
    if (this.otherDatas.typeList.sltjType == 'add') {
      let { yypzdtj, byypzdtj } = this.tkObj.sltjForm
      // 修改 中的 "新增"
      // this.editObj.xzsltjlist.splice(0)
      this.editObj.xzsltjlist.push(this.tkObj.sltjForm)
      // 新增 中的 "新增"
      let structuredClone = item => JSON.stringify(item)
      const hasObject = (arr, obj) => arr.some(item => structuredClone(item) === structuredClone(obj));
      if (hasObject(this.bottomObj.sltjData.list, { yypzdtj, byypzdtj })) {
        this.$message({
          message: `无法重复添加！`,
          type: "warning",
        });
      } else {
        this.bottomObj.sltjData.list.push({ yypzdtj, byypzdtj })
        this.$message({
          message: `新增成功！`,
          type: "success",
        });
      }

    } else {
      let index = this.otherDatas.indexList.sltjIndex
      // 修改 中的 "修改"
      let obj = { ...this.tkObj.sltjForm }
      this.editObj.xgsltjlist.push(obj)
      // 新增 中的 "修改"
      // this.bottomObj.sltjData.list.splice(0)
      this.$set(this.bottomObj.sltjData.list, index, this.tkObj.sltjForm);
      this.$message({
        message: `编辑成功！`,
        type: "success",
      });
    }
    this.otherDatas.loadingList.sltjLoading = false
    this.tkObj.sltjForm = this.$options.data.call(this).tkObj.sltjForm
    this.showObj.sltj = false
  })
} else {
}