function copyText() {
  console.log('Я работаю');
  let text = document.getElementById('output');

  let textarea = document.createElement('textarea');
        textarea.value = text.textContent;
        document.body.appendChild(textarea);
        
        // Выделяем весь текст в textarea
        textarea.select();
        
        // Копируем выделенный текст
        document.execCommand('copy');
        
        // Удаляем временный textarea
        document.body.removeChild(textarea);
        
        // // Визуальная обратная связь (необязательно)
        // alert('Текст скопирован в буфер обмена:\n' + textarea.value);
}