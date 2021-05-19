<template>
    <div>
        <h1><b>User info</b></h1>
        <h2>User id: {{ userId }} (data from computed)</h2>
        <h2>User name: {{ userName }} (data from computed)</h2>
        <br>
        <div>
            <input type="text" v-model="userNameInput"/>
            <button @click="changeUserName">Change user name</button>
        </div>
        <br>
        <div>
            <div>{{ getUserId }}</div>
            <div>{{ getUserName }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "UserDisplay",
    data(){
        return {
            userNameInput: ""
        }
    },
    computed: {
        userName(){
            return this.$store.state.user.name;
        },
        userId(){
            return this.$store.state.user.id;
        },
        
        ...mapGetters(["getUserName", "getUserId"]),
    },
    methods: {
        changeUserName() {
            this.$store.dispatch("handleChangeUserName", this.userNameInput);
        }
    }
}
</script>