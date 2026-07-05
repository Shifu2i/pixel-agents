# Sentinel Security Journal

## 2026-06-11 - Path traversal prevention in terminal launch
**Vulnerability:** A malicious or compromised webview could send an arbitrary `folderPath` in an `openClaude` message, leading to a terminal being launched with a `cwd` outside the intended workspace (Path Traversal).
**Learning:** Even if the webview UI doesn't currently allow selecting external paths, the message handler must still validate inputs because the webview is an untrusted boundary.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder`.
