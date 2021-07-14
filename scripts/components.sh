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
cd ./resources/@shadow-ninja/components
pwd
yarn install
echo


# Right now there is no distinction between the two environments

if [ $1 == "development" ]
then
  echo "---------- Pack debug version."
  yarn run build
fi

if [ $1 == "production" ]
then
  echo "---------- Pack release version."
  yarn run build
fi

echo

echo "---------- Upgrade @shadow-ninja package"
cd ../../
pwd
yarn upgrade @shadow-ninja/components

echo "========== Finished with components."
echo
