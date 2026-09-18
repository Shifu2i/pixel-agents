# Sentinel Security Journal

## 2026-07-16 - Path Traversal Prevention in Terminal Creation
**Vulnerability:** `launchNewTerminal` accepted an untrusted `folderPath` parameter directly from webview IPC messages (`openClaude`) without validating that the path was inside an active VS Code workspace folder.
**Learning:** Webview message handlers can receive arbitrary paths from untrusted frontends or compromised webviews, allowing terminal creation with an arbitrary working directory (`cwd`).
**Prevention:** Validate input paths against `vscode.WorkspaceFolder` array using `path.relative` and `path.isAbsolute` before passing `cwd` to `vscode.window.createTerminal`. Fall back to the default workspace folder if the path is invalid.
