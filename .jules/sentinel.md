## 2026-11-09 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Untrusted `folderPath` received from webview messages (`openClaude`) was passed directly to `vscode.window.createTerminal({ cwd })` without validation, allowing path traversal or spawning terminals in arbitrary directories outside the workspace.
**Learning:** Webview messages must be treated as untrusted input. In multi-folder setups, client messages could manipulate or pass absolute paths outside the workspace boundary.
**Prevention:** Validate user-supplied paths using platform-agnostic containment checks (`path.relative` and `path.isAbsolute`) against all active workspace folders before passing to system APIs.
