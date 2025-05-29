// Функционал темы
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'light'
	document.documentElement.setAttribute('data-theme', savedTheme)
	updateThemeIcon(savedTheme)
}

function updateThemeIcon(theme) {
	const themeToggle = document.getElementById('theme-toggle')
	const iconContainers = themeToggle.querySelectorAll('.theme-icon-container')

	// Обновляем title кнопки
	themeToggle.setAttribute(
		'title',
		theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'
	)

	// Обновляем активную иконку
	iconContainers.forEach(container => container.classList.remove('active'))
	const activeContainer =
		theme === 'dark'
			? iconContainers[1] // луна для темной темы
			: iconContainers[0] // солнце для светлой темы
	activeContainer.classList.add('active')
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme')
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

	document.documentElement.setAttribute('data-theme', newTheme)
	localStorage.setItem('theme', newTheme)
	updateThemeIcon(newTheme)
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	const themeToggle = document.getElementById('theme-toggle')

	// Установка начального состояния
	initTheme()

	// Обработчик клика
	themeToggle.addEventListener('click', toggleTheme)

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
})

// Инициализация темы при загрузке
initTheme()
