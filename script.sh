echo "welcome to forkify project , this script file will guide you step by step to run this project"
sleep 2
echo "First of All before installing any dependencies you need to create an atlas account and create a cluster and get the connection string 
https://cloud.mongodb.com/ 
no credit car required
and then fill .env_sample and rename  it to .env
"

echo "welcome sohaib to your project"
cd BackEnd
# echo "installing dependencies for backend"
npm install
echo "Esatablishing connection with database"
npm run load &
echo "starting backend server"
npm start &
cd ../FrontEnd
echo "installing dependencies for frontend"
npm install
echo "starting frontend server"
npm start &
echo "your project is running on localhost:3000"

