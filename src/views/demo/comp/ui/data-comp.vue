<template>
  <page-container desc="数据类别的组件...">
    <f-collapse-wrap title="Table 表格" shadow="none" class="mb-20">
      <div class="p10">
        <f-table :columns="columns" :data="list" border></f-table>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Page 分页器" shadow="none" class="mb-20">
      <div class="p10">
        <f-page :total="100" show-elevator show-sizer show-total></f-page>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Tree 树形结构" shadow="none" class="mb-20">
      <div class="p10">
        <f-tree :data="data" @select-change="handleSelect"></f-tree>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>

export default {
  name: 'DataComp',
  components: {},
  data() {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '出生日期',
          key: 'birthday',
        },
        {
          title: '地址',
          key: 'address',
        },
      ],
      list: [
        {
          name: '王小明',
          age: 18,
          birthday: '1990-04-22',
          address: '北京市朝阳区芍药居',
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '1990-11-11',
          address: '北京市海淀区西二旗',
        },
        {
          name: '李小红',
          age: 30,
          birthday: '1985-02-05',
          address: '上海市浦东新区世纪大道',
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '1993-07-11',
          address: '深圳市南山区深南大道',
        },
        {
          name: '张小发',
          age: 33,
          birthday: '1999-12-12',
          address: '南京市龙眠大道',
        },
      ],
      data: [
        {
          title: '一级 1',
          expand: true,
          children: [
            {
              title: '二级 1-1',
              expand: true,
              children: [{ title: '三级 1-1-1' }, { title: '三级 1-1-2' }],
            },
            {
              title: '二级 1-2',
              expand: true,
              children: [{ title: '三级 1-2-1' }, { title: '三级 1-2-2' }],
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleSelect(selected, node) {
      console.log(node)
    },
  },
}
</script>
