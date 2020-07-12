import {
  fetchTemplate,
  setVarsFromAttributesHTML,
  setVarsFromAttributesCSS,
} from "../../common";

class Index extends HTMLElement {
  template: string;
  css: string;
  constructor() {
    super();
    fetchTemplate(`../src/views/index/template.html`).then((template) => {
      this.template = setVarsFromAttributesHTML(template, this);
      fetchTemplate(`../src/views/index/style.css`).then((css) => {
        this.css = setVarsFromAttributesCSS(css, this);
        this.innerHTML = `<style>${this.css}</style>${this.template}`;
      });
    });
  }
}

window.customElements.define("v-index", Index);

export default Index;
