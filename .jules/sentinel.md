## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview can request to launch a new Claude Code terminal in a specific `folderPath`. Without validation, a compromised or malicious webview could request to launch a terminal in any arbitrary path on the user's system.
**Learning:** In VS Code extensions, any path provided by a webview message that is used for filesystem operations or terminal launches must be validated against the active workspace.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` to verify that a provided path belongs to the current workspace before using it as a `cwd` for a terminal or filesystem operation. Fall back to a safe default (like the workspace root) and warn the user if validation fails.
