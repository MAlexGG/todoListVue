<template>
    <div class="container">
        <h3>Lista de tareas</h3>
        <div class="container ct-list">
          <div class="tasks" v-for="task of tasks" :key="task.id"> 
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck">
            </div>
            <p>{{task.name}}</p>
            <button class="bt bt-round" @click="deleteTask(task.id)"><img src="../assets/garbage.svg" alt="delete" class="img-garbage"></button>
            <router-link v-bind:to="'/edit/'+ task.id" class="bt bt-round"><img src="../assets/lapiz.svg" alt="edit" class="img-pencil"></router-link>
          </div>
        
        </div>
    </div>
</template>

<script>

import { services } from "../../services/services";
const baseURL = "http://localhost:3000/";


export default {
  name:'List',
  components:{ 

  },
  data() {
    return {
      tasks:[],
      tasksTitle:''
    }
  },
  async created () {
    try {
      const res = await services.getAll(baseURL + "tasks/")
      this.tasks = res.data;
      } catch (e) {
      console.error(e)
    }
  },
  methods: {
      async deleteTask(id){
      const res = await services.deleteTask(id)
      this.task = res.data
      this.$router.go();
    }
  }
}

</script> 

<style>
.ct-list{
  margin-top: 2rem ;
}

.tasks {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.bt-round {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  margin-left: 2%;
}

.img-garbage{
  width: 13px;
  height:auto;
  filter: invert(95%) sepia(76%) saturate(380%) hue-rotate(304deg) brightness(104%) contrast(102%);
}

.img-pencil{
  width: 13px;
  height:auto;
  filter: invert(95%) sepia(76%) saturate(380%) hue-rotate(304deg) brightness(104%) contrast(102%);
}
  

</style>