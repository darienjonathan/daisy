#!/bin/bash

npm run build
aws s3 sync public s3://daisy-html --profile=s3-personal