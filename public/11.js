(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var v = new vee_validate__WEBPACK_IMPORTED_MODULE_0__["Validator"]();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'validator-example',
  data: function data() {
    return {
      email: '',
      name: '',
      nameError: '',
      emailError: ''
    };
  },
  watch: {
    email: function email() {
      this.validateEmail();
    },
    name: function name() {
      this.validateName();
    }
  },
  methods: {
    validateForm: function validateForm() {
      var _this = this;

      Promise.all([this.validateEmail(), this.validateName()]).then(function () {
        if (_this.nameError || _this.emailError) {
          console.log('Hold it right there!');
          return;
        }

        console.log('You may pass.');
      });
    },
    validateEmail: function validateEmail() {
      var _this2 = this;

      return v.verify(this.email, 'required|email', {
        name: 'Email'
      }).then(function (result) {
        _this2.emailError = '';

        if (result.valid) {
          return;
        }

        _this2.emailError = result.errors[0];
      });
    },
    validateName: function validateName() {
      var _this3 = this;

      return v.verify(this.name, 'required|min:3', {
        name: 'Name'
      }).then(function (result) {
        _this3.nameError = '';

        if (result.valid) {
          return;
        }

        _this3.nameError = result.errors[0];
      });
    },
    clearErrors: function clearErrors() {
      var _this4 = this;

      this.email = '';
      this.name = ''; // wait for validation to finish up!

      this.$nextTick(function () {
        _this4.nameError = '';
        _this4.emailError = '';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-multiline" }, [
    _c("div", { staticClass: "field" }, [
      _c("label", { staticClass: "field-label", attrs: { for: "email" } }, [
        _vm._v("Email")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email"
          }
        ],
        staticClass: "input",
        class: { "is-danger": _vm.emailError },
        attrs: {
          id: "email",
          name: "email",
          type: "email",
          placeholder: "Enter email"
        },
        domProps: { value: _vm.email },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.emailError
        ? _c("small", { staticClass: "field-text is-danger" }, [
            _vm._v(_vm._s(_vm.emailError))
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("label", { staticClass: "field-label", attrs: { for: "name" } }, [
        _vm._v("Name")
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name"
          }
        ],
        staticClass: "input",
        class: { "is-danger": _vm.nameError },
        attrs: {
          id: "name",
          name: "name",
          type: "text",
          placeholder: "Enter name"
        },
        domProps: { value: _vm.name },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.name = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.nameError
        ? _c("small", { staticClass: "field-text is-danger" }, [
            _vm._v(_vm._s(_vm.nameError))
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-primary",
        attrs: { type: "button", name: "button" },
        on: { click: _vm.validateForm }
      },
      [_vm._v("Validate All")]
    ),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-danger",
        attrs: { type: "button", name: "button" },
        on: { click: _vm.clearErrors }
      },
      [_vm._v("Clear")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Manual.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Manual.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manual.vue?vue&type=template&id=92e8d376& */ "./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376&");
/* harmony import */ var _Manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manual.vue?vue&type=script&lang=js& */ "./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vee_validate/components/pages/Manual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Manual.vue?vue&type=template&id=92e8d376& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Manual.vue?vue&type=template&id=92e8d376&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Manual_vue_vue_type_template_id_92e8d376___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);