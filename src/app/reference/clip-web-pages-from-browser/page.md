---
title: Clip web pages from browser
nextjs:
  metadata:
    title: Clip web pages from browser
    description: Use a browser extension to clip web pages as Markdown
---

Speedetail can clip web pages as Markdown via a browser extension.
It allows you to grab the web page's main article or selection.

## Prerequisites: Set up a local Speedetail server

The browser extension stores the clipped data to the Speedetail app **locally**, not to the Speedetail server directly
because the app syncs data securely via the end-to-end encryption.
To accomplish that, you have to set up a local Speedetail server beforehand so that the browser extension can access your local database.
Please check out the following guide:

- [Speedetail API Reference: Accessing via HTTP (Advanced)](https://developers.speedetail.app/guides/access-the-local-database#accessing-via-http-advanced)

## Install Web Clipper

- [Chrome Extension](https://chrome.google.com/webstore/detail/speedetail-web-clipper/foeipofmnkjhlbojckgiecdffbfnnofj)
- [Firefox Add-on](https://addons.mozilla.org/en-US/firefox/addon/speedetail-web-clipper/)

## Set up Web Clipper

The web clipper needs to know how to access your local database server [configured in your `config.json`](https://developers.speedetail.app/guides/access-the-local-database#accessing-via-http-advanced).

- **Speedetail Local Database URL** (Optional) - The URL to the local database as you configured in `core.server.port`. Default is `http://localhost:19840`
- **Username** (Required) - The Basic auth username as you configured in `core.server.auth.username`.
- **Password** (Required) - The Basic auth password as you configured in `core.server.auth.password`.

## Steps to Clip a Web Page

First, click the Speedetail toolbar button on the top right corner of the browser:

![Speedetail extension toolbar button](/images/clipping-web-pages-from-browser_toolbar.png)

Then, a web clipper window opens up, displaying the main content converted as Markdown, as following:

![Speedetail Web Clipper window](/images/clipping-web-pages-from-browser_window.png)

You can choose a notebook and add tags if you want.

If you want to clip a part of the web page, select the part and click the Speedetail toolbar button.

Click "Save page" button, then the window will close and the clipped page will be saved.
