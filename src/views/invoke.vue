<template>
  <div>
    <div v-html="formatData"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formatData: '',
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      const param = { Namespace: 'test' };
      axios.post('http://127.0.0.1:30393/InvokeAction', JSON.stringify(param))
        .then(({ data }) => {
          this.formatData = JSON.stringify(data);
        });
    },
  },
};
</script>

<style scoped>

</style>
