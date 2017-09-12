import task from '../task/task.vue'

export default {
  name: 'TaskList',
  data: function () {
    return {
      inputLabel: '',
      tasks: [{
        label: 'faire les courses',
        closed: true
      }]
    }
  },
  methods: {
    addTask: function (event) {
      if (this.inputLabel !== '') {
        this.tasks.push({ label: this.inputLabel, closed: false });
        this.inputLabel = '';
      }
    },
    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    }
  },
  components: {
    task
  }
}
