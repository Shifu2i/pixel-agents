# Sentinel Security Journal

## 2026-04-30 - Remediated Path Traversal in Terminal Launch
**Vulnerability:** Path traversal risk when launching new terminals from webview messages. The `folderPath` received from the webview was used as the terminal's `cwd` without validation.
**Learning:** Even internal webview communication can be a vector if the message source is compromised or if there's a logic flaw in the frontend. VS Code extensions should always validate paths against the active workspace when performing filesystem operations like setting a terminal's working directory.
**Prevention:** Always validate user-provided paths against `vscode.workspace.getWorkspaceFolder` or similar APIs before using them in sensitive operations. Use `vscode.window.showWarningMessage` to inform the user of validation failures.
