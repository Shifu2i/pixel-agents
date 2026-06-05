## 2026-06-02 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal risk when launching a terminal from a webview message.
**Learning:** VS Code terminals launched with a `cwd` from an untrusted webview message can be used to access directories outside the workspace if not validated.
**Prevention:** Validate any folder paths received from the webview against `vscode.workspace.getWorkspaceFolder` to ensure they belong to the active workspace.
