## 2026-10-15 - Workspace Path Traversal Prevention in Terminal Creation
**Vulnerability:** Unvalidated `folderPath` from webview messages (`openClaude`) allowed opening VS Code terminals with working directories outside the workspace.
**Learning:** Webview postMessage parameters cannot be trusted blindly and must be checked against active workspace folders (`vscode.workspace.workspaceFolders`).
**Prevention:** Use `path.relative` to ensure user-supplied paths do not escape workspace boundaries (`!relative.startsWith('..') && !path.isAbsolute(relative)`).
