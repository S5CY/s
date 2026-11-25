/* Convenience screen lock only. Static files and these checks remain public. */
(() => {
  const key = 'meryl-sat-screen-unlocked-v1';
  const form = document.getElementById('unlock-form');
  const gate = document.getElementById('screen-lock');
  const studio = document.getElementById('studio-root');
  const message = document.getElementById('unlock-message');
  const submit = document.getElementById('unlock-submit');
  const scripts = ['content.js', 'extra-practice.js', 'archive-data.js', 'study-library.js',
    'test-question-bank.js', 'app.js', 'question-practice.js', 'test-text-repairs.js', 'test-player.js'];
  let loading = false;
  function readSession() { try { return sessionStorage.getItem(key) === 'yes'; } catch { return false; } }
  function remember() { try { sessionStorage.setItem(key, 'yes'); } catch {} }
  function clearSession() { try { sessionStorage.removeItem(key); } catch {} }
  function loadScript(name) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = './' + name;
      script.onload = resolve;
      script.onerror = () => reject(new Error('Could not load study app'));
      document.head.append(script);
    });
  }
  async function openStudio() {
    if (loading) return;
    loading = true;
    submit.disabled = true;
    submit.textContent = 'Opening…';
    message.textContent = '';
    try {
      for (const name of scripts) await loadScript(name);
      remember();
      form.reset();
      gate.hidden = true;
      studio.hidden = false;
      studio.inert = false;
      document.body.classList.remove('screen-locked');
      document.getElementById('main').focus({ preventScroll: true });
    } catch {
      clearSession();
      message.textContent = 'Could not load the site. Reload and try again.';
      submit.disabled = false;
      submit.textContent = 'Reload';
      submit.type = 'button';
      submit.onclick = () => location.reload();
    }
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (loading) return;
    const email = document.getElementById('unlock-email').value.trim().toLowerCase();
    const middle = document.getElementById('unlock-middle').value.trim().toLowerCase();
    const code = document.getElementById('unlock-code').value.trim();
    if (email !== 'merylchensd@gmail.com' || middle !== 'muyan' || code !== '67') {
      message.textContent = 'Check your answers and try again.';
      return;
    }
    openStudio();
  });
  document.getElementById('lock-studio').addEventListener('click', () => {
    clearSession();
    location.reload();
  });
  if (readSession()) openStudio();
})();
