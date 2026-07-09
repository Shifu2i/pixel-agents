## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** New terminals could be launched with an arbitrary `folderPath` provided by the webview, potentially allowing path traversal if the path was outside the intended workspace.
**Learning:** Communication from webview messages should always be treated as untrusted. Even if the UI only offers valid choices, the message itself could be spoofed or manipulated.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`) before using them as a `cwd` for terminals or file operations.
