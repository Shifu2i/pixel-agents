## 2026-06-02 - Path Traversal in terminal launches
**Vulnerability:** A path traversal vulnerability existed in the terminal launch logic. The `folderPath` received from the webview was used as the current working directory (CWD) for the new terminal without any validation. This could allow a malicious webview (or an attacker exploiting a separate XSS) to launch terminals in arbitrary directories on the host system.
**Learning:** VS Code webview messages should be treated as untrusted input, especially when they influence filesystem operations or terminal launches.
**Prevention:** Always validate paths received from webview messages against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
