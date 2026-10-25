## 2026-10-15 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Untrusted `folderPath` parameters received from webview messages were directly used as the working directory (`cwd`) for new terminals, allowing terminal launches in arbitrary file system locations outside the workspace.
**Learning:** Webview message handlers accepting file or folder paths must strictly validate that the path resides within active VS Code workspace folders before creating terminals or executing processes.
**Prevention:** Use platform-agnostic relative path checks (`path.relative(folderPath, workspacePath)`) against all `vscode.workspace.workspaceFolders` to enforce strict workspace containment.
