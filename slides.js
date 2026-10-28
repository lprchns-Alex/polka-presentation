/* Content follows brief/ТЗ.md. Original screenshots are kept unchanged in assets/. */
const topLine = (label, right) => `<div class="slide-top"><span class="pill">${label}</span><span>${right}</span></div>`;
const shot = (name, alt, cls='') => `<img class="${cls}" src="assets/${name}.png" alt="${alt}" draggable="false">`;
const timeSets = [
 ['Статья','Референс','Заметка'],
 ['Статья','Видео','Референс'],
 ['Видео','Статья','PDF'],
 ['PDF','Видео','Статья']
];
window.POLKA_SLIDES = [
{name:'Полка',time:'0:00–0:25 · 25 секунд',class:'cover',notes:'Я делаю Полку — библиотеку для статей, референсов, видео и файлов, которые сохраняю на потом. Мне хотелось не просто складывать ссылки, а возвращаться к ним и использовать. За время курса я прошёл путь от веб-прототипа до приложений для Mac и iPhone — сегодня покажу именно их.',html:`
 ${topLine('ЛИЧНАЯ БИБЛИОТЕКА','АЛЕКСАНДР / ОКТЯБРЬ 2026')}
 <div class="cover-copy"><h1>Полка</h1><p>Статьи, референсы и видео.<br>Всё, к чему хочется<br>вернуться.</p><span class="pill solid">Mac + iPhone</span></div>
 <div class="cover-visual">${shot('mac-and-iphone','Настоящие приложения Полки для Mac и iPhone')}</div>
 <div class="cover-bottom"><span>Сохранить сейчас.<br>Открыть, когда будет время.</span><span class="circle-arrow">↗</span></div>`},
{name:'Проблема',time:'0:25–0:55 · 30 секунд',class:'problem',notes:'Я начал с собственной привычки: сохраняю статью в закладки, картинку в скриншоты, видео в список на потом — и забываю, зачем всё это было нужно. Сохранить легко, но потом приходится вспоминать и место, и повод. Моя гипотеза — это знакомо другим дизайнерам и креативщикам; её ещё предстоит проверить.',html:`
 ${topLine('01 / ПРОБЛЕМА','ЛИЧНЫЙ СЦЕНАРИЙ')}
 <h2>Сохранить легко.<br><span class="muted">Вернуться сложнее.</span></h2>
 <div class="scattered"><div class="thought t-one"><span>01</span><strong>Статьи</strong><small>где-то в закладках</small></div><div class="thought t-two"><span>02</span><strong>Референсы</strong><small>среди скриншотов</small></div><div class="thought t-three"><span>03</span><strong>Видео</strong><small>в списке «потом»</small></div></div>
 <p class="bottom-statement">Сохранённого становится больше.<br>Найти нужное не становится проще.</p>`},
{name:'Решение',time:'0:55–1:25 · 30 секунд',class:'solution',notes:'Я собрал четыре шага в одном приложении: сохранить находку, разобрать её, вернуться и прочитать. Коллекции, теги и короткая запись «зачем сохраняю» помогают оставить контекст, а подборка на главной — выбрать материал под свободное время. Все данные остаются у человека: у Полки нет серверов и аккаунтов.',html:`
 ${topLine('02 / РЕШЕНИЕ','ОТ НАХОДКИ К ДЕЙСТВИЮ')}
 <div class="solution-copy"><h2>Не только<br>сохранить.<br><span class="muted">Вернуться.</span></h2></div>
 <div class="solution-visual">${shot('mac-collection','Коллекция предметного дизайна в приложении Полка для Mac')}</div>
 <div class="steps"><div><span>01</span><h3>Сохранить</h3><p>Ссылка из любой<br>программы</p></div><div><span>02</span><h3>Разобрать</h3><p>Коллекции, теги,<br>«зачем сохраняю»</p></div><div><span>03</span><h3>Вернуться</h3><p>Подборка под<br>свободное время</p></div><div><span>04</span><h3>Прочитать</h3><p>Читалка и перевод<br>в приложении</p></div></div>
 <div class="slide-bottom">Данные только у человека, без серверов</div>`},
{name:'Сохранить',time:'1:25–1:50 · 25 секунд',class:'save-slide',notes:'Я могу сохранить ссылку из любой программы сочетанием Control, Option, Command и D. Открывается маленькое окно, а название, обложку и текст Полка загружает сама. Здесь я показываю этот порядок действий схемой: клавиши, окно сохранения и новая находка во входящих.',html:`
 ${topLine('03 / СОХРАНИТЬ','ИЗ ЛЮБОЙ ПРОГРАММЫ')}
 <div class="save-copy"><h2>Одно сочетание —<br><span class="muted">и ссылка<br>на полке.</span></h2><div class="key-row" aria-label="Control Option Command D"><kbd>⌃</kbd><kbd>⌥</kbd><kbd>⌘</kbd><kbd>D</kbd></div><p>Название, обложку<br>и текст — автоматически.</p></div>
 <div class="save-backdrop">${shot('mac-home','Главная Полки для Mac')}</div>
 <div class="quick-save motion">${shot('mac-quick-save','Окно «Добавить на полку» с ссылкой и выбором коллекции')}</div>
 <div class="inbox-demo motion" aria-label="Схема: новая находка во входящих"><span class="demo-overline">ВО ВХОДЯЩИХ</span><div class="new-finding"><div class="finding-cover"><span>Aa</span></div><div class="finding-copy"><strong>Сохранённая<br>статья</strong><span>practicaltypography.com</span></div><div class="skeleton"><i></i><i></i></div></div></div>
 <div class="slide-bottom demo-note">Схема взаимодействия · экраны приложения</div>`},
{name:'Вернуться',time:'1:50–2:15 · 25 секунд',class:'return-slide dark',notes:'На главной я сделал подборку «Есть время»: выбираю, сколько минут могу выделить, и Полка предлагает подходящие находки. Так можно начать с того времени, которое есть сейчас, вместо просмотра всей библиотеки. Справа — схема переключения подборки, слева — настоящий экран приложения.',html:`
 ${topLine('04 / ВЕРНУТЬСЯ','ЕСТЬ ВРЕМЯ')}
 <h2>Подборка под<br><span class="sage-text">свободное время.</span></h2>
 <div class="return-visual">${shot('mac-home-dark','Главная Полки для Mac в тёмной теме')}</div>
 <div class="time-demo"><div class="time-demo-head"><h3>Есть время</h3><span>↗</span></div><div class="time-segments" aria-label="Выбор времени: 5, 15, 30 минут или час"><span class="selection motion"></span><span>5 мин</span><span>15 мин</span><span>30 мин</span><span>Час</span></div>
 <div class="time-lists">${timeSets.map((list,n)=>`<div class="time-list list-${n} motion">${list.map((type,i)=>`<div class="suggestion"><div class="suggestion-art art-${(n+i)%4}" aria-hidden="true">${['Aa','↗','▶','▤'][(n+i)%4]}</div><div><strong>${type}</strong><span>Из сохранённого</span></div><span class="row-arrow">↗</span></div>`).join('')}</div>`).join('')}</div><p class="demo-note">Схема подбора материалов</p></div>`},
{name:'Прочитать',time:'2:15–2:40 · 25 секунд',class:'reader-slide',notes:'Сохранённую статью я открываю прямо в Полке, там же читаю PDF и смотрю видео. Для перевода на русский использую встроенный переводчик Apple; к материалам можно оставлять цитаты и заметки. На этом экране — уже переведённая статья в приложении для Mac.',html:`
 ${topLine('05 / ПРОЧИТАТЬ','ЧИТАЛКА В ПОЛКЕ')}
 <div class="reader-copy"><h2>Открыть.<br>Понять.<br><span class="muted">Оставить<br>важное.</span></h2><div class="reader-features"><p>Перевод Apple<br>на русский</p><p>Цитаты и заметки</p><p>Статьи · PDF · видео</p></div></div>
 <div class="reader-visual">${shot('mac-reader-translation','Переведённая на русский статья в читалке Полки для Mac')}</div>`},
{name:'Полка на iPhone',time:'2:40–3:10 · 30 секунд',class:'iphone-slide',notes:'С 26 октября Полка стоит на моём iPhone: могу сохранить ссылку из Safari через «Поделиться», открыть библиотеку и читать с переводом. Сейчас Mac выкладывает копию библиотеки в iCloud Drive, а телефон её читает — это ещё не двусторонняя синхронизация. Именно на живом телефоне я нашёл ошибку с обложками, которую не увидел в симуляторе.',html:`
 ${topLine('06 / IPHONE','НА МОЁМ IPHONE С 26 ОКТЯБРЯ')}
 <div class="iphone-copy"><h2>Та же полка —<br><span class="muted">в кармане.</span></h2><p>Ссылка из Safari<br>через «Поделиться».</p><div class="cloud-copy"><span>КОПИЯ БИБЛИОТЕКИ</span><p>Mac → iCloud Drive<br>→ iPhone</p><small>Mac записывает.<br>Телефон читает.</small></div></div>
 <div class="iphone-gallery"><figure><div class="phone-image">${shot('iphone-home','Главная Полки на iPhone')}<div class="share-sheet motion"><span class="sheet-handle"></span><strong>Поделиться</strong><div class="share-target motion"><b>П</b><span>Полка</span></div></div><div class="share-toast motion">✓ Сохранено<br>на Полку</div></div><figcaption>Сохранить<span>схема действия</span></figcaption></figure><figure><div class="phone-image">${shot('iphone-add','Окно добавления ссылки в Полку на iPhone')}</div><figcaption>Добавить</figcaption></figure><figure><div class="phone-image">${shot('iphone-translation','Перевод статьи на русский на iPhone')}</div><figcaption>Прочитать</figcaption></figure></div>`},
{name:'Развитие проекта',time:'3:10–3:40 · 30 секунд',class:'evolution dark',notes:'В сентябре я пользовался своим веб-прототипом, а 17 октября начал заново на Swift. Уже 19 октября у меня была бета для Mac с установщиком и первой тестировщицей. С 24 по 26 октября я сделал iPhone-версию, завёл аккаунт разработчика Apple и поставил приложение на настоящий телефон.',html:`
 ${topLine('07 / ПРОЦЕСС','СЕНТЯБРЬ → ОКТЯБРЬ')}
 <h2>Проект менялся.<br><span class="sage-text">Сценарий становился яснее.</span></h2>
 <div class="evolution-grid"><figure><img src="assets/evolution-first.jpg" alt="Первый экран раннего веб-прототипа"><figcaption>Веб / поиск подачи</figcaption></figure><figure><img src="assets/evolution-second.jpg" alt="Второй вариант веб-прототипа"><figcaption>Веб / библиотека</figcaption></figure><figure><img src="assets/evolution-third.jpg" alt="Третий вариант веб-прототипа"><figcaption>Веб / новый визуал</figcaption></figure><figure class="native-evolution">${shot('mac-home','Нативная Полка для Mac')}<figcaption>Swift / приложение</figcaption></figure></div>
 <div class="evolution-periods"><span>Сентябрь · веб-прототип</span><span>С 17 октября · Swift</span></div>
 <div class="timeline"><div><strong>Сентябрь</strong><p>Веб-прототип 0.2.<br>Пользуюсь сам.</p></div><div><strong>17 октября</strong><p>Начинаю заново<br>на Swift для Mac.</p></div><div><strong>19 октября</strong><p>Бета 0.4.0.<br>Первая тестировщица.</p></div><div><strong>24–26 октября</strong><p>iPhone-версия.<br>На моём телефоне.</p></div></div>`},
{name:'Работа с ИИ',time:'3:40–4:15 · 35 секунд',class:'ai-slide',notes:'Я отвечал за идею, дизайн, решения и проверку руками: Claude Code делал Swift-приложения, тесты и сборки, а Codex и ChatGPT помогали с веб-прототипом и ручными проверками. Я понял, что системный интерфейс Apple для этого проекта оказался быстрее и лучше собственного, а ИИ нужны план, сохранения и записанные решения. В итоге у меня 76 точек сохранения, 67 автотестов, около 9 300 строк Swift и ни одного сервера — при этом проверку на настоящем телефоне тесты не заменили.',html:`
 ${topLine('08 / РАБОТА С ИИ','ОТ ДИЗАЙНА ДО ПРИЛОЖЕНИЯ')}
 <h2>Я задаю направление.<br><span class="muted">ИИ помогает собрать.</span></h2>
 <div class="ai-columns"><div class="roles"><h3>Я / ИИ</h3><p><strong>Я</strong><span>Продукт, дизайн, решения,<br>проверка руками</span></p><p><strong>Claude Code</strong><span>Swift-приложения,<br>тесты и сборки</span></p><p><strong>Codex + ChatGPT</strong><span>Веб-прототип<br>и ручные проверки</span></p></div><div class="lessons"><h3>Что понял</h3><p><span>01</span> Системный UI Apple —<br>быстрее и лучше своего.</p><p><span>02</span> ИИ нужны план, сохранения<br>и записанные решения.</p><p><span>03</span> Симулятора мало.<br>Нужен настоящий телефон.</p></div></div>
 <div class="metrics"><div><strong>76</strong><span>точек сохранения</span></div><div><strong>67</strong><span>автотестов</span><small>58 Mac + 9 iPhone</small></div><div><strong>≈9 300</strong><span>строк Swift</span></div><div><strong>0</strong><span>серверов</span></div></div>`},
{name:'Дальше',time:'4:15–4:35 · 20 секунд',class:'next-slide dark',notes:'До первого ноября я хочу отдать Mac-бету пяти–десяти знакомым, а в ноябре показать iPhone через TestFlight. К концу ноября планирую расширить бету до двадцати–пятидесяти человек, затем сделать лендинг на русском и английском и готовиться к запуску. Спасибо — буду рад вашим вопросам и обратной связи.',html:`
 ${topLine('09 / ДАЛЬШЕ','ПРОВЕРИТЬ НА ЛЮДЯХ')}
 <div class="next-copy"><h2>Следующий шаг —<br><span class="sage-text">люди.</span></h2><p>От своей библиотеки<br>к первой бете.</p><div class="thank-you">Спасибо!<br>Вопросы? <span>↗</span></div></div>
 <div class="roadmap"><div><span>ДО 1 НОЯБРЯ</span><p>Mac-бета<br>для 5–10 знакомых</p></div><div><span>НОЯБРЬ</span><p>iPhone через TestFlight</p></div><div><span>КОНЕЦ НОЯБРЯ</span><p>Большая бета:<br>20–50 человек</p></div><div><span>ДАЛЬШЕ</span><p>Лендинг RU / EN<br>и запуск</p></div></div>`}
];
