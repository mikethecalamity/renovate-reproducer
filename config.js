module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  enabledManagers: ["regex"],
  customManagers: [
    {
      customType: "regex",
      datasourceTemplate: "docker",
      fileMatch: ["Dockerfile", "global-images.yaml", "transfer.images"],
      matchStrings: [
        "\\$MY_REGISTRY\\\/ext\.mcr\.microsoft\.com\\\/(?<depName>.*?):(?<currentValue>.*?)(\\s|$)",
        "\\${MY_REGISTRY}\\\/ext\.mcr\.microsoft\.com\\\/(?<depName>.*?):(?<currentValue>.*?)(\\s|$)"
      ],
      registryUrlTemplate: "mcr.microsoft.com"
    }
  ]
}
