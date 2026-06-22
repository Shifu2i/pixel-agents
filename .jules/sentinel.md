## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` from the webview and used it directly as the terminal's `cwd` without validation. This allowed a compromised webview to open a terminal in any directory on the host system.
**Learning:** Webview messages should always be treated as untrusted input, even when they appear to originate from the extension's own UI. Any file system paths provided by the webview must be validated against the current workspace boundaries.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a path belongs to the active workspace before using it in sensitive operations like terminal creation.
