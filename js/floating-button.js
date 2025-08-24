// Floating Contact Button Manager
class FloatingButtonManager {
  constructor() {
    this.contactBtn = document.querySelector('.learn-more-btn');
    this.heroSection = document.getElementById('hero');
    this.isFloating = false;
    this.originalPosition = {
      parent: this.contactBtn.parentElement,
      nextSibling: this.contactBtn.nextSibling
    };
    this.init();
  }

  init() {
    this.setupScrollListener();
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const heroRect = this.heroSection.getBoundingClientRect();
    const isHeroVisible = heroRect.top < window.innerHeight && heroRect.bottom > 0;

    if (isHeroVisible) {
      this.restoreButton();
    } else if (window.scrollY > heroRect.bottom && !this.isFloating) {
      this.makeButtonFloat();
    }
  }

  restoreButton() {
    if (this.isFloating) {
      this.contactBtn.classList.add('hidden');
      setTimeout(() => {
        this.contactBtn.classList.remove('floating', 'hidden');
        this.originalPosition.parent.insertBefore(this.contactBtn, this.originalPosition.nextSibling);
      }, 300);
      this.isFloating = false;
    }
  }

  makeButtonFloat() {
    if (!this.isFloating) {
      this.contactBtn.classList.add('floating');
      document.body.appendChild(this.contactBtn);
      this.isFloating = true;
      setTimeout(() => this.contactBtn.classList.remove('hidden'), 10);
    }
  }
}

// Initialize floating button manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.floatingBtn = new FloatingButtonManager();
});
