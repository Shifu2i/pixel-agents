## 2025-05-15 - [Path Traversal in Terminal Launch]
**Vulnerability:** The extension launched terminals using a `folderPath` received directly from the webview via `postMessage` without validation. An attacker could potentially compromise the webview to launch terminals in sensitive directories outside the current workspace.
**Learning:** Webview messages should be treated as untrusted input. Even for internal tools, validating paths against the active workspace folders is necessary to maintain security boundaries.
**Prevention:** Always use `vscode.workspace.getWorkspaceFolder()` to verify that any path received from an external source (like a webview) is part of the current workspace before using it for sensitive operations like launching terminals or reading files.
