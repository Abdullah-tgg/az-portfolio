import { useEffect } from 'react';

// Watches every element with `.reveal` (and not yet `.is-visible`) and adds
// `.is-visible` the first time it scrolls into view. Pair with the CSS in
// App.css that animates `.reveal` -> `.reveal.is-visible`.
//
// Mount once at the App root. Re-runs when the route changes so freshly
// rendered nodes get observed.
export default function useReveal(deps = []) {
    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
            // Fallback: just show everything immediately.
            document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        const targets = document.querySelectorAll('.reveal:not(.is-visible)');
        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
