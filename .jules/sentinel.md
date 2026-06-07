# Sentinel Security Journal

## 2026-06-02 - Path traversal in terminal launch
**Vulnerability:** `folderPath` from untrusted webview messages was used directly as `cwd` for terminal launches without validation, potentially allowing terminals to be launched in arbitrary directories outside the workspace.
**Learning:** Input from webviews is untrusted. Even if it originates from a trusted UI component, it must be validated on the backend.
**Prevention:** Validate all folder paths against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))`.
