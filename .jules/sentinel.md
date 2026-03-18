## 2025-03-18 - Webview CSP Implementation
**Vulnerability:** High priority - Missing security headers (CSP) in Webview.
**Learning:** VS Code webviews are served from a unique origin (`vscode-webview://...`) and require explicit Content Security Policy (CSP) to mitigate XSS and restrict resource loading. Without a CSP, the webview could potentially load malicious scripts or leak data if an XSS vulnerability exists.
**Prevention:** Always inject a strict Content Security Policy meta tag in the HTML of VS Code webviews. Use `webview.cspSource` to allow trusted resources.

## 2025-03-18 - Terminal Path Validation
**Vulnerability:** High priority - Missing input validation on folder paths for terminal spawning.
**Learning:** Commands like `vscode.window.createTerminal` that accept a `cwd` can be abused if the path is not validated against the current workspace. This is especially relevant when paths are received from a webview or an external source (like an LLM).
**Prevention:** Validate all folder paths received from untrusted sources using `vscode.workspace.getWorkspaceFolder` to ensure they belong to the current workspace before using them in sensitive operations like spawning processes.
