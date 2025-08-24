// Language Manager
class LanguageManager {
  constructor() {
    this.currentLang = document.documentElement.getAttribute('lang') || 'en';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.updateUILanguage();
  }

  setupEventListeners() {
    const langSwitcher = document.querySelector('.lang-switch a');
    if (langSwitcher) {
      langSwitcher.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });
    }
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';
    document.documentElement.setAttribute('lang', this.currentLang);
    this.updateUILanguage();
  }

  updateUILanguage() {
    // Update language button text
    const langBtn = document.querySelector('.current-lang');
    if (langBtn) {
      langBtn.textContent = this.currentLang.toUpperCase();
    }

    // Update all text elements with language attributes
    document.querySelectorAll('[data-en]').forEach(element => {
      element.textContent = element.getAttribute(`data-${this.currentLang}`);
    });
  }
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.langManager = new LanguageManager();
});
