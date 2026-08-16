## 2026-07-16 - Prevent Path Traversal in Terminal Launch
**Vulnerability:** Untrusted `folderPath` parameter sent from the webview to `launchNewTerminal` could allow launching terminals in arbitrary host directories outside the workspace.
**Learning:** Accepting file system paths directly from webview messages without validating containment against `vscode.workspace.workspaceFolders` opens a path traversal vulnerability.
**Prevention:** Always validate webview-supplied paths using `path.relative` against all active workspace folders to ensure the target path resides within workspace boundaries.
