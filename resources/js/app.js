/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default); // *1

Vue.component('parrent-to-child', require('./components/truyen_du_lieu/parrent_to_child/ParrentComponent.vue').default); // *2

Vue.component('child-to-parrent', require('./components/truyen_du_lieu/child_to_parrent/ParrentComponent.vue').default); // *3

Vue.component('component-to-component', require('./components/truyen_du_lieu/component_to_component/RootComponent.vue').default); // *4

// Form Validation
Vue.component('form-validation-sample-1', require('./components/form_validation/sample_1/SampleComponent.vue').default);
Vue.component('form-validation-sample-2', require('./components/form_validation/sample_2/SampleComponent.vue').default);
Vue.component('form-validation-sample-3', require('./components/form_validation/sample_3/SampleComponent.vue').default);


// Form Validation Vee_Validate
Vue.component('form-vee-validation-sample-3', require('./components/form_validation_vee_validate/sample_3/SampleComponent.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

/// Sử dụng VueX
// Ở cách dùng VueX này thì không cần khai báo theo kiểu *1, *2,... mà ta chỉ cần khai báo thêm ___'template: "<App/>"___'
import Vue from "vue";
import App from "./components/truyen_du_lieu/vuex/components/App";
import store from "./components/truyen_du_lieu/vuex/stores/store";

Vue.config.productionTip = false;

/* eslint-disable no-new */
const app_vuex = new Vue({
  el: "#app_vuex",
  store,
  components: { App },
  template: "<App/>"
});

/// Todo app
import AppTodo from './components/toto_app/App';

Vue.config.productionTip = false

new Vue({
  el: '#app_todo',
  template: '<AppTodo/>',
  components: { AppTodo }
})


// Form Vuelidate
import Vuelidate from 'vuelidate';

import AppVuelidate from './components/form_validation/sample_4/SampleComponent';

Vue.use(Vuelidate);

new Vue({
    el: '#app_vuelidate',
    render: h => h(AppVuelidate)
});


// Vue Table
import AppVueTable from './components/table/vue_table/App'

Vue.config.productionTip = false

new Vue({
  el: '#app_vue_table',
  template: '<AppVueTable/>',
  components: { AppVueTable }
})


/// Slot
import AppSlot from './components/slot/App'

Vue.config.productionTip = false

new Vue({
  el: '#app_slot',
  template: '<AppSlot/>',
  components: { AppSlot }
})


/// Layout wrapper components
import AppLayoutWrapperComponents from './components/layout_wrapper_components/App';
import routerLayoutWrapperComponents from './components/layout_wrapper_components/router.js';

Vue.config.productionTip = false;

new Vue({
  router: routerLayoutWrapperComponents,
  el: '#app_layout_wrapper_components',
  template: '<AppLayoutWrapperComponents/>',
  components: { AppLayoutWrapperComponents }
  //render: h => h(AppLayoutWrapperComponents),
});//.$mount('#app_layout_wrapper_components');



/// Event sample 1 
import AppEventSample_1 from './components/event/event_sample_1/App'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app_event_sample_1",
  components: { AppEventSample_1 },
  template: "<AppEventSample_1/>"
});


/// Callback Props
import AppCallbackProps from "./components/truyen_du_lieu/callback_props/App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app_callback_props",
  components: { AppCallbackProps },
  template: "<AppCallbackProps/>"
});


/// Layout Template 
import AppLayoutTemplate from "./components/layout_template/App.vue";
import router from "./components/layout_template/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(AppLayoutTemplate)
}).$mount("#app_appLayout_emplate");



/// Button Async Await Click Listener
import AppButtonAsyncAwaitClickListener from "./components/button_async_await_click_listener/App.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app_button_async_await_click_listener",
  components: { AppButtonAsyncAwaitClickListener },
  template: "<AppButtonAsyncAwaitClickListener/>"
});



// V-model with Vue Object
import AppVModel from "./components/v_model/App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(AppVModel)
}).$mount("#app_v_model");



/// Loading state for vue-axios requests ( with Vuex)
import axios from 'axios';
import VueAxios from 'vue-axios';
import AppLoadingState from './components/loading_state_vue_axios_with_vuex/App.vue';
import storeAppLoadingState from './components/loading_state_vue_axios_with_vuex/store.js';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  store: storeAppLoadingState,
  el: "#app_loading_state",
  components: { AppLoadingState },
  template: "<AppLoadingState/>"
});