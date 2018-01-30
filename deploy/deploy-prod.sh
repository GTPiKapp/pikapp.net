DATE=$(date +%s)
FILE=pikapp-$DATE.tar.gz
EXCLUDE="./node_modules"
EXCLUDE2="*.tar.gz"
EXCLUDE3="./.git"
EXCLUDE4=".env"
EXCLUDE5=".env.frontend"
APPLICATION_NAME=pikapp
if [ ! -f ./package.json ]; then
  echo "You must run this script from the project's root directory"
else
  if [ ! $(command -v gtar) ]; then
    echo "Install the gnu version of tar to use this utility"
    echo "brew install gnu-tar"
  else
    echo "============================================="
    echo "==== PACKAGING $FILE ===="
    echo "============================================="
    gtar zcvf $FILE --exclude=$EXCLUDE --exclude=$EXCLUDE2 --exclude=$EXCLUDE3 --exclude=$EXCLUDE4 --exclude=$EXCLUDE5 ./
    echo "============================================="
    echo "==== DEPLOYING $FILE ===="
    echo "============================================="
    aws s3 cp $FILE s3://pikapp-deployments/pikapp/
    aws deploy create-deployment  --application-name $APPLICATION_NAME --region=us-east-1 --deployment-group-name $APPLICATION_NAME --s3-location bucket=pikapp-deployments,bundleType=tgz,key=pikapp/$FILE
    echo "\n\n============================================="
    echo "========== CLEANING UP DEPLOYMENT ==========="
    echo "============================================="
    rm -rf $FILE
  fi
fi