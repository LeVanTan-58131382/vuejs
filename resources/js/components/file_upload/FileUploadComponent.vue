<template>
<div>
    <div class="card">
        <div class="card-header">Laravel Vue JS File Upload Demo</div>

        <div class="card-body">
            <div v-if="message != ''" class="alert alert-success">
                {{ message }}
            </div>

            <form @submit="addImage" enctype="multipart/form-data">
                <input
                    type="file"
                    multiple="multiple"
                    class="form-control"
                    v-on:change="onChange"
                />
                <button class="btn btn-primary btn-block">Upload</button>
            </form>

            <br />
            <br />

            <div>
                <ul v-for="image in listProduct" :key="image.name">
                    <li>
                        <p>{{ image.name }}</p>
                        <img
                            :src="image.path"
                            alt=""
                            style="width:100px; height: 100px;"
                        />
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            name: "",
            file: "",
            message: "",
        };
    },

    computed:{
        listProduct(){
            return this.$store.state.listImages;
        },

        ...mapGetters(["getListImages"]),
    },
    created() {
        this.getListImage();
    },


    methods: {

        ...mapActions(["getListImages"]),

        onChange(e) {
            this.file = e.target.files[0];
        },
        formSubmit(e) {
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            let data = new FormData();
            data.append("file", this.file);

            axios
                .post("/upload", data, config)
                .then(function(res) {
                    existingObj.message = res.data.message;
                })
                .catch(function(err) {
                    existingObj.output = err;
                });
        },

        // getListImage() {
        //     axios
        //         .get("/list_image")
        //         .then(response => {
        //             this.images = response.data;
        //         })
        //         .catch(error => {
        //             // handle error
        //             console.log(error);
        //         });
        // }

        getListImage(){
            this.$store.dispatch("handleGetListImages");
        },

        addImage(e){
            e.preventDefault();
            let existingObj = this;

            const config = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            };

            let data = new FormData();
            data.append("file", this.file);

            this.$store.dispatch("handleAddImage", {"config": config, "data": data});
        }
    }
};
</script>
