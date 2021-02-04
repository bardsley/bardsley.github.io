webpackHotUpdate("perks",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Perks.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Perks.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var C_Users_Adam_Bardsley_Documents_Destiny_perk_coverage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _api_manifest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/manifest */ \"./src/api/manifest.js\");\n/* harmony import */ var _api_getCharacters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/getCharacters */ \"./src/api/getCharacters.js\");\n\n\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: ['membershipType', 'membershipId', 'characterId'],\n  data: function data() {\n    return {\n      categories: {},\n      items: {}\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    return Object(C_Users_Adam_Bardsley_Documents_Destiny_perk_coverage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var characterItems, tempEquipped, tempOnCharacter, tempEquipment, downloadedEquipment;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return Object(_api_manifest__WEBPACK_IMPORTED_MODULE_7__[\"setUpCategories\"])();\n\n            case 2:\n              _this.categories = _context2.sent;\n              _context2.next = 5;\n              return Object(_api_getCharacters__WEBPACK_IMPORTED_MODULE_8__[\"getCharacterItems\"])(_this.membershipType, _this.membershipId, _this.characterId);\n\n            case 5:\n              characterItems = _context2.sent;\n              tempEquipped = characterItems.equipment.data.items;\n              tempOnCharacter = characterItems.inventory.data.items;\n              tempEquipment = Object.assign(tempEquipped, tempOnCharacter);\n              _context2.next = 11;\n              return Promise.all(tempEquipment.map( /*#__PURE__*/function () {\n                var _ref = Object(C_Users_Adam_Bardsley_Documents_Destiny_perk_coverage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {\n                  var itemDef;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          _context.next = 2;\n                          return Object(_api_manifest__WEBPACK_IMPORTED_MODULE_7__[\"getItemDefinition\"])(item.itemHash);\n\n                        case 2:\n                          itemDef = _context.sent;\n                          return _context.abrupt(\"return\", Object.assign(itemDef, item));\n\n                        case 4:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x) {\n                  return _ref.apply(this, arguments);\n                };\n              }()));\n\n            case 11:\n              downloadedEquipment = _context2.sent;\n              // console.log(downloadedEquipment)\n              downloadedEquipment.map(function (item) {\n                var categories = item.itemCategoryHashes ? item.itemCategoryHashes.map(function (hashId) {\n                  _this.categories[hashId].displayProperties.name;\n                }) : [];\n                console.log(item.displayProperties.name, categories);\n              }); // this.items  = downloadedEquipment\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }))();\n  },\n  methods: {\n    getPerksetsOfEquipped: function getPerksetsOfEquipped(character) {\n      return Object(C_Users_Adam_Bardsley_Documents_Destiny_perk_coverage_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                console.log(character);\n\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1BlcmtzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUGVya3MudnVlPzJlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICBIZWxsbyBwZXJrcyBmb3Ige3sgY2hhcmFjdGVySWQgfX1cclxuICAgICAgICA8cHJlPnt7IGl0ZW1zIH19IDwvcHJlPlxyXG4gICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgIHt7Y2F0ZWdvcmllc319XHJcbiAgICAgICAgPC9wcmU+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBzZXRVcENhdGVnb3JpZXMsZ2V0SXRlbURlZmluaXRpb24gfSBmcm9tIFwiQC9hcGkvbWFuaWZlc3RcIjtcclxuaW1wb3J0IHsgZ2V0Q2hhcmFjdGVySXRlbXMgfSBmcm9tIFwiQC9hcGkvZ2V0Q2hhcmFjdGVyc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWydtZW1iZXJzaGlwVHlwZScsJ21lbWJlcnNoaXBJZCcsJ2NoYXJhY3RlcklkJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHt9LFxyXG4gICAgICAgICAgICBpdGVtczoge31cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpZXMgPSBhd2FpdCBzZXRVcENhdGVnb3JpZXMoKVxyXG4gICAgICAgIGxldCBjaGFyYWN0ZXJJdGVtcyA9IGF3YWl0IGdldENoYXJhY3Rlckl0ZW1zKHRoaXMubWVtYmVyc2hpcFR5cGUsdGhpcy5tZW1iZXJzaGlwSWQsdGhpcy5jaGFyYWN0ZXJJZClcclxuICAgICAgICBsZXQgdGVtcEVxdWlwcGVkID0gY2hhcmFjdGVySXRlbXMuZXF1aXBtZW50LmRhdGEuaXRlbXNcclxuICAgICAgICBsZXQgdGVtcE9uQ2hhcmFjdGVyID0gY2hhcmFjdGVySXRlbXMuaW52ZW50b3J5LmRhdGEuaXRlbXNcclxuICAgICAgICBsZXQgdGVtcEVxdWlwbWVudCA9IE9iamVjdC5hc3NpZ24odGVtcEVxdWlwcGVkLHRlbXBPbkNoYXJhY3RlcilcclxuICAgICAgICBsZXQgZG93bmxvYWRlZEVxdWlwbWVudCA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICB0ZW1wRXF1aXBtZW50Lm1hcChhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbURlZiA9IGF3YWl0IGdldEl0ZW1EZWZpbml0aW9uKGl0ZW0uaXRlbUhhc2gpXHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGl0ZW1EZWYsaXRlbSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG93bmxvYWRlZEVxdWlwbWVudClcclxuICAgICAgICBkb3dubG9hZGVkRXF1aXBtZW50Lm1hcCggKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGNhdGVnb3JpZXMgPSBpdGVtLml0ZW1DYXRlZ29yeUhhc2hlcyA/IChpdGVtLml0ZW1DYXRlZ29yeUhhc2hlcy5tYXAoKGhhc2hJZCkgPT4geyB0aGlzLmNhdGVnb3JpZXNbaGFzaElkXS5kaXNwbGF5UHJvcGVydGllcy5uYW1lICB9KSApIDogW11cclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5kaXNwbGF5UHJvcGVydGllcy5uYW1lLCBjYXRlZ29yaWVzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8gdGhpcy5pdGVtcyAgPSBkb3dubG9hZGVkRXF1aXBtZW50XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFzeW5jIGdldFBlcmtzZXRzT2ZFcXVpcHBlZChjaGFyYWN0ZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhcmFjdGVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQU1BO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQTVCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Perks.vue?vue&type=script&lang=js&\n");

/***/ })

})