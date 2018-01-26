FROM mhart/alpine-node:9

COPY . /app

WORKDIR /app

RUN   rm -rf .idea \
    ; rm -rf node_modules \
    ; rm package-lock.json \
    ; npm config set registry "https://registry.npm.taobao.org/" \
   && npm install

EXPOSE 8888

CMD ["npm", "start"]