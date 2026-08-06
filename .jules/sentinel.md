## 2026-07-16 - Path Traversal Prevention in Terminal Launches
**Vulnerability:** Launching a terminal inside an arbitrary folder path received from the webview (`openClaude` message) allowed directory traversal or launching terminals outside of the active workspace.
**Learning:** Untrusted input from VS Code webview messages was passed directly as the `cwd` (current working directory) of a new terminal without validating whether it resides within the user's active workspace folders.
**Prevention:** Prior to launching any VS Code terminal or spawning any process on behalf of a webview message, validate the target path using platform-agnostic path comparison (`path.relative` and `path.isAbsolute`) against the absolute path (`fsPath`) of all active workspace folders.
