## clone project
```
git clone https://github.com/mt5718214/exchange_rate.git
```

## install nvm
```bash
# download and install nvm
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

## install nodejs
```bash
# after install nvm, restart your termainl or execute following command to load the nvm
. ~/.bashrc

# use nvm to install nodejs
nvm install 16.15.0
```

## install the dependencies
```
npm install
```

## start the app
```
npm run start
```

## test API
```
curl http://localhost:3000/exchange_rate?source=USD&target=JPY&amount="\$1,525"
```

## run the test
```
npm run test
```


