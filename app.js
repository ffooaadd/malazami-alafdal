// دالة لعرض المواد الدراسية بناءً على الصف المختار
function showSubjects(grade) {
    const subjects = {
        'الصف الأول': ['رياضيات', 'لغة عربية', 'علوم'],
        'الصف الثاني': ['رياضيات', 'لغة إنجليزية', 'علوم'],
        'الصف الثالث': ['رياضيات', 'لغة عربية', 'جغرافيا']
    };

    const subjectContainer = document.getElementById('subjects');
    subjectContainer.innerHTML = ''; // مسح المحتوى القديم

    if (subjects[grade]) {
        const ul = document.createElement('ul');
        subjects[grade].forEach(subject => {
            const li = document.createElement('li');
            li.classList.add('text-lg', 'mb-2', 'text-blue-600');
            li.innerText = subject;
            ul.appendChild(li);
        });
        subjectContainer.appendChild(ul);
        subjectContainer.classList.remove('hidden'); // إظهار المحتوى
    }
}

// دالة لعرض الملازم الدراسية بناءً على المرحلة المختارة
function showMlalemItems(level) {
    const mlalem = {
        'المرحلة الابتدائية': ['ملازم فيزياء', 'ملازم رياضيات'],
        'المرحلة المتوسطة': ['ملازم كيمياء', 'ملازم علوم'],
        'المرحلة الثانوية': ['ملازم فيزياء', 'ملازم كيمياء', 'ملازم رياضيات']
    };

    const mlalemContainer = document.getElementById('mlalemItems');
    mlalemContainer.innerHTML = ''; // مسح المحتوى القديم

    if (mlalem[level]) {
        const ul = document.createElement('ul');
        mlalem[level].forEach(item => {
            const li = document.createElement('li');
            li.classList.add('text-lg', 'mb-2', 'text-green-600');
            li.innerText = item;
            ul.appendChild(li);
        });
        mlalemContainer.appendChild(ul);
        mlalemContainer.classList.remove('hidden'); // إظهار المحتوى
    }
}

// دالة لتبديل القوائم الجانبية
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.classList.contains('translate-x-full')) {
        menu.classList.remove('translate-x-full');
    } else {
        menu.classList.add('translate-x-full');
    }
}

// دالة لعرض المواد بناءً على الصف المحدد في القائمة الجانبية
function showMaterials(grade) {
    const materials = {
        "أول متوسط": ["الرياضيات", "العلوم", "اللغة العربية"],
        "ثاني متوسط": ["الرياضيات", "العلوم", "اللغة الإنجليزية"],
        "ثالث متوسط": ["الرياضيات", "الفيزياء", "الكيمياء"]
    };

    const container = document.getElementById('materialsList');
    container.innerHTML = `<h2 class="text-xl font-bold mb-4">${grade}</h2>`;

    materials[grade].forEach(subject => {
        const link = document.createElement('a');
        link.href = 'https://t.me/XD6_bot';
        link.target = '_blank';
        link.textContent = subject;
        link.className = 'block text-blue-700 py-1 hover:underline';
        container.appendChild(link);
    });
}

// دالة لعرض الملازم بناءً على المرحلة المحددة
function showMlalem(level) {
    const mlalem = {
        "المرحلة الابتدائية": ["ملازم فيزياء", "ملازم رياضيات"],
        "المرحلة المتوسطة": ["ملازم كيمياء", "ملازم علوم"],
        "المرحلة الثانوية": ["ملازم فيزياء", "ملازم كيمياء", "ملازم رياضيات"]
    };

    const container = document.getElementById('mlalemList');
    container.innerHTML = `<h2 class="text-xl font-bold mb-4">${level}</h2>`;

    mlalem[level].forEach(item => {
        const link = document.createElement('a');
        link.href = 'https://t.me/XD6_bot';
        link.target = '_blank';
        link.textContent = item;
        link.className = 'block text-green-700 py-1 hover:underline';
        container.appendChild(link);
    });
}
