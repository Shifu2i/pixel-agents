## 2025-05-15 - [Path Traversal / Workspace Escape in Terminal Creation]
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it as the `cwd` for a new terminal without validation.
**Learning:** Even internal messages between a webview and an extension should be treated as untrusted input if they specify filesystem paths. A compromised webview could potentially launch a terminal in sensitive directories outside the current workspace.
**Prevention:** Always validate filesystem paths received from the webview against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`) before using them in sensitive operations like creating terminals or reading files.
