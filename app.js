/* الاستعمار أحقاد وأطماع — COLONIALISM: GRUDGES & GREED — app.js v2.0 */
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
    cardsDesc: '١٥ بطاقة تكشف حقيقة الاستعمار وأساليبه — من كتاب الشيخ محمد الغزالي',
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
      '١٥ بطاقة تكشف أساليب الاستعمار',
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
    cardsDesc: '15 cards exposing the reality of colonialism and its methods — from Sheikh al-Ghazali\'s book',
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
      '15 cards exposing colonial methods',
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
    cardsDesc: '15 cartes revelant la realite du colonialisme et ses methodes — du livre du Sheikh al-Ghazali',
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
      '15 cartes revelant les methodes coloniales',
      'Quiz « Qui Veut Devenir Savant ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 CARDS DATA ═══════════════
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
    fr:{title:'L\'Exploitation Economique',desc:"L'objectif premier du colonialisme est de piller les richesses des peuples — or, petrole, pierres precieuses et terres agricoles. Il prend les matieres premieres aux prix les plus bas puis les revend manufacturees aux prix les plus eleves. Un cycle d'epuisement sans fin.",verse:'Et ne mangez pas vos biens entre vous de maniere illicite',verseRef:'Al-Baqarah 188',hadith:'Celui qui nous trompe n\'est pas des notres — Muslim',action:"Soutenez les produits locaux aujourd'hui — achetez quelque chose fabrique dans votre pays",young:"Le colonisateur est comme un voleur — il prend les tresors des gens et s'enfuit ! Protegeons nos richesses ! 💎"}
  },
  {
    id:4, emoji:'🎨',
    ar:{title:'التدمير الثقافي',desc:'المستعمر لا يكتفي بسرقة المال بل يسعى لتدمير ثقافة الشعوب ولغتها وتراثها. يفرض لغته وعاداته ويحقّر كل ما هو محلي. الهدف: صنع شعب بلا هوية يسهل السيطرة عليه.',verse:'وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا إِنَّكَ لَنْ تَخْرِقَ الْأَرْضَ',verseRef:'الإسراء ٣٧',hadith:'ليس منا من دعا إلى عصبية — رواه أبو داود',action:'تعلم شيئاً جديداً عن تراث بلدك اليوم — أمثال شعبية أو حرفة يدوية',young:'لغتك وتراثك كنز ثمين! لا تدع أحداً يقول لك إنها أقل من غيرها! 🎨'},
    en:{title:'Cultural Destruction',desc:'The colonizer is not content with stealing money but seeks to destroy the culture, language, and heritage of peoples. They impose their language and customs while belittling everything local. The goal: creating a people without identity who are easy to control.',verse:'And do not walk upon the earth with arrogance',verseRef:'Al-Isra 37',hadith:'Whoever calls to tribalism is not one of us — Abu Dawud',action:'Learn something new about your country\'s heritage today — local proverbs or a traditional craft',young:'Your language and heritage are a precious treasure! Do not let anyone tell you they are less than others! 🎨'},
    fr:{title:'La Destruction Culturelle',desc:"Le colonisateur ne se contente pas de voler l'argent mais cherche a detruire la culture, la langue et le patrimoine des peuples. Il impose sa langue et ses coutumes tout en denigrant tout ce qui est local. L'objectif : creer un peuple sans identite facile a controler.",verse:'Et ne foule pas la terre avec orgueil',verseRef:'Al-Isra 37',hadith:'Celui qui appelle au tribalisme n\'est pas des notres — Abu Dawud',action:"Apprenez quelque chose de nouveau sur le patrimoine de votre pays — proverbes locaux ou artisanat traditionnel",young:"Ta langue et ton patrimoine sont un tresor precieux ! Ne laisse personne te dire qu'ils sont inferieurs ! 🎨"}
  },
  {
    id:5, emoji:'📚',
    ar:{title:'التلاعب بالتعليم',desc:'المستعمر يسيطر على المناهج الدراسية ليصنع أجيالاً مشوّهة الفكر. يعلّمهم تاريخه المزيف ويحذف تاريخهم الحقيقي. يربي فيهم الإعجاب بالمستعمر واحتقار أنفسهم.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'طلب العلم فريضة على كل مسلم — رواه ابن ماجه',action:'اقرأ كتاباً عن تاريخ بلدك من مؤلف محلي — لا من منظور المستعمر',young:'تعلم تاريخ بلدك الحقيقي! أنت من شعب عظيم له تاريخ مشرّف! 📚'},
    en:{title:'Educational Manipulation',desc:'The colonizer controls curricula to create generations with distorted thinking. They teach them a false history and erase their real one. They instill admiration for the colonizer and contempt for themselves.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Seeking knowledge is an obligation upon every Muslim — Ibn Majah',action:'Read a book about your country\'s history written by a local author — not from the colonizer\'s perspective',young:'Learn your country\'s real history! You are from a great people with an honorable history! 📚'},
    fr:{title:'La Manipulation Educative',desc:"Le colonisateur controle les programmes scolaires pour creer des generations a la pensee deformee. Il leur enseigne une histoire falsifiee et efface leur vraie histoire. Il instille l'admiration du colonisateur et le mepris de soi.",verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'La quete du savoir est une obligation pour chaque musulman — Ibn Majah',action:"Lisez un livre sur l'histoire de votre pays ecrit par un auteur local — pas du point de vue du colonisateur",young:"Apprends la vraie histoire de ton pays ! Tu es d'un grand peuple avec une histoire honorable ! 📚"}
  },
  {
    id:6, emoji:'⛪',
    ar:{title:'الغطاء التبشيري',desc:'استخدم المستعمرون التبشير كأداة لاختراق المجتمعات الإسلامية. بنوا المدارس والمستشفيات ليس حباً في العلم والصحة بل كوسيلة لتغيير عقائد الناس وربطهم بالمستعمر ثقافياً.',verse:'وَدَّ كَثِيرٌ مِنْ أَهْلِ الْكِتَابِ لَوْ يَرُدُّونَكُمْ مِنْ بَعْدِ إِيمَانِكُمْ كُفَّارًا',verseRef:'البقرة ١٠٩',hadith:'تركت فيكم ما إن تمسكتم بهما لن تضلوا أبداً: كتاب الله وسنتي — رواه مالك',action:'تعلم أساسيات دينك جيداً — المسلم الواعي لا يُخدع بسهولة',young:'بعض الناس يتظاهرون بالمساعدة لكنهم يريدون تغيير أفكارك! كن ذكياً! ⛪'},
    en:{title:'The Missionary Cover',desc:'Colonizers used missionary work as a tool to penetrate Muslim societies. They built schools and hospitals not out of love for education and health but as a means to change people\'s beliefs and tie them culturally to the colonizer.',verse:'Many of the People of the Book wish they could turn you back to disbelief after your faith',verseRef:'Al-Baqarah 109',hadith:'I have left among you two things that if you hold to them you will never go astray: the Book of Allah and my Sunnah — Malik',action:'Learn the basics of your religion well — an aware Muslim is not easily deceived',young:'Some people pretend to help but they want to change your ideas! Be smart! ⛪'},
    fr:{title:'La Couverture Missionnaire',desc:"Les colonisateurs ont utilise le proselytisme comme outil pour penetrer les societes musulmanes. Ils ont construit des ecoles et des hopitaux non par amour de l'education mais comme moyen de changer les croyances des gens et de les lier culturellement au colonisateur.",verse:"Beaucoup de Gens du Livre aimeraient pouvoir vous ramener a la mecreance apres votre foi",verseRef:'Al-Baqarah 109',hadith:"Je vous ai laisse deux choses auxquelles si vous vous accrochez vous ne vous egarerez jamais : le Livre d'Allah et ma Sunnah — Malik",action:"Apprenez bien les bases de votre religion — un musulman conscient n'est pas facilement trompe",young:"Certaines personnes font semblant d'aider mais veulent changer tes idees ! Sois malin ! ⛪"}
  },
  {
    id:7, emoji:'⚔️',
    ar:{title:'العدوان العسكري',desc:'العنف المباشر هو الوجه الصريح للاستعمار — الجيوش تحتل البلاد وتقتل المقاومين وتدمر البنية التحتية. المستعمر يستخدم أحدث الأسلحة ضد شعوب لا تملك سوى إرادتها.',verse:'وَأَعِدُّوا لَهُمْ مَا اسْتَطَعْتُمْ مِنْ قُوَّةٍ',verseRef:'الأنفال ٦٠',hadith:'المؤمن القوي خير وأحب إلى الله من المؤمن الضعيف — رواه مسلم',action:'تعلم مهارة جديدة تقوي أمتك — علم أو تقنية أو لغة',young:'المستعمر يستخدم القوة ليخيف الناس! لكن الشجاعة أقوى من أي سلاح! ⚔️'},
    en:{title:'Military Aggression',desc:'Direct violence is the explicit face of colonialism — armies occupy lands, kill resisters, and destroy infrastructure. The colonizer uses the latest weapons against peoples who have nothing but their willpower.',verse:'And prepare against them whatever you are able of power',verseRef:'Al-Anfal 60',hadith:'A strong believer is better and more beloved to Allah than a weak believer — Muslim',action:'Learn a new skill that strengthens your nation — science, technology, or a language',young:'The colonizer uses force to scare people! But courage is stronger than any weapon! ⚔️'},
    fr:{title:'L\'Agression Militaire',desc:"La violence directe est le visage explicite du colonialisme — les armees occupent les terres, tuent les resistants et detruisent l'infrastructure. Le colonisateur utilise les armes les plus modernes contre des peuples qui n'ont que leur volonte.",verse:'Et preparez contre eux tout ce que vous pouvez comme force',verseRef:'Al-Anfal 60',hadith:'Un croyant fort est meilleur et plus aime d\'Allah qu\'un croyant faible — Muslim',action:"Apprenez une nouvelle competence qui renforce votre nation — science, technologie ou langue",young:"Le colonisateur utilise la force pour effrayer les gens ! Mais le courage est plus fort que toute arme ! ⚔️"}
  },
  {
    id:8, emoji:'🗺️',
    ar:{title:'الحدود المصطنعة',desc:'رسم المستعمرون حدوداً مصطنعة بين الشعوب التي كانت موحدة. قسموا القبائل والأسر والأمم بخطوط على الخريطة لا تراعي التاريخ ولا الجغرافيا ولا الثقافة. هدفهم إضعاف كل جزء على حدة.',verse:'إِنَّ هَذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',verseRef:'الأنبياء ٩٢',hadith:'المسلم أخو المسلم — متفق عليه',action:'تعرف على جيرانك من دول أخرى — الحدود لا تفصل بين القلوب',young:'المستعمر رسم خطوطاً على الخريطة ليفرّق الناس! لكننا كلنا إخوة! 🗺️'},
    en:{title:'Artificial Borders',desc:'Colonizers drew artificial borders between peoples who were united. They divided tribes, families, and nations with lines on a map that did not respect history, geography, or culture. Their goal: weaken each part separately.',verse:'Indeed this, your religion, is one religion, and I am your Lord, so worship Me',verseRef:'Al-Anbiya 92',hadith:'A Muslim is the brother of a Muslim — Agreed upon',action:'Get to know your neighbors from other countries — borders do not separate hearts',young:'The colonizer drew lines on the map to separate people! But we are all brothers and sisters! 🗺️'},
    fr:{title:'Les Frontieres Artificielles',desc:"Les colonisateurs ont trace des frontieres artificielles entre des peuples qui etaient unis. Ils ont divise des tribus, des familles et des nations avec des lignes sur une carte qui ne respectaient ni l'histoire, ni la geographie, ni la culture. Leur but : affaiblir chaque partie separement.",verse:'Certes, cette communaute qui est la votre est une communaute unique, et Je suis votre Seigneur',verseRef:'Al-Anbiya 92',hadith:'Le musulman est le frere du musulman — Unanimement reconnu',action:"Faites connaissance avec vos voisins d'autres pays — les frontieres ne separent pas les coeurs",young:"Le colonisateur a trace des lignes sur la carte pour separer les gens ! Mais nous sommes tous freres et soeurs ! 🗺️"}
  },
  {
    id:9, emoji:'⛏️',
    ar:{title:'نهب الموارد',desc:'لا يكتفي المستعمر باحتلال الأرض بل ينهب كل مواردها: المعادن والنفط والأخشاب والمياه. يترك الأرض جرداء والشعب فقيراً وهو يعود إلى بلاده محمّلاً بالثروات المسروقة.',verse:'ظَهَرَ الْفَسَادُ فِي الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ أَيْدِي النَّاسِ',verseRef:'الروم ٤١',hadith:'لا ضرر ولا ضرار — رواه ابن ماجه',action:'ازرع شجرة أو حافظ على مورد طبيعي في منطقتك اليوم',young:'المستعمر يأخذ كنوز الأرض ويترك الناس فقراء! يجب أن نحمي أرضنا! ⛏️'},
    en:{title:'Resource Theft',desc:'The colonizer is not content with occupying land but plunders all its resources: minerals, oil, timber, and water. They leave the land barren and the people poor while returning to their countries loaded with stolen wealth.',verse:'Corruption has appeared on land and sea because of what people\'s hands have earned',verseRef:'Ar-Rum 41',hadith:'No harm and no reciprocal harm — Ibn Majah',action:'Plant a tree or conserve a natural resource in your area today',young:'The colonizer takes the treasures of the earth and leaves people poor! We must protect our land! ⛏️'},
    fr:{title:'Le Vol des Ressources',desc:"Le colonisateur ne se contente pas d'occuper la terre mais pille toutes ses ressources : mineraux, petrole, bois et eau. Il laisse la terre aride et le peuple pauvre tout en retournant dans son pays charge de richesses volees.",verse:'La corruption est apparue sur terre et en mer a cause de ce que les mains des gens ont acquis',verseRef:'Ar-Rum 41',hadith:'Pas de prejudice ni de prejudice reciproque — Ibn Majah',action:"Plantez un arbre ou conservez une ressource naturelle dans votre region aujourd'hui",young:"Le colonisateur prend les tresors de la terre et laisse les gens pauvres ! Protegeons notre terre ! ⛏️"}
  },
  {
    id:10, emoji:'🧠',
    ar:{title:'الحرب النفسية',desc:'أخطر معارك الاستعمار تدور في العقول لا في الميادين. يزرع في الشعوب الشعور بالدونية والعجز واليأس. يجعلهم يؤمنون أنهم لا يستحقون الحرية وأن المستعمر أذكى وأقوى منهم.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ',verseRef:'آل عمران ١٣٩',hadith:'المؤمن لا يُلدغ من جُحر مرتين — متفق عليه',action:'قوِّ ثقتك بنفسك اليوم — اذكر ٣ إنجازات عظيمة لحضارتك الإسلامية',young:'لا تصدق من يقول لك إنك ضعيف! أنت قوي وذكي ويمكنك فعل أي شيء! 🧠'},
    en:{title:'Psychological Warfare',desc:'The most dangerous battles of colonialism take place in minds, not on battlefields. It plants feelings of inferiority, helplessness, and despair in peoples. It makes them believe they do not deserve freedom and that the colonizer is smarter and stronger.',verse:'Do not weaken or grieve, for you are the superior ones if you are believers',verseRef:'Al Imran 139',hadith:'A believer is not stung from the same hole twice — Agreed upon',action:'Strengthen your self-confidence today — list 3 great achievements of your Islamic civilization',young:'Do not believe anyone who tells you that you are weak! You are strong and smart and can do anything! 🧠'},
    fr:{title:'La Guerre Psychologique',desc:"Les batailles les plus dangereuses du colonialisme se deroulent dans les esprits, pas sur les champs de bataille. Il implante des sentiments d'inferiorite, d'impuissance et de desespoir chez les peuples. Il leur fait croire qu'ils ne meritent pas la liberte.",verse:'Ne faiblissez pas et ne vous affligez pas alors que vous etes les plus eleves si vous etes croyants',verseRef:'Al Imran 139',hadith:"Le croyant n'est pas pique par le meme trou deux fois — Unanimement reconnu",action:"Renforcez votre confiance en vous aujourd'hui — citez 3 grandes realisations de votre civilisation islamique",young:"Ne crois personne qui te dit que tu es faible ! Tu es fort et intelligent et tu peux tout faire ! 🧠"}
  },
  {
    id:11, emoji:'🕸️',
    ar:{title:'الاستعمار الجديد',desc:'بعد الاستقلال لم ينتهِ الاستعمار بل تحوّل لأشكال جديدة: هيمنة اقتصادية وقروض مشروطة وشركات متعددة الجنسيات وإعلام موجّه. السلاسل تغيرت من حديد إلى ذهب لكنها تبقى سلاسل.',verse:'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',verseRef:'الصف ٨',hadith:'المسلمون على شروطهم — رواه أبو داود',action:'كن واعياً للتبعية الاقتصادية — ادعم الاكتفاء الذاتي لبلدك',young:'الاستعمار لم ينتهِ — تغيّر شكله فقط! كن يقظاً وذكياً! 🕸️'},
    en:{title:'Neo-Colonialism',desc:'After independence, colonialism did not end but transformed into new forms: economic domination, conditional loans, multinational corporations, and directed media. The chains changed from iron to gold, but they remain chains.',verse:'They want to extinguish the light of Allah with their mouths, but Allah will complete His light',verseRef:'As-Saff 8',hadith:'Muslims are bound by their conditions — Abu Dawud',action:'Be aware of economic dependency — support your country\'s self-sufficiency',young:'Colonialism did not end — it just changed its shape! Be alert and smart! 🕸️'},
    fr:{title:'Le Neo-Colonialisme',desc:"Apres l'independance, le colonialisme n'a pas pris fin mais s'est transforme en nouvelles formes : domination economique, prets conditionnels, multinationales et medias diriges. Les chaines sont passees du fer a l'or, mais restent des chaines.",verse:'Ils veulent eteindre la lumiere d\'Allah avec leurs bouches, mais Allah completera Sa lumiere',verseRef:'As-Saff 8',hadith:'Les musulmans sont lies par leurs conditions — Abu Dawud',action:"Soyez conscient de la dependance economique — soutenez l'autosuffisance de votre pays",young:"Le colonialisme n'a pas pris fin — il a juste change de forme ! Sois vigilant et malin ! 🕸️"}
  },
  {
    id:12, emoji:'✊',
    ar:{title:'نماذج المقاومة',desc:'قاوم المسلمون الاستعمار بطرق متعددة: الجهاد المسلح كالأمير عبد القادر في الجزائر وعمر المختار في ليبيا، والمقاومة الثقافية كابن باديس، والنضال السلمي. كلها أشكال مشروعة للدفاع عن الوطن والدين.',verse:'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا',verseRef:'العنكبوت ٦٩',hadith:'من قُتل دون ماله فهو شهيد — متفق عليه',action:'اقرأ عن بطل من أبطال المقاومة في بلدك واحكِ قصته للآخرين',young:'أبطال كثيرون قاوموا الاستعمار بشجاعة! اقرأ عنهم واتعلم منهم! ✊'},
    en:{title:'Resistance Models',desc:'Muslims resisted colonialism in multiple ways: armed struggle like Emir Abdelkader in Algeria and Omar al-Mukhtar in Libya, cultural resistance like Ibn Badis, and peaceful struggle. All are legitimate forms of defending homeland and religion.',verse:'And those who strive for Us, We will surely guide them to Our ways',verseRef:'Al-Ankabut 69',hadith:'Whoever is killed defending their property is a martyr — Agreed upon',action:'Read about a hero of resistance in your country and tell their story to others',young:'Many heroes bravely resisted colonialism! Read about them and learn from them! ✊'},
    fr:{title:'Les Modeles de Resistance',desc:"Les musulmans ont resiste au colonialisme de multiples facons : la lutte armee comme l'Emir Abdelkader en Algerie et Omar al-Mukhtar en Libye, la resistance culturelle comme Ibn Badis, et la lutte pacifique. Toutes sont des formes legitimes de defense de la patrie et de la religion.",verse:'Et ceux qui luttent pour Nous, Nous les guiderons certainement vers Nos voies',verseRef:'Al-Ankabut 69',hadith:'Quiconque est tue en defendant ses biens est un martyr — Unanimement reconnu',action:"Lisez sur un heros de la resistance dans votre pays et racontez son histoire aux autres",young:"De nombreux heros ont bravement resiste au colonialisme ! Lis a leur sujet et apprends d'eux ! ✊"}
  },
  {
    id:13, emoji:'☪️',
    ar:{title:'الرد الإسلامي',desc:'الإسلام يرفض الظلم مطلقاً ويأمر بالعدل مع الجميع. رد المسلمين على الاستعمار ليس بالكراهية بل بالعدل والعلم والبناء. نبني حضارتنا لا لننتقم بل لنقدم للعالم نموذجاً أفضل.',verse:'كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِالْمَعْرُوفِ وَتَنْهَوْنَ عَنِ الْمُنْكَرِ',verseRef:'آل عمران ١١٠',hadith:'خيركم أنفعكم للناس — حديث حسن',action:'قدم خيراً للعالم اليوم — ساعد أي شخص بغض النظر عن دينه أو عرقه',young:'ردنا على الظلم ليس بالكراهية بل بأن نكون أفضل ونساعد الجميع! ☪️'},
    en:{title:'The Islamic Response',desc:'Islam absolutely rejects injustice and commands justice with everyone. The Muslim response to colonialism is not hatred but justice, knowledge, and building. We build our civilization not for revenge but to offer the world a better model.',verse:'You are the best nation produced for mankind, enjoining good and forbidding evil',verseRef:'Al Imran 110',hadith:'The best of you are the most beneficial to people — Good hadith',action:'Do something good for the world today — help anyone regardless of their religion or race',young:'Our response to injustice is not hatred but to be the best and help everyone! ☪️'},
    fr:{title:'La Reponse Islamique',desc:"L'Islam rejette absolument l'injustice et ordonne la justice envers tous. La reponse musulmane au colonialisme n'est pas la haine mais la justice, le savoir et la construction. Nous batissons notre civilisation non pour la vengeance mais pour offrir au monde un meilleur modele.",verse:'Vous etes la meilleure communaute suscitee pour les hommes, vous ordonnez le bien et interdisez le mal',verseRef:'Al Imran 110',hadith:'Les meilleurs d\'entre vous sont les plus utiles aux gens — Bon hadith',action:"Faites quelque chose de bien pour le monde aujourd'hui — aidez n'importe qui sans distinction de religion ou race",young:"Notre reponse a l'injustice n'est pas la haine mais etre les meilleurs et aider tout le monde ! ☪️"}
  },
  {
    id:14, emoji:'🏗️',
    ar:{title:'إعادة بناء الهوية',desc:'بعد الاستعمار يحتاج الشعب لإعادة بناء هويته المسلوبة. يبدأ ذلك بمعرفة تاريخه الحقيقي والاعتزاز بلغته وثقافته والعودة لقيمه الأصيلة. الهوية القوية هي أقوى سلاح ضد أي استعمار.',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ',verseRef:'الرعد ١١',hadith:'ازهد في الدنيا يحبك الله وازهد فيما عند الناس يحبك الناس — رواه ابن ماجه',action:'تحدث بلغتك الأم بفخر اليوم وشارك شيئاً من ثقافتك مع صديق',young:'أنت فخور بهويتك! تعلم تاريخك وتحدث بلغتك واعتز بنفسك! 🏗️'},
    en:{title:'Rebuilding Identity',desc:'After colonialism, a people need to rebuild their stolen identity. This begins with knowing their real history, being proud of their language and culture, and returning to their authentic values. A strong identity is the most powerful weapon against any colonialism.',verse:'Indeed, Allah will not change the condition of a people until they change what is within themselves',verseRef:'Ar-Rad 11',hadith:'Be indifferent to worldly matters and Allah will love you — Ibn Majah',action:'Speak your mother tongue with pride today and share something from your culture with a friend',young:'Be proud of your identity! Learn your history, speak your language, and be proud of yourself! 🏗️'},
    fr:{title:"Reconstruire l'Identite",desc:"Apres le colonialisme, un peuple doit reconstruire son identite volee. Cela commence par connaitre sa vraie histoire, etre fier de sa langue et de sa culture, et revenir a ses valeurs authentiques. Une identite forte est l'arme la plus puissante contre tout colonialisme.",verse:'Allah ne change pas la condition d\'un peuple tant qu\'il ne change pas ce qui est en lui-meme',verseRef:'Ar-Rad 11',hadith:'Soyez detache des choses de ce monde et Allah vous aimera — Ibn Majah',action:"Parlez votre langue maternelle avec fierte aujourd'hui et partagez quelque chose de votre culture avec un ami",young:"Sois fier de ton identite ! Apprends ton histoire, parle ta langue et sois fier de toi ! 🏗️"}
  },
  {
    id:15, emoji:'🔮',
    ar:{title:'دروس للمستقبل',desc:'التاريخ يعيد نفسه لمن لا يتعلم منه. دروس الاستعمار تعلمنا: الوحدة قوة، والعلم سلاح، والهوية حصن، والإيمان بالله أعظم عدة. من فهم الماضي استعد للمستقبل.',verse:'فَاعْتَبِرُوا يَا أُولِي الْأَبْصَارِ',verseRef:'الحشر ٢',hadith:'احرص على ما ينفعك واستعن بالله ولا تعجز — رواه مسلم',action:'اكتب ٣ دروس تعلمتها من تاريخ الاستعمار وكيف ستطبقها في حياتك',young:'تعلم من التاريخ حتى لا يتكرر! الوحدة والعلم والإيمان أقوى من أي استعمار! 🔮'},
    en:{title:'Lessons for the Future',desc:'History repeats itself for those who do not learn from it. Lessons from colonialism teach us: unity is strength, knowledge is a weapon, identity is a fortress, and faith in God is the greatest provision. Whoever understands the past is prepared for the future.',verse:'So take warning, O people of vision',verseRef:'Al-Hashr 2',hadith:'Be eager for what benefits you, seek help from Allah, and do not be helpless — Muslim',action:'Write 3 lessons you learned from the history of colonialism and how you will apply them in your life',young:'Learn from history so it does not repeat! Unity, knowledge, and faith are stronger than any colonialism! 🔮'},
    fr:{title:"Lecons pour l'Avenir",desc:"L'histoire se repete pour ceux qui n'en tirent pas de lecons. Les lecons du colonialisme nous enseignent : l'unite est la force, le savoir est une arme, l'identite est une forteresse, et la foi en Dieu est la meilleure provision. Qui comprend le passe est prepare pour l'avenir.",verse:'Tirez-en lecon, o gens doues de vision',verseRef:'Al-Hashr 2',hadith:"Soyez desireux de ce qui vous profite, cherchez l'aide d'Allah et ne soyez pas impuissant — Muslim",action:"Ecrivez 3 lecons que vous avez tirees de l'histoire du colonialisme et comment vous les appliquerez",young:"Apprends de l'histoire pour qu'elle ne se repete pas ! L'unite, le savoir et la foi sont plus forts que tout colonialisme ! 🔮"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Scholar?) ═══════════════
const QUIZ = [
  {
    ar:{q:'ما أخطر أسلحة المستعمر حسب الشيخ الغزالي؟',opts:['الجيوش','الأسلحة النووية','فرّق تسد','الجاسوسية'],correct:2,hint:'يثير الخلافات بين الشعوب ليضعفها',quran:'آل عمران ١٠٣'},
    en:{q:'What is the most dangerous weapon of the colonizer according to Sheikh al-Ghazali?',opts:['Armies','Nuclear weapons','Divide and rule','Espionage'],correct:2,hint:'Stirs conflicts between peoples to weaken them',quran:'Al Imran 103'},
    fr:{q:'Quelle est l\'arme la plus dangereuse du colonisateur selon Sheikh al-Ghazali ?',opts:['Les armees','Les armes nucleaires','Diviser pour regner','L\'espionnage'],correct:2,hint:'Attise les conflits entre les peuples pour les affaiblir',quran:'Al Imran 103'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَنْ تَرْضَى عَنْكَ الْيَهُودُ وَلَا النَّصَارَى حَتَّى تَتَّبِعَ ..."',opts:['سياستهم','ملتهم','ثقافتهم','جيوشهم'],correct:1,hint:'المقصود اتباع دينهم ومنهجهم',quran:'البقرة ١٢٠'},
    en:{q:'Complete the verse: "And never will the Jews or Christians approve of you until you follow their..."',opts:['Politics','Religion','Culture','Armies'],correct:1,hint:'Refers to following their religion and way',quran:'Al-Baqarah 120'},
    fr:{q:'Completez le verset : "Et jamais les Juifs ni les Chretiens ne seront satisfaits de toi jusqu\'a ce que tu suives leur..."',opts:['Politique','Religion','Culture','Armees'],correct:1,hint:'Se refere a suivre leur religion et leur voie',quran:'Al-Baqarah 120'}
  },
  {
    ar:{q:'ما الهدف من رسم الحدود المصطنعة بين الدول الإسلامية؟',opts:['تسهيل التجارة','إضعاف كل جزء على حدة','تنظيم السكان','حماية الأقليات'],correct:1,hint:'استراتيجية تفتيت',quran:'الأنبياء ٩٢'},
    en:{q:'What was the purpose of drawing artificial borders between Islamic countries?',opts:['Facilitating trade','Weakening each part separately','Organizing populations','Protecting minorities'],correct:1,hint:'A fragmentation strategy',quran:'Al-Anbiya 92'},
    fr:{q:'Quel etait le but de tracer des frontieres artificielles entre les pays islamiques ?',opts:['Faciliter le commerce','Affaiblir chaque partie separement','Organiser les populations','Proteger les minorites'],correct:1,hint:'Une strategie de fragmentation',quran:'Al-Anbiya 92'}
  },
  {
    ar:{q:'ما شكل الاستعمار الجديد (النيوكولونيالية)؟',opts:['احتلال عسكري مباشر','هيمنة اقتصادية وإعلامية','حروب دينية','عزلة تامة'],correct:1,hint:'السلاسل تحولت من حديد إلى ذهب',quran:'الصف ٨'},
    en:{q:'What form does neo-colonialism take?',opts:['Direct military occupation','Economic and media domination','Religious wars','Complete isolation'],correct:1,hint:'The chains changed from iron to gold',quran:'As-Saff 8'},
    fr:{q:'Quelle forme prend le neo-colonialisme ?',opts:['Occupation militaire directe','Domination economique et mediatique','Guerres religieuses','Isolement complet'],correct:1,hint:'Les chaines sont passees du fer a l\'or',quran:'As-Saff 8'}
  },
  {
    ar:{q:'من هو بطل المقاومة الجزائرية ضد الاستعمار الفرنسي؟',opts:['صلاح الدين','عمر المختار','الأمير عبد القادر','محمد الفاتح'],correct:2,hint:'أمير قاد المقاومة في القرن التاسع عشر',quran:'العنكبوت ٦٩'},
    en:{q:'Who is the hero of Algerian resistance against French colonialism?',opts:['Saladin','Omar al-Mukhtar','Emir Abdelkader','Mehmed the Conqueror'],correct:2,hint:'An emir who led resistance in the 19th century',quran:'Al-Ankabut 69'},
    fr:{q:'Qui est le heros de la resistance algerienne contre le colonialisme francais ?',opts:['Saladin','Omar al-Mukhtar','L\'Emir Abdelkader','Mehmed le Conquerant'],correct:2,hint:'Un emir qui a mene la resistance au 19e siecle',quran:'Al-Ankabut 69'}
  },
  {
    ar:{q:'أكمل الآية: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا ..."',opts:['حكومتهم','ما بأنفسهم','أسلحتهم','حدودهم'],correct:1,hint:'التغيير يبدأ من الداخل',quran:'الرعد ١١'},
    en:{q:'Complete the verse: "Allah will not change the condition of a people until they change..."',opts:['Their government','What is within themselves','Their weapons','Their borders'],correct:1,hint:'Change starts from within',quran:'Ar-Rad 11'},
    fr:{q:'Completez le verset : "Allah ne change pas la condition d\'un peuple tant qu\'il ne change pas..."',opts:['Son gouvernement','Ce qui est en lui-meme','Ses armes','Ses frontieres'],correct:1,hint:'Le changement commence de l\'interieur',quran:'Ar-Rad 11'}
  },
  {
    ar:{q:'ما الحديث الذي يحذر من تكرار الخطأ نفسه؟',opts:['المؤمن لا يُلدغ من جُحر مرتين','خيركم أنفعكم للناس','المسلم أخو المسلم','لا ضرر ولا ضرار'],correct:0,hint:'تحذير من الوقوع في نفس الفخ',quran:'آل عمران ١٣٩'},
    en:{q:'Which hadith warns against repeating the same mistake?',opts:['A believer is not stung from the same hole twice','The best of you are most beneficial','A Muslim is the brother of a Muslim','No harm and no reciprocal harm'],correct:0,hint:'Warning against falling into the same trap',quran:'Al Imran 139'},
    fr:{q:'Quel hadith met en garde contre la repetition de la meme erreur ?',opts:['Le croyant n\'est pas pique du meme trou deux fois','Les meilleurs sont les plus utiles','Le musulman est le frere du musulman','Pas de prejudice ni de prejudice reciproque'],correct:0,hint:'Mise en garde contre tomber dans le meme piege',quran:'Al Imran 139'}
  },
  {
    ar:{q:'لماذا استخدم المستعمرون التبشير كأداة؟',opts:['حباً في نشر الخير','لاختراق المجتمعات وتغيير العقائد','لبناء مستشفيات','لتعليم اللغات'],correct:1,hint:'الهدف ثقافي وعقدي لا إنساني',quran:'البقرة ١٠٩'},
    en:{q:'Why did colonizers use missionary work as a tool?',opts:['Out of love for spreading good','To penetrate societies and change beliefs','To build hospitals','To teach languages'],correct:1,hint:'The goal was cultural and ideological, not humanitarian',quran:'Al-Baqarah 109'},
    fr:{q:'Pourquoi les colonisateurs ont-ils utilise le proselytisme comme outil ?',opts:['Par amour de repandre le bien','Pour penetrer les societes et changer les croyances','Pour construire des hopitaux','Pour enseigner les langues'],correct:1,hint:'L\'objectif etait culturel et ideologique, pas humanitaire',quran:'Al-Baqarah 109'}
  },
  {
    ar:{q:'أكمل الآية: "كُنْتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ تَأْمُرُونَ بِـ..."',opts:['الحرب','المعروف','التجارة','السفر'],correct:1,hint:'الأمر بالمعروف والنهي عن المنكر',quran:'آل عمران ١١٠'},
    en:{q:'Complete the verse: "You are the best nation produced for mankind, enjoining..."',opts:['War','Good','Trade','Travel'],correct:1,hint:'Commanding good and forbidding evil',quran:'Al Imran 110'},
    fr:{q:'Completez le verset : "Vous etes la meilleure communaute suscitee pour les hommes, vous ordonnez..."',opts:['La guerre','Le bien','Le commerce','Le voyage'],correct:1,hint:'Ordonner le bien et interdire le mal',quran:'Al Imran 110'}
  },
  {
    ar:{q:'ما أقوى سلاح ضد الاستعمار حسب الكتاب؟',opts:['الأسلحة النووية','المال','الهوية القوية والإيمان','التحالفات الدولية'],correct:2,hint:'يبدأ من الداخل',quran:'الحشر ٢'},
    en:{q:'What is the strongest weapon against colonialism according to the book?',opts:['Nuclear weapons','Money','Strong identity and faith','International alliances'],correct:2,hint:'It starts from within',quran:'Al-Hashr 2'},
    fr:{q:'Quelle est l\'arme la plus forte contre le colonialisme selon le livre ?',opts:['Les armes nucleaires','L\'argent','Une identite forte et la foi','Les alliances internationales'],correct:2,hint:'Cela commence de l\'interieur',quran:'Al-Hashr 2'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء العزة',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ',tr:'دعاء مأثور'},
    en:{label:'Dua for Honor',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ',tr:'O Allah, honor Islam and the Muslims — Reported dua'},
    fr:{label:'Dua pour l\'Honneur',text:'اللَّهُمَّ أَعِزَّ الْإِسْلَامَ وَالْمُسْلِمِينَ',tr:'O Allah, honore l\'Islam et les musulmans — Dua rapportee'} },
  { ar:{label:'دعاء النصر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Victory',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, pour upon us patience, plant firmly our feet, and give us victory — Al-Baqarah 250'},
    fr:{label:'Dua pour la Victoire',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, deverse sur nous la patience, affermis nos pas et accorde-nous la victoire — Al-Baqarah 250'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'آل عمران ١٧٣'},
    en:{label:'Dua of Trust',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Allah is sufficient for us and the best Disposer of affairs — Al Imran 173'},
    fr:{label:'Dua de Confiance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Allah nous suffit et quel excellent Protecteur — Al Imran 173'} },
  { ar:{label:'دعاء المظلوم',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'يونس ٨٥-٨٦'},
    en:{label:'Dua of the Oppressed',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'Our Lord, do not make us a trial for the wrongdoing people and save us by Your mercy — Yunus 85-86'},
    fr:{label:'Dua de l\'Opprime',text:'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',tr:'Notre Seigneur, ne fais pas de nous un objet d\'epreuve pour les injustes et sauve-nous par Ta misericorde — Yunus 85-86'} },
  { ar:{label:'دعاء الثبات',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'آل عمران ٨'},
    en:{label:'Dua for Steadfastness',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Our Lord, do not let our hearts deviate after You have guided us and grant us mercy from You — Al Imran 8'},
    fr:{label:'Dua pour la Fermete',text:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً',tr:'Notre Seigneur, ne fais pas devier nos coeurs apres nous avoir guides et accorde-nous Ta misericorde — Al Imran 8'} },
  { ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} }
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
function addXP(pts) { const xp = getXP() + pts; localStorage.setItem(XP_KEY, xp); checkBadges(xp); updateXPDisplay(); return xp; }
function getLevel(xp) { if (xp >= 1000) return 5; if (xp >= 500) return 4; if (xp >= 300) return 3; if (xp >= 100) return 2; return 1; }
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => { if (xp >= b.xp && !earned.includes(b.id)) { earned.push(b.id); localStorage.setItem(BADGES_KEY, JSON.stringify(earned)); showToast(`${b.emoji} ${b[lang]}!`); playSound('success'); } });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) { const read = getReadCards(); if (!read.includes(id)) { read.push(id); localStorage.setItem(READ_KEY, JSON.stringify(read)); addXP(10); } }

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() { const today = new Date().toDateString(); const s = getStreak(); if (s.lastDate === today) return s.count; const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1); if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; } s.lastDate = today; localStorage.setItem(STREAK_KEY, JSON.stringify(s)); return s.count; }

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() { ageMode = ageMode === 'young' ? 'teen' : 'young'; localStorage.setItem(MODE_KEY, ageMode); document.body.classList.toggle('young-mode', ageMode === 'young'); renderAll(); showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode); playSound('theme'); }

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) { lang = l; document.documentElement.lang = l; document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l)); renderAll(); }
function cycleTheme() { const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length; currentTheme = THEMES[idx]; document.documentElement.dataset.theme = currentTheme; document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme]; playSound('theme'); }

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
  renderHome(); renderCards(); renderProgress(); renderAbout(); renderHelp(); renderDuas(); renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang]; const dayIdx = new Date().getDate() % CARDS.length; const card = CARDS[dayIdx]; const d = card[lang];
  document.getElementById('dailyCard').innerHTML = `<div class="daily-label">${t.dailyLabel}</div><div class="daily-title">${card.emoji} ${d.title}</div><div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div><div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  document.getElementById('homeGrid').innerHTML = CARDS.map(c => { const dd = c[lang]; return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')"><span class="hc-icon">${c.emoji}</span><div class="hc-title">${dd.title}</div></div>`; }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang]; const readCards = getReadCards(); const container = document.getElementById('cardsContainer');
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => { const d = c[lang]; const isRead = readCards.includes(c.id);
    return `<div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}"><div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})"><span class="trait-num">${c.id}</span><span class="trait-emoji">${c.emoji}</span><span class="trait-title">${d.title}</span>${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}<span class="trait-chev">&#9660;</span></div><div class="trait-body"><div class="trait-inner"><div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div><div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div><div class="hadith-box"><span class="hadith-label">📜 ${t.hadith}</span><div class="hadith-text">${d.hadith}</div></div><div class="action-box"><span class="action-icon">💡</span><span>${d.action}</span></div><button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button></div></div></div>`; }).join('');
}

function filterCards(query) { const cards = document.querySelectorAll('.trait-card'); const q = query.toLowerCase(); cards.forEach(card => { const title = card.querySelector('.trait-title').textContent.toLowerCase(); const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : ''; card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none'; }); }
function shareCard(id) { const card = CARDS.find(c => c.id === id); if (!card) return; const d = card[lang]; const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`; if (navigator.share) { navigator.share({ title: d.title, text }); } else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); } }

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() { quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true }; showQuizQuestion(); }

function showQuizQuestion() {
  const t = T[lang]; const container = document.getElementById('quizContainer'); const result = document.getElementById('quizResult'); result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang]; const total = QUIZ.length; const num = quizState.current + 1;
  container.innerHTML = `<div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div><div class="quiz-counter">${num} / ${total}</div><div class="quiz-question-card scroll-reveal"><div class="quiz-q-text">${q.q}</div><div class="quiz-options" id="quizOpts">${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div><div class="quiz-lifelines"><button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button><button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button><button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button></div><div id="quizFeedback" class="quiz-feedback hidden"></div></div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return; const q = QUIZ[quizState.current][lang]; const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt'); opts.forEach((o, i) => { o.disabled = true; if (i === correct) o.classList.add('correct'); if (i === idx && i !== correct) o.classList.add('wrong'); });
  const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden');
  if (idx === correct) { quizState.score++; addXP(5); feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`; playSound('success'); } else { feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`; playSound('click'); }
  quizState.answers.push(idx); quizState.current++; setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() { if (!quizState.lifelines.fifty) return; quizState.lifelines.fifty = false; const q = QUIZ[quizState.current][lang]; const correct = q.correct; const wrongIdxs = [0,1,2,3].filter(i => i !== correct); const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2); toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }}); document.querySelector('.lifeline-btn').classList.add('used'); playSound('click'); }
function useHint() { if (!quizState.lifelines.hint) return; quizState.lifelines.hint = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`; playSound('click'); }
function useQuranRef() { if (!quizState.lifelines.quran) return; quizState.lifelines.quran = false; const q = QUIZ[quizState.current][lang]; const feedback = document.getElementById('quizFeedback'); feedback.classList.remove('hidden'); feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`; playSound('click'); }

function showQuizResult() {
  const t = T[lang]; const total = QUIZ.length; const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct); addXP(20);
  let emoji, title; if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'عالم حقيقي!':lang==='fr'?'Un vrai savant !':'A True Scholar!'; } else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; } else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  document.getElementById('quizContainer').innerHTML = ''; const result = document.getElementById('quizResult'); result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${quizState.score}/${total}</div><div class="qr-title">${title}</div><div class="qr-desc">${pct}%</div><button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' }); if (pct >= 80) launchConfetti(); quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang]; const xp = getXP(); const level = getLevel(xp); const streak = getStreak().count; const readCards = getReadCards(); const earned = getEarnedBadges(); const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0'); const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id)); const nextXP = nextBadge ? nextBadge.xp : 1000; const progressPct = Math.min(100, (xp / nextXP) * 100);
  document.getElementById('progressContainer').innerHTML = `<div class="progress-xp-card"><div class="xp-header"><span class="xp-icon">⭐</span><span class="xp-amount">${xp} ${t.xpLabel}</span></div><div class="xp-bar-wrap"><div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div><span class="xp-level">${t.levelLabel} ${level}</span></div>${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}</div>${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}<div class="progress-stats"><div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'بطاقة مقروءة':lang==='fr'?'Cartes lues':'Cards Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div><div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div><div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div></div><div class="badges-section"><h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3><div class="badges-grid">${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}</div></div>`;
}
function updateXPDisplay() { const panel = document.getElementById('panel-progress'); if (panel && panel.classList.contains('active')) renderProgress(); }

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: { disclaimerTitle:'⚠️ تنبيه مهم', disclaimer:'لست عالماً ولا مفتياً. هذا جهد متواضع من مسلم يحب كتب الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة. ليست فتوى.', authorName:'الشيخ محمد الغزالي', authorDates:'١٩١٧ — ١٩٩٦', authorBio:'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل.', bookTitle:'عن الكتاب', bookDesc:'«الاستعمار أحقاد وأطماع» كتاب يكشف فيه الشيخ الغزالي الوجه الحقيقي للاستعمار الغربي للعالم الإسلامي. يبيّن أن الاستعمار ليس مجرد احتلال عسكري بل مشروع شامل لتدمير الهوية ونهب الثروات وتفريق الأمة. كتاب ضروري لفهم الحاضر من خلال الماضي.', sourcesTitle:'المصادر', sources:['كتاب "الاستعمار أحقاد وأطماع" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'], contact:'تواصل: abdelhak.bourdim@gmail.com' },
    en: { disclaimerTitle:'⚠️ Important Notice', disclaimer:'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.', bookTitle:'About the Book', bookDesc:'"Colonialism: Grudges and Greed" is a book where Sheikh al-Ghazali exposes the true face of Western colonialism in the Muslim world. He shows that colonialism is not merely military occupation but a comprehensive project to destroy identity, plunder wealth, and divide the nation. Essential reading for understanding the present through the past.', sourcesTitle:'Sources', sources:['"Colonialism: Grudges and Greed" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'], contact:'Contact: abdelhak.bourdim@gmail.com' },
    fr: { disclaimerTitle:'⚠️ Avis Important', disclaimer:'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali.', authorName:'Sheikh Mohammed al-Ghazali', authorDates:'1917 — 1996', authorBio:'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.', bookTitle:'A Propos du Livre', bookDesc:'"Le Colonialisme : Rancunes et Convoitises" est un livre ou le Sheikh al-Ghazali devoile le vrai visage du colonialisme occidental dans le monde musulman. Il montre que le colonialisme n\'est pas qu\'une occupation militaire mais un projet global de destruction de l\'identite et de pillage des richesses.', sourcesTitle:'Sources', sources:['"Le Colonialisme : Rancunes et Convoitises" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'], contact:'Contact : abdelhak.bourdim@gmail.com' }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `<div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div><div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div><div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div><div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div><div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},{title:'📚 المصادر',body:'كتاب "الاستعمار أحقاد وأطماع" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},{title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ بطاقة، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},{title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},{title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},{title:'🤝 المساهمة',body:'GitHub: github.com/abourdim'}],
    en: [{title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},{title:'📚 Sources',body:'"Colonialism: Grudges and Greed" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},{title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 cards, interactive quiz, XP and badges system, 2 age modes.'},{title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},{title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},{title:'🤝 Contributing',body:'GitHub: github.com/abourdim'}],
    fr: [{title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},{title:'📚 Sources',body:'"Le Colonialisme : Rancunes et Convoitises" par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah.'},{title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 cartes, quiz interactif, systeme XP et badges, 2 modes d\'age.'},{title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},{title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},{title:'🤝 Contribuer',body:'GitHub : github.com/abourdim'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() { document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => { const dd = d[lang]; return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`; }).join(''); }

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = { ar:['📖 اقرأ بطاقة جديدة كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء بالعزة','⭐ أكمل ١٥ بطاقة لتصبح خبيراً'], en:['📖 Read a new card every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua for honor','⭐ Complete all 15 cards to become an Expert'], fr:['📖 Lisez une nouvelle carte chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas pour l\'honneur','⭐ Completez les 15 cartes pour devenir Expert'] };
  const items = tips[lang]; const doubled = [...items, ...items]; const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() { const features = document.getElementById('splashFeatures'); if (features) { features.innerHTML = T[lang].splashFeatures.map((f, i) => `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`).join(''); } let count = 5; const counter = document.getElementById('splashCount'); splashTimer = setInterval(() => { count--; if (counter) counter.textContent = count; if (count <= 0) dismissSplash(); }, 1000); }
function dismissSplash() { clearInterval(splashTimer); const splash = document.getElementById('splash'); if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); } }

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() { document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => { switchTab(tab.dataset.tab); }); }); }
function switchTab(name) { document.querySelectorAll('.panel').forEach(p => p.classList.remove('active')); document.querySelectorAll('.tab').forEach(t => t.classList.remove('active')); const panel = document.getElementById('panel-' + name); const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`); if (panel) panel.classList.add('active'); if (tabBtn) tabBtn.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); playSound('click'); setTimeout(() => { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => { if (window._scrollObserver) window._scrollObserver.observe(el); }); initTypewriter(); }, 100); }

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() { if (!('IntersectionObserver' in window)) return; window._scrollObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); window._scrollObserver.unobserve(entry.target); } }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el)); }

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; } const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; } document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open')); }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { const panel = document.getElementById('panel-cards'); if (!panel || !panel.classList.contains('active')) return; if (document.activeElement && document.activeElement.id === 'cardsSearch') return; e.preventDefault(); const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none'); if (!cards.length) return; if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open'); const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1); currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir)); cards[currentCardIdx].classList.add('open'); cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' }); playSound('click'); }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'); const m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) { try { if (!audioCtx) audioCtx = new AudioCtx(); const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination); gain.gain.value = 0.06; if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; } else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; } else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; } osc.start(); osc.stop(audioCtx.currentTime + 0.1); } catch(e) {} }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() { const canvas = document.getElementById('confettiCanvas'); if (!canvas) return; canvas.style.display = 'block'; const ctx = canvas.getContext('2d'); canvas.width = window.innerWidth; canvas.height = window.innerHeight; const particles = []; const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7']; for (let i = 0; i < 120; i++) { particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 }); } let frame = 0; function draw() { ctx.clearRect(0,0,canvas.width,canvas.height); particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); }); frame++; if (frame < 120) requestAnimationFrame(draw); else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; } } draw(); }

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() { const dailyTitle = document.querySelector('.daily-card .daily-title'); if (!dailyTitle || dailyTitle.dataset.twDone) return; const fullText = dailyTitle.textContent; dailyTitle.textContent = ''; dailyTitle.classList.add('typewriter-text'); dailyTitle.dataset.twDone = '1'; let i = 0; const speed = Math.max(30, 2000 / fullText.length); function typeChar() { if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); } else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); } } setTimeout(typeChar, 500); }

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() { let touchStartX = 0, touchStartY = 0; const tabOrder = ['home','cards','quiz','progress','about']; document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true }); document.addEventListener('touchend', e => { const dx = e.changedTouches[0].screenX - touchStartX; const dy = e.changedTouches[0].screenY - touchStartY; if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return; const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); }); if (current < 0) return; const isRTL = document.documentElement.dir === 'rtl'; let next; if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1; if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]); }, { passive: true }); }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak(); initSplash(); renderAll(); initTabs(); initScrollReveal(); initScrollTop(); initKeyboardNav(); initSwipeGestures(); initTypewriter();
});
