## 2026-09-20 - Path Traversal in Webview Terminal Launch
**Vulnerability:** Unsanitized `folderPath` from webview `openClaude` messages allowed creating VS Code terminals in arbitrary filesystem directories outside the active workspace.
**Learning:** Webview message handlers must treat all incoming payload data as untrusted input. Directly passing `folderPath` to `vscode.window.createTerminal({ cwd })` bypassing workspace boundaries allowed arbitrary working directory traversal.
**Prevention:** Always validate `folderPath` against `vscode.workspace.workspaceFolders` using cross-platform relative path comparison (`path.relative` and `path.isAbsolute`) before setting terminal working directory.
