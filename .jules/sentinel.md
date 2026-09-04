## 2026-07-16 - Path Traversal Prevention in Terminal Launches

**Vulnerability:** The `launchNewTerminal` function in `src/agentManager.ts` accepted an unvalidated `folderPath` string from webview messages and used it directly as the working directory (`cwd`) for `vscode.window.createTerminal()`, allowing potential path traversal outside active workspace folders.

**Learning:** Webview messages must never be trusted to supply file system paths directly to backend APIs without validation against `vscode.workspace.workspaceFolders`.

**Prevention:** Always validate user/webview-provided paths using cross-platform relative path checks (`path.relative` and `path.isAbsolute`) against the root paths of active workspace folders before passing them to file system or process creation APIs.
