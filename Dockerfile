FROM 20-alpine3.18

WORKDIR /app

COPY . .

RUN ["npm","install"]

RUN ["node ","mqtt.js"]