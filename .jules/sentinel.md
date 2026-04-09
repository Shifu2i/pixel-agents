## 2026-04-09 - Path Traversal in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension to launch a terminal in that directory. An attacker could potentially use this to launch terminals outside of the current workspace.
**Learning:** Input from webviews (even if originating from the same extension) should be treated as untrusted, especially when used to interact with the file system or process creation.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder`.
