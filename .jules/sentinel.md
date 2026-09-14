## 2026-07-16 - Workspace boundary validation for webview terminal launches
**Vulnerability:** Launching VS Code terminals from webview messages (`openClaude`) with unvalidated `folderPath` strings allowed opening terminals with working directories outside active workspace folders (Path Traversal).
**Learning:** `vscode.Uri` path comparisons fail in cross-platform/remote contexts when mixing Windows backslashes and POSIX path separators.
**Prevention:** Always validate path containment using `path.relative(folder.uri.fsPath, folderPath)` and checking `!relative.startsWith('..') && !path.isAbsolute(relative)`.
