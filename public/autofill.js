// Safe auto-fill + redirect script for local testing
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('ngasal');
  const masukBtn = document.getElementById('masuk');

  if (form) {
    // Fill common inputs if empty
    form.querySelectorAll('input, textarea, select').forEach((el) => {
      if (el.value) return;
      const type = (el.type || '').toLowerCase();
      if (type === 'email') el.value = 'user@example.com';
      else if (type === 'tel' || /phone|tel/i.test(el.name || '')) el.value = '081234567890';
      else if (el.name && /name|username|user|nama/i.test(el.name)) el.value = 'ngasal';
      else el.value = 'ngasal';
    });
  }

  if (masukBtn) {
    masukBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Optional: submit the form locally first
      try {
        if (form && typeof form.requestSubmit === 'function') form.requestSubmit();
        else if (form) form.submit();
      } catch (err) {
        // ignore submission errors during local testing
      }

      // Then navigate to the target URL (safe redirect)
      window.location.href = 'https://7meterslotwin1.vercel.app/';
    });
  }
});
