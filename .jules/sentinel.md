# Sentinel Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview without validation, which could allow a malicious webview to launch terminals in arbitrary directories outside the workspace.
**Learning:** Untrusted input from webviews (via `onDidReceiveMessage`) must always be validated against the workspace boundaries, especially when used for filesystem operations or process execution.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder` to validate that a path belongs to the current workspace before using it as a `cwd` or in file operations.
