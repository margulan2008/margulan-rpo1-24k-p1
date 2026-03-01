const ARTICLES = [
  {id:1,cat:'technology',title:'Anthropic представила революционный ИИ-ассистент нового поколения',lead:'Компания анонсировала модель с беспрецедентными способностями к рассуждению и анализу.',body:'Компания Anthropic объявила о выпуске новейшей версии своего ИИ-ассистента Claude, которая продемонстрировала выдающиеся результаты в тестах по математике, физике и программированию.\n\nВ ходе демонстрации ассистент успешно справился с задачами олимпийского уровня по физике, разработал функциональный компилятор с нуля и предложил несколько оригинальных гипотез в области квантовой химии.\n\nAnthropic подчёркивает, что особое внимание уделялось безопасности. Доступ открывается поэтапно, начиная с исследовательских институтов.',author:'Алексей Петров',date:'26 февраля 2026',img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',hero:true},
  {id:2,cat:'economy',title:'Мировые рынки реагируют на решение ФРС по ставке',lead:'S&P 500 обновил исторический максимум после заявления регулятора.',body:'Американский регулятор сохранил ключевую ставку на уровне 4,5%. Индекс S&P 500 отреагировал ростом на 1,4%, достигнув нового исторического максимума.\n\nАналитики Goldman Sachs считают, что первое снижение ставки произойдёт не ранее осени 2026 года.\n\nЕвропейские площадки также показали рост: немецкий DAX прибавил 0,9%, французский CAC 40 — 1,1%.',author:'Мария Иванова',date:'25 февраля 2026',img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80'},
  {id:3,cat:'science',title:'Открыт новый тип чёрной дыры: учёные в восторге',lead:'Телескоп Джеймса Уэбба зафиксировал объект с характеристиками, не вписывающимися ни в одну из существующих теорий.',body:'Международная группа астрофизиков обнаружила объект в созвездии Ориона, масса которого — 3,2 солнечных массы, ниже теоретического минимума для чёрной дыры.\n\nПо предварительным данным, объект может быть «кварковой звездой» — промежуточным этапом между нейтронной звездой и чёрной дырой.\n\nРезультаты опубликованы в Nature Astronomy. Несколько независимых групп ведут наблюдения для подтверждения.',author:'Дмитрий Волков',date:'25 февраля 2026',img:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80'},
  {id:4,cat:'politics',title:'G20 принял историческое соглашение по климату',lead:'Лидеры крупнейших экономик мира подписали обязывающий документ о снижении выбросов.',body:'На саммите G20 в Йоханнесбурге подписан Йоханнесбургский климатический пакт. Документ предусматривает снижение выбросов CO₂ на 45% к 2035 году.\n\nСоздан специальный фонд в размере $500 млрд для финансирования перехода развивающихся стран на возобновляемые источники.\n\nПредставители НКО называют соглашение «шагом вперёд, но недостаточным», указывая на отсутствие механизмов принуждения.',author:'Ольга Смирнова',date:'24 февраля 2026',img:'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80'},
  {id:5,cat:'sports',title:'«Манчестер Сити» выигрывает Лигу чемпионов в экстра-тайме',lead:'Финальный матч завершился со счётом 3:2 после 120 минут напряжённой игры.',body:'На «Уэмбли» «Манчестер Сити» обыграл «Реал Мадрид» со счётом 3:2. Победный гол забил Холанд на 118-й минуте.\n\nЭто четвёртый титул Лиги чемпионов клуба. Гвардиола назвал матч «лучшим в тренерской карьере».\n\nМадридцы вели 2:1 после второго тайма, однако Де Брёйне вышел на замену на 89-й минуте и организовал два гола.',author:'Иван Кузнецов',date:'24 февраля 2026',img:'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&q=80'},
  {id:6,cat:'culture',title:'Каннский фестиваль объявил программу 2026 года',lead:'Главный конкурс откроет новый фильм Пон Джун-хо — спустя 6 лет после триумфа «Паразитов».',body:'Организаторы 79-го Каннского кинофестиваля представили официальную программу. В главном конкурсе — 21 фильм из 18 стран.\n\nОткрывает программу «Система Омега» Пон Джун-хо — антиутопический триллер о цифровом тоталитаризме.\n\nВ программе «Особый взгляд» — дебютный полный метр казахстанского режиссёра Айгерим Бековой.',author:'Наталья Белова',date:'23 февраля 2026',img:'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&q=80'},
  {id:7,cat:'technology',title:'Tesla анонсировала полностью автономный грузовик',lead:'Беспилотный Semi прошёл сертификацию в 12 штатах США и начнёт коммерческие перевозки летом.',body:'Tesla завершила разработку полностью автономного грузовика Tesla Semi FSD. Транспортное средство получило сертификацию уровня 4 в 12 американских штатах.\n\nПервые контракты подписаны с Amazon, Walmart и FedEx. Пробег на одной зарядке — 800 км.\n\nАналитики считают, что Tesla Semi способен радикально изменить логистическую отрасль в течение 5 лет.',author:'Алексей Петров',date:'23 февраля 2026',img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'},
  {id:8,cat:'world',title:'Исландия объявила о полном переходе на геотермальную энергию',lead:'Страна стала первой в мире, полностью отказавшейся от ископаемого топлива в энергетике.',body:'С 1 марта 2026 года Исландия полностью переходит на возобновляемые источники — геотермальную и гидроэнергетику.\n\nТранспортный сектор, включая рыболовный флот, переведён на электрическую тягу и водородное топливо.\n\nООН рассматривает исландскую модель как образец для малых островных государств.',author:'Мария Иванова',date:'22 февраля 2026',img:'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80'},
  {id:9,cat:'science',title:'Первый ребёнок с редактированным геномом абсолютно здоров',lead:'Исследование 7-летнего мальчика из Китая показало положительные результаты.',body:'Международная группа врачей опубликовала результаты наблюдения за первым человеком, чей геном был отредактирован методом CRISPR-Cas9 до рождения. Ребёнок полностью здоров.\n\nВ 2018 году Хэ Цзянькуй отредактировал ген CCR5, связанный с восприимчивостью к ВИЧ. Учёный был осуждён.\n\nЭтика и правовой статус подобных вмешательств остаются предметом острых дискуссий.',author:'Дмитрий Волков',date:'22 февраля 2026',img:'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80'},
];

const TAGS = ['ИИ','Климат','Финансы','Космос','Политика','Спорт','Кино','Здоровье','Авто','Энергетика'];
const CAT_LABELS = {politics:'Политика',economy:'Экономика',technology:'Технологии',science:'Наука',sports:'Спорт',culture:'Культура',world:'Мир'};
let currentPage=1, currentCat='all', searchQuery='';
const PER_PAGE=6;

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('✓ Service Worker зарегистрирован успешно', registration);
        
        // Проверить обновления каждые 30 минут
        setInterval(() => {
          registration.update();
        }, 30 * 60 * 1000);
        
        // Уведомить пользователя об обновлении
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'activated') {
              showToast('✨ Новая версия приложения загружена');
            }
          });
        });
      })
      .catch(err => console.error('✗ Ошибка при регистрации Service Worker:', err));
  });
} else {
  console.info('Service Worker не поддерживается в этом браузере');
}

// ===== PWA INSTALLATION PROMPT =====
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Показать кнопку установки (добавить в UI если нужно)
  const installBtn = document.getElementById('installBtn');
  if (installBtn) {
    installBtn.style.display = 'block';
    installBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
        installBtn.style.display = 'none';
      }
    });
  }
});

window.addEventListener('appinstalled', () => {
  console.log('✓ PWA установлено успешно');
  deferredPrompt = null;
});

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('currentDate').textContent=new Date().toLocaleDateString('ru-RU',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  renderHero(); renderTrending(); renderTags(); renderGrid(); initWeather();
  document.querySelectorAll('#mainNav .nav-link').forEach(link=>{
    link.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelectorAll('#mainNav .nav-link').forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      currentCat=link.dataset.cat; currentPage=1; searchQuery='';
      document.getElementById('searchInput').value='';
      renderGrid();
    });
  });
  document.getElementById('searchInput').addEventListener('keypress',e=>{if(e.key==='Enter')doSearch();});
  document.addEventListener('click',e=>{
    if(e.target.closest('#mainNav .nav-link')){
      const c=document.getElementById('navCollapse');
      if(c.classList.contains('open')){c.classList.remove('open');document.getElementById('navChevron').className='bi bi-chevron-down';}
    }
  });
  window.addEventListener('scroll',()=>{
    const el=document.documentElement;
    const pct=el.scrollHeight-el.clientHeight>0?((el.scrollTop||document.body.scrollTop)/(el.scrollHeight-el.clientHeight))*100:0;
    document.getElementById('readingBar').style.width=pct+'%';
  });
  // initialize interactive niceties
  initCardTilt();
  initHeroParallax();
});

function getFiltered(){
  return ARTICLES.filter(a=>(currentCat==='all'||a.cat===currentCat)&&(!searchQuery||a.title.toLowerCase().includes(searchQuery)||a.lead.toLowerCase().includes(searchQuery)));
}

function renderHero(){
  const h=ARTICLES.find(a=>a.hero);
  if(!h)return;
  document.getElementById('heroSection').innerHTML=`
    <div class="hero-article fade-in" onclick="openModal(${h.id})">
      <div class="hero-category mb-2">${CAT_LABELS[h.cat]||h.cat}</div>
      <div class="row g-4">
        <div class="col-md-6"><img src="${h.img}" alt="" class="hero-image"></div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h1 class="hero-title">${h.title}</h1>
          <p class="hero-lead mt-3">${h.lead}</p>
          <div class="hero-meta mt-3">${h.author} · ${h.date}</div>
        </div>
      </div>
    </div>`;
}

function renderGrid(){
  const filtered=getFiltered();
  const pages=Math.ceil(filtered.length/PER_PAGE)||1;
  if(currentPage>pages)currentPage=1;
  const slice=filtered.slice((currentPage-1)*PER_PAGE,currentPage*PER_PAGE);
  const grid=document.getElementById('newsGrid');
  if(!slice.length){
    grid.innerHTML=`<div class="col-12 text-center py-5" style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--muted)">По запросу ничего не найдено.</div>`;
    document.getElementById('pagination').innerHTML='';
    return;
  }
  grid.innerHTML=slice.map(a=>`
    <div class="col-md-6 mb-4 fade-in">
      <div class="news-card" onclick="openModal(${a.id})">
        <div class="card-inner">
          <img src="${a.img}" alt="" class="card-img">
          <div class="shimmer"></div>
          <div class="card-category">${CAT_LABELS[a.cat]||a.cat}</div>
          <div class="card-body">
            <h3 class="card-title"><a href="#">${a.title}</a></h3>
            <p class="card-excerpt">${a.lead}</p>
            <div class="card-meta"><img src="https://avatars.dicebear.com/api/micah/${encodeURIComponent(a.author)}.svg?s=64" class="author-avatar" alt=""> <span>${a.author} · ${a.date}</span>
              <a class="read-more" href="#">Читать</a>
            </div>
          </div>
        </div>
      </div>
    </div>`).join('');
  const ul=document.getElementById('pagination');
  if(pages<=1){ul.innerHTML='';return;}
  ul.innerHTML=`<li class="page-item ${currentPage===1?'disabled':''}"><a class="page-link" href="#" onclick="goPage(${currentPage-1});return false">‹</a></li>`
    +Array.from({length:pages},(_,i)=>`<li class="page-item ${i+1===currentPage?'active':''}"><a class="page-link" href="#" onclick="goPage(${i+1});return false">${i+1}</a></li>`).join('')
    +`<li class="page-item ${currentPage===pages?'disabled':''}"><a class="page-link" href="#" onclick="goPage(${currentPage+1});return false">›</a></li>`;
}

function goPage(p){if(p<1)return;currentPage=p;renderGrid();window.scrollTo({top:200,behavior:'smooth'});}

function doSearch(){
  searchQuery=document.getElementById('searchInput').value.toLowerCase().trim();
  currentCat='all';currentPage=1;
  document.querySelectorAll('#mainNav .nav-link').forEach(l=>l.classList.toggle('active',l.dataset.cat==='all'));
  renderGrid();
}

function renderTrending(){
  document.getElementById('trendingList').innerHTML=[...ARTICLES].sort(()=>Math.random()-.5).slice(0,5).map((a,i)=>`
    <div class="trending-item" onclick="openModal(${a.id})">
      <div class="trending-num">0${i+1}</div>
      <div><div class="trending-title">${a.title}</div><div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted)">${a.date}</div></div>
    </div>`).join('');
}

function renderTags(){
  const html=TAGS.map(t=>`<span class="category-tag" onclick="filterTag('${t}')">${t}</span>`).join('');
  document.getElementById('categoryTags').innerHTML=html;
  document.getElementById('tagCloud').innerHTML=html;
}

function filterTag(tag){
  document.getElementById('searchInput').value=tag;
  searchQuery=tag.toLowerCase();currentPage=1;
  renderGrid();showToast(`Фильтр: «${tag}»`);
}

function openModal(id){
  const a=ARTICLES.find(x=>x.id===id);
  if(!a)return;
  document.getElementById('modalTitle').textContent=a.title;
  document.getElementById('modalBody').innerHTML=`
    <img src="${a.img}" alt="" class="modal-article-image">
    <div class="modal-article-meta"><i class="bi bi-person me-1"></i><a href="author.html" style="color:var(--ink);text-decoration:none;border-bottom:1px solid var(--ink);transition:color 0.2s" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--ink)'">${a.author}</a> · <i class="bi bi-calendar me-1"></i>${a.date} · <span style="color:var(--red)">${CAT_LABELS[a.cat]||a.cat}</span></div>
    ${a.body.split('\n\n').map(p=>`<p>${p}</p>`).join('')}`;
  new bootstrap.Modal(document.getElementById('articleModal')).show();
}

function shareArticle(){navigator.clipboard?.writeText(window.location.href);showToast('Ссылка скопирована!');}

function initWeather(){
  const w=[{temp:-3,desc:'Облачно',icon:'bi-clouds-fill'},{temp:2,desc:'Снегопад',icon:'bi-cloud-snow-fill'},{temp:8,desc:'Переменная облачность',icon:'bi-cloud-sun-fill'}][Math.floor(Math.random()*3)];
  document.getElementById('weatherTemp').textContent=`${w.temp}°C`;
  document.getElementById('weatherDesc').textContent=w.desc;
  document.querySelector('.weather-icon i').className=`bi ${w.icon}`;
}

function subscribe(){
  const v=document.getElementById('emailInput').value.trim();
  if(!v||!v.includes('@')){showToast('Введите корректный email');return;}
  document.getElementById('emailInput').value='';
  showToast('Вы успешно подписаны!');
}

function showToast(msg){
  document.getElementById('toastMsg').textContent=msg;
  new bootstrap.Toast(document.getElementById('liveToast'),{delay:2500}).show();
}

function toggleNav(){
  const c=document.getElementById('navCollapse');
  c.classList.toggle('open');
  document.getElementById('navChevron').className=c.classList.contains('open')?'bi bi-chevron-up':'bi bi-chevron-down';
}

function setCat(el,cat){
  document.querySelectorAll('.cat-strip-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  currentCat=cat;currentPage=1;searchQuery='';
  document.getElementById('searchInput').value='';
  document.querySelectorAll('#mainNav .nav-link').forEach(l=>l.classList.toggle('active',l.dataset.cat===cat));
  renderGrid();window.scrollTo({top:0,behavior:'smooth'});
}

function setCatMobile(cat){
  currentCat=cat;currentPage=1;searchQuery='';
  document.getElementById('searchInput').value='';
  document.querySelectorAll('#mainNav .nav-link').forEach(l=>l.classList.toggle('active',l.dataset.cat===cat));
  document.querySelectorAll('.cat-strip-btn').forEach(b=>b.classList.remove('active'));
  renderGrid();window.scrollTo({top:0,behavior:'smooth'});
  document.querySelectorAll('.mobile-bottom-nav a').forEach(a=>a.classList.remove('active'));
  const btn=document.getElementById('btn-'+cat);
  if(btn)btn.classList.add('active');
}

function focusSearch(){
  const input=document.getElementById('searchInput');
  input.scrollIntoView({behavior:'smooth',block:'center'});
  setTimeout(()=>input.focus(),400);
}

// ==================== NEW FEATURES ====================

// Back to top button
window.addEventListener('scroll', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
  
  // Update reading progress bar
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (window.scrollY / totalHeight) * 100;
  document.getElementById('readingBar').style.width = scrollPercent + '%';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create back to top button
function createBackToTopButton() {
  if (document.querySelector('.back-to-top')) return;
  const button = document.createElement('button');
  button.className = 'back-to-top';
  button.innerHTML = '<i class="bi bi-arrow-up"></i>';
  button.onclick = scrollToTop;
  document.body.appendChild(button);
}

// Create subscription banner
function createSubscriptionBanner() {
  const banner = document.querySelector('.subscription-banner');
  if (!banner) {
    const mainContent = document.querySelector('main .row');
    if (mainContent) {
      const bannerHtml = `
        <div class="col-12 subscription-banner fade-in-up" style="margin-top: 30px;">
          <h4>Подпишитесь на новости</h4>
          <p>Получайте самые важные статьи прямо на почту</p>
          <div class="subscription-form">
            <input type="email" placeholder="Ваш email" required>
            <button onclick="subscribeNewsletter(this)">Подписаться</button>
          </div>
        </div>
      `;
      mainContent.insertAdjacentHTML('afterbegin', bannerHtml);
    }
  }
}

function subscribeNewsletter(btn) {
  const email = btn.parentElement.querySelector('input').value;
  if (!email) {
    showToast('Пожалуйста, введите email');
    return;
  }
  showToast('✓ Спасибо! Проверьте почту для подтверждения подписки');
  btn.parentElement.querySelector('input').value = '';
  
  // Save to localStorage
  let subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
  if (!subscribers.includes(email)) {
    subscribers.push(email);
    localStorage.setItem('subscribers', JSON.stringify(subscribers));
  }
}

// Toast notifications
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInUp 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Share button functionality
function shareArticle(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;
  
  const shareUrl = window.location.href;
  const shareText = `Посмотри: "${article.title}" на ВЕСТНИК`;
  
  if (navigator.share) {
    navigator.share({
      title: 'ВЕСТНИК',
      text: shareText,
      url: shareUrl
    });
  } else {
    copyToClipboard(shareUrl);
    showToast('✓ Ссылка скопирована в буфер обмена');
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// Share to social media
function shareToSocial(platform, articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;
  
  const text = encodeURIComponent(article.title);
  const url = encodeURIComponent(window.location.href);
  
  let shareUrl = '';
  
  switch(platform) {
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      break;
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      break;
    case 'telegram':
      shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
      break;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

// Calculate reading time
function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes < 1 ? '< 1 мин' : `${minutes} мин`;
}

// Dark mode toggle
function initDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  }
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  showToast(isDarkMode ? '🌙 Тёмный режим включен' : '☀️ Светлый режим включен');
}

// Analytics tracking
function trackArticleView(articleId) {
  let views = JSON.parse(localStorage.getItem('articleViews') || '{}');
  views[articleId] = (views[articleId] || 0) + 1;
  localStorage.setItem('articleViews', JSON.stringify(views));
}

// Initialize features on page load
document.addEventListener('DOMContentLoaded', () => {
  createBackToTopButton();
  createSubscriptionBanner();
  initDarkMode();
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.querySelector('.modal.show');
      if (modal) {
        bootstrap.Modal.getInstance(modal)?.hide();
      }
    }
  });
});

// Utility: Format numbers
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

// Print article
function printArticle(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${article.title}</title>
      <style>
        body { font-family: serif; line-height: 1.6; max-width: 800px; margin: 40px; }
        h1 { font-size: 28px; margin-bottom: 10px; }
        .meta { color: #666; margin-bottom: 20px; }
        p { margin-bottom: 15px; }
      </style>
    </head>
    <body>
      <h1>${article.title}</h1>
      <div class="meta">
        <p><strong>Автор:</strong> ${article.author}</p>
        <p><strong>Дата:</strong> ${article.date}</p>
        <p><strong>Рубрика:</strong> ${CAT_LABELS[article.cat]}</p>
      </div>
      <p>${article.body.replace(/\n/g, '</p><p>')}</p>
      <hr>
      <p style="color: #999; font-size: 12px;">Источник: ВЕСТНИК (https://example.com)</p>
    </body>
    </html>
  `);
  printWindow.document.close();
  setTimeout(() => printWindow.print(), 250);
}

// Initialize 3D tilt on cards (mouse) and touch fallback
function initCardTilt(){
  document.querySelectorAll('.news-card').forEach(card=>{
    const inner = card.querySelector('.card-inner');
    if(!inner) return;
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rx = ( -y * 8).toFixed(2);
      const ry = ( x * 10).toFixed(2);
      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    });
    card.addEventListener('mouseleave', ()=>{ inner.style.transform = 'rotateX(0deg) rotateY(0deg)'; });
    // touch: simple press scale
    card.addEventListener('touchstart', ()=>{ inner.style.transform = 'scale(1.02)'; });
    card.addEventListener('touchend', ()=>{ inner.style.transform = 'scale(1)'; });
  });
}

// Parallax for hero image on scroll
function initHeroParallax(){
  const heroImg = document.querySelector('.hero-image');
  if(!heroImg) return;
  window.addEventListener('scroll', ()=>{
    const rect = heroImg.getBoundingClientRect();
    const mid = window.innerHeight/2;
    const offset = (rect.top - mid) * -0.02; // gentle
    heroImg.style.transform = `translateY(${offset}px) scale(1.02)`;
  });
}