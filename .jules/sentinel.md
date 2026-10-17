## 2026-10-15 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` string sent from webview message could allow launching VS Code terminal working directory (`cwd`) in arbitrary directories outside active workspace folders.
**Learning:** `vscode.window.createTerminal` accepts any system path for `cwd`. Relying on webview parameters without checking against `vscode.workspace.workspaceFolders` permits directory traversal.
**Prevention:** Validate input path relative to all active workspace folder paths using `path.relative` and `path.isAbsolute` before passing to `createTerminal`.
