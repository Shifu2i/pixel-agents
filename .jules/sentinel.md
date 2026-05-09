## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** Path traversal risk when launching terminals with folder paths received from the webview.
**Learning:** Webview messages can be manipulated to include arbitrary paths, potentially leading to unauthorized access or execution in unintended directories.
**Prevention:** Validate all folder paths received from the webview against the active workspace using `vscode.workspace.getWorkspaceFolder`. Fall back to a safe default if the path is invalid.
