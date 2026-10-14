## 2026-09-20 - Webview Path Traversal Prevention in VS Code Terminals
**Vulnerability:** Untrusted `folderPath` strings received from webview postMessage calls in `launchNewTerminal` were directly passed as working directories (`cwd`) to VS Code terminals and project directory paths without containment validation.
**Learning:** `folderPath` provided by webviews can point to arbitrary file system directories outside the workspace or contain path traversal relative sequences (`..`).
**Prevention:** Validate user/webview paths using `path.relative` and `path.isAbsolute` against all `vscode.workspace.workspaceFolders` `fsPath` entries before launching terminals or reading files.
