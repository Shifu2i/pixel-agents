# Sentinel Security Journal 🛡️

## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `openClaude` message from the webview allowed an optional `folderPath` to be passed directly to `vscode.window.createTerminal` as the `cwd`. An attacker could potentially send a malicious `folderPath` (e.g., `../../..`) to execute commands in sensitive directories outside the intended workspace.
**Learning:** Webview messages should always be treated as untrusted input. Even if the UI only sends valid paths, the message interface itself can be manipulated.
**Prevention:** Always validate paths received from the webview against the active workspace folders using `vscode.workspace.getWorkspaceFolder`. Fail securely by falling back to a known safe directory (like the primary workspace folder) and alerting the user.
