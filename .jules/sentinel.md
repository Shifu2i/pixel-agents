# Sentinel Security Journal

## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The extension allowed launching a new terminal with a `folderPath` provided by the webview without any validation. This could potentially allow a malicious webview to launch terminals in arbitrary locations on the user's filesystem.
**Learning:** Path parameters received from webviews should always be treated as untrusted and validated against known safe locations (like the workspace).
**Prevention:** Always validate folder paths against `vscode.workspace.workspaceFolders` before using them as the current working directory (cwd) for terminals or other filesystem operations.
