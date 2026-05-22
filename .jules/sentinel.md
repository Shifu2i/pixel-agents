## 2026-04-30 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Path traversal risk when launching terminals from untrusted webview messages. The `openClaude` message from the webview could include an arbitrary `folderPath` which was used as the `cwd` for a new VS Code terminal without validation.
**Learning:** Webview-to-extension communication should be treated as untrusted user input, especially when it involves filesystem paths or shell commands.
**Prevention:** Validate any folder paths received from the webview against the active workspace using `vscode.workspace.getWorkspaceFolder`. If the path is outside the workspace, fall back to a safe default (e.g., the workspace root) and warn the user.
