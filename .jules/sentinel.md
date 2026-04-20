## 2026-04-20 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview can send a `folderPath` to the extension host to launch a new Claude Code terminal in that directory. If this path is not validated, a compromised webview or malicious message could launch terminals in arbitrary directories on the user's machine.
**Learning:** VS Code's `createTerminal({ cwd })` accepts any valid filesystem path. Validation against `vscode.workspace.workspaceFolders` is necessary when the path originates from an untrusted source like a webview.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to verify that a provided path belongs to the active workspace before using it as a terminal's working directory.
