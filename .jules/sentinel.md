## 2026-04-14 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Potential path traversal when launching a terminal from a webview message. The `openClaude` message could include a `folderPath` parameter that was used as the terminal's `cwd` without validation.
**Learning:** In VS Code extensions, user input (including messages from a webview) must be validated against the workspace before being used for filesystem operations or terminal launches.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a provided path belongs to the active workspace.
