#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-discover-and-share-57703-57721/recipe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

