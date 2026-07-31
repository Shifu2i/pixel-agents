# Sentinel Security Journal

This is the security journal of Sentinel, the security-focused agent.

## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching VS Code terminals from untrusted webview messages specifying arbitrary folder paths (`folderPath`), allowing the terminal to open outside the active workspace directory.
**Learning:** Webview-to-extension messages are not automatically trusted or scoped. When an extension uses `folderPath` directly in `vscode.window.createTerminal`, a malicious webview (or compromised webview code) could pass arbitrary directory paths to escape the user's workspace boundaries.
**Prevention:** Always validate user-provided folder paths against the active VS Code workspace folders before using them in terminal operations. Fall back to a safe default path (like the first workspace folder) if validation fails.
