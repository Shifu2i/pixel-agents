## 2026-07-16 - Path Traversal Prevention in Terminal Launching
**Vulnerability:** Untrusted webview messages specifying a `folderPath` could cause `launchNewTerminal` to spawn terminals in arbitrary directories outside the VS Code workspace.
**Learning:** `vscode.window.createTerminal({ cwd })` does not enforce workspace boundaries on `cwd` passed from extension code.
**Prevention:** Validate `folderPath` against all active workspace folders (`vscode.workspace.workspaceFolders`) using cross-platform relative path containment checks (`path.relative` and `path.isAbsolute`) before setting terminal `cwd`.
