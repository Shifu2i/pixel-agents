## 2026-07-16 - Prevent Path Traversal in Webview Terminal Launch
**Vulnerability:** Untrusted `folderPath` parameter sent from webview message could allow launching integrated terminals in arbitrary directory locations outside the workspace root.
**Learning:** `launchNewTerminal` accepted `folderPath` directly as `cwd` for `vscode.window.createTerminal` without validating containment within active VS Code workspace folders.
**Prevention:** Always validate user/webview supplied folder paths against `vscode.workspace.workspaceFolders` using cross-platform path relative check (`path.relative(folder.uri.fsPath, folderPath)`) before using them as terminal working directories.
