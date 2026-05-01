## 2026-04-30 - Path Traversal Prevention in Terminal Launch
**Vulnerability:** The webview can send a `folderPath` to `launchNewTerminal` which is used as the `cwd` for a new terminal. If not validated, a malicious or buggy webview could request a terminal be launched in any directory on the user's system, potentially leading to unauthorized file access or execution if the user runs commands in that terminal.
**Learning:** Input from webviews (even if internal) should be treated as untrusted, especially when used for filesystem operations or process execution.
**Prevention:** Always validate requested paths against the active workspace folders using `vscode.workspace.getWorkspaceFolder`.
