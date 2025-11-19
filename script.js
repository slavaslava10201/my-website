let totalClicks = 0;
let clickTimes = []; // Массив для хранения времени каждого клика
const clickArea = document.getElementById('clickArea');
const totalClicksDisplay = document.getElementById('totalClicks');
const cpsDisplay = document.getElementById('cps');
const resetButton = document.getElementById('resetButton');

// Функция для обновления статистики
function updateStats() {
    // 1. Общее количество кликов
    totalClicksDisplay.textContent = totalClicks;

    // 2. Расчет CPS (Кликов в секунду)
    const now = Date.now();
    // Удаляем старые времена кликов (старше 1 секунды)
    clickTimes = clickTimes.filter(time => now - time < 1000);

    const clicksInLastSecond = clickTimes.length;
    // CPS - это количество кликов за последнюю секунду
    // Если нужно среднее за все время, расчет будет другим (totalClicks / (now - startTime))
    cpsDisplay.textContent = clicksInLastSecond.toFixed(2);
}

// Обработчик события клика
clickArea.addEventListener('click', () => {
    totalClicks++;
    clickTimes.push(Date.now()); // Записываем время текущего клика
    updateStats();
});

// Обработчик кнопки сброса
resetButton.addEventListener('click', () => {
    totalClicks = 0;
    clickTimes = [];
    updateStats();
    console.log('Счетчик сброшен!');
});

// Для постоянного обновления CPS, даже если кликов нет
// Установим интервал обновления 100 мс
setInterval(updateStats, 100);

// Инициализация при загрузке
updateStats();
  
