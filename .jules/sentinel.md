## 2026-07-16 - Workspace Path Traversal Prevention in Terminal Creation
**Vulnerability:** Unvalidated `folderPath` from webview `openClaude` message allowed launching a terminal with `cwd` set to arbitrary paths outside workspace folders.
**Learning:** Webview messages containing directory paths must not be trusted directly when invoking extension APIs that execute processes or create terminals in working directories.
**Prevention:** Validate user/webview provided paths against active workspace folder paths using `path.relative` and `path.isAbsolute` before passing to `vscode.window.createTerminal`.
