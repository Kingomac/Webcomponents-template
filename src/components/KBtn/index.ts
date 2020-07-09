import { fetchTemplate } from "../../common";
export class KBtn extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    fetchTemplate("../src/components/KBtn/template.html").then((template) => {
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.innerHTML = template;
      this.shadow.querySelector("button").textContent = this.innerHTML;
    });
  }
}
