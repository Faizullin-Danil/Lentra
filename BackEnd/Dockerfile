# Dockerfile для бэкенда
FROM node:20.8.0-alpine

WORKDIR /app

# Копируем только package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install
# RUN npm install -g nodemon

# Копируем все остальные файлы в контейнер
COPY . .

# Открываем порт для бэкенда
EXPOSE 3000

# Запускаем сервер с помощью nodemon для разработки
CMD ["npm", "run", "dev"]
