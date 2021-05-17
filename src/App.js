function App() {
  const today = new Date();
  return (
    <div className="main_wrapper container-fluid">
      <div className="container">
        <div className="row align-items-center max_height">
          <div className="row align-items-center content_block">
            <div className="col-12 title_block text-center">
              <h1 className="title">ONLINE NONSENSE</h1>
              <p className="sub_title">Разработка и продвижение сайтов</p>
            </div>
            <div className="col-12 col-md-5 contacts_block">
              <ul className="default_list clean_list bg_black_50 rounded_5">
                <li>
                  <a
                    className="mail"
                    href="mailto:acopalypse@online-nonsense.ru"
                  >
                    acopalypse@online-nonsense.ru
                  </a>
                </li>
                <li>
                  <a
                    className="telegram"
                    target="blank"
                    href="https://t.me/acopalypse"
                  >
                    @acopalypse
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    target="blank"
                    href="https://github.com/acopalypse"
                  >
                    acopalypse
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7 description_block">
              <ul className="default_list bg_black_50 rounded_5">
                <li>
                  Создание сайтов на популярных платформах 1C-Битрикс и
                  WordPress;
                </li>
                <li>SEO-продвижение в Yandex и Google;</li>
                <li>Контекстная реклама Yandex.Direct и Google.Adwords;</li>
                <li>Техническая поддержка сайтов.</li>
              </ul>
            </div>
            <div className="col-12 copyright">
              <p className="text-center">
                ONLINE NONSENSE 2018-{today.getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
