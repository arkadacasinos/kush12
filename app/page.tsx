const searchPhrases = [
  'kush casino',
  'kush casino официальный сайт',
  'kush casino официальный',
  'куш казино официальный сайт',
  'куш казино официальный',
  'куш казино',
  'kush casino зеркало',
  'kush casino играть',
  'куш казино зеркало рабочее',
  'куш казино играть',
  'куш казино онлайн',
  'куш казино зеркало',
  'kush казино',
]

export default function Page() {
  return (
    <main className="kush-shell">
      <header className="kush-header">
        <a className="kush-brand" href="#top" aria-label="Kush Casino — на главную">
          <span className="kush-brand-mark" aria-hidden="true">K</span>
          <span>Kush Casino</span>
        </a>
        <nav className="kush-nav" aria-label="Основная навигация">
          <a href="#about">О площадке</a>
          <a href="#guide">Как начать</a>
        </nav>
        <a className="kush-header-link" href="#start">Играть онлайн <span aria-hidden="true">↗</span></a>
      </header>

      <section className="kush-hero" id="top" aria-labelledby="hero-title">
        <div className="kush-hero-copy">
          <p className="kush-kicker"><span aria-hidden="true">✦</span> Казино без лишнего шума</p>
          <h1 id="hero-title">Kush Casino — официальный сайт для игры онлайн</h1>
          <p className="kush-hero-text">Быстрый вход, понятная навигация и любимые азартные игры в одном месте. Узнайте, где открыть официальный сайт Kush Casino и как найти рабочее зеркало.</p>
          <div className="kush-hero-actions" id="start">
            <a className="kush-primary-link" href="#guide">Перейти к игре <span aria-hidden="true">→</span></a>
            <a className="kush-text-link" href="#about">Подробнее о Kush Casino <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="kush-trust-list" aria-label="Преимущества">
            <li><span aria-hidden="true">01</span> Быстрый доступ</li>
            <li><span aria-hidden="true">02</span> Мобильный формат</li>
            <li><span aria-hidden="true">03</span> Понятные правила</li>
          </ul>
        </div>
        <figure className="kush-hero-visual">
          <img src="/kush-hero.png" alt="Рулетка и карты на столе в атмосфере Kush Casino" width="900" height="600" />
          <figcaption><span>Играй с холодной головой</span><span>18+</span></figcaption>
        </figure>
      </section>

      <section className="kush-intro" id="about" aria-labelledby="about-title">
        <div className="kush-section-heading">
          <p className="kush-label">01 / Навигация</p>
          <h2 id="about-title">Kush Casino официальный сайт: всё для комфортной игры</h2>
        </div>
        <div className="kush-intro-copy">
          <p>Если вы ищете Kush Casino официальный сайт, важно выбрать актуальный адрес и не тратить время на случайные страницы. Официальная площадка встречает игрока лаконичным интерфейсом: каталог развлечений, понятные разделы и быстрый переход с телефона.</p>
          <p>Kush Casino — это место, где можно играть онлайн в привычном темпе. Перед началом ознакомьтесь с правилами, условиями бонусов и ограничениями. Ответственный подход помогает воспринимать игру как развлечение, а не как способ решить финансовые вопросы.</p>
        </div>
      </section>

      <section className="kush-guide" id="guide" aria-labelledby="guide-title">
        <div className="kush-guide-art">
          <img src="/kush-table.png" alt="Игровые фишки на столе Kush Casino" width="800" height="600" loading="lazy" />
        </div>
        <div className="kush-guide-copy">
          <p className="kush-label">02 / Простой старт</p>
          <h2 id="guide-title">Kush Casino зеркало рабочее: как войти без лишних шагов</h2>
          <p>Когда основной адрес временно недоступен, помогает Kush Casino зеркало рабочее — альтернативный вход на ту же площадку. Проверяйте адрес внимательно и сохраняйте только проверенную ссылку. Так вы быстрее попадёте на Kush Casino, не запутавшись в похожих результатах поиска.</p>
          <ol className="kush-steps">
            <li><span>01</span><div><strong>Откройте официальный адрес</strong><p>Проверьте название и защищённое соединение в адресной строке.</p></div></li>
            <li><span>02</span><div><strong>Выберите игру онлайн</strong><p>Начните с демо-режима или стола с понятными правилами.</p></div></li>
            <li><span>03</span><div><strong>Играйте ответственно</strong><p>Заранее определите лимит времени и средств на сессию.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="kush-faq" aria-labelledby="faq-title">
        <p className="kush-label">03 / Коротко о главном</p>
        <h2 id="faq-title">Куш казино играть онлайн: что нужно знать новичку</h2>
        <div className="kush-faq-grid">
          <article><h3>Где найти вход?</h3><p>Ищите Kush Casino официальный адрес и проверяйте домен перед авторизацией. Если сайт не открывается, используйте актуальное Kush Casino зеркало из надёжного источника.</p></article>
          <article><h3>С чего начать игру?</h3><p>Куш казино играть можно с мобильного устройства. Выберите знакомый формат, изучите ставку и правила, затем переходите к игре онлайн в комфортном темпе.</p></article>
          <article><h3>Почему важна осторожность?</h3><p>Не передавайте данные посторонним, не используйте чужие платёжные реквизиты и не увеличивайте ставку в попытке отыграться. Kush Casino — только для совершеннолетних.</p></article>
        </div>
      </section>

      <footer className="kush-footer">
        <div className="kush-footer-top">
          <div><span className="kush-brand-mark" aria-hidden="true">K</span><p>Kush Casino</p></div>
          <p className="kush-footer-note">Игра — это отдых. 18+<br />Устанавливайте личные лимиты.</p>
        </div>
        <div className="kush-tags" aria-label="Ключевые фразы">
          {searchPhrases.map((phrase) => <a href="#top" key={phrase}>#{phrase.replaceAll(' ', '_')}</a>)}
        </div>
        <p className="kush-copyright">© 2026 Kush Casino. Информационный материал для совершеннолетних игроков.</p>
      </footer>
    </main>
  )
}

