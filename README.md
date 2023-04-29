
# StipsXtra

StipsXtra is a powerful browser extension designed to enhance your experience on the website www.stips.co.il. With StipsXtra, you can enjoy a range of useful utilities and features that make browsing the site faster, smoother, and more personalized.


## Features

- Light/dark mode + animations toggle [From StipsX](#Acknowledgements)
- Self-messages in the thanks wall
- Full voting statistics (including the number of votes cast in favor and against an answer)
## Installation

Load unpacked StipsXtra from chrome

Clone the repository to your local machine, then, in your Chrome browser, navigate to `chrome://extensions/` (If you haven't enabled developer mode already, click the toggle button in the top right corner to enable it), click the "Load unpacked" button in the top left corner and choose the repository folder.
## Building from Source
1. Install webpack if you haven't already done so.
```bash
npm install --save-dev webpack
```
2. Build the extension in production mode:
```bash
npx webpack --mode production
```

3. [Installation](#installation)
## Acknowledgements

**Note:** This project uses CSS files (`darkmode.css`, `default-palette.css`) that are licensed under the Apache License 2.0 from the user StipsX. The original CSS file can be found at https://github.com/StipsX/stipsx-extension.

To comply with the terms of the Apache License 2.0, the license text has been included in this repository, and proper attribution has been given to the original author. Any modifications made to the original file have been clearly indicated.