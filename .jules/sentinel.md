## 2026-04-30 - Path Traversal in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension, which was then used as the current working directory (`cwd`) when launching a new terminal. This allowed a malicious webview (or a compromised one) to launch terminals in any directory accessible to the VS Code process.

**Learning:** When receiving file or folder paths from a webview, they must always be validated against the active workspace folders. VS Code provides `vscode.workspace.getWorkspaceFolder(uri)` which is ideal for this purpose as it returns the workspace folder containing the given URI, or undefined if it's not part of any workspace.

**Prevention:** Always validate paths from untrusted sources (like webviews) using `vscode.workspace.getWorkspaceFolder`. If a path is outside the expected scope, fall back to a safe default (like the first workspace folder) and inform the user.
