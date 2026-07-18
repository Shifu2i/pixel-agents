## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Untrusted terminal launches could bypass intended workspace boundaries if the `folderPath` parameter sent from a webview message was not validated. This allowed launching terminals in arbitrary external paths.
**Learning:** In VS Code extensions that support multi-root workspaces or allow directory specification via webview, paths from the webview must be treated as untrusted user inputs.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` to confirm the target path resides within an open workspace folder. If validation fails, fall back to a safe default path (e.g., the first workspace folder) and notify the user with a warning via `vscode.window.showWarningMessage`.
