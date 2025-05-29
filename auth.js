// Функционал переключения темы
function initTheme() {
	const savedTheme = localStorage.getItem('theme') || 'light'
	document.documentElement.setAttribute('data-theme', savedTheme)
	updateThemeIcon(savedTheme)
}

function updateThemeIcon(theme) {
	const themeToggle = document.getElementById('theme-toggle')
	const iconContainers = themeToggle.querySelectorAll('.theme-icon-container')

	iconContainers.forEach(container => container.classList.remove('active'))
	const activeContainer =
		theme === 'dark'
			? iconContainers[1] // луна для темной темы
			: iconContainers[0] // солнце для светлой темы
	activeContainer.classList.add('active')
}

function toggleTheme() {
	const currentTheme = document.documentElement.getAttribute('data-theme')
	const newTheme = currentTheme === 'light' ? 'dark' : 'light'

	document.documentElement.setAttribute('data-theme', newTheme)
	localStorage.setItem('theme', newTheme)
	updateThemeIcon(newTheme)
}

// Функционал переключения форм
function initTabs() {
	const tabs = document.querySelectorAll('.auth-tab')
	const forms = document.querySelectorAll('.auth-form')

	// Проверяем URL параметры при загрузке
	const urlParams = new URLSearchParams(window.location.search)
	const tabParam = urlParams.get('tab')

	if (tabParam) {
		// Находим нужную вкладку
		const targetTab = document.querySelector(
			`.auth-tab[data-tab="${tabParam}"]`
		)
		if (targetTab) {
			// Деактивируем все табы и формы
			tabs.forEach(tab => tab.classList.remove('active'))
			forms.forEach(form => form.classList.remove('active'))

			// Активируем нужный таб и форму
			targetTab.classList.add('active')
			document.getElementById(`${tabParam}-form`).classList.add('active')
		}
	}

	// Обработчики кликов по табам
	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			const targetForm = tab.getAttribute('data-tab')

			// Деактивируем все табы и формы
			tabs.forEach(t => t.classList.remove('active'))
			forms.forEach(form => form.classList.remove('active'))

			// Активируем нужный таб и форму
			tab.classList.add('active')
			document.getElementById(`${targetForm}-form`).classList.add('active')
		})
	})
}

// Обработка отправки форм
function initForms() {
	const loginForm = document.getElementById('login-form')
	const registerForm = document.getElementById('register-form')

	loginForm.addEventListener('submit', e => {
		e.preventDefault()
		const formData = new FormData(loginForm)
		console.log('Login Data:', Object.fromEntries(formData))
		// Здесь будет логика отправки данных на сервер
	})

	registerForm.addEventListener('submit', e => {
		e.preventDefault()
		const formData = new FormData(registerForm)
		console.log('Register Data:', Object.fromEntries(formData))
		// Здесь будет логика отправки данных на сервер
	})
}

// Валидация форм
function initValidation() {
	const registerForm = document.getElementById('register-form')
	const passwordInput = document.getElementById('register-password')
	const confirmInput = document.getElementById('register-password-confirm')

	confirmInput.addEventListener('input', () => {
		if (passwordInput.value !== confirmInput.value) {
			confirmInput.setCustomValidity('Пароли не совпадают')
		} else {
			confirmInput.setCustomValidity('')
		}
	})
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	initTheme()
	initTabs()
	initForms()
	initValidation()

	// Обработчик для переключения темы
	const themeToggle = document.getElementById('theme-toggle')
	themeToggle.addEventListener('click', toggleTheme)
})
