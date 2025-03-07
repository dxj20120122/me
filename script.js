/*
作者：DaiXiaojie
GitHub：https://github.com/dxj20120122 | https://github.com/techMoujie
哔哩哔哩：tech某杰 (https://space.bilibili.com/3546711827942289)
邮箱：dxj20120122@outlook.com | 3835906098@qq.com
QQ：3835906098

项目描述：这是一个基于现代Web技术栈开发的个人网站项目，采用科技感设计风格，具有流畅的动画效果和响应式布局。
*/

// 鼠标跟随效果
const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// 鼠标离开和进入页面时的效果
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    cursorDot.style.display = 'none';
});

document.addEventListener('mouseenter', () => {
    cursor.style.display = 'block';
    cursorDot.style.display = 'block';
});

// 导航栏滚动效果
let lastScrollTop = 0;
const navbar = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

// 粒子效果配置
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff88'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ccff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// 技能进度条动画
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.setProperty('--level', `${level}%`);
    });
};

// 监听滚动，当技能部分进入视口时触发动画
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(skillsSection);

// 表单提交处理
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 获取表单数据
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // 这里可以添加发送表单数据的逻辑
    console.log('表单数据：', data);
    
    // 显示提交成功消息
    alert('消息已发送！我们会尽快回复您。');
    contactForm.reset();
});

// 项目卡片点击交互
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    
    // 添加键盘访问支持
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.classList.toggle('flipped');
        }
    });
});