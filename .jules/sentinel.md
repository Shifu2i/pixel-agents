## 2026-07-16 - Prevent Path Traversal in Terminal Launch

**Vulnerability:** Untrusted `folderPath` parameter passed from webview messages (`openClaude`) in `launchNewTerminal` could allow launching terminals in arbitrary directories outside active workspace folders.
**Learning:** Webview messages must be treated as untrusted input. When launching terminals or operating on paths, `folderPath` must be validated against `vscode.workspace.workspaceFolders` using platform-agnostic relative path checking (`path.relative` and `path.isAbsolute`).
**Prevention:** Always validate user/webview-provided paths against the active workspace before using them in file system or process creation APIs.
