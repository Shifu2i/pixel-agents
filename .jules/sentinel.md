## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal in `vscode.window.createTerminal` when `cwd` is derived from unvalidated webview messages.
**Learning:** Even if individual file paths are sanitized, the base directory for a terminal session can be manipulated to point outside the workspace if taken directly from a message. VS Code's `vscode.workspace.getWorkspaceFolder` provides a reliable way to validate that a path is within the current workspace context.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` before using them as a working directory for terminals or file operations. Fall back to a known-safe workspace root if validation fails.
