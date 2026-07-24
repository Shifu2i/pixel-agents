## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching VS Code terminals using arbitrary unvalidated folder paths received from the webview.
**Learning:** Webview messages can be spoofed or manipulated, so any directory paths passed from the frontend must be validated against the active workspace folders before being used as the terminal's working directory (`cwd`).
**Prevention:** Always validate `folderPath` inputs using `vscode.workspace.getWorkspaceFolder(vscode.Uri.file(folderPath))` and fallback to a safe workspace directory with a warning message if validation fails.
