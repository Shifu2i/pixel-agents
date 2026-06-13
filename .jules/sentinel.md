## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` from webview messages was used directly as the `cwd` for `vscode.window.createTerminal`, allowing potential path traversal or execution in sensitive directories outside the workspace.
**Learning:** VS Code webviews can send arbitrary JSON messages, which must be treated as untrusted input. `vscode.workspace.getWorkspaceFolder` is an effective way to validate that a file path belongs to the current workspace.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` before using them for filesystem operations or terminal launches.
