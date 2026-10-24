## 2026-10-15 - Path Traversal in Webview Terminal Launch
**Vulnerability:** Untrusted `folderPath` parameters sent from the webview to `launchNewTerminal` allowed launching terminals in arbitrary filesystem directories outside workspace boundaries.
**Learning:** Webview message handlers must never trust folder or file paths passed in message payloads without validating containment against active workspace folders (`vscode.workspace.workspaceFolders`).
**Prevention:** Always validate user-supplied folder paths using cross-platform path relative/absolute checks (`path.relative` and `path.isAbsolute`) before passing them to extension APIs like `createTerminal`.
