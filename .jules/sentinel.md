## 2026-07-16 - Path Traversal Prevention in Terminal Creation
**Vulnerability:** The webview message handler for `openClaude` passed an unchecked `folderPath` parameter to `launchNewTerminal`, allowing terminals to be created in arbitrary system directories outside the workspace.
**Learning:** Webview messages in VS Code extensions are untrusted inputs. Path validation against active `workspaceFolders` must use platform-agnostic path comparison (`path.relative` and `path.isAbsolute`) rather than URI manipulation to handle cross-platform (Windows backslashes) and remote environment pathing correctly.
**Prevention:** Always validate webview-supplied folder paths against active workspace folder bounds before using them as working directories for terminal processes or file system operations.
