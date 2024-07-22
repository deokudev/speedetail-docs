---
title: Use behind web proxy
nextjs:
  metadata:
    title: Use behind web proxy
    description: Work behind a corporate or local web proxy
---

If you are working behind a company proxy or you have a local proxy running, it's necessary to tell Inkdrop to go through it.
Here is a quick tip for those dealing with a proxy.

You can configure the web proxy settings by editing `config.json`. This config file is in following directory:

- on macOS: `~/Library/Application Support/inkdrop/config.json`
- on Windows: `%APPDATA%\inkdrop\config.json`
- on Linux: `~/.config/inkdrop/config.json`

Quit Inkdrop before you edit it.

```js
{
  "*": {
    "core": {
      "network": {
        "http_proxy": "http://webproxy:8080/",
        "https_proxy": "http://webproxy:8080/"
      }
    }
  }
}
```

If the web proxy requires BASIC auth, you can just specify a URL with username and password like so:

```url
http://username:password@webproxy:8080/
```

Note that if your username or password is like a mail address which includes "@" character or non-alphabetical characters, you have to percent-encode them according to [RFC 3986, section 3.2.1](https://tools.ietf.org/html/rfc3986#section-3.2.1), as following:

```url
NG: http://david@company.com:password@webproxy:8080/
OK: http://david%40company.com:password@webproxy:8080/
```

Now open Inkdrop and you should be able to authenticate and get synced!

## Configuring ipm

`ipm` is also necessary to be configured for working behind a web proxy.

```bash
ipm config set proxy "http://webproxy:8080"
ipm config set https_proxy proxy "http://webproxy:8080"
```

## Allow Self-signed Certificates

You have to disable SSL certificate validation if your proxy server is SSL-enabled but with a self-signed certificate.
You can disable it by adding `strict_ssl: 0` in your `config.json` like so:

```js
{
  "*": {
    "core": {
      "network": {
        "strict_ssl": 0
      }
    }
  }
}
```

For `ipm`, run below command:

```sh
ipm config set strict-ssl false
```

## Troubleshooting

### Client network socket disconnected before secure TLS connection was established

If you got an error like that, your proxy server may be using TLSv1.0 which is obsolete.
You have to update your proxy server to support newer protocols like TLSv1.2 since Inkdrop does not support TLSv1.0.

### Run network diagnosis

You can run a network diagnosis from the menu _Help → Run Network Diagnosis_:

![Network diagnosis menu](/images/working-behind-a-corporate-web-proxy_network-diagnosis.png)

It launches Developer Tools and reports the diagnosis result in the console.
You should get something like this:

![Network diagnosis output](/images/working-behind-a-corporate-web-proxy_network-diagnosis_result.png)
