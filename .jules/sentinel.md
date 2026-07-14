# Sentinel Security Journal

## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it directly as the `cwd` for a new terminal without validation. This could allow a malicious webview (if compromised) to launch terminals in arbitrary directories on the host system.
**Learning:** Webview messages should always be treated as untrusted input, even for internal functionality. Direct use of paths provided by the frontend in backend operations like terminal creation is a common security oversight.
**Prevention:** Always validate folder paths received from the webview against the active workspace using `vscode.workspace.getWorkspaceFolder`. Implement a safe fallback (e.g., the default workspace folder) and inform the user when an invalid path is provided.
