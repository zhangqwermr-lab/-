// 移动端菜单切换
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  const setMenuState = (isOpen) => {
    nav.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = !nav.classList.contains('is-open');
    setMenuState(isOpen);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        setMenuState(false);
      }
    });
  });
}

// 表单提交提示（配置真实 Formspree ID 后会正常工作）
const form = document.getElementById('booking-form');
if (form) {
  form.addEventListener('submit', function (e) {
    const action = (form.getAttribute('action') || '').trim();
    const isPlaceholder = !action || action === '#' || action.includes('YOUR_FORM_ID');

    if (isPlaceholder) {
      e.preventDefault();
      alert('表单尚未配置真实提交地址。\n\n请先替换成真实的 Formspree ID，或直接通过 QQ / 微信预约。');
    }
  });
}
