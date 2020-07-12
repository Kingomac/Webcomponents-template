import {
  fetchTemplate,
  setVarsFromAttributesHTML,
  setVarsFromAttributesCSS,
} from "../../common";
class KBtn extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    fetchTemplate("./templates/KBtn.html").then((template) => {
      let cssWithVars = "";
      let htmlWithVars = setVarsFromAttributesHTML(template, this);
      fetchTemplate("./styles/KBtn.css").then((css) => {
        cssWithVars = setVarsFromAttributesCSS(css, this);
        this.shadow.innerHTML = `<style>\n${cssWithVars}\n</style>\n${htmlWithVars}`;
        this.shadow.querySelector("button").textContent = this.innerHTML;
      });
    });
  }
  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback() {}
}

export default KBtn;
