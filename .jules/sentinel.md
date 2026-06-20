# Sentinel Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** `folderPath` from webview messages was used directly as `cwd` for `vscode.window.createTerminal` without validation.
**Learning:** Untrusted input from the webview could allow launching terminals in arbitrary directories outside the workspace if the webview were compromised or manipulated.
**Prevention:** Always validate paths received from webview messages against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder` before using them as a working directory for shells or terminals.
