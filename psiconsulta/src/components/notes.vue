<template>
  <div>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-5">
          <div class="card mt-5">
            <div class="card-body">
              <form @submit.prevent="sendTask">
                <div class="from-group">
                  <input
                    v-model="task.title"
                    class="form-control"
                    type="text"
                    placeholder="Insert a task"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    v-model="task.description"
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Insert a description"
                  ></textarea>
                </div>
                <template v-if="edit === false">
                  <button class="btn btn-primary btn-block">Send</button>
                </template>
                <template v-else>
                  <button class="btn btn-primary btn-block">Update</button>
                </template>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Task</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks">
                <td>{{task.title}}</td>
                <td>{{task.description}}</td>
                <td>
                  <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                  <button @click="editTask(task._id)" class="btn btn-secondary">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

export default {
  data() {
    return {
      task: new Task(),
      tasks: [],
      edit: false,
      taskToEdit: ''
    };
  },

  created() {
    this.getTasks();
  },

  methods: {
    sendTask() {
      if (this.edit === false) {
        fetch("http://localhost:3000/notes", {
          method: "POST",
          body: JSON.stringify(this.task),
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getTasks();
          });
      } else {
        fetch("http://localhost:3000/notes/" + this.taskToEdit, {
          method: "PUT",
          body: JSON.stringify(this.task),
          headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getTasks();
            this.edit = false;
          });
      }

      this.task = new Task();
    },
    getTasks() {
      fetch("http://localhost:3000/notes")
        .then(res => res.json())
        .then(data => {
          this.tasks = data;
          console.log(this.tasks);
        });
    },
    deleteTask(id) {
      fetch("http://localhost:3000/notes/" + id, {
        method: "DELETE",
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          this.getTasks();
        });
    },
    editTask(id) {
      fetch("http://localhost:3000/notes/" + id)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.task = new Task(data.title, data.description);
          this.taskToEdit = data._id;
          this.edit = true;
        });
    }
  }
};
</script>

<style>
</style>
