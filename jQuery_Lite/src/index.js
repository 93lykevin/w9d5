const DOMNodeCollection = require("./dom_node_collection");

const fnQueue = [];
let _ready = false;
//jQuery master function
window.$l = (selector) => {
  
  debugger;
  if (selector instanceof HTMLElement) {
    newDOM = new DOMNodeCollection([selector]);
    return newDOM;
  }

  if (typeof selector === 'function') {
    if (!_ready) {
      fnQueue.push(selector)
    } else {
      selector();
    }
  }

    let nodes = document.querySelectorAll(selector);
    let nodesArr = Array.from(nodes);
    return new DOMNodeCollection([nodesArr]);
};

registerDocReadyCallback = (func) => {
  if (!_docReady) {
    _docReadyCallbacks.push(func);
  } else {
    func();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  _ready = true;
  fnQueue.forEach(func => func());
});