<template>
    <div title="Component First" style="background-color:green; color: white; padding: 5px">
        <input
            placeholder="Enter Text Here"
            v-model="tempMessage"
        />
        <div>
            <button @click="sendMessage">Emit data</button>
        </div>
    </div>
</template>

<script>
import EventBus from './EventBus.js';

export default {
    name: "ComponentFirst",
    data() {
        return {
            tempMessage: ''
        }
    },
    methods: {
        sendMessage() {
            EventBus.$emit('inputData', this.tempMessage);
            this.tempMessage = '';
        }
    }
};
</script>