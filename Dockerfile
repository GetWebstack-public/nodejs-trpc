FROM node:20-alpine
WORKDIR /app
RUN npm install -g tsx
COPY package.json ./
RUN npm install
COPY tsconfig.json ./
COPY src ./src
EXPOSE 3000
ENV HOST=0.0.0.0
CMD ["tsx", "watch", "src/index.ts"]
