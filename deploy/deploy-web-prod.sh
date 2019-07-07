#!/bin/sh

S3_BUCKET=pikapp-website

APPLICATION_NAME=pikapp-website-frontend

INDEX_TEMPLATE="./public/index.html"
DEFAULT_INDEX_JS_BUNDLE="/bundle.js"

CLOUDFRONT_WEB_DISTRIBUTION=E3H6039IISVTL # Production CloudFront Distribution

if [ ! -f ./package.json ]; then
  echo "You must run this script from the project's root directory"
else
  if [ ! $(command -v gtar) ]; then
    echo "Install the gnu version of tar to use this utility"
    echo "brew install gnu-tar"
  else
    echo "============================================="
    echo "============= UPLOADING ASSETS ============="
    echo "============================================="
    aws s3 sync ./public/images/. s3://$S3_BUCKET/images/ --exclude ".DS_Store"
    aws s3 sync ./public/newsletters/. s3://$S3_BUCKET/newsletters/ --exclude ".DS_Store"
    aws s3 sync ./public/stylesheets/. s3://$S3_BUCKET/stylesheets/ --exclude ".DS_Store"

    echo "============================================="
    echo "============== BUILDING BUNDLE =============="
    echo "========== *THIS MAY TAKE A WHILE* =========="
    echo "============================================="
    rm -rf ./public/javascripts/*.js
    rm -rf ./public/javascripts/*.json

    ./node_modules/.bin/webpack --config webpack.prod.config.js --progress --colors # Bundle the application

    aws s3 cp ./public/index.html s3://$S3_BUCKET/index.html
    aws s3 sync ./public/javascripts/. s3://$S3_BUCKET/javascripts/ --exclude ".DS_Store"

    echo "============================================="
    echo "========= PURGING CLOUDFRONT CACHE ========="
    echo "============================================="
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_WEB_DISTRIBUTION --paths "/*"

    echo "============================================="
    echo "============ POSTING SLACK ALERT ============"
    echo "============================================="
    aws s3 cp s3://pikapp-deployments/config/slack.env ./
    SLACK_HOOK=$(grep SLACK_DEPLOYMENT_HOOK './slack.env' | awk '{ print $2 }')
    curl --silent --output /dev/null -X POST -H 'Content-type: application/json' --data "{\"text\":\"*$APPLICATION_NAME* has requested a deployment\"}" $SLACK_HOOK
    rm './slack.env'

  fi
fi
