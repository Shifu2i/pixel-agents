## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** A potentially compromised webview could send a malicious `openClaude` message with an arbitrary `folderPath`, causing the extension to launch a terminal in any directory on the host system.
**Learning:** VS Code's `vscode.window.createTerminal({ cwd })` does not automatically validate that `cwd` is within the user's active workspace.
**Prevention:** Always validate folder paths received from untrusted webview messages against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`) before using them as the working directory for new terminals or other sensitive operations.
