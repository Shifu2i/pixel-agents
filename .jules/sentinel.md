## 2026-10-15 - Workspace Path Traversal Prevention in Terminal Launch
**Vulnerability:** Launching terminals via `openClaude` webview messages accepted arbitrary `folderPath` parameters without checking if the folder path was within active workspace boundaries.
**Learning:** Webview messages must be treated as untrusted input. Directly passing `folderPath` to `vscode.window.createTerminal({ cwd: folderPath })` allows launching terminals in arbitrary host system directories.
**Prevention:** Validate `folderPath` against all active workspace folders in `vscode.workspace.workspaceFolders` using `path.relative` containment checking before setting terminal `cwd`.
