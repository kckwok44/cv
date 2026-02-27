/**
 * @typedef {Object} HeroData
 * @property {string} name
 * @property {string} title
 * @property {string} location
 * @property {number} years
 * @property {number} markets
 * @property {string} email
 * @property {string} linkedin
 */

/**
 * @typedef {Object} StatsData
 * @property {number} manualReduction
 * @property {number} years
 * @property {number} markets
 */

/**
 * @typedef {Object} Job
 * @property {string} period
 * @property {string} title
 * @property {string} company
 * @property {string[]} achievements
 * @property {string[]} tags
 */

/**
 * @typedef {Object} SkillCategory
 * @property {string} icon
 * @property {string} title
 * @property {string[]} skills
 */

/**
 * @typedef {Object} ContactData
 * @property {string} email
 * @property {string} linkedin
 */

/**
 * @typedef {Object} FooterData
 * @property {string} name
 * @property {number} year
 */

const Components = {
  /**
   * @returns {string}
   */
  Navigation: () => `
    <nav class="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300" id="navbar">
      <div class="container py-4">
        <div class="flex justify-between items-center">
          <a href="#" class="font-display font-bold text-2xl tracking-tight text-gold-400">BK.</a>
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="nav-link">About</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <button onclick="window.scrollTo('#contact')" class="btn btn-secondary text-sm">Hire Me</button>
        </div>
      </div>
    </nav>
  `,

  /**
   * @param {HeroData} data
   * @returns {string}
   */
  Hero: ({ name, title, location, years, markets, email, linkedin }) => `
    <section class="hero relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div class="container grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div class="space-y-8 reveal active">
          <div class="status-badge"><span>Available for opportunities</span></div>
          <h1 class="text-5xl md:text-7xl font-bold leading-tight text-slate-300">
            Senior <br><span class="text-gradient">Software</span><br>Engineer
          </h1>
          <p class="text-xl text-slate-400 max-w-lg leading-relaxed">
            Results-driven engineer with <span class="text-cream font-semibold counter" data-target="${years}" data-suffix="+">0</span>+ years of experience, 
            combining deep technical expertise with project oversight across APAC markets.
          </p>
          <div class="flex flex-wrap gap-4">
            <button onclick="window.scrollTo('#experience')" class="btn btn-secondary">
              View Experience
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <button onclick="window.scrollTo('#contact')" class="btn btn-primary">Get in Touch</button>
          </div>
          <div class="flex items-center gap-6 pt-4">
            <a href="${linkedin}" target="_blank" class="text-slate-400 hover:text-gold-400 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:${email}" class="text-slate-400 hover:text-gold-400 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
        <div class="relative reveal active stagger-2">
          <div class="relative w-full aspect-square max-w-md mx-auto">
            <div class="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-blue-500/20 rounded-3xl rotate-6 blur-xl"></div>
            <div class="relative glass-strong rounded-3xl p-8 h-full flex flex-col justify-center items-center border-gradient">
              <div class="w-32 h-32 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 p-1 mb-6 shadow-lg shadow-gold-400/20">
                <div class="w-full h-full rounded-full bg-navy-900 flex items-center justify-center text-4xl font-display font-bold text-gold-400">
                  ${name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              <h3 class="text-2xl font-display font-bold mb-2 text-cream">${name}</h3>
              <p class="text-slate-400 mb-6">${location}</p>
              <div class="grid grid-cols-2 gap-4 w-full">
                <div class="glass rounded-xl p-4 text-center border border-gold-400/10">
                  <div class="text-2xl font-bold text-gold-400 counter" data-target="${years}">0</div>
                  <div class="text-xs text-slate-400 mt-1">Years Exp.</div>
                </div>
                <div class="glass rounded-xl p-4 text-center border border-gold-400/10">
                  <div class="text-2xl font-bold text-gold-500 counter" data-target="${markets}">0</div>
                  <div class="text-xs text-slate-400 mt-1">APAC Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  /**
   * @param {StatsData} data
   * @returns {string}
   */
  Stats: ({ manualReduction, years, markets }) => `
    <section class="py-20 relative">
      <div class="container">
        <div class="glass rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 reveal border border-gold-400/10">
          <div class="text-center">
            <div class="text-4xl font-display font-bold text-gradient mb-2 counter" data-target="${manualReduction}">0</div>
            <div class="text-sm text-slate-400">% Manual Work Reduced</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-display font-bold text-gradient mb-2 counter" data-target="${years}">0</div>
            <div class="text-sm text-slate-400">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-display font-bold text-gradient mb-2 counter" data-target="${markets}">0</div>
            <div class="text-sm text-slate-400">APAC Markets Served</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-display font-bold text-gold-400 mb-2">AZ-104</div>
            <div class="text-sm text-slate-400">Azure Certified</div>
          </div>
        </div>
      </div>
    </section>
  `,

  /**
   * @param {Job[]} jobs
   * @returns {string}
   */
  Experience: (jobs) => `
    <section id="experience" class="py-24 relative">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16 reveal">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-300">Professional <span class="text-gradient">Journey</span></h2>
          <p class="text-slate-400">A track record of delivering scalable solutions across fintech and AI industries</p>
        </div>
        <div class="relative">
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2"></div>
          ${jobs.map((job, index) => `
            <div class="relative mb-12 reveal">
              <div class="md:flex items-center justify-between">
                <div class="md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:pl-8 order-2'} mb-4 md:mb-0">
                  <div class="glass rounded-2xl p-6 card-hover border-l-4 ${index % 2 === 0 ? 'border-gold-400 md:border-l-0 md:border-r-4' : 'border-gold-500'}">
                    <span class="text-gold-400 font-mono text-sm">${job.period}</span>
                    <h3 class="text-xl font-bold mt-2 mb-1 text-cream">${job.title}</h3>
                    <p class="text-slate-400 text-sm mb-4">${job.company}</p>
                    <ul class="space-y-2 text-sm text-slate-300">
                      ${job.achievements.map(a => `
                        <li class="flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}">
                          <span class="text-gold-400 mt-1">▹</span>
                          <span class="${index % 2 === 0 ? 'md:text-right' : ''}">${a}</span>
                        </li>
                      `).join('')}
                    </ul>
                    <div class="mt-4 flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : ''}">
                      ${job.tags.map(tag => `<span class="px-3 py-1 rounded-full text-xs bg-navy-800 text-gold-400 border border-gold-400/20 font-mono">${tag}</span>`).join('')}
                    </div>
                  </div>
                </div>
                <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 border-4 border-navy-900 shadow-lg shadow-gold-400/30 z-10"></div>
                <div class="md:w-5/12 ${index % 2 === 0 ? 'order-2' : ''}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `,

  /**
   * @param {SkillCategory[]} categories
   * @returns {string}
   */
  Skills: (categories) => `
    <section id="skills" class="py-24 relative bg-navy-800/30">
      <div class="container">
        <div class="text-center mb-16 reveal">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 text-slate-300">Technical <span class="text-gradient">Arsenal</span></h2>
          <p class="text-slate-400">Modern technologies for building scalable, robust systems</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${categories.map((cat, index) => `
            <div class="glass rounded-2xl p-6 card-hover reveal border border-gold-400/5 stagger-${(index % 3) + 1}">
              <div class="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mb-4 border border-gold-400/20">
                ${cat.icon}
              </div>
              <h3 class="text-xl font-bold mb-4 text-cream">${cat.title}</h3>
              <div class="flex flex-wrap gap-2">
                ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
            </div>
          `).join('')}
          <div class="glass rounded-2xl p-6 card-hover reveal border-gradient">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-4 shadow-lg shadow-gold-400/20">
              <svg class="w-6 h-6 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            </div>
            <h3 class="text-xl font-bold mb-4 text-cream">Certifications</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/50 border border-gold-400/10 hover:border-gold-400/30 transition-colors">
                <div class="w-2 h-2 rounded-full bg-gold-400"></div>
                <div>
                  <div class="font-semibold text-sm text-cream">Azure Administrator</div>
                  <div class="text-xs text-slate-400 font-mono">AZ-104 Associate</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-lg bg-navy-800/50 border border-gold-400/10 hover:border-gold-400/30 transition-colors">
                <div class="w-2 h-2 rounded-full bg-gold-500"></div>
                <div>
                  <div class="font-semibold text-sm text-cream">Azure Fundamentals</div>
                  <div class="text-xs text-slate-400 font-mono">AZ-900</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,

  /**
   * @param {ContactData} data
   * @returns {string}
   */
  Contact: ({ email, linkedin }) => `
    <section id="contact" class="py-24 relative bg-navy-800/30">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="reveal">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-slate-300">Let's Build Something <span class="text-gradient">Amazing</span> Together</h2>
          <p class="text-slate-400 mb-12 text-lg">Open to opportunities in software engineering, technical leadership, and cloud architecture roles.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:${email}" class="btn btn-secondary text-lg">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              ${email}
            </a>
            <a href="${linkedin}" target="_blank" class="btn btn-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  `,

  /**
   * @param {FooterData} data
   * @returns {string}
   */
  Footer: ({ name, year }) => `
    <footer class="py-8 border-t border-white/5 bg-navy-900">
      <div class="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="font-display font-bold text-xl text-gold-400">${name.split(' ').map(n => n[0]).join('')}.</div>
        <div class="text-slate-500 text-sm font-mono">© ${year} ${name}. All rights reserved.</div>
        <div class="text-slate-500 text-sm">Built with passion in Hong Kong</div>
      </div>
    </footer>
  `
};

export default Components;
