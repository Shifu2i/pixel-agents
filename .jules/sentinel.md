## 2026-04-14 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted webview messages can specify an arbitrary `folderPath` for launching terminals, potentially allowing access to directories outside the workspace.
**Learning:** VS Code's `window.createTerminal` with a `cwd` outside the workspace is possible but should be restricted in extensions that take paths from untrusted sources like webviews. Using `vscode.workspace.getWorkspaceFolder` is a reliable way to validate that a path belongs to the current workspace.
**Prevention:** Always validate folder paths received from webviews against the active workspace folders before using them in sensitive operations like terminal creation or file system access.
