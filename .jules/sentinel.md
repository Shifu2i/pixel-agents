## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** The webview message handler allowed arbitrary `folderPath` strings to be passed into `launchNewTerminal`, which set the terminal's `cwd` directly without validating containment within active VS Code workspace folders.
**Learning:** When launching system processes or terminals based on parameters from untrusted webviews or postMessage events, user/webview inputs must be validated against workspace boundaries using native platform-agnostic path containment checks.
**Prevention:** Validate paths using `path.relative` and `path.isAbsolute` against `folder.uri.fsPath` for all `vscode.workspace.workspaceFolders`. Fall back safely to workspace root if validation fails.
