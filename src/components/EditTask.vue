<template>
    <div class="container">
        <form class="row g-3">
            <div class="col-12">
                <input id="name" v-model="task.name" type="text" name="name" class="form-control">
            </div>
            <div class="col-12">
                <router-link :to ="{name:'Home'}" class="btn bt m-1" @click="editTask(task)">Editar Tarea</router-link>
                <router-link :to ="{name:'Home'}" class="btn bt m-1">Cancelar</router-link>
            </div>
        </form>
    </div>
    
</template>

<script>
import { services } from "../../services/services";
export default {
    name: 'EditTask',
    components:{
    },
    data(){
        return{
            task: [],
        }
    },
    methods: {
        async editTask(task) {
            var data = {
                id: task.id,
                name: task.name,
               // isDone: task.isDone
            };
            const res = await services.editTask(task.id, data);
            this.task = res.data;
            // this.$router.go();
            console.log(task.id);

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