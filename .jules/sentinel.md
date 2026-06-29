## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension, which would then be used as the `cwd` for a new terminal. This could allow a compromised webview to launch a terminal in any directory on the user's machine.
**Learning:** Always validate paths received from the webview against the current workspace folders to ensure they are within an expected boundary.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` to verify that the provided path belongs to a workspace folder before using it.
