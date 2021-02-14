<template>
  <el-dialog
    title="新增服务"
    :visible="dialogShow"
    width="500px"
    :before-close="close">
    <el-form size="mini" :model="form">
      <el-form-item label="属性名称">
        <el-input size="mini" v-model="form.xxx"></el-input>
      </el-form-item>
    </el-form>
    <div>
      <el-button type="primary" size="mini" @click="save">提交</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  props: ['dialogVisible'],
  data() {
    return {
      form: {
        xxx: '',
      },
      dialogShow: false,
    };
  },
  created() {
    this.dialogShow = this.dialogVisible;
  },
  methods: {
    save() {},
    close() {
      this.$emit('dialogCb');
    },
  },
};
</script>

<style scoped>

</style>
