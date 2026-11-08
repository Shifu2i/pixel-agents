## 2026-11-08 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal and arbitrary directory terminal execution from untrusted webview messages, where an arbitrary `folderPath` can be passed to open terminals outside the active workspace.
**Learning:** Validating paths using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` breaks in remote environments (SSH, WSL, Dev Containers) due to URI scheme differences, and URI path manipulation can fail on Windows due to backslashes.
**Prevention:** Verify directory containment using Node's platform-aware `path.relative(folder.uri.fsPath, folderPath)` and `path.isAbsolute(relative)` against all active workspace folders before accepting folder paths from webview messages.
