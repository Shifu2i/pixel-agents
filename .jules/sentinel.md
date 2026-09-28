## 2026-09-20 - Webview Path Traversal Prevention in Terminal Launches
**Vulnerability:** Untrusted webview messages providing `folderPath` could specify arbitrary paths on the file system, causing terminals to launch outside the active workspace.
**Learning:** Webviews in VS Code extension architecture are untrusted message sources. Any file or folder path passed from a webview message must be strictly validated against `vscode.workspace.workspaceFolders`.
**Prevention:** Use platform-agnostic containment checks via `path.relative(folder.uri.fsPath, folderPath)` and `path.isAbsolute(relative)` to ensure paths stay within active workspace folders.
