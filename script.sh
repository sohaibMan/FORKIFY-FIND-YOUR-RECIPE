clear
# intro to the project
printRed(){
RED='\033[0;31m'

NC='\033[0m' # No Color
echo "\t#############################################"
    echo "${RED} $* ${NC}"
echo "\t#############################################\n"
# sleep 2
}
printGreen(){
Green='\033[0;32m' 
NC='\033[0m' # No Color
echo "\t#############################################"
    echo "${Green} $* ${NC}"
echo "\t#############################################\n"
# sleep 2
}
# STARTING THE PROJECT WITH RUNNING THE BACKEND SERVER 
cd BackEnd
printRed  "welcome to forkify project , this script file will guide you step by step to run this project"

printGreen "First of All before installing any dependencies you need to create an atlas account\n  and create a cluster and get the connection string https://cloud.mongodb.com/ (no credit car required)"
# check if .env exist else prompt the user to enter password and username and cluster name and create .env file 
if [ -f .env ]; then
    printGreen ".env file exist--atlas string is already set"
else
printRed "IF YOU ARE LAZY JUST PRESS 0 AND I WILL DO IT FOR YOU(CONNECT ME TO A SAMPLE MONGODB CLUSTER NOT MINE) ELSE PRESS 1"
read choice
case "$choice" in
0) 
echo "PASSWORD=u7M78dnLGI30Wshp\nUSER_NAME=demo_account\nCLUSTERNAME=cluster0.ygbvojg.mongodb.net"> .env
;;
*)
    printRed "Well, .env file does not exist"
    echo "please enter your mongodb username"
    read username
    echo "please enter your mongodb password"
    read  password
    echo "please enter your mongodb cluster name"
    read clustername
    echo "PASSWORD=$password\nUSER_NAME=$username\nCLUSTERNAME=$clustername" > .env
esac
fi

# install dependencies

printRed "installing backend dependencies"

if [ -d "./node_modules" ]; then
    printGreen "node_modules already exist(backend)"
else
    printRed "node_modules does not exist--installing node_modules"
    npm install
fi

# Establishing the connection with the database Mongodb and run the backup script with node js
printRed "Esatablishing connection with database(with data)"
npm run load 

# run the server with the database loaded
printRed "starting backend server"
npm start &

# install frontend dependencies
cd ../FrontEnd
if [ -d "./node_modules" ]; then
    printGreen "node_modules exist(frontend)"
else
printRed "installing dependencies for frontend"
npm install
fi


printRed "starting frontend server"
npm start &
cd ..
code .

