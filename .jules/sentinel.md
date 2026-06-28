## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` from webview messages could potentially be used to launch terminals in sensitive directories outside the workspace.
**Learning:** VS Code extensions communicating with webviews must rigorously validate any filesystem paths received via `postMessage`.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that a path belongs to the current workspace before using it as a `cwd` for terminals or file operations.
