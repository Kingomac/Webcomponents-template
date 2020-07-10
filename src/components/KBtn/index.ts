import {
  fetchTemplate,
  setVarsFromAttributesHTML,
  setVarsFromAttributesCSS,
} from "../../common";
export class KBtn extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    fetchTemplate("../src/components/KBtn/template.html").then((template) => {
      let cssWithVars = "";
      let htmlWithVars = setVarsFromAttributesHTML(template, this);
      console.log(htmlWithVars);
      fetchTemplate("../src/components/KBtn/style.css").then((css) => {
        cssWithVars = setVarsFromAttributesCSS(css, this);
        console.log(`<style>\n${cssWithVars}\n</style>\n${htmlWithVars}`);
        this.shadow.innerHTML = `<style>\n${cssWithVars}\n</style>\n${htmlWithVars}`;
        this.shadow.querySelector("button").textContent = this.innerHTML;
      });
    });
  }
}
