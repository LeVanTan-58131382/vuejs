<template>
    <div title="Component Seconds" style="background-color:blue; color: white; padding: 5px">Component B: {{msg}}</div>
</template>

<script>
import EventBus from './EventBus.js';

export default {
    name: "ComponentSecond",
    data() {
        return {
            msg: ''
        }
    },
    mounted() {
        EventBus.$on('inputData' ,payLoad => {
            this.msg = payLoad;
        });
    }
};
</script>