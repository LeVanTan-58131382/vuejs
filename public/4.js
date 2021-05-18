(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
var terms = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit ';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'checkbox-example',
  data: function data() {
    return {
      terms: terms.repeat(20)
    };
  },
  methods: {
    nextStep: function nextStep() {
      this.$validator.validateAll().then(function (result) {
        if (result) {
          alert('You just agreed to conditions without reading it.');
          return;
        } // eslint-disable-next-line


        alert('You actually did not agree?');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "terms" }, [_c("p", [_vm._v(_vm._s(_vm.terms))])]),
    _vm._v(" "),
    _c("div", [
      _c("label", { staticClass: "checkbox is-normal" }, [
        _c("input", {
          directives: [
            {
              name: "validate",
              rawName: "v-validate",
              value: "required",
              expression: "'required'"
            }
          ],
          staticClass: "checkbox-input",
          attrs: { name: "terms", type: "checkbox" }
        }),
        _vm._v(" "),
        _c("span", { staticClass: "checkbox-label" }, [
          _vm._v("\n        I agree to the terms and conditions.\n        "),
          _vm.errors.has("terms")
            ? _c("small", { staticClass: "field-text is-danger" }, [
                _vm._v(_vm._s(_vm.errors.first("terms")))
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      {
        staticClass: "button is-primary",
        attrs: { type: "button" },
        on: { click: _vm.nextStep }
      },
      [_vm._v("Next")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Checkbox.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Checkbox.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=709f6602& */ "./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602&");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js& */ "./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/vee_validate/components/pages/Checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Checkbox.vue?vue&type=template&id=709f6602& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/vee_validate/components/pages/Checkbox.vue?vue&type=template&id=709f6602&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_709f6602___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);