* Reproduction of [renovate-issue #17963](https://github.com/renovatebot/renovate/issues/17963)

1. Clone repository
2. Run `npm install`
3. Run `renovate-config-validator` -> error as described at issue #17963
```
 INFO: Validating config.js
ERROR: config.js contains errors
       "errors": [
         {
           "topic": "Configuration Error",
           "message": "Invalid `gitlabci.registryAliases.registryAliases.$CI_REGISTRY` configuration: value is not a url"
         }
       ]
```
