# Sentinel Security Journal

## 2026-04-30 - Fix Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` from the webview and used it directly as the terminal's `cwd` without validation. A compromised webview could launch terminals in arbitrary directories outside the workspace.
**Learning:** Even if internal paths are sanitized (like `getProjectDirPath`), any input from a webview that dictates filesystem operations (like setting a terminal's working directory) must be validated against the active workspace.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to verify that any requested directory path is part of the current workspace before using it.
