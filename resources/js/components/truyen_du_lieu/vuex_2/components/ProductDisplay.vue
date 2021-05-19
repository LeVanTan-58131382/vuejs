<template>
    <div>
        <h1><b>List Product</b></h1>
            <ul id="example-1">
                <li v-for="product in listProduct" :key="product.name">
                    <p><b>id: </b>{{ product.id }}</p>
                    <p><b>name: </b> {{ product.name }}</p>
                    <p>----------</p>
                </li>
            </ul>
        <br>
        <div>
            <input type="text" v-model="productIdInput" placeholder="Nhập mã product" />
            <input type="text" v-model="productNameInput" placeholder="Nhập tên product" />
            <button @click="addProductToList">Add</button>
        </div>
        <br>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "ProductDisplay",
    data(){
        return {
            productNameInput: "",
            productIdInput: ""
        }
    },
    computed: {
        listProduct(){
            return this.$store.state.listProduct;
        },
        
        ...mapGetters(["getListProduct"]),
    },
    methods: {
        addProductToList() {
            this.$store.dispatch("handleAddProductToList", {"id": this.productIdInput, "name": this.productNameInput});
        }
    }
}
</script>