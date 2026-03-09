document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const siteSections = document.querySelectorAll('.site-section');
    const siteCards = document.querySelectorAll('.site-card');

    // 标签切换功能
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            siteSections.forEach(section => {
                const category = section.getAttribute('data-category');
                if (targetTab === 'all' || category === targetTab) {
                    section.classList.remove('hidden');
                    // 添加淡入动画
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        section.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        section.style.opacity = '1';
                        section.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // 网站卡片悬停效果
    siteCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
            this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
        });
        
        // 点击效果
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });

    // 创建像素小恐龙动画
    function createPixelDino() {
        const dino = document.createElement('div');
        dino.className = 'pixel-dino';
        dino.innerHTML = `
            <div class="dino-body">
                <div class="dino-head"></div>
                <div class="dino-tail"></div>
                <div class="dino-legs"></div>
            </div>
        `;
        
        // 设置恐龙的像素样式
        dino.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 32px;
            height: 32px;
            z-index: 1000;
            pointer-events: none;
            animation: dinoWalk 4s infinite ease-in-out;
        `;
        
        // 添加恐龙像素样式
        const style = document.createElement('style');
        style.textContent = `
            .pixel-dino .dino-body {
                position: relative;
                width: 100%;
                height: 100%;
            }
            
            .pixel-dino .dino-head {
                position: absolute;
                top: 4px;
                left: 20px;
                width: 8px;
                height: 8px;
                background-color: #4ecdc4;
                border-radius: 1px;
            }
            
            .pixel-dino .dino-head::before {
                content: '';
                position: absolute;
                top: -4px;
                left: 2px;
                width: 4px;
                height: 4px;
                background-color: #45b7d1;
                border-radius: 1px;
            }
            
            .pixel-dino .dino-tail {
                position: absolute;
                top: 8px;
                left: 0px;
                width: 8px;
                height: 4px;
                background-color: #4ecdc4;
                border-radius: 1px;
            }
            
            .pixel-dino .dino-legs {
                position: absolute;
                bottom: 0;
                left: 8px;
                width: 16px;
                height: 8px;
                background-color: #4ecdc4;
                border-radius: 1px;
            }
            
            .pixel-dino .dino-legs::before,
            .pixel-dino .dino-legs::after {
                content: '';
                position: absolute;
                bottom: -4px;
                width: 4px;
                height: 4px;
                background-color: #45b7d1;
                border-radius: 1px;
            }
            
            .pixel-dino .dino-legs::before {
                left: 2px;
            }
            
            .pixel-dino .dino-legs::after {
                right: 2px;
            }
            
            @keyframes dinoWalk {
                0% { transform: translateX(0) scaleX(1); }
                25% { transform: translateX(-2px) scaleX(1); }
                50% { transform: translateX(-4px) scaleX(-1); }
                75% { transform: translateX(-2px) scaleX(-1); }
                100% { transform: translateX(0) scaleX(1); }
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(dino);
        
        // 4秒后移除恐龙
        setTimeout(() => {
            if (dino.parentNode) {
                dino.parentNode.removeChild(dino);
            }
        }, 4000);
    }

    // 创建可爱的像素装饰
    function createPixelDecoration() {
        const decorations = ['❤️', '⭐', '🌟', '💫', '✨', '🎈', '🎉'];
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#ff8cc8', '#a8e6cf'];
        
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const decoration = document.createElement('div');
                decoration.className = 'pixel-decoration';
                decoration.textContent = decorations[Math.floor(Math.random() * decorations.length)];
                decoration.style.cssText = `
                    position: fixed;
                    top: ${Math.random() * 100}px;
                    left: ${Math.random() * window.innerWidth}px;
                    font-size: 16px;
                    z-index: 999;
                    pointer-events: none;
                    animation: floatUp 3s ease-out forwards;
                    color: ${colors[Math.floor(Math.random() * colors.length)]};
                `;
                
                document.body.appendChild(decoration);
                
                setTimeout(() => {
                    if (decoration.parentNode) {
                        decoration.parentNode.removeChild(decoration);
                    }
                }, 3000);
            }, i * 500);
        }
    }

    // 添加浮动动画
    const floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(0.5);
                opacity: 0;
            }
            20% {
                transform: translateY(-20px) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-200px) scale(0.3);
                opacity: 0;
            }
        }
        
        @keyframes sparkle {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(floatStyle);

    // 定期创建可爱的像素装饰
    setInterval(() => {
        if (Math.random() > 0.7) {
            createPixelDecoration();
        }
    }, 2000);

    // 鼠标移动时偶尔创建小恐龙
    let lastDinoTime = 0;
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        if (currentTime - lastDinoTime > 8000 && Math.random() > 0.95) {
            createPixelDino();
            lastDinoTime = currentTime;
        }
    });

    // 页面加载时创建欢迎装饰
    setTimeout(() => {
        createPixelDecoration();
    }, 1000);

    // 添加随机闪烁的星星效果
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background-color: #ffd93d;
            border-radius: 50%;
            pointer-events: none;
            z-index: 998;
            animation: sparkle 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 600);
    }

    // 鼠标点击时创建闪烁效果
    document.addEventListener('click', function(e) {
        if (Math.random() > 0.6) {
            createSparkle(e.clientX, e.clientY);
        }
    });

    // 为标签按钮添加特殊的悬停效果
    tabButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // 创建小星星围绕效果
            for (let i = 0; i < 2; i++) {
                setTimeout(() => {
                    const rect = this.getBoundingClientRect();
                    createSparkle(
                        rect.left + Math.random() * rect.width,
                        rect.top + Math.random() * rect.height
                    );
                }, i * 100);
            }
        });
    });
});