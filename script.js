// script.js

document.addEventListener("DOMContentLoaded", () => {
    const descriptions = document.querySelectorAll('.description');

    descriptions.forEach(description => {
        const text = description.getAttribute('data-text');
        description.innerHTML = ''; // Очистка текста
        let index = 0;

        // Устанавливаем начальную высоту рамки
        description.style.height = '1.2em'; // Начальная высота одной строки

        const typing = () => {
            if (index < text.length) {
                description.innerHTML += text.charAt(index);
                index++;
                if (index % 30 === 0) { // Каждые 30 символов увеличиваем высоту
                    description.style.height = `${description.scrollHeight}px`;
                }
                setTimeout(typing, 100); // Задержка между символами
            }
        };

        typing(); // Запуск анимации
    });

    // Функция для появления случайных слов
    const words = ["Невероятна", "Шедевр", "Прекрасна", "Умница", "Добрая"];
    const showRandomWord = () => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const wordElement = document.createElement('div');
        wordElement.classList.add('floating-word');
        wordElement.innerText = randomWord;

        // Установка случайной позиции
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        wordElement.style.left = `${x}px`;
        wordElement.style.top = `${y}px`;

        document.body.appendChild(wordElement);

        // Показать слово
        setTimeout(() => {
            wordElement.style.opacity = 1;
        }, 100);

        // Скрыть слово через 2 секунды
        setTimeout(() => {
            wordElement.style.opacity = 0;
            setTimeout(() => {
                wordElement.remove(); // Удаляем элемент после исчезновения
            }, 500);
        }, 2000);
    };

    // Запуск функции каждые 5 секунд
    setInterval(showRandomWord, 5000);
});
