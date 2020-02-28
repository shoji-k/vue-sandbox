#/bin/bash

export CYPRESS_VIDEO=false
docker run --rm -it -v $PWD:/e2e -w /e2e -e CYPRESS_VIDEO --net container:vue-sandbox_front_1 cypress/included:4.0.2
