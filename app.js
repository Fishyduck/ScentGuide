'use strict';

const fragrances = [
  {id:0,name:'Lacoste Noir',image:'images/lacsote-noir.png',time:['Evening'],seasons:['Summer'],occasions:['Casual','Date','Outdoor'],temp:[75,null],rating:4.4,notes:['Watermelon','Basil','Lavender','Dark Chocolate','Cashmeran'],profile:{fresh:4,fruity:4,green:2,woody:2,sweet:2},description:'Fresh, subtly sweet, and built for warm evenings.'},
  {id:1,name:'Versace Eros Flame',image:'images/versace-eros-flame.png',time:['Evening','Night'],seasons:['Fall','Winter'],occasions:['Date','Night Out','Club'],temp:[null,60],rating:4.8,notes:['Spicy','Woody','Amber'],profile:{spicy:5,woody:4,amber:4,sweet:2},description:'Bold spicy amber with a strong cold-weather presence.'},
  {id:2,name:'Versace Eros Energy',image:'images/versace-eros-energy.png',time:['Morning','Daytime'],seasons:['Spring','Summer'],occasions:['Casual','Office','Gym'],temp:[60,null],rating:4.5,notes:['Citrus','Mint','Woody'],profile:{citrus:5,fresh:5,green:2,woody:2},description:'Bright, energetic, and easy for daily wear.'},
  {id:3,name:'Crown by Peter Millar',image:'images/crown-peter-millar.png',time:['Evening'],seasons:['Fall','Winter'],occasions:['Formal','Office','Date'],temp:[45,60],rating:4.7,notes:['Woody','Spicy','Amber'],profile:{woody:5,spicy:3,amber:3,clean:2},description:'Polished woody warmth for formal and business settings.'},
  {id:4,name:'Polo Ralph Lauren est. 67 Blue',image:'images/polo-rl-blue.png',time:['Daytime'],seasons:['Spring','Summer'],occasions:['Casual','Office'],temp:[60,null],rating:4.4,notes:['Citrus','Aquatic','Musk'],profile:{citrus:4,marine:3,fresh:4,musk:2},description:'Clean, bright, and casual with aquatic freshness.'},
  {id:5,name:'Dolce & Gabbana Light Blue',image:'images/dg-light-blue.png',time:['Daytime'],seasons:['Spring','Summer'],occasions:['Beach','Casual','Brunch'],temp:[75,null],rating:4.6,notes:['Citrus','Apple','Cedar'],profile:{citrus:5,fresh:5,fruity:3,woody:2,marine:2},description:'Crisp summer citrus with light woods.'},
  {id:6,name:'Bleu de Chanel',image:'images/bleu-de-chanel.png',time:['Morning','Daytime','Evening','Night'],seasons:['Spring','Summer','Fall','Winter'],occasions:['Office','Formal','Date','Casual'],temp:[null,null],rating:4.9,notes:['Citrus','Woody','Aromatic'],profile:{citrus:3,woody:5,aromatic:3,amber:2,musk:3,fresh:3},description:'The most versatile blue woody aromatic profile.'},
  {id:7,name:'Burberry Brit',image:'images/burberry-brit.png',time:['Daytime','Evening'],seasons:['Fall','Winter'],occasions:['Casual','Office'],temp:[null,60],rating:4.3,notes:['Spicy','Woody','Sweet'],profile:{spicy:3,woody:3,sweet:3,warm:3},description:'Cozy, wearable, and comforting in cool weather.'},
  {id:8,name:"Tom Ford Fougere d'Argent",image:'images/tf-fougere-argent.png',time:['Daytime','Evening'],seasons:['Spring','Fall'],occasions:['Office','Formal','Cocktail'],temp:[50,65],rating:4.6,notes:['Lavender','Mandarin','Woody'],profile:{aromatic:5,lavender:4,woody:4,citrus:2,spicy:2},description:'Refined aromatic woods with a luxury barbershop feel.'},
  {id:9,name:'Gucci Guilty Elixir',image:'images/gucci-guilty-elixir.png',time:['Night'],seasons:['Fall','Winter'],occasions:['Date','Club','Night Out'],temp:[null,60],rating:4.7,notes:['Spicy','Sweet','Amber'],profile:{spicy:4,sweet:4,amber:5,warm:4},description:'Dense, seductive, and built for nights out.'},
  {id:10,name:'Dolce & Gabbana The One',image:'images/dg-the-one.png',time:['Evening'],seasons:['Fall','Spring'],occasions:['Date','Formal','Dinner'],temp:[55,65],rating:4.5,notes:['Spicy','Tobacco','Amber'],profile:{spicy:3,warm:4,amber:4,sweet:2,woody:2},description:'Warm intimate amber spice for close-range evenings.'}
];

const oils = [
  {id:'black-velvet',name:'Black Velvet',type:'Fragrance Oil',level:'Base',family:'Dark Accord',strength:5,longevity:5,projection:4,volatility:1,sweetness:3,freshness:0,woodiness:1,warmth:4,profile:{dark:5,boozy:5,fruity:3,sweet:2,warm:3},vibe:['dark','boozy','wine-like','niche'],seasons:['Fall','Winter'],occasions:['Night','Date'],usage:[0.2,3],description:'Deep, dark, slightly sweet, wine-like fermented fruit. Very strong and easy to overuse.',source:"Nature's Oil"},
  {id:'sandalwood-vanilla',name:'Sandalwood Vanilla',type:'Fragrance Oil',level:'Base',family:'Woods / Gourmand',strength:3.5,longevity:4,projection:2.5,volatility:1.5,sweetness:4,freshness:0,woodiness:4,warmth:4,profile:{woody:4,vanilla:4,creamy:4,sweet:3,warm:4},vibe:['creamy','soft','smooth'],seasons:['Fall','Winter'],occasions:['Date','Casual'],usage:[2,12],description:'Creamy soft wood with smooth vanilla sweetness. Rounds sharp edges.',source:"Nature's Oil"},
  {id:'sea-salt',name:'Sea Salt',type:'Fragrance Oil',level:'Modifier',family:'Marine / Fresh',strength:2,longevity:2,projection:3,volatility:4,sweetness:0,freshness:5,woodiness:0,warmth:0,profile:{marine:5,fresh:5,mineral:4,clean:3},vibe:['airy','watery','mineral','modern'],seasons:['Spring','Summer'],occasions:['Office','Casual','Daytime'],usage:[1,10],description:'Clean, airy, watery mineral freshness. Adds space without citrus.',source:"Nature's Oil"},
  {id:'arabian-white-musk',name:'Arabian White Musk',type:'Fragrance Oil',level:'Base',family:'Musk',strength:3,longevity:4.5,projection:2.5,volatility:1,sweetness:1,freshness:3,woodiness:0,warmth:1,profile:{musk:5,clean:5,powdery:2,soft:4},vibe:['clean','soapy','skin-like'],seasons:['Spring','Summer','Fall','Winter'],occasions:['Office','Casual','Formal'],usage:[3,18],description:'Clean, soapy, slightly powdery musk that smooths and extends formulas.',source:"Nature's Oil"},
  {id:'sandalwood-bourbon',name:'Sandalwood Bourbon HRC',type:'Fragrance Oil',level:'Base',family:'Woods',strength:3,longevity:4,projection:2.5,volatility:1.5,sweetness:1, freshness:0,woodiness:5,warmth:3,profile:{woody:5,dry:3,warm:2,masculine:3},vibe:['dark wood','masculine','rich'],seasons:['Fall','Winter'],occasions:['Formal','Date'],usage:[2,15],description:'Darker, richer sandalwood with warmth and masculine depth.',source:"Nature's Oil"},
  {id:'sandalwood-amber',name:'Sandalwood & Amber',type:'Fragrance Oil',level:'Base',family:'Amber Woods',strength:4,longevity:5,projection:3.5,volatility:1,sweetness:3,freshness:0,woodiness:4,warmth:5,profile:{woody:4,amber:5,resinous:3,warm:5,sweet:2},vibe:['warm','resinous','rich'],seasons:['Fall','Winter'],occasions:['Date','Night','Formal'],usage:[1,10],description:'Warm resinous wood. Adds richness and longevity quickly.',source:"Nature's Oil"},
  {id:'lemon-sugar',name:'Lemon Sugar',type:'Fragrance Oil',level:'Top',family:'Sweet Citrus',strength:5,longevity:2,projection:4,volatility:5,sweetness:5,freshness:4,woodiness:0,warmth:1,profile:{citrus:5,sweet:5,fresh:3,gourmand:3},vibe:['bright','sweet','playful'],seasons:['Spring','Summer'],occasions:['Casual','Daytime'],usage:[0.5,5],description:'Extremely sweet bright citrus. Too much can smell cheap quickly.',source:"Nature's Oil"},
  {id:'amazing-grace',name:'Amazing Grace',type:'Fragrance Oil',level:'Mid',family:'Clean Floral',strength:2.5,longevity:3,projection:2.5,volatility:3,sweetness:1,freshness:4,woodiness:0,warmth:0,profile:{floral:4,clean:5,airy:4,soft:3},vibe:['clean','airy','soft floral'],seasons:['Spring','Summer'],occasions:['Office','Casual'],usage:[2,14],description:'Light airy clean floral that softens harsh edges.',source:"Nature's Oil"},
  {id:'oakmoss',name:'Oakmoss',type:'Fragrance Oil',level:'Base',family:'Moss / Green',strength:4.5,longevity:5,projection:3,volatility:1,sweetness:0,freshness:1,woodiness:3,warmth:1,profile:{mossy:5,green:4,earthy:5,woody:2,dark:2},vibe:['earthy','green','forest','masculine'],seasons:['Fall','Winter','Spring'],occasions:['Formal','Outdoor','Date'],usage:[0.2,4],description:'Very strong earthy green forest depth. Grounds fresh scents.',source:"Nature's Oil"},
  {id:'cedarwood-sage',name:'Cedarwood Sage',type:'Fragrance Oil',level:'Mid',family:'Woody Aromatic',strength:3.75,longevity:3.5,projection:3,volatility:2.5,sweetness:0,freshness:2,woodiness:4,warmth:1,profile:{woody:4,aromatic:4,herbal:3,dry:3,clean:2},vibe:['dry wood','herbal','structured'],seasons:['Spring','Fall','Winter'],occasions:['Office','Formal','Casual'],usage:[2,12],description:'Versatile backbone note that bridges fresh and woody materials.',source:"Nature's Oil"},
  {id:'cherry-blossoms',name:'Cherry Blossoms',type:'Essential Oil',level:'Mid',family:'Soft Floral',strength:2.5,longevity:2.5,projection:2,volatility:3,sweetness:2,freshness:2,woodiness:0,warmth:0,profile:{floral:4,soft:4,sweet:2,airy:3},vibe:['delicate','airy','slightly sweet'],seasons:['Spring','Summer'],occasions:['Casual','Date'],usage:[1,8],description:'Soft delicate floral. Keep balanced to avoid a synthetic effect.',source:'SALKING'},
  {id:'bergamot',name:'Bergamot',type:'Essential Oil',level:'Top',family:'Citrus',strength:3,longevity:1.5,projection:3.5,volatility:5,sweetness:1,freshness:5,woodiness:0,warmth:0,profile:{citrus:5,fresh:5,bitter:2,zesty:4},vibe:['bright','fresh','zesty'],seasons:['Spring','Summer'],occasions:['Office','Casual','Daytime'],usage:[2,12],description:'Bright slightly bitter citrus. Volatile and excellent for freshness.',source:'Handcraft Blends'},
  {id:'lavender',name:'Lavender',type:'Essential Oil',level:'Top/Mid',family:'Aromatic Floral',strength:3.5,longevity:3,projection:3,volatility:3.5,sweetness:1,freshness:3,woodiness:0,warmth:0,profile:{lavender:5,aromatic:5,herbal:3,floral:2,clean:2},vibe:['barbershop','herbal','aromatic'],seasons:['Spring','Fall'],occasions:['Office','Formal','Casual'],usage:[0.5,6],description:'Aromatic herbal floral bridge. Can become sharp or medicinal.',source:'Handcraft Blends'},
  {id:'cardamom',name:'Cardamom',type:'Essential Oil',level:'Mid',family:'Spice',strength:4,longevity:3.5,projection:3.5,volatility:2.5,sweetness:2,freshness:1,woodiness:0,warmth:4,profile:{spicy:5,warm:4,aromatic:3,sweet:1},vibe:['warm','masculine','exotic'],seasons:['Fall','Winter'],occasions:['Date','Night','Formal'],usage:[0.2,4],description:'Warm spicy aromatic. Very powerful and masculine.',source:'Gya Labs'},
  {id:'hedione',name:'Hedione',type:'Aroma Chemical',level:'Mid',family:'Diffusive Floral',strength:2,longevity:3,projection:5,volatility:3,sweetness:0,freshness:3,woodiness:0,warmth:0,profile:{airy:5,floral:2,jasmine:2,fresh:3,clean:3},vibe:['airy','expensive','radiant'],seasons:['Spring','Summer'],occasions:['Office','Formal','Casual'],usage:[5,25],description:'Projection booster with airy jasmine-like freshness. Hard to overuse.',source:'Mystic Moments'},
  {id:'yuzu',name:'Yuzu Blend',type:'Essential Oil',level:'Top',family:'Premium Citrus',strength:4.5,longevity:2,projection:4.5,volatility:5,sweetness:2,freshness:5,woodiness:0,warmth:0,profile:{citrus:5,fresh:5,zesty:5,sparkling:4,fruity:2},vibe:['sparkling','premium Japanese citrus','sunny'],seasons:['Spring','Summer'],occasions:['Office','Casual','Daytime'],usage:[1,7],description:'Bright sparkling Japanese citrus blend. High impact and premium.',source:'@aroma'},
  {id:'kinmokusei',name:'KEIRIN KINMOKUSEI',type:'Essential Oil Blend',level:'Mid',family:'Fruity Floral',strength:3.5,longevity:3.5,projection:3,volatility:3,sweetness:3,freshness:2,woodiness:0,warmth:2,profile:{floral:4,fruity:4,apricot:4,green:2,citrus:1},vibe:['nostalgic','elegant','sunny garden'],seasons:['Spring','Summer','Fall'],occasions:['Date','Casual','Daytime'],usage:[1,10],description:'Golden fruity floral with apricot-peach and rosy green facets.',source:'@aroma'},
  {id:'eucalyptus-lavender',name:'Eucalyptus Lavender',type:'Essential Oil Blend',level:'Mid',family:'Herbal Spa',strength:4,longevity:3,projection:4,volatility:3.5,sweetness:0,freshness:5,woodiness:0,warmth:0,profile:{herbal:5,clean:4,aromatic:4,fresh:5,lavender:3},vibe:['clean','calming','spa','fresh forest'],seasons:['Spring','Summer'],occasions:['Casual','Spa','Daytime'],usage:[0.5,6],description:'Fresh camphorous herbal spa accord. Can become medicinal if overused.',source:'@aroma'},
  {id:'iso-e-super',name:'Iso E Super',type:'Aroma Chemical',level:'Base',family:'Woody Amber',strength:3.5,longevity:4,projection:5,volatility:2,sweetness:0,freshness:1,woodiness:5,warmth:2,profile:{woody:5,amber:3,velvety:4,modern:4,clean:2},vibe:['velvety','modern','radiant'],seasons:['Spring','Summer','Fall','Winter'],occasions:['Office','Formal','Date','Casual'],usage:[5,30],description:'Modern woody-amber diffusion booster. Adds volume and radiance.',source:'Mystic Moments'},
  {id:'goodnight-blend',name:'Goodnight Blend',type:'Essential Blend',level:'Base',family:'Woody Resin',strength:3.5,longevity:4,projection:2.5,volatility:2,sweetness:1,freshness:1,woodiness:4,warmth:4,profile:{woody:4,earthy:3,resinous:3,citrus:1,calm:4},vibe:['forest spa','warm','relaxing'],seasons:['Fall','Winter'],occasions:['Evening','Casual'],usage:[2,12],description:'Warm woody earthy relaxing blend with orange, frankincense, sandalwood, chamomile, vetiver, cedarwood, and geranium.',source:'Saje'},
  {id:'unwind-blend',name:'Unwind Blend',type:'Essential Blend',level:'Top/Mid',family:'Citrus Aromatic Spice',strength:3.5,longevity:2.5,projection:3,volatility:4,sweetness:2,freshness:4,woodiness:0,warmth:2,profile:{citrus:4,aromatic:3,lavender:2,spicy:2,fresh:3},vibe:['bright','relaxed','soft spicy'],seasons:['Spring','Summer','Fall'],occasions:['Casual','Daytime'],usage:[1,8],description:'Orange, bergamot, lavender, geranium, and cinnamon blend. Fresh with light warmth.',source:'Saje'},
  {id:'alcohol-190',name:'Alcohol 190 SDA40B',type:'Alcohol',level:'Support',family:'Carrier',strength:0,longevity:0,projection:0,volatility:5,sweetness:0,freshness:0,woodiness:0,warmth:0,profile:{},vibe:['carrier'],seasons:[],occasions:[],usage:[70,95],description:'Perfumer alcohol carrier. Not counted as scent material.',source:'N/A'},
  {id:'alcohol-200',name:'Alcohol 200 SDA40B',type:'Alcohol',level:'Support',family:'Carrier',strength:0,longevity:0,projection:0,volatility:5,sweetness:0,freshness:0,woodiness:0,warmth:0,profile:{},vibe:['carrier'],seasons:[],occasions:[],usage:[70,95],description:'Perfumer alcohol carrier. Not counted as scent material.',source:'N/A'},
  {id:'triethyl-citrate',name:'Triethyl Citrate',type:'Aroma Chemical',level:'Performance',family:'Fixative / Solvent',strength:0,longevity:4.5,projection:0.5,volatility:0.5,sweetness:0,freshness:0,woodiness:0,warmth:0,profile:{fixative:5,smooth:2},vibe:['fixative','longevity','smooth'],seasons:['Spring','Summer','Fall','Winter'],occasions:['Office','Casual','Formal','Date'],usage:[1,15],description:'Fixative/solvent that slows evaporation and can improve skin longevity. Too much may soften projection.',source:'N/A'}
];

const similarProfiles = [
  {name:'Bleu de Chanel',style:'Blue Woody Aromatic',profile:{citrus:3,woody:5,aromatic:3,amber:2,musk:3,fresh:3,clean:2}},
  {name:'D&G Light Blue',style:'Fresh Citrus Marine',profile:{citrus:5,fresh:5,marine:3,woody:2,fruity:2}},
  {name:"Tom Ford Fougere d'Argent",style:'Luxury Aromatic Fougere',profile:{lavender:4,aromatic:5,woody:4,spicy:2,citrus:2}},
  {name:'Versace Eros Energy',style:'Bright Designer Citrus',profile:{citrus:5,fresh:5,zesty:4,woody:2,green:1}},
  {name:'Gucci Guilty Elixir',style:'Sweet Amber Night Scent',profile:{amber:5,sweet:4,spicy:4,warm:4,dark:2}},
  {name:'Luxury Hotel Lobby',style:'Clean Musky Woods',profile:{clean:5,musk:4,woody:3,airy:3,amber:2}},
  {name:'Niche Dark Amber',style:'Dark Boozy Woods',profile:{dark:5,boozy:4,amber:4,woody:3,warm:4}}
];

let activePage = 'guide';
let activeFilters = {time:[],season:[],occasion:[]};
let searchQuery = '';
let customTemp = 70;
let tempFilterActive = false;
let weatherData = null;
let currentFormula = [];
let oilConcentration = 15;
let libraryFilter = 'all';
let oilSearch = '';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const scentOils = () => oils.filter(o => !['Support'].includes(o.level));
const clamp = (n,min,max) => Math.max(min,Math.min(max,n));
const round = (n,d=1) => Number(n.toFixed(d));

function init(){
  initTheme();
  initNavigation();
  initWearGuide();
  initCreator();
  initLibrary();
  renderAll();
  updateStickyOffsets();
  window.addEventListener('resize', updateStickyOffsets);
  window.addEventListener('scroll', updateStickyOffsets, {passive:true});
  getWeather();
  if('serviceWorker' in navigator){navigator.serviceWorker.register('./service-worker.js').catch(()=>{});}
}

function initTheme(){
  const saved = localStorage.getItem('fragranceLabTheme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  $('.theme-toggle').addEventListener('click',()=>{
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fragranceLabTheme', next);
  });
}

function initNavigation(){
  $$('.nav-btn').forEach(btn=>btn.addEventListener('click',()=>{
    activePage = btn.dataset.page;
    $$('.nav-btn').forEach(b=>b.classList.toggle('active', b === btn));
    $$('.page').forEach(p=>p.classList.toggle('active', p.id === `page-${activePage}`));
    updateStickyOffsets();
  }));
}

function initWearGuide(){
  $('#fragrance-search').addEventListener('input',e=>{searchQuery=e.target.value.toLowerCase();renderWearGuide();});
  $$('.filters-panel .pill-row').forEach(row=>{
    row.addEventListener('click',e=>{
      const btn = e.target.closest('.pill'); if(!btn) return;
      const type = row.dataset.filterType; const value = btn.dataset.value;
      btn.classList.toggle('active');
      activeFilters[type] = btn.classList.contains('active') ? [...activeFilters[type], value] : activeFilters[type].filter(v=>v!==value);
      renderWearGuide();
    });
  });
  $('#temp-slider').addEventListener('input',e=>{tempFilterActive=true;customTemp=Number(e.target.value);$('#temp-slider-value').textContent=`${customTemp}°F`;const note=$('#temp-filter-note');if(note)note.textContent='Filtering by selected temperature.';renderWearGuide();});
  $('#clear-filters').addEventListener('click',()=>{
    activeFilters={time:[],season:[],occasion:[]}; searchQuery=''; customTemp=weatherData?.temp || 70; tempFilterActive=false;
    $('#fragrance-search').value=''; $('#temp-slider').value=clamp(customTemp,40,100); $('#temp-slider-value').textContent=`${clamp(customTemp,40,100)}°F`; $('#temp-filter-note').textContent='Temperature is not filtering until you move the slider.';
    $$('.filters-panel .pill').forEach(p=>p.classList.remove('active'));
    renderWearGuide();
  });
}

function initCreator(){
  renderMaterialPicker();
  $('#material-picker').addEventListener('click', e => {
    const groupBtn = e.target.closest('[data-toggle-material-group]');
    if(groupBtn){
      const group = groupBtn.closest('.material-group');
      const list = group?.querySelector('.material-list');
      const expanded = groupBtn.getAttribute('aria-expanded') === 'true';
      groupBtn.setAttribute('aria-expanded', String(!expanded));
      group?.classList.toggle('collapsed', expanded);
      if(list) list.hidden = expanded;
      return;
    }
    const btn = e.target.closest('[data-add-oil]');
    if(!btn) return;
    const id = btn.dataset.addOil;
    const input = $(`[data-oil-percent="${id}"]`);
    addSelectedOil(id, Number(input?.value || 0));
  });
  $('#material-picker').addEventListener('keydown', e => {
    if(e.key !== 'Enter') return;
    const input = e.target.closest('[data-oil-percent]');
    if(!input) return;
    addSelectedOil(input.dataset.oilPercent, Number(input.value || 0));
  });
  $('#reset-formula').addEventListener('click',()=>{currentFormula=[];renderCreator();});
  const concentrationInput = $('#oil-concentration');
  if(concentrationInput){
    concentrationInput.addEventListener('input', e=>{
      oilConcentration = clamp(Number(e.target.value)||0, 1, 40);
      e.target.value = oilConcentration;
      renderCreator();
    });
  }
  $$('.preset-btn').forEach(btn=>btn.addEventListener('click',()=>loadPreset(btn.dataset.preset)));
}

function materialGroup(o){
  if(o.level === 'Performance' || o.id === 'triethyl-citrate') return 'Performance Modifiers';
  if(o.level === 'Top') return 'Top Notes';
  if(o.level === 'Mid' || o.level === 'Top/Mid') return 'Heart Notes';
  if(o.level === 'Base') return 'Base Notes';
  return 'Modifiers';
}

function renderMaterialPicker(){
  const groups = ['Top Notes','Heart Notes','Base Notes','Performance Modifiers','Modifiers'];
  const picker = $('#material-picker');
  picker.innerHTML = groups.map(group => {
    const items = scentOils().filter(o => materialGroup(o) === group);
    if(!items.length) return '';
    const isOpen = group === 'Top Notes';
    return `<section class="material-group ${isOpen ? '' : 'collapsed'}">
      <button class="material-group-title" type="button" aria-expanded="${isOpen}" data-toggle-material-group>
        <span>${group}</span>
        <span class="material-title-meta"><small>${items.length}</small><span class="chevron" aria-hidden="true">⌄</span></span>
      </button>
      <div class="material-list" ${isOpen ? '' : 'hidden'}>
        ${items.map(o => materialTile(o)).join('')}
      </div>
    </section>`;
  }).join('');
}

function materialTile(o){
  const suggested = Math.min(Math.max((o.usage?.[0] || 1), 1), 8);
  const bridge = o.level.includes('/') ? `<span class="note-badge">${o.level}</span>` : '';
  return `<article class="material-tile">
    ${bridge}
    <div class="material-main">
      <strong>${o.name}</strong>
      <span>${o.family}</span>
    </div>
    <label class="compact-percent" aria-label="${o.name} percentage">
      <input type="number" min="0.1" max="100" step="0.1" value="${suggested}" data-oil-percent="${o.id}">
      <span>%</span>
    </label>
    <button class="add-chip" type="button" data-add-oil="${o.id}">Add</button>
  </article>`;
}

function initLibrary(){
  $('#oil-search').addEventListener('input',e=>{oilSearch=e.target.value.toLowerCase();renderLibrary();});
  $('.library-tabs').addEventListener('click',e=>{
    const btn = e.target.closest('.pill'); if(!btn) return;
    libraryFilter = btn.dataset.filter;
    $$('.library-tabs .pill').forEach(p=>p.classList.toggle('active',p===btn));
    renderLibrary();
  });
}

function renderAll(){renderWearGuide();renderCreator();renderLibrary();}

function currentContext(){
  const h = new Date().getHours();
  const time = h < 12 ? 'Morning' : h < 17 ? 'Daytime' : h < 20 ? 'Evening' : 'Night';
  const m = new Date().getMonth()+1;
  const season = [12,1,2].includes(m) ? 'Winter' : [3,4,5].includes(m) ? 'Spring' : [6,7,8].includes(m) ? 'Summer' : 'Fall';
  return {time,season,temp: tempFilterActive ? customTemp : (weatherData?.temp || customTemp)};
}

function scoreFragrance(f){
  const ctx = currentContext(); let score = 0;
  if(f.time.includes(ctx.time)) score += 35; else if(f.time.length === 4) score += 30; else if((ctx.time==='Daytime' && f.time.includes('Morning')) || (ctx.time==='Evening' && f.time.includes('Night'))) score += 12;
  if(f.seasons.includes(ctx.season)) score += 25; else if(f.seasons.length === 4) score += 20;
  const [min,max] = f.temp;
  if(min===null && max===null) score += 25;
  else if((min===null || ctx.temp>=min) && (max===null || ctx.temp<=max)) score += 25;
  else if((min!==null && ctx.temp>=min-5) || (max!==null && ctx.temp<=max+5)) score += 10;
  score += Math.round(f.rating * 3);
  return clamp(score,0,100);
}

function matchesFilters(f){
  if(searchQuery){
    const hay = [f.name,f.description,...f.notes,...f.occasions,...f.seasons,...Object.keys(f.profile)].join(' ').toLowerCase();
    if(!hay.includes(searchQuery)) return false;
  }
  if(activeFilters.time.length && !activeFilters.time.some(v=>f.time.includes(v) || (v==='Daytime' && f.time.includes('Morning')))) return false;
  if(activeFilters.season.length && !activeFilters.season.some(v=>f.seasons.includes(v))) return false;
  if(activeFilters.occasion.length && !activeFilters.occasion.some(v=>f.occasions.includes(v))) return false;
  const [min,max] = f.temp;
  if(tempFilterActive && !((min===null || customTemp>=min) && (max===null || customTemp<=max))) return false;
  return true;
}

function renderWearGuide(){
  const list = fragrances.filter(matchesFilters).sort((a,b)=>scoreFragrance(b)-scoreFragrance(a));
  const best = list[0];
  $('#match-summary').innerHTML = best ? `<div class="summary-card"><div class="orb">${scoreFragrance(best)>=85?'💎':'🌿'}</div><div><strong>Best match right now: ${best.name}</strong><br><span class="muted">${currentContext().time} • ${currentContext().season} • ${currentContext().temp}°F</span></div><span class="score-pill">${scoreFragrance(best)}%</span></div>` : '';
  $('#fragrances').innerHTML = list.length ? list.map(f=>fragranceCard(f, f===best)).join('') : `<div class="empty-state">No fragrances match these filters.</div>`;
}

function fragranceCard(f,isBest){
  return `<article class="fragrance-card ${isBest?'recommend':''}">
    ${isBest?'<div class="match-badge">Best Match</div>':''}
    <img src="${f.image}" alt="${f.name}">
    <div class="card-body">
      <h3>${f.name}</h3>
      <div class="detail-list">
        <div><strong>Score:</strong> ${scoreFragrance(f)}%</div>
        <div><strong>Best Time:</strong> ${f.time.join(', ')}</div>
        <div><strong>Season:</strong> ${f.seasons.join(', ')}</div>
        <div><strong>Occasion:</strong> ${f.occasions.join(', ')}</div>
        <div><strong>Temperature:</strong> ${formatTemp(f.temp)}</div>
        <div><strong>Notes:</strong> ${f.notes.join(', ')}</div>
      </div>
      <p class="muted">${f.description}</p>
    </div>
  </article>`;
}

function formatTemp([min,max]){if(min===null&&max===null)return'Any'; if(min===null)return`Below ${max}°F`; if(max===null)return`Above ${min}°F`; return`${min}–${max}°F`;}

async function getMissionViejoWeather(){
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=33.60&longitude=-117.67&current_weather=true&timezone=auto');
  if(!res.ok) throw new Error('Mission Viejo weather failed');
  const data = await res.json();
  return Math.round(data.current_weather.temperature * 9 / 5 + 32);
}

function syncWeatherTemp(temp){
  weatherData = {temp, condition:'weather'};
  customTemp = temp;
  const sliderTemp = clamp(temp, 40, 100);
  $('#temp-slider').value = sliderTemp;
  $('#temp-slider-value').textContent = `${sliderTemp}°F`;
  const note = $('#temp-filter-note');
  if(note) note.textContent = tempFilterActive ? 'Filtering by selected temperature.' : 'Showing all colognes. Temperature is only used for match scores until you move the slider.';
}

async function useMissionViejoFallback(message='Location off'){
  const weather = $('#weather');
  try{
    const temp = await getMissionViejoWeather();
    syncWeatherTemp(temp);
    weather.textContent = `${message} — Mission Viejo: ${temp}°F`;
  }catch{
    weatherData = {temp:70, condition:'fallback'};
    customTemp = 70;
    $('#temp-slider').value = 70;
    $('#temp-slider-value').textContent = '70°F';
    weather.textContent = `${message} — using Mission Viejo default: 70°F`;
  }
  renderWearGuide();
}

async function getWeather(){
  const weather = $('#weather');
  weather.textContent = 'Loading weather…';
  if(!navigator.geolocation){
    await useMissionViejoFallback('No location access');
    return;
  }
  navigator.geolocation.getCurrentPosition(async pos=>{
    try{
      const {latitude,longitude}=pos.coords;
      const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`);
      if(!res.ok) throw new Error('Local weather failed');
      const data=await res.json();
      const temp=Math.round(data.current_weather.temperature*9/5+32);
      syncWeatherTemp(temp);
      weather.textContent=`Local Weather: ${temp}°F`;
      renderWearGuide();
    }catch{
      await useMissionViejoFallback('Weather unavailable');
    }
  },async ()=>{
    await useMissionViejoFallback('Location off');
  },{timeout:5000,maximumAge:300000});
}


function updateStickyOffsets(){
  const header = $('.site-header');
  const h = header ? Math.ceil(header.getBoundingClientRect().height) : 74;
  document.documentElement.style.setProperty('--sticky-offset', `${h + 14}px`);
}

function updateMaterialAvailability(total=formulaTotal()){
  const remaining = round(100 - total);
  $$('#material-picker [data-add-oil]').forEach(btn=>{
    const id = btn.dataset.addOil;
    const input = $(`[data-oil-percent="${id}"]`);
    const existing = currentFormula.find(x=>x.id===id);
    const allowed = existing ? round(100 - formulaTotal(id)) : remaining;
    const cap = Math.max(0, allowed);
    if(input){
      input.max = cap || 0;
      if(Number(input.value) > cap && cap > 0) input.value = cap;
    }
    btn.disabled = cap <= 0;
    btn.textContent = cap <= 0 ? 'Full' : 'Add';
  });
}

function formulaTotal(exceptId=null){
  return round(currentFormula.reduce((s,x)=>s+(x.id===exceptId?0:x.percent),0));
}

function addSelectedOil(id, pct){
  if(!id || !pct || pct<=0) return;
  const existing = currentFormula.find(x=>x.id===id);
  const othersTotal = formulaTotal(id);
  const remaining = round(100 - othersTotal - (existing ? existing.percent : 0));
  if(remaining <= 0) return;
  const addAmount = round(clamp(pct, 0.1, remaining));
  if(existing) existing.percent = round(existing.percent + addAmount);
  else currentFormula.push({id, percent:addAmount});
  renderCreator();
}

function loadPreset(name){
  const presets = {
    freshWoody:[['yuzu',7],['bergamot',6],['sea-salt',5],['hedione',14],['cedarwood-sage',8],['iso-e-super',18],['arabian-white-musk',10]],
    darkAmber:[['black-velvet',1],['cardamom',2],['sandalwood-amber',10],['sandalwood-bourbon',8],['iso-e-super',15],['arabian-white-musk',8],['oakmoss',1.5]],
    cleanOffice:[['bergamot',5],['sea-salt',6],['amazing-grace',8],['hedione',16],['cedarwood-sage',6],['arabian-white-musk',14],['iso-e-super',12]]
  };
  currentFormula = presets[name].map(([id,percent])=>({id,percent}));
  renderCreator();
}

function renderCreator(){
  const total = round(currentFormula.reduce((s,x)=>s+x.percent,0));
  const concentrationInput = $('#oil-concentration');
  if(concentrationInput && Number(concentrationInput.value)!==oilConcentration) concentrationInput.value = oilConcentration;
  $('#formula-total').textContent = `${total}%`;
  const help = $('#formula-total-help');
  if(help){
    const diff = round(100 - total);
    help.textContent = total === 0 ? 'Build to 100%.' : Math.abs(diff) <= 1 ? `Complete • ${oilConcentration}% oil spray.` : `${diff}% left`;
  }
  const sticker = $('.formula-sticker');
  if(sticker){
    sticker.classList.toggle('complete', total >= 99.9);
    sticker.classList.toggle('near-full', total >= 95 && total < 99.9);
  }
  updateMaterialAvailability(total);
  $('#selected-oils').classList.toggle('empty-state', currentFormula.length===0);
  $('#selected-oils').innerHTML = currentFormula.length ? currentFormula.map(row=>{
    const oil = oils.find(o=>o.id===row.id);
    return `<div class="selected-row"><div><h4>${oil.name}</h4><small>${oil.level} • ${oil.family}</small></div><label class="percent-field"><input class="text-input" type="number" min="0.1" max="100" step="0.1" value="${row.percent}" data-edit="${row.id}" aria-label="${oil.name} percentage"><span>%</span></label><button class="remove-btn" data-remove="${row.id}" aria-label="Remove ${oil.name}">×</button></div>`;
  }).join('') : 'No materials added yet.';
  $$('#selected-oils [data-edit]').forEach(inp=>inp.addEventListener('input',e=>{
    const item=currentFormula.find(x=>x.id===e.target.dataset.edit);
    const maxAllowed = round(100 - formulaTotal(item.id));
    item.percent = round(clamp(Number(e.target.value)||0, 0, maxAllowed));
    e.target.value = item.percent;
    renderCreator();
  }));
  $$('#selected-oils [data-remove]').forEach(btn=>btn.addEventListener('click',e=>{currentFormula=currentFormula.filter(x=>x.id!==e.target.dataset.remove);renderCreator();}));
  const analysis = analyzeFormula(currentFormula, oilConcentration);
  $('#formula-score').textContent = `${analysis.score} / 100`;
  $('#analysis-output').classList.toggle('empty-analysis', currentFormula.length===0);
  $('#analysis-output').innerHTML = currentFormula.length ? renderAnalysis(analysis) : 'Add materials to see the analysis.';
}

function analyzeFormula(formula, concentration=15){
  if(!formula.length) return {score:0};
  const enriched = formula.map(x=>({...x, oil:oils.find(o=>o.id===x.id)})).filter(x=>x.oil);
  const total = enriched.reduce((s,x)=>s+x.percent,0) || 1;
  const normalized = enriched.map(x=>({...x, weight:x.percent/total}));
  const buckets = {top:0,mid:0,base:0,modifier:0};
  normalized.forEach(x=>{
    const lvl=x.oil.level;
    if(lvl==='Top') buckets.top += x.percent; else if(lvl==='Mid') buckets.mid += x.percent; else if(lvl==='Base') buckets.base += x.percent; else if(lvl==='Top/Mid'){buckets.top+=x.percent*.45;buckets.mid+=x.percent*.55;} else if(lvl==='Modifier') buckets.modifier+=x.percent;
  });
  const scentTotal = buckets.top+buckets.mid+buckets.base+buckets.modifier || 1;
  Object.keys(buckets).forEach(k=>buckets[k]=round(buckets[k]/scentTotal*100));
  const avg = key => normalized.reduce((s,x)=>s+(x.oil[key]||0)*x.weight,0);
  const profile = {};
  normalized.forEach(x=>Object.entries(x.oil.profile||{}).forEach(([k,v])=>profile[k]=(profile[k]||0)+v*x.weight));
  const topProfiles = Object.entries(profile).sort((a,b)=>b[1]-a[1]).slice(0,6).map(([k])=>title(k));
  const longevityScore = avg('longevity');
  const projectionScore = avg('projection');
  const strengthScore = avg('strength');
  const sweetnessScore = avg('sweetness');
  const freshnessScore = avg('freshness');
  const warmScore = avg('warmth');
  const tecPercent = tecPercentInFormula(formula);
  const skinHours = hoursFromLongevity(longevityScore, buckets.base, false, concentration, tecPercent);
  const selfHours = hoursFromLongevity(longevityScore, buckets.base, true, concentration, tecPercent);
  const projectionHours = projectionWindow(projectionScore, buckets.top, buckets.base, concentration, tecPercent);
  const balance = balanceStatus(buckets);
  const warnings = buildWarnings(normalized,buckets,total,sweetnessScore,freshnessScore);
  const suggestions = buildSuggestions(buckets,warnings,profile);
  const similar = findSimilar(profile);
  const wear = inferWearability(profile,buckets,freshnessScore,warmScore);
  const score = formulaScore(buckets,total,warnings,similar[0]?.score || 0);
  return {total,concentration,buckets,profile,topProfiles,longevityScore,projectionScore,strengthScore,skinHours,selfHours,projectionHours,balance,warnings,suggestions,similar,wear,score,tecPercent};
}

function concentrationFactor(concentration){
  return clamp(0.65 + (concentration/15)*0.35, 0.7, 1.65);
}
function tecPercentInFormula(formula){
  const row = (formula || []).find(x => x.id === 'triethyl-citrate');
  return row ? Number(row.percent || 0) : 0;
}
function tecLongevityFactor(tec){
  if(!tec) return 1;
  if(tec <= 5) return 1 + tec * 0.035;
  return clamp(1.175 + Math.min(tec - 5, 10) * 0.025, 1, 1.45);
}
function tecProjectionFactor(tec){
  if(tec <= 12) return 1;
  return clamp(1 - Math.min((tec - 12) * 0.025, 0.25), 0.75, 1);
}
function hoursFromLongevity(score,base,self,concentration=15,tec=0){
  const factor = concentrationFactor(concentration) * tecLongevityFactor(tec);
  let low = (1.2 + score*1.15 + base/22) * factor; let high = low + (1.5 * factor);
  if(self){low*=.68; high*=.72;}
  return `${round(low,1)}–${round(high,1)} hrs`;
}
function projectionWindow(score,top,base,concentration=15,tec=0){let factor=concentrationFactor(concentration) * tecProjectionFactor(tec); let low=(.5+score*.42+top/85)*factor; let high=low+(.7+base/80)*factor; return `${round(low,1)}–${round(high,1)} hrs`;}
function balanceStatus(b){
  if(b.top>=20&&b.top<=35&&b.mid>=25&&b.mid<=48&&b.base>=25&&b.base<=45)return'Balanced';
  if(b.top>42)return'Top Heavy'; if(b.base>55)return'Base Dominant'; if(b.mid<18)return'Weak Heart'; if(b.base<18)return'Low Longevity Base'; return'Slightly Unbalanced';
}
function buildWarnings(items,b,total,sweet,fresh){
  const w=[]; if(Math.abs(total-100)>1)w.push(`Formula totals ${round(total)}%. For a finished concentrate, normalize to 100%.`);
  if(b.top>42)w.push('Top-heavy: opening will be bright but may fade quickly.');
  if(b.base<18)w.push('Base is low: personal scent longevity may be weak.');
  if(b.mid<18)w.push('Heart is low: transition from opening to drydown may feel hollow.');
  if(b.base>55)w.push('Base-heavy: may feel dense, heavy, or slow to open.');
  items.forEach(x=>{const [min,max]=x.oil.usage||[0,100]; if(x.percent>max)w.push(`${x.oil.name} is above recommended range (${max}% max).`);});
  const tecItem = items.find(x=>x.id==='triethyl-citrate'); if(tecItem && tecItem.percent>15) w.push('Triethyl Citrate is high; it can improve longevity but may soften projection.');
  if(sweet>3.6)w.push('Sweetness is high. Keep Lemon Sugar and vanilla materials controlled.');
  if(fresh<1.2 && b.base>35)w.push('Needs lift: consider a small citrus, Hedione, or Sea Salt boost.');
  return w;
}
function buildSuggestions(b,w,profile){
  const s=[]; if(b.base<25)s.push('Add Arabian White Musk, Iso E Super, or Sandalwood & Amber to improve longevity.');
  if(b.mid<25)s.push('Add Hedione, Amazing Grace, Cedarwood Sage, Lavender, or Kinmokusei for a stronger heart.');
  if(b.top<15)s.push('Add Bergamot, Yuzu, Sea Salt, or a tiny amount of Lemon Sugar for a clearer opening.');
  if((profile.dark||0)>1.8)s.push('Keep Black Velvet and Oakmoss low so the formula stays wearable.');
  if((profile.citrus||0)>3 && b.base<25)s.push('Citrus is strong; support it with musk or woody amber so it does not disappear too fast.');
  if(!profile.fixative)s.push('Add 3–8% Triethyl Citrate if you want more longevity support.');
  if(!s.length)s.push('Structure looks solid. Fine tune by adjusting sweetness, freshness, or woods in small 1–2% steps.');
  return s.slice(0,4);
}
function findSimilar(profile){
  return similarProfiles.map(target=>{
    const keys = [...new Set([...Object.keys(profile),...Object.keys(target.profile)])];
    let dot=0,a=0,b=0;
    keys.forEach(k=>{const x=profile[k]||0,y=target.profile[k]||0;dot+=x*y;a+=x*x;b+=y*y;});
    const score = a&&b ? Math.round((dot/(Math.sqrt(a)*Math.sqrt(b)))*100) : 0;
    return {...target,score};
  }).sort((a,b)=>b.score-a.score).slice(0,3);
}
function inferWearability(profile,b,fresh,warm){
  const seasons = fresh>warm ? ['Spring','Summer'] : warm>fresh ? ['Fall','Winter'] : ['Spring','Fall'];
  const time = b.base>45 || (profile.dark||0)>1.5 ? ['Evening','Night'] : fresh>3 ? ['Morning','Daytime'] : ['Daytime','Evening'];
  const occasions = [];
  if((profile.clean||0)>1.4 || (profile.musk||0)>1.2) occasions.push('Office');
  if((profile.dark||0)>1.2 || (profile.amber||0)>1.8 || (profile.spicy||0)>1.5) occasions.push('Date');
  if(fresh>2.5) occasions.push('Casual');
  if((profile.woody||0)>2 && (profile.clean||0)>1) occasions.push('Formal');
  return {seasons,time,occasions:occasions.length?[...new Set(occasions)]:['Casual']};
}
function formulaScore(b,total,warnings,similarScore){
  let score=100;
  score-=Math.min(25,Math.abs(100-total)*.35);
  score-=Math.abs(28-b.top)*.35+Math.abs(38-b.mid)*.3+Math.abs(34-b.base)*.35;
  score-=warnings.length*5;
  score+=similarScore>75?4:0;
  return Math.round(clamp(score,0,100));
}

function renderAnalysis(a){
  return `<div class="analysis-grid">
    ${metric('Formula Structure',`${a.buckets.top}% / ${a.buckets.mid}% / ${a.buckets.base}%`,'Top / Mid / Base',a.score)}
    ${metric('Balance',a.balance,'Overall structure',a.score)}
    ${metric('Scent Profile',a.topProfiles.slice(0,3).join(', '),'Main character',80)}
    ${metric('Skin Longevity',a.skinHours,'How long it lasts on skin',a.longevityScore*20)}
    ${metric('Self-Detectable',a.selfHours,'How long you smell it',a.longevityScore*18)}
    ${metric('Projection Window',a.projectionHours,'How long others notice it',a.projectionScore*20)}
    ${metric('Oil Concentration',`${a.concentration}%`,'Finished spray strength',a.concentration*2.5)}
    ${metric('Triethyl Citrate',`${a.tecPercent || 0}%`,'Fixative / longevity support',(a.tecPercent || 0)*8)}
  </div>
  <div class="metric"><small>Similar To</small><strong>${a.similar.map(x=>`${x.name} (${x.score}%)`).join(' • ')}</strong></div>
  <div class="metric"><small>Best Wear</small><strong>${a.wear.seasons.join(', ')} • ${a.wear.time.join(', ')} • ${a.wear.occasions.join(', ')}</strong></div>
  <div class="metric"><small>Perfumer Notes</small><p class="muted">${perfumerNotes(a)}</p></div>
  <div class="analysis-grid">
    <div class="metric"><small>Warnings</small><ul class="notes-list">${(a.warnings.length?a.warnings:['No major warnings.']).map(x=>`<li class="${a.warnings.length?'warning':'good'}">${x}</li>`).join('')}</ul></div>
    <div class="metric"><small>Suggestions</small><ul class="notes-list">${a.suggestions.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div class="metric"><small>Fragrance Pyramid</small><ul class="notes-list"><li>Top: ${a.buckets.top}%</li><li>Mid: ${a.buckets.mid}%</li><li>Base: ${a.buckets.base}%</li><li>Modifier: ${a.buckets.modifier}%</li></ul></div>
  </div>`;
}
function metric(label,value,sub,bar){return `<div class="metric"><small>${label}</small><strong>${value}</strong><div class="muted">${sub}</div><div class="bar"><span style="width:${clamp(bar,0,100)}%"></span></div></div>`;}
function perfumerNotes(a){
  const open = a.buckets.top>35 ? 'a vivid, fast-moving opening' : 'a controlled opening';
  const heart = a.buckets.mid<20 ? 'a relatively thin heart' : 'a defined heart';
  const base = a.buckets.base>40 ? 'a long, substantial drydown' : 'a moderate drydown';
  return `This formula has ${open}, ${heart}, and ${base}. The dominant profile reads as ${a.topProfiles.slice(0,4).join(', ').toLowerCase()}. It is closest to ${a.similar[0].name}, making it feel like a ${a.similar[0].style.toLowerCase()} direction.`;
}
function title(s){return s.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());}

function renderLibrary(){
  const list = oils.filter(o=>{
    if(libraryFilter!=='all' && o.level!==libraryFilter && !(libraryFilter==='Mid'&&o.level==='Top/Mid')) return false;
    if(oilSearch){const hay=[o.name,o.type,o.level,o.family,o.description,...(o.vibe||[])].join(' ').toLowerCase(); if(!hay.includes(oilSearch)) return false;}
    return true;
  });
  $('#oil-library').innerHTML = list.map(o=>`<article class="oil-card"><h3>${o.name}</h3><div class="oil-meta"><span class="badge">${o.level}</span><span class="badge">${o.family}</span><span class="badge">${o.type}</span></div><p>${o.description}</p>${stat('Strength',o.strength)}${stat('Longevity',o.longevity)}${stat('Projection',o.projection)}<p><strong>Use:</strong> ${(o.usage||[]).join('–')}% • <strong>Source:</strong> ${o.source}</p></article>`).join('');
}
function stat(label,val){return `<div class="stat-line"><span>${label}</span><div class="mini-bar"><span style="width:${(val||0)*20}%"></span></div></div>`;}

document.addEventListener('DOMContentLoaded', init);

// Formula % badge is fixed bottom-right by CSS. No scroll handler needed.
