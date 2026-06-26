/*
   SATRIA MANDIRI FORKLIFT - DYNAMIC SLIDER & MOBILE MENU LOGIC
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
    const totalCards = cards ? cards.length : 0;
    
    // Generate Dots Dynamically based on responsive view
    function setupDots() {
        if (!dotContainer || totalCards === 0) return;
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
        if (!wrapper || !cards || cards.length === 0) return;
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
    let slideInterval;
    if (wrapper && totalCards > 0) {
        slideInterval = setInterval(() => {
            currentIndex++;
            goToSlide(currentIndex);
        }, 4000);
    }

    function resetAutoSlide() {
        if (!wrapper || totalCards === 0) return;
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            currentIndex++;
            goToSlide(currentIndex);
        }, 4000);
    }

    // Pause on hover
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            if (slideInterval) clearInterval(slideInterval);
        });
        wrapper.addEventListener('mouseleave', resetAutoSlide);
    }

    // Clean URL Routing System
    const isProd = window.location.hostname === 'satriaforklift.com' || window.location.hostname === 'www.satriaforklift.com';
    const isDev = !isProd;
    
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
        '/en/faq': '#faq',

        // Detail subpages (to prevent page reload and support SPA routing)
        '/sewa-forklift-3-ton-bandung': '#unit',
        '/sewa-forklift-5-ton-bandung': '#unit',
        '/sewa-forklift-7-ton-bandung': '#unit',
        '/sewa-forklift-15-ton-bandung': '#unit',
        '/rental-forklift-cimareme-batujajar': '#wilayah',
        '/sewa-forklift-rancaekek': '#wilayah',
        '/sewa-forklift-gedebage': '#wilayah',
        '/sewa-crane-20-ton-bandung': '#crane',
        '/sewa-crane-25-ton-bandung': '#crane',
        '/sewa-crane-35-ton-bandung': '#crane',
        '/sewa-crane-45-ton-bandung': '#crane',

        // English subpages
        '/en/rent-forklift-3-ton-bandung': '#unit',
        '/en/rent-forklift-5-ton-bandung': '#unit',
        '/en/rent-forklift-7-ton-bandung': '#unit',
        '/en/rent-forklift-15-ton-bandung': '#unit',
        '/en/rental-forklift-cimareme-batujajar': '#wilayah',
        '/en/rent-forklift-rancaekek': '#wilayah',
        '/en/rent-forklift-gedebage': '#wilayah',
        '/en/rent-crane-20-ton-bandung': '#crane',
        '/en/rent-crane-25-ton-bandung': '#crane',
        '/en/rent-crane-35-ton-bandung': '#crane',
        '/en/rent-crane-45-ton-bandung': '#crane'
    };

    // Helper to scroll to section
    function scrollToSection(targetSelector, smooth = true) {
        const target = document.querySelector(targetSelector);
        if (target) {
            target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
        }
    }

    // Helper to switch tab programmatically
    function switchTab(sectionId, targetTabId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const btns = section.querySelectorAll('.tab-btn');
        const contents = section.querySelectorAll('.unit-tab-content');
        
        btns.forEach(btn => {
            if (btn.getAttribute('data-target') === targetTabId) {
                btns.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                btn.classList.add('active');
                const targetEl = section.querySelector(`#${targetTabId}`) || document.getElementById(targetTabId);
                if (targetEl) targetEl.classList.add('active');
            }
        });
    }

    // Handle routing based on path
    function handleRoute(path, smooth = true) {
        let cleanPath = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
        cleanPath = cleanPath.replace('.html', '');
        
        // Handle tab switching for subpages
        if (cleanPath.includes('forklift-3-ton') || cleanPath.includes('forklift-3t')) {
            switchTab('unit', 'unit-3t');
        } else if (cleanPath.includes('forklift-5-ton') || cleanPath.includes('forklift-5t')) {
            switchTab('unit', 'unit-5t');
        } else if (cleanPath.includes('forklift-7-ton') || cleanPath.includes('forklift-7t')) {
            switchTab('unit', 'unit-7t');
        } else if (cleanPath.includes('forklift-15-ton') || cleanPath.includes('forklift-15t')) {
            switchTab('unit', 'unit-15t');
        } else if (cleanPath.includes('crane-20-ton') || cleanPath.includes('crane-20t')) {
            switchTab('crane', 'crane-20t');
        } else if (cleanPath.includes('crane-25-ton') || cleanPath.includes('crane-25t')) {
            switchTab('crane', 'crane-25t');
        } else if (cleanPath.includes('crane-35-ton') || cleanPath.includes('crane-35t')) {
            switchTab('crane', 'crane-35t');
        } else if (cleanPath.includes('crane-45-ton') || cleanPath.includes('crane-45t')) {
            switchTab('crane', 'crane-45t');
        }

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
                const normalizedPathname = window.location.pathname.replace(/\\/g, '/');
                const inEnFolder = normalizedPathname.includes('/en/') || normalizedPathname.endsWith('/en') || normalizedPathname.includes('/en/index.html');
                const hash = href.includes('#') ? '#' + href.split('#')[1] : '';
                
                const isHomepage = normalizedPathname === '/' || 
                                   normalizedPathname.endsWith('/index.html') || 
                                   normalizedPathname.endsWith('/en/') || 
                                   normalizedPathname.endsWith('/en/index.html');
                                   
                const hamburger = document.getElementById('hamburger-btn');
                const nav = document.getElementById('nav-menu');
                if (hamburger && nav) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }

                // Determine if target path is in English
                const routeIsEn = cleanPath.startsWith('/en/') || cleanPath === '/en' || cleanPath === '/en/';
                const sameLanguage = (inEnFolder && routeIsEn) || (!inEnFolder && !routeIsEn);

                if (cleanPath === '/' || cleanPath === '/beranda') {
                    if (isHomepage && sameLanguage) {
                        scrollToSection('#home', true);
                    } else {
                        window.location.href = (inEnFolder ? '../index.html' : 'index.html') + hash;
                    }
                } else if (cleanPath === '/en' || cleanPath === '/en/' || cleanPath === '/en/home') {
                    if (isHomepage && sameLanguage) {
                        scrollToSection('#home', true);
                    } else {
                        window.location.href = (inEnFolder ? 'index.html' : 'en/index.html') + hash;
                    }
                } else if (routes[cleanPath] !== undefined) {
                    const sectionHash = routes[cleanPath];
                    if (isHomepage && sameLanguage) {
                        handleRoute(cleanPath, true);
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

        // Language-aware checks for production
        const currentIsEn = window.location.pathname.replace(/\\/g, '/').startsWith('/en');
        const routeIsEn = cleanPath.startsWith('/en/') || cleanPath === '/en' || cleanPath === '/en/';
        const sameLanguage = (currentIsEn && routeIsEn) || (!currentIsEn && !routeIsEn);

        if (isHomepage && sameLanguage && (routes[cleanPath] !== undefined || cleanPath === '/' || cleanPath === '/en' || cleanPath === '/en/')) {
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
                    const targetVal = num.getAttribute('data-target');
                    if (/^\d+$/.test(targetVal) && !num.classList.contains('counted')) {
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
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
    }
    // Parallax Scroll for Stats Numbers
    const statNumbers = document.querySelectorAll('.stat-item h3');
    if (statNumbers && statNumbers.length > 0) {
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
    }

    // Unit & Crane Tab Logic (Scoped to their parent section)
    const initTabs = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const btns = section.querySelectorAll('.tab-btn');
        const contents = section.querySelectorAll('.unit-tab-content');
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');
                btns.forEach(b => b.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const targetEl = section.querySelector(`#${target}`) || document.getElementById(target);
                if (targetEl) targetEl.classList.add('active');
            });
        });
    };
    initTabs('unit');
    initTabs('crane');

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
