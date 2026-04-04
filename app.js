/* الاستعمار أحقاد وأطماع — COLONIALISM: GRUDGES & GREED — app.js v3.0 */
/* Based on "Al-Isti'mar Ahqad wa Atma'" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'الاستعمار أحقاد وأطماع',
    splashSub: 'كشف حقيقة الاستعمار وأطماعه',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ١٢٠',
    tabHome: 'الرئيسية', tabCards: 'البطاقات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'بطاقات الوعي',
    cardsDesc: '٢٠ بطاقة تكشف حقيقة الاستعمار وأساليبه — من كتاب الشيخ محمد الغزالي',
    quizTitle: '🏆 من سيصبح عالِماً؟',
    quizDesc: 'اختبر وعيك بحقيقة الاستعمار — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلة الوعي',
    progressDesc: 'تقدمك وإنجازاتك في فهم حقيقة الاستعمار',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية التحرر والعزة',
    dailyLabel: '✨ فكرة اليوم',
    searchPlaceholder: 'ابحث في البطاقات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '٢٠ بطاقة تكشف أساليب الاستعمار',
      'مسابقة "من سيصبح عالماً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Colonialism: Grudges & Greed',
    splashSub: 'Exposing the truth of colonialism and its greed',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:120',
    tabHome: 'Home', tabCards: 'Cards', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Awareness Cards',
    cardsDesc: '20 cards exposing the reality of colonialism and its methods — from Sheikh al-Ghazali\'s book',
    quizTitle: '🏆 Who Wants to Be a Scholar?',
    quizDesc: 'Test your awareness of colonialism — 4 choices per question',
    progressTitle: 'Awareness Journey',
    progressDesc: 'Your progress and achievements in understanding colonialism',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Liberation & Honor',
    dailyLabel: "✨ Today's Insight",
    searchPlaceholder: 'Search cards...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cards exposing colonial methods',
      '"Who Wants to Be a Scholar?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Le Colonialisme : Rancunes et Convoitises',
    splashSub: 'Reveler la verite du colonialisme et ses ambitions',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:120',
    tabHome: 'Accueil', tabCards: 'Cartes', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Cartes de Sensibilisation',
    cardsDesc: '20 cartes revelant la realite du colonialisme et ses methodes — du livre du Sheikh al-Ghazali',
    quizTitle: '🏆 Qui Veut Devenir Savant ?',
    quizDesc: 'Testez votre conscience du colonialisme — 4 choix par question',
    progressTitle: 'Parcours de Sensibilisation',
    progressDesc: 'Vos progres dans la comprehension du colonialisme',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour la Liberation et l\'Honneur',
    dailyLabel: '✨ Idee du Jour',
    searchPlaceholder: 'Rechercher les cartes...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '20 cartes revelant les methodes coloniales',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 20 AWARENESS CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🎭',
    ar:{title:'العقلية الاستعمارية',desc:'المستعمر لا يأتي بالسلاح فقط بل يأتي بعقلية متعالية تحتقر الشعوب وتعتبرها أقل من البشر. يبرر ظلمه بأنه "يحضّر المتخلفين". هذه العقلية هي أخطر ما في الاستعمار لأنها تُشرعن السرقة والقتل.',verse:'وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ مِلَّتَهُمْ',verseRef:'البقرة ١٢٠',hadith:'لا فضل لعربي على أعجمي ولا لأبيض على أسود إلا بالتقوى — رواه أحمد',action:'اقرأ عن تاريخ بلدك وكيف قاوم الاستعمار — واعتز بهويتك',young:'المستعمر يقول: أنا أفضل منك! لكن الإسلام يقول: كل الناس متساوون! 🎭'},
    en:{title:'The Colonial Mentality',desc:'The colonizer does not come only with weapons but with an arrogant mentality that despises peoples and considers them less than human. They justify their oppression by claiming to "civilize the backward." This mentality is the most dangerous aspect of colonialism because it legitimizes theft and murder.',verse:'And never will the Jews or the Christians approve of you until you follow their religion',verseRef:'Al-Baqarah 120',hadith:'No Arab has superiority over a non-Arab, nor a white over a black, except through piety — Ahmad',action:'Read about your country\'s history and how it resisted colonialism — be proud of your identity',young:'The colonizer says: I am better than you! But Islam says: All people are equal! 🎭'},
    fr:{title:'La Mentalite Coloniale',desc:"Le colonisateur ne vient pas seulement avec des armes mais avec une mentalite arrogante qui meprise les peuples et les considere comme inferieurs. Il justifie son oppression en pretendant 'civiliser les arrieres'. Cette mentalite est l'aspect le plus dangereux du colonialisme.",verse:'Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur religion',verseRef:'Al-Baqarah 120',hadith:"Aucun Arabe n'a de superiorite sur un non-Arabe, ni un blanc sur un noir, sauf par la piete — Ahmad",action:"Lisez l'histoire de votre pays et comment il a resiste au colonialisme — soyez fiers de votre identite",young:"Le colonisateur dit : Je suis meilleur que toi ! Mais l'Islam dit : Tous les gens sont egaux ! 🎭"}
  },
  {
    id:2, emoji:'✂️',
    ar:{title:'فرّق تسد',desc:'أخطر أسلحة المستعمر: تفريق الشعوب بإثارة الخلافات بين القبائل والطوائف والأعراق. يجعلهم يتقاتلون فيما بينهم بينما هو يسرق خيراتهم. كلما اتحد الناس ضعف المستعمر.',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ١٠٣',hadith:'يد الله مع الجماعة — رواه الترمذي',action:'كن جسراً للوحدة بين الناس اليوم — لا تشارك في نشر الفرقة والخلاف',young:'المستعمر يحب أن يتخاصم الناس! لكن لما نتحد نصبح أقوياء جداً! ✂️'},
    en:{title:'Divide and Rule',desc:'The most dangerous weapon of the colonizer: dividing peoples by stirring conflicts between tribes, sects, and races. They make them fight each other while stealing their resources. The more united the people, the weaker the colonizer becomes.',verse:'And hold firmly to the rope of Allah all together and do not become divided',verseRef:'Al Imran 103',hadith:'The hand of Allah is with the united group — Tirmidhi',action:'Be a bridge of unity among people today — do not participate in spreading division and conflict',young:'The colonizer loves when people fight each other! But when we unite, we become very strong! ✂️'},
    fr:{title:'Diviser pour Regner',desc:"L'arme la plus dangereuse du colonisateur : diviser les peuples en attisant les conflits entre tribus, sectes et races. Il les fait se battre entre eux tout en volant leurs ressources. Plus les gens sont unis, plus le colonisateur s'affaiblit.",verse:"Et cramponnez-vous tous ensemble au cable d'Allah et ne soyez pas divises",verseRef:'Al Imran 103',hadith:"La main d'Allah est avec le groupe uni — Tirmidhi",action:"Soyez un pont d'unite entre les gens aujourd'hui — ne participez pas a repandre la division",young:"Le colonisateur aime quand les gens se battent ! Mais quand on s'unit, on devient tres forts ! ✂️"}
  },
  {
    id:3, emoji:'💎',
    ar:{title:'الاستغلال الاقتصادي',desc:'الهدف الأول للاستعمار هو نهب ثروات الشعوب — الذهب والنفط والأحجار الكريمة والأرض الزراعية. يأخذ المواد الخام بأبخس الأثمان ثم يبيعها مصنّعة بأغلى الأسعار. دورة استنزاف لا تنتهي.',verse:'وَلَا تَأْكُلُوا أَمْوَالَكُمْ بَيْنَكُمْ بِالْبَاطِلِ',verseRef:'البقرة ١٨٨',hadith:'ليس منا من غش — رواه مسلم',action:'ادعم المنتج المحلي اليوم — اشترِ شيئاً صنع في بلدك',young:'المستعمر مثل اللص — يأخذ كنوز الناس ويهرب! يجب أن نحمي خيراتنا! 💎'},
    en:{title:'Economic Exploitation',desc:'The primary goal of colonialism is to plunder the wealth of peoples — gold, oil, precious stones, and farmland. It takes raw materials at the cheapest prices then sells them manufactured at the highest prices. An endless cycle of drain.',verse:'And do not consume one another\'s wealth unjustly',verseRef:'Al-Baqarah 188',hadith:'Whoever cheats us is not one of us — Muslim',action:'Support local products today — buy something made in your country',young:'The colonizer is like a thief — takes people\'s treasures and runs! We must protect our resources! 💎'},
    fr:{title:'L\'Exploitation Economique',desc:"L'objectif premier du colonialisme est de piller les richesses des peuples — or, petrole, pierres precieuses et terres agricoles. Il prend les matieres premieres aux prix les plus bas puis les revend manufacturees aux prix les plus eleves.",verse:'Et ne mangez pas vos biens entre vous de maniere illicite',verseRef:'Al-Baqarah 188',hadith:'Celui qui nous trompe n\'est pas des notres — Muslim',action:"Soutenez les produits locaux aujourd'hui — achetez quelque chose fabrique dans votre pays",young:"Le colonisateur est comme un voleur — il prend les tresors des gens et s'enfuit ! Protegeons nos richesses ! 💎"}
  },
  {
    id:4, emoji:'🎨',
    ar:{title:'التدمير الثقافي',desc:'المستعمر لا يكتفي بسرقة المال بل يسعى لتدمير ثقافة الشعوب ولغتها وتراثها. يفرض لغته وعاداته ويحقّر كل ما هو محلي. الهدف: صنع شعب بلا هوية يسهل السيطرة عليه.',verse:'وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّكَ لَنْ تَخْرِقَ الْأَرْضَ',verseRef:'الإسراء ٣٧',hadith:'ليس منا من دعا إلى عصبية — رواه أبو داود',action:'تعلم شيئاً جديداً عن تراث بلدك اليوم — أمثال شعبية أو حرفة يدوية',young:'لغتك وتراثك كنز ثمين! لا تدع أحداً يقول لك إنها أقل من غيرها! 🎨'},
    en:{title:'Cultural Destruction',desc:'The colonizer is not content with stealing money but seeks to destroy the culture, language, and heritage of peoples. They impose their language and customs while belittling everything local. The goal: creating a people without identity who are easy to control.',verse:'And do not walk upon the earth with arrogance',verseRef:'Al-Isra 37',hadith:'Whoever calls to tribalism is not one of us — Abu Dawud',action:'Learn something new about your country\'s heritage today — local proverbs or a traditional craft',young:'Your language and heritage are a precious treasure! Do not let anyone tell you they are less than others! 🎨'},
    fr:{title:'La Destruction Culturelle',desc:"Le colonisateur ne se contente pas de voler l'argent mais cherche a detruire la culture, la langue et le patrimoine des peuples. Il impose sa langue et ses coutumes tout en denigrant tout ce qui est local.",verse:'Et ne foule pas la terre avec orgueil',verseRef:'Al-Isra 37',hadith:'Celui qui appelle au tribalisme n\'est pas des notres — Abu Dawud',action:"Apprenez quelque chose de nouveau sur le patrimoine de votre pays — proverbes locaux ou artisanat traditionnel",young:"Ta langue et ton patrimoine sont un tresor precieux ! Ne laisse personne te dire qu'ils sont inferieurs ! 🎨"}
  },
  {
    id:5, emoji:'📚',
    ar:{title:'التلاعب بالتعليم',desc:'المستعمر يسيطر على المناهج الدراسية ليصنع أجيالاً مشوّهة الفكر. يعلّمهم تاريخه المزيف ويحذف تاريخهم الحقيقي. يربي فيهم الإعجاب بالمستعمر واحتقار أنفسهم.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'اقرأ كتاباً عن تاريخ بلدك من مؤلف محلي — لا من منظور المستعمر',young:'تعلم تاريخ بلدك الحقيقي! أنت من شعب عظيم له تاريخ مشرّف! 📚'},
    en:{title:'Educational Manipulation',desc:'The colonizer controls curricula to create generations with distorted thinking. They teach them a false history and erase their real one. They instill admiration for the colonizer and contempt for themselves.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Read a book about your country\'s history written by a local author — not from the colonizer\'s perspective',young:'Learn your country\'s real history! You are from a great people with an honorable history! 📚'},
    fr:{title:'La Manipulation Educative',desc:"Le colonisateur controle les programmes scolaires pour creer des generations a la pensee deformee. Il leur enseigne une histoire falsifiee et efface leur vraie histoire.",verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:"Lisez un livre sur l'histoire de votre pays ecrit par un auteur local",young:"Apprends la vraie histoire de ton pays ! Tu es d'un grand peuple avec une histoire honorable ! 📚"}
  },
  {
    id:6, emoji:'⛪',
    ar:{title:'الغطاء التبشيري',desc:'استخدم المستعمرون التبشير كأداة لاختراق المجتمعات الإسلامية. بنوا المدارس والمستشفيات ليس حباً في العلم والصحة بل كوسيلة لتغيير عقائد الناس وربطهم بالمستعمر ثقافياً.',verse:'وَدَّ كَثِيرٌ مِنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُمْ مِنْ بَعْدِ إِيمَانِكُمْ كُفَّارًا',verseRef:'البقرة ١٠٩',hadith:'تركت فيكم ما إن تمسكتم بهما لن تضلوا أبداً: كتاب الله وسنتي — رواه مالك',action:'تعلم أساسيات دينك جيداً — المسلم الواعي لا يُخدع بسهولة',young:'بعض الناس يتظاهرون بالمساعدة لكنهم يريدون تغيير أفكارك! كن ذكياً! ⛪'},
    en:{title:'The Missionary Cover',desc:'Colonizers used missionary work as a tool to penetrate Muslim societies. They built schools and hospitals not out of love for education and health but as a means to change people\'s beliefs and tie them culturally to the colonizer.',verse:'Many of the People of the Book wish they could turn you back to disbelief after your faith',verseRef:'Al-Baqarah 109',hadith:'I have left among you two things that if you hold to them you will never go astray: the Book of Allah and my Sunnah — Malik',action:'Learn the basics of your religion well — an aware Muslim is not easily deceived',young:'Some people pretend to help but they want to change your ideas! Be smart! ⛪'},
    fr:{title:'La Couverture Missionnaire',desc:"Les colonisateurs ont utilise le proselytisme comme outil pour penetrer les societes musulmanes. Ils ont construit des ecoles et des hopitaux non par amour de l'education mais comme moyen de changer les croyances des gens.",verse:"Beaucoup de Gens du Livre aimeraient pouvoir vous ramener a la mecreance apres votre foi",verseRef:'Al-Baqarah 109',hadith:"Je vous ai laisse deux choses auxquelles si vous vous accrochez vous ne vous egarerez jamais : le Livre d'Allah et ma Sunnah — Malik",action:"Apprenez bien les bases de votre religion — un musulman conscient n'est pas facilement trompe",young:"Certaines personnes font semblant d'aider mais veulent changer tes idees ! Sois malin ! ⛪"}
  },
  {
    id:7, emoji:'⚔️',
    ar:{title:'العدوان العسكري',desc:'العنف المباشر هو الوجه الصريح للاستعمار — الجيوش تحتل البلاد وتقتل المقاومين وتدمر البنية التحتية. المستعمر يستخدم أحدث الأسلحة ضد شعوب لا تملك سوى إرادتها.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'تعلم مهارة جديدة تقوي أمتك — علم أو تقنية أو لغة',young:'المستعمر يستخدم القوة ليخيف الناس! لكن الشجاعة أقوى من أي سلاح! ⚔️'},
    en:{title:'Military Aggression',desc:'Direct violence is the explicit face of colonialism — armies occupy lands, kill resisters, and destroy infrastructure. The colonizer uses the latest weapons against peoples who have nothing but their willpower.',verse:'And prepare against them whatever you are able of power',verseRef:'Al-Anfal 60',hadith:'A strong believer is better and more beloved to Allah than a weak believer — Muslim',action:'Learn a new skill that strengthens your nation — science, technology, or a language',young:'The colonizer uses force to scare people! But courage is stronger than any weapon! ⚔️'},
    fr:{title:'L\'Agression Militaire',desc:"La violence directe est le visage explicite du colonialisme — les armees occupent les terres, tuent les resistants et detruisent l'infrastructure.",verse:'Et preparez contre eux tout ce que vous pouvez comme force',verseRef:'Al-Anfal 60',hadith:'Un croyant fort est meilleur et plus aime d\'Allah qu\'un croyant faible — Muslim',action:"Apprenez une nouvelle competence qui renforce votre nation — science, technologie ou langue",young:"Le colonisateur utilise la force pour effrayer les gens ! Mais le courage est plus fort que toute arme ! ⚔️"}
  },
  {
    id:8, emoji:'🗺️',
    ar:{title:'الحدود المصطنعة',desc:'رسم المستعمرون حدوداً مصطنعة بين الشعوب التي كانت موحدة. قسموا القبائل والأسر والأمم بخطوط على الخريطة لا تراعي التاريخ ولا الجغرافيا ولا الثقافة. هدفهم إضعاف كل جزء على حدة.',verse:'إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٩٢',hadith:'المسلم أخو المسلم — متفق عليه',action:'تعرف على جيرانك من دول أخرى — الحدود لا تفصل بين القلوب',young:'المستعمر رسم خطوطاً على الخريطة ليفرّق الناس! لكننا كلنا إخوة! 🗺️'},
    en:{title:'Artificial Borders',desc:'Colonizers drew artificial borders between peoples who were united. They divided tribes, families, and nations with lines on a map that did not respect history, geography, or culture. Their goal: weaken each part separately.',verse:'Indeed this, your religion, is one religion, and I am your Lord, so worship Me',verseRef:'Al-Anbiya 92',hadith:'A Muslim is the brother of a Muslim — Agreed upon',action:'Get to know your neighbors from other countries — borders do not separate hearts',young:'The colonizer drew lines on the map to separate people! But we are all brothers and sisters! 🗺️'},
    fr:{title:'Les Frontieres Artificielles',desc:"Les colonisateurs ont trace des frontieres artificielles entre des peuples qui etaient unis. Ils ont divise des tribus, des familles et des nations avec des lignes sur une carte.",verse:'Certes, cette communaute qui est la votre est une communaute unique, et Je suis votre Seigneur',verseRef:'Al-Anbiya 92',hadith:'Le musulman est le frere du musulman — Unanimement reconnu',action:"Faites connaissance avec vos voisins d'autres pays — les frontieres ne separent pas les coeurs",young:"Le colonisateur a trace des lignes sur la carte pour separer les gens ! Mais nous sommes tous freres et soeurs ! 🗺️"}
  },
  {
    id:9, emoji:'⛏️',
    ar:{title:'نهب الموارد الطبيعية',desc:'المستعمر لا يكتفي بالمواد الخام بل يستنزف كل مورد طبيعي — المياه والغابات والمعادن والأرض الخصبة. يدمر البيئة ولا يبالي بمستقبل الأجيال القادمة. الأرض تُفقّر بينما المستعمر يزداد ثراءً.',verse:'وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا',verseRef:'الأعراف ٥٦',hadith:'ما من مسلم يغرس غرساً فيأكل منه طير أو إنسان إلا كان له به صدقة — متفق عليه',action:'ازرع شجرة أو اعتنِ بنبتة — حافظ على موارد بلدك الطبيعية',young:'المستعمر يأخذ كل شيء من الأرض! لكن الله أمرنا أن نحافظ على الطبيعة ⛏️'},
    en:{title:'Resource Theft',desc:'The colonizer does not stop at raw materials but drains every natural resource — water, forests, minerals, and fertile land. They destroy the environment without caring about future generations. The land is impoverished while the colonizer grows richer.',verse:'And do not cause corruption on the earth after its reform',verseRef:'Al-Araf 56',hadith:'No Muslim plants a tree from which a bird or human eats except that it counts as charity — Agreed upon',action:'Plant a tree or care for a plant — preserve your country\'s natural resources',young:'The colonizer takes everything from the land! But Allah told us to protect nature ⛏️'},
    fr:{title:'Le Vol des Ressources',desc:"Le colonisateur ne se contente pas des matieres premieres mais epuise chaque ressource naturelle — eau, forets, mineraux et terres fertiles. Il detruit l'environnement sans se soucier des generations futures.",verse:'Et ne semez pas la corruption sur terre apres sa reforme',verseRef:'Al-Araf 56',hadith:'Tout musulman qui plante un arbre dont un oiseau ou un homme mange en sera recompense — Unanimement reconnu',action:"Plantez un arbre ou prenez soin d'une plante — preservez les ressources naturelles de votre pays",young:"Le colonisateur prend tout de la terre ! Mais Allah nous a dit de proteger la nature ⛏️"}
  },
  {
    id:10, emoji:'🧠',
    ar:{title:'الحرب النفسية',desc:'المستعمر يخوض حرباً نفسية لكسر إرادة الشعوب قبل كسر جيوشها. يزرع الخوف واليأس والشعور بالدونية. يريد أن يقتنع المستعمَر بأنه لا يستطيع العيش بدون المستعمِر.',verse:'لَا تَحْسَبُوهُ شَرًّا لَكُمْ بَلْ هُوَ خَيْرٌ لَكُمْ',verseRef:'النور ١١',hadith:'لا تحقرن من المعروف شيئاً — رواه مسلم',action:'عزّز ثقتك بنفسك وبأمتك — اقرأ عن إنجازات المسلمين في العلم والحضارة',young:'لا تصدّق من يقول لك إنك ضعيف! أنت قوي وذكي ولديك تاريخ عظيم! 🧠'},
    en:{title:'Psychological Warfare',desc:'The colonizer wages psychological war to break the will of peoples before breaking their armies. They plant fear, despair, and feelings of inferiority. They want the colonized to believe they cannot live without the colonizer.',verse:'Do not think it bad for you; rather it is good for you',verseRef:'An-Nur 11',hadith:'Do not belittle any good deed — Muslim',action:'Strengthen your confidence in yourself and your nation — read about Muslim achievements in science and civilization',young:'Do not believe anyone who tells you that you are weak! You are strong and smart with a great history! 🧠'},
    fr:{title:'La Guerre Psychologique',desc:"Le colonisateur mene une guerre psychologique pour briser la volonte des peuples avant de briser leurs armees. Il seme la peur, le desespoir et le sentiment d'inferiorite.",verse:'Ne pensez pas que c\'est un mal pour vous, c\'est plutot un bien',verseRef:'An-Nur 11',hadith:'Ne meprisez aucune bonne action — Muslim',action:"Renforcez votre confiance en vous et en votre nation — lisez les realisations des musulmans en science",young:"Ne crois personne qui te dit que tu es faible ! Tu es fort et intelligent avec une grande histoire ! 🧠"}
  },
  {
    id:11, emoji:'🕸️',
    ar:{title:'الاستعمار الجديد',desc:'بعد رحيل الجيوش ظهر استعمار جديد أكثر خبثاً. يتحكم في الاقتصاد عبر الديون والشركات العابرة للقارات. يضع شروطاً مذلة مقابل القروض ويفرض سياسات تخدم مصالحه لا مصالح الشعوب.',verse:'وَلَا تَرْكَنُوا إِلَى الَّذِينَ ظَلَمُوا فَتَمَسَّكُمُ النَّارُ',verseRef:'هود ١١٣',hadith:'إن الله يبغض كل جعظري جوّاظ — رواه أبو داود',action:'تعلم الاقتصاد الإسلامي والمعاملات الحلال — كن واعياً بالمنظومة المالية',young:'الاستعمار لم ينتهِ بل تغيّر شكله! الآن يستعمل المال بدل الجيوش! 🕸️'},
    en:{title:'Neo-Colonialism',desc:'After armies withdrew, a more cunning colonialism emerged. It controls economies through debt and multinational corporations. It sets humiliating conditions for loans and imposes policies serving its interests, not the people\'s.',verse:'And do not incline toward those who do wrong, lest the Fire touch you',verseRef:'Hud 113',hadith:'Allah detests every arrogant tyrant — Abu Dawud',action:'Learn about Islamic economics and permissible transactions — be aware of the financial system',young:'Colonialism did not end, it just changed its form! Now it uses money instead of armies! 🕸️'},
    fr:{title:'Le Neo-Colonialisme',desc:"Apres le retrait des armees, un colonialisme plus ruse est apparu. Il controle les economies par la dette et les multinationales. Il impose des conditions humiliantes pour les prets.",verse:'Et ne vous penchez pas vers les injustes, sinon le Feu vous toucherait',verseRef:'Hud 113',hadith:'Allah deteste tout tyran arrogant — Abu Dawud',action:"Apprenez l'economie islamique et les transactions licites — soyez conscient du systeme financier",young:"Le colonialisme n'a pas pris fin, il a juste change de forme ! Maintenant il utilise l'argent au lieu des armees ! 🕸️"}
  },
  {
    id:12, emoji:'🔗',
    ar:{title:'التبعية الاقتصادية',desc:'المستعمر يربط اقتصاد المستعمرات به ربطاً محكماً. يجعلها تعتمد على تصدير مادة واحدة واستيراد كل شيء. فإذا انهار سعر هذه المادة انهار البلد كله. تبعية مصممة بعناية.',verse:'وَلَا تُلْقُوا بِأَيْدِيكُمْ إِلَى التَّهْلُكَةِ',verseRef:'البقرة ١٩٥',hadith:'ما عال من اقتصد — رواه أحمد',action:'تعلم مهارة إنتاجية جديدة — لا تكن مستهلكاً فقط بل كن منتجاً',young:'لا تعتمد على شخص واحد في كل شيء! تعلم أن تكون مستقلاً وقوياً! 🔗'},
    en:{title:'Economic Dependence',desc:'The colonizer tightly binds the economy of colonies to itself. It makes them depend on exporting one commodity and importing everything else. If the price of that commodity collapses, the whole country collapses. Carefully designed dependence.',verse:'And do not throw yourselves with your own hands into destruction',verseRef:'Al-Baqarah 195',hadith:'Whoever is moderate will not be impoverished — Ahmad',action:'Learn a new productive skill — do not be just a consumer but also a producer',young:'Do not depend on one person for everything! Learn to be independent and strong! 🔗'},
    fr:{title:'La Dependance Economique',desc:"Le colonisateur lie etroitement l'economie des colonies a la sienne. Il les fait dependre de l'exportation d'une seule matiere et de l'importation de tout le reste.",verse:'Et ne vous jetez pas de vos propres mains dans la perdition',verseRef:'Al-Baqarah 195',hadith:'Celui qui est modere ne sera pas appauvri — Ahmad',action:"Apprenez une nouvelle competence productive — ne soyez pas seulement consommateur mais aussi producteur",young:"Ne depends pas d'une seule personne pour tout ! Apprends a etre independant et fort ! 🔗"}
  },
  {
    id:13, emoji:'🌱',
    ar:{title:'استعادة الهوية الثقافية',desc:'بعد التحرر من الاستعمار تبدأ رحلة أصعب: استعادة الهوية الثقافية المسروقة. إحياء اللغة الأصلية والتراث والقيم. الأمة التي تفقد هويتها تفقد مستقبلها.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'كلكم لآدم وآدم من تراب — رواه الترمذي',action:'تعلم شيئاً من تراثك اليوم — شعر أو حكمة أو وصفة أو حرفة تقليدية',young:'تراثك كنز عظيم! تعلم لغتك وعاداتك الجميلة وكن فخوراً بها! 🌱'},
    en:{title:'Cultural Recovery',desc:'After liberation from colonialism begins a harder journey: recovering the stolen cultural identity. Reviving the original language, heritage, and values. A nation that loses its identity loses its future.',verse:'Indeed, Allah will not change the condition of a people until they change what is in themselves',verseRef:'Ar-Rad 13:11',hadith:'All of you are from Adam and Adam is from dust — Tirmidhi',action:'Learn something from your heritage today — poetry, wisdom, a recipe, or a traditional craft',young:'Your heritage is a great treasure! Learn your language and beautiful customs and be proud! 🌱'},
    fr:{title:'La Recuperation Culturelle',desc:"Apres la liberation du colonialisme commence un voyage plus difficile : recuperer l'identite culturelle volee. Raviver la langue originale, le patrimoine et les valeurs.",verse:'Allah ne change pas la condition d\'un peuple tant qu\'il ne change pas ce qui est en lui-meme',verseRef:'Ar-Rad 13:11',hadith:'Vous etes tous d\'Adam et Adam est de poussiere — Tirmidhi',action:"Apprenez quelque chose de votre patrimoine aujourd'hui — poesie, sagesse, recette ou artisanat",young:"Ton patrimoine est un grand tresor ! Apprends ta langue et tes belles coutumes et sois fier ! 🌱"}
  },
  {
    id:14, emoji:'🗣️',
    ar:{title:'الإمبريالية اللغوية',desc:'فرض المستعمر لغته على الشعوب المحتلة وجعلها لغة الإدارة والتعليم والعلم. من لا يتكلم لغة المستعمر يُهمّش. الهدف: قطع الشعب عن تراثه ومصادره الأصلية.',verse:'وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ',verseRef:'الروم ٢٢',hadith:'مَنْ تعلم لغة قوم أمن مكرهم — أثر',action:'اعتز بلغتك الأم وعلّمها لأطفالك — وتعلم لغات أخرى دون أن تفقد لغتك',young:'لغتك جميلة وقيمة! تعلم لغات أخرى لكن لا تنسَ لغتك الأم أبداً! 🗣️'},
    en:{title:'Language Imperialism',desc:'The colonizer imposed their language on occupied peoples, making it the language of administration, education, and science. Those who do not speak the colonizer\'s language are marginalized. The goal: cut the people off from their heritage and original sources.',verse:'And among His signs is the creation of the heavens and earth and the diversity of your languages and colors',verseRef:'Ar-Rum 22',hadith:'Whoever learns the language of a people is safe from their schemes — Tradition',action:'Be proud of your mother tongue and teach it to your children — learn other languages without losing yours',young:'Your language is beautiful and valuable! Learn other languages but never forget your mother tongue! 🗣️'},
    fr:{title:'L\'Imperialisme Linguistique',desc:"Le colonisateur a impose sa langue aux peuples occupes, en faisant la langue de l'administration, de l'education et de la science. Ceux qui ne parlent pas la langue du colonisateur sont marginalises.",verse:'Et parmi Ses signes, la creation des cieux et de la terre et la diversite de vos langues et couleurs',verseRef:'Ar-Rum 22',hadith:'Celui qui apprend la langue d\'un peuple se protege de ses ruses — Tradition',action:"Soyez fiers de votre langue maternelle et enseignez-la a vos enfants — apprenez d'autres langues sans perdre la votre",young:"Ta langue est belle et precieuse ! Apprends d'autres langues mais n'oublie jamais ta langue maternelle ! 🗣️"}
  },
  {
    id:15, emoji:'🏛️',
    ar:{title:'بناء المؤسسات السيادية',desc:'التحرر الحقيقي يبدأ ببناء مؤسسات وطنية قوية ومستقلة — تعليم ذاتي وقضاء عادل واقتصاد منتج وجيش رادع. بدون مؤسسات قوية يبقى الاستقلال شكلياً.',verse:'وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَى',verseRef:'المائدة ٢',hadith:'ما من أمير يلي أمور المسلمين ثم لا يجتهد لهم وينصح لهم إلا لم يدخل معهم الجنة — رواه مسلم',action:'شارك في بناء مجتمعك — تطوع أو علّم أو ساهم في مشروع محلي',young:'لنبنِ بلادنا بأنفسنا! كل واحد منا يمكنه المساهمة ببناء مستقبل أفضل! 🏛️'},
    en:{title:'Building Sovereign Institutions',desc:'True liberation begins with building strong, independent national institutions — self-education, fair judiciary, productive economy, and deterrent military. Without strong institutions, independence remains superficial.',verse:'And cooperate in righteousness and piety',verseRef:'Al-Maidah 2',hadith:'Any leader who is entrusted with the affairs of Muslims and does not strive and advise for them will not enter Paradise with them — Muslim',action:'Participate in building your community — volunteer, teach, or contribute to a local project',young:'Let us build our countries ourselves! Each one of us can contribute to building a better future! 🏛️'},
    fr:{title:'Construire des Institutions Souveraines',desc:"La vraie liberation commence par la construction d'institutions nationales fortes et independantes — education autonome, justice equitable, economie productive et armee dissuasive.",verse:'Et entraidez-vous dans la bienfaisance et la piete',verseRef:'Al-Maidah 2',hadith:'Tout dirigeant charge des affaires des musulmans qui ne fait pas d\'effort pour eux n\'entrera pas au Paradis avec eux — Muslim',action:"Participez a la construction de votre communaute — benevolat, enseignement ou projet local",young:"Construisons nos pays nous-memes ! Chacun de nous peut contribuer a batir un avenir meilleur ! 🏛️"}
  },
  {
    id:16, emoji:'📡',
    ar:{title:'السيطرة الإعلامية',desc:'المستعمر يتحكم في وسائل الإعلام ليصنع الرأي العام ويوجّه الشعوب كما يريد. يُظهر نفسه منقذاً ويُظهر المقاوم إرهابياً. من يملك الإعلام يملك عقول الناس.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٦',hadith:'كفى بالمرء كذباً أن يحدث بكل ما سمع — رواه مسلم',action:'لا تصدق كل ما تقرأه — تحقق من مصادر الأخبار وقارن بين عدة مصادر',young:'لا تصدق كل ما تشاهده! تأكد من الأخبار من أكثر من مصدر! 📡'},
    en:{title:'Media Control',desc:'The colonizer controls media to shape public opinion and direct peoples as they wish. They portray themselves as saviors and resisters as terrorists. Whoever owns the media owns people\'s minds.',verse:'O you who believe, if a wicked person comes to you with news, verify it',verseRef:'Al-Hujurat 6',hadith:'It is enough of a lie for a person to narrate everything they hear — Muslim',action:'Do not believe everything you read — verify news sources and compare multiple sources',young:'Do not believe everything you watch! Verify news from more than one source! 📡'},
    fr:{title:'Le Controle Mediatique',desc:"Le colonisateur controle les medias pour faconner l'opinion publique et diriger les peuples comme il le souhaite. Il se presente comme sauveur et presente les resistants comme terroristes.",verse:'O vous qui croyez, si un pervers vous apporte une nouvelle, verifiez-la',verseRef:'Al-Hujurat 6',hadith:'Il suffit comme mensonge a une personne de rapporter tout ce qu\'elle entend — Muslim',action:"Ne croyez pas tout ce que vous lisez — verifiez les sources d'information et comparez plusieurs sources",young:"Ne crois pas tout ce que tu vois ! Verifie les informations de plusieurs sources ! 📡"}
  },
  {
    id:17, emoji:'🎓',
    ar:{title:'استعمار المعرفة',desc:'المستعمر يحتكر المعرفة ويجعل الشعوب تعتمد عليه في التعليم والبحث العلمي. يسرق العقول ويستقطب الكفاءات. يحرم البلدان المستعمرة من بناء قاعدة علمية مستقلة.',verse:'وَقُلْ رَبِّ زِدْنِي عِلْمًا',verseRef:'طه ١١٤',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم مهارة علمية أو تقنية اليوم — وشاركها مع مجتمعك',young:'العلم قوة! تعلم كل يوم شيئاً جديداً وشاركه مع أصدقائك! 🎓'},
    en:{title:'Knowledge Colonialism',desc:'The colonizer monopolizes knowledge and makes peoples dependent on them for education and research. They steal brains and attract talent. They deprive colonized countries of building an independent scientific base.',verse:'And say: My Lord, increase me in knowledge',verseRef:'Taha 114',hadith:'Whoever follows a path seeking knowledge, Allah makes easy for them a path to Paradise — Muslim',action:'Learn a scientific or technical skill today — and share it with your community',young:'Knowledge is power! Learn something new every day and share it with your friends! 🎓'},
    fr:{title:'Le Colonialisme du Savoir',desc:"Le colonisateur monopolise le savoir et rend les peuples dependants de lui pour l'education et la recherche. Il vole les cerveaux et attire les competences.",verse:'Et dis : Mon Seigneur, augmente-moi en savoir',verseRef:'Taha 114',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilite un chemin vers le Paradis — Muslim',action:"Apprenez une competence scientifique ou technique aujourd'hui — et partagez-la avec votre communaute",young:"Le savoir c'est le pouvoir ! Apprends quelque chose de nouveau chaque jour et partage-le ! 🎓"}
  },
  {
    id:18, emoji:'✊',
    ar:{title:'نماذج المقاومة',desc:'عبر التاريخ قاومت الشعوب الاستعمار بأشكال مختلفة — عسكرياً وثقافياً واقتصادياً وفكرياً. من عبد القادر الجزائري إلى عمر المختار، ومن المقاطعة الاقتصادية إلى بناء المدارس الوطنية.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ',verseRef:'آل عمران ١٣٩',hadith:'أفضل الجهاد كلمة حق عند سلطان جائر — رواه أبو داود',action:'اقرأ سيرة بطل من أبطال المقاومة في بلدك — وشارك قصته مع غيرك',young:'أبطال كثيرون قاوموا الظلم! اقرأ عنهم واجعلهم قدوتك في الشجاعة! ✊'},
    en:{title:'Resistance Models',desc:'Throughout history, peoples have resisted colonialism in various forms — military, cultural, economic, and intellectual. From Abdelkader of Algeria to Omar al-Mukhtar, from economic boycotts to building national schools.',verse:'Do not weaken or grieve, for you are the superior ones',verseRef:'Al Imran 139',hadith:'The best jihad is a word of truth before a tyrannical ruler — Abu Dawud',action:'Read the biography of a resistance hero in your country — and share their story with others',young:'Many heroes resisted injustice! Read about them and make them your role models in courage! ✊'},
    fr:{title:'Modeles de Resistance',desc:"A travers l'histoire, les peuples ont resiste au colonialisme sous diverses formes — militaire, culturelle, economique et intellectuelle. D'Abdelkader d'Algerie a Omar al-Mukhtar.",verse:'Ne faiblissez pas et ne vous affligez pas, car vous etes les plus eleves',verseRef:'Al Imran 139',hadith:'Le meilleur jihad est une parole de verite devant un dirigeant tyrannique — Abu Dawud',action:"Lisez la biographie d'un heros de la resistance dans votre pays — et partagez son histoire",young:"De nombreux heros ont resiste a l'injustice ! Lis sur eux et prends-les comme modeles de courage ! ✊"}
  },
  {
    id:19, emoji:'🕌',
    ar:{title:'الموقف الإسلامي',desc:'الإسلام يرفض الظلم بكل أشكاله ويأمر بالعدل ولو على النفس. يرفض الاستعباد ويؤكد كرامة كل إنسان. القرآن والسنة يوفران منهجاً كاملاً لمواجهة الاستعمار بالعلم والعمل والوحدة.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ',verseRef:'آل عمران ١١٠',hadith:'من رأى منكم منكراً فليغيره بيده — رواه مسلم',action:'طبق مبدأ إسلامياً واحداً اليوم: الأمر بالمعروف أو إعانة مظلوم أو نشر العلم',young:'الإسلام يعلمنا أن نكون أقوياء وعادلين ونساعد المظلومين! 🕌'},
    en:{title:'The Islamic Response',desc:'Islam rejects injustice in all its forms and commands justice even against oneself. It rejects enslavement and affirms the dignity of every human. The Quran and Sunnah provide a complete methodology for facing colonialism through knowledge, action, and unity.',verse:'You are the best nation produced for mankind, enjoining good and forbidding evil',verseRef:'Al Imran 110',hadith:'Whoever among you sees evil, let them change it with their hand — Muslim',action:'Apply one Islamic principle today: commanding good, helping the oppressed, or spreading knowledge',young:'Islam teaches us to be strong and just and to help the oppressed! 🕌'},
    fr:{title:'La Reponse Islamique',desc:"L'Islam rejette l'injustice sous toutes ses formes et ordonne la justice meme contre soi-meme. Il rejette l'esclavage et affirme la dignite de chaque etre humain.",verse:'Vous etes la meilleure communaute suscitee pour les gens, vous ordonnez le bien et interdisez le mal',verseRef:'Al Imran 110',hadith:'Quiconque parmi vous voit un mal, qu\'il le change avec sa main — Muslim',action:"Appliquez un principe islamique aujourd'hui : ordonner le bien, aider l'opprime ou diffuser le savoir",young:"L'Islam nous enseigne a etre forts, justes et a aider les opprimes ! 🕌"}
  },
  {
    id:20, emoji:'📖',
    ar:{title:'دروس التاريخ',desc:'التاريخ خير معلم لمن أراد أن يتعلم. دراسة تاريخ الاستعمار تكشف أساليبه المتكررة وتمنح الشعوب المناعة ضد الوقوع في نفس الفخاخ. من لا يعرف تاريخه محكوم بتكراره.',verse:'لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ',verseRef:'يوسف ١١١',hadith:'احفظ الله يحفظك — رواه الترمذي',action:'اقرأ صفحة من تاريخ بلدك اليوم — وناقشها مع أسرتك أو أصدقائك',young:'التاريخ مثل الكتاب الكبير! اقرأه لتتعلم وتحمي نفسك في المستقبل! 📖'},
    en:{title:'Lessons of History',desc:'History is the best teacher for those who wish to learn. Studying the history of colonialism reveals its recurring methods and gives peoples immunity against falling into the same traps. Whoever does not know their history is doomed to repeat it.',verse:'There was certainly in their stories a lesson for those of understanding',verseRef:'Yusuf 111',hadith:'Be mindful of Allah and He will protect you — Tirmidhi',action:'Read a page of your country\'s history today — and discuss it with your family or friends',young:'History is like a big book! Read it to learn and protect yourself in the future! 📖'},
    fr:{title:'Les Lecons de l\'Histoire',desc:"L'histoire est le meilleur professeur pour ceux qui veulent apprendre. Etudier l'histoire du colonialisme revele ses methodes recurrentes et donne aux peuples l'immunite contre les memes pieges.",verse:'Il y avait certainement dans leurs recits une lecon pour les doues d\'intelligence',verseRef:'Yusuf 111',hadith:'Preservez Allah et Il vous preservera — Tirmidhi',action:"Lisez une page de l'histoire de votre pays aujourd'hui — et discutez-en avec votre famille ou amis",young:"L'histoire est comme un grand livre ! Lis-le pour apprendre et te proteger a l'avenir ! 📖"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما أخطر أسلحة المستعمر حسب الشيخ الغزالي؟',opts:['الجيوش والأسلحة','تفريق الشعوب','سرقة الأموال','فرض اللغة'],correct:1,hint:'هذا السلاح يجعل الناس يتقاتلون فيما بينهم',quran:'آل عمران ١٠٣'},
    en:{q:'What is the most dangerous weapon of the colonizer according to Sheikh al-Ghazali?',opts:['Armies and weapons','Dividing peoples','Stealing money','Imposing language'],correct:1,hint:'This weapon makes people fight among themselves',quran:'Al Imran 103'},
    fr:{q:'Quelle est l\'arme la plus dangereuse du colonisateur selon Sheikh al-Ghazali ?',opts:['Les armees et les armes','Diviser les peuples','Voler l\'argent','Imposer la langue'],correct:1,hint:'Cette arme fait se battre les gens entre eux',quran:'Al Imran 103'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ ..."',opts:['أوامرهم','ملتهم','عاداتهم','لغتهم'],correct:1,hint:'هذه الكلمة تعني دينهم ومنهجهم',quran:'البقرة ١٢٠'},
    en:{q:'Complete the verse: "They will never approve of you until you follow their..."',opts:['Commands','Religion','Customs','Language'],correct:1,hint:'This word means their faith and way of life',quran:'Al-Baqarah 120'},
    fr:{q:'Completez le verset : « Ils ne seront satisfaits que si tu suis leur... »',opts:['Ordres','Religion','Coutumes','Langue'],correct:1,hint:'Ce mot signifie leur foi et mode de vie',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما الهدف الأول للاستعمار؟',opts:['نشر الحضارة','التعليم','نهب الثروات','السياحة'],correct:2,hint:'المستعمر جاء ليأخذ لا ليعطي',quran:'البقرة ١٨٨'},
    en:{q:'What is the primary goal of colonialism?',opts:['Spreading civilization','Education','Plundering wealth','Tourism'],correct:2,hint:'The colonizer came to take, not to give',quran:'Al-Baqarah 188'},
    fr:{q:'Quel est l\'objectif premier du colonialisme ?',opts:['Repandre la civilisation','L\'education','Piller les richesses','Le tourisme'],correct:2,hint:'Le colonisateur est venu pour prendre, pas pour donner',quran:'Al-Baqarah 188'}
  },
  {
    ar:{q:'لماذا يسيطر المستعمر على المناهج الدراسية؟',opts:['لتحسين التعليم','لصنع أجيال مشوهة الفكر','لنشر العلم','لتعليم اللغات'],correct:1,hint:'المستعمر يريد أن يحب الطلاب المستعمر ويحتقروا أنفسهم',quran:'الزمر ٩'},
    en:{q:'Why does the colonizer control school curricula?',opts:['To improve education','To create generations with distorted thinking','To spread science','To teach languages'],correct:1,hint:'The colonizer wants students to admire them and despise themselves',quran:'Az-Zumar 9'},
    fr:{q:'Pourquoi le colonisateur controle-t-il les programmes scolaires ?',opts:['Pour ameliorer l\'education','Pour creer des generations deformees','Pour diffuser la science','Pour enseigner les langues'],correct:1,hint:'Le colonisateur veut que les eleves l\'admirent et se meprisent',quran:'Az-Zumar 9'}
  },
  {
    ar:{q:'ما سورة القرآن التي فيها "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا"؟',opts:['البقرة','آل عمران','النساء','المائدة'],correct:1,hint:'هذه السورة الثالثة في المصحف',quran:'آل عمران ١٠٣'},
    en:{q:'Which surah contains "Hold firmly to the rope of Allah all together"?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Maidah'],correct:1,hint:'This is the third surah in the Quran',quran:'Al Imran 103'},
    fr:{q:'Quelle sourate contient « Cramponnez-vous tous au cable d\'Allah » ?',opts:['Al-Baqarah','Al Imran','An-Nisa','Al-Maidah'],correct:1,hint:'C\'est la troisieme sourate du Coran',quran:'Al Imran 103'}
  },
  {
    ar:{q:'ما شكل الاستعمار الجديد بعد رحيل الجيوش؟',opts:['السياحة','التبعية الاقتصادية والديون','التبادل الثقافي','المساعدات الإنسانية'],correct:1,hint:'المال هو السلاح الجديد',quran:'هود ١١٣'},
    en:{q:'What form does new colonialism take after armies leave?',opts:['Tourism','Economic dependence and debt','Cultural exchange','Humanitarian aid'],correct:1,hint:'Money is the new weapon',quran:'Hud 113'},
    fr:{q:'Quelle forme prend le nouveau colonialisme apres le depart des armees ?',opts:['Le tourisme','La dependance economique et la dette','L\'echange culturel','L\'aide humanitaire'],correct:1,hint:'L\'argent est la nouvelle arme',quran:'Hud 113'}
  },
  {
    ar:{q:'ما الحديث الذي يؤكد المساواة بين البشر؟',opts:['المسلم أخو المسلم','لا فضل لعربي على أعجمي إلا بالتقوى','طلب العلم فريضة','خيركم خيركم لأهله'],correct:1,hint:'هذا الحديث ضد العنصرية',quran:'الحجرات ١٣'},
    en:{q:'Which hadith affirms equality among humans?',opts:['A Muslim is the brother of a Muslim','No Arab has superiority except through piety','Seeking knowledge is obligatory','The best of you are best to family'],correct:1,hint:'This hadith opposes racism',quran:'Al-Hujurat 13'},
    fr:{q:'Quel hadith affirme l\'egalite entre les humains ?',opts:['Le musulman est le frere du musulman','Aucun Arabe n\'a de superiorite sauf par la piete','La quete du savoir est obligatoire','Les meilleurs sont les meilleurs envers la famille'],correct:1,hint:'Ce hadith s\'oppose au racisme',quran:'Al-Hujurat 13'}
  },
  {
    ar:{q:'أكمل الآية: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى ..."',opts:['يموتوا','يغيروا ما بأنفسهم','يهاجروا','يحاربوا'],correct:1,hint:'التغيير يبدأ من الداخل',quran:'الرعد ١١'},
    en:{q:'Complete the verse: "Allah will not change a people\'s condition until they..."',opts:['Die','Change what is in themselves','Migrate','Fight'],correct:1,hint:'Change begins from within',quran:'Ar-Rad 13:11'},
    fr:{q:'Completez le verset : « Allah ne change pas un peuple tant qu\'il ne... »',opts:['Meurt','Change ce qui est en lui','Emigre','Combat'],correct:1,hint:'Le changement commence de l\'interieur',quran:'Ar-Rad 13:11'}
  },
  {
    ar:{q:'ماذا يعني "استعمار المعرفة"؟',opts:['بناء المدارس','احتكار العلم وسرقة العقول','تعليم اللغات','تبادل الكتب'],correct:1,hint:'المستعمر يريد أن تبقى الشعوب جاهلة ومعتمدة عليه',quran:'طه ١١٤'},
    en:{q:'What does "knowledge colonialism" mean?',opts:['Building schools','Monopolizing knowledge and stealing brains','Teaching languages','Exchanging books'],correct:1,hint:'The colonizer wants peoples to stay ignorant and dependent',quran:'Taha 114'},
    fr:{q:'Que signifie « colonialisme du savoir » ?',opts:['Construire des ecoles','Monopoliser le savoir et voler les cerveaux','Enseigner les langues','Echanger des livres'],correct:1,hint:'Le colonisateur veut que les peuples restent ignorants et dependants',quran:'Taha 114'}
  },
  {
    ar:{q:'في أي سورة وردت "لَقَدْ كَانَ فِي قَصَصِهِمْ عِبْرَةٌ لِأُولِي الْأَلْبَابِ"؟',opts:['الكهف','يوسف','الأنبياء','القصص'],correct:1,hint:'هذه السورة تروي قصة نبي وإخوته',quran:'يوسف ١١١'},
    en:{q:'In which surah does "In their stories is a lesson for those of understanding" appear?',opts:['Al-Kahf','Yusuf','Al-Anbiya','Al-Qasas'],correct:1,hint:'This surah tells the story of a prophet and his brothers',quran:'Yusuf 111'},
    fr:{q:'Dans quelle sourate apparait « Il y a dans leurs recits une lecon pour les doues d\'intelligence » ?',opts:['Al-Kahf','Yusuf','Al-Anbiya','Al-Qasas'],correct:1,hint:'Cette sourate raconte l\'histoire d\'un prophete et de ses freres',quran:'Yusuf 111'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء العزة والنصر',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِينَ',tr:'دعاء مأثور'},
    en:{label:'Dua for Honor & Victory',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِينَ',tr:'O Allah, honor Islam and Muslims, and humiliate idolatry and idolaters'},
    fr:{label:'Dua pour l\'Honneur et la Victoire',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ وَأَذِلَّ الشِّرْكَ وَالْمُشْرِكِينَ',tr:'O Allah, honore l\'Islam et les musulmans, et humilie l\'idolatrie et les idolatres'} },
  { ar:{label:'دعاء التحرر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Liberation',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience and plant firmly our feet and grant us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Liberation',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et accorde-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'آل عمران ١٧٣'},
    en:{label:'Dua of Reliance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Sufficient for us is Allah, and He is the best Disposer of affairs — Al Imran 173'},
    fr:{label:'Dua de Confiance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Allah nous suffit, Il est le meilleur Garant — Al Imran 173'} },
  { ar:{label:'دعاء الوحدة',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'الحشر ١٠'},
    en:{label:'Dua for Unity',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Our Lord, forgive us and our brothers who preceded us in faith and put not in our hearts resentment — Al-Hashr 10'},
    fr:{label:'Dua pour l\'Unite',text:'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا',tr:'Notre Seigneur, pardonne-nous et a nos freres qui nous ont precedes dans la foi — Al-Hashr 10'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء المظلوم',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'يونس ٨٥-٨٦'},
    en:{label:'Dua of the Oppressed',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, make us not a trial for the wrongdoing people and save us by Your mercy — Yunus 85-86'},
    fr:{label:'Dua de l\'Opprime',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, ne fais pas de nous une epreuve pour les injustes et sauve-nous par Ta misericorde — Yunus 85-86'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'istimar-xp';
const BADGES_KEY = 'istimar-badges';
const READ_KEY = 'istimar-read';
const STREAK_KEY = 'istimar-streak';
const MODE_KEY = 'istimar-mode';
const QUIZ_BEST_KEY = 'istimar-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabCards').textContent = t.tabCards;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('cardsTitle').textContent = t.cardsTitle;
  document.getElementById('cardsDesc').textContent = t.cardsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => {
    const el = document.getElementById('qopt-'+i);
    if(el) { el.style.visibility='hidden'; el.disabled=true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  document.getElementById('progressContainer').innerHTML = `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«الاستعمار أحقاد وأطماع» كتاب يكشف فيه الشيخ الغزالي الوجه الحقيقي للاستعمار الغربي للعالم الإسلامي. يبيّن أن الاستعمار ليس مجرد احتلال عسكري بل مشروع شامل لتدمير الهوية ونهب الثروات وتفريق الأمة. كتاب ضروري لفهم الحاضر من خلال الماضي.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "الاستعمار أحقاد وأطماع" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending balanced Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Colonialism: Grudges and Greed" is a book where Sheikh al-Ghazali exposes the true face of Western colonialism in the Muslim world. He shows that colonialism is not merely military occupation but a comprehensive project to destroy identity, plunder wealth, and divide the nation. Essential reading for understanding the present through the past.',
      sourcesTitle: 'Sources',
      sources: ['"Colonialism: Grudges and Greed" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Le Colonialisme : Rancunes et Convoitises" est un livre ou le Sheikh al-Ghazali devoile le vrai visage du colonialisme occidental dans le monde musulman. Il montre que le colonialisme n\'est pas qu\'une occupation militaire mais un projet global de destruction de l\'identite et de pillage des richesses.',
      sourcesTitle: 'Sources',
      sources: ['"Le Colonialisme : Rancunes et Convoitises" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "الاستعمار أحقاد وأطماع" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim'}
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Colonialism: Grudges and Greed" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 cards, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim'}
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Le Colonialisme : Rancunes et Convoitises" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim'}
    ]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالعزة والتحرر','⭐ أكمل ٢٠ بطاقة لتصبح خبيراً'],
    en: ['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for honor and liberation','⭐ Complete all 20 cards to become an Expert'],
    fr: ['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour l\'honneur et la liberation','⭐ Completez les 20 cartes pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height - canvas.height,
      w: Math.random()*10+5,
      h: Math.random()*6+3,
      color: colors[Math.floor(Math.random()*colors.length)],
      vx: (Math.random()-0.5)*4,
      vy: Math.random()*3+2,
      rot: Math.random()*360,
      rotSpeed: (Math.random()-0.5)*10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) {
      dailyTitle.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      setTimeout(() => dailyTitle.classList.add('tw-done'), 1500);
    }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => {
      const p = document.getElementById('panel-'+t);
      return p && p.classList.contains('active');
    });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1;
    else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
