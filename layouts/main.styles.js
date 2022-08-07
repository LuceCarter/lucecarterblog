import css from "styled-jsx/css";
import "prismjs/themes/prism-okaidia.css";

export default css.global`
  :root {
    --color-primary: #84b9f5;
    --color-secondary: #ffb151;
    --color-tertiary: #F47E24;
    --color-foreground: #323E48;
    --color-background: #ffffff;
    --color-muted: #666666;
    --color-header: #323E48;
    --color-nav: #575F69;
    --color-sociallinks: #575F69;
    --color-dadjoke: #F9A01B;
    --color-tags: linear-gradient(var(--color-secondary), var(--color-tertiary));

    --grid-unit: 0.5rem;

    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-bold: 700;

    --font-family-heading: -apple-system, BlinkMacSystemFont, "Soleil", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --font-family-body: -apple-system, BlinkMacSystemFont, "Soleil", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    --font-family-code: Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
      monospace;

    --global-transition-time: 0.2s;

    --wrapper-max-width: 48rem;

    --header-nav-item-active-color: #F9A01B;
    --footer-copyright-color: #575F69;
    --external-url-background-color: #575F69;

    --screen-med: 768px;
    --hamburger_padding-x: 16px;
    --hamburger_padding-y: 16px;
    --hamburger_layer-width: 32px;
    --hamburger_layer-height: 4px;
    --hamburger_layer-spacing: 6px;
    --hamburger_layer-color: var(--color-secondary);
    --hamburger_layer-border-radius: 1px;
    --hamburger_hover-opacity: 0.9;
    --hamburger_active-hover-opacity: var(--hamburger_hover-opacity);
  }

  html {
    font-size: 100%;
    background-color: var(--color-background);
  }

  body {
    font-size: 1rem;
    font-weight: var(--font-weight-light);
    font-family: var(--font-family-body);
    color: var(--color-foreground);
    margin: 0;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  /* accessibility fixes for prismjs */
  .token.comment {
    color: #adb8c2 !important;
  }

  .token.tag, .token.constant {
    color: #fc92b6 !important;
  }
`;
