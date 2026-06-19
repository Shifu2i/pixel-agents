## 2026-06-11 - Path Traversal in Terminal Launches
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from webview messages without validation, allowing a malicious webview (or compromised message) to potentially launch terminals in directories outside the user's workspace.
**Learning:** Webview messages should be treated as untrusted input. Even if the webview is internal, validating paths against the active workspace is a critical defense-in-depth measure for VS Code extensions.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder` to validate that any path received from the webview resides within a legitimate workspace folder.
