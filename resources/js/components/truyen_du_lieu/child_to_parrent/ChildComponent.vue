<template>
    <div title="Component con" style="background-color:green; color: white; padding: 5px">
        <input
            placeholder="Enter Text Here"
            v-model="tempMessage"
        />
        <div>
            <button @click="sendMessage">@Emit event</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    data() {
        return {
            tempMessage: ''
        }
    },
    methods: {
        sendMessage() {
            this.$emit('inputData', this.tempMessage);
            this.tempMessage = '';
        }
    }
};
</script>