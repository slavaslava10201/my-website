let totalClicks = 0;
let clickTimes = [];
const clickArea = document.getElementById('clickArea');
const totalClicksDisplay = document.getElementById('totalClicks');
const cpsDisplay = document.getElementById('cps');

// Функция для обновления статистики
function updateStats() {
    totalClicksDisplay.textContent = totalClicks;

    const now = Date.now();
    clickTimes = clickTimes.filter(time => now - time < 1000);

    const clicksInLastSecond = clickTimes.length;
    // Используем Math.floor для CPS, чтобы оно было целым, как на скриншоте,
    // или toFixed(2) для более точного отображения, если нужно.
    // Если хотите 0.00, как в первом примере, измените на clicksInLastSecond.toFixed(2);
    cpsDisplay.textContent = clicksInLastSecond; 
}

// Обработчик события клика
clickArea.addEventListener('click', () => {
    totalClicks++;
    clickTimes.push(Date.now());
    updateStats();
});

// Постоянное обновление статистики для плавного отображения CPS
setInterval(updateStats, 100);

// Инициализация при загрузке
updateStats();
