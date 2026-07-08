## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The extension allowed the webview to request launching a new terminal in any arbitrary path via the `openClaude` message's `folderPath` parameter.
**Learning:** Webview messages must be treated as untrusted input. Directly using a path provided by the webview as the `cwd` for a terminal or file operation can lead to path traversal vulnerabilities, potentially exposing or affecting files outside the intended workspace.
**Prevention:** Always validate folder paths received from the webview against the active workspace folders using `vscode.workspace.getWorkspaceFolder`. If a path is outside the workspace, reject it or fall back to a safe default.
