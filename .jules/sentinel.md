## 2026-07-16 - Path Traversal Prevention in Terminal Folder Launching

**Vulnerability:** Messages received from the webview component contained an unvalidated `folderPath` parameter passed directly as `cwd` to `vscode.window.createTerminal()`, allowing terminal instances to be launched in arbitrary directories outside the active workspace.
**Learning:** Webview message handlers often trust incoming parameters when creating backend resources (like terminals or files). Without strict boundary validation against active workspace URIs/paths, untrusted webview inputs can lead to path traversal or arbitrary directory access.
**Prevention:** Always validate file/folder paths sent from untrusted webviews against active workspace folder bounds using platform-agnostic path containment checks (`path.relative` and `path.isAbsolute`) before passing them to OS or VS Code APIs.
