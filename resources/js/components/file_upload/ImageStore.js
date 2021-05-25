import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listFiles: [],
        message: "",
    },

    getters: {
        getListFiles: state => state.listFiles,

        getMessage: state => state.message,
    },

    mutations: {

        setListFiles: (state, files) => (state.listFiles = files),

        setMessage: (state, message) => {
            
            state.message = message; // chạy xong câu lệnh này, 2 giây sau sẽ chạy câu lệnh phía dưới

            setTimeout(function(){
                state.message = ""; // nhằm tắt thông báo đi
            }, 2000);
        },

        newFile: (state, file) => {
            //state.listFiles.unshift(File); // thêm lên trên
            state.listFiles.push(file);
        },

        removeFile: (state, fileData) => {

            //console.log(fileData);

            state.listFiles = state.listFiles.filter(file => file.id !== fileData.id);


            // trên màn hình xáo lun các ảnh có cùng tên với ảnh đã được xóa, dù csdl đã
            // được xóa tuy nhiên để giao diện logic thì nên xóa trên giao diện lun


            state.listFiles = state.listFiles.filter(file => file.name !== fileData.name);
        }

    },
    actions: {

        async handleSetMessage(context, message){
            context.commit('setMessage', message);
        },

        async handleGetListFiles(context){
            const response = await axios.get("/list_file");

            //console.log("Files store: " + response.data);

            context.commit('setListFiles', response.data);
        },

        async handleAddFile(context, dataForm){
            
            const data = dataForm.data;
            const config = dataForm.config;

            var fileData;

            await axios
                .post("/upload", data, config)
                .then(function(res) {
                    // controller sẽ trả về response có một tham số
                    // "File" có giá trị của File mới thêm vào CSDL

                    // lấy dữ liệu này để thêm vào danh sách File
                    // listFiles mà store đang quản lý
                    fileData = res.data.file;

                    //console.log(FileData);
                    //console.log(res.data.message);

                    context.commit('newFile', fileData);

                    context.commit('setMessage', res.data.message);
                })
                .catch(function(err) {
                });
        },

        async handleDeleteFile(context, id){
            //console.log("delete");
            await axios.delete(`/delete_file/${id}`)
                    .then(function(res){

                        //console.log(res.data.message);
                        let fileData = res.data.file;
                        //console.log("data file: " + fileData);

                        context.commit('removeFile', fileData);
                        context.commit('setMessage', res.data.message);
                    })
                    .catch(function(err) {
                    });
        },
    }
}
);

