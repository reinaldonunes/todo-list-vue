<template>
    <section class="taskView">
        <header class="container text-center pt-5 pb-2 mb-3">
            <h1 class="fw-normal text-primary h-plus-size">Tarefas</h1>
            <InputTask></InputTask>
        </header>
        <router-link to="/cep" class="text-decoration-none m-auto d-block text-secondary" style="width:fit-content">Verificar CEP</router-link>
        <TaskList></TaskList>
    </section>
</template>

<script>
    import InputTask from '@/components/InputTask.vue';
    import TaskList from '@/views/TaskList.vue';
    
    export default {
        name: "TaskView",
        components: {
            InputTask,
            TaskList,
        }
    }
</script>

<style>

</style>