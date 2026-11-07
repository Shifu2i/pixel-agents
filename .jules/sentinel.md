# Sentinel Security Journal

## 2026-11-07 - Path Traversal Prevention in Webview Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a user- or webview-supplied `folderPath` parameter without verifying that the path was located within the active VS Code workspace folders. If an untrusted message was dispatched to the extension host, it could specify arbitrary working directories (e.g. `/`, `/etc`, or sensitive user directories) where terminal commands would execute.
**Learning:** In VS Code extensions handling messages from webviews, file paths must never be trusted as within the project boundary. Manipulating URIs with `.with({ path })` can be fragile on Windows due to path separator handling. The safest, cross-platform containment check is using `path.relative(baseFsPath, targetFsPath)` and checking that it does not start with `..` and is not absolute.
**Prevention:** Always validate all path inputs originating from webviews or RPC channels against `vscode.workspace.workspaceFolders` before passing them to `vscode.window.createTerminal` or file system operations. Fall back safely to the primary workspace root if validation fails.
