/*
   SATRIA FORKLIFT - DYNAMIC SLIDER & MOBILE MENU LOGIC
*/

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger-btn');
    const nav = document.getElementById('nav-menu');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    }
    const wrapper = document.querySelector('.testimonial-wrapper');
    const dotContainer = document.querySelector('.slider-dots');
    const cards = document.querySelectorAll('.testimonial-card');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // Generate Dots Dynamically based on responsive view
    function setupDots() {
        if (!dotContainer) return;
        dotContainer.innerHTML = '';
        const maxIndex = totalCards - (window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1);
        for (let i = 0; i <= maxIndex; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            dotContainer.appendChild(dot);
        }
    }

    function goToSlide(index) {
        const maxIndex = totalCards - (window.innerWidth > 992 ? 3 : window.innerWidth > 768 ? 2 : 1);
        currentIndex = index;
        
        if (currentIndex > maxIndex) currentIndex = 0;
        if (currentIndex < 0) currentIndex = maxIndex;

        const cardWidth = cards[0].offsetWidth + 30; // 30 is gap
        wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Update dots active class
        if (dotContainer) {
            const dots = dotContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }
    }

    // Initialize dots on load
    setupDots();

    // Auto Slide Logic
    let slideInterval = setInterval(() => {
        currentIndex++;
        goToSlide(currentIndex);
    }, 4000);

    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            currentIndex++;
            goToSlide(currentIndex);
        }, 4000);
    }

    // Pause on hover
    wrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
    wrapper.addEventListener('mouseleave', resetAutoSlide);

    // Clean URL Routing System
    const isLocalFile = window.location.protocol === 'file:';
    const isLocalServer = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.');
    const isDev = isLocalFile || isLocalServer;
    
    // Route mappings
    const routes = {
        // ID routes
        '/beranda': '#home',
        '/armada': '#unit',
        '/galeri': '#galeri',
        '/wilayah': '#wilayah',
        '/layanan': '#layanan',
        '/faq': '#faq',
        // EN routes
        '/en/home': '#home',
        '/en/fleet': '#unit',
        '/en/gallery': '#galeri',
        '/en/areas': '#wilayah',
        '/en/testimonials': '#layanan',
        '/en/faq': '#faq'
    };

    // Helper to scroll to section
    function scrollToSection(targetSelector, smooth = true) {
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
        }
    }

    // Handle routing based on path
    function handleRoute(path, smooth = true) {
        const cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
        const selector = routes[cleanPath];
        if (selector) {
            scrollToSection(selector, smooth);
            return true;
        }
        if (cleanPath === '/' || cleanPath === '/en' || cleanPath === '/en/') {
            scrollToSection('#home', smooth);
            return true;
        }
        return false;
    }

    // Intercept clicks on links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
            return;
        }

        const cleanPath = href.split('#')[0];
        
        if (isDev) {
            // Local development navigation helper (prevent 404 on Live Server / file protocol)
            if (href.startsWith('/')) {
                e.preventDefault();
                const inEnFolder = window.location.pathname.replace(/\\/g, '/').includes('/en/');
                const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
                
                const isHomepage = window.location.pathname === '/' || 
                                   window.location.pathname.endsWith('/index.html') || 
                                   window.location.pathname.endsWith('/en/') || 
                                   window.location.pathname.endsWith('/en/index.html');
                                   
                const hamburger = document.getElementById('hamburger-btn');
                const nav = document.getElementById('nav-menu');
                if (hamburger && nav) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }

                if (cleanPath === '/' || cleanPath === '/beranda') {
                    if (isHomepage) {
                        scrollToSection('#home', true);
                    } else {
                        window.location.href = (inEnFolder ? '../index.html' : 'index.html') + hash;
                    }
                } else if (cleanPath === '/en' || cleanPath === '/en/' || cleanPath === '/en/home') {
                    if (isHomepage) {
                        scrollToSection('#home', true);
                    } else {
                        window.location.href = (inEnFolder ? 'index.html' : 'en/index.html') + hash;
                    }
                } else if (routes[cleanPath] !== undefined) {
                    const sectionHash = routes[cleanPath];
                    if (isHomepage) {
                        scrollToSection(sectionHash, true);
                    } else {
                        if (inEnFolder) {
                            if (cleanPath.startsWith('/en/')) {
                                window.location.href = 'index.html' + sectionHash;
                            } else {
                                window.location.href = '../index.html' + sectionHash;
                            }
                        } else {
                            if (cleanPath.startsWith('/en/')) {
                                window.location.href = 'en/index.html' + sectionHash;
                            } else {
                                window.location.href = 'index.html' + sectionHash;
                            }
                        }
                    }
                } else {
                    // It is a subpage (e.g. /sewa-forklift-3-ton-bandung)
                    const subPath = cleanPath.substring(1);
                    if (inEnFolder) {
                        if (subPath.startsWith('en/')) {
                            window.location.href = subPath.substring(3) + '.html' + hash;
                        } else {
                            window.location.href = '../' + subPath + '.html' + hash;
                        }
                    } else {
                        if (subPath.startsWith('en/')) {
                            window.location.href = subPath + '.html' + hash;
                        } else {
                            window.location.href = subPath + '.html' + hash;
                        }
                    }
                }
            } else if (href.startsWith('#')) {
                e.preventDefault();
                scrollToSection(href, true);
            }
            return;
        }

        // Production routing
        const normalizedPath = window.location.pathname.endsWith('/') && window.location.pathname.length > 1 ? window.location.pathname.slice(0, -1) : window.location.pathname;
        const isHomepage = normalizedPath === '/' || normalizedPath === '/index.html' || 
                             normalizedPath === '/en' || normalizedPath === '/en/index.html' || 
                             routes[normalizedPath] !== undefined;

        if (isHomepage && (routes[cleanPath] !== undefined || cleanPath === '/' || cleanPath === '/en' || cleanPath === '/en/')) {
            e.preventDefault();

            const hamburger = document.getElementById('hamburger-btn');
            const nav = document.getElementById('nav-menu');
            if (hamburger && nav) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }

            history.pushState(null, null, cleanPath);
            handleRoute(cleanPath, true);
        } else if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href;
            const foundPath = Object.keys(routes).find(key => routes[key] === targetId && key.startsWith(window.location.pathname.startsWith('/en') ? '/en' : '/'));
            if (foundPath && isHomepage) {
                history.pushState(null, null, foundPath);
            }
            scrollToSection(targetId, true);
        }
    });

    // Handle back/forward navigation
    window.addEventListener('popstate', () => {
        if (!isDev) {
            handleRoute(window.location.pathname, true);
        }
    });

    // On page load, scroll to section based on data-scroll-target or pathname
    setTimeout(() => {
        const bodyTarget = document.body.getAttribute('data-scroll-target');
        if (bodyTarget) {
            scrollToSection(bodyTarget, false);
        } else if (!isDev) {
            handleRoute(window.location.pathname, false);
        }
    }, 150);

    // Handle Window Resize (re-calculate positions and recreate dots)
    window.addEventListener('resize', () => {
        setupDots();
        goToSlide(currentIndex);
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Reveal on Scroll Logic
    const revealElements = document.querySelectorAll('.reveal');
    
    const animateValue = (el) => {
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        let current = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        
        const timer = setInterval(() => {
            current += 1;
            el.textContent = current + suffix;
            if (current >= target) {
                el.textContent = target + suffix;
                clearInterval(timer);
            }
        }, stepTime);
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If it's a stat item container, trigger count up for numbers inside
                const numbers = entry.target.querySelectorAll('[data-target]');
                numbers.forEach(num => {
                    if (!num.classList.contains('counted')) {
                        num.classList.add('counted');
                        animateValue(num);
                    }
                });
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Back to Top Logic
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    // Parallax Scroll for Stats Numbers
    const statNumbers = document.querySelectorAll('.stat-item h3');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        statNumbers.forEach((num, index) => {
            // Subtle movement: alternate direction slightly for each number
            const speed = (index + 1) * 0.1;
            const yPos = -(scrolled * speed * 0.2);
            // Limit movement to avoid too much jumpiness
            const clampedY = Math.max(-30, Math.min(30, yPos));
            num.style.transform = `translateY(${clampedY}px)`;
        });
    });

    // Unit Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.unit-tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');

            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to current button and target content
            btn.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Language Dropdown Click Toggle (mainly for mobile/touch screens)
    const langBtn = document.querySelector('.lang-dropdown-btn');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
    }
});
