const githubUrl = 'https://github.com/aleks12ser';
const modrinthUrl = 'https://modrinth.com/user/lastdream76';
const discordUrl = 'https://discord.gg/qS9nBYCm4w';

document.title = 'Portfolio — Aleks';

const app = document.createElement('main');
app.className = 'container';

app.innerHTML = `
  <header class="hero">
    <h1 class="name">Aleks — frontend & TypeScript</h1>
    <p class="tag">
      Привет! Создаю быстрые статические сайты на TypeScript, делаю моды и инструменты для игр, и поддерживаю проекты на GitHub.
      Здесь можно найти мои репозитории, моды на Modrinth и связаться в Discord. Всё важное — в этом блоке.
    </p>
  </header>

  <section class="links">
    <a class="btn" href="${githubUrl}" target="_blank" rel="noopener noreferrer">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.185 0 0 1.005-.322 3.295 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.655.245 2.88.12 3.185.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.815 1.096.815 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.19.695.8.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      GitHub
    </a>

    <a class="btn" href="${modrinthUrl}" target="_blank" rel="noopener noreferrer">Modrinth</a>

    <a class="btn" href="${discordUrl}" target="_blank" rel="noopener noreferrer">Discord</a>
  </section>

  <footer class="footer">TypeScript • Light yellow — black</footer>
`;

document.body.appendChild(app);

// Accessibility: focus the main container
app.setAttribute('tabindex', '-1');
app.focus();

