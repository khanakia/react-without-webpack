// Web Component
class SayHello extends HTMLElement {
  constructor() {
    super();

    let p = document.createElement("p");
    let text = document.createTextNode("Hello");
    p.appendChild(text);

    this.appendChild(p);
  }
}

customElements.define('say-hello', SayHello);