# Sentinel Security Journal

## 2026-06-11 - Path traversal prevention in terminal launches
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` from a webview message and used it directly as the `cwd` (current working directory) for a new VS Code terminal. An attacker could potentially send a crafted message with a path outside the workspace.
**Learning:** Input from webviews is untrusted. VS Code extensions should validate any filesystem paths provided by the frontend before using them in sensitive operations like terminal creation or file system access.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` to ensure a provided path belongs to a folder currently open in the VS Code workspace.
