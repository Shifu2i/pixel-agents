## 2025-05-14 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal risk when launching a terminal from a webview message. A compromised webview could send a `folderPath` outside the intended workspace.
**Learning:** `vscode.Uri.file(path)` might fail in remote environments (SSH/WSL) if the workspace uses a different URI scheme. Using `vscode.Uri.parse(path)` or handling URIs directly is more robust.
**Prevention:** Always validate paths received from webviews against `vscode.workspace.workspaceFolders` using `vscode.workspace.getWorkspaceFolder`.
