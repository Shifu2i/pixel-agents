## 2026-04-09 - Path Traversal in Terminal Launch
**Vulnerability:** The webview can send a `folderPath` for a new terminal. If not validated, an attacker could trick the extension into launching a terminal in a directory outside the workspace (e.g., `/etc` or `~/.ssh`).
**Learning:** Webview messages are untrusted. Any path provided by the webview that is used for filesystem operations (like setting the `cwd` of a terminal) must be validated against the current workspace folders.
**Prevention:** Use `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(path))` to ensure a path is within the authorized workspace before use.
