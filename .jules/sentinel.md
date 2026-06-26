# Sentinel Security Journal 🛡️

This journal documents critical security learnings, vulnerability patterns, and architectural security gaps discovered in the Pixel Agents codebase.

## 2026-06-11 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The extension allowed launching terminals in arbitrary directories by trusting the `folderPath` sent from the webview without validation.
**Learning:** Webview messages are untrusted input. Even if the UI only presents valid options, the message itself can be spoofed or manipulated.
**Prevention:** Always validate paths received from the webview against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
