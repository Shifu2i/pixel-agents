## 2026-09-20 - Path Traversal Prevention in Webview Terminal Launches
**Vulnerability:** Untrusted `folderPath` parameter passed from webview messages (`openClaude`) to `launchNewTerminal` without validation allowed launching terminals in arbitrary filesystem paths outside the active workspace.
**Learning:** Webview message parameters must always be validated against active VS Code workspace boundaries using cross-platform path checks (`path.relative` / `path.isAbsolute`).
**Prevention:** Always validate user-provided paths against `vscode.workspace.workspaceFolders` before passing them as `cwd` to terminal creation or file operations.
