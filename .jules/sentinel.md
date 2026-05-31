# Sentinel Security Journal

## 2026-05-23 - Path Traversal in Terminal Launch
**Vulnerability:** The extension accepts a `folderPath` from the webview and uses it as the `cwd` for a new terminal without validation. This allows a malicious webview (or exploited webview) to launch terminals in any directory on the host system.
**Learning:** In VS Code extensions, any path received from a webview should be treated as untrusted user input, even if it ostensibly comes from a "safe" source like a workspace picker in the UI.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders` or use `vscode.workspace.getWorkspaceFolder` to ensure the path is within the current workspace.
