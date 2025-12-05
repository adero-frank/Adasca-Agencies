// Mobile Menu JavaScript - Copy this to all pages before </body>

<script>
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuPanel = document.getElementById('mobileMenuPanel');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  function toggleMobileMenu() {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenuPanel.style.transform = 'translateX(100%)';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
        document.body.style.overflow = '';
      }, 300);
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        mobileMenuPanel.style.transform = 'translateX(0)';
      }, 10);
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  }
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', toggleMobileMenu);
  }
  
  const mobileMenuLinks = document.querySelectorAll('#mobileMenu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(toggleMobileMenu, 100);
    });
  });
</script>

