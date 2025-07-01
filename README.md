# Playwright search role bug

Run `npm test` and observe the `<search>` element is not found. This is despite Chrome's Accessibility tab reporting the `<search>` element to have `role=search` implicitly.

The `<search>` element would however be found if `role=search` was added to it explicitly.

<img width="489" alt="Screenshot of Chrome's Accessibility tab reporting the search role" src="https://github.com/user-attachments/assets/5dab654b-c0b8-4ff3-bc21-f705800fc887" />
