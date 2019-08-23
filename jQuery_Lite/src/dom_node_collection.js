class DOMNodeCollection{
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(str) {
    if (typeof str === "string") {
      this.forEach ((node) => {
        node.innerHTML = str;
      });
    } else if (this.nodes.length > 0) {
      return this.nodes[0].innerHTML;      
    }
  }

  empty() {
    this.html('');
  }

  append(el) {
    //append outerHTML of each element in the argument
    //to the innerHTML of each elementinthe DOMNodeCollection.
    //DOMNodeCollectionObj.append(someOtherObj)
    this.forEach ((node) => {
      node.innerHTML.append(el.outerHTML);
    })
  }

  attr(attribute, val) {
    if (typeof val === "string") {
      this.forEach(node => node.setAttribute(attribute, val));
    } else {
      return this.nodes[0].getAttribute(attribute);
    }
  }

  addClass(newClass) {
    debugger;
    this.nodes.forEach(node => node.classList.add(newClass));
  }

  removeClass(remove) {
    this.nodes.forEach(node => node.classList.removeClass(remove));
  }

  children() {
    let childrenArr = [];
    this.nodes.forEach(node => childrenArr.concat(Array.from(node.children)));
    return new DOMNodeCollection(childrenArr);
  }

  parent() {
    parentArr = [];
    this.nodes.forEach( (node) => parentArr.concat(Array.from(node.parent)));
    return new DOMNodeCollection(parentArr);
  }

  find(selector) {
    //node.find("div")
    let found = [];
    this.nodes.forEach( (node) => found.concat)
  }

  //someElement.on(click, cb)
  on(type, cb) {
    this.node.forEach((node) => node.addEventListener(type, cb));
  }

  off(type, cb) {
    this.node.forEach((node) => node.removeEventListener(type, cb));
  }
}




module.exports = DOMNodeCollection;