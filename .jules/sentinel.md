## 2026-09-20 - Path Traversal Prevention in Terminal Folder Launches
**Vulnerability:** Untrusted `folderPath` strings received via webview messages (`openClaude`) were passed directly to `vscode.window.createTerminal({ cwd: folderPath })` without validation, potentially allowing arbitrary working directory execution or path traversal outside workspace boundaries.
**Learning:** Webview message parameters must be strictly validated on the extension host side before being passed to Node filesystem APIs or VS Code extension host APIs.
**Prevention:** Always validate folder/file paths supplied by webviews against active workspace folders (`vscode.workspace.workspaceFolders`) using cross-platform path checks (`path.relative` and `path.isAbsolute`).
