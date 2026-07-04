## 2026-06-11 - [HIGH] Prevent path traversal in terminal launch
**Vulnerability:** The extension accepted a `folderPath` from the webview to set as the `cwd` for a new terminal without validation. A compromised webview could potentially launch terminals in sensitive directories outside the user's workspace.
**Learning:** Untrusted messages from webviews must always be validated on the backend. Even if the UI only sends valid workspace paths, the backend must enforce this constraint.
**Prevention:** Always validate folder paths received from the webview against `vscode.workspace.workspaceFolders` before using them in operations like `createTerminal`.
