/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection{\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n\n  html(str) {\n    if (typeof str === \"string\") {\n      this.forEach ((node) => {\n        node.innerHTML = str;\n      });\n    } else if (this.nodes.length > 0) {\n      return this.nodes[0].innerHTML;      \n    }\n  }\n\n  empty() {\n    this.html('');\n  }\n\n  append(el) {\n    //append outerHTML of each element in the argument\n    //to the innerHTML of each elementinthe DOMNodeCollection.\n    //DOMNodeCollectionObj.append(someOtherObj)\n    this.forEach ((node) => {\n      node.innerHTML.append(el.outerHTML);\n    })\n  }\n\n  attr(attribute, val) {\n    if (typeof val === \"string\") {\n      this.forEach(node => node.setAttribute(attribute, val));\n    } else {\n      return this.nodes[0].getAttribute(attribute);\n    }\n  }\n\n  addClass(newClass) {\n    debugger;\n    this.nodes.forEach(node => node.classList.add(newClass));\n  }\n\n  removeClass(remove) {\n    this.nodes.forEach(node => node.classList.removeClass(remove));\n  }\n\n  children() {\n    let childrenArr = [];\n    this.nodes.forEach(node => childrenArr.concat(Array.from(node.children)));\n    return new DOMNodeCollection(childrenArr);\n  }\n\n  parent() {\n    parentArr = [];\n    this.nodes.forEach( (node) => parentArr.concat(Array.from(node.parent)));\n    return new DOMNodeCollection(parentArr);\n  }\n\n  find(selector) {\n    //node.find(\"div\")\n    let found = [];\n    this.nodes.forEach( (node) => found.concat)\n  }\n\n  //someElement.on(click, cb)\n  on(type, cb) {\n    this.node.forEach((node) => node.addEventListener(type, cb));\n  }\n\n  off(type, cb) {\n    this.node.forEach((node) => node.removeEventListener(type, cb));\n  }\n}\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nconst fnQueue = [];\nlet _ready = false;\n//jQuery master function\nwindow.$l = (selector) => {\n  \n  debugger;\n  if (selector instanceof HTMLElement) {\n    newDOM = new DOMNodeCollection([selector]);\n    return newDOM;\n  }\n\n  if (typeof selector === 'function') {\n    if (!_ready) {\n      fnQueue.push(selector)\n    } else {\n      selector();\n    }\n  }\n\n    let nodes = document.querySelectorAll(selector);\n    let nodesArr = Array.from(nodes);\n    return new DOMNodeCollection([nodesArr]);\n};\n\nregisterDocReadyCallback = (func) => {\n  if (!_docReady) {\n    _docReadyCallbacks.push(func);\n  } else {\n    func();\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  _ready = true;\n  fnQueue.forEach(func => func());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });