(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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

var emailsDB = ["logaretm1@gmail.com"];
vee_validate__WEBPACK_IMPORTED_MODULE_0__["Validator"].extend("unique", {
  validate: function validate(value) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        if (emailsDB.indexOf(value) === -1) {
          return resolve({
            valid: true
          });
        }

        return resolve({
          valid: false,
          data: {
            message: "".concat(value, " is already taken.")
          }
        });
      }, 200);
    });
  },
  getMessage: function getMessage(field, params, data) {
    return data.message;
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "backend-example",
  data: function data() {
    return {
      email: null
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      // save the email value.
      emailsDB.push(this.email);
      this.email = ""; // reset state, flags and clears errors.

      this.$nextTick(function () {
        _this.$validator.reset();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "column is-12" }, [
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
          },
          {
            name: "validate",
            rawName: "v-validate",
            value: "required|email|unique",
            expression: "'required|email|unique'"
          }
        ],
        staticClass: "input",
        class: { "is-danger": _vm.errors.has("email") },
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
      _vm.errors.has("email")
        ? _c("small", { staticClass: "field-text is-danger" }, [
            _vm._v(_vm._s(_vm.errors.first("email")))
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-primary",
        attrs: { type: "button" },
        on: { click: _vm.submit }
      },
      [_vm._v("Submit")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Backend.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Backend.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Backend.vue?vue&type=template&id=2131dd25& */ "./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25&");
/* harmony import */ var _Backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Backend.vue?vue&type=script&lang=js& */ "./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vee_validate/components/pages/Backend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Backend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Backend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Backend.vue?vue&type=template&id=2131dd25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Backend.vue?vue&type=template&id=2131dd25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Backend_vue_vue_type_template_id_2131dd25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);