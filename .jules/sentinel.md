## 2025-05-15 - [Security Enhancements: CSP and Terminal Path Validation]
**Vulnerability:** XSS and Directory Traversal Risks.
**Learning:** Webview UI can be exploited for XSS without a proper CSP. Terminal launches can be manipulated to access unauthorized paths if not validated against workspace folders.
**Prevention:** Always implement a restrictive CSP for webviews. Validate all paths received from the webview against `vscode.workspace.workspaceFolders`.
