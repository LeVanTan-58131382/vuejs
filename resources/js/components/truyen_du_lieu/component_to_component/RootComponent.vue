<template>
    <div id="app">
        <ComponentFirst />
        <hr />
        <ComponentSecond />
    </div>
</template>

<script>
import ComponentFirst from './ComponentFirst.vue';
import ComponentSecond from './ComponentSecond.vue';



export default {
    name: 'App',
    components: {
        ComponentFirst,
        ComponentSecond
    },
    data() {
        return {
            message: 'Message default.'
        }
    }
}
</script>