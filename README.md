Renew certificates

Enter the container for nginx, after that try and run openssl x509 -enddate -noout -in <path to pem file>, to check if we still have time to renew
Then run certbot --nginx renew -v, if we got an error try to install the following:
apt-get update
apt-get install python3-certbot-nginx
then rerun the command
