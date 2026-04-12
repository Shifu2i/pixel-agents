## 2026-04-09 - Path traversal prevention in terminal launch
**Vulnerability:** The webview can send a `folderPath` to the extension host to launch a new terminal in that directory. If not validated, a compromised webview could launch terminals in any directory on the host machine, potentially leading to unauthorized file access or execution through the terminal.
**Learning:** In VS Code extensions, paths received from webviews (which are untrusted environments) must always be validated against the current workspace folders to ensure they remain within the intended scope.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a given path belongs to the current workspace before using it as a `cwd` for terminals or other sensitive operations.
