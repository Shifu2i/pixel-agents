## 2026-09-20 - Path Traversal Prevention in Terminal Launches

**Vulnerability:** Untrusted `folderPath` from webview `openClaude` messages allowed setting terminal working directories outside active workspace folders.
**Learning:** `vscode.window.createTerminal` accepts any arbitrary filesystem path. Webview message payloads must be validated against `vscode.workspace.workspaceFolders`. Using native `path.relative` and `path.isAbsolute` ensures cross-platform containment validation without URI scheme errors on Windows/remote environments.
**Prevention:** Always validate user- or webview-supplied paths against active workspace folders before passing them to file system operations or terminal spawn commands.
