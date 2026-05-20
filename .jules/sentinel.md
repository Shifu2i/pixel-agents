# Sentinel's Security Journal

## 2026-04-30 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it directly as the `cwd` for a new VS Code terminal without validating that it belongs to the current workspace.
**Learning:** Webview messages should be treated as untrusted input. Directly using paths provided by the webview for filesystem operations or terminal launches can lead to path traversal or execution in unintended directories.
**Prevention:** Always validate user-provided paths against the active workspace using `vscode.workspace.getWorkspaceFolder()` or similar APIs before using them in sensitive operations.
