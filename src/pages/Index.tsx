import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const MARKETER_PHOTO = 'https://cdn.poehali.dev/projects/35c8aaef-dcc1-4674-8981-22a664c1bb6b/files/4fc73533-a1fc-4df1-8633-7deb297dc8e6.jpg';

const NAV = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

const STATS = [
  { value: '7 лет', label: 'в Яндекс Директ' },
  { value: '180+', label: 'проектов запущено' },
  { value: '320 млн ₽', label: 'рекламного бюджета' },
  { value: 'x4.2', label: 'средний рост ROI' },
];

const CASES = [
  {
    tag: 'Интернет-магазин мебели',
    title: 'Снизил цену заявки в 3 раза',
    metrics: [
      { k: 'Цена лида', v: '−68%' },
      { k: 'Заявок/мес', v: '+540' },
      { k: 'ROI', v: '410%' },
    ],
    color: 'from-primary to-secondary',
  },
  {
    tag: 'Онлайн-школа',
    title: '1200 заявок на курс за месяц',
    metrics: [
      { k: 'CTR', v: '12.4%' },
      { k: 'Заявок', v: '1 200' },
      { k: 'ДРР', v: '8%' },
    ],
    color: 'from-secondary to-accent',
  },
  {
    tag: 'B2B услуги',
    title: 'Загрузил отдел продаж на 4 месяца',
    metrics: [
      { k: 'Лиды', v: '+230%' },
      { k: 'Цена сделки', v: '−41%' },
      { k: 'Выручка', v: '18 млн ₽' },
    ],
    color: 'from-accent to-primary',
  },
];

const SERVICES = [
  { icon: 'Target', title: 'Настройка Яндекс Директ', text: 'Поиск, РСЯ, ретаргетинг и динамические кампании под вашу нишу.' },
  { icon: 'TrendingUp', title: 'Аудит рекламы', text: 'Найду, где сливается бюджет, и составлю план роста заявок.' },
  { icon: 'BarChart3', title: 'Аналитика и отчётность', text: 'Метрика, цели, коллтрекинг — видно каждый рубль и каждую заявку.' },
  { icon: 'Rocket', title: 'Запуск под ключ', text: 'От стратегии до первых заявок за 5 дней. Веду до результата.' },
];

const REVIEWS = [
  { name: 'Анна Котова', role: 'Владелица магазина декора', text: 'За первый месяц заявки выросли вдвое, а цена снизилась. Наконец-то реклама работает в плюс!' },
  { name: 'Дмитрий Лебедев', role: 'Основатель онлайн-школы', text: 'Прозрачные отчёты, чёткая коммуникация. Получили поток студентов и масштабировались.' },
  { name: 'Игорь Соколов', role: 'Директор B2B-компании', text: 'Отдел продаж был не готов к такому количеству лидов. Это лучшая инвестиция года.' },
];

const POSTS = [
  { tag: 'Стратегия', title: 'Как считать ДРР и не сливать бюджет в 2026', date: '12 июня' },
  { tag: 'РСЯ', title: '7 связок креативов, которые приносят дешёвые заявки', date: '4 июня' },
  { tag: 'Аналитика', title: 'Сквозная аналитика для малого бизнеса с нуля', date: '28 мая' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-primary/30 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[35rem] h-[35rem] bg-secondary/25 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-accent/20 rounded-full blur-[120px] animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <header className="fixed top-0 inset-x-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
            <a href="#" className="font-display font-extrabold text-lg tracking-tight">
              Директ<span className="text-gradient">Про</span>
            </a>
            <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
              ))}
            </nav>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90" asChild>
              <a href="#zoom"><Icon name="Video" size={16} className="mr-2" />Записаться на Zoom</a>
            </Button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-3 animate-fade-up">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">{n.label}</a>
              ))}
              <Button className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl" asChild>
                <a href="#zoom">Записаться на Zoom</a>
              </Button>
            </div>
          )}
        </div>
      </header>

      <section className="relative pt-40 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm mb-8 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Беру 2 проекта в июне
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Привожу клиентов<br />из <span className="text-gradient animate-gradient-x">Яндекс Директ</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Настраиваю рекламу, которая приносит заявки, а не сливает бюджет. Прозрачная аналитика и рост продаж с первого месяца.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl text-base h-14 px-8 glow hover:opacity-90" asChild>
                <a href="#zoom"><Icon name="Video" size={20} className="mr-2" />Записаться на Zoom-встречу</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl text-base h-14 px-8 border-border bg-transparent hover:bg-muted" asChild>
                <a href="#cases">Смотреть кейсы</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto">
            {STATS.map((s, i) => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center animate-fade-up" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                <div className="font-display font-extrabold text-3xl md:text-4xl text-gradient">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-40" />
              <img src={MARKETER_PHOTO} alt="Маркетолог" className="relative rounded-3xl w-full object-cover aspect-square animate-float" />
            </div>
            <div>
              <p className="text-accent font-semibold mb-3">Обо мне</p>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">Маркетолог, который думает о вашей прибыли</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Меня зовут Алексей. 7 лет настраиваю Яндекс Директ для бизнеса в России. Не гоняюсь за кликами — фокусируюсь на заявках и продажах.
              </p>
              <ul className="mt-6 space-y-3">
                {['Сертифицированный специалист Яндекс', 'Работаю по договору и с гарантией', 'Отчётность каждую неделю'].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shrink-0">
                      <Icon name="Check" size={14} className="text-white" />
                    </span>
                    <span className="text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3">Кейсы</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">Результаты, а не обещания</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {CASES.map((c) => (
              <div key={c.title} className="glass rounded-3xl p-7 hover:-translate-y-2 transition-transform duration-300">
                <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${c.color} text-white mb-5`}>{c.tag}</div>
                <h3 className="font-display font-bold text-xl leading-snug mb-6">{c.title}</h3>
                <div className="grid grid-cols-3 gap-2">
                  {c.metrics.map((m) => (
                    <div key={m.k} className="text-center">
                      <div className="font-display font-extrabold text-lg text-gradient">{m.v}</div>
                      <div className="text-[11px] text-muted-foreground mt-1">{m.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3">Услуги</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">Что я для вас сделаю</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SERVICES.map((s) => (
              <div key={s.title} className="glass rounded-3xl p-7 flex gap-5 hover:bg-white/[0.06] transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3">Отзывы</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">Что говорят клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((r) => (
              <div key={r.name} className="glass rounded-3xl p-7">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">«{r.text}»</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold text-white">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-xs text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zoom" className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-[2rem] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x" style={{ backgroundSize: '200% auto' }} />
            <div className="relative p-10 md:p-16 text-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm mb-6">
                <Icon name="Video" size={16} />Бесплатно · 30 минут
              </div>
              <h2 className="font-display font-black text-3xl md:text-5xl leading-tight">Записывайтесь на Zoom-встречу</h2>
              <p className="mt-5 text-white/90 max-w-xl mx-auto text-lg">
                Разберём вашу нишу, посчитаем потенциал заявок и составим план запуска рекламы. Без воды и продаж.
              </p>
              <Button size="lg" className="mt-9 bg-white text-primary font-bold rounded-xl text-base h-14 px-10 hover:bg-white/90">
                <Icon name="CalendarCheck" size={20} className="mr-2" />Выбрать удобное время
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent font-semibold mb-3">Блог</p>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl">Полезное про трафик</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {POSTS.map((p) => (
              <a key={p.title} href="#blog" className="glass rounded-3xl p-7 block hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-accent">{p.tag}</span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-display font-bold text-lg leading-snug">{p.title}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-gradient font-semibold">
                  Читать <Icon name="ArrowRight" size={16} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="glass rounded-[2rem] p-10 md:p-14 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl">Свяжитесь со мной</h2>
              <p className="mt-4 text-muted-foreground">Отвечу в течение пары часов и предложу решение под вашу задачу.</p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: 'Mail', text: 'hello@directpro.ru' },
                  { icon: 'Phone', text: '+7 (900) 000-00-00' },
                  { icon: 'Send', text: '@directpro' },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name={c.icon} size={18} className="text-white" />
                    </div>
                    <span>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input placeholder="Ваше имя" className="bg-input rounded-xl px-5 py-3.5 outline-none focus:ring-2 ring-primary placeholder:text-muted-foreground" />
              <input placeholder="Телефон или Telegram" className="bg-input rounded-xl px-5 py-3.5 outline-none focus:ring-2 ring-primary placeholder:text-muted-foreground" />
              <textarea placeholder="Коротко о задаче" rows={3} className="bg-input rounded-xl px-5 py-3.5 outline-none focus:ring-2 ring-primary placeholder:text-muted-foreground resize-none" />
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display font-extrabold text-foreground">Директ<span className="text-gradient">Про</span></span>
          <span>© 2026 · Реклама в Яндекс Директ под ключ</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
