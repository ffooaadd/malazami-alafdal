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
