// script.js - Улучшенные анимации и функциональность
document.addEventListener('DOMContentLoaded', () => {
    // Основные элементы
    const learnBtn = document.getElementById('learnBtn');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const allVisualBlocks = document.querySelectorAll('.visual-block');
    
    // Создаем частицы для фона шапки
    createParticles();
    createFooterParticles();
    
    // Анимация героя
    const heroVisual = document.getElementById('heroVisual');
    setTimeout(() => {
        heroVisual.classList.add('visible');
    }, 300);
    
    // Плавная прокрутка при клике на кнопку
    learnBtn.addEventListener('click', () => {
        const pcSection = document.getElementById('pc');
        pcSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Плавная прокрутка для всех навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Изменение навигации при прокрутке
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    });
    
    // Анимация появления элементов при прокрутке
    const options = {
        root: null,
        threshold: 0.2,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Добавляем особые анимации для визуальных блоков
                if (entry.target.id === 'pcVisual') {
                    animatePcVisual();
                } else if (entry.target.id === 'historyVisual') {
                    animateHistoryVisual();
                } else if (entry.target.id === 'resourcesVisual') {
                    animateResourcesVisual();
                }
            }
        });
    }, options);
    
    // Наблюдаем за всеми визуальными блоками
    allVisualBlocks.forEach(block => {
        observer.observe(block);
    });
    
    // Анимация блоков секций
    document.querySelectorAll('.slide-left, .slide-right').forEach(element => {
        observer.observe(element);
    });
    
    // Функция для создания частиц в шапке
    function createParticles() {
        const particlesContainer = document.getElementById('particles-js');
        
        // Создаем разное количество частиц разного размера
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Случайные размеры и позиции
            const size = Math.random() * 10 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 10;
            const duration = Math.random() * 10 + 15;
            
            // Применяем стили
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            // Разные цвета для частиц
            const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = randomColor;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Функция для создания частиц в футере
    function createFooterParticles() {
        const footerParticles = document.getElementById('footer-particles');
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('footer-particle');
            
            const size = Math.random() * 3 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            
            // Случайные цвета
            const colors = ['#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.backgroundColor = randomColor;
            
            // Добавляем анимацию мерцания
            const opacity = Math.random() * 0.7 + 0.3;
            particle.style.opacity = opacity;
            
            // Случайное мерцание
            const duration = Math.random() * 3 + 2;
            particle.style.animation = `blink ${duration}s infinite alternate`;
            
            footerParticles.appendChild(particle);
        }
    }
    
    // Специальные анимации для визуальных блоков
    function animatePcVisual() {
        const pcVisual = document.getElementById('pcVisual');
        
        // Создаем простую анимацию для PC блока (схематичная материнская плата)
        for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            const isChip = i < 5;
            
            element.style.position = 'absolute';
            element.style.backgroundColor = isChip ? '#f72585' : '#4cc9f0';
            
            if (isChip) {
                // Создаем чипы
                element.style.width = '40px';
                element.style.height = '40px';
                element.style.left = `${20 + i * 15}%`;
                element.style.top = `${30 + (i % 3) * 20}%`;
            } else {
                // Создаем линии соединений
                element.style.height = '2px';
                element.style.width = `${Math.random() * 30 + 10}%`;
                element.style.left = `${Math.random() * 70}%`;
                element.style.top = `${Math.random() * 80 + 10}%`;
            }
            
            // Добавляем пульсирующую анимацию
            element.style.animation = `pulse 3s infinite ${i * 0.2}s`;
            element.style.borderRadius = isChip ? '5px' : '1px';
            element.style.boxShadow = isChip ? '0 0 10px rgba(247, 37, 133, 0.5)' : 'none';
            
            pcVisual.appendChild(element);
        }
    }
    
    function animateHistoryVisual() {
        const historyVisual = document.getElementById('historyVisual');
        
        // Временная шкала для истории информатики
        const timelineBg = document.createElement('div');
        timelineBg.style.position = 'absolute';
        timelineBg.style.left = '10%';
        timelineBg.style.top = '50%';
        timelineBg.style.width = '80%';
        timelineBg.style.height = '4px';
        timelineBg.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        timelineBg.style.borderRadius = '2px';
        historyVisual.appendChild(timelineBg);
        
        // Добавляем точки на временной шкале
        const decades = ['1940', '1960', '1980', '2000', '2020'];
        decades.forEach((decade, index) => {
            // Создаем точку
            const point = document.createElement('div');
            point.style.position = 'absolute';
            point.style.left = `${10 + index * 20}%`;
            point.style.top = '50%';
            point.style.width = '12px';
            point.style.height = '12px';
            point.style.backgroundColor = '#7209b7';
            point.style.borderRadius = '50%';
            point.style.transform = 'translate(-50%, -50%)';
            point.style.boxShadow = '0 0 15px rgba(114, 9, 183, 0.7)';
            point.style.zIndex = '2';
            point.style.opacity = '0';
            point.style.animation = `fadeIn 0.5s ${index * 0.3 + 0.5}s forwards`;
            historyVisual.appendChild(point);
            
            // Добавляем текст с годом
            const yearLabel = document.createElement('div');
            yearLabel.style.position = 'absolute';
            yearLabel.style.left = `${10 + index * 20}%`;
            yearLabel.style.top = index % 2 === 0 ? '30%' : '70%';
            yearLabel.style.transform = 'translateX(-50%)';
            yearLabel.style.color = '#fff';
            yearLabel.style.fontSize = '14px';
            yearLabel.style.fontWeight = 'bold';
            yearLabel.style.opacity = '0';
            yearLabel.style.animation = `fadeIn 0.5s ${index * 0.3 + 0.8}s forwards`;
            yearLabel.textContent = decade;
            historyVisual.appendChild(yearLabel);
        });
        
        // Добавляем анимированную линию прогресса
        const progressLine = document.createElement('div');
        progressLine.style.position = 'absolute';
        progressLine.style.left = '10%';
        progressLine.style.top = '50%';
        progressLine.style.width = '0';
        progressLine.style.height = '4px';
        progressLine.style.backgroundColor = '#7209b7';
        progressLine.style.borderRadius = '2px';
        progressLine.style.boxShadow = '0 0 10px rgba(114, 9, 183, 0.7)';
        progressLine.style.zIndex = '1';
        progressLine.style.animation = 'growWidth 2.5s 1s forwards';
        historyVisual.appendChild(progressLine);
    }
    
    function animateResourcesVisual() {
        const resourcesVisual = document.getElementById('resourcesVisual');
        
        // Создаем иконки ресурсов
        const icons = [
            { name: 'book', top: '20%', left: '25%' },
            { name: 'laptop', top: '50%', left: '70%' },
            { name: 'globe', top: '30%', left: '50%' },
            { name: 'code', top: '70%', left: '30%' },
            { name: 'video', top: '60%', left: '60%' }
        ];
        
        icons.forEach((icon, index) => {
            const iconElement = document.createElement('div');
            iconElement.style.position = 'absolute';
            iconElement.style.top = icon.top;
            iconElement.style.left = icon.left;
            iconElement.style.width = '50px';
            iconElement.style.height = '50px';
            iconElement.style.borderRadius = '50%';
            iconElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            iconElement.style.display = 'flex';
            iconElement.style.justifyContent = 'center';
            iconElement.style.alignItems = 'center';
            iconElement.style.color = '#fff';
            iconElement.style.fontSize = '16px';
            iconElement.style.fontWeight = 'bold';
            iconElement.style.boxShadow = '0 0 20px rgba(76, 201, 240, 0.3)';
            iconElement.style.transform = 'scale(0)';
            iconElement.style.animation = `popIn 0.5s ${index * 0.2 + 0.3}s forwards`;
            
            // Добавляем текст значка
            iconElement.textContent = icon.name.charAt(0).toUpperCase();
            
            // Добавляем пульсирующую анимацию
            iconElement.style.animation = `popIn 0.5s ${index * 0.2 + 0.3}s forwards, pulse 3s infinite ${index * 0.5}s`;
            
            resourcesVisual.appendChild(iconElement);
            
            // Добавляем соединительные линии между иконками
            if (index > 0) {
                const line = document.createElement('div');
                line.style.position = 'absolute';
                line.style.height = '2px';
                line.style.backgroundColor = 'rgba(76, 201, 240, 0.4)';
                line.style.transformOrigin = '0 0';
                line.style.zIndex = '0';
                line.style.opacity = '0';
                line.style.animation = `fadeIn 0.5s ${index * 0.3 + 1}s forwards`;
                
                // Вычисляем позицию и длину линии между текущей и предыдущей иконкой
                const prevIcon = icons[index - 1];
                const x1 = parseInt(prevIcon.left);
                const y1 = parseInt(prevIcon.top);
                const x2 = parseInt(icon.left);
                const y2 = parseInt(icon.top);
                
                // Вычисляем длину и угол наклона линии
                const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                
                line.style.width = `${length / 2}px`;
                line.style.top = `${y1}%`;
                line.style.left = `${x1}%`;
                line.style.transform = `rotate(${angle}deg)`;
                
                resourcesVisual.appendChild(line);
            }
        });
    }
});

// Дополнительные глобальные keyframes анимации
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем стили для новых анимаций
    const styleElement = document.createElement('style');
    
    styleElement.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.05); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes growWidth {
            from { width: 0; }
            to { width: 80%; }
        }
        
        @keyframes popIn {
            0% { transform: scale(0); }
            70% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        
        @keyframes blink {
            0% { opacity: 0.1; }
            100% { opacity: 0.7; }
        }
    `;
    
    document.head.appendChild(styleElement);
});
