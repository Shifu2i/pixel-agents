## 2025-05-22 - [Security] Workspace Boundary Validation and CSP
**Vulnerability:**
- Potential unauthorized directory access: The webview could request to open terminals in directories outside the active workspace.
- Risk of XSS/Injection: The webview UI was missing a Content Security Policy (CSP), making it vulnerable to script injection.

**Learning:**
- Terminal creation in VS Code extensions needs explicit path validation against `vscode.workspace.workspaceFolders` to maintain security boundaries.
- CSP is a critical defense-in-depth layer for webview-based extensions.

**Prevention:**
- Always use `vscode.workspace.getWorkspaceFolder()` to validate incoming paths from untrusted sources (like a webview).
- Implement a strict CSP in all webview providers.
