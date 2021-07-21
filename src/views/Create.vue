<template>
  <div class="create">
    <h3>Crea una nueva tarea</h3>
    <CreateTask/>
  </div>
</template>

<script>
import CreateTask from "../components/CreateTask.vue"

export default {
  name: 'Create',
  components: {
    CreateTask
  }
}
</script>