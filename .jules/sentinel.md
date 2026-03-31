## 2025-05-15 - Path Traversal in Terminal Launch
**Vulnerability:** Path traversal and unauthorized directory access via webview messages.
**Learning:** The webview can send an arbitrary `folderPath` for terminal creation, which was used directly as the `cwd`. This could allow a malicious webview (or an exploited one) to launch terminals in sensitive directories outside the intended workspace.
**Prevention:** Always validate paths received from webview messages against `vscode.workspace.getWorkspaceFolder` to ensure they are within the current workspace before using them for sensitive operations like terminal creation.
