## 2026-04-14 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Path traversal vulnerability in `launchNewTerminal` where `folderPath` from webview messages was used directly as the terminal's `cwd` without validation.
**Learning:** Accepting paths from a webview is dangerous as it can be manipulated by a compromised webview or malicious script to perform actions outside the intended scope (e.g., launching a terminal in a sensitive system directory).
**Prevention:** Always validate paths received from external sources like webviews against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
