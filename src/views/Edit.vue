<template>
  <div class="edit">
    <h3>Edita la tarea</h3>
    <EditTask/>
  </div>
</template>

<script>
import EditTask from "../components/EditTask.vue"

export default {
  name: 'Edit',
  components: {
    EditTask
  }
}
</script>