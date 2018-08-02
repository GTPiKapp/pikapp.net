DATE=$(date +%s)
FILE=pikapp-web-$DATE.tar.gz
EXCLUDE="./node_modules"
EXCLUDE2="*.tar.gz"
EXCLUDE3="./.git"
EXCLUDE4=".env"
EXCLUDE5=".env.frontend"
APPLICATION_NAME=pikapp-web
APPLICATION_NAME_SLACK=pikapp-website-api
if [ ! -f ./package.json ]; then
  echo "You must run this script from the project's root directory"
else
  if [ ! $(command -v gtar) ]; then
    echo "Install the gnu version of tar to use this utility"
    echo "brew install gnu-tar"
  else
    echo "============================================="
    echo "=========== DESTROYING DEV FILES ==========="
    echo "============================================="
    rm ./public/javascripts/*.hot-update.json
    echo "============================================="
    echo "==== PACKAGING $FILE ===="
    echo "============================================="
    gtar zcvf $FILE --exclude=$EXCLUDE --exclude=$EXCLUDE2 --exclude=$EXCLUDE3 --exclude=$EXCLUDE4 --exclude=$EXCLUDE5 ./
    echo "============================================="
    echo "============ POSTING SLACK ALERT ============"
    echo "============================================="
    aws s3 cp s3://pikapp-deployments/config/slack.env ./
    SLACK_HOOK=$(grep SLACK_DEPLOYMENT_HOOK './slack.env' | awk '{ print $2 }')
    curl --silent --output /dev/null -X POST -H 'Content-type: application/json' --data "{\"text\":\"*$APPLICATION_NAME_SLACK* has requested a deployment\"}" $SLACK_HOOK
    rm './slack.env'
    echo "============================================="
    echo "==== DEPLOYING $FILE ===="
    echo "============================================="
    aws s3 cp $FILE s3://pikapp-deployments/pikapp-web/
    aws deploy create-deployment  --application-name $APPLICATION_NAME --region=us-east-1 --deployment-group-name $APPLICATION_NAME --s3-location bucket=pikapp-deployments,bundleType=tgz,key=$APPLICATION_NAME/$FILE
    echo "\n\n============================================="
    echo "========== CLEANING UP DEPLOYMENT ==========="
    echo "============================================="
    rm -rf $FILE
  fi
fi