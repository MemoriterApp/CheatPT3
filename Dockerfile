FROM node:18
WORKDIR /
COPY ./ ./
RUN npm i
CMD ["node","index.js"]