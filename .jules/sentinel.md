## 2026-04-30 - Missing Content Security Policy (CSP) in Webview
**Vulnerability:** The webview was running with `enableScripts: true` but lacked a Content Security Policy (CSP), making it vulnerable to Cross-Site Scripting (XSS) if any untrusted content were to be rendered.
**Learning:** VS Code webviews should always have a CSP to restrict the sources of scripts, styles, and other resources, even if the content is currently trusted.
**Prevention:** Always include a `<meta http-equiv="Content-Security-Policy" ...>` tag in the webview HTML and use `webview.cspSource` to allow only extension-local resources.
