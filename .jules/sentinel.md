## 2025-03-03 - Path Traversal Risk in Terminal Launching
**Vulnerability:** Untrusted `folderPath` from webview messages was used directly as `cwd` for new terminals.
**Learning:** Even within a VS Code extension, inputs from webviews should be treated as untrusted and validated against workspace boundaries.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate that any path received from the webview resides within the current workspace.
