## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` from webview messages was used directly as the `cwd` for new terminals, allowing terminal launches in arbitrary filesystem locations outside the workspace.
**Learning:** Webview-to-extension communication must be treated as untrusted input. Even if the current UI only sends valid paths, the message handler itself is an entry point for potential path traversal if not bounded by workspace checks.
**Prevention:** Always validate filesystem paths received from the webview against `vscode.workspace.getWorkspaceFolder()` to ensure they reside within the current workspace boundaries before use in sensitive operations like terminal creation or file access.
