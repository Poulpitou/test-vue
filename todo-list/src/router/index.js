import Vue from 'vue'
import Router from 'vue-router'
import TaskList from '@/components/task-list/taskList.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'TaskList',
    component: TaskList
  }]
})
