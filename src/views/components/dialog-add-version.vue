<template>
  <el-dialog
    title="新增版本"
    :visible="dialogShow"
    width="500px"
    :before-close="close">
    <el-form inline size="mini" :model="form">
      <el-form-item label="name">
        <el-input class="w-200" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="文件上传">
        <el-upload
          class="upload-demo"
          action="https://127.0.0.1:/30393/Upload"
          multiple
          :limit="3"
          :on-success="handleSuccess"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
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
    handleSuccess(response) {
      console.log(response);
    },
    save() {},
    close() {
      this.$emit('dialogCb');
    },
  },
};
</script>

<style scoped>

</style>
