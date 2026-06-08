# Sentinel Security Journal

## 2026-06-02 - Path Traversal in Terminal Launching
**Vulnerability:** The extension allowed launching a terminal in an arbitrary directory by accepting an unvalidated `folderPath` from a webview message. A malicious or compromised webview could potentially trigger terminal execution in sensitive system directories.
**Learning:** Even internal messages between a webview and an extension should be treated as untrusted input when they involve filesystem operations or process execution.
**Prevention:** Always validate paths received from the webview against the current workspace using `vscode.workspace.getWorkspaceFolder` or similar APIs before using them in sensitive operations like terminal creation.
