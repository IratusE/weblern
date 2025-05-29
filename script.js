// Названия категорий
const categoryNames = {
	introduction: 'ВВЕДЕНИЕ',
	html: 'HTML',
	css: 'CSS',
	js: 'JavaScript',
	test: 'ТЕСТ',
	conclusion: 'ЗАКЛЮЧЕНИЕ',
}

// DOM-элементы
const elements = {
	sidebar: null,
	categoryList: null,
	lessonList: null,
	lessonListTitle: null,
	lessonTitle: null,
	lessonBody: null,
	prevButton: null,
	nextButton: null,
	prevCategoryButton: null,
	nextCategoryButton: null,
	toggleSidebarButton: null,
	main: null,
	lessonProgress: null,
	themeToggle: null,
	markCompleteButton: null,
}

// Прогресс прохождения
const progress = {}

// Уроки по категориям
const lessonsByCategory = {
	introduction: [
		{
			id: 'intro-1',
			title: 'Общее представление о веб-технологиях',
			content: `<h2>Что такое веб-разработка?</h2><p>Веб-разработка — это процесс создания и поддержки веб-сайтов и веб-приложений, которые доступны через интернет или локальную сеть. Это одна из ключевых областей информационных технологий, объединяющая программирование, проектирование интерфейсов, работу с базами данных и управление серверами.</p><p>Современная веб-разработка делится на три основные части:</p><ul><li>Фронтенд (клиентская часть) — то, что видит пользователь в браузере.</li><li>Бэкенд (серверная часть) — логика работы сайта на стороне сервера.</li><li>Базы данных — хранение и обработка информации.</li></ul><p>Цель веб-разработки — создать удобный, функциональный и привлекательный веб-ресурс, который будет работать корректно на разных устройствах и браузерах.</p><h2>Роль браузера в отображении веб-страниц</h2><p>Браузер — это программное обеспечение, которое позволяет пользователю взаимодействовать с веб-документами, размещенными на серверах по всему миру. Он загружает HTML-документы, интерпретирует их, применяет к ним стили (CSS) и выполняет скрипты (JavaScript), чтобы отобразить страницу пользователю.</p><p>Основные функции браузера:</p><ul><li>Загрузка веб-страниц по протоколу HTTP/HTTPS</li><li>Парсинг и выполнение HTML, CSS и JavaScript</li><li>Отображение содержимого в понятном для пользователя виде</li><li>Поддержка мультимедиа, анимаций, форм, API и других возможностей</li></ul><p>Популярные браузеры: Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.</p><h2>Основные компоненты современной веб-страницы</h2><p>Любая современная веб-страница состоит из трёх ключевых частей, каждая из которых отвечает за свою функцию:</p><h3>Структура (HTML)</h3><p>HTML (HyperText Markup Language) — язык разметки, используемый для создания структуры и содержания веб-страницы. Он определяет, какие элементы будут отображаться на странице: заголовки, параграфы, изображения, формы, ссылки и другие блоки.</p><p>Пример:</p><pre><code>&lt;h1&gt;Добро пожаловать на мой сайт&lt;/h1&gt;
&lt;p&gt;Это пример текста на веб-странице.&lt;/p&gt;</code></pre><p>HTML не отвечает за внешний вид или поведение страницы — он лишь задаёт её структуру.</p><h3>Стили (CSS)</h3><p>CSS (Cascading Style Sheets) — язык описания внешнего вида документа, написанного на языке разметки (например, HTML). С помощью CSS можно управлять цветом, шрифтами, расположением элементов, анимациями и другими визуальными характеристиками.</p><p>Пример:</p><pre><code>h1 {
    color: blue;
    font-size: 24px;
}</code></pre><p>CSS позволяет отделить оформление от структуры, что делает код более чистым, понятным и легко поддерживаемым.</p><h3>Логика / взаимодействие (JavaScript)</h3><p>JavaScript (JS) — динамический язык программирования, который добавляет интерактивность и логику на веб-страницу. Он позволяет реагировать на действия пользователя, изменять содержимое страницы, отправлять запросы на сервер и многое другое.</p><p>Пример:</p><pre><code>document.querySelector("h1").textContent = "Здравствуйте!";</code></pre><p>JavaScript работает в браузере и может взаимодействовать с HTML и CSS через DOM (Document Object Model).</p><p>Вместе они обеспечивают полный цикл работы веб-страницы:</p><ul><li>HTML создаёт каркас страницы,</li><li>CSS украшает этот каркас, делая его красивым и адаптированным под разные устройства,</li><li>JavaScript делает страницу живой и интерактивной.</li></ul>`,
		},
	],
	html: [
		{
			id: 'html-purpose',
			title: 'Назначение HTML',
			content: `<h2>Что такое HTML?</h2>
			<p>HTML (HyperText Markup Language) — это язык разметки, предназначенный для описания структуры и содержимого веб-страницы. Он используется для организации текстовых, графических и мультимедийных данных, а также определяет, как браузер должен отображать информацию на экране пользователя.</p>
			
			<h3>Основные функции HTML:</h3>

			<h4>Создание структуры документа</h4>
			<p>HTML позволяет разбивать содержимое страницы на логические блоки: заголовки, абзацы, списки, таблицы, изображения, ссылки и другие элементы. Это делает сайт понятным как для человека, так и для поисковых систем.</p>

			<h4>Определение роли элементов</h4>
			<p>Каждый тег в HTML имеет своё значение и смысл. Например:</p>
			<ul>
				<li><code>&lt;h1&gt;</code> обозначает основной заголовок,</li>
				<li><code>&lt;p&gt;</code> — параграф,</li>
				<li><code>&lt;img&gt;</code> — изображение,</li>
				<li><code>&lt;a&gt;</code> — гиперссылка.</li>
			</ul>
			<p>Такая семантическая разметка улучшает доступность сайта и помогает поисковым системам правильно индексировать контент.</p>

			<h4>Взаимодействие с другими технологиями</h4>
			<p>HTML служит основой для применения каскадных таблиц стилей (CSS), которые задают внешний вид элементов, а также JavaScript, который добавляет интерактивность и динамику.</p>

			<h4>Поддержка мультимедиа и форм</h4>
			<p>HTML позволяет вставлять видео, аудио, формы ввода и другие интерактивные элементы, что делает веб-страницу функциональной и удобной для пользователя.</p>

			<h4>Кроссплатформенность и совместимость</h4>
			<p>HTML-документы корректно отображаются во всех современных браузерах вне зависимости от операционной системы. Это делает HTML универсальным стандартом для создания веб-контента.</p>

			<h3>Важно отметить:</h3>
			<p>HTML не является языком программирования, поскольку он не содержит логики, циклов, условий или функций. Это язык разметки, задача которого — определить, что находится на странице, а не как это работает.</p>

			<p>Тем не менее, HTML играет ключевую роль в создании веб-приложений, поскольку именно он задаёт каркас, на основе которого применяются стили (CSS) и скрипты (JavaScript).</p>`,
		},
		{
			id: 'html-inline',
			title: 'Строчные теги',
			content: `<h2>Определение строчных тегов</h2>
			<p>Строчные (строковые) теги — это элементы, которые занимают только необходимое место на странице и не переносятся на новую строку. Они обычно используются внутри блочных элементов для форматирования текста или добавления небольших объектов.</p>

			<h3>Характеристики:</h3>
			<ul>
				<li>Не создают новой строки</li>
				<li>Занимают минимальное пространство</li>
				<li>Часто используются для оформления текста</li>
			</ul>

			<h3>Примеры строчных тегов:</h3>
			<ul>
				<li><code>&lt;a&gt;</code> - Гиперссылка</li>
				<li><code>&lt;img&gt;</code> - Изображение</li>
				<li><code>&lt;span&gt;</code> - Универсальный контейнер для текста</li>
				<li><code>&lt;strong&gt;</code> - Жирный текст</li>
				<li><code>&lt;em&gt;</code> - Курсивный текст</li>
				<li><code>&lt;code&gt;</code> - Отображение кода</li>
				<li><code>&lt;small&gt;</code> - Маленький текст</li>
				<li><code>&lt;sup&gt;</code> - Верхний индекс</li>
				<li><code>&lt;sub&gt;</code> - Нижний индекс</li>
			</ul>

			<h3>Пример использования:</h3>`,
			code: `<p>Это <strong>жирный</strong> текст, а это <em>курсивный</em>.</p>`,
			content2: `<p>Результат отображения в браузере:</p>
			<div class="example-result">
				<p>Это <strong>жирный</strong> текст, а это <em>курсивный</em>.</p>
			</div>`,
		},
		{
			id: 'html-block-definition',
			title: 'Определение блочных тегов',
			content: `<h2>Блочные теги в HTML</h2>
			<p>Блочные теги — это элементы, которые занимают всю доступную ширину и всегда начинаются с новой строки. Они часто используются для создания основных блоков содержимого: заголовков, абзацев, секций и других больших блоков.</p>

			<h3>Характеристики:</h3>
			<ul>
				<li>Занимают всю доступную ширину</li>
				<li>Начинаются с новой строки</li>
				<li>Часто используются для группировки содержимого</li>
			</ul>`,
		},
		{
			id: 'html-block-subtypes',
			title: 'Подразделы блочных тегов',
			content: `<p>Блочные теги можно разделить на несколько категорий в зависимости от их назначения и особенностей использования:</p>

			<h3>1. Обычные теги</h3>
			<p>Включают базовые элементы структуры: заголовки, параграфы, списки, таблицы и универсальные контейнеры.</p>

			<h3>2. Семантические теги</h3>
			<p>Описывают смысловую структуру страницы: шапка, подвал, основное содержимое, секции, статьи, навигация.</p>

			<h3>3. Теги составных компонентов</h3>
			<p>Объединяют несколько элементов в логические группы: формы, изображения с подписями, скрываемые блоки.</p>

			<h3>4. Служебные теги</h3>
			<p>Используются для метаданных, подключения стилей и скриптов, настройки параметров документа.</p>

			<h3>5. Теги полей ввода</h3>
			<p>Предназначены для создания интерактивных форм: поля ввода, выпадающие списки, кнопки.</p>`,
		},
		{
			id: 'html-regular',
			title: 'Обычные теги',
			content: `<p>Это базовые блочные элементы, используемые для структурирования содержимого.</p>

			<table>
				<tr>
					<td><code>&lt;div&gt;</code></td>
					<td>Универсальный блочный контейнер</td>
				</tr>
				<tr>
					<td><code>&lt;p&gt;</code></td>
					<td>Параграф</td>
				</tr>
				<tr>
					<td><code>&lt;h1&gt;–&lt;h6&gt;</code></td>
					<td>Заголовки разных уровней</td>
				</tr>
				<tr>
					<td><code>&lt;ul&gt;</code></td>
					<td>Ненумерованный список</td>
				</tr>
				<tr>
					<td><code>&lt;ol&gt;</code></td>
					<td>Нумерованный список</td>
				</tr>
				<tr>
					<td><code>&lt;li&gt;</code></td>
					<td>Элемент списка</td>
				</tr>
				<tr>
					<td><code>&lt;table&gt;</code></td>
					<td>Таблица</td>
				</tr>
				<tr>
					<td><code>&lt;form&gt;</code></td>
					<td>Форма ввода данных</td>
				</tr>
			</table>

			<h3>Пример использования:</h3>
			<p>Пример структуры HTML-документа с использованием блочных тегов:</p>
			<pre><code>&lt;div&gt;
    &lt;h1&gt;Заголовок&lt;/h1&gt;
    &lt;p&gt;Текст параграфа.&lt;/p&gt;
    &lt;ul&gt;
        &lt;li&gt;Пункт 1&lt;/li&gt;
        &lt;li&gt;Пункт 2&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code></pre>

			<div class="example-result">
<div>
					<h1>Заголовок</h1>
					<p>Текст параграфа.</p>
	<ul>
		<li>Пункт 1</li>
		<li>Пункт 2</li>
	</ul>
				</div>
			</div>`,
		},
		{
			id: 'html-semantic',
			title: 'Семантические теги',
			content: `<p>Семантические теги появились в HTML5 и предназначены для лучшего описания семантики документа. Они помогают браузерам и поисковым системам лучше понимать структуру страницы.</p>

			<table>
				<tr>
					<td><code>&lt;header&gt;</code></td>
					<td>Шапка сайта</td>
				</tr>
				<tr>
					<td><code>&lt;footer&gt;</code></td>
					<td>Подвал сайта</td>
				</tr>
				<tr>
					<td><code>&lt;main&gt;</code></td>
					<td>Основное содержимое</td>
				</tr>
				<tr>
					<td><code>&lt;section&gt;</code></td>
					<td>Логическая секция</td>
				</tr>
				<tr>
					<td><code>&lt;article&gt;</code></td>
					<td>Самостоятельная статья</td>
				</tr>
				<tr>
					<td><code>&lt;aside&gt;</code></td>
					<td>Вспомогательный контент</td>
				</tr>
				<tr>
					<td><code>&lt;nav&gt;</code></td>
					<td>Навигация</td>
				</tr>
			</table>

			<h3>Пример использования:</h3>
			<p>Пример структуры страницы с семантическими тегами:</p>
			<pre><code>&lt;header&gt;
    &lt;h1&gt;Мой сайт&lt;/h1&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;section&gt;
        &lt;h2&gt;Первая секция&lt;/h2&gt;
        &lt;p&gt;Текст первой секции.&lt;/p&gt;
    &lt;/section&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;p&gt;© 2023 Мой сайт&lt;/p&gt;
&lt;/footer&gt;</code></pre>`,
		},
		{
			id: 'html-compound',
			title: 'Теги составных компонентов',
			content: `<p>Это специальные теги, которые объединяют несколько элементов в один логический блок.</p>

			<table>
				<tr>
					<td><code>&lt;figure&gt;</code></td>
					<td>Группирует изображение с подписью</td>
				</tr>
				<tr>
					<td><code>&lt;details&gt;</code></td>
					<td>Коллapsible контент</td>
				</tr>
				<tr>
					<td><code>&lt;summary&gt;</code></td>
					<td>Заголовок для &lt;details&gt;</td>
				</tr>
			</table>

			<h3>Пример использования:</h3>
			<p>Пример группировки изображения с подписью:</p>
			<pre><code>&lt;figure&gt;
    &lt;img src="image.jpg" alt="Изображение"&gt;
    &lt;figcaption&gt;Описание изображения&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>`,
		},
		{
			id: 'html-service',
			title: 'Служебные теги',
			content: `<p>Служебные теги используются для управления поведением документа или его части.</p>

			<table>
				<tr>
					<td><code>&lt;meta&gt;</code></td>
					<td>Метаданные (например, charset, viewport)</td>
				</tr>
				<tr>
					<td><code>&lt;link&gt;</code></td>
					<td>Подключение внешних ресурсов (CSS, favicon)</td>
				</tr>
				<tr>
					<td><code>&lt;script&gt;</code></td>
					<td>Встраивание JavaScript</td>
				</tr>
				<tr>
					<td><code>&lt;style&gt;</code></td>
					<td>Встроенные стили CSS</td>
				</tr>
			</table>

			<h3>Пример использования:</h3>
			<p>Пример использования служебных тегов в head документа:</p>
			<pre><code>&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>`,
		},
		{
			id: 'html-input',
			title: 'Теги полей ввода (строковые)',
			content: `<p>Это теги, связанные с формами ввода данных. Хотя они сами по себе являются строчными, они могут быть частью блочных элементов.</p>

			<table>
				<tr>
					<td><code>&lt;input&gt;</code></td>
					<td>Поле ввода</td>
				</tr>
				<tr>
					<td><code>&lt;textarea&gt;</code></td>
					<td>Многострочное поле ввода</td>
				</tr>
				<tr>
					<td><code>&lt;select&gt;</code></td>
					<td>Выпадающий список</td>
				</tr>
				<tr>
					<td><code>&lt;button&gt;</code></td>
					<td>Кнопка</td>
				</tr>
			</table>

			<h3>Пример использования:</h3>
			<p>Пример формы с различными полями ввода:</p>
			<pre><code>&lt;form&gt;
    &lt;label for="name"&gt;Имя:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;&lt;br&gt;
    &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;</code></pre>`,
		},
		{
			id: 'html-conclusion',
			title: 'Вывод',
			content: `<p>В процессе изучения структуры HTML-документа становится понятно, что все элементы разметки можно разделить на два основных типа: строчные и блочные теги, каждый из которых выполняет свою роль в формировании интерфейса веб-страницы.</p>

			<p>Строчные теги применяются для работы с текстовым содержимым и добавления небольших объектов внутри блочных элементов. Они не начинаются с новой строки и занимают только столько пространства, сколько необходимо для отображения их содержимого. Такие теги идеально подходят для выделения отдельных слов или фрагментов текста, вставки ссылок и изображений прямо в строку текста. Примеры строчных тегов — <code>&lt;a&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>. Их использование позволяет улучшить читаемость и интерактивность текстовой информации без разрыва основного потока документа.</p>

			<p>Блочные теги, напротив, формируют основу структуры веб-страницы. Они всегда начинаются с новой строки и занимают всю доступную ширину контейнера, тем самым создавая логически завершённые блоки. Эти теги служат для группировки содержимого, создания секций, заголовков, абзацев, списков и других крупных структурных единиц страницы. Примеры блочных тегов — <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>. Использование семантических блочных тегов также положительно влияет на SEO и доступность сайта, так как браузеры и поисковые системы лучше понимают структуру документа.</p>

			<h3>Основное отличие между строчными и блочными тегами:</h3>
			<ul>
				<li>Блочные теги формируют "новую зону" на странице, начиная с новой строки и растягиваясь на всю ширину.</li>
				<li>Строчные теги остаются внутри текущего потока текста и не влияют на расположение соседних элементов.</li>
	</ul>

			<p>Понимание этих различий играет ключевую роль при создании правильной и понятной структуры веб-страницы. Правильный выбор типа тега позволяет создать логически выстроенную разметку, облегчающую дальнейшую работу с CSS и JavaScript, а также обеспечивающую лучшую совместимость и доступность сайта.</p>`,
		},
		{
			id: 'html-test',
			title: 'Тест по HTML',
			content: `<h2>Проверьте свои знания HTML</h2>
			<div class="test-container">
				<div class="question" data-correct="2">
					<p><strong>1. Что означает HTML?</strong></p>
					<div class="options">
						<label><input type="radio" name="q1" value="1"> Home Tool Markup Language</label>
						<label><input type="radio" name="q1" value="2"> HyperText Markup Language</label>
						<label><input type="radio" name="q1" value="3"> Hyperlinks and Text Markup Language</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>2. Какой тег используется для создания параграфа?</strong></p>
					<div class="options">
						<label><input type="radio" name="q2" value="1"> &lt;p&gt;</label>
						<label><input type="radio" name="q2" value="2"> &lt;paragraph&gt;</label>
						<label><input type="radio" name="q2" value="3"> &lt;para&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>3. Какой тег определяет заголовок документа?</strong></p>
					<div class="options">
						<label><input type="radio" name="q3" value="1"> &lt;head&gt;</label>
						<label><input type="radio" name="q3" value="2"> &lt;title&gt;</label>
						<label><input type="radio" name="q3" value="3"> &lt;header&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>4. Какой атрибут используется для определения URL адреса в теге &lt;a&gt;?</strong></p>
					<div class="options">
						<label><input type="radio" name="q4" value="1"> link</label>
						<label><input type="radio" name="q4" value="2"> url</label>
						<label><input type="radio" name="q4" value="3"> href</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>5. Какой тег используется для создания нумерованного списка?</strong></p>
					<div class="options">
						<label><input type="radio" name="q5" value="1"> &lt;ol&gt;</label>
						<label><input type="radio" name="q5" value="2"> &lt;ul&gt;</label>
						<label><input type="radio" name="q5" value="3"> &lt;list&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>6. Какой тег используется для вставки изображения?</strong></p>
					<div class="options">
						<label><input type="radio" name="q6" value="1"> &lt;picture&gt;</label>
						<label><input type="radio" name="q6" value="2"> &lt;img&gt;</label>
						<label><input type="radio" name="q6" value="3"> &lt;image&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>7. Какой тег создает переход на новую строку?</strong></p>
					<div class="options">
						<label><input type="radio" name="q7" value="1"> &lt;new&gt;</label>
						<label><input type="radio" name="q7" value="2"> &lt;nl&gt;</label>
						<label><input type="radio" name="q7" value="3"> &lt;br&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>8. Какой тег определяет таблицу?</strong></p>
					<div class="options">
						<label><input type="radio" name="q8" value="1"> &lt;table&gt;</label>
						<label><input type="radio" name="q8" value="2"> &lt;tab&gt;</label>
						<label><input type="radio" name="q8" value="3"> &lt;tbl&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>9. Какой тег используется для создания формы?</strong></p>
					<div class="options">
						<label><input type="radio" name="q9" value="1"> &lt;input&gt;</label>
						<label><input type="radio" name="q9" value="2"> &lt;form&gt;</label>
						<label><input type="radio" name="q9" value="3"> &lt;submit&gt;</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>10. Какой doctype используется для HTML5?</strong></p>
					<div class="options">
						<label><input type="radio" name="q10" value="1"> &lt;!DOCTYPE html PUBLIC&gt;</label>
						<label><input type="radio" name="q10" value="2"> &lt;!DOCTYPE HTML5&gt;</label>
						<label><input type="radio" name="q10" value="3"> &lt;!DOCTYPE html&gt;</label>
					</div>
				</div>

				<button class="btn btn-primary check-test">Проверить ответы</button>
				<div class="test-results"></div>
</div>`,
		},
	],
	css: [
		{
			id: 'css-intro',
			title: 'Назначение CSS',
			content: `<h2>Что такое CSS?</h2>
			<p>Каскадные таблицы стилей (Cascading Style Sheets) — это язык, который используется для управления внешним видом HTML-элементов. Он разделяет содержание (HTML) от дизайна (CSS), что упрощает поддержку и масштабирование проекта.</p>

			<h2>Зачем нужен CSS?</h2>
			<ul>
				<li>Управление цветами, шрифтами, размерами, позиционированием элементов</li>
				<li>Создание адаптивных и отзывчивых сайтов</li>
				<li>Оформление интерфейса без изменения HTML-разметки</li>
			</ul>

			<h3>Способы подключения CSS:</h3>
			<ul>
				<li>Внешний файл стилей</li>
				<li>Внутренние стили</li>
				<li>Inline стили</li>
			</ul>

			<h3>Пример использования:</h3>
			<pre><code>/* Внешний CSS файл */
p {
	color: blue;
	font-size: 16px;
}

/* Внутренние стили */
&lt;style&gt;
	p { color: blue; }
&lt;/style&gt;

</region_of_file_to_rewritten_file>

/* Inline стили */
&lt;p style="color: red;"&gt;Текст&lt;/p&gt;</code></pre>`,
		},
		{
			id: 'css-colors-units',
			title: 'Цвета и единицы измерения',
			content: `<h2>Цвета</h2>

			<h3>RGB:</h3>
			<ul>
				<li>Синтаксис: rgb(255, 0, 0) (красный)</li>
				<li>Прозрачность: rgba(255, 0, 0, 0.5) (полупрозрачный красный)</li>
			</ul>

			<h3>HEX:</h3>
			<ul>
				<li>Синтаксис: #FF0000 (красный)</li>
			</ul>

			<h3>HSL:</h3>
			<ul>
				<li>Синтаксис: hsl(0, 100%, 50%) (красный)</li>
			</ul>

			<h3>Именованные цвета:</h3>
			<ul>
				<li>Например: red, blue, green</li>
			</ul>

			<h2>Единицы измерения</h2>

			<h3>Пиксели (px):</h3>
			<ul>
				<li>Абсолютная единица, не зависит от устройства</li>
			</ul>

			<h3>Эм (em):</h3>
			<ul>
				<li>Относится к размеру шрифта родительского элемента</li>
				<li>Например: font-size: 1.5em</li>
			</ul>

			<h3>Рем (rem):</h3>
			<ul>
				<li>Относится к базовому размеру шрифта документа (обычно 16px)</li>
				<li>Например: margin: 1rem</li>
			</ul>

			<h3>Проценты (%):</h3>
			<ul>
				<li>Относится к родительскому элементу</li>
				<li>Например: width: 50%</li>
			</ul>

			<h3>Вьюпортные единицы (vw, vh):</h3>
			<ul>
				<li>Зависят от размера экрана</li>
				<li>Например: width: 100vw — занимает всю ширину экрана</li>
			</ul>`,
		},
		{
			id: 'css-properties',
			title: 'Свойства',
			content: `<p>CSS предоставляет множество свойств для управления внешним видом элементов. Вот некоторые ключевые категории:</p>

			<h2>Текстовые свойства</h2>
			<ul>
				<li>font-family: Шрифт</li>
				<li>font-size: Размер текста</li>
				<li>color: Цвет текста</li>
				<li>text-align: Выравнивание текста</li>
				<li>line-height: Интерлиньяж</li>
			</ul>

			<h2>Размеры и отступы</h2>
			<ul>
				<li>width: Ширина элемента</li>
				<li>height: Высота элемента</li>
				<li>margin: Отступы снаружи</li>
				<li>padding: Отступы внутри</li>
			</ul>

			<h2>Позиционирование</h2>
			<ul>
				<li>position: Тип позиционирования (static, relative, absolute, fixed)</li>
				<li>top, right, bottom, left: Координаты позиционирования</li>
			</ul>

			<h2>Дополнительные свойства</h2>
			<ul>
				<li>background-color: Цвет фона</li>
				<li>border: Обводка элемента</li>
				<li>box-shadow: Тень вокруг элемента</li>
				<li>opacity: Прозрачность</li>
			</ul>`,
		},
		{
			id: 'css-display',
			title: 'Свойство display',
			content: `<p>Определяет, как будет отображаться элемент на странице:</p>

			<h3>Блочные элементы (block):</h3>
			<ul>
				<li>Занимают всю доступную ширину</li>
				<li>Начинаются с новой строки</li>
				<li>Пример: &lt;div&gt;, &lt;p&gt;</li>
			</ul>

			<h3>Строчные элементы (inline):</h3>
			<ul>
				<li>Занимают только необходимое место</li>
				<li>Не начинаются с новой строки</li>
				<li>Пример: &lt;span&gt;, &lt;a&gt;</li>
			</ul>

			<h3>Строчно-блочные элементы (inline-block):</h3>
			<ul>
				<li>Комбинируют блочное и строчное поведение</li>
				<li>Пример: &lt;img&gt;</li>
			</ul>

			<h3>Гибкие контейнеры (flex) и сетки (grid):</h3>
			<ul>
				<li>Используются для сложной верстки</li>
				<li>Пример: display: flex;</li>
			</ul>`,
		},
		{
			id: 'css-selectors',
			title: 'Селекторы',
			content: `<p>Селекторы позволяют выбирать HTML-элементы для применения стилей:</p>

			<h3>Теговый селектор:</h3>
			<pre><code>p {
    color: blue;
}</code></pre>

			<h3>Классовый селектор:</h3>
			<pre><code>.highlight {
    background-color: yellow;
}</code></pre>

			<h3>Идентификаторный селектор:</h3>
			<pre><code>#header {
    font-weight: bold;
}</code></pre>

			<h3>Групповой селектор:</h3>
			<pre><code>h1, h2, h3 {
    font-weight: bold;
}</code></pre>`,
		},
		{
			id: 'css-display-attr',
			title: 'Атрибут display',
			content: `<p>Атрибут display определяет, как должен отображаться элемент:</p>

			<ul>
				<li>display: block : Блочный элемент</li>
				<li>display: inline : Строчный элемент</li>
				<li>display: inline-block : Строчно-блочный элемент</li>
				<li>display: none : Скрывает элемент</li>
				<li>display: flex : Флексбокс</li>
				<li>display: grid : Грид-лейаут</li>
			</ul>

			<h3>Пример:</h3>
			<pre><code>.container {
	display: flex;
	justify-content: center;
}</code></pre>`,
		},
		{
			id: 'css-conclusion',
			title: 'Вывод',
			content: `<p>Изучение Cascading Style Sheets (CSS) является важным этапом освоения веб-разработки. CSS — это язык описания внешнего вида веб-страницы, который позволяет отделять оформление от структуры HTML и делает процесс создания сайтов более гибким и управляемым.</p>

			<h3>В ходе изучения были рассмотрены ключевые аспекты использования CSS:</h3>
			<ul>
				<li>Понимание назначения CSS и его роли в создании современных веб-интерфейсов</li>
				<li>Работа с цветами и единицами измерения — важная часть настройки дизайна, позволяющая добиться точности и адаптивности интерфейса под разные устройства</li>
				<li>Применение различных CSS-свойств дало возможность управлять размерами элементов, их расположением, текстовым содержимым и внешним видом</li>
				<li>Изучение свойства display позволило понять, как управлять типом отображения элементов: от строчных и блочных до современных методов верстки — Flexbox и Grid</li>
				<li>Освоение селекторов обеспечило навык точечного применения стилей к нужным элементам, что особенно важно при работе с большими проектами</li>
			</ul>

			<p>CSS — не просто инструмент для красоты, а мощный механизм, позволяющий создавать адаптивные, удобные и визуально привлекательные веб-приложения. Он играет ключевую роль в обеспечении пользовательского опыта и доступности контента. Правильное использование стилей способствует улучшению читаемости кода, облегчает дальнейшее развитие проекта и повышает производительность сайта.</p>

			<p>Таким образом, знание и умелое применение CSS является обязательным навыком для любого веб-разработчика. Эти знания позволяют не только реализовать дизайн макета, но и сделать сайт функциональным, отзывчивым и ориентированным на пользователя.</p>`,
		},
		{
			id: 'css-test',
			title: 'Тест по CSS',
			content: `<h2>Проверьте свои знания CSS</h2>
			<div class="test-container">
				<div class="question" data-correct="2">
					<p><strong>1. Что означает CSS?</strong></p>
					<div class="options">
						<label><input type="radio" name="q1" value="1"> Computer Style Sheets</label>
						<label><input type="radio" name="q1" value="2"> Cascading Style Sheets</label>
						<label><input type="radio" name="q1" value="3"> Creative Style Sheets</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>2. Как правильно задать цвет текста?</strong></p>
					<div class="options">
						<label><input type="radio" name="q2" value="1"> text-color: black;</label>
						<label><input type="radio" name="q2" value="2"> font-color: black;</label>
						<label><input type="radio" name="q2" value="3"> color: black;</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>3. Какое свойство используется для изменения размера шрифта?</strong></p>
					<div class="options">
						<label><input type="radio" name="q3" value="1"> font-size</label>
						<label><input type="radio" name="q3" value="2"> text-size</label>
						<label><input type="radio" name="q3" value="3"> size</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>4. Как сделать текст жирным?</strong></p>
					<div class="options">
						<label><input type="radio" name="q4" value="1"> font-style: bold;</label>
						<label><input type="radio" name="q4" value="2"> font-weight: bold;</label>
						<label><input type="radio" name="q4" value="3"> text-weight: bold;</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>5. Какой селектор используется для выбора всех элементов?</strong></p>
					<div class="options">
						<label><input type="radio" name="q5" value="1"> &lt;all&gt;</label>
						<label><input type="radio" name="q5" value="2"> #all</label>
						<label><input type="radio" name="q5" value="3"> *</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>6. Как задать внешний отступ справа 10 пикселей?</strong></p>
					<div class="options">
						<label><input type="radio" name="q6" value="1"> margin-right: 10px;</label>
						<label><input type="radio" name="q6" value="2"> padding-right: 10px;</label>
						<label><input type="radio" name="q6" value="3"> spacing-right: 10px;</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>7. Какое свойство используется для изменения цвета фона?</strong></p>
					<div class="options">
						<label><input type="radio" name="q7" value="1"> color</label>
						<label><input type="radio" name="q7" value="2"> background-color</label>
						<label><input type="radio" name="q7" value="3"> bgcolor</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>8. Как выбрать элемент с id="demo"?</strong></p>
					<div class="options">
						<label><input type="radio" name="q8" value="1"> .demo</label>
						<label><input type="radio" name="q8" value="2"> *demo</label>
						<label><input type="radio" name="q8" value="3"> #demo</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>9. Какое свойство используется для изменения стиля границы элемента?</strong></p>
					<div class="options">
						<label><input type="radio" name="q9" value="1"> border-style</label>
						<label><input type="radio" name="q9" value="2"> style-border</label>
						<label><input type="radio" name="q9" value="3"> border</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>10. Как сделать текст подчеркнутым?</strong></p>
					<div class="options">
						<label><input type="radio" name="q10" value="1"> text-style: underline;</label>
						<label><input type="radio" name="q10" value="2"> text-decoration: underline;</label>
						<label><input type="radio" name="q10" value="3"> underline: text;</label>
					</div>
				</div>

				<button class="btn btn-primary check-test">Проверить ответы</button>
				<div class="test-results"></div>
			</div>`,
		},
	],
	js: [
		{
			id: 'js-purpose',
			title: 'Назначение JavaScript',
			content: `<h2>Что такое JavaScript?</h2>
			<p>JavaScript — это мультипарадигменный язык программирования, который позволяет добавлять интерактивность и динамическое поведение на веб-страницы.</p>

			<h3>Основные возможности JavaScript:</h3>
			<ul>
				<li>Изменение содержимого HTML-элементов</li>
				<li>Обработка действий пользователя</li>
				<li>Отправка и получение данных с сервера</li>
				<li>Создание анимаций и визуальных эффектов</li>
				<li>Валидация форм</li>
				<li>Работа с cookies и локальным хранилищем</li>
			</ul>

			<h3>Где используется JavaScript:</h3>
			<ul>
				<li>Веб-браузеры (клиентская сторона)</li>
				<li>Серверы (Node.js)</li>
				<li>Мобильная разработка</li>
				<li>Десктопные приложения</li>
			</ul>`,
		},
		{
			id: 'js-syntax',
			title: 'Базовый синтаксис JavaScript',
			content: `<h2>Переменные</h2>
			<p>Для объявления переменных используются ключевые слова let, const и var.</p>
			<pre><code>let name = "Алекс";
const age = 25;
var isStudent = true;</code></pre>

			<ul>
				<li>let — изменяемая переменная</li>
				<li>const — константа, значение которой нельзя изменить после присвоения</li>
				<li>var — устаревший способ, но всё ещё используется</li>
			</ul>

			<h2>Типы данных</h2>
			<ul>
				<li>Числа: 10, 3.14</li>
				<li>Строки: "Привет", 'мир'</li>
				<li>Логические значения: true, false</li>
				<li>Массивы: [1, 2, 3]</li>
				<li>Объекты: {name: "Анна", age: 20}</li>
				<li>Null и Undefined: специальные значения, обозначающие отсутствие данных</li>
			</ul>

			<h2>Условные конструкции</h2>
			<p>Позволяют выполнять разный код в зависимости от условия:</p>
			<pre><code>if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}</code></pre>

			<h2>Циклы</h2>
			<p>Используются для повторяющихся действий:</p>
			<pre><code>for (let i = 0; i < 5; i++) {
    console.log("Шаг " + i);
}</code></pre>

			<h2>Функции</h2>
			<p>Функции позволяют группировать код и вызывать его при необходимости:</p>
			<pre><code>function greet(name) {
    console.log("Привет, " + name + "!");
}

greet("Мария");</code></pre>`,
		},
		{
			id: 'js-dom-elements',
			title: 'DOM. Получение элементов и доступ к ним',
			content: `<p>DOM (Document Object Model) — это программный интерфейс, представляющий структуру HTML-документа в виде дерева объектов. С помощью JS через DOM можно манипулировать содержимым и стилями элементов на странице.</p>

			<h2>Получение элементов</h2>
			<p>Основные методы:</p>
			<ul>
				<li>document.getElementById('id') — получить элемент по ID</li>
				<li>document.querySelector('.class') — получить первый элемент по CSS-селектору</li>
				<li>document.querySelectorAll('.class') — получить все элементы по CSS-селектору</li>
				<li>document.getElementsByClassName('class') — получить элементы по классу</li>
				<li>document.getElementsByTagName('div') — получить элементы по тегу</li>
			</ul>

			<p>Пример:</p>
			<pre><code>let header = document.getElementById("main-header");
let button = document.querySelector(".btn");
let paragraphs = document.querySelectorAll("p");</code></pre>

			<h2>Работа с элементами</h2>
			<p>После получения элемента, можно:</p>
			<ul>
				<li>Изменять текст: element.textContent = "Новое значение";</li>
				<li>Изменять HTML: element.innerHTML = "&lt;b&gt;Жирный текст&lt;/b&gt;";</li>
				<li>Менять стили: element.style.color = "red";</li>
				<li>Работать с атрибутами: element.setAttribute("src", "image.jpg");</li>
			</ul>`,
		},
		{
			id: 'js-dom-events',
			title: 'DOM. События',
			content: `<p>События — это действия, которые происходят в браузере, например, клик мыши, нажатие клавиши, загрузка страницы и т.д. JavaScript позволяет реагировать на эти события.</p>

			<h2>1. Способы назначения обработчиков событий</h2>
			<h3>a) Атрибут HTML</h3>
			<pre><code class="html">&lt;button onclick="showMessage()"&gt;Нажми меня&lt;/button&gt;</code></pre>
			<pre><code class="javascript">function showMessage() {
	alert("Вы нажали кнопку!");
}</code></pre>

			<h3>b) Свойство DOM-объекта</h3>
			<pre><code>button.onclick = function() {
    alert("Кнопка нажата!");
};</code></pre>

			<h3>c) Метод addEventListener() – рекомендуемый способ</h3>
			<pre><code>button.addEventListener("click", function() {
    alert("Клик по кнопке!");
});</code></pre>

			<h2>Распространённые события</h2>
			<ul>
				<li>click — клик мышью</li>
				<li>mouseover / mouseout — наведение и уход курсора</li>
				<li>input — ввод данных в поле</li>
				<li>submit — отправка формы</li>
				<li>keydown / keyup — нажатие и отпускание клавиш</li>
			</ul>`,
		},
		{
			id: 'js-global',
			title: 'Глобальные функции JavaScript',
			content: `<p>Глобальные функции — это встроенные функции, доступные в любом контексте выполнения.</p>

			<h2>Функции вывода и ввода</h2>
			<ul>
				<li>alert("Текст") — выводит модальное окно с сообщением</li>
				<li>prompt("Введите имя:") — запрашивает ввод у пользователя</li>
				<li>confirm("Вы уверены?") — задаёт вопрос с подтверждением</li>
			</ul>

			<h2>Работа с массивами и строками</h2>
			<ul>
				<li>array.map() — создаёт новый массив из результата функции</li>
				<li>array.filter() — фильтрует массив</li>
				<li>array.reduce() — применяет функцию к каждому элементу и возвращает одно значение</li>
				<li>string.split() — разбивает строку на массив</li>
				<li>string.concat() — объединяет строки</li>
				<li>string.toUpperCase() / toLowerCase() — изменяет регистр</li>
			</ul>

			<h2>Работа с числами</h2>
			<ul>
				<li>parseInt("123") — преобразует строку в целое число</li>
				<li>parseFloat("12.5") — преобразует строку в число с плавающей точкой</li>
				<li>Math.random() — генерирует случайное число от 0 до 1</li>
				<li>Math.floor(), Math.ceil() — округление чисел</li>
			</ul>`,
		},
		{
			id: 'js-conclusion',
			title: 'Вывод',
			content: `<p>Изучение JavaScript открывает широкие возможности для создания динамических и интерактивных веб-приложений. В рамках данного проекта были рассмотрены основные аспекты языка, необходимые для реализации функционала обучающей платформы.</p>

			<p>Базовый синтаксис JavaScript — это фундамент, позволяющий описать логику работы сайта: от простых операций с переменными до сложных условий и циклов. Понимание типов данных, функций и структур управления потоком даёт возможность грамотно организовать работу приложения и обеспечить корректное поведение элементов на странице.</p>

			<p>Особое внимание было уделено работе с DOM (Document Object Model) — ключевому инструменту, который позволяет взаимодействовать с HTML-элементами через JavaScript. С помощью методов получения элементов и изменения их свойств была реализована возможность динамического обновления контента, что особенно важно при создании обучающих заданий и проверки ответов пользователей.</p>

			<p>Также были изучены события в JavaScript, которые делают сайт живым и реагирующим на действия пользователя. Обработка кликов, ввода текста и других событий позволила реализовать интерактивность, без которой невозможно представить современный обучающий ресурс.</p>

			<p>Важным этапом стало освоение глобальных функций, таких как alert(), prompt(), работа с массивами и строками, числовыми значениями. Эти функции активно используются при построении логики обучения, например, для вывода подсказок, проверки правильности ответов, подсчёта результатов и отслеживания прогресса пользователя.</p>

			<h2>В целом, применение JavaScript в проекте «Разработка интерактивного ресурса для изучения веб-технологий» сыграло ключевую роль:</h2>
			<ul>
				<li>Обеспечило интерактивность интерфейса</li>
				<li>Позволило реализовать автопроверку заданий</li>
				<li>Упростило взаимодействие с пользователем</li>
				<li>Создало основу для дальнейшего расширения функционала (например, сохранение прогресса, тестирование, интеграция с сервером)</li>
			</ul>

			<p>Таким образом, знание и применение JavaScript дало возможность не только оживить веб-страницу, но и превратить её в полноценный образовательный инструмент. Без использования JavaScript невозможно представить современную обучающую платформу, ориентированную на практику, мгновенную обратную связь и удобство использования.</p>`,
		},
		{
			id: 'js-test',
			title: 'Тест по JavaScript',
			content: `<h2>Проверьте свои знания JavaScript</h2>
			<div class="test-container">
				<div class="question" data-correct="1">
					<p><strong>1. Как объявить переменную в JavaScript?</strong></p>
					<div class="options">
						<label><input type="radio" name="q1" value="1"> let x = 5;</label>
						<label><input type="radio" name="q1" value="2"> variable x = 5;</label>
						<label><input type="radio" name="q1" value="3"> x = 5;</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>2. Какой оператор используется для сравнения значения и типа?</strong></p>
					<div class="options">
						<label><input type="radio" name="q2" value="1"> ==</label>
						<label><input type="radio" name="q2" value="2"> ===</label>
						<label><input type="radio" name="q2" value="3"> =</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>3. Как написать условие if в JavaScript?</strong></p>
					<div class="options">
						<label><input type="radio" name="q3" value="1"> if x = 5 then</label>
						<label><input type="radio" name="q3" value="2"> if x == 5:</label>
						<label><input type="radio" name="q3" value="3"> if (x === 5) {}</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>4. Как создать функцию в JavaScript?</strong></p>
					<div class="options">
						<label><input type="radio" name="q4" value="1"> function myFunction() {}</label>
						<label><input type="radio" name="q4" value="2"> def myFunction() {}</label>
						<label><input type="radio" name="q4" value="3"> func myFunction() {}</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>5. Какой метод используется для добавления элемента в конец массива?</strong></p>
					<div class="options">
						<label><input type="radio" name="q5" value="1"> add()</label>
						<label><input type="radio" name="q5" value="2"> push()</label>
						<label><input type="radio" name="q5" value="3"> append()</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>6. Как получить элемент по ID в JavaScript?</strong></p>
					<div class="options">
						<label><input type="radio" name="q6" value="1"> getElementById[]</label>
						<label><input type="radio" name="q6" value="2"> select('#id')</label>
						<label><input type="radio" name="q6" value="3"> document.getElementById()</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>7. Какой цикл выполняется хотя бы один раз?</strong></p>
					<div class="options">
						<label><input type="radio" name="q7" value="1"> do...while</label>
						<label><input type="radio" name="q7" value="2"> while</label>
						<label><input type="radio" name="q7" value="3"> for</label>
					</div>
				</div>

				<div class="question" data-correct="2">
					<p><strong>8. Как проверить тип переменной в JavaScript?</strong></p>
					<div class="options">
						<label><input type="radio" name="q8" value="1"> typeOf x</label>
						<label><input type="radio" name="q8" value="2"> typeof x</label>
						<label><input type="radio" name="q8" value="3"> type(x)</label>
					</div>
				</div>

				<div class="question" data-correct="3">
					<p><strong>9. Как преобразовать строку в число?</strong></p>
					<div class="options">
						<label><input type="radio" name="q9" value="1"> int("123")</label>
						<label><input type="radio" name="q9" value="2"> toNumber("123")</label>
						<label><input type="radio" name="q9" value="3"> Number("123")</label>
					</div>
				</div>

				<div class="question" data-correct="1">
					<p><strong>10. Какой метод используется для удаления последнего элемента массива?</strong></p>
					<div class="options">
						<label><input type="radio" name="q10" value="1"> pop()</label>
						<label><input type="radio" name="q10" value="2"> remove()</label>
						<label><input type="radio" name="q10" value="3"> delete()</label>
					</div>
				</div>

				<button class="btn btn-primary check-test">Проверить ответы</button>
				<div class="test-results"></div>
			</div>`,
		},
	],
	conclusion: [
		{
			id: 'conclusion',
			title: 'Заключение',
			content: `<h2>Поздравляем вас с успешным завершением этого этапа обучения!</h2>
			<p>Вы ознакомились с основами трёх ключевых технологий веб-разработки: HTML, CSS и JavaScript — и теперь обладаете фундаментальными знаниями, необходимыми для создания современных веб-страниц.</p>

			<h3>В ходе прохождения курса вы:</h3>
			<ul>
				<li>Научились создавать структуру страницы с помощью HTML</li>
				<li>Освоили оформление и стилизацию интерфейса при помощи CSS</li>
				<li>Познакомились с базовыми возможностями JavaScript, чтобы добавлять интерактивность и логику на сайт</li>
			</ul>

			<p>Эти навыки являются первым шагом к освоению профессии веб-разработчика и откроют перед вами двери в мир создания сайтов, веб-приложений и онлайн-обучающих платформ.</p>

			<p>Мы благодарим вас за то, что выбрали этот курс и прошли его до конца. Ваше стремление учиться и развиваться — залог будущих успехов!</p>

			<h3>Желаем вам удачи в ваших начинаниях!</h3>
			<p>Пусть каждый новый проект будет интереснее предыдущего, а каждая строка кода приближает вас к вашей цели. Помните: даже самый сложный сайт начинается с одного тега &lt;html&gt;. Так что не бойтесь пробовать, ошибаться и снова двигаться вперёд!</p>`,
		},
	],
}

// Функция для проверки специальных разделов
function isSpecialCategory(category) {
	return category === 'introduction' || category === 'conclusion'
}

// Функции для работы с уроками
function loadLessons() {
	renderCategories()
	setInitialLesson()
}

function setInitialLesson() {
	const hash = window.location.hash.slice(1)
	if (!hash) {
		// Если нет хеша, открываем первый урок первой категории
		const firstCategory = Object.keys(lessonsByCategory)[0]
		const firstLesson = lessonsByCategory[firstCategory]?.[0]
		if (firstCategory && firstLesson) {
			navigateToLesson(firstCategory, firstLesson.id)
		}
	} else {
		// Если есть хеш, загружаем соответствующий урок
		const [category, lessonId] = hash.split('/')
		if (category && lessonId) {
			loadLesson(category, lessonId)
		}
	}
}

function renderCategories() {
	const categoryList = document.getElementById('category-list')
	if (!categoryList) return

	categoryList.innerHTML = ''
	Object.keys(lessonsByCategory).forEach(category => {
		const li = document.createElement('li')
		const button = document.createElement('button')
		button.textContent = categoryNames[category] || category
		button.setAttribute('data-category', category)
		button.onclick = () => handleCategoryChange(category)
		li.appendChild(button)
		categoryList.appendChild(li)
	})
}

function handleCategoryChange(category) {
	const lessons = lessonsByCategory[category]
	if (!lessons || !lessons.length) return

	const lessonList = document.querySelector('.lesson-list')
	if (lessonList) {
		// Очищаем список уроков при любом переходе
		lessonList.innerHTML = ''
	}

	// Для специальных разделов сразу загружаем единственный урок
	if (isSpecialCategory(category)) {
		// Принудительно вызываем renderLessons для скрытия элементов
		renderLessons(category)
		navigateToLesson(category, lessons[0].id)
	} else {
		// Для обычных разделов отображаем список и загружаем первый урок
		renderLessons(category)
		navigateToLesson(category, lessons[0].id)
	}
}

function renderLessons(category) {
	const lessonList = document.querySelector('.lesson-list')
	const progressContainer = document.querySelector('.progress-container')
	const markCompleteButton = document.getElementById('mark-complete')

	if (!lessonList) return

	// Скрываем список уроков и связанные элементы для специальных разделов
	if (isSpecialCategory(category)) {
		lessonList.style.display = 'none'
		if (progressContainer) {
			progressContainer.style.display = 'none'
		}
		if (markCompleteButton) {
			markCompleteButton.style.display = 'none'
		}
		return
	}

	// Показываем список уроков и связанные элементы для обычных разделов
	lessonList.style.display = 'block'
	if (progressContainer) {
		progressContainer.style.display = 'block'
	}
	if (markCompleteButton) {
		markCompleteButton.style.display = 'block'
	}

	lessonList.innerHTML = ''

	const lessons = lessonsByCategory[category]
	if (!lessons) return

	lessons.forEach((lesson, index) => {
		if (lesson.hidden) return // Пропускаем скрытые уроки

		const li = document.createElement('li')
		const button = document.createElement('button')
		button.setAttribute('data-lesson-id', lesson.id)

		const titleSpan = document.createElement('span')
		titleSpan.className = 'lesson-title'
		titleSpan.textContent = `${index + 1}. ${lesson.title}`

		const statusSpan = document.createElement('span')
		statusSpan.className = 'lesson-status'

		if (progress[category]?.includes(lesson.id)) {
			button.classList.add('completed')
			statusSpan.textContent = '✓'
		}

		button.appendChild(titleSpan)
		button.appendChild(statusSpan)
		button.onclick = () => navigateToLesson(category, lesson.id)

		li.appendChild(button)
		lessonList.appendChild(li)
	})

	updateProgressUI(category)
}

// Функция навигации к уроку
function navigateToLesson(category, lessonId) {
	if (!category || !lessonId) return

	window.location.hash = `${category}/${lessonId}`
	loadLesson(category, lessonId)
	updateSidebarActiveState(category, lessonId)
}

// Функция загрузки урока
function loadLesson(category, lessonId) {
	const lessons = lessonsByCategory[category]
	if (!lessons) return

	const lessonIndex = lessons.findIndex(lesson => lesson.id === lessonId)
	if (lessonIndex === -1) return

	const lesson = lessons[lessonIndex]

	const lessonTitle = document.getElementById('lesson-title')
	const lessonBody = document.getElementById('lesson-body')
	const lessonProgress = document.getElementById('lesson-progress')

	if (lessonTitle) {
		lessonTitle.textContent = lesson.title
	}

	if (lessonBody) {
		lessonBody.innerHTML = lesson.content
	}

	if (lessonProgress) {
		lessonProgress.textContent = `Урок ${lessonIndex + 1} из ${lessons.length}`
	}

	updateLessonUI(category, lessonIndex)
	updateMarkCompleteButton(category, lessonId)
	updateSidebarActiveState(category, lessonId)

	window.location.hash = `${category}/${lessonId}`

	// Добавляем обработчик для кнопки проверки теста
	const checkTestButton = document.querySelector('.check-test')
	if (checkTestButton) {
		checkTestButton.onclick = () => checkTest(category, lessonId)
	}
}

// Функция обновления UI урока
function updateLessonUI(category, lessonIndex) {
	const lessons = lessonsByCategory[category]
	if (!lessons || lessonIndex === -1) return

	const lesson = lessons[lessonIndex]

	const lessonTitle = document.getElementById('lesson-title')
	const lessonBody = document.getElementById('lesson-body')
	const lessonProgress = document.getElementById('lesson-progress')

	if (lessonTitle) {
		lessonTitle.textContent = lesson.title
	}

	if (lessonBody) {
		lessonBody.innerHTML = lesson.content
	}

	if (lessonProgress) {
		// Скрываем счетчик уроков для специальных разделов
		if (isSpecialCategory(category)) {
			lessonProgress.style.display = 'none'
		} else {
			lessonProgress.style.display = 'block'
			// Фильтруем только видимые уроки
			const visibleLessons = lessons.filter(lesson => !lesson.hidden)
			// Находим индекс текущего урока среди видимых уроков
			const visibleIndex = visibleLessons.findIndex(
				lesson => lessons[lessonIndex].id === lesson.id
			)
			if (visibleIndex !== -1) {
				lessonProgress.textContent = `Урок ${visibleIndex + 1} из ${
					visibleLessons.length
				}`
			}
		}
	}

	updateNavigationButtons(category, lessonIndex)
	updateMarkCompleteButton(category, lesson.id)
	updateSidebarActiveState(category, lesson.id)
}

// Функция обновления состояния урока
function updateLessonState(category, lessonId) {
	if (!category || !lessonId) return

	// Инициализируем массив для категории, если его нет
	if (!progress[category]) {
		progress[category] = []
	}

	const isCompleted = progress[category].includes(lessonId)
	const lessonButton = document.querySelector(
		`button[data-lesson-id="${lessonId}"]`
	)

	if (isCompleted) {
		// Убираем урок из списка выполненных
		progress[category] = progress[category].filter(id => id !== lessonId)
		if (lessonButton) {
			lessonButton.classList.remove('completed')
			const statusSpan = lessonButton.querySelector('.lesson-status')
			if (statusSpan) {
				statusSpan.textContent = ''
			}
		}
	} else {
		// Добавляем урок в список выполненных
		progress[category].push(lessonId)
		if (lessonButton) {
			lessonButton.classList.add('completed')
			const statusSpan = lessonButton.querySelector('.lesson-status')
			if (statusSpan) {
				statusSpan.textContent = '✓'
			}
		}
	}

	saveProgress()
	updateProgressUI(category)
	updateMarkCompleteButton(category, lessonId)
}

// Функция подсчета прогресса
function calculateProgress(category) {
	const lessons = lessonsByCategory[category]
	if (!lessons || !lessons.length) {
		return { percent: 0, completed: 0, total: 0, totalWithHidden: 0 }
	}

	// Проверяем существование массива прогресса
	if (!progress[category]) {
		progress[category] = []
	}

	// Фильтруем только видимые уроки
	const visibleLessons = lessons.filter(lesson => !lesson.hidden)

	// Общее количество видимых уроков
	const total = visibleLessons.length

	// Считаем выполненные уроки
	const completed = progress[category].filter(lessonId =>
		visibleLessons.some(lesson => lesson.id === lessonId)
	).length

	// Вычисляем процент
	const percent = total > 0 ? Math.round((completed / total) * 100) : 0

	// Убеждаемся, что процент не превышает 100%
	const finalPercent = Math.min(percent, 100)

	return {
		percent: finalPercent,
		completed,
		total,
		totalWithHidden: lessons.length,
	}
}

// Функция обновления UI прогресса
function updateProgressUI(category) {
	const { percent, completed, total, totalWithHidden } =
		calculateProgress(category)

	const progressPercent = document.getElementById('progress-percent')
	const progressFill = document.querySelector('.progress-fill')

	if (progressPercent) {
		progressPercent.textContent = `${percent}%`
	}

	if (progressFill) {
		progressFill.style.width = `${percent}%`
	}

	const hash = window.location.hash.slice(1)
	const [currentCategory, currentLessonId] = hash.split('/')

	if (category === currentCategory) {
		const lessons = lessonsByCategory[category]
		const currentIndex = lessons.findIndex(
			lesson => lesson.id === currentLessonId
		)
		const lessonProgress = document.getElementById('lesson-progress')

		if (currentIndex !== -1 && lessonProgress) {
			// Используем общее количество уроков для отображения прогресса
			lessonProgress.textContent = `Урок ${
				currentIndex + 1
			} из ${totalWithHidden}`
		}
	}
}

// Функция сохранения прогресса
function saveProgress() {
	try {
		localStorage.setItem('progress', JSON.stringify(progress))
		console.log('Progress saved:', progress) // Для отладки
	} catch (e) {
		console.error('Ошибка при сохранении прогресса:', e)
	}
}

// Функция инициализации прогресса
function initializeProgress() {
	// Очищаем текущий прогресс
	Object.keys(progress).forEach(key => delete progress[key])

	// Загружаем сохраненный прогресс
	const savedProgress = localStorage.getItem('progress')
	if (savedProgress) {
		try {
			const parsedProgress = JSON.parse(savedProgress)
			if (typeof parsedProgress === 'object' && parsedProgress !== null) {
				// Проверяем каждую категорию
				Object.keys(parsedProgress).forEach(category => {
					if (Array.isArray(parsedProgress[category])) {
						progress[category] = parsedProgress[category]
					} else {
						progress[category] = []
					}
				})
			}
		} catch (e) {
			console.error('Ошибка при загрузке прогресса:', e)
		}
	}

	// Инициализируем пустые массивы для всех категорий
	Object.keys(lessonsByCategory).forEach(category => {
		if (!progress[category]) {
			progress[category] = []
		}
	})
}

// Функция обновления кнопки "Отметить как выполненное"
function updateMarkCompleteButton(category, lessonId) {
	const markCompleteButton = document.getElementById('mark-complete')
	if (
		!markCompleteButton ||
		!category ||
		!lessonId ||
		isSpecialCategory(category)
	) {
		if (markCompleteButton) {
			markCompleteButton.style.display = 'none'
		}
		return
	}

	markCompleteButton.style.display = 'block'

	// Инициализируем массив для категории, если его нет
	if (!progress[category]) {
		progress[category] = []
	}

	const isCompleted = progress[category].includes(lessonId)

	markCompleteButton.textContent = isCompleted
		? 'Отметить как невыполненное'
		: 'Отметить как выполненное'
	markCompleteButton.classList.toggle('completed', isCompleted)

	// Удаляем старый обработчик и добавляем новый
	markCompleteButton.onclick = null
	markCompleteButton.onclick = () => updateLessonState(category, lessonId)
}

// Функция обновления активного состояния в сайдбаре
function updateSidebarActiveState(category, lessonId) {
	document
		.querySelectorAll('.category-list button, .lesson-list button')
		.forEach(btn => {
			btn.classList.remove('active')
		})

	const categoryButton = document.querySelector(
		`.category-list button[data-category="${category}"]`
	)
	if (categoryButton) {
		categoryButton.classList.add('active')
	}

	const lessonButton = document.querySelector(
		`.lesson-list button[data-lesson-id="${lessonId}"]`
	)
	if (lessonButton) {
		lessonButton.classList.add('active')
		lessonButton.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

		const statusSpan = lessonButton.querySelector('.lesson-status')
		if (statusSpan) {
			if (progress[category]?.includes(lessonId)) {
				statusSpan.textContent = '✓'
			} else {
				statusSpan.textContent = ''
			}
		}
	}
}

// Функция обновления кнопок навигации
function updateNavigationButtons(category, lessonIndex) {
	const lessons = lessonsByCategory[category]
	if (!lessons) return

	const prevButton = document.getElementById('prev-button')
	const nextButton = document.getElementById('next-button')
	const prevCategoryButton = document.getElementById('prev-category')
	const nextCategoryButton = document.getElementById('next-category')

	// Получаем список категорий и текущий индекс категории
	const categories = Object.keys(lessonsByCategory)
	const categoryIndex = categories.indexOf(category)

	// Скрываем все кнопки по умолчанию
	;[prevButton, nextButton, prevCategoryButton, nextCategoryButton].forEach(
		btn => {
			if (btn) {
				btn.classList.remove('active')
				btn.onclick = null
			}
		}
	)

	// Логика для кнопок уроков
	if (lessonIndex > 0) {
		if (prevButton) {
			prevButton.classList.add('active')
			prevButton.onclick = () =>
				navigateToLesson(category, lessons[lessonIndex - 1].id)
		}
	}

	if (lessonIndex < lessons.length - 1) {
		if (nextButton) {
			nextButton.classList.add('active')
			nextButton.onclick = () =>
				navigateToLesson(category, lessons[lessonIndex + 1].id)
		}
	}

	// Логика для кнопок категорий
	if (categoryIndex > 0) {
		if (prevCategoryButton && lessonIndex === 0) {
			prevCategoryButton.classList.add('active')
			const prevCategory = categories[categoryIndex - 1]
			const prevCategoryLessons = lessonsByCategory[prevCategory]
			prevCategoryButton.onclick = () => {
				// Сначала меняем категорию
				handleCategoryChange(prevCategory)
				// Затем переходим к последнему уроку предыдущей категории
				navigateToLesson(
					prevCategory,
					prevCategoryLessons[prevCategoryLessons.length - 1].id
				)
			}
		}
	}

	if (categoryIndex < categories.length - 1) {
		if (nextCategoryButton && lessonIndex === lessons.length - 1) {
			nextCategoryButton.classList.add('active')
			const nextCategory = categories[categoryIndex + 1]
			const nextCategoryLessons = lessonsByCategory[nextCategory]
			nextCategoryButton.onclick = () => {
				// Сначала меняем категорию
				handleCategoryChange(nextCategory)
				// Затем переходим к первому уроку следующей категории
				navigateToLesson(nextCategory, nextCategoryLessons[0].id)
			}
		}
	}

	// Обновляем текст кнопок
	if (prevButton && prevButton.classList.contains('active')) {
		prevButton.textContent = 'Назад'
	}
	if (nextButton && nextButton.classList.contains('active')) {
		nextButton.textContent = 'Вперед'
	}
	if (prevCategoryButton && prevCategoryButton.classList.contains('active')) {
		prevCategoryButton.textContent = 'Предыдущий раздел'
	}
	if (nextCategoryButton && nextCategoryButton.classList.contains('active')) {
		nextCategoryButton.textContent = 'Следующий раздел'
	}
}

// Функция инициализации обработчиков событий
function initializeEventListeners() {
	if (prevCategoryButton) {
		prevCategoryButton.classList.toggle('active', categoryIndex > 0)
		if (categoryIndex > 0) {
			const prevCategory = categories[categoryIndex - 1]
			const firstLesson = lessonsByCategory[prevCategory][0]
			prevCategoryButton.onclick = () =>
				navigateToLesson(prevCategory, firstLesson.id)
		}
	}

	if (nextCategoryButton) {
		nextCategoryButton.classList.toggle(
			'active',
			categoryIndex < categories.length - 1
		)
		if (categoryIndex < categories.length - 1) {
			const nextCategory = categories[categoryIndex + 1]
			const firstLesson = lessonsByCategory[nextCategory][0]
			nextCategoryButton.onclick = () =>
				navigateToLesson(nextCategory, firstLesson.id)
		}
	}
}

// Функция инициализации обработчиков событий
function initializeEventListeners() {
	// Обработчик для кнопки "Отметить как выполненное"
	const markCompleteButton = document.getElementById('mark-complete')
	if (markCompleteButton) {
		markCompleteButton.addEventListener('click', () => {
			const hash = window.location.hash.slice(1)
			const [category, lessonId] = hash.split('/')
			if (category && lessonId) {
				updateLessonState(category, lessonId)
			}
		})
	}

	// Обработчик изменения хеша URL
	window.addEventListener('hashchange', () => {
		const hash = window.location.hash.slice(1)
		if (hash) {
			const [category, lessonId] = hash.split('/')
			if (category && lessonId) {
				loadLesson(category, lessonId)
			}
		}
	})
}

// Функция инициализации сайдбара
function initSidebar() {
	const sidebar = document.getElementById('sidebar')
	const main = document.querySelector('.main')
	const toggleButton = document.getElementById('toggle-sidebar')

	if (!sidebar || !main || !toggleButton) return

	function toggleSidebar() {
		sidebar.classList.toggle('open')
		main.classList.toggle('sidebar-open')
	}

	toggleButton.onclick = e => {
		e.preventDefault()
		e.stopPropagation()
		toggleSidebar()
	}

	// Инициализация начального состояния
	const isMobile = window.innerWidth <= 960
	if (!isMobile) {
		sidebar.classList.add('open')
		main.classList.add('sidebar-open')
	}

	// Закрытие сайдбара при клике вне его на мобильных устройствах
	document.addEventListener('click', e => {
		if (
			window.innerWidth <= 960 &&
			!e.target.closest('#sidebar') &&
			!e.target.closest('#toggle-sidebar') &&
			sidebar.classList.contains('open')
		) {
			toggleSidebar()
		}
	})

	// Обработка изменения размера окна
	window.addEventListener('resize', () => {
		if (window.innerWidth <= 960 && sidebar.classList.contains('open')) {
			toggleSidebar()
		}
	})
}

// Функция инициализации темы
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'light'
	const themeToggle = document.getElementById('theme-toggle')
	const sunIcon = document.querySelector('.theme-icon.sun')?.parentElement
	const moonIcon = document.querySelector('.theme-icon.moon')?.parentElement

	function updateThemeIcon(theme) {
		if (!sunIcon || !moonIcon) return
		const isDark = theme === 'dark'
		sunIcon.classList.toggle('active', !isDark)
		moonIcon.classList.toggle('active', isDark)
	}

	function toggleTheme() {
		const currentTheme = document.documentElement.dataset.theme
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
		document.documentElement.dataset.theme = newTheme
		updateThemeIcon(newTheme)
		localStorage.setItem('theme', newTheme)
	}

	// Применяем начальную тему
	document.documentElement.dataset.theme = savedTheme
	updateThemeIcon(savedTheme)

	// Добавляем обработчик переключения темы
	if (themeToggle) {
		themeToggle.addEventListener('click', toggleTheme)
	}
}

// Функция установки активного урока из хеша URL
function setActiveLessonFromHash() {
	const hash = window.location.hash.slice(1)

	if (!hash) {
		// Если нет хеша, открываем первый урок первой категории
		const firstCategory = Object.keys(lessonsByCategory)[0]
		const firstLesson = lessonsByCategory[firstCategory]?.[0]
		if (firstCategory && firstLesson) {
			navigateToLesson(firstCategory, firstLesson.id)
		}
		return
	}

	const [category, lessonId] = hash.split('/')
	if (category && lessonId) {
		// Отображаем уроки категории
		renderLessons(category)

		// Загружаем урок
		loadLesson(category, lessonId)

		// Обновляем состояние сайдбара
		updateSidebarActiveState(category, lessonId)

		// Делаем кнопку категории активной
		const categoryButton = document.querySelector(
			`.category-list button[data-category="${category}"]`
		)
		if (categoryButton) {
			document.querySelectorAll('.category-list button').forEach(btn => {
				btn.classList.remove('active')
			})
			categoryButton.classList.add('active')
		}
	}
}

// Обновляем функцию navigateToLesson
function navigateToLesson(category, lessonId) {
	if (!category || !lessonId) return

	// Обновляем URL без перезагрузки страницы
	window.location.hash = `${category}/${lessonId}`

	// Загружаем урок
	loadLesson(category, lessonId)

	// Обновляем состояние сайдбара
	updateSidebarActiveState(category, lessonId)
}

// Функция для отображения первого раздела
function showInitialCategory() {
	const firstCategory = Object.keys(lessonsByCategory)[0]
	if (firstCategory) {
		// Отображаем уроки первой категории
		renderLessons(firstCategory)

		// Делаем кнопку категории активной
		const categoryButton = document.querySelector(
			`.category-list button[data-category="${firstCategory}"]`
		)
		if (categoryButton) {
			categoryButton.classList.add('active')
		}
	}
}

// Обновляем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
	initializeProgress()
	loadLessons()
	initSidebar()
	initTheme()
	showInitialCategory() // Показываем первый раздел
	setActiveLessonFromHash()
	initializeEventListeners()
})

// Функция проверки теста
function checkTest(category, lessonId) {
	const questions = document.querySelectorAll('.question')
	let correctAnswers = 0
	let totalQuestions = questions.length

	questions.forEach(question => {
		const selectedAnswer = question.querySelector('input[type="radio"]:checked')
		const correctValue = question.getAttribute('data-correct')
		const allOptions = question.querySelectorAll('.options label')

		// Сначала сбрасываем все стили
		allOptions.forEach(option => {
			option.classList.remove('correct-answer', 'incorrect-answer')
		})

		if (selectedAnswer) {
			const selectedLabel = selectedAnswer.closest('label')
			const isCorrect = selectedAnswer.value === correctValue

			// Отмечаем правильный ответ
			allOptions.forEach(option => {
				const input = option.querySelector('input[type="radio"]')
				if (input.value === correctValue) {
					option.classList.add('correct-answer')
				}
			})

			// Если ответ неправильный, отмечаем его
			if (!isCorrect && selectedLabel) {
				selectedLabel.classList.add('incorrect-answer')
			}

			// Подсчитываем правильные ответы
			if (isCorrect) {
				correctAnswers++
				question.classList.add('correct')
				question.classList.remove('incorrect')
			} else {
				question.classList.add('incorrect')
				question.classList.remove('correct')
			}
		}
	})

	const resultElement = document.querySelector('.test-results')
	if (resultElement) {
		const percentage = Math.round((correctAnswers / totalQuestions) * 100)

		if (percentage >= 80) {
			// Если 80% или более правильных ответов
			resultElement.textContent = `Тест пройден! Правильных ответов: ${correctAnswers} из ${totalQuestions} (${percentage}%)`
			resultElement.className = 'test-results success'

			// Отмечаем тест как выполненный
			if (!progress[category]) {
				progress[category] = []
			}
			if (!progress[category].includes(lessonId)) {
				progress[category].push(lessonId)
				saveProgress()
				updateProgressUI(category)
				updateMarkCompleteButton(category, lessonId)
			}
		} else {
			resultElement.textContent = `Нужно набрать минимум 80% для прохождения теста. Ваш результат: ${correctAnswers} из ${totalQuestions} (${percentage}%)`
			resultElement.className = 'test-results error'
		}
	}
}

// В начале файла, где инициализируются элементы
document.addEventListener('DOMContentLoaded', () => {
	// Обновляем кнопки авторизации
	const loginBtn = document.querySelector('.btn-login')
	const registerBtn = document.querySelector('.btn-register')

	if (loginBtn) {
		loginBtn.outerHTML = '<a href="auth.html" class="btn btn-login">Войти</a>'
	}
	if (registerBtn) {
		registerBtn.outerHTML =
			'<a href="auth.html?tab=register" class="btn btn-register">Регистрация</a>'
	}

	// ... остальной код инициализации ...
})
