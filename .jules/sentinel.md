## 2026-04-30 - Path Traversal in Terminal Launch
**Vulnerability:** The extension allowed the webview to specify any `folderPath` for launching a new terminal via the `openClaude` message, which was used as the terminal's `cwd` without validation.
**Learning:** In VS Code extensions, webviews should be treated as untrusted. Any path received from a webview that is used for filesystem operations or terminal execution must be validated against the active workspace folders.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(receivedPath))` to ensure a path provided by the webview belongs to the current workspace before using it.
