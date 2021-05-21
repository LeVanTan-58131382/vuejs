<template>
    <div id="app">
        <section>
            <button @click="bounce = !bounce">Bounce</button>
            <br />
            <transition name="bounce">
                <img v-if="bounce" src="/memory_fruit/apple.PNG" alt="" />
            </transition>
        </section>
        <section>
            <button @click="roll = !roll">Roll</button>
            <br />
            <transition name="roll">
                <img v-if="roll" src="/memory_fruit/apple.PNG" alt="" />
            </transition>
        </section>
    </div>
</template>

<script>
export default {
    name: "AppAnimation",
    data() {
        return {
            bounce: false,
            roll: false
        };
    }
};
</script>

<style scoped>
section {
    min-height: 300px;
}

.bounce-enter-active{
    animation: bounce-in .5s;
}

.bounce-leave-active{
    animation: bounce-in .5s reverse;
}

.roll-enter-active{
    animation: roll-in .5s;
}

.roll-leave-active{
    animation: roll-in .5s reverse;
}


@keyframes bounce-in {
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1.5);
    }
    100%{
        transform: scale(1);
    }
}

@keyframes roll-in {
    0%{
        transform: scale(0) rotateZ(0deg) translateX(-250px);
    }
    25%{
        opacity: 1;
    }
    100%{
        transform: scale(1) rotateZ(360deg) translateX(0px);
    }
}

</style>
