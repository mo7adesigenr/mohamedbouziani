// script.js

// التحكم في زر الهامبرغر لعرض وإخفاء قائمة التنقل
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu').querySelector('ul');
    navMenu.classList.toggle('active');
});

// إضافة تأثيرات عند التمرير (Scroll Animations)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 200) {
            section.classList.add('visible');
        }
    });
});


// script.js

// تمرير سلس عند النقر على الروابط
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        window.scrollTo({
            top: targetSection.offsetTop - 60, // تعديل المسافة العلوية حسب الحاجة
            behavior: 'smooth'
        });
    });
});
