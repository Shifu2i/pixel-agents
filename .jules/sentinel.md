## 2026-09-20 - Path Traversal Prevention in Terminal Creation

**Vulnerability:** `launchNewTerminal` accepted an unvalidated `folderPath` parameter from webview messages, allowing terminals to be opened in arbitrary host directories outside the workspace.
**Learning:** Unsanitized path input passed directly to VS Code terminal creation APIs (`vscode.window.createTerminal({ cwd })`) can bypass workspace boundaries.
**Prevention:** Always validate `folderPath` inputs using cross-platform relative path checks (`path.relative` & `!path.isAbsolute`) against active workspace folders before passing them to file system or terminal operations.
