import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const docsDir = path.join(rootDir, "docs");
const indexHtmlPath = path.join(docsDir, "index.html");

fs.mkdirSync(docsDir, { recursive: true });

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Onmeta API Docs</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
    </style>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700"
      rel="stylesheet"
    />
    <script>
      // Browser shims for Redoc bundles that may reference Node globals.
      window.global = window;
      window.process =
        window.process ||
        ({
          env: {},
          cwd: () => "/",
          stdout: { write: () => {} },
          stderr: { write: () => {} },
        });
    </script>
  </head>
  <body>
    <div id="redoc-container"></div>
    <script
      src="https://cdn.redoc.ly/redoc/v2.4.0/bundles/redoc.standalone.js"
      onload="Redoc.init('openapi.json', {}, document.getElementById('redoc-container'))"
    ></script>
  </body>
</html>
`;

fs.writeFileSync(indexHtmlPath, html, "utf8");
console.log(`Wrote ${path.relative(rootDir, indexHtmlPath)}`);
