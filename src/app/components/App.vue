<template>
<div>
    <nav class="navbar navbar-light bg-light">
        <a href="/" class="navbar-brand">MEVN</a>
    </nav>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="addTask">
                            <div class="form-group">
                                <input type="text" v-model="task.title" placeholder="Escribe el título aquí" class="form-control">

                            </div>
                            <div class="form-group">
                                <textarea cols="30" rows="10" class="form-control" v-model="task.description" placeholder="Escribe la descripción aquí">

                                </textarea>
                            </div>

                            <button class="btn btn-primary btn-block">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

// class Task {
//     constructor(title, description){
//         this.title = title;
//         this.description = description;
//     }
// }
export default {
    data() {
        return {
          task: {
            title:'',
            description: ''
          }
          
        }
    },

    methods: {
        addTask() {
            // this.task = new Task()

            fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify(this.task),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => console.log(data))
        //    console.log(this.task)
           

            this.task.title = '';
            this.task.description = '';
        }
    }
}
</script>

