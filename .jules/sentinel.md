## 2026-09-20 - Workspace Path Traversal Prevention in Terminal Launches
**Vulnerability:** Unvalidated `folderPath` parameter passed from webview message to `vscode.window.createTerminal` allowed spawning terminals in arbitrary system directories outside the active workspace.
**Learning:** Webview messages must be treated as untrusted inputs. Using `path.relative` and `path.isAbsolute` provides a robust cross-platform way to verify directory containment without URI scheme mismatch issues.
**Prevention:** Always validate user- or webview-supplied file paths against active workspace root folders using `path.relative(folder.uri.fsPath, targetPath)` before passing them to file system or terminal operations.
