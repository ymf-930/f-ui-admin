<template>
  <page-container desc="基础的列表，可以进行增删改查等操作。">
    <f-card class="task-wrapper" :bordered="false" shadow="never">
      <f-row>
        <f-col span="8">
          <p>进行中的任务</p>
          <p class="f-s-22">6个任务</p>
        </f-col>
        <f-col span="8">
          <p>剩余任务</p>
          <p class="f-s-22">3个任务</p>
        </f-col>
        <f-col span="8">
          <p>任务总耗时</p>
          <p class="f-s-22">120个小时</p>
        </f-col>
      </f-row>
    </f-card>
    <f-collapse-wrap title="基础列表" shadow="none">
      <template #right>
        <f-input :model-value="name" size="small" placeholder="请输入..." search @search="handleSearch"></f-input>
      </template>
      <div class="p16">
        <div class="create-btn mb-16">
          <f-button dashed icon="plus" style="width: 100%">添加</f-button>
        </div>
        <ul class="list-wrap" v-loading="loading">
          <li v-for="item in list" :key="item.id" class="base-list-item">
            <div class="list-item-meta">
              <img :src="item.avatar" alt="" class="avatar" />
              <div class="list-item-meta-content">
                <div class="list-item-meta-title">{{ item.title }}</div>
                <div class="list-item-meta-description">{{ item.desc }}</div>
              </div>
            </div>
            <div class="list-item-content">
              <div class="list-item-content-item" style="width: 55px">
                <span>负责人</span>
                <p>{{ item.author }}</p>
              </div>
              <div class="list-item-content-item">
                <span>开始时间</span>
                <p>{{ item.time }}</p>
              </div>
              <div class="list-item-content-item pt-10" style="width: 180px">
                <f-progress :percent="item.progress" :status="item.status" :active="item.status === 'text'">
                  <span>{{ item.progress }}%</span>
                </f-progress>
              </div>
            </div>
            <div class="list-item-action">
              <action-button type="text" @click="handleEdit(item)">编辑</action-button>
              <action-button type="text" color="danger" @click="handleDelete(item)" confirm>删除</action-button>
            </div>
          </li>
        </ul>
        <div class="mt-16 t-right">
          <f-page
            :total="total"
            v-model:current="page"
            :page-size="size"
            show-elevator
            show-sizer
            show-total
            @change="pageChange"
            @size-change="pageSizeChange"
          ></f-page>
        </div>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
import useTable from '@/hooks/service/useTable'
import { getBaseList } from '@/api/modules/list.api'
import { reactive, toRefs } from 'vue'
import { Message } from 'f-ui-one'

export default {
  name: 'BaseList',
  setup() {
    const query = reactive({
      name: '',
      page: 1,
      size: 10,
    })
    const { loading, getListData, list, total, pageChange, pageSizeChange } = useTable(getBaseList, query)

    function handleSearch(val) {
      query.name = val
      getListData()
    }

    function handleEdit(item) {
      console.log(item)
    }

    function handleDelete(item) {
      console.log(item)
      Message.success('删除成功！')
    }

    // 执行一次内容
    getListData()
    return {
      ...toRefs(query),
      loading,
      list,
      total,
      pageChange,
      pageSizeChange,
      handleSearch,
      handleEdit,
      handleDelete,
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../../../../assets/stylus/base/var.styl"
.task-wrapper {
  text-align: center;
  margin-bottom: 16px;
  :deep(.fei-col) {
    margin: 16px 0;
    p:first-child {
      margin-bottom: 8px;
    }
    &:not(:last-child) {
      border-right: 1px dashed #eee;
    }
  }
}
.list-wrap {
  min-height: 200px;
}
.base-list-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: $border-base;
  .list-item-meta {
    display: flex;
    width: 45%;
    align-items: flex-start;
    font-size: 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      margin-right: 16px;
    }
    .list-item-meta-content {
      flex: 1;
      .list-item-meta-title {
        font-weight: 500;
        margin-bottom: 4px;
        color: $color-text-default;
        font-size: 14px;
        line-height: 22px;
      }
      .list-item-meta-description {
        color: $color-text-secondary;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
  .list-item-content {
    display: flex;
    width: 45%;
    &-item {
      display: inline-block;
      margin-left: 32px;
      color: $color-text-secondary;
      font-size: 14px;
      vertical-align: middle;
    }
  }
  .list-item-action {
    width: 10%;
  }
}
</style>
