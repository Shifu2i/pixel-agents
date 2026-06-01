## 2026-05-23 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Path traversal and unauthorized directory access via `folderPath` parameter from webview.
**Learning:** Webview messages can be manipulated to send arbitrary paths. Without validation against `vscode.workspace.getWorkspaceFolder`, the extension could be forced to launch terminals in sensitive system locations.
**Prevention:** Always validate user-provided or webview-provided filesystem paths against the active workspace before using them as a working directory or in filesystem operations.
