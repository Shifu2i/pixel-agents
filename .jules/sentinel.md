# Sentinel's Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The extension allowed launching terminals in arbitrary paths provided by the webview without validation. An attacker controlling the webview (e.g., via XSS or malicious layout import) could potentially trigger terminal execution in sensitive directories outside the intended workspace.
**Learning:** Webview messages containing file paths should always be treated as untrusted and validated against the current workspace context before being used in sensitive VS Code APIs like `createTerminal`.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that any path received from the webview is part of the active workspace.
