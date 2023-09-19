this.otherDatas.loadingList.fjclLoading = false
if (this.$refs["fjclForm"]) {
    this.$refs["fjclForm"].validateForm().then((v) => {
        // 是否 "新增"
        if (this.otherDatas.typeList.fjclType == 'add') {
            let { material_name, sfbx, sfrq, rqqx } = this.tkObj.fjclForm
            // 修改 中的 "新增"
            this.editObj.xzfjcllist.splice(0)
            this.editObj.xzfjcllist.push(this.tkObj.fjclForm)
            // 新增 中的 "新增"
            let structuredClone = item => JSON.stringify(item)
            const hasObject = (arr, obj) => arr.some(item => structuredClone(item) === structuredClone(obj));
            if (hasObject(this.bottomObj.fjclData.list, { material_name, sfbx, sfrq, rqqx })) {
                this.$message({
                    message: `无法重复添加！`,
                    type: "warning",
                });
            } else {
                this.bottomObj.fjclData.list.push({ material_name, sfbx, sfrq, rqqx })
                this.$message({
                    message: `新增成功！`,
                    type: "success",
                });
            }
        } else {
            let index = this.otherDatas.indexList.fjclIndex
            // 修改 中的 "修改"
            let obj = { ...this.tkObj.fjclForm }
            this.editObj.xgfjcllist.push(obj)
            // 新增 中的 "修改"
            this.bottomObj.fjclData.list.splice(0)
            this.$set(this.bottomObj.fjclData.list, index, this.tkObj.fjclForm);

            this.$message({
                message: `编辑成功！`,
                type: "success",
            });
        }
        this.otherDatas.loadingList.fjclLoading = false
        this.tkObj.fjclForm = this.$options.data.call(this).tkObj.fjclForm
        this.showObj.fjcl = false
    })
} else {
}