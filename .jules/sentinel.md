## 2025-03-10 - Path Traversal in Terminal Launch
**Vulnerability:** Path traversal risk when launching a terminal from a webview message.
**Learning:** The `launchNewTerminal` function accepted a `folderPath` parameter directly from the webview and used it as the `cwd` for a new terminal without validation.
**Prevention:** Always validate any folder paths received from the webview against `vscode.workspace.getWorkspaceFolder` to ensure they are within the current workspace.
