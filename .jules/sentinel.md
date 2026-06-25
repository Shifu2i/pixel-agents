# Sentinel Security Journal

## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` directly from a webview message without validation, allowing a potentially malicious webview to launch a terminal in any directory.
**Learning:** Webview messages should always be treated as untrusted, especially when they influence filesystem operations or process launches.
**Prevention:** Validate all paths received from the webview against the current workspace folders using `vscode.workspace.getWorkspaceFolder`.
