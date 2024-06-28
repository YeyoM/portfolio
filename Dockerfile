FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY pages ./pages
COPY public ./public
COPY next.config.js .
COPY jsconfig.json .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY .eslintrc.json .
COPY . .

CMD ["npm", "run", "dev"]

