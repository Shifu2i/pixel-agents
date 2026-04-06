## 2025-05-14 - Path Traversal via Webview folderPath
**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted an unvalidated `folderPath` from the webview and used it as the `cwd` for a new terminal, potentially allowing a malicious webview to launch terminals in arbitrary directories.
**Learning:** Webview messages should be treated as untrusted input. Even if the current UI only sends valid workspace paths, the extension backend must enforce security boundaries.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.getWorkspaceFolder` to ensure they reside within the current workspace before using them for filesystem or terminal operations.
