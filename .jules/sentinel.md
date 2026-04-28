# Sentinel Security Journal

## 2026-04-20 - Path Traversal in Terminal Launch
**Vulnerability:** The webview could send an arbitrary `folderPath` to the extension via the `openClaude` message, which was used as the `cwd` for a new terminal without validation.
**Learning:** Folder paths received from the webview must be validated against the active workspace folders using `vscode.workspace.getWorkspaceFolder` before being used in sensitive operations like launching terminals.
**Prevention:** Always validate external paths against the known workspace structure. Default to a safe path (like the first workspace folder) if validation fails.
