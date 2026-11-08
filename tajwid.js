// ====== التجويد: دروس للمبتدئين ======
// تعتمد الأمثلة على واجهة Quran.com API.
// يتم جلب النص القرآني وأحكام التجويد تلقائياً.

// القواعد المعروفة
const tjBox = document.querySelector("#tajwid");

const TJ_RULES = {
  ham_wasl: {
    name: "همزة الوصل",
    info: "همزة تُنطق عند بداية القراءة، ولا تُنطق عند وصل الكلمة بما قبلها."
  },
  slnt: {
    name: "الحرف الذي لا يُنطق",
    info: "حرف مكتوب ولكنه لا يُنطق، مثل لام التعريف قبل الحروف الشمسية."
  },
  madda_normal: {
    name: "المد الطبيعي",
    info: "إطالة الصوت بحرف من حروف المد بمقدار حركتين."
  },
  madda_permissible: {
    name: "المد الجائز المنفصل",
    info: "يكون حرف المد في آخر كلمة والهمزة في بداية الكلمة التالية، ويمد بمقدار حركتين أو أربع أو ست حركات حسب الرواية."
  },
  madda_obligatory: {
    name: "المد الواجب المتصل",
    info: "يأتي حرف المد وبعده همزة في الكلمة نفسها، ويمد بمقدار أربع أو خمس حركات."
  },
  madda_necessary: {
    name: "المد اللازم",
    info: "يأتي بعد حرف المد سكون أصلي، ويمد بمقدار ست حركات."
  },
  qlq: {
    name: "القلقلة",
    info: "اضطراب خفيف في الصوت عند نطق أحد الحروف ق ط ب ج د إذا كان ساكناً."
  },
  ikhf: {
    name: "الإخفاء الحقيقي",
    info: "إخفاء النون الساكنة أو التنوين مع غنة عند أحد حروف الإخفاء الخمسة عشر."
  },
  ikhf_shfw: {
    name: "الإخفاء الشفوي",
    info: "إذا جاء بعد الميم الساكنة حرف الباء، تُخفى الميم مع الغنة."
  },
  idghm_shfw: {
    name: "الإدغام الشفوي",
    info: "إذا جاء بعد الميم الساكنة حرف الميم، تُدغم الميمان مع الغنة."
  },
  iqlb: {
    name: "الإقلاب",
    info: "قلب النون الساكنة أو التنوين ميماً مخفاة مع الغنة عند حرف الباء."
  },
  idgh_ghn: {
    name: "الإدغام بغنة",
    info: "إدغام النون الساكنة أو التنوين في أحد حروف ي ن م و مع الغنة."
  },
  idgh_w_ghn: {
    name: "الإدغام بغير غنة",
    info: "إدغام النون الساكنة أو التنوين في حرفي اللام أو الراء دون غنة."
  },
  idgh_mus: {
    name: "إدغام المتقاربين والمتجانسين",
    info: "إدخال حرف في حرف آخر لاتحاد مخرجهما أو تقاربهما."
  },
  ghn: {
    name: "الغنة",
    info: "صوت يخرج من الخيشوم، ويكون بمقدار حركتين عند النون والميم المشددتين."
  }
};

// ====== الدروس ======

const TJ_LESSONS = [
  {
    id: "noun",
    title: "أحكام النون الساكنة والتنوين",
    summary: "ما أحكام النون الساكنة والتنوين عند التقائهما بحرف آخر؟",
    blocks: [
      {
        title: "الإظهار",
        text: "إذا جاء بعد النون الساكنة أو التنوين أحد حروف الحلق، تُنطق النون بوضوح دون إدغام.",
        letters: "ء ه ع ح غ خ"
      },
      {
        title: "الإدغام",
        text: "إدخال النون الساكنة أو التنوين في الحرف الذي يأتي بعدهما. يكون بغنة مع حروف ي ن م و، وبغير غنة مع اللام والراء.",
        letters: "ي ر م ل و ن"
      },
      {
        title: "الإقلاب",
        text: "إذا جاء بعد النون الساكنة أو التنوين حرف الباء، تُقلب النون ميماً مخفاة مع الغنة.",
        letters: "ب"
      },
      {
        title: "الإخفاء الحقيقي",
        text: "إذا جاء بعد النون الساكنة أو التنوين أحد حروف الإخفاء، تُنطق النون بين الإظهار والإدغام مع الغنة.",
        letters: "ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك"
      }
    ],
    classes: ["idgh_ghn", "idgh_w_ghn", "iqlb", "ikhf"],
    tip: "تذكّر أن أحكام النون الساكنة والتنوين أربعة: الإظهار والإدغام والإقلاب والإخفاء."
  },

  {
    id: "mim",
    title: "أحكام الميم الساكنة",
    summary: "ما أحكام الميم الساكنة عند التقائها بحرف آخر؟",
    blocks: [
      {
        title: "الإخفاء الشفوي",
        text: "إذا جاء بعد الميم الساكنة حرف الباء، تُخفى الميم مع الغنة.",
        letters: "ب"
      },
      {
        title: "الإدغام الشفوي",
        text: "إذا جاء بعد الميم الساكنة حرف الميم، تُدغم الميمان في بعضهما مع الغنة.",
        letters: "م"
      },
      {
        title: "الإظهار الشفوي",
        text: "إذا جاء بعد الميم الساكنة أي حرف آخر غير الباء والميم، تُنطق الميم بوضوح.",
        letters: "بقية الحروف"
      }
    ],
    classes: ["ikhf_shfw", "idghm_shfw"],
    tip: "تُسمى هذه الأحكام شفوية لأنها تعتمد على حركة الشفتين."
  },

  {
    id: "ghunna",
    title: "الغنة",
    summary: "التعرّف على الصوت الأنفي وكيفية نطقه.",
    blocks: [
      {
        title: "ما هي الغنة؟",
        text: "الغنة صوت يخرج من الخيشوم، وتكون واجبة عند النون والميم المشددتين، ومقدارها حركتان.",
        letters: "نّ مّ"
      },
      {
        title: "مقدار الغنة",
        text: "مقدار حركتين، أي زمن متوسط يمكن تقديره بفتح الإصبع وإغلاقه.",
        letters: ""
      }
    ],
    classes: ["ghn"],
    tip: "استمع جيداً إلى التلاوة ثم حاول تكرار الصوت بالطريقة نفسها."
  },

  {
    id: "madd",
    title: "المد الطبيعي",
    summary: "التعرّف على المد الأساسي ومقداره حركتان.",
    blocks: [
      {
        title: "حروف المد الثلاثة",
        text: "الألف الساكنة المفتوح ما قبلها، والواو الساكنة المضموم ما قبلها، والياء الساكنة المكسور ما قبلها.",
        letters: "ا و ي"
      },
      {
        title: "مقدار المد الطبيعي",
        text: "يمد بمقدار حركتين، إذا لم يأت بعد حرف المد همزة أو سكون.",
        letters: ""
      }
    ],
    classes: ["madda_normal"],
    tip: "المد الطبيعي هو أصل المدود، وتُبنى عليه بقية أنواع المد."
  },

  {
    id: "madd2",
    title: "أنواع المدود الأطول",
    summary: "التعرّف على المدود التي تزيد عن حركتين.",
    blocks: [
      {
        title: "المد الواجب المتصل",
        text: "يأتي حرف المد وبعده همزة في الكلمة نفسها، ويمد بمقدار أربع أو خمس حركات.",
        letters: ""
      },
      {
        title: "المد الجائز المنفصل",
        text: "يأتي حرف المد في نهاية كلمة، وتأتي الهمزة في بداية الكلمة التالية. ويمد بمقدار حركتين أو أربع أو ست حركات حسب الرواية.",
        letters: ""
      },
      {
        title: "المد اللازم",
        text: "يأتي بعد حرف المد سكون أصلي ثابت، ويمد بمقدار ست حركات.",
        letters: ""
      }
    ],
    classes: [
      "madda_obligatory",
      "madda_permissible",
      "madda_necessary"
    ],
    tip: "تختلف بعض مقادير المد حسب الرواية، لذلك اتبع توجيهات أستاذك."
  },

  {
    id: "qalqala",
    title: "القلقلة",
    summary: "التعرّف على حروف القلقلة وطريقة نطقها.",
    blocks: [
      {
        title: "حروف القلقلة",
        text: "تحدث القلقلة عندما يكون أحد هذه الحروف ساكناً، وهي خمسة حروف تُجمع في عبارة قطب جد.",
        letters: "ق ط ب ج د"
      },
      {
        title: "كيفية النطق",
        text: "يكون الصوت مصحوباً بارتداد خفيف دون إضافة حركة أو حرف جديد.",
        letters: ""
      }
    ],
    classes: ["qlq"],
    tip: "احرص على عدم تحويل القلقلة إلى فتحة أو ضمة أو كسرة."
  },

  {
    id: "muette",
    title: "الحروف التي لا تُنطق وهمزة الوصل",
    summary: "التعرّف على بعض الحروف المكتوبة التي لا تُنطق.",
    blocks: [
      {
        title: "الحرف الذي لا يُنطق",
        text: "بعض الحروف تُكتب ولا تُنطق أثناء القراءة، مثل لام التعريف عندما تأتي قبل حرف شمسي، كما في كلمة الشمس.",
        letters: ""
      },
      {
        title: "همزة الوصل",
        text: "تُنطق همزة الوصل عند بداية القراءة، ولا تُنطق عند وصل الكلمة بما قبلها.",
        letters: ""
      }
    ],
    classes: ["slnt", "ham_wasl"],
    tip: "استمع جيداً إلى القارئ ولاحظ الحروف التي لا ينطقها."
  }
];

// السور القصيرة أولاً
const TJ_SURAHS = [
  1, 114, 113, 112, 111, 110, 109, 108, 107, 106,
  105, 104, 103, 102, 101, 100, 99, 98, 97, 96,
  95, 94, 93, 92, 91, 90, 89, 88, 87, 86,
  85, 84, 83, 82, 81, 80, 79, 78
];

// بقية السور (من 77 إلى 2) تُستعمل فقط إذا لم تكفِ السور القصيرة
const TJ_REST = [];
for (let n = 77; n >= 2; n--) TJ_REST.push(n);

const tjCache = new Map();
let tjQuiz = null;

// ====== قراءة النص القرآني الملوّن ======
// أسماء القواعد قد تختلف في كتابتها حسب المصدر: نحوّلها إلى الأسماء المستعملة هنا
const TJ_ALIAS = {
  ham_wasl: ["hamzat_wasl", "hamzatul_wasl", "hamza_wasl", "hamzat_al_wasl"],
  slnt: ["silent", "laam_shamsiyah", "lam_shamsiyyah", "laam_shamsiyyah", "lam_shamsiyah"],
  madda_normal: ["madd_2", "madd_normal", "madda_natural"],
  madda_permissible: ["madd_246", "madd_munfasil", "madda_munfasil", "madd_permissible"],
  madda_obligatory: ["madd_muttasil", "madda_muttasil", "madd_obligatory"],
  madda_necessary: ["madd_6", "madd_lazim", "madda_lazim", "madd_necessary"],
  qlq: ["qalaqah", "qalqalah", "qalqala", "qalaqa"],
  ikhf: ["ikhafa", "ikhfa", "ikhfaa"],
  ikhf_shfw: ["ikhafa_shafawi", "ikhfa_shafawi", "ikhfaa_shafawi"],
  idghm_shfw: ["idgham_shafawi", "idghaam_shafawi", "idgham_shfw"],
  iqlb: ["iqlab", "iqlaab"],
  idgh_ghn: ["idgham_ghunnah", "idghaam_ghunnah", "idgham_with_ghunnah"],
  idgh_w_ghn: ["idgham_wo_ghunnah", "idghaam_no_ghunnah", "idgham_no_ghunnah", "idgham_without_ghunnah"],
  idgh_mus: ["idgham_mutajanisayn", "idgham_mutaqaribayn", "idghaam_mutajaanisain", "idghaam_mutaqaaribain", "idgham_mutajanisain", "idgham_mutaqaribain"],
  ghn: ["ghunnah", "ghunna", "ghunah"]
};

function tjNorm(c) {
  if (!c) return null;
  c = String(c).trim().toLowerCase();
  if (TJ_RULES[c]) return c;
  for (const k in TJ_ALIAS) {
    if (TJ_ALIAS[k].includes(c)) return k;
  }
  return c;
}


function tjSegments(html) {
  const box = document.createElement("div");
  box.innerHTML = html;

  box.querySelectorAll(".end").forEach((e) => e.remove());

  const segs = [];

  box.childNodes.forEach((n) => {
    if (n.nodeType === 3) {
      segs.push({
        text: n.textContent,
        cls: null
      });
    } else if (n.nodeType === 1) {
      segs.push({
        text: n.textContent,
        cls: n.tagName === "TAJWEED"
          ? tjNorm(n.getAttribute("class"))
          : null
      });
    }
  });

  return segs;
}

function tjKnown(seg) {
  return !!(seg.cls && TJ_RULES[seg.cls]);
}

// ====== تحميل سورة ======

async function tjLoadSurah(n) {
  if (tjCache.has(n)) return tjCache.get(n);

  let verses = null;

  try {
    const res = await fetch(
      `${API}/quran/verses/uthmani_tajweed?chapter_number=${n}`
    );

    if (res.ok) {
      verses = (await res.json()).verses;
    }
  } catch (e) {
    // تجربة العنوان البديل
  }

  if (!verses) {
    const res = await fetch(
      `${API}/verses/by_chapter/${n}?fields=text_uthmani_tajweed&per_page=300&words=false`
    );

    if (!res.ok) {
      throw new Error("تعذر تحميل أحكام التجويد");
    }

    verses = (await res.json()).verses;
  }

  const list = (verses || [])
    .filter((v) => v.text_uthmani_tajweed && v.verse_key)
    .map((v) => {
      const segs = tjSegments(v.text_uthmani_tajweed);

      return {
        key: v.verse_key,
        segs,
        classes: [
          ...new Set(
            segs.filter(tjKnown).map((s) => s.cls)
          )
        ],
        len: segs.reduce((t, s) => t + s.text.length, 0)
      };
    });

  tjCache.set(n, list);

  return list;
}

// ====== تحميل عدة سور ======

async function tjLoadMany(surahs) {
  const results = await Promise.allSettled(
    surahs.map(tjLoadSurah)
  );

  const ok = results.filter(
    (r) => r.status === "fulfilled"
  );

  if (!ok.length) {
    throw new Error("تعذر تحميل السور");
  }

  return ok.flatMap((r) => r.value);
}

// ====== البحث عن أمثلة ======

async function tjExamples(classes, want) {
  const found = [];
  const order = TJ_SURAHS.concat(TJ_REST);

  for (let i = 0; i < order.length; i += 4) {
    let batch;

    try {
      batch = await tjLoadMany(order.slice(i, i + 4));
    } catch (e) {
      if (found.length) break;
      continue;
    }

    batch.forEach((v) => {
      if (v.classes.some((c) => classes.includes(c))) {
        found.push(v);
      }
    });

    if (found.length >= want * 2) break;
  }

  return found.sort((a, b) => a.len - b.len);
}

// ====== عرض الآيات بالألوان ======

function tjArabic(segs, opts) {
  const p = el("p", "arabic");

  p.lang = "ar";
  p.dir = "rtl";

  let k = -1;

  segs.forEach((s) => {
    if (!tjKnown(s)) {
      p.appendChild(document.createTextNode(s.text));
      return;
    }

    k++;

    const colored = opts.mode === "quiz"
      ? k === opts.target
      : opts.show.includes(s.cls);

    if (!colored) {
      p.appendChild(document.createTextNode(s.text));
      return;
    }

    const span = document.createElement("span");

    span.textContent = s.text;
    span.className = opts.mode === "quiz"
      ? "tj-target"
      : "tj tj-" + s.cls;

    if (opts.mode !== "quiz") {
      span.title = TJ_RULES[s.cls].name;
    }

    p.appendChild(span);
  });

  return p;
}

// ====== دليل الألوان ======

function tjLegend(classes) {
  const box = el("div", "tj-legend");

  classes.forEach((c) => {
    const chip = el("span", "chip");

    chip.appendChild(
      el("span", "swatch tj-" + c, "●")
    );

    chip.appendChild(
      document.createTextNode(" " + TJ_RULES[c].name)
    );

    box.appendChild(chip);
  });

  return box;
}

// ====== الصفحة الرئيسية ======

function tjDone() {
  const d = Store.get("tajwid", null);

  return d && d.done ? d.done : {};
}

function tjHome() {
  stopAudio();

  tjQuiz = null;
  tjBox.innerHTML = "";

  tjBox.lang = "ar";
  tjBox.dir = "rtl";

  tjBox.appendChild(
    el("h1", "game-title", "تعلم أحكام التجويد")
  );

  const note = el("div", "tj-note");

  note.appendChild(
    el("strong", "", "تنبيه: ")
  );

  note.appendChild(
    document.createTextNode(
      "تساعدك هذه الدروس على اكتشاف أحكام التجويد وتعلمها، لكنها لا تغني عن التعلم على يد أستاذ متخصص. يمكنك الاستماع إلى الآيات والتعرف على الأحكام والتدرب عليها. تعتمد الألوان على البيانات المقدمة من واجهة Quran.com."
    )
  );

  tjBox.appendChild(note);

  const done = tjDone();
  const list = el("div", "lessons");

  TJ_LESSONS.forEach((l, i) => {
    const b = el("button", "lesson");

    b.appendChild(
      el("span", "lesson-num", done[l.id] ? "✓" : String(i + 1))
    );

    const t = el("span", "lesson-text");

    t.appendChild(
      el("strong", "", l.title)
    );

    t.appendChild(
      el("span", "muted small", l.summary)
    );

    b.appendChild(t);

    b.addEventListener("click", () => tjLesson(l));

    list.appendChild(b);
  });

  tjBox.appendChild(list);

  const row = el("div", "actions center-actions");

  const quiz = el(
    "button",
    "btn",
    "🎯 اختبار: ما هو الحكم؟"
  );

  quiz.addEventListener("click", tjQuizStart);

  const legend = el(
    "button",
    "btn ghost",
    "عرض جميع الألوان"
  );

  legend.addEventListener("click", () => {
    const old = tjBox.querySelector(".tj-all");

    if (old) {
      old.remove();
      return;
    }

    const box = el("div", "tj-all");

    Object.keys(TJ_RULES).forEach((c) => {
      const r = el("div", "tj-rule");

      r.appendChild(
        el("span", "swatch tj-" + c, "●")
      );

      const t = el("span", "");

      t.appendChild(
        el("strong", "", TJ_RULES[c].name)
      );

      t.appendChild(
        document.createElement("br")
      );

      t.appendChild(
        el("span", "muted small", TJ_RULES[c].info)
      );

      r.appendChild(t);
      box.appendChild(r);
    });

    tjBox.appendChild(box);
  });

  row.appendChild(quiz);
  row.appendChild(legend);

  tjBox.appendChild(row);
}

// ====== عرض درس ======

async function tjLesson(lesson) {
  stopAudio();

  tjBox.innerHTML = "";

  const back = el(
    "button",
    "link-btn",
    "← العودة إلى جميع الدروس"
  );

  back.addEventListener("click", tjHome);

  tjBox.appendChild(back);

  tjBox.appendChild(
    el("h2", "space-title", lesson.title)
  );

  tjBox.appendChild(
    el("p", "muted", lesson.summary)
  );

  lesson.blocks.forEach((b) => {
    const card = el("article", "verse");

    card.appendChild(
      el("div", "verse-ref", b.title)
    );

    card.appendChild(
      el("p", "", b.text)
    );

    if (b.letters) {
      const l = el("p", "tj-letters", b.letters);

      l.lang = "ar";
      l.dir = "rtl";

      card.appendChild(l);
    }

    tjBox.appendChild(card);
  });

  if (lesson.tip) {
    tjBox.appendChild(
      el("p", "tj-tip", "💡 " + lesson.tip)
    );
  }

  tjBox.appendChild(
    el("h3", "space-title", "أمثلة من القرآن الكريم")
  );

  tjBox.appendChild(
    tjLegend(lesson.classes)
  );

  const exBox = el("div", "");

  exBox.appendChild(
    el("p", "muted center", "جارٍ البحث عن الأمثلة...")
  );

  tjBox.appendChild(exBox);

  const finish = el(
    "button",
    "btn",
    tjDone()[lesson.id]
      ? "تم إكمال الدرس ✓"
      : "فهمت هذا الدرس ✓"
  );

  finish.addEventListener("click", () => {
    const d = Store.get("tajwid", null) || { done: {} };

    d.done = d.done || {};
    d.done[lesson.id] = true;

    Store.set("tajwid", d);

    markToday();
    tjHome();
  });

  const row = el("div", "actions center-actions");

  row.appendChild(finish);

  tjBox.appendChild(row);

  try {
    const pool = await tjExamples(lesson.classes, 4);

    if (!pool.length) {
      exBox.innerHTML = "";

      exBox.appendChild(
        el(
          "p",
          "muted center",
          "لم يتم العثور على أمثلة لهذا الحكم في السور المحمّلة."
        )
      );

      return;
    }

    const best = pool.slice(0, 12);

    const draw = async () => {
      exBox.innerHTML = "";

      const picks = shuffle(best.slice()).slice(0, 3);

      const chapters = await getChapters();

      for (const item of picks) {
        const v = await getVerse(item.key);

        const [s, a] = item.key.split(":").map(Number);

        const card = el("article", "verse");

        card.appendChild(
          el(
            "div",
            "verse-ref",
            "السورة رقم " + s + " · الآية " + a
          )
        );

        card.appendChild(
          tjArabic(item.segs, {
            mode: "lesson",
            show: lesson.classes
          })
        );

        const present = lesson.classes.filter(
          (c) => item.classes.includes(c)
        );

        if (present.length) {
          card.appendChild(
            tjLegend(present)
          );
        }

        const actions = el("div", "actions");

        const play = el(
          "button",
          "btn",
          "▶ استمع إلى الآية"
        );

        if (!v.audio) {
          play.disabled = true;
        }

        play.addEventListener(
          "click",
          () => toggleAudio(play, v.audio)
        );

        actions.appendChild(play);

        card.appendChild(actions);

        if (typeof attachRecorder === "function") {
          attachRecorder(card, v);
        }

        exBox.appendChild(card);
      }

      if (best.length > 3) {
        const more = el(
          "button",
          "btn ghost",
          "عرض أمثلة أخرى"
        );

        more.addEventListener("click", draw);

        const wrap = el(
          "div",
          "actions center-actions"
        );

        wrap.appendChild(more);
        exBox.appendChild(wrap);
      }
    };

    await draw();

  } catch (err) {
    console.error(err);

    exBox.innerHTML = "";

    exBox.appendChild(
      el(
        "p",
        "error",
        "الأمثلة الملونة غير متاحة حالياً. تحقق من اتصالك بالإنترنت. يمكنك متابعة قراءة الدرس."
      )
    );
  }
}

// ====== الاختبار ======

const TJ_QUIZ_TOTAL = 5;

async function tjQuizStart() {
  stopAudio();

  tjBox.innerHTML = "";

  tjBox.appendChild(
    el("h1", "game-title", "اختبار أحكام التجويد")
  );

  tjBox.appendChild(
    el("p", "muted center", "جارٍ تحضير الأسئلة...")
  );

  try {
    const pool = await tjLoadMany(
      TJ_SURAHS.slice(0, 18)
    );

    const usable = pool.filter(
      (v) => v.classes.length
    );

    const classes = [
      ...new Set(
        usable.flatMap((v) => v.classes)
      )
    ];

    if (classes.length < 2) {
      throw new Error("عدد القواعد غير كافٍ");
    }

    tjQuiz = {
      pool: usable,
      classes,
      number: 0,
      score: 0
    };

    tjQuizNext();

  } catch (err) {
    console.error(err);

    tjBox.innerHTML = "";

    tjBox.appendChild(
      el(
        "p",
        "error",
        "الاختبار غير متاح حالياً. تحقق من اتصالك بالإنترنت."
      )
    );

    const b = el("button", "btn", "العودة");

    b.addEventListener("click", tjHome);

    const w = el("div", "center");

    w.appendChild(b);

    tjBox.appendChild(w);
  }
}

// ====== السؤال التالي ======

function tjQuizNext() {
  stopAudio();

  const q = tjQuiz;

  q.number++;

  const target = q.classes[
    randInt(0, q.classes.length - 1)
  ];

  const verses = q.pool
    .filter((v) => v.classes.includes(target))
    .sort((a, b) => a.len - b.len)
    .slice(0, 15);

  const item = verses[
    randInt(0, verses.length - 1)
  ];

  const spots = [];

  let k = -1;

  item.segs.forEach((s) => {
    if (tjKnown(s)) {
      k++;

      if (s.cls === target) {
        spots.push(k);
      }
    }
  });

  const idx = spots[
    randInt(0, spots.length - 1)
  ];

  const others = shuffle(
    q.classes.filter((c) => c !== target)
  ).slice(0, 3);

  const choices = shuffle([
    target,
    ...others
  ]);

  tjBox.innerHTML = "";

  const head = el("div", "game-head");

  head.appendChild(
    el(
      "span",
      "",
      "السؤال " + q.number + " من " + TJ_QUIZ_TOTAL
    )
  );

  head.appendChild(
    el("span", "score", "النقاط: " + q.score)
  );

  tjBox.appendChild(head);

  const card = el("article", "verse");

  card.appendChild(
    tjArabic(item.segs, {
      mode: "quiz",
      target: idx
    })
  );

  const actions = el("div", "actions");

  const play = el(
    "button",
    "btn",
    "▶ استمع إلى الآية"
  );

  actions.appendChild(play);
  card.appendChild(actions);

  tjBox.appendChild(card);

  getVerse(item.key)
    .then((v) => {
      if (!v.audio) {
        play.disabled = true;
      }

      play.addEventListener(
        "click",
        () => toggleAudio(play, v.audio)
      );
    })
    .catch(() => {
      play.disabled = true;
    });

  tjBox.appendChild(
    el(
      "p",
      "game-ask",
      "ما هو حكم التجويد في الجزء الملوّن؟"
    )
  );

  const box = el("div", "choices");

  const buttons = [];

  choices.forEach((c) => {
    const b = el(
      "button",
      "choice",
      TJ_RULES[c].name
    );

    b.addEventListener("click", () => {
      buttons.forEach((x) => {
        x.disabled = true;
      });

      const good = c === target;

      if (good) {
        q.score++;
      }

      b.classList.add(
        good ? "correct" : "wrong"
      );

      buttons[
        choices.indexOf(target)
      ].classList.add("correct");

      const fb = el(
        "div",
        "feedback " + (good ? "ok" : "ko")
      );

      fb.appendChild(
        el(
          "strong",
          "",
          good ? "أحسنت! إجابة صحيحة." : "إجابة غير صحيحة."
        )
      );

      fb.appendChild(
        el(
          "p",
          "",
          TJ_RULES[target].name +
          ": " +
          TJ_RULES[target].info
        )
      );

      const last = q.number >= TJ_QUIZ_TOTAL;

      const next = el(
        "button",
        "btn",
        last ? "عرض النتيجة" : "السؤال التالي ←"
      );

      next.addEventListener("click", () => {
        if (last) {
          tjQuizEnd();
        } else {
          tjQuizNext();
        }
      });

      fb.appendChild(next);

      tjBox.appendChild(fb);

      fb.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });

    buttons.push(b);
    box.appendChild(b);
  });

  tjBox.appendChild(box);
}

// ====== نهاية الاختبار ======

function tjQuizEnd() {
  stopAudio();

  const q = tjQuiz;

  tjQuiz = null;

  recordResult("tajwid", q.score);

  tjBox.innerHTML = "";

  tjBox.appendChild(
    el("h1", "game-title", "انتهى الاختبار")
  );

  tjBox.appendChild(
    el(
      "p",
      "final-score",
      q.score + " / " + TJ_QUIZ_TOTAL
    )
  );

  tjBox.appendChild(
    el(
      "p",
      "muted center",
      q.score >= 4
        ? "ممتاز! واصل تعلم أحكام التجويد."
        : "راجع الدروس وحاول مرة أخرى لتحسين نتيجتك."
    )
  );

  const again = el(
    "button",
    "btn",
    "إعادة الاختبار"
  );

  again.addEventListener(
    "click",
    tjQuizStart
  );

  const home = el(
    "button",
    "btn ghost",
    "العودة إلى الدروس"
  );

  home.addEventListener(
    "click",
    tjHome
  );

  const row = el(
    "div",
    "actions center-actions"
  );

  row.appendChild(again);
  row.appendChild(home);

  tjBox.appendChild(row);
}

// ====== عند الضغط على تبويب التجويد ======

document
  .querySelector('.tab[data-view="tajwid"]')
  .addEventListener("click", () => {
    if (!tjQuiz) {
      tjHome();
    }
  });