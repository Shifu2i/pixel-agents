## 2026-04-20 - Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepts a `folderPath` from the webview and uses it directly as the `cwd` for a new terminal without validation.
**Learning:** Webview messages can be tampered with, and trusting a path provided by the frontend can lead to path traversal or execution of commands in unintended directories.
**Prevention:** Always validate paths received from the webview against the current workspace folders using `vscode.workspace.getWorkspaceFolder`.
