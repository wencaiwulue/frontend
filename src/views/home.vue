<template>
  <div>
    <h2>服务列表</h2>
    <dialog-add-service
      v-if="isShowDialog"
      :dialogVisible="isShowDialog"
      @dialogCb="dialogCb">
    </dialog-add-service>
    <el-table
      :data="list">
      <el-table-column label="服务名称">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="goVersion(scope.row)">
            {{scope.row.Name}}
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="CreateTime" label="创建时间"></el-table-column>
    </el-table>
    <el-row>
      <el-button type="primary" size="mini" @click="addService">新增</el-button>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';
import dialogAddService from './components/dialog-add-service';

export default {
  components: {
    dialogAddService,
  },
  data() {
    return {
      form: {
        userName: '',
      },
      dataList: [
        {
          serverName: 'serverName',
        },
      ],
      result: '',
      fileList: [],
      list: [],
      isShowDialog: false,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    addService() {
      this.isShowDialog = true;
    },
    dialogCb() {
      this.isShowDialog = false;
    },
    goVersion(row) {
      this.$router.push(`version?Name=${row.Name}`);
    },
    submit() {
      axios.get('http://127.0.0.1:30393/test', this.form)
        .then((result) => {
          this.result = result;
        });
    },
    fetch() {
      const param = { Namespace: 'test' };
      axios.post('http://127.0.0.1:30393/ListServiceAction', JSON.stringify(param))
        .then(({ data }) => {
          this.list = data.List;
        });
    },
  },
};
</script>

<style scoped>
  .w-200 {
    width: 200px;
  }
</style>
