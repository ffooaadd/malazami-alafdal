const data = {
  'المرحلة الابتدائية': {
    'الصف الأول': ['رياضيات', 'لغة عربية', 'علوم'],
    'الصف الثاني': ['رياضيات', 'لغة إنجليزية', 'علوم'],
    // أضف الصفوف والمواد الأخرى حسب الحاجة
  },
  'المرحلة المتوسطة': {
    'الأول متوسط': ['الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'الإنكليزي', 'الإسلامية', 'العربي'],
    'الثاني متوسط': ['الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'الإنكليزي', 'الإسلامية', 'العربي'],
    'الثالث متوسط': ['الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'الإنكليزي', 'الإسلامية', 'العربي'],
  },
  'المرحلة الثانوية': {
    'الثالث ثانوي': ['الفيزياء', 'الكيمياء', 'الأحياء', 'الاجتماعيات', 'الإنكليزي', 'الإسلامية', 'العربي']
  }
};

function showGrades(type, stage) {
  const gradesContainer = document.getElementById(`${type}Grades`);
  const subjectsContainer = document.getElementById(`${type}Subjects`);
  gradesContainer.innerHTML = '';
  subjectsContainer.innerHTML = '';
  gradesContainer.classList.remove('hidden');
  subjectsContainer.classList.add('hidden');

  const grades = Object.keys(data[stage]);

  grades.forEach(grade => {
    const button = document.createElement('button');
    button.className = 'bg-yellow-400 text-white py-2 px-4 m-2 rounded hover:bg-yellow-600';
    button.innerText = grade;
    button.onclick = () => showSubjects(type, stage, grade);
    gradesContainer.appendChild(button);
  });
}

function showSubjects(type, stage, grade) {
  const subjectsContainer = document.getElementById(`${type}Subjects`);
  subjectsContainer.innerHTML = '';
  subjectsContainer.classList.remove('hidden');

  const subjects = data[stage][grade];

  subjects.forEach(subject => {
    const link = document.createElement('a');
    link.href = `https://t.me/XD6_bot`; // رابط البوت الذي يستلم المواد
    link.target = '_blank';
    link.className = 'block bg-purple-500 text-white py-2 px-4 m-2 rounded hover:bg-purple-700';
    link.innerText = subject;
    subjectsContainer.appendChild(link);
  });
}
