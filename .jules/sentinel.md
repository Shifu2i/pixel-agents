# Sentinel Security Journal

## 2026-07-16 - Path Traversal in Terminal Launch
**Vulnerability:** The `openClaude` message from the webview allowed an arbitrary `folderPath` to be used when creating a new terminal. A malicious or compromised webview could exploit this to launch processes in sensitive directories outside the workspace.
**Learning:** Input from webviews should always be treated as untrusted. Even when the UI only offers workspace folders, the message protocol itself must be secured.
**Prevention:** Validate all `folderPath` inputs against the active workspace using `vscode.workspace.getWorkspaceFolder()`. Fall back to a safe default and warn the user if validation fails.
