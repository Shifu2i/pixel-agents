## 2026-04-30 - Fix Path Traversal in Terminal Launch
**Vulnerability:** The `launchNewTerminal` function accepted a `folderPath` from the webview and used it directly as the `cwd` for a new terminal without validation. This could allow a compromised webview to launch terminals in arbitrary directories on the host machine.
**Learning:** Even internal webviews should be treated as untrusted boundaries when they can trigger actions on the host filesystem or shell.
**Prevention:** Always validate paths received from webviews against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
