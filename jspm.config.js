SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      }
    }
  },
  transpiler: "plugin-babel"
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "fsevents": "npm:fsevents@1.1.3",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jsbn": "npm:jsbn@0.1.1",
    "michael-simon/riot": "github:michael-simon/riot@JSPM17Upgrade",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "riot": "github:michael-simon/riot@JSPM17Upgrade",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "systemjs": "npm:systemjs@0.21.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.0",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:ajv@4.11.8": {
      "map": {
        "co": "npm:co@4.6.0",
        "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:are-we-there-yet@1.1.4": {
      "map": {
        "delegates": "npm:delegates@1.0.0",
        "readable-stream": "npm:readable-stream@2.3.4"
      }
    },
    "npm:asn1.js@4.9.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1@0.2.3": {
      "map": {
        "sys": "npm:jspm-nodelibs-util@0.2.0"
      }
    },
    "npm:assert-plus@0.2.0": {
      "map": {}
    },
    "npm:assert-plus@1.0.0": {
      "map": {}
    },
    "npm:asynckit@0.4.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:aws-sign2@0.6.0": {
      "map": {}
    },
    "npm:aws4@1.6.0": {
      "map": {}
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:brace-expansion@1.1.11": {
      "map": {
        "balanced-match": "npm:balanced-match@1.0.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.1.1": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "elliptic": "npm:elliptic@6.4.0",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.3.4"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:buffer@5.0.8": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:caseless@0.12.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.10"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "sha.js": "npm:sha.js@2.4.10"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.6",
        "randomfill": "npm:randomfill@1.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:debug@2.6.9": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:deep-extend@0.4.2": {
      "map": {}
    },
    "npm:delayed-stream@1.0.0": {
      "map": {}
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:detect-libc@1.0.3": {
      "map": {}
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "randombytes": "npm:randombytes@2.0.6",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.3",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.4",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:extsprintf@1.3.0": {
      "map": {}
    },
    "npm:forever-agent@0.6.1": {
      "map": {}
    },
    "npm:form-data@2.1.4": {
      "map": {
        "asynckit": "npm:asynckit@0.4.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.17"
      }
    },
    "npm:fs.realpath@1.0.0": {
      "map": {}
    },
    "npm:fsevents@1.1.3": {
      "map": {
        "nan": "npm:nan@2.8.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.39"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "fstream": "npm:fstream@1.0.11",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.4"
      }
    },
    "npm:fstream@1.0.11": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "inherits": "npm:inherits@2.0.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.6.2"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "aproba": "npm:aproba@1.2.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "has-unicode": "npm:has-unicode@2.0.1",
        "object-assign": "npm:object-assign@4.1.1",
        "signal-exit": "npm:signal-exit@3.0.2",
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wide-align": "npm:wide-align@1.1.2"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:glob@7.1.2": {
      "map": {
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "inflight": "npm:inflight@1.0.6",
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.4",
        "once": "npm:once@1.4.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:graceful-fs@4.1.11": {
      "map": {}
    },
    "npm:har-schema@1.0.5": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:har-validator@4.2.1": {
      "map": {
        "ajv": "npm:ajv@4.11.8",
        "har-schema": "npm:har-schema@1.0.5"
      }
    },
    "npm:has-unicode@2.0.1": {
      "map": {}
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "boom": "npm:boom@2.10.1",
        "cryptiles": "npm:cryptiles@2.0.5",
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:hoek@2.16.3": {
      "map": {}
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.4.1",
        "sshpk": "npm:sshpk@1.13.1"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:inherits@2.0.3": {
      "map": {}
    },
    "npm:ini@1.3.5": {
      "map": {}
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:is-typedarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:isstream@0.1.2": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:jsbn@0.1.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:json-stable-stringify@1.0.1": {
      "map": {
        "jsonify": "npm:jsonify@0.0.0"
      }
    },
    "npm:jsprim@1.4.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "extsprintf": "npm:extsprintf@1.3.0",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.10.0"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:mime-db@1.30.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:mime-types@2.1.17": {
      "map": {
        "mime-db": "npm:mime-db@1.30.0"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.11"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:nan@2.8.0": {
      "map": {}
    },
    "npm:node-pre-gyp@0.6.39": {
      "map": {
        "detect-libc": "npm:detect-libc@1.0.3",
        "hawk": "npm:hawk@3.1.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@4.0.1",
        "npmlog": "npm:npmlog@4.1.2",
        "rc": "npm:rc@1.2.5",
        "request": "npm:request@2.81.0",
        "rimraf": "npm:rimraf@2.6.2",
        "semver": "npm:semver@5.5.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2",
        "tar": "npm:tar@2.2.1",
        "tar-pack": "npm:tar-pack@3.4.1"
      }
    },
    "npm:nopt@4.0.1": {
      "map": {
        "abbrev": "npm:abbrev@1.1.1",
        "osenv": "npm:osenv@0.1.4"
      }
    },
    "npm:npmlog@4.1.2": {
      "map": {
        "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "gauge": "npm:gauge@2.7.4",
        "set-blocking": "npm:set-blocking@2.0.0"
      }
    },
    "npm:oauth-sign@0.8.2": {
      "map": {}
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:os-homedir@1.0.2": {
      "map": {}
    },
    "npm:os-tmpdir@1.0.2": {
      "map": {}
    },
    "npm:osenv@0.1.4": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:pako@0.2.9": {
      "map": {}
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.9.2",
        "browserify-aes": "npm:browserify-aes@1.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:path-is-absolute@1.0.1": {
      "map": {}
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "sha.js": "npm:sha.js@2.4.10"
      }
    },
    "npm:performance-now@0.2.0": {
      "map": {}
    },
    "npm:process-nextick-args@2.0.0": {
      "map": {}
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:punycode@1.4.1": {
      "map": {}
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:randomfill@1.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:rc@1.2.5": {
      "map": {
        "deep-extend": "npm:deep-extend@0.4.2",
        "ini": "npm:ini@1.3.5",
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1"
      }
    },
    "npm:readable-stream@2.3.4": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "string_decoder": "npm:string_decoder@1.0.3",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:request@2.81.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "aws4": "npm:aws4@1.6.0",
        "caseless": "npm:caseless@0.12.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "extend": "npm:extend@3.0.1",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@2.1.4",
        "har-validator": "npm:har-validator@4.2.1",
        "hawk": "npm:hawk@3.1.3",
        "http-signature": "npm:http-signature@1.1.1",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.17",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "performance-now": "npm:performance-now@0.2.0",
        "qs": "npm:qs@6.4.0",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "stringstream": "npm:stringstream@0.0.5",
        "tough-cookie": "npm:tough-cookie@2.3.3",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "uuid": "npm:uuid@3.2.1"
      }
    },
    "npm:rimraf@2.6.2": {
      "map": {
        "glob": "npm:glob@7.1.2",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "hash-base": "npm:hash-base@2.0.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:safe-buffer@5.1.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:semver@5.5.0": {
      "map": {}
    },
    "npm:set-blocking@2.0.0": {
      "map": {}
    },
    "npm:sha.js@2.4.10": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:signal-exit@3.0.2": {
      "map": {}
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:sshpk@1.13.1": {
      "map": {
        "asn1": "npm:asn1@0.2.3",
        "assert-plus": "npm:assert-plus@1.0.0",
        "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
        "dashdash": "npm:dashdash@1.14.1",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
        "getpass": "npm:getpass@0.1.7",
        "jsbn": "npm:jsbn@0.1.1",
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "code-point-at": "npm:code-point-at@1.1.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:stringstream@0.0.5": {
      "map": {}
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:systemjs@0.21.0": {
      "map": {}
    },
    "npm:tar-pack@3.4.1": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "fstream": "npm:fstream@1.0.11",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "once": "npm:once@1.4.0",
        "readable-stream": "npm:readable-stream@2.3.4",
        "rimraf": "npm:rimraf@2.6.2",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.11",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:tough-cookie@2.3.3": {
      "map": {
        "punycode": "npm:punycode@1.4.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:uid-number@0.0.6": {
      "map": {}
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:uuid@3.2.1": {
      "map": {}
    },
    "npm:verror@1.10.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "extsprintf": "npm:extsprintf@1.3.0"
      }
    },
    "npm:wide-align@1.1.2": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.8"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.4"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:stream-http@2.8.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.4",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "github:michael-simon/riot@JSPM17Upgrade": {
      "map": {
        "riot-observable": "npm:riot-observable@3.0.0",
        "riot-compiler": "npm:riot-compiler@3.4.0",
        "riot-cli": "npm:riot-cli@4.0.1",
        "riot-tmpl": "npm:riot-tmpl@3.0.8",
        "simple-dom": "npm:simple-dom@1.3.0",
        "simple-html-tokenizer": "npm:simple-html-tokenizer@0.4.3"
      }
    },
    "npm:riot-cli@4.0.1": {
      "map": {
        "riot-compiler": "npm:riot-compiler@3.4.0",
        "optionator": "npm:optionator@0.8.2",
        "chokidar": "npm:chokidar@1.7.0",
        "co": "npm:co@4.6.0",
        "rollup": "npm:rollup@0.52.3",
        "chalk": "npm:chalk@2.3.1"
      }
    },
    "npm:riot-compiler@3.4.0": {
      "map": {
        "source-map": "npm:source-map@0.6.1",
        "skip-regex": "npm:skip-regex@0.3.1",
        "string-similarity": "npm:string-similarity@1.2.0"
      }
    },
    "npm:riot-tmpl@3.0.8": {
      "map": {
        "eslint-config-riot": "npm:eslint-config-riot@1.0.0"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "deep-is": "npm:deep-is@0.1.3",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "levn": "npm:levn@0.3.0"
      }
    },
    "npm:chokidar@1.7.0": {
      "map": {
        "async-each": "npm:async-each@1.0.1",
        "glob-parent": "npm:glob-parent@2.0.0",
        "anymatch": "npm:anymatch@1.3.2",
        "is-glob": "npm:is-glob@2.0.1",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:string-similarity@1.2.0": {
      "map": {
        "lodash": "npm:lodash@4.17.5"
      }
    },
    "npm:chalk@2.3.1": {
      "map": {
        "ansi-styles": "npm:ansi-styles@3.2.0",
        "supports-color": "npm:supports-color@5.2.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:ansi-styles@3.2.0": {
      "map": {
        "color-convert": "npm:color-convert@1.9.1"
      }
    },
    "npm:anymatch@1.3.2": {
      "map": {
        "normalize-path": "npm:normalize-path@2.1.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.11.0"
      }
    },
    "npm:supports-color@5.2.0": {
      "map": {
        "has-flag": "npm:has-flag@3.0.0"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
        "minimatch": "npm:minimatch@3.0.4",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "readable-stream": "npm:readable-stream@2.3.4"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "normalize-path": "npm:normalize-path@2.1.1",
        "arr-diff": "npm:arr-diff@2.0.0",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "array-unique": "npm:array-unique@0.2.1",
        "braces": "npm:braces@1.8.5",
        "object.omit": "npm:object.omit@2.0.1",
        "extglob": "npm:extglob@0.3.2",
        "kind-of": "npm:kind-of@3.2.2",
        "regex-cache": "npm:regex-cache@0.4.4",
        "filename-regex": "npm:filename-regex@2.0.1",
        "parse-glob": "npm:parse-glob@3.0.4"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
      }
    },
    "npm:color-convert@1.9.1": {
      "map": {
        "color-name": "npm:color-name@1.1.3"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "glob-base": "npm:glob-base@0.3.0",
        "is-dotfile": "npm:is-dotfile@1.0.3"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.1.0"
      }
    },
    "npm:regex-cache@0.4.4": {
      "map": {
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "expand-range": "npm:expand-range@1.8.2",
        "preserve": "npm:preserve@0.2.0",
        "repeat-element": "npm:repeat-element@1.1.2"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "for-own": "npm:for-own@0.1.5",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "glob-parent": "npm:glob-parent@2.0.0",
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:for-own@0.1.5": {
      "map": {
        "for-in": "npm:for-in@1.0.2"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "isobject": "npm:isobject@2.1.0",
        "is-number": "npm:is-number@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "randomatic": "npm:randomatic@1.1.7"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:randomatic@1.1.7": {
      "map": {
        "is-number": "npm:is-number@3.0.0",
        "kind-of": "npm:kind-of@4.0.0"
      }
    },
    "npm:is-number@3.0.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:kind-of@4.0.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    }
  }
});
