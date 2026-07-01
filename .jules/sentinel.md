## 2026-06-11 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted a `folderPath` from the webview and used it as the current working directory for a new terminal without validation.
**Learning:** Untrusted input from a webview should never be used directly in file system or process operations (like launching a terminal) without being validated against the current workspace.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder` or similar VS Code APIs to validate that a provided path belongs to the active workspace before using it.
