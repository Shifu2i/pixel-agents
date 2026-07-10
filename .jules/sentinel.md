## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** New agent terminals could potentially be launched in arbitrary directories if the `folderPath` received from the webview was not validated against the current workspace.
**Learning:** Webview messages can be manipulated by an attacker if the webview itself is compromised or if it loads untrusted content. Always validate paths received from the frontend before using them for file system operations or terminal `cwd`.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that a given path belongs to one of the open workspace folders in VS Code. Fall back to a safe default (like the first workspace folder) if validation fails.
