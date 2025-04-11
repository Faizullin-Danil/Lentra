FROM node:20.8.0-alpine

WORKDIR /app

# Копируем только package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы в контейнер
COPY . .

# Открываем порт, на котором работает фронтенд
EXPOSE 5173

# Запускаем сервер разработки с помощью vite
CMD ["npm", "run", "dev"]
