## 2026-07-16 - Workspace Folder Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted webview messages for `openClaude` could supply an arbitrary `folderPath` parameter, allowing terminals to be launched outside the workspace boundary (Path Traversal / Unauthorized Directory Execution).
**Learning:** Checking URI path strings or using `vscode.Uri.file` directly can be prone to path format differences across platforms and remote workspace schemes.
**Prevention:** Always validate paths passed from webviews/untrusted IPC against active workspace root folders using `path.relative` and `path.isAbsolute` check (`!rel.startsWith('..') && !path.isAbsolute(rel)`).
