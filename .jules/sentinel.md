## 2026-07-16 - Prevent Path Traversal in Terminal Launch
**Vulnerability:** Path traversal risk when launching terminal sessions in folders provided from untrusted webview messages.
**Learning:** If a webview sends a custom `folderPath` for terminal/agent launching without proper validation, an attacker or a compromised webview could trick the extension into opening a shell session in arbitrary system directories outside the workspace.
**Prevention:** Always validate `folderPath` against the active VS Code workspace folders using `vscode.workspace.getWorkspaceFolder`. If validation fails, fallback to the default workspace path and alert the user with a warning message.
