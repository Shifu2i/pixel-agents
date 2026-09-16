## 2026-07-16 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` parameters sent via webview postMessage (`openClaude`) were passed directly to `vscode.window.createTerminal({ cwd: folderPath })` without validation.
**Learning:** Webview messages can be forged or contain untrusted user input, enabling directory traversal to arbitrary host paths outside the workspace.
**Prevention:** Always validate user-provided folder paths against `vscode.workspace.workspaceFolders` using cross-platform `path.relative` checks before using them as working directories.
