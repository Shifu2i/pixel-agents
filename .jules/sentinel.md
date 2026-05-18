## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The extension accepted a `folderPath` from the webview and used it directly as the `cwd` for a new VS Code terminal without validation. This could allow a malicious webview to launch terminals in sensitive directories outside the intended workspace.
**Learning:** Webview messages are untrusted. Any path provided by the frontend that influences backend filesystem or process operations (like terminal `cwd`) must be validated against the active workspace.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a provided path belongs to an active workspace folder before using it.
