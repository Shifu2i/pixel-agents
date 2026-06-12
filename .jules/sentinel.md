## 2026-06-11 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Path traversal risk when launching terminals using directory paths received from untrusted webview messages.
**Learning:** Webview messages can be easily spoofed or manipulated. Any file system path received from the frontend must be validated against the active workspace to prevent unauthorized access to the host file system.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a path belongs to the current workspace before using it in sensitive operations like launching a terminal with a specific `cwd`.
