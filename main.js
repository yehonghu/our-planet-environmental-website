(() => {
    const root = document.documentElement;
    const body = document.body;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const updateProgress = () => {
        const maximum = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const progress = Math.min(window.scrollY / maximum, 1);
        root.style.setProperty('--progress', progress.toFixed(4));

        document.querySelectorAll('[data-parallax]').forEach((element) => {
            const rect = element.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const offset = (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight;
            element.style.setProperty('--parallax-y', `${Math.max(-34, Math.min(34, offset * -22)).toFixed(1)}px`);
        });

        const nav = document.querySelector('.site-nav');
        if (nav) nav.classList.toggle('is-scrolled', window.scrollY > 26);
    };

    const revealElements = document.querySelectorAll('[data-reveal]');
    if (reduceMotion) {
        revealElements.forEach((element) => element.classList.add('is-visible'));
    } else if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, activeObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const delay = Number(entry.target.dataset.delay || 0);
                window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
                activeObserver.unobserve(entry.target);
            });
        }, { threshold: 0.13, rootMargin: '0px 0px -42px 0px' });
        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add('is-visible'));
    }

    const toggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    if (toggle && drawer) {
        toggle.addEventListener('click', () => {
            const open = drawer.classList.toggle('is-open');
            toggle.classList.toggle('is-open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });
        drawer.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                drawer.classList.remove('is-open');
                toggle.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 78;
            window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
        });
    });

    if (!reduceMotion) {
        const orb = document.querySelector('[data-orb]');
        if (orb) {
            const resetOrb = () => { orb.style.transform = ''; };
            window.addEventListener('pointermove', (event) => {
                if (event.pointerType === 'touch') return;
                const rect = orb.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const dx = (event.clientX - cx) / Math.max(window.innerWidth, 1);
                const dy = (event.clientY - cy) / Math.max(window.innerHeight, 1);
                orb.style.transform = `rotateX(${(dy * -15).toFixed(2)}deg) rotateY(${(dx * 18).toFixed(2)}deg)`;
            }, { passive: true });
            window.addEventListener('blur', resetOrb);
        }

        document.querySelectorAll('[data-tilt]').forEach((card) => {
            let frame;
            const reset = () => { card.style.transform = ''; };
            card.addEventListener('pointermove', (event) => {
                if (event.pointerType === 'touch') return;
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - .5;
                const y = (event.clientY - rect.top) / rect.height - .5;
                cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => {
                    card.style.transform = `perspective(900px) rotateY(${(x * 5).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg) translateY(-5px)`;
                });
            });
            card.addEventListener('pointerleave', reset);
            card.addEventListener('blur', reset, true);
        });
    }

    body.classList.add('is-ready');
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
})();
