# Sentinel Security Journal

## 2026-04-20 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` was using a `folderPath` received from the webview directly as the terminal's working directory (`cwd`) without validation.
**Learning:** Even within VS Code extensions, user input (or webview-originated messages) used for filesystem paths can lead to path traversal if they allow execution in directories outside the intended workspace.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` (e.g., using `vscode.workspace.getWorkspaceFolder`) before using them as a `cwd` for terminals or for filesystem operations.
