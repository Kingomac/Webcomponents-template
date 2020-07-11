import { parse } from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const parsedArgs = parse(args);

const dir = `${Deno.cwd()}/src/components/${parsedArgs._[0]}/`;
await Deno.mkdir(dir);
const template = await Deno.create(dir + "template.html");
const index = await Deno.create(dir + "index.ts");
const styles = await Deno.create(dir + "styles.css");

const indexText = new TextEncoder().encode(
  `
import { fetchTemplate, setVarsFromAttributesHTML, setVarsFromAttributesCSS } from "../../common";
export class ${parsedArgs._[0]} extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    fetchTemplate("../src/components/${parsedArgs._[0]}/template.html").then((template) => {
      let cssWithVars = "";
      let htmlWithVars = setVarsFromAttributesHTML(template, this);
      console.log(htmlWithVars);
      fetchTemplate("../src/components/${parsedArgs._[0]}/style.css").then((css) => {
        cssWithVars = setVarsFromAttributesCSS(css, this);
        this.shadow.innerHTML = ` +
    "`<style>${cssWithVars}</style>${htmlWithVars}`" +
    `;
      });
    });
  }
  connectedCallback() { }
  disconnectedCallback() { }
  attributeChangedCallback() { }
}

`
);
await index.write(indexText);

const indexFile = new TextDecoder().decode(
  await Deno.readFile(Deno.cwd() + "/src/index.ts")
);

const includeTexts = [
  `import { ${parsedArgs._[0]} } from './components/${parsedArgs._[0]}/index'`,
  `window.customElements.define("${parsedArgs._[0]
    .toString()
    .substring(0, 1)
    .toLowerCase()}-${parsedArgs._[0]
    .toString()
    .substring(1, parsedArgs._[0].toString().length)
    .toLowerCase()}", ${parsedArgs._[0]});`,
];

let result = includeTexts[0] + "\n";
result += indexFile;
result += includeTexts[1];
result += "\n";

await Deno.writeTextFile(Deno.cwd() + "/src/index.ts", result);

console.log(parsedArgs._[0], "created and included 👌");
