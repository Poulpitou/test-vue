import task from '../task/task.vue'

export default {
  name: 'TaskList',
  data: function () {
    return {
      tasks: [{
        label: 'faire les courses',
        closed: false
      }]
    }
  },
  methods: {

  },
  components: {
    task
  }
}
