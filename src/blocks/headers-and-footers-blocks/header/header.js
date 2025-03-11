export class Header {
  static initHeaders() {
    const headers = document.querySelectorAll('.b-header');

    headers.forEach((header) => {
      // Mobile menu toggle
      const mobileMenuToggle = header.querySelector('.b-header__e-mobile-menu-toggle');
      if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
          header.classList.toggle('b-header_mobile-menu-open');
          document.body.classList.toggle('menu-open');
        });
      }

      // Submenu toggles
      const menuItems = header.querySelectorAll('.b-header__e-menu-item');
      menuItems.forEach((item) => {
        const link = item.querySelector('.b-header__e-link');
        const submenu = item.querySelector('.b-header__e-submenu');

        if (link && submenu) {
          link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1220) {
              e.preventDefault();

              // Close all submenus first
              menuItems.forEach((menuItem) => {
                if (menuItem !== item) {
                  menuItem.classList.remove('submenu-open');
                  const otherSubmenu = menuItem.querySelector('.b-header__e-submenu');
                  if (otherSubmenu) otherSubmenu.style.display = 'none';
                }
              });

              // Toggle current submenu
              item.classList.toggle('submenu-open');
              submenu.style.display = item.classList.contains('submenu-open') ? 'block' : 'none';
            }
          });
        }
      });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1220) {
        document.querySelectorAll('.b-header_mobile-menu-open').forEach((menu) => {
          menu.classList.remove('b-header_mobile-menu-open');
        });
        document.body.classList.remove('menu-open');
      }
    });
  }
}
