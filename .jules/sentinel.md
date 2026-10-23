## 2026-10-15 - Validate Webview Terminal Launch Paths Against Workspace Folders
**Vulnerability:** Webview messages requesting terminal launch (`openClaude`) passed untrusted `folderPath` parameters directly to `vscode.window.createTerminal`, allowing terminal execution in arbitrary filesystem locations outside the workspace.
**Learning:** Webview postMessage parameters cannot be trusted as valid or safe paths. Directly using untrusted path inputs for terminal `cwd` creates a path traversal risk.
**Prevention:** Always validate user/webview folder paths against `vscode.workspace.workspaceFolders` using platform-agnostic path containment checks (`path.relative` and `path.isAbsolute`) before spawning processes or setting working directories.
