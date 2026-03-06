# 🏎️ Singapore Grand Prix Showcase

Интерактивное веб-приложение, посвященное легендарной ночной гонке Формулы-1 в Сингапуре. Проект демонстрирует работу с динамическими данными, кастомную дизайн-систему и современную верстку.

[** Посмотреть проект вживую**](https://marygeraska.github.io/singapore-f1)

---

![Main Screen](./screenshots/preview.png) 
*Скриншот главной страницы с футуристичной сеткой и Hero-секцией*

---

##  Особенности проекта

- **Custom Design System**: Централизованное управление темами (цвета, шрифты, сетка) через `theme.js`.
- **Dynamic Grid Layout**: Футуристичная фоновая сетка, которая бесшовно объединяет все секции сайта.
- **Unsplash API Integration**: Автоматическая подгрузка актуальных фотографий гонки, болидов и городской архитектуры Сингапура.
- **Responsive Design**: Полная адаптивность от мобильных устройств до широкоформатных мониторов.
- **Glassmorphism UI**: Использование эффектов прозрачности и блюра для создания эффекта глубины.

##  Стек технологий

- **Core**: [React](https://react.dev) + [Vite](https://vitejs.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Data**: [Unsplash API](https://unsplash.com)
- **State & Theme**: React Context API
- **Deployment**: GitHub Pages

##  Запуск локально

Если вы хотите запустить проект у себя на компьютере:

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/marygeraska/singapore-f1.git

2. **Установите зависимости:**
   `npm install`

3. **Настройка API ключа:**
   Создайте в корне проекта файл `.env` и добавьте туда ваш ключ:
   ```env
   VITE_UNSPLASH_ACCESS_KEY=ВАШ_КЛЮЧ_ИЗ_UNSPLASH_DASHBOARD