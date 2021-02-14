<template>
  <div>
    <h2>版本列表</h2>
    <el-table
      :data="dataList">
      <el-table-column prop="Name" label="版本">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="invoke(scope.row)">
            {{scope.row.Name}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <dialog-add-version
      v-if="isShowDialog"
      :dialogVisible="isShowDialog"
      @dialogCb="dialogCb">
    </dialog-add-version>
    <el-row>
      <el-button type="primary" size="mini" @click="addVersion">新增</el-button>
    </el-row>
  </div>
</template>

<script>
import dialogAddVersion from './components/dialog-add-version';
import axios from 'axios';

export default {
  components: {
    dialogAddVersion,
  },
  data() {
    return {
      dataList: [],
      isShowDialog: false,
      Name: this.$route.query.Name,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    addVersion() {
      this.isShowDialog = true;
    },
    dialogCb() {
      this.isShowDialog = false;
    },
    fetch() {
      const param = { Namespace: 'test' };
      axios.post('http://127.0.0.1:30393/ListRevisionAction', JSON.stringify(param))
        .then(({ data }) => {
          this.dataList = data.List;
        });
    },
    invoke(row) {
      this.$router.push(`invoke?Name=${row.Name}`);
    },
  },
};
</script>

<style scoped>

</style>
