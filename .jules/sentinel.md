# Sentinel Security Journal 🛡️

## 2026-06-02 - Path Traversal Protection in Terminal Launches
**Vulnerability:** A path traversal risk existed when launching new Claude Code terminals. The extension accepted a `folderPath` from untrusted webview messages and used it directly as the `cwd` for terminal creation without validation.
**Learning:** Terminal working directories provided by the webview must be validated against the active workspace to prevent agents from being launched in arbitrary filesystem locations.
**Prevention:** Always validate paths received from webview messages against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder` before using them in sensitive operations like terminal creation.
