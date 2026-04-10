## 2026-04-09 - Path Traversal in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension, which was used as the `cwd` for a new terminal without validation. This allowed launching terminals in any directory on the host system.
**Learning:** Data received from webviews via `onDidReceiveMessage` should be treated as untrusted and validated before being used in sensitive operations like file system access or terminal creation.
**Prevention:** Always validate paths received from webviews against the current workspace using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))`.
