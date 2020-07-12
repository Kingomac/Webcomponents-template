/*import {
  fetchTemplate,
  setVarsFromAttributesCSS,
  setVarsFromAttributesHTML,
} from "../../common";

export abstract class View extends HTMLElement {
  template: string;
  css: string;
  constructor(name: string) {
    super();
    fetchTemplate(`../src/views/${name}/template.html`).then((template) => {
      this.template = setVarsFromAttributesHTML(template, this);
      fetchTemplate(`../src/views/${name}/style.css`).then((css) => {
        this.css = setVarsFromAttributesCSS(css, this);
        this.innerHTML = `<style>${this.css}</style>${this.template}`;
      });
    });
  }
}
*/
