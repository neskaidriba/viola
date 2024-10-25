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
});
