# Sentinel Security Journal

## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it directly as the terminal's working directory (`cwd`). A malicious webview could provide an arbitrary path to escape the workspace.
**Learning:** Even internal messages between webview and extension must be treated as untrusted input when they specify filesystem paths.
**Prevention:** Always validate provided paths against `vscode.workspace.getWorkspaceFolder` to ensure they reside within the current workspace before using them in sensitive operations like launching terminals.
