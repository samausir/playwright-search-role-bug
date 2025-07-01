# Playwright search role bug

Run `npm test` and observe the `<search>` element is not found. This is despite Chrome's Accessibility tab reporting the `<search>` element to have `role=search` implicitly.

The `<search>` element would however be found if `role=search` was added to it explicitly.
