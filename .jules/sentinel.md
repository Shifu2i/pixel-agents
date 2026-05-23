# Sentinel Security Journal

## 2026-05-23 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `openClaude` webview message allowed an unvalidated `folderPath` to be used as the `cwd` for a new VS Code terminal. This could lead to a path traversal vulnerability if the webview was compromised or sent a malicious path, potentially allowing terminal execution in arbitrary directories on the host system.
**Learning:** In VS Code extensions, any path received from a webview (an untrusted source) that is used for filesystem-related operations (like setting terminal `cwd`) must be validated against the active workspace folders.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(receivedPath))` to ensure the path belongs to an active workspace before using it. Fallback to a safe default if validation fails.
