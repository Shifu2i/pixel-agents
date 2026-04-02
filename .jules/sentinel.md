## 2025-05-15 - [Path Traversal Prevention in Terminal Launch]
**Vulnerability:** Untrusted `folderPath` from webview messages could allow launching terminals in unauthorized directories outside the VS Code workspace.
**Learning:** Webview messages are inherently untrusted and must be validated against the extension's internal state (e.g., `vscode.workspace.workspaceFolders`).
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate any filesystem paths received from the webview before using them as a `cwd` for terminals or other sensitive operations.
