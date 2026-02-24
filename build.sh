#!/bin/bash

docker buildx build --platform=linux/amd64  -t usernx/voiceagent-web:1.0.2 . --push

curl -X PUT \
    -H "content-type: application/json" \
    -H "Cookie: KuboardUsername=admin; KuboardAccessKey=2fsetf66fich.acr7fxr2c8ht336y4a7pef8a8dres74r" \
    -d '{"kind":"deployments","namespace":"prod","name":"voiceagent-web","images":{"usernx/voiceagent-web":"usernx/voiceagent-web:1.0.2"}}' \
    "http://103.30.78.254:18060/kuboard-api/cluster/my-server/kind/CICDApi/admin/resource/updateImageTag"