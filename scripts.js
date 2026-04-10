/* ═══════════════════ TransformHer — scripts.js ═══════════════════ */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    /* ─── DATA ─── */
    const whyJoinData = [
        {
            title: 'Growth with Direction',
            subtitle: 'No more confusion. Just clarity and momentum.',
            desc: 'No more confusion or overwhelm. Get clear guidance, structured learning, and actionable strategies to move forward in your business and personal life.',
            includes: ['Monthly 2-hour deep-dive workshops', 'Access to recorded sessions library', 'Downloadable frameworks and worksheets', 'Live Q&A with speakers', 'Certificate of completion'],
            cta: 'Join Our Event'
        },
        {
            title: 'Real Business Opportunities for Women',
            subtitle: 'From visibility to real income — we make it happen.',
            desc: "From exhibitions to referral networks, TransformHER doesn't just talk — it creates real income opportunities for women entrepreneurs.",
            includes: ['Quarterly networking mixers', 'Industry-specific breakout rooms', 'Warm introductions to investors', 'Co-founder matching program', 'Peer group formations'],
            cta: 'Join Our Event'
        },
        {
            title: 'A Powerful Network of Ambitious Women',
            subtitle: "Women's networking done right.",
            desc: 'Surround yourself with growth-minded women who genuinely support, uplift, and collaborate. This is women\'s networking done right.',
            includes: ['1-on-1 monthly mentorship sessions', 'Goal setting and progress tracking', 'Mentor matching based on industry & stage', 'Access to mentor office hours', 'Peer mentor circles'],
            cta: 'Join Our Event'
        },
        {
            title: 'Confidence, Visibility & Personal Branding',
            subtitle: 'Step out of hesitation. Step into your power.',
            desc: 'Step out of hesitation and into confidence. Build your personal brand, strengthen your communication, and own your presence.',
            includes: ['100+ downloadable templates', 'Legal & compliance cheat sheets', 'Fundraising pitch deck templates', 'Marketing playbooks', 'Operational SOPs'],
            cta: 'Join Our Event'
        },
        {
            title: 'Accountability & Consistency for Business Growth',
            subtitle: 'Show up. Take action. Achieve consistently.',
            desc: 'Stay on track with a community that pushes you to show up, take action, and achieve your goals — consistently.',
            includes: ['Monthly founder spotlights', 'Social media features', 'Partner publication features', 'Podcast guest opportunities', 'Award nominations'],
            cta: 'Join Our Event'
        },
        {
            title: 'A Safe & Empowering Space for Women',
            subtitle: 'Heard. Valued. Celebrated.',
            desc: 'A circle where you are heard, valued, and celebrated — without judgment. Your safe space to grow.',
            includes: ['Post unlimited job listings', 'Access to vetted talent pool', 'Resume database access', 'Talent matching recommendations', 'Diversity-first hiring support'],
            cta: 'Join Our Event'
        }
    ];

    const eventsData = [
        {
            title: 'LearningHUB',
            desc: 'Upgrade Your Skills & Mindset. Gain access to structured learning, business strategies, and personal development resources designed specifically for women entrepreneurs and professionals.',
            cta: 'Join LearningHUB'
        },
        {
            title: 'ConnectHUB',
            desc: 'Build Powerful Business Relationships for Women. Step into a curated network of growth-minded women and build the professional connections that fuel real business success.',
            cta: 'Join ConnectHUB'
        },
        {
            title: 'ExhibitHUB',
            desc: 'Showcase & Sell Your Products and Services. A dedicated space for women in business to gain visibility, exhibit their work, and reach new customers.',
            cta: 'Join ExhibitHUB'
        },
        {
            title: 'ExchangeHUB',
            desc: "Collaborate, Refer & Grow Together. Create income through referrals, strategic collaborations, and peer-to-peer business exchange within a trusted women's network.",
            cta: 'Join ExchangeHUB'
        },
        {
            title: 'SocialHUB',
            desc: 'Celebrate, Belong & Thrive as a Community. A safe, inclusive community where women support each other, celebrate wins, and build a sense of belonging.',
            cta: 'Join SocialHUB'
        }
    ];

    const outcomesData = [
        { title: 'Confidence Boost', desc: "Step into your power with unshakable confidence. TransformHER's women's empowerment community in India helps you silence self-doubt, own your voice, and show up boldly in every room — business or personal." },
        { title: 'Strategic Vision', desc: "Stop drifting and start leading with purpose. Our women's personal development platform gives you the clarity, tools, and strategic direction to build a business that aligns with your goals and values." },
        { title: 'Peer Accountability', desc: "Growth happens faster when you're not doing it alone. Inside our women's networking group, you'll find peers who hold you to your commitments, celebrate your wins, and keep you moving forward — consistently." },
        { title: 'Fundraising Readiness', desc: "Turn your idea into a fundable, investable business. TransformHER prepares women entrepreneurs with the knowledge, pitch skills, and financial confidence to attract the right opportunities and resources." },
        { title: 'Brand Visibility', desc: "Get seen, get known, get chosen. As part of India's growing online community for women entrepreneurs, you'll amplify your personal brand and stand out in a crowded market with confidence and clarity." },
        { title: 'Operational Clarity', desc: "Build a business that actually runs smoothly. Our business growth for women framework helps you systemize, prioritize, and streamline — so you spend less time in chaos and more time in growth." },
        { title: 'Resilient Mindset', desc: "Every successful woman in business has faced setbacks — what sets her apart is how she rises. TransformHER's women in business community nurtures the mental strength and resilience to keep going, no matter what." },
        { title: 'Global Perspective', desc: "Think bigger. Dream wider. Connect deeper. Through our women's business network, you gain exposure to global ideas, diverse perspectives, and cross-border opportunities that expand what's possible for your business and your life." }
    ];

    const founderBio = {
        name: 'Sneha Kapoor',
        title: 'Founder, TransformHer',
        fullBio: `<p>With over 15 years navigating India's startup ecosystem, Sneha Kapoor has been at the forefront of the entrepreneurship revolution. Having founded and scaled two technology companies, she intimately understands the unique challenges women face in business.</p>
        <p>After her second successful exit, Sneha realized that the ecosystem was missing a critical component — a dedicated, high-quality community infrastructure built specifically for women entrepreneurs. The networking events, mentorship programs, and accelerators that existed were often generic, and women were forced to navigate an ecosystem not designed for them.</p>
        <p>TransformHer was born from this realization. Sneha envisioned a community that would be the ultimate launchpad for ambitious women — combining curated networking, world-class workshops, structured mentorship, and a resource library that covered every stage of the entrepreneurial journey.</p>
        <p>Today, TransformHer serves 5,000+ women entrepreneurs across India, with alumni going on to raise over ₹200 Crore in funding collectively. Sneha's mission remains unchanged: to build the future of India's economy, one woman entrepreneur at a time.</p>`,
        socials: [
            { name: 'LinkedIn', url: 'https://linkedin.com' },
            { name: 'Instagram', url: 'https://instagram.com' }
        ]
    };

    /* ─── DOM REFS ─── */
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContainer = document.getElementById('modal-container');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close');

    /* ─── NAVBAR SCROLL SHADOW ─── */
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
        updateActiveNav();
    });

    /* ─── ACTIVE NAV LINK ─── */
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 120;
        let currentId = '';
        sections.forEach(section => {
            if (scrollY >= section.offsetTop) currentId = section.id;
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
    }

    /* ─── HAMBURGER ─── */
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    /* Close mobile menu when a link is clicked */
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });

    /* ─── MODAL SYSTEM ─── */
    function openModal(html) {
        modalBody.innerHTML = html;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

    /* ─── REGISTRATION MODAL ─── */
    function openRegistrationModal() {
        openModal(`
            <h2>Register For The Next Cohort</h2>
            <p class="modal-subtitle">Join 5,000+ ambitious women entrepreneurs</p>
            <p>Fill in your details below and our team will reach out with next steps, upcoming cohort dates, and everything you need to get started.</p>
            <form class="reg-form" id="reg-form">
                <div class="form-group">
                    <label for="reg-name">Full Name</label>
                    <input type="text" id="reg-name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="reg-email">Email Address</label>
                    <input type="email" id="reg-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="reg-phone">Phone Number</label>
                    <input type="tel" id="reg-phone" name="phone" placeholder="e.g. +91 98765 43210" required>
                </div>
                <div class="form-group">
                    <label for="reg-city">City</label>
                    <input type="text" id="reg-city" name="event" required>
                </div>
                <div class="form-group">
                    <label for="reg-business">Business Type</label>
                    <select id="reg-business" name="business" required>
                        <option value="" disabled selected>Select your business type</option>
                        <option value="tech">Technology / SaaS</option>
                        <option value="ecommerce">E-commerce / D2C</option>
                        <option value="services">Professional Services</option>
                        <option value="fintech">Fintech</option>
                        <option value="health">Health & Wellness</option>
                        <option value="education">Education / EdTech</option>
                        <option value="creative">Creative / Media</option>
                        <option value="social">Social Enterprise</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;">Submit Registration</button>
            </form>
        `);
        document.getElementById('reg-form').addEventListener('submit', handleRegSubmit);
    }

    function handleRegSubmit(e) {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        
        const data = {
            name: document.getElementById("reg-name").value,
            email: document.getElementById("reg-email").value,
            phone: document.getElementById("reg-phone").value,
            event: document.getElementById("reg-city").value,
            business: document.getElementById("reg-business").value
        };

        submitBtn.disabled = true;
        submitBtn.innerText = "Registering...";

        fetch("https://script.google.com/macros/s/AKfycbyYGQ8XXT6BigE4Sus-TfpRkE2Q82GMQrPX4dJZ6RVURUUXKf5LsHb5yiEwiyV1Vqs0-g/exec", {
            method: "POST",
            mode: "no-cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            modalBody.innerHTML = `
                <div class="form-success">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F06136" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 10"/>
                    </svg>
                    <h3>You're In! 🎉</h3>
                    <p>Thank you for registering. We'll send you an email with next steps, upcoming cohort dates, and your welcome kit.</p>
                    <button class="btn btn-primary" style="margin-top:20px;" onclick="document.getElementById('modal-overlay').classList.remove('active');document.body.style.overflow='';">Close</button>
                </div>
            `;
        })
        .catch(error => {
            console.error(error);
            alert("Error ❌ Submission failed. Please try again.");
            submitBtn.disabled = false;
            submitBtn.innerText = originalBtnText;
        });
    }

    /* Register buttons */
    document.getElementById('nav-register-btn').addEventListener('click', (e) => { e.preventDefault(); openRegistrationModal(); });
    document.getElementById('hero-register-btn').addEventListener('click', (e) => { e.preventDefault(); openRegistrationModal(); });
    document.getElementById('footer-register-btn').addEventListener('click', (e) => { e.preventDefault(); openRegistrationModal(); });

    /* ─── WHY JOIN MODALS ─── */
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            const idx = parseInt(card.dataset.modal.split('-')[1]);
            const d = whyJoinData[idx];
            openModal(`
                <h2>${d.title}</h2>
                <p class="modal-subtitle">${d.subtitle}</p>
                <p>${d.desc}</p>
                <button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.remove('active');document.body.style.overflow='';document.getElementById('events').scrollIntoView({behavior:'smooth'});">${d.cta}</button>
            `);
        });
    });

    /* ─── EVENT MODALS ─── */
    document.querySelectorAll('.event-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const idx = parseInt(tile.dataset.modal.split('-')[1]);
            const d = eventsData[idx];
            let modalContent = '';
            
            if (idx === 0) {
                modalContent = `
                    <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:20px;">
                        <a href="pricing-workshop.html" target="_blank" rel="noopener" class="btn btn-primary" style="display:inline-block;">Join Upcoming Workshop</a>
                        <a href="https://www.facebook.com/share/g/18WoSExrr6/?mibextid=wwXIfr" target="_blank" rel="noopener" class="btn btn-outline" style="display:inline-block; padding:12px 24px;">Join LearningHUB</a>
                    </div>
                `;
            } else if (idx === 2) {
                modalContent = `<a href="https://www.instagram.com/transformher_exhibitions?igsh=M2R4OGJjaTgxc3ps&utm_source=qr" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:20px; display:inline-block;">${d.cta}</a>`;
            } else if (idx === 3) {
                modalContent = `<a href="https://chat.whatsapp.com/Iuf2fS6kH3lEaRYEkn0zud?mode=gi_t" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:20px; display:inline-block;">${d.cta}</a>`;
            } else {
                modalContent = `<button class="btn btn-primary" onclick="event.stopPropagation();" id="event-reg-btn" style="margin-top:20px;">${d.cta}</button>`;
            }

            openModal(`
                <h2>${d.title}</h2>
                <p>${d.desc}</p>
                ${modalContent}
            `);

            if (idx !== 0 && idx !== 2 && idx !== 3) {
                document.getElementById('event-reg-btn').addEventListener('click', (e) => {
                    e.preventDefault();
                    closeModal();
                    setTimeout(openRegistrationModal, 350);
                });
            }
        });
    });

    /* ─── OUTCOME MODALS ─── */
    document.querySelectorAll('.outcome-tile').forEach(tile => {
        tile.addEventListener('click', () => {
            const idx = parseInt(tile.dataset.modal.split('-')[1]);
            const d = outcomesData[idx];
            openModal(`
                <h2>${d.title}</h2>
                <p>${d.desc}</p>
                <button class="btn btn-primary" onclick="document.getElementById('modal-overlay').classList.remove('active');document.body.style.overflow='';" style="margin-top:20px;">Join The Community</button>
            `);
        });
    });

    /* ─── FOUNDER MODAL ─── */
    function openFounderModal() {
        openModal(`
            <h2 style="color:var(--orange);">${founderBio.name}</h2>
            <p class="modal-subtitle">${founderBio.title}</p>
            ${founderBio.fullBio}
            <div style="display:flex;gap:12px;margin-top:20px;">
                ${founderBio.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener" class="btn btn-outline" style="padding:8px 20px;font-size:0.85rem;">${s.name}</a>`).join('')}
            </div>
        `);
    }
    document.getElementById('founder-photo-click').addEventListener('click', openFounderModal);
    document.getElementById('founder-name-click').addEventListener('click', openFounderModal);

    /* ─── FOOTER LINK MODALS ─── */
    const footerPages = {
        privacy: { title: 'Privacy Policy', content: '<p>At TransformHer, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our services.</p><p><strong>Information We Collect:</strong> Name, email, city, business type, and any additional information you voluntarily provide through our registration forms and community interactions.</p><p><strong>How We Use Your Information:</strong> To provide our community services, send event invitations, share relevant resources, and improve our offerings. We never sell your data to third parties.</p><p><strong>Data Security:</strong> We use industry-standard encryption and security measures to protect your data. Access to personal information is restricted to authorized team members only.</p><p><strong>Contact:</strong> For privacy inquiries, email us at privacy@transformher.community</p>' },
        terms: { title: 'Terms of Service', content: '<p>By accessing and using TransformHer services, you agree to these Terms of Service.</p><p><strong>Membership:</strong> TransformHer membership grants you access to our community platform, events, resources, and mentorship programs as described in your membership tier.</p><p><strong>Code of Conduct:</strong> Members are expected to maintain respect, professionalism, and confidentiality within all community interactions. Discrimination, harassment, or unethical behavior will result in immediate membership termination.</p><p><strong>Intellectual Property:</strong> All content, materials, and resources provided through TransformHer are protected by copyright. Members may use these materials for personal and professional development but may not redistribute them.</p><p><strong>Limitation of Liability:</strong> TransformHer provides educational and networking services and does not guarantee specific business outcomes.</p>' },
        community: { title: 'Community Guidelines', content: '<p>Welcome to the TransformHer community! These guidelines help us maintain a vibrant, supportive, and productive environment for all members.</p><p><strong>Be Respectful:</strong> Treat every member with dignity and respect. We celebrate diverse perspectives, backgrounds, and experiences.</p><p><strong>Be Supportive:</strong> Lift others up. Share your knowledge, celebrate wins (big and small), and offer constructive feedback when asked.</p><p><strong>Be Confidential:</strong> What is shared in the community stays in the community. Respect the privacy of fellow members and their business strategies, challenges, and personal stories.</p><p><strong>Be Authentic:</strong> Show up as your genuine self. Authentic connections are the foundation of our community.</p><p><strong>Be Active:</strong> Engage, participate, and contribute. The more you put in, the more you get out.</p>' }
    };

    document.querySelectorAll('.footer-link[data-modal]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const key = link.dataset.modal;
            const d = footerPages[key];
            openModal(`<h2>${d.title}</h2>${d.content}`);
        });
    });

    /* ─── LEARN MORE → scroll to About ─── */
    document.getElementById('hero-learn-more').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    /* ─── SCROLL FADE-IN ANIMATIONS ─── */
    const fadeEls = document.querySelectorAll('.feature-card, .event-tile, .outcome-tile, .founder-grid, .about-quote');
    fadeEls.forEach(el => el.classList.add('fade-up'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));

    /* ─── LOGO CLICK → Top ─── */
    document.querySelectorAll('.nav-logo, .footer-logo').forEach(logo => {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    /* ─── HERO SLIDESHOW LOGIC ─── */
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slide-dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0 && dots.length > 0) {
        const showSlide = (index) => {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let index = (currentSlide + 1) % slides.length;
            showSlide(index);
        };

        const startSlideshow = () => {
            slideInterval = setInterval(nextSlide, 3000);
        };

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(idx);
                startSlideshow();
            });
        });

        startSlideshow();
    }

    /* ─── AUTO-OPEN MODAL FROM URL ─── */
    if (window.location.hash === '#register' || window.location.search.includes('register=true')) {
        setTimeout(openRegistrationModal, 500);
    }
});