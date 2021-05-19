<template>
    <div>
        <form id="app" @submit="checkForm" action="#" method="get" novalidate="true">
  
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>

        <p>
            Given a budget of 100 dollars, indicate how much
            you would spend on the following features for the
            next generation Star Destroyer:
        </p>

        <p>
            <input type="number" name="weapons" v-model.number="weapons"> Weapons <br/>
            <input type="number" name="shields" v-model.number="shields"> Shields <br/>
            <input type="number" name="coffee" v-model.number="coffee"> Coffee <br/>
            <input type="number" name="ac" v-model.number="ac"> Air Conditioning <br/>
            <input type="number" name="mousedroids" v-model.number="mousedroids"> Mouse Droids <br/>
        </p>

        <p>
            Current Total: {{total}}
        </p>

        <p>
            <input type="submit" value="Submit">  
        </p>

        </form>
    </div>
</template>

<script>
export default {
    name: "SampleComponent",
    data() {
        return {
            errors:[],
            weapons:0,
            shields:0,
            coffee:0,
            ac:0,
            mousedroids:0
        }
    },
    computed:{
     total:function() {
       //must parse cuz Vue turns empty value to string
       return Number(this.weapons)+
         Number(this.shields)+
         Number(this.coffee)+
         Number(this.ac+this.mousedroids);
     }
    },
    methods:{
        checkForm:function(e) {
        this.errors = [];
        if(this.total != 100) this.errors.push("Total must be 100!");
        if(!this.errors.length) return true;
        e.preventDefault();
        }
    }
};
</script>

<style scoped>
    input {
  margin-left: 10px;
  width: 50px;
}

input[type=submit] {
  width: 100px;
}
</style>