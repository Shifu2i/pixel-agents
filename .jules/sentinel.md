# Sentinel Security Journal

## 2026-05-23 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` from the webview and used it directly as the `cwd` for a new VS Code terminal without any validation. This could allow a malicious webview (e.g., via XSS) to launch a terminal in any directory on the user's filesystem.
**Learning:** Even internal messages between a webview and an extension should be treated as untrusted input, especially when they involve filesystem paths or command execution.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders` or use `vscode.workspace.getWorkspaceFolder` to ensure the path belongs to the active workspace. Fall back to a safe default if validation fails.
