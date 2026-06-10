## 2026-06-02 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `openClaude` message from the webview included a `folderPath` parameter that was used as the `cwd` for a new terminal without validation. A compromised webview could launch a terminal (and execute `claude`) in an arbitrary directory.
**Learning:** Always validate paths received from untrusted sources like webviews against the expected scope (e.g., `vscode.workspace.workspaceFolders`).
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that a path belongs to the current workspace before using it for sensitive operations like launching terminals.
