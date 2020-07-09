# Webcomponents Template and Scripts

This is a template to create a Webcomponents application using custom elements and shadow dom.
Check out the [Webcomponents project](https://github.com/w3c/webcomponents).

# Getting started

The Webpack bundle is built in `./public` folder.

## Development server

```
npm i
```

```
npx webpack -w
```

Then you can use [Live Server](https://github.com/ritwickdey/vscode-live-server) or just run `public/index.html`.

## Scripts

The scripts are made with [Deno](https://github.com/denoland/deno).

> Generate component:
> `deno run --allow-read --allow-write ./scripts/component.ts ComponentName`
> The first letter should be the prefix of your component (using them is compulsory according to the HTML standars) and I recommend them to be uppercase like the example KBtn, then it's KBtn for the directory and k-btn for the HTML tag.
