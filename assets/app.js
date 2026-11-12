(() => {
  'use strict';

  const T = {
    en: {
      navHow:'How it works', navFaq:'FAQ', badge:'100% private · Nothing is uploaded',
      heroTitle:'Free <span>Image Compressor</span> &amp; Resizer',
      heroSub:'Reduce the size of JPG, PNG and WEBP images in seconds — right in your browser. Batch process unlimited photos and download them all as a ZIP.',
      dropTitle:'Drop images here', dropSub:'PNG, JPG and WEBP · Unlimited files · Processed on your device', choose:'Choose images',
      settingsTitle:'Compression settings', clearAll:'Clear all', qualityLabel:'Quality',
      qualityHelp:'Lower quality = smaller file. 70–80% looks identical for most photos.',
      formatLabel:'Output format', formatOriginal:'Same as original', formatWebp:'WEBP (smallest)', formatPng:'PNG (lossless)',
      resizeMode:'Resize (optional)', widthPx:'Max width (px)', heightPx:'Max height (px)', presetOrig:'Original',
      optionsLabel:'Options', lockAspect:'Keep aspect ratio', keepSmaller:'Never make a file bigger',
      filesReady:'Images', before:'Before', after:'After', savedLbl:'Saved', downloadZip:'Download all (.ZIP)',
      download:'Download', remove:'Remove', original:'kept original',
      errorType:'Please add valid image files (PNG, JPG, WEBP).', processing:'Still processing, please wait…',
      zipProgress:'Building ZIP…', zipError:'Could not create the ZIP file.', zipLib:'ZIP library failed to load. Download images one by one.',
      featTitle:'Why use Teknawy to compress images?',
      featLead:'A fast, private image optimizer for websites, social media, email attachments and online forms.',
      f1t:'Private by design', f1d:'Images are processed locally with HTML5 Canvas. Nothing is uploaded, stored or shared — safe for personal and confidential photos.',
      f2t:'Instant results', f2d:'No waiting for uploads or server queues. Compression starts the moment you drop a file.',
      f3t:'Batch processing', f3d:'Add dozens of images at once, apply the same settings to all of them and download a single ZIP.',
      f4t:'Convert formats', f4d:'Convert PNG or JPG to WEBP for up to 30% smaller files than JPEG at the same visual quality.',
      f5t:'Resize to any size', f5d:'Set a maximum width or height and every image is scaled proportionally — perfect for web and email.',
      f6t:'Free & unlimited', f6d:'No sign-up, no watermark, no daily limits and no paywall. Works on phone, tablet and desktop.',
      howTitle:'How to compress an image in 3 steps', howLead:'Reduce image file size online without installing any software.',
      s1t:'Add your images', s1d:'Drag and drop JPG, PNG or WEBP files into the box above, or tap “Choose images”.',
      s2t:'Adjust the settings', s2d:'Pick a quality level, an output format and an optional maximum size. Results update automatically.',
      s3t:'Download', s3d:'Save each image individually or download all compressed images together as a ZIP file.',
      fmtTitle:'JPG vs PNG vs WEBP: which format should you choose?', fmtLead:'Choosing the right format is the easiest way to get a smaller file.',
      thFormat:'Format', thBest:'Best for', thSize:'File size', thAlpha:'Transparency',
      webpBest:'Websites, blogs, most photos', jpgBest:'Photos, maximum compatibility', pngBest:'Logos, screenshots, sharp text',
      smallest:'Smallest', small:'Small', large:'Large', yes:'Yes', no:'No',
      faqTitle:'Frequently asked questions',
      q1:'Are my images uploaded to a server?', a1:'No. Teknawy compresses and resizes images entirely inside your browser using HTML5 Canvas. Your files never leave your device.',
      q2:'Which image formats are supported?', a2:'You can add JPG/JPEG, PNG and WEBP images and export them as JPEG, PNG or WEBP.',
      q3:'What quality setting should I use?', a3:'A quality of 70–80% usually reduces file size by 50–80% with no visible difference. For the smallest files, choose WEBP output.',
      q4:'Is there a limit on file size or number of images?', a4:"There are no limits or paywalls. Because processing happens on your device, the only limit is your device's memory.",
      q5:'Why did my PNG not get smaller?', a5:'PNG is a lossless format, so the quality slider does not apply to it. Convert to WEBP or JPEG, or reduce the dimensions, to make PNG files much smaller.',
      footerText:'All processing happens locally on your device.', about:'About', privacy:'Privacy Policy', terms:'Terms', contact:'Contact'
    },
    ar: {
      navHow:'طريقة الاستخدام', navFaq:'الأسئلة الشائعة', badge:'خصوصية 100% · لا يتم رفع أي صورة',
      heroTitle:'<span>ضغط الصور</span> وتغيير حجمها مجاناً',
      heroSub:'قلّل حجم صور JPG وPNG وWEBP خلال ثوانٍ مباشرة في متصفحك. اضغط عدداً غير محدود من الصور دفعة واحدة وحمّلها كملف ZIP.',
      dropTitle:'اسحب الصور وأفلتها هنا', dropSub:'PNG وJPG وWEBP · عدد غير محدود · المعالجة على جهازك', choose:'اختر الصور',
      settingsTitle:'إعدادات الضغط', clearAll:'مسح الكل', qualityLabel:'الجودة',
      qualityHelp:'جودة أقل = ملف أصغر. نسبة 70–80% تبدو مطابقة للأصل في أغلب الصور.',
      formatLabel:'صيغة الإخراج', formatOriginal:'نفس الصيغة الأصلية', formatWebp:'WEBP (الأصغر حجماً)', formatPng:'PNG (بدون فقدان)',
      resizeMode:'تغيير الأبعاد (اختياري)', widthPx:'أقصى عرض (بكسل)', heightPx:'أقصى ارتفاع (بكسل)', presetOrig:'الأصلي',
      optionsLabel:'خيارات', lockAspect:'الحفاظ على نسبة الأبعاد', keepSmaller:'لا تجعل الملف أكبر من الأصل',
      filesReady:'الصور', before:'قبل', after:'بعد', savedLbl:'التوفير', downloadZip:'تحميل الكل (.ZIP)',
      download:'تحميل', remove:'حذف', original:'تم الإبقاء على الأصل',
      errorType:'يرجى إضافة صور صالحة (PNG أو JPG أو WEBP).', processing:'جارٍ المعالجة، انتظر قليلاً…',
      zipProgress:'جارٍ إنشاء ZIP…', zipError:'تعذّر إنشاء ملف ZIP.', zipLib:'تعذّر تحميل مكتبة ZIP. حمّل الصور واحدة تلو الأخرى.',
      featTitle:'لماذا تستخدم تقناوي لضغط الصور؟',
      featLead:'أداة سريعة وآمنة لتحسين الصور للمواقع ووسائل التواصل ومرفقات البريد والنماذج الإلكترونية.',
      f1t:'خصوصية تامة', f1d:'تُعالج الصور محلياً عبر HTML5 Canvas. لا شيء يُرفع أو يُخزَّن أو يُشارك — آمن لصورك الشخصية والسرية.',
      f2t:'نتائج فورية', f2d:'لا انتظار للرفع أو للخوادم. يبدأ الضغط بمجرد إضافة الصورة.',
      f3t:'معالجة جماعية', f3d:'أضف عشرات الصور مرة واحدة، وطبّق نفس الإعدادات عليها، ثم حمّلها في ملف ZIP واحد.',
      f4t:'تحويل الصيغ', f4d:'حوّل PNG أو JPG إلى WEBP لتحصل على ملفات أصغر بنحو 30% من JPEG بنفس الجودة.',
      f5t:'تغيير المقاس', f5d:'حدّد أقصى عرض أو ارتفاع وسيتم تصغير كل صورة بشكل متناسب — مثالي للويب والبريد.',
      f6t:'مجاني وبلا حدود', f6d:'بدون تسجيل أو علامة مائية أو حدود يومية. يعمل على الهاتف والجهاز اللوحي والحاسوب.',
      howTitle:'كيف تضغط صورة في 3 خطوات', howLead:'قلّل حجم الصور أونلاين بدون تثبيت أي برنامج.',
      s1t:'أضف صورك', s1d:'اسحب صور JPG أو PNG أو WEBP إلى المربع في الأعلى، أو اضغط «اختر الصور».',
      s2t:'اضبط الإعدادات', s2d:'اختر مستوى الجودة وصيغة الإخراج وأقصى مقاس إن أردت. النتائج تتحدث تلقائياً.',
      s3t:'حمّل الصور', s3d:'احفظ كل صورة على حدة أو حمّل جميع الصور المضغوطة معاً في ملف ZIP.',
      fmtTitle:'JPG أم PNG أم WEBP: أي صيغة تختار؟', fmtLead:'اختيار الصيغة المناسبة أسهل طريقة للحصول على ملف أصغر.',
      thFormat:'الصيغة', thBest:'الأنسب لـ', thSize:'حجم الملف', thAlpha:'الشفافية',
      webpBest:'المواقع والمدونات وأغلب الصور', jpgBest:'الصور الفوتوغرافية وأعلى توافق', pngBest:'الشعارات ولقطات الشاشة والنصوص',
      smallest:'الأصغر', small:'صغير', large:'كبير', yes:'نعم', no:'لا',
      faqTitle:'الأسئلة الشائعة',
      q1:'هل يتم رفع صوري إلى خادم؟', a1:'لا. يقوم تقناوي بضغط الصور وتغيير حجمها بالكامل داخل متصفحك باستخدام HTML5 Canvas، ولا تغادر ملفاتك جهازك أبداً.',
      q2:'ما صيغ الصور المدعومة؟', a2:'يمكنك إضافة صور JPG وPNG وWEBP وتصديرها بصيغة JPEG أو PNG أو WEBP.',
      q3:'ما إعداد الجودة المناسب؟', a3:'جودة 70–80% تقلل الحجم عادة بنسبة 50–80% بدون فرق ملحوظ. للحصول على أصغر حجم اختر WEBP.',
      q4:'هل هناك حد لحجم الملف أو عدد الصور؟', a4:'لا توجد حدود أو اشتراكات. بما أن المعالجة على جهازك، فالحد الوحيد هو ذاكرة جهازك.',
      q5:'لماذا لم يصغر حجم صورة PNG؟', a5:'PNG صيغة بدون فقدان، لذا لا يؤثر عليها شريط الجودة. حوّلها إلى WEBP أو JPEG، أو صغّر أبعادها لتقليل حجمها كثيراً.',
      footerText:'جميع العمليات تتم محلياً على جهازك.', about:'من نحن', privacy:'سياسة الخصوصية', terms:'الشروط', contact:'اتصل بنا'
    },
    es: {
      navHow:'Cómo funciona', navFaq:'Preguntas', badge:'100% privado · No se sube nada',
      heroTitle:'<span>Compresor de imágenes</span> y redimensionador gratis',
      heroSub:'Reduce el tamaño de imágenes JPG, PNG y WEBP en segundos, directamente en tu navegador. Procesa fotos ilimitadas y descárgalas en un ZIP.',
      dropTitle:'Suelta tus imágenes aquí', dropSub:'PNG, JPG y WEBP · Archivos ilimitados · Procesado en tu dispositivo', choose:'Elegir imágenes',
      settingsTitle:'Ajustes de compresión', clearAll:'Borrar todo', qualityLabel:'Calidad',
      qualityHelp:'Menor calidad = archivo más ligero. 70–80% se ve igual en la mayoría de fotos.',
      formatLabel:'Formato de salida', formatOriginal:'Igual que el original', formatWebp:'WEBP (el más ligero)', formatPng:'PNG (sin pérdida)',
      resizeMode:'Redimensionar (opcional)', widthPx:'Ancho máx. (px)', heightPx:'Alto máx. (px)', presetOrig:'Original',
      optionsLabel:'Opciones', lockAspect:'Mantener proporción', keepSmaller:'No aumentar nunca el tamaño',
      filesReady:'Imágenes', before:'Antes', after:'Después', savedLbl:'Ahorro', downloadZip:'Descargar todo (.ZIP)',
      download:'Descargar', remove:'Quitar', original:'original conservado',
      errorType:'Añade imágenes válidas (PNG, JPG, WEBP).', processing:'Procesando, espera un momento…',
      zipProgress:'Creando ZIP…', zipError:'No se pudo crear el ZIP.', zipLib:'No se cargó la librería ZIP. Descarga las imágenes una a una.',
      featTitle:'¿Por qué usar Teknawy para comprimir imágenes?',
      featLead:'Un optimizador de imágenes rápido y privado para webs, redes sociales, correos y formularios.',
      f1t:'Privado por diseño', f1d:'Las imágenes se procesan localmente con HTML5 Canvas. Nada se sube ni se guarda.',
      f2t:'Resultados al instante', f2d:'Sin esperas de subida ni colas de servidor. La compresión empieza al soltar el archivo.',
      f3t:'Procesamiento por lotes', f3d:'Añade decenas de imágenes, aplica los mismos ajustes y descarga un solo ZIP.',
      f4t:'Convierte formatos', f4d:'Convierte PNG o JPG a WEBP para archivos hasta un 30% más ligeros que JPEG.',
      f5t:'Cambia el tamaño', f5d:'Define un ancho o alto máximo y cada imagen se escala proporcionalmente.',
      f6t:'Gratis e ilimitado', f6d:'Sin registro, sin marca de agua y sin límites diarios. Funciona en móvil y ordenador.',
      howTitle:'Cómo comprimir una imagen en 3 pasos', howLead:'Reduce el peso de tus imágenes online sin instalar nada.',
      s1t:'Añade tus imágenes', s1d:'Arrastra archivos JPG, PNG o WEBP al recuadro o pulsa “Elegir imágenes”.',
      s2t:'Ajusta la configuración', s2d:'Elige calidad, formato y un tamaño máximo opcional. Los resultados se actualizan solos.',
      s3t:'Descarga', s3d:'Guarda cada imagen por separado o descárgalas todas juntas en un ZIP.',
      fmtTitle:'JPG vs PNG vs WEBP: ¿qué formato elegir?', fmtLead:'Elegir el formato correcto es la forma más fácil de obtener un archivo más ligero.',
      thFormat:'Formato', thBest:'Ideal para', thSize:'Tamaño', thAlpha:'Transparencia',
      webpBest:'Webs, blogs, la mayoría de fotos', jpgBest:'Fotos, máxima compatibilidad', pngBest:'Logos, capturas, texto nítido',
      smallest:'El más pequeño', small:'Pequeño', large:'Grande', yes:'Sí', no:'No',
      faqTitle:'Preguntas frecuentes',
      q1:'¿Se suben mis imágenes a un servidor?', a1:'No. Teknawy comprime y redimensiona las imágenes dentro de tu navegador. Tus archivos nunca salen de tu dispositivo.',
      q2:'¿Qué formatos se admiten?', a2:'Puedes añadir imágenes JPG, PNG y WEBP y exportarlas como JPEG, PNG o WEBP.',
      q3:'¿Qué calidad debo usar?', a3:'Una calidad del 70–80% suele reducir el tamaño un 50–80% sin diferencia visible. Para el menor peso, elige WEBP.',
      q4:'¿Hay límite de tamaño o cantidad?', a4:'No hay límites ni pagos. El único límite es la memoria de tu dispositivo.',
      q5:'¿Por qué mi PNG no se redujo?', a5:'PNG es un formato sin pérdida y el control de calidad no le afecta. Conviértelo a WEBP o JPEG, o reduce sus dimensiones.',
      footerText:'Todo el procesamiento se realiza en tu dispositivo.', about:'Acerca de', privacy:'Privacidad', terms:'Términos', contact:'Contacto'
    }
  };

  Object.assign(T.en, { targetLbl:'Target file size (optional)', targetPh:'e.g. 100 KB', navTools:'Tools', navBlog:'Blog' });
  Object.assign(T.ar, { targetLbl:'حجم الملف المطلوب (اختياري)', targetPh:'مثال: 100 KB', navTools:'الأدوات', navBlog:'المدونة' });
  Object.assign(T.es, { targetLbl:'Tamaño objetivo (opcional)', targetPh:'ej. 100 KB', navTools:'Herramientas', navBlog:'Blog' });

  const $ = (id) => document.getElementById(id);
  const store = {
    get(k){ try { return localStorage.getItem(k); } catch { return null; } },
    set(k,v){ try { localStorage.setItem(k,v); } catch {} }
  };

  let lang = 'en';
  const t = (k) => (T[lang] && T[lang][k]) || T.en[k] || k;

  function applyLang(l) {
    lang = T[l] ? l : 'en';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $('langSelector').value = lang;
    render();
  }

  // ---------- Tool ----------
  const ACCEPT = ['image/jpeg','image/png','image/webp'];
  let queue = [];
  const els = {
    drop: $('dropZone'), input: $('fileInput'), controls: $('controlsCard'), header: $('queueHeader'),
    gallery: $('imageGallery'), count: $('fileCount'), quality: $('qualityRange'), qualityVal: $('qualityVal'),
    format: $('formatSelect'), w: $('targetWidth'), h: $('targetHeight'), lock: $('lockAspect'), keep: $('keepSmaller'),
    clear: $('clearAllBtn'), zip: $('downloadZipBtn'), presets: $('presets'),
    before: $('totalBefore'), after: $('totalAfter'), saved: $('totalSaved'), target: $('targetKb')
  };

  if (!els.drop) { initLang(); return; } // pages without the tool (blog, legal)

  // Page-specific defaults (set on <body data-format="image/webp" data-width="1080" data-target="100">)
  const preset = document.body.dataset;
  if (preset.format) els.format.value = preset.format;
  if (preset.width) els.w.value = preset.width;
  if (preset.target && els.target) els.target.value = preset.target;

  function toast(msg, ok) {
    const d = document.createElement('div');
    d.className = 'toast' + (ok ? ' ok' : '');
    d.textContent = msg;
    $('toastContainer').appendChild(d);
    setTimeout(() => d.remove(), 3500);
  }

  function bytes(n) {
    if (!+n) return '0 B';
    const u = ['B','KB','MB','GB']; const i = Math.min(3, Math.floor(Math.log(n) / Math.log(1024)));
    return `${parseFloat((n / Math.pow(1024, i)).toFixed(i ? 1 : 0))} ${u[i]}`;
  }

  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : 'i' + Math.random().toString(36).slice(2) + Date.now());

  ['dragenter','dragover'].forEach(e => els.drop.addEventListener(e, ev => { ev.preventDefault(); els.drop.classList.add('over'); }));
  ['dragleave','drop'].forEach(e => els.drop.addEventListener(e, ev => { ev.preventDefault(); els.drop.classList.remove('over'); }));
  els.drop.addEventListener('drop', ev => { if (ev.dataTransfer.files.length) addFiles(ev.dataTransfer.files); });
  els.input.addEventListener('change', ev => { if (ev.target.files.length) addFiles(ev.target.files); els.input.value = ''; });
  document.addEventListener('paste', ev => {
    const files = [...(ev.clipboardData?.files || [])];
    if (files.length) addFiles(files);
  });

  function addFiles(files) {
    let bad = false;
    [...files].forEach(file => {
      if (!ACCEPT.includes(file.type)) { bad = true; return; }
      const src = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        const item = { id: uid(), file, name: file.name, type: file.type, size: file.size, img, src,
          w: img.naturalWidth, h: img.naturalHeight, blob: null, url: null, out: 0, busy: false, kept: false, ver: 0 };
        queue.push(item);
        updateState();
        processItem(item);
      };
      img.onerror = () => { URL.revokeObjectURL(src); toast(t('errorType')); };
      img.src = src;
    });
    if (bad) toast(t('errorType'));
  }

  function targetSize(item) {
    const mw = parseInt(els.w.value, 10) || 0;
    const mh = parseInt(els.h.value, 10) || 0;
    let { w, h } = item;
    if (!mw && !mh) return { w, h };
    if (!els.lock.checked && mw && mh) return { w: mw, h: mh };
    const scale = Math.min(mw ? mw / w : Infinity, mh ? mh / h : Infinity, 1);
    return { w: Math.max(1, Math.round(w * scale)), h: Math.max(1, Math.round(h * scale)) };
  }

  function outType(item) {
    const f = els.format.value === 'original' ? item.type : els.format.value;
    return ACCEPT.includes(f) ? f : 'image/jpeg';
  }

  function ext(type) { return type === 'image/webp' ? 'webp' : type === 'image/png' ? 'png' : 'jpg'; }

  function draw(item, w, h, type) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    if (type === 'image/jpeg') { ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
    ctx.drawImage(item.img, 0, 0, w, h);
    return c;
  }
  const encode = (c, type, q) => new Promise(res => c.toBlob(res, type, q));

  // Find the best quality (and, if needed, a smaller size) that fits under the target size.
  async function fitToTarget(item, w, h, type, maxBytes) {
    let scale = 1, best = null;
    for (let round = 0; round < 8; round++) {
      const cw = Math.max(1, Math.round(w * scale)), ch = Math.max(1, Math.round(h * scale));
      const c = draw(item, cw, ch, type);
      let lo = 0.05, hi = 0.95;
      for (let i = 0; i < 7; i++) {
        const q = (lo + hi) / 2;
        const b = await encode(c, type, q);
        if (b && b.size <= maxBytes) { best = { blob: b, w: cw, h: ch }; lo = q; } else hi = q;
      }
      if (best) return best;
      scale *= 0.8;
    }
    const c = draw(item, Math.round(w * scale), Math.round(h * scale), type);
    return { blob: await encode(c, type, 0.05), w: c.width, h: c.height };
  }

  async function processItem(item) {
    const ver = ++item.ver;
    item.busy = true; render();
    let { w, h } = targetSize(item);
    let type = outType(item);
    const targetKb = els.target ? parseFloat(els.target.value) || 0 : 0;
    let blob;
    if (targetKb > 0) {
      if (type === 'image/png') type = 'image/jpeg'; // PNG has no quality setting
      const r = await fitToTarget(item, w, h, type, targetKb * 1024);
      blob = r.blob; w = r.w; h = r.h;
    } else {
      blob = await encode(draw(item, w, h, type), type, parseInt(els.quality.value, 10) / 100);
    }
    if (ver !== item.ver) return; // a newer job replaced this one
    item.busy = false;
    if (!blob) { render(); return; }
    const sameAsSource = type === item.type && w === item.w && h === item.h;
    if (els.keep.checked && sameAsSource && blob.size >= item.size) { blob = item.file; item.kept = true; }
    else item.kept = false;
    if (targetKb > 0 && item.size <= targetKb * 1024 && type === item.type) { blob = item.file; item.kept = true; }
    if (item.url) URL.revokeObjectURL(item.url);
    item.blob = blob; item.out = blob.size; item.url = URL.createObjectURL(blob); item.outType = type;
    item.outW = w; item.outH = h;
    render();
  }

  let timer;
  const reprocessAll = () => { clearTimeout(timer); timer = setTimeout(() => queue.forEach(processItem), 120); };

  els.quality.addEventListener('input', e => { els.qualityVal.textContent = e.target.value + '%'; reprocessAll(); });
  [els.format, els.lock, els.keep].forEach(el => el.addEventListener('change', reprocessAll));
  [els.w, els.h].forEach(el => el.addEventListener('input', () => { syncPresets(); reprocessAll(); }));
  if (els.target) els.target.addEventListener('input', reprocessAll);
  syncPresets();
  els.presets.addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    els.w.value = b.dataset.w; els.h.value = ''; syncPresets(); reprocessAll();
  });
  function syncPresets() {
    els.presets.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.w === els.w.value && !els.h.value));
  }

  els.clear.addEventListener('click', () => {
    queue.forEach(i => { if (i.url) URL.revokeObjectURL(i.url); URL.revokeObjectURL(i.src); });
    queue = []; updateState();
  });

  function fileName(item) { return item.name.replace(/\.[^/.]+$/, '') + '-compressed.' + ext(item.outType || item.type); }

  function save(blob, name) {
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: name });
    document.body.appendChild(a); a.click();
    setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 3000);
  }

  function updateState() {
    const has = queue.length > 0;
    els.controls.classList.toggle('hidden', !has);
    els.header.classList.toggle('hidden', !has);
    render();
  }

  const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function render() {
    if (!els || !els.gallery) return;
    els.count.textContent = queue.length;
    const before = queue.reduce((s, i) => s + i.size, 0);
    const after = queue.reduce((s, i) => s + (i.out || i.size), 0);
    els.before.textContent = bytes(before);
    els.after.textContent = bytes(after);
    els.saved.textContent = before ? Math.max(0, Math.round((1 - after / before) * 100)) + '%' : '0%';

    els.gallery.innerHTML = '';
    queue.forEach(item => {
      const pct = item.out ? Math.round((1 - item.out / item.size) * 100) : 0;
      const dims = (!item.busy && item.outW) ? { w: item.outW, h: item.outH } : targetSize(item);
      const row = document.createElement('div');
      row.className = 'card item';
      row.innerHTML = `
        <div class="thumb"><img src="${item.src}" alt="" loading="lazy">${item.busy ? '<div class="spin"><i></i></div>' : ''}</div>
        <div class="meta">
          <p title="${esc(item.name)}">${esc(item.name)}</p>
          <div class="sizes">
            <s>${bytes(item.size)}</s>
            <svg class="icon flip" style="width:12px;height:12px"><use href="#i-arrow"/></svg>
            <b>${item.busy ? '…' : bytes(item.out)}</b>
            ${!item.busy && pct > 0 ? `<span class="tag">-${pct}%</span>` : ''}
            ${!item.busy && item.kept ? `<span class="tag neutral">${t('original')}</span>` : ''}
            <span>· ${dims.w}×${dims.h}</span>
          </div>
        </div>
        <div class="actions">
          <button type="button" class="btn btn-soft dl" ${item.busy ? 'disabled' : ''}><svg class="icon"><use href="#i-down"/></svg><span>${t('download')}</span></button>
          <button type="button" class="icon-btn rm" aria-label="${t('remove')}"><svg class="icon"><use href="#i-x"/></svg></button>
        </div>`;
      row.querySelector('.dl').addEventListener('click', () => item.blob ? save(item.blob, fileName(item)) : toast(t('processing')));
      row.querySelector('.rm').addEventListener('click', () => {
        if (item.url) URL.revokeObjectURL(item.url); URL.revokeObjectURL(item.src);
        queue = queue.filter(i => i !== item); updateState();
      });
      els.gallery.appendChild(row);
    });
  }

  els.zip.addEventListener('click', async () => {
    if (!queue.length) return;
    if (queue.some(i => i.busy)) return toast(t('processing'));
    if (typeof JSZip === 'undefined') return toast(t('zipLib'));
    const zip = new JSZip(); const used = new Set();
    queue.forEach(i => {
      if (!i.blob) return;
      let n = fileName(i), k = 1;
      while (used.has(n)) n = fileName(i).replace(/(\.\w+)$/, `-${k++}$1`);
      used.add(n); zip.file(n, i.blob);
    });
    const label = els.zip.innerHTML;
    els.zip.disabled = true; els.zip.textContent = t('zipProgress');
    try { save(await zip.generateAsync({ type: 'blob' }), `teknawy-images-${Date.now()}.zip`); }
    catch { toast(t('zipError')); }
    finally { els.zip.disabled = false; els.zip.innerHTML = label; render(); }
  });

  initLang();

  function initLang() {
    const sel = $('langSelector'); if (!sel) return;
    sel.addEventListener('change', e => { store.set('lang', e.target.value); applyLang(e.target.value); });
    const saved = store.get('lang');
    const nav = (navigator.language || 'en').slice(0, 2);
    applyLang(saved || (T[nav] ? nav : 'en'));
  }
})();
