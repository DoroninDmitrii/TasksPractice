class Toggles {
  constructor(initialData, { url, interval }) {
    this.data = initialData;
    this.url = url;
    this.interval = interval;
    this.updateIntervalId = null;
    this.isUpdating = false;
    this.start(); // Начинаем обновление при инициализации
  }

  // Метод для получения тоггла по ключу
  getToggle(key) {
    return this.data[key];
  }

  // Метод для остановки обновления данных
  stop() {
    if (this.updateIntervalId) {
      clearInterval(this.updateIntervalId);
      this.updateIntervalId = null;
      this.isUpdating = false;
      console.log("Data updates stopped.");
    }
  }

  // Метод для запуска или возобновления обновления данных
  start() {
    if (!this.isUpdating) {
      this.updateIntervalId = setInterval(() => this.updateData(), this.interval);
      this.isUpdating = true;
      console.log("Data updates started.");
    }
  }

  // Метод для принудительного обновления данных
  forceUpdate() {
    this.updateData();
    console.log("Data forcefully updated.");
  }

  // Метод для обновления данных с бэкенда
  async updateData() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const newData = await response.json();
      this.data = { ...this.data, ...newData }; // Обновляем существующие данные новыми
      console.log("Data updated:", this.data);
    } catch (error) {
      console.error("Failed to update toggles:", error);
    }
  }
}

// Пример использования
const initialData = {
  featureA: false,
  featureB: true,
};

const toggles = new Toggles(initialData, {
  url: 'https://api.example.com/toggles',
  interval: 60000, // Обновлять данные каждые 60 секунд
});

// Пример работы с клиентом
toggles.getToggle('featureA'); // Получить статус фичи
toggles.stop(); // Остановить обновления
toggles.start(); // Возобновить обновления
toggles.forceUpdate(); // Принудительное обновление
