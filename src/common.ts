/**
 * Fetch a file and returns its text as a promise
 */
export async function fetchTemplate(template: string) {
  const stream = await fetch(template);
  const text = await stream.text();
  return text;
}
/**
 * Replace the variables(%%var%%) with attributes from the HTMLElement
 * @param template HTML string
 * @param element Element to get the attributes from
 */
export function setVarsFromAttributesHTML(
  template: string,
  element: HTMLElement
): string {
  let result = "";
  if (template.includes("%%")) {
    template.split("%%").forEach((e) => {
      if (!e.includes('"')) {
        result += element.getAttribute(e);
      } else {
        result += e;
      }
    });
  } else {
    result = template;
  }
  return result;
}
/**
 * Replace the variables(%%var%%) with attributes from the HTMLElement
 * @param template CSS string
 * @param element Element to get the attributes from
 */
export function setVarsFromAttributesCSS(
  template: string,
  element: HTMLElement
) {
  let result = "";
  if (template.includes("%%")) {
    template.split("%%").forEach((e) => {
      if (e.includes(":")) {
        result += e;
      } else {
        result += element.getAttribute(e);
      }
    });
  } else {
    result = template;
  }

  return result;
}
