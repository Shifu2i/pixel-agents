## 2025-05-22 - [Extension Path Validation and Webview CSP]
**Vulnerability:** Potential for path traversal by providing unsanitized directory paths to the terminal launch command, and risk of XSS due to missing Content Security Policy in the webview.
**Learning:** VS Code extensions that launch terminals or use webviews should always validate inputs and restrict resource loading. Terminal paths should be checked against the workspace folders to ensure they remain within the intended environment.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder()` to validate that paths are within the current workspace before using them in sensitive contexts like launching processes. Implement a strict CSP in all webview HTML to limit resource execution to trusted sources.
