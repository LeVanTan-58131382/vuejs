<template>
    <div title="Component con" style="background-color:green; color: white; padding: 5px">{{msg}}</div>
</template>

<script>
export default {
    name: "ChildComponent",
    props: {
        msg: String
    }
};
</script>