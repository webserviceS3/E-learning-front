FROM node:18.12.1-alpine3.15
WORKDIR /app
COPY package.json ./
RUN npm install --force --frozen-lockfile
COPY . .
EXPOSE 5173
CMD ["npm", "run","dev"]