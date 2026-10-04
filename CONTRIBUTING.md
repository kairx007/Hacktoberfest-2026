# Contributing

Thanks for helping improve the Zeroday OSS Hacktoberfest event page.

## Before opening a change

1. Check the issue or discussion first, or open one if the change is substantial.
2. Keep changes focused and preserve the existing pixel-art visual direction.
3. For interface changes, consider both mobile and desktop layouts and keyboard/accessibility behavior.
4. Keep event copy and image alt text accurate. Add new public images under `public/` and use descriptive filenames.
5. Run `npm run lint` and `npm run build` before submitting when your environment allows it.

## Pull requests

- Explain the user-facing change and why it is useful.
- Include screenshots for visual changes, especially mobile layouts.
- Mention the commands you ran and any checks you could not run.
- Do not commit local environment files, dependency folders, or generated build output.

## Project-specific guidance

Read `AGENTS.md` before changing application code. This project uses Next.js 16; consult the installed Next.js documentation under `node_modules/next/dist/docs/` for framework guidance before making framework-level changes.
