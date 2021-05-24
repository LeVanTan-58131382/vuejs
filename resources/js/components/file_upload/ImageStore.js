import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listImages: [],
    },

    getters: {
        getListImages: state => state.listImages,
    },

    mutations: {

        setListImages: (state, images) => (state.listImages = images),

        newImage: (state, image) => {
            //state.listImages.unshift(image); // thêm lên trên
            state.listImages.unshift(image);
        }, 

    },
    actions: {

        async handleGetListImages(context){
            const response = await axios.get("/list_image");

            console.log("images store: " + response.data);

            context.commit('setListImages', response.data);
        },

        async handleAddImage(context, dataForm){
            const data = dataForm.data;
            const config = dataForm.config;

            var imageData;

            await axios
                .post("/upload", data, config)
                .then(function(res) {
                    // controller sẽ trả về response có một tham số
                    // "image" có giá trị của image mới thêm vào CSDL

                    // lấy dữ liệu này để thêm vào danh sách image
                    // listImages mà store đang quản lý
                    imageData = res.data.image;

                    console.log(imageData);

                    context.commit('newImage', imageData);
                })
                .catch(function(err) {
                });
        }
    }
}
);

