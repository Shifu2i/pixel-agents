## 2026-06-11 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal/Workspace escape via terminal CWD.
**Learning:** Untrusted folder paths from webview messages can be used to launch terminals outside the VS Code workspace, potentially exposing sensitive files to agent actions.
**Prevention:** Validate all folder paths received from the webview against `vscode.workspace.getWorkspaceFolder` to ensure they are within the current workspace before using them in sensitive operations like `createTerminal`.
