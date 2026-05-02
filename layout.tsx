@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: #fff;
  overflow-x: hidden;
}

.font-sans {
  font-family: var(--font-syne), Arial, sans-serif;
}

.font-mono {
  font-family: var(--font-mono), monospace;
}
