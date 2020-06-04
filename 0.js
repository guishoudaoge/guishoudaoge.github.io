function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*://maker-showroom.rakuten.co.jp/*")) {
        return 'DIRECT';
    }
    if (shExpMatch(url, "*://*.rakuten.co.jp/*")) {
        return 'PROXY 133.237.5.22:9502';  
    }
    if (shExpMatch(url, "*://host.docker.internal*")) {
        return 'PROXY 10.102.20.14:3128'; 
    }
    return 'DIRECT';
}
