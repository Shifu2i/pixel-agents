## 2026-07-16 - Workspace Validation for Terminal Directory Paths
**Vulnerability:** Path traversal when launching terminal sessions via webview messages specifying `folderPath`.
**Learning:** Webviews can pass untrusted inputs (`folderPath`), allowing terminal sessions to be opened outside the VS Code workspace.
**Prevention:** Validate user-supplied folder paths against `vscode.workspace.workspaceFolders` using cross-platform path resolution (`path.relative` and `path.isAbsolute`).
