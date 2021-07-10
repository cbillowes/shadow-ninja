#!/bin/bash

if [ "$1" != "development" ] && [ "$1" != "production" ];
then
  echo "$1 is not supported."
  exit -1
fi

echo "========== Starting with components"
echo

echo "---------- Clean things up."
pwd
rm -rf ./node_modules/@shadow-ninja/
rm -rf ./resources/@shadow-ninja/dist/
rm -rf ./resources/@shadow-ninja/node_modules/
echo

echo "---------- Install npm packages in the @shadow-ninja package."
cd ./resources/@shadow-ninja
pwd
yarn install
echo

if [ $1 == "development" ]
then
  echo "---------- Pack debug version."
  yarn run debug
fi

if [ $1 == "production" ]
then
  echo "---------- Pack release version."
  yarn run release
fi

echo

echo "---------- Upgrade @shadow-ninja package"
cd ../../
pwd
yarn upgrade @shadow-ninja/components

echo "========== Finished with components."
echo
