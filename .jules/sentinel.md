# Sentinel Security Journal 🛡️

This journal documents critical security learnings, vulnerability patterns, and architectural security gaps discovered in the Pixel Agents codebase.

## 2026-04-30 - Path Traversal in Terminal Launch
**Vulnerability:** The `openClaude` message from the webview accepted a `folderPath` which was used as the `cwd` for a new terminal without validation. This allowed the webview to potentially launch processes in any directory accessible to the VS Code process.
**Learning:** Webview messages must be treated as untrusted input. Even if the UI only sends valid workspace paths, the underlying message channel can be manipulated.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders`. Use `vscode.workspace.getWorkspaceFolder` to ensure the path belongs to the current workspace.
