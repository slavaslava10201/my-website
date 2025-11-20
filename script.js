let totalClicks = 0;
let clickTimes = [];
// Используем новые ID элементов из HTML: clickArea, totalClicks, cps
const clickArea = document.getElementById('clickArea');
const totalClicksDisplay = document.getElementById('totalClicks');
const cpsDisplay = document.getElementById('cps');

// Функция для обновления статистики
function updateStats() {
    // Обновляем общий счетчик кликов
    totalClicksDisplay.textContent = totalClicks;

    // Расчет CPS (Кликов в секунду)
    const now = Date.now();
    // Фильтруем клики, оставляя только те, что были сделаны за последнюю секунду (1000 мс)
    clickTimes = clickTimes.filter(time => now - time < 1000);

    const clicksInLastSecond = clickTimes.length;
    // Выводим CPS (округляем до целого или оставляем .00 если кликов нет)
    // Убираем toFixed(2) для схожести со скриншотом, который показывает 0
    cpsDisplay.textContent = clicksInLastSecond; 
}

// Обработчик события клика
clickArea.addEventListener('click', () => {
    totalClicks++;
    clickTimes.push(Date.now()); // Записываем время текущего клика
    updateStats();
});

// На скриншоте нет кнопки сброса, но если она нужна, ее нужно добавить в HTML и JS.
// Если она не нужна, просто удалите этот блок.
/*
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    totalClicks = 0;
    clickTimes = [];
    updateStats();
});
*/

// Постоянное обновление статистики (10 раз в секунду) для плавного отображения CPS
setInterval(updateStats, 100);

// Инициализация при загрузке
updateStats();
