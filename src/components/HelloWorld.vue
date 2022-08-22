<template>
  <a-select
    v-model:value="value"
    style="width: 300px"
    :options="items.map(item => ({ value: item }))"
  >
    <template #dropdownRender="{ menuNode: menu }">
      <!-- <v-nodes :vnodes="menu" /> -->
     <s-table
        :columns="columns"
        :scroll="{ y: 200, x:100 }"
        :pagination="false"
        :data-source="dataSource"
        :rowKey="name"
      ></s-table>
    </template>
  </a-select>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

let index = 0;
export default defineComponent({
  components: {
    PlusOutlined,
    VNodes: (_, { attrs }) => {
      return attrs.vnodes;
    },
  },
  setup() {
    const items = ref(['jack', 'lucy']);
    const value = ref('lucy');
    const dataSource = [
      {name:'jack'},
      {name:'lucy1'},
      {name:'lucy2'},
      {name:'lucy3'},
      {name:'lucy4'},
      {name:'lucy5'},
    ]
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'name',
      },
    ]
    const addItem = () => {
      console.log('addItem');
      items.value.push(`New item ${index++}`);
    };
    return {
      items,
      value,
      addItem,
      dataSource,
      columns
    };
  },
});
</script>