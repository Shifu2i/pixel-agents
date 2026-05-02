## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal risk when launching terminals from untrusted webview messages.
**Learning:** Webview messages containing file paths should always be validated against the active workspace before being used as a `cwd` for terminal creation or other shell operations.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` with `vscode.Uri.file(path)` to ensure a requested directory is within the current workspace scope.
