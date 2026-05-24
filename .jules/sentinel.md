## 2026-05-23 - Path Traversal in Terminal Launch
**Vulnerability:** The `openClaude` message from the webview included a `folderPath` that was used as the `cwd` for a new terminal without validation. This allowed an attacker (or a compromised webview) to launch terminals in arbitrary directories outside the workspace.
**Learning:** Webview messages should be treated as untrusted input. Even if the UI only sends valid paths, the message itself can be spoofed or manipulated.
**Prevention:** Always validate paths received from the webview against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
