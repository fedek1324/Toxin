export class Header {
  static initHeaders() {
    const headers = document.querySelectorAll('.b-header');
    headers.forEach((header) => {
      const mobileMenuToggle = header.querySelector('.b-header__e-mobile-menu-toggle');
      const menuItems = header.querySelectorAll('.b-header__e-menu-item');

      // Handle mobile menu toggle
      if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
          header.classList.toggle('b-header_mobile-menu-open');
          document.body.classList.toggle('menu-open');
        });
      }

      // Handle submenu toggles on mobile
      menuItems.forEach((item) => {
        const link = item.querySelector('.b-header__e-link');
        const submenu = item.querySelector('.b-header__e-submenu');

        if (link && submenu) {
          link.addEventListener('click', (e) => {
            // Only handle as toggle on mobile screens
            if (window.innerWidth <= 1220) {
              e.preventDefault();
              e.stopPropagation(); // Stop event from bubbling up

              // Force close other open submenus first
              menuItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains('b-header__e-menu-item_submenu-open')) {
                  otherItem.classList.remove('b-header__e-menu-item_submenu-open');
                }
              });

              // Toggle the current submenu with a small delay to ensure DOM updates
              setTimeout(() => {
                item.classList.toggle('b-header__e-menu-item_submenu-open');
              }, 10);
            }
          });
        }
      });
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1220) { // Fixed: removed 'px' suffix
        const openMenus = document.querySelectorAll('.b-header_mobile-menu-open');
        openMenus.forEach((menu) => {
          menu.classList.remove('b-header_mobile-menu-open');
        });
        document.body.classList.remove('menu-open');
      }
    });
  }
}
