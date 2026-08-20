## 2026-07-16 - Path Traversal Prevention in Terminal Folder Path

**Vulnerability:** Unvalidated `folderPath` passed from webview messages (`openClaude`) directly used as terminal `cwd`.
**Learning:** Webview messages cannot be trusted; arbitrary filesystem paths passed by webview controls or compromised extension webviews could allow spawning terminal sessions outside workspace boundaries.
**Prevention:** Validate user/webview supplied paths using `path.relative` and `path.isAbsolute` against `vscode.workspace.workspaceFolders` before setting terminal working directories or accessing files.
