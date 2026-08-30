## 2026-07-16 - Prevent Path Traversal in Webview Terminal Creation
**Vulnerability:** Untrusted webview messages requesting terminal creation could pass an arbitrary `folderPath` outside the open VS Code workspace, resulting in terminal processes running in unauthorized directories.
**Learning:** Checking paths in VS Code extensions across local and remote platforms requires native path comparison (`path.relative` and `path.isAbsolute`) against all active workspace folders rather than direct string matching or URI manipulation.
**Prevention:** Always validate user- or webview-supplied file system paths against `vscode.workspace.workspaceFolders` using `path.relative` and `path.isAbsolute` before passing them to file operations or process spawners.
