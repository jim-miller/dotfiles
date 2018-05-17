function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*-opscenter*plus.nikecloud.com") ||
        shExpMatch(host, "*eureka*plus.nikecloud.com"))
        return "HTTPS squid.tools.nikecloud.com:443"; // Works in Chrome, works in Firefox if you point to a web server, but not a local file, use "PROXY squid.tools.nikecloud.com:3128" for Safari to work, though this support in squid server may be turned off in the future

    return "DIRECT";
}
