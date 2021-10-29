#!/bin/bash

cd "$(dirname "$0")"

pushd ../sourcecode

mkdir -p not_migrated

pushd ./not_migrated

git clone ssh://git@app-cerpus-stash.cerpus.net:7999/brain/cerpuscourse.git
