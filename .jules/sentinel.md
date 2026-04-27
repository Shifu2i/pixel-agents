# Sentinel's Journal

Security-focused logs and critical learnings for the Pixel Agents project.

## 2026-04-20 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` in the `openClaude` message, which was used as the `cwd` for a new VS Code terminal without validation. This could potentially allow an attacker (if the webview were compromised) to launch terminals in sensitive directories outside the workspace.
**Learning:** Even internal messages between a webview and extension host should be treated as untrusted if they contain file system paths.
**Prevention:** Always validate paths received from the webview against `vscode.workspace.workspaceFolders` or use `vscode.workspace.getWorkspaceFolder(uri)` to ensure they belong to the active workspace.
