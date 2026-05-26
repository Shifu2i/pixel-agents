# Sentinel Security Journal

This journal documents critical security learnings and vulnerability patterns found in the Pixel Agents codebase.

## 2026-05-23 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The `openClaude` message from the webview allowed an arbitrary `folderPath` to be passed to `vscode.window.createTerminal({ cwd: folderPath })`. This could be exploited by a compromised webview to launch terminals in sensitive directories outside the workspace (path traversal).
**Learning:** Terminal `cwd` is a sensitive parameter. Even if the webview is internal, messages should be treated as untrusted input.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`). If invalid, fallback to a safe default and warn the user.
