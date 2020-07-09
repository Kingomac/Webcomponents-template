export async function fetchTemplate(template: string) {
  const stream = await fetch(template);
  const text = await stream.text();
  return text;
}
