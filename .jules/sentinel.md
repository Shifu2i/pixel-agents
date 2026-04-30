# Sentinel Security Journal

## 2026-04-30 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepts a `folderPath` directly from the webview and uses it as the `cwd` for a new terminal. An attacker could potentially send a path outside the workspace, leading to unauthorized access or execution in arbitrary directories.
**Learning:** Input from webviews should always be treated as untrusted. When a path is provided, it must be validated against the active workspace folders.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that any path received from the webview resides within a legitimate workspace folder.
