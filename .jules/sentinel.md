## 2026-04-20 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal risks when launching terminals from untrusted webview messages.
**Learning:** Folder paths received from the webview (e.g., via `openClaude` messages) must be validated against the active workspace to prevent execution in arbitrary directories.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` with `vscode.Uri.file(folderPath)` to ensure the requested folder belongs to the current workspace before using it as a `cwd` for a terminal.
