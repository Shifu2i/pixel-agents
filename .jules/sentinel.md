# Sentinel Security Journal 🛡️

## 2026-05-23 - Fix path traversal in terminal launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it as the `cwd` for a new terminal without validation, allowing potential path traversal or execution in unauthorized directories.
**Learning:** Webview messages are untrusted input and must always be validated, especially when they influence filesystem operations or process execution.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate that any provided path belongs to the active workspace before using it.
