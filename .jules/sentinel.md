## 2025-05-22 - Path Traversal Vulnerability in Terminal Launch
**Vulnerability:** The extension allowed the webview to request a terminal to be launched in an arbitrary `folderPath`. This path was used directly as the `cwd` for a new terminal without validation, potentially allowing a compromised webview to launch terminals outside the workspace.
**Learning:** Input from webviews (even those we control) should always be treated as untrusted and validated against expected boundaries like the current workspace.
**Prevention:** Always validate file paths received from the webview against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder`.
