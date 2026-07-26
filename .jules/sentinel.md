## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching VS Code terminals using workspace directories supplied via untrusted or validated webview messages allows path traversal.
**Learning:** Any folder path supplied by a webview message must be explicitly validated against the list of active workspace folders before starting a terminal in that path.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` to confirm the folder resides within an authorized workspace folder. Fallback to default safe path (e.g. `workspaceFolders[0].uri.fsPath`) and notify the user if validation fails.
