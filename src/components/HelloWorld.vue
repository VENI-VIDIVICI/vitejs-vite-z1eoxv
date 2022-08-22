<template>
  <a-select
    v-model:value="value"
    :getPopupContainer="getPopupContainer"
    style="width: 200px"
    :options="items.map(item => ({ value: item }))"
  >
    <template #dropdownRender="{ menuNode: menu }">
      <!-- <v-nodes :vnodes="menu" /> -->
     <s-table
        :columns="columns"
        :pagination="false"
        :scroll="{ y: 100, x: 200 }"
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
      {name:'jack',key:1},
      {name:'lucy1',key:2},
      {name:'lucy2',key:3},
      {name:'lucy3',key:4},
      {name:'lucy4',key:5},
      {name:'lucy5',key:6},
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
    const getPopupContainer = () => document.body
    return {
      items,
      value,
      addItem,
      dataSource,
      columns,
      getPopupContainer
    };
  },
});
</script>