<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-12">
                <input id="name" v-model="task.name" type="text" required name="name" class="form-control" placeholder="Nueva tarea...">
            </div>
            <div class="col-12">
                <router-link :to ="{name:'Home'}" class="btn bt m-1" @click="addTask">Crear Tarea</router-link>
                <router-link :to ="{name:'Home'}" class="btn bt m-1">Cancelar</router-link>
            </div>
        </form>
    </div>
    
</template>

<script>
import { services } from "../../services/services";
export default {
    name: 'CreateTask',
    components:{
    },
    data(){
        return{
            task: {
                id: null,
                name: null,
                isDone: false,
            },
            errors: [],
        }
    },
    methods: {
        async addTask() {
            var taskName = {name : this.task.name}
            const res = await services.createTask(taskName)
            this.task = res.data
          
        },
    }
}
</script>

<style>

.bt {
    background-color: #9B72AA;
    color: #FFF5DE;
}

input:required {
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
}


</style>