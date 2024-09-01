# Используем официальный образ Node.js
FROM node:20-alpine

# Копируем файлы package.json и package-lock.json
COPY package*.json ./yarn.lock ./

ARG NODE_ENV=production

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Открываем порт, на котором работает Strapi
EXPOSE 1337

# Команда для запуска Strapi
CMD ["npm", "run", "start"]
