## 2026-04-14 - Prevent Path Traversal in Terminal Launch
**Vulnerability:** A terminal could be launched in an arbitrary folder if the `folderPath` sent from the webview was not validated against the workspace folders.
**Learning:** Webview messages should never be trusted blindly, especially when they involve filesystem paths for process execution.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder` or similar validation to ensure paths provided by the frontend are within the expected workspace boundaries.
