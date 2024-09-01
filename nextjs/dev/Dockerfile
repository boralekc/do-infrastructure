# Используем официальный образ Node.js
FROM node:20-alpine

# Устанавливаем рабочую директорию в /usr/src/app
WORKDIR /usr/src/app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем переменные окружения для API_URL и API_TOKEN
ENV API_URL=$API_URL
ENV API_TOKEN=$API_TOKEN

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY . .

# Открываем порт
EXPOSE 3000

# Команда для запуска Next.js приложения
CMD ["npm", "run", "dev"]
