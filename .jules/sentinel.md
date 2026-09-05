## 2026-07-16 - Workspace Folder Path Traversal in Launch Terminal
**Vulnerability:** Unvalidated `folderPath` parameter passed from webview messages (`openClaude`) directly to `vscode.window.createTerminal({ cwd })`, allowing arbitrary working directories to be opened outside workspace boundaries.
**Learning:** Webview message parameters must be strictly validated before being used as filesystem paths or terminal launch parameters, as IPC messages cannot be implicitly trusted.
**Prevention:** Always validate `folderPath` against active workspace folders (`vscode.workspace.workspaceFolders`) using cross-platform path relative check (`!rel.startsWith('..') && !path.isAbsolute(rel)`).
