// src/liturgyData.js

import { title } from "framer-motion/client";
// NEU: Übersetzungen für die Benutzeroberfläche (UI)
export const uiTranslations = {
    titles: {
        homeSubtitle: {
            de: "Kirche der Hl. Maria & Hl.Philopater Mercurius Unna-Massen",
            ar: "كنيسه العدرا و الشهيد ابي سيفين القبطيه الارثذوكسيه باونا ماسن"
        },
        chooseLiturgy: {
            de: "Wähle die Liturgie",
            ar: "اختر القداس"
        },
        settings: {
            de: "Einstellungen",
            ar: "الإعدادات"
        },
        appLanguage: {
            de: "App Sprache / لغة التطبيق",
            ar: "لغة التطبيق / App Sprache"
        },
        prayerLanguages: {
            de: "Gebetssprachen (Max 3)",
            ar: "لغات الصلاة (بحد أقصى 3)"
        },
        loading: {
            de: "Wird geladen...",
            ar: "جار التحميل..."
        },
        done: {
            de: "Fertig",
            ar: "تم"
        }
    },
    buttons: {
        morning_incense: { ar: "رفع بخور باكر", de: "Morgenweihrauchopfer" },
        agpeya: { de: "Agpeya", ar: "الأجبية" },
        liturgy: { de: "Liturgie", ar: "القداسات" },
        bible: { de: "Bibel", ar: "الكتاب المقدس" },
        offering: { de: "Auswahl des Lammbrotes", ar: "الحمل" },
        basily: { de: "Basilius", ar: "القداس الباسيلي" },
        kerollosy: { de: "Cyrillus", ar: "القداس الكيرلسي" },
        gregorios: { de: "Gregorios", ar: "القداس الغريغوري" },
        habashy: { de: "Äthiopisch", ar: "القداس الحبشي" }
    }
};
export const languages = {
    de: { label: " Deutsch", default: true },
    ar: { label: " Arabisch", default: true },

    // Deine neuen Bezeichnungen:
    ar_de: { label: "Franco / فرانكو", default: false },
    cop_ar: { label: "Koptisch (Arabisch) / قبطي معرب", default: true },
    cop_de: { label: "Koptisch Franco / قبطي فرانكو", default: false },
    cop_cop: { label: "Koptisch / قبطي", default: false },
};

export const liturgies = {
    // --- NEU: MORGENWEIHRAUCHOPFER ---
    morning_incense: {
        title: { ar: "رفع بخور باكر", de: "Morgenweihrauchopfer" },
        content: [
            {
                id: 1,
                speaker: "Priester & Volk",
                ar: "ارحمنا يا الله الآب ضابط الكل، أيها الثالوث القدوس ارحمنا. أيها الرب إله القوات كن معنا، لأنه ليس لنا معين في شدائدنا وضيقاتنا سواك. اللهم اجعلنا مستحقين أن نقول بشكر: أبانا الذي في السموات...",
                de: "Erbarme dich unser, Gott Vater, Allmächtiger, Heilige Dreifaltigkeit, erbarme dich unser. Gott, Herr der Heerscharen, sei mit uns, denn wir haben keinen anderen Helfer in unseren Nöten und Bedrängnissen außer dir. Mache uns würdig in Dankbarkeit zu sprechen: Vater unser im Himmel...",
                cop_ar: "إليصون إيماس أو ثيؤس أو باتير أو بانتوكراتور: باناجيا ترياس إليصون إيماس: إبشويس إفنوتي إنتي ني جوم شوبي نيمان: جي إممون إنتان إن أو فويثوس خين نين ثليفصيس نيم نين هوج هيج إيفيل إيروك. أريتين إن إمبشا إن جوس خين أو شيب إهموت: بين يوت إت خين ني فيئي...",
                cop_cop: "Ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ ⲟ Ⲑⲉⲟⲥ ⲟ Ⲡⲁⲧⲏⲣ ⲟ Ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲡⲁⲛⲁⲅⲓⲁ Ⲧⲣⲓⲁⲥ ⲉⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ: Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: ϫⲉ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲁⲛ ⲛ̀ⲟⲩⲃⲟⲏ̀ⲑⲟⲥ ϧⲉⲛ ⲛⲉⲛⲑ̀ⲗⲓⲯⲓⲥ ⲛⲉⲙ ⲛⲉⲛϩⲟϫϩⲉϫ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟⲕ. Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲛ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀...",
                ar_de: "Erhamna ya Allah el ab dabet el kol, ayoha el thalouth el qodos erhamna. Ayoha el rab elah el qowat kon ma3ana, le anaho laysa lana mo3in fi shada2edna wa diqatana sewak. Allahom eg3alna mostahiqin an naqoul be shokr: Abana allazi fi el samawat...",
                cop_de: "Eleison imas o Theos o Patir o Pantokrator: Panagia Trias eleison imas: Epchois Efnouti ente ni gom shopi neman: je emmon entan en ou voithos khen nen thlipsis nem nen hogheg evol erok. Ariten en emepsha en gos khen ou shep ehmot: Pen iot et khen ni feoui..."
            },
            {
                id: 2,
                sectionTitle: {
                    de: "Das Dankugsgebet",
                    ar: "صلاه الشكر"
                },
                speaker: "Priester",
                ar: "صَلّ.",
                de: "Betet!",
                cop_ar: "شليل.",
                cop_cop: "Ϣ̀ⲗⲏⲗ.",
                ar_de: "Sall.",
                cop_de: "EShlel."
            },
            {
                id: 3,
                speaker: "Diakon",
                ar: "للصلاة قِفُوا.",
                de: "Erhebt euch zum Gebet!",
                cop_ar: "إيبي إبروسفكي إسطاثيتي.",
                cop_cop: "Ⲉⲡⲓ ̀ⲡⲣⲟⲥⲉⲩⲭⲏ ̀ⲥⲧⲁⲑⲏⲧⲉ.",
                ar_de: "Lel salat qefou.",
                cop_de: "Epi prosevki stathite."
            },
            {
                id: 4,
                speaker: "Priester",
                ar: "السَّلَامُ لِلْكُلِّ.",
                de: "Friede sei mit euch.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                ar_de: "El salam lel kol.",
                cop_de: "Irini pasi."
            },
            {
                id: 5,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كي طو إبنيفماتي صو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                ar_de: "Wa lirohika aydan.",
                cop_de: "Ke to pnevmati sou."
            },
            {
                id: 6,
                speaker: "Priester",
                ar: "فَلْنَشْكُرْ صَانِعَ الْخَيْرَاتِ، الرَّحُومَ الله، أَبَا رَبِّنَا وَإِلهِنَا وَمُخَلِّصِنَا، يَسُوعَ الْمَسِيحِ. لأَنَّهُ سَتَرَنَا، وَأَعَانَنَا، وَحَفِظَنَا، وقبلنا إليه وشَفَقَ علينَا، وعَضَّدَنَا، وأتى بنا إلى هذه الساعة. هُوَ أَيْضاً فَلْنَسْأَلْهُ أَنْ يَحْفَظَنَا فِي هَذَا الْيَوْمِ الْمُقَدَّسِ وكُلَّ أيَّام حياتِنا بِكُلِّ سلام، ضابِطُ الكُلِّ الرَّبُّ إلهُنا.",
                de: "Lasst uns Dank sagen dem Wohltaten spendenden und erbarmungsreichen Gott, dem Vater unseres Herrn, Gottes und Erlösers Jesus Christus. Denn er hat uns beschützt, geholfen, bewahrt, uns angenommen, mit Erbarmen bedacht, gestärkt und bis zu dieser Stunde gelangen lassen. Ihn, den Allmächtigen Herrn unseren Gott, bitten wir auch, dass er uns an diesem heiligen Tag und an allen Tagen unseres Lebens in Frieden bewahre.",
                cop_ar: "مارين شيب إهموت إنتوتف إمبي ريف إير بيث نانيو أووه إن نائيت: إفنوتي إفيوت إم بين شويس أووه بين نوتي أووه بين سوتير إيسوس بي إخرستوس. جي أف إير إسكيبازين إيجون: أف إير فو إيثين إيرون: أف أري إه إيرون: أف شوب تين إيروف: أف تي أسو إيرون: أف تي توتين أف إنتين شا إ إهري إي تاي أونيو ثاي. إنثوف أون مارين تيهو إيروف: هوبوس إنتيف أري إه إيرون: خين باي إيهوو إثؤواف فاي: نيم ني إيهوو تيرو إنتي بين أونخ: خين إيريني نيفين: إنجي بي بانتوكراتور إبشويس بين نوتي.",
                cop_cop: "Ⲙⲁⲣⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧϥ ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲡⲉⲑⲛⲁⲛⲉⲩ ⲟⲩⲟϩ ⲛ̀ⲛⲁⲏⲧ: Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ϫⲉ ⲁϥⲉⲣⲥ̀ⲕⲉⲡⲁⲍⲓⲛ ⲉ̀ϫⲱⲛ: ⲁϥⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ: ⲁϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁϥϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟϥ: ⲁϥϯⲁ̀ⲥⲟ ⲉ̀ⲣⲟⲛ: ⲁϥϯⲧⲟⲧⲉⲛ ⲁϥⲉⲛⲧⲉⲛ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧⲁⲓⲟⲩⲛⲟⲩ ⲑⲁⲓ. Ⲛ̀ⲑⲟϥ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟϥ: ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ: ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲱⲛϧ: ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ: ⲛ̀ϫⲉ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.",
                ar_de: "Fal nashkor sane3 el khayrat, el ra7oum Allah, aba rabina wa ilahina wa mokhalisina, Yasou3 el Masih. Le anaho satarana, wa a3anana, wa hafazana, wa qabilana ilayhi, wa shafaqa 3alayna, wa 3adadana, wa ata bina ila hazihi el sa3a. Howa aydan fal nas2alho an yahfazana fi haza el yawm el moqadas wa kol ayam 7ayatina be kol salam, dabet el kol el rab elahona.",
                cop_de: "Maren shep ehmot entotf empi ref er peth naneu ouoh en nait: Efnouti Efiot em Penchois ouoh Pennouti ouoh Pensotir Isos Pi Khristos. Je afer skepazin egon: afer voithin eron: af areh eron: af shop ten erof: af ti aso eron: af ti toten af enten sha e hri e tai ounou thai. Enthof on maren tiho erof: hopos entef areh eron: khen pai ehoou ethowab fai: nem ni ehoou tirou ente pen onkh: khen hirini niven: enje Pi pantokrator Epchois Pennouti."
            },
            {
                id: 7,
                speaker: "Diakon",
                ar: "صَلُّوا.",
                de: "Betet!",
                cop_ar: "بروسيفكساستي.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.",
                ar_de: "Sallou.",
                cop_de: "Prosevxasthe."
            },
            {
                id: 8,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 9,
                speaker: "Priester",
                ar: "أَيُّهَا السَّيِّدُ الرَّبُّ الْإِلهُ ضَابِطُ الْكُلِّ، أَبُو رَبِّنَا وَإِلهِنَا وَمُخَلِّصِنَا يَسُوعَ الْمَسِيحِ. نَشْكُرُكَ عَلَى كُلِّ حَالٍ، وَمِنْ أَجْلِ كُلِّ حَالٍ، وَفِي كُلِّ حَالٍ. لأَنَّكَ سَتَرْتَنَا، وَأَعَنْتَنَا، وَحَفِظْتَنَا، وَقَبِلْتَنَا إِلَيْكَ، وَشَفَقْتَ عَلَيْنَا، وَعَضَّدْتَنَا، وَأَتَيْتَ بِنَا إِلَى هذِهِ السَّاعَةِ.",
                de: "Meister, Herr, Gott Allmächtiger, Vater unseres Herrn, Gottes und Erlösers Jesus Christus, wir danken dir für alles, wegen allem und in allem, denn du hast uns beschützt, geholfen, bewahrt, uns angenommen, mit Erbarmen bedacht, gestärkt und bis zu dieser Stunde geführt.",
                cop_ar: "فنيب إبشويس إفنوتي بيبانتوكراتور: إفيوت إمبين شويس أووه بين نوتي أووه بين سوتير إيسوس بي إخرستوس. تين شيب إهموت إنتوتك كاطا هوب نيفين: نيم إثفي هوب نيفين: نيم خين هوب نيفين. جي أك إير إسكيبازين إيجون: أك إير فو إيثين إيرون: أك أري إه إيرون: أك شوب تين إروك: أك تي أسو إيرون: أك تي توتين أك إنتين شا إ إهري إي تاي أونيو ثاي.",
                cop_cop: "Ⲫⲛⲏⲃ Ⲡ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲫ̀ⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲧⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲉⲑⲃⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ. Ϫⲉ ⲁⲕⲉⲣⲥ̀ⲕⲉⲡⲁⲍⲓⲛ ⲉ̀ϫⲱⲛ: ⲁⲕⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ: ⲁⲕⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ: ⲁⲕϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ: ⲁⲕϯⲁ̀ⲥⲟ ⲉ̀ⲣⲟⲛ: ⲁⲕϯⲧⲟⲧⲉⲛ ⲁⲕⲉⲛⲧⲉⲛ ϣⲁ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ⲧⲁⲓⲟⲩⲛⲟⲩ ⲑⲁⲓ.",
                ar_de: "Ayoha el sayed el rab el ilah dabet el kol, abou rabina wa ilahina wa mokhalisina Yasou3 el Masih. Nashkoroka 3ala kol hal, wa men agl kol hal, wa fi kol hal. Le annaka satartana, wa a3antana, wa hafztana, wa qabiltana ilayka, wa shafaqta 3alayna, wa 3adadtana, wa atayta bina ila hazihi el sa3a.",
                cop_de: "Fnib Epchois Efnouti Pi-pantokrator: Efiot em-Penchois ouoh Pennouti ouoh Pensotir Isos Pi-Khristos. Ten-shep-ehmot entotk kata hob niven: nem ethbe hob niven: nem khen hob niven. Je ak-er-skepazin ejon: ak-er-voithin eron: ak-areh eron: ak-shopten erok: ak-ti-aso eron: ak-ti-toten ak-enten sha e-hri e-tai-ounou thai."
            },
            {
                id: 10,
                speaker: "Diakon",
                ar: "أطلبوا لكي يرحمنا الله، ويترأف علينا، ويسمعنا ويعيننا، ويقبل سؤالات وطلبات قديسيه منهم بالصلاح عنا في كل حين، ويغفر لنا خطايانا.",
                de: "Bittet, dass Gott sich unser erbarme, gnädig mit uns sei, uns erhöre und helfe, die Gebete und Bitten seiner Heiligen annehme für unser Wohlergehen zu allen Zeiten, und uns unsere Sünden vergebe.",
                cop_ar: "توف هينا إنتي إفنوتي ناي نان: إنتيف شينهيت خارون: إنتيف سوتيم إيرون: إنتيف إير فويثين إيرون: إنتيف تشي إن ني تيهو نيم ني توفه إنتي ني إثؤواف إنت اف: إنتوتو إإهري إيجون إي بي أغاثون إنسيو نيفين: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲧⲱⲃϩ ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ : ⲛ̀ⲧⲉϥϣⲉⲛϩⲧ ϧⲁⲣⲟⲛ : ⲛ̀ⲧⲉϥⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ : ⲛ̀ⲧⲉϥⲉⲣⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ : ⲛ̀ⲧⲉϥϭⲓ ⲛ̀ⲛⲓϯϩⲟ ⲛⲉⲙ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁϥ : ⲛ̀ⲧⲟⲧⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : * ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobo lekay yarhamana Allah, wa yatara'af 'alayna, wa yasma'ana wa yo'inana, wa yaqbal so'alat wa talabat qadisih minhom bel salah 'anna fi kol hin, wa yaghfer lana khatayana.",
                cop_de: "Tobh hina ente Efnouti nai nan: entef shenhit kharon: entef sotem eron: entef er voithin eron: entef chi en ni tiho nem ni tobh ente ni ethowab entaf: entoto e hri egon e pi agathon en siou niven: entef ka nen novi nan evol."
            },
            {
                id: 11,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 12,
                speaker: "Priester",
                ar: "مِنْ أَجْلِ هَذَا نَسْأَلُ وَنَطْلُبُ مِنْ صَلَاحِكَ يَا مُحِبَّ الْبَشَرِ، إِمْنَحْنَا أَنْ نُكَمِّلَ هذَا الْيَوْمَ الْمُقَدَّسَ، وَكُلَّ أَيَّامِ حَيَاتِنَا بِكُلِّ سَلَامٍ مَعَ خَوْفِكَ. كُلَّ حَسَدٍ، وَكُلَّ تَجْرِبَةٍ، وَكُلَّ فِعْلِ الشَّيْطَانِ، ومُؤَامَرَةَ النَّاسِ الْأَشْرَارِ، وقِيَامَ الْأَعْدَاءِ الْخَفِيِّينَ وَالظَّاهِرِينَ، اِنْزِعْهَا عَنَّا وَعَنْ سَائِرِ شَعْبِكَ وَعَنْ هَذِهِ الْكَنِيسَةِ وَعَنْ مَوْضِعِكَ الْمُقَدَّسِ هَذَا. وَأَمَّا الصَّالِحَاتُ وَالنَّافِعَاتُ فَارْزُقْنَا إِيَّاهَا، لِأَنَّكَ أَنْتَ الَّذِي أَعْطَيْتَنَا السُّلْطَانَ أَنْ نَدُوسَ عَلَى الْحَيَّاتِ وَالْعَقَارِبِ، وَعَلَى كُلِّ قُوَّةِ الْعَدُوِّ.",
                de: "Darum bitten wir dich und erflehen deine Güte, Menschenliebender, gewähre uns, diesen heiligen Tag und alle Tage unseres Lebens in völligem Frieden zu vollenden in Ehrfurcht vor dir. Jeden Neid, jede Versuchung, alle Werke des Satans, die Nachstellungen böser Menschen und das Hervorkommen von Feinden, verborgen oder offenkundig, halte fern von uns und von deinem ganzen Volk und von dieser Kirche und von diesem deinem heiligen Ort. Die guten und die nützlichen Dinge aber lass uns zuteil werden, denn du hast uns Macht gegeben, auf Schlangen und Skorpione und jegliche Macht des Feindes zu treten.",
                cop_ar: "إثفي فاي تين تيهو أووه تين توفه إنتيك ميت أغاثوس بي ماي رومي: ميس نان إثرين جوك إيفول إمباي إيهوو إثؤواف فاي: نيم ني إيهوو تيرو إنتي بين أونخ: خين إيريني نيفين نيم تيك هوتي. إفثونوس نيفين: بيراسموس نيفين: إنيرجيا نيفين إنتي بي ساتاناس: بي سوتشني إنتي هان رومي إف هوؤو: نيم بي تونف إإبشوي إنتي هان جاجي ني إت هيب نيم ني إث أوؤنه إيفول. أليتو إيفول هارون نيم إيفول ها بيك لاؤس تيرف نيم إيفول ها تاي إككليسيا ثاي نيم إيفول ها باي ما إثؤواف إنتاك فاي. ني دي إث نانيو نيم ني إت إير نوفري ساهني إمموؤو نان: جي إنثوك بي إيتاك تي إمبي إير شيشي نان: إهومي إيجين هان جوف نيم هان شلي نيم إيجين تي جوم تيرس إنتي بي جاجي.",
                cop_cop: "Ⲉⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲙⲏⲓⲥ ⲛⲁⲛ ⲉⲑⲣⲉⲛϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ: ⲛⲉⲙ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲱⲛϧ: ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲧⲉⲕϩⲟϯ. Ⲫⲑⲟⲛⲟⲥ ⲛⲓⲃⲉⲛ: ⲡⲓⲣⲁⲥⲙⲟⲥ ⲛⲓⲃⲉⲛ: ⲉⲛⲉⲣⲅⲓⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲡ̀ⲥⲁⲧⲁⲛⲁⲥ: ⲡ̀ⲥⲟϭⲛⲓ ⲛ̀ⲧⲉ ϩⲁⲛⲣⲱⲙⲓ ⲉⲩϩⲱⲟⲩ: ⲛⲉⲙ ⲡ̀ⲧⲱⲛϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧⲉ ϩⲁⲛϫⲁϫⲓ ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲁⲗⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ. Ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ. Ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲧⲁⲓⲉⲕⲕⲗⲏⲥⲓⲁ ⲑⲁⲓ. Ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲁⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ. Ⲛⲏ ⲇⲉ ⲉⲑⲛⲁⲛⲉⲩ ⲛⲉⲙ ⲛⲏⲉⲧⲉⲣⲛⲟϥⲣⲓ ⲥⲁϩⲛⲓ ⲙ̀ⲙⲱⲟⲩ ⲛⲁⲛ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉⲧⲁⲕϯ ⲙ̀ⲡⲓⲉⲣϣⲓϣⲓ ⲛⲁⲛ: ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ϩⲁⲛϫⲟϥ ⲛⲉⲙ ϩⲁⲛϭⲗⲏ ⲛⲉⲙ ⲉ̀ϫⲉⲛ ϯϫⲟⲙ ⲧⲏⲣⲥ ⲛ̀ⲧⲉ ⲡⲓϫⲁϫⲓ.",
                ar_de: "Men agl haza nas'al wa natlob men salahika ya moheb el bashar, emnahna an nokamel haza el yawm el moqadas, wa kol ayam hayatina be kol salam ma'a khawfik. Kol hasad, wa kol tagriba, wa kol fe'l el shaitan, wa mo'amarat el nas el ashrar, wa qiyam el a'da' el khafiyin wa el zahirin, enza'ha anna wa an sa'er sha'bika wa an hazihi el kanisa wa an mawde'ika el moqadas haza. Wa amma el salehat wa el nafe'at fa-arzoqna iyaha, le-annaka anta allazi a'taytana el soltan an nadous ala el hayat wa el aqareb, wa ala kol qowat el 'adou.",
                cop_de: "Ethve fai tentiho ouoh tentovh entek-met-agathos pi-mai-romi: mis nan ethren-jok evol empai-ehoou ethowab fai: nem ni-ehoou tirou ente pen-onkh: khen hirini niven nem tek-hoti. Fthonos niven: pirasmos niven: energia niven ente pi-satanas: pi-sochni ente han-romi ev-hoou: nem pi-tonf e-pshoi ente han-jaji ni-et-hip nem ni-eth-ouonh evol. Alitou evol haron. Nem evol ha pek-laos tirf. Nem evol ha tai-ekklesia thai. Nem evol ha pai-ma ethowab entak fai. Ni de eth-naneu nem ni-et-er-nofri sahni emmo-ou nan: je enthok pe etak-ti empi-ershishi nan: e-homi ejen han-jof nem han-chli nem ejen ti-jom tirs ente pi-jaji."
            },
            {
                id: 13,
                sectionTitle: {
                    de: "Die Zimbelstrophen Adam",
                    ar: "ارباع الناقوس ادام"
                },
                speaker: "Volk",
                ar: "تعالوا فلنسجد، للثالوث القدوس، الذي هو الآب والابن، والروح القدس.\n\nنحن الشعوب المسيحيين، لأن هذا هو، إلهنا الحقيقي.\n\nلنا رجاء في القديسة مريم، الله يرحمنا، بشفاعاتها.\n\nيوجد هدوء في العالم، مِنْ قِبَلِ صلاة، القديسة مريم العذراء.",
                de: "Kommt lasst uns anbeten – die Heilige Dreifaltigkeit – den Vater und den Sohn – und den Heiligen Geist.\n\nWir, die christlichen Völker, – denn er ist – unser wahrer Gott.\n\nWir haben Hoffnung – auf die heilige Maria. – Möge Gott sich unser erbarmen, – durch ihre Fürsprachen.\n\nAlle Ruhe – in der Welt – kommt durch das Gebet – der heiligen Jungfrau Maria.",
                cop_ar: "أمويني مارين أو أوشت: إنتي ترياس إثؤواف: إيتي إفيوت نيم إبشيري: نيم بي إبنيفما إثؤواف.\n\nأنون خا ني لاؤس: إن إخريستيانوس: فاي غار بي بين نوتي إن أليثينوس.\n\nأوؤن أو هلبيس إنتان: خين ثي إثؤواف ماريا: إيري إفنوتي ناي نان: هيتين نيس بريسفيا.\n\nأوؤن أو ميت سيمنوس: شوب خين بي كوسموس: إيفول هيتين بي شليل: إنتي تي أجيا ماريا تي بارثينوس.",
                cop_cop: "Ⲁⲙⲱⲓⲛⲓ ⲙⲁⲣⲉⲛⲟⲩⲱϣⲧ : ⲛ̀ϯⲧ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ : ⲉ̀ⲧⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.\n\nⲀⲛⲟⲛ ϧⲁ ⲛⲓⲗⲁⲟⲥ : ⲛ̀ⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ : ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ Ⲡⲉⲛⲛⲟⲩϯ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ.\n\nⲞⲩⲟⲛ ⲟⲩϩⲉⲗⲡⲓⲥ ⲛ̀ⲧⲁⲛ : ϧⲉⲛ ⲑⲏⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ̀ : ⲉ̀ⲣⲉ Ⲫϯ ⲛⲁⲓ ⲛⲁⲛ : ϩⲓⲧⲉⲛ ⲛⲉⲥⲡ̀ⲣⲉⲥⲃⲓⲁ̀.\n\nⲞⲩⲟⲛ ⲟⲩⲙⲉⲧⲥⲉⲙⲛⲟⲥ : ϣⲟⲡ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲉ̀ⲃⲟⲗϩⲓⲧⲉⲛ ⲡⲓϣ̀ⲗⲏⲗ : ⲛ̀ⲧⲉ ϯⲁ̀ⲅⲓⲁ̀ Ⲙⲁⲣⲓⲁ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ.",
                ar_de: "Ta'alou fal nasgod, lel thalouth el qodos, allazi howa el Ab wal Ebn, wal Roh el Qodos.\n\nNahno el sho'oub el masihiyin, le ana haza howa, ilahuna el haqiqi.\n\nLana raga' fi el qadisa Mariam, Allah yarhamna, be shafa'atiha.\n\nYougad hodou' fi el 'alam, men qibal salat, el qadisa Mariam el 'azra'.",
                cop_de: "Amoini maren-ouosht: en-ti-trias ethowab: ete Efiot nem Epshiri: nem Pi-pnevma ethowab.\n\nAnon kha ni-laos: en-khristianos: fai gar pe Pennouti en-alithinos.\n\nOuon ou-helpis entan: khen thi-ethowab Maria: ere Efnouti nai nan: hiten nes-presvia.\n\nOuon ou-met-semnos: shop khen pi-kosmos: evol-hiten pi-shlel: ente ti-agia Maria ti-parthenos."
            },
            {
                id: 14,
                speaker: "Volk",
                ar: "السلام لك يا مريم، الحمامة الحسنة، التي ولدت لنا، الله الكلمة.\n\nالسلام لك يا مريم، سلاماً مقدساً. السلام لك يا مريم، أم القدوس.\n\nالسلام لميخائيل، رئيس الملائكة العظيم. السلام لغبريال، المبشر المختار.\n\nالسلام للشاروبيم. السلام للسرافيم. السلام لجميع الطغمات السمائية.\n\nالسلام ليوحنا، السابق العظيم. السلام للكاهن، نسيب عمانوئيل.\n\nالسلام لسادتي الآباء الرسل. السلام لتلاميذ ربنا يسوع المسيح.\n\nالسلام لك أيها الشهيد. السلام للإنجيلي. السلام للرسول، أنبا مرقس ناظر الإله.\n\nالسلام لإسطفانوس، أول الشهداء. السلام للشماس، المبارك.\n\nالسلام لك أيها الشهيد. السلام للشجاع المجاهد. السلام للابس الجهاد: سيدي الملك جيورجيوس، وفيلوباتير مرقوريوس، وأنبا مينا البياضي (العجائبي).",
                de: "Gegrüßt seist du Maria, du schöne Taube, die hat für uns geboren, Gott das Wort.\n\nGegrüßt seist du Maria, mit heiligem Gruß. Gegrüßt seist du Maria, Mutter des Heiligen.\n\nGegrüßt sei Michael, der große Erzengel. Gegrüßt sei Gabriel, der auserwählte Verkündiger.\n\nGegrüßt seien die Cherubim. Gegrüßt seien die Seraphim. Gegrüßt seien alle himmlischen Heerscharen.\n\nGegrüßt sei Johannes, der große Vorläufer. Gegrüßt sei der Priester, der Verwandte Emmanuels.\n\nGegrüßt seien meine Herren und Väter, die Apostel. Gegrüßt seien die Jünger unseres Herrn Jesus Christus.\n\nGegrüßt seist du, o Märtyrer, gegrüßt sei der Evangelist. Gegrüßt sei der Apostel, Abba Markus, der Gotteseher.\n\nGegrüßt sei Stephanus, der erste Märtyrer. Gegrüßt sei der gesegnete Archidiakon.\n\nGegrüßt seist du, o Märtyrer, gegrüßt sei der mutige Held, gegrüßt sei der Streiter: mein Herr, der König Georg, und Philopater Merkurius, und Abba Mena der Wundertäter (ente ni faiat).",
                cop_ar: "شيري ني ماريا: تي تشرومبي إثنيسوس: ثي إيطاس ميسي نان: إم إفنوتي بي لوغوس.\n\nشيري ني ماريا: خين أو شيري إثؤواف: شيري ني ماريا: إثماف إم في إثؤواف.\n\nشيري ميخائيل: بي نيشتي إن أرشي أنجيلوس: شيري غافريل: بي سوتب إن فاي شينوفي.\n\nشيري ني شيروبيم: شيري ني سيرافيم: شيري ني تاغما تيرو: إن إيبورانيون.\n\nشيري يؤانس: بي نيشتي إم برودروموس: شيري بي أوويب: إبسين جينيس إن إممانوئيل.\n\nشيري نا شويس إن يوتي: إن أبوستولوس: شيري ني ماثيتيس: إنتي بين شويس إيسوس بي إخرستوس.\n\nشيري ناك أو بي مارتيروس: شيري بي إف أنجيليستيس: شيري بي أبوستولوس: آفا ماركوس بي ثيؤريموس.\n\nشيري ستيفانوس: بي شورب إم مارتيروس: شيري بي أرشي دياكون: إت إسماروؤت.\n\nشيري ناك أو بي مارتيروس: شيري بي تشويج إن جينيئوس: شيري بي أثلوفوروس: با شويس إبؤورو جيورجيوس: نيم فيلوباتير مركوريوس: نيم آفا مينا إنتي ني فايات.",
                cop_cop: "Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ : ϯϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ : ⲑⲏⲉⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ : ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ.\n\nⲬⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ : ϧⲉⲛ ⲟⲩⲭⲉⲣⲉ ⲉⲑⲟⲩⲁⲃ : Ⲭⲉⲣⲉ ⲛⲉ Ⲙⲁⲣⲓⲁ : ⲑⲙⲁⲩ ⲙ̀Ⲫⲏⲉⲑⲟⲩⲁⲃ.\n\nⲬⲉⲣⲉ Ⲙⲓⲭⲁⲏⲗ : ⲡⲓⲛⲓϣϯ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ : Ⲭⲉⲣⲉ Ⲅⲁⲃⲣⲓⲏⲗ : ⲡⲓⲥⲱⲧⲡ ⲛ̀ϥⲁⲓϣⲉⲛⲛⲟⲩϥⲓ.\n\nⲬⲉⲣⲉ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ : Ⲭⲉⲣⲉ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ : Ⲭⲉⲣⲉ ⲛⲓⲧⲁⲅⲙⲁ ⲧⲏⲣⲟⲩ : ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ.\n\nⲬⲉⲣⲉ Ⲓⲱⲁⲛⲛⲏⲥ : ⲡⲓⲛⲓϣϯ ⲙ̀ⲡⲣⲟⲇⲣⲟⲙⲟⲥ : Ⲭⲉⲣⲉ ⲡⲓⲟⲩⲏⲃ : ⲡ̀ⲥⲩⲅⲅⲉⲛⲏⲥ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.\n\nⲬⲉⲣⲉ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ : ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : Ⲭⲉⲣⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : Ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : Ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉⲱⲣⲓⲙⲟⲥ.\n\nⲬⲉⲣⲉ Ⲥⲧⲉⲫⲁⲛⲟⲥ : ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲭⲉⲣⲉ ⲡⲓⲁⲣⲭⲓⲇⲓⲁⲕⲱⲛ : ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲭⲉⲣⲉ ⲡⲓϫⲱⲣⲓ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : Ⲭⲉⲣⲉ ⲡⲓⲁⲑⲗⲟⲫⲟⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ ⲉ̀ⲡⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛⲉⲙ Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ : ⲛⲉⲙ Ⲁⲃⲃⲁ Ⲙⲏⲛⲁ ⲛ̀ⲧⲉ ⲛⲓⲃⲁⲓⲁ̀ⲧ.",
                ar_de: "El salam laki ya Mariam, el hamama el hasana, allati waladat lana, Allah el Kalima.\n\nEl salam laki ya Mariam, salaman moqadasan. El salam laki ya Mariam, om el Qodos.\n\nEl salam le Mikhaïl, ra'is el mala'ika el 'azim. El salam le Ghabrial, el mobasher el mokhtar.\n\nEl salam lel Cherubim. El salam lel Seraphim. El salam le jami' el taghmat el sama'iya.\n\nEl salam le Youhanna, el sabeq el 'azim. El salam lel kahen, nasib Emmanuel.\n\nEl salam le sadati el aba' el rosol. El salam le talamiz rabina Yasou' el Masih.\n\nEl salam laka ayoha el shahid. El salam lel ingili. El salam lel rasoul, Anba Markos nazer el Ilah.\n\nEl salam le Estafanos, awal el shohada'. El salam lel shammas, el mobarak.\n\nEl salam laka ayoha el shahid. El salam lel shoga' el mogahed. El salam le labes el jehad: Sayedi el malek Georgios, wa Philopater Mercurius, wa Abba Mina ente ni faiat.",
                cop_de: "Shere ne Maria: ti-chrompi ethnesos: thi-etas-misi nan: em-Efnouti Pi-Logos.\n\nShere ne Maria: khen ou-shere ethowab: Shere ne Maria: ethmav em-fi-ethowab.\n\nShere Michael: pi-nishti en-archi-angelos: Shere Gabriel: pi-sotp en-fai-shenoufi.\n\nShere ni-Cherubim: Shere ni-Seraphim: Shere ni-taghma tirou: en-epouranion.\n\nShere Ioannes: pi-nishti em-prodromos: Shere pi-ouib: ep-singenis en-Emmanuel.\n\nShere na-chois en-ioti: en-apostolos: Shere ni-mathitis: ente Penchois Isos Pi-Khristos.\n\nShere nak o pi-martyros: Shere pi-evangelistis: Shere pi-apostolos: Abba Markos pi-theorimos.\n\nShere Stefanos: pi-shorp em-martyros: Shere pi-archidiakon: et-esmaroout.\n\nShere nak o pi-martyros: Shere pi-choij en-genneos: Shere pi-athloforos: pa-chois ep-ouro Georgios: nem Philopater Mercurius: nem Abba Mina ente ni faiat."
            },
            {
                id: 15,
                sectionTitle: {
                    de: "Abschluss der Zimbelstrophen",
                    ar: "ختام ارباع الناقوس"
                },
                speaker: "Volk",
                ar: "بِشَفَاعَاتِ وَالِدَةِ الإِلهِ، الْقِدِّيسَةِ مَرْيَمَ، يَا رَبُّ أَنْعِمْ لَنَا، بِمَغْفِرَةِ خَطَايَانَا.\n\nلِكَيْ نُسَبِّحَكَ، مَعَ أَبِيكَ الصَّالِحِ، وَالرُّوحِ الْقُدُسِ، لأَنَّكَ أَتَيْتَ (قُمْتَ) وَخَلَّصْتَنَا. ارحمنا.",
                de: "Durch die Fürsprachen der Mutter Gottes, der heiligen Maria, gewähre uns, o Herr, die Vergebung unserer Sünden.\n\nDamit wir dich preisen mit deinem guten Vater und dem Heiligen Geist, du bist gekommen (auferstanden) und hast uns erlöst, erbarme dich unser.",
                cop_ar: "هيتين ني بريسفيا: إنتي تي ثيؤطوكوس إثؤواف ماريا إبشويس أري إهموت نان: إم بي كو إيفول إنتي نين نوفي.\n\nإثرين هوس إيروك: نيم بيك يوت إن أغاثوس: نيم بي إبنيفما إثؤواف: جي أك إي (أك تونك) أك سوتي إممون ناي نان.",
                cop_cop: "Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ : ⲛ̀ⲧⲉ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ̀ Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.\n\nⲈⲑⲣⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ : ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ϫⲉ ⲁⲕⲓ̀ (ⲁⲕⲧⲱⲛⲕ) ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲛⲁⲓ ⲛⲁⲛ.",
                ar_de: "Be shafa'at walidat el ilah, el qadisa Mariam, ya rab an'em lana, be maghferat khatayana.\n\nLekay nosabihaka, ma'a abika el saleh, wal roh el qodos, le anaka atayta (qomta) wa khalastana. Erhamna.",
                cop_de: "Hiten ni-presvia: ente ti-theotokos ethowab Maria Epchois ari-ehmot nan: empi-ko evol ente nen-novi.\n\nEthren-hos erok: nem Pek-iot en-agathos: nem Pi-pnevma ethowab: je ak-i (ak-tonk) ak-soti emmon nai nan."
            },
            {
                id: 16,
                speaker: "Priester",
                ar: "صَلّ.",
                de: "Betet!",
                cop_ar: "شليل.",
                cop_cop: "Ϣ̀ⲗⲏⲗ.",
                ar_de: "Sall.",
                cop_de: "Shlel."
            },
            {
                id: 17,
                speaker: "Diakon",
                ar: "للصلاة قِفُوا.",
                de: "Erhebt euch zum Gebet!",
                cop_ar: "إيبي إبروسفكي إسطاثيتي.",
                cop_cop: "Ⲉⲡⲓ ̀ⲡⲣⲟⲥⲉⲩⲭⲏ ̀ⲥⲧⲁⲑⲏⲧⲉ.",
                ar_de: "Lel salat qefou.",
                cop_de: "Epi prosevki stathite."
            },
            {
                id: 18,
                speaker: "Priester",
                ar: "السَّلَامُ لِلْكُلِّ.",
                de: "Friede sei mit euch.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                ar_de: "El salam lel kol.",
                cop_de: "Irini pasi."
            },
            {
                id: 19,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كي طو إبنيفماتي صو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                ar_de: "Wa lirohika aydan.",
                cop_de: "Ke to pnevmati sou."
            },
            {
                id: 20,
                sectionTitle: {
                    de: "Das Gebet für die Entschlafenen (nur Samstags)",
                    ar: "اوشيه الراقدين (السبت فقط)"
                },
                speaker: "Priester",
                ar: "وَأَيْضاً فَلْنَسْأَلِ اللهَ ضَابِطَ الْكُلِّ، أَبَا رَبِّنَا وَإِلهِنَا وَمُخَلِّصِنَا يَسُوعَ الْمَسِيحِ، نَسْأَلُ وَنَطْلُبُ مِنْ صَلَاحِكَ يَا مُحِبَّ الْبَشَرِ، أُذْكُرْ يَا رَبُّ أَنْفُسَ عَبِيدِكَ الَّذِينَ رَقَدُوا، آبَائِنَا وَإِخْوَتِنَا.",
                de: "Wiederum lasst uns beten zu Gott, dem Allmächtigen, dem Vater unseres Herrn, Gottes und Erlösers Jesus Christus, wir bitten dich und erflehen deine Güte, Menschenliebender, gedenke, Herr, der Seelen deiner Diener, die entschlafen sind, unserer Väter und Brüder.",
                cop_ar: "بالين أون مارين تيهو إي إفنوتي بي بانتوكراتور: إفيوت إمبين شويس أووه بين نوتي أووه بين سوتير إيسوس بي إخرستوس. تين تيهو أووه تين توفه إنتيك ميت أغاثوس بي ماي رومي. أري إفميفئي إبشويس إن ني إبسيشي إنتي نيك إيفيايك إيطاف إنكوت نين يوتي نيم نين إسنيو.",
                cop_cop: "Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : Ⲫ̀ⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲓⲯⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ.",
                ar_de: "Wa aydan fal nas'al Allah dabet el kol, aba rabina wa ilahina wa mokhalisina Yasou3 el Masih. Nas'al wa natlob men salahika ya moheb el bashar, ozkor ya rab anfos 'abidaka allazina raqadou, abana wa ekhwatina.",
                cop_de: "Palin on maren tiho e-Efnouti Pi-pantokrator: Efiot em-Penchois ouoh Pennouti ouoh Pensotir Isos Pi-Khristos. Ten-tiho ouoh ten-tovh entek-met-agathos pi-mai-romi. Ari-phmevi Epchois en-ni-psishi ente nek-eviaik etav-enkot nen-ioti nem nen-sniou."
            },
            {
                id: 21,
                speaker: "Diakon",
                ar: "أُطْلُبُوا عَنْ آبَائِنَا وَإِخْوَتِنَا الَّذِينَ رَقَدُوا، وَتَنَيَّحُوا فِي الْإِيمَانِ بِالْمَسِيحِ مُنْذُ الْبَدْءِ. آبَائِنَا الْقِدِّيسِينَ رُؤَسَاءِ الْأَسَاقِفَةِ، وَآبَائِنَا الْأَسَاقِفَةِ، وَآبَائِنَا الْقَمَامِصَةِ، وَآبَائِنَا الْقُسُوسِ وَإِخْوَتِنَا الشَّمَامِسَةِ، وَآبَائِنَا الرُّهْبَانِ، وَآبَائِنَا الْعِلْمَانِيِّينَ، وَعَنْ نِيَاحِ كُلِّ الْمَسِيحِيِّينَ. لِكَيْ الْمَسِيحُ إِلَهُنَا يُنَيِّحَ نُفُوسَهُمْ أَجْمَعِينَ فِي فِرْدَوْسِ النَّعِيمِ، وَنَحْنُ أَيْضاً يَصْنَعُ مَعَنَا رَحْمَةً، وَيَغْفِرُ لَنَا خَطَايَانَا.",
                de: "Bittet für unsere Väter und Brüder, die entschlafen und aus dem Leben geschieden sind im Glauben an Christus seit dem Anfang. Unsere heiligen Väter, die Bischofoberhäupter, Bischöfe, Erzpriester, Priester, unsere Brüder, die Diakone. Unsere Mönchsväter und Laienväter und für alle Christen, damit Christus unser Gott, ihren Seelen im Paradies der Freude ewige Ruhe schenke. Uns möge er Erbarmen erweisen und unsere Sünden vergeben.",
                cop_ar: "توف إيجين نين يوتي نيم نين إسنيو إيطاف إنكوت: أف إمطون إمموؤو خين إفناهتي إم بي إخرستوس إيسجين بي إينيه. نين يوتي إثؤواف إن أرشي إبيسكوبوس كي نين يوتي إن إبيسكوبوس: نين يوتي إن إيغومينوس كي نين يوتي إم بريسفيتيروس: نيم نين إسنيو إن دياكون. نين يوتي إم موناخوس كي نين يوتي إن لايكوس: نيم إإهري إيجين تي أنابا فسيس تيرس إنتي ني إخرستيانوس: هينا إنتي بي إخرستوس بين نوتي تي إمطون إن نو بسيشي تيرو: خين بي باراديسوس إنتي إب أونوف: أنون دي هون إنتيف إير بي ناي نيمان: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ : ⲁⲩⲙ̀ⲧⲟⲛ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲫⲛⲁϩϯ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲓⲥϫⲉⲛ ⲡⲉⲛⲉϩ. Ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁⲣⲭⲏⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ : ⲛⲉⲛⲓⲟϯ ⲛ̀ⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲙ̀ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲛ̀ⲇⲓⲁⲕⲱⲛ. Ⲛⲉⲛⲓⲟϯ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲗⲁⲓⲕⲟⲥ : ⲛⲉⲙ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ϯⲁ̀ⲛⲁⲡⲁⲩⲥⲓⲥ ⲧⲏⲣⲥ ⲛ̀ⲧⲉ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ : ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡⲟⲩⲛⲟϥ : ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲛ̀ⲧⲉϥⲉⲣ ⲡⲓⲛⲁⲓ ⲛⲉⲙⲁⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobo 'an aba'ina wa ikhwatina allazina raqadou, wa tanayahu fi el iman bel Masih monzo el bad'. Aba'ina el qadisin ro'asa' el asaqifa, wa aba'ina el asaqifa, wa aba'ina el qamamisa, wa aba'ina el qosos wa ikhwatina el shamamisa, wa aba'ina el rohban, wa aba'ina el 'almaniyin, wa 'an niyah kol el masihiyin. Lekay el Masih ilahona yonayeh nofosohom ajma'in fi ferdaws el na'im, wa nahno aydan yasna' ma'ana rahma, wa yaghfer lana khatayana.",
                cop_de: "Tovh ejen nen-ioti nem nen-sniou etav-enkot: av-emton emmo-ou khen eph-nahti em-Pi-Khristos isjen peneh. Nen-ioti ethowab en-archi-episkopos ke nen-ioti en-episkopos: nen-ioti en-igoumenos ke nen-ioti em-presviteros: nem nen-sniou en-diakon. Nen-ioti em-monakhos ke nen-ioti en-laikos: nem e-hri ejen ti-anapavsis tirs ente ni-khristianos: hina ente Pi-Khristos Pennouti ti-emton en-nou-psishi tirou: khen pi-paradisos ente pounof: anon de hon entef-er pi-nai neman: entef-ka nen-novi nan evol."
            },
            {
                id: 22,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 23,
                speaker: "Priester",
                ar: "تَفَضَّلْ يَا رَبُّ نَيِّحْ نُفُوسَهُمْ جَمِيعاً، فِي حِضْنِ آبَائِنَا الْقِدِّيسِينَ إِبْرَاهِيمَ وَإِسْحَقَ وَيَعْقُوبَ. عُلْهُمْ فِي مَوْضِعِ خُضْرَةٍ، عَلَى مَاءِ الرَّاحَةِ فِي فِرْدَوْسِ النَّعِيمِ، الْمَوْضِعِ الَّذِي هَرَبَ مِنْهُ الْحُزْنُ وَالْكَآبَةُ وَالتَّنَهُدُ، فِي نُورِ قِدِّيسِيكَ. أَقِمْ أَجْسَادَهُمْ فِي الْيَوْمِ الَّذِي رَسَمْتَهُ، كَمَوَاعِيدِكَ الْحَقِيقِيَّةِ غَيْرِ الْكَاذِبَةِ. هَبْ لَهُمْ خَيْرَاتِ مَوَاعِيدِكَ، مَا لَمْ تَرَهُ عَيْنٌ وَلَمْ تَسْمَعْ بِهِ أُذُنٌ وَلَمْ يَخْطُرْ عَلَى قَلْبِ بَشَرٍ، مَا أَعْدَدْتَهُ يَا اللهُ لِمُحِبِّي اسْمِكَ الْقُدُّوسِ. لأَنَّهُ لاَ يَكُونُ مَوْتٌ لِعَبِيدِكَ، بَلْ هُوَ انْتِقَالٌ. وَإِنْ كَانَ لَحِقَهُمْ تَوَانٍ أَوْ تَفْرِيطٌ كَبَشَرٍ، وَقَدْ لَبِسُوا جَسَداً وَسَكَنُوا فِي هَذَا الْعَالَمِ، فَأَنْتَ كَصَالِحٍ وَمُحِبٍّ لِلْبَشَرِ، الَّلهُمَّ تَفَضَّلْ يَا رَبُّ عَبِيدَكَ الْمَسِيحِيِّينَ الأُرْثُوذُكْسِيِّينَ الَّذِينَ فِي الْمَسْكُونَةِ كُلِّهَا. مِنْ مَشَارِقِ الشَّمْسِ إِلَى مَغَارِبِهَا، وَمِنَ الشَّمَالِ إِلَى الْجَنُوبِ، كُلٌّ وَاحِدٍ بِاسْمِهِ وَكُلٌّ وَاحِدَةٍ بِاسْمِهَا، يَا رَبُّ نَيِّحْهُمْ وَاغْفِرْ لَهُمْ.",
                de: "Bitte, o Herr, schenke allen ihren Seelen Ruhe im Schoß unserer heiligen Väter Abraham, Isaak und Jakob. Versorge sie am Ort des Grünen, am Wasser der Ruhe, im Paradies der Freude, an dem Ort, von dem Trauer, Kummer und Seufzen gewichen sind im Licht deiner Heiligen. Erwecke ihre Körper auf an dem Tag, den du vorherbestimmt hast nach deinen wahren Verheißungen, die nicht trügerisch sind. Schenke ihnen die Güte deines Versprechens: Was kein Auge gesehen, kein Ohr gehört und kein Menschenherz gedacht hat, was du denen bereitet hast, die deinen heiligen Namen lieben. Denn es gibt keinen Tod für deine Diener, sondern Heimgang. Ist ihnen Nachlässigkeit oder Faulheit als Menschen widerfahren, die Fleisch angezogen und diese Welt bewohnt haben, so vergib ihnen bitte, Gott, gemäß deiner Güte und Menschenliebe. Herr, deinen Dienern, die orthodoxen Christen auf dem ganzen Erdkreis. Vom Osten zum Westen und vom Norden zum Süden, jeden mit seinem Namen und jede mit ihrem Namen: Lass sie, Herr, ruhen.",
                cop_ar: "أري كاتاكسين إبشويس ما إمطون إن نو بسيشي تيرو: خين كينف إن نين يوتي إثؤواف إفراآم نيم إيساآك نيم ياكوف. ما مون رو خين أو ما إن سيم: هيجين في مو إنتي تي إمطون: خين بي باراديسوس إنتي إب أونوف. بي ما إيطاف فوت إيفول إمماف: إنجي بي إمكاه نيم بي إهي نيم بي أتش هومي: خين إف أوؤيني إنتي ني إثؤواف إنتاك. إك تونوس إن نو سوما خين بي إيهوو إيطاك أولج: كاطا نيك إيبانجليا إممي: أووه إن أت ميت نوج. إك إر خاري زيست إيست نيؤو: إن ني أغاثون إنتي نيك إيبانجليا: ني إيتي إمبي فال ناف إيروؤو: أودي إمبي ماشج سوتمو: أودي إمبيف إي إي إهري إيجين إهيت إن رومي. ني إيتاك سيف توتو إفنوتي: إن ني إث مي إمبيك ران إثؤواف. جي إممون مو شوب إن نيك إيفيايك: أللا أو أو ؤتيب إيفول بي. إسجي دي أوؤن أو ميت أميليس: أو ميت أت سوتم شي إيروت: هي أومي خين ساركس فورين: أوساركس أووه أف شوبي خين باي كوسموس. إنثوك دي هوس أغاثوس أووه إم ماي رومي: إفنوتي أري كاتاكسين إبشويس إنتيك إيفيايك: إن إخريستيانوس: إن أورثودوكسوس إت خين تي إيكوميني تيرس. يسجين ني ما إن شاي إنتي إفري شا نيف ما إن هوتب: نيم يسجين تيم هيت شا فريس: بي أواي بي أواي كاطا بيف ران: نيم توي توي كاطا بيس ران: إبشويس ما إمطون نو أووه كو نو إيفول.",
                cop_cop: "Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ : ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ. Ⲙⲁⲙⲟⲛⲣⲱⲟⲩ ϧⲉⲛ ⲟⲩⲙⲁ ⲛ̀ⲥⲓⲙ : ϩⲓϫⲉⲛ ⲫⲙⲱⲟⲩ ⲛ̀ⲧⲉ ϯⲙ̀ⲧⲟⲛ : ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡⲟⲩⲛⲟϥ. Ⲡⲓⲙⲁ ⲉ̀ⲧⲁϥⲫⲱⲧ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲁⲩ : ⲛ̀ϫⲉ ⲡⲓⲙ̀ⲕⲁϩ ⲛⲉⲙ ⲡⲓⲓϩⲓ ⲛⲉⲙ ⲡⲓⲁϣϩⲟⲙⲓ : ϧⲉⲛ ⲫⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ. Ⲉⲕⲧⲟⲩⲛⲟⲥ ⲛ̀ⲛⲟⲩⲥⲱⲙⲁ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲁⲕⲑⲁϣϥ : ⲕⲁⲧⲁ ⲛⲉⲕⲉ̀ⲡⲁⲅⲅⲉⲗⲓⲁ̀ ⲙ̀ⲙⲏⲓ : ⲟⲩⲟϩ ⲛ̀ⲁⲧⲙⲉⲑⲛⲟⲩϫ. Ⲉⲕⲉⲣⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲛⲱⲟⲩ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲡⲁⲅⲅⲉⲗⲓⲁ̀ : ⲛⲏⲉⲧⲉ ⲙ̀ⲡⲉ ⲃⲁⲗ ⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲇⲉ ⲙ̀ⲡⲉ ⲙⲁϣϫ ⲥⲟⲑⲙⲟⲩ : ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ϩⲏⲧ ⲛ̀ⲣⲱⲙⲓ. Ⲛⲏⲉⲧⲁⲕⲥⲉⲃⲧⲱⲧⲟⲩ Ⲫⲛⲟⲩϯ : ⲛ̀ⲛⲏⲉⲑⲙⲉⲓ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲙ̀ⲙⲟⲛ ⲙⲟⲩ ϣⲟⲡ ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ : ⲁⲗⲗⲁ ⲟⲩⲟⲩⲱⲧⲉⲃ ⲉ̀ⲃⲟⲗ ⲡⲉ. Ⲓⲥϫⲉ ⲇⲉ ⲟⲩⲟⲛ ⲟⲩⲙⲉⲧⲁⲙⲉⲗⲏⲥ : ⲓⲉ ⲟⲩⲙⲉⲧⲁⲧⲥⲱⲧⲉⲙ ϣⲓ ⲉ̀ⲣⲱⲟⲩ : ϩⲱⲥ ⲉⲩⲫⲟⲣⲓⲛ ⲛ̀ⲥⲁⲣⲝ : ⲟⲩⲟϩ ⲁⲩϣⲱⲡⲓ ϧⲉⲛ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ. Ⲛ̀ⲑⲟⲕ ⲇⲉ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ : Ⲫⲛⲟⲩϯ ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ : ⲛ̀ⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ. Ⲓⲥϫⲉⲛ ⲛⲓⲙⲁⲛ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲫⲣⲏ ϣⲁ ⲛⲉϥⲙⲁⲛ̀ϩⲱⲧⲡ : ⲛⲉⲙ ⲓⲥϫⲉⲛ ⲡⲉⲙϩⲓⲧ ϣⲁ ⲫⲣⲏⲥ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ⲛⲉⲙ ϯⲟⲩⲓ̀ ϯⲟⲩⲓ̀ ⲕⲁⲧⲁ ⲡⲉⲥⲣⲁⲛ : Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ ⲟⲩⲟϩ ⲭⲱ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Tafadal ya rab nayeh nofosohom jami'an, fi hodn aba'ina el qadisin Ibrahim wa Ishaq wa Ya'qub. 'Olhom fi mawde' khodra, 'ala ma' el raha fi ferdaws el na'im, el mawde' allazi harab menho el hozn wal ka'aba wal tanahod, fi nour qadisik. Aqem ajsadahom fi el yawm allazi rasamtaho, kama wa'idika el haqiqiya ghayr el kaziba. Hab lahom khayrat mawa'idik... Le annaho la yakoun mawt le 'abidika... Men mashariq el shams ila magharibiha...",
                cop_de: "Ari-kataxiin Epchois ma-emton en-nou-psishi tirou: khen kenf en-nen-ioti ethowab Abraam nem Isaak nem Iakob. Ma-mon-rou khen ou-ma en-sim: hijen fi-mou ente ti-emton: khen pi-paradisos ente pounof. Pi-ma etaf-fot evol em-mav: enje pi-emkah nem pi-ihi nem pi-ag-homi... (und so weiter) ... Epchois ma-emton no-ou ouoh ko no-ou evol."
            },
            {
                id: 24,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 25,
                sectionTitle: {
                    de: "Das Gebet für die Kranken",
                    ar: "اوشيه المرضي"
                },
                speaker: "Priester",
                ar: "وَأَيْضاً فَلْنَسْأَلِ اللهَ ضَابِطَ الْكُلِّ، أَبَا رَبِّنَا وَإِلهِنَا وَمُخَلِّصِنَا يَسُوعَ الْمَسِيحِ، نَسْأَلُ وَنَطْلُبُ مِنْ صَلَاحِكَ يَا مُحِبَّ الْبَشَرِ، أُذْكُرْ يَا رَبُّ مَرْضَى شَعْبِكَ.",
                de: "Wiederum lasst uns beten zu Gott, dem Allmächtigen, dem Vater unseres Herrn, Gottes und Erlösers Jesus Christus, wir bitten dich und erflehen deine Güte, Menschenliebender, gedenke, Herr, der Kranken unter deinem Volk.",
                cop_ar: "بالين أون مارين تيهو إي إفنوتي بي بانتوكراتور: إفيوت إمبين شويس أووه بين نوتي أووه بين سوتير إيسوس بي إخرستوس. تين تيهو أووه تين توفه إنتيك ميت أغاثوس بي ماي رومي: أري إفميفئي إبشويس إن ني إت شوني إنتي بيك لاؤس.",
                cop_cop: "Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀Ⲫ̀ⲛⲟⲩϯ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : Ⲫ̀ⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ : ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ.",
                ar_de: "Wa aydan fal nas'al Allah dabet el kol, aba rabina wa ilahina wa mokhalisina Yasou3 el Masih. Nas'al wa natlob men salahika ya moheb el bashar, ozkor ya rab marda sha'bika.",
                cop_de: "Palin on maren tiho e-Efnouti Pi-pantokrator: Efiot em-Penchois ouoh Pennouti ouoh Pensotir Isos Pi-Khristos. Ten-tiho ouoh ten-tovh entek-met-agathos pi-mai-romi: ari-phmevi Epchois en-ni-et-shoni ente pek-laos."
            },
            {
                id: 26,
                speaker: "Diakon",
                ar: "أُطْلُبُوا عَنْ آبَائِنَا وَإِخْوَتِنَا الْمَرْضَى بِكُلِّ مَرَضٍ، إِنْ كَانَ فِي هَذَا الْمَسْكَنِ أَوْ بِكُلِّ مَوْضِعٍ، لِكَيْ الْمَسِيحُ إِلَهُنَا يُنْعِمَ لَنَا وَلَهُمْ بِالْعَافِيَةِ وَالشِّفَاءِ، وَيَغْفِرَ لَنَا خَطَايَانَا.",
                de: "Bittet für unsere Väter und Brüder, die an irgendeiner Krankheit leiden, ob an diesem oder an einem anderen Ort, dass Christus unser Gott uns und ihnen Gesundheit und Heilung schenkt und uns unsere Sünden vergibt.",
                cop_ar: "توف إيجين نين يوتي نيم نين إسنيو إت شوني خين جين شوني نيفين: إيتي خين باي توبوس إيتي خين ماي نيفين: هينا إنتي بي إخرستوس بين نوتي إر إهموت نان نيموؤو إم بي أوجاي نيم بي طال-تشو: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉⲧϣⲱⲛⲓ ϧⲉⲛ ϫⲓⲛϣⲱⲛⲓ ⲛⲓⲃⲉⲛ : ⲓ̀ⲧⲉ ϧⲉⲛ ⲡⲁⲓⲧⲟⲡⲟⲥ ⲓ̀ⲧⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛⲉⲙⲱⲟⲩ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ ⲛⲉⲙ ⲡⲓⲧⲁⲗϭⲟ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobo 'an aba'ina wa ikhwatina el marda be kol marad, en kana fi haza el maskan aw be kol mawde', lekay el Masih ilahona yon'em lana wa lahom bel 'afia wal shifa', wa yaghfer lana khatayana.",
                cop_de: "Tovh ejen nen-ioti nem nen-sniou et-shoni khen jin-shoni niven: ite khen pai-topos ite khen mai niven: hina ente Pi-Khristos Pennouti er-ehmot nan nem-o-ou empi-oujai nem pi-talcho: entef-ka nen-novi nan evol."
            },
            {
                id: 27,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 28,
                speaker: "Priester",
                ar: "تَعَهَّدْهُمْ بِالْمَرَاحِمِ وَالرَّأْفَاتِ، اشْفِهِمْ. اِنْزِعْ عَنْهُمْ وَعَنَّا كُلَّ مَرَضٍ، وَكُلَّ سَقَمٍ، وَرُوحَ الْأَمْرَاضِ اِطْرُدْهُ. وَالَّذِينَ أَبْطَأُوا مَطْرُوحِينَ فِي الْأَمْرَاضِ أَقِمْهُمْ وَعَزِّهِمْ. وَالْمُعَذَّبِينَ مِنَ الْأَرْوَاحِ النَّجِسَةِ أَعْتِقْهُمْ جَمِيعاً. الَّذِينَ فِي السُّجُونِ أَوِ الْمَطَابِقِ أَوِ الَّذِينَ فِي النَّفْيِ أَوِ السَّبْيِ أَوِ الْمَقْبُوضِ عَلَيْهِمْ فِي عُبُودِيَّةٍ مُرَّةٍ، يَا رَبُّ أَعْتِقْهُمْ جَمِيعاً وَارْحَمْهُمْ. لِأَنَّكَ أَنْتَ الَّذِي تَحُلُّ الْمَرْبُوطِينَ وَتُقِيمُ السَّاقِطِينَ. رَجَاءُ مَنْ لَيْسَ لَهُ رَجَاءٌ، وَمُعِينَ مَنْ لَيْسَ لَهُ مُعِينٌ. عَزَاءُ صَغِيرِي الْقُلُوبِ، مِينَاءُ الَّذِينَ فِي الْعَاصِفِ. كُلُّ الْأَنْفُسِ الْمُتَضَايِقَةِ وَالْمَقْبُوضِ عَلَيْهَا، أَعْطِهَا يَا رَبُّ رَحْمَةً، أَعْطِهَا نِيَاحاً، أَعْطِهَا بُرُودَةً، أَعْطِهَا نِعْمَةً، أَعْطِهَا مَعُونَةً، أَعْطِهَا خَلَاصاً، أَعْطِهَا غُفْرَانَ خَطَايَاهَا وَآثَامِهَا. وَنَحْنُ أَيْضاً يَا رَبُّ، أَمْرَاضَ نُفُوسِنَا، اشْفِهَا وَالَّتِي لِأَجْسَادِنَا عَافِهَا. أَيُّهَا الطَّبِيبُ الْحَقِيقِيُّ الَّذِي لِأَنْفُسِنَا، وَأَجْسَادِنَا، يَا مُدَبِّرَ كُلِّ جَسَدٍ تَعَهَّدْنَا بِخَلَاصِكَ.",
                de: "Pflege sie mit Erbarmen und Barmherzigkeit, heile sie. Entferne von ihnen und uns jede Krankheit, jedes Leiden und vertreibe aus ihnen den Hauch von Krankheiten. Richte die auf und tröste, die lange durch ihre Krankheiten behindert sind, und befreie die, die von unreinen Geistern gequält werden. Befreie und hab Erbarmen, Herr, mit denen, die in Gefängnissen, Gefangenschaften, Verbannung, Kriegsgefangenschaft oder in bitterer Sklaverei gefesselt sind. Denn du löst die Gebundenen und erhebst die Gefallenen. Du Hoffnung derer, die keine Hoffnung haben, Helfer derer, die keine Hilfe haben. Tröster derer, die kleinmütig sind und Hafen derer, die von Stürmen heimgesucht werden. Den Seelen aller, die bedrängt oder unterdrückt sind, Herr, gib ihnen Erbarmen, gib ihnen Ruhe, gib ihnen Erfrischung, gib ihnen Gnade, gib ihnen Unterstützung, gib ihnen Erlösung, gib ihnen die Vergebung der Sünden und Schuld. Heile auch uns, o Herr, die Krankheiten unserer Seelen und unserer Körper. Du wahrer Arzt unserer Seelen und Leiber, du Versorger unserer Körper, heile uns mit deiner Gnade.",
                cop_ar: "سيمبيسكوبين إيجوؤو خين هان ناي نيم هان ميت شينهيت. أري باهري إيروؤو. أليتو إيفول هاروؤو نيم هارون إم شوني نيفين نيم إي هي نيفين. نيم بي إبنيفما إنتي ني شوني هيت ف إيفول هاروؤو. ني إيطاف إيرراشي إف كي إيتوتو خين ني شوني تونو سو ما نومتي نوؤو. ني إت هوج هيج إيفول هيتين ني إبنيفما إن أكاثرتون ماتو إيفول تيرو. ني إت كي خين ني شتيكو: يي ني ما إن شوني: يي ني إت كي خين بي إكسوريا: يي بي إيخمالوسيا: يي ني إت آموني إمموؤو خين أو ميت فوك إسطيف جي: ما تو إيفول تيرو إبشويس أووه ناي نوؤو. جي إنثوك بي إت فول إيفول إن ني إت سونح أووه إت تونوس إن ني إيطاف هي. تي هيلبيس إنتي ني إت أوؤنتو هيلبيس إمماف: تي فو إيثيا إنتي ني إت أوؤنتو فو إيثيا إمماف. بي نومتي إنتي ني كو جي إينهيت: بي ليمين إنتي ني إت كي خين بي خيمون. بسيشي نيفين إت هيمخيو أووه إت أوؤاهيم إيجوؤو. موي نوؤو إبشويس إن أو ناي: موي نوؤو إن أو إمطون: موي نوؤو إن أو إرشيشي: موي نوؤو إن أو أهموت: موي نوؤو إن أو فو إيثيا: موي نوؤو إن أو أوجاي: موي نوؤو إن أو كو إيفول إنتي نو نوفي نيم نو بارابتوماتي. أنون دي هون إبشويس ني شوني إنتي نين بسيشي أري باهري إيروؤو: أووه ني إنتي نين سوما ما طالتشوؤو. بي سين يني إن أليثينوس إنتي نين بسيشي نيم نين سوما. بي إبيس كوبوس إنتي ساركس نيفين سيمبيس كوبين إيرون خين بيك أوجاي.",
                cop_cop: "Ⲥⲉⲙⲡⲓⲥⲕⲟⲡⲓⲛ ⲉ̀ϫⲱⲟⲩ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ. Ⲁⲣⲓⲡⲁϧⲣⲓ ⲉ̀ⲣⲱⲟⲩ. Ⲁⲗⲓⲧⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲱⲟⲩ ⲛⲉⲙ ϩⲁⲣⲟⲛ ⲙ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲓ̀ϩⲓ ⲛⲓⲃⲉⲛ. Ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ⲛⲓϣⲱⲛⲓ ϩⲓⲧϥ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲱⲟⲩ. Ⲛⲏⲉⲧⲁⲩⲉⲣⲣⲁϣⲓ ⲉⲩⲕⲏ ⲉ̀ⲧⲟⲧⲟⲩ ϧⲉⲛ ⲛⲓϣⲱⲛⲓ ⲧⲟⲩⲛⲟⲥⲟⲩ ⲙⲁⲛⲟⲙϯ ⲛⲱⲟⲩ. Ⲛⲏⲉⲧϩⲟϫϩⲉϫ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲁ̀ⲕⲁⲑⲁⲣⲧⲟⲛ ⲙⲁⲧⲟⲩ ⲉ̀ⲃⲟⲗ ⲧⲏⲣⲟⲩ. Ⲛⲏⲉⲧⲭⲏ ϧⲉⲛ ⲛⲓϣⲧⲉⲕⲟ : ⲓⲉ ⲛⲓⲙⲁⲛ̀ϣⲱⲛⲓ : ⲓⲉ ⲛⲏⲉⲧⲭⲏ ϧⲉⲛ ⲡⲓⲉⲝⲟⲣⲓⲁ̀ : ⲓⲉ ⲡⲓⲉⲭⲙⲁⲗⲱⲥⲓⲁ̀ : ⲓⲉ ⲛⲏⲉⲧⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲃⲱⲕ ⲉⲥⲧⲉⲃϫⲏⲟⲩⲧ : ⲙⲁⲧⲟⲩ ⲉ̀ⲃⲟⲗ ⲧⲏⲣⲟⲩ Ⲡ̀ϭⲟⲓⲥ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲱⲟⲩ. Ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉⲧⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉⲧⲥⲟⲛϩ ⲟⲩⲟϩ ⲉⲧⲧⲟⲩⲛⲟⲥ ⲛ̀ⲛⲏⲉⲧⲁⲩϩⲉⲓ. Ϯϩⲉⲗⲡⲓⲥ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲉ ⲙ̀ⲙⲟⲛⲧⲟⲩ ϩⲉⲗⲡⲓⲥ ⲙ̀ⲙⲁⲩ : ϯⲃⲟⲏ̀ⲑⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲉ ⲙ̀ⲙⲟⲛⲧⲟⲩ ⲃⲟⲏ̀ⲑⲓⲁ̀ ⲙ̀ⲙⲁⲩ. Ⲡⲓⲛⲟⲙϯ ⲛ̀ⲧⲉ ⲛⲓⲕⲟⲩϫⲓⲛ̀ϩⲏⲧ : ⲡⲓⲗⲓⲙⲏⲛ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲭⲏ ϧⲉⲛ ⲡⲓⲭⲓⲙⲱⲛ. Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲧϩⲉⲙϧⲓⲟⲩ ⲟⲩⲟϩ ⲉⲧⲟⲩⲁϩⲉⲙ ⲉ̀ϫⲱⲟⲩ. Ⲙⲟⲓ ⲛⲱⲟⲩ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲟⲩⲛⲁⲓ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲙ̀ⲧⲟⲛ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲉⲣϣⲓϣⲓ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩϩ̀ⲙⲟⲧ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲃⲟⲏ̀ⲑⲓⲁ̀ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲟⲩϫⲁⲓ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲟⲩⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲟⲩⲛⲟⲃⲓ ⲛⲉⲙ ⲛⲟⲩⲡⲁⲣⲁⲡⲧⲱⲙⲁ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡ̀ϭⲟⲓⲥ ⲛⲓϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲁ̀ⲣⲓⲡⲁϧⲣⲓ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲟϩ ⲛⲏ ⲛ̀ⲧⲉ ⲛⲉⲛⲥⲱⲙⲁ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ⲡⲓⲥⲏⲓⲛⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ. Ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲧⲉ ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ ⲥⲉⲙⲡⲓⲥⲕⲟⲡⲓⲛ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ.",
                ar_de: "Ta'ahad-hom bel-marahem wal-ra'fat, eshfe-hom. Enza' 'anhom wa 'anna kol marad, wa kol saqm, wa rouh el-amrad etrod-ho. Wal-lazina abta'ou matrouhin fi el-amrad aqem-hom wa 'az-ehom. Wal-mo'azabin men el-arwah el-najesa a'teq-hom jami'an. Allazina fi el-sojoun aw el-matabeq aw allazina fi el-nafy aw el-saby aw el-maqboud 'alayhim fi 'oboudiya morra, ya rab a'teq-hom jami'an warham-hom. Le-annaka anta allazi tahol el-marboutin wa toqim el-saqetin. Raga' man laysa laho raga', wa mo'in man laysa laho mo'in. 'Aza' seghari el-qoloub, mina' allazina fi el-'asef. Kol el-anfos el-motadayeqa wal-maqboud 'alayha, a'teha ya rab rahma, a'teha niyahan, a'teha borouda, a'teha ni'ma, a'teha ma'ouna, a'teha khalasan, a'teha ghofran khatayaha wa asamaha. Wa nahno aydan ya rab, amrad nofousina, eshfeha wallati le-ajsadina 'afeha. Ayoha el-tabib el-haqiqi allazi le-anfosina, wa ajsadina, ya modaber kol jasad ta'ahadna be-khalasik.",
                cop_de: "Sempiskopin ego-ou khen han-nai nem han-met-shenhit. Ari-pahri ero-ou. Alitou evol haro-ou nem haron em-shoni niven nem ihi niven. Nem pi-pnevma ente ni-shoni hitf evol haro-ou. Ni-etav-er-rashi ev-ki etotou khen ni-shoni tounos-ou ma-nomti no-ou. Ni-et-hog-heg evol-hiten ni-pnevma en-akatharton matou evol tirou. Ni-et-ki khen ni-shteko: ie ni-ma-en-shoni: ie ni-et-ki khen pi-exoria: ie pi-ekhmalosia: ie ni-et-amoni emmo-ou khen ou-met-vok estev-jiout: matou evol tirou Epchois ouoh nai no-ou. Je enthok pet-vol evol en-ni-et-sonh ouoh et-tounos en-ni-etav-hei. Ti-helpis ente ni-ete emmontou helpis emmav: ti-voithia ente ni-ete emmontou voithia emmav. Pi-nomti ente ni-kouji-en-hit: pi-limin ente ni-et-ki khen pi-khimon. Psishi niven et-hem-khiou ouoh et-ouahem ego-ou. Moi no-ou Epchois en-ou-nai: moi no-ou en-ou-emton: moi no-ou en-ou-ershishi: moi no-ou en-ou-ehmot: moi no-ou en-ou-voithia: moi no-ou en-ou-oujai: moi no-ou en-ou-ko evol ente nou-novi nem nou-paraptoma. Anon de hon Epchois ni-shoni ente nen-psishi ari-pahri ero-ou: ouoh ni ente nen-soma ma-talcho-ou. Pi-sini en-alithinos ente nen-psishi nem nen-soma. Pi-episkopos ente sarx niven sempiskopin eron khen pek-oujai."
            },
            {
                id: 29,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 30,
                sectionTitle: {
                    de: "Das Gebet für die Reisenden",
                    ar: "اوشيه المسافرين"
                },
                speaker: "Priester",
                ar: "نَسْأَلُ وَنَطْلُبُ مِنْ صَلَاحِكَ يَا مُحِبَّ الْبَشَرِ، أُذْكُرْ يَا رَبُّ آبَاءَنَا وَإِخْوَتَنَا الْمُسَافِرِينَ.",
                de: "Wir bitten dich und erflehen deine Güte, Menschenliebender, gedenke, o Herr, unserer Väter und Brüder, die auf Reisen sind.",
                cop_ar: "تين تيهو أووه تين توفه إنتيك ميت أغاثوس بي ماي رومي. أري إفميفئي إبشويس إن نين يوتي نيم نين إسنيو إيطاف شي إبشمو.",
                cop_cop: "Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡϣⲉⲙⲙⲟ.",
                ar_de: "Nas'al wa natlob men salahika ya moheb el bashar, ozkor ya rab aba'ana wa ikhwatana el mosafirin.",
                cop_de: "Ten-tiho ouoh ten-tovh entek-met-agathos pi-mai-romi. Ari-phmevi Epchois en-nen-ioti nem nen-sniou etav-she ep-shemmo."
            },
            {
                id: 31,
                speaker: "Diakon",
                ar: "أُطْلُبُوا عَنْ آبَائِنَا وَإِخْوَتِنَا الْمُسَافِرِينَ، وَالَّذِينَ يُضْمِرُونَ السَّفَرَ فِي كُلِّ مَوْضِعٍ، سَهِّلْ طُرُقَهُمْ أَجْمَعِينَ، إِنْ كَانَ فِي الْبَحْرِ أَوِ الْأَنْهَارِ أَوِ الْبُحَيْرَاتِ [أَوْ الطُّرُقِ الْمَسْلُوكَةِ،] [أَوْ الْجَوِّ]، أَوْ الْمُسَافِرِينَ بِكُلِّ نَوْعٍ، لِكَيْ الْمَسِيحُ إِلَهُنَا يَرُدَّهُمْ إِلَى مَسَاكِنِهِمْ سَالِمِينَ، وَيَغْفِرَ لَنَا خَطَايَانَا.",
                de: "Bittet für unsere Väter und Brüder, die auf Reisen sind und für die, die eine Reise in allerlei Orte vorhaben, dass Gott ihnen allen ihre Wege ebne, sei es auf dem Meer, auf den Flüssen, auf den Seen, auf den Reisewegen (und in der Luft), dass Christus, unser Gott diejenigen, die ihre Reise auf jegliche Art verrichten, friedlich heimführt und uns unsere Sünden vergibt.",
                cop_ar: "توف إيجين نين يوتي نيم نين إسنيو إيطاف شي إبشمو: يي ني إث أوؤيتي إيشي خين ماي نيفين: سوتون نو مويت تيرو: إيتي إيفول هيتين فيوم: يي ني يارو يي ني ليمني يي ني مويت إم موشي (يي بي أ إير): يي إت إيري إمبو جين موشي إن ريتي نيفين: هينا إنتي بي إخرستوس بين نوتي طاس ثوؤو إن هيت إي نو ما إن شويبي خين أو إيريني: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡϣⲉⲙⲙⲟ : ⲓⲉ ⲛⲏⲉⲑⲟⲩⲏϯ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲥⲟⲩⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ : ⲓ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ : ⲓⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲓⲉ ⲛⲓⲗⲓⲙⲛⲏ ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲙ̀ⲙⲟϣⲓ (ⲓⲉ ⲡⲓⲁ̀ⲏⲣ) : ⲓⲉ ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲧⲁⲥⲑⲟⲟⲩ ⲉ̀ⲛ̀ϩⲏⲧ ⲉ̀ⲛⲟⲩⲙⲁⲛ̀ϣⲱⲡⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobo 'an aba'ina wa ikhwatina el mosafirin, wallazina yodmeroun el safar fi kol mawde', sahel toroqa-hom ajma'in, en kana fi el bahr aw el anhar aw el bohayrat [aw el toro q el maslouka,] [aw el jaw], aw el mosafirin be kol naw', lekay el Masih ilahona yarodahom ila masakenehem salemin, wa yaghfer lana khatayana.",
                cop_de: "Tovh ejen nen-ioti nem nen-sniou etav-she ep-shemmo: ie ni-eth-oueti e-she khen mai niven: souton nou-moit tirou: ite evol hiten fiom: ie ni-iarou ie ni-limni ie ni-moit em-moshi (ie pi-a-ir): ie et-iri em-pou-jin-moshi en-riti niven: hina ente Pi-Khristos Pennouti tastho-ou en-hyt e-nou-ma-en-shopi khen ou-hirini: entef-ka nen-novi nan evol."
            },
            {
                id: 32,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 34,
                speaker: "Priester",
                ar: "وَالَّذِينَ يُضْمِرُونَ السَّفَرَ فِي كُلِّ مَكَانٍ، سَهِّلْ طُرُقَهُمْ أَجْمَعِينَ، إِنْ كَانَ فِي الْبَحْرِ، أَوِ الْأَنْهَارِ، أَوِ الْبُحَيْرَاتِ، أَوِ الطُّرُقِ الْمَسْلُوكَةِ [أَوْ الْجَوِّ]، أَوِ السَّالِكِينَ بِكُلِّ نَوْعٍ، كُلَّ أَحَدٍ بِكُلِّ مَوْضِعٍ، رُدَّهُمْ إِلَى مِينَاءٍ هَادِئٍ، مِينَاءِ الْخَلَاصِ. تَفَضَّلْ اصْحَبْهُمْ فِي الْإِقْلَاعِ، وَاصْحَبْهُمْ فِي الْمَسِيرِ. رُدَّهُمْ إِلَى ذَوِيهِمْ بِالْفَرَحِ فَرِحِينَ، وَبِالْعَافِيَةِ مُعَافِينَ. اشْتَرِكْ فِي الْعَمَلِ مَعَ عَبِيدِكَ فِي كُلِّ عَمَلٍ صَالِحٍ. وَنَحْنُ أَيْضاً يَا رَبُّ غُرْبَتَنَا فِي هَذَا الْعُمْرِ، احْفَظْهَا بِغَيْرِ مَضَرَّةٍ وَلَا عَاصِفٍ وَلَا قَلَقٍ إِلَى الْاِنْقِضَاءِ.",
                de: "Und aller, die eine Reise irgendwohin vorhaben. Ebne ihnen allen ihre Wege, sei es auf Meeren, Flüssen, Seen, Landwegen, (in der Luft) oder auf anderen Reisewegen, jedem zu jedem Ort. Bringe sie zurück in einen ruhigen Hafen, zum Hafen des Heils. Bitte, sei ihnen ein Segelgefährte und Wegbegleiter. Und geleite sie nach Hause zurück zu den Ihren, von Freude erfüllt und mit Gesundheit gestärkt. Nimm Anteil an der Arbeit deiner Diener in jedem guten Werk. Was uns selbst betrifft, o Herr, bewahre unser Fremdsein in dieser Lebenszeit ohne Schaden, ohne Stürme und Sorgen bis ans Ende.",
                cop_ar: "كي ني إث ميفئي إيشي خين ماي نيفين: سوتون نو مويت تيرو: إيتي إيفول هيتين فيوم: يي ني يارو يي ني ليمني: يي ني مويت إم موشي (يي بي أ إير): يي إت إيري إمبو جين موشي إن ريتي نيفين: إت في ما نيفين: ما طاس ثوؤو إي أو ليمين إن أت خينيم: بي ليمين إنتي بي أوجاي. أري كاتاكسين أري إشفير إي أو إير نيموؤو: أري إشفير إم موشي نيموؤو. ما طاس ثوؤو إي ني إتي نوؤو: خين أو راشي إف راشي: خين أو أوجاي إف أوؤج أووت. أري إشفير إير هوب نيم نيك إيفيايك: خين هوب نيفين إن أغاثون. أنون دي هون إبشويس تين ميت ريم إن كيلي إت خين باي فيوس فاي: أري إه إيروس إن أت ثليفي إن أت خيمون إن أت تشوب تور شا إيفول.",
                cop_cop: "Ⲕⲉ ⲛⲏⲉⲑⲙⲉⲩⲓ̀ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲥⲟⲩⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ : ⲓ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ : ⲓⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲓⲉ ⲛⲓⲗⲓⲙⲛⲏ : ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲙ̀ⲙⲟϣⲓ (ⲓⲉ ⲡⲓⲁ̀ⲏⲣ) : ⲓⲉ ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ : ⲉⲧⲃⲉ ⲙⲁ ⲛⲓⲃⲉⲛ : ⲙⲁⲧⲁⲥⲑⲟⲟⲩ ⲉ̀ⲟⲩⲗⲓⲙⲏⲛ ⲛ̀ⲁⲧⲭⲓⲛⲓⲙ : ⲡⲓⲗⲓⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ. Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲛ ⲁ̀ⲣⲓϣⲫⲏⲣ ⲉ̀ⲟⲩⲱⲓⲣ ⲛⲉⲙⲱⲟⲩ : ⲁ̀ⲣⲓϣⲫⲏⲣ ⲙ̀ⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ. Ⲙⲁⲧⲁⲥⲑⲟⲟⲩ ⲉ̀ⲛⲏⲉⲧⲉ ⲛⲟⲩⲟⲩ : ϧⲉⲛ ⲟⲩⲣⲁϣⲓ ⲉⲩⲣⲁϣⲓ : ϧⲉⲛ ⲟⲩⲟⲩϫⲁⲓ ⲉⲩⲟⲩⲟϫⲁⲟⲩⲧ. Ⲁⲣⲓϣⲫⲏⲣ ⲉ̀ⲣϩⲱⲃ ⲛⲉⲙ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ : ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡ̀ϭⲟⲓⲥ ⲧⲉⲛⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲟⲓⲗⲓ ⲉⲧϧⲉⲛ ⲡⲁⲓⲃⲓⲟⲥ ⲫⲁⲓ : ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲥ ⲛ̀ⲁⲧⲑⲗⲓⲯⲓ ⲛ̀ⲁⲧⲭⲓⲙⲱⲛ ⲛ̀ⲁⲧϣⲑⲟⲣⲧⲉⲣ ϣⲁ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Wal lazina yodmeroun el safar fi kol makan, sahel toroqa-hom ajma'in, en kana fi el bahr, aw el anhar, aw el bohayrat, aw el toroqa el maslouka [aw el jaw], aw el salekin be kol naw', kol ahad be kol mawde', rodahom ila mina' hade', mina' el khalas. Tafadal eshab-hom fi el eqla', washab-hom fi el masir. Rodahom ila zawihim bel farah farehin, wa bel 'afia mo'afin. Eshterek fi el 'amal ma'a 'abidaka fi kol 'amal saleh. Wa nahno aydan ya rab ghorbatana fi haza el 'omr, ehfazha be ghayr madarra wa la 'asef wa la qalaq ila el enqida'.",
                cop_de: "Ke ni-eth-mevi e-she khen mai niven: souton nou-moit tirou: ite evol hiten fiom: ie ni-iarou ie ni-limni: ie ni-moit em-moshi (ie pi-a-ir): ie et-iri em-pou-jin-moshi en-riti niven: et-ve ma niven: ma-tastho-ou e-ou-limin en-at-khinim: pi-limin ente pi-oujai. Ari-kataxiin ari-shfir-e-oou-eir nem-ou: ari-shfir em-moshi nem-ou. Ma-tastho-ou e-ni-ete nou-ou: khen ou-rashi ev-rashi: khen ou-oujai ev-ouoj-aout. Ari-shfir er-hob nem nek-eviaik: khen hob niven en-agathon. Anon de hon Epchois ten-met-rem-en-koili et-khen pai-vios fai: areh eros en-at-thlivi en-at-khimon en-at-tshop tor sha evol."
            },
            {
                id: 35,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 36,
                sectionTitle: {
                    de: "Das Gebet für die Opfergaben",
                    ar: "اوشيه القرابين"
                },
                speaker: "Priester",
                ar: "نَسْأَلُ وَنَطْلُبُ مِنْ صَلَاحِكَ يَا مُحِبَّ الْبَشَرِ، أُذْكُرْ يَا رَبُّ صَعَائِدَ وَقَرَابِينَ وَتَشَكُّرَاتِ الَّذِينَ قَرَّبُوا. كَرَامَةً وَمَجْداً لِاسْمِكَ الْقُدُّوسِ.",
                de: "Wir bitten dich und erflehen deine Güte, Menschenliebender, gedenke, o Herr, der Opfer, der Darbringungen und der Danksagungen all derer, die geopfert haben. Zum Ruhme und zur Ehre deines heiligen Namens.",
                cop_ar: "تين تيهو أووه تين توفه إنتيك ميت أغاثوس بي ماي رومي. أري إفميفئي إبشويس إن ني ثيسيا ني إبروسفورا ني شيب إهموت إنتي ني إيطاف إير إبروسفيرين. إف طايو نيم أو أو أو إم بيك ران إثؤواف.",
                cop_cop: "Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲓⲑⲩⲥⲓⲁ̀ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ ⲛⲓϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲥⲫⲉⲣⲓⲛ. Ⲉⲩⲧⲁⲓⲟ̀ ⲛⲉⲙ ⲟⲩⲱ̀ⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "Nas'al wa natlob men salahika ya moheb el bashar, ozkor ya rab sa'a'ed wa qarabin wa tashakorat allazina qarabou. Karama wa majdan le esmika el qodos.",
                cop_de: "Ten-tiho ouoh ten-tovh entek-met-agathos pi-mai-romi. Ari-phmevi Epchois en-ni-thisia ni-prosfora ni-shep-ehmot ente ni etav-er-prosferin. Ev-taio nem ou-o-ou em-pek-ran ethowab."
            },
            {
                id: 37,
                speaker: "Diakon",
                ar: "أُطْلُبُوا عَنْ الْمُهْتَمِّينَ بِالصَّعَائِدِ، وَالْقَرَابِينِ، وَالْبُكُورِ، وَالزُّيُوتِ، وَالْبَخُورِ، وَالسُّتُورِ، وَكُتُبِ الْقِرَاءَةِ، وَأَوَانِي الْمَذْبَحِ، لِكَيْ الْمَسِيحُ إِلَهُنَا يُكَافِئَهُمْ فِي أُورُشَلِيمَ السَّمَائِيَّةِ، وَيَغْفِرَ لَنَا خَطَايَانَا.",
                de: "Bittet für diejenigen, die sich um die Opfer kümmern, um die Darbringungen, die Erstlingsgaben, die Öle, den Weihrauch, die Vorhänge, die Lesebücher, die Gefäße des Altars, dass Christus unser Gott sie im himmlischen Jerusalem belohnt und uns unsere Sünden vergibt.",
                cop_ar: "توف إيجين ني إت تشي إف رو أوش: إن ني ثيسيا ني إبروسفورا: ني أبارشي: ني نيه ني إسطوي نووفي: ني إسكيباسما ني جوم إناش: ني كي ميليون إنتي بي ما إن إير شوؤوشي: هينا إنتي بي إخرستوس بين نوتي تي شيفيو نوؤو خين ييروساليم إنتي إتفي: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧϭⲓⲙ̀ⲫ̀ⲣⲟⲟⲩϣ : ⲛ̀ⲛⲓⲑⲩⲥⲓⲁ̀ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ : ⲛⲓⲁ̀ⲡⲁⲣⲭⲏ ⲛⲓⲛⲉϩ ⲛⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲛⲓⲥ̀ⲕⲉⲡⲁⲥⲙⲁ ⲛⲓϫⲱⲙ ⲛ̀ⲱϣ : ⲛⲓⲕⲩⲙⲏⲗⲓⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯϣⲉⲃⲓⲱ̀ ⲛⲱⲟⲩ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobo 'an el mohtamin bel sa'a'ed, wal qarabin, wal bokour, wal zoyout, wal bakhour, wal sotour, wa kotob el qira'a, wa awani el mazbah, lekay el Masih ilahona yokafe'ahom fi Orashalim el sama'iya, wa yaghfer lana khatayana.",
                cop_de: "Tovh ejen ni-et-chi-em-ef-ro-osh: en-ni-thisia ni-prosfora: ni-aparchi ni-neh ni-stoi-noufi ni-skepasma ni-jom en-osh: ni-kimilion ente pi-ma-en-ersho-oushi: hina ente Pi-Khristos Pennouti ti-shevio no-ou khen Ierousalim ente et-fe: entef-ka nen-novi nan evol."
            },
            {
                id: 38,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 40,
                speaker: "Priester",
                ar: "إقْبَلْهَا إِلَيْكَ عَلَى مَذْبَحِكَ الْمُقَدَّسِ، النَّاطِقِ السَّمَائِيِّ، رَائِحَةَ بَخُورٍ، تَدْخُلُ إِلَى عَظَمَتِكَ الَّتِي فِي السَّمَوَاتِ بِوَاسِطَةِ خِدْمَةِ مَلَائِكَتِكَ، وَرُؤَسَاءِ مَلَائِكَتِكَ الْمُقَدَّسِينَ. وَكَمَا قَبِلْتَ إِلَيْكَ قَرَابِينَ هَابِيلَ الصِّدِّيقِ، وَذَبِيحَةَ أَبِينَا إِبْرَاهِيمَ، وَفِلْسَيِّ الأَرْمَلَةِ. هكَذَا أَيْضاً نُذُورَ عَبِيدِكَ اقْبَلْهَا إِلَيْكَ، أَصْحَابَ الْكَثِيرِ وَأَصْحَابَ الْقَلِيلِ، الْخَفِيَّاتِ وَالظَّاهِرَاتِ. وَالَّذِينَ يُرِيدُونَ أَنْ يُقَدِّمُوا لَكَ وَلَيْسَ لَهُمْ، وَالَّذِينَ قَدَّمُوا لَكَ فِي هذَا الْيَوْمِ هذِهِ الْقَرَابِينَ. أَعْطِهِمُ الْبَاقِيَاتِ عِوَضاً عَنِ الْفَانِيَاتِ، السَّمَائِيَّاتِ عِوَضَ الأَرْضِيَّاتِ، الأَبَدِيَّاتِ عِوَضَ الزَّمَنِيَّاتِ. بُيُوتَهُمْ وَمَخَازِنَهُمْ امْلأَهَا مِنْ كُلِّ الْخَيْرَاتِ. أَحِطْهُمْ يَا رَبُّ بِقُوَّةِ مَلَائِكَتِكَ، وَرُؤَسَاءِ مَلَائِكَتِكَ الأَطْهَارِ. وَكَمَا ذَكَرُوا اسْمَكَ الْقُدُّوسَ عَلَى الأَرْضِ، أُذْكُرْهُمْ هُمْ أَيْضاً يَا رَبُّ فِي مَلَكُوتِكَ، وَفِي هذَا الدَّهْرِ لَا تَتْرُكْهُمْ عَنْكَ.",
                de: "Nimm sie über deinem heiligen, lebendigen, himmlischen Altar an, als Wohlgeruch von Weihrauch für deine Herrlichkeit in den Himmeln, durch den Dienst deiner heiligen Engel und Erzengel. Wie du die Opfergaben des gerechten Abel, das Schlachtopfer unseres Vaters Abraham und die zwei Münzen der Witwe angenommen hast, so nimm dich ebenfalls aller Gaben deiner Diener an, derer, die viel besitzen und derer, die wenig haben, der verborgenen und der offenbar dargebrachten. Nimm dich auch derer an, die zu dir mit Opfergaben hineinkommen wollen und es nicht können, und derer, die zu dir gekommen sind an diesem Tag mit diesen Opfergaben. Gib ihnen das Unvergängliche als Entgelt für die vergänglichen Dinge, das Himmlische für das Irdische, das Ewige für das Zeitgebundene. Fülle ihre Häuser und Speicher mit allen Gütern. Umgebe sie, o Herr, mit der Kraft deiner reinen Engel und Erzengel. Wie sie deines heiligen Namens auf Erden gedacht haben, so gedenke auch ihrer in deinem Königreich. Und auch in dieser Erdenzeit verlasse sie nicht.",
                cop_ar: "شوبو إيروك إيجين بيك مان إيرشؤوشي إثؤواف: إن لوجيكون إنتي إتفي: أو إسطوي نوفي إنتي بي إسطوي نوفي: إثناشي إيفون: إي تيك ميت نيشتي إت خين ني في أوي: إيفول هيتين بي شيمشي إنتي نيك أنجيلوس: نيم نيك أرشي أنجيلوس إثؤواف. إم فريتي إيطاك شوب إيروك إن ني دورون إنتي بي ثمي أفيل: نيم تي ثيسيا إنتي بين يوت إفراآم: نيم تي إسن اف إن ليبتون إنتي تي شيرا. بايريتي أون ني إفكي إنتي نيك إيفيايك شوبو إيروك: ني أو أوش نيم ني كوجي: ني إت هيب نيم ني إت أوؤنه إيفول. ني إث أوؤش إي إيني ناك إيفون أووه إممون إنتوؤو: نيم ني إيطاف إيني ناك إيفون خين باي إيهوو إنتي فوؤو ني إبروسفورا ناي. موي نوؤو إن ني أت طاكو إن تي شيفيو إن ني ريف طاكو: ني في أوي إن تي شيفيو إن نا إبكاهي: ني إينيه إن تي شيفيو إن ني بروس أو سيو. نو يي نو تاميون ماهو إيفول خين أغاثون نيفين. ما طاكتو إيروؤو إبشويس إن تي جوم إنتي نيك أنجيلوس: نيم نيك أرشي أنجيلوس إثؤواف. إم فريتي إيطاف إير إفميفئي إم بيك ران إثؤواف هيجين بي كاهي: أري إفميفئي إمموؤو إبشويس خين تيك ميت أورو: أووه خين باي كي إيون فاي إمبير خات نوك.",
                cop_cop: "Ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲗⲟⲅⲓⲕⲟⲛ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ⲟⲩⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ : ⲉⲑⲛⲁϣⲉ ⲉ̀ϧⲟⲩⲛ : ⲉ̀ⲧⲉⲕⲙⲉⲧⲛⲓϣϯ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓϣⲉⲙϣⲓ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ : ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ. Ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲕϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲓⲇⲱⲣⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲑ̀ⲙⲏⲓ Ⲁ̀ⲃⲉⲗ : ⲛⲉⲙ ϯⲑⲩⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ : ⲛⲉⲙ ϯⲥ̀ⲛⲁⲩ ⲛ̀ⲗⲉⲡⲧⲟⲛ ⲛ̀ⲧⲉ ϯⲭⲏⲣⲁ. Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲛⲓⲉⲩⲭⲏ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ : ⲛⲓⲟϣ ⲛⲉⲙ ⲛⲓⲕⲟⲩϫⲓ : ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲛⲏⲉⲑⲟⲩⲱϣ ⲉ̀ⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲟⲩⲟϩ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲱⲟⲩ : ⲛⲉⲙ ⲛⲏⲉⲧⲁⲩⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲫⲟⲟⲩ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ ⲛⲁⲓ. Ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲛⲓⲁⲧⲧⲁⲕⲟ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲓⲣⲉϥⲧⲁⲕⲟ : ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲁ ⲡ̀ⲕⲁϩⲓ : ⲛⲓⲉ̀ⲛⲉϩ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲥⲟⲩⲥⲏⲟⲩ. Ⲛⲟⲩⲏⲓ ⲛⲟⲩⲧⲁⲙⲓⲟⲛ ⲙⲁϩⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲁ̀ⲅⲁⲑⲟⲛ ⲛⲓⲃⲉⲛ. Ⲙⲁⲧⲁⲕⲧⲟ ⲉ̀ⲣⲱⲟⲩ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ϯϫⲟⲙ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ : ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ. Ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ : ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲙⲱⲟⲩ Ⲡ̀ϭⲟⲓⲥ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ : ⲟⲩⲟϩ ϧⲉⲛ ⲡⲁⲓⲕⲉⲉ̀ⲱⲛ ⲫⲁⲓ ⲙ̀ⲡⲉⲣⲭⲁⲧ ⲛ̀ⲥⲱⲕ.",
                ar_de: "Eqbalha elayka ala mazbahika el moqadas, el nateq el sama'i, ra'ehat bakhour, tadkhol ila 'azamatika allati fi el samawat be wasetat khedmat mala'ikatika, wa ro'asa' mala'ikatika el qadisin. Wa kama qabilta elayka qarabin Habil el sediq, wa zabihat abina Ibrahim, wa felsay el armala. Hakaza aydan nozour 'abidaka eqbalha elayka, ashab el kathir wa ashab el qalil, el khafiyat wal zaherat. Wallazina yoridoun an yoqadimou laka wa laysa lahom, wallazina qadamou laka fi haza el yawm hazihi el qarabin. A'tehom el baqiyat 'ewadan 'an el faniyat, el sama'iyat 'ewadan 'an el ardiyat, el abadiyat 'ewadan 'an el zamaniyat. Boyoutahom wa makhazenahom emla'ha men kol el khayrat. Ahethom ya rab be qowat mala'ikatika, wa ro'asa' mala'ikatika el athar. Wa kama zakarou esmaka el qodos ala el ard, ozkorhom hom aydan ya rab fi malakoutika, wa fi haza el dahr la tatrokhom 'anka.",
                cop_de: "Shopou erok ejen pek-man-ersho-oushi ethowab: en-logikon ente et-fe: ou-stoy-nofi ente pi-stoy-noufi: eth-na-she evoun: e-tek-met-nishti et-khen ni-fi-oui: evol hiten pi-shemshi ente nek-angelos: nem nek-archi-angelos ethowab. Mphriti etak-shop erok en-ni-doron ente pi-thmi Avel: nem t-thysia ente pen-iot Abraam: nem ti-snav en-lepton ente ti-khira. Pairiti on ni-eukhi ente nek-eviaik shopou erok: ni-o-osh nem ni-kouji: ni-eth-hip nem ni-eth-ouonh evol. Ni-eth-ouosh e-ini nak evoun ouoh emmon ento-ou: nem ni-etav-ini nak evoun khen pai-ehoou ente fo-ou ni-prosfora nai. Moi no-ou en-ni-at-tako en-t-shevio en-ni-reftako: ni-fe-oui en-t-shevio en-na-pkahi: ni-eneh en-t-shevio en-ni-pros-ou-se-ou. Nou-yi nou-tamion mahou evol khen agathon niven. Matak-to eroo-ou Epchois en-t-jom ente nek-angelos: nem nek-archi-angelos ethowab. Mphriti etav-er-phmevi em-pek-ran ethowab hijen pi-kahi: ari-phmevi emmo-ou Epchois khen tek-met-ouro: ouoh khen pai-ke-eon fai emper-khat nouk."
            },
            {
                id: 41,
                speaker: "Volk",
                ar: "يَا رَبُّ ارْحَمْ.",
                de: "Herr erbarme dich.",
                cop_ar: "كيرياليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Ya rab erham.",
                cop_de: "Kyrie eleison."
            },
            {
                id: 42,
                sectionTitle: {
                    de: "Der Lobpreis der Engel",
                    ar: "فلنسبح مع الملائكه"
                },
                speaker: "Volk",
                ar: "فَلْنُسَبِّحْ مَعَ الْمَلَائِكَةِ قَائِلِينَ: الْمَجْدُ للهِ فِي الْأَعَالِي، وَعَلَى الْأَرْضِ السَّلَامُ، وَفِي النَّاسِ الْمَسَرَّةُ.\n\nنُسَبِّحُكَ، نُبَارِكُكَ، نَخْدِمُكَ، نَسْجُدُ لَكَ، نَعْتَرِفُ لَكَ، نَنْطِقُ بِمَجْدِكَ، نَشْكُرُكَ مِنْ أَجْلِ عَظِيمِ مَجْدِكَ.\n\nأَيُّهَا الرَّبُّ الْمَلِكُ عَلَى السَّمَوَاتِ، اللهُ الْآبُ ضَابِطُ الْكُلِّ، وَالرَّبُّ الْابْنُ الْوَاحِدُ الْوَحِيدُ يَسُوعُ الْمَسِيحُ، وَالرُّوحُ الْقُدُسُ.\n\nأَيُّهَا الرَّبُّ الْإِلهُ، حَمَلُ اللهِ، ابْنُ الْآبِ، رَافِعُ خَطِيَّةِ الْعَالَمِ، ارْحَمْنَا. يَا حَامِلَ خَطِيَّةِ الْعَالَمِ، اقْبَلْ طِلْبَاتِنَا إِلَيْكَ.\n\nأَيُّهَا الْجَالِسُ عَنْ يَمِينِ أَبِيهِ، ارْحَمْنَا.\n\nأَنْتَ وَحْدَكَ الْقُدُّوسُ، أَنْتَ وَحْدَكَ الْعَلِيُّ، يَا رَبِّي يَسُوعُ الْمَسِيحُ، وَالرُّوحُ الْقُدُسُ. مَجْداً للهِ الْآبِ. آمين.\n\nأُبَارِكُكَ كُلَّ يَوْمٍ، وَأُسَبِّحُ اسْمَكَ الْقُدُّوسَ، إِلَى الْأَبَدِ وَإِلَى أَبَدِ الْأَبَدِ، آمين.\n\nمُنْذُ اللَّيْلِ رُوحِي تُبَكِّرُ إِلَيْكَ يَا إِلهِي، لأَنَّ أَوَامِرَكَ هِيَ نُورٌ عَلَى الْأَرْضِ.\n\nكُنْتُ أَتْلُو فِي طُرُقِكَ، لأَنَّكَ صِرْتَ لِي مُعِيناً. بَاكِراً يَا رَبُّ تَسْمَعُ صَوْتِي، بِالْغَدَاةِ أَقِفُ أَمَامَكَ وَتَرَانِي.",
                de: "Lasst uns mit den Engeln lobsingen: „Verherrlicht ist Gott in der Höhe und auf Erden ist Friede bei den Menschen seiner Gnade“.\n\nWir loben dich, wir preisen dich, wir dienen dir, wir beten dich an, wir bekennen dich und sprechen deine Herrlichkeit aus. Wir danken dir wegen deiner großen Herrlichkeit.\n\nHerr, König der Himmel, Gott, Vater, Allmächtiger, Herr, allein eingeborener Sohn, Jesus Christus und Heiliger Geist.\n\nHerr und Gott, Lamm Gottes, Sohn des Vaters, du nimmst hinweg die Sünde der Welt, erbarme dich unser. Du nimmst hinweg die Sünde der Welt, nimm an unser Gebet.\n\nDu sitzt zur Rechten des Vaters, erbarme dich unser.\n\nDenn du allein bist der Heilige, du allein bist der Höchste: mein Herr, Jesus Christus, mit dem Heiligen Geist, Ehre sei Gott, dem Vater, Amen.\n\nDich verherrliche ich Tag für Tag und huldige deinem heiligen Namen von Ewigkeit bis in alle Ewigkeit. Amen.\n\nSeit der Nacht eilt meine Seele zu dir, mein Gott; denn deine Gesetze sind Licht auf Erden.\n\nIch sinne über deine Wege nach. Ja, du wurdest meine Hilfe. Herr, am Morgen wirst du meine Stimme anhören; am Morgen will ich zu dir treten und zu dir hinsehen.",
                cop_ar: "مارين هوس نيم ني أنجيلوس جي: أو أو أو إم إفنوتي خين ني إت تشوسي: نيم أو هيريني هيجين بي كاهي: نيم أو تي ما تي خين ني رومي.\n\nتين هوس إيروك: تين إزمو إيروك: تين شيمشي إمموك: تين أو أوشت إمموك: تين أو أونه ناك إيفول: تين ساجي إم بيك أو أو: تين شيب إهموت إنتوتك: إثفي بيك نيشتي إن أو أو.\n\nإبشويس إب أورو إن إيبورانيون: إفنوتي إفيوت بي بانتوكراتور: إبشويس إبشيري إم مونو جينيس: إيسوس بي إخرستوس: نيم بي إبنيفما إثؤواف.\n\nإبشويس إفنوتي بي هييب إنتي إفنوتي: إبشيري إم إفيوت: في إت أولي إم إف نوفي إم بي كوسموس: ناي نان. في إت أولي إم إف نوفي إم بي كوسموس: شوب تين تيهو إيروك.\n\nفي إت هيمسي سا أوينام إم بيف يوت: ناي نان.\n\nجي إنثوك إم ما فاتك إثؤواف: إنثوك إم ما فاتك إت تشوسي: با شويس إيسوس بي إخرستوس: نيم بي إبنيفما إثؤواف: إي أو أو أو إم إفنوتي إفيوت. آمين.\n\nتي نا إزمو إيروك إم ميني: تي نا هوس إي بيك ران إثؤواف: شا إينيه نيم شا إينيه إنتي بي إينيه. آمين.\n\nإيسجين إيجوره أ با إبنيفما إر شورب: هاروك بانوتي: جي نيك أوأه ساهني هان أو أويني: هيجين بي كاهي.\n\nناي ميليتان هي نيك مويت: جي أك إر فويثوس إيروي. شورب إبشويس إك إي سوتيم إي با خروف: شورب تي نا أوهي إيرات ناهراك إك إي ناف إيروي.",
                cop_cop: "Ⲙⲁⲣⲉⲛϩⲱⲥ ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ϫⲉ : Ⲟⲩⲱ̀ⲟⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ : ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ : ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.\n\nⲦⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ : ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ : ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ : ⲧⲉⲛⲟⲩⲱⲛϩ ⲛⲁⲕ ⲉ̀ⲃⲟⲗ : ⲧⲉⲛⲥⲁϫⲓ ⲙ̀ⲡⲉⲕⲱ̀ⲟⲩ : ⲧⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧⲕ : ⲉⲑⲃⲉ ⲡⲉⲕⲛⲓϣϯ ⲙ̀ⲱ̀ⲟⲩ.\n\nⲠ̀ϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : Ⲡ̀ϭⲟⲓⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀ⲙⲟⲛⲟⲅⲉⲛⲏⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.\n\nⲠ̀ϭⲟⲓⲥ Ⲫ̀ⲛⲟⲩϯ Ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ : Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲓⲱⲧ : ⲫⲏⲉⲧⲱⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ ⲛⲁⲓ ⲛⲁⲛ. Ⲫⲏⲉⲧⲱⲗⲓ ⲙ̀ⲫ̀ⲛⲟⲃⲓ ⲛ̀ⲧⲉ ⲡⲓⲕⲟⲥⲙⲟⲥ ϣⲱⲡ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ.\n\nⲪⲏⲉⲧϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ ⲛⲁⲓ ⲛⲁⲛ.\n\nϪⲉ ⲛ̀ⲑⲟⲕ ⲙ̀ⲙⲁⲩⲁⲧⲕ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲑⲟⲕ ⲙ̀ⲙⲁⲩⲁⲧⲕ ⲉⲧϭⲟⲥⲓ : Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲉ̀ⲟⲩⲱ̀ⲟⲩ ⲙ̀Ⲫ̀ⲛⲟⲩϯ Ⲫ̀ⲓⲱⲧ. Ⲁ̀ⲙⲏⲛ.\n\nϮⲛⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲙ̀ⲙⲏⲛⲓ : ϯⲛⲁϩⲱⲥ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ϣⲁ ⲉ̀ⲛⲉϩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ⲛⲉϩ. Ⲁ̀ⲙⲏⲛ.\n\nⲒⲥϫⲉⲛ ⲉϫⲱⲣϩ ⲁ ⲡⲁⲡ̀ⲛⲉⲩⲙⲁ ⲉⲣϣⲟⲣⲡ ϩⲁⲣⲟⲕ Ⲡⲁⲛⲟⲩϯ : ϫⲉ ⲛⲉⲕⲟⲩⲁϩⲥⲁϩⲛⲓ ϩⲁⲛⲟⲩⲱⲓⲛⲓ ϩⲓϫⲉⲛ ⲡ̀ⲕⲁϩⲓ.\n\nⲚⲁⲓⲙⲉⲗⲉⲧⲁⲛ ϩⲓ ⲛⲉⲕⲙⲱⲓⲧ : ϫⲉ ⲁⲕⲉⲣⲃⲟⲏ̀ⲑⲟⲥ ⲉ̀ⲣⲟⲓ. Ϣⲟⲣⲡ Ⲡ̀ϭⲟⲓⲥ ⲉⲕⲉ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲡⲁϧⲣⲱⲟⲩ : ϣⲟⲣⲡ ϯⲛⲁⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ ⲛⲁϩⲣⲁⲕ ⲉⲕⲉ̀ⲛⲁⲩ ⲉ̀ⲣⲟⲓ.",
                ar_de: "Fal nosabih ma'a el mala'ika qa'ilin: El magd lillah fi el a'ali, wa 'ala el ard el salam, wa fi el nas el masarra.\n\nNosabihoka, nobarikoka, nakhdimoka, nasgod laka, na'taref laka, pnantq be magdika, nashkoroka men agl 'azim magdika.\n\nAyoha el Rab el Malek 'ala el samawat, Allah el Ab dabet el kol, wal Rab el Ebn el wahed el wahid Yasou' el Masih, wal Roh el Qodos.\n\nAyoha el Rab el Ilah, hamal Allah, Ebn el Ab, rafe' khatiya el 'alam, erhamna. Ya hamel khatiya el 'alam, eqbal talibatina elayka.\n\nAyoha el gales 'an yamin abih, erhamna.\n\nAnta wahdaka el Qodos, anta wahdaka el 'Ali, ya rabbi Yasou' el Masih, wal Roh el Qodos. Magdan lillah el Ab. Amin.\n\nObarikoka kol yawm, wa osabih esmaka el qodos, ila el abad wa ila abad el abad, Amin.\n\nMonzo el layl rouhi tobaker elayka ya ilahi, le anna awamiraka hiya nour 'ala el ard.\n\nKonto atlou fi toroqe-ka, le annaka serta li mo'inan. Bakeran ya Rab tasma' sawti, bel ghadat aqef amamaka wa tarani.",
                cop_de: "Maren hos nem ni-angelos je: O-ou-o em-Efnouti khen ni-et-chosi: nem ou-hirini hijen pi-kahi: nem ou-ti-mati khen ni-romi.\n\nTen-hos erok ten-smou erok: ten-shemshi mmok: ten-ouosht mmok: ten-ouonh nak evol: ten-saji mpek-o-ou: ten-shep-ehmot ntotk: ethve pek-nishti m-o-ou.\n\nEpchois ep-ouro en-epouranion Efnouti Efiot Pi-pantokrator: Epchois Pshiri m-monogenis Isos Pi-Khristos: nem Pi-pnevma ethowab.\n\nEpchois Efnouti pi-hiib nte Efnouti: Pshiri m-Efiot: fi-et-oli m-phnovi nte pi-kosmos: nai nan. Fi-et-oli m-phnovi nte pi-kosmos: shop ten-tiho erok.\n\nFi-et-hemsi sa-ouinam m-Pefiot: nai nan.\n\nJe nthok mmavatk ethowab: nthok mmavatk et-chosi: Pa-Chois Isos Pi-Khristos nem Pi-pnevma ethowab: e-ou-o-ou m-Efnouti Efiot. Amin.\n\nTina-smou erok mmini: tina-hos e-pek-ran ethowab: sha-eneh nem sha-eneh nte pi-eneh. Amin.\n\nIsjen ejorh a pa-pnevma er-shorp harok Panouti: je nek-ouah-sahni han-ouoini hijen pi-kahi.\n\nNa-i-meletan hi nek-moit: je ak-er-voithos eroi. Shorp Epchois ek-e-sotem e-pa-khrov: shorp tina-ohi erat nahrak ek-e-nav eroi."
            },
            {
                id: 43,
                speaker: "Volk",
                ar: "قُدُّوسٌ الله، قُدُّوسٌ الْقَوِيُّ، قُدُّوسٌ الَّذِي لَا يَمُوتُ، الَّذِي وُلِدَ مِنَ الْعَذْرَاءِ، ارْحَمْنَا.\n\nقُدُّوسٌ الله، قُدُّوسٌ الْقَوِيُّ، قُدُّوسٌ الَّذِي لَا يَمُوتُ، الَّذِي صُلِبَ عَنَّا، ارْحَمْنَا.\n\nقُدُّوسٌ الله، قُدُّوسٌ الْقَوِيُّ، قُدُّوسٌ الَّذِي لَا يَمُوتُ، الَّذِي قَامَ مِنَ الْأَمْوَاتِ وَصَعِدَ إِلَى السَّمَوَاتِ، ارْحَمْنَا.\n\nالْمَجْدُ لِلآبِ وَالابْنِ وَالرُّوحِ الْقُدُسِ، الآنَ وَكُلَّ أَوَانٍ وَإِلَى دَهْرِ الدُّهُورِ. آمين. أَيُّهَا الثَّالُوثُ الْقُدُّوسُ ارْحَمْنَا.\n\nيَا رَبُّ اغْفِرْ لَنَا خَطَايَانَا، يَا رَبُّ اغْفِرْ لَنَا آثَامَنَا، يَا رَبُّ اغْفِرْ لَنَا زَلَّاتِنَا. يَا رَبُّ افْتَقِدْ مَرْضَى شَعْبِكَ، اشْفِهِمْ مِنْ أَجْلِ اسْمِكَ الْقُدُّوسِ. آبَاؤُنَا وَإِخْوَتُنَا الَّذِينَ رَقَدُوا، يَا رَبُّ نَيِّحْ نُفُوسَهُمْ.\n\nيَا مَنْ هُوَ بِلَا خَطِيَّةٍ، يَا رَبُّ ارْحَمْنَا، يَا الَّذِي بِلَا خَطِيَّةٍ، يَا رَبُّ أَعِنَّا، وَاقْبَلْ طِلْبَاتِنَا إِلَيْكَ. لأَنَّ لَكَ الْمَجْدَ وَالْعِزَّةَ وَالتَّقْدِيسَ الْمُثَلَّثَ. يَا رَبُّ ارْحَمْ، يَا رَبُّ ارْحَمْ، يَا رَبُّ بَارِكْ. آمين.",
                de: "Heiliger Gott, Heiliger Starker, Heiliger Unsterblicher, von der Jungfrau geboren: Erbarme dich unser.\n\nHeiliger Gott, Heiliger Starker, Heiliger Unsterblicher, gekreuzigt an unserer statt: Erbarme dich unser.\n\nHeiliger Gott, Heiliger Starker, Heiliger Unsterblicher, auferstanden von den Toten und aufgefahren in den Himmel: Erbarme dich unser.\n\nEhre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt, alle Zeit und in alle Ewigkeit. Amen. Heilige Dreifaltigkeit, erbarme dich unser.\n\nHerr, vergib uns unsere Sünden, Herr, vergib uns unsere Schuld, Herr, vergib uns unsere Unterlassungen. Herr, tröste die Kranken deines Volkes, heile sie um deines heiligen Namens willen. Die Seelen unserer Väter und Brüder, die entschlafen sind, Herr, lass ruhen.\n\nDu sündenloser Herr, erbarme dich unser. Du sündenloser Herr, hilf uns und nimm unsere Bitten an. Denn dein ist die Ehre, Verherrlichung und dreifache Huldigung. Herr, erbarme dich, Herr, erbarme dich, Herr, segne uns. Amen.",
                cop_ar: "أجيوس أو ثيؤس: أجيوس إيس شيروس: أجيوس أثاناطوس: أو إك بارثينو جيننيتيس: إليسون إيماس.\n\nأجيوس أو ثيؤس: أجيوس إيس شيروس: أجيوس أثاناطوس: أو إسطافروتيس دي إيماس: إليسون إيماس.\n\nأجيوس أو ثيؤس: أجيوس إيس شيروس: أجيوس أثاناطوس: أو أناسطاس إك طون نيكرون كي أنيلثون إيس توس أورانوس: إليسون إيماس.\n\nذوكصا باتري كي إيو كي أجيو إبنيفماتي: كي نين كي آإي كي إيس توس إؤناس طون إؤنون: آمين. أجيا ترياس إليسون إيماس.\n\nإبشويس كا نين نوفي نان إيفول: إبشويس كا نين أنوميا نان إيفول: إبشويس كا نين بارابتوماتي نان إيفول. إبشويس جيم إبشيني إن ني إت شوني إنتي بيك لاؤس: ما طالتشوؤو إثفي بيك ران إثؤواف: نين يوتي نيم نين إسنيو إيطاف إنكوت إبشويس ما إمطون إن نو بسيشي.\n\nبي أت نوفي إبشويس ناي نان: بي أت نوفي إبشويس أري فو إيثين إيرون: شوب تين تيهو إيروك. جي فوك بي بي أو أو نيم بي أماحي: نيم بي ترياجيوس: كيري إليسون: كيري إليسون: كيري إفلوجيسون. آمين.",
                cop_cop: "Ⲁⲅⲓⲟⲥ ⲟ Ⲑⲉⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ: ⲟ ⲉⲕ ⲡⲁⲣⲑⲉⲛⲟⲩ ⲅⲉⲛⲛⲉⲑⲓⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\n\nⲀⲅⲓⲟⲥ ⲟ Ⲑⲉⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ: ⲟ ⲥ̀ⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\n\nⲀⲅⲓⲟⲥ ⲟ Ⲑⲉⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ: ⲟ ⲁ̀ⲛⲁⲥⲧⲁⲥ ⲉⲕ ⲧⲱⲛ ⲛⲉⲕⲣⲱⲛ ⲕⲉ ⲁ̀ⲛⲉⲗⲑⲱⲛ ⲓⲥ ⲧⲟⲩⲥ ⲟⲩⲣⲁⲛⲟⲩⲥ: ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\n\nⲆⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ. Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲓ̀ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱⲛⲱⲛ. Ⲁ̀ⲙⲏⲛ. Ⲁ̀ⲅⲓⲁ̀ Ⲧ̀ⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\n\nⲠ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ : Ⲡ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ : Ⲡ̀ϭⲟⲓⲥ ⲭⲁ ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ. Ⲡ̀ϭⲟⲓⲥ ϫⲉⲙⲡ̀ϣⲓⲛⲓ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ : ⲙⲁⲧⲁⲗϭⲱⲟⲩ ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ.\n\nⲠⲓⲁⲧⲛⲟⲃⲓ Ⲡ̀ϭⲟⲓⲥ ⲛⲁⲓ ⲛⲁⲛ : ⲡⲓⲁⲧⲛⲟⲃⲓ Ⲡ̀ϭⲟⲓⲥ ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ : ϣⲱⲡ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ. Ϫⲉ ⲫⲱⲕ ⲡⲉ ⲡⲓⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲓⲁ̀ⲙⲁϩⲓ : ⲛⲉⲙ ⲡⲓⲧ̀ⲣⲓⲁ̀ⲅⲓⲟⲥ : Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ. Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Qodos Allah, Qodos El Qawi, Qodos Allazi la yamout, allazi woleda men el 'azra', erhamna.\n\nQodos Allah, Qodos El Qawi, Qodos Allazi la yamout, allazi soleba 'anna, erhamna.\n\nQodos Allah, Qodos El Qawi, Qodos Allazi la yamout, allazi qama men el amwat wa sa'eda ila el samawat, erhamna.\n\nEl magd lel Ab wal Ebn wal Roh el Qodos, el an wa kol awan wa ila dahr el dohour. Amin. Ayoha el thalouth el qodos erhamna.\n\nYa rab eghfer lana khatayana, ya rab eghfer lana asamana, ya rab eghfer lana zalatina. Ya rab eftaqed marda sha'bika, eshfehom men agl esmika el qodos. Aba'ona wa ekhwatona allazina raqadou, ya rab nayeh nofosohom.\n\nYa man howa bila khatiya, ya rab erhamna, ya allazi bila khatiya, ya rab a'ena, wa eqbal talibatina elayka. Le anna laka el magd wal 'ezza wal taqdis el mothallath. Ya rab erham, ya rab erham, ya rab barek. Amin.",
                cop_de: "Agios o Theos: Agios Ischiros: Agios Athanatos: o ek parthenou gen-nethis: eleison imas.\n\nAgios o Theos: Agios Ischiros: Agios Athanatos: o stavrothis di imas: eleison imas.\n\nAgios o Theos: Agios Ischiros: Agios Athanatos: o anastas ek ton nekron ke anelthon is tous ouranous: eleison imas.\n\nDoxa Patri ke Io ke Agio Pnevmati: ke nyn ke a-i ke is tous e-onas ton e-onon: Amin. Agia Trias eleison imas.\n\nEpchois ka nen-novi nan evol: Epchois ka nen-anomia nan evol: Epchois ka nen-paraptoma nan evol. Epchois jem-epshini en-ni-et-shoni ente pek-laos: ma-talcho-ou ethve pek-ran ethowab: nen-ioti nem nen-sniou etav-enkot Epchois ma-emton en-nou-psishi.\n\nPi-at-novi Epchois nai nan: Pi-at-novi Epchois ari-voithin eron: shop ten-tiho erok. Je phok pe pi-o-ou nem pi-amahi: nem pi-triagios: Kyrie eleison: Kyrie eleison: Kyrie evlogison. Amin."
            },
            {
                id: 44,
                sectionTitle: {
                    de: "Einleitung der Doxologie",
                    ar: "مقدمه الذكصولوجيات"
                },
                speaker: "Volk",
                ar: "بالمسيح يسوع ربنا، آمين. هلليلويا.\n\nالسلام لك، نسألك أيتها القديسة الممتلئة مجداً، العذراء كل حين، والدة الإله، أم المسيح.\n\nاصعدي صلواتنا إلى ابنك الحبيب، ليغفر لنا خطايانا.\n\nالسلام للتي ولدت لنا، النور الحقيقي، المسيح إلهنا، العذراء القديسة.\n\nاسألي الرب عنا، ليصنع رحمة، مع نفوسنا، ويغفر لنا خطايانا.\n\nأيتها العذراء مريم، والدة الإله، القديسة، الشفيعة الأمينة، لجنس البشرية.\n\nاشفعي فينا أمام المسيح الذي ولدتيه، لكي ينعم لنا، بغفران خطايانا.\n\nالسلام لك أيتها العذراء، الملكة الحقيقية الحقانية. السلام لفخر جنسنا، ولدت لنا عمانوئيل.\n\nنسألك أذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا.",
                de: "Durch Christus Jesus unseren Herrn. Amen. Halleluja.\n\nGegrüßt seist du! – Wir bitten dich, du Heilige, voll der Gnade – immerwährend jungfräuliche – Mutter Gottes und Mutter Christi.\n\nTrage unsere Gebete empor – zu deinem geliebten Sohn, – damit er unsere Sünden – vergibt.\n\nGegrüßt seist du, – die uns das wahre Licht, Christus, – unseren Gott, geboren hat. – Heilige Jungfrau.\n\nBitte für uns beim Herrn, – damit er sich unserer – Seelen erbarme – und unsere Sünden vergibt.\n\nJungfrau Maria, – heilige Mutter Gottes, – treue Fürsprecherin – des Menschengeschlechts.\n\nSei unsere Fürsprecherin – vor Christus, den du geboren hast, – damit er uns die Vergebung – unserer Sünden gewährt.\n\nGegrüßt seist du! Jungfrau, – die wahre Königin in Wahrheit. – Gegrüßt seist du! Stolz unseres Geschlechts, – du hast uns den Emmanuel geboren.\n\nWir bitten dich, gedenke unser, – du treue Fürsprecherin, – vor unserem Herrn Jesus Christus, – damit er uns unsere Sünden vergibt.",
                cop_ar: "خين بي إخرستوس إيسوس بين شويس: آمين. الليلويا.\n\nشيري ني تين تيهو إيرو: أو ثي إثؤواف إثه ميه إن أو أو: إت أوي إم بارثينوس إن سيو نيفين: ثي ماس نوتي إثماف إم بي إخرستوس.\n\nأولي إنتين بروس إفكي: إي إبشوي ها بيشيري إم مينريت: إنتيف كا نين نوفي نان إيفول.\n\nشيري ثي إيطاس ميسي نان: إم بي أو أويني إن أليثينوس: بي إخرستوس بين نوتي: تي بارثينوس إثؤواف.\n\nماتيهو إي إبشويس إي إهري إيجون: إنتيف إر أو ناي نيم نين بسيشي: إنتيف كا نين نوفي نان إيفول.\n\nتي بارثينوس ماريا: تي ثيؤطوكوس إثؤواف: تي بروستاتيس إت انهوت: إنتي بي جينوس إنتي ني رومي.\n\nأري بريسفيفين إي إهري إيجون: ناهرين بي إخرستوس في إيطا ري ماسف: هوبوس إنتيف إر إهموت نان: إم بي كو إيفول إنتي نين نوفي.\n\nشيري ني أو تي بارثينوس: تي أورو إم مي إن أليثيني: شيري إب شوشو إنتي بين جينوس: أري إجفو نان إن إممانوئيل.\n\nتين تيهو أري بين ميفئي: أو تي بروستاتيس إت انهوت: ناهرين بين شويس إيسوس بي إخرستوس: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ : Ⲁ̀ⲙⲏⲛ. Ⲁ̀ⲗⲗⲏⲗⲟⲩⲓⲁ̀.\n\nⲬⲉⲣⲉ ⲛⲉ ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟ : ⲱ̀ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲑⲓⲙⲁⲥⲛⲟⲩϯ ⲑⲙⲁⲩ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\n\nⲀ̀ⲟⲗⲓ ⲛ̀ⲧⲉⲛⲡ̀ⲣⲟⲥⲉⲩⲭⲏ : ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁ Ⲡⲉϣⲏⲣⲓ ⲙ̀ⲙⲉⲛⲣⲓⲧ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.\n\nⲬⲉⲣⲉ ⲑⲏⲉⲧⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ : ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ : Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ : ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ.\n\nⲘⲁϯϩⲟ ⲉ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛ̀ⲧⲉϥⲉⲣ ⲟⲩⲛⲁⲓ ⲛⲉⲙ ⲛⲉⲛⲯⲩⲭⲏ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.\n\nϮⲡⲁⲣⲑⲉⲛⲟⲥ Ⲙⲁⲣⲓⲁⲙ : ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ : ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉⲧⲉⲛϩⲟⲧ : ⲛ̀ⲧⲉ ⲡ̀ⲅⲉⲛⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ.\n\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲁϩⲣⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲫⲏⲉⲧⲁⲣⲉⲙⲁⲥϥ : ϩⲟⲡⲱⲥ ⲛ̀ⲧⲉϥⲉⲣϩ̀ⲙⲟⲧ ⲛⲁⲛ : ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.\n\nⲬⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : Ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.\n\nⲦⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Bel Masih Yasou' rabina, Amin. Hallelouya.\n\nEl salam laki, nas'aloki ayatoha el qadisa el momtali'a majdan, el 'azra' kol hin, walidat el ilah, om el Masih.\n\nAs'edi salawatina ila ebniki el habib, li yaghfer lana khatayana.\n\nEl salam lillati waladat lana, el nour el haqiqi, el Masih ilahona, el 'azra' el qadisa.\n\nEs'ali el Rab 'anna, li yasna' rahma, ma'a nofousina, wa yaghfer lana khatayana.\n\nAyatoha el 'azra' Mariam, walidat el ilah, el qadisa, el shafi'a el amina, li jens el bashariya.\n\nEshfa'i fina amam el Masih allazi waladtihi, lekay yon'em lana, be ghofran khatayana.\n\nEl salam laki ayatoha el 'azra', el malika el haqiqiya el haqaniya. El salam li fakhr jinsina, waladti lana Emmanuel.\n\nNas'aloki ozkorina, ayatoha el shafi'a el mo'tamana, amam rabina Yasou' el Masih, li yaghfer lana khatayana.",
                cop_de: "Khen Pi-Khristos Isos Penchois: Amin. Allelouia.\n\nShere ne ten-tiho ero: o thi-ethowab ethmeh en-o-ou: etoi em-parthenos en-sio niven: thi-mas-nouti ethmav em-Pi-Khristos.\n\nA-oli en-ten-prosevki: e-pshoi ha Pe-shiri em-menrit: entef-ka nen-novi nan evol.\n\nShere thi-etas-misi nan: em-pi-ouoini en-alithinos: Pi-Khristos Pennouti: ti-parthenos ethowab.\n\nMatiho e-Pchois e-hri egon: entef-er-ou-nai nem nen-psishi: entef-ka nen-novi nan evol.\n\nTi-parthenos Maria: ti-theotokos ethowab: ti-prostatis et-enhot: ente pi-genos ente ni-romi.\n\nAri-presvevin e-hri egon: nahren Pi-Khristos fi-eta-ri-masf: hopos entef-er-ehmot nan: empi-ko evol ente nen-novi.\n\nShere ne o ti-parthenos: ti-ouro em-mei en-alithini: Shere ep-shoushou ente pen-genos: are-jfo nan en-Emmanuel.\n\nTen-tiho ari-pen-mevi: o ti-prostatis et-enhot: nahren Penchois Isos Pi-Khristos: entef-ka nen-novi nan evol."
            },
            {
                id: "menu_feasts",
                type: "selection_menu",
                title: "Doxologien der Feste / ذكصولوجيات الأعياد",
                feasts: [
                    { id: "45.1", de: "Geburt Christi", ar: "عيد الميلاد المجيد" },
                    { id: "45.2", de: "Taufe Jesu", ar: "عيد الغطاس المجيد" }
                ],
                saints: [] // Leer lassen, da hier nur Feste sind
            },

            // 2. Hier die Inhalte der Fest-Doxologien (werden nur angezeigt, wenn ausgewählt)
            {
                id: "45.1",
                speaker: "Volk",
                ar: "حينئذ امتلأ فمنا فرحاً، ولساننا تهليلاً، لأن ربَّنا يسوع المسيح، وُلِدَ في بيت لحم.\n\nالسلام لمدينة إلهنا، مدينة الأحياء، مسكن الصدِّيقين، التي هي أورشليم.\n\nالسلام لك يا بيت لحم، مدينة الأنبياء، الذين تنبأوا، عن ميلاد عمانوئيل.\n\nاليوم أشرق لنا، نحن أيضاً النور الحقيقي، من مريم العذراء، العروس النقية.\n\nمريم ولدت مخلّصنا، محب البشر الصالح، في بيت لحم اليهودية، كأقوال الأنبياء.\n\nإشعياء النبي، يصرخ بصوت التهليل قائلاً: إنها تلد عمانوئيل، مخلّصنا الصالح.\n\nالسماوات تفرح، والأرض تتهلّل، لأنها ولدت لنا عمانوئيل، نحن (معشر) المسيحيين.\n\nمن أجل هذا نحن أغنياء، بالخيرات الكاملة، وبإيمان نُرتّل قائلين: هلليلويا.\n\n(هلليلويا)، يسوع المسيح ابن الله، وُلِدَ في بيت لحم.\n\nهذا الذي ينبغي لة المجد، مع أبيه الصالح، والروح القُدُس، من الآن وإلى الأبد.",
                de: "Unser Mund ist erfüllt mit Freude – und unsere Zunge von Jubel, – denn unser Herr Jesus Christus – wurde in Bethlehem geboren.\n\nGegrüßt sei die Stadt unseres Gottes, – die Stadt der Lebendigen, – der Wohnort der Gerechten, – welche Jerusalem ist.\n\nFriede sei Bethlehem, – der Stadt der Propheten, – welche die Geburt Emmanuels prophezeiten.\n\nHeute ist auch uns – das wahre Licht erschienen – von der Jungfrau Maria, – der reinen Braut.\n\nMaria hat unseren Erlöser, – den gütigen Menschenliebenden geboren, – in Bethlehem in Judäa, – wie es die Propheten verkündet haben.\n\nDer Prophet Jesaja rief – mit fröhlicher Stimme und sprach: – Sie wird Emmanuel, – unseren gütigen Erlöser, gebären.\n\nDie Himmel sind erfreut – und die Erde jubelt, – denn sie hat uns Christen – Emmanuel geboren.\n\nDeshalb sind wir reich – an vollkommenen Gütern, – mit Glauben preisen wir dich – und sagen: Halleluja.\n\n(Halleluja), – Jesus Christus, der Sohn Gottes – wurde in Bethlehem geboren.\n\nIhm gebührt die Herrlichkeit – mit seinem guten Vater – und dem Heiligen Geist, – jetzt und in alle Ewigkeit.",
                cop_ar: "طوتي رون أف موه إن راشي: أووه بين لاس خين أو ثيليل: جي بين شويس إيسوس بي إخرستوس: أف ماسف خين فيثليئيم.\n\nشيري إت فاكي إم بين نوتي: تي بوليس إنتي ني إت أونخ: إف ما إن شوبي إنتي ني ثمي: إيتي طاي تي ييروساليم.\n\nشيري ني أو فيثليئيم: تي بوليس إنتي ني بروفيتيس: ني إطاف إر بروفيتيفين: إثفي إبجين ميسي إن إممانوئيل.\n\nأبي أو أويني إن أليثينوس: شاي نان إم فوؤو هون: إيفول خين ماريا تي بارثينوس: تي شيليت إن كاثاروس.\n\nماريا أسميسي إم بين سوتير: بي ماي رومي إن أغاثوس: خين فيثليئيم إنتي تي يوذيا: كاطا ني إزمي إنتي ني بروفيتيس.\n\nإيسائياس بي بروفيتيس: أوش إيفول خين أو إزمي إن ثيليل: جي إس إي ميسي إن إممانوئيل: بين سوتير إن أغاثوس.\n\nني في أوي أونوف نيم إب كاهي ثيليل: جي أسميسي نان إن إممانوئيل: أنون خا ني خريستيانوس.\n\nإثفي فاي تين أوي إن راماؤ: خين ني أغاثون إت جيك إيفول: خين أو ناهتي تين إر إبسالين: إن جو إم موس جي الليلويا.\n\n(الليلويا): إيسوس بي إخرستوس إبشيري إم إفنوتي: أف ماسف خين فيثليئيم.\n\nفاي إيري بي أو أو إر بريبي ناف: نيم بيف يوت إن أغاثوس: نيم بي إبنيفما إثؤواف: يسجين تينو نيم شا إينيه.",
                cop_cop: "Ⲧⲟⲧⲉ ⲣⲱⲛ ⲁϥⲙⲟϩ ⲛ̀ⲣⲁϣⲓ : ⲟⲩⲟϩ ⲡⲉⲛⲗⲁⲥ ϧⲉⲛ ⲟⲩⲑⲉⲗⲏⲗ : ϫⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.\n\nⲬⲉⲣⲉ ⲑⲃⲁⲕⲓ ⲙ̀Ⲡⲉⲛⲛⲟⲩϯ : ϯⲡⲟⲗⲓⲥ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲟⲛϧ : ⲫⲙⲁⲛ̀ϣⲱⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲑ̀ⲙⲏⲓ : ⲉ̀ⲧⲉ ⲧⲁⲓ ⲧⲉ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ.\n\nⲬⲉⲣⲉ ⲛⲉ ⲱ̀ Ⲃⲏⲑⲗⲉⲉⲙ : ϯⲡⲟⲗⲓⲥ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲉⲣⲡ̀ⲣⲟⲫⲏⲧⲉⲩⲓⲛ : ⲉⲑⲃⲉ ⲡ̀ϫⲓⲛⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.\n\nⲀ ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ : ϣⲁⲓ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ ϩⲱⲛ : ⲉ̀ⲃⲟⲗ ϧⲉⲛ Ⲙⲁⲣⲓⲁ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯϣⲉⲗⲉⲧ ⲛ̀ⲕⲁⲑⲁⲣⲟⲥ.\n\nⲘⲁⲣⲓⲁ̀ ⲁⲥⲙⲓⲥⲓ ⲙ̀Ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ ⲛ̀ⲧⲉ ϯⲒⲟⲩⲇⲉⲁ̀ : ⲕⲁⲧⲁ ⲛⲓⲥⲙⲏ ⲛ̀ⲧⲉ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ.\n\nⲎⲥⲁⲓⲁⲥ ⲡⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲱϣ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲑⲉⲗⲏⲗ : ϫⲉ ⲉⲥⲉ̀ⲙⲓⲥⲓ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ.\n\nⲚⲓⲫⲏⲟⲩⲓ̀ ⲟⲩⲛⲟϥ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲑⲉⲗⲏⲗ : ϫⲉ ⲁⲥⲙⲓⲥⲓ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ : ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ.\n\nⲈⲑⲃⲉ ⲫⲁⲓ ⲧⲉⲛⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀ : ϧⲉⲛ ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲟⲩⲛⲁϩϯ ⲧⲉⲛⲉⲣⲯⲁⲗⲓⲛ : ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ ϫⲉ Ⲁ̀ⲗⲗⲏⲗⲟⲩⲓⲁ̀.\n\n( Ⲁ̀ⲗⲗⲏⲗⲟⲩⲓⲁ̀ ) : Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ : ⲁⲩⲙⲁⲥϥ ϧⲉⲛ Ⲃⲏⲑⲗⲉⲉⲙ.\n\nⲪⲁⲓ ⲉ̀ⲣⲉ ⲡⲓⲱ̀ⲟⲩ ⲉⲣⲡ̀ⲣⲉⲡⲓ ⲛⲁϥ : ⲛⲉⲙ Ⲡⲉϥⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲓⲥϫⲉⲛ ϯⲛⲟⲩ ⲛⲉⲙ ϣⲁ ⲉ̀ⲛⲉϩ.",
                ar_de: "Tote ren afmoh en rashi, wa pen las khen ou thelil, je Penchois Isos Pi-Khristos, av masf khen Vithleem.\n\nShere et vaki em Pennouti, ti polis ente ni et onkh, eph ma en shopi ente ni thmi, ete tai te Ierousalim.\n\nShere ne o Vithleem, ti polis ente ni prophitis, ni etav er prophitevin, ethve ep jin misi en Emmanuel.\n\nA pi o oini en alithinos, shai nan em foo hon, evol khen Maria ti parthenos, ti shelet en katharos.\n\nMaria as misi em Pensotir, pi mai romi en agathos, khen Vithleem ente ti Ioudea, kata ni smi ente ni prophitis.\n\nIsaias pi prophitis, osh evol khen ou smi en thelil, je es e misi en Emmanuel, Pensotir en agathos.\n\nNi fi o i ounof nem ep kahi thelil, je as misi nan en Emmanuel, anon kha ni khristianos.\n\nEthve fai ten oi en ramao, khen ni agathon et jik evol, khen ou nahti ten er psalin, en jo emmos je Allelouia.\n\n(Allelouia), Isos Pi-Khristos Ep shiri em Efnouti, av masf khen Vithleem.\n\nFai ere pi o o er prepi naf, nem Pef iot en agathos, nem Pi pnevma ethowab, isjen tinou nem sha eneh.",
                cop_de: "Tote ron af-moh en-rashi: ouoh pen-las khen ou-thelil: je Penchois Isos Pi-Khristos: av-masf khen Vithleem.\n\nShere et-vaki em-Pennouti: ti-polis ente ni-et-onkh: eph-ma-en-shopi ente ni-thmi: ete tai te Ierousalim.\n\nShere ne o Vithleem: ti-polis ente ni-prophitis: ni-etav-er-prophitevin: ethve ep-jin-misi en-Emmanuel.\n\nA pi-ouoini en-alithinos: shai nan em-foo hon: evol khen Maria ti-parthenos: ti-shelet en-katharos.\n\nMaria as-misi em-Pensotir: pi-mai-romi en-agathos: khen Vithleem ente ti-Ioudea: kata ni-smi ente ni-prophitis.\n\nIsaias pi-prophitis: osh evol khen ou-smi en-thelil: je es-e-misi en-Emmanuel: Pensotir en-agathos.\n\nNi-fi-oui ounof nem ep-kahi thelil: je as-misi nan en-Emmanuel: anon kha ni-khristianos.\n\nEthve fai ten-oi en-ramao: khen ni-agathon et-jik evol: khen ou-nahti ten-er-psalin: en-jo emmos je Allelouia.\n\n(Allelouia): Isos Pi-Khristos Ep-shiri em-Efnouti: av-masf khen Vithleem.\n\nFai ere pi-o-ou er-prepi naf: nem Pef-iot en-agathos: nem Pi-pnevma ethowab: isjen tinou nem sha eneh."
            },
            {
                id: "45.2",
                speaker: "Volk",
                ar: "يقولون في عيد الغطاس...", // (Hier den Text für Epiphanias einfügen, wenn du ihn hast)
                de: "Doxologie für Epiphanias...",
                cop_ar: "...",
                cop_cop: "...",
                ar_de: "...",
                cop_de: "..."
            },
            {
                id: 45,
                sectionTitle: {
                    de: "Doxologie für die Jungfrau Maria",
                    ar: "ذكصلوجيه العدرا"
                },
                speaker: "Volk",
                ar: "طوباك أنت يا مريم، الحكيمة العفيفة، القبة الثانية، الكنز الروحي.\n\nاليمامة النقية، التي نادت في أرضنا، وأينعت لنا، ثمرة الروح.\n\nالروح المعزي، الذي حل على ابنك، في مياه الأردن، كمثال نوح.\n\nلأن تلك الحمامة، هي بشرتنا، بسلام الله، الذي صار للبشر.\n\nوأنت أيضاً يا رجاءنا، اليمامة العقلية، أتيت لنا بالرحمة، وحملته في بطنك.\n\nأي يسوع، المولود من الآب، وُلِدَ لنا منك، وحرَّر جنسنا.\n\nفلنقل هذا، من قلبنا أولاً، وبعد ذلك بلساننا أيضاً، صارخين قائلين:\n\nيا ربنا يسوع المسيح، اجعل لك فينا، هيكلاً لروحك القدوس، يُعطيك تمجيداً.\n\nالسلام لك أيتها العذراء، الملكة الحقيقية الحقانية، السلام لفخر جنسنا، ولدت لنا عمانوئيل.\n\nنسألك أذكرينا، أيتها الشفيعة المؤتمنة، أمام ربنا يسوع المسيح، ليغفر لنا خطايانا.",
                de: "Selig bist du Maria, – die Weise und Reine, – das zweite Heiligtum – und der geistige Schatz.\n\nDie reine Turteltaube, – die in unserem Land rief, – und sie brachte uns – die Frucht des Geistes.\n\nDer Geist, der Tröster, – der auf deinen Sohn herabkam, – auf das Wasser des Jordan – gemäß der Art des Noah.\n\nDenn dies ist die Taube, – sie verkündete uns – den Frieden Gottes, – den die Menschen erfuhren.\n\nDu bist unsere Hoffnung, – die besonnene Turteltaube. – Du brachtest uns das Erbarmen – und trugst es in deinem Leib.\n\nDieser ist Jesus, – geboren aus dem Vater. – Er wurde uns von dir geboren – und befreite unser Geschlecht.\n\nLasst uns das zuerst – mit unserem Herzen sagen, – dann auch mit unserer Zunge, – wobei wir rufen und sprechen:\n\nUnser Herr Jesus Christus – bau dir in uns einen Tempel – für deinen Heiligen Geist, – um dich zu preisen.\n\nGegrüßt seist du! Jungfrau, – die wahre Königin in Wahrheit. – Gegrüßt seist du! Stolz unseres Geschlechts, – du hast uns den Emmanuel geboren.\n\nWir bitten dich, gedenke unser, – du treue Fürsprecherin, – vor unserem Herrn Jesus Christus, – damit er uns unsere Sünden vergibt.",
                cop_ar: "أو نياتي هو ماريا: تي سافي أووه إن سيمني: تي ماه إس نوتي إن إسكيني: بي أهو إم بنيفماتيكون.\n\nتي تشرومبي إثنيسوس: ثي إيطاس موتي خين بين كاهي: أووه أس إين نان إيفول: إم بي أوطاه إنتي بي إبنيفما.\n\nبي إبنيفما إم باراكليتون: في إيطاف إي إيجين بيك شيري: خين ني موؤو إنتي بي يوردانيس: كاطا إب تيبوس إن نوإي.\n\nتي تشرومبي غار إتي إمماف: أس هي شين نوفينان: إن تي هيريني إنتي إفنوتي: ثي إيطاس شوبي شا ني رومي.\n\nإنثو غار بي تين هيلبيس: تي تشرومبي إن نو إيتي: أري إيني نان إم بي ناي: أري فاي خاروف خين تين نيجي.\n\nإيتي فاي بي إيسوس: بي ميسي إيفول خين إفيوت: أف ماسف نان إيفول إن خيتي: أف إر بين جينوس إن ريم هي.\n\nفاي غار مارين جوتف: خين بين هيت إن شورب: نيم نون أون خين بين لاس: إن أوش إيفول إن جو إم موس.\n\nجي بين شويس إيسوس بي إخرستوس: ما ثاميو ناك إن إهري إن خيتين: إن أو إيرفي إنتي بيك إبنيفما إثؤواف: إف تي ذوكصو لوجيا ناك.\n\nشيري ني أو تي بارثينوس: تي أورو إم مي إن أليثيني: شيري إب شوشو إنتي بين جينوس: أري إجفو نان إن إممانوئيل.\n\nتين تيهو أري بين ميفئي: أو تي بروستاتيس إت انهوت: ناهرين بين شويس إيسوس بي إخرستوس: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲱⲟⲩⲛⲓⲁϯ ϩⲱ Ⲙⲁⲣⲓⲁ : ϯⲥⲁⲃⲉ ⲟⲩⲟϩ ⲛ̀ⲥⲉⲙⲛⲏ : ϯⲙⲁϩⲥⲛⲟⲩϯ ⲛ̀ⲥⲕⲏⲛⲏ : ⲡⲓⲁ̀ϩⲟ ⲙ̀ⲡ̀ⲛⲉⲩⲙⲁⲧⲓⲕⲟⲛ.\n\nϮϭⲣⲟⲙⲡⲓ ⲉⲑⲛⲉⲥⲱⲥ : ⲑⲏⲉⲧⲁⲥⲙⲟⲩϯ ϧⲉⲛ ⲡⲉⲛⲕⲁϩⲓ : ⲟⲩⲟϩ ⲁⲥⲉⲛ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ : ⲙ̀ⲡⲓⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ.\n\nⲠⲓⲡ̀ⲛⲉⲩⲙⲁ ⲙ̀ⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ : ⲫⲏⲉⲧⲁϥⲓ̀ ⲉ̀ϫⲉⲛ Ⲡⲉϣⲏⲣⲓ : ϧⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ Ⲡⲓⲓⲟⲣⲇⲁⲛⲏⲥ : ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀Ⲛⲱⲉ̀.\n\nϮϭⲣⲟⲙⲡⲓ ⲅⲁⲣ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ : ⲁⲥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲁⲛ : ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ : ⲑⲏⲉⲧⲁⲥϣⲱⲡⲓ ϣⲁ ⲛⲓⲣⲱⲙⲓ.\n\nⲚ̀ⲑⲟ ⲅⲁⲣ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ : ϯϭⲣⲟⲙⲡⲓ ⲛ̀ⲛⲟⲏⲧⲏ : ⲁ̀ⲣⲉⲓ̀ⲛⲓ ⲛⲁⲛ ⲙ̀ⲡⲓⲛⲁⲓ : ⲁ̀ⲣⲉϥⲁⲓ ϧⲁⲣⲟϥ ϧⲉⲛ ⲧⲉⲛⲉϫⲓ.\n\nⲈⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ : ⲡⲓⲙⲓⲥⲓ ⲉ̀ⲃⲟⲗϧⲉⲛ Ⲫ̀ⲓⲱⲧ : ⲁⲩⲙⲁⲥϥ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏϯ : ⲁϥⲉⲣ ⲡⲉⲛⲅⲉⲛⲟⲥ ⲛ̀ⲣⲉⲙϩⲉ.\n\nⲪⲁⲓ ⲅⲁⲣ ⲙⲁⲣⲉⲛϫⲟⲧϥ : ϧⲉⲛ ⲡⲉⲛϩⲏⲧ ⲛ̀ϣⲟⲣⲡ : ⲛⲉⲙ ⲛⲟⲛ ⲟⲛ ϧⲉⲛ ⲡⲉⲛⲗⲁⲥ : ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.\n\nϪⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲙⲁⲑⲁⲙⲓⲟ̀ ⲛⲁⲕ ⲛ̀ϩ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲉⲛ : ⲛ̀ⲟⲩⲉⲣⲫⲉⲓ ⲛ̀ⲧⲉ Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲉⲩϯⲇⲟⲝⲟⲗⲟⲅⲓⲁ̀ ⲛⲁⲕ.\n\nⲬⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : Ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁ̀ⲣⲉϫⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.\n\nⲦⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Toubak anti ya Mariam, el hakima el 'afifa, el qoba el thania, el kanz el rouhi.\n\nTi-chrompi ethnesos, allati nadat fi ardina, wa ayn'at lana, thamar el rouh.\n\nEl roh el mo'azi, allazi hal 'ala ebnek, fi meyah el Ordon, ka mathal Nouh.\n\nLe ana telka el hamama, hiya basharatna, be salam Allah, allazi sar lel bashar.\n\nWa anti aydan ya raga'na, el hamama el 'aqleya, atayti lana bel rahma, wa hamaltihi fi batnik.\n\nAiy Yasou', el mawloud men el Ab, woleda lana menk, wa harrar jinsana.\n\nFal naqol haza, men qalbina awalan, wa ba'd zalek be lisanina aydan, sarekhin qa'ilin:\n\nYa rabina Yasou' el Masih, eg'al laka fina, haykalan le rouhak el qodos, yo'tik tamjidan.\n\nShere ne o ti-parthenos: ti-ouro em-mei en-alithini: Shere ep-shoushou ente pen-genos: are-jfo nan en-Emmanuel.\n\nTen-tiho ari-pen-mevi: o ti-prostatis et-enhot: nahren Penchois Isos Pi-Khristos: entef-ka nen-novi nan evol.",
                cop_de: "Ouniat ho Maria: ti-save ouoh en-semni: ti-mah-sno-outi en-skini: pi-aho em-pnevmatikon.\n\nTi-chrompi ethnesos: thi-etas-mouti khen pen-kahi: ouoh as-en nan evol: em-pi-outah ente Pi-pnevma.\n\nPi-pnevma em-parakliton: fi-etaf-i ejen Pek-shiri: khen ni-mo-ou ente Pi-Iordanis: kata ep-typos en-Noe.\n\nTi-chrompi gar ete emmav: as-hishen-noufi nan: en-ti-hirini ente Efnouti: thi-etas-shopi sha ni-romi.\n\nNtho ghar pe ten-helpis: ti-chrompi en-no-iti: are-ini nan em-pi-nai: are-fai kharof khen ten-neji.\n\nEte fai pe Isos: pi-misi evol khen Efiot: av-masf nan evol en-khiti: af-er pen-genos en-remhe.\n\nFai gar maren-jotf: khen pen-hit en-shorp: nem non on khen pen-las: en-osh evol en-jo emmos.\n\nJe Penchois Isos Pi-Khristos ma-thamio nak en-hri en-khiten: en-ou-erfei ente Pek-pnevma ethowab: ev-ti-doxologia nak.\n\nShere ne o ti-parthenos: ti-ouro em-mei en-alithini: Shere ep-shoushou ente pen-genos: are-jfo nan en-Emmanuel.\n\nTen-tiho ari-pen-mevi: o ti-prostatis et-enhot: nahren Penchois Isos Pi-Khristos: entef-ka nen-novi nan evol."
            },
            {
                id: 46,
                sectionTitle: {
                    de: "Doxologie für die  himmlischen Heerscharen",
                    ar: "ذكصلوجيه السمائيين"
                },
                speaker: "Volk",
                ar: "سبعة رؤساء ملائكة، وقوف يسبحون، أمام ضابط الكل، يخدمون السر الخفي.\n\nميخائيل هو الأول، غبريال هو الثاني، رافائيل هو الثالث، كمثال الثالوث.\n\nسوريال سداقيال، سراثيال وأنانيال، هؤلاء المنيرون العظماء الأطهار، يطلبون منه عن الخليقة.\n\nالشاروبيم والسرافيم، الكراسي والأرباب والقوات، والأربعة مخلوقات الحية غير المتجسدين، الحاملون مركبة الله.\n\nالأربعة والعشرون قسيساً، في كنيسة الأبكار، يسبحونه بلا فتور، صارخين قائلين:\n\nقدوس الله، المرضى اشفهم. قدوس القوي، الراقدين يا رب نيحهم.\n\nقدوس الذي لا يموت، بارك ميراثك. ولتكن رحمتك وسلامك، حصناً لشعبك.\n\nقدوس، قدوس، قدوس رب الصباؤوت، السماء والأرض مملوءتان، من مجدك وكرامتك.\n\nإذا ما قالوا: هلليلويا، يتبعهم السمائيون قائلين: آمين هلليلويا، المجد لإلهنا.\n\nاشفعوا فينا، أيها العساكر الملائكية، والطغمات السمائية، ليغفر لنا خطايانا.",
                de: "Sieben Erzengel – stehen lobpreisend – vor dem Allmächtigen, – sie dienen dem verborgenen Geheimnis.\n\nMichael ist der erste, – Gabriel ist der zweite, – Raphael ist der dritte, – als Symbol für die Dreifaltigkeit.\n\nSuriel, Sedakiel, Sarathiel und Ananiel – alle diese sind die Strahlenden, Großen und Reinen, – die vor ihm für die Schöpfung bitten.\n\nDie Cherubim, die Seraphim, – die Throne, die Herrschaften, die Mächte – und die vier unleiblichen Lebewesen, – die den Thron Gottes tragen.\n\nDie vierundzwanzig Priester – in der Kirche der Erstgeborenen – preisen ihn ohne Unterlass, – indem sie rufen und sprechen:\n\nHeiliger Gott, – heile die Kranken. – Heiliger Starker, – Herr gib den Entschlafenen die selige Ruhe.\n\nHeiliger Unsterblicher, – segne dein Erbe. – Möge dein Erbarmen und dein Frieden – die Zuflucht deines Volkes sein.\n\nHeilig, heilig, – heilig ist der Herr der Heerscharen. – der Himmel und die Erde sind voll – von deiner Ehre und deinem Ruhm.\n\nWenn sie Halleluja sagen, – folgen ihnen die himmlischen Heerscharen sprechend: – „Amen, Halleluja, – Herrlichkeit sei unserem Gott“.\n\nSeid unsere Fürsprecher, – ihr Heere der Engel – und die himmlischen Heerscharen, – damit er uns unsere Sünden vergibt.",
                cop_ar: "شاشف إن أرشي أنجيلوس: سي أوهي إراتو إف هوس: إم بيمثو إم بي بانتوكراتور: إف شيمشي إم بي ميستيريون إت هيب.\n\nميخائيل بي بي هويت: غافريل بي بي ماه إسناف: رافائيل بي بي ماه شومت: كاطا إب تيبوس إن تي ترياس.\n\nسوريال سداكيال: ساراثيال نيم أنانيال: ناي نيشتي إن ريف إر أو أويني إثؤواف: إف توفه إم موف إي إهري إيجين إب سونت.\n\nني شيروبيم نيم ني سيرافيم: ني ثرونوس ني ميت شويس ني جوم: نيم بي إفتوؤو إن زو أون إن أسوماتوس: إت فاي خا بي هارما إن ثيؤس.\n\nبي جوت أفتو إم بريسفيتيروس: خين تي إك كليسيا إنتي ني شورب إم ميسي: إف إزمو إيروف إن أت خاروؤو: إف أوش إيفول إف جو إم موس.\n\nجي أجيوس أو ثيؤس: ني إت شوني ما طالتشوؤو. أجيوس إيس شيروس: ني إيطاف إنكوت إبشويس ما إمطون نوؤو.\n\nأجيوس أثاناطوس: إزمو إي تيك كلي رونوميا. ماري بيك ناي نيم تيك هيريني: أوي إن سوفت إم بيك لاؤس.\n\nجي إك أواب أووه إك أواب: إك أواب إبشويس سافاؤوت: إت في نيم إب كاهي ميه إيفول: خين بيك أو أو نيم بيك طايو.\n\nأريشان جوس الليلويا: شاري ني إيبورانيون أواهو إن سوؤو إف جو إم موس: جي آمين الليلويا: بي أو أو فا بن نوتي بي.\n\nأري بريسفيفين إي إهري إيجون: ني ستراتيا إن أنجيليكون: نيم ني تاغما إن إيبورانيون: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ϣⲁϣϥ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ : ⲥⲉⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲉⲩϩⲱⲥ : ⲙ̀ⲡⲉⲙⲑⲟ ⲙ̀Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ : ⲉⲩϣⲉⲙϣⲓ ⲙ̀ⲡⲓⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲉⲧϩⲏⲡ.\n\nⲘⲓⲭⲁⲏⲗ ⲡⲉ ⲡⲓϩⲟⲩⲓⲧ : Ⲅⲁⲃⲣⲓⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩⲥⲛⲁⲩ : ⲣⲁⲫⲁⲏⲗ ⲡⲉ ⲡⲓⲙⲁϩϣⲟⲙⲧ : ⲕⲁⲧⲁ ⲡ̀ⲧⲩⲡⲟⲥ ⲛ̀ϯⲦ̀ⲣⲓⲁⲥ.\n\nⲤⲟⲩⲣⲓⲏⲗ Ⲥⲉⲇⲁⲕⲓⲏⲗ : Ⲥⲁⲣⲁⲑⲓⲏⲗ ⲛⲉⲙ Ⲁ̀ⲛⲁⲛⲓⲏⲗ : ⲛⲁⲓⲛⲓϣϯ ⲛ̀ⲣⲉϥⲉⲣⲟⲩⲱⲓⲛⲓ ⲉⲑⲟⲩⲁⲃ : ⲉⲩⲧⲱⲃϩ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡ̀ⲥⲱⲛⲧ.\n\nⲚⲓⲬⲉⲣⲟⲩⲃⲓⲙ ⲛⲉⲙ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ : ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ : ⲛⲉⲙ ⲡⲓϥ̀ⲧⲟⲟⲩ ⲛ̀ⲍⲱⲟⲛ ⲛ̀ⲁ̀ⲥⲱⲙⲁⲧⲟⲥ : ⲉⲧϥⲁⲓ ϧⲁ ⲡⲓϩⲁⲣⲙⲁ ⲛ̀Ⲑⲉⲟⲥ.\n\nⲠⲓϫⲟⲩⲧⲁϥⲧⲟⲩ ⲙ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ϧⲉⲛ ϯⲉⲕⲕⲗⲏⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓϣⲟⲣⲡ ⲙ̀ⲙⲓⲥⲓ : ⲉⲩⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.\n\nϪⲉ ⲁ̀ⲅⲓⲟⲥ ⲟ Ⲑⲉⲟⲥ : ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ : ⲛⲏⲉⲧⲁⲩⲉⲛⲕⲟⲧ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ.\n\nⲀ̀ⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲧⲟⲥ : ⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲉⲕⲕ̀ⲗⲏⲣⲟⲛⲟⲙⲓⲁ̀. Ⲙⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ : ⲟⲓ ⲛ̀ⲥⲟⲃⲧ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ.\n\nϪⲉ ⲉⲕⲟⲩⲁⲃ ⲟⲩⲟϩ ⲉⲕⲟⲩⲁⲃ : ⲉⲕⲟⲩⲁⲃ Ⲡ̀ϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ : ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ̀.\n\nⲀⲣⲉϣⲁⲛϫⲟⲥ Ⲁ̀ⲗⲗⲏⲗⲟⲩⲓⲁ̀ : ϣⲁⲣⲉ ⲛⲓⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ ⲟⲩⲁϩⲟⲩ ⲛ̀ⲥⲱⲟⲩ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ Ⲁ̀ⲙⲏⲛ Ⲁ̀ⲗⲗⲏⲗⲟⲩⲓⲁ̀ : ⲡⲓⲱ̀ⲟⲩ ⲫⲁ Ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ.\n\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲓⲥⲧⲣⲁⲧⲓⲁ̀ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ : ⲛⲉⲙ ⲛⲓⲧⲁⲅⲙⲁ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Sab'at ro'asa' mala'ika, woqouf yosabihoun, amam dabet el kol, yakhdomoun el ser el khafi.\n\nMikhaïl howa el awal, Ghabrial howa el thani, Raphael howa el thales, ka mathal el thalouth.\n\nSourial Sedakial, Sarathial wa Ananial, ha'ola' el moniroun el 'ozama' el athar, yatloboun menho 'an el khaliqa.\n\nEl Cherubim wal Seraphim, el karasi wal arbab wal qowat, wal arba'at makhlouqat el haya ghayr el motagassidin, el hameloun markabat Allah.\n\nEl arba'at wa 'eshroun qasisan, fi kanisat el abkar, yosabihounaho bila fotour, sarekhin qa'ilin:\n\nQodos Allah, el marda eshfehom. Qodos el qawi, el raqedin ya rab nayeh-hom.\n\nQodos allazi la yamout, barek mirathak. Wa ltakon rahmatoka wa salamoka, hosnan le sha'bek.\n\nQodos, Qodos, Qodos rab el saba'out, el sama' wal ard mamlou'atan, men magdika wa karamatik.\n\nEza ma qalou: Hallelouya, yatba'ohom el sama'iyoun qa'ilin: Amin Hallelouya, el magd le ilahina.\n\nEshfa'ou fina, ayoha el 'asaker el mala'ikiya, wal taghmat el sama'iya, li yaghfer lana khatayana.",
                cop_de: "Shashf en-archi-angelos: se-ohi eratou ev-hos: em-pemtho em-pi-pantokrator: ev-shemshi em-pi-mistirion et-hip.\n\nMichael pe pi-houit: Gabriel pe pi-mah-snav: Raphael pe pi-mah-shomt: kata ep-typos en-ti-trias.\n\nSouriel Sedakiel: Sarathiel nem Ananiel: nai-nishti en-ref-er-ouoini ethowab: ev-tovh emmof e-hri ejen ep-sont.\n\nNi-Cherubim nem ni-Seraphim: ni-thronos ni-met-chois ni-jom: nem pi-fto-ou en-zoon en-asomatos: et-fai kha pi-harma en-Theos.\n\nPi-jout-aftou em-presbyteros: khen ti-ekklisia ente ni-shorp em-misi: ev-smou erof en-at-kharo-ou: ev-osh evol ev-jo emmos.\n\nJe Agios o Theos: ni-et-shoni ma-talcho-ou. Agios Ischiros: ni-etav-enkot Epchois ma-emton no-ou.\n\nAgios Athanatos: smou e-tek-klironomia. Mare pek-nai nem tek-hirini: oi en-sovt em-pek-laos.\n\nJe ek-owab ouoh ek-owab: ek-owab Epchois Sabaoth: et-fe nem ep-kahi meh evol: khen pek-o-ou nem pek-taio.\n\nAreshan-jos Alleluia: share ni-epouranion ouahou en-so-ou ev-jo emmos: je Amin Alleluia: pi-o-ou fa Pennouti pe.\n\nAri-presvevin e-hri egon: ni-stratia en-angelikon: nem ni-taghma en-epouranion: entef-ka nen-novi nan evol."
            },
            {
                id: 47,
                sectionTitle: {
                    de: "Doxologie für die Apostel",
                    ar: "ذكصلوجيه الرسل"
                },
                speaker: "Volk",
                ar: "الرب يسوع المسيح، اختار رسله، وهم بطرس واندراوس، ويوحنا ويعقوب.\n\nوفيليبس ومتى، وبرثولماوس وتوما، ويعقوب بن حلفى، وسمعان القانوني.\n\nوتذاوس ومتياس، وبولس ومرقس ولوقا، وبقية التلاميذ، الذين تبعوا مخلصنا.\n\nمتياس الذي صار، عوضاً عن يهوذا، وكمالاً لبقية (التلاميذ)، الذين تبعوا السيد.\n\nخرجت أصواتهم، على وجه الأرض كلها، وبلغ كلامهم، إلى أقطار المسكونة.\n\nأطلبوا من الرب عنا، يا سادتي الآباء الرسل، والسبعون تلميذاً، ليغفر لنا خطايانا.",
                de: "Der Herr Jesus Christus – wählte seine Apostel. – Sie sind Petrus, Andreas, – Johannes und Jakobus.\n\nPhilippus, Matthäus, Bartholomäus, Thomas, – Jakobus, Sohn des Alphäus – und Simon, Kananäus.\n\nThaddäus, Matthias, – Paulus, Markus und Lukas. – Und die übrigen Jünger, – die unserem Erlöser folgten.\n\nMatthias, er ist Ersatz – an der Stelle von Judas. – Und alle übrigen Jünger, – die dem Herrn folgten.\n\nAuf die ganze Erde – ging ihr Schall hinaus – und bis an die Enden des Erdkreises ihre Worte.\n\nBittet beim Herrn für uns – meine Herren und Väter, die Apostel – und die siebzig Jünger, – damit er uns unsere Sünden vergibt.",
                cop_ar: "كيريوس إيسوس بي إخرستوس: أف سوتب إن نيف أبوستولوس: إتي بتروس نيم أندراؤس: يوأنس نيم ياكوفوس.\n\nليبون فيليبوس نيم ماتاؤس: برثولوميؤس نيم ثوماس: ياكوفوس إنتي ألفيؤس: نيم سيمون بي كانانيؤس.\n\nثاديؤس نيم ماتياس: بافلوس نيم ماركوس نيم لوكاس: نيم إبسيبى إنتي ني ماثيتيس: ني إتاف موشي إنسا بين سوتير.\n\nماتياس في إيتاف شوبي: إنت شيفيو إن يوذاس: نيم إبجوك إيفول نيم إبسيبى: إن ني إتاف موشي إنسا دسبوطا.\n\nأ بو خروؤو شيناف إيفول: هيجين إبهو إم إبكاهي تيرف: أووه نو ساجي أف فوه: شا أفريجس إن تي إيكوميني.\n\nتوف إم إبشويس إي إهري إيجون: نا شويس إن يوتي إن أبوستولوس: نيم بي شفي إم ماثيتيس: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁϥⲥⲱⲧⲡ ⲛ̀ⲛⲉϥⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲉ̀ⲧⲉ Ⲡⲉⲧⲣⲟⲥ ⲛⲉⲙ Ⲁⲛ̀ⲇⲣⲉⲁⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲛⲉⲙ Ⲓⲁⲕⲱⲃⲟⲥ.\n\nⲖⲟⲓⲡⲟⲛ Ⲫⲓⲗⲓⲡⲡⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲉⲟⲥ : Ⲃⲁⲣⲑⲟⲗⲟⲙⲉⲟⲥ ⲛⲉⲙ Ⲑⲱⲙⲁⲥ : Ⲓⲁⲕⲱⲃⲟⲥ ⲛ̀ⲧⲉ Ⲁⲗⲫⲉⲟⲥ : ⲛⲉⲙ Ⲥⲓⲙⲱⲛ ⲡⲓⲕⲁⲛⲁⲛⲉⲟⲥ.\n\nⲐⲁⲇⲇⲉⲟⲥ ⲛⲉⲙ Ⲙⲁⲧⲑⲓⲁⲥ : Ⲡⲁⲩⲗⲟⲥ ⲛⲉⲙ Ⲙⲁⲣⲕⲟⲥ ⲛⲉⲙ Ⲗⲟⲩⲕⲁⲥ : ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲑⲏⲧⲏⲥ : ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲡⲉⲛⲥⲱⲧⲏⲣ.\n\nⲘⲁⲧⲑⲓⲁⲥ ⲫⲏⲉⲧⲁϥϣⲱⲡⲓ : ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀Ⲓⲟⲩⲇⲁⲥ : ⲛⲉⲙ ⲡ̀ϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲡ̀ⲥⲉⲡⲓ : ⲛ̀ⲛⲏⲉⲧⲁⲩⲙⲟϣⲓ ⲛ̀ⲥⲁ Ⲇⲉⲥⲡⲟⲧⲁ.\n\nⲀ ⲡⲟⲩϧ̀ⲣⲱⲟⲩ ϣⲉⲛⲁϥ ⲉ̀ⲃⲟⲗ : ϩⲓϫⲉⲛ ⲡ̀ϩⲟ ⲙ̀ⲡ̀ⲕⲁϩⲓ ⲧⲏⲣϥ : ⲟⲩⲟϩ ⲛⲟⲩⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛⲉⲙ ⲡⲓϣ̀ⲃⲉ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "El Rab Yasou' el Masih, ekhtar rosolaho, wa hom Botros wa Andraos, wa Youhanna wa Ya'qub.\n\nWa Philippos wa Matta, wa Bartholomaos wa Thomas, wa Ya'qub ben Halfa, wa Sem'an el qanouni.\n\nWa Thaddaos wa Matthias, wa Pavlos wa Markos wa Loqa, wa baqiyat el talamiz, allazina taba'ou mokhalisana.\n\nMatthias allazi sar, 'ewadan 'an Yahoza, wa kamalan le baqiyat (el talamiz), allazina taba'ou el Sayed.\n\nKharagat aswatohom, 'ala wagh el ard kolaha, wa balagha kalamohom, ila aqtar el maskouna.\n\nOtlobou men el Rab 'anna, ya sadati el aba' el rosol, wal sab'oun tilmizan, li yaghfer lana khatayana.",
                cop_de: "Kyrios Isos Pi-Khristos: af-sotp en-nef-apostolos: ete Petros nem Andreas: Ioannis nem Iakobos.\n\nLipon Filippos nem Matheos: Bartholomeos nem Thomas: Iakobos ente Alpheos: nem Simon pi-kananeos.\n\nThaddeos nem Mathias: Pavlos nem Markos nem Loukas: nem ep-sepi ente ni-mathitis: ni-etav-moshi ensa Pensotir.\n\nMathias fi-etaf-shopi: en-t-shevio en-Ioudas: nem ep-jok evol nem ep-sepi: en-ni-etav-moshi ensa Despota.\n\nA pou-khro-ou shenaf evol: hijen ep-ho em-ep-kahi tirf: ouoh nou-saji av-foh: sha av-rigs en-ti-oikoumeni.\n\nTovh em-Pchois e-hri ejon: na-chois en-ioti en-apostolos: nem pi-shve em-mathitis: entef-ka nen-novi nan evol."
            },
            {
                id: 48,
                sectionTitle: {
                    de: "Doxologie für den heiligen Markus,den Apostel",
                    ar: "ذكصلوجيه مار مرقس"
                },
                speaker: "Volk",
                ar: "يا مرقس الرسول، والإنجيلي، الشاهد لآلام، الإله الوحيد الجنس.\n\nأتيـت وأنـرت لنـا، بإنجيـلك، وعلمتنـا الآب والابن، والروح القُدُس.\n\nوأخرجتنـا مـن الظلمـة، إلـى النـور الحقيقـي، وأطعمتنـا خُبـز الحيـاة، الـذي نـزل مـن السَّمـاء.\n\nتباركـت بـك، كُـلّ قبائـل الأرض، وأقوالـك بلغـت، إلـى أقطـار المسكونـة.\n\nالسـلام لـك أيهـا الشهيـد، السـلام للإنجيلـي، السـلام للرسـول، مرقـس ناظـر الالـه.\n\nأطلـب مـن الـربِّ عنـا، يـا ناظـر الإلـه الإنجيلـي، مرقـس الرسـول، ليغفـر لنـا خطايانـا.",
                de: "Markus der Apostel – und der Evangelist, – der Zeuge der Leiden – des eingeborenen Gottes wurde.\n\nDu bist gekommen und hast uns – durch dein Evangelium erleuchtet, – und lehrtest uns den Vater und den Sohn – und den Heiligen Geist.\n\nDu hast uns von der Finsternis – in das wahre Licht herausgeführt, – und hast uns ernährt mit dem Brot des Lebens, – das vom Himmel herabgekommen ist.\n\nAlle Stämme der Erde – wurden durch dich gesegnet, – und deine Worte erreichten – die ganze Welt.\n\nGegrüßt seist du, o Märtyrer, – gegrüßt seist du, Evangelist, – gegrüßt sei der Apostel, – Abba Markus, der Gotteseher.\n\nBitte beim Herrn für uns, – Gotteseher und Evangelist, – Abba Markus, der Apostel, – damit er uns unsere Sünden vergibt.",
                cop_ar: "ماركوس بي أبوستولوس: أووه بي إف أنجيليستيس: بي ميثري خا ني إمكاه: إنتي بي مونو جينيس إنس نوتي.\n\nأك إي أك إر أو أويني إيرون: هيتين بيك إف أنجيليون: أك تسافون إم إفيوت نيم إبشيري: نيم بي إبنيفما إثؤواف.\n\nأك إنتين إيفول خين إب خاكي: إي خون إي بي أو أويني إم مي: أك تيممون إم بي أويك إنتي إب أونخ: إيطاف إي إيبيسيت إيفول خين إتفي.\n\nأف تشي إزمو إن إهري إن خيتك: إنجي ني فيلي تيرو إنتي إب كاهي: أووه نيك ساجي أف فوه: شا أفريجس إن تي إيكوميني.\n\nشيري ناك أو بي مارتيروس: شيري بي إف أنجيليستيس: شيري بي أبوستولوس: آفا ماركوس بي ثيؤريموس.\n\nتوف إم إبشويس إي إهري إيجون: أو بي ثيؤريموس إن إف أنجيليستيس: آفا ماركوس بي أبوستولوس: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲟⲩⲟϩ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ⲡⲓⲙⲉⲑⲣⲉ ϧⲁ ⲛⲓⲙ̀ⲕⲁϩ : ⲛ̀ⲧⲉ ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀ⲛⲟⲩϯ.\n\nⲀⲕⲓ̀ ⲁⲕⲉⲣⲟⲩⲱⲓⲛⲓ ⲉ̀ⲣⲟⲛ : ϩⲓⲧⲉⲛ ⲡⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ : ⲁⲕⲧ̀ⲥⲁⲃⲟⲛ ⲙ̀Ⲫ̀ⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.\n\nⲀⲕⲉⲛⲧⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲭⲁⲕⲓ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ : ⲁⲕⲧⲉⲙⲙⲟⲛ ⲙ̀ⲡⲓⲱⲓⲕ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛϧ : ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ.\n\nⲀⲩϭⲓⲥ̀ⲙⲟⲩ ⲛ̀ϩ̀ⲣⲏⲓ ⲛ̀ϧⲏⲧⲕ : ⲛ̀ϫⲉ ⲛⲓⲫⲩⲗⲏ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ : ⲟⲩⲟϩ ⲛⲉⲕⲥⲁϫⲓ ⲁⲩⲫⲟϩ : ϣⲁ ⲁⲩⲣⲏϫⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲑⲉⲱⲣⲓⲙⲟⲥ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲑⲉⲱⲣⲓⲙⲟⲥ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ : ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Markos pi apostolos, wa pi evangelistis, pi methre kha ni emkah, ente pi monogenis en nouti.\n\nAk i ak er o oini eron, hiten pek evangelion, ak tsavon em Efiot nem Ep shiri, nem Pi pnevma ethowab.\n\nAk enten evol khen ep khaki, e khoun e pi o oini em mei, ak temmon em pi oik ente ep onkh, etaf i e pesit evol khen etfe.\n\nAv chi ezmo en hri en khitk, enje ni fyli tirou ente ep kahi, ooh nek sagi av foh, sha av rigs en ti oikoumeni.\n\nShere nak o pi martyros, shere pi evangelistis, shere pi apostolos, Abba Markos pi theorimos.\n\nTovh em Epchois e hri egon, o pi theorimos en evangelistis, Abba Markos pi apostolos, entef ka nen novi nan evol.",
                cop_de: "Markos pi-apostolos: ouoh pi-evangelistis: pi-methre kha ni-emkah: ente pi-monogenis ennouti.\n\nAk-i ak-er-ouoini eron: hiten pek-evangelion: ak-tsavon em-Efiot nem Ep-shiri: nem Pi-pnevma ethowab.\n\nAk-enten evol khen ep-khaki: e-khoun e-pi-ouoini em-mei: ak-temmon em-pi-oik ente ep-onkh: etaf-i e-pesit evol-khen et-fe.\n\nAv-chi-smou en-hri en-khitk: enje ni-fyli tirou ente ep-kahi: ouoh nek-saji av-foh: sha av-rigs en-ti-oikoumeni.\n\nShere nak o pi-martyros: Shere pi-evangelistis: Shere pi-apostolos: Abba Markos pi-theorimos.\n\nTovh em-Pchois e-hri ejon: o pi-theorimos en-evangelistis: Abba Markos pi-apostolos: entef-ka nen-novi nan evol."
            },
            {
                id: "menu_saints",
                type: "selection_menu",
                title: "Doxologien der Heiligen / ذكصولوجيات القديسين",
                description: "Wähle die Doxologien für die Heiligen des Tages.",
                feasts: [], // Leer lassen
                saints: [
                    { id: "48.1", de: "Hl. Stephanus", ar: "القديس إسطفانوس" },
                    { id: "48.2", de: "Hl. Georg", ar: "الشهيد مار جرجس" },
                    { id: "48.3", de: "Hl. Philopater Merkurius", ar: "الشهيد فيلوباتير مرقوريوس" },
                    { id: "48.4", de: "Hl. Mina", ar: "الشهيد مار مينا" },
                    { id: "48.5", ar: "الأنبا أنطونيوس والأنبا بولا", de: "Hl. Antonius & Hl. Paulus" }, { id: "48.6", de: "Hl. Mose der Schwarze", ar: "الأنبا موسى الأسود" },
                    { id: "48.7", de: "Hl. Papst Kyrillus VI.", ar: "البابا كيرلس السادس" },
                    { id: "48.8", de: "Hl. Johannes der Täufer (2)", ar: "السابق يوحنا المعمدان (2)" },
                    { id: "48.9", de: "Hl. Johannes der Täufer (1)", ar: "السابق يوحنا المعمدان (1)" },
                    { id: "48.10", de: "Erzengel Michael", ar: "رئيس الملائكة ميخائيل" }
                ]
            },

            // 2. Hier folgen die Inhalte der Heiligen-Doxologien (werden nur angezeigt, wenn ausgewählt)

            // Stephanus
            {
                id: "48.1",
                speaker: "Volk",
                ar: "الشهيد المكرم، الذي لربنا يسوع المسيح، القديس إسطفانوس، الذي تأويله الإكليل.\n\nالذي كشف له الله، أسراراً عظيمة، واستنار وجهه، مثل وجه ملاك.\n\nالذي رأى السموات مفتوحة، وربنا يسوع عن يمين أبيه، والذين يرجمونه، كان يطلب عن خلاصهم.\n\nصارخاً قائلاً: يا ربي يسوع المسيح، اقبل روحي إليك، ولا تحسب هذه الخطية على هؤلاء الناس.\n\nلأنهم لا يدرون، ماذا يصنعون، من أجل عمى قلوبهم، يا رب لا تبكتهم.\n\nأكمل سعيه، ومات على الحق، ولبس إكليل الشهادة، غير المضمحل.\n\nالسلام لك أيها المجاهد، الذي لربنا يسوع المسيح، القديس إسطفانوس، الذي تأويله الإكليل.\n\nأطلب من الرب عنا، يا رئيس الشمامسة المبارك، إسطفانوس الشهيد الأول، ليغفر لنا خطايانا.",
                de: "Der gerühmte Märtyrer – unseres Herrn Jesus Christus, – der heilige Stephanus, – dessen Name Krone bedeutet.\n\nDer, dem Gott – große Geheimnisse offenbarte. – Sein Gesicht leuchtete – wie das Gesicht eines Engels.\n\nEr, der die Himmel offen sah – und unseren Herrn Jesus zur Rechten seines Vaters. – Er betete für die Erlösung derjenigen, – die ihn gesteinigt haben.\n\nIndem er rief und sprach: – „Mein Herr Jesus Christus, – nimm meinen Geist zu dir – und rechne diese Sünde diesen Menschen nicht an“.\n\nDenn sie wissen nicht – was sie tun, – wegen ihrer verschlossenen Herzen. – Herr tadele sie nicht.\n\nEr hat seinen Lauf des Lebens vollendet – und starb in Gerechtigkeit – und erlangte die unvergängliche – Krone des Martyriums.\n\nGegrüßt seist du, Strebsamer – unseres Herrn Jesus Christus, – der heilige Stephanus, – dessen Name Krone heißt.\n\nBitte beim Herrn für uns, – gesegneter Archidiakon – Stephanus, der erste Märtyrer, – damit er uns unsere Sünden vergibt.",
                cop_ar: "في إتطايوت إمارتيروس: إنتى بينشويس إيسوس بخرستوس: في إثؤاب إستيفانو: إيتى بيف أوؤهيم بي بي أكلوم.\n\nفي إيطا إفنوتى تشورب إيروف: إن هان نيشتى إمميستيريون: أفتشيييق أوينى إنجى بيفهو: إم إفريتى إم إبهو إنؤ أنجيلوس.\n\nفي إيطاف ناف إي نيفياؤى إفؤين: أووه باشويس إيسوس سا أوينام إمبيف يوت: ني إيطاف هيونى إيجوف: ناف طوفه إنسا بوؤجاى.\n\nإفؤش إيفول إفجو إمموس: جي باشويس إيسوس بخرستوس: شيب با إبنفما إيروك: إمبيريب باى نوفى ايناى رومى.\n\nجي إنسيسوؤن إن إهلى آن: خين ني إيتو إيرى إمموف: إثفى بى ثوم انتى بوهيت: إبشويس إمبير سوهى إمموف.\n\nبيف إذورموس أفجو كف إيفول: أووه أفمو ايجين تي ميثمى: أفنيرفورين امبى إكلوم إن آتلوم: انتى تى ميتمارتيروس.\n\nشيرى ناك أوبى أثليتيس: إنتى بينشويس إيسوس بخرستوس: في إثؤاب إستيفانوس: إيتى بيف أوؤهيم بى بى إكلوم.\n\nطوفه إمبشويس إى إهرى إيجون: أوبى أرشى ذياكون إت إسماروؤت: إستيفانوس بى شورب إمارتيروس: إنتيف كانين نوفى نان إيفول.",
                cop_cop: "Ⲫⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲏⲓ : ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲥⲧⲉⲫⲁⲛⲟⲥ : ⲉ̀ⲧⲉ ⲡⲉϥⲟⲩⲱϩⲉⲙ ⲡⲉ ⲡⲓⲭ̀ⲗⲟⲙ.\n\nⲪⲏⲉⲧⲁ Ⲫ̀ⲛⲟⲩϯ ⲟⲩⲱⲛϩ ⲉ̀ⲣⲟϥ : ⲛ̀ϩⲁⲛⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ : ⲁ ⲡⲉϥϩⲟ ⲉⲣⲟⲩⲱⲓⲛⲓ : ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡ̀ϩⲟ ⲛ̀ⲟⲩⲁⲅⲅⲉⲗⲟⲥ.\n\nⲪⲏⲉⲧⲁϥⲛⲁⲩ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉⲩⲟⲩⲏⲛ : ⲟⲩⲟϩ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ ⲥⲁⲟⲩⲓⲛⲁⲙ ⲙ̀Ⲡⲉϥⲓⲱⲧ : ⲛⲏⲉⲧϩⲓⲱ̀ⲛⲓ ⲉ̀ϫⲱϥ : ⲛⲁϥⲧⲱⲃϩ ⲛ̀ⲥⲁ ⲡⲟⲩⲟⲩϫⲁⲓ.\n\nⲈϥⲱϣ ⲉ̀ⲃⲟⲗ ⲉϥϫⲱ ⲙ̀ⲙⲟⲥ : ϫⲉ Ⲡⲁϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ϣⲱⲡ ⲡⲁⲡ̀ⲛⲉⲩⲙⲁ ⲉ̀ⲣⲟⲕ : ⲙ̀ⲡⲉⲣⲉⲡ ⲡⲁⲓⲛⲟⲃⲓ ⲉ̀ⲛⲁⲓⲣⲱⲙⲓ.\n\nϪⲉ ⲛ̀ⲥⲉⲥⲱⲟⲩⲛ ⲅⲁⲣ ⲁⲛ : ⲙ̀ⲡⲉⲧⲟⲩⲓ̀ⲣⲓ ⲙ̀ⲙⲟϥ : ⲉⲑⲃⲉ ⲡ̀ⲑⲱⲙ ⲛ̀ⲧⲉ ⲡⲟⲩϩⲏⲧ : Ⲡ̀ϭⲟⲓⲥ ⲙ̀ⲡⲉⲣⲥⲟϩⲓ ⲙ̀ⲙⲱⲟⲩ.\n\nⲠⲉϥⲇⲣⲟⲙⲟⲥ ⲁϥϫⲟⲕϥ ⲉ̀ⲃⲟⲗ : ⲟⲩⲟϩ ⲁϥⲙⲟⲩ ϧⲉⲛ ϯⲙⲉⲑⲙⲏⲓ : ⲁϥⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ : ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲏⲧⲏⲥ : ⲛ̀ⲧⲉ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲥⲧⲉⲫⲁⲛⲟⲥ : ⲉ̀ⲧⲉ ⲡⲉϥⲟⲩⲱϩⲉⲙ ⲡⲉ ⲡⲓⲭ̀ⲗⲟⲙ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲁⲣⲭⲏⲇⲓⲁⲕⲱⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ : Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓϣⲟⲣⲡ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "El shahid el mokaram, allazi le rabina Yasou' el Masih, el qadis Estefanos, allazi ta'wiloho el eklil.\n\nAllazi kashafa laho Allah, asraran 'azima, wastanara wagh-ho, methla wagh malak.\n\nAllazi ra'a el samawat maftouha, wa rabina Yasou' 'an yamin abih, wallazina yargomonaho, kana yatlob 'an khalasihim.\n\nSarekhan qa'ilan: ya rabbi Yasou' el Masih, eqbal rouhi elayk, wa la tahseb hazihi el khatiya 'ala ha'ola' el nas.\n\nLe annahom la yadroun, maza yasna'oun, men agl 'ama qoloubihim, ya rab la toba-kethom.\n\nAkmal sa'yaho, wa mata 'ala el haq, wa labesa eklil el shahada, ghayr el modmahel.\n\nEl salam laka ayoha el mgahed, allazi le rabina Yasou' el Masih, el qadis Estefanos, allazi ta'wiloho el eklil.\n\nOtlob men el Rab 'anna, ya ra'is el shamamsa el mobarak, Estefanos el shahid el awal, li yaghfer lana khatayana.",
                cop_de: "Phi-et-ta-i-out em-martyros: ente Penchois Isos Pi-Khristos: fi-ethowab Stefanos: ete pef-ouohem pe pi-khlom.\n\nFi-eta Efnouti o-onh erof: en-han-nishti em-mistirion: a pef-ho er-ouoini: em-phriti em-pho en-ou-angelos.\n\nFi-etaf-nav e-ni-fi-oui ev-ouin: ouoh Penchois Isos sa-ouinam em-Pefiot: ni-et-hi-oni ejof: naf-tovh en-sa pou-oujai.\n\nEv-osh evol ev-jo emmos: je Pa-Chois Isos Pi-Khristos: shop pa-pnevma erok: emper-ep pai-novi e-nai-romi.\n\nJe en-se-so-oun gar an: m-pet-ou-iri mmof: ethve ep-thom nte pou-hit: Epchois emper-sohi emmo-ou.\n\nPef-dromos af-jokf evol: ouoh af-mou khen t-methmi: af-er-phorin em-pi-khlom en-at-lom: ente t-met-martyros.\n\nShere nak o pi-athlitits: ente Penchois Isos Pi-Khristos: fi-ethowab Stefanos: ete pef-ouohem pe pi-khlom.\n\nTovh em-Pchois e-hri ejon: o pi-arkhi-diakon et-smarout: Stefanos pi-shorp em-martyros: entef-ka nen-novi nan evol."
            },

            // Georg
            {
                id: "48.2",
                speaker: "Volk",
                ar: "سبع سنين أكملها، القديس جيورجيوس، السبعون ملكاً المنافقون، يحكمون عليه كُلّ يوم.\n\nولم يقدروا أن يميلوا أفكاره، ولا إيمانه المستقيم، ولا عظم محبته، في الملك المسيح.\n\nوكان يُرتّل مع داود قائلاً: أحاطت بي جميع الأمم، لكن بإسم يَسُوع إلهي، انتقمتُ منهم.\n\nعظيمة هي كرامتك، يا سيدي الملك جيورجيوس، المسيح يفرح معك، في أورشليم السمائية.\n\nالسلام لك أيها الشهيد، السلام للشجاع المجاهد، السلام للابس الجهاد، سيدي الملك جيورجيوس.\n\nأطلب من الرب عنا، أيها الشهيد المجاهد، سيدي الملك جيورجيوس، ليغفر لنا خطايانا.",
                de: "Sieben volle Jahre lang, – wurde der heilige Georg – von siebzig ungerechten Königen – täglich gerichtet.\n\nSie konnten seine Gedanken nicht ändern, – noch seinen rechten Glauben beugen, – noch seine grosse Liebe – für Christus, den König.\n\nEr sang wie David: – „Alle Völkerschaften umringten mich, – im Namen Jesu, meines Herrn – wehrte ich sie ab.“\n\nGross ist dein Ruhm, – o mein Herr König Georg, – Christus freut sich an dir – im himmlischen Jerusalem.\n\nGegrüßt seist du, o Märtyrer, – gegrüßt sei der mutige Held, – gegrüßt sei der Strebsame, – mein Herr, der König Georg.\n\nBitte beim Herrn für uns, – Strebsamer und Märtyrer – mein Herr, König Georg, – damit er uns unsere Sünden vergibt.",
                cop_ar: "شاشف إنرومبى أفجو كو إيفول: إنجى فى إثؤاب جيؤرجيوس: إيرى بى إشفى إنؤرو إن آنوموس: إفتيها ب إيروف إممينى.\n\nإمبو إشفونه امبيف لوجيسموس: أوذى بيف ناهتى إتسوتون: أوذى تيف نيشتى إن أغابى: إيخون إبؤرو بى إخرستوس.\n\nناف إيربسالين نيم دافيد: جى أف كوتى إيروى إنجى نى إثنوس تيرو: اللا خين إفران إن إيسوس بانوتى: آيتشى إمباتشى إم ابشش نيموؤ.\n\nأونيشتى غار بى بيك طايو: أوباشويس إبؤرو جيؤرجيوس: إيرى بخرستوس راشى نيماك: خين ييروساليم إنتى إتفى.\n\nشيرى ناك أو بى مارتيروس: شيرى بى تشويج إن جينؤس: شيرى بى أثلوفوروس: باشويس إبؤرو جيؤرجيوس.\n\nطوفه إمبشويس إى إهرى إيجون: وبى أثلوفوروس إمارتيروس: باشويس إبؤرو جيؤرجيوس: إنتيف كانين نوفى نان إيفول.",
                cop_cop: "Ϣⲁϣϥ ⲛ̀ⲣⲟⲙⲡⲓ ⲁϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ : ⲛ̀ϫⲉ ⲫⲏⲉⲑⲟⲩⲁⲃ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ ⲡⲓϣ̀ⲃⲉ ⲛ̀ⲟⲩⲣⲟ ⲛ̀ⲁ̀ⲛⲟⲙⲟⲥ : ⲉⲩϯϩⲁⲡ ⲉ̀ⲣⲟϥ ⲙ̀ⲙⲏⲛⲓ.\n\nⲘ̀ⲡⲟⲩϣ̀ⲫⲱⲛϩ ⲙ̀ⲡⲉϥⲗⲟⲅⲓⲥⲙⲟⲥ : ⲟⲩⲇⲉ ⲡⲉϥⲛⲁϩϯ ⲉⲧⲥⲟⲩⲧⲱⲛ : ⲟⲩⲇⲉ ⲧⲉϥⲛⲓϣϯ ⲛ̀ⲁ̀ⲅⲁⲡⲏ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡ̀ⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\n\nⲚⲁϥⲉⲣⲯⲁⲗⲓⲛ ⲛⲉⲙ Ⲇⲁⲩⲓⲇ : ϫⲉ ⲁⲩⲕⲱϯ ⲉ̀ⲣⲟⲓ ⲛ̀ϫⲉ ⲛⲓⲉⲑⲛⲟⲥ ⲧⲏⲣⲟⲩ : ⲁⲗⲗⲁ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡⲁϭⲟⲓⲥ Ⲡⲁⲛⲟⲩϯ : ⲁⲓϭⲓ ⲙ̀ⲡⲁϭⲓ ⲙ̀ⲡⲟⲩⲙ̀ϣⲓϣ.\n\nⲞⲩⲛⲓϣϯ ⲅⲁⲣ ⲡⲉ ⲡⲉⲕⲧⲁⲓⲟ̀ : ⲱ̀ ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲉ̀ⲣⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲣⲁϣⲓ ⲛⲉⲙⲁⲕ : ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲁϭⲟⲓⲥ ⲡ̀ⲟⲩⲣⲟ Ⲅⲉⲱⲣⲅⲓⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Sab'a senin akmalaha, el qadis Georgios, el sab'oun malikan el monafiqoun, yahkomoun 'alayhi kol yawm.\n\nWa lam yaqderou an yomilou afkaraho, wa la imanaho el mostaqim, wa la 'ozm mahabatihi, fi el malek el Masih.\n\nWa kana yorattel ma'a Dawoud qa'ilan: ahatat bi jami' el omam, laken be esm Yasou' ilahi, entaqamto menhom.\n\n'Azima hiya karamatoka, ya sayedi el malek Georgios, el Masih yafrah ma'ak, fi Orashalim el sama'iya.\n\nEl salam laka ayoha el shahid, el salam lel shoga' el mogahed, el salam le labes el jihad, sayedi el malek Georgios.\n\nOtlob men el Rab 'anna, ayoha el shahid el mogahed, sayedi el malek Georgios, li yaghfer lana khatayana.",
                cop_de: "Shashf en-rompi af-jok-ou evol: enje fi-ethowab Georgios: ere pi-shve en-ouro en-anomos: ev-ti-hap erof mmini.\n\nEmpou-sh-phonh em-pef-logismos: oude pef-nahti et-souton: oude tef-nishti en-aghapi: e-khoun e-pouro Pi-Khristos.\n\nNaf-er-psalin nem David: je av-koti eroi enje ni-ethnos tirou: alla khen fran em-Pa-chois Panouti: a-i-chi em-pa-chi em-pou-mishish.\n\nOu-nishti gar pe pek-taio: o pa-chois ep-ouro Georgios: ere Pi-Khristos rashi nemak: khen Ierousalim ente et-fe.\n\nShere nak o pi-martyros: Shere pi-shouja en-genneos: Shere pi-athlo-phoros: pa-chois ep-ouro Georgios.\n\nTovh em-Pchois e-hri ejon: o pi-athlo-phoros em-martyros: pa-chois ep-ouro Georgios: entef-ka nen-novi nan evol."
            },
            {
                id: "48.3",
                speaker: "Volk",
                ar: "محب الآب مرقوريوس، القوي بالمسيح، لبس الخوذة، وكُلّ سلاح الإيمان.\n\nوأخذ بيده، السيف ذا الحدين، الذي ثبته ملاك الرب، في يده اليمنى.\n\nمضى إلي الحرب، بقوة المسيح، وقتل البربر، بجراحات عظيمة.\n\nترفع عن الأرضيات، وطلب السمائيات، وجاهد، في ميدان الشهادة.\n\nأخزى داكيوس، الملك المنافق، بصبره العظيم، وتعب العذابات.\n\nوبهذا لبس إكليل، الشهادة غير المضمحل، وعيد مع جميع القديسين، في كورة الأحياء.\n\nالسلام لك أيها الشهيد، السلام للشجاع البطل، السلام للمجاهد، محب الآب مرقوريوس.\n\nأطلب من الربّ عنا، أيها الشهيد المجاهد، محب الآب مرقوريوس، ليغفر لنا خطايانا.",
                de: "Philopater Merkourius, – der der Starke in Christus ist, – er trug den Helm – und die ganze Waffenrüstung des Glaubens.\n\nEr nahm ein zweischneidiges Schwert zur Hand, – das ihm der Engel Gottes – in seine Rechte gegeben hatte.\n\nEr zog in den Kampf – mit der Kraft Christi – und setzte den Barbaren – tödliche Wunden zu.\n\nEr erhob sich über alles Irdische – und trachtete nach dem Himmlischen. – Er begab sich an den Ort – des Martyriums.\n\nEr stellte den heuchlerischen Kaiser Decius bloß, – durch seine große Geduld – und inmitten seiner qualvollen Schmerzen.\n\nSo erlangte er die unvergängliche Krone – des Martyriums – und feierte mit allen Heiligen – im Land der Lebendigen.\n\nGegrüßt seist du, o Märtyrer; – gegrüßt sei der mutige Held, – gegrüßt sei der Strebsame, – Philopater Merkourius.\n\nBitte beim Herrn für uns, – o Strebsamer und Märtyrer – Philopater Merkourius, – damit er uns unsere Sünden vergibt.",
                cop_ar: "فيلوباتير ميركوريوس: بى ريم إنجوم انتى بخرستوس: أفتى هيوتف إنتى بانوبوليا: نيم بى خوك تيرف انتى بى ناهتى.\n\nأووه أفتشى خين تيف جيج: إن تسى سيفى إنرو إسناف: ثى إيطابى أنجيلوس: انتى إبشويس طاجروس: خين تيف جيج إنؤينام.\n\nأفشناف إى بى بوليموس: خين تى جوم إنتى بخرستوس: افشارى إينيبارباروس: خين أونيشتى إن إرخوت.\n\nأفير نيمفين إيفول هانا إبكاهى: أووه إفكوتى إينا نى فيؤيى: أفتشوجى خين بى إسطاذى أون: انتى تى ميت مارتيروس.\n\nأفتى شيبى إن ديكيوس: بى أورو إن آسيفيس: هيتين تيف نيشتى إنهيبومونى: نيم إبخيسى انتى نى فاسانوس.\n\nخين ناى أفئيرفورين إمبى إكلوم إتآتلوم: إنتى تى ميت مارتيروس: أفئيرشاى نيم نى إثؤاب تيرو: خين إتخورا إنتى نى إتؤنخ.\n\nشيرى ناك أوبى مارتيروس: شيرى بى تشويج إنجين نيؤس: شيرى بى أتلوفوروس: فيلوباتير ميركوريوس.\n\nطوبه إم إبتشويس إ إهرى إيجون : أو بي أثلوفوروس إممارتيروس : فيلوباتير ميركوريوس : إنتيف كا نين نوفي نان إفول.",
                cop_cop: "Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ : ⲡⲓⲣⲉⲙⲛ̀ϫⲟⲙ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁϥϯϩⲓⲱⲧϥ ⲛ̀ϯⲡⲉⲣⲓⲕⲉⲫⲁⲗⲉⲁ̀ : ⲛⲉⲙ ⲡⲓⲥⲱⲕ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ.\n\nⲞⲩⲟϩ ⲁϥϭⲓ ϧⲉⲛ ⲧⲉϥϫⲓϫ : ⲛ̀ϯⲥⲏϥⲓ ⲛ̀ⲣⲟⲥⲛⲁⲩ : ⲑⲏⲉ̀ⲧⲁ ⲡⲓⲁⲅⲅⲉⲗⲟⲥ ⲛ̀ⲧⲉ Ⲡ̀ϭⲟⲓⲥ ⲧⲁϫⲣⲟⲥ : ϧⲉⲛ ⲧⲉϥϫⲓϫ ⲛ̀ⲟⲩⲓⲛⲁⲙ.\n\nⲀϥϣⲉⲛⲁϥ ⲉ̀ⲡⲡⲟⲗⲉⲙⲟⲥ : ϧⲉⲛ ϯϫⲟⲙ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲁϥϣⲁⲣⲓ ⲉ̀ⲛⲓⲂⲁⲣⲃⲁⲣⲟⲥ : ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲉⲣϧⲟⲧ.\n\nⲀϥⲉⲣϩⲩⲯⲓⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲛⲁ ⲡ̀ⲕⲁϩⲓ : ⲟⲩⲟϩ ⲁϥⲕⲱϯ ⲛ̀ⲥⲁ ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲁϥⲃⲱⲕ ϧⲉⲛ ⲡⲓⲥⲧⲁⲇⲓⲟⲛ : ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ.\n\nⲀϥϯϣⲓⲡⲓ ⲛ̀Ⲇⲉⲕⲓⲟⲥ : ⲡⲓⲟⲩⲣⲟ ⲛ̀ⲁ̀ⲥⲉⲃⲏⲥ : ϩⲓⲧⲉⲛ ⲧⲉϥⲛⲓϣϯ ⲛ̀ϩⲩⲡⲟⲙⲟⲛⲏ : ⲛⲉⲙ ⲡⲓϩⲓⲥⲓ ⲛ̀ⲧⲉ ⲛⲓⲃⲁⲥⲁⲛⲟⲥ.\n\nϦⲉⲛ ⲛⲁⲓ ⲁϥⲉⲣⲫⲟⲣⲓⲛ : ⲙ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲁⲧⲗⲱⲙ : ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲁⲣⲧⲩⲣⲟⲥ : ⲁϥⲉⲣϣⲁⲓ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ : ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲟⲛϧ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ : Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : Ⲫⲓⲗⲟⲡⲁⲧⲏⲣ Ⲙⲉⲣⲕⲟⲩⲣⲓⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Moheb el Ab Merkourios, el qawi bel Masih, labes el khouza, wa kol selah el iman.\n\nWa akhaza be yadehi, el sayf za el haddayn, allazi thabbataho malak el rab, fi yadehi el yomna.\n\nMada ila el harb, be qowat el Masih, wa qatal el barbar, be garahat 'azima.\n\nTaraffa' 'an el ardiyat, wa talab el sama'iyat, wa gahad, fi maydan el shahada.\n\nAkhza Dekios, el malek el monafeq, be sabrihi el 'azim, wa ta'ab el 'azabat.\n\nWa behaza labesa eklil, el shahada ghayr el modmahel, wa 'ayad ma'a jami' el qadisin, fi korat el ahya'.\n\nEl salam laka ayoha el shahid, el salam lel shoga' el batal, el salam lel mogahed, moheb el ab Merkourios.\n\nOtlob men el Rab 'anna, ayoha el shahid el mogahed, moheb el ab Merkourios, li yaghfer lana khatayana.",
                cop_de: "Philopatir Merkourios: pi-rem-en-jom ente Pi-Khristos: af-ti-hiotf en-t-perikefalea: nem pi-sok tirf ente pi-nahti.\n\nOuoh af-chi khen tef-jij: en-t-sifi en-ro-snav: thi-eta pi-angelos ente Pchois tajros: khen tef-jij en-ouinam.\n\nAf-shenaf ep-polemos: khen t-jom ente Pi-Khristos: af-shari e-ni-varvaros: khen ou-nishti en-erphot.\n\nAf-er-hufin evol-ha na pi-kahi: ouoh af-koti ensa na ni-fi-oui: af-voki khen pi-stadion: ente t-met-martyros.\n\nAf-ti-shipi en-Dekios: pi-ouro en-asevis: hiten tef-nishti en-hypomoni: nem pi-hisi ente ni-vasanos.\n\nKhen nai af-er-phorin: em-pi-khlom en-at-lom: ente t-met-martyros: af-er-shai nem ni-ethowab tirou: khen t-chora ente ni-et-onkh.\n\nShere nak o pi-martyros: Shere pi-shouja en-genneos: Shere pi-athlo-phoros: Philopatir Merkourios.\n\nTovh em-Pchois e-hri ejon: o pi-athlo-phoros em-martyros: Philopatir Merkourios: entef-ka nen-novi nan evol."
            },
            {
                id: "48.4",
                speaker: "Volk",
                ar: "إذا ربح الإنسان العالم كُلَّهُ، وخسرَ نفسهُ، فما هي هذه الحياة الباطلة.\n\nالقديس أبا مينا، سمع الصوت الإلهي، وترك عنه العالم كله، ومجده الفاسد.\n\nوبذل نفسه للموت، وجسده للنار، وقبل عذابات عظيمة، لأجل ابن الله الحي.\n\nفلهذا رفعهُ مُخلّصنا، إلي ملكوته، وأعطاه الخيرات، التي لم ترها عين.\n\nالسلام لك أيها الشهيد، السلام للشجاع البطل، السلام للمجاهد، القديس أبا مينا.\n\nأطلب من الربّ عنّا، أيها الشهيد المجاهد، القديس أبا مينا، ليغفر لنا خطايانا.",
                de: "Was nützt es einem Menschen, – wenn er die ganze Welt gewinnt – und seine Seele dabei verliert. – Dies würde ein nichtiges Leben sein.\n\nDer heilige Apa Mina – hörte die göttliche Stimme – und verließ die ganze Welt – und ihre nichtige Ehre.\n\nEr gab seine Seele zum Tode – und seinen Leib zum Feuer, – und er litt große Qualen – für den Sohn des lebendigen Gottes.\n\nDeshalb erhob unser Erlöser – ihn zu seinem Königreich – und versprach ihm die Güte – die kein Auge je gesehen hat.\n\nGegrüßt seist du, o Märtyrer, – gegrüßt sei der mutige Held, – gegrüßt sei der Strebsame, – der heilige Apa Mina.\n\nBitte beim Herrn für uns – strebsamer Märtyrer, – der heilige Apa Mina, – damit er uns unsere Sünden vergibt.",
                cop_ar: "إيشوب أون إنتى بى رومى: جيم هيو إمبى كوزموس تيرف: إنتيف تى أوسى إنتيف إبسيشى: أوبى باى أونخ إن إفليو.\n\nبى آجيوس آفا مينا: أفسوتيم إنسا تى إسمى إن نوتى: أفك و إمبى كوزموس تيرف إنسوف: نيم بيف أوأوو إثنا طاكو.\n\nأفتى إنتيف إبسيشى اى إفمو: نيم بيف سوما إيبى إكروم: أفشيب هان نيشتى إمفاسانوس: إثفى إبشيرى إم إفنوتى إتؤنخ.\n\nإثفيه فاى آ بين سوتير: أولف إيخون إيه تيف ميت أوورو: أفتى ناف إننى أغاثون: نى إيتيه إمبى فال ناف إيروؤو.\n\nشيرى ناك أو بى مارتيروس: شيرى بى تشويج ان جينيئوس: شيرى بى أثلوفوروس: بى آجيوس آفا مينا.\n\nطوبه إم إبتشويس إ إهرى إيجون: أو بى أثلوفوروس إممارتيروس: بى آجيوس آفا مينا: إنتيف كانين نوفى نان إيفول.",
                cop_cop: "Ⲉⲩⲟϣ ⲟⲩⲛ ⲛ̀ⲧⲉ ⲡⲓⲣⲱⲙⲓ : ϫⲉⲙϩⲏⲟⲩ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ : ⲛ̀ⲧⲉϥϯⲟⲥⲓ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ : ⲟⲩ ⲡⲉ ⲡⲁⲓⲱⲛϧ ⲉϥϣⲟⲩ.\n\nⲠⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ : ⲁϥⲥⲱⲧⲉⲙ ⲛ̀ⲥⲁ ϯⲥ̀ⲙⲏ ⲛ̀ⲛⲟⲩϯ : ⲁϥⲭⲱ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲥⲱϥ : ⲛⲉⲙ ⲡⲉϥⲱ̀ⲟⲩ ⲉⲑⲛⲁⲧⲁⲕⲟ.\n\nⲀϥϯ ⲛ̀ⲧⲉϥⲯⲩⲭⲏ ⲉ̀ⲫ̀ⲙⲟⲩ : ⲛⲉⲙ ⲡⲉϥⲥⲱⲙⲁ ⲉ̀ⲡⲓⲭ̀ⲣⲱⲙ : ⲁϥϣⲉⲡ ϩⲁⲛⲛⲓϣϯ ⲛ̀ⲃⲁⲥⲁⲛⲟⲥ : ⲉⲑⲃⲉ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫ̀ⲛⲟⲩϯ ⲉⲧⲟⲛϧ.\n\nⲈⲑⲃⲉ ⲫⲁⲓ ⲁ̀ Ⲡⲉⲛⲥⲱⲧⲏⲣ : ⲟⲗϥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲉϥⲙⲉⲧⲟⲩⲣⲟ : ⲁϥϯ ⲛⲁϥ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ : ⲛⲏⲉⲧⲉ ⲙ̀ⲡⲉⲃⲁⲗ ⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ.\n\nⲬⲉⲣⲉ ⲛⲁⲕ ⲱ̀ ⲡⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲭⲉⲣⲉ ⲡⲓϣⲱϫ ⲛ̀ⲅⲉⲛⲛⲉⲟⲥ : ⲭⲉⲣⲉ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ : ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲁ̀ⲑⲗⲟⲫⲟⲣⲟⲥ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡⲓⲁ̀ⲅⲓⲟⲥ ⲁⲡⲁ Ⲙⲏⲛⲁ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Iza rabeha el insan el 'alam kolaho, wa khasara nafsaho, fama hiya hazihi el hayah el batela.\n\nEl qadis Apa Mina, sami'a el sawt el ilahi, wa taraka 'anho el 'alam kolaho, wa magdaho el fased.\n\nWa bazala nafsaho lel mawt, wa jasadaho lel nar, wa qabela 'azabat 'azima, le ajl Ebn Allah el hay.\n\nFalehaza rafa'aho mokhalisona, ila malakoutihi, wa a'taho el khayrat, allati lam taraha 'ayn.\n\nEl salam laka ayoha el shahid, el salam lel shoga' el batal, el salam lel mogahed, el qadis Apa Mina.\n\nOtlob men el Rab 'anna, ayoha el shahid el mogahed, el qadis Apa Mina, li yaghfer lana khatayana.",
                cop_de: "Ev-osh oun ente pi-romi: jem-hiou em-pi-kosmos tirf: entef-ti-osi en-tef-psichi: ou pe pai-onh ef-shou.\n\nPi-agios apa Mina: af-sotem en-sa t-smi en-nouti: af-ko em-pi-kosmos tirf nsof: nem pef-o-ou eth-na-tako.\n\nAf-ti en-tef-psichi e-f-mou: nem pef-soma e-pi-khrom: af-shep han-nishti en-vasanos: ethve P-shiri em-Phnouti et-onkh.\n\nEthve fai a Pen-sotir: olf e-houn e-tef-met-ouro: af-ti naf en-ni-agathon: ni-ete em-pe-val nav e-ro-ou.\n\nShere nak o pi-martyros: Shere pi-shouja en-genneos: Shere pi-athlo-phoros: pi-agios apa Mina.\n\nTovh em-Pchois e-hri ejon: o pi-athlo-phoros em-martyros: pi-agios apa Mina: entef-ka nen-novi nan evol."
            },
            {
                id: "48.5",
                speaker: "Volk",
                ar: "انزعوا من قلوبكم، الشر، والظنون الخداعة، التي تظلم العقل.\n\n(ق) تفهموا بتأمل، إلى المعجزات العالية، التي لأبينا الطوباوي، سيدي العظيم أنبا انطونيوس.\n\nهذا الذي صار لنا، مرشداً وميناء خلاص، ودعانا بفرح، إلى الحياة الأبدية.\n\n(ق) بخور فضائله، أعطى الفرح لنفوسنا، مثل العنبر (الزهر)، في الفردوس.\n\nفلنثبت بالحقيقة، في الإيمان المستقيم، الذي للعظيم أنبا أنطونيوس، صارخين قائلين:\n\n(ق) طلبت فوجدت، سألت فأخذت، قرعت وأومن، أنه سيفتح لي.\n\nالسلام لأبينا أنبا أنطونيوس، مصباح الرهبنة، السلام لأبينا أنبا بولا، حبيب المسيح.\n\n(ق) أطلبا من الرب عنا، يا سيدي الأبوين محبي أولادهما، أنبا أنطونيوس وأنبا بولا، ليغفر لنا خطايانا.",
                de: "Befreit eure Herzen, – von den Gedanken des Bösen, – und die anstachelnden Vorstellungen, – die den Verstand verdunkeln.\n\n(S) Denkt über die großen Wunder, – unseres seligen Vaters, – unseres großen Herrn – Abba Antonius nach.\n\nDas ist er, der unser Anführer, – und der Hafen der Rettung wurde, – er hat uns mit Freude – zum ewigen Leben eingeladen.\n\n(S) Der Weihrauch seiner Tugenden – gibt unseren Seelen Freude, – wie der Blütenduft, – der im Paradies verströmt.\n\nLasst uns wahrhaftig bestärkt, – im rechten Glauben – des großen Abba Antonius – rufen und sprechen:\n\n(S) „Ich suchte und ich fand, – ich fragte und ich erhielt, – ich klopfte an und ich glaubte, – dass mir geöffnet werden wird“.\n\nGegrüßt sei unser Vater Abba Antonius, – die Leuchte des Mönchtums. – Gegrüßt sei unser Vater Abba Paul, – der von Christus Geliebte.\n\n(S) Bittet beim Herrn für uns, – meine Herren und Väter, die ihre Kinder liebten, – Abba Antonius und Abba Paul, – damit er uns unsere Sünden vergibt.",
                cop_ar: "فول إيفول خين نينهيت: إن نى موك ميك إنتى تى كاكيا: نيم نى ميفئى إتشيف: شوب إتئيرى إمبى نوس إنكاكى.\n\nآرينؤين خين أوتى إهتيف: إن نى كاثار طوما إتتشوسى: انتى بين ماكاريوس إنيوت: باشويس بى نيشتى آفى أنطونى.\n\nفاى إيطاف شوبى نان إتتشافمويت: إنليمين انتى بى أوجاى: أفئو هيم إممون خين أو إرو أوت: إيخون إمبى أونخ إن إنيه.\n\nآبى إستوى نوفى إنتى نيف آريتى: تى إم ابؤنوف إن تين إبسيشى: إم افريتى إمبى آروماطا: إتريتى خين بى باراذيسوس.\n\nمارين طاجرون خين بى ناهتى: إتسوطون خين أو ميثمى: انتى بى نيشتى أنطونيوس: إنؤش إيفول إفجوس إمموس:\n\nجى آيكوتى أووه آيجيمى: آى إيريتين أووه آيتشى: آبكوله أووه تى ناهتي: جى سينا آ أوؤن نى.\n\nشيرى بين يوت أنطونيوس: بى خيفس إنتى تى ميت موناخوس: شيرى بين يوت آفا بافلى: بى منريت انتى بخرستوس.\n\nطوفه إمبشويس إى إهرى إيجون: أوناشويس إنيوتى إمماى نوشيرى: أنطونيوس نيم آفا بافلى: إنتيف كانين نوفى نان إيفول.",
                cop_cop: "Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲉⲧⲉⲛϩⲏⲧ : ⲛ̀ⲛⲓⲙⲟⲕⲙⲉⲕ ⲛ̀ⲧⲉ ϯⲕⲁⲕⲓⲁ̀ : ⲛⲉⲙ ⲛⲓⲙⲉⲩⲓ̀ ⲉⲧϫⲁϩⲙⲱⲙ : ⲉⲧⲓⲣⲓ ⲙ̀ⲡⲓⲕⲁϯ ⲛ̀ⲭⲁⲕⲓ.\n\nⲀⲣⲓⲡ̀ⲙⲉⲩⲓ̀ ϧⲉⲛ ⲟⲩϫⲟⲙϩ : ⲛ̀ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲉⲧϭⲟⲥⲓ : ⲛ̀ⲧⲉ ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲓⲱⲧ : ⲡⲁϭⲟⲓⲥ ⲡⲓⲛⲓϯ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ.\n\nⲪⲁⲓ ⲉ̀ⲧⲁϥϣⲱⲡⲓ ⲛⲁⲛ : ⲛ̀ⲟⲩϭⲁⲓⲙⲓⲧ ⲛ̀ⲁ̀ⲗⲓⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ : ⲁϥⲱϩⲉⲙ ⲙ̀ⲙⲟⲛ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ.\n\nⲠⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲛ̀ⲧⲉ ⲛⲉϥⲁ̀ⲣⲉⲧⲏ : ϯ ⲙ̀ⲡ̀ⲟⲩⲛⲟϥ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ : ⲙ̀ⲫ̀ⲣⲏϯ ⲙ̀ⲡⲓⲁ̀ⲣⲱⲙⲁⲧⲁ : ⲉⲧⲣⲏⲧ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ.\n\nⲘⲁⲣⲉⲛⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ : ⲉⲧⲥⲟⲩⲧⲱⲛ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ : ⲛ̀ⲧⲉ ⲡⲓⲛⲓϯ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ : ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.\n\nϪⲉ ⲁⲓⲕⲱϯ ⲟⲩⲟϩ ⲁⲓϫⲓⲙⲓ : ⲁⲓⲉⲣⲉⲧⲓⲛ ⲟⲩⲟϩ ⲁⲓϭⲓ : ⲁⲓⲕⲱⲗϩ ⲟⲩⲟϩ ϯⲛⲁϩϯ : ϫⲉ ⲥⲉⲛⲁⲟⲩⲱⲛ ⲛⲏⲓ.\n\nⲬⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ : ⲡⲓϧⲏⲃⲥ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲙⲟⲛⲁⲭⲟⲥ : ⲭⲉⲣⲉ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲡⲓⲙⲉⲛⲣⲓⲧ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲙ̀ⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Enza'ou men qoloubikom, el sharr, wal zonoun el khadda'a, allati tozlim el 'aql.\n\nTafahhamou be ta'ammol, ila el mo'jezat el 'aliya, allati le abina el tobawy, sayedi el 'azim Anba Antonios.\n\nHaza allazi sara lana, morshedan wa mina' khalas, wa da'ana be farah, ila el hayah el abadiya.\n\nBokhour fada'elihi, a'ta el farah le nofousina, methl el 'anbar (el zahr), fi el ferdous.\n\nFal nathbot bel haqiqa, fi el iman el mostaqim, allazi lel 'azim Anba Antonios, sarekhin qa'ilin:\n\nTalabto fa wagadto, sa'alto fa akhazto, qara'to wa o'men, annaho sayoftah li.\n\nEl salam le abina Anba Antonios, mosbah el rahbana, el salam le abina Anba Bola, habib el Masih.\n\nOtloba men el Rab 'anna, ya sayedaya el abawayn mohibbay awladehema, Anba Antonios wa Anba Bola, li yaghfer lana khatayana.",
                cop_de: "Bol evol khen neten-hit: en-ni-mokmek ente ti-kakia: nem ni-mevi et-jahmom: et-iri em-pi-kati en-khaki.\n\nAri-ep-mevi khen ou-jomh: en-ni-hvi-oui et-chosi: ente pen-makarios en-iot: pa-chois pi-nishti abba Antoni.\n\nFai eta-f-shopi nan: en-ou-chaimit en-alimin ente pi-oujai: af-ohem emmon khen ou-rashi: e-khoun e-pi-onkh en-eneh.\n\nPi-stoi-noufi ente nef-areti: ti em-ep-ounof en-nen-psichi: em-phriti em-pi-aromata: et-rit khen pi-paradisos.\n\nMaren-tajron khen pi-nahti: et-souton khen ou-methmi: ente pi-nishti abba Antonios: en-osh evol en-jo emmos.\n\nJe ai-koti ouoh ai-jimi: ai-er-etin ouoh ai-chi: ai-kolh ouoh ti-nahti: je sena-ouon nhi.\n\nShere pen-iot abba Antonios: pi-hibs ente ti-met-monakhos: Shere pen-iot abba Pavle: pi-menrit ente Pi-Khristos.\n\nTovh em-Pchois e-hri ejon: o na-chois en-ioti em-mai-no-shiri: abba Antonios nem abba Pavle: entef-ka nen-novi nan evol."
            },
            {
                id: "48.7",
                speaker: "Volk",
                ar: "البابا كيرلس السادس، الطوباوي بالحقيقة، الذي ثبتنا في الإيمان، الأرثوذكسي الحقيقي.\n\n(ق) اسم فخر هو اسمك، أيها الراهب الطاهر، والمتوحد القوي، صديق السواح.\n\nمن أجل هذا صرت لنا، قدوة في الكلام، في المحبة في التصرف، في الطهارة في الإيمان.\n\n(ق) السلام لمحب أولاده، الذي شفى المرضى، وتنبأ بالعظائم، وأخرج الشياطين.\n\nمبارك هو عهدك، يا أبانا الطوباوي، أعدت لنا جسد مارمرقس، وعملت الميرون المقدس.\n\n(ق) مريم والدة الإله، ظهرت بأعجوبة عظيمة، مع حمام وبخور، في كنيستها بالزيتون.\n\nبنيت كاتدرائية جديدة، والدير العظيم لمارمينا، وكنائس كثيرة، أما قلبك لم يستكبر مطلقاً.\n\n(ق) تعوّدت القيام وقت السحر، في قوتك وفي أمراضك، لتسبح مع الملائكة، ومع القديسين أحبائك.\n\nوالآن اذكرنا، أمام إلهنا، ليكملنا مثلك، في المحبة وفي الإيمان.\n\n(ق) أطلب من الرب عنا، يا أبانا القديس الصديق، البابا أنبا كيرلس السادس، ليغفر لنا خطايانا.",
                de: "Papst Kyrillus der Sechste, – der uns im wahren – orthodoxen Glauben bestärkt hat, – ist in Wahrheit selig.\n\n(S) Ein Name des Stolzes ist dein Name, – du reiner Mönch – und starker Einsiedler, – du Freund der Anachoreten!\n\nDu wurdest uns – Vorbild in Worten, – in der Liebe, in deinem Lebenswandel, – in Lauterkeit und im Glauben.\n\n(S) Gegrüßt seist du, der seine Kinder liebte, – der die Kranken heilte, – Großes vorhersagte – und Dämonen austrieb.\n\nGesegnet sei die Zeit deines Lebens, – unser seliger Vater! – Du hast uns die Reliquien des Abba Markus zurückgebracht – und das heilige Salböl bereitet.\n\n(S) Maria die Mutter Gottes – erschien begleitet – von Tauben und Weihrauch – über ihrer Kirche in Zeitoun.\n\nEine neue Kathedrale hast du errichtet – und das große Kloster des Abba Mina – und viele andere Kirchen erbaut, – aber dein Herz war nie hochmütig.\n\n(S) Du warst gewohnt, in der Frühe des Morgens aufzustehen – an gesunden und an kranken Tagen, – damit du mit den Engeln – und deinen geliebten Heiligen den Lobpreis singst.\n\nGedenke unser vor unserem Gott, – dass er uns vollende – in der Liebe und im Glauben, – wie du es bist.\n\n(S) Bitte beim Herrn für uns, – unser heiliger und gerechter Vater, – Papst Abba Kyrillus, der Sechste, – damit er uns unsere Sünden vergibt.",
                cop_ar: "بابا آفا كيريللوس بي ماه سوؤو: بي ماكاريوس خين أو ميثمي: في إيطاف تاجُرون خين بي ناهتي: إن أورثوذوكسوس إن طافمي.\n\nأو ران إن شوشو بي بيك ران: أو بي موناخوس إت توفيوت: بي أناخوريتيس إت تاجريوت: إب إشفير إن ني أناخوريتيس.\n\nإثفي فاي أك شوبي نان: إن تيبوس خين بي ساجي: خين تي أغابي خين بي جين موشي: خين بي توفو خين بي ناهتي.\n\nشيري بي ماي نو شيري: في إيطاف تالتشو إن ني إت شوني: أف إر بروفيتيفين إن هان نيشتي: أووه أف هيوي إن ني ديمون.\n\nإزمارو أوت بي بيك سيو: أو بين يوت إم ماكاريوس: أك طاستهو نان إن ني كاس: إنتي آفا ماركوس: أووه أك إيري إم بي ميرون إثؤواف.\n\nماريا تي ثيؤطوكوس: أس أو أونه خين أو نيشتي إن إشفيري: نيم هان تشرومبي نيم بي إستوي نوفي: خين تيس إككليسيا خين إي زيتون.\n\nأك كوت إن أو كاثيدرا إم فيري: نيم بي نيشتي إم موناستيريون إنتي آفا مينا: نيم هان ميش إن إككليسيا: إم بي بيك هيت تشيسي إيفول إينيه.\n\nأك تاماك إي إفناف إن شورب: خين تيك جوم نيم بيك شوني: إي إر هيم نوس نيم ني أنجيلوس: نيم ني إثؤواف إتيك مينريتو.\n\nتينو أري بين ميفئي: ناهرين بين نوتي: إثريف جوك نان إيفول: خين تي أغابي نيم بي ناهتي: كاطا بيك ريتي.\n\nتوفه إم إبشويس إي إهري إيجون: بين يوت إثؤواف إن ذيكيؤس: بابا آفا كيريللوس بي ماه سوؤو: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩ ⲥⲟⲟⲩ : ⲡⲓⲙⲁⲕⲁⲣⲓⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ : ⲫⲏⲉⲧⲁϥⲧⲁϫⲣⲟⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ : ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲛ̀ⲧⲁⲫⲙⲏⲓ.\n\nⲞⲩⲣⲁⲛ ⲛ̀ϣⲟⲩϣⲟⲩ ⲡⲉ ⲡⲉⲕⲣⲁⲛ : ⲱ̀ ⲡⲓⲙⲟⲛⲁⲭⲟⲥ ⲉⲧⲧⲟⲩⲃⲏⲟⲩⲧ : ⲡⲓⲁⲛⲁⲭⲱⲣⲓⲧⲏⲥ ⲉⲧⲧⲁϫⲣⲏⲟⲩⲧ : ⲡ̀ϣ̀ⲫⲏⲣ ⲛ̀ⲛⲓⲁ̀ⲛⲁⲭⲱⲣⲓⲧⲏⲥ.\n\nⲈⲑⲃⲉ ⲫⲁⲓ ⲁⲕϣⲱⲡⲓ ⲛⲁⲛ : ⲛ̀ⲧⲩⲡⲟⲥ ϧⲉⲛ ⲡⲓⲥⲁϫⲓ : ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ϧⲉⲛ ⲡⲓϫⲓⲛⲙⲟϣⲓ : ϧⲉⲛ ⲡⲓⲧⲟⲩⲃⲟ ϧⲉⲛ ⲡⲓⲛⲁϩϯ.\n\nⲬⲉⲣⲉ ⲡⲓⲙⲁⲓⲛⲟⲩϣⲏⲣⲓ : ⲫⲏⲉⲧⲁϥⲧⲁⲗϭⲟ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ : ⲁϥⲉⲣⲡⲣⲟⲫⲏⲧⲉⲩⲓⲛ ⲛ̀ϩⲁⲛⲛⲓϣϯ : ⲟⲩⲟϩ ⲁϥϩⲓⲱⲓ ⲛ̀ⲛⲓⲇⲉⲙⲱⲛ.\n\nⲤⲙⲁⲣⲱⲟⲩⲧ ⲡⲉ ⲡⲉⲕⲥⲏⲟⲩ : ⲱ̀ ⲡⲉⲛⲓⲱⲧ ⲙ̀ⲙⲁⲕⲁⲣⲓⲟⲥ : ⲁⲕⲧⲁⲥⲑⲟ ⲛⲁⲛ ⲛ̀ⲛⲓⲕⲁⲥ : ⲛ̀ⲧⲉ ⲁⲃⲃⲁ Ⲙⲁⲣⲕⲟⲥ : ⲟⲩⲟϩ ⲁⲕⲓ̀ⲣⲓ ⲙ̀ⲡⲓⲙⲩⲣⲟⲛ ⲉⲑⲟⲩⲁⲃ.\n\nⲘⲁⲣⲓⲁ̀ ϯⲑⲉⲟⲧⲟⲕⲟⲥ : ⲁⲥⲟⲩⲱⲛϩ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ϣⲫⲏⲣⲓ : ⲛⲉⲙ ϩⲁⲛϭⲣⲟⲙⲡⲓ ⲛⲉⲙ ⲡⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ : ϧⲉⲛ ⲧⲉⲥⲉⲕⲕⲗⲏⲥⲓⲁ̀ ϧⲉⲛ ⲁⲓⲍⲩⲧⲟⲩⲛ.\n\nⲀⲕⲕⲱⲧ ⲛ̀ⲟⲩⲙⲁϩⲕⲁⲑⲉⲇⲣⲁ ⲙ̀ⲃⲉⲣⲓ : ⲛⲉⲙ ⲡⲓⲛⲓϯ ⲙ̀ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲧⲉ ⲁⲃⲃⲁ Ⲙⲏⲛⲁ : ⲛⲉⲙ ϩⲁⲛⲙⲏϣ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀ : ⲙ̀ⲡⲉ ⲡⲉⲕϩⲏⲧ ϭⲓⲥⲓ ⲉ̀ⲃⲟⲗ ⲉⲛⲉϩ.\n\nⲀⲕⲧⲁⲙⲁⲕ ⲉ̀ⲫ̀ⲛⲁⲩ ⲛ̀ϣⲱⲣⲡ : ϧⲉⲛ ⲧⲉⲕϫⲟⲙ ⲛⲉⲙ ⲡⲉⲕϣⲱⲛⲓ : ⲉ̀ⲉⲣϩⲩⲙⲛⲟⲥ ⲛⲉⲙ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ : ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲉⲧⲉⲕⲙⲉⲛⲣⲓⲧⲟⲩ.\n\nϮⲛⲟⲩ ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛⲛⲟⲩϯ : ⲉⲑⲣⲉϥϫⲟⲕ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ : ϧⲉⲛ ϯⲁ̀ⲅⲁⲡⲏ ⲛⲉⲙ ⲡⲓⲛⲁϩϯ : ⲕⲁⲧⲁ ⲡⲉⲕⲣⲏϯ.\n\nⲦⲱⲃϩ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲇⲓⲕⲉⲟⲥ : ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩ ⲥⲟⲟⲩ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "El Baba Kyrollos el sades, el tobawy bel haqiqa, allazi thabbatana fi el iman, el orthodoxi el haqiqi.\n\nEsm fakhr howa esmok, ayoha el raheb el taher, wal motawahed el qawi, sadiq el sowwah.\n\nMen agl haza sorta lana, qodwa fi el kalam, fi el mahaba fi el tasarrof, fi el tahara fi el iman.\n\nEl salam le moheb awlado, allazi shafa el marda, wa tanabba bel 'aza'em, wa akhrag el shayatin.\n\nMobarak howa 'ahdok, ya abana el tobawy, a'adta lana jasad Mar Markos, wa 'amalta el myroun el moqaddas.\n\nMariam walidat el ilah, zaharat be o'gouba 'azima, ma'a hamam wa bokhour, fi kanisatiha bel Zeitoun.\n\nBanayta katidra'iya jadida, wal dayr el 'azim le Mar Mina, wa kana'es kathira, amma qalbok lam yastakber motlaqan.\n\nTa'awwadta el qiyam waqt el sahar, fi qowwatika wa fi amradek, le tosabbih ma'a el mala'ika, wa ma'a el qadisin ahibba'ek.\n\nWal aan ozkorna, amama ilahina, le yokammilana methlak, fi el mahaba wa fi el iman.\n\nOtlob men el Rab 'anna, ya abana el qadis el seddiq, el Baba Abba Kyrollos el sades, li yaghfer lana khatayana.",
                cop_de: "Papa abba Kyrillos pi-mah so-ou: pi-makarios khen ou-methmi: fi-etaf-tajron khen pi-nahti: en-orthodoxos en-taphmi.\n\nOu-ran en-shoushou pe pek-ran: o pi-monakhos et-touviout: pi-anachoritis et-tajriout: ep-shphir en-ni-anachoritis.\n\nEthve fai ak-shopi nan: en-typos khen pi-saji: khen ti-agapi khen pi-jin-moshi: khen pi-touvo khen pi-nahti.\n\nShere pi-mai-no-shiri: fi-etaf-talcho en-ni-et-shoni: af-er-prophitevin en-han-nishti: ouoh af-hioui en-ni-demon.\n\nSmarout pe pek-sio: o pen-iot em-makarios: ak-tastho nan en-ni-kas: ente abba Markos: ouoh ak-iri em-pi-myron ethowab.\n\nMaria ti-theotokos: as-ouonh khen ou-nishti en-shphiri: nem han-chrompi nem pi-stoi-noufi: khen tes-ekklisia khen e-Zeitoun.\n\nAk-kot en-ou-mah-cathedra em-veri: nem pi-nishti em-monastirion ente abba Mina: nem han-mish en-ekklisia: em-pe pek-hit chisi evol eneh.\n\nAk-tamak e-ph-nav en-shorp: khen tek-jom nem pek-shoni: e-er-hymnos nem ni-angelos: nem ni-ethowab etek-menritou.\n\nTinou ari-pen-mevi: nahren Pen-nouti: ethref-jok nan evol: khen ti-agapi nem pi-nahti: kata pek-riti.\n\nTovh em-Pchois e-hri ejon: pen-iot ethowab en-dikeos: Papa abba Kyrillos pi-mah so-ou: entef-ka nen-novi nan evol."
            },
            {
                id: "48.8",
                speaker: "Volk",
                ar: "لم يقم في مواليد النساء، من يشبهك، أنت عظيم في جميع القديسين، يا يوحنا المعمدان.\n\n(ق) أنت أفضل من نبي، تعاليت في البر، أنت هو صديق العريس، حمل الله.\n\nشهدت للنور الحقيقي، الذي أتى إلى العالم، والذين يؤمنون باسمه، صاروا أبناء النور.\n\n(ق) اشفع فينا، أيها السابق الصابغ، يوحنا المعمدان، ليغفر لنا خطايانا.",
                de: "Unter allen von einer Frau Geborenen – hat es keinen gegeben, der dir ähnlich ist. – Groß bist du unter allen Heiligen, – du Johannes der Täufer.\n\n(S) Du überragst jeden Propheten, – hoch erhaben in Gerechtigkeit – du bist der Freund des Bräutigams, – des Lammes Gottes.\n\nDu hast Zeugnis vom wahren Licht abgelegt, – das zur Welt kam, – und alle, die an seinen Namen glauben, – sind Kinder des Lichts geworden.\n\n(S) Sei unser Fürsprecher, – Vorläufer und Färber, – Johannes, der Täufer, – damit er uns unsere Sünden vergibt.",
                cop_ar: "إمبيه أوأون طونف خين ني جين ميسي: إنتيه ني هيومي إف أوني إممو ك: إنثوك أوو ني شتي خين ني إثؤواب تيروو: يوأنيس بي ريف تي أومس.\n\nإنثوك أوو هوؤو إمبروفيتيس: أكتشيسي خين تي ميثمي: إنثوك بيه إب إشفير إمبي بات شيليت: بي هييب إنتيه إفنوتي.\n\nأك إر ميثريه خا بي أوأوأويني: إنطا إفمي إطاف إي إ بي كوزموس: ني إثناهتي إ بيف ران: أف شوبي إنشيري إنتيه بي أوأوأويني.\n\nأري بريسفيفين إ إهري إجون: أو بي بروذورموس إمفا بتيس تيس يوأنيس بي ريف تي أومس: إتيف كا نين نوفي نان إفول.",
                cop_cop: "Ⲙ̀ⲡⲉ ⲟⲩⲟⲛ ⲧⲱⲛϥ ϧⲉⲛ ⲛⲓϫⲓⲛⲙⲓⲥⲓ : ⲛ̀ⲧⲉ ⲛⲓϩⲓⲟ̀ⲙⲓ ⲉϥⲟ̀ⲛⲓ ⲙ̀ⲙⲟⲕ : ⲛ̀ⲑⲟⲕ ⲟⲩⲛⲓϣϯ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ.\n\nⲚ̀ⲑⲟⲕ ⲟⲩϩⲟⲩⲟ̀ ⲉ̀ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ : ⲁⲕϭⲓⲥⲓ ϧⲉⲛ ϯⲙⲉⲑⲙⲏⲓ : ⲛ̀ⲑⲟⲕ ⲡⲉ ⲡⲓϣ̀ⲫⲏⲣ ⲙ̀ⲡⲁⲧϣⲉⲗⲉⲧ : ⲡⲓϩⲓⲏⲃ ⲛ̀ⲧⲉ Ⲫ̀ⲛⲟⲩϯ.\n\nⲀⲕⲉⲣⲙⲉⲑⲣⲉ ϧⲁ ⲡⲓⲟⲩⲱⲓⲛⲓ : ⲛ̀ⲧⲁⲫⲙⲏⲓ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲛⲏⲉⲑⲛⲁϩϯ ⲉ̀ⲡⲉϥⲣⲁⲛ : ⲁⲩϣⲱⲡⲓ ⲛ̀ϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲱⲓⲛⲓ.\n\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Lam yaqom fi mawaleed el nisa', man yoshbihok, anta 'azim fi jami' el qadisin, ya Youhanna el ma'madan.\n\nAnta afdal men nabi, ta'alayta fi el berr, anta howa sadiq el 'aris, hamal Allah.\n\nShahidta lel nour el haqiqi, allazi ata ila el 'alam, wallazina yo'minoun be ismihi, sarou abna' el nour.\n\nEshfa' fina, ayoha el sabeq el sabigh, Youhanna el ma'madan, li yaghfer lana khatayana.",
                cop_de: "Mpe ouon tonq khen ni-jin-misi: ente ni-hiomi ef-oni mmok: nthok ou-nishti khen ni-ethowab tirou: Ioannis pi-ref-ti-oms.\n\nNthok ou-houo e-ni-prophitis: ak-chisi khen ti-methmi: nthok pe pi-shphir em-pat-shelet: pi-hiib ente Efnouti.\n\nAk-er-methre kha pi-ouoini: en-taphmi etaf-i e-pi-kosmos: ni-eth-nahti e-pef-ran: av-shopi en-shiri ente pi-ouoini.\n\nAri-presvevin e-hri ejon: o pi-prodromos em-vaptistis: Ioannis pi-ref-ti-oms: entef-ka nen-novi nan evol."
            },
            {
                id: "48.9",
                speaker: "Volk",
                ar: "شهد يوحنا، في الأناجيل الأربعة، أني عمدتُ مُخلصي، في مياه الاردن.\n\n(ق) ونظرتُ الروح القُدُس، عندما نزل من السَّماء، وسمعتُ صوت الآب، صارخاً قائلاً:\n\nهذا هو ابني حبيبي، الَّذي سُرَّت بِهِ نفسي، وصنعَ مشيئتي، اسمعوا لهُ لأنَّه هو المُحيي.\n\n(ق) اشفع فينا، أيها السابق الصابغ، يوحنا المعمدان، ليغفر لنا خطايانا.",
                de: "Johannes legte Zeugnis ab, – in den vier Evangelien: – „Ich habe meinen Erlöser – im Jordanwasser getauft.\n\n(S) Ich sah den Heiligen Geist, – als er vom Himmel herabkam, – und hörte die Stimme des Vaters, – sie rief und sprach:\n\nDas ist mein geliebter Sohn, – an dem ich Gefallen gefunden habe, – er erfüllte meinen Willen, auf ihn sollt ihr hören, – denn er ist, der lebendig macht“.\n\n(S) Sei unser Fürsprecher, – Vorläufer und Färber, – Johannes der Täufer, – damit er uns unsere Sünden vergibt.",
                cop_ar: "أفئر ميثري إنجى يوأنس : خين بى إفتو إن إيف أنجيليون : جى أيتى أومس إمبا سوتير : خين نى مواوو إنتى بى يورذانيس .\n\nأيناف اى بى بنيڤما إثؤاب : إيطاف اى إيبيسيت إيڤول خين إتفى: أيسوتيم اى إت إسمى إنتى إفيوت : إسؤش إيڤول إسجو إموس .\n\nجى فاى بى با شيرى با مينريت : إيطا طا إبسيشى تى ماتى إنخيتف : أفئر با أواوش سوتيم إنسوف : جى إنثوف بى بى ريف تانخو .\n\nأرى بريس ڤيڤين اى إهرى إيجون : أو بى برودروموس إمڤاب تيس تيس : يوأنس بى ريفتى أومس :إنتيف كا نين نوڤى نان إيڤول .",
                cop_cop: "Ⲁϥⲉⲣⲙⲉⲑⲣⲉ ⲛ̀ϫⲉ Ⲓⲱⲁⲛⲛⲏⲥ : ϧⲉⲛ ⲡⲓϥ̀ⲧⲟⲩ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ : ϫⲉ ⲁⲓϯⲱⲙⲥ ⲙ̀Ⲡⲁⲥⲱⲧⲏⲣ : ϧⲉⲛ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲓⲒⲟⲣⲇⲁⲛⲏⲥ.\n\nⲀⲓⲛⲁⲩ ⲉ̀Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲧ̀ⲫⲉ : ⲁⲓⲥⲱⲧⲉⲙ ⲉ̀ⲧ̀ⲥⲙⲏ ⲛ̀ⲧⲉ Ⲫ̀ⲓⲱⲧ : ⲉⲥⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲥϫⲱ ⲙ̀ⲙⲟⲥ.\n\nϪⲉ ⲫⲁⲓ ⲡⲉ Ⲡⲁϣⲏⲣⲓ ⲡⲁⲙⲉⲛⲣⲓⲧ : ⲉⲧⲁ ⲧⲁⲯⲩⲭⲏ ϯⲙⲁϯ ⲛ̀ϧⲏⲧϥ : ⲁϥⲉⲣ ⲡⲁⲟⲩⲱϣ ⲥⲱⲧⲉⲙ ⲛ̀ⲥⲱϥ : ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉ ⲡⲓⲣⲉϥⲧⲁⲛϧⲟ.\n\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ : Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲣⲉϥϯⲱⲙⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Shahida Youhanna, fi el anageel el arba'a, anni 'ammadto mokhalisi, fi meyah el Ordon.\n\nWa nazarto el Rouh el Qodos, 'endama nazala men el sama', wa sami'to sawt el Ab, sarekhan qa'ilan:\n\nHaza howa ebni habibi, allazi sorrat bihi nafsi, wa sana'a mashia'ati, esma'ou laho le anno howa el mohyi.\n\nEshfa' fina, ayoha el sabeq el sabigh, Youhanna el ma'madan, li yaghfer lana khatayana.",
                cop_de: "Af-er-methre enje Ioannis: khen pi-ftou en-evangelion: je ai-ti-oms em-Pa-sotir: khen ni-mo-ou ente pi-Iordanis.\n\nAi-nav e-Pi-pnevma ethowab: etaf-i e-pesit evol-khen et-fe: ai-sotem e-t-smi ente Ef-iot: es-osh evol es-jo emmos.\n\nJe fai pe Pa-shiri pa-menrit: eta ta-psichi ti-mati en-khetf: af-er pa-ouosh sotem en-sof: je enthof pe pi-ref-tankho.\n\nAri-presvevin e-hri ejon: o pi-prodromos em-vaptistis: Ioannis pi-ref-ti-oms: entef-ka nen-novi nan evol."
            },
            {
                id: "48.10",
                speaker: "Volk",
                ar: "ميخائيل رئيس السمائيين، هو الأول، في الطقوس الملائكية، يخدم أمام الرب.\n\n(ق) إن الله يُرسل لنا، مراحمهُ ورأفاته، بسؤالات ميخائيل، رئيس الملائكة العظيم.\n\nوتكمل الأثمار، بطلبات ميخائيل، لأنه قريب إلى الله، يسأل عنَّا.\n\n(ق) كُل عطية صالحة، وكل موهبة تامة، إنما تهبط لنا من فوق، من عند أبى الأنوار.\n\nفلنُسبّح ونُمجّد، ونسجد للثالوث، القُدُوس المُساوي، الدائم إلى الأبد.\n\n(ق) اشفع فينا، يا رئيس الملائكة الطاهر، ميخائيل رئيس السمائيين، ليغفر لنا خطايانا.",
                de: "Michael, der Oberste der Himmlischen, – er ist der Erste – unter den Engelheerscharen – und dient vor dem Herrn.\n\n(S) Gott möge uns sein Erbarmen – und seine Barmherzigkeit senden, – durch die Fürbitte Michaels, – des großen Erzengels.\n\nDie Ernte wird vollkommen – durch die Gebete von Michael, – denn er ist Gott nahe – und er bittet ihn für uns.\n\n(S) Jede gute Gabe – und jedes vollkommene Geschenk – kommt von oben, – vom Vater der Gestirne.\n\nLasst uns die Heilige, wesensgleiche – Dreifaltigkeit lobpreisen, – verherrlichen und anbeten, – die in Ewigkeit lebt.\n\n(S) Sei unser Fürsprecher, – du, reiner Erzengel Michael, – der Oberste der Himmlischen, – damit er uns unsere Sünden vergibt.",
                cop_ar: "ميخائيل إب أرخون إنا نى فيؤوى: إنثوف إت أوى إنشورب: خين نى تاكسيس إن أنجيليكون إف شيمشى أم بى إمثو أم ابشويس .\n\nشارى إفنوتى أو أورب نان: إن نيف ناى نيم نيف ميت شينهيت: هيتين نى تيهو إنتى ميخائيل: بينشتى إن أرشى أنجيلوس .\n\nشاف جوك إيفول إنجى نى كاربوس: هيتين نى تيهو انتى ميخائيل: جى إنثوف إت خين إيخون إإفنوتى: إف تى هوا إهرى إيجون .\n\nطايو نيفين إثنانيف: نيم ذورون نيفين إتجيك إيفول: إيفنيو نان إيفول إم إبشوى: هيتين إفيوت إنتى نى أو أوى .\n\nمارن هوس إنتين تى أو أو: إنتين أو أوشت إن تى إترياس إثؤاب : إت أوى إن أوموسيوس : إثمين إيفول شا إينيه .\n\nأرى إبريسفيفين إ إهرى إيجون: أوبى أرشى أنجيلوس إثؤاب : ميخائيل إب أرخون إنا نى فيؤوى: إنتيف نين نوفى نان إيفول .",
                cop_cop: "Ⲙⲓⲭⲁⲏⲗ ⲡⲓⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲛ̀ⲑⲟϥ ⲉⲧⲟⲓ ⲛ̀ϣⲟⲣⲡ : ϧⲉⲛ ⲛⲓⲧⲁⲝⲓⲥ ⲛ̀ⲁⲅⲅⲉⲗⲓⲕⲟⲛ : ⲉϥϣⲉⲙϣⲓ ⲙ̀ⲡⲉⲙⲑⲟ ⲙ̀Ⲡ̀ϭⲟⲓⲥ.\n\nϢⲁⲣⲉ Ⲫ̀ⲛⲟⲩϯ ⲟⲩⲱⲣⲡ ⲛⲁⲛ : ⲛ̀ⲛⲉϥⲛⲁⲓ ⲛⲉⲙ ⲛⲉϥⲙⲉⲧϣⲉⲛϩⲏⲧ : ϩⲓⲧⲉⲛ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ Ⲙⲓⲭⲁⲏⲗ : ⲡⲓⲛⲓϯ ⲛ̀ⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ.\n\nϢⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲣⲡⲟⲥ : ϩⲓⲧⲉⲛ ⲛⲉⲛⲧⲱⲃϩ ⲙ̀Ⲙⲓⲭⲁⲏⲗ : ϫⲉ ⲛ̀ⲑⲟϥ ⲉⲧϧⲉⲛⲧ ⲉ̀ϧⲟⲩⲛ ⲉ̀Ⲫ̀ⲛⲟⲩϯ : ⲉϥⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.\n\nⲦⲁⲓⲟ̀ ⲛⲓⲃⲉⲛ ⲉⲑⲛⲁⲛⲉⲩ : ⲛⲉⲙ ⲇⲱⲣⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ : ⲉⲩⲛⲏⲟⲩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ϣⲱⲓ : ϩⲓⲧⲉⲛ Ⲫ̀ⲓⲱⲧ ⲛ̀ⲧⲉ ⲛⲓⲟⲩⲱⲓⲛⲓ.\n\nⲘⲁⲣⲉⲛϩⲱⲥ ⲛ̀ⲧⲉⲛϯⲱ̀ⲟⲩ : ⲛ̀ⲧⲉⲛⲟⲩⲱϣⲧ ⲛ̀ϯⲦ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ : ⲉⲧⲟⲓ ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ : ⲉⲑⲙⲏⲛ ⲉ̀ⲃⲟⲗ ϣⲁ ⲉ̀ⲛⲉϩ.\n\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲱ̀ ⲡⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ : Ⲙⲓⲭⲁⲏⲗ ⲡ̀ⲁⲣⲭⲱⲛ ⲛ̀ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Mikhaïl ra'is el sama'iyin, howa el awal, fi el toqous el mala'ikiya, yakhdom amam el Rab.\n\nInna Allah yorsel lana, marahemaho wa ra'afataho, be so'alat Mikhaïl, ra'is el mala'ika el 'azim.\n\nWa tokammal el athmar, be talabat Mikhaïl, le anno qarib ila Allah, yas'al 'anna.\n\nKol 'atiya saliha, wa kol mawhiba tamma, innama tahbet lana men fawq, men 'end Abi el anwar.\n\nFal nosabbih wa nomaggid, wa nasgod lel thalouth, el qodos el mosawi, el da'em ila el abad.\n\nEshfa' fina, ya ra'is el mala'ika el taher, Mikhaïl ra'is el sama'iyin, li yaghfer lana khatayana.",
                cop_de: "Michael pi-archon en-na ni-fi-oui: enthof et-oi en-shorp: khen ni-taxis en-angelikon: ef-shemshi em-pemtho em-Pchois.\n\nShare Efnouti ouorp nan: en-nef-nai nem nef-met-shenhit: hiten ni-tovh ente Michael: pi-nishti en-archi-angelos.\n\nShav-jok evol enje ni-karpos: hiten nen-tovh em-Michael: je enthof et-khent e-khoun e-Phnouti: ef-tovh e-hri ejon.\n\nTaio niven eth-nanev: nem doron niven et-jik evol: ev-niou nan evol em-ep-shoi: hiten Ef-iot ente ni-ouoini.\n\nMaren-hos enten-ti-o-ou: enten-ouosht en-ti-trias ethowab: et-oi en-omo-ousios: eth-min evol sha eneh.\n\nAri-presvevin e-hri ejon: o pi-archi-angelos ethowab: Michael ep-archon en-na ni-fi-oui: entef-ka nen-novi nan evol."
            },
            {
                id: "50",
                sectionTitle: {
                    de: "Abschluss der Doxologien",
                    ar: "ختام الذكصولوجيات"
                },
                speaker: "Volk",
                ar: "كوني أنتِ ناظرة علينا، في المواضع العالية التي أنتِ كائنة فيها، يا سيدتنا كُلَّنا والدة الإله، العذراء كُلَّ حين.\n\n(ق) إسألي الَّذي ولدته، مُخلِّصنا الصالح، أن يرفع عنَّا هذه الأتعاب، ويُقرّر لنا سلامه.\n\nالسَّلام لك أيتها العَذراء، الملكة الحقيقيَّة الحقَّانية، السَّلام لفخر جنسنا، وَلَدتِ لنا عِمَّانوئيل.\n\n(ق) نَسألك أذكرينا، أيَّتها الشَّفيعة المُؤتَمَنة، أمام رَبَّنا يَسوع المسيح، ليغفر لنا خَطايانا.",
                de: "Schau auf uns herab aus der Höhe, – wo du wohnst, – du unser aller Herrin Mutter Gottes – und immerwährende Jungfrau.\n\n(S) Bitte den, den du gebarst – unseren guten Erlöser, – er möge uns die Unruhe fernhalten – und uns seinen Frieden gewähren.\n\nGegrüßt seist du! Jungfrau, die wahre Königin in Wahrheit. – Gegrüßt seist du! Stolz unseres Geschlechts, – du hast uns den Emmanuel geboren.\n\n(S) Wir bitten dich, gedenke unser, – du treue Fürsprecherin, – vor unserem Herrn Jesus Christus, – damit er uns unsere Sünden vergibt.",
                cop_ar: "شوبي إنثو إيرى سومس إيجون: خين ني ما إتتشوسي  إيطار خي إنخيتو: أو تين تشويس إن نيب تيرن تي ثيؤطوكوس: إت أوي إم بارثينوس إن سيو نيفين.\n\nمات هو إم في إيتا ري ماسف: بين سوتير إن أغاثوس: إنتيف أولي إن ناي خيسي إفول هارون: إنتيف سيمني نان إنتيف هيريني.\n\nشيري ني أو تي بارثينوس: تي أورو إم مي إن أليثيني: شيري بي شوشو إنتي بين جينوس: أري إجفو نان إن إممانوئيل.\n\nتين تي هو أري بين ميفئي: أو تي بروستاتيس إت إنهوت: ناهرين بين تشويس إيسوس بي إخرستوس: إنتيف كا نين نوفي نان إيفول.",
                cop_cop: "Ϣⲱⲡⲓ ⲛ̀ⲑⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ϧⲉⲛ ⲛⲓⲙⲁ ⲉⲧϭⲟⲥⲓ ⲉⲧⲉⲣⲉⲭⲏ ⲛ̀ϧⲏⲧⲟⲩ : ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ.\n\nⲘⲁⲧϩⲟ ⲙ̀ⲫⲏⲉⲧⲁⲣⲉⲙⲁⲥϥ : Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲛ̀ⲧⲉϥⲱ̀ⲗⲓ ⲛ̀ⲛⲁⲓϩⲓⲥⲓ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ : ⲛ̀ⲧⲉϥⲥⲉⲙⲛⲓ ⲛⲁⲛ ⲛ̀ⲧⲉϥϩⲓⲣⲏⲛⲏ.\n\nⲬⲉⲣⲉ ⲛⲉ ⲱ̀ ϯⲡⲁⲣⲑⲉⲛⲟⲥ : ϯⲟⲩⲣⲱ ⲙ̀ⲙⲏⲓ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲏ : ⲭⲉⲣⲉ ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲛⲅⲉⲛⲟⲥ : ⲁⲣⲉϫ̀ⲫⲟ ⲛⲁⲛ ⲛ̀Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ.\n\nⲦⲉⲛϯϩⲟ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲱ̀ ϯⲡ̀ⲣⲟⲥⲧⲁⲧⲏⲥ ⲉⲧⲉⲛϩⲟⲧ : ⲛⲁϩⲣⲉⲛ Ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Kouny anty nazira 'alayna, fi el mawade' el 'aliya allati anty ka'ina fiha, ya sayidatana kollana walidat el ilah, el 'azra' koll hin.\n\nEs'ali allazi waladtihi, mokhallisana el saleh, an yarfa' 'anna hazihi el at'ab, wa yoqarrer lana salamaho.\n\nEl salam laki ayatoih el 'azra', el malika el haqiqiya el haqqaniya, el salam le fakhr gensina, waladti lana Emmanuel.\n\nNas'aloki ozkorina, ayatoih el shafi'a el mo'tamana, amam rabbina Yasou' el Masih, li yaghfer lana khatayana.",
                cop_de: "Shopi entho e-hri e-jon: khen ni-ma et-chosi etere-khi en-khetou: o ten-chois en-nib tiren ti-theotokos: et-oi em-parthenos en-siou niven.\n\nMat-ho em-fi-eta-re-masf: Pen-sotir en-agathos: entef-oli en-nai-hisi evol-haron: entef-semni nan en-tef-hirini.\n\nShere ne o ti-parthenos: ti-ouro em-mei en-alithini: shere pi-shou-shou ente pen-genos: are-jpho nan en-Emmanuel.\n\nTen-ti-ho ari-pen-mevi: o ti-prostatis et-en-hot: nahren Pen-chois Isos Pi-Khristos: entef-ka nen-novi nan evol."
            },
            {
                id: "51",
                speaker: "Volk",
                ar: "نُعَظِّمُكِ يا أُمَّ النورِ الحَقيقي، ونُمَجِّدُكِ أيَّتُها العَذراءُ القِدِّيسَةُ والِدَةُ الإِله، لأَنَّكِ وَلَدتِ لنا مُخَلِّصَ العالم (كُلَّه)، أَتى وخَلَّصَ نُفوسَنا.\n\nالمَجدُ لكَ يا سَيِّدَنا ومَلِكَنا المَسيح، فَخرُ الرُّسُل، إكليلُ الشُّهداء، تَهليلُ الصِّدِّيقين، ثَباتُ الكَنائِس، غُفرانُ الخَطايا.\n\nنُبَشِّرُ بالثالوثِ القُدُّوس، لاهوتٌ واحِدٌ، نَسجُدُ له ونُمَجِّدُهُ.\n\nيا رَبُّ ارْحَمْ، يا رَبُّ ارْحَمْ، يا رَبُّ بارِك، آمين.",
                de: "Wir rühmen dich, du Mutter des wahren Lichtes; wir verherrlichen dich, heilige Jungfrau, Mutter Gottes, denn du gebarst uns den Erlöser der Welt. Er kam und erlöste unsere Seelen.\n\nVerherrlichung sei dir, unser Herr und König Christus: Du Ruhm der Apostel, du Krone der Märtyrer, du Jubel der Gerechten, du Stärke der Gemeinden, du Vergebung der Sünden!\n\nWir verkünden die Heilige Dreifaltigkeit, den einen Gott: Wir beten ihn an, wir verherrlichen ihn.\n\nHerr, erbarme dich, Herr, erbarme dich, Herr, segne uns. Amen.",
                cop_ar: "تين تشيسي إممو إثماف إمبي أوأويني إن طافمي: تين تي أوأو ني أو ثي إثؤواف أووه إمماس نوتي: جي أري ميسي نان إم بين سوتير إمبي كوسموس تيرف: أف إي أووه أف سوتي إن نين بسيشي.\n\nأو أو ناك بين نيب بين أورو بي إخرستوس: بي شوشو إنتي ني أبوستولوس: بي كلوم إنتي ني مارتيروس: إب ثيليل إنتي ني ذيكيؤس: إب طاجرو إنتي ني إككليسيا: إب كو إيفول إنتي ني نوفي.\n\nتين هي أويش إن تي ترياس إثؤواف: إس خين أو ميث نوتي إن أو أوت: تين أو أوشت إمموس تين تي أوأو ناس.\n\nكيريي إليسون، كيريي إليسون، كيريي إفلوجيسون آمين.",
                cop_cop: "Ⲧⲉⲛϭⲓⲥⲓ ⲙ̀ⲙⲟ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲓⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲁⲫⲙⲏⲓ : ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲉ ⲱ̀ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲥⲛⲟⲩϯ : ϫⲉ ⲁ̀ⲣⲉⲙⲓⲥⲓ ⲛⲁⲛ ⲙ̀Ⲡⲥⲱⲧⲏⲣ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ : ⲁϥⲓ̀ ⲟⲩⲟϩ ⲁϥⲥⲱϯ ⲛ̀ⲛⲉⲛⲯⲩⲭⲏ.\n\nⲞⲩⲱ̀ⲟⲩ ⲛⲁⲕ Ⲡⲉⲛⲛⲏⲃ Ⲡⲉⲛⲟⲩⲣⲟ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲡ̀ϣⲟⲩϣⲟⲩ ⲛ̀ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ : ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ : ⲡ̀ⲑⲉⲗⲏⲗ ⲛ̀ⲛⲓⲇⲓⲕⲉⲟⲥ : ⲡ̀ⲧⲁϫⲣⲟ ⲛ̀ⲛⲓⲉⲕⲕⲗⲏⲥⲓⲁ̀ : ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.\n\nⲦⲉⲛϩⲓⲱⲓϣ ⲛ̀ϯⲦ̀ⲣⲓⲁⲥ ⲉⲑⲟⲩⲁⲃ : ⲉⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲛⲟⲩϯ ⲛ̀ⲟⲩⲱⲧ : ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱ̀ⲟⲩ ⲛⲁⲥ.\n\nⲔⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ̀ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ ⲁ̀ⲙⲏⲛ.",
                ar_de: "No'azzimoki ya omm el nour el haqiqi, wa nomaggidoki ayatoih el 'azra' el qadisa walidat el ilah, le annaki waladti lana mokhallis el 'alam (kollah), ata wa khallasa nofousana.\n\nEl magd laka ya sayedana wa malikana el Masih, fakhr el rosol, eklil el shohada', tahlil el seddiqin, thabat el kana'es, ghofran el khataya.\n\nNobashir bel thalouth el qoddous, lahout wahed, nasgod laho wa nomaggidoh.\n\nYa Rab erham, Ya Rab erham, Ya Rab barek, Amin.",
                cop_de: "Ten-chisi emmo eth-mav em-pi-ouoini en-ta-phmei: ten-ti-o-ou ne o thi-ethowab ouoh em-mas-nouti: je a-re-misi nan em-Pen-sotir em-pi-kosmos tirf: af-i ouoh af-soti en-nen-psichi.\n\nOu-o-ou nak Pen-nib Pen-ouro Pi-Khristos: pi-shou-shou ente ni-apostolos: pi-khlom ente ni-martyros: ep-thelil ente ni-dikeos: ep-tajro ente ni-ekklesia: ep-ko evol ente ni-novi.\n\nTen-hi-oish en-ti-trias ethowab: es-khen ou-meth-nouti en-ouot: ten-ouosht emmos ten-ti-o-ou nas.\n\nKyrie eleison, Kyrie eleison, Kyrie evlogison amin."
            },
            {
                id: 52,
                speaker: "Volk",
                de: "Wir glauben an den einen Gott: Gott den Vater , den Allmächtigen, Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.Wir glauben an den einen Herrn Jesus Christus , Gottes einzigen Sohn, geboren aus dem Vater vor aller Zeit Licht vom Lichte , wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden. , nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden.  Für uns Menschen und um unseres Heils willen ist er vom Himmel herabgestiegen. Er hat Fleisch angenommen durch den Heiligen Geist, von der Jungfrau Maria und ist Mensch geworden. Er wurde gekreuzigt unter Pontius Pilatus an unserer Statt,hat gelitten und ist begraben worden.Am dritten Tag auferstanden von den Toten gemäß der Schrift,aufgefahren in den Himmel, sitzt er zur Rechten seines Vaters Und so wird er wiederkommen in seiner Herrlichkeit, zu richten die Lebenden und die Toten, und seiner Herrschaft wird kein Ende sein.Ja, wir glauben an den Heiligen Geist, der Herr ist und lebendig macht, der aus dem Vater hervorgeht , der mit dem Vater und dem Sohn angebetet und verherrlicht wird. Er hat gesprochen durch die Propheten Wir glauben an die eine heilige, universale und apostolische Kirche. Wir bekennen die eine Taufe zur Vergebung der Sünden. Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt. Amen.",
                ar: "بالحقيقة نؤمن بإله واحد الله الآب ضابط الكل خالق السماء والأرض ما يُرى وما لا يُرى نؤمن برب واحد يسوع المسيح ابن الله الوحيد المولود من الآب قبل كل الدهور نور من نور إله حق من إله حق مولود غير مخلوق ، مساوٍ للآب فى الجوهـر الذى به كان كل شيء هذا الذى من أجلنا نحن البشر ومن أجل خلاصنا نزل من السماء وتجسد من الروح القدس ومن مريم العذراء وتأنس وصلب عنا على عهد بيلاطس البنطي تألم وقبر وقام من بين الاموات فى اليوم الثالث كما فى الكتب وصعد الى السموات وجلس عن يمين أبيه وأيضاً يأتى فى مجده ليدين الاحياء والاموات الذى ليس لملكه انقضاء نعم نؤمن بالروح القدس الرب المحيي المنبثق من الآب. نسجد له ونمجده مع الآب والابن الناطق فى الأنبياء وبكنيسة واحدة مقدسة جامعة رسولية ونعترف بمعمودية واحدة لمغفرة الخطايا وننتظر قيامة الأموات وحياة الدهر الآتى .آمين",
                ar_de: "Bel 7aqiqa no2men be elah wa7ed, Allah el Ab dabet el kol, 5aleq el sama wal ard, ma yora wa ma la yora. No2men be rab wa7ed Yassou3 el Massi7, Ebn Allah el wa7id, el mawloud men el Ab qabl kol el dohour. Nour men Nour, Elah 7aq men Elah 7aq, mawloud gheir ma5louq, mosawen lel Ab fel gawhar, allazy bihi kan kol shay2. Haza allazy men aglina na7n el bashar, wa men agl 5alasna, nazal men el sama, wa tagassad men el Ro7 el Qodos wa men Mariam el 3azra2 wa ta2anas. Wa soleb 3anna 3ala 3ahd Bilatos el Bonti, ta2alam wa qober wa qam men bein el amwat fel yom el thaleth kama fel kotob. Wa sa3ad ela el samawat, wa galas 3an yamin abih. Wa aydan ya2ti fi magdehi le yadin el a7ya2 wal amwat, allazy laysa le molkehi enqida2. Na3am no2men bel Ro7 el Qodos, el Rab el mo7yi, el monbathiq men el Ab. Nasgod lahu wa nomagedohu ma3 el Ab wal Ebn, el nateq fel anbya2. Wa be kanisa wa7da moqadasa game3a rasoulya. Wa na3taref be ma3moudia wa7da le maghferet el 5ataya. Wa nantazer qiyamat el amwat, wa 7ayat el dahr el aaty. Amin.",

            },
            {
                id: "19.1",
                speaker: "Priester",
                ar: "اللَّهُمَّ ارحمْنَا، قَرِر لنَا رحمةً، تراءَفْ علينَا.",
                de: "Gott erbarme dich unser, hab Erbarmen mit uns, begnade uns!",
                cop_ar: "إفنوتي ناي نان: شوب أو ناي إيرون: شينهيت خارون.",
                cop_cop: "Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲁⲛ : ϣⲱⲡ ⲟⲩⲛⲁⲓ ⲉ̀ⲣⲟⲛ : ϣⲉⲛϩⲏⲧ ϧⲁⲣⲟⲛ.",
                ar_de: "Allahomma erhamna, qarer lana rahmatan, tara'af 'alayna.",
                cop_de: "Efnouti nai nan: shop ou-nai eron: shenhit kharon."
            },
            {
                id: "19.2",
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_de: "Amin."
            },
            {
                id: "19.3",
                speaker: "Priester",
                ar: "واسمَعْنَا.",
                de: "Erhöre uns!",
                cop_ar: "سوتيم إيرون.",
                cop_cop: "Ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ.",
                ar_de: "Wasma'na.",
                cop_de: "Sotem eron."
            },
            {
                id: "19.4",
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_de: "Amin."
            },
            {
                id: "19.5",
                speaker: "Priester",
                ar: "وبارِكْنَا، واحفظْنَا، وأعِنَّا.",
                de: "Segne uns, bewahre uns, hilf uns!",
                cop_ar: "إزمو إيرون: أري إيرون: أري فو إيثين إيرون.",
                cop_cop: "Ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲛ : ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ : ⲁ̀ⲣⲓⲃⲟⲏ̀ⲑⲓⲛ ⲉ̀ⲣⲟⲛ.",
                ar_de: "Wa barikna, wahfazna, wa a'inna.",
                cop_de: "Smou eron: areh eron: ari-voithin eron."
            },
            {
                id: "19.6",
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_de: "Amin."
            },
            {
                id: "19.7",
                speaker: "Priester",
                ar: "وارفَعْ غضبَكَ عنَّا، وافتقِدْنَا بخلاصِكَ، واغفِرْ لنَا خطايانَا.",
                de: "Nimm deinen Zorn von uns, kehre gnädig mit deiner Erlösung bei uns ein und vergib uns unsere Sünden.",
                cop_ar: "أولي إم بيك جونت إيفول خارون: جيم بين شيني خين بيك أوجاي: أووه كا نين نوفي نان إيفول.",
                cop_cop: "Ⲱⲗⲓ ⲙ̀ⲡⲉⲕϫⲱⲛⲧ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲛ : ϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲡⲉⲕⲟⲩϫⲁⲓ : ⲟⲩⲟϩ ⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Warfa' ghadabaka 'anna, waftaqidna bi-khalasika, waghfir lana khatayana.",
                cop_de: "Oli em-pek-jont evol haron: jem-pen-shini khen pek-oujai: ouoh ka nen-novi nan evol."
            },
            {
                id: "19.8",
                speaker: "Volk",
                ar: "آمين. (يا رَبُّ ارْحَمْ) ٣ مرات.",
                de: "Amen. (Herr erbarme dich) 3x.",
                cop_ar: "آمين. (كيريين إليسون) ٣.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ. (Ⲕⲩⲣⲓⲉ̀ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅",
                ar_de: "Amin. (Ya Rab Erham) 3.",
                cop_de: "Amin. (Kyrie eleison) 3."
            },
            {
                id: 44,
                sectionTitle: {
                    de: "Das Evangeliumsgebe",
                    ar: "اوشيه الانجيل",
                },
                speaker: "Priester",
                cop_ar: "إشليل.",
                de: "Betet.",
                ar: "صل.",
                cop_cop: "Ϣⲗⲏⲗ",
                ar_de: "Salli.",
                cop_de: "Eshlil.",
            },
            {
                id: 45,
                speaker: "Diakon",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه.",
                de: "Erhebt euch zum Gebet.",
                ar: "للصلاة قفوا.",
                cop_cop: "Ⲉⲡⲓ ⲡⲣⲟⲥⲉⲩⲭⲏ ⲥⲧⲁⲑⲏⲧⲉ",
                ar_de: "Lel salat qefou.",
                cop_de: "E pi pros evshi estathi te.",
            },
            {
                id: 46,
                speaker: "Priester",
                cop_ar: "إيريني باسي.",
                de: "Der Friede sei mit allen.",
                ar: "السلام لجميعكم.",
                cop_cop: "Ⲉⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ",
                ar_de: "El salam le gami3ikom.",
                cop_de: "Irini pasi.",
            },
            {
                id: 47,
                speaker: "Volk",
                cop_ar: "كيه طو إبنفماتي سو.",
                de: "Und mit deinem Geiste",
                ar: "ولروحك أيضاً.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ",
                ar_de: "Wa le ro7ika aydan.",
                cop_de: "Ke to pnevmati sou.",
            },
            {
                id: 48,
                speaker: "Priester",
                cop_ar: "إفنيب إبشويس إيسوس بى إخرستوس بيننوتى فيئيطاف جوس إننيف أجيوس إتطايوت إم ماثيتيس أووه إن أبو سطولوس إثؤواب.\nجى هان ميش إم إبروفيتيس نيم هان إثمى أفيئر ابيثيمين إيناف إينى إتيتين ناف إيروؤو أووه إمبو ناف. أووه إيسوتيم إينى إتيتين سوتيم إيروؤو أووه إمبو سوتيم.\nإنثوتين ذى أوو نياتو إننيتين فال جى سيناف نيم نيتين ماشج جي سيسوتيم. مارين إيراب إم إبشا إن سوتيم أووه إى إيرى إن نيك إف أنجيليون إثؤواب خين طفه إنتى نى إثؤواب إنتاك.",
                de: "Meister, Herr Jesus Christus, unser Gott, der zu seinen heiligen Jüngern und ehrwürdigen Aposteln gesprochen hat:\nViele Propheten und Gerechte sehnten sich zu sehen, was ihr seht, und haben es nicht gesehen, und zu hören, was ihr hört, und haben es nicht gehört.\nSelig aber sind eure Augen, dass die sehen, und eure Ohren, dass sie hören. Mache uns würdig, Deine heiligen Evangelien zu hören und danach zu handeln durch die Gebete Deiner Heiligen.",
                ar: "أيها السيد الرب يسوع المسيح إلهنا، الذى خاطب تلاميذه القديسين ورسله الأطهار المكرمين. قائلاً:\nإن أنبياء وأبراراً كثيرين اشتهوا أن يروا ما أنتم ترون ولم يروا وأن يسمعوا ما أنتم تسمعون ولم يسمعوا.\nأما أنتم فطوبى لأعينكم لأنها تبصر ولآذانكم لأنها تسمع فلنستحق أن نسمع ونعمل بأوامر أناجيلك المقدسة بطلبات قديسيك.",
                cop_cop: "Ⲡⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲏⲉ̀ⲧⲁϥϫⲟⲥ ⲛ̀ⲛⲉϥⲁ̀ⲅⲓⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉ̀ⲑⲟⲩⲁⲃ.\nϪⲉ ϩⲁⲛⲙⲏϣ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛⲑⲙⲏⲓ: ⲁⲩⲉⲣⲉ̀ⲡⲓⲑⲩⲙⲓⲛ ⲉ̀ⲛⲁⲩ ⲉ̀ⲛⲏⲉ̀ⲧⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲛⲁⲩ: ⲟⲩⲟϩ ⲉ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲏⲉ̀ⲧⲉⲧⲉⲛⲥⲱⲧⲉⲙ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲥⲱⲧⲉⲙ.\nⲚ̀ⲑⲱⲧⲉⲛ ⲇⲉ ⲱ̀ⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲉⲧⲉⲛⲃⲁⲗ ϫⲉ ⲥⲉⲛⲁⲩ: ⲛⲉⲙ ⲛⲉⲧⲉⲛⲙⲁϣϫ ϫⲉ ⲥⲉⲥⲱⲧⲉⲙ. Ⲙⲁⲣⲉⲛⲉⲣⲡⲉⲙⲡϣⲁ ⲛ̀ⲥⲱⲧⲉⲙ ⲟⲩⲟϩ ⲉ̀ⲓ̀ⲣⲓ ⲛ̀ⲛⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉ̀ⲑⲟⲩⲁⲃ: ϧⲉⲛ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ.",
                ar_de: "Ayuha el sayed el Rab Yassou3 el Massi7 elahina, allazy khataba talamizahu el qadisin wa rosolohu el athar el mokaramim qa2elan:\nEnna anbia2 wa abrar kathirin eshtahaw an yaraw ma antom tarawn walam yaraw wa an yasma3ou ma antom tasma3oun walam yasma3ou.\nAmma antom fa touba le a3yonikom le annaha tobsir wa le azanikum le annaha tasma3 falnasta7iq an nasma3 wa na3mal be awamer anagilak el moqadasa be talabat qadisik.",
                cop_de: "Efnib epchois Isos Pkhristos pennouti fi-etaf-gos en-nef agios et-tayout em-mathitis owoh en-apostolos ethowab.\nJe han mish em-profitis nem han ethmi av-er epithymin enav eni eteten nav ero-oo owoh empou nav. Owoh esotem eni eteten sotem ero-oo owoh empou sotem.\nEnthoten de oo niatou en-neten val je senav nem neten mashj je se-sotem. Maren er-ep em-epsha en-sotem owoh e-iri en-nek evangelion ethowab khen tovh ente ni ethowab entak.",
            },
            {
                id: 49,
                speaker: "Diakon",
                cop_ar: "إبروس إف إكساستى إيبرتو أجيو إف أنجيليو",
                de: "Betet um des heiligen Evangeliums Willen.",
                ar: "صلوا من أجل الإنجيل المقدس.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩⲡⲉⲣ ⲧⲟⲩ ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ",
                ar_de: "Sallou men agl el engil el moqadas.",
                cop_de: "Pros evxasthe yper tou agiou evangeliou.",
            },
            {
                id: 50,
                speaker: "Volk",
                cop_ar: "كيريه ليسون",
                de: "Herr erbarme Dich",
                ar: "يا رب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 51,
                speaker: "Priester",
                cop_ar: "أرى إفمفيئى ذى اون بين نيب ان أؤون نيفين إيتاف هو نهين نان ائر بوميفئى خين نين تيهو نيم نين طوبه. إيتين ايرى إمموؤو إى إبشوى هازوك إبشويس بيننوتى.\nنيئتاف إير شورب إن إنكوت ما إمطون نؤو. نى إتشونى ما تالتشوؤ. جى إنثوك غار بى بين أونخ تيرو نيم بين أوجاى تيرو نيم تين هلبيس تيرو نيم بين تالتشو تيرو نيم تين أناستاسيس تيرين",
                de: "Gedenke auch, Herr, aller, die uns gebeten haben, ihrer in unseren Gebeten und Bitten zu gedenken, die wir Dir darbringen, Herr, unser Gott.\nDen Seelen deren, die uns vorausgegangen und entschlafen sind, gib Ruhe. Heile die Kranken. Denn Du bist unser aller Leben, unsere aller Erlösung, unsere aller Hoffnung, unser aller Heil, unsere aller Auferstehung.",
                ar: "أذكر أيضاً يا سيدنا كل الذين أوصونا أن نذكرهم في سؤالاتنا وطلباتنا التي نرفعها إليك أيها الرب إلهنا.\nالذين سبقوا فرقدوا، يارب نيحهم. المرضى اشفهم. لأنك أنت حياتنا كلنا، وخلاصنا كلنا، ورجاؤنا كلنا، وشفاؤنا كلنا، وقيامتنا كلنا.",
                cop_cop: "Ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ ⲇⲉ ⲱⲛ Ⲡⲉⲛⲛⲏⲃ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁϥϩⲟⲛϩⲉⲛ ⲛⲁⲛ ⲉ̀ⲣ̀ⲡⲟⲩⲙⲉⲩⲓ̀ ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ: ⲉ̀ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.\nⲚⲏⲉ̀ⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲉⲛⲕⲟⲧ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ. Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ϫⲉ ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛⲱⲛϧ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲡⲉⲛⲟⲩϫⲁⲓ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲧⲉⲛϩⲉⲗⲡⲓⲥ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲡⲉⲛⲧⲁⲗϭⲟ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲧⲉⲛⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲧⲏⲣⲉⲛ",
                ar_de: "Ozkur aydan ya sayedana kol allazina awsauna an nazkorohom fi so'alatina wa talabatina allati narfa3oha elayka ayuha el Rab elahina.\nAllazina sabaqo fa raqado, ya Rab nayeh-hom. El marda eshfehom. Le annaka anta 7ayatona kolina, wa khalasuna kolina, wa raga'ona kolina, wa shifa'ona kolina, wa qiyamatona kolina.",
                cop_de: "Ari-efmevi de on pen nib en ou-on niven etaf honhen nan er pou-mevi khen nen tiho nem nen tovh. Eten iri emmo-oo e ep-shoi harok Epchois Pennouti.\nNi-etaf er shorp en enkot ma emton no-ou. Ni etshoni ma tal-cho-oo. Je enthok gar pe pen onkh tiro nem pen ougai tiro nem ten hel-pis tiro nem pen tal-tcho tiro nem ten anastasis tiren",
            },
            {
                id: 52,
                speaker: "Volk",
                cop_ar: "الليلويا",
                de: "Halleluja",
                ar: "هلليلويا",
                cop_cop: "Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ",
                ar_de: "Alleluia",
                cop_de: "Alleluia",
            },
            {
                id: 53,
                speaker: "Diakon",
                cop_ar: "أسطاثي تيه ميطا فوفو ثيو أكوسومين طو أجيو إف أنجيليو",
                de: "Steht auf in Ehrfurcht vor Gott, um das hl. Evangelium zu hören.",
                ar: "قفوا بخوف الله لسماع الانجيل المقدس",
                cop_cop: "Ⲥⲧⲁⲑⲏⲧⲉ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ Ⲑⲉⲟⲩ ⲁⲕⲟⲩⲥⲱⲙⲉⲛ ⲧⲟⲩ ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ",
                ar_de: "Qefou bekhouf Allah le sama3 el engil el moqadas.",
                cop_de: "Estathi te meta fovou theou akousomen tou agiou evangeliou.",
            },
            {
                id: 54,
                speaker: "Priester",
                cop_ar: "إفسماروؤوت إنجيه فى إثنيو خين إفران إمبشويس إنتيه نى جوم كيريب إيفلوجيصون إك طو كاطا (...) أجيو إيف أنجيليون طو أنا غنوزما",
                de: "Gesegnet sei er, der kommt im Namen des Herrn der Heerscharen. Segne, o Herr, die Lesung des heiligen Evangelium nach [Matthäus / Markus / Lukas / Johannes].",
                ar: "مبارك الآتى بإسم الرب القوات يا رب بارك فصل الإنجيل المقدس من (...)",
                cop_cop: "Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ. Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ ⲉⲕ ⲧⲟⲩ ⲕⲁⲧⲁ (...) ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ ⲧⲟ ⲁⲛⲁⲅⲛⲱⲥⲙⲁ",
                ar_de: "Mobarak el aty be ism el Rab el qowat. Ya Rab barek fasl el engil el moqadas men (...)",
                cop_de: "Ef-esmaro-out enje fi-eth-nyo khen efran em-epchois ente ni-gom. Kyrie ev-logison ek tou kata (...) agiou evangeliou to ana-gnozma.",
            },
            {
                id: 55,
                speaker: "Volk",
                cop_ar: "ذوكصاصي كيريي",
                de: "Ehre sei Dir, o Herr",
                ar: "المجد لك يا رب",
                cop_cop: "Ⲇⲟⲝⲁ ⲥⲟⲓ Ⲕⲩⲣⲓⲉ",
                ar_de: "El magd laka ya Rab.",
                cop_de: "zoxa si Kyrie.",
            },

            {
                id: 56,
                speaker: "Diakon",

                de: "Erhebt euch und steht in Gottesfurcht, seid aufmerksam in Weisheit, um das heilige Evangelium zu hören. Ein Abschnitt aus dem heiligen Evangelium nach ........., dem Evangelisten und reinen Apostel. Sein Segen",
                ar: "قفوا بخوف أمام الله وانصتوا لسماع الإنجيل المقدس فصل من بشارة مار معلمنا .... البشير والتلميذ الطاهر بركاته",

                ar_de: "Qefou bekhouf amam Allah wa onsetou le sama3 el engil el moqadas fasl men beshart mar mo3alemna .... el bashir wal telmiz el taher barakatohu.",

            },
            {
                id: 57,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "sei mit uns. Amen.",
                ar: "على جميعنا. آمين.",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "3ala gami3ina. Amin.",
                cop_de: "Amin.",
            },
            {
                id: 58,
                speaker: "Diakon",
                de: "Aus den Psalmen unseres Lehrers David des Propheten und Königs. Sein Segen sei mit uns.\nEin Psalm Davids.",
                ar: "من مزامير تراتيل أبينا داود النبي والملك الطاهر بركاته على جميعنا",
                ar_de: "Men mazamir tratil abina Dawoud el nabi wal malek el taher barakatohu 3ala gami3ina.",

            },
            {
                id: 59,
                sectionTitle: {
                    de: "Der Psalm ",
                    ar: "المزمور",
                },
                speaker: "Diakon",
                de: "Der Psalm des Tages wird nun gelesen",
                ar: "ُيُقرأ المزمور"

            },
            {
                id: 60,
                speaker: "Volk",

                de: "Gesegnet sei der, der kommt im Namen des Herrn. Unser Herr, unser Gott, unser Erlöser und unser aller König, Jesus Christus, der Sohn des lebendigen Gottes, ihm gebührt Ehre in Ewigkeit. Amen.",
                ar: "مبارك الآتى باسم الرب إله القوات ربنا و الهنا ملكنا ومخلص نفوسنا ربنا يسوع المسيح ابن الله الحى الذى له المجد الدائم. الى الأبد آمين",

                ar_de: "Mobarak el aty be ism el Rab elah el qowat, rabona wa elahona malekona wa mokhales nofousena rabona Yassou3 el Massi7 ebn Allah el 7ay allazy lahu el magd el da2em. Ela el abad amin.",

            },
            {
                id: 61,
                sectionTitle: {
                    de: "Das Evangelium",
                    ar: "الانجيل",
                },
                speaker: "Diakon",
                de: "Das Evangeliums des Tages wird nun gelesen",
                ar: "ُيُقرأ الانجيل"

            },
            {
                id: 62,
                speaker: "Volk",

                de: "Ehre sei unserem Herrn in Ewigkeit",
                ar: "والمجد لله دائماً",

                ar_de: "Wal magd lillah da'iman.",

            },

            {
                id: 63,
                sectionTitle: {
                    de: "Die Evangeliumsantwort ",
                    ar: "مرد الانجيل",
                },
                speaker: "Volk",
                cop_ar: "أوؤ نياتو خين أو ميثمي ني اثؤواب انتي باي ايهوؤو بي اواي بي اواي كا طا بيف ران ني مين راتي انتي بي اخريستوس.\nاري ابريسفافين اي ايهري ايجون اوتين تشويس تيرن تي ثيؤطوكوس ماريا اثماف امبين سوتير انتيف كانين نوفي نان إيڤول.\nچيه إف إسمارؤوت إنچيه إفيوت نيم إبشيري نيم بي إبنيڤما إثؤواب تي إترياس إتجيك إيڤول تين أوأوشت إمموس تين تي أوأوناس.",
                de: "Gesegnet sind sie, in Wahrheit, die Heiligen des heutigen Tages, jeder mit seinem Namen, die von Christus Geliebten.\nSei unsere Fürsprecherin, unser aller Herrin, Mutter Gottes, Maria, Mutter unseres Erlösers, damit er uns unsere Sünden vergibt!\nGepriesen sei der Vater und der Sohn und der Heilige Geist, die vollkommene Dreifaltigkeit. Wir beten sie an und verherrlichen sie.",
                ar: "طوباهم بالحقيقة قديسي هذا اليوم كل واحد وواحد باسمه أحباء المسيح.\nاشفعي فينا يا سيدتنا كلنا السيدة مريم والدة الإله أم يسوع المسيح ليغفر لنا خطايانا.\nلأنه مبارك الآب والابن، والروح القدس، الثالوث الكامل، نسجد له ونمجده.",
                cop_cop: "Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲱ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟⲇⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.\nϪⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱⲟⲩ ⲛⲁⲥ.",
                ar_de: "Toubahom belhaqiqa qadisi haza el youm kol wahed wa wahed be esmo a7eba2 el massi7.\nEshfa3y fina ya sayidatina kolina el sayida Mariam walidat el ilah om Yassou3 el Massi7 layaghfir lana khatayana.\nLe annahu mobarak el Ab wal Ebn wal Ro7 el Qodos, el thalouth el kamel, nasgod lahu wa nomagedoh.",
                cop_de: "Ou niatou khen ou methmi ni ethowab ente pai eho-oo pi owai pi owai kata pef ran ni men rati ente Pi-khristos.\nAri presvevin e-ehri egon o ten chois tiren ti theotokos Maria ethmav empen sotir entef ka nen novi nan evol.\nJe ef esmaro-out enje Efioat nem Ep-shiri nem Pi-pnevma ethowab Ti-trias et-jik evol ten o-osht emmos ten ti o-ou nas.",
            },
            {
                id: 101,
                speaker: "Volk",
                ar: "بالمسيح يسوع ربنا.",
                de: "Durch Christus Jesus, unsern Herrn.",
                cop_ar: "خين بي إخرستوس إيسوس بين تشويس.",
                cop_cop: "Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.",
                cop_de: "Khen Pi-Khristos Isous Pen-chois.",
                ar_de: "Bel-Masih Yasou3 Rabbina."
            },
            {
                id: 102,
                speaker: "Diakon",
                ar: "احنوا رؤوسكم للرب.",
                de: "Neigt euer Haupt vor dem Herrn!",
                cop_ar: "طاس كيفالاس إيمون طو كيريو كليناتيه.",
                cop_cop: "Ⲧⲁⲥ ⲕⲉⲫⲁⲗⲁⲥ ⲩ̀ⲙⲱⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ ⲕⲗⲓⲛⲁⲧⲉ.",
                cop_de: "Tas kefalas ymon to kyrio klinate.",
                ar_de: "E7nou ro2ousakom lel-Rabb."
            },
            {
                id: 103,
                speaker: "Volk",
                ar: "أمامك يا رب (خاضعين وساجدين).",
                de: "Vor Dir, o Herr. (Wir sind dir ergeben und knien)",
                cop_ar: "إينوبيون صو كيريه.",
                cop_cop: "Ⲉⲛⲱⲡⲓⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ.",
                cop_de: "Enopion so Kyrie.",
                ar_de: "Amamaka ya Rabb."
            },
            {
                id: 104,
                speaker: "Diakon",
                ar: "ننصت بخوف الله آمين.",
                de: "Wir hören in Gottesfurcht zu. Amen.",
                cop_ar: "إبروس خومين ثيه أوميه طافوفو: آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ Ⲑⲉⲱ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ: Ⲁⲙⲏⲛ.",
                cop_de: "Epros khomin thie omieh tafovo: Amen.",
                ar_de: "Nonsit be-khawf Allah. Amen."
            },
            {
                id: 105,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 106,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan.",
                next_action: "show_reconciliation_menu",
                type: "menu_selection", // Optional: Damit die App weiß, dass jetzt Buttons kommen
                reconciliation_menu: [
                    { label_ar: "الحمل", label_de: "Auswahl des Lammbrotes", action: "goto_offering_id_1" },
                ],

            },


        ]
    },

    offering: {
        title: {
            de: "Auswahl des Lammbrotes",
            ar: "تقديم الحمل"
        },
        content: [
            // 1. GLAUBENSBEKENNTNIS
            {
                id: 1,
                speaker: "Volk",
                de: "Wir glauben an den einen Gott: Gott den Vater , den Allmächtigen, Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.Wir glauben an den einen Herrn Jesus Christus , Gottes einzigen Sohn, geboren aus dem Vater vor aller Zeit Licht vom Lichte , wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden. , nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden.  Für uns Menschen und um unseres Heils willen ist er vom Himmel herabgestiegen. Er hat Fleisch angenommen durch den Heiligen Geist, von der Jungfrau Maria und ist Mensch geworden. Er wurde gekreuzigt unter Pontius Pilatus an unserer Statt,hat gelitten und ist begraben worden.Am dritten Tag auferstanden von den Toten gemäß der Schrift,aufgefahren in den Himmel, sitzt er zur Rechten seines Vaters Und so wird er wiederkommen in seiner Herrlichkeit, zu richten die Lebenden und die Toten, und seiner Herrschaft wird kein Ende sein.Ja, wir glauben an den Heiligen Geist, der Herr ist und lebendig macht, der aus dem Vater hervorgeht , der mit dem Vater und dem Sohn angebetet und verherrlicht wird. Er hat gesprochen durch die Propheten Wir glauben an die eine heilige, universale und apostolische Kirche. Wir bekennen die eine Taufe zur Vergebung der Sünden. Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt. Amen.",
                ar: "بالحقيقة نؤمن بإله واحد الله الآب ضابط الكل خالق السماء والأرض ما يُرى وما لا يُرى نؤمن برب واحد يسوع المسيح ابن الله الوحيد المولود من الآب قبل كل الدهور نور من نور إله حق من إله حق مولود غير مخلوق ، مساوٍ للآب فى الجوهـر الذى به كان كل شيء هذا الذى من أجلنا نحن البشر ومن أجل خلاصنا نزل من السماء وتجسد من الروح القدس ومن مريم العذراء وتأنس وصلب عنا على عهد بيلاطس البنطي تألم وقبر وقام من بين الاموات فى اليوم الثالث كما فى الكتب وصعد الى السموات وجلس عن يمين أبيه وأيضاً يأتى فى مجده ليدين الاحياء والاموات الذى ليس لملكه انقضاء نعم نؤمن بالروح القدس الرب المحيي المنبثق من الآب. نسجد له ونمجده مع الآب والابن الناطق فى الأنبياء وبكنيسة واحدة مقدسة جامعة رسولية ونعترف بمعمودية واحدة لمغفرة الخطايا وننتظر قيامة الأموات وحياة الدهر الآتى .آمين",
                ar_de: "Bel 7aqiqa no2men be elah wa7ed, Allah el Ab dabet el kol, 5aleq el sama wal ard, ma yora wa ma la yora. No2men be rab wa7ed Yassou3 el Massi7, Ebn Allah el wa7id, el mawloud men el Ab qabl kol el dohour. Nour men Nour, Elah 7aq men Elah 7aq, mawloud gheir ma5louq, mosawen lel Ab fel gawhar, allazy bihi kan kol shay2. Haza allazy men aglina na7n el bashar, wa men agl 5alasna, nazal men el sama, wa tagassad men el Ro7 el Qodos wa men Mariam el 3azra2 wa ta2anas. Wa soleb 3anna 3ala 3ahd Bilatos el Bonti, ta2alam wa qober wa qam men bein el amwat fel yom el thaleth kama fel kotob. Wa sa3ad ela el samawat, wa galas 3an yamin abih. Wa aydan ya2ti fi magdehi le yadin el a7ya2 wal amwat, allazy laysa le molkehi enqida2. Na3am no2men bel Ro7 el Qodos, el Rab el mo7yi, el monbathiq men el Ab. Nasgod lahu wa nomagedohu ma3 el Ab wal Ebn, el nateq fel anbya2. Wa be kanisa wa7da moqadasa game3a rasoulya. Wa na3taref be ma3moudia wa7da le maghferet el 5ataya. Wa nantazer qiyamat el amwat, wa 7ayat el dahr el aaty. Amin.",

            },
            {
                id: 2,
                // Hier ist der Titel für den neuen Abschnitt
                sectionTitle: {
                    de: "Die Auswahl des Lammbrotes",
                    ar: "تقديم الحمل"
                },
                speaker: "Volk",
                // Das \n sorgt für neue Zeilen im Arabischen
                ar: "كيريه ليسون كيريه ليسون يارب ارحم\nكيريه ليسون كيريه ليسون ارحمنا يا الله\nكيريه ليسون كيريه ليسون اسمعنا و ارحمنا",
                cop_cop: "Kurie `ele`ycon.",


            },
            {
                id: 2.5, // Neue ID für den Zähler
                counter: 41 // Der Zähler steht alleine in einem eigenen Block
            },
            {
                id: 3,
                speaker: "Volk",

                de: "Heilig, heilig, heilig ist der Herr der Heerscharen, der Himmel und die Erde sind erfüllt von deiner Herrlichkeit und Ehre. Gott, Vater, Allmächtiger, erbarme dich unser,Heiligste Dreifaltigkeit, erbarme dich unser,  Herr, Gott aller Mächte und Gewalten, sei mit uns, denn wir haben keinen anderen Beistand in unseren Nöten und Bedrängnissen außer dir. Tilge, vergib und verzeih uns unsere Missetaten, o Gott: die freiwilligen und unfreiwilligen, die bewussten und unbewussten, die sichtbaren und unsichtbaren. Herr, vergib sie uns um deines heiligen Namens willen, der über uns angerufen ist. Nach deinem Erbarmen, o Herr, und nicht nach unseren Sünden.  Unser Herr, mache uns würdig, in Dankbarkeit zu sprechen: Vater unser....",
                ar: " ....قدوس، قدوس، قدوس، رب الصباؤوت. السماء والأرض مملوءتان من مجدك وكرامتك. ارحمنا يا الله الآب ضابط الكل. أيها الثالوث القدوس ارحمنا. أيها الرب إله القوات كن معنا، لأنه ليس لنا معين في شدائدنا وضيقاتنا سواك. حل واغفر واصفح لنا يا الله عن سيئاتنا، التي صنعناها بإرادتنا والتي صنعناها بغير إرادتنا، التي فعلناها بمعرفة والتي فعلناها بغير معرفة، يارب اغفرها لنا من اجل اسمك القدوس الذي دعي علينا. كرحمتك يا رب وليس كخطايانا. و اجعلنا مستحقين ان نقول لك بشكر ابانا الذي ",
                ar_de: "Qoddos, Qoddos, Qoddos, Rab el Saba2out. El sama wal ard mamlou2atan men magdika wa karamatika. Er7amna ya Allah el Ab dabet el kol. Ayuha el thalouth el qoddos er7amna. Ayuha el Rab elah el qowat kon ma3ana, le annahu laysa lana mo3in fi shada2edina wa diqatina siwak. 7al wa eghfer wa esfa7 lana ya Allah 3an saye2atina, allati sana3naha be iradatina wa allati sana3naha be gheir iradatina, allati fa3alnaha be ma3rifa wa allati fa3alnaha be gheir ma3rifa, Ya Rab eghferha lana men agl esmika el qoddos allazy do3ya 3alayna. Ka ra7matika ya Rab wa laysa ka 5atayana. Wa eg3alna mosta7iqqin an naqoul laka be shokr Abana allazy..",



            },
            {
                id: 4,
                speaker: "P",
                cop_ar: "أو أو أو نيم أوطايو أوطايو نيم أو أو أو إنتي بان أجيا ترياس لإفيوت نيم ابشيري نيم بي ابنيفما إثؤواف أو هيرينى نيم و كوت إيجين تي أوى إممافتس إثؤواف إن كاثوليكي إن إبواسطوليكي إن اككلسيا انتي افنوتي آمين أري افمفيئي ابشويس ان ني ايطاف ايني ناك ايخون ان ناي ذورون  نيم ني ايطاف اين ايجوؤو نيم ني ايطاف اينو ايفول هيطوطو موي نؤو تيرو امبي فيكي بي ايفول خين ني فيئوي",
                de: "Ehre und Ruhm, Ruhm und Ehre der heiligen Dreifaltigkeit, dem Vater, dem Sohn und den Heiligen Geist Friede und Wachstum der Kirche Gottes, der einen, einzigen, heiligen, universalen und apostolischen Kirche. Amen Gedenke, o Herr, derer, die dir diese Gaben dargebracht haben, derer, für die sie dargebracht werden und derer, durch die sie dargebracht werden. Gib ihnen allen den himmlischen Lohn ",
                ar: "مجداً وإكراماً إكراماً ومجداً للثالوث الأقدس الآب والابن والروح القدس سلاماً وبنياناً لكنيسة الله الواحدة الوحيدة المقدسة الجامعة الرسولية آمين أذكر يارب الذين قدموا لك هذه القرابين والذين قُدمت عنهم والذين قُدمت بواسطتهم أعطهم كلهم الأجر السمائي ",
                cop_cop: "",
                ar_de: "Magdan wa ekraman, ekraman wa magdan lel thalouth el aqdas, el Ab wal Ebn wal Ro7 el Qodos. Salaman wa bonyanan le kanisat Allah el wa7ida el wa7ida el moqadasa el game3a el rasoulya. Amin. Ozkur ya Rab allazina qadamou laka hazihi el qarabin, wa allazina qodimat 3anhom, wa allazina qodimat be wasitatihim, a3tehom kolahom el agr el sama2i.",
                cop_de: "Ouoh nem outayo outayo nem ouow ente pen agia trias efyot nem epshiri nem pi pnevma ethowab ou hirini nem ou koti egen ti oi emmavets ethowab en katholiki en apostoliki en ekklesia ente efnouti Amin ari efmevi epshois en ni etaf ini nak ekhoun en nai doron nem ni etaf en egou nem ni etaf enou evol hitotou moi no tiro empi veki pi evol khen ni feoui.",

            },
            {
                id: 5,
                speaker: "D",
                cop_ar: "إبروس إفكصاستيه إي بيرطون آجيون تيميون ذورون طوطون كيه سيون ايمون كيه إبروس فيرون طون: كريه ليسون.",
                de: "Betet für diese heiligen und ehrwürdigen Gaben, für unsere Opfer und für diejenigen, die sie dargebracht haben.",
                ar: "صلوا من أجل هذه القرابين المقدسة الكريمة وتقدماتنا والذين قدموها يارب ارحم ",
                cop_cop: "",
                ar_de: "Sallou men agl hazihi el qarabin el moqadasa el karima wa taqdomatina wa allazina qadamouha Ya Rab er7am.",
                cop_de: "Pros evxasthe yper ton agion timion doron touton ke thision imon ke prosferonton: Kyrie eleison.",

            },
            {
                id: 6,
                speaker: "Volk",
                cop_ar: "الليلويا فاى بيه بى إيه هؤو إيه طا إبتشويس ثاميوف: مارين ثليل إنتين أونوف إممون إنخيتف:",
                de: "Halleluja. Dies ist der Tag, den der Herr gemacht hat; Lasst uns jubeln und uns freuen an ihm.",
                ar: "هلليلويا. هذا هو اليوم الذى صنعه الرب فلنفرح ونبتهج فيه",
                cop_cop: "",
                ar_de: "Halelluia. Haza howa el yom allazy sana3ahu el Rab, fal nafra7 wa nabtaheg fihi.",
                cop_de: "Alleluia. Fai pe pi e-ho-oo eta Epchois thamiof, maren thelel enten ounof emmon enkheetf.",
            },
            {
                id: 7,
                speaker: "Priester",
                cop_ar: "خين إفران إم افيوت نيم إبشيري نيم بي إبنيفما إثؤواب أو نوتي إن أو أوت اف أسمارؤوت انجى افيوت بى بانطوكراطور آمين",
                de: "Im Namen des Vaters, des Sohnes und des Heiligen Geistes, des einen Gottes. Gepriesen sei Gott, der Vater, der allmächtige. Amen.",
                ar: "باسم الآب والابن والروح القدس إله واحد مبارك الله الآب ضابط الكل",
                cop_cop: "",
                ar_de: "Basm el Ab wal Ebn wal Ro7 el Qodos elah wa7ed mobarak Allah el Ab dabet el kol.",
                cop_de: "Khen efran em efyot nem epshiri nem pi pnevma ethowab ou nouti en ou ot af esmaroot enje efyot pi pantokrator amin.",
            },
            {
                id: 8,
                speaker: "Diakon",
                de: "Amen.",
                ar: "آمين.",
                cop_cop: "",
            },
            {
                id: 9,
                speaker: "Priester",
                cop_ar: "اف أسمارؤوت انجى بيف مونوجينيس انشيرى ايسوس بيخرستوس بين تشويس آمين",
                de: "Gepriesen sei sein eingeborener Sohn, Jesus Christus, unser Herr. Amen.",
                ar: "مبارك ابنه الوحيد يسوع المسيح ربنا امين",
                cop_cop: "",
                ar_de: "Mobarak ebnohu el wa7id Yassou3 el Massi7 Rabbana Amin.",
                cop_de: "Af esmaroot enje pef monogenes enshiri Isos Pkhristos pen chois amin.",
            },
            {
                id: 10,
                speaker: "Diakon",
                de: "Amen.",
                ar: "آمين.",
                cop_cop: "",
            },
            {
                id: 11,
                speaker: "Priester",
                cop_ar: "اف أسمارؤوت انجى بي بنفما اثؤواب ام باراكليتون آمين",
                de: "Gepriesen sei der Heilige Geist, der Tröster. Amen.",
                ar: "مبارك الروح القدس المعزي آمين",
                cop_cop: "",
                ar_de: "Mobarak el Ro7 el Qodos el Mo3azi Amin.",
                cop_de: "Af esmaroot enje pi pnevma ethowab em parakliton amin.",
            },
            {
                id: 12,
                speaker: "Diakon",
                de: "Amen.",
                ar: "آمين.",
                cop_cop: "",
            },

            {
                id: 13,
                speaker: "Diakon",
                cop_ar: "إسباتير آجيوس إس إيوس آجيوس إن إبنيفما آجيون آمين. إفلوجي طوس كيريوس أوثيه أوس إس طوس إيه أوناس آميـن. ني إيثنوس تيرو إسمو إبتشويس مارو إسمو إيه روف إنجيه ني لاؤس تيرو: جيه آبيف ناي طاجرو إيه إهري إيه جون: أووه تيه ميثمي إنتيه إبتشويس شوب شا إينيه آمين. الليلويا",
                de: "Einer ist der Heilige Vater. Einer ist der Heilige Sohn. Einer ist der Heilige Geist. Amen.Gepriesen sei der Herr, Gott in alle Ewigkeiten. Amen Lobt den Herrn, alle Völkerschaften, lobpreist ihn, alle Völker, denn erstarkt ist sein Erbarmen über uns, und die Wahrheit des Herrn bleibt bis in Ewigkeit. Amen. Halleluja. ",
                ar: "واحدٌ هو الآب القدوس، واحدٌ هو الابن القدوس، واحدٌ هو الروح القدس. آمين. مبارك الرب الإله إلي الأبد. آمين. يا جميع الامم باركوا الرب. ولتباركه جميع الشعوب. لان رحمته ثبتت علينا. و حق الرب يدوم إلي الابد. آمين. هلليلويا.",
                cop_cop: "",
                ar_de: "Wa7ed howa el Ab el Qoddos, wa7ed howa el Ebn el Qoddos, wa7ed howa el Ro7 el Qodos. Amin. Mobarak el Rab el Elah ela el abad. Amin. Ya gamie3 el omam bariko el Rab. Wal tobarikhu gamie3 el sho3oub. Lan ra7matuhu thabatat 3alayna. Wa 7aq el Rab yadoum ela el abad. Amin. Halelluia.",
                cop_de: "Espatir agios es iyos agios en epnevma agion amin. Eflogitos kyrios o theos es tos e-onas amin. Ni ethnos tiro esmou epchois marou esmou e-rof enje ni laos tiro: je a-pef nai tagro e-hri e-gon: owoh ti methmi ente epchois shop sha eneh amin. Alleluia",
            },
            {
                id: 14,
                speaker: "Volk",
                cop_ar: "ذوكصابتري كيه إيو كيه آجيو إبنڤماتي: كيه نين كيه آ إى كيه إسطوس إيه أوناس طون إيه أونون آمين. الليلويا",
                de: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt, alle Zeit und in alle Ewigkeit. Amen. Halleluja.",
                ar: "المجد للآب والابن والروح القدس، الآن وكل اوان وإلي دهر الدهور. آمين. هلليلويا.",
                cop_cop: "",
                ar_de: "El magd lel Ab wal Ebn wal Ro7 el Qodos, el an wa kol awan wa ela dahr el dohour. Amin. Halelluia.",
                cop_de: "zoxa patri ke iyo ke agio pnevmati: ke nyn ke a-ei ke es-tos e-onas ton e-onon amin. Alleluia.",
            },
            {
                id: 15,
                sectionTitle: {
                    de: "Danksagungsgebet",
                    ar: "صلاه الشكر"
                },
                speaker: "Priester",
                cop_ar: "إشليل.",
                de: "Betet.",
                ar: "صل.",
                cop_cop: "",
                ar_de: "Salli.",
                cop_de: "Eshlil.",
            },
            {
                id: 16,
                speaker: "Diakon",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه.",
                de: "Erhebt euch zum Gebet.",
                ar: "للصلاة قفوا.",
                cop_cop: "",
                ar_de: "Lel salat qefou.",
                cop_de: "E pi pros evshi estathi te.",
            },
            {
                id: 17,
                speaker: "Priester",
                cop_ar: "إيريني باسي.",
                de: "Der Friede sei mit Euch.",
                ar: "السلام لجميعكم.",
                cop_cop: "",
                ar_de: "El salam le gami3ikom.",
                cop_de: "Irini pasi.",
            },
            {
                id: 18,
                speaker: "Volk",
                cop_ar: "كيه طو إبنفماتي سو.",
                de: "Und mit deinem Geiste.",
                ar: "ولروحك أيضاً.",
                cop_cop: "",
                ar_de: "Wa le ro7ika aydan.",
                cop_de: "Ke to pnevmati sou.",
            },
            {
                id: 19,
                speaker: "Priester",
                cop_ar: "مارين شيبئهموت إنتطف إم بيريف إير بيثا نيف أُوه إن نائيت إفنوتي إفيوت إم بين شويس أووه بيننوتي أووه بنسوتير إيسوس بي إخريستوس جي أفئير .  إسكيبازين إيجون آفئير فويثين إيرون أفأريه إيرون آف شوبتين إيروف آف تي آسو إيرون آف تيتوتين آف إينتين شا إى إهري إيطاي أو نوثاي. إنثوف أون مارين تيهوإيروف هوبوس إنتيف آريه إيرون خين باي إيهوؤو إثؤواب فاى نيم ني إيهوؤوتيرو أنتي بين أونخ خين هيريني نيفين إنجي بي بانطوكراطور إبشويس بيننوتي  ",
                de: "Lasst uns Dank sagen dem Wohltaten spendenden und erbarmungsreichen Gott, dem Vater unsers Herrn, Gottes und Erlösers Jesus Christus. Denn er hat uns beschützt, geholfen, bewahrt, angenommen, mit Erbarmen bedacht und bis zu dieser Stunde gelangen lassen. Ihn, den allmächtigen Herrn unseren Gott, bitten wir auch, dass er uns an diesem heiligen Tag und an allen Tagen unseres Lebens in Frieden bewahre.",
                ar: "فلنشكر صانع الخيرات الرحوم الله أبا ربنا وإلهنا ومخلصنا يسوع المسيح. لأنه سترنا وأعاننا وحفظنا وقبلنا إليه. وشفق علينا وعضدنا وأتي بنا إلي هذه الساعة. هو أيضا فلنسأله أن يحفظنا في هذا اليوم المقدس، وكل أيام حياتنا بكل سلام، ضابط الكل الرب الهنا.",
                cop_cop: "",
                ar_de: "Falnashkor sane3 el khayrat el ra7oum Allah Aba Rabbina wa Elahina wa Mokhalisina Yassou3 el Massi7. Le annahu satarana wa a3anana wa 7afazana wa qabilana elayhi. Wa shafaqa 3alayna wa 3adadana wa ata bina ela hazihi el sa3a. Howa aydan fal nas'alhu an ya7fazana fi haza el yom el moqadas, wa kol ayam 7ayatina bekol salam, dabet el kol el Rab Elahina.",
                cop_de: "Maren shep-hmot entotf em-piref er-pethanef owoh en-na-et efnouti efyot em-pen chois owoh pennouti owoh pen-sotir Isos Pkhristos je af-er skepazin ejon af-er voithin eron af-areh eron af-shopten erof af-ti-aso eron af-titotin af-enten sha e-hri e-tai ounou thai. Enthof on maren ti-ho erof hopos entef-areh eron khen pai e-ho-oo ethowab fai nem ni e-ho-oo tiro ente pen onkh khen hirini niven enje pi pantokrator epchois pennouti.",
            },
            {
                id: 20,
                speaker: "Diakon",
                cop_ar: "إبروس إفكصاستيه",
                de: "Betet.",
                ar: "صلوا",
                cop_cop: "",
                ar_de: "Sallou.",
                cop_de: "Pros evxasthe.",
            },
            {
                id: 21,
                speaker: "Volk",
                cop_ar: "كيريه ليسون",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "",
                ar_de: "Ya Rab Er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 22,
                speaker: "Priester",
                cop_ar: "إفنيب إبشويس إفنوتي بي بانطوكراطور إفيوت إمبين شويس أووه بيننوتي أووه بين سوتير إيسوس بي إخرستوس تين شيبئهموت إن توتك كاطا هوب نيفين نيم إثفي هوب نيفين نيم خين هوب نيفين . جي أك إير إسكيبازين إجون أك إيرفويثين إيرون أك أريه إيرون أك شوبتين إيروك أك تي آسو إيرون أك تي توتين أك إين تين شا إى إهري إيطاي أو نو ثاى .",
                de: "Meister, Herr, allmächtiger Gott, Vater unseres Herrn, Gottes und Erlösers Jesus Christus. Wir danken dir für alles, wegen allem und in allem. Denn Du hast uns beschützt, geholfen, bewahrt, uns angenommen, mit Erbarmen bedacht, gestärkt und bis zu dieser Stunde geführt.",
                ar: "أيها السيد الرب الاله ضابط الكل أبو ربنا وإلهنا ومخلصنا يسوع المسيح. نشكرك علي كل حال ومن أجل كل حال وفي كل حال. لأنك سترتنا وأعنتنا وحفظتنا وقبلتنا إليك وأشفقت علينا وعضدتنا، وأتيت بنا إلي هذه الساعة.",
                cop_cop: "",
                ar_de: "Ayouha el sayed el Rab el Elah dabet el kol, Abo Rabbina wa Elahina wa Mokhalisina Yassou3 el Massi7. Nashkoroka 3ala kol 7al wa men agl kol 7al wa fi kol 7al. Le annaka satartana wa a3antana wa 7afaztana wa qabiltana elayk wa shafaqta 3alayna wa 3adadtana, wa atayta bina ela hazihi el sa3a.",
                cop_de: "Ef-nib epchois efnouti pi pantokrator efyot em-pen chois owoh pennouti owoh pen sotir Isos Pkhristos. Ten shep-hmot entotk kata hob niven nem ethvi hob niven nem khen hob niven. Je ak-er skepazin egon ak-er voithin eron ak-areh eron ak-shopten erok ak-ti-aso eron ak-ti-totin ak-en-ten sha e-hri e-tai ounou thai.",
            },
            {
                id: 23,
                speaker: "Diakon",
                cop_ar: "طوبه هينا إنتيه إفنوتي ناي نان: إنتيف شينهيت خارون: إنتيف سوتيم إيه رون: إنتيف إيرفو إيثين إيه رون: إنتيف تشي إن ني تيهو نيم ني طوبه إنتيه ني إثؤواب إنطاف إن طوطو إيه إهري إيه جون إيه بى آغاثون: إنسيو نيفين: إنتيف ايتين ان ائمبشا اشرين اتشي ايفول خين تي كينوني ا انتي نيف ميستيريون إثؤواب اتسمارؤوت ابيكو ايفول انتي نين نوفي",
                de: "Bittet, dass Gott sich unser erbarme: gnädig mit uns sei, uns erhöre und helfe, die Gebete und Bitten seiner Heiligen annehme für unser Wohlergehen zu allen Zeiten, und uns würdig mache, die Teilhabe an seinen heiligen Sakramenten zu erlangen zur Vergebung unserer Sünden.",
                ar: "اطلبوا لكي يرحمنا الله ويتراءف علينا ويسمعنا ويعيننا ويقبل سؤالات وطلبات قديسيه منهم بالصلاح عنا في كل حين ويجعلنا مستحقين أن ننال من شركة أسراره المقدسة المباركة، لمغفرة خطايانا.",
                cop_cop: "",
                ar_de: "Otlobo lekay yar7amana Allah wa yatara'af 3alayna wa yasma3ana wa yo3inana wa yaqbal so'alat wa talabat qadisih minhom bel sala7 3anna fi kol 7in wa yag3alana mosta7iqin an nanal men sharikat asrarihi el moqadasa el mobaraka, le maghfirat khatayana.",
                cop_de: "Tubh hina ente efnouti nai nan: entef shenhit kharon: entef sotem e-ron: entef er-voithin e-ron: entef chi en ni tiho nem ni tovh ente ni ethowab entaf en toto e-hri e-gon e-pi agathon: en-sio niven: entef aiten en empsha etren chi evol khen ti kynonia ente nef mysterion ethowab et-esmaroot ep-iko evol ente nen novi.",
            },
            {
                id: 24,
                speaker: "Volk",
                cop_ar: "كيريه ليسون",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "",
                ar_de: "Ya Rab Er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 25,
                speaker: "Priester",
                cop_ar: "إثفى فاى تين تيهو أووه تين طفه إن تيك ميت آغاثوس بى ما رومى ميس نان إثرين جوك إيفول إم باى كى إيهوؤو إثؤواب فاى نيم نى إيهوؤو تيرو إنتى بين أونخ خين هيريني نيفين نيم تيك هوتى إفثونوس نيفين بى راسموس نيفين إن إرجيا نيفين إنتى إبساطاناس إبسوتشنى إنتى هان رومى إف هوؤو نيم إبطونف إى إبشوى إنتى هان جاجى نى إتهيب نيم نى إثؤأونه إيفول آليتو إيفول هارون نيم إيفول ها بيك لاؤس نيم إيفول هاتاى اترابيزا ثاى تيرف نيم إيفول ها باى ما إثؤواب إنتاك فاى. نى ذى إثنانيف نيم نى إتئر نوفرى ساهنى إموؤو نان جى إثنوك بى اتاكثى إم بى إير شيشى نان إيهومى إيجين نى هوف نيم نى إتشيلى نيم إيجين تى جوم تيرس إنتى بى جاجى.",
                de: "Darum bitten wir und erflehen Deine Güte, Menschenliebender, gewähre uns, diesen heiligen Tag und alle Tage unseres Lebens in völligem Frieden zu vollenden in Ehrfurcht vor dir. Jeden Neid, jede Versuchung, alle Werke des Satans, die Nachstellungen böser Menschen und das Hervorkommen von Feinden, Verborgenen oder offenkundig halte fern von uns, und von deinem ganzen Volk und von diesem Tische und von diesem deinem heiligen Ort. Die guten und die nützlichen Dinge aber lass uns zuteil werden, denn du hast uns Macht gegeben, auf Schlangen und Skorpione und jegliche Macht des Feindes zu treten.",
                ar: "من اجل هذا نسأل ونطلب من صلاحك يا محب البشر امنحنا أن نكمل هذا اليوم المقدس وكل أيام حياتنا بكل سلام مع خوفك كل حسد وكل تجربة وكل فعل الشيطان ومؤامرة الناس الأشرار وقيام الأعداء الخفيين والظاهـرين إنزعها عنا وعن سائر شعبك وعن هذه المائدة وعن موضعك المقدس هذا. أما الصالحات والنافعات فإرزقنا إياها لأنك أنت الذي أعطيتنا السلطان أن ندوس الحيات والعقارب وعلي كل قوة العدو",
                cop_cop: "",
                ar_de: "Min agl haza nas'al wa natlob men sala7eka ya mo7eb el bashar emna7na an nokamel haza el yom el moqadas wa kol ayam 7ayatina bekol salam ma3a khawfeka kol 7asad wa kol tagroba wa kol fe3l el shaytan wa mo'amarat el nas el ashrar wa qiyam el a3da' el khafyin wal zaherin inza3ha 3anna wa 3an sa'er sha3beka wa 3an hazihi el ma'eda wa 3an mawde3eka el moqadas haza. Amma el sale7at wal nafe3at farzoqna iyaha le annaka anta allazi a3taytana el soltan an nadous el 7ayat wal 3aqareb wa 3ala kol qowat el 3adow.",
                cop_de: "Ethve fai ten tiho owoh ten tovh en tek met aghathos pi mai romi mis nan ethren jok evol em pai ke eho-oo ethowab fai nem ni eho-oo tiro ente pen onkh khen hirini niven nem tek hoti efthonos niven pirasmos niven energiah niven ente epsatanas ep-sotchni ente han romi ef ho-oo nem ep-tonf e ep-shoi ente han jaji ni et-hip nem ni eth-ouonh evol ali-tou evol haron nem evol ha pek laos nem evol ha tai trapeza thai tirf nem evol ha pai ma ethowab entak fai. Ni de eth-nanev nem ni et-er nofri sahni emo-oo nan je enthok pe atak-ti em pi er shishi nan e-homi ejen ni hof nem ni jli nem ejen ti jom tirs ente pi jaji.",
            },
            {
                id: 26,
                speaker: "Volk",
                cop_ar: "سوتيس آمين كي طو بنيڤماتي سو",
                de: "Erlöst Amen und mit deinem Geiste",
                ar: "خلصت حقا ولروحك.",
                cop_cop: "",
                ar_de: "Khollist 7aqqan wa le ro7ika.",
                cop_de: "Sotis amin ke to pnevmati sou.",
            },
            {
                id: 27,
                sectionTitle: {
                    de: "Absolution der Dienenden",
                    ar: "تحليل الخدام"
                },
                speaker: "p",
                ar: "عبيدك يا رب خدام هذا اليوم القمامصة والقسوس والشمامسة والاكليروس وكل الشعب وضعفي يكونون محاللين من فم الثالوث القدوس الآب والابن والروح القدس ومن فم الكنيسة الواحدة الوحيدة المقدسة الجامعة الرسولية ومن أفواه الاثني عشر رسولا ومن فم ناظر الاله الإنجيلى مرقس الرسول الطاهر والشهيد والبطريرك القديس ساويرس ومعلمنا ديوسقورس والقديس أثناسيوس الرسولي والقديس بطرس خاتم الشهداء رئيس الكهنة والقديس يوحنا ذهبي الفم والقديس كيرلس والقديس باسيليوس والقديس اغريغوريوس ومن أفواه الثلاثمائة والثمانية عشر المجتمعين بنيقية والمئة والخمسين بالقسطنطينية والمائتين بأفسس ومن فم أبينا المكرم رئيس الكهنة البابا أنبا تواضرس الثانى وشركاءه  في الخدمة الرسولية ابونا المطران المكرم الانبا دميان .و ابونا الاسقف المكرم الانبا ديسقورس ومن فم حقارتي. لانه مبارك ومملوء مجدا اسمك القدوس أيها الآب والابن والروح القدس الآن وكل أوان وإلي دهر الدهور كلها آمين. ",
                de: "Deine Diener an diesem Tag, Die Erzpriester, Die Priester, Die Diakone, Kleriker, das ganze Volk und ich Schwacher, seien alle losgesprochen durch den Mund der Heiligen Dreifaltigkeit, des Vaters, des Sohnes und des Heiligen Geistes, durch den Mund der einen, einzigen, heiligen, universalen und apostolischen Kirche, durch den Mund der zwölf Jünger, durch den Mund des Gottessehers, des Evangelisten, Apostels und Märtyrers Markus, des Patriarchen Hl. Severus, unseres Lehrers Dioskorus, des apostelgleichen Athanasius,des Hl. Märtyrers und Papstes Petrus, des Hl. Johannes Chrisosthomus, des Hl. Kyrillus, des Hl. Basilius, des Hl. Gregorius, und durch den Mund der dreihundertachtzehn versammelten Väter in Nicea, der einhundertfünfzig in Konstantinopel und der zweihundert zu Ephesus versammelten Väter; und durch den Mund unseres ehrwürdigen Vaters, des Papstes Anba Tawadeos II  und durch seine Teilhaber am apostolischen Dienst, unseren ehrwürdigen Vater, Erzbischof Anba Damian, und unseren ehrwürdigen Vater, Bischof Anba Dioskorus.  durch den Mund meiner Niedrigkeit, denn gepriesen und voll der Ehre sei Dein Heiliger Name, o Vater, Sohn und Heiliger Geist. Jetzt, alle Zeit und in Ewigkeit. Amen.",
                ar_de: "3abeedoka ya Rab khoddam haza el yom el qamamisa wal qosous wal shamamesa wal ekliros wa kol el sha3b wa da3fi yakounoun mo7alalin men fam el thalouth el qoddos el Ab wal Ebn wal Ro7 el Qodos wa men fam el kanisa el wa7ida el wa7ida el moqadasa el game3a el rasoliya wa men afwah el ethnay 3ashar rasoula wa men fam nazer el elah el ingili Morqos el rasoul el taher wal shahid wal batriark el qadis Sawiros wa mo3alimina Dioscoros wal qadis Athanasios el rasouli wal qadis Botros khatem el shohada' ra'is el kahana wal qadis Youhanna zahabi el fam wal qadis Kirollos wal qadis Basilios wal qadis Aghrioghorios wa men afwah el thalathema'a wal thamaniat 3ashar el mogtame3in be Niqia wal me'a wal khamsin bel Qostantinya wal ma'etayn be Afasos wa men fam abina el mokaram ra'is el kahana el Baba Anba Tawadros el thani wa shoraka'ihi fil khidma el rasoliya abouna el motran el mokaram el Anba Damian wa abouna el osqof el mokaram el Anba Dioscoros wa men fam 7aqarati. Le annahu mobarak wa mamlou' magdan ismoka el qoddos ayouha el Ab wal Ebn wal Ro7 el Qodos el an wa kol awan wa ela dahr el dohour kollaha. Amin.",
            },
            {
                id: 28,
                sectionTitle: {
                    de: "Fürbitten",
                    ar: "الهيتنيات"
                },
                speaker: "Volk",
                cop_ar: "سوتيس آمين كي طو بنيڤماتي سو",
                de: "Erlöst Amen und mit deinem Geiste",
                ar: "خلصت حقا ولروحك.",
                cop_cop: "",
                ar_de: "Khollist 7aqqan wa le ro7ika.",
                cop_de: "Sotis amin ke to pnevmati sou.",
            },
            {
                id: 27,
                speaker: "Volk",
                cop_ar: "طاى شورى إن نوب إنكاثاروس: إت فاى خابى آروماطا: إت خين نين جيج إن آ آرون بى أوويب: إف طاليه أو إسطوى نوفى إيه إبشوى إيه جين بى ما إن إيرشو أوشى.",
                de: "Dies ist das Weihrauchgefäß aus reinem Gold, das den lieblichen Duft enthält, in der Hand des Priesters Aarons, der den Weihrauch über dem Altar emporhebt.",
                ar: "هذه المجمرة الذهب النقي الحاملة العنبر التي في يدي هرون الكاهن يرفع بخوراً فوق المذبح.",
                cop_cop: "",
                ar_de: "Hazihi el magmara el zahab el naqi el 7amila el 3anbar allati fi yaday Haroun el kahen yarfa3 bokhouran fawq el mazba7.",
                cop_de: "Tai shori en noub en-katharos: et fai kha pi aromata: et khen nen jij en A-aron pi ouib: ef tale o es-toi novi e ep-shoi e jen pi ma en er-sho oushi.",
            },
            {
                id: 28,
                speaker: "Volk",
                cop_ar: "هيتين ني إبريسفيا إنتيه تي ثيه أوطوكوس إثؤواب ماريا: إبتشويس آري إهموت نان إمبي كو إيفول إنتيه نين نوفي.",
                de: "Durch die Fürsprache der Mutter Gottes, der heiligen Maria, gewähre uns, o Herr, die Vergebung unserer Sünden",
                ar: "بشفاعات والدة الاله القديسة مريم. يارب انعم لنا بمغفرة خطايانا.",
                cop_cop: "",
                ar_de: "Bi shafa3at walidat el elah el qadisa Mariam. Ya Rab an3im lana be maghfirat khatayana.",
                cop_de: "Hiten ni presvia ente ti theotokos ethowab Maria: Epchois ari-hmot nan em-pi ko evol ente nen novi.",
            },

            {
                id: 29,
                speaker: "Volk",
                cop_ar: "هيتين ني إبريسفيا إنتيه بي شاشف إن أرشي أنجيلوس نيم ني طغما ان إيه بورانيون. إبتشويس...",
                de: "Durch die Fürsprache der sieben Erzengel und der Himmlischen Ränge, gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بشفاعات السبعة رؤساء الملائكة والطغمات السمائية. يارب...",
                cop_cop: "",
                ar_de: "Bi shafa3at el sab3a ro'asa' el mala'ika wal taghmat el sama'iya. Ya Rab...",
                cop_de: "Hiten ni presvia ente pi shashf en arshi angelos nem ni taghma en e-poranion. Epchois...",
            },
            {
                id: 30,
                speaker: "Volk",
                cop_ar: "هيتين ني إفشى إنتيه ناشويس إنيوتى إن أبو سطولوس نيم إبسييه بي إنتيه ني ما ثيتيس: إبتشويس...",
                de: "Durch die Fürsprache unserer Herren und Väter, der Apostel und Jünger, gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلوات سادتى الاباء الرسل والتلاميذ. يارب...",
                cop_cop: "",
                ar_de: "Bi salawat sadati el aba' el rosol wal talamiz. Ya Rab...",
                cop_de: "Hiten ni evshi ente na-chois en-yoti en apostolos nem ep-sepi ente ni mathitis: Epchois...",
            },
            {
                id: 31,
                speaker: "Volk",
                cop_ar: "هيتين ني إفشى إنتيه بي ثيه أوريموس إن إف آنجيليستيس ماركوس بي أبو سطولوس... إبتشويس...",
                de: "Durch die Fürsprache des Gottsehers, des Evangelisten Markus, des Apostels, gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلوات ناظر الاله الانجيلي مرقس الرسول. يارب...",
                cop_cop: "",
                ar_de: "Bi salawat nazer el elah el ingili Morqos el rasoul. Ya Rab...",
                cop_de: "Hiten ni evshi ente pi theorimos en evangelistis Markos pi apostolos... Epchois...",
            },
            {
                id: 32,
                speaker: "Volk",
                cop_ar: "هيتين نى إفشى إنتى بى اثلوفوروس ام مارتيروس باشويس ابؤرو جوارجيوس فيلوباتير مارقوريوس افا مينا انتى نى فايات. إبتشويس......",
                de: "Durch die Fürsprache des heiligen Kämpfer und Märtyrers George, Philopatirs Mercurius, abba Mina von Waiat gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلوات المجاهد الشهيد سيدي الملك جيورجيوس . فيلوباتير مرقوريوس أنبا مينا . . . . يا رب",
                cop_cop: "",
                ar_de: "Bi salawat el mogahed el shahid sayedi el malek Georgios. Philopater Morqorios Anba Mina.... Ya Rab",
                cop_de: "Hiten ni evshi ente pi athloforos em martyros pa-chois ep-ouro Georgios Philopatir Mercurios ava Mina ente ni Fayat. Epchois...",
            },
            {
                id: 33,
                speaker: "Volk",
                cop_ar: "هيتين ني إفشي انتي ني شيليت انتي بخرستوس تي أجيا إمي باربارا نيم يولياني نيم دمياني نيم ماريني: ابتشويس ....",
                de: "Durch die Fürsprache der Bräute Christi und des heiligen Barbara Ulianh und Demiana und Marina. o Herr, die Vergebung unserer Sünden",
                ar: "بصلوات عرائس المسيح القديسات بربارة و يوليانا ودميانة ومارينا. يارب...",
                cop_cop: "",
                ar_de: "Bi salawat 3ara'es el Massi7 el qadisat Barbara wa Juliana wa Demiana wa Marina. Ya Rab...",
                cop_de: "Hiten ni evshi ente ni shelet ente Pkhristos ti agia emmi Barbara nem Yuliani nem Demiani nem Marini: Epchois...",
            },
            {
                id: 34,
                speaker: "Volk",
                cop_ar: "هيتين ني إفشى إنتى ناتشويس إنيوتى إمماي نوشيري آبا أنطونيوس نيم آبا بافلي نيم باخوميوس نيم بي شومت إثؤواب مكاريوس آبا شينوتي بي آرشي ماندريتيس: إبتشويس...",
                de: "Durch die Fürbitten meiner Herren und Väter, die ihre Kinder lieben, Anba Antonius und Anba Paul und der Abba Pachom und heiligen 3 Anba Makarios und Anba Shenouda der Archimandriten, o Herr, die Vergebung unserer Sünden",
                ar: "بصلوات سادتي الآباء محبي أولادهما أنبا أنطونيوس وأنبا بولا وباخوميوس والثلاث مقارات القديسين وأنبا شنودة رئيس المتوحدين، يارب ...",
                cop_cop: "",
                ar_de: "Bi salawat sadati el aba' mo7ebi awladehima Anba Antonios wa Anba Bola wa Bakhomios wal thalath maqarat el qadisin wa Anba Shenouda ra'is el motawa7edin, Ya Rab...",
                cop_de: "Hiten ni evshi ente na-chois en-yoti emmai no-shiri Ava Antonios nem Ava Pavli nem Pachomios nem pi shomt ethowab Makarios Ava Shenouti pi archimandritis: Epchois...",
            },
            {
                id: 35,
                speaker: "Volk",
                cop_ar: "هيتين نى إفشى إنتى نينيوتى إثؤواب إم بطريارشيس آفا أثناسيوس بى أبوستوليكوس نيم آفا كيرلوس بستيلوس إنتى بى ناهتى نيم ديسقوروس إبخيبيس إنتى تى أورثوذكسيا إبتشويس.....",
                de: "Durch die Fürbitten unserer Väter, der heiligen Patriarchen: Abba Athanasius, der Apostelgleiche, Abba Kyrillus, die Glaubenssäule, Dioskorus, die Leuchte der Orthodoxie gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلوات الإباء البطاركة القديسين . انبا اثناسيوس الرسولي ، والانبا كيرلس عمود الإيمان وديسقوروس مصباح الأرثوذكسية يارب...",
                cop_cop: "",
                ar_de: "Bi salawat el aba2 el batarika el qadisin. Anba Athanasios el rasouli, wal Anba Kirollos 3amoud el iman wa Dioscoros mosba7 el orthodoxia Ya Rab...",
                cop_de: "Hiten ni evshi ente ninyoti ethowab em patriarchis Ava Athanasios pi apostolikos nem Ava Kyrollos pi stilos ente pi nahti nem Dioscorus ep-khibis ente ti orthodoxia Epchois...",
            },
            {
                id: 36,
                speaker: "Volk",
                cop_ar: "هيتين ني إفشى إنتيه ني إثؤواب إنتيه باي إيه هوؤو بي أوواي بي أوواي كاطا بيفران: إبتشويس...",
                de: "Durch die Fürsprache des Heiligen des heutigen Tages, durch jeden mit seinen Namen, gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلوات قديسي هذا اليوم كل واحد و واحد بأسمه. يارب...",
                cop_cop: "",
                ar_de: "Bi salawat qadisi haza el yom kol wa7ed wa wa7ed be esmeh. Ya Rab...",
                cop_de: "Hiten ni evshi ente ni ethowab ente pai e-ho-oo pi ouai pi ouai kata pefran: Epchois...",
            },
            {
                id: 37,
                speaker: "Volk",
                cop_ar: "هيتين نو إفشى آريه إبؤنخ إم بينيوت إت طايوت إن أرشى إيه ريقس بابا آڤا (تواضروس): إبتشويس....",
                de: "Durch ihre Fürsprachen behüte das Leben unseres ehrwürdigen Vaters, Priesteroberhaupt, Papst Anba Tawadros II , gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلواتهم احفظ حياة ابينا المكرم رئيس الكهنة البابا الانبا تواضروس يارب انعم لنا بمغفرة خطايانا.",
                cop_cop: "",
                ar_de: "Bi salawatehim ehfaz 7ayat abina el mokaram ra'is el kahana el Baba el Anba Tawadros ya Rab an3im lana be maghfirat khatayana.",
                cop_de: "Hiten no evshi areh ep-onkh em-penyot et-tayout en-archi erevs papa ava Tawadros: Epchois...",
            },
            {
                id: 38,
                speaker: "Volk",
                cop_ar: "هيتين نو إفشى آريه إبؤنخ إم بنيوت إتطايوت إن ذيكئوس أفا ديمان بي ميتروبوليتيس نيم آفا ديسقورس بي إبسكوبوس آري إهموت نان إمبى كو إيفول إنتى نين نوفي",
                de: "Durch ihre Fürbitten behüte das Leben unserer ehrwürdigen Väter, der Erzbischof Anba Damian und Bischof Anba Dioskoros, gewähre uns, o Herr, die Vergebung unserer Sünden.",
                ar: "بصلواتهم، احفظ يا رب حياة آبائنا المكرَّمين، المطران الأنبا دميان والاسقف الأنبا ديسقورس، وأنعمْ علينا بمغفرة خطايانا.",
                cop_cop: "",
                ar_de: "Bi salawatehim, e7faz ya Rab 7ayat aba'ina el mokaramin, el motran el Anba Damian wal osqof el Anba Dioscoros, wa an3em 3alayna be maghfirat khatayana.",
                cop_de: "Hiten no evshi areh ep-onkh em-penyot et-tayout en-dikeos Ava Damian pi metropolitis nem Ava Dioscoros pi episkopos ari-hmot nan em-pi ko evol ente nen novi.",
            },
            {
                id: 39,
                speaker: "Volk",
                cop_ar: "تين أوأوشت إممو ك أو بخرستوس: نيم بيك يوت إن آغاثوس: نيم بي إبنفما إثؤواب: جيه أكطونك أك سوتي إممون ناي نان.",
                de: "Wir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist, denn Du bist auferstanden und hast uns erlöst.",
                ar: "نسجد لك أيها المسيح مع أبيك الصالح والروح القدس، لأنك قمت وخلصتنا.",
                cop_cop: "",
                ar_de: "Nasgod laka ayoha el Massi7 ma3a abika el sale7 wal ro7 el qodos, le annaka qomta wa khallastana.",
                cop_de: "Ten ou-osht emmok o Pkhristos: nem pek yot en aghathos: nem pi pnevma ethowab: je ak-tonk ak soti emmon nai nan.",
            },
            {
                id: 40,
                sectionTitle: {
                    de: "Der Paulusbrief",
                    ar: "البولس"
                },

                speaker: "D",
                de: "Die Gnade Gottes des Vaters sei mit Euch,meine Väter und Brüder Amen. ",
                ar: "نعمة الله الآب فلتحل على أرواحنا يا آبائي وإخوتي. آمين ",
                cop_cop: "",

            },
            {
                id: 41,
                sectionTitle: {
                    de: "Der Katholische Brief",
                    ar: "الكاثوليكون"
                },
                speaker: "D",
                de: "Liebt nicht die Welt und was in der Welt ist .Die Welt Und iher Begierden vergehen . Wer aber den Willen Gottes tut, bleibt in Ewigkeit. Amen ",
                ar: "(لا تحبوا العالم ولا الأشياء التي في العالم؛ لأن العالم يمضي وشهوته معه ، و أما من يعمل مشيئة الله فإنه يثبت إلى الأبد آمين )",
            },
            {
                id: 40,
                speaker: "Volk",
                cop_ar: "شيريه ني ماريا: تي إتشرومبي إثنيه سوس: ثي إيه طاس ميسي نان: إم إفنوتي بي لوغوس. إك إسمارؤوت آليثوس نيم بيك يوت إن آغاثوس: نيم بي إبنفما إثؤواب: جيه (أكئي / أكطونك) أكسوتي إممون ناي نان.",
                de: "Gegrüßt seist du Maria, du schöne Taube, die uns Gott das Wort gebar. Wahrhaftig gepriesen seist Du mit Deinem guten Vater und dem heiligen Geist, denn Du bist (gekommen/auferstanden) und hast uns erlöst.",
                ar: "السَّلَامُ لَكِ يَا مريم، الحَمامة الحَسَنة، التي ولَدت لنا، الله الكَلمة. مبارك أنت مع أبيك الصالح، والروح القدس، لأنك (أتيت/ قُمْتَ) وخلصتنا. ارحمنا.",
                cop_cop: "",
                ar_de: "El salam laki ya Mariam, el 7amama el 7asana, allati waladat lana, Allah el Kalima. Mobarak anta ma3a abika el sale7, wal ro7 el qodos, le annaka (atayta/ qomta) wa khallastana. Er7amna.",
                cop_de: "Shere ne Maria: ti-etshrompi ethnesos: thi-etas-misi nan: em-efnouti pi-logos. Ek-esmaroot alithos nem pek yot en aghathos: nem pi pnevma ethowab: je (ak-i / ak-tonk) ak soti emmon nai nan.",
            },
            {
                id: 41,
                sectionTitle: {
                    de: "Der Apostelgeschichte",
                    ar: "الابركسيس"
                },
                de: "Das Wort Gottes möge wachsen, sich ausbreiten, stark werden und fest bleiben in der heiligen Kirche Gottes. Amen. ",
                ar: "لم تزل كلمة الرب تنمو وتكثر وتعتز وتثبت ، في بيعة الله المقدسة. آمين",
            },
            {
                id: 42,
                sectionTitle: {
                    de: "Das Synaxarium",
                    ar: "السنكسار"
                },
            },
            {
                id: 43,
                sectionTitle: {
                    de: "Das Dreimalheilig",
                    ar: "اجيوس",
                },
                speaker: "Volk",
                cop_ar: "أجيوس أوثيئوس: أجيوس إس شيروس: أجيوس أثانا طوس: إسطافرو تيس ذي إيماس إيليسون إيماس.\nأجيوس أوثيئوس: أجيوس إس شيروس: أجيوس أثانا طوس: أو إكبر ثينو جينيتيس إيليسون إيماس.\nأجيوس أوثيئوس: أجيوس إس شيروس: أجيوس أثانا طوس: أو أنسطاس إك طون نيكرون كيه أنيلثون إيس طوس أورانوس إيليسون إيماس.\nذو كصابتري كيه إيو كيه آجيو إبنڤماتى: كيه نين كيه آ أى كيه إسطوس إيه أوناس طون إيه أونون آمين. آجيا إترياس إيليسون إيماس.",
                de: "Heiliger Gott, Heiliger Starker, Heiliger Unsterblicher, gekreuzigt an unserer statt: Erbarme dich unser.\nHeiliger Gott, Heiliger Starker, Heiliger Unsterblicher, von der Jungfrau geboren: Erbarme dich unser.\nHeiliger Gott, Heiliger Mächtiger, Heiliger Unsterblicher, auferstanden von den Toten und aufgefahren in den Himmel: Erbarme Dich unser.\nEhre sei dem Vater und dem Sohn und dem Heiligen Geist, jetzt und immer und in alle Ewigkeit. Amen. Heilige Dreifaltigkeit, erbarme Dich unser.",
                ar: "قدوس الله، قدوس القوي، قدوس الذي لا يموت، يا من صلب عنا ارحمنا.\nقدوس الله، قدوس القوي، قدوس الذي لا يموت، يا من ولد من العذراء ارحمنا.\nقدوس الله، قدوس القوي، قدوس الحي الذي لا يموت، يا من قام من الأموات وصعد إلى السموات ارحمنا.\nالمجد للآب والابن والروح القدس، الآن وكل أوان والى دهر الداهرين آمين. أيها الثالوث القدوس، ارحمنا.",
                cop_cop: "Ⲁ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲥⲧⲁⲩⲣⲱⲑⲓⲥ ⲇⲓ ⲏ̀ⲙⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\nⲀ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲉⲕ ⲡⲁⲣⲑⲉⲛⲟⲩ ⲅⲉⲛⲛⲉⲧⲏⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\nⲀ̀ⲅⲓⲟⲥ ⲟ̀ Ⲑⲉⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲓⲥⲭⲩⲣⲟⲥ: Ⲁ̀ⲅⲓⲟⲥ Ⲁ̀ⲑⲁⲛⲁⲧⲟⲥ: ⲟ̀ ⲁ̀ⲛⲁⲥⲧⲁⲥ ⲉⲕ ⲧⲱⲛ ⲛⲉⲕⲣⲱⲛ ⲕⲉ ⲁ̀ⲛⲉⲗⲑⲱⲛ ⲓⲥ ⲧⲟⲩⲥ ⲟⲩⲣⲁⲛⲟⲩⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.\nⲆⲟⲝⲁ Ⲡⲁⲧⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁ̀ⲅⲓⲱ Ⲡⲛⲉⲩⲙⲁⲧⲓ: ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲉⲓ ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱⲛⲱⲛ ⲁ̀ⲙⲏⲛ. Ⲁ̀ⲅⲓⲁ Ⲧⲣⲓⲁⲥ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ.",
                ar_de: "Qoddos Allah, Qoddos el Qawy, Qoddos allazy la yamout, ya man soliba 3anna er7amna.\nQoddos Allah, Qoddos el Qawy, Qoddos allazy la yamout, ya man woleda men el 3azra er7amna.\nQoddos Allah, Qoddos el Qawy, Qoddos el 7ay allazy la yamout, ya man qama men el amwat wa sa3ada ela el samawat er7amna.\nEl magd lel Ab wal Ebn wal Ro7 el Qodos, el an wa kol awan wa ela dahr el dahirin Amin. Ayuha el thalouth el qoddos er7amna.",
                cop_de: "Agios O Theos: Agios Ischyros: Agios Athanatos: o stavrothis di imas eleison imas.\nAgios O Theos: Agios Ischyros: Agios Athanatos: o ek parthenou gennetis eleison imas.\nAgios O Theos: Agios Ischyros: Agios Athanatos: o anastas ek ton nekron ke anelthon is tous ouranous eleison imas.\nDoxa Patri ke Iyo ke Agio Pnevmati: ke nyn ke a-ei ke is tous e-onas ton e-onon amin. Agia Trias eleison imas.",
            },
            {
                id: 44,
                sectionTitle: {
                    de: "Das Evangeliumsgebe",
                    ar: "اوشيه الانجيل",
                },
                speaker: "Priester",
                cop_ar: "إشليل.",
                de: "Betet.",
                ar: "صل.",
                cop_cop: "Ϣⲗⲏⲗ",
                ar_de: "Salli.",
                cop_de: "Eshlil.",
            },
            {
                id: 45,
                speaker: "Diakon",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه.",
                de: "Erhebt euch zum Gebet.",
                ar: "للصلاة قفوا.",
                cop_cop: "Ⲉⲡⲓ ⲡⲣⲟⲥⲉⲩⲭⲏ ⲥⲧⲁⲑⲏⲧⲉ",
                ar_de: "Lel salat qefou.",
                cop_de: "E pi pros evshi estathi te.",
            },
            {
                id: 46,
                speaker: "Priester",
                cop_ar: "إيريني باسي.",
                de: "Der Friede sei mit allen.",
                ar: "السلام لجميعكم.",
                cop_cop: "Ⲉⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ",
                ar_de: "El salam le gami3ikom.",
                cop_de: "Irini pasi.",
            },
            {
                id: 47,
                speaker: "Volk",
                cop_ar: "كيه طو إبنفماتي سو.",
                de: "Und mit deinem Geiste",
                ar: "ولروحك أيضاً.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ",
                ar_de: "Wa le ro7ika aydan.",
                cop_de: "Ke to pnevmati sou.",
            },
            {
                id: 48,
                speaker: "Priester",
                cop_ar: "إفنيب إبشويس إيسوس بى إخرستوس بيننوتى فيئيطاف جوس إننيف أجيوس إتطايوت إم ماثيتيس أووه إن أبو سطولوس إثؤواب.\nجى هان ميش إم إبروفيتيس نيم هان إثمى أفيئر ابيثيمين إيناف إينى إتيتين ناف إيروؤو أووه إمبو ناف. أووه إيسوتيم إينى إتيتين سوتيم إيروؤو أووه إمبو سوتيم.\nإنثوتين ذى أوو نياتو إننيتين فال جى سيناف نيم نيتين ماشج جي سيسوتيم. مارين إيراب إم إبشا إن سوتيم أووه إى إيرى إن نيك إف أنجيليون إثؤواب خين طفه إنتى نى إثؤواب إنتاك.",
                de: "Meister, Herr Jesus Christus, unser Gott, der zu seinen heiligen Jüngern und ehrwürdigen Aposteln gesprochen hat:\nViele Propheten und Gerechte sehnten sich zu sehen, was ihr seht, und haben es nicht gesehen, und zu hören, was ihr hört, und haben es nicht gehört.\nSelig aber sind eure Augen, dass die sehen, und eure Ohren, dass sie hören. Mache uns würdig, Deine heiligen Evangelien zu hören und danach zu handeln durch die Gebete Deiner Heiligen.",
                ar: "أيها السيد الرب يسوع المسيح إلهنا، الذى خاطب تلاميذه القديسين ورسله الأطهار المكرمين. قائلاً:\nإن أنبياء وأبراراً كثيرين اشتهوا أن يروا ما أنتم ترون ولم يروا وأن يسمعوا ما أنتم تسمعون ولم يسمعوا.\nأما أنتم فطوبى لأعينكم لأنها تبصر ولآذانكم لأنها تسمع فلنستحق أن نسمع ونعمل بأوامر أناجيلك المقدسة بطلبات قديسيك.",
                cop_cop: "Ⲡⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲏⲉ̀ⲧⲁϥϫⲟⲥ ⲛ̀ⲛⲉϥⲁ̀ⲅⲓⲟⲥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ: ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉ̀ⲑⲟⲩⲁⲃ.\nϪⲉ ϩⲁⲛⲙⲏϣ ⲙ̀ⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ϩⲁⲛⲑⲙⲏⲓ: ⲁⲩⲉⲣⲉ̀ⲡⲓⲑⲩⲙⲓⲛ ⲉ̀ⲛⲁⲩ ⲉ̀ⲛⲏⲉ̀ⲧⲉⲧⲉⲛⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲛⲁⲩ: ⲟⲩⲟϩ ⲉ̀ⲥⲱⲧⲉⲙ ⲉ̀ⲛⲏⲉ̀ⲧⲉⲧⲉⲛⲥⲱⲧⲉⲙ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲙ̀ⲡⲟⲩⲥⲱⲧⲉⲙ.\nⲚ̀ⲑⲱⲧⲉⲛ ⲇⲉ ⲱ̀ⲟⲩⲛⲓⲁⲧⲟⲩ ⲛ̀ⲛⲉⲧⲉⲛⲃⲁⲗ ϫⲉ ⲥⲉⲛⲁⲩ: ⲛⲉⲙ ⲛⲉⲧⲉⲛⲙⲁϣϫ ϫⲉ ⲥⲉⲥⲱⲧⲉⲙ. Ⲙⲁⲣⲉⲛⲉⲣⲡⲉⲙⲡϣⲁ ⲛ̀ⲥⲱⲧⲉⲙ ⲟⲩⲟϩ ⲉ̀ⲓ̀ⲣⲓ ⲛ̀ⲛⲉⲕⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ ⲉ̀ⲑⲟⲩⲁⲃ: ϧⲉⲛ ⲛⲓⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ.",
                ar_de: "Ayuha el sayed el Rab Yassou3 el Massi7 elahina, allazy khataba talamizahu el qadisin wa rosolohu el athar el mokaramim qa2elan:\nEnna anbia2 wa abrar kathirin eshtahaw an yaraw ma antom tarawn walam yaraw wa an yasma3ou ma antom tasma3oun walam yasma3ou.\nAmma antom fa touba le a3yonikom le annaha tobsir wa le azanikum le annaha tasma3 falnasta7iq an nasma3 wa na3mal be awamer anagilak el moqadasa be talabat qadisik.",
                cop_de: "Efnib epchois Isos Pkhristos pennouti fi-etaf-gos en-nef agios et-tayout em-mathitis owoh en-apostolos ethowab.\nJe han mish em-profitis nem han ethmi av-er epithymin enav eni eteten nav ero-oo owoh empou nav. Owoh esotem eni eteten sotem ero-oo owoh empou sotem.\nEnthoten de oo niatou en-neten val je senav nem neten mashj je se-sotem. Maren er-ep em-epsha en-sotem owoh e-iri en-nek evangelion ethowab khen tovh ente ni ethowab entak.",
            },
            {
                id: 49,
                speaker: "Diakon",
                cop_ar: "إبروس إف إكساستى إيبرتو أجيو إف أنجيليو",
                de: "Betet um des heiligen Evangeliums Willen.",
                ar: "صلوا من أجل الإنجيل المقدس.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩⲡⲉⲣ ⲧⲟⲩ ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ",
                ar_de: "Sallou men agl el engil el moqadas.",
                cop_de: "Pros evxasthe yper tou agiou evangeliou.",
            },
            {
                id: 50,
                speaker: "Volk",
                cop_ar: "كيريه ليسون",
                de: "Herr erbarme Dich",
                ar: "يا رب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 51,
                speaker: "Priester",
                cop_ar: "أرى إفمفيئى ذى اون بين نيب ان أؤون نيفين إيتاف هو نهين نان ائر بوميفئى خين نين تيهو نيم نين طوبه. إيتين ايرى إمموؤو إى إبشوى هازوك إبشويس بيننوتى.\nنيئتاف إير شورب إن إنكوت ما إمطون نؤو. نى إتشونى ما تالتشوؤ. جى إنثوك غار بى بين أونخ تيرو نيم بين أوجاى تيرو نيم تين هلبيس تيرو نيم بين تالتشو تيرو نيم تين أناستاسيس تيرين",
                de: "Gedenke auch, Herr, aller, die uns gebeten haben, ihrer in unseren Gebeten und Bitten zu gedenken, die wir Dir darbringen, Herr, unser Gott.\nDen Seelen deren, die uns vorausgegangen und entschlafen sind, gib Ruhe. Heile die Kranken. Denn Du bist unser aller Leben, unsere aller Erlösung, unsere aller Hoffnung, unser aller Heil, unsere aller Auferstehung.",
                ar: "أذكر أيضاً يا سيدنا كل الذين أوصونا أن نذكرهم في سؤالاتنا وطلباتنا التي نرفعها إليك أيها الرب إلهنا.\nالذين سبقوا فرقدوا، يارب نيحهم. المرضى اشفهم. لأنك أنت حياتنا كلنا، وخلاصنا كلنا، ورجاؤنا كلنا، وشفاؤنا كلنا، وقيامتنا كلنا.",
                cop_cop: "Ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ ⲇⲉ ⲱⲛ Ⲡⲉⲛⲛⲏⲃ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁϥϩⲟⲛϩⲉⲛ ⲛⲁⲛ ⲉ̀ⲣ̀ⲡⲟⲩⲙⲉⲩⲓ̀ ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ: ⲉ̀ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.\nⲚⲏⲉ̀ⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲉⲛⲕⲟⲧ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ. Ⲛⲏⲉⲧϣⲱⲛⲓ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ϫⲉ ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲡⲉⲛⲱⲛϧ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲡⲉⲛⲟⲩϫⲁⲓ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲧⲉⲛϩⲉⲗⲡⲓⲥ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲡⲉⲛⲧⲁⲗϭⲟ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲧⲉⲛⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲧⲏⲣⲉⲛ",
                ar_de: "Ozkur aydan ya sayedana kol allazina awsauna an nazkorohom fi so'alatina wa talabatina allati narfa3oha elayka ayuha el Rab elahina.\nAllazina sabaqo fa raqado, ya Rab nayeh-hom. El marda eshfehom. Le annaka anta 7ayatona kolina, wa khalasuna kolina, wa raga'ona kolina, wa shifa'ona kolina, wa qiyamatona kolina.",
                cop_de: "Ari-efmevi de on pen nib en ou-on niven etaf honhen nan er pou-mevi khen nen tiho nem nen tovh. Eten iri emmo-oo e ep-shoi harok Epchois Pennouti.\nNi-etaf er shorp en enkot ma emton no-ou. Ni etshoni ma tal-cho-oo. Je enthok gar pe pen onkh tiro nem pen ougai tiro nem ten hel-pis tiro nem pen tal-tcho tiro nem ten anastasis tiren",
            },
            {
                id: 52,
                speaker: "Volk",
                cop_ar: "الليلويا",
                de: "Halleluja",
                ar: "هلليلويا",
                cop_cop: "Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ",
                ar_de: "Alleluia",
                cop_de: "Alleluia",
            },
            {
                id: 53,
                speaker: "Diakon",
                cop_ar: "أسطاثي تيه ميطا فوفو ثيو أكوسومين طو أجيو إف أنجيليو",
                de: "Steht auf in Ehrfurcht vor Gott, um das hl. Evangelium zu hören.",
                ar: "قفوا بخوف الله لسماع الانجيل المقدس",
                cop_cop: "Ⲥⲧⲁⲑⲏⲧⲉ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ Ⲑⲉⲟⲩ ⲁⲕⲟⲩⲥⲱⲙⲉⲛ ⲧⲟⲩ ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ",
                ar_de: "Qefou bekhouf Allah le sama3 el engil el moqadas.",
                cop_de: "Estathi te meta fovou theou akousomen tou agiou evangeliou.",
            },
            {
                id: 54,
                speaker: "Priester",
                cop_ar: "إفسماروؤوت إنجيه فى إثنيو خين إفران إمبشويس إنتيه نى جوم كيريب إيفلوجيصون إك طو كاطا (...) أجيو إيف أنجيليون طو أنا غنوزما",
                de: "Gesegnet sei er, der kommt im Namen des Herrn der Heerscharen. Segne, o Herr, die Lesung des heiligen Evangelium nach [Matthäus / Markus / Lukas / Johannes].",
                ar: "مبارك الآتى بإسم الرب القوات يا رب بارك فصل الإنجيل المقدس من (...)",
                cop_cop: "Ϥ̀ⲥⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ ⲫⲏⲉⲑⲛⲏⲟⲩ ϧⲉⲛ ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ. Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ ⲉⲕ ⲧⲟⲩ ⲕⲁⲧⲁ (...) ⲁⲅⲓⲟⲩ ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲩ ⲧⲟ ⲁⲛⲁⲅⲛⲱⲥⲙⲁ",
                ar_de: "Mobarak el aty be ism el Rab el qowat. Ya Rab barek fasl el engil el moqadas men (...)",
                cop_de: "Ef-esmaro-out enje fi-eth-nyo khen efran em-epchois ente ni-gom. Kyrie ev-logison ek tou kata (...) agiou evangeliou to ana-gnozma.",
            },
            {
                id: 55,
                speaker: "Volk",
                cop_ar: "ذوكصاصي كيريي",
                de: "Ehre sei Dir, o Herr",
                ar: "المجد لك يا رب",
                cop_cop: "Ⲇⲟⲝⲁ ⲥⲟⲓ Ⲕⲩⲣⲓⲉ",
                ar_de: "El magd laka ya Rab.",
                cop_de: "zoxa si Kyrie.",
            },

            {
                id: 56,
                speaker: "Diakon",

                de: "Erhebt euch und steht in Gottesfurcht, seid aufmerksam in Weisheit, um das heilige Evangelium zu hören. Ein Abschnitt aus dem heiligen Evangelium nach ........., dem Evangelisten und reinen Apostel. Sein Segen",
                ar: "قفوا بخوف أمام الله وانصتوا لسماع الإنجيل المقدس فصل من بشارة مار معلمنا .... البشير والتلميذ الطاهر بركاته",

                ar_de: "Qefou bekhouf amam Allah wa onsetou le sama3 el engil el moqadas fasl men beshart mar mo3alemna .... el bashir wal telmiz el taher barakatohu.",

            },
            {
                id: 57,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "sei mit uns. Amen.",
                ar: "على جميعنا. آمين.",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "3ala gami3ina. Amin.",
                cop_de: "Amin.",
            },
            {
                id: 58,
                speaker: "Diakon",
                de: "Aus den Psalmen unseres Lehrers David des Propheten und Königs. Sein Segen sei mit uns.\nEin Psalm Davids.",
                ar: "من مزامير تراتيل أبينا داود النبي والملك الطاهر بركاته على جميعنا",
                ar_de: "Men mazamir tratil abina Dawoud el nabi wal malek el taher barakatohu 3ala gami3ina.",

            },
            {
                id: 59,
                sectionTitle: {
                    de: "Der Psalm ",
                    ar: "المزمور",
                },
                speaker: "Diakon",
                de: "Der Psalm des Tages wird nun gelesen",
                ar: "ُيُقرأ المزمور"

            },
            {
                id: 60,
                speaker: "Volk",

                de: "Gesegnet sei der, der kommt im Namen des Herrn. Unser Herr, unser Gott, unser Erlöser und unser aller König, Jesus Christus, der Sohn des lebendigen Gottes, ihm gebührt Ehre in Ewigkeit. Amen.",
                ar: "مبارك الآتى باسم الرب إله القوات ربنا و الهنا ملكنا ومخلص نفوسنا ربنا يسوع المسيح ابن الله الحى الذى له المجد الدائم. الى الأبد آمين",

                ar_de: "Mobarak el aty be ism el Rab elah el qowat, rabona wa elahona malekona wa mokhales nofousena rabona Yassou3 el Massi7 ebn Allah el 7ay allazy lahu el magd el da2em. Ela el abad amin.",

            },
            {
                id: 61,
                sectionTitle: {
                    de: "Das Evangelium",
                    ar: "الانجيل",
                },
                speaker: "Diakon",
                de: "Das Evangeliums des Tages wird nun gelesen",
                ar: "ُيُقرأ الانجيل"

            },
            {
                id: 62,
                speaker: "Volk",

                de: "Ehre sei unserem Herrn in Ewigkeit",
                ar: "والمجد لله دائماً",

                ar_de: "Wal magd lillah da'iman.",

            },

            {
                id: 63,
                sectionTitle: {
                    de: "Die Evangeliumsantwort ",
                    ar: "مرد الانجيل",
                },
                speaker: "Volk",
                cop_ar: "أوؤ نياتو خين أو ميثمي ني اثؤواب انتي باي ايهوؤو بي اواي بي اواي كا طا بيف ران ني مين راتي انتي بي اخريستوس.\nاري ابريسفافين اي ايهري ايجون اوتين تشويس تيرن تي ثيؤطوكوس ماريا اثماف امبين سوتير انتيف كانين نوفي نان إيڤول.\nچيه إف إسمارؤوت إنچيه إفيوت نيم إبشيري نيم بي إبنيڤما إثؤواب تي إترياس إتجيك إيڤول تين أوأوشت إمموس تين تي أوأوناس.",
                de: "Gesegnet sind sie, in Wahrheit, die Heiligen des heutigen Tages, jeder mit seinem Namen, die von Christus Geliebten.\nSei unsere Fürsprecherin, unser aller Herrin, Mutter Gottes, Maria, Mutter unseres Erlösers, damit er uns unsere Sünden vergibt!\nGepriesen sei der Vater und der Sohn und der Heilige Geist, die vollkommene Dreifaltigkeit. Wir beten sie an und verherrlichen sie.",
                ar: "طوباهم بالحقيقة قديسي هذا اليوم كل واحد وواحد باسمه أحباء المسيح.\nاشفعي فينا يا سيدتنا كلنا السيدة مريم والدة الإله أم يسوع المسيح ليغفر لنا خطايانا.\nلأنه مبارك الآب والابن، والروح القدس، الثالوث الكامل، نسجد له ونمجده.",
                cop_cop: "Ⲱⲟⲩⲛⲓⲁⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ ⲛⲓⲙⲉⲛⲣⲁϯ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ.\nⲀ̀ⲣⲓⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲱ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟⲇⲟⲕⲟⲥ Ⲙⲁⲣⲓⲁ ⲑ̀ⲙⲁⲩ ⲙ̀ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.\nϪⲉ ϥ̀ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛ̀ϫⲉ Ⲫⲓⲱⲧ ⲛⲉⲙ Ⲡ̀ϣⲏⲣⲓ ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ Ϯⲧ̀ⲣⲓⲁⲥ ⲉⲧϫⲏⲕ ⲉ̀ⲃⲟⲗ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲥ ⲧⲉⲛϯⲱⲟⲩ ⲛⲁⲥ.",
                ar_de: "Toubahom belhaqiqa qadisi haza el youm kol wahed wa wahed be esmo a7eba2 el massi7.\nEshfa3y fina ya sayidatina kolina el sayida Mariam walidat el ilah om Yassou3 el Massi7 layaghfir lana khatayana.\nLe annahu mobarak el Ab wal Ebn wal Ro7 el Qodos, el thalouth el kamel, nasgod lahu wa nomagedoh.",
                cop_de: "Ou niatou khen ou methmi ni ethowab ente pai eho-oo pi owai pi owai kata pef ran ni men rati ente Pi-khristos.\nAri presvevin e-ehri egon o ten chois tiren ti theotokos Maria ethmav empen sotir entef ka nen novi nan evol.\nJe ef esmaro-out enje Efioat nem Ep-shiri nem Pi-pnevma ethowab Ti-trias et-jik evol ten o-osht emmos ten ti o-ou nas.",
            },
            {
                id: 64,
                speaker: "Diakon",
                cop_ar: "إن صوفيا ثيه أو بروس خومين: كيريه ليسون: كيريه ليسون: خين أو ميثمى.",
                de: "Hört aufmerksam zu in der Weisheit Gottes. Herr erbarme Dich, Herr erbarme Dich. In Wahrheit.",
                ar: "انصتوا بحكمة الله يا رب ارحم، يا رب ارحم، بالحقيقة.",
                cop_cop: "Ⲉⲛ ⲥⲟⲫⲓⲁ Ⲑⲉⲟⲩ ⲡⲣⲟⲥⲭⲱⲙⲉⲛ: Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ: Ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ.",
                ar_de: "Ensetou be 7ekmat Allah. Ya Rab er7am. Ya Rab er7am. Bel 7aqiqa.",
                cop_de: "En sofia the-ou pros-khomen: Kyrie eleison: Kyrie eleison: Khen ou methmi.",
            },
            {
                id: 65,
                speaker: "Volk",
                de: "Wir glauben an den einen Gott: Gott den Vater , den Allmächtigen, Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.Wir glauben an den einen Herrn Jesus Christus , Gottes einzigen Sohn, geboren aus dem Vater vor aller Zeit Licht vom Lichte , wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden. , nicht geschaffen, eines Wesens mit dem Vater; durch ihn ist alles geworden.  Für uns Menschen und um unseres Heils willen ist er vom Himmel herabgestiegen. Er hat Fleisch angenommen durch den Heiligen Geist, von der Jungfrau Maria und ist Mensch geworden. Er wurde gekreuzigt unter Pontius Pilatus an unserer Statt,hat gelitten und ist begraben worden.Am dritten Tag auferstanden von den Toten gemäß der Schrift,aufgefahren in den Himmel, sitzt er zur Rechten seines Vaters Und so wird er wiederkommen in seiner Herrlichkeit, zu richten die Lebenden und die Toten, und seiner Herrschaft wird kein Ende sein.Ja, wir glauben an den Heiligen Geist, der Herr ist und lebendig macht, der aus dem Vater hervorgeht , der mit dem Vater und dem Sohn angebetet und verherrlicht wird. Er hat gesprochen durch die Propheten Wir glauben an die eine heilige, universale und apostolische Kirche. Wir bekennen die eine Taufe zur Vergebung der Sünden. Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt. Amen.",
                ar: "بالحقيقة نؤمن بإله واحد الله الآب ضابط الكل خالق السماء والأرض ما يُرى وما لا يُرى نؤمن برب واحد يسوع المسيح ابن الله الوحيد المولود من الآب قبل كل الدهور نور من نور إله حق من إله حق مولود غير مخلوق ، مساوٍ للآب فى الجوهـر الذى به كان كل شيء هذا الذى من أجلنا نحن البشر ومن أجل خلاصنا نزل من السماء وتجسد من الروح القدس ومن مريم العذراء وتأنس وصلب عنا على عهد بيلاطس البنطي تألم وقبر وقام من بين الاموات فى اليوم الثالث كما فى الكتب وصعد الى السموات وجلس عن يمين أبيه وأيضاً يأتى فى مجده ليدين الاحياء والاموات الذى ليس لملكه انقضاء نعم نؤمن بالروح القدس الرب المحيي المنبثق من الآب. نسجد له ونمجده مع الآب والابن الناطق فى الأنبياء وبكنيسة واحدة مقدسة جامعة رسولية ونعترف بمعمودية واحدة لمغفرة الخطايا وننتظر قيامة الأموات وحياة الدهر الآتى .آمين",
                ar_de: "Bel 7aqiqa no2men be elah wa7ed, Allah el Ab dabet el kol, 5aleq el sama wal ard, ma yora wa ma la yora. No2men be rab wa7ed Yassou3 el Massi7, Ebn Allah el wa7id, el mawloud men el Ab qabl kol el dohour. Nour men Nour, Elah 7aq men Elah 7aq, mawloud gheir ma5louq, mosawen lel Ab fel gawhar, allazy bihi kan kol shay2. Haza allazy men aglina na7n el bashar, wa men agl 5alasna, nazal men el sama, wa tagassad men el Ro7 el Qodos wa men Mariam el 3azra2 wa ta2anas. Wa soleb 3anna 3ala 3ahd Bilatos el Bonti, ta2alam wa qober wa qam men bein el amwat fel yom el thaleth kama fel kotob. Wa sa3ad ela el samawat, wa galas 3an yamin abih. Wa aydan ya2ti fi magdehi le yadin el a7ya2 wal amwat, allazy laysa le molkehi enqida2. Na3am no2men bel Ro7 el Qodos, el Rab el mo7yi, el monbathiq men el Ab. Nasgod lahu wa nomagedohu ma3 el Ab wal Ebn, el nateq fel anbya2. Wa be kanisa wa7da moqadasa game3a rasoulya. Wa na3taref be ma3moudia wa7da le maghferet el 5ataya. Wa nantazer qiyamat el amwat, wa 7ayat el dahr el aaty. Amin.",

            },
            {
                id: 65,
                speaker: "Priester",
                cop_ar: "إشليل.",
                de: "Betet.",
                ar: "صل.",
                cop_cop: "Ϣⲗⲏⲗ",
                ar_de: "Salli.",
                cop_de: "Eshlil.",
            },
            {
                id: 66,
                speaker: "Diakon",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه.",
                de: "Erhebt euch zum Gebet.",
                ar: "للصلاة قفوا.",
                cop_cop: "Ⲉⲡⲓ ⲡⲣⲟⲥⲉⲩⲭⲏ ⲥⲧⲁⲑⲏⲧⲉ",
                ar_de: "Lel salat qefou.",
                cop_de: "E pi pros evshi estathi te.",
            },
            {
                id: 67,
                speaker: "Priester",
                cop_ar: "إيريني باسي.",
                de: "Der Friede sei mit allen.",
                ar: "السلام لجميعكم.",
                cop_cop: "Ⲉⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ",
                ar_de: "El salam le gami3ikom.",
                cop_de: "Irini pasi.",
            },
            {
                id: 68,
                speaker: "Volk",
                cop_ar: "كيه طو إبنفماتي سو.",
                de: "Und mit deinem Geiste",
                ar: "ولروحك أيضاً.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ",
                ar_de: "Wa le ro7ika aydan.",
                cop_de: "Ke to pnevmati sou.",
                // هذا الحقل يشير إلى أن الخطوة التالية هي القائمة
                next_action: "show_reconciliation_menu",
                type: "menu_selection", // Optional: Damit die App weiß, dass jetzt Buttons kommen
                reconciliation_menu: [
                    {
                        label_ar: "يا الله العظيم الابدي (ب)",
                        label_de: "Großer und ewiger Gott (B)",
                        action: "goto_basily_start"
                    },
                    {
                        label_ar: "صلاه الصلح 2 (عال فوق )(ب)",
                        label_de: "Hoch über 2 (B)",
                        action: null
                    },
                    {
                        label_ar: "يا رئيس الحياه (ك)",
                        label_de: "O Urheber des Lebens (K)",
                        action: "goto_cyrillus_start"
                    },
                    {
                        label_ar: "ايها الكائن (غ)",
                        label_de: "der du bist,der (G)",
                        action: "goto_gregorios_start"
                    },
                    {
                        label_ar: "يا اله المحبه (ك)",
                        label_de: "O Gott der Liebe (K)",
                        action: "goto_cyrillus_love_prayer"
                    },
                    {
                        label_ar: "أيها المسيح إلهنا (غ)",
                        label_de: "O Christus unser Gott (G)",
                        action: "goto_gregorios_christ_prayer"
                    }
                ]
            },








            {
                id: 6,
                speaker: "P",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",

            },
        ]
    },
    // --- BASILIUS LITURGIE ---
    basily: {
        title: {
            de: "Die Göttliche Liturgie des Hl. Basilius",
            ar: "القداس الإلهي للقديس باسيليوس"
        },
        content: [
            {
                id: 1,
                sectionTitle: {
                    de: "Das Versöhnungsgebet",
                    ar: "صلاه الصلح"
                },
                speaker: "Priester",
                cop_ar: "إفنوتي بي نشتي بي شا إينيه في إيطاف كوت إمبي رومي إي إهري إيجين تي ميت أتطاكو.\nأووه إفمو إيطاف إي إيخون إي بي كوزموس هيتين بي إفثونوس إنتي بي ذيافولوس أك شير شورف، هيتين بي أو أونه إيفول إنريف تنخو إنتي بيك مونوجينيس.\nإنشيري بنشويس أووه بنوتي أووه بنيسوتير إيسوس بخرستوس أو أك موه إم بي كاهي إيفول خين تي هيريني تي إيفول خين نيفينؤوي.\nثاي إت إيري تي ستراتيا انتي ني أنجيلوس تي أوأوناك إنخيتس إفجو إمموس جي أوأو أو إم إفنوتي خين ني إت تشوسي نيم أو هيريني هيجين بي كاهي نيم أو تيماتي خين ني رومي.",
                de: "Großer und ewiger Gott, der du den Menschen ohne Verderbnis geschaffen hast.\nDen Tod, der durch den Neid des Teufels in die Welt kam, hast du zerstört durch die lebensspendende Erscheinung deines eingeborenen Sohnes,\nunseres Herrn, unseres Gottes und Erlösers Jesus Christus. Du hast die Erde mit deinem himmlischen Frieden erfüllt.\nDafür preisen Dich die Engelscharen, indem sie ausrufen: Ehre sei Gott in der Höhe und auf Erden Friede und Freude den Menschen seiner Gnade.",
                ar: "يا الله العظيم الأبدي الذي جبل الإنسان على غير فساد.\nوالموت الذي دخل إلى العالم بحسد إبليس هدمته، بالظهور المحيي الذي لابنك الوحيد الجنس.\nربنا وإلهنا ومخلصنا يسوع المسيح. وملأت الأرض من السلام الذي من السموات.\nهذا الذي أجناد الملائكة يمجدونك به قائلين: المجد لله في الأعالي وعلى الأرض السلام وفي الناس المسرة.",
                cop_cop: "Ⲫⲛⲟⲩϯ ⲡⲓⲛⲓϣϯ ⲡⲓϣⲁⲉ̀ⲛⲉϩ: ⲫⲏⲉ̀ⲧⲁϥⲕⲱⲧ ⲙ̀ⲡⲓⲣⲱⲙⲓ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ϯⲙⲉⲧⲁⲧⲧⲁⲕⲟ.\nⲞⲩⲟϩ ⲫ̀ⲙⲟⲩ ⲉ̀ⲧⲁϥⲓ̀ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲕⲟⲥⲙⲟⲥ: ϩⲓⲧⲉⲛ ⲡⲓⲫ̀ⲑⲟⲛⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲇⲓⲁⲃⲟⲗⲟⲥ ⲁⲕϣⲉⲣϣⲱⲣϥ: ϩⲓⲧⲉⲛ ⲡⲓⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲛ̀ⲧⲉ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ.\nⲚ̀ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲟⲩⲟϩ ⲁⲕⲙⲟϩ ⲙ̀ⲡⲓⲕⲁϩⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯϩⲓⲣⲏⲛⲏ ⲧⲏ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀.\nⲐⲁⲓ ⲉ̀ⲧⲉⲣⲉ ϯⲥⲧⲣⲁⲧⲓⲁ̀ ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ϯⲱ̀ⲟⲩ ⲛⲁⲕ ⲛ̀ϧⲏⲧⲥ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ: ϫⲉ ⲟⲩⲱ̀ⲟⲩ ⲙ̀Ⲫⲛⲟⲩϯ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ: ⲛⲉⲙ ⲟⲩϩⲓⲣⲏⲛⲏ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ: ⲛⲉⲙ ⲟⲩϯⲙⲁϯ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ.",
                ar_de: "Ya Allah el azim el abadi, allazy gabal el insan 3ala gheir fasad.\nWal mawt allazy dakhal ela el 3alam be 7asad eblis hadamtahu, bel zohoor el mo7yi allazy le ibnik el wa7id el gens.\nRabbona wa elahona wa mokhalesona Yassou3 el Massi7. Wa mala2t el ard men el salam allazy men el samawat.\nHaza allazy agnad el mala2ika yomagedonaka behi qa2elin: El magd lillah fel a3ali wa 3ala el ard el salam wa fel nas el masarra.",
                cop_de: "Efnouti pi-nishti pi-sha-eneh fi-etaf-kot empi-romi e-hri ejen ti-met-at-tako.\nOwoh efmou etaf-i ekhoun epi-kosmos hiten pi-efthonos ente pi-diavolos ak-sher-shorf, hiten pi-ou-onh evol en-ref-tankho ente pek-monogenis.\nEn-shiri Pen-chois owoh Pen-nouti owoh Pen-sotir Isous Pi-khristos: owoh ak-moh empi-kahi evol khen ti-hirini ti-evol khen ni-fi-oui.\nThai et-ere ti-stratia ente ni-angelos ti-o-ou nak enkhets evjo emmos: je ou-o-ou em-Efnouti khen ni-et-chosi: nem ou-hirini hijen pi-kahi: nem ou-timati khen ni-romi.",
            },
            {
                id: 2,
                speaker: "Diakon",
                cop_ar: "إبروس افكصاستيه إي برتيس تيه لياس إيرينيس كيه آغابيس كيه طون آجيون إسباسمون طون أبوسطولون.",
                de: "Betet für den vollkommenen Frieden, für die Liebe und die apostolischen reinen Küsse.",
                ar: "صلوا من أجل السلام الكامل والمحبة والقبلة الطاهرة الرسولية.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲧⲉⲗⲓⲁⲥ ⲓⲣⲏⲛⲏⲥ ⲕⲉ ⲁ̀ⲅⲁⲡⲏⲥ ⲕⲉ ⲧⲟⲩ ⲁ̀ⲅⲓⲟⲩ ⲁ̀ⲥⲡⲁⲥⲙⲟⲩ ⲧⲱⲛ ⲁ̀ⲡⲟⲥⲧⲟⲗⲱⲛ.",
                ar_de: "Sallou men agl el salam el kamel wal ma7aba wal qobla el tahera el rasoulya.",
                cop_de: "Pros evxasthe yper tis teleias irinis ke agapis ke ton agion aspasmon ton apostolon.",
            },
            {
                id: 3,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 4,
                speaker: "Priester",
                cop_ar: "خين بيك تيماتي إفنوتي موه إننهيت خين تيك هيريني أووه ماطوفون إيفول هاثوليف نيفين نيم إكروف نيم ميتشوفى نيفين نيم بان أورجيا نيفين نيم تي ميت ريف اير إفميفئي إنتي تي كاكيا إتئير فورين إم إفمو.\nأووه أريتين إن إيم إبشا تيرين بين نيف إيثرين إيراس بازيستي إنتين إيريو خين أوفي إثؤواف إي إبجين تين تشي خين أوميت أتهيتين إي إيهاب إيفول خين تيك ذوريا إن أثمو أووه إن إن إيبورانيون خين بي إخرستوس إيسوس بين شويس",
                de: "Nach deinem Wohlgefallen, o Gott, erfülle unsere Herzen mit deinem Frieden. Reinige uns von aller Befleckung, allem Betrug, aller Heuchelei, jeder listigen Tat und vom Andenken an das Böse, das den Tod nach sich zieht.\nMache uns alle würdig, o Herr, einander mit einem heiligen Kuss zu grüßen, damit wir, ohne uns Verurteilung einzuhandeln, deine unsterblichen und himmlischen Gabe erlangen, durch Christus Jesus unseren Herrn.",
                ar: "بمسرتك يا الله املأ قلوبنا من سلامك. وطهرنا من كل دنس ومن كل غش ومن كل رياء ومن كل فعل خبيث ومن تذكار الشر الملبس بالموت.\nواجعلنا مستحقين كلنا يا سيدنا أن نقبل بعضنا بعضاً بقبلة مقدسة لكي ننال بغير وقوع في دينونة من موهبتك غير المائتة السمائية بالمسيح يسوع ربنا",
                cop_cop: "Ϧⲉⲛ ⲡⲉⲕϯⲙⲁϯ Ⲫⲛⲟⲩϯ ⲙⲟϩ ⲛ̀ⲛⲉⲛϩⲏⲧ ϧⲉⲛ ⲧⲉⲕϩⲓⲣⲏⲛⲏ. Ⲟⲩⲟϩ ⲙⲁⲧⲟⲩⲃⲟⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲑⲱⲗⲉⲃ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲭⲣⲟϥ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲙⲉⲧϣⲟⲃⲓ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲡⲁⲛⲟⲩⲣⲅⲓⲁ̀ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ϯⲙⲉⲧⲣⲉϥⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲧⲉ ϯⲕⲁⲕⲓⲁ̀ ⲉⲧⲉⲣⲫⲟⲣⲓⲛ ⲙ̀ⲫ̀ⲙⲟⲩ.\nⲞⲩⲟϩ ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡϣⲁ ⲧⲏⲣⲉⲛ Ⲡⲉⲛⲛⲏⲃ: ⲉ̀ⲧⲣⲉⲛⲉⲣⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲛ̀ⲛⲉⲛⲉⲣⲏⲟⲩ: ϧⲉⲛ ⲟⲩⲫⲓ ⲉⲑⲟⲩⲁⲃ: ⲉ̀ⲡϫⲓⲛⲧⲉⲛϭⲓ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧϩⲓⲧⲉⲛ ⲉ̀ϩⲁⲡ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲕⲇⲱⲣⲉⲁ̀ ⲛ̀ⲁⲑⲙⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲟⲛ: ϧⲉⲛ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.",
                ar_de: "Be masarateka ya Allah emla2 qoloubana men salamek. Wa taherna men kol danas wa men kol ghesh wa men kol riya2 wa men kol fe3l khabis wa men tazkar el shar el molbas bel mawt.\nWa eg3alna mosta7iqin kollana ya sayedana an noqabel ba3duna ba3dan be qobla moqadasa lekay nanal beghayr woqou3 fi daynouna men mawhibatika ghayr el ma2eta el sama2eya bel Massi7 Yassou3 Rabbina.",
                cop_de: "Khen pek-timati Efnooti moh en-nen-hit khen tek-hirini. Owoh ma-touvon evol ha tholev niven: nem khrof niven: nem met-shovi niven: nem pan-ourgia niven: nem ti-met-ref-er-efmevi ente ti-kakia et-er-forin em-efmou.\nOwoh ari-ten en-em-psha tiren Pen-nib: etren-er-aspazesthe en-nen-eri-ou: khen ou-fi ethowab: ep-jin-ten-chi khen ou-met-at-hitin e-hap: evol khen tek-dorea en-athmou owoh en-e-pouranion: khen Pi-khristos Isous Pen-chois.",

                // HIER SIND DIE NEUEN BUTTONS

                reconciliation_menu: [
                    {
                        label_ar: "افرحي يا مريم",
                        label_de: "Freu dich Maria",
                        action: "goto_rejoice_mary" // Führt zur neuen Seite 1
                    },
                    {
                        label_ar: "اسبسمس ادام",
                        label_de: "Unsere Väter (Aspasmos Adam)",
                        action: "goto_aspasmos_adam" // Führt zur neuen Seite 2
                    }
                ]
            },

            {
                id: 5,
                speaker: "Diakon",
                cop_ar: "أسـپـاذسـتي ألليلوس إن فـيلـيـمـاتی آجـيو. (كيريي إليسوس) * 3. نای كيريي إيتي فای پي إيسـوس پي إخـرسـتـوس إبشير إم إفنوتى سوتيم إيرون أووه ناي نان. إبروسفرين كاطا إطربو إستـاثيتي كـاطـا إطرومـوايس أناطولاس إفليـبساتـي إبروس خـومين.",
                de: "Küsst einander mit einem heiligen Kuss. (Herr erbarme Dich)* 3. Ja o Herr Jesus Christus, Sohn Gottes, erhöre uns und erbarme Dich unser. Tretet heran nach der Vorschrift, steht in Ehrfurcht und schaut nach Osten. Wir hören.",
                ar: "قبلوا بعضكم بعضاً بقبلةٍ مقدسة. (يارب ارحم)* 3. نعم يارب الذي هو يسوع المسيح ابن الله الحي، اسمعنا وارحمنا. تقدموا تقدموا تقدموا على الرسم، قفوا برعدة، والي الشرق أنظروا. ننصت.",
                cop_cop: "Ⲁⲥⲡⲁⲍⲉⲥⲑⲉ ⲁⲗⲗⲏⲗⲟⲩⲥ ⲉⲛ ⲫⲓⲗⲏⲙⲁⲧⲓ ⲁⲅⲓⲱ. (Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ) ⲅ̅. Ⲛⲁⲓ Ⲕⲩⲣⲓⲉ ⲏ̀ⲧⲉ ⲫⲁⲓ ⲡⲉ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡ̀ϣⲏⲣⲓ ⲙ̀Ⲫⲛⲟⲩϯ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ. Ⲡⲣⲟⲥⲫⲉⲣⲓⲛ ⲕⲁⲧⲁ ⲧⲣⲟⲡⲟⲩ: ⲥⲧⲁⲑⲏⲧⲉ ⲕⲁⲧⲁ ⲧⲣⲟⲙⲟⲩ: ⲓⲥ ⲁ̀ⲛⲁⲧⲟⲗⲁⲥ ⲃⲗⲉⲯⲁⲧⲉ ⲡⲣⲟⲥⲭⲱⲙⲉⲛ.",
                ar_de: "Qabelou ba3dakom ba3dan be qobla moqadasa. (Ya Rab er7am) x3. Na3am ya Rab allazy howa Yassou3 el Massi7 Ebn Allah el 7ay, esma3na wa er7amna. Taqadamou 3ala el rasm, qefou be ro3da, wa ela el sharq onzorou. Nonsit.",
                cop_de: "Aspazesthe allilous en filimati agio. (Kyrie eleison) x3. Nai Kyrie iti fai pe Isos Pkhristos Epshiri em-Efnouti sotem eron owoh nai nan. Prosferin kata etropo estathite kata etromo is anatolas evlepsate proschomen."
            },
            {
                id: 6,
                sectionTitle: {
                    de: "Durch die Fürsprachen",
                    ar: "بشفاعات"
                },
                speaker: "Volk",
                cop_ar: "هيتين نى إبريسفيا إنتيه تى ثيه أوطوكوس إثؤواب ماريا: إبتشويس أرى إهموت نان إمبى كو إيفول إنتيه نين نوفى.\nتين أوأوشت إممو ك أو بخرستوس: نيم بيك يوت إن آغاثوس: نيم بي إبنفما إثؤواب: جيه (أك إى / أكطونك) أكسوتى إممون.\nإيليوس إيرينيس ثيسيا إينيسي أوس.",
                de: "Durch die Fürsprachen der Mutter Gottes, der heiligen Maria, gewähre uns, o Herr, die Vergebung unserer Sünden.\nWir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist, denn Du bist (gekommen / auferstanden) und hast uns erlöst.\nErbarmen des Friedens, Opfer des Lobes.",
                ar: "بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا.\nنسجد لك أيها المسيح مع أبيك الصالح والروح القدس لأنك (أتيت / قمت) وخلصتنا.\nرحمة السلام ذبيحة التسبيح.",
                cop_cop: "Ϩⲓⲧⲉⲛ ⲛⲓⲡ̀ⲣⲉⲥⲃⲓⲁ̀ ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ: Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ.\nⲦⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ̀ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ (ⲁⲕⲓ̀ / ⲁⲕⲧⲱⲛⲕ) ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ.\nⲈⲗⲉⲟⲥ ⲓ̀ⲣⲏⲛⲏⲥ ⲑⲩⲥⲓⲁ̀ ⲉ̀ⲛⲉⲥⲉⲱⲥ.",
                ar_de: "Bi shafa3at walidat el elah el qadisa Mariam, Ya Rab an3em lana be maghfirat khatayana.\nNasgod laka ayoha el Massi7 ma3a abika el sale7 wal ro7 el qodos le annaka (atayta / qomta) wa khallastana.\nRa7mat el salam zabi7at el tasbi7.",
                cop_de: "Hiten ni presvia ente ti theotokos ethowab Maria: Epchois ari-hmot nan empi ko evol ente nen novi.\nTen ou-osht emmok o Pkhristos: nem pek yot en aghathos: nem pi pnevma ethowab: je (ak-i / ak-tonk) ak soti emmon.\nEleos irinis thisia ene-seos.",
            },
            {
                id: 7,
                speaker: "Priester",
                cop_ar: "أوكيريوس ميه طا بانضون إممون",
                de: "Der Herr sei mit euch allen",
                ar: "الرب مع جميعكم.",
                cop_cop: "Ⲟ̀ Ⲕⲩⲣⲓⲟⲥ ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ ⲩ̀ⲙⲱⲛ",
                ar_de: "El Rab ma3a gami3ikom.",
                cop_de: "O Kyrios meta panton imon.",
            },
            {
                id: 8,
                speaker: "Volk",
                cop_ar: "كيه ميه طا طو إبنفما طوسو",
                de: "Und mit deinem Geiste.",
                ar: "ومع روحك أيضاً.",
                cop_cop: "Ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡ̀ⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ",
                ar_de: "Wa ma3a ro7ika aydan.",
                cop_de: "Ke meta tou pnevmatos sou.",
            },
            {
                id: 9,
                speaker: "Priester",
                cop_ar: "آنو إيمون طا ذكارذياس",
                de: "Erhebt Eure Herzen!",
                ar: "إرفعوا قلوبكم.",
                cop_cop: "Ⲁ̀ⲛⲱ ⲩ̀ⲙⲱⲛ ⲧⲁⲥ ⲕⲁⲣⲇⲓⲁⲥ",
                ar_de: "Ano imon tas kardias.",
                cop_de: "Ano imon tas kardias.",
            },
            {
                id: 10,
                speaker: "Volk",
                cop_ar: "إيه خومين إبروس طون كيريون",
                de: "Wir haben sie beim Herrn.",
                ar: "هي عند الرب.",
                cop_cop: "Ⲉⲭⲟⲙⲉⲛ ⲡⲣⲟⲥ ⲧⲟⲛ Ⲕⲩⲣⲓⲟⲛ",
                ar_de: "Ekhomen pros ton Kyrion.",
                cop_de: "Ekhomen pros ton Kyrion.",
            },
            {
                id: 11,
                speaker: "Priester",
                cop_ar: "إيفخاريستى صومين طو كيريو",
                de: "Lasst uns dem Herrn danken.",
                ar: "فلنشكر الرب.",
                cop_cop: "Ⲉⲩⲭⲁⲣⲓⲥⲧⲏⲥⲱⲙⲉⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ",
                ar_de: "Efcharisto somen to Kyrio.",
                cop_de: "Efcharistisomen to Kyrio.",
            },
            {
                id: 12,
                sectionTitle: {
                    de: "würdig und recht",
                    ar: "مستحق و عادل "
                },
                speaker: "Volk",
                cop_ar: "أكسيون كيه ذى كيه أون",
                de: "Würdig und recht.",
                ar: "مستحق وعادل.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ",
                ar_de: "Axion ke dikeon.",
                cop_de: "Axion ke dikeon.",
                reconciliation_menu: [
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_id_5" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_16" }
                ]
            },
            {
                id: 13,
                speaker: "Priester",
                cop_ar: "أكسيون كى ذى كيئون أكسيون كى ذى كيئون أكسيون كى ذى كيئون: أليثوس غار خين أو ميثمى أكسيون كى ذى كيئون.\nفيئت شوب أفنيب إبشويس إفنوتى إنتى تى ميثمى: فيئت شوب خاجوؤو أن نى إينيه: أووه إت أوى ان أورو شا إينيه: فيئت شوب خين نى إتشوسى.\nفيئت هيمسى هيجين بى إثرونوس إنتى بيف أوأو: فئتو أو أو شت إمموف هيتين جوم نيفين إثؤواف.\nأووه إت جوشت إيجين نيئت ثيفيوت: فيئيتاف ثاميو إن إتفى نيم إبكاهى نيم إفيوم: نيم نيئتى إنخيتو تيرو.\nإفيوت إمبين شويس أووه بيننوتى أووه بين سوتير إيسوس بى إخرستوس: فاى إيتاك ثاميو إم إبتريف إيفول هى ططف: نى إيتوناف إيروؤو نيم نيئي تى إنسيناف إيروؤو.",
                de: "Würdig und recht, würdig und recht, würdig und recht: Es ist in Wahrheit würdig und recht.\nDer du bist, Meister, Herr, Gott der Wahrheit. Der du bist vor den Ewigkeiten und herrschst bis in Ewigkeit. Der du in den Höhen wohnst.\nDer du auf dem Thron deiner Herrlichkeit sitzt, der du angebetet wirst durch alle heiligen Kräfte.\nUnd auf die Erniedrigten herabschaust. Der du den Himmel, die Erde und das Meer und alles, was in ihnen ist, geschaffen hast.\nVater unseres Herrn, Gottes und Erlösers Jesus Christus, durch den Du alles erschaffen hast, das Sichtbare und das Unsichtbare.",
                ar: "مستحق وعادل، مستحق وعادل، مستحق وعادل، لأنه حقاً بالحقيقة مستحق وعادل.\nأيها الكائن السيد الرب إله الحق. الكائن قبل الدهور والمالك إلى الأبد. الساكن في الأعالي.\nالجالس على كرسي مجده، المسجود له من جميع القوات المقدسة.\nوالناظر إلى المتواضعات. الذي خلق السماء والأرض والبحر وكل ما فيها.\nأبو ربنا وإلهنا ومخلصنا يسوع المسيح. هذا الذي خلقت به كل شيء، ما يرى وما لا يرى.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲁ̀ⲗⲏⲑⲱⲥ ⲅⲁⲣ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ.\nⲪⲏⲉⲧϣⲟⲡ Ⲡⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ: ⲫⲏⲉⲧϣⲟⲡ ϧⲁϫⲱⲟⲩ ⲛ̀ⲛⲓⲉ̀ⲛⲉϩ: ⲟⲩⲟϩ ⲉⲧⲟⲓ ⲛ̀ⲟⲩⲣⲟ ϣⲁ ⲉ̀ⲛⲉϩ: ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲛⲏⲉⲧϭⲟⲥⲓ.\nⲪⲏⲉⲧϩⲉⲙⲥⲓ ϩⲓϫⲉⲛ ⲡⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ ⲡⲉϥⲱ̀ⲟⲩ: ⲫⲏⲉⲧⲟⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ϩⲓⲧⲉⲛ ϫⲟⲙ ⲛⲓⲃⲉⲛ ⲉ̀ⲑⲟⲩⲁⲃ.\nⲞⲩⲟϩ ⲉⲧϫⲟⲩϣⲧ ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧⲑⲉⲃⲓⲏⲟⲩⲧ: ⲫⲏⲉ̀ⲧⲁϥⲑⲁⲙⲓⲟ ⲛ̀ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲫ̀ⲓⲟⲙ: ⲛⲉⲙ ⲛⲏⲉⲧϣⲟⲡ ⲛ̀ϧⲏⲧⲟⲩ ⲧⲏⲣⲟⲩ.\nⲪⲓⲱⲧ ⲙ̀Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲫⲁⲓ ⲉ̀ⲧⲁⲕⲑⲁⲙⲓⲟ ⲙ̀ⲡ̀ⲧⲏⲣϥ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ: ⲛⲏⲉⲧⲟⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏⲉⲧⲉⲛⲥⲉⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲁⲛ.",
                ar_de: "Axion ke dikeon, axion ke dikeon, axion ke dikeon: alithos ghar khen ou-methmi axion ke dikeon.\nFi-et-shop ef-nib ep-chois ef-nouti ente ti-methmi: fi-et-shop kha-gou en ni-eneh: owoh et-oi en-ouro sha eneh: fi-et-shop khen ni-et-chosi.\nFi-et-hemsi hijen pi-thronos ente pef-o-ou: fi-et-ou-osht emmof hiten jom niven etho-wab.\nOwoh et-jousht ejen ni-et-theviout: fi-et-af-thamio en-et-fe nem ep-kahi nem ef-yom: nem ni-et-en-khitou tirou.\nEf-yot em-pen-chois owoh pen-nouti owoh pen-sotir Isos Pi-khristos: fai et-ak-thamio em-ep-tirf evol hi-totf: ni-et-ou-nav ero-ou nem ni-et-en-se-nav ero-ou.",
                cop_de: "Axion ke dikeon, axion ke dikeon, axion ke dikeon: alithos gar khen ou-methmi axion ke dikeon.\nFi-et-shop Pen-nib Ep-chois Ef-nouti ente ti-methmi: fi-et-shop kha-gou en ni-eneh: owoh et-oi en-ouro sha eneh: fi-et-shop khen ni-et-chosi.\nFi-et-hemsi hijen pi-thronos ente pef-o-ou: fi-et-ou-osht emmof hiten jom niven etho-wab.\nOwoh et-jousht ejen ni-et-theviout: fi-et-af-thamio en-et-fe nem ep-kahi nem ef-yom: nem ni-et-en-khitou tirou.\nEf-yot em-pen-chois owoh pen-nouti owoh pen-sotir Isos Pi-khristos: fai et-ak-thamio em-ep-tirf evol hi-totf: ni-et-ou-nav ero-ou nem ni-et-en-se-nav ero-ou.",

            },
            {
                id: 14,
                speaker: "Diakon",
                cop_ar: "إى كاثى ميه نى أناسثيتيه",
                de: "Wer sitzt, stehe auf!",
                ar: "أيها الجلوس قفوا",
                cop_cop: "Ⲛⲓⲕⲁⲑⲏⲙⲉⲛⲟⲓ ⲁ̀ⲛⲁⲥⲧⲏⲧⲉ",
                ar_de: "Ayuha el golous qefou.",
                cop_de: "Ni kathimeni anastite.",
            },
            {
                id: 15,
                speaker: "Priester",
                cop_ar: "فيئتو أوهي إى راتو ناهراف انجي ني أنجليوس نيم ني أرشي أنجليوس ني أرشي ني إكسوسيا ني إثرونوس ني ميت شويس ني جوم",
                de: "Der, vor dem stehen: die Engel, die Erzengel, die Mächte, die Gewalten, die Throne, die Herrschaften und die Kräfte.",
                ar: "الذي يقف أمامه الملائكة ورؤساء الملائكة الرئاسات والسلطات والكراسي والأرباب والقوات.",
                cop_cop: "Ⲫⲏⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛⲁϩⲣⲁϥ ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲣⲭⲏⲁ̀ⲅⲅⲉⲗⲟⲥ: ⲛⲓⲁ̀ⲣⲭⲏ ⲛⲓⲉⲝⲟⲩⲥⲓⲁ̀ ⲛⲓⲑ̀ⲣⲟⲛⲟⲥ ⲛⲓⲙⲉⲧϭⲟⲓⲥ ⲛⲓϫⲟⲙ.",
                ar_de: "Allazy yaqef amamohu el mala2ika wa ro2asa2 el mala2ika, el re2asat wal soltat wal karasi wal arbab wal qowat.",
                cop_de: "Fi-et-ohi e-ratou nahraf enje ni-angelos nem ni-arshi-angelos: ni-arshi ni-exousia ni-thronos ni-met-chois ni-jom.",
            },
            {
                id: 16,
                speaker: "Diakon",
                cop_ar: "إس أناطولاس إفليب صاتيه",
                de: "Schaut nach Osten!",
                ar: "وإلى الشرق انظروا.",
                cop_cop: "Ⲓⲥ ⲁ̀ⲛⲁⲧⲟⲗⲁⲥ ⲃⲗⲉⲯⲁⲧⲉ",
                ar_de: "Wa ela el sharq onzorou.",
                cop_de: "Is anatolas evlepsate.",
            },
            {
                id: 17,
                speaker: "Priester",
                cop_ar: "انثوك غار بي إتو أوهي ايراتو إم بيك كوتي انجي ني شيروفيم اثميه امفال.\nنيم ني سيرافيم نابي سو غن تنه ايفئير هيمنوس خين أومون ايفول إن أت كاروؤو ايفجو إمموس.",
                de: "Du bist es, der umgeben ist von den Cherubim, die voller Augen sind, und von den Seraphim mit sechs Flügeln. Sie preisen dich immerdar unaufhörlich und sprechen:",
                ar: "أنت هو الذي يقف حولك الشاروبيم الممتلئون أعيناً والسيرافيم ذوو الستة الأجنحة يسبحون دائماً بغير سكوت قائلين:",
                cop_cop: "Ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲉⲕⲕⲱϯ ⲛ̀ϫⲉ ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ⲉⲑⲙⲉϩ ⲛ̀ⲃⲁⲗ: ⲛⲉⲙ ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ⲛⲁ ⲡⲓⲥⲟⲟⲩ ⲛ̀ⲧⲉⲛϩ. Ⲉⲩⲉⲣϩⲩⲙⲛⲟⲥ ϧⲉⲛ ⲟⲩⲙⲟⲩⲛ ⲉ̀ⲃⲟⲗ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.",
                ar_de: "Anta howa allazy yaqef 7awlaka el Cherubim el momtale2oun a3yonan, wal Seraphim zawoo el setat agne7a yosabe7oun da2eman beghayr sokout qa2elin:",
                cop_de: "Enthok gar pe et-ohi eratou em-pek-koti enje ni-cherubim eth-meh en-val: nem ni-seraphim na pi-so-ou en-tenh. Ev-er-hymnos khen ou-moun evol en-at-karo-ou ev-jo emmos.",
                reconciliation_menu: [
                    { label_ar: "أيها الرب إله القوات", label_de: "O Herr, Gott der Heerscharen", action: "goto_lord_of_hosts" },
                    { label_ar: "اسبسمس واطس 1", label_de: "Aspasmos Watos 1", action: "goto_aspasmos_watos_1" },
                    { label_ar: "اسبسمس واطس 2", label_de: "Aspasmos Watos 2", action: "goto_aspasmos_watos_2" }
                ]
            },
            {
                id: 18,
                speaker: "Volk",
                cop_ar: "ني شيروبيم سيه أو أوشت إمموك نيم ني سيه رافيم سيه تي أوأوناك: إفؤش إيفول إفجو إمموس:\nجيه آجيوس آجيوس آجيوس كيريوس صافاؤوت: إبلى ريس أو أورانس كيه إى جى تيس آجياس صوذوكسيس.",

                de: "Die Cherubim beten Dich an und die Seraphim verherrlichen Dich, indem sie ausrufen und sprechen:\nHeilig, heilig, heilig, Herr der Heerscharen. Himmel und Erde sind erfüllt von Deiner heiligen Herrlichkeit.",

                ar: "الشاروبيم يسجدون لك، والسيرافيم يمجدونك، صارخين قائلين:\n\"قدوس. قدوس. قدوس. رب الصباؤوت. السماء والأرض مملوءتان من مجدك الاقدس.\"",

                cop_cop: "Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲛⲉⲙ ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ⲥⲉϯⲱⲟⲩ ⲛⲁⲕ: ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ:\nϪⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ Ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ: ⲡ̀ⲗⲏⲣⲏⲥ ⲟ̀ ⲟⲩⲣⲁⲛⲟⲥ ⲕⲉ ⲏ̀ ⲅⲏ ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲥⲟⲩ ⲇⲟⲝⲏⲥ.",

                cop_de: "Ni-Cherubim se-ou-osht emmok nem ni-Seraphim se-ti-o-ou nak: ev-osh evol ev-jo emmos:\nJe Agios Agios Agios Kyrios Savaot: pliris o ouranos ke i gi tis agias sou doxis.",

                ar_de: "El Cherubim yasgodoun lak, wal Seraphim yomagedounak, sarekhin qa2elin:\nJe Agios Agios Agios, Kyrios Sabaot. El sama wal ard mamlou2atan men magdek el aqdas.",
                reconciliation_menu: [
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_start" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_23" } // Führt zu ID 21
                ]
            },

            {
                id: 222,
                sectionTitle: {
                    de: "Heilig,Heilig",
                    ar: "اجيوس اجيوس"
                },
                speaker: "Priester",

                cop_ar: "آجيوس، آجيوس، آجيوس.\nأكؤواب، اكؤواب، اكؤواب. بالحق، أكؤواب. خين أوميثمى ابشويس بيننوتى.\nفيئيتاف اير ابلازين اممون أووه أفثاميون أووه أفكان خين بى باراذيسوس انتى ابوؤنوف. خين إيجين ايثرين اير برافينين ذى انتيك إنتولى هيتين تى آباتى انتى بيهوف.\nأنهى ايفول خين بى أونخ ان اينيه أووه أفئيرا كسور يزين اممون ايفول خين بى باراذيسوس. انتى إبؤونوف امبيك كان انثوك أون شا ايفول.\nآلا اك جيم بين شينى خين أومون ايفول هيتين نيك إبروفيتيس إثؤواف. أووه خين ليتخائى إنتى نيئيهوؤو أكؤونه نان ايفول أنون خانئيتهيمسى.\nخين ابكاكى نيم انخيفى ام افمو هيتين بيك مونوجينيس انشيرى بين شويس أووه بيننوتى أووه بنسوتير ايسوس بى اخرستوس.\nفاى ايتى ايفول خين بى ابنفما اثؤواف نيم ايفول خين تى بارثينوس اثؤواف ماريا.",

                de: "Heilig, heilig, heilig\nHeilig, heilig, heilig bist Du in Wahrheit, o Herr, unser Gott.\nDer du uns geformt und geschaffen und uns in das Paradies der Freude gesetzt hast. Als wir dein Gebot durch die Arglist der Schlange übertraten,\nsind wir vom ewigen Leben gefallen und aus dem Paradies der Freude verbannt worden. Du aber hast uns bis zum Schluss nicht verlassen,\nsondern hast uns allezeit begleitet durch deine heiligen Propheten. Und am Ende der Tage bist du uns erschienen, uns, die wir saßen\nin Finsternis und Todesschatten, durch Deinen einzigen Sohn, unseren Herrn, Gott und Erlöser Jesus Christus,\nder aus dem heiligen Geist und der Jungfrau Maria ist.",

                ar: "أجيوس، أجيوس، أجيوس.\nقدوس، قدوس، قدوس. بالحقيقة أيها الرب إلهنا.\nالذي جبلنا وخلقنا ووضعنا في فردوس النعيم وعندما خالفنا وصيتك بغواية الحية.\nسقطنا من الحياة الأبدية ونفينا من فردوس النعيم. فلم تتركنا عنك أيضاً إلى الانقضاء.\nبل تعهدتنا دائماً بأنبيائك القديسين. وفي آخر الأيام ظهرت لنا نحن الجلوس.\nفي الظلمة وظلال الموت. بابنك الوحيد الجنس ربنا وإلهنا ومخلصنا يسوع المسيح.\nهذا الذي من الروح القدس ومن العذراء القديسة مريم.",

                cop_cop: "Ⲁ̀ⲅⲓⲟⲥ, ⲁ̀ⲅⲓⲟⲥ, ⲁ̀ⲅⲓⲟⲥ.\nⲉⲕⲟⲩⲁⲃ, ⲉⲕⲟⲩⲁⲃ, ⲉⲕⲟⲩⲁⲃ. Ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.\nⲪⲏⲉ̀ⲧⲁϥⲉⲣⲡⲗⲁⲍⲓⲛ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲁϥⲑⲁⲙⲓⲟⲛ ⲟⲩⲟϩ ⲁϥⲭⲁⲛ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲛⲟϥ. Ϧⲉⲛ ⲡ̀ϫⲓⲛⲉⲑⲣⲉⲛⲉⲣⲡⲁⲣⲁⲃⲉⲛⲓⲛ ⲇⲉ ⲛ̀ⲧⲉⲕⲉⲛⲧⲟⲗⲏ ϩⲓⲧⲉⲛ ϯⲁ̀ⲡⲁⲧⲏ ⲛ̀ⲧⲉ ⲡⲓϩⲟϥ.\nⲀⲛϩⲉⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ ⲟⲩⲟϩ ⲁⲩⲉⲣⲉⲝⲟⲣⲓⲍⲓⲛ ⲙ̀ⲙⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲟⲩⲛⲟϥ. Ⲙ̀ⲡⲉⲕⲭⲁⲛ ⲛ̀ⲑⲟⲕ ⲟⲛ ϣⲁ ⲉ̀ⲃⲟⲗ.\nⲀⲗⲗⲁ ⲁⲕϫⲉⲙⲡⲉⲛϣⲓⲛⲓ ϧⲉⲛ ⲟⲩⲙⲟⲩⲛ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲉⲕⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲉⲑⲟⲩⲁⲃ. Ⲟⲩⲟϩ ϧⲉⲛ ϯϧⲁⲉ̀ ⲛ̀ⲧⲉ ⲛⲓⲉ̀ϩⲟⲟⲩ ⲁⲕⲟⲩⲱⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲏⲉⲧϩⲉⲙⲥⲓ.\nϦⲉⲛ ⲡ̀ⲭⲁⲕⲓ ⲛⲉⲙ ⲧ̀ϧⲏⲓⲃⲓ ⲙ̀ⲫ̀ⲙⲟⲩ: ϩⲓⲧⲉⲛ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.\nⲪⲁⲓ ⲉⲧⲏ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ.",

                cop_de: "Agios, Agios, Agios.\nEk owab, ek owab, ek owab. Khen ou methmi Epchois Pennouti.\nFi eta fer plazin emmon owoh af thamion owoh af khan khen pi paradisos ente epounof. Khen ep jin ethren er paravenin de entek entoli hiten ti apati ente pi hof.\nAn hei evol khen pi onkh en eneh owoh av er exorizin emmon evol khen pi paradisos ente epounof. Empek khan enthok on sha evol.\nAlla ak jem pen shini khen oumoun evol hiten nek profitis ethowab. Owoh khen ti khae ente ni eho-oo ak ouonh nan evol anon kha ni et hemsi.\nKhen epkaki nem etkhivi emefmou hiten pek monogenis enshiri Penchois owoh Pennouti owoh Pensotir Isous Pikhristos.\nFai eti evol khen pi pnevma ethowab nem evol khen ti parthenos ethowab Maria.",

                ar_de: "Agios, Agios, Agios.\nQoddos, Qoddos, Qoddos. Bel 7aqiqa ayuha el Rab elahona.\nAllazy gabalana wa khalaqana wa wada3ana fi ferdous el na3im. Wa 3indama khalafna waseyatak be ghawayat el 7aya.\nSaqatna men el 7aya el abadeya wa nofina men ferdous el na3im. Falam tatrokna 3anka aydan ela el enqeda2.\nBal ta3ahadtana da2eman be anbia2ek el qadisin. Wa fi akher el ayam zahart lana na7no el golous.\nFi el zolma wa zelal el mawt. Be ibnek el wa7id el gens rabona wa elahona wa mokhalesona Yassou3 el Massi7.\nHaza allazy men el ro7 el qodos wa men el 3azra el qadisa Mariam."
            },

            {
                id: 20,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amyn.",
                ar_de: "7aqqan."
            },

            {
                id: 21,
                speaker: "Priester",

                cop_ar: "آفتشي ساركس أووه آفئير رومي أووه آف اتسافون ايهان مويت انتبى أو جاى أى افئير خارزيستي نان امبى ميسى بى ايفول.\nام ابشوى هيتين أوموؤ نيم أو ابنفما آف أيتين ناف إن أو لاؤس إفثويت أفئثرين شوبى اثؤواف.\nهيتين بيك ابنيفما اثؤواف فاي ايتى منري ني ايتى نوف ايتخين بى كوزموس أفتيف اممين امموف إن سوتى خارون ايئفمو ات أوى انؤورو ايئهرى ايجون.\nفاى ايناف أمونى اممون ايفول هيتطف انطوى ايفول هيتين نين نوفى أفشيناف ايبسيت اى آمنتى ايفول هيتين بى اسطفروس.\n(بي لاؤس): آمين",

                de: "Er nahm Fleisch an und wurde Mensch und lehrte uns die Wege des Heils. indem er uns begnadete mit der Geburt\nvon oben durch das Wasser und den Geist. Er führte uns für sich zu einem einzigen Volk zusammen. Er machte uns rein durch den heiligen Geist.\nEr, der die Seinen, die in der Welt waren, liebte. Er hat sich selbst als Lösegeld für uns dem Tod hingegeben, der über uns herrschte,\nwelchem wir verfallen waren, verkauft durch unsere Sünden. Er stieg hinab in die Unterwelt durch das Kreuz.\n(Volk): Amen.",

                ar: "تجسد وتأنس وعلمنا طرق الخلاص وأنعم علينا بالميلاد\nالذي من فوق بواسطة الماء والروح وجعلنا له شعباً مجتمعاً وصيرنا أطهاراً بروحك القدوس\nهذا الذي أحب خاصته الذين في العالم وأسلم ذاته فداء عنا إلى الموت الذي تملك علينا\nهذا الذي كنا ممسكين به مبيعين من قبل خطايانا نزل إلى الجحيم من قبل الصليب\n(الشعب): آمين. حقاً",

                cop_cop: "Ⲁϥϭⲓⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁϥⲉⲣⲣⲱⲙⲓ ⲟⲩⲟϩ ⲁϥⲧ̀ⲥⲁⲃⲟⲛ ⲉ̀ϩⲁⲛⲙⲱⲓⲧ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ. Ⲁϥⲉⲣⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲛⲁⲛ ⲙ̀ⲡⲓⲙⲓⲥⲓ ⲡⲓⲉ̀ⲃⲟⲗ.\nⲘ̀ⲡ̀ϣⲱⲓ ϩⲓⲧⲉⲛ ⲟⲩⲙⲱⲟⲩ ⲛⲉⲙ ⲟⲩⲡⲛⲉⲩⲙⲁ. Ⲁϥⲁⲓⲧⲉⲛ ⲛⲁϥ ⲛ̀ⲟⲩⲗⲁⲟⲥ ⲉϥⲑⲟⲩⲏⲧ. Ⲁϥⲑⲣⲉⲛϣⲱⲡⲓ ⲉⲛⲧⲟⲩⲃⲏⲟⲩⲧ ϧⲉⲛ Ⲡⲉⲕⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.\nⲪⲁⲓ ⲉⲧⲉ ⲙⲉⲛⲣⲉ ⲛⲏⲉⲧⲉ ⲛⲟⲩϥ ⲉⲧϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ: ⲁϥⲧⲏⲓϥ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ ⲛ̀ⲥⲱϯ ϧⲁⲣⲟⲛ ⲉ̀ⲡⲓⲙⲟⲩ ⲉⲧⲟⲓ ⲛ̀ⲟⲩⲣⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.\nⲪⲁⲓ ⲉⲛⲁϥⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟⲛ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧϥ: ⲉⲛⲧⲏⲓ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ: ⲁϥϣⲉ ⲛⲁϥ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲁ̀ⲙⲉⲛϯ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ.\n(Ⲡⲓⲗⲁⲟⲥ): Ⲁⲙⲏⲛ.",

                cop_de: "Afchi sarx owoh afer romi owoh af-tsavon e-han moit ente pi-ougai. Af-er-kharizesthe nan empi-misi pi-evol.\nEmpshoi hiten ou-mo-ou nem ou-pnevma. Af-aiten naf en-ou-laos ef-thouit. Af-thren-shopi en-touvi-out khen Pek-pnevma etho-wab.\nFai ete menre ni-ete nouf et-khen pi-kosmos: af-tif emmin emmof en-soti kharon e-pi-mou et-oi en-ouro e-hri egon.\nFai enaf-amoni emmon evol hitotf: en-ti evol hiten nen-novi: af-she naf epesit e-amenti evol hiten pi-stavros.\n(Pi-Laos): Amyn.",

                ar_de: "Tagassada wa ta2anasa wa 3alamana toroqa el khalas, wa an3ama 3alayna bel milad.\nAllazy men fawq be wasetat el ma2 wal ro7, wa ga3alana lahu sha3ban mogtame3an, wa sayarana atharan be ro7eka el qodous.\nHaza allazy a7aba khasatahu allazina fi el 3alam, wa aslama zatahu fida2an 3anna ela el mawt allazy tamalaka 3alayna.\nHaza allazy kona momaskin behi, mabi3in men qabl khatayana, nazala ela el ga7im men qabl el salib.\n(El Sha3b): Amin. 7aqqan."
            },

            {
                id: 21,
                speaker: "Volk",
                cop_ar: "آمين تي ناهنتي",
                de: "Amen. Ich glaube",
                ar: "حقاً أؤمن",
                cop_cop: "Ⲁⲙⲏⲛ. Ϯⲛⲁϩϯ",
                cop_de: "Amin. Ti-nahti.",
                ar_de: "Haqqan o2men."
            },
            // ID 21: Auferstehung, Himmelfahrt und Gericht (alles in einem Block)
            {
                id: 22,
                speaker: "Priester",
                cop_ar: "أفطنف إيفول خين بى ايهوؤو ام ماه شومت أفشيناف اى ابشوى اينيفيؤوى\nأفهمسي ساتيك أوي نام افيوت إى أفنوش إن أو إيهوؤو انتى شيفيو فاى ايتيف ناؤأونه ايفول انختيف\nاتيهاب اتئييكوميني خين أوذيكيئوسينى أووه افناتى امبى أواى بى أواى كاتا نيف اهفيئوى",
                de: "Er stand von den Toten auf am dritten Tag. Er ist aufgefahren in den Himmel\nund setzte sich zu deiner Rechten, Vater Er bestimmte einen Tag zur Vergeltung, an dem er erscheinen wird,\num den Erdkreis in Gerechtigkeit zu richten und jedem nach seinen Taten zu vergelten",
                ar: "وقام من الأموات في اليوم الثالث وصعد إلى السموات\nوجلس عن يمينك أيها الآب وحدد يوم للمجازاة هذا الذي يظهر فيه\nليدين المسكونة بالعدل ويعطي كل واحد كنحو أعماله",
                cop_cop: "Ⲁϥⲧⲱⲛϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲙ̀ⲙⲁϩϣⲟⲙⲧ: ⲁϥϣⲉ ⲛⲁϥ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀.\nⲀϥϩⲉⲙⲥⲓ ⲥⲁⲧⲉⲕⲟⲩⲓⲛⲁⲙ Ⲫⲓⲱⲧ: ⲁϥⲭⲱ ⲛ̀ⲟⲩⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ϯϣⲉⲃⲓⲱ: ⲫⲁⲓ ⲉⲧⲉϥⲛⲁⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ.\nⲈⲑⲣⲉϥϯϩⲁⲡ ⲉ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲟⲩⲟϩ ⲉϥⲛⲁϯ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀.",
                cop_de: "Aftonf evol khen niethmoout khen pieho-oo emmah shomt: afshe naf epshoi enifioui.\nAfhemsi satek ouinam Ef-yot: afkho enou-eho-oo ente ti-shevio: fai etefna-ouonh evol enkhetf.\nEthref-ti-hap eti-oikoumeni khen ou-methmi: owoh efna-ti empi-ouai pi-ouai kata nef-hvi-oui.",
                ar_de: "Wa qama men el amwat fi el yom el thaleth wa sa3ada ela el samawat.\nWa galasa 3an yamineka ayuha el Ab wa 7adada yawman lel mogaza haza allazy yazhar fihi.\nLiyadina el maskouna bel 3adl wa yo3ti kol wa7ed kan7w a3maleh."
            },

            {
                id: 23,
                speaker: "Volk",
                cop_ar: "كاطاطو إيه ليه أوس سو كيريه: كيه مى كاطاطاس أمرتياس إيمون.",
                de: "Nach deinem Erbarmen, o Herr, und nicht nach unseren Sünden.",
                ar: "كرحمتك يارب وليس كخطايانا.",
                cop_cop: "Ⲕⲁⲧⲁ ⲧⲟ ⲉ̀ⲗⲉⲟⲥ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ: ⲕⲉ ⲙⲏ ⲕⲁⲧⲁ ⲧⲁⲥ ⲁ̀ⲙⲁⲣⲧⲓⲁⲥ ⲏⲙⲱⲛ.",
                cop_de: "Kata to eleos sou Kyrie: ke mi kata tas amartias imon.",
                ar_de: "Ka ra7mateka ya Rab, wa laysa ka khatayana."
            },

            {
                id: 24,
                sectionTitle: {
                    de: "Die Gründungsgebete",
                    ar: "ألرشومات"
                },
                speaker: "Priester",
                cop_ar: "أفكوزي نان إى إخرى إمباى نيشتى إمميستيريون إنتى تيميت إيفسبييس ايفثيش غار ايتيف إى إفمو خا ابؤنخ ام بى كوزموس.",
                de: "Er setzte für uns dieses große Sakrament zur Frömmigkeit ein. Denn da er vorhatte sich selbst in den Tod zu geben für das Leben der Welt.",
                ar: "ووضع لنا هذا السر العظيم الذي للتقوى لأنه فيما هو راسم أن يسلم نفسه للموت عن حياة العالم.",
                cop_cop: "Ⲁϥⲭⲱ ⲛⲁⲛ ⲉ̀ϧⲣⲏⲓ ⲙ̀ⲡⲁⲓⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ: ⲉϥⲑⲏϣ ⲅⲁⲣ ⲉⲧⲏⲓϥ ⲉ̀ⲫ̀ⲙⲟⲩ ϧⲁ ⲡⲱⲛϧ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ.",
                cop_de: "Afkozi nan e-ehri empai nishti em-mysterion ente ti-met-evsevis: ef-thish gar e-tif e-efmou kha ep-onkh em-pi-kosmos.",
                ar_de: "Wa wada3a lana haza el ser el 3azim allazy lel taqwa, le annahu fima howa rasem an yosallem nafsahu lel mawt 3an 7ayat el 3alam."
            },

            {
                id: 25,
                speaker: "Volk",
                cop_ar: "آليثوس بيستيف أومين",
                de: "Wir glauben.",
                ar: "نؤمن",
                cop_cop: "Ⲁⲗⲏⲑⲱⲥ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ.",
                cop_de: "Alithos pistev-omen.",
                ar_de: "No2men."
            },
            // ID 25: Er nahm Brot (Priester)
            {
                id: 26,
                speaker: "Priester",
                cop_ar: "أفتشي إن أو أويك إيجين نيف جيج إثؤواف إن آتتشنى أووه إن أتثوليف أووه إم مكاريون أووه أنريف تنخو",
                de: "Er nahm Brot in seine reinen, makellosen, unbefleckten, seligen und lebensspendenden Hände.",
                ar: "أخذ خبزاً على يديه الطاهرتين اللتين بلا عيب ولا دنس الطوباويتين المحييتين",
                cop_cop: "Ⲁϥϭⲓ ⲛ̀ⲟⲩⲱⲓⲕ ⲉ̀ϫⲉⲛ ⲛⲉϥϫⲓϫ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁⲧϭⲛⲁⲩ ⲟⲩⲟϩ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲕⲁⲣⲓⲟⲛ ⲟⲩⲟϩ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ",
                cop_de: "Afchi en ou oik ejen nef jij ethowab en at-achni owoh en at-tholev owoh em makarion owoh en ref tankho.",
                ar_de: "Akhaza khobzan 3ala yadayhi el tahiratayn allatayn bela 3ayb wala danas el tobawiyatayn el mo7yi atayn."
            },

            {
                id: 27,
                speaker: "Volk",
                cop_ar: "تين ناهتى جيه فاى بيه خين أو ميثمى: آمين.",
                de: "Wir glauben, dass dieses in Wahrheit so ist. Amen.",
                ar: "نؤمن أن هذا هو بالحقيقة: آمين.",
                cop_cop: "Ⲧⲉⲛⲛⲁϩϯ ϫⲉ ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ten nahti je fai pe khen ou methmi: Amyn.",
                ar_de: "No2men an haza howa bel 7aqiqa: Amin."
            },

            {
                id: 28,
                speaker: "Priester",
                cop_ar: "أفجوشت إى إبشوى إى إتفى هاروك فيئتيفوف إنيوت إفنوتى أووه إفنيب إنتى أوؤن نيفين",
                de: "Er blickte hinauf zum Himmel zu dir, der sein Vater ist , Gott und Meister eines jeden.",
                ar: "ونظر إلى فوق نحو السماء إليك يالله أباه وسيد كل أحد",
                cop_cop: "Ⲁϥϫⲟⲩϣⲧ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ ϩⲁⲣⲟⲕ Ⲫⲏⲉⲧⲉϥⲓⲱⲧ Ⲫⲛⲟⲩϯ ⲟⲩⲟϩ Ⲫⲛⲏⲃ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.",
                cop_de: "Af-jousht e-epshoi e-etfe harok fi-etef-yot Ef-nouti owoh Ef-nib ente ouon niven.",
                ar_de: "Wa nazara ela fawq na7wa el sama elayka ya Allah abah wa sayed kol a7ad."
            },

            {
                id: 28,
                speaker: "Priester",
                cop_ar: "إيه طاف شيب أهموت",
                de: "Er dankte",
                ar: "وشكر.",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩ̀ⲙⲟⲧ",
                cop_de: "Etaf-shep-hmot.",
                ar_de: "Wa shakar."
            },

            {
                id: 29,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },

            {
                id: 30,
                speaker: "Priester",
                cop_ar: "أف إسمو إيه روف.",
                de: "Er segnete es",
                ar: "وباركه.",
                cop_cop: "Ⲁϥⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ.",
                cop_de: "Af-esmou ero-f.",
                ar_de: "Wa barakahou."
            },


            {
                id: 31,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            // ID 32: Und heiligte es (Priester)
            {
                id: 32,
                speaker: "Priester",
                cop_ar: "أف إير آجيا زين إمموف.",
                de: "und heiligte es",
                ar: "وقدسه.",
                cop_cop: "Ⲁϥⲉⲣⲁⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ.",
                cop_de: "Af-er-agiyazin emmof.",
                ar_de: "Wa qaddasahou."
            },

            // ID 33: Amen (Volk)
            {
                id: 33,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 35,
                speaker: "Volk",
                cop_ar: "بستيف أومين كيه أومولوغومين كيه ذو كصازومين.",
                de: "Wir glauben, wir bekennen und verherrlichen",
                ar: "نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ.",
                cop_de: "Pistev-omen ke omologoumen ke doxazomen.",
                ar_de: "No2men wa na3taref wa nomaged."
            },
            // ID 36: Einsetzungsworte des Leibes (Priester)
            {
                id: 36,
                speaker: "Priester",


                cop_ar: "أف فشف أفتيف إتنى إيتى نوف إن آجيوس إم ماثيتيس أووه إن أبو سطولوس إثؤواف إفجو إمموس.\nجي تشي أوؤم ايفول انخيتف تيرو فاي غار بي باسوما ايتونا فشف إيجين ثينو نيم هان كي ميش إنسي تيف إي إبكو ايفول.\nإنتي ني نوفى فاي أريتف ايبا إير افميفي.",

                de: "Er teilte es und gab es seinen heiligen Jüngern und reinen Aposteln und sagte:\nNehmt, esset alle davon, Denn dies ist mein Leib, der für euch und für viele gebrochen\nwird und hingegeben zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis.",

                ar: "وقسمه وأعطاه لخواصه التلاميذ القديسين ورسله الأطهار قائلاً:\nخذوا كلوا منه كلكم لأن هذا هو جسدي الذي يقسم عنكم وعن كثيرين\nيعطى لمغفرة الخطايا هذا اصنعوه لذكري.",

                cop_cop: "Ⲁϥⲫⲁϣϥ ⲁϥⲧⲏⲓϥ ⲛ̀ⲛⲏⲉⲧⲉⲛⲟⲩϥ ⲛ̀ⲁⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.\nϬⲓ ⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ: ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲱⲙⲁ: ⲉⲧⲟⲩⲛⲁⲫⲁϣϥ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ ⲛⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ: ⲉⲩⲥⲉⲧⲏⲓϥ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ.\nⲚ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫ̀ⲙⲉⲩⲓ.",

                cop_de: "Af-fash-f af-tif en-ni-ete-nouf en-agios em-mathitis owoh en-apostolos ethowab ev-jo emmos.\nChi ou-om evol enkhetf tirou: fai gar pe pa-soma: etouna-fash-f ejen thynou nem han-ke-mish: ev-se-tif e-ep-ko evol.\nEnte ni-novi: fai ari-tf e-pa-er-pmevi.",

                ar_de: "Wa qasamahou wa a3tahou le-khawasahou el talamiza el qadisin wa rosolahou el athar qa2elan:\nKhodou kolou menhou kollokom le-anna haza howa gasady allazy yoqsam 3ankom wa 3an kathirin\nyo3ta le-maghferat el khataya haza esna3ouhou le-zekry."
            },
            {
                id: 37,
                speaker: "Volk",

                cop_ar: "فاى بيه خين أوميثمى: آمين.",

                de: "Dies ist in Wahrheit. Amen.",

                ar: "هذا هو بالحقيقة: آمين.",

                cop_cop: "Ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: Ⲁ̀ⲙⲏⲛ.",

                cop_de: "Fai pe khen ou methmi: Amyn.",

                ar_de: "Haza howa bel 7aqiqa: Amin."
            },

            {
                id: 38,
                speaker: "Priester",
                cop_ar: "باي ريتى أون بى كى أفوت مينينسا بى ذيبنون أفتؤطف ايفول خين أو إرب نيم أو موؤو",
                de: "Ebenso nahm er nach dem Mahl den Kelch, mischte Wein und Wasser.",
                ar: "وهكذا أيضاً الكأس بعد العشاء مزجها من خمر وماء",
                cop_cop: "Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲡⲓⲕⲉⲁ̀ⲫⲱⲧ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲇⲓⲡⲛⲟⲛ: ⲁϥⲧⲟⲩⲱⲧϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲏⲣⲡ ⲛⲉⲙ ⲟⲩⲙⲱⲟⲩ.",
                cop_de: "Pai-riti on pi-ke-afot menensa pi-dipnon: af-tou-otf evol khen ou-erp nem ou-mo-ou.",
                ar_de: "Wa hakaza aydan el ka2s ba3da el 3asha2 mazagaha men khamr wa ma2."
            },
            {
                id: 39,
                speaker: "Priester",
                cop_ar: "إيه طاف شيب أهموت.",
                de: "Er dankte",
                ar: "وشكر.",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩ̀ⲙⲟⲧ.",
                cop_de: "Etaf-shep-hmot.",
                ar_de: "Wa shakar."
            },

            // ID 40: Amen (Volk)
            {
                id: 40,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            // ID 41: Er segnete ihn (Priester)
            {
                id: 41,
                speaker: "Priester",
                cop_ar: "أف إسمو إيه روف.",
                de: "Er segnete ihn",
                ar: "وباركها.",
                cop_cop: "Ⲁϥⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ.",
                cop_de: "Af-esmou ero-f.",
                ar_de: "Wa barakaha."
            },

            // ID 42: Amen (Volk)
            {
                id: 42,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            // ID 43: Und heiligte ihn (Priester)
            {
                id: 43,
                speaker: "Priester",
                cop_ar: "أف إير آجيا زين إمموف.",
                de: "und heiligte ihn",
                ar: "وقدسها.",
                cop_cop: "Ⲁϥⲉⲣⲁⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ.",
                cop_de: "Af-er-agiyazin emmof.",
                ar_de: "Wa qaddasaha."
            },

            // ID 44: Amen (Volk)
            {
                id: 44,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            // ID 45: Wiederum glauben, bekennen und verherrlichen wir (Volk)
            {
                id: 45,
                speaker: "Volk",
                cop_ar: "كيه بالين بستيف أومين كيه أومولوغومين كيه ذوكصازومين.",
                de: "Wiederum glauben, bekennen und verherrlichen wir",
                ar: "وأيضاً نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ.",
                cop_de: "Ke palin pistev-omen ke omologoumen ke doxazomen.",
                ar_de: "Wa aydan no2men wa na3taref wa nomaged."
            },
            // ID 46: Einsetzungsworte des Kelches (Priester)
            {
                id: 46,
                speaker: "Priester",


                cop_ar: "أف جيمي تيبى أف تيف أون إني إيتينوف إن آجيوس إم ماثيتيس أووه إن ابسطولوس إثؤواف إفجو إمموس.\nجي تشي سو ايفول انخيتف تيرو فاي غار بي با ايسنوف إنتى تى ذياثيكي إمفيري إيطو نافونف ايفول إيجين ثينو.\nنيم هان كي ميش انسيتيف إي إبكو ايفول إنتى ني نوفى فاي أريتف ايبا إير افميفي.",

                de: "Er kostete davon und gab ihn seinen heiligen Jüngern und reinen Aposteln mit den Worten:\nNehmet, trinket alle davon. Denn dies ist mein Blut des neuen Bundes,\ndas für euch und für viele vergossen wird und hingegeben zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis.",

                ar: "وذاق وأعطاها أيضاً لتلاميذه القديسين ورسله الأطهار قائلاً:\nخذوا اشربوا منها كلكم لأن هذا هو دمي الذي للعهد الجديد\nالذي يسفك عنكم وعن كثيرين يعطى لمغفرة الخطايا هذا اصنعوه لذكري.",

                cop_cop: "Ⲁϥϫⲉⲙϯⲡⲓ ⲁϥⲧⲏⲓϥ ⲟⲛ ⲛ̀ⲛⲏⲉⲧⲉⲛⲟⲩϥ ⲛ̀ⲁⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.\nϪⲉ ϭⲓ ⲥⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ: ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲛⲟϥ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ: ⲉⲧⲟⲩⲛⲁⲫⲟⲛϥ ⲉ̀ⲃⲟⲗ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ.\nⲚⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ: ⲉⲩⲥⲉⲧⲏⲓϥ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫ̀ⲙⲉⲩⲓ.",

                cop_de: "Af-jem-tipi af-tif on en-ni-ete-nouf en-agios em-mathitis owoh en-apostolos ethowab ev-jo emmos.\nJe chi so evol enkhetf tirou: fai gar pe pa-snof ente ti-diathiki em-veri: etouna-fonf evol ejen thynou.\nNem han-ke-mish: ev-se-tif e-ep-ko evol ente ni-novi: fai ari-tf e-pa-er-pmevi.",

                ar_de: "Wa zaqa wa a3taha aydan le-talamizahou el qadisin wa rosolahou el athar qa2elan:\nKhodou eshrabou menha kollokom le-anna haza howa damy allazy lel 3ahd el gadid\nallazy yosfak 3ankom wa 3an kathirin yo3ta le-maghferat el khataya haza esna3ouhou le-zekry."
            },
            // ID 47: Bestätigung nach den Einsetzungsworten des Kelches (Volk)
            {
                id: 47,
                speaker: "Volk",
                cop_ar: "فاى أون بى خين أو ميثمى آمين.",
                de: "Dies ist auch in Wahrheit. Amen.",
                ar: "وهذا هو أيضاً بالحقيقة آمين.",
                cop_cop: "Ⲫⲁⲓ ⲟⲛ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Fai on pe khen ou methmi Amyn.",
                ar_de: "Wa haza howa aydan bel 7aqiqa Amin."
            },
            // ID 48: Gedächtnis und Verkündigung (Priester)
            {
                id: 48,
                speaker: "Priester",



                cop_ar: "صوبين غار إريتيتناؤؤم ايفول خين باى اويك فاى: أووه إنتيتناسو ايفول خين باى أفوت فاى: اريتيتناهي اويش امبا مو: اريتيتناؤؤنح امبا طونس اثؤواف ايريتيتنا اير بوميفي شا انتي أي.",

                de: "Sooft ihr von diesem Brot esst und aus diesem Kelch trinkt, verkündet ihr meinen Tod und bekennt meine heilige Auferstehung und gedenkt meiner, bis ich komme.",

                ar: "لأن كل مرة تأكلون من هذا الخبز، وتشربون من هذه الكأس، تبشرون بموتي، وتعترفون بقيامتي المقدسة، وتذكروني إلى أن أجيء.",

                cop_cop: "Ⲥⲟⲡ ⲛⲓⲃⲉⲛ ⲅⲁⲣ ⲉⲧⲉⲧⲉⲛⲛⲁⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲱⲓⲕ ⲫⲁⲓ: ⲟⲩⲟϩ ⲉⲧⲉⲧⲉⲛⲛⲁⲥⲱ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲁ̀ⲫⲱⲧ ⲫⲁⲓ: ⲉⲧⲉⲧⲉⲛϩⲓⲱⲓϣ ⲙ̀ⲡⲁⲙⲟⲩ: ⲉⲧⲉⲧⲉⲛⲟⲩⲱⲛϩ ⲙ̀ⲧⲁⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉⲑⲟⲩⲁⲃ: ⲉⲧⲉⲧⲉⲛⲉⲣⲡⲁⲙⲉⲩⲓ ϣⲁ ⲉⲧⲉⲓ.",

                cop_de: "Sop niven gar etetenn-a-ouom evol khen pai-oik fai: owoh etetenn-a-so evol khen pai-afot fai: eteten-hioish em-pa-mou: eteten-ouonh em-ta-anastasis ethowab: eteten-er-pa-mevi sha-ete-i.",

                ar_de: "Le-anna kolla marra ta2kolouna men haza el khobz, wa tashrabouna men hazihi el ka2s, tobashirouna be-mawty, wa ta3tarifouna be-qiyamaty el moqaddasa, wa tazkorouny ela an agi2."
            },
            // ID 49: Antwort des Volkes (Amen, Tod, Auferstehung und Lobpreis)
            {
                id: 49,
                speaker: "Volk",


                cop_ar: "آمين آمين آمين طون ثاناتون صو كيريه كاطانجيلومين.\nكيه تين أجيان صو أناسطاسين: كيه تين أنا ليبسين صو إنتيس أورانيس سيه أومولوغومين.\nسيه إيه نومين سيه إفلوغومين سيه إفخاريستو مين كيريه: كيه ذيه أو ميه طا سو أوثيه أوس إيمون.",

                de: "Amen, Amen, Amen, deinen Tod, o Herr, verkünden wir,\ndeine heilige Auferstehung und deine Himmelfahrt bekennen wir.\nWir loben dich, wir preisen dich, wir danken dir, o Herr, und wir bitten dich, unser Gott.",

                ar: "آمين آمين آمين بموتك يارب نبشر.\nوبقيامتك المقدسة وصعودك إلى السموات نعترف.\nنسبحك نباركك نشكرك يارب ونتضرع إليك يا إلهنا.",

                cop_cop: "Ⲁⲙⲏⲛ ⲁⲙⲏⲛ ⲁⲙⲏⲛ: ⲧⲟⲛ ⲑⲁⲛⲁⲧⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ ⲕⲁⲧⲁⲅⲅⲉⲗⲗⲟⲙⲉⲛ.\nⲔⲉ ⲧⲏⲛ ⲁⲅⲓⲁⲛ ⲥⲟⲩ ⲁⲛⲁⲥⲧⲁⲥⲓⲛ: ⲕⲉ ⲧⲏⲛ ⲁⲛⲁⲗⲏⲙⲯⲓⲛ ⲥⲟⲩ ⲉⲛⲧⲟⲓⲥ ⲟⲩⲣⲁⲛⲟⲓⲥ ⲥⲉ ⲟⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ.\nⲤⲉ ⲩⲙⲛⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲗⲟⲅⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲭⲁⲣⲓⲥⲧⲟⲩⲙⲉⲛ Ⲕⲩⲣⲓⲉ: ⲕⲉ ⲇⲉⲟⲙⲉⲑⲁ ⲥⲟⲩ ⲟ Ⲑⲉⲟⲥ ⲏⲙⲱⲛ.",

                cop_de: "Amyn Amyn Amyn: ton thanaton sou Kyrie kataggellomen.\nKe tyn agian sou anastasin: ke tyn analypsin sou entis ouranis se omologoumen.\nSe ymnoumen: se evlogoumen: se evkharistoumen Kyrie: ke de-ometha sou o Theos imon.",

                ar_de: "Amin Amin Amin: be-mawteka ya Rab nobashir.\nWa be-qiyamateka el moqaddasa wa so3odeka ela el samawat na3taref.\nNosabe7aka nobarikaka nashkoraka ya Rab: wa natadarra3o elayka ya elahona."
            },
            // ID 50: Anamnese und Opferdarbringung (Priester)
            {
                id: 50,
                speaker: "Priester",



                cop_ar: "إنتيرى أون هون إم إفميفئي إن نيف خيسى إثؤواف نيم بيف جين طنف إيفول خين ني إثموؤت.\nنيم بيف جين شي إي إبشوي إي نيفيؤوي نيم بيف جين هيمسى ساتيك أوي نام إفيوت.\nنيم تيف ماه إسنوتي إمباروسيا إثنيو إيفول خين ني فيؤوي إتؤي إينهوتي أووه إثميه إن أو أو.\nتين اير ابروس فيرين ناك ان نيئيتينوك اندورون ايفول خين نيئيتينوك كاطا هوف نيفين نيم اتفى هوف نيفين نيم خين هوف نيفين.",

                de: "Indem wir seines heiligen Leiden gedenken, seiner Auferstehung von den Toten,\nseiner Auffahrt in den Himmel, seines Sitzens zu deiner Rechten, Vater,\nseines zweiten Kommens vom Himmel, furchterregend und voll Herrlichkeit,\nbringen wir Dir diese deine Opfergabe dar, aus dem, was dein ist, entsprechend allem, für alles und in allem.",

                ar: "ففيما نحن أيضاً نصنع ذكر آلامه المقدسة وقيامته من الأموات\nوصعوده إلى السموات وجلوسه عن يمينك أيها الآب\nوظهوره الثاني الآتي من السموات المخوف المملوء مجداً\nنقرب لك قرابينك من الذي لك على كل حال ومن أجل كل حال وفي كل حال.",

                cop_cop: "Ⲉⲛⲧⲉⲣⲉ ⲟⲩⲛ ϩⲱⲛ ⲉⲙⲡⲉⲙⲉⲩⲓ ⲉⲛ ⲛⲉϥⲭⲓⲥⲓ ⲉⲑⲟⲩⲁⲃ ⲛⲉⲙ ⲡⲉϥϫⲓⲛⲧⲱⲛϥ ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ.\nⲚⲉⲙ ⲡⲉϥϫⲓⲛϣⲉ ⲉⲡϣⲱⲓ ⲉⲛⲓⲫⲏⲟⲩⲓ ⲛⲉⲙ ⲡⲉϥϫⲓⲛϩⲉⲙⲥⲓ ⲥⲁⲧⲉⲕⲟⲩⲓⲛⲁⲙ Ⲫⲓⲱⲧ.\nⲚⲉⲙ ⲧⲉϥⲙⲁϩ ⲥⲛⲟⲩϯ ⲙⲡⲁⲣⲟⲩⲥⲓⲁ ⲉⲑⲛⲏⲟⲩ ⲉⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ ⲉⲧⲟⲓ ⲉⲛϩⲟϯ ⲟⲩⲟϩ ⲉⲑⲙⲉϩ ⲛⲟⲩⲱⲟⲩ.\nⲦⲉⲛⲉⲣⲡⲣⲟⲥⲫⲉⲣⲓⲛ ⲛⲁⲕ ⲉⲛ ⲛⲏⲉⲧⲉⲛⲟⲩⲕ ⲛ̀ⲇⲱⲣⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲧⲉⲛⲟⲩⲕ: ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲉⲑⲃⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ.",

                cop_de: "Entere oun hon em-pemevi en nef-khisi ethowab nem pef-jin-tonf evol khen niethmoout.\nNem pef-jin-she epshoi enifioui nem pef-jin-hemsi satek-ouinam Ef-yot.\nNem tef-mah esnouti emparousia ethniou evol khen nifioui et-oi en-hoti owoh et-meh en ou-o-ou.\nTen-er-prosferin nak en ni-etenouk en-doron evol khen ni-etenouk kata hov niven nem ethve hov niven nem khen hov niven.",

                ar_de: "Fafima na7no aydan nasna3o zikra alamehi el moqaddasa wa qiyamatehi men el amwat.\nWa so3odehi ela el samawat wa golosehi 3an yamineka ayuha el Ab.\nWa zohorehi el thani el ati men el samawat el mokhouf el mamlou2 magdan.\nNoqarebo laka qarabineka men allazy laka 3ala kol 7al wa men agl kol 7al wa fi kol 7al."
            },
            // ID 51: Aufruf zur Ehrfurcht (Diakon)
            {
                id: 51,
                speaker: "Diakon",
                cop_ar: "أوؤشت إم إفنوتى خين أو هوتى نيم أو إستر تير.",
                de: "Verbeugt euch vor Gott in Ehrfurcht und Zittern.",
                ar: "اسجدوا لله بخوف ورعدة.",
                cop_cop: "Ⲟⲩⲱϣⲧ ⲙ̀Ⲫⲛⲟⲩϯ ϧⲉⲛ ⲟⲩϩⲟϯ ⲛⲉⲙ ⲟⲩⲥⲧⲉⲣⲧⲉⲣ.",
                cop_de: "O-ousht em-Ef-nouti khen ou-hoti nem ou-ester-ter.",
                ar_de: "Osgodou lel-lah be-khawf wa ra3da."
            },
            // ID 52: Gebet um Erbarmen (Volk)
            {
                id: 52,
                speaker: "Volk",
                cop_ar: "تـين تيـهـو إيروك تـين طـوبه إمـموك تـين أوؤشـت إمـموك.",
                de: "Wir bitten Dich, wir flehen zu Dir, wir beten Dich an.",
                ar: "نسألك، نطلب إليك، نسجد لك.",
                cop_cop: "Ⲧⲉⲛϯϩⲟ ⲉ̀ⲣⲟⲕ ⲧⲉⲛⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ.",
                cop_de: "Ten-ti-ho erok ten-tobh emmok ten-ousht emmok.",
                ar_de: "Nas-aloka, natlobo elayka, nasgodo laka."
            },
            // ID 53: Aufruf zur Aufmerksamkeit (Diakon)
            {
                id: 53,
                speaker: "Diakon",
                cop_ar: "إبروس خومين: آمين.",
                de: "Wir hören. Amen.",
                ar: "ننصت آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Pros-khomen: Amyn.",
                ar_de: "Nanset Amin."
            },
            // ID 54: Wandlung des Brotes (Priester)
            {
                id: 54,
                speaker: "Priester",
                cop_ar: "أووه باى أويك مين إنتيف أيف إنسوما إثؤواف إنتاف.",
                de: "Und dieses Brot verwandelt er in seinen heiligen Leib.",
                ar: "وهذا الخبز يجعله جسداً مقدساً له.",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲱⲓⲕ ⲙⲉⲛ ⲉⲛⲧⲉϥⲁⲓϥ ⲉⲛⲥⲱⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲉⲛⲧⲁϥ.",
                cop_de: "Owoh pai-oik men entef-aif ensoma ethowab entaf.",
                ar_de: "Wa haza el khobz yag3alahou gasadan moqaddasan lahou."
            },
            // ID 55: Ich glaube, Amen (Volk)
            {
                id: 55,
                speaker: "Volk",
                cop_ar: "تى ناهتى آمين.",
                de: "Ich glaube, Amen",
                ar: "نؤمن.",
                cop_cop: "Ϯⲛⲁϩϯ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ti-nahti Amyn.",
                ar_de: "No2men."
            },
            // ID 56: Wandlung des Kelches (Priester)
            {
                id: 56,
                speaker: "Priester",
                cop_ar: "أووه باى أفوت ذى أون انئسنوف إتتايوت إنتى تى ذياثيكى إمفيرى إنتياف.",
                de: "Und auch diesen Kelch in sein kostbares Blut seines neuen Bundes",
                ar: "وهذه الكأس أيضاً دماً كريماً للعهد الجديد الذي له",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲁ̀ⲫⲱⲧ ⲇⲉ ⲟⲛ ⲉⲛⲥⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ ⲉⲛⲧⲁϥ.",
                cop_de: "Owoh pai-afot de on ensnof ettayout ente ti-diathiki em-veri entaf.",
                ar_de: "Wa hazihi el ka2s aydan daman kariman lel 3ahd el gadid allazy lahou."
            },
            // ID 57: Wiederum glaube ich. Amen (Volk)
            {
                id: 57,
                speaker: "Volk",
                cop_ar: "كيه بالين تى ناهتى: آمين.",
                de: "Wiederum glaube ich. Amen",
                ar: "وأيضاً نؤمن.",
                cop_cop: "Ⲕⲉ ⲡⲁⲗⲓⲛ ϯⲛⲁϩϯ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ke palin ti-nahti: Amyn.",
                ar_de: "Wa aydan no2men."
            },
            // ID 58: Vergebung und ewiges Leben (Priester)
            {
                id: 58,
                speaker: "Priester",
                cop_ar: "إفتى إمموف إإبكو إيفول إنتى ني نوفى نيم أو أونخ إن إينيه إن نيئيثنا تـشي إيفول إنـخيتف.",
                de: "hingegeben zur Vergebung der Sünden und zum ewigem Leben denen, die an ihm Anteil haben.",
                ar: "يعطى لغفران الخطايا وحياة أبدية لمن يتناول منه.",
                cop_cop: "Ⲉϥⲧⲏⲓ ⲙ̀ⲙⲟϥ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲛⲉⲙ ⲟⲩⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ ⲛ̀ⲛⲏⲉⲑⲛⲁϭⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ.",
                cop_de: "Ef-ti emmof e-ep-ko evol ente ni-novi: nem ou-onkh en-eneh en-ni-ethna-chi evol enkhetf.",
                ar_de: "Yo3ta le-maghferat el khataya wa 7ayah abadiya leman yatanawalo menhou."
            },

            {
                id: 59,
                speaker: "Volk",
                cop_ar: "(كيريه ليسون.) 3",
                de: "Herr erbarme Dich. (3)",
                ar: "(يا رب ارحم.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.) ⲅ",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3",

                navigationButtons: [
                    {
                        label_ar: "الاواشي (ك)",
                        label_de: "Die Gebete für.. (k)",
                        action: "jumpToId",
                        targetId: 17.02,       // Stelle sicher, dass diese ID in der Kyrillos-Datei existiert!
                        targetLiturgy: "kerollosy" // KORRIGIERT: Muss exakt so heißen wie in App.js
                    },
                    {
                        label_ar: "الاواشي السبعه الصغار",
                        label_de: "Die kleinen 7 Gebete",
                        action: "navigatePage",
                        targetPage: "seven_small_litanies"
                    }
                ]
            },
            // ID 60: Gebet für den Frieden der Kirche und Einheit (Priester)
            {
                id: 60,
                sectionTitle: {
                    de: "Die Gebte",
                    ar: "الاواشي"
                },
                speaker: "Priester",
                ar: "اجعلنا مستحقين كلنا يا سيدنا ان نتناول من قدساتك طهارة لأنفسنا اجسادنا وأرواحنا.\nلكي نكون جسداً واحداً وروحاً واحداً ونجد نصيباً وميراثاً مع جمع القديسين الذين ارضوك منذ البدء.\nاذكر يارب سلام كنيستك الواحدة الوحيدة المقدسة الجامعة الرسولية.",
                de: "Mache uns alle würdig, unser Herr, dass wir an dem Heiligen teilhaben, zur Reinigung unserer Seelen, unserer Leiber und unserer Geister,\ndamit wir ein einziger Leib und ein einziger Geist werden, und Anteil und Erbe mit allen Heiligen erlangen, die dir seit Anbeginn wohlgefallen haben.\nGedenke, o Herr, des Friedens Deiner einen, einzigen, heiligen, universalen und apostolischen Kirche.",
                cop_ar: "أريتين إن إيم إبشاتيرين بين نيب إتشي إيفول خين نيثؤواب إنتاك إي أوطوفو إنتي نين إبسيشي نيم نين سوما نيم نين إبنيفما.\nأهينا إنتين شوبي إن أوسوما إن أوأوت نيم أو إبنيفما إن أوأوت إنتين جيمي إن أوميروس نيم أو إكليروس نيم نيثؤواب تيرو إيتافرانك يسجين إبئينيه.\nآري إفميفئي إبشويس إنتي هيريني إنتي تيك أوي إم مافتس إثؤواب إن كاثوليكي إن أبوستوليكي إن إككليسيا.",
                cop_cop: "Ⲁ̀ⲣⲓⲧⲉⲛ ⲛ̀ⲉⲙⲡ̀ϣⲁ ⲧⲏⲣⲉⲛ Ⲡⲉⲛⲛⲏⲃ ⲉ̀ϭⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲉ̀ⲟⲩⲧⲟⲩⲃⲟ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ ⲛⲉⲙ ⲛⲉⲛⲡ̀ⲛⲉⲩⲙⲁ.\nϨⲓⲛⲁ ⲛ̀ⲧⲉⲛϣⲱⲡⲓ ⲛ̀ⲟⲩⲥⲱⲙⲁ ⲛ̀ⲟⲩⲱⲧ ⲛⲉⲙ ⲟⲩⲡ̀ⲛⲉⲩⲙⲁ ⲛ̀ⲟⲩⲱⲧ ⲛ̀ⲧⲉⲛϫⲓⲙⲓ ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ ⲛⲉⲙ ⲟⲩⲕ̀ⲗⲏⲣⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲩⲣⲁⲛⲁⲕ ⲓⲥϫⲉⲛ ⲡⲓⲉ̀ⲛⲉϩ.\nⲀⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ⲧⲉⲕⲟⲩⲓ̀ ⲙ̀ⲙⲁⲩⲁⲧⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀.",
                cop_de: "Ariten en-em-psha tiren Pen-nib e-chi evol khen ni-ethowab entak e-ou-touvo ente nen-psy-chi nem nen-soma nem nen-pnevma.\nHina enten-shopi en-ou-soma en-ouot nem ou-pnevma en-ouot enten-jimi en-ou-meros nem ou-kliros nem ni-ethowab tirou et-av-ranak is-jen pi-eneh.\nAri-phmevi Epchois en-ti-hirini ente tek-ou-i emmavats ethowab en-katholiki en-apostoliki en-ekklesia.",
                ar_de: "Eg3alna mosta7iqqin kollana ya sayedana an natanawal men qodasatak tahara le-anfosena agsadena wa arwa7ena.\nLekay nakoun gasadan wa7edan wa rou7an wa7edan wa naged nasiban wa mirathan ma3a gam3 el-qadisin allazina ardouk monzo el-bad2.\nOzkor ya Rabb salam kanisatek el-wahida el-wahida el-moqadasa el-game3a el-rasoulya."
            },
            {
                id: 61,
                speaker: "Diakon",
                ar: "صلوا من أجل سلام الواحدة الوحيدة المقدسة الجامعة الرسولية كنيسة الله الأرثوذكسية.",
                de: "Betet für den Frieden der einen, heiligen, universalen, apostolischen und orthodoxen Kirche Gottes.",
                cop_ar: "إبروس إفكصاستيه إيبر تيس إيري نيس تيس أجياس مونيس كاثوليكيس كيه آبسطوليكيس أرثوذكسو طوثيه أو إكليسياس.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲓ̀ⲣⲏⲛⲏⲥ ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲙⲟⲛⲏⲥ ⲕⲁⲑⲟⲗⲓⲕⲏⲥ ⲕⲉ ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏⲥ ⲟ̀ⲣⲑⲟⲇⲟⲝⲟⲩ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲉ̀ⲕⲕⲗⲏⲥⲓⲁⲥ.",
                cop_de: "Pros evxasthe yper tis irinis tis agias monis katholikis ke apostolikis orthodoxou tou theou ekklesias.",
                ar_de: "Sallou men agl salam el-wahida el-wahida el-moqadasa el-game3a el-rasoulya kanisat Allah el-orthodoxia."
            },
            {
                id: 62,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            {
                id: 63,
                speaker: "Priester",

                ar: "هذا التي إقتنيتها لك بالدم الكريم الذي لمسيحك. إحفظها بسلام وجميع الأساقفة الأرثوذكسيين الذين فيها\nوأولاً اذكر يا رب ابانا الطوباوي رئيس الأساقفة بطريركنا البابا أنبا تواضروس. و أخيه في الخدمة الرسوليه مار اغناطيوس أفرام الثاني\nوشركاءه في الخدمة الرسولية ابونا المطران المكرم الانبا دميان. و ابونا الاسقف المكرم الانبا ديسقورس",

                de: "Diese, die du Dir durch das kostbare Blut deines Christus erworben hast . Bewahre Sie in Frieden und alle orthodoxen Bischöfe in ihr.\nBetet für unser Priesteroberhaupt, den Papst Anba Tawadros, Papst, Patriarch und für seinen Bruder im apostolischen Dienst Mor Ignatius Aphrem II\nund seine Teilhaber am apostolischen Dienst, unseren ehrwürdigen Vater, Erzbischof Anba Damian, und unseren ehrwürdigen Vater, Bischof Anba Dioskorus",

                cop_ar: "ثاي إيطاك إجفوس ناك إيقول هيتين بي إسنوف إتطايوت إنتي بيك إخرستوس. آريه إيروس خين او هيريني نيم ني إبيسكوبوس تيرو إن اورثوذكسوس إيتي إنخيتس\nإنشورب مين آري إفميفئي إبشويس إمبين مكاريس إنيوت إتطايوت إن أرشي إبيسكوبوس بين بطريارشيس بابا آفا تواضروس نيم نيف سنيو بي مار اغناطيوس افرام بي ما اسناف\nنيم نيف كيه إشفير إن ليطورغوس بنيوت إن ميتروبوليتيس افا ديمان نيم بنيوت إبيسكوبوس افا ديسقوروس",

                cop_cop: "Ⲑⲁⲓ ⲉ̀ⲧⲁⲕϫ̀ⲫⲟⲥ ⲛⲁⲕ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡⲓⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲧⲉ ⲡⲉⲕⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲥ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲛⲉⲙ ⲛⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲧⲏⲣⲟⲩ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧⲉⲛϧⲏⲧⲥ.\nⲚ̀ϣⲟⲣⲡ ⲙⲉⲛ ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲙ̀ⲡⲉⲛⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲓⲱⲧ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲡⲉⲛⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲑⲉⲟ́ⲇⲱⲣⲟⲥ ⲛⲉⲙ ⲛⲉϥⲥⲛⲏⲟⲩ ⲡⲓ ⲙⲁⲣ Ⲓⲅⲛⲁⲧⲓⲟⲥ Ⲁⲫⲣⲉⲙ ⲡⲓ ⲙⲁϩ ⲥ̀ⲛⲁⲩ.\nⲚⲉⲙ ⲛⲉϥⲕⲉϣ̀ⲫⲏⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ Ⲁⲃⲃⲁ Ⲇⲁⲙⲓⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ Ⲁⲃⲃⲁ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ.",

                cop_de: "Thai et-ak-egfos nak evol hiten pi-esnof et-taiot ente pek-ekhristos. Areh eros khen ou-hirini nem ni-episkopos tiro en-orthodoxos eti-enkhits.\nEn-shorp men ari-phmevi P-chois em-pen-makarios en-iot et-taiot en-archi-episkopos pen-patriarchis Papa Ava Tawadros nem nef-sniou pi Mar Ignatius Aphrem pi mah-esnav.\nNem nef-ke-eshpher en-leitourgos pen-iot en-metropolitis Ava Damian nem pen-iot episkopos Ava Dioscorus.",

                ar_de: "Hazihi allati eqtanaytaha laka bel-dam el-karim allazi li-masi7ek. E7fazha bi-salam wa gami3 el-asaqefa el-orthodoxiyin allazina fiha.\nWa awalan ozkor ya Rabb abana el-tobawi ra2is el-asaqefa batriyarkina el-Baba Anba Tawadros wa akhih fil khedma el-rasoulya Mar Ignatius Aphrem el-thani.\nWa shoraka2oh fil khedma el-rasoulya abouna el-motran el-mokaram el-Anba Damian wa abouna el-osqof el-mokaram el-Anba Dioscorus."
            },
            {
                id: 64,
                speaker: "Diakon",

                // الترتيب: صلوا -> ورئيس -> وأخيه -> وشركاؤه -> وسائر
                ar: "صلوا من أجل رئيس كهنتنا البابا أنبا (تواضروس الثاني) بابا وبطريرك.\nورئيس أساقفة المدينة العظمي الأسكندريه.\nو أخيه في الخدمة الرسوليه ابينا البطريرك الأنطاكي مار اغناطيوس أفرام الثاني.\nوشركاءه في الخدمة الرسولية ابونا المطران المكرم الانبا دميان. و ابونا الاسقف المكرم الانبا ديسقورس.\nوسائر أساقفتنا الأرثوذكسيين.",

                de: "Betet für unser Priesteroberhaupt, den Papst Anba Tawadros, Papst, Patriarch.\nund Bischofoberhaupt der großen Stadt Alexandria.\nund für seinen Bruder im apostolischen Dienst den Patriarch Von antiochien Mor Ignatius Aphrem II.\nund seinen Teilhaber am apostolischen Dienst, unseren ehrwürdigen Vater, Erzbischof Anba Damian, und unseren ehrwürdigen Vater, Bischof Anba Dioskorus.\nund all unsere orthodoxen Bischöfe.",

                cop_ar: "إبروس إفكصاستيه إيبرتو أرشي إيه ريه أوس إيمون بابا آفا (تواضروس) بابا كيه باطري أرخو.\nكيه أرشي إيه بيسكوبو تيس ميغا لوبو ليؤس أليكسان إدرياس.\nنيم نيف سنيو بي كيه إشفير إن ليطور غوس نيف بطريارشيس انطيكياس مار اغناطيوس افرام بي ما سناف.\nنيم نيف كيه إشفير إن ليطورغوس بنيوت إن ميتروبوليتيس افا دميان نيم بنيوت إبيسكوبوس افا ديسقوروس.\nكيه طون أورثوذكصون إيمون إيه بيسكوبون.",

                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲟⲩ ⲁ̀ⲣⲭⲓⲉ̀ⲣⲉⲱⲥ ⲏ̀ⲙⲱⲛ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲑⲉⲟ́ⲇⲱⲣⲟⲥ Ⲡⲁⲡⲁ ⲕⲉ Ⲡⲁⲧⲣⲓⲁⲣⲭⲟⲩ.\nⲔⲉ ⲁ̀ⲣⲭⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲩ ⲧⲏⲥ ⲙⲉⲅⲁⲗⲟⲡⲟⲗⲉⲱⲥ Ⲁ̀ⲗⲉⲝⲁⲛⲇⲣⲓⲁⲥ.\nⲚⲉⲙ ⲛⲉϥⲥⲛⲏⲟⲩ ⲡⲓ ⲕⲉϣ̀ⲫⲏⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲛⲉϥ ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ Ⲁⲛⲧⲓⲟⲭⲓⲁⲥ Ⲙⲁⲣ Ⲓⲅⲛⲁⲧⲓⲟⲥ Ⲁⲫⲣⲉⲙ ⲡⲓ ⲙⲁϩ ⲥ̀ⲛⲁⲩ.\nⲚⲉⲙ ⲛⲉϥⲕⲉϣ̀ⲫⲏⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ Ⲁⲃⲃⲁ Ⲇⲁⲙⲓⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ Ⲁⲃⲃⲁ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ.\nⲔⲉ ⲧⲱⲛ ⲟ̀ⲣⲑⲟⲇⲟⲝⲱⲛ ⲏ̀ⲙⲱⲛ ⲉ̀ⲡⲓⲥⲕⲟⲡⲱⲛ.",

                cop_de: "Pros-evxasthe yper tou archi-ereos imon Papa Avva Tawadros Papa ke patri-archou.\nKe archi-episkopou tis mega-lo-poleos Alexandrias.\nNem nef-sniou pi ke-eshpher en-leitourgos nef patriarchis Antiochias Mar Ignatius Aphrem pi mah-esnav.\nNem nef-ke-eshpher en-leitourgos pen-iot en-metropolitis Ava Damian nem pen-iot episkopos Ava Dioscorus.\nKe ton orthodoxon imon episkopon.",

                ar_de: "Sallou men agl ra2is kahantena el-Baba Anba Tawadros el-thani baba wa batriyark.\nWa ra2is asaqefat el-madina el-ozma el-alexandria.\nWa akhih fil khedma el-rasoulya abina el-batriyark el-antaki Mar Ignatius Aphrem el-thani.\nWa shoraka2oh fil khedma el-rasoulya abouna el-motran el-mokaram el-Anba Damian wa abouna el-osqof el-mokaram el-Anba Dioscorus.\nWa sa2er asaqefatna el-orthodoxiyin."
            },
            {
                id: 65,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            {
                id: 66,
                speaker: "Priester",

                ar: "والذين يفصلون معه كلمة الحق باستقامة انعم بهم علي كنيستك المقدسة\nليرعوا قطيعك بسلام. اذكر يارب القمامصة والقسوس الارثوذكسيين والشمامسة.",

                de: "und alle, die mit ihm das Wort der Wahrheit aufrecht verkünden. Erhalte sie Deiner heiligen Kirche\num deine Herde in Frieden zu versorgen. Gedenke, o Herr, der orthodoxen Erzpriester, Priester und Diakone,",

                cop_ar: "نيم نيئتثوت إيفول نيماف إم إيساجي إنتي تي ميثمي خين أو سوؤتين. آري خاريزيستي إمموؤو إنتيك إككليسيا إثؤواب\nإيف أموني إمبيك أوهي خين هيريني. آري إفميفئي إبشويس إن ني هيغومينوس نيم ني إبريسفيتيروس إن اورثوذكسوس نيم ني دياكون.",

                cop_cop: "Ⲛⲉⲙ ⲛⲏⲉⲧϣⲱⲧ ⲉ̀ⲃⲟⲗ ⲛⲉⲙⲁϥ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ. Ⲁⲣⲓⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ⲧⲉⲕⲉⲕⲕⲗⲏⲥⲓⲁ ⲉⲑⲟⲩⲁⲃ.\nⲈⲩⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲉⲕⲟ̀ϩⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ. Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲁⲕⲱⲛ.",

                cop_de: "Nem ni-et-shot evol nemaf em-pi-saji ente ti-methmi khen ou-so-outin. Ari-kharizesthe em-mo-ou en-tek-ekklesia ethowab.\nEv-amoni em-pek-ohi khen ou-hirini. Ari-phmevi P-chois en-ni-higoumenos nem ni-presviteros en-orthodoxos nem ni-diakon.",

                ar_de: "Wallazina yofasselouna ma3ahu kalimet el-haqq be-estiqama an3em bihim 3ala kanisatak el-moqadasa.\nLe-yar3ou qati3aka be-salam. Ozkor ya Rabb el-qamamisa wal-qosoos el-orthodoxiyin wal-shamamesa."
            },
            {
                id: 67,
                speaker: "Diakon",

                // Reihenfolge: Betet für... (b7ea02) -> und die Subdiakone (b7ea5b)
                ar: "صلوا من أجل آبائنا القمامصة وآبائنا القسوس واخوتنا الشمامسة\nوالإبوذياقونين وسبع طغمات كنيسة الله.",

                de: "Betet für die Erzpriester, Priester, Diakone,\nSubdiakone und die sieben Weihstufen der Kirche Gottes.",

                cop_ar: "إبروس إفكصاستيه إي بيرطون إي غومينون كيه إبريسفيتيه رون كيه ذياكونون\nكيه إيبو ذياكونون إبطا طغما طون طو ثيه أو تيس إكليسياس.",

                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲏ̀ⲅⲟⲩⲙⲉⲛⲱⲛ ⲕⲉ ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲱⲛ ⲕⲉ ⲇⲓⲁⲕⲟⲛⲱⲛ\nⲕⲉ ⲩ̀ⲡⲟⲇⲓⲁⲕⲟⲛⲱⲛ ⲉ̀ⲡⲧⲁ ⲧⲁⲅⲙⲁⲧⲱⲛ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲧⲏⲥ ⲉ̀ⲕⲕⲗⲏⲥⲓⲁⲥ.",

                cop_de: "Pros-evxasthe yper ton hegoumenon ke pres-vi-teron ke diakonon.\nKe ipo-diakonon epta tagmaton tou theou tis ekklesias.",

                ar_de: "Sallou men agl aba2ina el-qamamisa wa aba2ina el-qosoos wa ekhwatina el-shamamesa.\nWal-eboziakonin wa sab3 toghmat kanisat Allah."
            },
            {
                id: 68,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            {
                id: 69,
                speaker: "Priester",
                ar: "وكل الخدام وكل الذين في البتولية وطهارة شعبك المؤمن، اذكر يارب ان ترحمنا كلنا معاً.",
                de: "und alle Diener, und all die, die in Jungfräulichkeit leben und der Reinheit deines ganzen gläubigen Volkes. Gedenke, o Herr, Dich unser aller zu erbarmen.",
                cop_ar: "نيم ريف شمشي نيفين نيم ني تيرواتخين تي بارثي نيا نيم أوطوفو إمبيك لاؤس تيرف إمبستوس آري إفميفتي إبشويس إنتيك ناي نان تيرو إفسوب.",
                cop_cop: "Ⲛⲉⲙ ⲣⲉϥϣⲉⲙϣⲓ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲛⲏⲉⲧϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲓⲁ ⲛⲉⲙ ⲟⲩⲧⲟⲩⲃⲟ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ ⲙ̀ⲡⲓⲥⲧⲟⲥ ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉⲕⲛⲁⲓ ⲛⲁⲛ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ.",
                cop_de: "Nem ref-shemshi niven nem ni-et-khen ti-parthenia nem ou-touvo em-pek-laos tirf em-pistos ari-phmevi P-chois entek-nai nan tirou ev-sop.",
                ar_de: "Wa kol el-khoddam wa kol allazina fil batouliya wa taharat sha3baka el-mo'men, ozkor ya Rabb an tarhamna kollana ma3an."
            },
            {
                id: 70,
                speaker: "Volk",
                ar: "ارحمنا يا الله الآب ضابط الكل.",
                de: "Erbarme Dich unser, o Gott, o Vater, o Allmächtiger.",
                cop_ar: "إيه ليسون إيماس أو ثيه أوس أو باتير أو بانطوكراطور",
                cop_cop: "Ⲉⲗⲉⲏⲥⲟⲛ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲡⲁⲧⲏⲣ ⲟ̀ Ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ",
                cop_de: "Eleyson imas o Theos o Patir o Pantokrator",
                ar_de: "Erhamna ya Allah el-Ab dabet el-koll."
            },
            {
                id: 71,
                speaker: "Priester",
                ar: "اذكر يارب خلاص هذا الموضع المقدس الذي لك وكل المواضع وكل أديرة آبائنا الأرثوذكسيين.",
                de: "Gedenke, o Herr, des Heils dieses Deines heiligen Ortes und aller Ortschaften und Klöster unserer rechtgläubigen Väter.",
                cop_ar: "اري إفميفئي إبشويس إن إتسوتيريا إمباي توبوس إثؤواب إنتاك فاي نيم توبوس نيفين نيم مونا ستيريون نيفين إنتي نين يوتي إن أورثوذكسوس.",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧ̀ⲥⲱⲧⲏⲣⲓⲁ ⲙ̀ⲡⲁⲓⲧⲟⲡⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ ⲛⲉⲙ ⲧⲟⲡⲟⲥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ.",
                cop_de: "Ari-phmevi P-chois en-et-sotiria em-pai-topos ethowab entak fai nem topos niven nem monastirion niven ente nen-yoti en-orthodoxos.",
                ar_de: "Ozkor ya Rabb khalas haza el-mawde3 el-moqadas allazi lak wa koll el-mawade3 wa koll adyret aba2ina el-orthodoxiyin."
            },
            {
                id: 72,
                speaker: "Diakon",
                ar: "صلوا من أجل خلاص العالم ومدينتنا هذه وسائر المدن والأقاليم والجزائر والأديرة.",
                de: "Betet für das Heil der Welt, dieser unserer Stadt, aller Städte, Dörfer, Inseln und Klöster.",
                cop_ar: "إبروس إفكصاستيه إي بيرتيس سوتيرياس طو كوزمو كيه تيس بوليه أوس إيمون طافتيس\nكيه باصون بوليه أون كيه طون خورون كيه ني صون كيه موناس تيريون.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲥⲱⲧⲏⲣⲓⲁⲥ ⲧⲟⲩ ⲕⲟⲥⲙⲟⲩ ⲕⲉ ⲧⲏⲥ ⲡⲟⲗⲉⲱⲥ ⲏ̀ⲙⲱⲛ ⲧⲁⲩⲧⲏⲥ\nⲕⲉ ⲡⲁⲥⲱⲛ ⲡⲟⲗⲉⲱⲛ ⲕⲉ ⲧⲱⲛ ⲭⲱⲣⲱⲛ ⲕⲉ ⲛⲏⲥⲱⲛ ⲕⲉ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲱⲛ.",
                cop_de: "Pros-evxasthe yper tis sotirias tou kosmou ke tis poleos imon tavtis\nke pason poleon ke ton choron ke nison ke monastirion.",
                ar_de: "Sallou men agl khalas el-3alam wa madinatana hazihi wa sa2er el-modon wal-aqalim wal-gaza2er wal-adyera."
            },
            {
                id: 73,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            {
                id: 74,
                speaker: "Priester",
                ar: "والساكنين فيها بإيمان الله",
                de: "und derer, die in ihnen leben im Glauben an Gott.",
                cop_ar: "نيم نيئت شوب إنخيتو خين إفناهتي إم إفنوتي.",
                cop_cop: "Ⲛⲉⲙ ⲛⲏⲉⲧϣⲟⲡ ⲛ̀ϧⲏⲧⲟⲩ ϧⲉⲛ ⲫ̀ⲛⲁϩϯ ⲙ̀ⲫ̀ⲛⲟⲩϯ.",
                cop_de: "Nem ni-et-shop en-khitou khen eph-nahti em-eff-nouti.",
                ar_de: "Wal-sakenin fiha be-iman Allah.",

                navigationButtons: [
                    {
                        label_ar: "المياه", // The Waters
                        label_de: "Die Gewässer",
                        action: "navigatePage",      // ÄNDERUNG: Neue Seite
                        targetPage: "litany_waters"  // Name der neuen Seite
                    },
                    {
                        label_ar: "الزروع", // The Plants
                        label_de: "Die Saat",
                        action: "navigatePage",
                        targetPage: "litany_plants"
                    },
                    {
                        label_ar: "الأهوية", // The Airs
                        label_de: "Die Lüfte",
                        action: "navigatePage",
                        targetPage: "litany_airs"
                    },
                    {
                        label_ar: "شامله", // Combined
                        label_de: "Zusammenfassung",
                        action: "navigatePage",
                        targetPage: "litany_combined"
                    },

                ]
            },
            {
                id: 75,
                speaker: "Priester",

                ar: "اصعدها كمقدارها كنعمتك. فرح وجه الأرض ليروا حرثها ولتكثر اثمارها. اعدها للزرع والحصاد ودبر حياتنا كما يليق. بارك اكليل السنة بصلاحك من اجل فقراء شعبك من أجل الأرملة واليتيم والغريب والضيف، ومن اجلنا كلنا نحن الذين نرجوك ونطلب اسمك القدوس لأن اعين الكل تترجاك. لأنك أنت الذي تعطيهم طعامهم في حينه اصنع معنا حسب حسن صلاحك يا معطياً طعاماً لكل جسد. إملأ قلوبنا فرحاً ونعيماً لكي نحن ايضاً اذ يكون لنا الكفاف في كل شيء كل حين نزداد في كل عمل صالح.",

                de: "Lass sie ansteigen nach ihrem Maß und gemäß deiner Gnade. Gib dem Antlitz der Erde Freude, dass ihre Furchen bewässert werden und sich ihre Früchte mehren. Bereite den Boden zum Säen und Ernten. Regle unser Leben in geeigneter Weise. Segne den Kranz des Jahres mit deiner Güte, wegen der Armen deines Volkes, wegen der Witwen und Waisen, der Fremden und der Gäste, wegen uns allen, die wir auf dich hoffen und deinen heiligen Namen anrufen. Denn aller Augen hoffen auf dich, dass du ihnen ihre Speise zur rechten Zeit gibst. Handle mit uns nach deiner Güte, der du Nahrung allem Fleisch gibst. Erfülle unsere Herzen mit Freude und Wonne, damit wir in allem alle Zeit genug haben und in jedem guten Werk wachsen.",

                cop_ar: "آنيتو إيبشوي كاطا نوشي: كاطا فيه إيتيه فوك إن إهموت: ما بونوف إم إبهو إم إبكاهي: مارو طيخي إنجيه نيف إيثلوه: مارو طاشاي إنجيه نيف أوتاه. سيفتوتف إي أو خروج نيم أو أوشخ: أووه آري أويكونومين إم بين جين أونخ كاطا بي تير نوفري. إزمو إي بي إكلوم إنتيه تي رومبي هيتين تيك ميت خريستوس: إثفيه ني هيكي إنتيه بيك لاؤس: إثفيه تي خيرا نيم بي أورفانوس نيم بي شيممو نيم بي ريم إنجويلي: نيم إثفيتين تيرين خا ني إت إير هيلبيس إيروك: أووه إت توفه إم بيك ران إثؤواب. جيه نين فال إن أو أون نيفين سيه إير هيلبيس إيروك: جيه إنثوك إت تي إن تو تري نو أو خين أو سيو إي نانيف. آري أوي نيمان كاطا تيك ميت آغاثوس: في إت تي إخري إن ساركس نيفين. موه إن نين هيت إن راشي نيم أو أونوف: هينا أنون هون إيريه إفروشي إنتوتين خين هوف نيفين إن سيو نيفين: إنتين إير هوؤ خين هوف نيفين إن آغاثون.",

                cop_cop: "Ⲁ̀ⲛⲓⲧⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ: ⲕⲁⲧⲁ ⲫⲏⲉ̀ⲧⲉ ⲫⲱⲕ ⲛ̀ϩ̀ⲙⲟⲧ: ⲙⲁ ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ: ⲙⲁⲣⲟⲧⲉⲓϧⲓ ⲛ̀ϫⲉ ⲛⲉϥⲉ̀ⲑⲗⲱϩ: ⲙⲁⲣⲟⲧⲁϣⲁⲓ ⲛ̀ϫⲉ ⲛⲉϥⲟⲩⲧⲁϩ. Ⲥⲉⲃⲧⲱⲧϥ ⲉ̀ⲟⲩⲭ̀ⲣⲟϫ ⲛⲉⲙ ⲟⲩⲱⲥϧ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲟⲓⲕⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲉⲛϫⲓⲛⲱⲛϧ ⲕⲁⲧⲁ ⲡⲉⲧⲉⲣⲛⲟϥⲣⲓ. Ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ ⲛⲓϩⲏⲕⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲉⲑⲃⲉ ϯⲭⲏⲣⲁ ⲛⲉⲙ ⲡⲓⲟⲣⲫⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲓϣⲉⲙⲙⲟ ⲛⲉⲙ ⲡⲓⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ: ⲛⲉⲙ ⲉⲑⲃⲏⲧⲉⲛ ⲧⲏⲣⲉⲛ ϧⲁ ⲛⲏ ⲉ̀ⲧⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲉⲧⲧⲱⲃϩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲛⲉⲛⲃⲁⲗ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲉⲧϯ ⲛ̀ⲧⲟⲩⲧ̀ⲣⲉ ⲛⲱⲟⲩ ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉ̀ⲛⲁⲛⲉϥ. Ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲫⲏⲉⲧϯ ϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ⲙⲟϩ ⲛ̀ⲛⲉⲛϩⲏⲧ ⲛ̀ⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲟⲩⲛⲟϥ: ϩⲓⲛⲁ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲉ̀ⲣⲉ ⲫ̀ⲣⲱϣⲓ ⲛ̀ⲧⲟⲧⲉⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ.",

                cop_de: "Anitou epshoi kata noushi: kata phe-ete phok en-hmot: ma pounof em-p-ho em-p-kahi: maroteikhi enge nef-ethloh: marotashai enge nef-outah. Sevtotf e-ou-khrog nem ouoshkh: owoh ari-oikonomin em-pen-gin-onkh kata peter-nofri. Esmou e-pi-khlom ente ti-rompi hiten tek-met-khristos: ethve ni-hiki ente pek-laos: ethve ti-khira nem pi-orphanos nem pi-shemmo nem pi-rem-eng-oili: nem ethveten tiren kha ni eter-helpis erok: owoh et-tovh em-pek-ran ethouav. Ge nen-val en-ouon niven se-er-helpis erok: ge enthok et-ti en-tou-tre no-ou khen ou-se-ou e-nanef. Ari-ou-i neman kata tek-met-agathos: phe-et-ti khre en-sarx niven: moh en-nen-hit en-rashi nem ou-ounof: hina anon hon ere eph-roshi entoten khen hov niven en-se-ou niven: nenten-er-hou-o khen hov niven en-agathon.",

                ar_de: "As3idha ka-miqdariha ka-ni3matik. Farreh wagha el-ard liyarwa harthoha wa litakthor athmaroha. A3iddaha lel-zar3 wal-hasad wa dabbir hayatana kama yaliq. Barek eklil el-sana bi-salahik men agl foqara2 sha3bik men agl el-armala wal-yatim wal-gharib wal-dayf, wa men aglina kollina nahnou allazina narjouk wa natlob esmaka el-qoddous le-anna a3yon el-kol tatarragak. Le-annaka anta allazi to3tihim ta3amahom fi hinih esna3 ma3ana hasab hosn salahik ya mo3tiyan ta3aman li-kol jasad. Emla2 qoloubana farahan wa na3iman lekay nahnou aydan ez yakoun lana el-kafaf fi kol shay2 kol hin nazdad fi kol 3amal saleh."
            },
            {
                id: 76,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham.",
            },
            {
                id: 77,
                sectionTitle: {
                    de: "Gebet für die Opfergaben",
                    ar: "اوشيه القرابين"
                },
                speaker: "Priester",
                ar: "أذكر يارب الذين قدموا لك هذه القرابين والذين قدمت عنهم والذين قدمت بواسطتهم أعطهم كلهم الأجر السمائي.",
                de: "Gedenke, o Herr, derer, die dir diese Gaben dargebracht haben derer, für die sie dargebracht werden und derer, durch die sie dargebracht werden. Gib ihnen allen den himmlischen Lohn.",
                cop_ar: "أرى إفميفئي إبشويس إن نيئيتاف إينى ناك إيخون إن ناي ذورون نيم نيئيتاف إينو إيجوؤو نيم نيئيتاف إينو إيفول هيطوطو موى نوؤو تيرو إمبى فيكى بى إيفول خين نيفينؤوى.",
                cop_cop: "Ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲏⲉ̀ⲧⲁⲩⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲛⲁⲓⲇⲱⲣⲟⲛ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲟⲩ ⲉ̀ϫⲱⲟⲩ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲩⲉⲛⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲟⲩ ⲙⲟⲓ ⲛⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲙ̀ⲡⲓⲃⲉⲭⲉ ⲡⲓⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀.",
                cop_de: "Ari-phmevi Epchois enni-etaf-ini nak ekhoun en-nai-doron nem ni-etaf-inou ejou nem ni-etaf-inou evol hitotou moi no-ou tirou empi-bekhi pi-evol khen ni-fi-oui.",
                ar_de: "Ozkor ya Rabb allazina qadamou laka hazihi el-qarabin wallazina qoddimat 3anhom wallazina qoddimat be-wasitatihim a3tehom kolahom el-agr el-sama2i."
            },
            {
                id: 78,
                speaker: "Diakon",
                ar: "صلوا من أجل هذه القرابين المقدسة الكريمة وتقدماتنا والذين قدموها",
                de: "Betet für die heiligen und ehrwürdigen Gaben, für unsere Opfer und für diejenigen, die sie dargebracht haben.",
                cop_ar: "إبروس إفكصاستيه إي بيرطون آجيون تيميون ذورون طوطون كيه سيون ايمون كيه إبروس فيرون طون.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲁ̀ⲅⲓⲱⲛ ⲧⲓⲙⲓⲱⲛ ⲇⲱⲣⲱⲛ ⲧⲟⲩⲧⲱⲛ ⲕⲉ ⲑⲩⲥⲓⲱⲛ ⲏ̀ⲙⲱⲛ ⲕⲉ ⲡⲣⲟⲥⲫⲉⲣⲟⲛⲧⲱⲛ.",
                cop_de: "Pros-evxasthe yper ton agion timion doron touton ke thision imon ke prosferonton.",
                ar_de: "Sallou men agl hazihi el-qarabin el-moqadasa el-karima wa taqdomatina wallazina qadamouha."
            },
            {
                id: 79,
                speaker: "Volk",
                ar: "يا رب ارحم.",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.",
                cop_de: "Kyrie eleyson.",
                ar_de: "Ya Rab erham."
            },
            {
                id: 80,
                sectionTitle: {
                    de: "Die Gemeinschaft der Heiligen",
                    ar: "المجمع"
                },
                speaker: "Priester",
                ar: "لأن هذا يا رب هو أمر ابنك الوحيد أن نشترك في تذكار قديسيك. تفضل يارب أن تذكر جميع القديسين الذين أرضوك منذ البدء آبائنا القديسين رؤساء الآباء والأنبياء والرسل والمبشرين والإنجيليين والشهداء والمعترفين وكل أرواح الصديقين الذين كملوا في الإيمان. وبالأكثر القديسة المملوءة مجداً العذراء كل حين والدة الإله القديسة الطاهرة مريم، التي ولدت الله الكلمة بالحقيقة والقديس يوحنا السابق الصابغ والشهيد والقديس استفانوس رئيس الشمامسة وأول الشهداء وناظر الإله الإنجيلي مرقس الرسول الطاهر والشهيد والبطريرك القديس ساويرس ومعلمنا ديوسقورس والقديس أثناسيوس الرسولي والقديس بطرس رئيس الكهنة وخاتم الشهداء والقديس يوحنا ذهبي الفم والقديس ثيؤدوسيوس والقديس ثيؤفيلوس والقديس ديمتريوس والقديس كيرلس والقديس باسيليوس والقديس اغريغوريوس الناطق بالإلهيات والقديس اغريغوريوس الصانع العجائب والقديس اغريغوريوس الأرمني والثلاثمائة والثمانية عشر المجتمعين بنقية والمئة والخمسين بالقسطنطينية والمائتين بأفسس وأبانا الصديق العظيم أنبا أنطونيوس والبار أنبا بولا والثلاثة أنبا مقارات القديسين وجميع أولادهم لباس الصليب وأبانا أنبا يحنس القمص وأبانا أنبا بيشوي البار الرجل الكامل حبيب مخلصنا الصالح وأبانا أنبا بولا الطموهي وحزقيال تلميذه وسيدي الأبوين القديسين الروميين مكسيموس ودوماديوس والتسعة والأربعين شهيداً شيوخ شيهيت والقوي القديس أنبا موسى ويحنس كاما القس وأبانا أنبا ايسيذورس القمص وأبانا أنبا دانيال وأبانا أنبا باخوم صاحب الشركة وتادرس تلميذه وأبانا أنبا شنودة رئيس المتوحدين وأنبا ويصا تلميذه والبطريرك البابا كيرلس السادس، الارشيدياكون حبيب جرجس وأبانا أنبا إبرآم أسقف الفيوم وأبانا القمص ميخائيل البحيري تلميذه وكل مصاف قديسيك هؤلاء الذين بسؤلاتهم وطلباتهم ارحمنا كلنا معاً وانقذنا من أجل اسمك القدوس الذي دعي علينا.",

                de: "Denn dies, o Herr, ist das Gebot Deines eingeborenen Sohnes, dass wir am Gedächtnis Deiner heiligen teilnehmen. Gedenke gnädig, o Herr, all Deiner heiligen, die Dir von Anbeginn wohlgefallen haben: Unserer heiligen Väter, Patriarchen, Propheten, Apostel, Verkünder, Evangelisten, Märtyrer, Bekenner und der Seelen aller Rechtschaffenen, die im Glauben vollkommen geworden sind. Am meisten gedenke, o Herr, der heiligen, ehrenvollen, der immerwährenden Jungfrau, der Mutter Gottes, der reinen, heiligen Maria, die Gott, das Wort, in Wahrheit geboren hat und des heiligen Johannes, des Vorläufers, des Täufers und Märtyrers und des heiligen Stephanos, des Erzdiakon und Ersten der Märtyrer des Schauers Gottes, des Evangelisten Markus, des heiligen, des Apostels und Märtyrers und des Patriarchen, des heiligen Severos unseres Lehrers Dioskorus des heiligen Athanassios, des Apostelgleichen des heiligen Petrus, des letzten Märtyrers und Priesteroberhauptes des heiligen Johannes Chrisosthomos, des heiligen Theodosius, des Hl. Theophilos des Hl. Demetrius, des Hl. Kyrillus, des Hl. Basilius des Hl. Gregorius des Sprechers göttlicher Dinge, des Hl. Gregorius des Wundertäters und des Hl. Gregorius des Armeniers, der 318 Versammelten zu Nicea der 150 Versammelten zu Konstantinopel und der 200 zu Ephesus und unseres Vaters, des gerechten Großen Anba Antonius des Großen, des rechtschaffenen Anba Paul, der heiligen 3 Anba Makarios und all ihrer kreuztragender Kinder und unseres Vaters Abba Johannes des Igumen, unseres Vaters Abba Pischoi des Rechtschaffenen, des vollkommenen Menschen, des Geliebten unseres gütigen Erlösers unseres Vaters Abba Paul von Tammouh und seines Schülers Ezechiel meiner beiden Herren, der heiligen Maximus und Dometius der Römer der neunundvierzig Märtyrer, der Ältesten von Schiheet, des starken heiligen Abba Moses, des Priesters Johannes Kame unseres Vaters Abba Isidoros des Igumen, unseres Vaters Abba Daniel, unseres Vaters Abba Pachom, des Vaters der Koinobiten seines Schülers Theodorus, unseres Vaters Abba Schenuda des Archimandriten und seines Schülers Abba Wisa unseres Vaters Papstes Abba Kyrillus VI., des gesegneten Erzdiakons Habib Girgis unseres Vaters Abba Abraam, Bischof von Faijum und Giza, und Unseres Vaters Erzpriester Michael Albhari und seines Jüngers und aller Reihen Deiner heiligen. Durch ihre Gebete und Fürbitten für uns habe Erbarmen mit uns allen zusammen. Errette uns um Deines heiligen Namens willen, der über uns gerufen ist.",

                cop_ar: "إبيذي إبشويس أووه ساهني بي إنتي بيك مونو جينيس إن شيري إيثرين إر آشفير إي إف ميفي إنتي ني إثؤواب إنتاك. آري كاطاكسين إبشويس إن تيك إر إف ميفي إن ني إثؤواب تيرو إيتاف راناك يسجين إب إينيه نين يوتي إثؤواب ني باتري آرشيس. نيم ني إبروفيتيس نيم ني أبوستولوس نيم نيف إر هي أويش نيم ني إف أنجيليستيس نيم ني مارتيروس. نيم ني أومولوجيتيس نيم إبنيفما نيفين إن إثمي إيتاف جوك إيفول خين إفنا هتي. ماليستا ذي تي إثؤواب إيث ميه إن أو أو إت أوي إم بارثينوس إن سيو نيفين تي ثيؤطوكوس إثؤوابت آجيا ماريا. ثي إيتا سميسي إم إفنوتي بي لوغوس خين أو ميثمي نيم بي آجيوس يوأنس بي برودروموس إم بابتستيس أووه إم مارتيروس. نيم بي آجيوس إستيفانوس بي أرشي دياكونوس أووه إم إبروتو مارتيروس نيم بي ثيؤريموس إن إف أنجيليستيس ماركوس. بي أبوستولوس إثؤواب أووه إم مارتيروس نيم بي باتري آرشيس إثؤواب سيفيروس نيم بين ساخ ديوسقورس. نيم بي آجيوس أثناسيوس بي أبوستوليكوس نيم بي آجيوس بيتروس بي هييرو مارتيروس بي أرشي إيريفس. نيم بي آجيوس يوأنس بي أخر زوستوموس نيم بي ثيؤدوسيوس نيم بي آجيوس ثيؤفيلوس. نيم بي آجيوس ديميتريوس نيم بي آجيوس كيريللوس نيم بي آجيوس فاسيليوس. نيم بي آجيوس إغريغوريوس بي ثيؤلوغوس نيم بي آجيوس إغريغوريوس بي ثافما طورغوس. نيم بي آجيوس إغريغوريوس بي أر مينيوس نيم بي شمت شي ميت إشمين إيتاف ثوؤوتي خين نيكيئا. نيم بي شي تيفي إنتي كوستانطينوبوليس نيم بي إيسناف شي إنتي إيفيسوس نيم بينيوت إن ذيكيئوس بين نيشتي أببا أنطونيوس نيم بي إثمي أببا بافلي نيم بي شومت إثؤواب أببا مقار نيم نوف شيري تيرو إن إسطافر وفوروس. نيم بينيوت أببا يوأنس بي هيغومينوس نيم بينيوت أببا بيشوي بي إثمي بي ميني ريت إنتي بين سوتير إن آغاثوس. نيم بينيوت أببا بافلي بيريم طموه نيم إيزاكييل بيف ماثيتيس. نيم ناشويس إنيوتي إثؤواب إن روميوس ماكسيموس نيم دوميتيوس. نيم بي إهمي إبسيت إم مارتيروس ني خيللوي إنتي شيهيت نيم بي جوري إثؤواب أببا موسى نيم يوأنس كامي بي إبريسفيتيروس. نيم بينيوت أببا إيسيذوروس بي هيغومينوس نيم بينيوت أببا دانيال نيم بينيوت أببا باخوم فاتي كوينونيا نيم ثيؤدورس بيف ماثيتيس نيم بينيوت آبا شينوتي بي أرشي ميني دريتيس نيم آفا ويصا بيف ماثيتيس. نيم بينيوت آفا كيرلس بي ماه سو نيم بي أرشي دياكون حبيب جرجس. نيم بينيوت آفا إفرام بي إبيسكوبو إنتي إفيوم نيم بنيوت ميخائيل بي هيغومينوس بيف ماثيتيس. نيم إبخوروس تيرف انتي نيثؤواب انطاك ناي هيتين نو تيهو نيم نو طوفه ناي نان تيرو افسوب. أوفوه ماطوجون اثفي بيكران اثؤواب ايطاف موت اى اهري ايجون.",

                cop_cop: "Ⲉⲡⲓⲇⲏ Ⲡ̀ϭⲟⲓⲥ ⲟⲩⲟϩ ⲥⲁϩⲛⲓ ⲡⲉ ⲛ̀ⲧⲉ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ ⲉ̀ⲑⲣⲉⲛⲉⲣⲁ̀ϣⲫⲏⲣ ⲉ̀ⲡⲓⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ. Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉⲕⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲩⲣⲁⲛⲁⲕ ⲓⲥϫⲉⲛ ⲡⲓⲉ̀ⲛⲉϩ: ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ. Ⲛⲉⲙ ⲛⲓⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛⲉⲙ ⲛⲓⲣⲉϥϩⲓⲱⲓϣ ⲛⲉⲙ ⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ ⲛⲉⲙ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲛⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ ⲛⲉⲙ ⲡⲛⲉⲩⲙⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲑⲙⲏⲓ ⲉ̀ⲧⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫ̀ⲛⲁϩϯ. Ⲙⲁⲗⲓⲥⲧⲁ ⲇⲉ ϯⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ⲛ̀ⲱⲟⲩ ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃⲧ ⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ. Ⲑⲏⲉ̀ⲧⲁⲥⲙⲓⲥⲓ ⲙ̀Ⲫⲛⲟⲩϯ Ⲡⲓⲗⲟⲅⲟⲥ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲣⲟⲇ̀ⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓⲁⲣⲭⲓⲇⲓⲁⲕⲱⲛⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲡ̀ⲣⲱⲧⲟⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲉⲙ ⲡⲓⲑⲉⲱ̀ⲣⲓⲙⲟⲥ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ Ⲙⲁⲣⲕⲟⲥ. Ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲉⲙ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉⲑⲟⲩⲁⲃ Ⲥⲉⲩⲏⲣⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲥⲁϧ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲁⲑⲁⲛⲁⲥⲓⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲟⲥ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲡⲉⲧⲣⲟⲥ ⲡⲓⲓⲉⲣⲟⲙⲁⲣⲧⲩⲣⲟⲥ ⲡⲓⲁⲣⲭⲓⲉ̀ⲣⲉⲩⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲭⲣⲩⲥⲟⲥⲧⲟⲙⲟⲥ ⲛⲉⲙ ⲡⲓⲑⲉⲟⲇⲟⲥⲓⲟⲥ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲑⲉⲟⲫⲓⲗⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲇⲏⲙⲏⲧⲓⲟⲥ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲃⲁⲥⲓⲗⲓⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲑⲉⲟⲗⲟⲅⲟⲥ ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲑⲁⲩⲙⲁⲧⲟⲩⲣⲅⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ ⲡⲓⲁⲣⲙⲉⲛⲓⲟⲥ ⲛⲉⲙ ⲡⲓ ⲧ̅ⲓ̅ⲏ̅ ⲉ̀ⲧⲁⲩⲑⲱⲟⲩϯ ϧⲉⲛ Ⲛⲓⲕⲉⲁ̀. Ⲛⲉⲙ ⲡⲓ ⲣ̅ⲛ̅ ⲛ̀ⲧⲉ Ⲕⲟⲥⲧⲁⲛⲧⲓⲛⲟⲩⲡⲟⲗⲓⲥ ⲛⲉⲙ ⲡⲓ ⲥ̅ ⲛ̀ⲧⲉ Ⲉⲫⲉⲥⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲇⲓⲕⲉⲟⲥ ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ ⲛⲉⲙ ⲡⲓⲑ̀ⲙⲏⲓ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ ⲛⲉⲙ ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ ⲛⲉⲙ ⲛⲟⲩϣⲏⲣⲓ ⲧⲏⲣⲟⲩ ⲛ̀ⲥⲧⲁⲩⲣⲟⲫⲟⲣⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ ⲡⲓⲑ̀ⲙⲏⲓ ⲡⲓⲙⲉⲛⲓⲧ ⲛ̀ⲧⲉ ⲡⲉⲛⲥⲱⲧⲏⲣ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ ⲡⲓⲣⲉⲙⲧⲁⲙⲙⲟϩ ⲛⲉⲙ Ⲓⲉⲍⲉⲕⲓⲏⲗ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ. Ⲛⲉⲙ ⲛⲁϣⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲣⲱⲙⲉⲟⲥ Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ. Ⲛⲉⲙ ⲡⲓ ⲙ̅ⲑ̅ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲓϧⲉⲗⲗⲟⲓ ⲛ̀ⲧⲉ Ϣⲓϩⲏⲧ ⲛⲉⲙ ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ ⲛⲉⲙ Ⲓⲱⲁⲛⲛⲏⲥ Ⲕⲁⲙⲉ ⲡⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲥⲓⲇⲱⲣⲟⲥ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲇⲁⲛⲓⲏⲗ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ̀ ⲛⲉⲙ Ⲑⲉⲟ́ⲇⲱⲣⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁⲣⲭⲓⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ ⲛⲉⲙ ⲁⲃⲃⲁ Ⲟⲩⲓⲥⲁ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲕⲩⲣⲓⲗⲗⲟⲥ ⲡⲓⲙⲁϩ ⲥⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲁⲣⲭⲓⲇⲓⲁⲕⲱⲛ Ϩⲁⲃⲓⲃ Ⲅⲉⲱⲣⲅⲓⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲁ̀ⲃⲣⲁⲁⲙ ⲡⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲧⲉ Ⲫⲓⲟⲙ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲙⲓⲭⲁⲏⲗ ⲡⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲡⲉϥⲙⲁⲑⲏⲧⲏⲥ. Ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ: ⲛⲁⲓ ϩⲓⲧⲉⲛ ⲛⲟⲩϯϩⲟ ⲛⲉⲙ ⲛⲟⲩⲧⲱⲃϩ ⲛⲁⲓ ⲛⲁⲛ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ. Ⲟⲩⲟϩ ⲙⲁⲧⲟⲩϫⲟⲛ ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ⲉ̀ⲧⲁⲩⲙⲟⲩϯ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.",

                cop_de: "Epidi Epshois owoh sahni pe ente Pek-monogenis en-Shiri ethren-er-ashphir epi-erphmevi ente ni-ethowab ntak. Ari-kataxin Epshois entek-erphmevi en-ni-ethowab tirou etav-ranak is-jen pi-eneh: nenioti ethowab ni-patriarchis. Nem ni-profitis nem ni-apostolos nem ni-ref-hioish nem ni-evangelistis nem ni-martyros. Nem ni-omologitis nem pnevma niven en-thmi etav-jok evol khen eph-nahti. Malista de ti-ethowab eth-meh en-o-ou etoi em-parthenos en-siou niven ti-Theotokos ethowavt agia Maria. Thi-etas-misi em-Phnouti Pi-Logos khen ou-methmi nem pi-agios Ioannis pi-prodromos em-vaptistis owoh em-martyros. Nem pi-agios Stephanos pi-arkhidiakonos owoh em-protomartyros nem pi-theorimos en-evangelistis Markos. Pi-apostolos ethowab owoh em-martyros nem pi-patriarchis ethowab Severos nem pen-sakh Dioskoros. Nem pi-agios Athanasios pi-apostolikos nem pi-agios Petros pi-iero-martyros pi-arkhi-erevs. Nem pi-agios Ioannis pi-khrysostomos nem pi-theodosios nem pi-agios Theophilos. Nem pi-agios Demetrius nem pi-agios Kyrillus nem pi-agios Vasilios. Nem pi-agios Grigorios pi-theologos nem pi-agios Grigorios pi-thavmatorgos. Nem pi-agios Grigorios pi-armenios nem pi-shomt-she-m-ish et-av-tho-outi khen Nikia. Nem pi-she-tivi ente Konstantinopolis nem pi-esnav-she ente Ephesos nem peniot en-dikeos pi-nishti abba Antonios nem pi-thmi abba Pavle nem pi-shomt ethouab abba Makari nem nou-shiri tirou en-stafrophoros. Nem peniot abba Ioannis pi-higoumenos nem peniot abba Pishoi pi-thmi pi-men-rit ente pen-sotir en-agathos. Nem peniot abba Pavle perem-Tammouh nem Ezekiiel pef-mathitis. Nem na-shois en-ioti ethouav en-romeos Maximos nem Dometios. Nem pi-hme-psit em-martyros ni-khelloi ente Shi-hit nem pi-gori ethouav abba Mosi nem Ioannis Kame pi-presvyteros. Nem peniot abba Isidoros pi-higoumenos nem peniot abba Daniel nem peniot abba Pakhom pha ti-koinonia nem Theodoros pef-mathitis nem peniot ava Shenouti pi-archi-mandritis nem ava Wisa pef-mathitis. Nem peniot ava Kyrillos pi-mah-so nem pi-archi-diakon Habib Girgis. Nem peniot ava Abraam pi-episkopos ente Phiom nem peniot Michael pi-higoumenos pef-mathitis. Nem ep-choros tirf ente ni-ethowab ntak nai hiten no-tiho nem no-tovh nai nan tirou ev-sop. Owoh ma-tougon ethve Pek-ran etho-wab etaf-mouti eh-rii ejon.",

                ar_de: "Epeedi ya Rabb howa amr ebnek el-wahid an nashtarek fi tethkar qiddisik. Tafaddal ya Rabb an tethkor gami3 el-qiddisin allazina ardouk monzo el-bad2: aba2ana el-qiddisin ro2asa2 el-aba2, wal-anbeya2 wal-rosol wal-mobashirin wal-ingiliyin wal-shohada2, wal-mo3tarifin wa kol arwa7 el-seddiqin allazina kamalou fil-iman. Wa bel-akthar el-qiddisa el-mamlou2a magdan, el-3azra2 kol 7in, walidat el-elah el-tahira el-qiddisa Maria, allati waladat Allah el-Kalima bel-haqiqa, wal-qiddis Youhanna el-sabiq el-sabigh wal-shaheed, wal-qiddis Estefanos ra2is el-shamamisa wa awwal el-shohada2 wa nather el-elah el-ingili Morqos el-rasoul el-tahir wal-shaheed wal-batriyark el-qiddis Sawiros wa mo3alimina Dioscoros wal-qiddis Athanasios el-rasouli wal-qiddis Botros ra2is el-kahana wa khatem el-shohada2 wal-qiddis Youhanna zahabi el-fam wal-qiddis Theodosios wal-qiddis Theofilos. Wal-qiddis Demetrius wal-qiddis Kyrillus wal-qiddis Basilios. Wal-qiddis Gregorios el-natiq bel-ilahiyat wal-qiddis Gregorios el-sane3 el-3aga2ib. Wal-qiddis Gregorios el-armani wal-thalathema2a wal-thamaniat 3ashar el-mogtame3in be-Niqia. Wal-me2a wal-khamsin be-Konstantinopol wal-me2atayn be-Afasos wa abana el-seddiq el-3azim anba Antonios wal-bar anba Boula wal-thalathat anba Maqarat el-qiddisin wa gami3 awladahom lebas el-salib. Wa abana anba Yo7anna el-qommos wa abana anba Bishoy el-bar el-ragol el-kamel habib mokhallesina el-sale7. Wa abana anba Boula el-Tamouhi wa Hazqial telmizoh. Wa sayedi el-abawayn el-qiddisayn el-romiyayn Maximos wa Domadios. Wal-tes3a wal-arba3in shaheedan shoyoukh Shiheet wal-qawi el-qiddis anba Moussa wa Yo7anna Kame el-qass. Wa abana anba Isidoros el-qommos wa abana anba Daniel wa abana anba Bakhom saheb el-sherika wa Tadros telmizoh wa abana anba Shenouda ra2is el-motawa7idin wa anba Wisa telmizoh. Wal-batriyark el-Baba Kyrillos el-sades, el-archidiakon Habib Girgis. Wa abana anba Abraam osqof el-Faiyoum wa abana el-qommos Michael el-Bahiri telmizoh. Wa kol masaff qiddisik ha2ola2 ellazina bes2olatihim wa telbatihim er7amna kollena ma3an. Wa anqethna min agli ismeka el-qoddous ellathi do3eya 3alayna.",
                navigationButtons: [
                    {
                        label_ar: "بي نيشتي", // The Waters
                        label_de: "Die großen Väter",
                        action: "navigatePage",      // ÄNDERUNG: Neue Seite
                        targetPage: "bi_nishti"  // Name der neuen Seite
                    },
                ]
            },
            {
                id: 81,
                speaker: "Diakon",
                // Zusammengefügt aus den Bildern für die Vorleser und die Bitte um Ruhe
                ar: "القارئون فليقولوا أسماء آبائنا البطاركة القديسين الذين رقدوا: الرب ينيح نفوسهم أجمعين، ويغفر لنا خطايانا.",

                de: "Die Vorleser sprechen die Namen unserer heiligen Väter, die Patriarchen, die entschlafen sind. Der Herr möge ihren Seelen ewige Ruhe schenken und uns unsere Sünden vergeben.",

                cop_ar: "ني إتؤش مارو طأو إن نيران إنتيه نين يوتي إثؤواب إم باتريارشيس إيتاف إنكوت: إبشويس مانون إنتو إبسيكي تيرو: أووه إنتيف كانين نوفي نان إيفول.",

                cop_cop: "Ⲛⲏⲉⲧⲱϣ ⲙⲁⲣⲟⲩⲧⲁⲟ̀ ⲛ̀ⲛⲓⲣⲁⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ: Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ: ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Ni-etosh marou-ta-o en-niran ente nenioti ethowab em-patriarchis etav-enkot: Epchois ma-ton en-nou-pychi tirou: owoh entef-ka nen-novi nan evol.",

                ar_de: "El-qari2oun faly qoulou asma2 aba2ina el-batarka el-qiddisin allazina raqadou: El-Rabb yonaye7 nofousahom agma3in, wa yaghfer lana khatayana."
            },
            {
                id: 82,
                speaker: "Volk",
                ar: "بركتهم المقدسة تكون معنا. آمين. المجد لك يارب، يارب لك المجد. \n كيريه ليسون كيريه ليسون كيريه ليسون. إفلوجيسون كيريه أنابافسون آمين. \n يارب ارحم. يارب ارحم. يارب باركنا. يارب نيحهم. آمين.",

                de: "Ihr heiliger Segen sei mit uns. Amen. Ehre sei dir, o Herr, [o Herr, dir sei Ehre]. \n Herr erbarme dich, Herr erbarme dich. Herr, segne uns. Herr, gib ihnen Ruhe, Amen.",

                cop_ar: "إيه ريه بو إسمو إثؤواب شوبي نيه مان آمين: ذوكصاصي كيريه كيريه: ذوكصاصي كيريه كيريه. \n كيريه ليسون كيريه ليسون كيريه ليسون. إفلوجيسون كيريه أنابافسون آمين.",

                cop_cop: "Ⲓⲉⲣⲉ ⲡⲟⲩⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ: Ⲁ̀ⲙⲏⲛ. Ⲇⲟⲝⲁ ⲥⲟⲓ Ⲕⲩⲣⲓⲉ: Ⲕⲩⲣⲓⲉ ⲇⲟⲝⲁ ⲥⲟⲓ. \n Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ. Ⲉⲩⲗⲟⲅⲏⲥⲟⲛ Ⲕⲩⲣⲓⲉ: Ⲁ̀ⲛⲁⲡⲁⲩⲥⲟⲛ Ⲁ̀ⲙⲏⲛ.",

                cop_de: "Iere pou-ezmo ethowab shopi neman: Amen. Doxa si Kyrie: Kyrie doxa si. \n Kyrie eleyson: Kyrie eleyson: Kyrie eleyson. Evlogison Kyrie: Anapavson Amen.",

                ar_de: "Barakatohom el-moqadasa takoun ma3ana. Amen. El-magdo laka ya Rabb, ya Rabb laka el-magd. \n Kyrie eleyson, Kyrie eleyson, Kyrie eleyson. Evlogison Kyrie, anapavson Amen."
            },
            {
                id: 83,
                speaker: "Priester",
                // Zusammengefügt aus den Bildern für die Ruhe im Paradies, das himmlische Jerusalem und die Bewahrung im Glauben
                ar: "أولئك يارب الذين أخذت نفوسهم نيحهم في فردوس النعيم في كورة الأحياء إلى الأبد في أورشليم السمائية في ذلك الموضع ونحن أيضا الغرباء في هذا المكان احفظنا في إيمانك وانعم علينا بسلامك إلى التمام.",

                de: "Die, o Herr, deren Seelen Du zu Dir genommen hast, führe zur Ruhe im Paradies der Freuden, im Lande der Lebendigen in Ewigkeit, im himmlischen Jerusalem, an diesen Ort. Und uns, die wir Fremde sind an diesem Ort, behüte in deinem Glauben. Gewähre uns Deinen vollkommenen Frieden.",

                cop_ar: "ني مين إبشويس إي آك إيتشي إن نو إبسيكي مانون نوؤو خين بي باراذيسوس إنتي إب أونوف خين إت خورا إنتي نيه إيت أونخ شا إينيه خين ييروساليم إنتي إتفي خين بي ما إيت إي إمماف أنون ذي هون خاني إنتوؤوي إن ريم إنجويلي إم باى ما آري إيرون خين بيك ناهتي آري إيه موت نان إنتيك هيريني شا إيفول.",

                cop_cop: "Ⲛⲏⲙⲉⲛ Ⲡ̀ϭⲟⲓⲥ ⲏ̀ⲁⲕⲓⲧⲥⲓ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲙⲁⲧⲟⲛ ⲛⲱⲟⲩ ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲱⲛⲟϥ: ϧⲉⲛ ⲧ̀ⲭⲱⲣⲁ ⲛ̀ⲧⲉ ⲛⲏⲉⲧⲟⲛϧ ϣⲁ ⲉ̀ⲛⲉϩ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ϧⲉⲛ ⲡⲓⲙⲁ ⲉⲧⲉⲙ̀ⲙⲁⲩ: ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ϧⲁⲛⲏⲉⲧⲟⲩⲟⲓ ⲛ̀ⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ ⲙ̀ⲡⲁⲓⲙⲁ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲛ ϧⲉⲛ ⲡⲉⲕⲛⲁϩϯ: ⲁ̀ⲣⲓϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ ϣⲁ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Ni-men Epchois e-ak-itsi en-nou-pychi ma-ton no-ou khen pi-paradisos ente ep-onof khen et-khora ente neh-et-onkh sha eneh khen lerosalim ente et-phe khen pi-ma ete-emmav anon de hon khani-entou-oi en-rem-eng-oili em-pai-ma areh eron khen pek-nahti ari-e-mot nan entek-hirini sha evol.",

                ar_de: "Olai2eka ya Rabb allazina akhathta nofousahom naye7hom fi ferdous el-na3im fi korat el-a7ya2 ela el-abad fi Orshalim el-sama2iya fi zalek el-mawda3 wa nahnou aydan el-ghoraba2 fi haza el-makan e7fathna fi imanek wa an3em 3alayna be-salamik ela el-tamam."
            },
            {
                id: 84,
                speaker: "Volk",
                ar: "كما كان وهكذا يكون، من جيل إلى جيل، وإلى دهر الدهور. آمين.",
                de: "So wie es war und wie es sein soll, ist es von Generation zu Generation und bis in die Ewigkeit der Ewigkeiten, Amen.",
                cop_ar: "أوس بيه رين كيه إستيه إيستين أبو جيه نيه ني أس يس جيه ني آن كيه بانضاس طوس إيه أوناس طون إيه أونون آمين.",
                cop_cop: "Ⲱⲥ ⲡⲉⲣⲉⲛ ⲕⲉ ⲉⲥⲧⲉ: ⲉⲥⲧⲓⲛ ⲁ̀ⲡⲟ ⲅⲉⲛⲉⲁⲥ ⲉⲓⲥ ⲅⲉⲛⲉⲁⲛ: ⲕⲉ ⲡⲁⲛⲧⲁⲥ ⲧⲟⲩⲥ ⲉⲓⲱⲛⲁⲥ ⲧⲱⲛ ⲉⲓⲱⲛⲱⲛ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Os peren ke este: estin apo geneas is genean: ke pantas tous eonas ton eonon: Amen.",
                ar_de: "Kama kana wa hakaza yakoun, min gilin ila gil, wa ila dahr el-dahour. Amen."
            },
            {
                id: 85,
                speaker: "Priester",
                // Zusammengefügt aus den Bildern zur Führung ins Reich und der abschließenden Doxologie
                ar: "واهدنا إلى ملكوتك لكي بهذا كما أيضاً في كل شيء يتمجد ويتبارك ويرتفع اسمك العظيم القدوس في كل شيء كريم ومبارك مع يسوع المسيح ابنك الحبيب والروح القدس.",

                de: "Und führe uns in Dein Reich, damit dadurch, so wie an allem, verherrlicht, gepriesen und erhöht werde Dein heiliger und großer Name, der in allem herrlich und gepriesen ist, zusammen mit Jesus Christus, Deinem geliebten Sohn und dem Heiligen Geist.",

                cop_ar: "تشى مويت خاجون ايخون ايتيك ميت اورو هينا نيم خين فاى كاطا افريتى اون خين هوف نيفين انتيف تشى اوؤو اووه انتيف تشى ايمو اووه انتيف تشيسى انجى بيك نيشتى انران اثؤواب خين هوف نيفين اتطايوت اووه ايتسمارؤوت نيم ايسوس بى اخرستوس بيك مينريت انشيرى نيم ايبنيفما اثؤواب.",

                cop_cop: "Ϭⲓⲙⲱⲓⲧ ϧⲁϫⲱⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ϩⲓⲛⲁ ⲛⲉⲙ ϧⲉⲛ ⲫⲁⲓ ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲟⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉϥϭⲓⲱ̀ⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓ ⲥ̀ⲙⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓⲥⲓ ⲛ̀ϫⲉ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲟⲩⲟϩ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛⲉⲙ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲉⲕⲙⲉⲛⲣⲓⲧ ⲛ̀Ϣⲏⲣⲓ: ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.",

                cop_de: "Tchi-moit khajon ekhoun etek-metouro: hina nem khen phai kata phriti on khen hov niven entef-tchi-o-ou owoh entef-tchi ezmo owoh entef-tchisi enje pek-nishti enran ethouab: khen hov niven ettayout owoh et-ezmaro-out nem Isous Pi-Khristos pek-menrit en-shiri: nem Pi-Pnevma Ethouab.",

                ar_de: "Wa-hdina ela malakoutika lekay be-haza kama aydan fi kol shay2 yotamaggad wa yotabarak wa yortafa3 esmaka el-3azim el-qoddous fi kol shay2 karim wa mobarak ma3a Yasou3 el-Masih ebneka el-habib wal-Rouh el-Qoddous."
            },
            {
                id: 86,
                sectionTitle: {
                    de: "Einleitung des Gebets zum Brotbrechen",
                    ar: "مقدمه القسمه "
                },
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit euch allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲒ.",
                cop_de: "Ireni pasi.",
                ar_de: "Eirene pasi.",
            },
            {
                id: 87,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Ke to pnevmati sou."
            },
            {
                id: 88,
                speaker: "Priester",
                // Zusammengefügt aus den Bildern zur Danksagung und der Vorbereitung auf die Kommunion
                ar: "وأيضاً فلنشكر الله ضابط الكل، أبا ربنا وإلهنا ومخلصنا يسوع المسيح. لأنه جعلنا أهلاً الآن أن نقف في هذا الموضع المقدس ونرفع أيدينا إلى فوق ونخدم اسمه القدوس هو أيضاً فلنسأله أن يجعلنا مستحقين لشركة وصعود أسراره الإلهية غير المائتة.",

                de: "Wiederum lasst uns Dank sagen Gott, dem Allmächtigen, dem Vater unseres Herrn, Gottes und Erlösers Jesus Christus. Denn er machte uns würdig, an diesem heiligen Ort zu stehen, unsere Hände zu erheben und seinem heiligen Namen zu dienen. Ihn bitten wir auch, dass er uns würdig mache der Gemeinschaft und Erhebung Deines göttlichen, unsterblichen Sakramentes.",

                cop_ar: "بالين أون مارين شيب إهموت إنتطاف إم إفنوتى بى بانطوكراتور: إفيوت إم بينتشويس أووه بين نوتى أووه بين سوتير إيسوس بى إخرستوس: جى آفثيرين إبر إبنيمبشا أون تينو إى أوهرى إيراتين خين باى ما إثؤواب فاى أووه إيفاى إن نينجيج إى إبشوى أووه إى شمشي إمبيف ران إثؤواب إنتوف أون مارين تيهو إيروف هوبوس إنتيف آيتين إن إينيمبشا إنتى ميت أشفير نيم تى ميت آليمبسيس إنتى نيف ميستيريون إن نوتى أووه إن آثمو.",

                cop_cop: "Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲫⲛⲟⲩϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲫ̀ⲓⲱⲧ ⲙ̀ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϫⲉ ⲁϥⲑ̀ⲣⲉⲛⲉⲣⲉ̀ⲡⲛⲓⲙⲡϣⲁ ⲟⲛ ϯⲛⲟⲩ ⲉ̀ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ϧⲉⲛ ⲡⲁⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ: ⲟⲩⲟϩ ⲉ̀ϥⲁⲓ ⲛ̀ⲛⲉⲛϫⲓϫ ⲉ̀ⲉ̀ⲡϣⲱⲓ: ⲟⲩⲟϩ ⲉ̀ϣⲉⲙϣⲓ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲑⲟϥ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟϥ ϩⲱⲥ ⲛ̀ⲧⲉϥⲁⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲛⲓⲙⲡϣⲁ ⲛ̀ⲧⲉ ⲙⲉⲧⲁϣⲫⲏⲣ ⲛⲉⲙ ϯⲙⲉⲧⲁ̀ⲗⲏⲙⲯⲓⲥ ⲛ̀ⲧⲉ ⲛⲉϥⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲛⲟⲩϯ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲑⲙⲟⲩ.",

                cop_de: "Palin on maren-shephmot entotf em-Phnouti pi-Pantokrator: Phi-iot em-Pen-chois owoh Pen-nouti owoh Pen-sotir Isous Pi-Khristos: je aftheren-er-ep-nimpsha on tinou e-ohi eraten khen pai-ma ethouab phai: owoh e-phai en-nen-gig e-epshoi: owoh e-shemshi em-pef-ran ethouab: enthof on maren-tiho erof hos entef-aiten en-enimpsha ente met-ashphir nem ti-met-alimpsys ente nef-mysterion en-nouti owoh en-athmou.",

                ar_de: "Wa-aydan faly nashkor Allah dabet el-kol, aba Rabbina wa elahina wa mokhallesina Yasou3 el-Masih. Le-annaho ga3alana ahlan el-an an naqif fi haza el-mawda3 el-moqadas wa narfa3 aydiyana ela fawq wa nakhdom esmaho el-qoddous, howa aydan faly nas2alaho an yag3alana mostahiqqin le-sherikat wa so3oud asrarihi el-elahiya ghayr el-ma2ita."
            },
            {
                id: 89,
                speaker: "Volk",
                ar: "حقاً",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amen.",
                ar_de: " Amen."
            },
            {
                id: 90,
                speaker: "Priester",
                ar: "الجسد المقدس",
                de: "Der Heilige Leib.",
                cop_ar: "بي صوما إثؤواب.",
                cop_cop: "Ⲡⲓⲥⲱⲙⲁ ⲉⲑⲟⲩⲁⲃ.",
                cop_de: "Pi-soma ethouab.",
                ar_de: "El-gasad el-moqadas."
            },
            {
                id: 91,
                speaker: "Volk",
                ar: "نسجد لجسدك المقدس.",
                de: "Wir verbeugen uns vor deinem Heiligen Leib.",
                cop_ar: "تين أوؤشت إمبيك صوما إثؤواب.",
                cop_cop: "Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲡⲉⲕⲥⲱⲙⲁ ⲉⲑⲟⲩⲁⲃ.",
                cop_de: "Ten-ousht em-pek-soma ethouab.",
                ar_de: "Nasgodo le-gasadeka el-moqadas."
            },
            {
                id: 92,
                speaker: "Priester",
                ar: "والدم الكريم.",
                de: "Und dem kostbaren Blut.",
                cop_ar: "نيم بي إسنوف إت طايوت.",
                cop_cop: "Ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.",
                cop_de: "Nem pi-snof et-tayout.",
                ar_de: "Wal-dam el-karim."
            },
            {
                id: 93,
                speaker: "Volk",
                ar: "ولدمك الكريم.",
                de: "Und deinem kostbaren Blut.",
                cop_ar: "نيم بيك إسنوف إت طايوت.",
                cop_cop: "Ⲛⲉⲙ ⲡⲉⲕⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ.",
                cop_de: "Nem pek-snof et-tayout.",
                ar_de: "Wa-le-dameka el-karim."
            },
            {
                id: 94,
                speaker: "Priester",
                ar: "اللذان لمسيحه الضابط الكل الرب إلهنا.",
                de: "die seinem Christus, dem Allmächtigen, unserem Herrn und Gott eigen sind.",
                cop_ar: "انتي بيف اخرستوس انجي بي بانطوكراطور ابشويس بينوتي.",
                cop_cop: "Ⲛ̀ⲧⲉ ⲡⲉϥⲭ̀ⲣⲓⲥⲧⲟⲥ ⲛ̀ϫⲉ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡ̀ϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ.",
                cop_de: "Ente pef-Khristos enje pi-pantokrator epchois Pennouti.",
                ar_de: "Allazan li-masihihi el-dabet el-kol el-rabb ilahina."
            },
            {
                id: 95,
                speaker: "Diakon",
                ar: "آمين آمين صلوا.",
                de: "Amen. Amen. Betet.",
                cop_ar: "آمين آمين إبروس إفكسآستيه.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲡ̀ⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.",
                cop_de: "Amen amen prosev-xasthe.",
                ar_de: "Amen Amen Sallou."
            },
            {
                id: 96,
                speaker: "Volk",
                ar: "يارب ارحم.",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.",
                cop_de: "Kyrie eleyson.",
                ar_de: "Ya Rabb erham."
            },
            {
                id: 97,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Der Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 98,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan."
            },
            {
                id: 99,
                sectionTitle: {
                    de: "Gebete zum Brotbrechen",
                    ar: "القسمه"
                },
            },
            {
                id: 100,
                speaker: "Priester / Volk",
                // Zusammengefügt aus den Bildern für den Beginn und den Abschluss des Vaterunsers
                ar: "اللهم اجعلنا مستحقين أن نقول بشكر: أبانا الذى فى السموات ليتقدس اسمك ليأتى ملكوتك لتكن مشيئتك كما فى السماء كذلك على الأرض خبزنا كفافنا أعطينا اليوم وأغفر لنا ذنوبنا، كما نغفر نحن أيضاً للمذنبين إلينا. ولا تدخلنا في تجربة. لكن نجنا من الشرير. بالمسيح يسوع ربنا، لأن لك الملك والقوة والمجد إلى الأبد. آمين.",

                de: "Mache uns würdig in Dankbarkeit zu sprechen: Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme, dein Wille geschehe wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Durch Christus Jesus, unseren Herrn, denn dein ist das Reich und die Kraft und die Herrlichkeit in Ewigkeit. Amen.",

                cop_ar: "أري تين إن إمبشا إيجوس خين أو شيب إهموت: جيه بين يوت إت خين ني فيؤوي: ماريف طوفو إنجيه بيك ران. ماريس إي إنجيه تيك ميت أورو. بيتيه هنا ك ماريف شوبي: إم إفريتي خين إتفي نيم هيجين بي كاهي. بين أويك إنتيه راستي ميف نان إمفو أو. أووه كا ني إت إيرون نان إيفول: إم إفريتي هون إنتين كو إيفول إن ني إتيه أوؤن إنتان إيرو أو. أووه إمبير إنتين إيخون إي بيرازموس: أللا ناهمين إيفول ها بي بيت هو أو. خين بي إخرستوس إيسوس بين شويس. جيه ثوك تيه تي ميت أورو نيم تي جوم نيم بي أو أو شا إينيه. آمين.",

                cop_cop: "Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲙⲡϣⲁ ⲉ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ. Ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ. Ⲡⲉⲧⲉϩⲛⲁⲕ ⲙⲁⲣⲉϥϣⲱⲡⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ. Ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉ ⲣⲁⲥϯ ⲙⲏⲓϥ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ. Ⲟⲩⲟϩ ⲭⲁ ⲛⲏⲉⲧⲉⲣⲟⲛ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲫ̀ⲣⲏϯ ϩⲱⲛ ⲛ̀ⲧⲉⲛⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉⲧⲉ ⲟⲩⲟⲛ ⲛ̀ⲧⲁⲛ ⲉ̀ⲣⲱⲟⲩ. Ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ: ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ. Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ. Ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ. Ⲁ̀ⲙⲏⲛ.",

                cop_de: "Ari-ten en-empsha e-jos khen ou-shephmot: Je Peniot et-khen ni-phi-oui: Maref-touvo enje pek-ran. Mares-i enje tek-met-ouro. Pete-hnak maref-shopi: em-phriti khen et-phe nem hijen pi-kahi. Pen-oik ente rasti mif nan em-pho-ou. Owoh ka ni-et-eron nan evol: em-phriti hon enten-ko evol en-ni-ete ouon entan ero-ou. Owoh emper-enten e-khoun e-pirasmos: alla nahmen evol ha pi-pet-ho-ou. Khen Pi-Khristos Isous Pen-chois. Je thok te ti-met-ouro nem ti-jom nem pi-o-ou sha eneh. Amen.",

                ar_de: "Allahomma eg3alna mostaheqqin an naqoul be-shokr: Abana allazi fi al-samawat, le-yataqaddas esmoka, le-ya2ti malakoutoka, le-takon mashi2atoka, kama fi al-sama2 kazalika 3ala al-ard. Khobzana kafafana a3tina al-yawm, wa aghfir lana zonoubana, kama naghfir nahno aydan lil-moznebin elayna. Wa la todkhilna fi tagriba, laken naggena min al-sherrir. Bel-Masih Yasou3 Rabbina, le-anna laka al-molk wal-qowwa wal-magd ela al-abad. Amen."
            },
            {
                id: 101,
                sectionTitle: {
                    de: "Das Bekenntnis",
                    ar: "الاعتراف"
                },
                speaker: "Volk",
                ar: "بالمسيح يسوع ربنا.",
                de: "Durch Christus Jesus, unsern Herrn.",
                cop_ar: "خين بي إخرستوس إيسوس بين تشويس.",
                cop_cop: "Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.",
                cop_de: "Khen Pi-Khristos Isous Pen-chois.",
                ar_de: "Bel-Masih Yasou3 Rabbina."
            },
            {
                id: 102,
                speaker: "Diakon",
                ar: "احنوا رؤوسكم للرب.",
                de: "Neigt euer Haupt vor dem Herrn!",
                cop_ar: "طاس كيفالاس إيمون طو كيريو كليناتيه.",
                cop_cop: "Ⲧⲁⲥ ⲕⲉⲫⲁⲗⲁⲥ ⲩ̀ⲙⲱⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ ⲕⲗⲓⲛⲁⲧⲉ.",
                cop_de: "Tas kefalas ymon to kyrio klinate.",
                ar_de: "E7nou ro2ousakom lel-Rabb."
            },
            {
                id: 103,
                speaker: "Volk",
                ar: "أمامك يا رب (خاضعين وساجدين).",
                de: "Vor Dir, o Herr. (Wir sind dir ergeben und knien)",
                cop_ar: "إينوبيون صو كيريه.",
                cop_cop: "Ⲉⲛⲱⲡⲓⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ.",
                cop_de: "Enopion so Kyrie.",
                ar_de: "Amamaka ya Rabb."
            },
            {
                id: 104,
                speaker: "Diakon",
                ar: "ننصت بخوف الله آمين.",
                de: "Wir hören in Gottesfurcht zu. Amen.",
                cop_ar: "إبروس خومين ثيه أوميه طافوفو: آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ Ⲑⲉⲱ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ: Ⲁⲙⲏⲛ.",
                cop_de: "Epros khomin thie omieh tafovo: Amen.",
                ar_de: "Nonsit be-khawf Allah. Amen."
            },
            {
                id: 105,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 106,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan."
            },
            {
                id: 107,
                speaker: "Priester",
                ar: "أذكر يارب اجتماعاتنا باركها.",
                de: "Gedenke, o Herr, unserer Versammlung und segne sie.",
                cop_ar: "أرى إفميفئي إبشويس إن نين جينثؤوتى إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲛϫⲓⲛⲑⲱⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-phmevi Epchois en-nen-jin-thou-ti smou ero-ou.",
                ar_de: "Ozkor ya Rabb igtima3atana barikha."
            },
            {
                id: 108,
                speaker: "Diakon",
                ar: "خلصت حقاً، ومع روحك، ننصت بخوف الله.",
                de: "Amen erlöst. Und mit deinem Geiste. Wir hören in Gottesfurcht zu.",
                cop_ar: "سوتيس آمين كيه طو إبنيفماتي صو: ميه طافوفو ثيه إو بروس خومين.",
                cop_cop: "Ⲥⲱⲑⲏⲥ ⲁ̀ⲙⲏⲛ. Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ. Ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ Ⲑⲉⲟⲩ ⲡⲣⲟⲥⲭⲱⲙⲉⲛ.",
                cop_de: "Sotis Amen. Ke to pnevmati sou. Meta fovou Theou proschomen.",
                ar_de: "Khollesat haqqan, wa ma3a rouhika, nonsit be-khawf Allah."
            },
            {
                id: 109,
                speaker: "Volk",
                ar: "آمين (يارب ارحم.)3",
                de: "Amen. Herr erbarme Dich.(3)",
                cop_ar: "آمين (كيريه ليسون.)3",
                cop_cop: "Ⲁⲙⲏⲛ (Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) ⲅ̅.",
                cop_de: "Amen (Kyrie eleyson) 3.",
                ar_de: "Amen (Ya Rabb erham) 3."
            },
            {
                id: 110,
                speaker: "Priester",
                ar: "القدسات للقديسين مبارك الرب يسوع المسيح ابن الله وقدوس الروح القدس آمين",
                de: "Das Heilige den Heiligen. Gepriesen sei der Herr Jesus Christus, der Sohn Gottes. Heiligung ist der Heilige Geist.Amen.",
                cop_ar: "طا آجياتيس أجيس إفلوجيطوس كيريوس إيسوس إخرستوس إيوس ثيئو أجياسموس بنيفما أجيون آمين",
                cop_cop: "Ⲧⲁ ⲁ̀ⲅⲓⲁ ⲧⲟⲓⲥ ⲁ̀ⲅⲓⲟⲓⲥ: ⲉⲩⲗⲟⲅⲏⲧⲟⲥ Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲩⲓⲟⲥ Ⲑⲉⲟⲩ: ⲁ̀ⲅⲓⲁⲥⲙⲟⲥ Ⲡ̀ⲛⲉⲩⲙⲁ Ⲁ̀ⲅⲓⲟⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ta agia tois agiois: evlogitos Kyrios Isous Pi-Khristos Yios Theou: agiasmos Pnevma Agion amen.",
                ar_de: "El-qodassat lel-qaddisin mobarak el-Rabb Yasou3 el-Masih ibn Allah wa qoddous el-Rouh el-Qoddous Amen."
            },
            {
                id: 111,
                speaker: "Volk",
                ar: "واحد هو الآب القدوس، واحد هو الابن القدوس، واحد هو الروح القدس: آمين.",
                de: "Amen. Einer ist der Heilige Vater. Einer ist der Heilige Sohn. Einer ist der Heilige Geist. Amen.",
                cop_ar: "إس أو بان آجيوس باتير: إس أو بان آجيوس إيوس: إن طوبان آجيون إبنيفما: آمين.",
                cop_cop: "Ⲉⲓⲥ Ⲡⲁⲧⲏⲣ ⲁ̀ⲅⲓⲟⲥ: ⲉⲓⲥ Ⲩⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲉⲛ Ⲡ̀ⲛⲉⲩⲙⲁ Ⲁ̀ⲅⲓⲟⲛ: ⲁ̀ⲙⲏⲛ.",
                cop_de: "Es ou pan agios patir: es ou pan agios yios: en to pan agion pnevma: amen.",
                ar_de: "Wahed howa al-Ab al-Qoddous, wahed howa al-Ibn al-Qoddous, wahed howa al-Rouh al-Qoddous: Amen."
            },
            {
                id: 112,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 113,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan."
            },
            {
                id: 114,
                speaker: "Priester",
                ar: "جسد مقدس ودم كريم حقيقي ليسوع المسيح ابن إلهنا آمين",
                de: "Heiliger Leib und kostbares, wahres Blut Jesu Christi, des Sohnes unseres Gottes. Amen.",
                cop_ar: "سوما أجيون كى إيما تيميون آليثينون إيسو خرستو طو إيو طو ثيئو إيمون آمين",
                cop_cop: "Ⲥⲱⲙⲁ ⲁ̀ⲅⲓⲟⲛ ⲕⲉ ⲉ̀ⲙⲁ ⲧⲓⲙⲓⲟⲛ ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲧⲟⲩ Ⲩⲓⲟⲩ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲏ̀ⲙⲱⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Soma agion ke ema timion alithinon Isou Khristou tou yiou tou Theou imon amen.",
                ar_de: "Gasad moqaddas wa dam karim haqiqi le-Yasou3 el-Masih ibn ilahina amen."
            },
            {
                id: 115,
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amen.",
                ar_de: "Amen."
            },
            {
                id: 116,
                speaker: "Priester",
                ar: "مقدس وكريم جسد ودم حقيقي ليسوع المسيح ابن إلهنا آمين",
                de: "Heilig und kostbar sind der Leib und das wahre Blut Jesu Christi, des Sohnes unseres Gottes, Amen.",
                cop_ar: "أجيون تيمون سوما كى إيما اليثينوس إيسو خرستو طو إيو طو ثيئو إيمون آمين",
                cop_cop: "Ⲁ̀ⲅⲓⲟⲛ ⲧⲓⲙⲓⲟⲛ ⲥⲱⲙⲁ ⲕⲉ ⲉ̀ⲙⲁ ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲧⲟⲩ Ⲩⲓⲟⲩ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲏ̀ⲙⲱⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Agion timion soma ke ema alithinon Isou Khristou tou Yiou tou Theou imon amen.",
                ar_de: "Moqaddas wa karim gasad wa dam haqiqi le-Yasou3 el-Masih ibn ilahina amen."
            },
            {
                id: 117,
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amen.",
                ar_de: "Amen."
            },
            {
                id: 118,
                speaker: "Priester",
                ar: "جسد ودم عمانوئيل إلهنا هذا هو بالحقيقة آمين",
                de: "Der Leib und das Blut Emmanuels, unseres Gottes, dies ist es in Wahrheit. Amen.",
                cop_ar: "بي سوما نيم بي إسنوف إنتي إيمانوئيل بيننوتي فاي بي خين أو ميثمي آمين",
                cop_cop: "Ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ.",
                cop_de: "Pi-soma nem pi-snof ente Emmanouel Pen-nouti phai pe khen ou-methmi amen.",
                ar_de: "Gasad wa dam Emmanuel ilahina haza howa bel-haqiqa amen."
            },
            {
                id: 119,
                speaker: "Volk",
                ar: "حقاً أؤمن.",
                de: "Amen. Ich glaube",
                cop_ar: "آمين. تي ناهتي",
                cop_cop: "Ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ.",
                cop_de: "Amen: ti-nahti.",
                ar_de: "Haqqan O2men."
            },
            {
                id: 120,
                speaker: "Priester",
                // Das vollständige Bekenntnis, zusammengesetzt aus 7 Bildern
                ar: "أمين أمين أمين أومن أومن أومن واعترف إلى النفس الأخير أن هذا هو الجسد المحيي الذي أخذه ابنك الوحيد ربنا وإلهنا ومخلصنا يسوع المسيح من سيدتنا كلنا وملكتنا والدة الإله القديسة الطاهرة مريم وجعله واحد مع لاهوت بغير اختلاط ولا امتزاج ولا تغيير واعترف الاعتراف الحسن أمام بيلاطس البنطي وأسلمه عنا على خشبة الصليب المقدسة بإرادته وحده عنا كلنا بالحقيقة أؤمن أن لاهوته لم يفارق ناسوته لحظة واحدة ولا طرفة عين يعطى عنا خلاصاً وغفراناً للخطايا وحياة أبدية لمن يتناول منه أومن أومن أومن أن هذا هو بالحقيقة آمين.",

                de: "Amen, Amen, Amen. Ich glaube! Ich glaube! Ich glaube und bekenne bis zum letzten Atemzug, dass dies der lebensspendende Leib ist, der deinem eingeborenen Sohn, unserem Herrn, unserem Gott und unserem Erlöser Jesus Christus eigen ist. Er nahm ihn von unserer Herrin und unser aller Königin, der Mutter Gottes, der heiligen, vollkommen reinen Maria. Er machte ihn eins mit seiner Gottheit ohne Vermischung, ohne Verquickung und ohne Veränderung. Er legte das gute Bekenntnis vor Pontius Pilatus ab. Er gab ihn für uns an das Holz des Kreuzes, allein durch seinen eigenen Willen für uns alle. In Wahrheit glaube ich, dass seine Gottheit seine Menschheit keinen Moment lang und keinen einzigen Augenblick verlassen hat. Er wird hingegeben zu unserer Erlösung und zur Vergebung der Sünden und zum ewigen Leben derer, die an ihm Anteil haben. Ich glaube! Ich glaube! Ich glaube, dass dies Wahrheit ist. Amen.",

                cop_ar: "آمين آمين آمين تيناهتى تيناهتى تيناهتى أووه تيئير أومولوجين شابى نيفى إنخائية جى ثاى تى تيساريكس إنريف إيطا بيك مونوجينيس انشيرى بين شويس أووه بيننوتى أووه بينسوتير إيسوس بى اخرستوس تشيتس إيفول خين تينشويس إننيف تيرين تى ثيئوطوكوس إثؤواب تى أجيا ماريا آف أيس أنؤواى نيم تيفميثنوتى خين أوميت أتموجت نيم أوميت أتثوخ نيم أوميت أتشيفتى إى إفئير أومولوجين إنتى تى أومولوجيا إيثنانى ناهرين بونتيوس بيلاطوس أفتيس إى إهرى إيجون هيجين بى شى إثؤواب إنتى بى استافروس خين بيف أووش إممين إمموف إى إهرى إيجون تيرين أليثوس تيناهتى جى امبى تيفميثنوتى فورج إيتيفميت رومى ان أوسوسو انؤواوت أوذى أوريكى امفال إفتى امموس إيجون أن أو سوتى نيم أوكو إيفول إنتى نى نوفى نيم أو أونخ أن إينيه إن نيئثناتشى إيفول انخيتس تيناهتى تيناهتى تيناهتى جى ثاى تى خين أوميثمى آمين.",

                cop_cop: "Ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ ⲟⲩⲟϩ ϯⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ϣⲁ ⲡⲓⲛⲓϥⲓ ⲛ̀ϧⲁⲉ̀: ϫⲉ ⲑⲁⲓ ⲧⲉ ϯⲥⲁⲣⲝ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲑⲏⲉ̀ⲧⲁϥϭⲓⲧⲥ ⲛ̀ϫⲉ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ: ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ: ⲁϥⲁⲓⲥ ⲛ̀ⲟⲩⲁⲓ ⲛⲉⲙ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩϫⲧ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧⲑⲱϧ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ. Ⲁϥⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ϯⲟ̀ⲙⲟⲗⲟⲅⲓⲁ ⲉⲑⲛⲁⲛⲉⲥ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥⲧⲏⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ϩⲓϫⲉⲛ ⲡⲓϣⲉ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲧⲉ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲧⲏⲣⲉⲛ. Ⲁ̀ⲗⲏⲑⲱⲥ ϯⲛⲁϩϯ ϫⲉ ⲙ̀ⲡⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ ⲫⲱⲣϫ ⲉ̀ⲧⲉϥⲙⲉⲧⲣⲱⲙⲓ: ⲛ̀ⲟⲩⲥⲟⲥⲟⲩ ⲛ̀ⲟⲩⲱⲧ: ⲟⲩⲇⲉ ⲟⲩⲣⲓⲕⲓ ⲛ̀ⲃⲁⲗ. Ⲉϥϯ ⲙ̀ⲙⲟⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲁⲛ ⲟⲩⲥⲱϯ: ⲛⲉⲙ ⲟⲩⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲛⲉⲙ ⲟⲩⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ ⲛ̀ⲛⲏⲉⲑⲛⲁϭⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ. Ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ: ϫⲉ ⲑⲁⲓ ⲧⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ.",

                cop_de: "Amen amen amen ti-nahti ti-nahti ti-nahti owoh ti-er omologin sha-pi nifi en-kha-e-e je thai te ti-sarx en-ref-tan-kho. Pek-monogenis en-shiri pen-chois owoh pen-nouti owoh pen-sotir isous pi-khristos chi-ts evol khen ten-chois en-nib ti-ren. Ti-theotokos ethouab ti-agia maria af-ais en-ouai nem tef-met-nouti khen ou-met-at-moj-t nem ou-met-at-thokh nem ou-met-at-shiv-ti. E-af-er-omologin ente ti-omologia et-nane nahren pontios pilatos af-tis e-ehri egon hijen pi-she ethouab. Ente pi-stavros khen pef-ouosh em-min em-mof e-ehri egon ti-ren alethos ti-nahti je empi-tef-met-nouti forg e-tef-met-romi en-ou-soso en-ou-ot. Oude ou-riki em-val ef-ti emmos egon en-ou-soti nem ou-ko evol ente ni-novi nem ou-onkh en-eneh en-ni-ethna-chi evol en-khits. Ti-nahti ti-nahti ti-nahti je thai te khen ou-methmi amen.",

                ar_de: "Amen Amen Amen O2men O2men O2men wa a3tref ela al-nafas al-akhir anna haza howa al-gasad al-mohyi allazi akhazaho abnok al-wahid rabbuna wa ilahuna wa mokhallesuna Yasou3 el-Masih men sayedatuna kollona wa malikatuna walidat el-ilah al-qadisa al-tahira Maryam wa ga3alaho wahed ma3a lahout be-ghayr ekhtilat wa la emtizag wa la taghyir wa a3taraf al-e3traf al-hasan amam Pilatos al-bonti wa aslamaho 3anna 3ala khashabat al-salib al-moqadasa be-iradathu wahdahu 3anna kollona bel-haqiqa o2men anna lahoutaho lam yofareq nasoutaho lahza wahda wa la tarfata 3ayn yo3ta 3anna khalasan wa ghofranan lel-khataya wa hayah abadiya leman yatanawal menho O2men O2men O2men anna haza howa bel-haqiqa Amen."
            },
            {
                id: 121,
                speaker: "Diakon & Volk",
                // Reihenfolge: Amen -> Bittet -> Friede -> Betet -> Heilige
                ar: "آمين آمين آمين أومن أومن أومن أن هذا هو بالحقيقة آمين. اطلبوا عنا وعن كل المسيحيين الذين قالوا لنا من أجلهم أن نذكرهم في بيت الرب. سلام ومحبة يسوع المسيح معكم، رتلوا بنشيد هلليلويا. صلوا من أجل التناول باستحقاق من الأسرار المقدسة الطاهرة السمائية يارب ارحم.",

                de: "Amen, Amen, Amen. Ich glaube, ich glaube, ich glaube, dass dies wahrhaftig Wahrheit ist. Amen. Bittet für uns und für alle Christen, die uns gebeten haben, ihrer im Hause des Herrn zu gedenken. Der Friede und Liebe Jesu Christi seien mit euch. Singt Lob u Preis. Halleluja. Betet für die würdige Teilhabe an diesem himmlischen heiligen Sakrament. Herr erbarme Dich.",

                cop_ar: "آمين آمين آمين تي ناهتي تي ناهتي تي ناهتي جيه ثاي تيه خين أوميثمي آمين. طوبه إيه إهرى إيه جون نيم إيه جين نى إخرستيانوس نيفين إيه طافجوس نان إثفيتو: جيه آرى بين ميفئي خين إب إي إم إبتشويس. إيريني كيه آغابي إيسو إخرستو ميث إيمون إبصالتيه جو اللليلويا. إبروس إفخصاصتيه إبير تيس أكسياس ميه طالى إبسيه أوس أكرانطون كيه إيه بورانيون طون آجيون ميستيريون: كيريه ليسون.",

                cop_cop: "Ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ: ϫⲉ ⲑⲁⲓ ⲧⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ. Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϫⲟⲥ ⲛⲁⲛ ⲉⲑⲃⲏⲧⲟⲩ: ϫⲉ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ ϧⲉⲛ ⲡ̀ⲏⲓ ⲙ̀Ⲡ̀ϭⲟⲓⲥ. Ⲓⲣⲏⲛⲏ ⲕⲉ ⲁ̀ⲅⲁⲡⲏ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲙⲉⲑ̀ ⲩ̀ⲙⲱⲛ. Ⲩⲁⲗⲁⲧⲉ ϫⲱ Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ. Ⲡ̀ⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲁ̀ⲝⲓⲁⲥ ⲙⲉⲧⲁⲗⲏⲙⲯⲉⲱⲥ ⲧⲱⲛ ⲁ̀ⲭⲣⲁⲛⲧⲱⲛ ⲕⲉ ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲱⲛ ⲧⲱⲛ ⲁ̀ⲅⲓⲱⲛ ⲙⲩⲥⲧⲏⲣⲓⲱⲛ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.",

                cop_de: "Amen Amen Amen ti-nahti ti-nahti ti-nahti je thai te khen ou-methmi amen. Tobh e-ehri e-gon nem e-jen ni-khristianos niven etav-jos nan ethvitou: je ari-pen-mevi khen ep-i em-p-chois. Ireni ke agapi Isou Khristou meth imon psalate go Allelouia. Prosev-xasthe hyper tis axias meta-lim-pseos ton akhranton ke epouranion ton agion mystirion: Kyrie eleyson.",

                ar_de: "Amen Amen Amen O2men O2men O2men anna haza howa bel-haqiqa Amen. Otlobu 3anna wa 3an kol el-masihiyin allazin qalou lana men aglehom an nazkorohom fi bayt el-rabb. Salam wa mahabbat Yasou3 el-Masih ma3akom, rattilou be-nashid Hallelujah. Sallou men agl el-tanawol be-estehqaq men el-asrar el-moqadasa el-tahira el-sama2eya ya rabb erham."
            },
            {
                id: 122,
                speaker: "Volk",
                ar: "المجد لك يارب المجد لك.",
                de: "Ehre sei Dir, o Herr. Herr, Ehre sei Dir.",
                cop_ar: "ذوكصاصى كيريه ذوكصاصى.",
                cop_cop: "Ⲇⲟⲝⲁ ⲥⲟⲓ Ⲕⲩⲣⲓⲉ ⲇⲟⲝⲁ ⲥⲟⲓ.",
                cop_de: "Doxa si Kyrie doxa si.",
                ar_de: "El-magd laka ya Rabb, el-magd laka."
            },
            {
                id: 123,
                sectionTitle: {
                    de: "Psalm 150",
                    ar: "المزمور 150"
                },
                speaker: "Volk",
                ar: "سبحوا الله، في جميع قديسيه، هليلويا.",
                de: " Lobt Gott in seinem Heiligtum! Halleluja.",
                cop_ar: "إزمو إي إفنوتى خين نى إثؤواب تيرو إنتاف: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁϥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou e-Phnouti khen ni-ethouab tirou entaf: Allelouia.",
                ar_de: "Sabbihou Allah fi gami3 qadissih, Hallelujah."
            },
            {
                id: 124,
                speaker: "Volk",
                ar: "سبحوه في جلد قوته، هليلويا.",
                de: "Lobt ihn in seiner mächtigen Feste! Halleluja.",
                cop_ar: "إزمو إيروف خين بى تاجرو إنتيه تيفجوم: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉ ⲧⲉϥϫⲟⲙ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen pi-tajro ente tef-jom: Allelouia.",
                ar_de: "Sabbihouhou fi galad qowatih, Hallelujah."
            },
            {
                id: 125,
                speaker: "Volk",
                ar: "سبحوه على مقدرته، هليلويا.",
                de: "Lobt ihn für seine großen Taten! Halleluja.",
                cop_ar: "إزمو إيروف إهرى هيجين تيف ميت جوري: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof ehri hijen tef-met-jori: Allelouia.",
                ar_de: "Sabbihouhou 3ala maqdaratih, Hallelujah."
            },
            {
                id: 126,
                speaker: "Volk",
                ar: "سبحوه ككثرة عظمته، هليلويا.",
                de: "Lobt ihn in seiner gewaltigen Größe! Halleluja.",
                cop_ar: "إزمو إيروف كاتا إب أوشا إنتيه تيف ميت نيشتى: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲕⲁⲧⲁ ⲡ̀ⲁϣⲁⲓ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof kata ep-ashai ente tef-met-nishti: Allelouia.",
                ar_de: "Sabbihouhou kata kathrat 3azmatih, Hallelujah."
            },
            {
                id: 127,
                speaker: "Volk",
                ar: "سبحوه بصوت البوق، هليلويا.",
                de: "Lobt ihn mit dem Schall des Horns! Halleluja.",
                cop_ar: "إزمو إيروف خين أو إسمى إن سيلبينغوس: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen ou-smi en-salpingos: Allelouia.",
                ar_de: "Sabbihouhou be-sawt el-bouq, Hallelujah."
            },
            {
                id: 128,
                speaker: "Volk",
                ar: "سبحوه بمزمار وقيثارة، هليلويا.",
                de: "Lobt ihn mit Harfe und Zither! Halleluja.",
                cop_ar: "إزمو إيروف خين أو إبسالتيريون نيم أو كيثارا: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲓⲑⲁⲣⲁ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen ou-psaltirion nem ou-kithara: Allelouia.",
                ar_de: "Sabbihouhou be-mezmar wa qithara, Hallelujah."
            },
            {
                id: 129,
                speaker: "Volk",
                ar: "سبحوه بدفوف وصفوف، هليلويا.",
                de: " Lobt ihn mit Pauken und Reigen! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيم كيم نيم هان خورس: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kemkem nem han-khoros: Allelouia.",
                ar_de: "Sabbihouhou be-dofouf wa sofouf, Hallelujah."
            },
            {
                id: 130,
                speaker: "Volk",
                ar: "سبحوه بأوتار وأرغن، هليلويا.",
                de: "Lobt ihn mit Flöten und Saitenspiel! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كاب نيم أو أورغانون: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲁⲡ ⲛⲉⲙ ⲟⲩⲟⲣⲅⲁⲛⲟⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kap nem ou-organon: Allelouia.",
                ar_de: "Sabbihouhou be-awtar wa organ, Hallelujah."
            },
            {
                id: 131,
                speaker: "Volk",
                ar: "سبحوه بصنوج حسنة الصوت، هليلويا.",
                de: " Lobt ihn mit wohlklingenden Zimbeln! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيمفالون إن إيسيتو إيسمى: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉⲛⲉⲥⲉⲧⲟⲩⲥ̀ⲙⲏ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kimvalon en-esetou-smi: Allelouia.",
                ar_de: "Sabbihouhou be-sonoug hasanat el-sawt, Hallelujah."
            },
            {
                id: 132,
                speaker: "Volk",
                ar: "سبحوه بصنوج التهليل، هليلويا.",
                de: "Lobt ihn mit schallenden Zimbeln! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيمفالون إنتيه أو إيشميليل: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲛ̀ⲧⲉ ⲟⲩⲉϣⲗⲏⲗⲟⲩⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kimvalon ente ou-eshleloui: Allelouia.",
                ar_de: "Sabbihouhou be-sonoug el-tahlil, Hallelujah."
            },
            {
                id: 133,
                speaker: "Volk",
                ar: "كل نسمة فلتسبح اسم الرب إلهنا، هليلويا.",
                de: " Alles, was atmet, lobe den Namen des Herrn, unseres Gottes! Halleluja.",
                cop_ar: "نيفيفى نيفين مارو إزمو تيرو إي إفران إم إبشويس بين نوتى: الليلويا.",
                cop_cop: "Ⲛⲓϥⲉⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ: Ⲁ̅Ⲗ̅.",
                cop_de: "Nifeifi niben marousmou tirou e-phran em-Pchois pennouti: Allelouia.",
                ar_de: "Kol nasama feltosabbih ism el-Rabb ilahina, Hallelujah."
            },
            {
                id: 134,
                speaker: "Volk",
                ar: "المجد للآب والابن والروح القدس، هليلويا.",
                de: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. Halleluja.",
                cop_ar: "ذوكصا باترى نيم إيو نيم أجيو إبنوماتى: الليلويا.",
                cop_cop: "Ⲇⲟⲝⲁ Ⲡⲁⲧ̀ⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Doxa Patri ke Yio ke Agio Pnevmati: Allelouia.",
                ar_de: "El-magd lel-Ab wal-Ibn wal-Rouh el-Qodos, Hallelujah."
            },
            {
                id: 135,
                speaker: "Volk",
                ar: "الآن وكل أوان وإلى دهر الدهور آمين، هليلويا.",
                de: " Jetzt und immerdar und in Ewigkeit. Amen. Halleluja.",
                cop_ar: "كى نين كى آ إى كى إيستوس إي أوناس تون إي أونون آمين: الليلويا.",
                cop_cop: "Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲉⲓ ⲕⲉ ⲉⲓⲥ ⲧⲟⲩⲥ ⲁⲓⲱⲛⲁⲥ ⲧⲱⲛ ⲁⲓⲱⲛⲱⲛ: Ⲁ̀ⲙⲏⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Ke nin ke ai ke istous e-onas ton e-onon: Amin: Allelouia.",
                ar_de: "Al-an wa kol awan wa ila dahr el-dohour, Amin, Hallelujah."
            },
            {
                id: 136,
                speaker: "Volk",
                ar: "هليلويا، هليلويا، المجد لك يا إلهنا، هليلويا.",
                de: "Halleluja, Halleluja, Ehre sei Dir, unser Gott. Halleluja.",
                cop_ar: "الليلويا، الليلويا، ذوكصاصى أو ثيؤوس إيمون: الليلويا.",
                cop_cop: "Ⲁ̅Ⲗ̅ Ⲁ̅Ⲗ̅: Ⲇⲟⲝⲁ ⲥⲟⲓ ⲟ̔ Ⲑⲉⲟⲥ ⲏ̔ⲙⲱⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Allelouia, Allelouia: Doxa si o Theos imon: Allelouia.",
                ar_de: "Hallelujah, Hallelujah, el-magd laka ya ilahina, Hallelujah."
            },
            {
                id: 137,
                speaker: "Volk",
                ar: "هليلويا، هليلويا، المجد لإلهنا، هليلويا.",
                de: " Halleluja, Halleluja, Ehre sei unserem Gott. Halleluja.",
                cop_ar: "الليلويا، الليلويا، بى أواو إن بين نوتى بيه: الليلويا.",
                cop_cop: "Ⲁ̅Ⲗ̅ Ⲁ̅Ⲗ̅: Ⲡⲓⲱⲟⲩ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: Ⲁ̅Ⲗ̅.",
                cop_de: "Allelouia, Allelouia: Pi-o-ou em-pennouti pe: Allelouia.",
                ar_de: "Hallelujah, Hallelujah, el-magd le-ilahina, Hallelujah."
            },
        ],
    },

    // --- GREGORIOS LITURGIE (8ere8orios) ---
    gregorios: {
        title: {
            de: "Die Liturgie des Hl. Gregorios",
            ar: "القداس الغريغوري",
        },
        content: [
            {
                id: 1,
                speaker: "Priester",
                cop_de: "eSchliel",
                de: "Betet",
                ar: "صلوا",
                cop_cop: "; Sl/l",
                ar_de: "sallu",
                cop_ar: "إشلـــــــيل",
            },
            {
                id: 2,
                speaker: "Diakon",
                cop_de: "Epi pros-evkie es-tathiete.",
                de: "Erhebt euch zum Gebet",
                ar: "للصلاة قفوا",
                cop_cop: "",
                ar_de: "Lel-salah kefu",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه",
            },
            {
                id: 3,
                sectionTitle: {
                    de: "Das Versöhnungsgebet",
                    ar: "صلاة الصلح"
                },
                speaker: "Priester",
                cop_de: "Irienie pasi.",
                de: "Der Friede seit mit allen",
                ar: "السلام لجميعكم",
                cop_cop: "",
                ar_de: "Al-salam le gamy3ekom",
                cop_ar: "إيرينى باسى",
            },
            {
                id: 4,
                speaker: "Volk",
                cop_de: "Ke too epnewmati sou.",
                de: "Und mit deinem Geiste",
                ar: "ولروحك أيضا",
                cop_cop: "",
                ar_de: "Ua lero7eka aidan.",
                cop_ar: "كيه طو إبنفماتى سو",
            },
            {
                id: 5,
                speaker: "priester",
                cop_de: "Fie-etschop fie-enafschop fie-ethmien ewol scha eneh : pi-aidios ouoh en-omo-ousios ouoh ensen-ethronos ouoh eneschfier en-diemi-ourghos nem eFjoot. Fie-ete ethwe ou-metaghathos emmaw-ats : ewol-khen fie-ete nafschop an ak-ethrefschoopi enġe efroomi : ouoh ak-kaf khen piparadisos ente ep-ounof.Khen epġin-ethref-hei ze ewol hiten ti-apatie ente pi-gaġi nem ti-met-atsootem ensa teken-tolie ethouab ouoh e-ak-ouoosch e-aif em-weri ouoh e-enf ekhoun epiaxiooma ente schorp.Angelos an : ouze archieangelos: ouze patriarchies : ouze eprofieties empek-ten-houtou epenougai.Alla enthok khen oumet-atfoonh aktschisarx: ouoh ak-schoopi en-roomi : ouoh ak-ini emmon khen hoob niwen schaten ef-nowi emmaw-atf. Ak-schoopi nan emmesi-ties nem eFjoot ouoh ti-gin-ethmieti ente pi-thoom ak-bols ewol : ouoh ti-met-gaģi en-apas ak-scher-schoors. Ak-hootp enna-ep-kahi en-ani-fie-oui ouoh aker pi-esnaf en-ouai : e-ak-gook ewol entioikonomia khen et-sarx. Ouoh ek-nasche-nak e-eni-fie-oui sooma-tikoos : e-akmoh em-ep-tierf khen tek-meth-nouti. Nak-goo ennek-mathie-ties ethouab ouoh en-apos-tolos. Ge ta-hirienie titi emmos nooten : ta-hirienie anok ti-koo emmos nemooten. epschooi emmos pe Thai on ti-nou ari-ehmot emmos nan pen-nieb. ",
                de: "Der Du bist,der Du warst und der Du sein Wirst bis in Ewigkeit ,der Wesensgleiche,Mitthorneden und Gefährte des Schöpfers und Vaters Der Du aus alleiniger Güte den Menschen aus dem Nichts geschaffen hast und ihn ins Paradies der Freude gesetzt hast. Als er aber durch die Täuschung des Feindes und den Ungehorsam gegen Dein heiliges Gebot fiel  und Du ihn in die frühere Würde bringen wolltest hast Du weder einem Engel ,noch einem Erzengel,noch einem propheten unsere Erlösung  anvertraut. Sondern du hast selber ohne Veränderung Fleisch angenommen und bist Mensch geworden, und bist uns in allem gleich geworden außer allein in der Sünde Du wurdest uns ein Mittler bei dem Vater, du hast die trennende Wand niedergerissen und die alte Feindschaft aufgehoben.Du hast  die Irdischen mit den Himmlischen versöhnt und die zwei eins gemacht, nachdem du die Heilsordnung im Fleisch vollendet hast. Als du empor Himmel leiblich aufgefahren bist ,hast du alles mit deiner Gottheit erfüllt. Du hast zu deinen heiligen Jüngern und Aposteln gesagt Meinen Frieden gebe ich euch ,meinen Frieden hinterlasse ich euch. Gewähre ihn uns , unser Herr. Reinige uns von aller Befleckung, allem Betrug, aller Heuchelei, jeder listigen Tat und vom Denken an das Böse, das den Tod nach sich zieht.",
                ar: "أيها الكائن الذى كان الدائم إلي الأبد، الذاتي والمساوي والجليس والخالق الشريك مع الآب، الذى من أجل الصلاح وحده مما لم يكن كونت الانسان وجعلته في فردوس النعيم وعندما سقط بغواية العدو ومخالفة وصيتك المقدسة وأردت أن تجدده وترده إلي رتبته الأولى لا ملاك ولا رئيس ملائكة ولا رئيس آباء ولا نبياً ائتمنته على خلاصنا . بل أنت بغير استحالة تجسدت وتأنست وشابهتنا في كل شيء ما خلا الخطيئة وحدها وصرت لنا وسيطاً لدى الآب، والحاجز المتوسط نقضته والعداوة القديمة هدمتها وأصلحت الأرضيين مع السمائيين، وجعلت الأثنين واحداً، وأكملت التدبير بالجسد وعند صعودك إلي السموات جسدياً إذ ملأت الكل بلاهوتك قلت لتلاميذك ورسلك القديسين سلامى أعطيكم سلامى أنا أترك لكم، هذا أيضاً الآن أنعم به علينا يا سيدنا طهرنا من كل دنس، ومن كل غش، ومن كل رياء، ومن كل شر، ومن كل مكيدة، ومن تذكار الشر الملبس الموت.",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 6,
                speaker: "Diakon",
                cop_de: "",
                de: "Betet für den vollkommenen Frieden, für die Liebe und die apostolischen reinen Küsse.",
                ar: "صلوا من أجل السلام الكامل والمحبة والقبلة الطاهرة الرسولية",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إبروس افكصاستيه إي برتيس تيه لياس إيرينيس كيه آغابيس كيه طون آجيون إسباسمون طون أبوسطولون",
            },
            {
                id: 7,
                speaker: "Volk",
                cop_de: "",
                de: "Herr erbarme dich",
                ar: "يارب ارحم ",
                cop_cop: "",
                ar_de: "",
                cop_ar: "كيريه ليسون",
            },
            {
                id: 8,
                speaker: "Priester",
                cop_de: "",
                de: "Mach uns  alle würdig, o Herr , einander mit  einem reinen Kuss zu grüßen Damit wir ,ohne uns Verurteilung einzuhandeln,  deine unsterblichen und himmlischen Gaben erlangen durch deine Gnade und das Wohlgefallen deines guten Vaters und das Wirken deines heiligen Geistes, denn du bist Versorgen und Spender aller Güter",
                ar: "واجعلنا مستحقين كلنا يا سيدنا أن نقبل بعضنا بعضاً بقبلة طاهرة، لنتناول بغير انطراح في الحكم من موهبتك غير المائتة السمائية، بنعمتك ومسرة أبيك الصالح وفعل روحك القدوس، لأنك أنت الرازق ومُعطى جميع الخيرات.",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 9,
                speaker: "Diakon",
                cop_de: "",
                de: "Küsst einander mit einem heiligen Kuss. (Herr erbarme Dich)* 3 Ja o Herr Jesus Christus, Sohn Gottes, erhöre uns und erbarme Dich unser. Tretet heran nach der Vorschrift, steht in Ehrfurcht und schaut nach Osten. Wir hören.",
                ar: ".قبلوا بعضكم بعضاً بقبلةٍ مقدسة. (يارب ارحم)* ۳ نعم يارب الذي هو يسوع المسيح ابن الله الحي، اسمعنا وارحمنا. تقدموا تقدموا تقدموا على الرسم، قفوا برعدة، والي الشرق أنظروا. ننصت",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أسـپـاذسـتي ألليلوس إن فـيلـيـمـاتی  آجـيو. (كيريي إليسوس) * ۳ نای كيريي إيتي فای پي إيسـوس پي إخـرسـتـوس إبشير إم إفنوتى سوتيم إيرون أووه ناي نان. إبروسفرين كاطا إطربو إستـاثيتي كـاطـا إطرومـوايس أناطولاس إفليـبساتـي إبروس خـومين. ",
            },
            {
                id: 10,
                sectionTitle: {
                    de: "Durch die Fürsprachen",
                    ar: "بشفاعات"
                },
                speaker: "Volk",
                cop_de: "Hiten ni-presvia ente ti-theotokos eth-ouab Maria: Ep-schois ari-hmot nan em-pi-ko ewol ente nen-novi. Ten-u-oscht emmok o Pi-Christos: nem Pek-yot en-agathos: nem Pi-pnevma eth-ouab: dsche (ak-i / ak-tonk) ak-soti emmon. Eleos irinis thisia eneseos.",
                de: "Durch die Fürsprachen der Mutter Gottes, der Heiligen Maria, vergib uns, o Herr, unsere Sünden durch Deine Gnade. Wir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist, denn du bist (auferstanden/gekommen) und hast uns erlöst. Erbarmen des Friedens, Opfer des Lobes.",
                ar: "بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لأنك (أتيت/قُمت) وخلصتنا رحمة السلام ذبيحة التسبيح",
                cop_cop: "Ϩⲓⲧⲉⲛ ⲛⲓⲡⲣⲉⲥⲃⲓⲁ ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ: Ⲡϭⲟⲓⲥ ⲁⲣⲓϩⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ. Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ (ⲁⲕⲓ̀ / ⲁⲕⲧⲱⲛⲕ) ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. Ⲉⲗⲉⲟⲥ ⲓⲣⲓⲛⲏⲥ ⲑⲩⲥⲓⲁ ⲉⲛⲉⲥⲉⲱⲥ.",
                ar_de: "Bi-schafa-at walidat el-ilah el-kiddisa Mariam, ya Rab anam lana bi-maghfiret chatayana. Nasgud laka ayuha el-Massih, ma abika el-saleh, wa-ruh el-kudus, lianaka (atayta / kumta) wa challastana. Rahmatu es-salam, sabichat et-tasbih.",
                cop_ar: "هيتين نيه إبريسفيا إنتيه تى ثيه أوطوكوس إثؤواب ماريا: إبتشويس آرى إهموت نان إمبى كو إيفول إنتيه نين نوفي. تين أوأوشت إمموك أو بخرستوس: نيم بيك يوت إن آغاثوس: جيه (آك إي/أكطونك) أكسوتي إممون: إيه ليه أوس إيرينيس ثي سيا إيه نيه ثيه أوس",
            },
            {
                id: 11,
                speaker: "Priester",
                cop_de: "I agapi tu Theu ke Patros: ke i charis tu Monogenus. Iu Kiriu de ke Theu: ke Sotiros imon Isu Christu. Ke i kinonia: ke i dorea tu Agiu Pnevmatos: i i meta panton imon.",
                de: "Die Liebe Gottes des Vaters und die Gnade seines einzig geborenen Sohnes, unseres Herrn und Gottes und Erlösers Jesus Christus. Und die Gemeinschaft und die Gabe des Heiligen Geistes sei mit euch allen.",
                ar: "محبة الله الآب ونعمة الابن الوحيد الجنس ربنا وإلهنا ومخلصنا يسوع المسيح وشركة وموهبة الروح القدس تكون مع جميعكم",
                cop_cop: "Ⲏ̀ⲁ̀ⲅⲁⲡⲏ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲕⲉ Ⲡⲁⲧⲣⲟⲥ: ⲕⲉ ⲏ̀ⲭⲁⲣⲓⲥ ⲧⲟⲩ Ⲙⲟⲛⲟⲅⲉⲛⲟⲩⲥ. Ⲩⲓⲟⲩ: Ⲕⲩⲣⲓⲟⲩ ⲇⲉ ⲕⲉ Ⲑⲉⲟⲩ: ⲕⲉ Ⲥⲱⲧⲏⲣⲟⲥ ⲏ̀ⲙⲱⲛ Ⲓⲏⲥⲟⲩ Ⲭⲣⲓⲥⲧⲟⲩ. Ⲕⲉ ⲏ̀ⲕⲟⲓⲛⲱⲛⲓⲁ: ⲕⲉ ⲏ̀ⲇⲱⲣⲉⲁ̀ ⲧⲟⲩ Ⲁ̀ⲅⲓⲟⲩ Ⲡⲛⲉⲩⲙⲁⲧⲟⲥ: ⲏ̀ⲏ̀ ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ ⲩ̀ⲙⲱⲛ.",
                ar_de: "Mahabat Allah el-Ab wa ni3mat el-Ibn el-wahid el-ghens. Rabuna wa Ilahuna wa Muchallisuna Yasu el-Massih. Wa sharikat wa mauhibat er-Ruh el-Kudus takun ma3a gami3ikum.",
                cop_ar: "إي أغابي تو ثيئو كي باتروس كي إيخاريس تو مونوجينيس. إيو كيرِيو ذي كي ثيئو كي سوتيروس إيمون إيسو خريستو. كي إي كينونيا كي إي ذوريئا تو أجيو بنيڤماتوس، إي إي ميتا بانطون إيمون",
            },
            {
                id: 12,
                speaker: "Volk",
                cop_de: "Ke meta tu pnevmatos su.",
                de: "Und mit deinem Geiste.",
                ar: "ومع روحك أيضاً",
                cop_cop: "Ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ.",
                ar_de: "Wa ma3a ruhika aydan.",
                cop_ar: "كيه ميه طا طو إبنفما طوسو",
            },
            {
                id: 13,
                speaker: "Priester",
                cop_de: "Ano imon tas kardias.",
                de: "Erhebt Eure Herzen !",
                ar: "إرفعوا قلوبكم.",
                cop_cop: "Ⲁⲛⲱ ⲏ̀ⲙⲱⲛ ⲧⲁⲥ ⲕⲁⲣⲇⲓⲁⲥ.",
                ar_de: "Irfa3u kulubakum.",
                cop_ar: "آنو إيمون طاذكارذِياس.",
            },
            {
                id: 14,
                speaker: "Volk",
                cop_de: "Echomen pros ton Kirion.",
                de: "Wir haben sie beim Herrn.",
                ar: "هي عند الرب.",
                cop_cop: "Ⲉⲭⲟⲙⲉⲛ ⲡⲣⲟⲥ ⲧⲟⲛ Ⲕⲩⲣⲓⲟⲛ.",
                ar_de: "Hiya 3inda er-Rab.",
                cop_ar: "إيه خومين إبروس طون كيريون.",
            },
            {
                id: 15,
                speaker: "Priester",
                cop_de: "Efcharistisomen to Kirio.",
                de: "Lasst uns dem Herrn danken.",
                ar: "فلنشكر الرب.",
                cop_cop: "Ⲉⲩⲭⲁⲣⲓⲥⲧⲏⲥⲱⲙⲉⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ.",
                ar_de: "Fal-nashkur er-Rab.",
                cop_ar: "إيفخاريستى صومين طو كيريو.",
            },
            {
                id: 16,
                speaker: "Volk",
                cop_de: "Axion ke dikeon.",
                de: "Würdig und recht.",
                ar: "مستحق وعادل.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ.",
                ar_de: "Mustahakk wa 3adel.",
                cop_ar: "أكسيون كيه ذى كيه أون.",
            },
            {
                id: 17,
                speaker: "Priester",
                cop_de: "Axion ke dikeon: axion ke dikeon: axion ke dikeon. Efemepsha den u-methmi uoh u-dikeon pe: e-hos erok: e-smu erok: e-schemschi mmok: e-u-oscht mmok: e-ti-o-u nak. Pi-uai em-mauatf en-alithinos: Pi-nuti pi-mai-romi. Pi-at-sadschi emmof: pi-ath-nau erof: pi-at-schopf: pi-at-archi: pi-scha eneh: pi-at-snu: pi-at-osch erof: pi-at-schbet-thoutf: pi-at-fonh: pi-ref-thamio ente ep-tirf: pi-ref-sot ente u-on niben. Phi-et-ko ebol en-nen-nobi: phi-et-soti em-pen-onch ebol chen ep-tako: phi-et-ti-klom edjon chen han-nai nem han-met-schenhit. Enthok pe etu-hos erok endje ni-angelos: etu-u-oscht emmok endje ni-archi-angelos. Enthok pe etu-smu erok endje ni-archi: et-osch u-bek endje ni-met-tshois. Enthok pe etere ni-exusia djo em-pek-o-u. Enthok pe etere ni-thronos u-orp nak ep-schoi em-pi-taio. Han-an-scho en-scho es-ohi eratu erok: han-thba en-thba se-ini nak e-chun em-pi-schemschi. Enthok pe etu-smu erok endje ni-ath-nau er-wo-u. Enthok pe etu-u-oscht emmok endje ni-eth-u-onh ebol. Ev-iri tiru em-pek-sadji pen-nib.",
                de: "Würdig und recht, würdig und recht, Es ist in Wahrheit Würdig und recht . dich zu Loben, dir zu huldigen, dir zu dienen, dich anzubeten, dich zu verherrlichen, du Einziger, allein Wahrhaftiger, Gott, Menschenliebender. Der du Unausspechlicher Unsichtbarer , Unbeschränkbarer, ohne Anfang, Ewiger, Zeitloser, Unmeßbarer, Unerforschlicher, Unwandelbarer, Schöpfer des Alls, Retter eines jeden bist. Der du unsere Sünden vergibst, der unser Leben Vor dem Untergang rettet ,der uns mit Erbarmen und Barmherzigkeit Krönt Du bist der , dem die Engel Lobsingen und den die Erzengel anbeten. Du bist der ,den die Mächt preisen und dem die Herrscharen zurufen. Du bist der , dessen Ehre die Gewalten Verkünden. Du bist der , dem die Throne die Ruhm emporsenden Tausende und Abertausende stellen sich vor dir auf, Zehntausende und die Aberzehntausende dienen dir. Du bist der, den die Unsichtbaren preisen. Du bist der ,den die sichtbaren anbeten. Indem sie alle deine Befehle ausführen, unser Herr.",
                ar: "مستحق وعادل. مستحق وعادل. مستحق وعادل. مستحق بالحقيقة وعادل. أن نسبحك ونباركك ونخدمك ونسجد لك ونمجدك. أيها الواحد وحده الحقيقي الله محب البشر الذي لا ينطق به، غير المرئي، غير المحوى، غير المبتدئ، الأبدي، غير الزمني، الذي لا يُحد غير المفحوص، غير المستحيل، خالق الكل، مخلص الجميع، غافر خطايانا. مُنقذ حياتنا من الفساد، مُكللنا بالمراحم والرأفات. أنت الذي تُسبحك الملائكة، وتسجد لك رؤساء الملائكة. أنت الذي تباركك الرؤساء، وتصرخ نحوك الأرباب، أنت الذي تنطق السلاطين بمجدك. أنت الذي ترسل لك الكراسي الكرامة. ألوف ألوف وقوفٌ قدامك، وربوات ربوات يقدمون لك الخدمة. أنت الذي يباركك غير المرئيين، وأنت الذي يسجدون لك الظاهرون، ويصنعون كلهم كلمتك يا سيدنا.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ. Ϥⲉⲙⲡϣⲁ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲟⲩⲟϩ ⲟⲩⲇⲓⲕⲉⲟⲛ ⲡⲉ: ⲉ̀ϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲉ̀ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲉ̀ϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ: ⲉ̀ⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ: ⲉ̀ϯⲱⲟⲩ ⲛⲁⲕ. Ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: Ⲫⲛⲟⲩϯ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲡⲓⲁⲧⲥⲁϫⲓ ⲙ̀ⲙⲟϥ: ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲡⲓⲁⲧϣⲟⲡϥ: ⲡⲓⲁⲧⲁⲣⲭⲏ: ⲡⲓϣⲁ ⲉ̀ⲛⲉϩ: ⲡⲓⲁⲧⲥⲛⲟⲩ: ⲡⲓⲁⲧⲱϣ ⲉ̀ⲣⲟϥ: ⲡⲓⲁⲧϣⲃⲉⲧⲑⲱⲧϥ: ⲡⲓⲁⲧϥⲟⲛϩ: ⲡⲓⲣⲉϥⲑⲁⲙⲓⲟ ⲛ̀ⲧⲉ ⲡ̀ⲧⲏⲣϥ: ⲡⲓⲣⲉϥⲥⲱϯ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ. Ⲫⲏⲉⲧⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲛⲟⲃⲓ: ⲫⲏⲉⲧⲥⲱϯ ⲙ̀ⲡⲉⲛⲱⲛϧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡ̀ⲧⲁⲕⲟ: ⲫⲏⲉⲧϯⲕⲗⲟⲙ ⲉ̀ϫⲱⲛ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲟⲩϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ: ⲉⲧⲟⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲟⲩⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲁⲣⲭⲏ: ⲉⲧⲱϣ ⲟⲩⲃⲏⲕ ⲛ̀ϫⲉ ⲛⲓⲙⲉⲧϭⲟⲓⲥ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲉⲣⲉ ⲛⲓⲉⲝⲟⲩⲥⲓⲁ ϫⲱ ⲙ̀ⲡⲉⲕⲱⲟⲩ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲉⲣⲉ ⲛⲓⲑⲣⲟⲛⲟⲥ ⲟⲩⲱⲣⲡ ⲛⲁⲕ ⲉ̀ⲡϣⲱⲓ ⲙ̀ⲡⲓⲧⲁⲓⲟ. Ϩⲁⲛⲁⲛϣⲟ ⲛ̀ϣⲟ ⲉⲥⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲉ̀ⲣⲟⲕ: ϩⲁⲛⲑⲃⲁ ⲛ̀ⲑⲃⲁ ⲥⲉⲓⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲙ̀ⲡⲓϣⲉⲙϣⲓ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲟⲩⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲟⲩⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲛ̀ϫⲉ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲉⲩⲓⲣⲓ ⲧⲏⲣⲟⲩ ⲙ̀ⲡⲉⲕⲥⲁϫⲓ ⲡⲉⲛⲛⲏⲃ.",
                ar_de: "Mustahikun wa 3adil. Mustahikun wa 3adil. Mustahikun wa 3adil. Mustahikun bil-hakika wa 3adil. An nusabbihaka wa nubarikaka wa nachdimaka wa nasgud laka wa numaggidak. Ayuha el-wahed wahdahu el-hakiki Allah muhib el-bashar, allazi la yuntak bihi, gheir el-mar-i, gheir el-muhwa, gheir el-mubtadi, el-abadi, gheir el-zamani, allazi la yuhad, gheir el-mafhous, gheir el-mustahil, chalik el-kol, muchallis el-gamie, ghafer chatayana. Munkiz hayatina min el-fasad, mukalliluna bil-marahim wal-ra'afat. Anta allazi tusabbihuka el-malaika, wa tasgud laka ro'asa el-malaika. Anta allazi tubarikuka el-ro'asa, wa tasruch nahwaka el-arbab, anta allazi tantik el-salatin bi-magdik. Anta allazi tursil laka el-karasi el-karama. Olof olof wokuf kuddamak, wa ribawat ribawat yukaddimuna laka el-chidma. Anta allazi yubarikuka gheir el-mar-ieen, wa anta allazi yasgudoun laka el-zahiroun, wa yasnaoun kullahum kalimatak ya sayidana.",
                cop_ar: "أكسيون كي ديكاؤون: أكسيون كي ديكاؤون: أكسيون كي ديكاؤون. إفشيمبشا خين أوميثمي أووه أوديكاؤون بي: إيه هوس إيروك: إيه إسمو إيروك: إيه شيمشي إمموك: إيه أوأوشت إمموك: إيه تي أو أو ناك. بي أوواي إممافاتس إن أليثينوس: أفنوتي بي ماي رومي. بي أت ساجي إموف: بي أثناف إيروف: بي أت شوبف: بي أت أرشي: بي شا إينيه: بي أت سنو: بي أت أوش إيروف: بي أت شبيت ثووتف: بي أت فون: بي ريف ثاميو إنتيه إبتيرف: بي ريف سوتي إنتيه أوأون نيفين. في إت كو إيفول إن نين نوفي: في إت سوتي إم بين أونخ إيفول خين إبتاكو: في إت تي كلوم إيجون خين هان ناي نيم هان ميت شينهيت. إنثوك بي إيتو هوس إيروك إنجيه ني أنجيلوس: إيتو أوأوشت إمموك إنجيه ني أرشي أنجيلوس. إنثوك بي إيتو إسمو إيروك إنجيه ني أرشي: إت أوش أوفيك إنجيه ني ميت تشويس. إنثوك بي إتيريه ني إكسوسيا جو إمبيك أو أو. إنثوك بي إتيريه ني ثرونوس أوأورب ناك إي إبشوي إمبي طايو. هان أن شو إن شو إس أوهي إيراتو إيروك: هان ثفا إن ثفا سي إيني ناك إي خون إمبي شيمشي. إنثوك بي إيتو إسمو إيروك إنجيه ني أثناف إيرو أو. إنثوك بي إيتو أوأوشت إمموك إنجيه ني إث أوأونه إيفول. إف إيري تيرو إمبيك ساجي بين نيب.",
            },
            {
                id: 18,
                speaker: "Diakon",
                cop_de: "I kathimeni anastite.",
                de: "Wer sitzt, stehe auf!",
                ar: "أيها الجلوس قفوا",
                cop_cop: "Ⲓ ⲕⲁⲑⲏⲙⲉⲛⲓ ⲁ̀ⲛⲁⲥⲧⲏⲧⲉ.",
                ar_de: "Ayuha el-golos kefu.",
                cop_ar: "إي كثيميني أناستيتي.",
            },
            {
                id: 19,
                speaker: "Priester",
                cop_de: "Phi-et-shop Ph-nib ep-shois ef-nuti en-ta-phmi: ebol chen u-nuti en-ta-phmi. Phi-etaf-u-onh nan ebol em-pho-u-oini em-phiot. Phi-etaf-er-hmot nan em-pi-emi em-mi ente pi-pnevma eth-uab. Phi-etaf-u-onh nan ebol em-pai-nishti em-mistirion ente ep-onch. Phi-etaf-tahro en-ti-met-ref-ohi e-ratf ente pi-choros ente ni-asomatos chen ni-romi. Phi-etaf-ti en-ni-et-hidjen pi-kahi en-ti-met-ref-hos ente ni-seraphim. Tshi en-toten hon en-ten-smi nem ni-ath-nau er-o-u. Op-ten nem ni-dynamis et-chen ni-fi-o-ui. Maren-djos hon nem ni-ete em-mau: e-an-hi-wi sa-bol em-mon em-mev-i niben ente ni-logismos en-a-topon. Nten-osh ebol en-ni-enare ni-ete em-mau ta-o-uo em-mo-u: chen han-smi en-at-khar-o-u: nem han-rof en-ath-munk: uoh enten-smu e-tek-met-nishti.",
                de: "Der Du bist, Meister, Herr, wahrer Gott von wahrem Gott. Der du uns das Licht Des Vaters geoffenbart hast. Der du uns die wahrhafte Erkenntnis des Heiligen Geistes geschenkt hast. der Du uns dieses große sakrament des Lebens geoffenbart hast. Der du den Chor der Unleiblichen unter den Menschen aufgestellt hast. Der du denen , die auf der Erde sind, den Seraphims-lobgesang gegeben hast, nimm auch von uns unsere Stimme mit den Unsichtbaren an , zähle uns zu den himmlischen Kräften . Lasst uns mit jeden sagen, nachdem wir jeden unpassenden bösen Gedanken abgelegt haben. Und aufrufen was jene mit nimmer schweigenden Stimmen und mit nie stillen Mündern verkünden und Deine Größe preisen.",
                ar: "أيها الكائن السيد الرب، الإله الحق من الإله الحق الذي أظهر لنا نور الآب، الذي انعم علينا بمعرفة الروح القدس الحقيقية. الذي أظهر لنا هذا السر العظيم الذي للحياة، الذي ثبت قيام صفوف غير المتجسدين في البشر، الذي أعطى الذين على الأرض تسبيح السيرافيم. اقبل منا نحن أيضاً أصواتنا مع غير المرئيين. احسبنا مع القوات السمائية. ولنقل نحن أيضاً مع أولئك، إذ قد طرحنا عنا كل أفكار الخواطر الشريرة، ونصرخ بما يرسله أولئك، بأصوات لا تسكت، وأفواه لا تفتر، ونبارك عظمتك.",
                cop_cop: "Ⲫⲏⲉⲧϣⲟⲡ Ⲫⲛⲏⲃ Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲁⲫⲙⲏⲓ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲛⲟⲩϯ ⲛ̀ⲧⲁⲫⲙⲏⲓ. Ⲫⲏⲉⲧⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲙ̀ⲫⲟⲩⲱⲓⲛⲓ ⲙ̀Ⲫⲓⲱⲧ. Ⲫⲏⲉⲧⲁϥⲉⲣϩⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲓⲉⲙⲓ ⲙ̀ⲙⲏⲓ ⲛ̀ⲧⲉ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ. Ⲫⲏⲉⲧⲁϥⲟⲩⲱⲛϩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲁⲓⲛⲓϣϯ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲧⲉ ⲡⲱⲛϧ. Ⲫⲏⲉⲧⲁϥⲧⲁϫⲣⲟ ⲛ̀ϯⲙⲉⲧⲣⲉϥⲟϩⲓ ⲉ̀ⲣⲁⲧϥ ⲛ̀ⲧⲉ ⲡ̀ⲭⲟⲣⲟⲥ ⲛ̀ⲧⲉ ⲛⲓⲁ̀ⲥⲱⲙⲁⲧⲟⲥ ϧⲉⲛ ⲛⲓⲣⲱⲙⲓ. Ⲫⲏⲉⲧⲁϥϯ ⲛ̀ⲛⲏⲉⲧϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲛ̀ϯⲙⲉⲧⲣⲉϥϩⲱⲥ ⲛ̀ⲧⲉ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ. Ϭⲓ ⲛ̀ⲧⲟⲧⲉⲛ ϩⲱⲛ ⲛ̀ⲧⲉⲛⲥⲙⲏ ⲛⲉⲙ ⲛⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ. Ⲟⲡⲧⲉⲛ ⲛⲉⲙ ⲛⲓⲇⲩⲛⲁⲙⲓⲥ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀. Ⲙⲁⲣⲉⲛϫⲟⲥ ϩⲱⲛ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ: ⲉ̀ⲁⲛϩⲓⲟⲩⲓ̀ ⲥⲁⲃⲟⲗ ⲙ̀ⲙⲟⲛ ⲙ̀ⲙⲉⲩⲓ̀ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲗⲟⲅⲓⲥⲙⲟⲥ ⲛ̀ⲁ̀ⲧⲟⲡⲟⲛ. Ⲛ̀ⲧⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉ̀ⲛⲁⲣⲉ ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ ⲧⲁⲟⲩⲟ̀ ⲙ̀ⲙⲱⲟⲩ: ϧⲉⲛ ϩⲁⲛⲥⲙⲏ ⲛ̀ⲁⲧⲭⲁⲣⲱⲟⲩ: ⲛⲉⲙ ϩⲁⲛⲣⲱϥ ⲛ̀ⲁⲑⲙⲟⲩⲛⲕ: ⲟⲩⲟϩ ⲛ̀ⲧⲉⲛⲥⲙⲟⲩ ⲉ̀ⲧⲉⲕⲙⲉⲧⲛⲓϣϯ.",
                ar_de: "Ayuha el-ka-en el-sayed el-rab, el-ilah el-hak min el-ilah el-hak, allazi azhara lana nour el-ab. Allazi an3am 3alayna bi-ma3-rifat el-rouh el-kudus el-hakikia. Allazi azhara lana haza el-sir el-3azim allazi lil-hayam. Allazi thabat kiyam sofuf gheir el-mutagasidin fi el-bashar. Allazi a3-ta allazin 3ala el-ard tasbih el-seraphim. Ikbal minna nahnu aydan aswatana ma gheir el-mar-i-in. Ahsibna ma el-kawat el-sama-iya. Wa linakul nahnu aydan ma ula-ik, iz kad tarahna 3anna kol afkar el-khawater el-sharira. Wa nasruch bima yursiluhu ula-ik, bi-aswat la taskut, wa afwah la taftar, wa nubarik 3azamatak.",
                cop_ar: "في إت شوب إب نيب إبتشويس إفنوتي إنتافمي: إيفول خين أونوتي إنتافمي. في إيطاف أوأونه نان إيفول إمفو أوأويني إمفيوت. في إيطاف إيرهموت نان إمبي إيمي إممي إنتيه بي بنيفما إثؤواب. في إيطاف أوأونه نان إيفول إمباي نيشتي إمميستيريون إنتيه إب أونخ. في إيطاف طاجرو إنتي ميت ريف أوهي إيرات إف إنتيه بي خوروس إنتيه ني أسوماتوس خين ني رومي. في إيطاف تي إن ني إت هيجين بي كاهي إنتي ميت ريف هوس إنتيه ني سيرافيم. تشي إنتوتين هون إنتين إسمي نيم ني أثناف إيرو أو. أوبتين نيم ني ديناميس إت خين ني في أوي. مارين جوس هون نيم ني إتيه إمماف: إيه أن هي أوي سافول إممون إمميف إي نيفين إنتيه ني لوجيسموس إن أتوبون. إنتين أوش إيفول إن ني إيناريه ني إتيه إمماف طاو أو إهمو أو: خين هان إسمي إن أت خارو أو: نيم هان روف إن أث موناك: أووه إنتين إسمو إي تيك ميت نيشتي.",
            },
            {
                id: 20,
                speaker: "Diakon",
                cop_de: "Is anatolas blepsate.",
                de: "Schaut nach Osten!",
                ar: "وإلى الشرق انظروا",
                cop_cop: "Ⲓⲥ ⲁ̀ⲛⲁⲧⲟⲗⲁⲥ ⲃⲗⲉⲯⲁⲧⲉ.",
                ar_de: "Wa ila el-shark onzoro.",
                cop_ar: "إيس أناتولاس فليپساتي.",
            },
            {
                id: 21,
                speaker: "Priester",
                cop_de: "Nthok gar pe etu-ohi eratu em-pek-koti: endje ni-Cherubim nem ni-Seraphim: ere so-u entenh em-pi-uai: uoh so-u entenh em-pi-ke-uai. Chen snau men entenh ev-hobs em-pu-ho: Chen snau de ev-hobs em-pu-balauj: ev-hil de chen pi-ke-snau: ev-osch ebol uai ube uai em-mo-u. Ev-ta-u-o em-pi-hymnos ente pi-bro uoh en-udjai en-tan: chen u-smi es-meh en-o-u. Ev-hos ev-djo: ev-osch ebol ev-ti-hro-u ev-djo em-mos.",
                de: "Du bist der ,der umgeben ist von den Cherubim und den Seraphim , sechs Flügel hat der eine und sechs Flügel hat der andere. und mit zweien bedecken sie ihre Antlitze, und mit zweien bedecken sie ihre Füße, und mit zweien fliegen sie. Und sie rufen, einer zum anderen. Sie verkünden den Lobgesang des Sieges unseres Heils in einer Stimme voll der Ehre. Sie loben, singen, rufen und sprechen:",
                ar: "أنت هو القيام حولك الشاروبيم والسيرافيم. ستة أجنحة للواحد وستة أجنحة للآخر. فبجناحين يغطون وجوههم، وباثنين يسترون أرجلهم، ويطيرون باثنين. ويصرخون واحد قبالة واحد منهم. يرسلون تسبيح الغلبة والخلاص الذى لنا بصوت ممتلئ مجداً، يسبحون وينشدون ويصرخون ويصوتون قائلين:",
                cop_cop: "Ⲛⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲉ̀ⲧⲟⲩⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲉⲕⲕⲱϯ : ⲛ̀ϫⲉ ⲛⲓⲬⲉⲣⲟⲩⲃⲓⲙ ⲛⲉⲙ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ : ⲉ̀ⲣⲉ ⲋ̅ (ⲥⲟⲟⲩ) ⲛ̀ⲧⲉⲛϩ ⲙ̀ⲡⲓⲟⲩⲁⲓ : ⲟⲩⲟϩ ⲋ̅ (ⲥⲟⲟⲩ) ⲛ̀ⲧⲉⲛϩ ⲙ̀ⲡⲓⲕⲉⲟⲩⲁⲓ. Ϧⲉⲛ ⲥⲛⲁⲩ ⲙⲉⲛ ⲛ̀ⲧⲉⲛϩ ⲉⲩϩⲱⲃⲥ ⲙ̀ⲡⲟⲩϩⲟ : Ϧⲉⲛ ⲥⲛⲁⲩ ⲇⲉ ⲉⲩϩⲱⲃⲥ ⲙ̀ⲡⲟⲩⲃⲁⲗⲁⲩϫ : ⲉⲩϩⲏⲗ ⲇⲉ Ϧⲉⲛ ⲡⲓⲕⲉⲥⲛⲁⲩ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲟⲩⲁⲓ ⲟⲩⲃⲉ ⲟⲩⲁⲓ ⲙ̀ⲙⲱⲟⲩ. Ⲉⲩⲧⲁⲟⲩⲟ̀ ⲙ̀ⲡⲓϩⲩⲙⲛⲟⲥ ⲛ̀ⲧⲉ ⲡⲓⲃⲣⲟ ⲟⲩⲟϩ ⲛ̀ⲟⲩϫⲁⲓ ⲛ̀ⲧⲁⲛ : Ϧⲉⲛ ⲟⲩⲥⲙⲏ ⲉⲥⲙⲉϩ ⲛ̀ⲱⲟⲩ. Ⲉⲩϩⲱⲥ ⲉⲩϫⲱ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϯϩ̀ⲣⲱⲟⲩ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.",
                ar_de: "Anta howa el-kayam hawlaka el-sherubim wal-seraphim. Sita agneha lil-wahed wa sita agneha lil-akhar. Fa-bi-ganahein yughatun wuguhohum, wa bi-ithnein yasturun argulahum, wa yatirun bi-ithnein. Wa yasruchun wahed kubala wahed minhum. Yursilun tasbih el-ghalaba wal-khalas allazi lana bi-sout mumtali magdan. Yusabbihun wa yunshidun wa yasruchun wa yusawitun ka-ilin:",
                cop_ar: "إنثوك غار بي إيتو أوهي إيراتو إمبيك كوتي: إنجيه ني شيروبيم نيم ني سيرافيم: إيريه سو أو إنتينه إمبي أوواي: أووه سو أو إنتينه إمبي كي أوواي. خين إسناف مين إنتينه إف هوبس إمبو هو: خين إسناف ديه إف هوبس إمبو فالافج: إف هيل ديه خين بي كي إسناف: إف أوش إيفول أوواي أوفيه أوواي إممو أو. إف طاو أو إمبي هيمنوس إنتيه بي فرو أووه إن أوجاي إن تان: خين أو إسمي إسميه إن أو أو. إف هوس إف جو: إف أوش إيفول إف تي إهروا أو إف جو إمموس.",
            },
            {
                id: 22,
                speaker: "Diakon",
                cop_de: "Pros-chomen.",
                de: "Wir hören!",
                ar: "نُنصِت.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ.",
                ar_de: "nonsit.",
                cop_ar: "بروسخومين.",
                reconciliation_menu: [
                    { label_ar: "أيها الرب إله القوات", label_de: "O Herr, Gott der Heerscharen", action: "goto_lord_of_hosts" },
                    { label_ar: "اسبسمس واطس 1", label_de: "Aspasmos Watos 1", action: "goto_aspasmos_watos_1" },
                    { label_ar: "اسبسمس واطس 2", label_de: "Aspasmos Watos 2", action: "goto_aspasmos_watos_2" }
                ]
            },
            {
                id: 23,
                speaker: "Volk",
                cop_de: "Ni-cherubim se-u-osht mmok: nem ni-seraphim se-ti-o-u nak: ev-osh ebol ev-djo mmos. Dje agios agios agios: Kyrios sabaoth: pliris o uranos ke i gi: tis agias su doxis.",
                de: "Die Cherubim beten Dich an und die Seraphim verherrlichen Dich, indem sie ausrufen und sprechen: Heilig, heilig, heilig ist der Herr der Heerscharen , der Himmel und die Erde sind erfüllt von deiner heiligen Herrlichkeit.",
                ar: "الشاروبيم يسجدون لك والسيرافيم يمجدونك صارخين قائلين: قدوس قدوس قدوس رب الصباؤوت السماء والأرض مملوءتان من مجدك الأقدس",
                cop_cop: "Ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ : ⲛⲉⲙ ⲛⲓⲤⲉⲣⲁⲫⲓⲙ ⲥⲉϯⲱⲟⲩ ⲛⲁⲕ : ⲉⲩⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ. Ϫⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ : Ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ : ⲡ̀ⲗⲏⲣⲏⲥ ⲟ̀ ⲟⲩⲣⲁⲛⲟⲥ ⲕⲉ ⲏ̀ ⲅⲏ : ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲥⲟⲩ ⲇⲟⲝⲏⲥ.",
                ar_de: "El-sherubim yasguduna laka wal-seraphim yumaggidunaka sarekhina ka-ilin: Kuddus kuddus kuddus rab el-sabaot el-sama wal-ard mamlu-atani min magdika el-akdas.",
                cop_ar: "ني شيروبيم سي أوأوشت إمموك: نيم ني سيرافيم سي تي أو أو ناك: إف أوش إيفول إف جو إمموس. جيه أجيوس أجيوس أجيوس: كيريوس سافاؤوت: بليريس أو أورانوس كي إي جي: تيس أجياس سو ذوكسيس.",
            },
            {
                id: 24,
                speaker: "Priester",
                cop_de: "Agios agios agios. Chuab chuab P-shois uoh chuab chen hob niben: en-hu-o de ef-sotp endje pho-u-oini ente tek-usia. Ou-at-sadji emmos te ti-djom ente tek-sophia: emmon hli en-sadji na-shti-shi e-pi-pelagos ente tek-met-mai-romi. Ak-thamio en-romi hos mai-romi: na-ker-chria enthok an pe en-ta-met-bok alla anok de nai-er-chria en-tek-met-shois. Ethbe nek-met-shen-hit et-osh ak-er-chopi e-nai-shop an pe. Ak-taho en-tfe erats nhi e-u-ah-soi. Ak-tajro em-pi-kahi nhi e-thri-moshi hidjof. Ethbeht ak-mashtam em-phiom. Ethbeht ak-u-onh ebol en-ti-physis en-ni-zoon. Ak-thevio en-en-chai niben sa-pesit en-na-valauj. Mpek-chat ei-shat en-hli chen ni-hbho-ui ente pek-taio. Nthok pe eta-ker-plazin emmoi. Ak-ko en-tek-djij ehri edjoi. Ak-shai en-chit en-ti-hikon ente tek-exusia. Ak-ko em-pi-doron en-chit ente pi-sadji. Ak-u-on em-pi-paradisos nhi e-u-nof. Ak-ti etot en-ti-met-ref-ti-sbo ente pek-emi. Ak-u-onh nhi ebol em-pi-shshin ente pi-onch. Ak-tamoi e-t-souri em-phmo. Ou-tochi n-u-ot pe etak-shasht e-shtem-u-om ebol n-chitf. Phai eta-k-djos nhi dje mper-u-om ebol n-chitf em-mauatf. Ai-u-om chen pa-u-osh. Ai-ko en-soi em-pek-nomos chen ta-gnomi. Ai-er-amelis e-nek-entoli. Anok ai-holem nhi en-ti-apophasis ente phmo.",
                de: "Heilig, heilig, heilig, Agios, Agios, Agios. Heilig, heilig, heilig bist du, O Herr, und heilig in allem, vor allem ist überragend das Licht deiner Wesenheit. Unbeschreiblich ist die Kraft deiner Weisheit und keine Sprache vermag die Größe deiner Menschenliebe zu beschränken. Du hast mich, den Menschen, als ein Menschenliebender geschaffen. Du benötigtest meinen Dienst nicht, ich jedoch brauchte deine Herrschaft. Wegen deines Vielfachen Erbarmens hast du mich geschaffen, da ich nicht war, Du hast mir den Himmel als Dach aufgestellt, du hast mir die Erde befestigt, damit ich darauf wandle. Meinetwegen hast du das Meer verschlossen. Meinetwegen hast du die Natur des Tieres sichtbar gemacht. Du hast mir nicht etwas von den Werken deines Ruhmes fehlen lassen. Du bist der, der mich geschaffen und deine Hände über mich gehalten hast, Du hast mir das Bild deiner Macht eingeschrieben und mir die Gabe des Sprechens gegeben. Du hast mir das Paradies zur Freude geöffnet und die Lehre deines Wissens gegeben, Du hast mir den Baum des Lebens geoffenbart und den Stachel des Todes gezeigt. Eine einzige Pflanze hast du mir Verboten zu essen. Diese von der mir gesagt hast: Von ihr allein iß nicht. Ich habe nach meinem Willen gegessen. Ich habe nach meinem Willen gegessen. und deine Gebote missachtet. Ich habe mir das Todesurteil zugezogen.",
                ar: "قدوس، قدوس، قدوس، أجيوس، أجيوس، أجيوس. قدوس قدوس أنت أيها الرب وقدوس فى كل شيء، وبالأكثر مختارٌ هو نور جوهريتك، وغير موصوفة هي قوة حكمتك، وليس شيء من النطق يستطيع أن يحد لجة محبتك للبشر. خلقتنى إنساناً كمحب للبشر، ولم تكن أنت محتاجاً إلي عبوديتي بل أنا المُحتاج إلى ربوبيتك. من أجل تعطفاتك الجزيلة كونتني إذ لم أكن. أقمت السماء لى سقفاً وثبت لى الأرض لأمشى عليها. من أجلى ألجمت البحر، من أجلى أظهرت طبيعة الحيوان، أخضعت كل شيء تحت قدمي. لم تدعني معوزاً شيئاً من أعمال كرامتك. أنت الذى جبلتني ووضعت يدك على، وكتبت في صورة سلطانك ووضعت في موهبة النطق، وفتحت لى الفردوس لأتنعم، وأعطيتني علم معرفتك. أظهرت لى شجرة الحياة، وعرفتني شوكة الموت. غرسٌ واحد نهيتني أن آكل منه، هذا الذى قلت لى لا تأكل منه وحده. فأكلت بإرادتي وتركت عنى ناموسك برأيي وتكاسلت عن وصاياك أنا اختطفت لي قضية الموت.",
                cop_cop: "Ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ ⲁⲅⲓⲟⲥ. Ⲭⲟⲩⲁⲃ ⲭⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲟⲩⲟϩ ⲭⲟⲩⲁⲃ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ϩⲟⲩⲟ̀ ⲇⲉ ⲉ̀ϥⲥⲱⲧⲡ ⲛ̀ϫⲉ ⲫⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲉ ⲧⲉⲕⲟⲩⲥⲓⲁ̀. Ⲟⲩⲁⲧϣⲁϫⲓ ⲙ̀ⲙⲟⲥ ⲧⲉ ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲧⲉⲕⲥⲟⲫⲓⲁ̀ ⲙ̀ⲙⲟⲛ ϩ̀ⲗⲓ ⲛ̀ⲥⲁϫⲓ ⲛⲁϣϯϣⲓ ⲉ̀ⲡⲓⲡⲉⲗⲁⲅⲟⲥ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧⲙⲁⲓⲣⲱⲙⲓ. Ⲁⲕⲑⲁⲙⲓⲟ̀ ⲛ̀ⲣⲱⲙⲓ ϩⲱⲥ ⲙⲁⲓⲣⲱⲙⲓ ⲛⲁⲕⲉⲣⲭ̀ⲣⲓⲁ̀ ⲛ̀ⲑⲟⲕ ⲁⲛ ⲡⲉ ⲛ̀ⲧⲁⲙⲉⲧⲃⲱⲕ ⲁⲗⲗⲁ ⲁ̀ⲛⲟⲕ ⲇⲉ ⲛⲁⲓⲉⲣⲭ̀ⲣⲓⲁ̀ ⲛ̀ⲧⲉⲕⲙⲉⲧϭⲟⲓⲥ. Ⲉⲑⲃⲉ ⲛⲉⲕⲙⲉⲧϣⲉⲛϩⲏⲧ ⲉⲧⲟϣ ⲁⲕⲉⲣⲭⲱⲡⲓ ⲉ̀ⲛⲁⲓϣⲟⲡ ⲁⲛ ⲡⲉ. Ⲁⲕⲧⲁϩⲟ ⲛ̀ⲧ̀ⲫⲉ ⲉ̀ⲣⲁⲧⲥ ⲛⲏⲓ ⲉ̀ⲟⲩⲁϩⲥⲟⲓ. Ⲁⲕⲧⲁϫⲣⲟ ⲙ̀ⲡⲓⲕⲁϩⲓ ⲛⲏⲓ ⲉ̀ⲑⲣⲓⲙⲟϣⲓ ϩⲓϫⲱϥ. Ⲉⲑⲃⲏⲧ ⲁⲕⲙⲁϣⲑⲁⲙ ⲙ̀ⲫⲓⲟⲙ. Ⲉⲑⲃⲏⲧ ⲁⲕⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧ̀ⲫⲩⲥⲓⲥ ⲛ̀ⲛⲓⲍⲱⲟⲛ. Ⲁⲕⲑⲉⲃⲓⲟ̀ ⲛ̀ⲉⲛⲭⲁⲓ ⲛⲓⲃⲉⲛ ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲁⲃⲁⲗⲁⲩϫ. Ⲙ̀ⲡⲉⲕⲭⲁⲧ ⲉⲓϣⲁⲧ ⲛ̀ϩ̀ⲗⲓ ϧⲉⲛ ⲛⲓϩ̀ⲃⲏⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲡⲉⲕⲧⲁⲓⲟ̀. Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕⲉⲣⲡⲗⲁⲍⲓⲛ ⲙ̀ⲙⲟⲓ. Ⲁⲕⲭⲱ ⲛ̀ⲧⲉⲕϫⲓϫ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ. Ⲁⲕⲥ̀ϧⲁⲓ ⲛ̀ϧⲏⲧ ⲛ̀ϯϩⲓⲕⲱⲛ ⲛ̀ⲧⲉ ⲧⲉⲕⲉⲝⲟⲩⲥⲓⲁ̀. Ⲁⲕⲭⲱ ⲙ̀ⲡⲓⲇⲱⲣⲟⲛ ⲛ̀ϧⲏⲧ ⲛ̀ⲧⲉ ⲡⲓⲥⲁϫⲓ. Ⲁⲕⲟⲩⲱⲛ ⲙ̀ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛⲏⲓ ⲉ̀ⲟⲩⲛⲟϥ. Ⲁⲕϯ ⲉ̀ⲧⲟⲧ ⲛ̀ϯⲙⲉⲧⲣⲉϥϯⲥ̀ⲃⲱ ⲛ̀ⲧⲉ ⲡⲉⲕⲉ̀ⲙⲓ. Ⲁⲕⲟⲩⲱⲛϩ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲓϣϣⲏⲛ ⲛ̀ⲧⲉ ⲡⲱⲛϧ. Ⲁⲕⲧⲁⲙⲟⲓ ⲉ̀ⲧⲥⲟⲩⲣⲓ ⲙ̀ⲫⲙⲟⲩ. Ⲟⲩⲧⲱϭⲓ ⲛ̀ⲟⲩⲱⲧ ⲡⲉ ⲉ̀ⲧⲁⲕϣⲁϣⲧ ⲉ̀ϣ̀ⲧⲉⲙⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ. Ⲫⲁⲓ ⲉ̀ⲧⲁⲕϫⲟⲥ ⲛⲏⲓ ϫⲉ ⲙ̀ⲡⲉⲣⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲙ̀ⲙⲁⲩⲁⲧϥ. Ⲁⲓⲟⲩⲱⲙ ϧⲉⲛ ⲡⲁⲟⲩⲱϣ. Ⲁⲓⲭⲱ ⲛ̀ⲥⲱⲓ ⲙ̀ⲡⲉⲕⲛⲟⲙⲟⲥ ϧⲉⲛ ⲧⲁⲅⲛⲱⲙⲏ. Ⲁⲓⲉⲣⲁ̀ⲙⲉⲗⲏⲥ ⲉ̀ⲛⲉⲕⲉⲛⲧⲟⲗⲏ. Ⲁ̀ⲛⲟⲕ ⲁⲓϩⲱⲗⲉⲙ ⲛⲏⲓ ⲛ̀ϯⲁ̀ⲡⲟⲫⲁⲥⲓⲥ ⲛ̀ⲧⲉ ⲫⲙⲟⲩ.",
                ar_de: "Kuddus, kuddus, kuddus, Agios, Agios, Agios. Kuddus kuddus anta ayuha el-rab wa kuddus fi kol shay, wa bil-akthar mukhtar howa nour gawhariyatak, wa gheir mawsufa hiya kuwat hikmatak, wa laysa shay min el-notk yastati3 an yahud logat mahabatak lil-bashar. Khalaktani insan kamuhib lil-bashar, wa lam takun anta muhtagan ila 3ubudiyati bal ana el-muhtag ila rububiyatik. Min agl ta3atufatak el-gazila kawantani iz lam akun. Akamta el-sama li sakfan wa thabata li el-ard li-amshi 3alayha. Min agli algamta el-bahr, min agli azharta tabi3at el-hayawan, akhda3ta kol shay taht kadamay. Lam tada3ni mu3wizan shayan min a3mal karamatik. Anta allazi gabaltani wa wada3ta yadak 3alay, wa katabta fi surat sultanik wa wada3ta fi mawhibat el-notk, wa fatahta li el-firdaws li-atana3am, wa a3taytani 3ilm ma3rifatak. Azharta li shagarat el-hayat, wa 3araftani shawkat el-mawt. Ghars wahed nahaytani an akul minh, haza allazi kulta li la takul minh wahdah. Fa-akaltu bi-iradati wa taraktu 3anni namusak bi-ra'yi wa takasaltu 3an wasayak ana ikhtataftu li kadiyat el-mawt.",
                cop_ar: "أجيوس أجيوس أجيوس. خؤاب خؤاب إبشويس أووه خؤاب خين هوب نيفين إنهوؤ ديه إف سوتب إنجيه فو أوأويني إنتيه تيك أوسيا. أو أت ساجي إمموس تيه تي جوم إنتيه تيك سوفيا إممون هلي إن ساجي نا شتي شي إي بي بيلاغوس إنتيه تيك ميت ماي رومي. أك ثاميو إن رومي هوس ماي رومي ناك إير خريا إنثوك أن بي إن طا ميت بوك أللا أنوك ديه ناي إير خريا إن تيك ميت شويس. إثفيه نيك ميت شينهيت إت أوش أك إير شوبي إي ناي شوب أن بي. أك طاهو إن إتفي إيراتس ني إي أواه سوي. أك طاجرو إمبي كاهي ني إي ثري موشي هيجوف. إثفيت أك ماشتام إمفيوم. إثفيت أك أوأونه إيفول إن تي فيسيس إن ني زو أون. أك ثيفيو إن إن خاي نيفين سا بيسيت إن نا فالافج. إمبيك خات إي شات إن هلي خين ني إهفي أوي إنتيه بيك طايو. إنثوك بي إيتاك إير بلازين إمموي. أك كو إن تيك جيج إي إهري إيجوي. أك إسخاي إن خيت إن تي هيكون إنتيه تيك إكسوسيا. أك كو إمبي دورون إن خيت إنتيه بي ساجي. أك أوأون إمبي باراديسوس ني إي أونوف. أك تي إيطوت إن تي ميت ريف تي إسبو إنتيه بيك إيمي. أك أوأونه ني إيفول إمبي إش شين إنتيه بي أونخ. أك تاموي إي إت سوري إم إفمو. أو طوشي إن أو أوت بي إيتاك شاشت إي شتيم أوأوم إيفول إن خيتف. فاي إيتاك جوس ني جيه إمبير أوأوم إيفول إن خيتف إم مافات ف. أي أوأوم خين با أوأوش. أي كو إنسوي إمبيك نوموس خين طا غنومي. أي إير أميليز إي نيك إنتولي. أنوك أي هوليم ني إن تي أبوفاسيس إنتيه إفمو.",
            },
            {
                id: 25,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr, erbarme dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريي إليسون",
            },
            {
                id: 26,
                speaker: "Priester",
                cop_de: "Nthok pa-nib ak-phonh nhi en-ti-timoria e-u-udjai Hos man-esoo-u en-agathos ak-sogi e-kot ensa phi-etaf-sorem Hos yot em-mi ak-shep-hisi nemi anok kha phi-etaf-hei Ak-mort khen ni-phakhri tiru et-shi e-khun e-p-onkh Nthok pe etak-u-orp nhi en-ni-prophitis ethbiht anok kha phi-et-shoni Ak-ti em-pi-nomos nhi e-u-voithia Nthok pe etak-er-diakonin nhi em-pi-udjai e-ai-er-paravenin em-pek-nomos Hos u-oini em-mi ak-shai en-ni-et-sorem nem ni-et-oi en-at-emi",
                de: "Du meine Herr hast mir die Strafe in heil Verwandelt. Wie ein guter Hirte bist du gelaufen,um den Verlorenen Zu Suchen. Wie ein wahrer Vater hast Du dich um mich bemüht , der ich gefallen war . Du hast mich gebunden mit allen ins Leben führen Heilsmitteln. Du hast meinetwegen mir, dem Kranken, die Propheten gesandt. Du hast mir das Gesetz zur Hilfe gegeben. Du hast mir zum Heil gewirkt, obwohl ich dein Gesetz übertreten habe. Als ein wahrhaftes Licht bist du denen erleuchtet, die sich verirrt haben und die Unwissende sind.",
                ar: "أنت يا سيدي، حولت لى العقوبة خلاصاً. كراع صالح سعيت فى طلب الضال. كأب حقيقي تعبت معي أنا الذى سقط. ربطتني بكل الأدوية المؤدية الى الحياة. أنت الذى أرسلت لى الأنبياء من اجلى أنا المريض. أعطيتني الناموس عوناً. أنت الذى خدمت لى الخلاص لما خالفت ناموسك. كنور حقيقي أشرقت للضالين وغير العارفين.",
                cop_cop: "Ⲛⲑⲟⲕ ⲡⲁⲛⲏⲃ ⲁⲕⲫⲱⲛϩ ⲛⲏⲓ ⲛ̀ϯⲧⲓⲙⲱⲣⲓⲁ ⲉ̀ⲟⲩⲟⲩϫⲁⲓ Ϩⲱⲥ ⲙⲁⲛⲉ̀ⲥⲱⲟⲩ ⲉ̀ⲛⲁⲛⲉϥ ⲁⲕϭⲟϫⲓ ⲉ̀ⲕⲱϯ ⲛ̀ⲥⲁ ⲫⲏⲉ̀ⲧⲁϥⲥⲱⲣⲉⲙ Ϩⲱⲥ ⲓⲱⲧ ⲙ̀ⲙⲏⲓ ⲁⲕϣⲉⲡϩⲓⲥⲓ ⲛⲉⲙⲏⲓ ⲁ̀ⲛⲟⲕ ϧⲁ ⲫⲏⲉ̀ⲧⲁϥϩⲉⲓ Ⲁⲕⲙⲟⲣⲧ ϧⲉⲛ ⲛⲓⲫⲁϧⲣⲓ ⲧⲏⲣⲟⲩ ⲉⲧϭⲓ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲱⲛϧ Ⲛⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕⲟⲩⲱⲣⲡ ⲛⲏⲓ ⲛ̀ⲛⲓⲡⲣⲟⲫⲏⲧⲏⲥ ⲉⲑⲃⲏⲧ ⲁ̀ⲛⲟⲕ ϧⲁ ⲫⲏⲉⲧϣⲱⲛⲓ Ⲁⲕϯ ⲙ̀ⲡⲓⲛⲟⲙⲟⲥ ⲛⲏⲓ ⲉ̀ⲟⲩⲃⲟⲏ̀ⲑⲓⲁ̀ Ⲛⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕⲉⲣⲇⲓⲁ̀ⲕⲟⲛⲓⲛ ⲛⲏⲓ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ ⲉ̀ⲁⲓⲉⲣⲡⲁⲣⲁⲃⲉⲛⲓⲛ ⲙ̀ⲡⲉⲕⲛⲟⲙⲟⲥ Ϩⲱⲥ ⲟⲩⲱⲓⲛⲓ ⲙ̀ⲙⲏⲓ ⲁⲕϣⲁⲓ ⲛ̀ⲛⲏⲉⲧⲥⲱⲣⲉⲙ ⲛⲉⲙ ⲛⲏⲉⲧⲟⲓ ⲛ̀ⲁⲧⲉ̀ⲙⲓ",
                ar_de: "Anta ya sayedi, hawalta li el-3okuba khalasan. Ka-ra3i saleh sa3ayta fi talab el-dal. Ka-ab hakiki ta3ibta ma3i ana allazi sakat. Rabattani bi-kol el-adwiya el-mo-a-diya ila el-hayah. Anta allazi arsalta li el-anbiya min agli ana el-marid. A3taytani el-namus 3awna. Anta allazi khadamta li el-khalas lama khalaf-tu namusak. Ka-nour hakiki ashrakta lil-dalin wa gheir el-3arifin.",
                cop_ar: "إنثوك بانيب أكفون ني إنتي تيموريا إي أو أوجاي هوس مان إسوؤ إن آغاثوس أكشوجي إيكوت إنسا في إيطاف سوريم هوس يوت إممي أكشيب هيسي نيمي أنوك خا في إيطاف هي أكمورت خين ني فاخري تيرو إت شي إيخون إي إب أونخ إنثوك بي إيتاك أوأورب ني إن ني بروفيتيس إثفيت أنوك خا في إت شوني أكتي إمبي نوموس ني إي أو فوإيثيا إنثوك بي إيتاك إير دياكونين ني إمبي أوجاي إي أي إير بارافينين إمبيك نوموس هوس أوأويني إممي أكشاي إن ني إت سوريم نيم ني إت أوي إن أت إيمي",
            },
            {
                id: 27,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr, erbarme dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريي إليسون",
            },
            {
                id: 28,
                speaker: "Priester",
                cop_de: "Nthok pe phenetshop nchou niben aki nan hijen pikahi aki ethmitra ntiparthenos Piatshopf ekoi nnuti nouholem an pe etakmevi erof ethrekshopi nisos nem Phnuti Alla akshuotk ebol imin mmok Akchi noumorphi mbok Aksmu etaphysis nkhitk Akjek peknomos ebol haroi Aktamoi epjintoun nte pahei Akti mpkw ebol nnhetouamahi echvou hiten Ament Akhioui ebol mpsahoui nte pinomos Akkorf mphnobi chen tsarx Aktamoi etjom nte tekexusia Akti mphnau ebol nnibelleu Aktounos nirefmwout ebolchen nimhau Aktaho ntiphysis erats chen psaji Akouonh nhi ebol ntiikonomia nte tekmetshanethmaht Akshai cha pchinchons nte niponiros Akti ntekjisi ehanmastigos Nekouoji akchau ehanshenkour Ethbeht panib mpektastho mpekho ebolha pshipi nte hanthaf",
                de: "Du, der Ewig, bist zu uns auf die Erde gekommen, bist in den Mutterleib der Jungfrau gekommen. O du der Unmeßbare, obwohl du Gott bist, hast du es nicht für einen Raub gehalten, Gott gleich zu sein, sondern hast Dich selbst erniedrigt und Sklavengestalt angenommen. Du hast meine Natur in dir gesegnet, Dein Gesetz für mich vollendet und mir das Aufstehen von meinem Fallen gezeigt. Du hast diejenigen befreit, die durch die Unterwelt gefangen gehalten wurden. Du hast den Fluch des Gesetzes beseitigt, die Sünde im Fleische vernichtet. Du hast mir die Macht deiner Herrschaft gezeigt, Du hast den Blinden das Sehen geschenkt, die Toten aus den Gräbern erweckt, die Natur durch das Wort aufgerichtet. Du hast mir die Heilsordnung deines Erbarmens geoffenbart, Du hast das Unrecht der Bösen erduldet. Du hast Deinen Rücken Peitschenschlägen und deine Wangen hast du Ohrfeigen dargeboten. Meinetwegen, mein Herr, hast du dein Gesicht nicht abgewandt von der Schande des Anspeiens.",
                ar: "أنت الكائن في كل زمان. أتيت إلينا على الأرض. أتيت الى بطن العذراء. أيها الغير المحوى إذ أنت الإله لم تضمر اختطافاً أن تكون مساوياً لله. لكن وضعت ذاتك وأخذت شكل العبد. وباركت طبيعتي فيك. وأكملت ناموسك عنى. وأريتني القيام من سقطتي. أعطيت إطلاقاً لمن قُبض عليهم في الجحيم. أزلت لعنة الناموس. أبطلت الخطيئة بالجسد. أريتنى قوة سلطانك. وهبت النظر للعميان. أقمت الموتى من القبور. أقمت الطبيعة بالكلمة. أظهرت لى تدبير تعطفك. احتملت ظلم الأشرار. بذلت ظهرك للسياط. وخداك أهملتهما للطم. لأجلى يا سيدى لم ترد وجهك عن خزي البصاق.",
                cop_cop: "Ⲛⲑⲟⲕ ⲡⲉ ⲫⲛⲉⲧϣⲟⲡ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ⲁⲕⲓ̀ ⲛⲁⲛ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲁⲕⲓ̀ ⲉ̀ϯⲙⲏⲧⲣⲁ ⲛ̀ϯⲡⲁⲣⲑⲉⲛⲟⲥ Ⲡⲓⲁⲧϣⲟⲡϥ ⲉⲕⲟⲓ ⲛ̀ⲛⲟⲩϯ ⲛ̀ⲟⲩϩⲱⲗⲉⲙ ⲁⲛ ⲡⲉ ⲉ̀ⲧⲁⲕⲙⲉⲩⲓ̀ ⲉ̀ⲣⲟϥ ⲉⲑⲣⲉⲕϣⲱⲡⲓ ⲛ̀ϩⲩⲥⲟⲥ ⲛⲉⲙ Ⲫⲛⲟⲩϯ Ⲁⲗⲗⲁ ⲁⲕϣⲟⲩⲱⲧⲕ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲕ Ⲁⲕϭⲓ ⲛ̀ⲟⲩⲙⲟⲣⲫⲏ ⲙ̀ⲃⲱⲕ Ⲁⲕⲥ̀ⲙⲟⲩ ⲉ̀ⲧⲁⲫⲩⲥⲓⲥ ⲛ̀ϧⲏⲧⲕ Ⲁⲕϫⲉⲕ ⲡⲉⲕⲛⲟⲙⲟⲥ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲟⲓ Ⲁⲕⲧⲁⲙⲟⲓ ⲉ̀ⲡϫⲓⲛⲧⲱⲟⲩⲛ ⲛ̀ⲧⲉ ⲡⲁϩⲉⲓ Ⲁⲕϯ ⲙ̀ⲡⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉ̀ⲧⲟⲩⲁ̀ⲙⲁϩⲓ ⲉ̀ϫⲱⲟⲩ ϩⲓⲧⲉⲛ ⲁ̀ⲙⲉⲛϯ Ⲁⲕϩⲓⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲥⲁϩⲟⲩⲓ̀ ⲛ̀ⲧⲉ ⲡⲓⲛⲟⲙⲟⲥ Ⲁⲕⲕⲱⲣϥ ⲙ̀ⲫⲛⲟⲩⲃⲓ ϧⲉⲛ ϯⲥⲁⲣⲝ Ⲁⲕⲧⲁⲙⲟⲓ ⲉ̀ϯϫⲟⲙ ⲛ̀ⲧⲉ ⲧⲉⲕⲉⲝⲟⲩⲥⲓⲁ̀ Ⲁⲕϯ ⲙ̀ⲫⲛⲁⲩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲃⲉⲗⲗⲉⲩ Ⲁⲕⲧⲟⲩⲛⲟⲥ ⲛⲓⲣⲉϥⲙⲱⲟⲩⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲙϩⲁⲩ Ⲁⲕⲧⲁϩⲟ ⲛ̀ϯⲫⲩⲥⲓⲥ ⲉ̀ⲣⲁⲧⲥ ϧⲉⲛ ⲡⲥⲁϫⲓ Ⲁⲕⲟⲩⲱⲛϩ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϯⲟⲓⲕⲟⲛⲟⲙⲓⲁ̀ ⲛ̀ⲧⲉ ⲧⲉⲕⲙⲉⲧϣⲁⲛⲑⲙⲁϩⲧ Ⲁⲕϣⲁⲓ ϧⲁ ⲡϭⲓⲛϫⲟⲛⲥ ⲛ̀ⲧⲉ ⲛⲓⲡⲟⲛⲏⲣⲟⲥ Ⲁⲕϯ ⲛ̀ⲧⲉⲕϫⲓⲥⲓ ⲉ̀ϩⲁⲛⲙⲁⲥⲧⲓⲅⲅⲟⲥ Ⲛⲉⲕⲟⲩⲟ̀ϫⲓ ⲁⲕⲭⲁⲩ ⲉ̀ϩⲁⲛϣⲉⲛⲕⲟⲩⲣ Ⲉⲑⲃⲏⲧ ⲡⲁⲛⲏⲃ ⲙ̀ⲡⲉⲕⲧⲁⲥⲑⲟ ⲙ̀ⲡⲉⲕϩⲟ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡϣⲓⲡⲓ ⲛ̀ⲧⲉ ϩⲁⲛⲑⲁϥ",
                ar_de: "Anta el-ka-en fi kol zaman. Atayta ilayna ala el-ard. Atayta ila batn el-adra. Ayuha el-gheir el-muhwa iz anta el-ilah lam tudmir ikhtitafan an takuna musawiyan lillah. Lakin wada3ta zataka wa akhazta shakl el-abd. Wa barakta tabi3ati fik. Wa akmalta namusaka 3anni. Wa araytani el-kiyam min saktati. A3tayta itlakan liman kubida 3alayhim fi el-gahim. Azalta la3nat el-namus. Abtalta el-khatiya bil-gasad. Araytani kuwat sultanik. Wahabta el-nazar lil-3umyan. Akamta el-mawta min el-kubur. Akamta el-tabi3a bil-kalima. Azharta li tadbir ta3atufik. Ihtamalta zulm el-ashrar. Bazalta zahraka lil-siyat. Wa khadaka ahmaltahuma lil-latm. Li-agli ya sayedi lam tarud waghaka 3an khizi el-busak.",
                cop_ar: "إنثوك بي فينيتشوب إن سيو نيفين أك إي نان هيجين بي كاهي أك إي إي تي ميترا إن تي بارثينوس بي أت شوبف إكوي إن نوتي إن أو هوليم أن بي إتاك ميف إي إيروف إثريك شوي إن إيسوس نيم إفنوتي أللا أك شو أوتك إيفول إيمين إمموك أك تشي إن أو مورفي إمفوك أك إسمو إي طا فيسيس إن خيتك أك جيك بيك نوموس إيفول هاروي أك تاموي إي إبجين تو أون إنتيه باهي أك تي إم بي كو إيفول إن ني إيتو أما هي إيجو أو هيتين أمينتي أك هي أوي إيفول إم بي ساهوي إنتيه بي نوموس أك كورف إم إفنوفي خين إتساركس أك تاموي إي تي جوم إنتيه تيك إكسوسيا أك تي إم إفناف إيفول إن ني بيل ليف أك طونوس ني ريف مو أوت إيفول خين ني إمهاف أك طاهو إن تي فيسيس إراتس خين بي ساجي أك أوأونه ني إيفول إن تي إيكونوميا إنتيه تيك ميت شان ثماهت أك شاي خا إب تشين هونس إنتيه ني بونيروس أك تي إن تيك جيسي إي هان ماستيغوس نيك أوأوجي أك خاف إي هان شين كور إثفيت بانيب إمبيك طاسثو إمبيك هو إيفول ها إبشيبي إنتيه هان ثاف",
            },
            {
                id: 29,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr, erbarme dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريي إليسون"
            },
            {
                id: 30,
                speaker: "Priester",
                cop_de: "Aki e-ep-khol-khel em-friti en-ou-esou-ou sha e-khri e-pi-stavros. Ak-ou-onh e-vol en-tek-nishti em-met-fai-ro-oush kha-roi. Ak-khot-f em-pa-novi khen pek-emhav. Ak-oli en-ta-apar-chi ep-shoi e-et-fe. Ak-ou-onh ni e-vol en-ti-parousia ente pek-jin-i thai e-ti-kni-o en-khits e-thap e-ni-et-onkh nem ni-eth-mo-out. Ou-oh e-ti em-pi-ouai pi-ouai kata nef-hvi-o-ui.",
                de: "Gekommen bist du zur Schlachtung wie ein Lamm, bis zum Kreuz. Du hast groß Sorge um mich gezeigt, meine Sünde durch Dein Grab vernichtet. Du hast mein Erstlingsopfer zum Himmel emporgehoben. Du hast mir die Verkündigung deines Kommens geoffenbart, in der du kommst, zu richten die lebenden und die Toten und jedem nach seinen Taten zu vergelten.",
                ar: "أتيت الى الذبح مثل حمل حتى الى الصليب. أظهرت عظم اهتمامك بى. قتلت خطيئتى بقبرك. أصعدت باكورتى الى السماء. أظهرت لى اعلان مجيئك هذا الذى تأتى فيه لتدين الأحياء والأموات وتعطى كل واحد كأعماله.",
                cop_cop: "Ⲁⲕⲓ̀ ⲉ̀ⲡϧⲟⲗϧⲉⲗ ⲙ̀ⲫⲣⲏϯ ⲛ̀ⲟⲩⲉ̀ⲥⲱⲟⲩ ϣⲁ ⲉ̀ϧⲣⲏⲓ ⲉ̀ⲡⲓⲥⲧⲁⲩⲣⲟⲥ. Ⲁⲕⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉⲕⲛⲓϣϯ ⲙ̀ⲙⲉⲧϥⲁⲓⲣⲱⲟⲩϣ ϧⲁⲣⲟⲓ. Ⲁⲕϧⲟⲧϥ ⲙ̀ⲡⲁⲛⲟⲃⲓ ϧⲉⲛ ⲡⲉⲕⲙ̀ϩⲁⲩ. Ⲁⲕⲱⲗⲓ ⲛ̀ⲧⲁⲁ̀ⲡⲁⲣⲭⲏ ⲉ̀ⲡϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ. Ⲁⲕⲟⲩⲱⲛϩ ⲛⲏⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϯⲡⲁⲣⲟⲩⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲉⲕϫⲓⲛⲓ̀ ⲑⲁⲓ ⲉ̀ⲧⲉⲕⲛⲏⲟⲩ ⲛ̀ϧⲏⲧⲥ ⲉ̀ϯϩⲁⲡ ⲉ̀ⲛⲏⲉⲧⲟⲛϧ ⲛⲉⲙ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ. Ⲟⲩⲟϩ ⲉ̀ϯ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ̀.",
                ar_de: "Atayta ila el-zabh mithl hamal hata ila el-salib. Azharta 3azam ihtimamak bi. Katalta khati-ati bi-kabrik. As3adta bakurati ila el-sama. Azharta li i3lan magi-ak haza allazi ta-ti fihi li-tadin el-ahya wal-amwat wa tu3ti kol wahed ka-a3malih.",
                cop_ar: "أكئى إى إبخولخيل إمفريتى ان او ايسوأو شا إى إخرى إى أو إسطافروس. أك أوأونه ايفول انتيك نيشتى أمميت فاى روؤوش خاروى أكخوتيف إمبانوفى خين بيك إمهاف أك أولى إنتا أبارشى إبشوى إى إتفى. أك أوأونه نى ايفول إن إتباروسيا إنتى بيك جينئى ثاى إيتيكنيو إنخيتس ايتهاب اى نى ايتئونخ نيم نيئثمؤووت. اووه ايتى امبى اواى بى اواى كاطا نيف اهفيؤوى.",
            },
            {
                id: 31,
                speaker: "Volk",
                cop_de: "Kata to eleos su Kyrie ke mi kata tas amartias imon",
                de: "Nach deinem Erbarmen, o Herr, und nicht nach unseren Sünden.",
                ar: "كرحمتك يارب ولا كخطايانا.",
                cop_cop: "Ⲕⲁⲧⲁ ⲧⲟ ⲉ̀ⲗⲉⲟⲥ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ ⲕⲉ ⲙⲏ ⲕⲁⲧⲁ ⲧⲁⲥ ⲁ̀ⲙⲁⲣⲧⲓⲁⲥ ⲏ̀ⲙⲱⲛ",
                ar_de: "Ka-rahmatika ya Rab wa la ka-khatayana.",
                cop_ar: "كاطاطو إيه ليه أوس سو كيريه كيه مى كاطاطاس أمرتياس إيمون",
            },
            {
                id: 32,
                speaker: "Priester",
                cop_de: "Ti-ini nak e-hri pa-nib ni-symbolon ente ta-met-rem-hi ti-skhai en-na-hvi-o-ui ensa nek-saji Nthok pe etak-ti e-tot em-pai-shemschi eth-meh em-mysterion Ak-ti ni en-ath-mit analympsis ente tek-sarx khen u-oik nem u-irp",
                de: "Ich bringe dir dar, mein Herr, die Symbole meiner Freiheit. Ich schreibe meine Werke gemäß deinen Worten. Du hast mir den Dienst gegeben, der voller Geheimnisse ist. Du hast mir gegeben, deinen Leib im Brot und im Wein zu erheben.",
                ar: "اقدم لك يا سيدى منشورات حريتي واكتب أعمالي تبعاً لأقوالك. انت الذى أعطيتني هذه الخدمة المملوءة سراً. أعطيتني إصعاد جسدك بخبز وخمر.",
                cop_cop: "Ϯⲓⲛⲓ ⲛⲁⲕ ⲉ̀ϩ̀ⲣⲏⲓ ⲡⲁⲛⲏⲃ ⲛⲓⲥⲩⲙⲃⲟⲗⲟⲛ ⲛ̀ⲧⲉ ⲧⲁⲙⲉⲧⲣⲉⲙϩⲉ ϯⲥϧⲁⲓ ⲛ̀ⲛⲁϩⲃⲏⲟⲩⲓ̀ ⲛ̀ⲥⲁ ⲛⲉⲕⲥⲁϫⲓ Ⲛ̀ⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲕϯ ⲉ̀ⲧⲟⲧ ⲙ̀ⲡⲁⲓϣⲉⲙϣⲓ ⲉⲑⲙⲉϩ ⲙ̀ⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲁⲕϯ ⲛⲏⲓ ⲛ̀ⲁⲑⲙⲓⲧ ⲁⲛⲁⲗⲏⲙⲯⲓⲥ ⲛ̀ⲧⲉ ⲧⲉⲕⲥⲁⲣⲝ ϧⲉⲛ ⲟⲩⲱⲓⲕ ⲛⲉⲙ ⲟⲩⲏⲣⲡ",
                ar_de: "Okaddim laka ya sayedi manshurat horiyati wa aktub a3mali taba3an li-akwalik. Anta allazi a3taytani hazihi el-khidma el-mamlu-a sirran. A3taytani is3ad gasadak bi-khobz wa khamr.",
                cop_ar: "تي ايني ناك إى إهرى بانيف إنى سيمفولون انتى تاميت ريمهى تى اسخاى اننا اهمفيئوى انسا نيكساجى انثوك بى ايتاكتى ايتوت امباى شيمشى اثمية ام ميستيريون آكتى نى ان اثميت آلمبسيس انتى تيك ساركس خين أوأويك نيم أوإيرب",
            },
            {
                id: 33,
                speaker: "Volk",
                cop_de: "Alithos pistevomen",
                de: "Wir glauben.",
                ar: "نؤمن",
                cop_cop: "Ⲁⲗⲏⲑⲱⲥ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ",
                ar_de: "No-min.",
                cop_ar: "أليثوس بيستيف أومين",
            },
            {
                id: 34,
                speaker: "Priester",
                cop_de: "En-ehri gar khen pi-egorh etak-natic en-khitf khen pek-u-osh em-min em-mok nem tek-exusia em-mavatk",
                de: "Denn in jener Nacht, in der du dich mit deinem eigenen Willen und deiner eigenen Macht geben wolltest, nahmst du Brot in deine reinen, makellosen, unbefleckten, seligen und lebensspendenden Hände.",
                ar: "لأنك فى الليلة التى اسلمت فيها ذاتك بإرادتك وسلطانك وحدك. أخذت خبزاً على يديك الطاهرتين اللتين بلا عيب ولا دنس الطوباويتين المحييتين.",
                cop_cop: "Ⲛ̀ϩ̀ⲣⲏⲓ ⲅⲁⲣ ϧⲉⲛ ⲡⲓⲉ̀ϫⲱⲣϩ ⲉ̀ⲧⲁⲕⲛⲁⲧⲏⲓⲕ ⲛ̀ϧⲏⲧϥ ϧⲉⲛ ⲡⲉⲕⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲕ ⲛⲉⲙ ⲧⲉⲕⲉⲝⲟⲩⲥⲓⲁ̀ ⲙ̀ⲙⲁⲩⲁⲧⲕ",
                ar_de: "Li-annaka fi el-layla allati aslamta fiha zataka bi-iradatika wa sultanika wahdak. Akhazta khobzan 3ala yadayka el-tahiratayn allatayn bila 3ayb wa la danas el-tobawiyatayn el-mohyiyatayn.",
                cop_ar: "إن إهرى غار خين بى ايجوره إيتاك ناتيك انخيتف خين بيك أوأوش إممين إمموك نيم تيك اكسوسيا اممافاتك",
            },
            {
                id: 35,
                speaker: "Volk",
                cop_de: "Ten-nahti je fai pe khen u-methmi Amin",
                de: "Wir glauben, dass dieses in Wahrheit so ist. Amen.",
                ar: "نؤمن أن هذا هو بالحقيقة: أمين.",
                cop_cop: "Ⲧⲉⲛⲛⲁϩϯ ϫⲉ ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲁ̀ⲙⲏⲛ",
                ar_de: "No-min anna haza howa bil-hakika: Amin.",
                cop_ar: "تين ناهتى جيه فاى بيه خين أو ميثمى أمين",
            },
            {
                id: 36,
                speaker: "Priester",
                cop_de: "En-ehri gar khen pi-egorh etak-natic en-khitf khen pek-u-osh em-min em-mok nem tek-exusia em-mavatk",
                de: "Denn in jener Nacht, in der du dich mit deinem eigenen Willen und deiner eigenen Macht geben wolltest, nahmst du Brot in deine reinen, makellosen, unbefleckten, seligen und lebensspendenden Hände. Du blicktest hinauf zum Himmel zu Gott, deinem Vater, und Herrn eines Jeden.",
                ar: "لأنك فى الليلة التى اسلمت فيها ذاتك بإرادتك وسلطانك وحدك. أخذت خبزاً على يديك الطاهرتين اللتين بلا عيب ولا دنس الطوباويتين المحييتين. ونظرت إلى فوق نحو السماء إليك الله أبيك وسيد كل أحد",
                cop_cop: "Ⲛ̀ϩ̀ⲣⲏⲓ ⲅⲁⲣ ϧⲉⲛ ⲡⲓⲉ̀ϫⲱⲣϩ ⲉ̀ⲧⲁⲕⲛⲁⲧⲏⲓⲕ ⲛ̀ϧⲏⲧϥ ϧⲉⲛ ⲡⲉⲕⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟⲕ ⲛⲉⲙ ⲧⲉⲕⲉⲝⲟⲩⲥⲓⲁ̀ ⲙ̀ⲙⲁⲩⲁⲧⲕ",
                ar_de: "Li-annaka fi el-layla allati aslamta fiha zataka bi-iradatika wa sultanika wahdak. Akhazta khobzan 3ala yadayka el-tahiratayn allatayn bila 3ayb wa la danas el-tobawiyatayn el-mohyiyatayn. Wa nazarta ila fawk nahwa el-sama ilayka Allah abika wa sayed kol ahad.",
                cop_ar: "إن إهرى غار خين بى ايجوره إيتاك ناتيك انخيتف خين بيك أوأوش إممين إمموك نيم تيك اكسوسيا اممافاتك",
            },
            {
                id: 37,
                speaker: "Priester",
                cop_de: "Etaf-shep-hmot",
                de: "Du danktest",
                ar: "وشكرت",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩⲙⲟⲧ",
                ar_de: "Wa shakarta",
                cop_ar: "إيه طاف شيب أهموت",
            },
            {
                id: 38,
                speaker: "Volk",
                cop_de: "Amin",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "Amin",
                cop_ar: "آمين",
            },
            {
                id: 39,
                speaker: "Priester",
                cop_de: "Af-esmu e-rof",
                de: "Du segnetest es.",
                ar: "وباركته.",
                cop_cop: "Ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ",
                ar_de: "Wa baraktahu.",
                cop_ar: "أف إسمو إيه روف",
            },
            {
                id: 40,
                speaker: "Volk",
                cop_de: "Amin",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "Amin",
                cop_ar: "آمين",
            },
            {
                id: 41,
                speaker: "Priester",
                cop_de: "Af-er-agia-zin em-mof",
                de: "Und heiligtest es.",
                ar: "وقدسته.",
                cop_cop: "Ⲁϥⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ",
                ar_de: "Wa kaddastahu.",
                cop_ar: "أف إير أجيا زين إموف",
            },
            {
                id: 42,
                speaker: "Volk",
                cop_de: "Amin Pistevomen ke omologumen ke doxazomen",
                de: "Amen. Wir glauben, bekennen und verherrlichen.",
                ar: "آمين. نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲁⲙⲏⲛ Ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ",
                ar_de: "Amin. No-min wa na3tarif wa numaggid.",
                cop_ar: "آمين بستيف أومين كيه أومولوغومين كيه ذوكصازومين",
            },
            {
                id: 43,
                speaker: "Priester",
                cop_de: "Ak-phashf ak-tiif en-ni-ete nuk en-agios em-mathitis uoh en-apostolos eth-uab ek-djo mmos Je tshi u-om ebol en-khitf tiru phai gar pe pa-soma Etu-na-phashf ejen thinu nem han-ke-mish ense-tiif e-ep-ko ebol ente ni-novi phai aritf e-pa-er-phmevi",
                de: "Du teiltest und gabst es deinen heiligen Jüngern und reinen Aposteln und sagtest: Nehmt, esst alle davon, denn dies ist mein Leib, der für euch und für viele gebrochen wird zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis",
                ar: "وقسمت وأعطيته لتلاميذك المكرمين القديسين ورسلك الأطهار قائلاً: خذوا كلوا منه كلكم لأن هذا هو جسدي. الذي يقسم عنكم وعن كثيرين يعطى لمغفرة الخطايا هذا اصنعوه لذكرى",
                cop_cop: "Ⲁⲕⲫⲁϣϥ ⲁⲕⲧⲏⲓϥ ⲛ̀ⲛⲏⲉⲧⲉ ⲛⲟⲩⲕ ⲛ̀ⲁ̀ⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲕϫⲱ ⲙ̀ⲙⲟⲥ Ϫⲉ ϭⲓ ⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲱⲙⲁ Ⲉⲧⲟⲩⲛⲁⲫⲁϣϥ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ ⲛⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ ⲛ̀ⲥⲉⲧⲏⲓϥ ⲉ̀ⲡⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫⲙⲉⲩⲓ̀",
                ar_de: "Wa kassamta wa a3taytahu li-talamizika el-mukarramin el-kiddisin wa rusulika el-athar ka-ilan Khuzu kulu minhu kollokum li-anna haza howa gasadi Allazi yuksam 3ankum wa 3an kathirin yu3ta li-maghfirat el-khataya haza isna3uhu li-zikra",
                cop_ar: "أكفاشف أكتيف إن ني إيتي نوك إن أجيوس إم ماثيتيس أووه إن أبوستولوس إثؤواب إكجو إمموس جيه تشي أوأوم إيفول إن خيتف تيرو فاي غار بي باسوما إيتونا فاشف إيجين ثينو نيم هان كي ميش إنسي تيف إي إبكو إيفول إنتيه ني نوفي فاي أريتف إي با إير إفميفي",
            },
            {
                id: 44,
                speaker: "Volk",
                cop_de: "Fai pe khen u-methmi Amin",
                de: "Dies ist es in Wahrheit. Amen.",
                ar: "هذا هو بالحقيقة: أمين.",
                cop_cop: "Ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲁⲙⲏⲛ",
                ar_de: "Haza howa bil-hakika: Amin.",
                cop_ar: "فاى بيه خين أو ميثمى آمين",
            },
            {
                id: 45,
                speaker: "Priester",
                cop_de: "Paireti on menensa throu-u-om ak-tshi en-u-afot ak-thotf ebol khen pu-tah ente ti-bw en-aloli nem u-mo-u",
                de: "Ebenso nahm er, nachdem sie gegessen hatten, den Kelch, mischte von der Frucht des Weinstocks und Wasser.",
                ar: "وهكذا أيضاً بعد أن أكلوا أخذت كأساً ومزجتها من ثمرة الكرمة والماء",
                cop_cop: "Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲙⲉⲛⲉⲛⲥⲁ ⲑⲣⲟⲩⲟⲩⲱⲙ ⲁⲕϭⲓ ⲛ̀ⲟⲩⲁ̀ⲫⲟⲧ ⲁⲕⲑⲟⲧϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲟⲩⲧⲁϩ ⲛ̀ⲧⲉ ϯⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ ⲛⲉⲙ ⲟⲩⲙⲱⲟⲩ",
                ar_de: "Wa hakaza aydan ba3da an akalu akhazta ka-san wa mazagtaha min thamarat el-karma wal-ma",
                cop_ar: "بايريتي أون مينينسا ثرو أوأوم أكتشي إن أو أفوت أكثوتف إيفول خين بوتاه إنتي تيفو إن ألولي نيم أو موأو",
            },
            {
                id: 46,
                speaker: "Priester",
                cop_de: "Etaf-shep-hmot",
                de: "Du danktest.",
                ar: "وشكرت.",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩⲙⲟⲧ",
                ar_de: "Wa shakarta.",
                cop_ar: "إيه طاف شيب أهموت",
            },
            {
                id: 47,
                speaker: "Volk",
                cop_de: "Amin",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "Amin",
                cop_ar: "آمين",
            },
            {
                id: 48,
                speaker: "Priester",
                cop_de: "Af-esmu e-rof",
                de: "Du segnetest ihn.",
                ar: "وباركته.",
                cop_cop: "Ⲁϥⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ",
                ar_de: "Wa baraktahu.",
                cop_ar: "أف إسمو إيه روف",
            },
            {
                id: 49,
                speaker: "Volk",
                cop_de: "Amin",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁⲙⲏⲛ",
                ar_de: "Amin",
                cop_ar: "آمين",
            },
            {
                id: 50,
                speaker: "Priester",
                cop_de: "Af-er-agia-zin em-mof",
                de: "Und heiligtest ihn.",
                ar: "وقدسته.",
                cop_cop: "Ⲁϥⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ",
                ar_de: "Wa kaddastahu.",
                cop_ar: "أف إير أجيا زين إموف",
            },
            {
                id: 51,
                speaker: "Volk",
                cop_de: "Amin Ke palin pistevomen ke omologumen ke doxazomen",
                de: "Amen. Wiederum glauben, bekennen und verherrlichen wir.",
                ar: "آمين. وأيضاً نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲁⲙⲏⲛ Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ",
                ar_de: "Amin. Wa aydan no-min wa na3tarif wa numaggid.",
                cop_ar: "آمين كيه بالين بستيف أومين كيه أومولوغومين كيه ذوكصازومين",
            },
            {
                id: 52,
                speaker: "Priester",
                cop_de: "Je tshi so ebol en-khitf tiru phai gar pe pa-snof ente ti-diathiki em-veri etu-na-phonf ebol ejen thinu nem han-ke-mish en-se-tiif e-ep-ko ebol ente ni-novi phai aritf e-pa-er-phmevi",
                de: "Du kostetest davon und gabst ihn deinen heiligen Jüngern und reinen Aposteln mit den Worten: Nehmt, trinkt alle daraus, denn dies ist mein Blut des neuen Bundes, das für euch und für viele vergossen wird und hingegeben zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis.",
                ar: "وذقت وأعطيتها أيضاً لتلاميذك المكرمين القديسين ورسلك الأطهار قائلاً: خذوا اشربوا منها كلكم لأن هذا هو دمى الذي للعهد الجديد الذي يسفك عنكم وعن كثيرين يعطى لمغفرة الخطايا هذا اصنعوه لذكرى.",
                cop_cop: "Ϫⲉ ϭⲓ ⲥⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲛⲟϥ ⲛ̀ⲧⲉ ϯⲇⲓⲁ̀ⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ ⲉⲧⲟⲩⲛⲁⲫⲟⲛϥ ⲉ̀ⲃⲟⲗ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ ⲛⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ ⲛ̀ⲥⲉⲧⲏⲓϥ ⲉ̀ⲡⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫⲙⲉⲩⲓ̀",
                ar_de: "Wa zoqta wa a3taytaha aydan li-talamizika el-mukarramin el-kiddisin wa rusulika el-athar ka-ilan: Khuzu ishrabu minha kollokum li-anna haza howa dami allazi lil-3ahd el-gadid allazi yusfak 3ankum wa 3an kathirin yu3ta li-maghfirat el-khataya haza isna3uhu li-zikra.",
                cop_ar: "جيه تشي سو إيفول إن خيتف تيرو فاي غار بي باسنوف إنتي تي دياثيكي إمفيري إيتو نافونف إيفول إيجين ثينو نيم هان كي ميش إنسي تيف إي إبكو إيفول إنتي ني نوفي فاي أريتف إي با إير إفميفي",
            },
            {
                id: 53,
                speaker: "Volk",
                cop_de: "Fai on pe khen u-methmi Amin",
                de: "Dies ist es auch in Wahrheit. Amen.",
                ar: "وهذا هو أيضاً بالحقيقة آمين",
                cop_cop: "Ⲫⲁⲓ ⲟⲛ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲁⲙⲏⲛ",
                ar_de: "Wa haza howa aydan bil-hakika Amin.",
                cop_ar: "فاى أون بى خين أو ميثمى آمين",
            },
            {
                id: 54,
                speaker: "Priester",
                cop_de: "Sop gar niben eteten-na-u-om ebol khen pai-oik phai uoh enteten-so ebol khen pai-afot phai ereten-hi-o-ish em-pa-mou ereten-er-omologin en-ta-anastasis iri em-pa-mevi shati-i",
                de: "Denn jedes Mal, wenn ihr von diesem Brot esst, und aus diesem Kelch trinkt, verkündet ihr meinen Tod, bekennt meine Auferstehung und erinnert euch meiner, bis ich wieder komme",
                ar: "لأن كل مرة تأكلون من هذا الخبز وتشربون من هذه الكأس تبشرون بموتي وتعترفون بقيامتي وتذكروني إلى أن أجى",
                cop_cop: "Ⲥⲟⲡ ⲅⲁⲣ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲉⲧⲉⲛⲛⲁⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲱⲓⲕ ⲫⲁⲓ ⲟⲩⲟϩ ⲛ̀ⲧⲉⲧⲉⲛⲥⲱ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲁ̀ⲫⲟⲧ ⲫⲁⲓ ⲉ̀ⲣⲉⲧⲉⲛϩⲓⲱⲓϣ ⲙ̀ⲡⲁⲙⲟⲩ ⲉ̀ⲣⲉⲧⲉⲛⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ⲧⲁⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲓⲣⲓ ⲙ̀ⲡⲁⲙⲉⲩⲓ̀ ϣⲁϯⲓ̀",
                ar_de: "Li-anna kol marra ta-kuluna min haza el-khobz wa tashrabuna min hazihi el-ka-s tubashiruna bi-mawti wa ta3tarifuna bi-kiyamati wa tazkuruni ila an agi.",
                cop_ar: "سوب غار نيفين إيتين نا أو أوم إيفول خين باي أو يك فاي أووه إنتي تين سو إيفول خين باي أفوت فاي إيريتين هي أو يش إمبامو إيرتين إير أمولوجين إنتا أناستاسيس إيرى إمباميفئي شاتى إى",
            },
            {
                id: 55,
                speaker: "Volk",
                cop_ar: "آمين آمين آمين طون ثاناتون صو كيريه كاطانجيلومين.\nكيه تين أجيان صو أناسطاسين: كيه تين أنا ليبسين صو إنتيس أورانيس سيه أومولوغومين.\nسيه إيه نومين سيه إفلوغومين سيه إفخاريستو مين كيريه: كيه ذيه أو ميه طا سو أوثيه أوس إيمون.",
                de: "Amen, Amen, Amen, deinen Tod, o Herr, verkünden wir,\ndeine heilige Auferstehung und deine Himmelfahrt bekennen wir.\nWir loben dich, wir preisen dich, wir danken dir, o Herr, und wir bitten dich, unser Gott.",
                ar: "آمين آمين آمين بموتك يارب نبشر.\nوبقيامتك المقدسة وصعودك إلى السموات نعترف.\nنسبحك نباركك نشكرك يارب ونتضرع إليك يا إلهنا.",
                cop_cop: "Ⲁⲙⲏⲛ ⲁⲙⲏⲛ ⲁⲙⲏⲛ: ⲧⲟⲛ ⲑⲁⲛⲁⲧⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ ⲕⲁⲧⲁⲅⲅⲉⲗⲗⲟⲙⲉⲛ.\nⲔⲉ ⲧⲏⲛ ⲁⲅⲓⲁⲛ ⲥⲟⲩ ⲁⲛⲁⲥⲧⲁⲥⲓⲛ: ⲕⲉ ⲧⲏⲛ ⲁⲛⲁⲗⲏⲙⲯⲓⲛ ⲥⲟⲩ ⲉⲛⲧⲟⲓⲥ ⲟⲩⲣⲁⲛⲟⲓⲥ ⲥⲉ ⲟⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ.\nⲤⲉ ⲩⲙⲛⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲗⲟⲅⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲭⲁⲣⲓⲥⲧⲟⲩⲙⲉⲛ Ⲕⲩⲣⲓⲉ: ⲕⲉ ⲇⲉⲟⲙⲉⲑⲁ ⲥⲟⲩ ⲟ Ⲑⲉⲟⲥ ⲏⲙⲱⲛ.",
                cop_de: "Amyn Amyn Amyn: ton thanaton sou Kyrie kataggellomen.\nKe tyn agian sou anastasin: ke tyn analypsin sou entis ouranis se omologoumen.\nSe ymnoumen: se evlogoumen: se evkharistoumen Kyrie: ke de-ometha sou o Theos imon.",
                ar_de: "Amin Amin Amin: be-mawteka ya Rab nobashir.\nWa be-qiyamateka el moqaddasa wa so3odeka ela el samawat na3taref.\nNosabe7aka nobarikaka nashkoraka ya Rab: wa natadarra3o elayka ya elahona.",
            },
            {
                id: 56,
                speaker: "Priester",
                cop_de: "Hoste oun pennib en-iri em-phmevi em-pek-jin-i e-pesit hijen pi-kahi nem pek-mou en-ref-tankho nem pek-emhav en-shomt en-eho-ou Nem tek-anastasis ebol khen ni-ethmo-out nem pek-jin-she ep-shoi e-nifi-o-ui nem pek-jin-hemsi sa-ouinam em-pek-iot Nem tek-mah-snouti em-parousia eth-ni-ou ebol khen nifi-o-ui etoi en-hoti uoh eth-meh en-ou Ten-er-pros-pherin nak en-ni-ete nuk en-doron ebol khen ni-ete nuk kata hob niben nem ethbe hob niben nem khen hob niben",
                de: "Unser Herr, indem wir deiner Herabkunft auf die Erde gedenken, deines lebensspendenden Todes, und deines dreitägigen Begrabenseins, deiner Auferstehung von den Toten, deiner Auffahrt in den Himmel, deines Sitzens zur Rechten deines Vaters, deines zweiten Kommens vom Himmel, das furchterregend und voll Herrlichkeit ist, wir bringen dir diese deine Opfergaben dar, aus dem, was dein ist, entsprechend allem, für alles und in allem.",
                ar: "فإذا يا سيدنا فيما نحن نصنع ذكر نزولك على الارض وموتك المحيي وقبرك ثلاثة ايام وقيامتك من الاموات. وصعودك الى السموات وجلوسك عن يمين ابيك وظهورك الثاني الآتي من السموات المخوف المملوء مجداً نقرب لك قرابينك من الذى لك على كل حال ومن اجل كل حال وفى كل حال",
                cop_cop: "Ϩⲱⲥⲧⲉ ⲟⲩⲛ ⲡⲉⲛⲛⲏⲃ ⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲫⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕϫⲓⲛⲓ̀ ⲉ̀ⲡⲉⲥⲏⲧ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ ⲛⲉⲙ ⲡⲉⲕⲙⲟⲩ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ ⲛⲉⲙ ⲡⲉⲕⲙ̀ϩⲁⲩ ⲛ̀ϣⲟⲙⲧ ⲛ̀ⲉ̀ϩⲟⲟⲩ Ⲛⲉⲙ ⲧⲉⲕⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉⲑⲙⲱⲟⲩⲧ ⲛⲉⲙ ⲡⲉⲕϫⲓⲛϣⲉ ⲉ̀ⲡϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛⲉⲙ ⲡⲉⲕϫⲓⲛϩⲉⲙⲥⲓ ⲥⲁⲟⲩⲓ̀ⲛⲁⲙ ⲙ̀Ⲡⲉⲕⲓⲱⲧ Ⲛⲉⲙ ⲧⲉⲕⲙⲁϩⲥ̀ⲛⲟⲩϯ ⲙ̀ⲡⲁⲣⲟⲩⲥⲓⲁ̀ ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ ⲟⲩⲟϩ ⲉⲑⲙⲉϩ ⲛ̀ⲱⲟⲩ Ⲧⲉⲛⲉⲣⲡⲣⲟⲥⲫⲉⲣⲓⲛ ⲛⲁⲕ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲕ ⲛ̀ⲇⲱⲣⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲕ ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲉⲑⲃⲉ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ",
                ar_de: "Fa-iza ya sayedina fima nahnu nasna3 zikr nozulika ala el-ard wa mawtika el-mohyi wa kabrika thalathat ayam wa kiyamatika min el-amwat. Wa so3udika ila el-samawat wa golusika an yamin abika wa zuhurika el-thani el-ati min el-samawat el-makhuf el-mamlu magdan nukarrib laka karabinak min allazi laka ala kol hal wa min agl kol hal wa fi kol hal",
                cop_ar: "هوسته أون بين نيب إن إيرى إم إفميفئى إمبيك جين ئى إي بيسيت هيجين بيكاهي نيم بيك مو إنسيف طانخو نيم بيك إمهاف إن شومت إن إيهو أو نيم تيك أناستاسيس إيفول خين ني إيثمو أوت نيم بيك جين شى إي إبشوى إي نيفيؤوى نيم بيك جين هيمسي سا أوينام إمبيك يوت نيم تيك ماه إسنوتى إمباروسيا إثنيو إيفول خين نيفيؤوى إيتوى إن هوتي أووه إثمه إن أو أو تين إير إبروس فيرين ناك إن ني إيتي نوك إن ذورون إيفول خين ني إيتي نوك كاطا هوف نيفين نيم إثفى هوف نيفين نيم خين هوف نيفين",
            },
            {
                id: 57,
                speaker: "Diakon",
                cop_de: "Ou-osht em-pi-hib en-logos ente eph-nouti",
                de: "Verbeugt euch vor dem Lamm, das Wort Gottes.",
                ar: "اسجدوا للحمل كلمة الله",
                cop_cop: "Ⲟⲩⲱϣⲧ ⲙ̀ⲡⲓϩⲓⲏⲃ ⲛ̀ⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫⲛⲟⲩϯ",
                ar_de: "Osgodu lil-hamal kalimat Allah",
                cop_ar: "أو أوشت إم بى هييب إن لوغوس إنتيه إفنوتى",
            },
            {
                id: 58,
                speaker: "Volk",
                cop_de: "Ten hos erok ten esmu erok ten shemshi mmok ten ouosht mmok",
                de: "Wir loben dich, wir preisen dich, wir dienen dir (o Herr) und verbeugen uns vor dir.",
                ar: "نسبحك، نباركك، نخدمك، نسجد لك.",
                cop_cop: "Ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲧⲉⲛⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲧⲉⲛϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ",
                ar_de: "Nusabbihuka nubarikuka nakhdumuka nasjudu laka.",
                cop_ar: "تين هوس إيه روك تين إسمو إيروك تين شمشى إممو ك تين أو أوشت إممو ك",
            },
            {
                id: 59,
                speaker: "Diakon",
                cop_de: "Pros khomin Amin",
                de: "Wir hören. Amen.",
                ar: "ننصت آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ Ⲁⲙⲏⲛ",
                ar_de: "Nunsit Amin.",
                cop_ar: "إبروس خومين: آمين.",
            },
            {
                id: 60,
                speaker: "Priester",
                cop_de: "Ouoh pai-oik men entef-aif en-soma eth-uab entak",
                de: "Und dieses Brot verwandelt er in seinen heiligen Leib.",
                ar: "وهذا الخبز تجعله جسداً مقدساً لك",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲱⲓⲕ ⲙⲉⲛ ⲛ̀ⲧⲉϥⲁⲓϥ ⲛ̀ⲥⲱⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ",
                ar_de: "Wa haza el-khobz tag3aluhu gasadan mukaddasan lak.",
                cop_ar: "أووه باي أويك مين إنتيف أيف إنسوما إثؤواب إنتاك",
            },
            {
                id: 61,
                speaker: "Volk",
                cop_de: "Ti-nahti Amin",
                de: "Wir glauben. Amen",
                ar: "نؤمن.",
                cop_cop: "Ϯⲛⲁϩϯ Ⲁⲙⲏⲛ",
                ar_de: "No-min.",
                cop_ar: "تى ناهتى آمين",
            },
            {
                id: 62,
                speaker: "Priester",
                cop_de: "Ouoh pai-afot de on en-snof ef-tai-out ente ti-diathiki em-veri ntak",
                de: "Und auch diesen Kelch in sein kostbares Blut deines neuen Bundes,",
                ar: "وهذه الكأس أيضاً دماً كريماً لعهدك الجديد",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲁ̀ⲫⲟⲧ ⲇⲉ ⲟⲛ ⲛ̀ⲥⲛⲟϥ ⲉϥⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲧⲉ ϯⲇⲓⲁ̀ⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ ⲛ̀ⲧⲁⲕ",
                ar_de: "Wa hazihi el-ka-s aydan daman kariman li-ahdika el-gadid",
                cop_ar: "أووه باي أفوت ذي أون إنسنوف إفطايوت إنتي تي دياثيكي إمفيري إنتاك",
            },
            {
                id: 63,
                speaker: "Volk",
                cop_de: "Ke palin ti-nahti Amin",
                de: "Wiederum glaube ich. Amen.",
                ar: "وأيضاً نؤمن. آمين",
                cop_cop: "Ⲕⲉ ⲡⲁⲗⲓⲛ ϯⲛⲁϩϯ Ⲁⲙⲏⲛ",
                ar_de: "Wa aydan no-min. Amin.",
                cop_ar: "كيه بالين تى ناهتى آمين",
            },
            {
                id: 64,
                speaker: "Priester",
                cop_de: "Efti em-mof e-ep-ko e-vol ente ni-novi nem ou-onkh en-eneh en-ni-eth-na-chi e-vol en-khitf",
                de: "Unseres Herrn, Gottes und Erlösers Jesus Christus, hingegeben zur Vergebung der Sünden und zum ewigen Leben denen, die an ihm Anteil haben.",
                ar: "يعطى لغفران الخطايا وحياة أبدية لمن يتناول منه",
                cop_cop: "Ⲉϥϯ ⲙ̀ⲙⲟϥ ⲉ̀ⲡⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ ⲛⲉⲙ ⲟⲩⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ ⲛ̀ⲛⲏⲉⲑⲛⲁϭⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ",
                ar_de: "Yu3ta li-ghufran el-khataya wa hayat abadeya liman yatanawal minhu",
                cop_ar: "إفتى إمموف إيبكو إيفول إنتى نى نوفى نيم أو أونخ إن إنيه إن نيئثناتشى إيفول إنخيتف",
            },
            {
                id: 65,
                speaker: "Volk",
                cop_de: "Kyrie eleison Kyrie eleison Kyrie eleison",
                de: "Herr, erbarme dich. Herr, erbarme dich. Herr, erbarme dich.",
                ar: "يارب ارحم. يارب ارحم. يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham. Ya Rab arham. Ya Rab arham.",
                cop_ar: "كيريه إليسون كيريه إليسون كيريه إليسون",
            },
            {
                id: 66,
                speaker: "Priester",
                cop_de: "Se tentho erok Pi-Khristos Pen-nouti ma-tajre ti-kripis ente ti-ek-klesia",
                de: "Ja, wir bitten dich, o Christus, unser Gott befestige das Fundament der Kirche.",
                ar: "نعم نسألك أيها المسيح إلهنا ثبت أساس الكنيسة",
                cop_cop: "Ⲥⲉ ⲧⲉⲛⲧϩⲟ ⲉ̀ⲣⲟⲕ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲙⲁⲧⲁϫⲣⲉ ϯⲕⲣⲏⲡⲓⲥ ⲛ̀ⲧⲉ ⲧⲉⲕⲕⲗⲏⲥⲓⲁ̀",
                ar_de: "Na3am nas-aluka ayuha el-masih ilahuna thabbit asas el-kanisa",
                cop_ar: "سيه تينتهو إيروك بي إخرستوس بين نوتي ما تاجري تي كريبيس إنتي تي إككليسيا",
            },
            {
                id: 67,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 68,
                speaker: "Priester",
                cop_de: "Ti-met-hit en-ou-ot ente ti-agapi mar-es-ven-ou-ni e-vol en-khiten",
                de: "Möge die Herzenseintracht der Liebe in uns Wurzeln schlagen",
                ar: "وحدانية القلب التي للمحبة فلتتأصل فينا.",
                cop_cop: "Ϯⲙⲉⲧϩⲏⲧ ⲛ̀ⲟⲩⲱⲧ ⲛ̀ⲧⲉ ϯⲁ̀ⲅⲁⲡⲏ ⲙⲁⲣⲉⲥⲃⲉⲛⲟⲩⲛⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲉⲛ",
                ar_de: "Wahdaniyat el-kalb allati lil-mahaba faltata-assal fina.",
                cop_ar: "تي ميت هيت إن أو أوت إنتي تي أغابي مار يس فين أوني إيفول إن خيتين",
            },
            {
                id: 69,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 70,
                speaker: "Priester",
                cop_de: "Mar-es-ai-ai en-je ti-meth-mi ente pi-nahti sou-ten nan em-pi-moit ente ti-met-ev-se-vis",
                de: "Möge die Wahrheit des Glaubens wachsen. Ebne uns den Weg der Frömmigkeit",
                ar: "لينمو بر الإيمان. سهل لنا يارب طريق التقوى.",
                cop_cop: "Ⲙⲁⲣⲉⲥⲁⲓⲁⲓ ⲛ̀ϫⲉ ϯⲙⲉⲑⲙⲏⲓ ⲛ̀ⲧⲉ ⲡⲓⲛⲁϩϯ ⲥⲟⲩⲧⲱⲛ ⲛⲁⲛ ⲙ̀ⲫⲙⲱⲓⲧ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ",
                ar_de: "Li-yanmu birr el-iman. Sahhil lana ya Rab tarik el-takwa.",
                cop_ar: "مار يس أي أي إن جيه تي ميثمي إنتي بي ناهتي سو تين نان إم بي مويت إنتي تي ميت إف سيفيس",
            },
            {
                id: 71,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 72,
                speaker: "Priester",
                cop_de: "Ni-man-es-o-ou mo-rou ni-et-ou-amoni em-mo-ou ma-taj-ro-ou",
                de: "Leite die Hirten und stärke die, die durch sie gehütet werden.",
                ar: "الرعاة اضبطهم والذين يرعونهم ثبتهم.",
                cop_cop: "Ⲛⲓⲙⲁⲛⲉⲥⲱⲟⲩ ⲙⲟⲣⲟⲩ ⲛⲏⲉⲧⲟⲩⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲱⲟⲩ ⲙⲁⲧⲁϫⲣⲱⲟⲩ",
                ar_de: "El-ro3ah odbothum wallazin yar3awnahum thabbithum.",
                cop_ar: "ني مانيس أو أو مورو ني إيت أو أموني إممو أو ما تاجرو أو",
            },
            {
                id: 73,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 74,
                speaker: "Priester",
                cop_de: "Moi en-ou-met-sai-e em-pi-kliros ou-eng-kratia en-ni-monakhos nem ni-monakhi",
                de: "Gib dem Klerus Glanz, den Mönchen und Nonnen Askese.",
                ar: "اعط بهاء للإكليروس. نُسكاً للرهبان والراهبات.",
                cop_cop: "Ⲙⲟⲓ ⲛ̀ⲟⲩⲙⲉⲧⲥⲁⲓⲉ ⲙ̀ⲡⲓⲕⲗⲏⲣⲟⲥ ⲟⲩⲉ̀ⲅⲕⲣⲁⲧⲓⲁ̀ ⲛ̀ⲛⲓⲙⲟⲛⲁⲭⲟⲥ ⲛⲉⲙ ⲛⲓⲙⲟⲛⲁⲭⲏ",
                ar_de: "A3ti baha-an lil-ikliros. Nuskan lil-rohban wal-rahibat.",
                cop_ar: "موي إن أو ميت ساي إي إم بي كليروس أو إنج كراتيا إن ني موناخوس نيم ني موناخي",
            },
            {
                id: 75,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 76,
                speaker: "Priester",
                cop_de: "Ou-tou-bo en-ni-et khen ti-par-the-nia ou-onkh en-nanef en-ni-et-khen pi-ga-mos",
                de: "Reinheit denen, die in der Jungfräulichkeit sind, eine gute Lebensführung denen, die in Ehe leben.",
                ar: "طهارة للذين في البتولية. حياة صالحة للذين في الزيجة.",
                cop_cop: "Ⲟⲩⲧⲟⲩⲃⲟ ⲛ̀ⲛⲏⲉⲧ ϧⲉⲛ ϯⲡⲁⲣⲑⲉⲛⲓⲁ̀ ⲟⲩⲱⲛϧ ⲉ̀ⲛⲁⲛⲉϥ ⲛ̀ⲛⲏⲉⲧϧⲉⲛ ⲡⲓⲅⲁⲙⲟⲥ",
                ar_de: "Tahara lillazin fi el-batuliya. Hayat saliha lillazin fi el-ziga.",
                cop_ar: "أو طوفو إن ني إت خين تي بارثينيا أو أونخ إينانيف إن ني إت خين بي غاموس",
            },
            {
                id: 77,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 78,
                speaker: "Priester",
                cop_de: "Ou-nai en-ni-et-khen ti-me-ta-nia ou-met-a-ga-thos en-ni-et-oi en-ra-ma-o",
                de: "Erbarmen den Büßenden, Güte denen, die reich sind.",
                ar: "رحمة للتائبين، صلاحاً للأغنياء.",
                cop_cop: "Ⲟⲩⲛⲁⲓ ⲛ̀ⲛⲏⲉⲧϧⲉⲛ ϯⲙⲉⲧⲁⲛⲟⲓⲁ̀ ⲟⲩⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲛ̀ⲛⲏⲉⲧⲟⲓ ⲛ̀ⲣⲁⲙⲁⲟ̀",
                ar_de: "Rahma lil-ta-ibin, salahan lil-aghniya.",
                cop_ar: "أو ناي إن ني إت خين تي ميتانيا أو ميت أغاثوس إن ني إت أوي إن راما أوع",
            },
            {
                id: 79,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                "id": 80,
                "speaker": "Priester",
                "cop_de": "",
                "de": "Erfolg den Studenten, Arbeit für die Bedürftigen.",
                "ar": "نجاحاً للطلبة، عملاً للمحتاجين",
                "cop_cop": "",
                ar_de: "Nagahan lil-talaba, amalan lil-mohtagin.",
                cop_ar: ""
            },
            {
                id: 81,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 82,
                speaker: "Priester",
                cop_de: "Ou-met-e-pi-kis en-ni-et-tai-out ou-voi-thia en-ni-hi-ki",
                de: "Bescheidenheit den Frommen, Hilfe den Armen.",
                ar: "وداعة للفضلاء ، معونة للمساكين.",
                cop_cop: "Ⲟⲩⲙⲉⲧⲉ̀ⲡⲓⲕⲏⲥ ⲛ̀ⲛⲏⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲟⲩⲃⲟⲏ̀ⲑⲓⲁ̀ ⲛ̀ⲛⲓϩⲏⲕⲓ",
                ar_de: "Wada3a lil-fodala, ma3una lil-masakin.",
                cop_ar: "أو ميت إبي كيس إن ني إت طاي أوت أو فو إيثيا إن ني هيكي",
            },
            {
                id: 83,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 84,
                speaker: "Priester",
                cop_de: "Ni-hel-loi ma-taj-ro-ou ni-et-khen ti-met-ve-ri ma-svo no-ou",
                de: "Stärke die Alten, zügle die Jungen.",
                ar: "الشيوخ قوهم، الذين في الحداثة أدبهم.",
                cop_cop: "Ⲛⲓϧⲉⲗⲗⲟⲓ ⲙⲁⲧⲁϫⲣⲱⲟⲩ ⲛⲏⲉⲧϧⲉⲛ ϯⲙⲉⲧⲃⲉⲣⲓ ⲙⲁⲥ̀ⲃⲱ ⲛⲱⲟⲩ",
                ar_de: "El-shouyoukh kawwihim, allazin fi el-hadasa addibhum.",
                cop_ar: "ني خيللوي ما تاجرو أو ني إت خين تي ميت فيري ما سفو نو أو",
            },
            {
                id: 85,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 86,
                speaker: "Priester",
                cop_de: "Nai-ath-nah-ti ma-tas-tho-ou ma-rou-kin en-je ni-phorj en-te ti-ek-klesia",
                de: "Bringe die Nichtgläubigen zurück. Mögen die Trennungen der Kirche aufhören.",
                ar: "غير المؤمنين ردهم، لتنقض انقسامات الكنيسة.",
                cop_cop: "Ⲛⲁⲓⲁⲑⲛⲁϩϯ ⲙⲁⲧⲁⲥⲑⲱⲟⲩ ⲙⲁⲣⲟⲩⲕⲏⲛ ⲛ̀ϫⲉ ⲛⲓⲫⲱⲣϫ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ̀",
                ar_de: "Gheir el-mo-menin ruddahum, li-tankad inkisamat el-kanisa.",
                cop_ar: "ناي أث ناهتي ما طاس ثو أو مارو كين إن جيه ني فورج إنتي تي إككليسيا",
            },
            {
                id: 87,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 88,
                speaker: "Priester",
                cop_de: "Vol e-vol en-ni-met-vasi-hit en-te ni-he-re-sis a-non de ti-ren op-ten e-khoun e-ti-met-ou-ai en-te ti-met-ev-se-vis",
                de: "Reiße den Hochmut der Häretiker nieder; uns alle aber zähle zur Einheit der Frömmigkeit.",
                ar: "حل تعاظم اهل البدع. ونحن كلنا احسبنا فى وحدانية التقوى.",
                cop_cop: "Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲓⲙⲉⲧⲃⲁⲥⲓϩⲏⲧ ⲛ̀ⲧⲉ ⲛⲓϩⲉⲣⲉⲥⲓⲥ ⲁ̀ⲛⲟⲛ ⲇⲉ ⲧⲏⲣⲉⲛ ⲟⲡⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ϯⲙⲉⲧⲟⲩⲁⲓ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ",
                ar_de: "Hol ta3azam ahl el-beda3. Wa nahnu kulluna ahsibna fi wahdaniyat el-takwa.",
                cop_ar: "فول إيفول إن ني ميت فاسيهيت إنتي ني هيريسيس أنون ذي تيرين أوبتين إيخون إي تي ميت أو واي إنتي تي ميت إف سيفيس",
            },
            {
                id: 89,
                speaker: "Volk",
                cop_de: "Kyrie eleison (3x)",
                de: "Herr erbarme Dich.(3x)",
                ar: "يارب ارحم (3x)",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ (3x)",
                ar_de: "Ya Rab arham (3x)",
                cop_ar: "كيريه إليسون (3x)",
            },
            {
                id: 90,
                speaker: "Priester",
                cop_de: "Ari-phmevi P-chois en-ti-hirini en-te tek-ou-i em-mavats eth-uab en-katholiki en-apostoliki en-ek-klesia",
                de: "Gedenke, Herr, des Friedens deiner einen, einzigen, heiligen, universalen und apostolischen Kirche.",
                ar: "اذكر يارب سلام كنيستك الواحدة الوحيدة المقدسة الجامعة الرسولية",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ⲧⲉⲕⲟⲩⲓ̀ ⲙ̀ⲙⲁⲩⲁⲧⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀",
                ar_de: "Ozkur ya rab salam kanisatika el-wahida el-wahida el-mukaddasa el-gami3a el-rasuliya",
                cop_ar: "أري إفميفئي إبشويس إنتي تي هيريني إنتي تيك أوئي إممافاتس إثؤواب إنكاثوليكي إن أبوستوليكي إن إككليسيا",
            },
            {
                id: 91,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper tis irinis tis agias monis katholikis ke apostolikis orthodoxou tou theou ekklesias",
                de: "Betet für den Frieden der einen heiligen, universalen, apostolischen, und orthodoxen Kirche Gottes.",
                ar: "صلوا من أجل سلام كنيسة الله الواحدة الوحيدة المقدسة الجامعة الرسولية كنيسة الله الأرثوذكسية",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩⲡⲉⲣ ⲧⲏⲥ ⲓⲣⲏⲛⲏⲥ ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲙⲟⲛⲏⲥ ⲕⲁⲑⲟⲗⲓⲕⲏⲥ ⲕⲉ ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏⲥ ⲟ̀ⲣⲑⲟⲇⲟⲝⲟⲩ ⲧⲟⲩ ⲑⲉⲟⲩ ⲉⲕⲕⲗⲏⲥⲓⲁⲥ",
                ar_de: "Sallu min agl salam kanisat Allah el-wahida el-wahida el-mukaddasa el-gami3a el-rasuliya kanisat Allah el-orthodoxia.",
                cop_ar: "بروس إف كساس ثي إي بير تيس إير ينيس تيس أج ياس مونس كا ثو لي كيس كيه أبوستو لي كيس أورثو ذوك سو تو ثي أو إك كلي سي آس",
            },
            {
                id: 92,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya Rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 93,
                speaker: "Priester",
                cop_de: "Entshorp men ari evmev'i Epchois peniot ethouab en archi-episkopos patriarchis Papa Ava Tawadros... Nem nef senio pi ke eshver en litourgos... Mar Ignatius Afrem... Nem nef ke eshver en litourgos peniot en metropolitis Ava Damian nem peniot episkopos Ava Dioskorus",
                de: "Sie besteht von einem Ende des Erdkreises bis zum anderen Ende. Und alle, die in ihr das Wort der Wahrheit aufrecht verkünden. Betet für unser Priesteroberhaupt, den Papst Anba Tawadros, Papst, Patriarch und für seinen Bruder im apostolischen Dienst Mor Ignatius Aphrem II und seine Teilhaber am apostolischen Dienst, unseren ehrwürdigen Vater, Erzbischof Anba Damian, und unseren ehrwürdigen Vater, Bischof Anba Dioskorus",
                ar: "هذه الكائنة من أقصى المسكونة الى أقصاها والذين يفصلون فيها كلمة الحق باستقامة وأولاً أذكر يا رب أبانا الطوباوي رئيس الأساقفة بطريركنا البابا أنبا تواضروس. و أخيه في الخدمه الرسوليه مار اغناطيوس أفرام الثاني وشركاءه في الخدمة الرسولية ابونا المطران المكرم الانبا دميان .و ابونا الاسقف المكرم الانبا ديسقورس",
                cop_cop: "Ǹϣⲟⲣⲡ ⲙⲉⲛ ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲡⲉⲛⲓⲱⲧ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁⲣⲭⲓⲉⲡⲓⲥⲕⲟⲡⲟⲥ ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲑⲉⲟ́ⲇⲱⲣⲟⲥ. Ⲛⲉⲙ ⲡⲉϥⲥⲟⲛ ⲙ̀ⲙⲁⲓⲛⲟⲩϯ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ Ⲙⲁⲣ Ⲓⲅⲛⲁⲧⲓⲟⲥ Ⲉⲫⲣⲉⲙ. Ⲛⲉⲙ ⲛⲉϥⲕⲉⲓ̀ϣ̀ⲫⲉⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ Ⲁⲃⲃⲁ Ⲇⲁⲙⲓⲁⲛ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ Ⲁⲃⲃⲁ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ.",
                ar_de: "Hazihi al-ka'ina min aqsa al-maskouna ila aqsaha... Awalan ozkor ya rab abana al-toubawi... al-Baba Anba Tawadros. Wa akhihi fi al-khidma al-rasouliya Mor Ignatius Aphrem al-thani. Wa shuraka'ahu fi al-khidma al-rasouliya... Anba Damian. Wa... Anba Dioskorus",
                cop_ar: "إنشورب مين آري إفميفئي إبشويس... بابا آفا تواضروس... نيم نيف سنيو... مار اغناطيوس افرام... نيم نيف كيه إشفير إن ليطور غوس بنيوت إن ميتروبوليتيس افا دميان نيم بنيوت إبيسكوبوس افا ديسقوروس",
            },
            {
                id: 94,
                speaker: "Diakon",
                cop_de: "Pros evxastie hiper to archi ereos imon Papa Ava Tawadros, Papa ke Patriarchou. Ke Archiepiskopo tis megalopoleos Alexandrias. Nem nef senio pi ke eshver en litourgos nef patriarchis Mar Ignatius Afrem pi mah snav. Nem nef ke eshver en litourgos peniot en metropolitis Ava Damian nem peniot episkopos Ava Dioskorus. Ke ton orthodoxon imon episkopon.",
                de: "Betet für unser Priesteroberhaupt, den Papst Anba Tawadros, Papst, Patriarch und Bischofoberhaupt der großen Stadt Alexandria und für seinen Bruder im apostolischen Dienst den Patriarch Von antiochien Mor Ignatius Aphrem II und seinen Teilhaber am apostolischen Dienst, unseren ehrwürdigen Vater, Erzbischof Anba Damian, und unseren ehrwürdigen Vater, Bischof Anba Dioskorus und all unsere orthodoxen Bischöfe.",
                ar: "صلوا من أجل رئيس كهنتنا البابا أنبا تواضروس (الثانى) بابا وبطريرك ورئيس أساقفة المدينة العظمى الأسكندرية و أخيه في الخدمه الرسوليه ابينا البطريرك الأنطاكي مار اغناطيوس أفرام الثاني وشركاءه في الخدمة الرسولية ابونا المطران المكرم الانبا دميان .و ابونا الاسقف المكرم الانبا ديسقورس وسائر أساقفتنا الأرثوذكسيين",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲟⲩ ⲁ̀ⲣⲭⲓⲉ̀ⲣⲉⲱⲥ ⲏ̀ⲙⲱⲛ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲑⲉⲟ́ⲇⲱⲣⲟⲥ Ⲡⲁⲡⲁ ⲕⲉ Ⲡⲁⲧⲣⲓⲁⲣⲭⲟⲩ. Ⲕⲉ ⲁ̀ⲣⲭⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲩ ⲧⲏⲥ ⲙⲉⲅⲁⲗⲟⲡⲟⲗⲉⲱⲥ Ⲁ̀ⲗⲉⲝⲁⲛⲇⲣⲓⲁⲥ. Ⲛⲉⲙ ⲛⲉϥⲥⲛⲏⲟⲩ ⲡⲓⲕⲉⲓ̀ϣ̀ⲫⲉⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ Ⲙⲁⲣ Ⲓⲅⲛⲁⲧⲓⲟⲥ Ⲉⲫⲣⲉⲙ ⲡⲓⲙⲁϩ ⲥⲛⲁⲩ. Ⲛⲉⲙ ⲛⲉϥⲕⲉⲓ̀ϣ̀ⲫⲉⲣ ⲛ̀ⲗⲉⲓⲧⲟⲩⲣⲅⲟⲥ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ Ⲁⲃⲃⲁ Ⲇⲁⲙⲓⲁⲛ ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ Ⲁⲃⲃⲁ Ⲇⲓⲟⲥⲕⲟⲣⲟⲥ. Ⲕⲉ ⲧⲱⲛ ⲟ̀ⲣⲑⲟⲇⲟⲝⲱⲛ ⲏ̀ⲙⲱⲛ ⲉ̀ⲡⲓⲥⲕⲟⲡⲱⲛ.",
                ar_de: "Sallou men ajl ra'is kahanatyna al-Baba Anba Tawadros... Wa ra'is asaqifat al-madina al-ozma al-askandariya. Wa akhihi fi al-khidma al-rasouliya... Mor Ignatius Aphrem al-thani. Wa shuraka'ahu fi al-khidma al-rasouliya... Anba Damian. Wa... Anba Dioskorus. Wa sa'ir asaqifatina al-orthodoxiyin.",
                cop_ar: "إبروس إفكصاستيه إيبرطو أرشي إيه ريه أوس إيمون بابا آفا (تواضروس)... كيه أرشي إيه بيسكوبو تيس ميغا لوبو ليؤس أليكسان إدرياس. نيم نيف سنيو بي كيه إشفير إن ليطور غوس نيف بطريارشيس مار اغناطيوس افرام بي ما سناف. نيم نيف كيه إشفير إن ليطور غوس بنيوت إن ميتروبوليتيس افا دميان نيم بنيوت إبيسكوبوس افا ديسقوروس. كيه طون أورثوذكسون إيمون إيه بيسكوبون.",
            },
            {
                id: 95,
                speaker: "Priester",
                cop_de: "Nem ehrei ejen nhetshop mpaima nem nietavenkot. Niepiskopos nihegoumenos nipresbyteros nidiakon nihypodiakon.",
                de: "Und für alle, die hier mit uns anwesend sind, und für die Entschlafenen. Und für alle, die hier mit uns anwesend sind, und für die Entschlafenen.",
                ar: "أذكر يارب الكائنين ههنا الأساقفة والقمامصة والقسوس والشمامسة والابوذياقونين.",
                cop_cop: "Ⲛⲉⲙ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧϣⲟⲡ ⲙ̀ⲡⲁⲓⲙⲁ : ⲛⲉⲙ ⲛⲏⲉⲧⲁⲩⲉⲛⲕⲟⲧ. Ⲛⲓⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ : ⲛⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ : ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ : ⲛⲓⲇⲓⲁ̀ⲕⲱⲛ : ⲛⲓϩⲩⲡⲟⲇⲓⲁ̀ⲕⲱⲛ.",
                ar_de: "Ozkor ya rab al-ka'inin hahuna al-asaqifa wa-l-qamamisa wa-l-qusous wa-l-shamaisa wa-l-aboziaqonin.",
                cop_ar: "نيم إهري إيجن ني إت شوب إم باي ما: نيم ني إت أف إنكوت. ني إبيسكوبوس: ني إيغومينوس: ني بريسفيتيروس: ني دياكون: ني إيبودياكون.",
            },
            {
                id: 96,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper ton hegoumenon ke presbyteron ke diakonon ke hypodiakonon epta tagmaton tou Theou tis ekklesias.",
                de: "Betet für die Erzpriester, Priester, Diakone, Subdiakone und die sieben Weihestufen der Kirche Gottes.",
                ar: "صلوا من أجل القمامصة والقسوس والشمامسة والابوذياقونين وسبع طغمات كنيسة الله.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲏ̀ⲅⲟⲩⲙⲉⲛⲱⲛ ⲕⲉ ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲱⲛ ⲕⲉ ⲇⲓⲁ̀ⲕⲟⲛⲱⲛ ⲕⲉ ⲩ̀ⲡⲟⲇⲓⲁ̀ⲕⲟⲛⲱⲛ ⲉⲡⲧⲁ ⲧⲁⲅⲙⲁⲧⲱⲛ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲧⲏⲥ ⲉⲕⲕ̀ⲗⲏⲥⲓⲁⲥ.",
                ar_de: "Sallou men ajl al-qamamisa wa-l-qusous wa-l-shamaisa wa-l-aboziaqonin wa sab' taghmat kanisat Allah.",
                cop_ar: "بروس إفكساس تيه إيبر تون إيغومينون كيه بريسفيتيرون كيه دياكونون كيه إيبودياكونون إبتا طاغماتون تو ثيئو تيس إككليسِياس.",
            },
            {
                id: 97,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 98,
                speaker: "Priester",
                cop_de: "Nianagnostis, nipsaltis, niexorsistis, nimonachos, niparthenos, nichira, niorphanos, niengkratis, nilaikos. Nem ehrei ejen phmoh tirf nte tekekklesia ethouab, Phnouti nte nipistos.",
                de: "Die Vorleser, Psaltisten, Exorzisten, Mönche, Jungfrauen, Witwen, Waisen, die Asketen und die Laien, und die ganze Fülle deiner heiligen Kirche, o Gott der Gläubigen.",
                ar: "والأغنسطسين والمرتلين والقارئين والرهبان والعذارى والأرامل والأيتام والنساك وعن كل امتلاء كنيستك المقدسة يا إله المؤمنين",
                cop_cop: "Ⲛⲓⲁ̀ⲛⲁⲅⲛⲱⲥⲧⲏⲥ : ⲛⲓⲯⲁⲗⲧⲏⲥ : ⲛⲓⲉⲝⲟⲣⲕⲓⲥⲧⲏⲥ : ⲛⲓⲙⲟⲛⲁⲭⲟⲥ : ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓⲭⲏⲣⲁ : ⲛⲓⲟⲣⲫⲁⲛⲟⲥ : ⲛⲓⲉⲅⲕⲣⲁⲧⲏⲥ : ⲛⲓⲗⲁⲓⲕⲟⲥ : ⲛⲉⲙ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲫⲙⲟϩ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲧⲉⲕⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲉⲑⲟⲩⲁⲃ : Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ.",
                ar_de: "Wal-aghnostisin wal-murtallin wal-qari'in wal-rohban wal-azara wal-aramil wal-aytam wal-nussak wa 'an kol emtela' kanisatak al-muqadasa ya ilah al-mu'minin.",
                cop_ar: "ني أناغنوستيس: ني بسالتيس: ني إكسوركيستيس: ني موناخوس: ني بارثينوس: ني خيرا: ني أورفانوس: ني إنجكراتيس: ني لايكوس. نيم إهري إيجن إفموه تيرف إنتيه تيك إككليسيا إثوواب: إفنوتي إنتيه ني بيستوس.",
            },
            {
                id: 99,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 100,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois nnietaverouro khen timeteusevis, nem nietoi nouro (miproedros).",
                de: "Gedenke, o Herr, jener, die in Frömmigkeit regiert haben",
                ar: "أذكر يارب الذى تملكوا في التقوى والذين هم الآن حكام",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲏⲉⲧⲁⲩⲉⲣⲟⲩⲣⲟ ϧⲉⲛ ϯⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ : ⲛⲉⲙ ⲛⲏⲉⲧⲟⲓ ⲛ̀ⲟⲩⲣⲟ (ⲙⲡⲣⲟⲉⲇⲣⲟⲥ).",
                ar_de: "Ozkor ya rab allazi tamalakou fi al-taqwa wallazina hom al-an hokkam.",
                cop_ar: "آري إفميفئي إبشويس إن ني إت أف إر أورو خين تي ميت إف سيفيس: نيم ني إت أوي إن أورو (إم برويذروس).",
            },
            {
                id: 101,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper ton philochriston imon basileon (proedron).",
                de: "Betet für unsere christusliebenden regierenden",
                ar: "صلوا من حكامنا محبى المسيح.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲫⲓⲗⲟⲭⲣⲓⲥⲧⲱⲛ ⲏ̀ⲙⲱⲛ ⲃⲁⲥⲓⲗⲉⲱⲛ (ⲡⲣⲟⲉⲇⲣⲱⲛ).",
                ar_de: "Sallou men hukkamina muhibbi al-masih.",
                cop_ar: "بروس إفكساس تيه إيبر تون فيلو خريسطون إيمون فاسيليؤون (برويذرون).",
            },
            {
                id: 102,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 103,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois nnensniou mpistos ouoh northodoxos etkhen pipalation nem pistratevma tirf.",
                de: "Gedenke, o Herr, unserer gläubigen orthodoxen Brüder, die in der Regierung und im ganzen Heere sind.",
                ar: "اذكر يا رب إخوتنا المؤمنين الأرثوذكسيين الذين في البلاط وجميع الأجناد",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲛⲥⲛⲏⲟⲩ ⲙ̀ⲡⲓⲥⲧⲟⲥ ⲟⲩⲟϩ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲡⲓⲡⲁⲗⲁⲧⲓⲟⲛ ⲛⲉⲙ ⲡⲓⲥⲧⲣⲁⲧⲉⲩⲙⲁ ⲧⲏⲣϥ.",
                ar_de: "Ozkor ya rab ikhwatana al-mu'minin al-orthodoxiyin allazina fi al-balat wa jami' al-ajnad.",
                cop_ar: "آري إفميفئي إبشويس إن نين سنيو إم بيستوس أووه إن أورثوذكسوس إت خين بي بالاتيون نيم بي ستراتفما تيرف.",
            },
            {
                id: 104,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper ton en to palatio adelphon piston ke orthodoxon ke panton ton stratopedon.",
                de: "Betet für unsere gläubigen orthodoxen Brüder, die in der Regierung und im ganzen Heere sind.",
                ar: "صلوا من أجل الإخوة المؤمنين الأرثوذكسيين الذين فى الجهاز الحكومي وسائر الاجناد.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲉⲛ ⲧⲱ ⲡⲁⲗⲁⲧⲓⲱ ⲁ̀ⲇⲉⲗⲫⲱⲛ ⲡⲓⲥⲧⲱⲛ ⲕⲉ ⲟⲣⲑⲟⲇⲟⲝⲱⲛ ⲕⲉ ⲡⲁⲛⲧⲱⲛ ⲧⲱⲛ ⲥⲧⲣⲁⲧⲟⲡⲉⲇⲱⲛ.",
                ar_de: "Sallou men ajl al-ikhwa al-mu'minin al-orthodoxiyin allazina fi al-jihaz al-hukumi wa sa'ir al-ajnad.",
                cop_ar: "بروس إفكساس تيه إيبر تون إن تو بالاتيو أذيلفون بيسطون كيه أورثوذكسون كيه بانتون تون ستراتوبيذون.",
            },
            {
                id: 105,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 106,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois nnietavini nak ekhoun nnai doron: nem nietavenou ejou: nem nietavenou evol hitotou: moi no-ou tirou mpibeke pievol khen nifioui.",
                de: "Gedenke, o Herr, derer, die dir diese Gaben dargebracht haben, derer, für die sie dargebracht werden und derer, durch die sie dargebracht werden. Gib ihnen allen den himmlischen Lohn .",
                ar: "أذكر يارب الذين قدموا لك هذه القرابين والذين قدمت عنهم والذين قدمت بواسطتهم أعطهم كلهم الأجر الذى من السموات.",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲏⲉⲧⲁⲩⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲛ̀ⲛⲁⲓⲇⲱⲣⲟⲛ : ⲛⲉⲙ ⲛⲏⲉⲧⲁⲩⲉⲛⲟⲩ ⲉ̀ϫⲱⲟⲩ : ⲛⲉⲙ ⲛⲏⲉⲧⲁⲩⲉⲛⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲟⲩ : ⲙⲟⲓ ⲛⲱⲟⲩ ⲧⲏⲣⲟⲩ ⲙ̀ⲡⲓⲃⲉⲭⲉ ⲡⲓⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀.",
                ar_de: "Ozkor ya rab allazina qaddamu laka hazihi al-qarabin wallazina qudimat 'anhum wallazina qudimat bi-wasitatihim a'tihim kollahum al-ajr allazi min al-samawat.",
                cop_ar: "آري إفميفئي إبشويس إن ني إت أف إيني ناك إخون إن ناي ذورون: نيم ني إت أف إنو إجو: نيم ني إت أف إنو إيفول هيطوطو: موي نو أو تيرو إم بي بيكي بي إيفول خين ني فيؤوي.",
            },
            {
                id: 107,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper ton agion timion doron touton ke thysen imon ke prospheronton.",
                de: "Betet für diese heiligen und ehrwürdigen Gaben, für unsere Opfer und für diejenigen, die sie dargebracht haben.",
                ar: "صلوا من أجل هذه القرابين المقدسة الكريمة وتقدماتنا والذين قدموها",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲁ̀ⲅⲓⲱⲛ ⲧⲓⲙⲓⲱⲛ ⲇⲱⲣⲱⲛ ⲧⲟⲩⲧⲱⲛ ⲕⲉ ⲑⲩⲥⲓⲱⲛ ⲏ̀ⲙⲱⲛ ⲕⲉ ⲡ̀ⲣⲟⲥⲫⲉⲣⲟⲛⲧⲱⲛ.",
                ar_de: "Sallou men ajl hazihi al-qarabin al-muqadasa al-karima wa taqdimatina wallazina qaddamouha.",
                cop_ar: "بروس إفكساس تيه إيبر تون أجيون تيميون ذورون توتون كيه ثيسيون إيمون كيه إبروس فيرونتون.",
            },
            {
                id: 108,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 109,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois nnietshop khen nitoou nem nispileon: ouoh nensniou etkhen niechmalosia.",
                de: "Gedenke, o Herr, derer, die in den Bergen und Höhlen leben und unserer Brüder in Gefangenschaft.",
                ar: "اذكر يا رب الساكنين في الجبال والمغاير وإخوتنا الذين في السبي.",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲛⲓⲧⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲥ̀ⲡⲏⲗⲉⲟⲛ : ⲟⲩⲟϩ ⲛⲉⲛⲥⲛⲏⲟⲩ ⲉⲧϧⲉⲛ ⲛⲓⲉⲭⲙⲁⲗⲱⲥⲓⲁ.",
                ar_de: "Ozkor ya rab al-sakinin fi al-jibal wa-l-maghayir wa ikhwatana allazina fi al-saby.",
                cop_ar: "آري إفميفئي إبشويس إن ني إت شوب خين ني طوؤو نيم ني إسبيلئون: أووه نين سنيو إت خين ني إيخمالوسيا.",
            },
            {
                id: 110,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper ton echmaloton.",
                de: "Betet für die Gefangenen.",
                ar: "صلوا من اجل المسبيين",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲱⲛ ⲉⲭⲙⲁⲗⲱⲧⲱⲛ.",
                ar_de: "Sallou men ajl al-masbiyin.",
                cop_ar: "بروس إفكساس تيه إيبر تون إيخمالوطون.",
            },
            {
                id: 111,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 112,
                speaker: "Priester",
                cop_de: "Arihmot no-ou e-han-jin-tastho en-hirinikon e-khoun e-ni-ete nou-ou.",
                de: "Schenke ihnen eine friedliche Rückkehr zu ihren Häusern.",
                ar: "أنعم عليهم بعودةٍ سالمةٍ إلى منازلهم.",
                cop_cop: "Ⲁⲣⲓϩⲙⲟⲧ ⲛⲱⲟⲩ ⲉ̀ϩⲁⲛⲭⲓⲛⲧⲁⲥⲑⲟ ⲛ̀ϩⲓⲣⲏⲛⲓⲕⲟⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲛⲏⲉⲧⲉ ⲛⲟⲩⲟⲩ.",
                ar_de: "An'em 'alayhim be-'awda salima ila manazilihim.",
                cop_ar: "آري هموت نو أو إي هان جين طاس ثو إن هيرينيكون إي خون إي ني إتيه نو أو.",
            },
            {
                id: 113,
                speaker: "Diakon",
                cop_de: "Ouasht em-pi-hiib pi-logos ente Ef-nouti.",
                de: "Verbeugt euch vor dem Lamm, das Wort Gottes.",
                ar: "أُسجُدوا للحَمَلِ كَلِمَةِ اللهِ.",
                cop_cop: "Ⲟⲩⲱϣⲧ ⲙ̀Ⲡⲓϩⲓⲏⲃ ⲡⲓⲗⲟⲅⲟⲥ ⲛ̀ⲧⲉ Ⲫⲛⲟⲩϯ.",
                ar_de: "Osgodou lil-hamal kalimat Allah.",
                cop_ar: "أوشت إم بي هيب بي لوغوس إنتيه إف نوتي.",
            },
            {
                id: 114,
                speaker: "Volk",
                cop_de: "(Eleison) 3x imas o Theos o Patir o Pantokrator. (Eleison) 3x imas o Theos o Sotir imon. (Eleison) 3x imas o Theos ke eleison imas. Kyrie eleison.",
                de: "(Erbarme dich unser) 3x, o Gott, Vater, Allmächtiger. (Erbarme dich unser) 3x, o Gott, unser Erlöser. (Erbarme dich unser) 3x, o Gott, erbarme dich unser. Herr erbarme dich.",
                ar: "(ارحمنا) ٣ يا اللـه الآب يا ضابط الكل. (ارحمنا) ٣ يا اللـه مُخَلِّصنا. (ارحمنا) ٣ يا اللـه ثم ارحمنا. يَا رَبُّ ارْحَمْ.",
                cop_cop: "(Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲡⲁⲧⲏⲣ ⲟ̀ Ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ. (Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲥⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ. (Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲕⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ. Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "(Arhamna) 3x ya Allah al-Ab ya dabet al-kol. (Arhamna) 3x ya Allah mokhallesna. (Arhamna) 3x ya Allah thomma arhamna. Ya Rab arham.",
                cop_ar: "(إليسون) ٣ إيماس أو ثيؤس أو باتير أو بانتوكراطور. (إليسون) ٣ إيماس أو ثيؤس أو سوتير إيمون. (إليسون) ٣ إيماس أو ثيؤس كيه إليسون إيماس. كيريه إليسون.",
            },
            {
                id: 115,
                speaker: "Priester",
                cop_de: "Peklaos gar nem tekekklesia setiho erok : ouoh evol hitotk ephiot nemak : evjo mmos : (Je nai nan) 3x Phnouti Phiot Pipantokrator. (Je nai nan) 3x Phnouti Pensotir. (Je nai nan) 3x Phnouti ouoh nai nan. Kyrie eleison.",
                de: "Denn dein Volk und deine Kirche bitten dich und durch dich den Vater mit dir, indem sie sprechen: (Erbarme dich unser) 3x, o Gott, Vater, Allmächtiger. (Erbarme dich unser) 3x, o Gott, unser Erlöser. (Erbarme dich unser) 3x, o Gott, erbarme dich unser. Herr erbarme dich.",
                ar: "لأنَّ شعبَكَ وكنيستَكَ، يطلبونَ إليكَ، وبكَ، إلى الآبِ معَكَ، قائلينَ: (ارحمنا) ٣ يا اللـه الآب يا ضابط الكل. (ارحمنا) ٣ يا اللـه مُخَلِّصنا. (ارحمنا) ٣ يا اللـه ثم ارحمنا. يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲡⲉⲕⲗⲁⲟⲥ ⲅⲁⲣ ⲛⲉⲙ ⲧⲉⲕⲉⲕⲕ̀ⲗⲏⲥⲓⲁ̀ ⲥⲉϯϩⲟ ⲉ̀ⲣⲟⲕ : ⲟⲩⲟϩ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲕ ⲉ̀Ⲫⲓⲱⲧ ⲛⲉⲙⲁⲕ : ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : (Ⲭⲉ ⲛⲁⲓ ⲛⲁⲛ) ⲅ̅ Ⲫⲛⲟⲩϯ Ⲫⲓⲱⲧ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ. (Ⲭⲉ ⲛⲁⲓ ⲛⲁⲛ) ⲅ̅ Ⲫⲛⲟⲩϯ Ⲡⲉⲛⲥⲱⲧⲏⲣ. (Ⲭⲉ ⲛⲁⲓ ⲛⲁⲛ) ⲅ̅ Ⲫⲛⲟⲩϯ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ. Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "Li-anna sha'baka wa kanisataka yatlubuna ilayka, wa bika, ila al-Ab ma'aka, qa'ilin: (Arhamna) 3x ya Allah al-Ab ya dabet al-kol. (Arhamna) 3x ya Allah mokhallesna. (Arhamna) 3x ya Allah thomma arhamna. Ya Rab arham.",
                cop_ar: "بيك لاؤس غار نيم تيك إككليسيا سيتي هو إيروك: أووه إيفول هيطوطك إي فيوت نيماك: إفجو إمموس: (جي ناي نان) ٣ إفنوتي إفيوت بيبانتوكراطور. (جي ناي نان) ٣ إفنوتي بينسوتير. (جي ناي نان) ٣ إفنوتي أووه ناي نان. كيريه إليسون.",
            },
            {
                id: 116,
                speaker: "Volk",
                cop_de: "(Eleison) 3x imas o Theos o Patir o Pantokrator. (Eleison) 3x imas o Theos o Sotir imon. (Eleison) 3x imas o Theos ke eleison imas. Kyrie eleison.",
                de: "(Erbarme dich unser) 3x, o Gott, Vater, Allmächtiger. (Erbarme dich unser) 3x, o Gott, unser Erlöser. (Erbarme dich unser) 3x, o Gott, erbarme dich unser. Herr erbarme dich.",
                ar: "(ارحمنا) ٣ يا اللـه الآب يا ضابط الكل. (ارحمنا) ٣ يا اللـه مُخَلِّصنا. (ارحمنا) ٣ يا اللـه ثم ارحمنا. يَا رَبُّ ارْحَمْ.",
                cop_cop: "(Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲡⲁⲧⲏⲣ ⲟ̀ Ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ. (Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲥⲱⲧⲏⲣ ⲏ̀ⲙⲱⲛ. (Ⲉⲗⲉⲏ̀ⲥⲟⲛ) ⲅ̅ ⲏ̀ⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲕⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ ⲏ̀ⲙⲁⲥ. Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ.",
                ar_de: "(Arhamna) 3x ya Allah al-Ab ya dabet al-kol. (Arhamna) 3x ya Allah mokhallesna. (Arhamna) 3x ya Allah thomma arhamna. Ya Rab arham.",
                cop_ar: "(إليسون) ٣ إيماس أو ثيؤس أو باتير أو بانتوكراطور. (إليسون) ٣ إيماس أو ثيؤس أو سوتير إيمون. (إليسون) ٣ إيماس أو ثيؤس كيه إليسون إيماس. كيريه إليسون.",
            },
            {

                id: 117,
                speaker: "Priester",
                cop_de: "Ari ehmot em-pek-laos en-ti-met-het en-ou-ot. Moi en-ou-semni em-pi-kosmos. Ou-tho-out en-nane-f em-pi-a-er.",
                de: "Deinem Volk die Herzenseint recht,Gib Sicherheit der Welt und gute witterung der Luft",
                ar: "أنعم على شعبك بوحدانية القلب أعط طمأنينة للعالم واعتدالاً حسناً للهواء.",
                cop_cop: "Ⲁⲣⲓϩⲙⲟⲧ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ⲛ̀ϯⲙⲉⲧϩⲏⲧ ⲛ̀ⲟⲩⲱⲧ : ⲙⲟⲓ ⲛ̀ⲟⲩⲥⲉⲙⲛⲏ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ : ⲟⲩⲑⲱⲟⲩⲧ ⲉⲛⲛⲁⲛⲉϥ ⲙ̀ⲡⲓⲁⲏⲣ.",
                ar_de: "An'em 'ala sha'bika bi-wahdaniyat al-qalb. A'ti tama'ninatan lil-'alam wa i'tidalan hasanan lil-hawa'.",
                cop_ar: "آرى إهموت إمبيك لاؤس إنتى ميت هيت إن أو أوت، موى إن أو سيمنى إمبى كوزموس أو ثوت إينانيف إمبى آ إير.",

                navigationButtons: [
                    {
                        label_ar: "المياه", // The Waters
                        label_de: "Die Gewässer",
                        action: "navigatePage",      // ÄNDERUNG: Neue Seite
                        targetPage: "litany_waters"  // Name der neuen Seite
                    },
                    {
                        label_ar: "الزروع", // The Plants
                        label_de: "Die Saat",
                        action: "navigatePage",
                        targetPage: "litany_plants"
                    },
                    {
                        label_ar: "الأهوية", // The Airs
                        label_de: "Die Lüfte",
                        action: "navigatePage",
                        targetPage: "litany_airs"
                    },
                    {
                        label_ar: "شامله", // Combined
                        label_de: "Zusammenfassung",
                        action: "navigatePage",
                        targetPage: "litany_combined"
                    },

                ]
            },
            {
                id: 118,
                speaker: "Priester",
                cop_de: "Anitou epshoi kata noushi : kata phete phok nemot : ma pounof mpho mpkahi : marouthiki nje nefk'lom : marouashai nje nefoutah. Sevtolf eoujroj nem ouoskh : ouoh ari-ikonomin mpenjinonkh kata peternofri. Smou epiklom nte tirompi hiten tekmetkhristos : ethve nihiki nte peklaos : ethve tikhira nem piorphanos nem pishemmo nem piremnjoili : nem ethvitin tiren kha ni-eterhelpis erok : ouoh ettovh mpekran ethouab. Je nenval nouon niven seerhelpis erok : je nthok etti ntoukhre no-ou khen ouseou enanef. Arioui neman kata tekmetagathos : phet-ti khre nsarx niven : moh nnenhit nrashi nem ounof : hina anon hon ere phroshi ntotin khen hob niven nseou niven : ntenerhouo khen hob niven nagathon.",
                de: "Lass sie ansteigen nach ihrem Maß und gemäß deiner Gnade. Gib dem Antlitz der Erde Freude, dass ihre Furchen bewässert werden und sich ihre Früchte mehren. Bereite den Boden zum Säen und Ernten. Regle unser Leben in geeigneter Weise. Segne den Kranz des Jahres mit deiner Güte, wegen der Armen deines Volkes, wegen der Witwen und Waisen, der Fremden und der Gäste, wegen uns allen, die wir auf dich hoffen und deinen heiligen Namen anrufen. Denn aller Augen hoffen auf dich, dass du ihnen ihre Speise zur rechten Zeit gibst. Handle mit uns nach deiner Güte, der du Nahrung allem Fleisch gibst. Erfülle unsere Herzen mit Freude und Wonne, damit wir in allem alle Zeit genug haben und in jedem guten Werk wachsen.",
                ar: "اصعدها كمقدارها كنعمتك. فرح وجه الأرض ليروا حرثها ولتكثر اثمارها. اعدها للزرع والحصاد ودبر حياتنا كما يليق. بارك اكليل السنة بصلاحك من اجل فقراء شعبك من اجل الأرملة واليتيم والغريب والضيف، ومن اجلنا كلنا نحن الذين نرجوك ونطلب اسمك القدوس لأن اعين الكل تترجاك لأنك أنت الذي تعطيهم طعامهم في حينه. اصنع معنا حسب حسن صلاحك يا معطياً طعاماً لكل جسد. إملأ قلوبنا فرحاً ونعيماً لكي نحن ايضاً اذ يكون لنا الكفاف في كل شيء كل حين نزداد في كل عمل صالح.",
                cop_cop: "Ⲁⲛⲓⲧⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ : ⲕⲁⲧⲁ ⲫⲏⲉⲧⲉ ⲫⲱⲕ ⲛ̀ϩ̀ⲙⲟⲧ : ⲙⲁ ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ : ⲙⲁⲣⲟⲩⲑⲓϧⲓ ⲛ̀ϫⲉ ⲛⲉϥⲕ̀ⲗⲱⲙ : ⲙⲁⲣⲟⲩⲁ̀ϣⲁⲓ ⲛ̀ϫⲉ ⲛⲉϥⲟⲩⲧⲁϩ. Ⲥⲉⲃⲧⲱⲧϥ ⲉ̀ⲟⲩϫ̀ⲣⲟϫ ⲛⲉⲙ ⲟⲩⲱⲥϧ : ⲟⲩⲟϩ ⲁ̀ⲣⲓⲟⲓⲕⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲉⲛϫⲓⲛⲱⲛϧ ⲕⲁⲧⲁ ⲡⲉⲧⲉⲣⲛⲟϥⲣⲓ. Ⲥⲙⲟⲩ ⲉ̀ⲡⲓⲕ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲏⲥⲧⲟⲥ : ⲉⲑⲃⲉ ⲛⲓϩⲏⲕⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ : ⲉⲑⲃⲉ ϯⲭⲏⲣⲁ ⲛⲉⲙ ⲡⲓⲟⲣⲫⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲓϣⲉⲙⲙⲟ ⲛⲉⲙ ⲡⲓⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ : ⲛⲉⲙ ⲉⲑⲃⲏⲧⲉⲛ ⲧⲏⲣⲉⲛ ϧⲁ ⲛⲏⲉ̀ⲧⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ : ⲟⲩⲟϩ ⲉⲧⲧⲱⲃϩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲛⲉⲛⲃⲁⲗ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ : ϫⲉ ⲛ̀ⲑⲟⲕ ⲉⲧϯ ⲛ̀ⲧⲟⲩϧ̀ⲣⲉ ⲛⲱⲟⲩ ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉ̀ⲛⲁⲛⲉϥ. Ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ : ⲫⲏⲉⲧϯ ϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ : ⲙⲟϩ ⲛ̀ⲛⲉⲛϩⲏⲧ ⲛ̀ⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲛⲟϥ : ϩⲓⲛⲁ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲉ̀ⲣⲉ ⲫ̀ⲣⲱϣⲓ ⲛ̀ⲧⲟⲧⲉⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ.",
                ar_de: "As'idha ka-miqdariha ka-ni'matik. Farrih wajh al-ard li-yaraw harthaha wa li-takthor athmaruha. A'idaha lil-zar' wal-hasad wa dabbir hayata-na kama yaliq. Barik iklil al-sana bi-salahik min ajl fuqara' sha'bik min ajl al-armala wal-yatim wal-gharib wal-dayf, wa min ajlina kollina nahnu allazina narjouk wa natlub ismak al-quddus li-anna a'yun al-kol tatarajjak li-annaka anta allazi tu'tihim ta'amahum fi hinih. Isna' ma'ana hasab husn salahik ya mu'tiyan ta'aman li-kol jasad. Imla' qulubana farahan wa na'iman li-kay nahnu aydan iz yakun lana al-kafaf fi kol shay' kol hin nazdad fi kol 'amal salih.",
                cop_ar: "أنيتو إبشوى كاطا نوشى: كاطا فيتيه فوك نإهموت: ما بونوف إم إفهو إم إبكاهى: ماروثيخى إنجيه نيف إكلوم: مارو أشاى إنجيه نيف أوطاه. سيفطوتف إيه أوجروج نيم أو أوسخ: أووه أرى إيكونومين إم بين جين أونخ كاطا بيت إرنوفري. إزمو إيه بى إكلوم إنتيه تى رومبى هيتين تيك ميت إخريسطوس: إثفيه نى هيكى إنتيه بيك لاؤس: إثفيه تى خيرا نيم بى أورفانوس نيم بى شيمو نيم بى ريم إن جولي: نيم إثفيتين تيرين خا نى إت إر هيلبيس إيروك: أووه إت طوفه إم بيك ران إثوواب. جى نين فال إن أو أون نيفين سى إر هيلبيس إيروك: جى إنثوك إت تى إن تو إخرى نو أو خين أو سيو إنانيف. أرى أوى نيمان كاطا تيك ميت أغاثوس: في إت تى إخرى إن ساركس نيفين: موه إن نين هيت إن راشى نيم أونوف: هينا أنون هون إرى إفروشى إنطوتين خين هوب نيفين إن سيو نيفين: إنتين إر هو أو خين هوب نيفين إن أغاثون.",
            },
            {
                id: 119,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 120,
                speaker: "Priester",
                cop_de: "Ou-oujai en-ni-et-shoni : ou-emton en-ni-et-shat.",
                de: "Schenke den Kranken Gesundheit Und Ruhe den Geplagten",
                ar: "شفاء للمرضى، راحة للمعوزين",
                cop_cop: "Ⲟⲩⲟⲩϫⲁⲓ ⲛ̀ⲛⲏⲉⲧϣⲱⲛⲓ : ⲟⲩⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲏⲉⲧϣⲁⲧ.",
                ar_de: "Shifa'an lil-marda, rahatan lil-mu'ozin.",
                cop_ar: "أو أوجاي إن ني إت شوني: أو إمتون إن ني إت شات.",
            },
            {
                id: 121,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 122,
                speaker: "Priester",
                cop_de: "Ou-val e-vol en-ni-et-khen ni-exoristia : ou-met-ref-shop e-rok en-ni-orphanos.",
                de: "Befreie die Verbannten, nimm die Waisen bei dir auf",
                ar: "إطلاقاً للمسبين، قبولاً للأيتام",
                cop_cop: "Ⲟⲩⲃⲁⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉⲧϧⲉⲛ ⲛⲓⲉⲝⲟⲣⲓⲥⲧⲓⲁ̀ : ⲟⲩⲙⲉⲧⲣⲉϥϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲓⲟⲣⲫⲁⲛⲟⲥ.",
                ar_de: "Itlaqan lil-masbiyin, qabulan lil-aytam.",
                cop_ar: "أو فال إفول إن ني إت خين ني إكسوريستيا: أو ميت ريف شوب إيروك إن ني أورفانوس.",
            },
            {
                id: 123,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 124,
                speaker: "Priester",
                cop_de: "Ou-met-ref-ti-totou en-ni-chira : ni-et-hej-hoj ro-shi e-ro-ou e-pi-agathon.",
                de: "Hilf den Witwen, sättig die Bedrückten mit dem Guten",
                ar: "مساعدة للأرامل، المتضايقون أشبعهم بالخيرات.",
                cop_cop: "Ⲟⲩⲙⲉⲧⲣⲉϥϯⲧⲟⲧⲟⲩ ⲛ̀ⲛⲓⲭⲏⲣⲁ : ⲛⲏⲉⲧϩⲉϫϩⲱϫ ⲣⲱϣⲓ ⲉ̀ⲣⲱⲟⲩ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ.",
                ar_de: "Musa'adatan lil-aramil, al-mutadayiqun ashbi'hum bil-khayrat.",
                cop_ar: "أو ميت ريف تي طوطو إن ني خيرا: ني إت هيج هوج روشي إيرو أو إبي أغاثون.",
            },
            {
                id: 125,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 126,
                speaker: "Priester",
                cop_de: "Ni-et-av-hei ma-taho-ou e-rat-ou : ni-et-ohi-e-rat-ou ma-tajro-ou.",
                de: "Richte auf die Gefallenen, stärke die Aufrechtstehenden",
                ar: "الساقطون أقمهم، القيام ثبتهم.",
                cop_cop: "Ⲛⲏⲉⲧⲁⲩϩⲉⲓ ⲙⲁⲧⲁϩⲱⲟⲩ ⲉ̀ⲣⲁⲧⲟⲩ : ⲛⲏⲉⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙⲁⲧⲁϫⲣⲱⲟⲩ.",
                ar_de: "Al-saqitun aqimhum, al-qiyam thabbithum.",
                cop_ar: "ني إت أف هي ما طاهو أو إراتو: ني إت أوهي إراتو ما تاجرو أو.",
            },
            {
                id: 127,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 128,
                speaker: "Priester",
                cop_de: "Ni-et-av-enkot ari-pou-mevi : ni-et-khen ti-homologia shop e-rok en-nou-tovh.",
                de: "Gedenke der Entschlafenen, nimm an die Reue der Büßenden",
                ar: "الراقدون أذكرهم، والمعترفون أقبل إليك اعترافهم.",
                cop_cop: "Ⲛⲏⲉⲧⲁⲩⲉⲛⲕⲟⲧ ⲁ̀ⲣⲓⲡⲟⲩⲙⲉⲩⲓ̀ : ⲛⲏⲉⲧϧⲉⲛ ϯⲟ̀ⲙⲟⲗⲟⲅⲓⲁ̀ ϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲟⲩⲧⲱⲃϩ.",
                ar_de: "Al-raqidun ozkorhum, wal-mu'tarifun iqbal ilayka i'tirafahum.",
                cop_ar: "ني إت أف إنكوت أري بو ميفي: ني إت خين تي هومولوجيا شوب إيروك إن نو توفه.",
            },
            {
                id: 129,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 130,
                speaker: "Priester",
                cop_de: "Ni-ref-er-novi et-av-er-metanoin op-ou nem nek-pistos : nek-pistos op-ou nem nek-martyros.",
                de: "Die Sünder, die Buße getan haben, zählen zu Deinen Gläubigen und Deine Gläubigen zählen zu Deine Märtyrern.",
                ar: "الخطاة الذين تابوا عدهم مع مؤمنيك، ومؤمنوك عدهم مع شهدائك.",
                cop_cop: "Ⲛⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ ⲉ̀ⲧⲁⲩⲉⲣⲙⲉⲧⲁⲛⲟⲓⲛ ⲟ̀ⲡⲟⲩ ⲛⲉⲙ ⲛⲉⲕⲡⲓⲥⲧⲟⲥ : ⲛⲉⲕⲡⲓⲥⲧⲟⲥ ⲟ̀ⲡⲟⲩ ⲛⲉⲙ ⲛⲉⲕⲙⲁⲣⲧⲩⲣⲟⲥ.",
                ar_de: "Al-khotah allazina tabu 'odahum ma'a mu'minik, wa mu'minuka 'odahum ma'a shuhada'ik.",
                cop_ar: "ني ريف إر نوفي إت أف إر ميتانيين أوبو نيم نيك بيستوس: نيك بيستوس أوبو نيم نيك مارتيروس.",
            },
            {
                id: 131,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 132,
                speaker: "Priester",
                cop_de: "Ni-et-khen pai-ma ari-tou ev-ten-thont e-nek-angelos.",
                de: "Den hier Versammelten schenke daß sie Deine Engel nachahmen",
                ar: "الذين ههنا اجعلهم متشبهين بملائكتك.",
                cop_cop: "Ⲛⲏⲉⲧϧⲉⲛ ⲡⲁⲓⲙⲁ ⲁ̀ⲣⲓⲧⲟⲩ ⲉⲩⲧⲉⲛⲑⲱⲛⲧ ⲉ̀ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ.",
                ar_de: "Allazina hahuna ij'alhum mutashabbihin bi-mala'ikatik.",
                cop_ar: "ني إت خين باي ما أري تو إف تين ثونت إينيك أنجيلوس.",
            },
            {
                id: 133,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 134,
                speaker: "Priester",
                cop_de: "Anon de hon kha ni-et-av-tah-mou khen pek-hmot e-khoun e-tek-diakonia enoi en-at-em-psha shop-ten e-rok.",
                de: "Und uns auch, die wir durch Deine Gnade zu Deinem Dienst gerufen wurden, obwohl wir unwürdig sind , nimm zu Dir auf",
                ar: "ونحن أيضاً المدعوين بنعمتك الى خدمتك ونحن غير مستحقين اقبلنا إليك",
                cop_cop: "Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ϧⲁ ⲛⲏⲉ̀ⲧⲁⲩⲑⲁϩⲙⲟⲩ ϧⲉⲛ ⲡⲉⲕϩ̀ⲙⲟⲧ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲉⲕⲇⲓⲁ̀ⲕⲟⲛⲓⲁ̀ ⲉⲛⲟⲓ ⲛ̀ⲁⲧⲙ̀ⲡϣⲁ ϣⲟⲡⲧⲉⲛ ⲉ̀ⲣⲟⲕ.",
                ar_de: "Wa nahnu aydan al-mad'uween bi-ni'matika ila khidmatika wa nahnu ghayr mustahiqqin iqbalna ilayk.",
                cop_ar: "أنون ذي هون خا ني إت أف طهمو خين بيك هموت إخون إتيك دياكونيا إنوي إن أت إم إبشا شوب تين إيروك.",
            },
            {
                id: 135,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 136,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois entisotiria empai-topos ethouab entak phai : nem topos niven : nem monasterion niven ente neniot enorthodoxos.",
                de: "Gedenke, o Herr, des Heils dieses heiligen Ortes, der dir angehört, und aller Ortschaften und aller Klöster unserer orthodoxen Väter.",
                ar: "اذكر يارب خلاص هذا الموضع المقدس الذي لك وكل المواضع وكل اديرة ابائنا الارثوذكسيين.",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧ̀ⲥⲱⲧⲏⲣⲓⲁ̀ ⲙ̀ⲡⲁⲓⲧⲟⲡⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ : ⲛⲉⲙ ⲧⲟⲡⲟⲥ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ.",
                ar_de: "Ozkor ya rab khalas haza al-mawda' al-muqadas allazi laka wa kol al-mawade' wa kol adyirat aba'ina al-orthodoxiyin.",
                cop_ar: "آري إفميفئي إبشويس إنتي سوتيريا إم باي توبوس إثوواب إنتاك فاي: نيم توبوس نيفين: نيم موناستيريون نيفين إنتيه نين يوتي إن أورثوذكسوس.",
            },
            {
                id: 137,
                speaker: "Diakon",
                cop_de: "Prosevxasthe hyper tis sotirias tou kosmou ke tis poleos imon taftis ke pason poleon ke ton choron ke nison ke monasterion.",
                de: "Betet für das Heil der Welt, dieser unserer Stadt, aller Städte, Orte, Inseln und Klöster.",
                ar: "صلوا من أجل خلاص العالم ومدينتنا هذه وسائر المدن والأقاليم والجزائر والأديرة.",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲥⲱⲧⲏⲣⲓⲁⲥ ⲧⲟⲩ ⲕⲟⲥⲙⲟⲩ ⲕⲉ ⲧⲏⲥ ⲡⲟⲗⲉⲱⲥ ⲏ̀ⲙⲱⲛ ⲧⲁⲩⲧⲏⲥ ⲕⲉ ⲡⲁⲥⲱⲛ ⲡⲟⲗⲉⲱⲛ ⲕⲉ ⲧⲱⲛ ⲭⲱⲣⲱⲛ ⲕⲉ ⲛⲏⲥⲱⲛ ⲕⲉ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲱⲛ.",
                ar_de: "Sallou men ajl khalas al-alam wa madinatina hazihi wa sa'ir al-modon wal-aqalim wal-jaza'ir wal-adyira.",
                cop_ar: "بروس إفكساس تيه إيبر تيس سوتيرياس تو كوزمو كيه تيس بوليووس إيمون طافتيس كيه باسون بوليون كيه تون خورون كيه نيسون كيه موناستيريون.",
            },
            {
                id: 138,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 139,
                speaker: "Priester",
                cop_de: "Nem polis niven : nem chora niven : nem ni-thim : nem pou-solsel tirf. Ouoh nahmen tiren evol ha ou-hbon nem ou-mot nem ou-monmen nem ou-katapontismos nem ou-khrom nem ou-echmalosia nte han-barbaros : nem evol ha et-sifi nte pi-shemmo : nem evol ha pi-jin-tonf epshoi nte han-heretikos.",
                de: "Und jeder Stadt, aller Orte, Dörfer und ihrer Umgebung. Bewahre uns alle vor Teuerungen, Seuchen, Erdbeben, Ertrinken, Bränden, dem Angriff und der Entführung durch die Barbaren, den Schwertern der Fremden und vor dem Aufstand von Häretikern.",
                ar: "وكل مدينة وكل كورة والقرى وكل زينتها ونجنا كلنا من الغلاء والوباء والزلازل والغرق والحريق وسبى البربر ومن سيف الغريب ومن قيام الهراطقة.",
                cop_cop: "Ⲛⲉⲙ ⲡⲟⲗⲓⲥ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲭⲱⲣⲁ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲛⲓϯⲙⲓ : ⲛⲉⲙ ⲡⲟⲩⲥⲟⲗⲥⲉⲗ ⲧⲏⲣϥ. Ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ ⲧⲏⲣⲉⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲟⲩϩ̀ⲃⲱⲛ ⲛⲉⲙ ⲟⲩⲙⲟⲩ ⲛⲉⲙ ⲟⲩⲙⲟⲛⲙⲉⲛ ⲛⲉⲙ ⲟⲩⲕⲁⲧⲁⲡⲟⲛⲧⲓⲥⲙⲟⲥ ⲛⲉⲙ ⲟⲩⲭ̀ⲣⲱⲙ ⲛⲉⲙ ⲟⲩⲉⲭⲙⲁⲗⲱⲥⲓⲁ̀ ⲛ̀ⲧⲉ ϩⲁⲛⲃⲁⲣⲃⲁⲣⲟⲥ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲧ̀ⲥⲏϥⲓ ⲛ̀ⲧⲉ ⲡⲓϣⲉⲙⲙⲟ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡ̀ϫⲓⲛⲧⲱⲛϥ ⲉ̀ⲡϣⲱⲓ ⲛ̀ⲧⲉ ϩⲁⲛϩⲉⲣⲉⲧⲓⲕⲟⲥ.",
                ar_de: "Wa kol madina wa kol kora wal-qura wa kol zinatiha wa najjina kollana min al-ghala' wal-waba' wal-zalazil wal-gharaq wal-hariq wa saby al-barbar wa min sayf al-gharib wa min qiyam al-haratiqa.",
                cop_ar: "نيم بوليس نيفين: نيم خورا نيفين: نيم ني تيمي: نيم بو سلسل تيرف. أووه ناهمين تيرين إفول ها أو إهفون نيم أو مو نيم أو مونيمن نيم أو كاتابونتيسموس نيم أو إخروم نيم أو إخمالوسيا إنتيه هان فارفاروس: نيم إفول ها إتسيفي إنتيه بي شيمو: نيم إفول ها إبجين تونف إبشوي إنتيه هان هيريتيكوس.",
            },
            {
                id: 140,
                speaker: "Volk",
                cop_de: "Kyrie eleison",
                de: "Herr erbarme dich.",
                ar: "يارب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham",
                cop_ar: "كيريه إليسون",
            },
            {
                id: 141,
                speaker: "Priester",
                cop_de: "Ari-kataxioin Pchois ntek-er-phmevi en-ni-ethouav tirou etav-ranak isjen pi-eneh. Neniot ethouav: ni-patriarchis ni-prophitis ni-apostolos ni-ref-hish-en-noufi ni-evangelistis ni-martyros ni-homologitis: nem pnevma niven en-thmei etav-jok evol khen phnahti. Enhouo de thi-ethouav ethmeh en-o-ou: etoi em-parthenos en-seou niven: ti-theotokos ethouav ti-agia Maria. Nem pi-agios Ioannis pi-prodromos em-vaptistis ouoh em-martyros: nem pi-agios Stephanos pi-archi-diakonos ouoh em-proto-martyros: nem pi-agios Markos pi-apostolos ethouav en-evangelistis ouoh em-martyros. Nem pi-patriarchis ethouav Severos: nem pi-agios Kyrillos: nem pi-agios Vasilios: nem pi-agios Grigorios. Nem peniot en-dikeos pi-nishti Ava Antonios: nem pi-thmei Ava Pavle: nem pi-shomt ethouav Ava Makari. Nem peniot Ava Ioannis: nem peniot Ava Pishoi: nem na-chois en-ioti ethouav en-romeos Maximos nem Dometios: nem pi-ehme-psit em-martyros ni-helloi ente Shiheet: nem pi-jori ethouav Ava Mosi. Nem peniot Ava Pakhom pha ti-kinonia: nem peniot Ava Shenouti pi-archimandritis: nem peniot Ava Nofer pi-anachoritis: nem peniot Ava Samouil pi-homologitis. Nem ep-choros tirf ente ni-ethouav entak. Nai ete evol hiten nou-tiho nem nou-tovh nai nan tirou ev-sop: ouoh ma-toujon ethve pek-ran ethouav etav-mouti emmof ehrei ejon.",
                de: "Bitte, o Herr, gedenke all deiner Heiligen, die dir von Anbeginn wohlgefallen haben: Unserer heiligen Väter, der Patriarchen, der Propheten, der Apostel, der Verkünder, der Evangelisten, der Märtyrer, der Bekenner und der Seelen aller Rechtschaffenen, die im Glauben vollendet sind. Zu allermeist gedenke, o Herr, der heiligen, ehrenvollen, der immerwährenden Jungfrau, der Mutter Gottes, der reinen, heiligen Maria, und des heiligen Johannes, des Vorläufers, des Täufers und Märtyrers, und des heiligen Stephanus, des Erzdiakons und Ersten der Märtyrer des heiligen Evangelisten Markus, des Apostels und Märtyrers, des heiligen Patriarchen Severus, des heiligen Kyrillus, des heiligen Basilius, des heiligen Gregorius, und unseres Vaters, des gerechten Abba Antonius des Großen, des rechtschaffenen Abba Paul, der heiligen drei Abba Makarius, unseres Vaters Abba Johannes, unseres Vaters Abba Pischoi, meiner beiden Herren, der heiligen Väter Maximus und Domadius die Römer, der 49 Märtyrer, die Ältesten von Schihiet, des starken heiligen Abba Mose, unseres Vaters Abba Pachom, der Vater des Koinobitentums, unseres Vaters Abba Schenouda der Archimandrit, unseres Vaters Abba Noufer der Anachoret unseres Vaters Abba Samuel der Bekenner, Und aller Reihen deiner Heiligen. Durch ihre Gebete und Fürbitten für uns habe Erbarmen mit uns allen zusammen. Errette uns um deines heiligen Namens willen, der über uns ausgerufen ist.",
                ar: "تفضل يا رب أن تذكر جميع القديسين الذي أرضوك منذ البدء آبائنا القديسين رؤساء الآباء والأنبياء والرسل والمبشرين والإنجيليين والشهداء والمعترفين وكل أرواح الصديقين الذين كملوا في الإيمان. وبالأكثر القديسة المملوءة مجداً العذراء كل حين والدة الإله القديسة الطاهرة مريم والقديس يوحنا السابق الصابغ والشهيد والقديس إستيفانوس رئيس الشمامسة وأول الشهداء والقديس مرقس الرسول الطاهر الإنجيلي والشهيد والبطريرك القديس ساويرس والقديس كيرلس والقديس باسيليوس والقديس إغريغوريوس وأبانا الصديق العظيم أنبا أنطونيوس والبار أنبا بولا والثلاثة أنبا مقارات القديسين وأبانا أنبا يحنس وأبانا أنبا بيشوي وأبوانا القديسان الروميان مكسيموس ودوماديوس والتسعة والأربعون شهيداً والقوي القديس أنبا موسي والقديس إيسيذوروس وأبانا أنبا باخوم أب الشركة وأبانا انبا شنودة رئيس المتوحدين وأبانا انبا نفر السائح وأبانا أنبا صموئيل المعترف وكل مصاف قديسيك هؤلاء الذين بسؤالاتهم وطلباتهم إرحمنا كلنا معاً وانقذنا من أجل اسمك القدوس الذي دعي علينا.",
                cop_cop: "Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧⲉⲕⲉⲣⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲩⲣⲁⲛⲁⲕ ⲓⲥϫⲉⲛ ⲡ̀ⲉ̀ⲛⲉϩ. Ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ : ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲓⲡ̀ⲣⲟⲫⲏⲧⲏⲥ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲛⲓⲣⲉϥϩⲓϣⲉⲛⲛⲟⲩϥⲓ ⲛⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ : ⲛⲉⲙ ⲡ̀ⲛⲉⲩⲙⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲑⲙⲏⲓ ⲉ̀ⲧⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫ̀ⲛⲁϩϯ. Ⲛ̀ϩⲟⲩⲟ̀ ⲇⲉ ⲑⲏⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ⲛ̀ⲱ̀ⲟⲩ : ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ ϯⲁ̀ⲅⲓⲁ̀ Ⲙⲁⲣⲓⲁ̀. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡ̀ⲣⲟⲇⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓⲁ̀ⲣⲭⲏⲇⲓⲁ̀ⲕⲟⲛⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲡ̀ⲣⲱⲧⲟⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉⲑⲟⲩⲁⲃ Ⲥⲉⲩⲏⲣⲟⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲕⲩⲣⲓⲗⲗⲟⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲃⲁⲥⲓⲗⲓⲟⲥ : ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲅ̀ⲣⲏⲅⲟⲣⲓⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲇⲓⲕⲉⲟⲥ ⲡⲓⲛⲓϣϯ Ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ : ⲛⲉⲙ ⲡⲓⲑⲙⲏⲓ Ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲛⲉⲙ ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ Ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ : ⲛⲉⲙ ⲛⲁϭⲟⲓⲥ ⲛ̀ⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲣⲱⲙⲉⲟⲥ Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ : ⲛⲉⲙ ⲡⲓϩ̀ⲙⲉ ⲯⲓⲧ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲓϧⲉⲗⲗⲟⲓ ⲛ̀ⲧⲉ Ϣⲓϩⲏⲧ : ⲛⲉⲙ ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ Ⲁⲃⲃⲁ Ⲙⲱⲥⲏ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ̀ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁ̀ⲣⲭⲏⲙⲁⲛⲇⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲛⲟϥⲉⲣ ⲡⲓⲁ̀ⲛⲁⲭⲱⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ. Ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ. Ⲛⲁⲓ ⲉ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲛⲟⲩϯϩⲟ ⲛⲉⲙ ⲛⲟⲩⲧⲱⲃϩ ⲛⲁⲓ ⲛⲁⲛ ⲧⲏⲣⲟⲩ ⲉⲩⲥⲟⲡ : ⲟⲩⲟϩ ⲙⲁⲧⲟⲩϫⲟⲛ ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ⲉ̀ⲧⲁⲩⲙⲟⲩϯ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.",
                ar_de: "Tafaddal ya rab an tazkura jami' al-qadisin allazi ardauka munzu al-bad' aba'ana al-qadisin ro'asa' al-aba' wal-anbiya' wal-rosol wal-mobasherine wal-ingiliyin wal-shuhada' wal-mo'tarefin wa kol arwah al-seddiqin allazina kammalou fi al-iman. Wa bil-akthar al-qadisa al-mamlou'a majdan al-azra' kol hin walidat al-ilah al-qadisa al-tahira Mariam wal-qadis Youhanna al-sabiq al-sabigh wal-shahid wal-qadis Estifanos ra'is al-shamaisa wa awwal al-shuhada' wal-qadis Morqos al-rasoul al-taher al-ingili wal-shahid wal-batriark al-qadis Sawiros wal-qadis Kyrillos wal-qadis Basilios wal-qadis Ghighorios wa abana al-seddiq al-azim Anba Antonios wal-barr Anba Bola wal-thalatha Anba Maqarat al-qadisin wa abana Anba Yohannes wa abana Anba Bishoy wa abawana al-qadisan al-romiyan Maximos wa Domadios wal-tis'a wal-arba'oun shahidan wal-qawi al-qadis Anba Mosa wal-qadis Isidhoros wa abana Anba Pakhom abb al-sharika wa abana Anba Shenouda ra'is al-motawahidin wa abana Anba Nofer al-sa'ih wa abana Anba Samuel al-mo'taref wa kol masaff qadisik ha'ola' allazina bi-so'alatihim wa talabatihim irhamna kollana ma'an wa onqizna min ajl ismik al-quddus allazi do'iya 'alayna.",
                cop_ar: "أري كاتاكسيين إبشويس إنتيك إر إفميفئي إن ني إثوواب تيرو إت أف راناك إيسجين بي إينيه. نين يوتي إثوواب: ني بطريارشيس، ني بروفيتيس، ني أبوستولوس، ني ريف هيش إن نوفي، ني إفانجيليستيس، ني مارتيروس، ني هومولوغيتيس: نيم إبنيفما نيفين إن ثمي إت أف جوك إيفول خين إفناهتي. إن هو أو ذي ثي إثوواب إث ميه إن أو أو: إت أوي إم بارثينوس إن سيو نيفين: تي ثيؤطوكوس إثوواب تي أجيا ماريا. نيم بي أجيوس يوأنس بي برودروموس إم بابتستيس أووه إم مارتيروس: نيم بي أجيوس ستيفانوس بي أرشي دياكونوس أووه إم بروتو مارتيروس: نيم بي أجيوس ماركوس بي أبوستولوس إثوواب إن إفانجيليستيس أووه إم مارتيروس. نيم بي بطريارشيس إثوواب سيفيروس: نيم بي أجيوس كيريللوس: نيم بي أجيوس فاسيليوس: نيم بي أجيوس غريغوريوس. نيم بين يوت إن ذيكيؤس بي نيشتي آفا أنطونيوس: نيم بي ثمي آفا بافلي: نيم بي شومت إثوواب آفا ماكاري. نيم بين يوت آفا يوأنس: نيم بين يوت آفا بيشوي: نيم نا شويس إن يوتي إثوواب إن روميؤس ماكسيموس نيم دوميتيوس: نيم بي هميه بسيت إم مارتيروس ني هللوي إنتيه شيهيت: نيم بي جوري إثوواب آفا موسي. نيم بين يوت آفا باخوم فا تي كينونيا: نيم بين يوت آفا شنوتي بي أرشيمندريتيس: نيم بين يوت آفا نوفير بي أناخوريتيس: نيم بين يوت آفا صموئيل بي هومولوغيتيس. نيم إبخوروس تيرف إنتيه ني إثوواب إنتاك. ناي إتيه إفول هيتين نو تيهو نيم نو توفه ناي نان تيرو إف سوب: أووه ما توجون إثفيه بيك ران إثوواب إت أف موتي إمموف إهري إجون.",
            },
            {
                id: 142,
                speaker: "Diakon",
                cop_de: "Ni-et-osh marou-ta-o-uo en-ni-ran ente nen-ioti ethouab em-patriarchis etav-enkot : Epchois ma-emton en-nou-psy-chi tirou ouoh entef-ka nen-novi nan evol.",
                de: "Die Vorleser sprechen die Namen unserer heiligen Väter, die Patriarchen, die entschlafen sind. Der Herr möge ihren Seelen ewige Ruhe schenken und uns unsere Sünden vergeben.",
                ar: "القارئون فليقولوا أسماء آبائنا القديسين البطاركة الذين رقدوا، الرَّبُّ ينيِّحُ نُفُوسَهُم أجمعينَ، ويغفرُ لنا خطايانا.",
                cop_cop: "Ⲛⲏⲉⲧⲱϣ ⲙⲁⲣⲟⲩⲧⲁⲟⲩⲟ ⲛ̀ⲛⲓⲣⲁⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ : Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Al-qari'un fal-yaqulu asma' aba'ina al-qadisin al-batarika allazina raqadu, Ar-rabbu yunayyihu nufusahum ajma'in, wa yaghfiru lana khatayana.",
                cop_ar: "ني إت أوش مارو طاؤو إن ني ران إنتيه نين يوتي إثوواب إم بطريارشيس إت أف إنكوت : إبشويس ما إمتون إن نو بسيشي تيرو أووه إنتيف كا نين نوفي نان إفول.",
                navigationButtons: [
                    {
                        label_ar: "بي نيشتي", // The Waters
                        label_de: "Die großen Väter",
                        action: "navigatePage",      // ÄNDERUNG: Neue Seite
                        targetPage: "bi_nishti"  // Name der neuen Seite
                    },
                ]
            },
            // el tara7yyyyym
            {
                id: 143,
                speaker: "Volk",
                cop_de: "Ere pou-smou ethouab shopi neman amin. Doxa si Kyrie : Kyrie eleison : Kyrie eleison : Kyrie evlogison : Kyrie anapavson amin.",
                de: "Ihr heiliger Segen sei mit uns. Amen. Ehre sei dir, o Herr, [o Herr, dir sei Ehre]. Herr erbarme dich, Herr erbarme dich. Herr, segne uns. Herr, gib ihnen Ruhe, Amen.",
                ar: "بركتُهُم المُقدَّسةُ فلتكُن معنا، آمين. المجدُ لكَ يا رَبُّ، [يا رَبُّ لكَ المجدُ]، يا رَبُّ ارحَمْ، يا رَبُّ ارحَمْ، يا رَبُّ بارِكنا، يا رَبُّ نَيِّحْهُم، آمين.",
                cop_cop: "Ⲉⲣⲉ ⲡⲟⲩⲥ̀ⲙⲟⲩ ⲉⲑⲟⲩⲁⲃ ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ ⲁ̀ⲙⲏⲛ. Ⲇⲟⲝⲁ ⲥⲓ Ⲕⲩⲣⲓⲉ : Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ : Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ : Ⲕⲩⲣⲓⲉ ⲁ̀ⲛⲁⲡⲁⲩⲥⲟⲛ ⲁ̀ⲙⲏⲛ.",
                ar_de: "Barakatuhum al-muqaddasa faltakun ma'ana, amin. Al-majd laka ya rabb, [ya rabb laka al-majd], ya rabb arham, ya rabb arham, ya rabb barikna, ya rabb nayyih-hum, amin.",
                cop_ar: "إري بوسمو إثوواب شوبي نيمان آمين. ذوكصا سي كيريه: كيريه إليسون: كيريه إليسون: كيريه إفلوجيسون: كيريه أنابافسون آمين.",
            },
            {
                id: 144,
                speaker: "Priester",
                cop_de: "Ariphmevi Pchois nni-ke-kho-ouini : etan-er-pou-mevi m-pistos : nem ni on ete mpen-er-pou-mevi n-orthodoxos. Nai ete anon nem-o-ou hos agathos ouoh m-mai-romi Phnouti.",
                de: "Gedenke, o Herr, der Gläubigen, derer wir gedacht haben, und auch der Orthodoxen, derer wir nicht gedacht haben, gedenke dieser aller und unser, o Gott, als Guter und Menschenliebender.",
                ar: "أذكر يا رب الآخرين الذين ذكرناهم المؤمنين، وأيضًا الذين لم نذكرهم الأرثوذكسيين. هؤلاء ونحنُ معهم، يا الله كصالحٍ ومُحِبٍّ البشر.",
                cop_cop: "Ⲁⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲓⲕⲉⲭⲱⲟⲩⲓⲛⲓ : ⲉ̀ⲧⲁⲛⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀ ⲙ̀ⲡⲓⲥⲧⲟⲥ : ⲛⲉⲙ ⲛⲏ ⲟⲛ ⲉ̀ⲧⲉ ⲙ̀ⲡⲉⲛⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ. Ⲛⲁⲓ ⲉ̀ⲧⲉ ⲁ̀ⲛⲟⲛ ⲛⲉⲙⲱⲟⲩ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ Ⲫⲛⲟⲩϯ.",
                ar_de: "Ozkor ya rab al-akharin allazina zakarnahum al-mu'minin, wa aydan allazina lam nazkurhum al-orthodoxiyin. Ha'ola' wa nahnu ma'ahum, ya Allah ka-salih wa muhibb al-bashar.",
                cop_ar: "أري إفميفئي إبشويس إن ني كيه خو أويني : إت أن إر بو ميفئي إم بيستوس : نيم ني أون إتيه إم بين إر بو ميفئي إن أورثوذكسوس. ناي إتيه أنون نيمو أو هوس أغاثوس أووه إم ماي رومي إف نوتي.",
            },
            {
                id: 145,
                speaker: "Volk",
                cop_de: "Vol evol ko evol ari-synchorin nan Phnouti n-nen-paraptoma : ni-etan-ai-tou khen pen-ouosh : nem ni-etan-ai-tou khen pen-ouosh an. Ni-etan-ai-tou khen ou-emi : nem ni-etan-ai-tou khen ou-met-at-emi. Ni-et-hip nem ni-eth-ouonh evol : Pchois ek-e-kav nan evol.",
                de: "Tilge, vergib und verzeih uns unsere Missetaten, o Gott: die freiwilligen und unfreiwilligen, die bewussten und unbewussten, die sichtbaren und unsichtbaren. Herr, vergib sie uns.",
                ar: "حُلّ واغفِرْ واصفَح لنا يا اللهُ عن زلاّتنا، الَّتي صنعناها بإرادتنا، والَّتي صنعناها بغيرِ إرادتِنا. الَّتي فعلناها بمعرِفَةٍ، والَّتي فعلناها بغيرِ معرفَةٍ. الخفيَّاتِ والظاهراتِ، يا ربُّ اغفِرْها لنا.",
                cop_cop: "Ⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲭⲱ ⲉ̀ⲃⲟⲗ ⲁ̀ⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ ⲛⲁⲛ Ⲫⲛⲟⲩϯ ⲛ̀ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ : ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ ⲁⲛ. Ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲉ̀ⲙⲓ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲉ̀ⲙⲓ. Ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ : Ⲡ̀ϭⲟⲓⲥ ⲉⲕⲉ̀ⲭⲁⲩ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Holl waghfir wasfah lana ya Allah 'an zallatina, allati sana'naha bi-iradatina, wallati sana'naha bi-ghayri iradatina. Allati fa'alnaha bi-ma'rifa, wallati fa'alnaha bi-ghayri ma'rifa. Al-khafiyat wal-zahirat, ya rabb aghfirha lana.",
                cop_ar: "فول إيفول كو إيفول أري سينخورين نان إف نوتي إن نين بارابتومات : ني إت أن أيتو خين بين أو أوش : نيم ني إت أن أيتو خين بين أو أوش أن. ني إت أن أيتو خين أو إيمي : نيم ني إت أن أيتو خين أو ميت أت إيمي. ني إت هيب نيم ني إث أو أونه إيفول : إبشويس إك إي كاف نان إيفول.",
            },
            {
                id: 146,
                speaker: "Priester",
                cop_de: "Nthok ghar pe Efnoti pi-naet fe-et-oo-osh em-efmou an em-pi-ref-er-novi : em-efriti entef-kotf ouoh entef-onkh : ma-taston Efnoti e-khoun e-pek-oujai. Ari-oui neman kata tek-met-agathos : fe-et-iri em-pi-hou-o e-ni-ete-ten-er-etin em-mo-ou ie ni-ete-ten-kati e-ro-ou.",
                de: "Denn du bist es, der barmherzige Gott, der nicht den Tod des Sünders will, sondern dass er sich von seinem Weg abwendet und dass er lebt. Bring uns wieder zurück, o Gott, zu deinem Heil und handle mit uns nach deiner Güte, der du in uns unendlich viel mehr wirkst, als wir erbitten oder verstehen können.",
                ar: "لأنك أنت هو الله الرحوم الذى لا يشاء موت الخاطئ مثل ما يرجع ويحيا. ردنا يا الله الى خلاصك واصنع معنا كصلاحك يا من يصنع أكثر مما نسأل أو نفهم",
                cop_cop: "Ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲡⲉ Ⲫⲛⲟⲩϯ ⲡⲓⲛⲁⲏⲧ ⲫⲏⲉⲑⲟⲩⲱϣ ⲙ̀ⲫ̀ⲙⲟⲩ ⲁⲛ ⲙ̀ⲡⲓⲣⲉϥⲉⲣⲛⲟⲃⲓ : ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲧⲉϥⲕⲟⲧϥ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲱⲛϧ : ⲙⲁⲧⲁⲥⲑⲟⲛ Ⲫⲛⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲉⲕⲟⲩϫⲁⲓ. Ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ : ⲫⲏⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲡⲓϩⲟⲩⲟ̀ ⲉ̀ⲛⲏⲉⲧⲉⲛⲉⲣⲉ̀ⲧⲓⲛ ⲙ̀ⲙⲱⲟⲩ ⲓⲉ ⲛⲏⲉⲧⲉⲛⲕⲁϯ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "Li-annaka anta howa Allah al-rahoum allazi la yasha' mawt al-khate' mithla ma yarji' wa yahya. Roddana ya Allah ila khalasik wa isna' ma'ana ka-salahik ya man yasna' akthar mimma nas'al aw nafham.",
                cop_ar: "إنثوك غار بي إفنوتی بي نائيت فی إثؤو أوش إم إفمون آن إم بي ريف إير نوفي : إم إفريتی إنتيف كوتف أووه إنتيف أونخ : ماتستون إفنوتی إيخون إيبك أوجای. آری أوی نيمان كاطاتيك ميت أغاثوس : فيئيت إيرى ام بي هوؤو إى نيئيتين اريتين ام موؤويى نيئيتين كاتي إيروؤو.",
            },
            {
                id: 147,
                speaker: "Volk",
                cop_de: "Hos per in ke estin : apo geneas is genean : ke pantas tous eonas ton eonon amin.",
                de: "So wie es war und wie es ist, soll es sein von Generation zu Generation und bis in die Ewigkeit der Ewigkeiten, Amen.",
                ar: "كما كان وهكذ يكون، من جيل إلى جيل، وإلى دهر الدهور. آمين.",
                cop_cop: "Ὡⲥ ⲡⲉⲣ ⲏⲛ ⲕⲉ ⲉⲥⲧⲓⲛ : ⲁ̀ⲡⲟ ⲅⲉⲛⲉⲁⲥ ⲓⲥ ⲅⲉⲛⲉⲁⲛ : ⲕⲉ ⲡⲁⲛⲧⲁⲥ ⲧⲟⲩⲥ ⲉ̀ⲱ̀ⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱ̀ⲛⲱⲛ ⲁ̀ⲙⲏⲛ.",
                ar_de: "Kama kan wa hakaza yakun, min jil ila jil, wa ila dahr al-dohour. Amin.",
                cop_ar: "أوس بيه رين كيه إستيه : إستين أبو جيه ني آس يس جيه ني آن : كيه بانضاس طوس إيه أوناس طون إيه أونون آمين.",
            },
            {
                id: 148,
                speaker: "Priester",
                cop_de: "Hina nem khen fai kata ef-riti on khen hob niven : entef-chi-o-ou ouoh entef-chi-smo ouoh entef-chisi : nje pek-nishti en-ran ethouab. Khen hob niven et-ta-iout : ouoh et-es-marout nem pek-yot en-agathos nem pi-pnevma ethouab.",
                de: "Damit dadurch so wie auch in allem verherrlicht, gepriesen und erhöht werde dein heiliger und großer Name, der in allem herrlich und gepriesen ist, zusammen mit deinem guten Vater und dem Heiligen Geist.",
                ar: "لكي بهذا كما أيضاً فى كل شئ يتمجد ويتبارك ويرتفع اسمك العظيم القدوس. فى كل شئ كريم ومبارك مع ابيك الصالح والروح القدس",
                cop_cop: "Ϩⲓⲛⲁ ⲛⲉⲙ ϧⲉⲛ ⲫⲁⲓ ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲟⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥϭⲓⲱ̀ⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓⲥ̀ⲙⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓⲥⲓ : ⲛ̀ϫⲉ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲟⲩⲟϩ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ ⲛⲉⲙ ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ ⲛⲉⲙ ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "Li-kay bi-haza kama aydan fi kol shay' yatamajjad wa yatabarak wa yartafi' ismuka al-azim al-quddus. Fi kol shay' karim wa mubarak ma'a abika al-salih wal-rouh al-qudus.",
                cop_ar: "هينا نيم خين فاى كاطا افريتى أون خين هوف نيفين انتيف تشى أوأو أووه انتيف تشى إزمو أووه انتيف تشيسى انجى بيك نشتى انران اثؤواب. خين هوف نيفين اتطايوت أووه ايتئسمارؤوت نيم بيك يوت أن أغاثوس نيم بى ابنيمفا اثؤواب.",
            },
            {
                id: 149,
                speaker: "Priester",
                cop_de: "Irini pasi.",
                de: "Friede sei mit euch allen.",
                ar: "السلام لجميعكم.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                ar_de: "Al-salam li-jami'ikum.",
                cop_ar: "إيريني باسي.",
            },
            {
                id: 150,
                speaker: "Volk",
                cop_de: "Ke to pnevmati sou.",
                de: "Und mit deinem Geiste.",
                ar: "ولروحك أيضاً.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                ar_de: "Wa li-ruhika aydan.",
                cop_ar: "كيه طو إبنفماتي سو.",
            },
            {
                id: 151,
                speaker: "Priester",
                cop_de: "Peneb Pensotir pimai-romi en-agathos : pi-ref-tanho ente nen-psychi. Phnouti phi-etaf-tif men emmof e-khron ha-ron : sha-ni-en-novi. Phi-ete khen pi-ashai ente pef-nai af-vol e-vol en-ti-met-jaji ente ni-romi. Pi-monogenis en-Nouti fi-et-ki khen kenef em-pef-yot. Kyrie evlogison.",
                de: "O unser Herr, unser Erlöser, gütiger Menschenliebender, Lebensspender unserer Seelen, o Gott, der sich selbst für uns hingegeben hat, uns zu erlösen wegen unserer Sünden, der durch die Fülle seines Erbarmens die Feindschaft der Menschen beendet hat, o einziger Gott, der am Herzen seines Vaters ruht, O Herr, segne. Herr gib den Segen!",
                ar: "يا سيدنا ومخلصنا محب البشر الصالح محيى أنفسنا. يا الله الذى أسلم ذاته عنا خلاصا من اجل خطايانا. الذى بكثرة رحمته حل عداوة البشر. أيها الإله الوحيد الجنس الذى فى حضن أبيه. يا رب بارك.",
                cop_cop: "Ⲡⲉⲛⲛⲏⲃ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ : ⲡⲓⲣⲉϥⲧⲁⲛϧⲟ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ. Ⲫⲛⲟⲩϯ ⲫⲏⲉ̀ⲧⲁϥⲧⲏⲓϥ ⲙⲉⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϧ̀ⲣⲟⲩⲛ ϩⲁⲣⲟⲛ : ϣⲁ ⲛⲓⲉⲛⲛⲟⲃⲓ. Ⲫⲏⲉⲧⲉ ϧⲉⲛ ⲡⲓⲁ̀ϣⲁⲓ ⲛ̀ⲧⲉ ⲡⲉϥⲛⲁⲓ ⲁϥⲃⲱⲗ ⲉ̀ⲃⲟⲗ ⲛ̀ϯⲙⲉⲧϫⲁϫⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ. Ⲡⲓⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ⲛⲟⲩϯ ⲫⲏⲉⲧⲭⲏ ϧⲉⲛ ⲕⲉⲛⲉϥ ⲙ̀ⲡⲉϥⲓⲱⲧ. Ⲕⲩⲣⲓⲉ ⲉⲩⲗⲟⲅⲏⲥⲟⲛ.",
                ar_de: "Ya sayedna wa mokhallesna moheb al-bashar al-saleh mohyi anfosina. Ya Allah allazi aslam zatahu anna khalasan min ajl khatayana. Allazi bi-kathrat rahmatihi hall adawat al-bashar. Ayouha al-ilah al-wahid al-jens allazi fi hodn abihi. Ya rab barik.",
                cop_ar: "بين نيب بين سوتير بي ماي رومي إن أغاثوس : بي ريف تانخو إنتيه نين بسيشي. إف نوتي في إت أف تيف مين إمموف إخرون هارون : شا ني إت نوفي. في إتيه خين بي أشاي إنتيه بيف ناي أف فول إيفول إن تي ميت جاجي إنتيه ني رومي. بي مونوجينيس إن نوتي في إت كي خين كينيف إم بيف يوت. كيريه إفلوجيسون.",
            },
            {
                id: 152,
                speaker: "Volk",
                cop_de: "Amin.",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_ar: "آمين.",
            },
            {
                id: 153,
                speaker: "Priester",
                cop_de: "Phi-etaf-smou em-pi-seou etemmav tynou on smou.",
                de: "Der Du zu jener Zeit gesegnet hast, segne auch jetzt.",
                ar: "يا الذى بارك فى ذلك الزمان الآن ايضا بارك",
                cop_cop: "Ⲫⲏⲉ̀ⲧⲁϥⲥ̀ⲙⲟⲩ ⲙ̀ⲡⲓⲥⲏⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ  ϯⲛⲟⲩ ⲟⲛ ⲥ̀ⲙⲟⲩ.",
                ar_de: "Ya allazi baraka fi zalika al-zaman al-an aydan barik.",
                cop_ar: "في إت أف إزمو إم بي سيو إت إم ماف  تينو أون إزمو.",
            },
            {
                id: 154,
                speaker: "Volk",
                cop_de: "Amin.",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_ar: "آمين.",
            },
            {
                id: 155,
                speaker: "Priester",
                cop_de: "Phi-etaf-er-hagiaz-in em-pi-seou tynou etemmav on ari-hagiaz-in",
                de: "Der Du zu jener Zeit geheiligt hast, heilige auch jetzt.",
                ar: "يا الذى قدس فى ذلك الزمان الآن ايضا قدس",
                cop_cop: "Ⲫⲏⲉ̀ⲧⲁϥⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲡⲓⲥⲏⲟⲩ ϯⲛⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ ⲟⲛ ⲁ̀ⲣⲓⲁ̀ⲅⲓⲁⲍⲓⲛ.",
                ar_de: "Ya allazi qaddasa fi zalika al-zaman al-an aydan qaddis.",
                cop_ar: "فيئيطاف اير أجيازين إمبى سيو تينو أون آرى أجيازين.",
            },
            {
                id: 156,
                speaker: "Volk",
                cop_de: "Amin.",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_ar: "آمين.",
            },
            {
                id: 157,
                speaker: "Priester",
                cop_de: "Phi-etaf-fosh em-pi-seou tynou etemmav on fosh",
                de: "Der Du zu jener Zeit geteilt hast, teile auch jetzt",
                ar: "يا الذى قسم فى ذلك الزمان الآن ايضا قسم",
                cop_cop: "Ⲫⲏⲉ̀ⲧⲁϥⲫⲱϣ ⲙ̀ⲡⲓⲥⲏⲟⲩ ϯⲛⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ ⲟⲛ ⲫⲱϣ.",
                ar_de: "Ya allazi qassama fi zalika al-zaman al-an aydan qassim.",
                cop_ar: "فيئيطاف فوش إمبى سيو تينو أون فوش.",
            },
            {
                id: 158,
                speaker: "Volk",
                cop_de: "Amin.",
                de: "Amen.",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "Amin.",
                cop_ar: "آمين.",
            },
            {
                id: 159,
                speaker: "Priester",
                cop_de: "Phi-etaf-ti e-totou en-nef-agios em-mathitis ouoh en-apostolos ethouab em-pi-seou etemmav : on pen-neib moi nan nem pek-laos tirf : Pi-pantokrator Epchois Pen-nouti.",
                de: "Der Du Deinen heiligen Jüngern und reinen Aopsteln zu jener Zeit gegeben hast , gib jetzt auch uns, o unser Herr , und deinem ganzen Volk, o , Allmächtiger, Herr , unser Gott.",
                ar: "يا الذى أعطى تلاميذه القديسين ورسله الأطهار فى ذلك الزمان الآن أيضاً يا سيدنا اعطنا وكل شعبك يا ضابط الكل الرب إلهنا",
                cop_cop: "Ⲫⲏⲉ̀ⲧⲁϥϯ ⲉ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲉϥⲁ̀ⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲙ̀ⲡⲓⲥⲏⲟⲩ ⲉ̀ⲧⲉⲙⲙⲁⲩ : ⲟⲛ ⲡⲉⲛⲛⲏⲃ ⲙⲟⲓ ⲛⲁⲛ ⲛⲉⲙ ⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ : Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡ̀ϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.",
                ar_de: "Ya allazi a'ta talamizahu al-qadisin wa rosalahu al-athar fi zalika al-zaman al-an aydan ya sayedna a'tina wa kol sha'bika ya dabet al-kol al-rabbu ilahuna.",
                cop_ar: "في إت أف تي إي طوطو إن نيف أجيوس إم ماثيتيس أووه إن أبوستولوس إثوواب إم بي سيو إت إم ماف : أون بين نيب موي نان نيم بيك لاؤس تيرف : بي بانتوكراطور إبشويس بين نوتي.",
            },
            {
                id: 160,
                speaker: "Diakon",
                cop_de: "Amin. Amin. Prosevxasthe!",
                de: "Amen. Amen. Betet!",
                ar: "آمين آمين صَلُّوا.",
                cop_cop: "Ⲁⲙⲏⲛ. Ⲁⲙⲏⲛ ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.",
                ar_de: "Amin amin sallu.",
                cop_ar: "آمين. آمين بروسفكساس تيه.",
            },
            {
                id: 161,
                speaker: "Volk",
                cop_de: "Kyrie eleison.",
                de: "Herr erbarme dich.",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "Ya rab arham.",
                cop_ar: "كيريه إليسون.",
            },
            {
                id: 162,
                speaker: "Priester",
                cop_de: "Irini pasi.",
                de: "Friede sei mit euch!",
                ar: "السَّلَامُ لِلْكُلِّ.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                ar_de: "Al-salam lil-koll.",
                cop_ar: "إيريني باسي.",
            },
            {
                id: 163,
                speaker: "Volk",
                cop_de: "Ke to pnevmati sou.",
                de: "Und mit deinem Geiste.",
                ar: "وَلِرُوحِكَ أَيْضاً.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                ar_de: "Wa li-ruhika aydan.",
                cop_ar: "كيه طو إبنفماتي سو.",
            },
            {
                id: 164,        // el qesma n3mel hyper limks w n2oto 
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
        ],
    },

    // --- CYRILLUS LITURGIE (Kerollosy) ---
    kerollosy: {
        title: {
            de: "Die Liturgie des Hl. Cyrillus",
            ar: "القداس الكيرلسي",
        },
        content: [
            {
                id: 1,
                speaker: "Priester",
                cop_de: "",
                de: "Betet",
                ar: "صلوا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إشلـــــــيل",
            },
            {
                id: 2,
                speaker: "Diakon",
                cop_de: "",
                de: "Erhebt euch zum Gebet",
                ar: "للصلاة قفوا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيه بى إبروس إفشى إسطاثى تيه",
            },
            {
                id: 3,
                speaker: "Priester",
                cop_de: "",
                de: "Der Friede seit mit allen",
                ar: "السلام لجميعكم",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيرينى باسى",
            },
            {
                id: 4,
                speaker: "Volk",
                cop_de: "",
                de: "Und mit deinem Geiste",
                ar: "ولروحك أيضا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "كيه طو إبنفماتى سو",
            },
            {
                id: 5,
                speaker: "Priester",
                cop_ar: "",
                de: "O Urheber des Lebens , König der Ewigkeiten Gott, vor dem jedes Knie  sich beugt im Himmel und auf Erden und unter der Erde! Vor dem alle sich neigen und unterwerfen mit dem Joch der Sklaverei unter die Macht des Zepters seines Königtums! Er, den die Heerscharen der Engel, die himmlischen Ränge und die Geistwesen verherrlichen mit einer Stimme ohne Unterlass seine Göttlichkeit aussprechend. Es gefällt dir, dass wir schwache Irdische dir dienen, nicht wegen der Reinheit unserer Hände, denn wir haben das Rechte auf Erden nicht getan, sondern weil es dein Willen ist, uns Elenden und Unwürdigen von deiner Reinheit zu geben. Nimm uns auf zu dir, o gütiger Menschenliebender, denn wir nähern uns deinem heiligen Altar nach deiner Gnade. Mache uns deines himmlischen Friedens würdig, der deiner Göttlichkeit entspricht und voller Erlösung ist, damit wir ihn uns gegenseitig in vollkommener Liebe geben und einander mit einem heiligen Kuss küssen.",
                ar: "یا رئيس الحياة وملك الدهور، اللهم الذي تجثو له كل ركبة ما في السـمـوات ومـا على الأرض ومـا تحت الأرض، الذى الكل مـذلول وخاضع بعتق العبـودية تحت خـضـوع قضيب ملكه، الذي تمجـده لأجناد الملائكية، والطغمات السمائية، والطبائع العقلية، بصوت لا يسكت ناطق بألوهيته. وإِذ سررت بنا نحن أيضا الضعفاء الأرضيين أن نخدمك، لا من أجل نقاوة أيدينا، لأننا لم نفعل الصلاح على الأرض، بل مريداً أن تعطينا نحن البائسين غير المستحـقين من طهرك، اقبلنا ليك أيها الصالح مـحب البشر إذ ندنو من مـذبحك المقدس ككثرة رحمتك. واجعلنا أهلاً للسلام السمائي اللائق بلاهوتك والمملوء خلاصاً، لنعطيه بعضنا لبعض بمحبة كاملة، ونقبل بعضنا بعضاً بقبلة مقدسة. ",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 6,
                speaker: "Diakon",
                cop_de: "",
                de: "Betet für den vollkommenen Frieden, für die Liebe und die apostolischen reinen Küsse.",
                ar: "صلوا من أجل السلام الكامل والمحبة والقبلة الطاهرة الرسولية",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إبروس افكصاستيه إي برتيس تيه لياس إيرينيس كيه آغابيس كيه طون آجيون إسباسمون طون أبوسطولون",
            },
            {
                id: 7,
                speaker: "Volk",
                cop_de: "",
                de: "Herr erbarme dich",
                ar: "يارب ارحم ",
                cop_cop: "",
                ar_de: "",
                cop_ar: "كيريه ليسون",
            },
            {
                id: 8,
                speaker: "Priester",
                cop_ar: "",
                de: "Nicht aus niedriger Gesinnung, die dir Ehrfurcht verweigert, nicht mit trügerischen Gedanken voll bösen Verrats, ohne dass unser Willen mit Boshaftigkeit übereinstimmt,  sondern aus dem Wunsch unserer Seelen und dem Jubel unserer Herzen, weil wir das große vollkommene Zeichen, das der Liebe deines einziges Sohnes gehört, erhalten haben. Weise uns, deine Diener, wegen des Makels unserer Sünden nicht zurück, weil du als Schöpfer unserer Natur weißt, daß kein von einer Frau Geborener vor dir gerechtfertigt ist. Mache uns also bereit, o Herr, mit reinem Herzen und mit von deiner Gnade erfüllter Seele vor dir zu stehen und dieses heilige, lebendige, geistige und unblutige Opfer  darzubringen zum Nachlass unserer Sünden und zur Vergebung der Unwissenheit deines Volkes, denn du bist ein gnädiger und barmherziger Gott.",
                ar: "لا بحاسة مرذولة رافضة لمخافتك. ولا بفكر غاش مملوء من شر الخائن، غير متفقة نياتنا في الخبث، بل برغبة أنفسنا وتهليل قلوبنا، إذ لنا العلامة العظيمة الكاملة التي لمحبة ابنك الوحيد ولا تطرحنا نحن عبيدك من أجل دنس خطايانا، لأنك أنت العارف كخالق جبلتنا أنه ليس مولود إمرأة يتزكي أمامك. فأجعلنا إذاً أهلا يا سيدنا بقلب طاهر ونفس مملوءة من نعمتك أن نقف أمامك ونقدم لك هذه الصعيدة المقدسة الناطقة الروحانية غير الدموية صفحاً لزلاتنا وغفراناً لجهالات شعبك لأنك أنت إله رؤوف متحنن.",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 9,
                speaker: "Diakon",
                cop_de: "",
                de: "Küsst einander mit einem heiligen Kuss. (Herr erbarme Dich)* 3 Ja o Herr Jesus Christus, Sohn Gottes, erhöre uns und erbarme Dich unser. Tretet heran nach der Vorschrift, steht in Ehrfurcht und schaut nach Osten. Wir hören.",
                ar: ".قبلوا بعضكم بعضاً بقبلةٍ مقدسة. (يارب ارحم)* ۳ نعم يارب الذي هو يسوع المسيح ابن الله الحي، اسمعنا وارحمنا. تقدموا تقدموا تقدموا على الرسم، قفوا برعدة، والي الشرق أنظروا. ننصت",
                cop_cop: "",
                ar_de: "",
                cop_ar:
                    "أسـپـاذسـتي ألليلوس إن فـيلـيـمـاتی  آجـيو. (كيريي إليسوس) * ۳ نای كيريي إيتي فای پي إيسـوس پي إخـرسـتـوس إبشير إم إفنوتى سوتيم إيرون أووه ناي نان. إبروسفرين كاطا إطربو إستـاثيتي كـاطـا إطرومـوايس أناطولاس إفليـبساتـي إبروس خـومين. ",
            },
            {
                id: 10,
                speaker: "Volk",
                cop_de: "",
                de: "Durch die Fürsprache der Mutter Gottes, der Heiligen Maria, vergib uns, o Herr, unsere Sünden durch Deine Gnade.Wir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist,denn du bist (auferstanden/gekommen) und hast uns erlöst. Erbarmen des Friedens, Opfer des Lobes ",
                ar: "بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لأنك (أتيت/قُمت) وخلصتنا رحمة السلام ذبيحة التسبيح",
                cop_cop: "",
                ar_de: "",
                cop_ar:
                    "هيتين نيه إبريسفيا إنتيه تى ثيه أوطوكوس إثؤواب ماريا: إبتشويس آرى إهموت نان إمبى كو إيفول إنتيه نين نوفي. تين أوأوشت إمموك أو بخرستوس: نيم بيك يوت إن آغاثوس: جيه (آك إي/أكطونك) أكسوتي إممون: إيه ليه أوس إيرينيس ثي سيا إيه نيه ثيه أوس",
            },
            {
                id: 11,
                speaker: "Priester",
                cop_de: "",
                de: "Der Herr sei mit euch allen",
                ar: "الرب مع جميعكم.",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أوكيريوس ميه طا بانضون إممون",
            },
            {
                id: 12,
                speaker: "Volk",
                cop_de: "",
                de: "Und mit deinem Geiste",
                ar: "ومع روحك أيضاً",
                cop_cop: "",
                ar_de: "",
                cop_ar: "كيه ميه طا طو إبنفما طوسو",
            },
            {
                id: 13,
                speaker: "Priester",
                cop_de: "",
                de: "Erhebt Eure Herzen !",
                ar: "إرفعوا قلوبكم",
                cop_cop: "",
                ar_de: "",
                cop_ar: "آنو إيمون طاذكارذياس",
            },
            {
                id: 14,
                speaker: "Volk",
                cop_de: "",
                de: "Wir haben sie beim Herrn",
                ar: "هي عند الرب",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيه خومين إبروس طون كيريون",
            },
            {
                id: 15,
                speaker: "Priester",
                cop_de: "",
                de: "Lasst uns dem Herrn danken",
                ar: "فلنشكر الرب",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيفخاريستى صومين طو كيريو",
            },
            {
                id: 16,
                speaker: "Volk",
                cop_de: "",
                de: "Würdig und recht",
                ar: "مستحق وعادل",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أكسيون كيه ذى كيه أون",
            },
            {
                id: 17,
                speaker: "Priester",
                cop_ar: "",
                de: "Würdig und recht, würdig und recht, würdig und recht: Es ist in Wahrheit würdig und recht, heilig, angemessen und nützlich für unsere Seelen, unsere Leiber und unseren Geist! Der du bist, Meister, Herr, Gott, Vater, Allmächtiger ! Zu jeder Zeit und an jedem Ort deiner Herrschaft, oben wir dich, preisen wir dich, segnen wir dich, dienen wir dir, beten wir dich an, danken dir und verherrlichen dich. Und wir bekennen uns vor dir Tag und Nacht mit nie ruhenden Lippen, mit unruhigen Herzen und mit Lobpreis ohne Unterlass. Du bist es, der die Himmel geschaffen hat und was in den Himmeln ist, die Erde und was auf ihr ist, die Meere, Flüsse, Wasserquellen und Seen und alles was darin ist Du bist es, der den Menschen nach deinem Bild und dir ähnlich erschaffen und alle übrigen Dinge durch deine Weisheit geschaffen hat, durch dein wahres Licht, dein eingeborener Sohn, unser Herr, Gott, Erlöser und unser aller König, Jesus Christus, durch den wir danken und dir mit ihm und dem Heiligen Geist, der Heiligen Dreifaltigkeit, die eines Wesens und untrennbar ist, dieses lebendige Opfer darbringen und diesen unblutigen Dienst verrichten. Dieses, was alle Völkerschaften dir darbringen! Vom Osten zum Westen und vom Norden zum Süden. Denn dein Name, o Herr, ist groß vor allen Völkerschaften, und an jedem Ort werden deinem heiligen Namen Räucherwerk und reine Opfer wie diese Opfergabe und Gabe dargebracht. ",
                ar: "مستحق وعادل مستحق وعادل مستحق وعادل لأنه بالحقيقة  مستحق وعادل ومقدس ولائق ونافع لنفوسنا واجسادنا وارواحنا ايها الكائن السيد الرب الله الآب ضابط الكل في كل زمان وبكل مكان لربوبيتك أن نسبحك ونرتل لك ونباركك ونخدمك ونسجد لك ونشكرك ونمجدك. ونعترف لك ليلاً ونهاراً بشفاه غير هادئة وقلب لا يسكت وتمجيدات لا تنقطع.انت الذي خلقت السموات وما في السموات والأرض وكل ما فيها البحار والأنهار والينابيع والبحيرات وما في جميعها.انت هو الذي خلقت الانسان كصورتك وكشبهك وخلقت كل الاشياء بحكمتك نورك الحقيقي ابنك الوحيد ربنا والهنا ومخلصنا وملكنا كلنا يسوع المسيح هذا الذي من قبلة نشكر ونقرب لك معه ومع الروح القدس الثالوث المقدس المساوي غير المفترق هذه الذبيحة الناطقة وهذه الخدمة غير الدموية. هي التي تقربها لك جميع الأمم. من مشارق الشمس الي مغاربها ومن الشمال الي الجنوب لأن اسمك عظيم يارب في جميع الامم وفي كل مكان يقدم بخور لاسمك القدوس وصعيدة طاهره وعلي هذه الذبيحة وهذا القربان.",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 17.01,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.02,
                speaker: "Priester",
                cop_de: "Ten-ti-ho owoh ten-tovh entek-met-agathos pi-mai-romi: ari-phmevi P-chois en-ti-hirini ente tek-oui emmavats etho-wab en-katholiki en-apostoliki en-ekklysia.",
                de: "Wir bitten dich und erflehen deine Güte, Menschenliebender, gedenke, Herr, des Friedens deiner einen, einzigen, heiligen, universalen und apostolischen Kirche.",
                ar: "نَسألُ ونَطْلُبُ مِنْ صَلاحِكَ يَا مُحِبَّ البَشرِ. أذْكُر يَا رَبُّ سَلامَ كَنِيسَتِكَ الواحِدَةِ الوَحيدَةِ المُقَدَّسَةِ الجامِعَةِ الرَّسوليَّةِ.",
                cop_cop: "Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲁⲣⲓⲫⲙⲉⲩⲓ Ⲡϭⲟⲓⲥ ⲛ̀ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ⲧⲉⲕⲟⲩⲓ̀ ⲙ̀ⲙⲁⲩⲁⲧⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀.",
                ar_de: "nas-alou wa nat-lobou min sal-ahika ya mo-hib el-bashar. ozkor ya rabbu salama kanisatika el-wahidati el-wahidati el-mo-qadasati el-jami-ati el-rasouliyati.",
                cop_ar: "تين تي هو أووه تين توفه إنتيك ميت أغاتوس بي ماي رومي: آري افميفي إبشويس إنتي هيريني إنتيه تيك أوي إممافاتس إثؤواب إن كاثوليكي إن أبوسطوليكي إن إكليسيا.",
            },
            {
                id: 17.03,
                speaker: "Diakon",
                cop_de: "Tovh egen ti-hirini ente ti-oui emmavats etho-wab en-katholiki en-apostoliki: en-ekklysia: nem pou-gai em-Phnouti khen ni-laos: nem ou-semni khen mai niven: entef-kha nen-novi nan evol.",
                de: "Betet für den Frieden der einen, einzigen, heiligen, universalen, apostolischen und orthodoxen Kirche Gottes, für die Erlösung der Völker durch Gott und Ruhe an jedem Ort und dass er uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَن سَلامِ الواحِدَةِ الوَحيدَةِ المُقَدَّسَةِ الجامِعَةِ الرَّسوليَّةِ كَنِيسَةِ اللهِ الأرثوذكسيَّةِ، وخَلاصِ اللهِ فِي الشُعوبِ، والهُدُوءِ فِي كُلِّ مكانٍ، ويَغْفِرُ لَنَا خَطايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ϯⲟⲩⲓ̀ ⲙ̀ⲙⲁⲩⲁⲧⲥ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ : ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀ : ⲛⲉⲙ ⲡⲟⲩϫⲁⲓ ⲙ̀Ⲫⲛⲟⲩϯ ϧⲉⲛ ⲛⲓⲗⲁⲟⲥ : ⲛⲉⲙ ⲟⲩⲥⲉⲙⲛⲓ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an salami el-wahidati el-wahidati el-moqadasati el-jami3ati el-rasouliyati kanisati Allah el-orthozoksiya, wa khalasi Allah fi el-sho3oub, wal hodou2 fi kol makan, wa yaghfiro lana khatayana.",
                cop_ar: "توفه إيجين تي هيريني إنتيه تي أوي إممافاتس إثؤواب إن كاثوليكي إن أبوسطوليكي: إن إكليسيا: نيم بوجاي إم افنوتي خين ني لاؤوس: نيم أو سيم ني خين ماي نيفين: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.04,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.05,
                speaker: "Priester",
                cop_de: "Thai et-shop is-jen av-rix en-ti-iki-omeni sha av-rix. Ni-laos tirou nem ni-ohi tirou smou erou-ou: ti-hirini ti evol khen ni-phi-oui: anis e-khri e-nen-hit tirou. Alla nem ti-ke-hirini ente pai-vios phai: ari-kharizesthe emmos nan en-ehmot. Pi-ouro (Pi-pro-edros) ni-met-matoi ni-arkhon ni-sovni ni-mish nen-the-shev: nen-gin-moshi e-khoun nem nen-gin-moshi evol: selsolou khen hirini niven. Pouro ente ti-hirini moi nan entek-hirini: hob gar niven ak-ti-itou nan. Khpon nak Phnouti Pen-sotir: je ten-so-oun en-ke-ouai an evil erok: pek-ran etho-wab peten-go emmof. Maro-touno enje ni-etenoun en-ipsykhi: hiten Pek-pneuma etho-wab. Owoh empen-thref-gem-gom eron anon kha nek-eviaik: enje ph-mou ente ni-novi.",
                de: "Sie besteht von einem Ende des Erdkreises bis zum anderen Ende. Alle Völker und jede Herde segne du. Den himmlischen Frieden lasse über all unsere Herzen kommen. Schenke uns den Frieden dieser Weltzeit durch deine Gnade. Den König [Präsidenten], die Soldaten, die Regierenden, die Minister, das Volk, unseren Nachbarn, unsere Eingänge und Ausgänge erfülle mit allem Frieden. König des Friedens, gib uns deinen Frieden, denn du hast uns alles gegeben. Gott, unser Erlöser, nimm uns als die Deinen an, denn wir kennen keinen anderen außer dir. Dein heiliger Name ist es, den wir aussprechen. Schenke, dass unsere Seelen leben durch deinen Heiligen Geist. Lass den Sündentod keine Macht haben über uns, deine Diener.",
                ar: "هَذِهِ الكائِنَةُ مِنْ أَقْصي المَسْكونَةِ إِلى أَقْصاها. كُلَّ الشُّعوبِ وكُلَّ القُطْعانِ بارِكْهُمْ. السَّلامَ الَّذِي مِنَ السَّمَواتِ أَنْزِلْه عَلى قُلوبِنا جَميعاً. بَلْ وَسَلامَ هَذَا العُمْرِ انْعَمْ بِهِ عَلَيْنَا إِنْعَاماً. المَلِكَ (الرَّئيسَ) والجُنْدَ والرُّؤَساءَ والوُزراءَ والجُموعَ وجِيرانَنَا ومَدَاخِلَنَا ومَخَارِجَنَا، زَيِّنْهُمْ بِكُلِّ سَلامٍ. يا مَلِكَ السَّلامِ، أَعْطِنَا سَلامَكَ، لأَنَّ كُلَّ شَيْءٍ قَدْ أَعْطَيْتَنَا. اقْتَنِنَا لَكَ يا اللهُ مُخَلِّصَنَا لأَنَّنَا لا نَعْرِفُ آخَرَ سِوَاكَ، اسْمُكَ القُدُّوسُ هُوَ الَّذِي نَقُولُهُ. فَلْتَحْيَ نُفُوسُنَا بِرُوحِكَ القُدُّوسِ. ولا يَقْوَ عَلَيْنَا نَحْنُ عَبِيدَكَ مَوْتُ الخَطِيَّةِ.",
                cop_cop: "Ⲑⲁⲓ ⲉⲧϣⲟⲡ ⲓⲥϫⲉⲛ ⲁⲩⲣⲏⲭⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ϣⲁ ⲁⲩⲣⲏⲭⲥ. Ⲛⲓⲗⲁⲟⲥ ⲧⲏⲣⲟⲩ ⲛⲉⲙ ⲛⲓⲟϩⲓ ⲧⲏⲣⲟⲩ ⲥⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ: ϯϩⲓⲣⲏⲛⲏ ϯ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ: ⲁⲛⲓⲥ ⲉ̀ϧⲣⲏⲓ ⲉ̀ⲛⲉⲛϩⲏⲧ ⲧⲏⲣⲟⲩ. Ⲁⲗⲗⲁ ⲛⲉⲙ ϯⲕⲉϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ⲡⲁⲓⲃⲓⲟⲥ ⲫⲁⲓ: ⲁⲣⲓⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲙ̀ⲙⲟⲥ ⲛⲁⲛ ⲛ̀ϩ̀ⲙⲟⲧ. Ⲡⲓⲟⲩⲣⲟ (Ⲡⲓⲡⲣⲟⲉⲇⲣⲟⲥ) ⲛⲓⲙⲉⲧⲙⲁⲧⲟⲓ ⲛⲓⲁⲣⲭⲱⲛ ⲛⲓⲥⲟⲃⲛⲓ ⲛⲓⲙⲏϣ ⲛⲉⲛⲑⲉϣⲉⲩ: ⲛⲉⲛϫⲓⲛⲙⲟϣⲓ ⲉ̀ϧⲟⲩⲛ ⲛⲉⲙ ⲛⲉⲛϫⲓⲛⲙⲟϣⲓ ⲉ̀ⲃⲟⲗ: ⲥⲉⲗⲥⲱⲗⲟⲩ ϧⲉⲛ ϩⲓⲣⲏⲛⲏ ⲛⲓⲃⲉⲛ. Ⲡⲟⲩⲣⲟ ⲛ̀ⲧⲉ ϯϩⲓⲣⲏⲛⲏ ⲙⲟⲓ ⲛⲁⲛ ⲛ̀ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ϩⲱⲃ ⲅⲁⲣ ⲛⲓⲃⲉⲛ ⲁⲕⲧⲏⲓⲧⲟⲩ ⲛⲁⲛ. Ⲭ̀ⲡⲟⲛ ⲛⲁⲕ Ⲫⲛⲟⲩϯ Ⲡⲉⲛⲥⲱⲧⲏⲣ: ϫⲉ ⲧⲉⲛⲥⲱⲟⲩⲛ ⲛ̀ⲕⲉⲟⲩⲁⲓ ⲁⲛ ⲉ̀ⲃⲏⲗ ⲉ̀ⲣⲟⲕ: ⲡⲉⲕⲣⲁⲛ ⲉ̀ⲑⲟⲩⲁⲃ ⲡⲉⲧⲉⲛϫⲱ ⲙ̀ⲙⲟϥ. Ⲙⲁⲣⲟⲧⲟⲩⲛⲟ ⲛ̀ϫⲉ ⲛⲏ ⲉ̀ⲧⲉⲛⲟⲩⲛ ⲛ̀ⲯⲩⲭⲏ: ϩⲓⲧⲉⲛ Ⲡⲉⲕⲡⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ. Ⲟⲩⲟϩ ⲙ̀ⲡⲉⲛⲑ̀ⲣⲉϥϫⲉⲙϫⲟⲙ ⲉ̀ⲣⲟⲛ ⲁ̀ⲛⲟⲛ ϧⲁ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ: ⲛ̀ϫⲉ ⲫⲙⲟⲩ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.",
                ar_de: "hazehi el-ka2enatu min aqsa el-maskounati ila aqsaha. kolla el-sho3oub wa kolla el-qot3an barik-hom. el-salama el-lazi mina el-samawati anzil-ho 3ala qolobina jami3an. bal wa salama haza el-3omr en3am behi 3alayna en3aman. el-malika (el-ra2is) wal jond wal rou2asa2 wal wou-zara2 wal jomou3 wa jiranana wa madakhilana wa makharijana, zay-yenhom bi-kolli salam. ya malika el-salam, a3tina salamak, le-anna kolla shay2in qad a3taytana. eqtanina laka ya Allah mokhallisana le-annana la na3rifou akhara siwak, ismoka el-qoddous houwa el-lazi naqoulouh. faltahya nofousona bi-rouhika el-qoddous. wala yaqwa 3alayna nahnou 3abidaka mowtou el-khatiya.",
                cop_ar: "ثاي إيتشوب إس جين آوريكس إنتي أو إيكوميني شا آوريكس. ني لاؤوس تيرو نيم ني أوهي تيرو إسمو إيرؤو: تي هيريني تي إيفول خين ني فيؤوي: أنيس إيخري إينين هيت تيرو. أللا نيم تي كيهيريني إنتيه باي بويس فاي: آري خاريزيستيه إمموس نان إن إهموت. بي أورو (بي برؤيدروس) ني ميت ماتوي ني أرخون ني سوفني ني ميش نين ثيشيف: نين جين موشي إيخون نيم نين جين موشي إيفول: سيلسولو خين هيريني نيفين. بورو إنتيه تي هيريني موي نان إنتيك هيريني: هوب غار نيفين أك تيتو نان. إخبون ناك افنوتي بين سوتير: جيه تين سو أون إن كيه أواي آن إيفيل إيروك: بيكران إثؤواب بيتيه نين جو إمموف. ماروتؤونو إنجيه ني إيتينون إن إبسيخي: هيتين بيك بنفما إثؤواب. أووه إمبين إثريف جيم جوم إيرون أنون خا نيك إيفيايك: إنجيه إفمو إنتيه ني نوفي.",
            },
            {
                id: 17.06,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.07,
                speaker: "Priester",
                cop_de: "Ni-et-shoni ente pek-laos.",
                de: "Der Kranken unter deinem Volk.",
                ar: "مَرضَى شَعْبِكَ.",
                cop_cop: "Ⲛⲏⲉⲧϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ.",
                ar_de: "marda sha3bik.",
                cop_ar: "ني إيتشوني إنتيه بيك لاؤوس.",
            },
            {
                id: 17.08,
                speaker: "Diakon",
                cop_de: "Tovh egen nenioti nem nensniv etshoni khen ginshoni niven: ite khen paitopos ite khen mai niven: hina ente Pikhristos Pennouti er-ehmot nan nem-o-ou em-pi-ougai nem pitalcho: entef-kha nennovi nan evol.",
                de: "Bittet für unsere Väter und Brüder, die an irgendeiner Krankheit leiden, ob an diesem oder an einem anderen Ort, dass Christus unser Gott uns und ihnen Gesundheit und Heilung schenkt und uns unsere Sünden vergibt.",
                ar: "أُطْلُبوا عَنْ آبائِنَا وإِخْوتِنَا المَرْضَى بِكُلِّ مَرَضٍ، إِنْ كَانَ فِي هَذَا المَسْكَنِ أَوْ بِكُلِّ مَوْضِعٍ، لِكَيْ المَسِيحُ إِلَهُنَا يَنْعَمُ لَنَا ولَهُمْ بِالعَافِيَةِ والشِّفَاءِ، ويَغْفِرُ لَنَا خَطايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉⲧϣⲱⲛⲓ ϧⲉⲛ ϫⲓⲛϣⲱⲛⲓ ⲛⲓⲃⲉⲛ: ⲓⲧⲉ ϧⲉⲛ ⲡⲁⲓⲧⲟⲡⲟⲥ ⲓⲧⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲉⲣ̀ϩ̀ⲙⲟⲧ ⲛⲁⲛ ⲛⲉⲙⲱⲟⲩ ⲙ̀ⲡⲓⲟⲩϫⲁⲓ ⲛⲉⲙ ⲡⲓⲧⲁⲗϭⲟ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an aba2ina wa ikhwatina el-marda bi-kolli maradin, en kana fi haza el-maskani aw bi-kolli mawdi3in, likay el-Masi7 elahona yan3am lana wa lahom bel-3afiya wal-shifa2, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين نين يوتي نيم نين إسنِي إتشوني خين جين شوني نيفين: إيتيه خين باي توبوس إيتيه خين ماي نيفين: هينا إنتيه بي إخرستوس بين نوتي إير إهموت نان نيمو أُو إمبي أوجاي نيم بي تالتشو: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.09,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.10,
                speaker: "Priester",
                cop_de: "Sakhem-pot-oini khen hannai: nem hanmet-shenhit matal-cho-ou. Ali-oui evol haro-ou nem evol-haron en-shoni niven nem iavi niven. Pi-pneuma ente ni-shoni bog-f ensof. Ni-et-av-osk ev-it-out khen ni-iavi matounos-ou. Ar-ito-ou tirou en-remhe. P-chois ar-ito-ou tirou en-remhe owoh nai no-ou. Je enthok pet-vol en-ni-et-sonh evol. Ti-helpis ente ni-ete emmon tou helpis. Psy-khi niven et-heghogh: moi no-ou P-chois en-ou-nai. Anon de hon P-chois: ni-shoni ente nen-psy-khi matal-cho-ou. Pi-sini em-mi ente nen-psy-khi nem nen-soma.",
                de: "Pflege sie mit Erbarmen und Barmherzigkeit, heile sie. Entferne von ihnen und uns jede Krankheit, jedes Leiden und vertreibe aus ihnen den Hauch von Krankheiten. Richte die auf und tröste, die lange durch ihre Krankheiten behindert sind, und befreie die, die von unreinen Geistern gequält werden. Befreie und hab Erbarmen, Herr, mit denen, die in Gefängnissen, Gefangenschaften, Verbannung, Kriegsgefangenschaft oder in bitterer Sklaverei gefesselt sind. Denn du löst die Gebundenen und erhebst die Gefallenen. Du Hoffnung derer, die keine Hoffnung haben. Helfer derer, die keine Hilfe haben. Tröster derer, die kleinmütig sind und Hafen derer, die von Stürmen heimgesucht werden. Den Seelen aller, die bedrängt oder unterdrückt sind, Herr, gib ihnen Erbarmen, gib ihnen Ruhe, gib ihnen Erfrischung, gib ihnen Gnade, gib ihnen Unterstützung, gib ihnen Erlösung, gib ihnen die Vergebung der Sünden. Heile auch uns, o Herr, die Krankheiten unserer Seelen und unserer Körper. Du wahrer Arzt unserer Seelen und Leiber, du Versorger unserer Körper, heile uns mit deiner Gnade.",
                ar: "تَعَهَّدْهُمْ بِالمَرَاحِمِ والرَّأَفَاتِ، اشْفِهِمْ. انْزِعْ عَنْهُمْ وعَنَّا كُلَّ مَرَضٍ وكُلَّ سَقَمٍ ورُوحَ الأَمْرَاضِ اطْرُدْهُ. والَّذِينَ أَبْطَأُوا مَطْرُوحِينَ فِي الأَمْرَاضِ أَقِمْهُمْ وعَزِّهِمْ، والمُعَذَّبِينَ مِنَ الأَرْوَاحِ النَّجِسَةِ اعْتِقْهُمْ جَمِيعاً. الَّذِينَ فِي السُّجُونِ أَوْ المَطَابِقِ أَوْ الَّذِينَ فِي النَّفْيِ أَوْ السَّبْيِ أَوْ المَقْبُوضِ عَلَيْهِمْ فِي عُبُودِيَّةٍ مُرَّةٍ، يَا رَبُّ اعْتِقْهُمْ جَمِيعاً وارْحَمْهُمْ. لأَنَّكَ أَنْتَ الَّذِي تَحُلُّ المَرْبُوطِينَ وتُقِيمُ السَّاقِطِينَ. رَجَاءُ مَنْ لَيْسَ لَهُ رَجَاءٌ، ومُعِينُ مَنْ لَيْسَ لَهُ مُعِينٌ. عَزَاءُ صَغِيرِي القُلُوبِ، مِينَاءُ الَّذِينَ فِي العَاصِفِ. كُلُّ الأَنْفُسِ المُتَضايِقَةِ والمَقْبُوضِ عَلَيْهَا، أَعْطِهَا يَا رَبُّ رَحْمَةً، أَعْطِهَا نِيَاحاً، أَعْطِهَا بُرُودةً، أَعْطِهَا نِعْمَةً، أَعْطِهَا مَعُونةً، أَعْطِهَا خَلاصاً، أَعْطِهَا غُفْرَانَ خَطَايَاهَا وآثَامِهَا. ونَحْنُ أَيْضاً يَا رَبُّ أَمْرَاضَ نُفُوسِنَا اشْفِهَا، والَّتِي لأَجْسَادِنَا عَافِهَا. أَيُّهَا الطَّبِيبُ الحَقِيقيُّ الَّذِي لأَنْفُسِنَا وأَجْسَادِنَا يَا مُدَبِّرَ كُلِّ جَسَدٍ تَعَهَّدْنَا بِخَلاصِكَ.",
                cop_cop: "Ⲥⲁⲕϩⲉⲙⲡⲟⲧⲟⲩⲱⲓⲛⲓ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ: ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ⲁⲗⲓⲟⲩⲓ̀ ⲉ̀ⲃⲟⲗ ϩⲁⲣⲱⲟⲩ ⲛⲉⲙ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲛ ⲛ̀ϣⲱⲛⲓ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲓⲁⲃⲓ ⲛⲓⲃⲉⲛ: Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ⲛⲓϣⲱⲛⲓ ⲃⲟϫϥ ⲛ̀ⲥⲱϥ. Ⲛⲏⲉ̀ⲧⲁⲩⲱⲥⲕ ⲉⲩⲩⲧⲏⲟⲩⲧ ϧⲉⲛ ⲛⲓⲁⲃⲓ ⲙⲁⲧⲟⲩⲛⲟⲥⲟⲩ ⲟⲩⲟϩ ⲙⲁⲛⲟⲙϯ ⲛⲱⲟⲩ. Ⲛⲏⲉⲧⲧϩⲉⲙⲕⲏⲟⲩⲧ ⲛ̀ⲧⲟⲧⲟⲩ ⲛ̀ⲛⲓⲡⲛⲉⲩⲙⲁ ⲛ̀ⲁ̀ⲕⲁⲑⲁⲣⲧⲟⲛ ⲁ̀ⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲣⲉⲙϩⲉ. Ⲛⲏⲉⲧ ϧⲉⲛ ⲛⲓϣ̀ⲧⲉⲕⲱⲟⲩ: ⲓⲉ ⲛⲓⲙⲉⲧⲁⲗⲱⲥ. Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲣⲉⲙϩⲉ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲱⲟⲩ. Ϫⲉ ⲛ̀ⲑⲟⲕ ⲡⲉⲧⲃⲱⲗ ⲛ̀ⲛⲏⲉⲧⲥⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ϯϩⲉⲗⲡⲓⲥ ⲛ̀ⲧⲉ ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲙⲟⲛ ⲧⲟⲩ ϩⲉⲗⲡⲓⲥ. Ⲯⲩⲭⲏ ⲛⲓⲃⲉⲛ ⲉⲧϩⲉϫϩⲱϫ: ⲙⲟⲓ ⲛⲱⲟⲩ Ⲡϭⲟⲓⲥ ⲛ̀ⲟⲩⲛⲁⲓ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡϭⲟⲓⲥ: ⲛⲓϣⲱⲛⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲙⲁⲧⲁⲗϭⲱⲟⲩ. Ⲡⲓⲥⲓⲛⲓ ⲙ̀ⲙⲏⲓ ⲛ̀ⲧⲉ ⲛⲉⲛⲯⲩⲭⲏ ⲛⲉⲙ ⲛⲉⲛⲥⲱⲙⲁ.",
                ar_de: "ta3ahad-hom bel-marahimi wal-ra2afat, esh-fe-hom. en-za3 3an-hom wa 3anna kolla maradin wa kolla saqamin. wal-lazina abta2ou matrouhina fel-amradi aqem-hom wa 3az-ze-hom. el-lazina fel-sojouni ya rabu e3-teq-hom jami3an war-ham-hom. le-annaka anta el-lazi tahollou el-marboutina wa toqimou el-saqitina. raja2u man laysa lahu raja2un. koll el-anfos el-motadayeqa, a3teha ya rabu rahmatan. wa nahnou aydan ya rabu amrada nofousina esh-feha. ayoha el-tabibou el-haqiqiyo el-lazi le-anfosina wa ajsadina.",
                cop_ar: "ساخيم بوت أويني خين هان ناي: نيم هان ميت شينهيت مالتشو أو. ألي أوي إيفول هارو أو نيم إيفول هارون إن شوني نيفين نيم يافي نيفين. بي بنفما إنتيه ني شوني بوجف إنسوف. ني إيت آف أوسك إف إيت أوت خين ني يافي ماتونو سو أو. آريتو أو تيرو إن ريمهي. إبشويس آريتو أو تيرو إن ريمهي أووه ناي نو أو. جيه إنثوك بي تفول إن ني إيت سونه إيفول. تي هيلبيس إنتيه ني إيتيه إممون تو هيلبيس. إبسيخي نيفين إت هيج هوج: موي نو أو إبشويس إن أو ناي. أنون ديه هون إبشويس: ني شوني إنتيه نين إبسيخي مالتشو أو. بي سيني إممي إنتيه نين إبسيخي نيم نين سوما.",
            },
            {
                id: 17.11,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.12,
                speaker: "Priester",
                cop_de: "Nenioti nem nensniv et-avshe ep-shemmo.",
                de: "Unserer Väter und Brüder, die auf Reisen sind.",
                ar: "آبَائِنَا وإِخْوَتِنَا المُسَافِرِينَ.",
                cop_cop: "Ⲛⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡϣⲉⲙⲙⲟ.",
                ar_de: "aba2ina wa ikhwatina el-mosafirina.",
                cop_ar: "نين يوتي نيم نين إسنِي إيتاف شي إيبشيمو.",
            },
            {
                id: 17.13,
                speaker: "Diakon",
                cop_de: "Tovh egen nenioti nem nensniv et-avshe ep-shemmo: ie ni-eth-me-vi e-she khen mai niven: souton nou-moit tirou: ite evol hiten phi-om: ie ni-ia-rou ie ni-limni ie ni-moit i-moshi (ie pi-a-ir): ie etiri en-nou-gin-moshi en-riti niven: hina ente Pi-khristos Pen-nouti tas-tho-ou e-ni-ete nou-ou em-man-shopi khen ou-hirini: entef-kha nennovi nan evol.",
                de: "Bittet für unsere Väter und Brüder, die auf Reisen sind und für die, die eine Reise in allerlei Orte vorhaben, dass Gott ihnen allen ihre Wege ebne, sei es auf dem Meer, auf den Flüssen, auf den Seen, auf den Reisewegen (und in der Luft), dass Christus, unser Gott diejenigen, die ihre Reise auf jegliche Art verrichten, friedlich heimführt und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ آبائِنَا وإِخْوَتِنَا المُسَافِرِينَ، والَّذِينَ يُضْمِرُونَ السَّفَرَ فِي كُلِّ مَوْضِعٍ، سَهِّلْ طُرُقَهُمْ أَجْمَعِينَ، إِنْ كَانَ فِي البَحْرِ أَوْ الأَنْهَارِ أَوْ البُحَيْرَاتِ أَوْ الطُّرُقِ المَسْلُوكَةِ، [أَوْ الجَوِّ]، لِكَيْ المَسِيحُ إِلَهُنَا يَرُدَّهُمْ إِلَى مَسَاكِنِهِمْ سَالِمِينَ، ويَغْفِرَ لَنَا خَطايَانَا.",
                cop_cop: "Ⲛⲉⲙ ⲛⲏⲉⲧⲙⲉⲩⲓ̀ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲥⲟⲧⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ: ⲓ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ : ⲓⲉ ⲛⲓⲁⲣⲱⲟⲩ: ⲓⲉ ⲛⲓⲗⲩⲙⲛⲏ : ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲙ̀ⲙⲟϣⲓ : ⲓⲉ ⲡⲓⲁⲏⲣ : ⲓⲉ ⲉⲧⲓⲣⲓ ⲙ̀ⲡⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ : ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲧ̀ⲥⲑⲱⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ϫⲁⲙⲏ: ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ.",
                ar_de: "otlobou 3an aba2ina wa ikhwatina el-mosafirina, wal-lazina yodmirouna el-safara fi kolli mawdi3in, sahhil toroqahom ajma3ina, en kana fel-bahri aw el-anhari aw el-bohayrati aw el-toroqi el-masloukati, [aw el-jaw], likay el-Masi7 elahona yaroddahom ila masakinahom salimina, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين نين يوتي نيم نين إسنِي إيتاف شي إيبشيمو: إيه ني إيثميفي إيشي خين ماي نيفين: سوتون نو مويت تيرو: إيتيه إيفول هيتين في أوم: إيه ني يارو إيه ني ليمني إيه ني مويت إي موشي (إيه بي أير): إيه إتيري إن نو جين موشي إن ريتي نيفين: هينا إنتيه بي إخرستوس بين نوتي تاسثو أو إيه ني إيتيه نو أو إممان شوبي خين أو هيريني: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.14,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.15,
                speaker: "Priester",
                cop_de: "Nem ni-et-mevi e-she khen mai niven: sot-ton nou-moit tirou: ite evol hiten phiom: ie ni-arou-ou: ie ni-lymne: ie ni-moit em-moshi: ie pi-air: ie et-iri em-pou-gin-moshi en-riti niven: ouon niven et-khen mai niven mats-tho-ou ekhoun e-ou-lymne en-game: e-ou-lymne ente pi-ougai. Ari-kata-axioin ari-shphir en-shphir nem shphir em-moshi nem-o-ou. Mi-itou e-ni-ete nou-ou khen ou-rashi ev-rashi: khen ou-tou-go ev-tou-ge-out. Ari-shphir n-er-hob nem nek-ev-iaik: khen hob niven n-agathon. Anon de hon Epchois ten-met-rem-en-goili et-khen pai-bios phai: areh eros n-at-evlavi n-at-khimon n-at-shthorter sha evol.",
                de: "Und aller, die eine Reise irgendwohin vorhaben. Ebne ihnen allen ihre Wege, sei es auf Meeren, Flüssen, Seen, Landwegen, (in der Luft) oder auf anderen Reisewegen, jedem zu jedem Ort. Bringه sie zurück in einen ruhigen Hafen, zum Hafen des Heils. Bitte, sei ihnen ein Segelgefährte und Wegbegleiter. Und geleite sie nach Hause zurück zu den Ihren, von Freude erfüllt und mit Gesundheit gestärkt. Nimm Anteil an der Arbeit deiner Diener in jedem guten Werk. Was uns selbst betrifft, o Herr, bewahre unser Fremdsein in dieser Lebenszeit ohne Schaden, ohne Stürme und Sorgen bis ans Ende.",
                ar: "والَّذِينَ يُضْمِرُونَ السَّفَرَ في كُلِّ مَكانٍ، سَهِّلْ طُرُقَهُمْ أَجْمَعينَ، إِنْ كانَ في البَحْرِ، أَوِ الأَنْهارِ، أَوِ البُحَيْراتِ، أَوِ الطُّرُقِ المَسْلوكةِ، [ أوِ الجَوِّ]، أوِ السَّالِكينَ بِكُلِّ نَوْعٍ، كُلَّ أَحَدٍ بِكُلِّ مَوْضِعٍ، رُدَّهُمْ إِلَى ميناءٍ هادِئٍ، ميناءِ الخَلاصِ. تَفَضَّلْ اصْحَبْهُمْ في الإِقْلاعِ، واصْحَبْهُمْ في المَسيرِ. رُدَّهُمْ إِلَى ذَوِيهِمْ بِالفَرَحِ فَرِحينَ، وبالعافِيَةِ مُعافَيْنَ. اشْتَرِكْ فِي العَمَلِ مَعَ عَبيدِكَ فِي كُلِّ عَمَلٍ صالِحٍ. ونَحْنُ أَيضاً يَا رَبُّ غُرْبَتَنا فِي هَذا العُمْرِ، احْفَظْها بِغَيْرِ مَضَرَّةٍ ولا عاصِفٍ ولا قَلَقٍ إِلَى الانْقِضاءِ.",
                cop_cop: "Ⲛⲉⲙ ⲛⲏⲉⲧⲙⲉⲩⲓ̀ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲥⲟⲧⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ: ⲓ̀ⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ : ⲓⲉ ⲛⲓⲁⲣⲱⲟⲩ: ⲓⲉ ⲛⲓⲗⲩⲙⲛⲏ : ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲙ̀ⲙⲟϣⲓ : ⲓⲉ ⲡⲓⲁⲏⲣ : ⲓⲉ ⲉⲧⲓⲣⲓ ⲙ̀ⲡⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ : ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲧ̀ⲥⲑⲱⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ϫⲁⲙⲏ: ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ. Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣ ⲛ̀ϣ̀ⲫⲏⲣ ⲛⲉⲙ ϣ̀ⲫⲏⲣ ⲙ̀ⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ. Ⲙⲏⲓⲧⲟⲩ ⲉ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲟⲩ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ ⲉⲩⲣⲁϣⲓ : ϧⲉⲛ ⲟⲩⲧⲟⲩϫⲟ ⲉⲩⲧⲟⲩϫⲏⲟⲩⲧ. Ⲁⲣⲓϣ̀ⲫⲏⲣ ⲛ̀ⲉⲣϩⲱⲃ ⲛⲉⲙ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ : ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡϭⲟⲓⲥ ⲧⲉⲛⲙⲉⲧⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ ⲉⲧϧⲉⲛ ⲡⲁⲓⲃⲓⲟⲥ ⲫⲁⲓ : ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲥ ⲛ̀ⲁⲧⲉⲃⲗⲁⲃⲏ ⲛ̀ⲁⲧⲭⲓⲙⲱⲛ ⲛ̀ⲁⲧϣ̀ⲑⲟⲣⲧⲉⲣ ϣⲁ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Wal-lazina yodmeroun el-safar fi kol makan, sahhel toroqahom ajma3in, in kana fel bahr, aw el-anhar, aw el-bohairat, aw el-toroq el-maslouka, [aw el-jaw], aw el-salikin bekol naw3, kol ahad bekol mawde3, roddahom ela minaa' hadi2, minaa' el-khalas. Tafaddal es-habhom fel iqla3, wa es-habhom fel masir. Roddahom ela zawihim bel-farah farihin, wal-3afya mo3afayin. Eshterek fel 3amal ma3a 3abidek fi kol 3amal saleh. Wa nahnou ayzan ya Rabb ghorbatana fi haza el-3omr, ehfaz-ha be-ghair madarra wala 3asef wala qalaq ela el-enqidaa'.",
                cop_ar: "نيم ني إيت ميفي إي شيه خين ماي نيفين: صوطون نو مويت تيرو: إيتيه إيفول هيتين فيوم: إيه ني آرو أو: إيه ني ليمني: إيه ني مويت إم موشي: إيه بي أير: إيه إت إيري إمبو جين موشي إن ريتي نيفين: أوأون نيفين إتخين ماي نيفين ماطسـثو أو إيخون إي أو ليمـني إن جامي: إي أو ليمـني إنتيه بي أوجاي. أري كاطا أكسيوين أري إشـفير إن إشـفير نيم إشـفير إم موشي نيمو أو. مي إيتو إي ني إيتيه نو أو خين أو راشي إيف راشي: خين أو طوجو إيف طوجيؤوت. أري إشـفير إن إيرهوب نيم نيك إيفي ايك: خين هوب نيفين إن آغاثون. أنون ديه هون إبشويس تين ميت ريم إن جويلي إتخين باي بيوس فاي: آريه إيروس إن أط إيفلافي إن أط خيمون إن أط إشتـهورتر شا إيفول.",
            },
            {
                id: 17.16,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.17,
                speaker: "Priester",
                cop_de: "Ari-kataxioin P-chois ni-mo-ou ente phi-aro: etkhen tai-rompi thai: es-mou ero-ou.",
                de: "Bitte, o Herr, segne das Wasser des Flusses, in diesem Jahr.",
                ar: "تَفَضَّلْ يَا رَبُّ مِيَاهَ النَّهْرِ فِي هَذِهِ السَّنَةِ، بَارِكْهَا.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫⲓⲁⲣⲟ: ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "tafaddal ya rabu miyaha el-nahri fi hazihi el-sanati, barik-ha.",
                cop_ar: "آري كاتاكسيوين إبشويس ني مو أو إنتيه في آرو: إتخين تاي رومبي ثاي: إسمو إيرو أو.",
            },
            {
                id: 17.18,
                speaker: "Diakon",
                cop_de: "Tovh egen pi-gin-moshi epshoi ente ni-ia-rou em-mo-ou khen tai-rompi thai: hina ente Pi-khristos Pen-nouti es-mou ero-ou: entef-enou epshoi kata nou-shi: entef-ti em-pounof em-p-ho em-p-kahi: entef-shan-oushten kha ni-kiri ente ni-romi: entef-ti em-p-nohem en-ni-tev-no-ou-i: entef-kha nennovi nan evol.",
                de: "Bittet für den Anstieg der Gewässer, der Flüsse in diesem Jahr, dass Christus, unser Gott, sie segnet und sie nach Maß ansteigen lässt. Er möge dem Antlitz der Erde Freude geben, die Menschen versorgen und die Tiere retten, und uns unsere Sünden vergeben.",
                ar: "أُطْلُبُوا عَنْ صُعُودِ مِيَاهِ الأَنْهَارِ فِي هَذِهِ السَّنَةِ، لِكَيْ يُبَارِكَهَا المَسِيحُ إِلَهُنَا، ويُصْعِدَهَا كَمِقْدَارِهَا، ويُفَرِّحَ وَجْهَ الأَرْضِ، ويُعُولَنَا نَحْنُ بَنِي البَشَرِ، ويُعْطِي النَّجَاةَ لِلْحَيَوَانِ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡⲓϫⲓⲛⲙⲟϣⲓ ⲉ̀ⲡϣⲱⲓ ⲛ̀ⲧⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ: ⲛ̀ⲧⲉϥⲉ̀ⲛⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ: ⲛ̀ⲧⲉϥϯ ⲙ̀ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ: ⲛ̀ⲧⲉϥϣⲁⲛⲟⲩϣⲧⲉⲛ ϧⲁ ⲛⲓⲕⲩⲏⲣⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ: ⲛ̀ⲧⲉϥϯ ⲙ̀ⲡⲛⲟϩⲉⲙ ⲛ̀ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an so3oudi miyahi el-anhari fi hazihi el-sanati, likay yobarikaha el-Masi7 elahona, wa yo3-edaha kamidariha, wa yofarrival wajha el-ardi, wa ya3oulana nahnou bani el-bashari, wa yo3ti el-najata lel-hayawani, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين بي جين موشي إيبشوي إنتيه ني يارو إممو أو خين تاي رومبي ثاي: هينا إنتيه بي إخرستوس بين نوتي إسمو إيرو أو: إنتيف إنو إيبشوي كاتا نوشي: إنتيف تي إمبونوف إمب هو إمب كاهي: إنتيف شانوشتين خا ني كيري إنتيه ني رومي: إنتيف تي إمب نو هيم إن ني تيف نو أوي: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.19,
                speaker: "Volk",
                cop_de: "(Kyrie eleison) 3x.",
                de: "(Herr erbarme dich) 3x.",
                ar: "(يَا رَبُّ ارْحَمْ) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) 3",
                ar_de: "(ya rabu erham) 3",
                cop_ar: "(كيريه لييسون) 3",
            },
            {
                id: 17.20,
                speaker: "Priester",
                cop_de: "Ari-kataxioin P-chois ni-siti nem ni-sim nem ni-rot ente t-koi: etkhen tai-rompi thai: es-mou ero-ou.",
                de: "Bitte, o Herr, segne die Saaten und die Kräuter und die Gewächse des Feldes in diesem Jahr.",
                ar: "تَفَضَّلْ يَا رَبُّ، الزُّرُوعَ والعُشْبَ، ونَبَاتَ الحَقْلِ فِي هَذِهِ السَّنَةِ، بَارِكْهَا.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ: ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "tafaddal ya rabu, el-zorou3a wal-3oshba, wa nabata el-haqli fi hazihi el-sanati, barik-ha.",
                cop_ar: "آري كاتاكسيوين إبشويس ني سيتي نيم ني سيم نيم ني روت إنتيه إت كوي: إتخين تاي رومبي ثاي: إسمو إيرو أو.",
            },
            {
                id: 17.21,
                speaker: "Diakon",
                cop_de: "Tovh egen ni-siti nem ni-sim nem ni-rot ente t-koi khen tai-rompi thai: hina ente Pi-khristos Pen-nouti es-mou ero-ou entou-aiai owoh entou-ashai shantou-gok evol khen ou-nishti en-karpos: owoh entef-shenhit kha pef-plasma eta nef-gig thamiof: entef-kha nennovi nan evol.",
                de: "Bittet für die Saaten, Kräuter und Gewächse des Feldes in diesem Jahr, dass Christus, unser Gott, sie segnet, damit sie wachsen und gedeihen und reichliche Ernte und Früchte einbringen, und dass er mit seiner eigenhändigen Schöpfung Erbarmen hat und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنِ الزُّرُوعِ والعُشْبِ، ونَبَاتِ الحَقْلِ فِي هَذِهِ السَّنَةِ، لِكَيْ يُبَارِكَهَا المَسِيحُ إِلَهُنَا، لِتَنْمُو وتَكْثُرَ إِلَى أَنْ تُكْمَلَ بِثَمَرَةٍ عَظِيمَةٍ، ويَتَحَنَّنَ عَلَى جِبْلَتِهِ الَّتِي صَنَعَتْهَا يَدَاهُ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ ⲛ̀ⲧⲟⲩⲁⲓⲁⲓ ⲟⲩⲟϩ ⲛ̀ⲧⲟⲩⲁϣⲁⲓ ϣⲁⲛⲧⲟⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲕⲁⲣⲡⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲡⲗⲁⲥⲙⲁ ⲉ̀ⲧⲁ ⲛⲉϥϫⲓϫ ⲑⲁⲙⲓⲟϥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an el-zorou3i wal-3oshbi, wa nabati el-haqli fi hazihi el-sanati, likay yobarikaha el-Masi7 elahona, litanmowa wa takthora ela an tokmala bithamara 3azimatin, wa yatahannana 3ala jiblat-hi el-lati sana3at-ha yadah, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين ني سيتي نيم ني سيم نيم ني روت إنتيه إت كوي خين تاي رومبي ثاي: هينا إنتيه بي إخرستوس بين نوتي إسمو إيرو أو إنتو آيآي أووه إنتو آشاي شان تو جوك إيفول خين أو نيشي إن كاربوس: أووه إنتيف شينهيت خا بيف بلازما إيتا نيف جيج ثاميوف: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.22,
                speaker: "Volk",
                cop_de: "(Kyrie eleison) 3x.",
                de: "(Herr erbarme dich) 3x.",
                ar: "(يَا رَبُّ ارْحَمْ) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) 3",
                ar_de: "(ya rabu erham) 3",
                cop_ar: "(كيريه لييسون) 3",
            },
            {
                id: 17.23,
                speaker: "Priester",
                cop_de: "Ari-kataxioin P-chois ni-a-ir ente t-phe nem ni-karpos ente p-kahi khen tai-rompi thai: es-mou ero-ou.",
                de: "Bitte, o Herr, segne die Luft des Himmels und die Früchte der Erde in diesem Jahr.",
                ar: "تَفَضَّلْ يَا رَبُّ أَهْوِيَةَ السَّمَاءِ، وثَمَرَاتِ الأَرْضِ، بَارِكْهَا فِي هَذِهِ السَّنَةِ.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "tafaddal ya rabu ahwiyata el-sama2i, wa thamarat el-ardi, barik-ha fi hazihi el-sanati.",
                cop_ar: "آري كاتاكسيوين إبشويس ني أير إنتيه إت فيه نيم ني كاربوس إنتيه إب كاهي خين تاي رومبي ثاي: إسمو إيرو أو.",
            },
            {
                id: 17.24,
                speaker: "Diakon",
                cop_de: "Tovh egen ni-a-ir ente t-phe nem ni-karpos ente p-kahi nem pha ni-sh-shin nem pha ni-man-aloli nem sh-shin niven en-refti-karpos etkhen ti-oikomene tirs: hina ente Pi-khristos Pen-nouti es-mou ero-ou entef-gokou evol khen ou-hirini avne emkah: entef-kha nennovi nan evol.",
                de: "Bittet für die Lüfte des Himmels, die Früchte der Erde, die Bäume, Weinberge und jede nützliche Pflanze auf dem ganzen Erdkreis, dass Christus, unser Gott, sie segnet und sie ohne Schaden vollendet und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ أَهْوِيَةِ السَّمَاءِ، وثَمَرَاتِ الأَرْضِ، والشَّجَرِ، والكُرُومِ، وكُلِّ شَجَرَةٍ مُثْمِرَةٍ فِي كُلِّ المَسْكُونَةِ، لِكَيْ يُبَارِكَهَا المَسِيحُ إِلَهُنَا، ويُكَمِّلَهَا سَالِمَةً بِغَيْرِ أَلَمٍ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲫⲁ ⲛⲓϣϣⲏⲛ ⲛⲉⲙ ⲫⲁ ⲛⲓⲙⲁⲛ̀ⲁ̀ⲗⲟⲗⲓ ⲛⲉⲙ ϣϣⲏⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲣⲉϥϯⲕⲁⲣⲡⲟⲥ ⲉⲧϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ ⲛ̀ⲧⲉϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲁⲃⲛⲉ ⲙ̀ⲕⲁϩ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an ahwiyati el-sama2i, wa thamarat el-ardi, wal-shajari, wal-koroumi, wa kolli shajaratin mothmiratin fi kolli el-maskounati, likay yobarikaha el-Masi7 elahona, wa yokammilaha salimatan be-ghayri alamin, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين ني أير إنتيه إت فيه نيم ني كاربوس إنتيه إب كاهي نيم فا ني إششين نيم فا ني مان آلولي نيم إششين نيفين إن ريفتي كاربوس إتخين تي أويكوميني تيرس: هينا إنتيه بي إخرستوس بين نوتي إسمو إيرو أو إنتيف جوكو إيفول خين أو هيريني آفنيه إمكاه: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.25,
                speaker: "Volk",
                cop_de: "(Kyrie eleison) 3x.",
                de: "(Herr erbarme dich) 3x.",
                ar: "(يَا رَبُّ ارْحَمْ) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) 3",
                ar_de: "(ya rabu erham) 3",
                cop_ar: "(كيريه لييسون) 3",
            },
            {
                id: 17.251,
                speaker: "Priester",
                cop_de: "Ari-kata-axioin Epchois ni-air ente t-phe nem ni-karpos ente ep-kahi : nem ni-mou-ou ente ph-iaro : nem ni-siti nem ni-sim nem ni-rot ente t-koi et-khen tai-rompi thai : esmou ero-ou.",
                de: "Bitte, o Herr, segne die Lüfte des Himmels und die Früchte der Erde, das Wasser des Flusses, die Saaten und die Kräuter und die Gewächse des Feldes in diesem Jahr.",
                ar: "تَفَضَّلْ يَا رَبُّ أَهْوِيَةَ السَّمَاءِ، وثَمَرَاتِ الأَرْضِ، ومِيَاهَ النَّهْرِ، والزُّرُوعَ والعُشْبَ ونَبَاتَ الحَقْلِ، في هَذِهِ السَّنَةِ، بَارِكْهَا.",
                cop_cop: "Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲁⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ : ⲛⲉⲙ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫ̀ⲓⲁⲣⲟ : ⲛⲉⲙ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ : ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "Tafaddal ya Rabb ahwiyat el-samaa', wa thamarat el-ard, wa miyah el-nahr, wal-zorou3 wal-3oshb wa nabat el-haql, fi hazihi el-sanah, barekha.",
                cop_ar: "أري كاطا أكسيوين إبشويس ني أير إنتيه إتفي نيم ني كاربوس إنتيه إبكاهي : نيم ني موؤو إنتيه إفيارو : نيم ني سـيتي نيم ني سـيم نيم ني روت إنتيه إتكوي إتخين تاي رومبي ثاي : إسمو إيرو أو.",
            },
            {
                id: 17.252,
                speaker: "Diakon",
                cop_de: "Tovh egen ni-air ente t-phe nem ni-karpos ente ep-kahi : nem ep-gin-moshi e-pshoi ente ni-iaro-ou em-mou-ou : nem ni-siti nem ni-sim nem ni-rot ente t-koi : hina ente Pi-khristos Pennouti esmou ero-ou : ovoh entef-shen-hit kha pef-plasma eta nef-gig thamiof : entef-kha nennovi nan evol.",
                de: "Bittet für die Lüfte des Himmels, die Früchte der Erde, für den Anstieg der Gewässer, der Flüsse, für die Saaten, Kräuter und Gewächse des Feldes, dass Christus, unser Gott, sie segnet, und dass er mit seiner eigenhändigen Schöpfung Erbarmen hat und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ أَهْوِيَةِ السَّمَاءِ، وثَمَرَاتِ الأَرْضِ، وصُعُودِ مِيَاهِ الأَنْهَارِ، والزُّرُوعِ والعُشْبِ ونَبَاتِ الحَقْلِ، لِكَيْ يُبَارِكَهَا المَسِيحُ إلَهُنَا، ويَتَحَنَّنَ عَلَى جُبْلَتِهِ الَّتِي صَنَعَتْهَا يَدَاهُ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲁⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ : ⲛⲉⲙ ⲡ̀ϫⲓⲛⲙⲟϣⲓ ⲉ̀ⲡ̀ϣⲱⲓ ⲛ̀ⲧⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲙ̀ⲙⲱⲟⲩ : ⲛⲉⲙ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲡ̀ⲗⲁⲥⲙⲁ ⲉ̀ⲧⲁ ⲛⲉϥϫⲓϫ ⲑⲁⲙⲓⲟ̀ϥ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an ahwiyat el-samaa', wa thamarat el-ard, wa so3oud miyah el-anhar, wal-zorou3 wal-3oshb wa nabat el-haql, likay yobarekaha el-Masih elahona, wa yata7annan 3ala goblatehi ellati sana3at-ha yadaho, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين ني أير إنتيه إتفي نيم ني كاربوس إنتيه إبكاهي : نيم إبجين موشي إي إبشوي إنتيه ني ياروؤو إمموؤو : نيم ني سـيتي نيم ني سـيم نيم ني روت إنتيه إتكوي : هينا إنتيه بي إخرستوس بينوتي إسمو إيرو أو : أوفوه إنتيف شينهـيت خا بيف بلازما إيتا نيف جيج ثاميؤوف : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.253,
                speaker: "Volk",
                cop_de: "(Kyrie eleison) 3x.",
                de: "(Herr erbarme dich) 3x.",
                ar: "(يَا رَبُّ ارْحَمْ) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) 3",
                ar_de: "(ya rabu erham) 3",
                cop_ar: "(كيريه لييسون) 3",
            },

            {
                id: 17.26,
                speaker: "Priester",
                cop_de: "Ari-kataxioin P-chois ni-mo-ou ente phi-aro: ni-siti nem ni-sim nem ni-rot ente t-koi: ni-a-ir ente t-phe nem ni-karpos ente p-kahi: etkhen tai-rompi thai: es-mou ero-ou. Anitou epshoi kata noushi: kata phe-ete phok en-hmot: ma pounof em-p-ho em-p-kahi: maroteikhi enge nef-ethloh: marotashai enge nef-outah. Sevtotf e-ou-khrog nem ouoshkh: owoh ari-oikonomin em-pen-gin-onkh kata peter-nofri. Esmou e-pi-khlom ente ti-rompi hiten tek-met-khristos: ethve ni-hiki ente pek-laos: ethve ti-khira nem pi-orphanos nem pi-shemmo nem pi-rem-eng-oili: nem ethveten tiren kha ni eter-helpis erok: owoh et-tovh em-pek-ran ethouav. Ge nen-val en-ouon niven se-er-helpis erok: ge enthok et-ti en-tou-tre no-ou khen ou-se-ou e-nanef. Ari-ou-i neman kata tek-met-agathos: phe-et-ti khre en-sarx niven: moh en-nen-hit en-rashi nem ou-ounof: hina anon hon ere eph-roshi entoten khen hov niven en-se-ou niven: nenten-er-hou-o khen hov niven en-agathon.",
                de: "Bitte, o Herr, segne das Wasser des Flusses, die Saaten und die Kräuter und die Gewächse des Feldes, die Luft des Himmels und die Früchte der Erde في هَذِهِ السَّنَةِ. Lass sie ansteigen nach ihrem Maß und gemäß deiner Gnade. Gib dem Antlitz der Erde Freude, dass ihre Furchen bewässert werden und sich ihre Früchte mehren. Bereite den Boden zum Säen und Ernten. Regle unser Leben in geeigneter Weise. Segne den Kranz des Jahres mit deiner Güte, wegen der Armen deines Volkes, wegen der Witwen und Waisen, der Fremden und der Gäste, wegen uns allen, die wir auf dich hoffen und deinen heiligen Namen anrufen. Denn aller Augen hoffen auf dich, dass du ihnen ihre Speise zur rechten Zeit gibst. Handle mit uns nach deiner Güte, der du Nahrung allem Fleisch gibst. Erfülle unsere Herzen mit Freude und Wonne, damit wir in allem alle Zeit genug haben und in jedem guten Werk wachsen.",
                ar: "أَصْعِدْهَا كَمِقْدَارِهَا كَنِعْمَتِكَ. فَرِّحْ وَجْهَ الأَرْضِ، لِيُرْوَ حَرْثُهَا، ولِتَكْثُرَ أَثْمَارُهَا. أَعِدَّهَا لِلزَّرْعِ والحَصَادِ، ودَبِّرْ حَيَاتَنَا كَمَا يَلِيقُ. بَارِكْ إِكْلِيلَ السَّنَةِ بِصَلاحِكَ، مِنْ أَجْلِ فُقَرَاءِ شَعْبِكَ، مِنْ أَجْلِ الأَرْمَلَةِ واليَتِيمِ والغَرِيبِ والضَّيْفِ، ومِنْ أَجْلِنَا كُلِّنَا نَحْنُ الَّذِينَ نَرْجُوكَ ونَطْلُبُ اسْمَكَ القُدُّوسَ. لأَنَّ أَعْيُنَ الكُلِّ تَتَرَّجَاكَ، لأَنَّكَ أَنْتَ الَّذِي تُعْطِيهِمْ طَعَامَهُمْ فِي حِينٍ حَسَنٍ. اصْنَعْ مَعَنَا حَسَبَ صَلاحِكَ، يَا مُعْطِياً طَعَاماً لِكُلِّ جَسَدٍ. امْلأْ قُلُوبَنَا فَرَحاً ونَعِيماً، لِكَيْ نَحْنُ أَيْضاً إِذْ يَكُونُ لَنَا الكَفَافُ فِي كُلِّ شَيْءٍ كُلَّ حِينٍ، نَزْدَادُ فِي كُلِّ عَمَلٍ صَالِحٍ.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫⲓⲁⲣⲟ: ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ: ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ. Ⲁ̀ⲛⲓⲧⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ: ⲕⲁⲧⲁ ⲫⲏⲉ̀ⲧⲉ ⲫⲱⲕ ⲛ̀ϩ̀ⲙⲟⲧ: ⲙⲁ ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ: ⲙⲁⲣⲟⲧⲉⲓϧⲓ ⲛ̀ϫⲉ ⲛⲉϥⲉ̀ⲑⲗⲱϩ: ⲙⲁⲣⲟⲧⲁϣⲁⲓ ⲛ̀ϫⲉ ⲛⲉϥⲟⲩⲧⲁϩ. Ⲥⲉⲃⲧⲱⲧϥ ⲉ̀ⲟⲩⲭ̀ⲣⲟϫ ⲛⲉⲙ ⲟⲩⲱⲥϧ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲟⲓⲕⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲉⲛϫⲓⲛⲱⲛϧ ⲕⲁⲧⲁ ⲡⲉⲧⲉⲣⲛⲟϥⲣⲓ. Ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ ⲛⲓϩⲏⲕⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲉⲑⲃⲉ ϯⲭⲏⲣⲁ ⲛⲉⲙ ⲡⲓⲟⲣⲫⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲓϣⲉⲙⲙⲟ ⲛⲉⲙ ⲡⲓⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ: ⲛⲉⲙ ⲉⲑⲃⲏⲧⲉⲛ ⲧⲏⲣⲉⲛ ϧⲁ ⲛⲏ ⲉ̀ⲧⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲉⲧⲧⲱⲃϩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲛⲉⲛⲃⲁⲗ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲉⲧϯ ⲛ̀ⲧⲟⲩⲧ̀ⲣⲉ ⲛⲱⲟⲩ ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉ̀ⲛⲁⲛⲉϥ. Ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲫⲏⲉⲧϯ ϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ⲙⲟϩ ⲛ̀ⲛⲉⲛϩⲏⲧ ⲛ̀ⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲟⲩⲛⲟϥ: ϩⲓⲛⲁ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲉ̀ⲣⲉ ⲫ̀ⲣⲱϣⲓ ⲛ̀ⲧⲟⲧⲉⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ.",
                ar_de: "tafaddal ya rabu miyaha el-nahri, wal-zorou3a wal-3oshba, wa nabata el-haqli, wa ahwiyata el-sama2i, wa thamarat el-ardi, barik-ha fi hazihi el-sanati. as-3idha kamidariha ka-ni3matik. farrih wajha el-ardi, liyorwa harthouha, walitakthora athmarouha. a3iddaha lel-zar3i wal-hasadi, wa dabbir hayathana kama yaliq. barik eklila el-sanati bisalahika, min ajli foqara2i sha3bika, min ajli el-armalati wal-yatimi wal-gharibi wal-dayfi, wa min ajlina kollina nahnou el-lazina narjouka wa natlobou esmaka el-qoddousa. le2anna a3yona el-kolli tatarragaka, le2annaka anta el-lazi to3tihim ta3amahom fi hinin hasanin. esna3 ma3ana hasaba salahika, ya mo3tiyan ta3aman likolli jasadin. emla2 qoloubana farahan wa na3iman, likay nahnou aydan ez yakounou lana el-kafafu fi kolli shay2in kolla hinin, nazdadu fi kolli 3amalin salihin.",
                cop_ar: "آري كاتاكسيوين إبشويس ني مو أو إنتيه في آرو: ني سيتي نيم ني سيم نيم ني روت إنتيه إت كوي: ني أير إنتيه إت فيه نيم ني كاربوس إنتيه إب كاهي: إتخين تاي رومبي ثاي: إسمو إيرو أو. آنيتو إيبشوي كاتا نوشي: كاتا فيه إيتيه فوك إن إهموت: ما بونوف إمب هو إمب كاهي: ماروتِيخي إنجيه نيف إيثلوه: مارو تاشاي إنجيه نيف أوتاه. سِفتوتف إي أو خروج نيم أوشخ: أووه آري أويكونومين إمبين جين أونخ كاتا بيتير نوفري. إسمو إي بي إخلوم إنتيه تي رومبي هيتين تيك ميت إخرستوس: إثفيه ني هيكي إنتيه بيك لاوس: إثفيه تي خيرا نيم بي أورفانوس نيم بي شيمو نيم بي ريم إنجويلي: نيم إثفيتين تيرين خا ني إيتير هيلبيس إيروك: أووه إت توفه إمبيك ران إثوآف. جيه نين فال إن أوون نيفين سيه إير هيلبيس إيروك: جيه إنثوك إت تي إن تو تري نو أو خين أو سيو إي نانيف. آري أوي نيمان كاتا تيك ميت أغاثوس: في إت تي إخري إن ساركس نيفين: موه إن نين هيت إن راشي نيم أو أونوف: هينا أنون هون إيريه إف روشي إنتوتين خين هوف نيفين إن سيو نيفين: نين تين إير هو أوه خين هوف نيفين إن أغاثون.",
            },
            {
                id: 17.27,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.28,
                speaker: "Priester",
                cop_de: "Pi-ouro [pi-pro-edros - pi-an-gog] ente pen-kahi pek-vok.",
                de: "Des Königs [Präsidenten] unseres Landes, deines Dieners.",
                ar: "مَلِكَ (رئيس) أَرْضِنَا عَبْدَكَ.",
                cop_cop: "Ⲡⲓⲟⲩⲣⲟ [ⲡⲓⲡⲣⲟⲉⲇⲣⲟⲥ - ⲡⲓⲁⲛⲭⲱⲭ] ⲛ̀ⲧⲉ ⲡⲉⲛⲕⲁϩⲓ ⲡⲉⲕⲃⲱⲕ.",
                ar_de: "malika (Ra2ees) ardina 3abdaka.",
                cop_ar: "بي أورو [بي بروأيدروس - بي أنجوج] إنتيه بين كاهي بيك فوك.",
            },
            {
                id: 17.29,
                speaker: "Diakon",
                cop_de: "Tovh hina ente Pi-khristos Pen-nouti ti-nan en-han-nai nem han-met-shen-hit em-pem-tho en-ni-ex-ou-sia et-amahi: entef-er-malakin em-pou-hit e-khoun eron epi-agathon en-sio niven: entef-kha nen-novi nan evol.",
                de: "Bittet, damit Christus, unser Herr, uns Erbarmen und Barmherzigkeit vor den hohen Regierenden gibt und ihre Herzen uns zu jeder Zeit gewogen bleiben und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا لِكَيْ يُعْطِيَنَا المَسِيحُ إِلَهُنَا رَحْمَةً ورَأْفَةً أَمَامَ الرُّؤَسَاء الأعِزَّاء، ويُعَطِّفَ قُلُوبَهُمْ عَلَيْنَا بِالصَّلاحِ فِي كُلِّ حِينٍ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯⲛⲁⲛ ⲛ̀ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ ⲙ̀ⲡⲉⲙ̀ⲑⲟ ⲛ̀ⲛⲓⲉⲝⲟⲩⲥⲓⲁ̀ ⲉⲧⲁ̀ⲙⲁϩⲓ: ⲛ̀ⲧⲉϥⲉⲣ-ⲙⲁⲗⲁⲕⲓⲛ ⲙ̀ⲡⲟⲩϩⲏⲧ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲛ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou likay yo3tiyana el-Masi7 elahona rahmatan wa ra2fatan amama el-ro2asa2 el-a3izza2, wa yo3attifa qoloubahom 3alayna bel-salahi fi kolli hinin, wa yaghfira lana khatayana.",
                cop_ar: "توفه هينا إنتيه بي إخرستوس بين نوتي تي نان إن هان ناي نيم هان ميت شينهيت إم بيم ثو إن ني إكسوسيا إت أماهي: إنتيف إير مالاكين إم بو هيت إيخون إيرون إي بي أغاثون إن سيو نيفين: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.30,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.31,
                speaker: "Priester",
                cop_de: "Areh erof khen ou-hirini nem ou-methmi nem ou-met-gori: marou-thevi-o-ou naf tirou en-ge ni-varvaros ni-ethnos ni-eth-ouosh en-ni-vots: pros thi-ete thon tirou en-et-thenia. Sagi e-khri e-pef-hit ethve ti-hirini ente tek-oui mmavats eth-ou-av en-katholiki en-apostoliki en-ekklisia. Mais naf e-mevi en-han-hirinikon e-khoun eron nem e-khoun e-pek-ran eth-ou-av: hina anon hon enonkh khen ou-vios ef-hou-ro-ou ovoh ef-ork en-sekhemten en-shop khen met-ev-sevis niven nem met-semnos niven e-khoun erok.",
                de: "Bewahre ihn in Frieden, Gerechtigkeit und Macht im Amt. Alle Barbaren, die Völkerschaften, die Krieg wollen wegen allem Guten, das unser ist, sollen sich vor ihm beugen. Wirke in seinem Herzen für den Frieden deiner einen, einzigen, heiligen, universalen und apostolischen Kirche. Gib ihm, dass er unser und deines heiligen Namens in Frieden gedenkt, damit wir in Ruhe und Beständigkeit leben können und in Frömmigkeit und Keuschheit durch dich bewahrt bleiben.",
                ar: "احْفَظْهُ بِسَلامٍ وعَدْلٍ وقُوَّةٍ، ولْتَخْضَعْ لَهُ كُلُّ البَرْبَرِ، الأُمَمُ الَّذِينَ يُرِيدُونَ الحَرْبَ فِي جَمِيعِ مَا لَنَا مِنَ الخِصْبِ. تَكَلَّمْ فِي قَلْبِهِ مِنْ أَجْلِ سَلامِ كَنِيسَتِكَ الوَاحِدَةِ الوَحِيدَةِ المُقَدَّسَةِ الجَامِعَةِ الرَّسُولِيَّةِ. أَعْطِهِ أَنْ يُفَكِّرَ بِالسَّلامِ فِينَا وفِي اسْمِكَ القُدُّوسِ. لِكَيْ نَحْيَا نَحْنُ أَيْضاً فِي سِيرَةٍ هَادِئَةٍ سَاكِنَةٍ، ونُوجَدَ فِي كُلِّ تَقْوَى وكُلِّ عَفَافٍ بِكَ.",
                cop_cop: "Ⲁⲣⲉϩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ ⲛⲉⲙ ⲟⲩⲙⲉⲧϫⲱⲣⲓ: ⲙⲁⲣⲟⲩⲑⲉⲃⲓⲱⲟⲩ ⲛⲁϥ ⲧⲏⲣⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲃⲁⲣⲃⲁⲣⲟⲥ ⲛⲓⲉⲑⲛⲟⲥ ⲛⲏⲉⲑⲟⲩⲱϣ ⲛ̀ⲛⲓⲃⲱⲧⲥ: ⲡ̀ⲣⲟⲥ ⲑⲏⲉⲧⲉ ⲑⲱⲛ ⲧⲏⲣⲟⲩ ⲛ̀ⲉⲧⲑⲉⲛⲓⲁ. Ⲥⲁϫⲓ ⲉ̀ϧ̀ⲣⲏⲓ ⲉ̀ⲡⲉϥϩⲏⲧ ⲉⲑⲃⲉ ϯϩⲓⲣⲏⲛⲏ ⲛ̀ⲧⲉ ⲧⲉⲕⲟⲩⲓ̀ ⲙ̀ⲙⲁⲩⲁⲧⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲕⲁⲑⲟⲗⲓⲕⲏ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲓⲕⲏ ⲛ̀ⲉⲕⲕⲗⲏⲥⲓⲁ̀. Ⲙⲁⲓⲥ ⲛⲁϥ ⲉ̀ⲙⲉⲩⲓ̀ ⲛ̀ϩⲁⲛϩⲓⲣⲏⲛⲓⲕⲟⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲛ ⲛⲉⲙ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ϩⲓⲛⲁ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲉⲛⲱⲛϧ ϧⲉⲛ ⲟⲩⲃⲓⲟⲥ ⲉϥϩⲟⲩⲣⲱⲟⲩ ⲟⲩⲟϩ ⲉϥⲱⲣⲕ ⲛ̀ⲥⲉⲭⲉⲙⲧⲉⲛ ⲉⲛϣⲟⲡ ϧⲉⲛ ⲙⲉⲧⲉⲩⲥⲉⲃⲏⲥ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲙⲉⲧⲥⲉⲙⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲣⲟⲕ.",
                ar_de: "e7faz-ho be-salamin wa 3adlin wa qowatin, wal-takhda3 laho kollo el-barbari, el-omamo el-lazina yoreidouna el-7arba fi gamie3i ma lana min el-khasbi. takallam fi qalbihi min agli salami kanisatika el-wa7idati el-wa7idati el-muqaddasati el-gamie3ati el-rasouliyati. a3tihi an yofakkira bel-salami fina wa fi esmika el-qoddousi. likay na7ya na7no ayzan fi seiratin hadi2atin sakinatin, wa nougada fi kolli taqwa wa kolli 3afafin bika.",
                cop_ar: "آره إيروف خين أو هيريني نيم أو ميثمي نيم أو ميت جوري: مارو ثيفيو أو ناف تيرو إنجيه ني فارفاروس ني إثنوس ني إيث أوش إن ني فوتس: بروس ثي إيتيه ثون تيرو إن إيت ثينيا. ساجي إيخري إي بيف هيت إثفيه تي هيريني إنتيه تيك أوي إممافاتس إثؤواب إن كاثوليكي إن أبوستوليكي إن إككليسيا. مايس ناف إيميفي إن هان هيريني كون إيخون إيرون نيم إيخون إي بيك ران إثؤواب: هينا أنون هون إن أونخ خين أو فيوس إيف هورو أو أوفوه إيف أورك إن سي خيمتين إن شوب خين ميت إيف سيفيس نيفين نيم ميت سيمنوس نيفين إيخون إيروك.",
            },
            {
                id: 17.32,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.33,
                speaker: "Priester",
                cop_de: "Nenioti nem nensniv etavenkot eakchi ennouyichi mamton noou. Ekiri on emphmevi enniethouav tirou etavranak isgen peneh. Nenioti ethouav nipatriarkhis niprophitis niapostolos nirefhiwish nievangelistis nimartyros niomologitis nem pneuma niven endikeos etavgok evol khen phnahti. Malista de ethouav ethmeh eno-ou: etoi emparthenos ensiou niven: ti-Theotokos ethouavt agia Maria. Nem pi-agios Ioannis pi-prodromos em-vaptistis owoh em-martyros. Nem pi-agios Stephanos pi-arkhidiakon owoh em-protomartyros. Nem pi-agios Markos pi-apostolos ethouav owoh em-martyros. Nem pi-patriarchis ethouav Severos : nem pi-agios Kyrillos : nem pi-agios Vasilios : nem pi-agios Grigorios. Nem peniot endikeos pi-nishti abba Antonios : nem pi-thmi abba Pavle : nem pi-shomt ethouav abba Makari. Nem peniot abba Ioannis : nem peniot abba Pishoi : nem nenioti ethouav en-romeos Maximos nem Dometios : nem pi-hme psit en-martyros : nem pi-gori ethouav abba Mosi. Nem peniot abba Pakhom pha ti-koinonia : nem peniot abba Shenouti pi-arkhimandritis : nem peniot abba Nofer pi-anachoritis : nem peniot abba Samouel pi-omologitis. Nem ep-choros tirf ente ni-ethouav ntak. Oukh oti ge anon ph-mip etemp-sha en-er-pres-vevin eh-rii egen th-met-makarios en-ni-ete mmav. Alla ge entho-ou et-ohi erato-ou nahren pi-vima ente pek-monogenis en-Shiri. Entou-shopi em-vevi-o en-er-pres-vevin : eh-rii egen ten-met-hiki nem ten-met-khov. Shopi en-ref-kho evol nnen-anomia : ethve nou-ti-ho ethouav : nem ethve pek-ran et-smaro-out : et-av-mouti emmof eh-rii egon.",
                de: "Unsere Väter und Brüder, die entschlafen sind, deren Seelen du aufgenommen hast, lass ausruhen. Gedenke auch aller Heiligen, die dir von Anbeginn wohlgefallen haben. Unserer heiligen Väter, der Patriarchen, der Propheten, der Apostel, der Verkünder, der Evangelisten, der Märtyrer, der Bekenner und der Seelen aller Rechtschaffenen, die im Glauben vollendet sind. Zu allermeist gedenke, o Herr, der heiligen, ehrenvollen, der immerwährenden Jungfrau, der Mutter Gottes, der reinen, heiligen Maria; und des heiligen Johannes, des Vorläufers, des Täufers und Märtyrers; und des heiligen Stephanus, des Erzdiakons und Ersten der Märtyrer; und des heiligen Evangelisten Markus des Apostels und Märtyrers. des heiligen Patriarchen Severus, des heiligen Kyrillus, des heiligen Basilius, des heiligen Gregorius, und unseres Vaters, des gerechten Abba Antonius des Großen, des rechtschaffenen Abba Paul, der heiligen drei Abba Makarius unseres Vaters Abba Johannes, unseres Vaters Abba Pischoi, unserer beiden Herren, der heiligen Maximus und Domadius die Römer, der 49 Märtyrer, des starken heiligen Abba Mose, unseres Vaters Abba Pachom, der Vater des Koinobitentums, unseres Vaters Abba Schenouda der Archimandrit, unseres Vaters Abba Noufer der Anachoret unseres Vaters Abba Samuel der Bekenner Und aller Reihen deiner Heiligen. Wir sind, o unser Herr, der Seligkeit ihrer Fürsprache nicht würdig. Denn sie stehen bereits vor dem Richterstuhl deines eingeborenen Sohnes. Dort sind sie an unserer Stelle und bitten für uns wegen unserer Schwäche und Armseligkeit. Gewähre uns die Vergebung unserer Schuld um ihrer heiligen Fürbitten willen und wegen deines gesegneten Namens, der über uns ausgerufen ist.",
                ar: "آبَاؤُنَا وَإِخْوَاتُنَا الَّذِينَ رَقَدُوا، الذينَ أَخَذْتَ نُفُوسَهُمْ نَيِّحْهُمْ. ذَاكِراً أَيْضاً جَمِيعَ الْقِدِّيسِينَ الَّذِينَ أَرْضُوكَ مُنْذُ الْبَدْءِ. آبَاءَنَا الأَطْهَارَ رُؤَسَاءَ الآبَاءِ، وَالأَنْبِيَاءَ، وَالرُّسُلَ، وَالْمُبَشِّرِينَ، وَالإِنْجِيلِيِّينَ، وَالشُّهَدَاءَ، وَالْمُعْتَرِفِينَ، وَكُلَّ أَرْوَاحِ الصِّدِّيقِينَ الَّذِينَ كَمُلُوا فِي الإِيمَانِ. وبالأكثر القديسة المملوءة مجداً، العذراء كل حين، والدة الإله الطاهرة القديسة مريم؛ والقديس يوحنا السابق المعمدان والشهيد؛ والقديس استفانوس أول الشمامسة وأول الشهداء؛ والقديس مرقس الرسول الطاهر الإنجيلي والشهيد. والبَطْرِيَرْكَ القِدِّيسَ سَاوِيرُسَ، والقِدِّيسَ كِيرُلسَ، والقِدِّيسَ بَاسِيلِيُوسَ، والقِدِّيسَ إغريغوريوسَ. وأَبَانَا الصِّدِّيقَ العَظِيمَ أَنْبَا أَنْطُونِيُوسَ، والبَارَّ أَنْبَا بُولا، والثَّلاثَةِ أَنْبَا مَقَارَاتِ القِدِّيسِينَ. وأَبَانَا أَنْبَا يُحَنَّسَ، وأَبُونَا أَنْبَا بِشُوي، والقِدِّيسَيْنِ الرُّومِيَّيْنِ مَكْسِيمُوسَ ودُومادِيُوسَ، والتِّسْعَةَ والأَرْبَعِينَ شَهِيداً، والقَوِيَّ أَنْبَا مُوسَى. وأَبَانَا أَنْبَا بَاخُومَ أَبَا الشَّرِكَةِ، وأَبَانَا أَنْبَا شُنُودَه رَئِيسَ المُتَوَحِّدِينَ، وأَبَانَا أَنْبَا نُفَرَ السَّائِحَ، وأَبَانَا أَنْبَا صَمُوئِيلَ المُعْتَرِفَ. وكُلَّ مَصَافِّ قِدِّيسِيكَ. إنَّنَا يَا سَيِّدَنَا لَسْنَا أهْلاً أنْ نَتَشَفَّعَ فِي طُوبَاوِيَّةِ أولَئِكَ. بَلْ هُمْ قِيَامٌ أَمَامَ مِنْبَرِ ابْنِكَ الوَحِيدِ. لِيَكُونُوا عِوَضاً عَنَّا، يَتَشَفَّعُونَ فِي مَسْكَنَتِنَا وضَعْفِنَا. كُنْ غَافِراً لآثَامِنَا، مِنْ أَجْلِ طِلْبَاتِهِمُ المُقَدَّسَةِ، ومِنْ أَجْلِ اسْمِكَ المُبَارَكِ الَّذِي دُعِيَ عَلَيْنَا.",
                cop_cop: "Ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ ⲉ̀ⲁⲕϭⲓ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ. Ⲉⲕⲓⲣⲓ ⲟⲛ ⲙ̀ⲫⲙⲉⲩⲓ̀ ⲛ̀ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲉ̀ⲧⲁⲩⲣⲁⲛⲁⲕ ⲓⲥϫⲉⲛ ⲡⲉⲛⲉϩ. Ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲛⲓⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲓⲁⲡⲟⲥⲧⲟⲗⲟⲥ ⲛⲓⲣⲉϥϩⲓⲱⲓϣ ⲛⲓⲉⲩⲁⲅⲅⲉⲗⲓⲥⲧⲏⲥ ⲛⲓⲙⲁⲣⲧⲩⲣⲟⲥ ⲛⲓⲟⲙⲟⲗⲟⲅⲓⲧⲏⲥ ⲛⲉⲙ ⲡ̀ⲛⲉⲩⲙⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲇⲓⲕⲉⲟⲥ ⲉ̀ⲧⲁⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲫⲛⲁϩϯ. Ⲙⲁⲗⲓⲥⲧⲁ ⲇⲉ ⲉⲑⲟⲩⲁⲃ ⲉⲑⲙⲉϩ ⲛ̀ⲱⲟⲩ: ⲉⲧⲟⲓ ⲙ̀ⲡⲁⲣⲑⲉⲛⲟⲥ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃⲧ ⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲡⲣⲟⲇ̀ⲣⲟⲙⲟⲥ ⲙ̀ⲃⲁⲡⲧⲓⲥⲧⲏⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲥⲧⲉⲫⲁⲛⲟⲥ ⲡⲓⲁⲣⲭⲏⲇⲓⲁⲕⲱⲛ ⲟⲩⲟϩ ⲙ̀ⲡ̀ⲣⲱⲧⲟⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲁ̀ⲅⲓⲟⲥ Ⲙⲁⲣⲕⲟⲥ ⲡⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲣⲧⲩⲣⲟⲥ. Ⲛⲉⲙ ⲡⲓⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉⲑⲟⲩⲁⲃ Ⲥⲉⲩⲏⲣⲟⲥ : ⲛⲉⲙ ⲡⲓⲁⲅⲓⲟⲥ Ⲕⲩⲣⲓⲗⲗⲟⲥ : ⲛⲉⲙ ⲡⲓⲁⲅⲓⲟⲥ Ⲃⲁⲥⲓⲗⲓⲟⲥ : ⲛⲉⲙ ⲡⲓⲁⲅⲓⲟⲥ Ⲅⲣⲏⲅⲟⲣⲓⲟⲥ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲇⲓⲕⲉⲟⲥ ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓⲟⲥ : ⲛⲉⲙ ⲡⲓⲑ̀ⲙⲏⲓ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ : ⲛⲉⲙ ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲁⲕⲁⲣⲓ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ : ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲣⲱⲙⲉⲟⲥ Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ : ⲛⲉⲙ ⲡⲓϩ̀ⲙⲉ ⲯⲓⲧ ⲛ̀ⲙⲁⲣⲧⲩⲣⲟⲥ : ⲛⲉⲙ ⲡⲓϫⲱⲣⲓ ⲉⲑⲟⲩⲁⲃ ⲁⲃⲃⲁ Ⲙⲱⲥⲏ. Ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ ⲫⲁ ϯⲕⲟⲓⲛⲱⲛⲓⲁ̀ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ ⲡⲓⲁⲣⲭⲏⲙⲁⲛⲇ̀ⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲛⲟⲩϥⲉⲣ ⲡⲓⲁ̀ⲛⲁⲭⲱⲣⲓⲧⲏⲥ : ⲛⲉⲙ ⲡⲉⲛⲓⲱⲧ ⲁⲃⲃⲁ Ⲥⲁⲙⲟⲩⲏⲗ ⲡⲓⲟ̀ⲙⲟⲗⲟⲅⲓⲧⲏⲥ. Ⲛⲉⲙ ⲡ̀ⲭⲟⲣⲟⲥ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ. Ⲟⲩⲭ ⲟ̀ⲧⲓ ϫⲉ ⲁ̀ⲛⲟⲛ ⲫⲙⲏⲡ ⲉ̀ⲧⲉⲙⲡ̀ϣⲁ ⲛ̀ⲉⲣⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲑ̀ⲙⲉⲧⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ. Ⲁⲗⲗⲁ ϫⲉ ⲛ̀ⲑⲱⲟⲩ ⲉⲧⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛⲁϩⲣⲉⲛ ⲡⲓⲃⲏⲙⲁ ⲛ̀ⲧⲉ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ. Ⲛ̀ⲧⲟⲩϣⲱⲡⲓ ⲙ̀ⲱⲉⲃⲓⲱ̀ ⲛ̀ⲉⲣⲡ̀ⲣⲉⲥⲃⲉⲩⲓⲛ : ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲧⲉⲛⲙⲉⲧϩⲏⲕⲓ ⲛⲉⲙ ⲧⲉⲛⲙⲉⲧⲭⲱⲃ. Ϣⲱⲡⲓ ⲛ̀ⲣⲉϥⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀ : ⲉⲑⲃⲉ ⲛⲟⲩϯϩⲟ ⲉⲑⲟⲩⲁⲃ : ⲛⲉⲙ ⲉⲑⲃⲉ ⲡⲉⲕⲣⲁⲛ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ : ⲉ̀ⲧⲁⲩⲙⲟⲩϯ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ.",
                ar_de: "aba2ona wa ekhwatona el-lazina raqadou, ellazina akhazta nofosahom nayye7-hom. zakiran ayzan gami3 el-qiddisina el-lazina ardoka monzo el-bad2. aba2ana el-athara ro2asa2 el-aba2, wal-anbeya2, wal-rosol, wal-mobashshirina, wal-ingiliyyina, wal-shohada2, wal-mo3tarifina, wa kolla arwa7 el-seddiqina el-lazina kamalou fil-iman. Wa bel-akthar el-qiddisa el-mamlou2a magdan, el-3azra2 kol 7in, walidat el-elah el-tahira el-qiddisa Maria. Wal-qiddis Youhanna el-sabiq el-ma3madan wal-shaheed. Wal-qiddis Estefanos awwal el-shamamisa wa awwal el-shohada2. Wal-qiddis Morqos el-rasoul el-tahir el-ingili wal-shaheed. Wel batriarka el qiddis Saweeros, wel qiddis Kyrillos, wel qiddis Basilios, wel qiddis Eghrighorios. Wa abana el seddiq el 3azim anba Antonios, wel barr anba Boula, wal salalata anba Maqarat el qiddisin. Wa abana anba Yo7annes, wa abouna anba Pishoy, el qiddisayn el romiyayn Maximos wa Domadios, wal tes3a wal arba3in shaheedan, wal qawi anba Moussa. Wa abana anba Pakhom aba el sherika, wa abana anba Shenouda ra2is el motawa7idin, wa abana anba Nofer el sa2e7, wa abana anba Samouel el mo3tarif. Wa kol masaff qiddisik. Ennana ya sayyedana lasna ahlan an natashaffa3a fi toubaweyyat ola2ik. Bal hom qeyam amam minbari ebnika el-wahid. Li-yakonou 3ewazan 3anna, yatashaffa3ouna fi maskanatina wa za3fina. Kon ghafiran li-athamina, min agli telbatihom el-moqaddasa, wa min agli esmeka el-mobarak ellathi do3eya 3alayna.",
                cop_ar: "نين يوتي نيم نين إسنِي إيتاف إنكوت إي آك شي إن نو بـسيشي ما إمتون نو أو. إيك إيري أون إم إف ميفي إن ني إثؤواب تيرو إيتاف راناك إسجين بينيه. نين يوتي إثؤواب ني باتري آرخيس ني بروفيتيس ني أبوستولوس ني ريف هيويش ني إيفانجيليستيس ني مارتيروس ني أومولوجيتيس نيم بـنيفما نيفين إن ديكايوس إيتاف جوك إيفول خين إفنا هـتي. ماليستا دي إثؤواب إث ميه إن أو أو: إت أوي إم بارثينوس إن سيو نيفين: تي ثيؤطوكوس إثؤوابت آجيا ماريا. نيم بي آجيوس يوانيس بي برودروموس إم بابتستيس أوفوه إم مارتيروس. نيم بي آجيوس ستيفانوس بي آرشي دياكون أوفوه إم بروتو مارتيروس. نيم بي آجيوس ماركوس بي أبوسطولوس إثؤواب أوفوه إم مارتيروس. نيم بي باتري أرشيس إثؤواب سيفيروس : نيم بي آجيوس كيريللوس : نيم بي آجيوس فاسيليوس : نيم بي آجيوس غريغوريوس. نيم بين يوت إن ديكايوس بي نيشتي أببا أنطونيوس : نيم بي إثمي أببا بافلي : نيم بي شومت إثؤواب أببا ماكاري. نيم بين يوت أببا يوحنس : نيم بين يوت أببا بيشوي : نيم نين يوتي إثؤواب إن روميوس ماكسيموس نيم دوميتيوس : نيم بي همي بسيت إن مارتيروس : نيم بي جوري إثؤواب أببا موسى. نيم بين يوت أببا باخوم فا تي كوينونيا : نيم بين يوت أببا شنودي بي أرشي ماندريتيس : نيم بين يوت أببا نوفر بي أنا خوريتيس : نيم بين يوت أببا صموئيل بي أومولوجيتيس. نيم إبخوروس تيرف إنتيه ني إثؤواب إنتاك. أوخ أوتي جيه أنون إف ميب إيتيم إبشا إن إر بريس فيفين إهريي إيجين إث ميت ماكاريوس إن ني إيتيه إمماف.أللا جيه إنثو أو إت أوهي إيرات أو ناهرين بي فيما إنتيه بيك مونوجينيس إن شيري. إنتو شوبي إم فيفي أو إن إر بريس فيفين : إهريي إيجين تين ميت هيكِي نيم تين ميت خوب. شوبي إن ريف كو إيفول إن نين أنوميا : إثفي نو تي هو إثؤواب : نيم إثفي بيك ران إت سمارو أوت : إيتاف موتي إمموف إهريي إيجون.",


            },
            {
                id: 17.34,
                speaker: "Diakon",
                cop_de: "Ni-et-osh marou-ta-ou-o en-ni-ran ente nenioti ethouav em-patriarkhis et-av-enkot : Ep-chois ma-emton en-nou-yichi tirou ovoh entef-kha nennovi nan evol.",
                de: "Die Vorleser sprechen die Namen unserer heiligen Väter, die Patriarchen, die entschlafen sind. Der Herr möge ihren Seelen ewige Ruhe schenken und uns unsere Sünden vergeben.",
                ar: "القارِئُونَ فليقولوا أسماءَ آبائنا القِدِّيسينَ البَطارِكَةِ الَّذينَ رقَدُوا، الرَّبُّ يُنيّحُ نُفُوسَهُم أجمعينَ، ويغفِرُ لنا خطايانا.",
                cop_cop: "Ⲛⲏⲉⲧⲱϣ ⲙⲁⲣⲟⲩⲧⲁⲟⲩⲟ ⲛ̀ⲛⲓⲣⲁⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ : Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "El qare2oun falyoqolou asma2 aba2ena el qiddisin el batarka ellazina raqadou, el rabb yunayye7 nofosahom agma3in, wa yaghfer lana khatayana.",
                cop_ar: "ني إيت أوش مارو طاؤو إن ني ران إنتيه نين يوتي إثؤواب إم باتري أرشيس إيتاف إنكوت : إبشويس ما إمتون إن نو بـسيشي تيرو أوفوه إنتيف كا نين نوفي نان إيفول.",
                navigationButtons: [
                    {
                        label_ar: "بي نشتي", // The Waters
                        label_de: "Bi nishti",
                        action: "navigatePage",      // ÄNDERUNG: Neue Seite
                        targetPage: "Bi_nishti_content"  // Name der neuen Seite
                    },

                ]
            },
            {
                id: 17.35,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois nnenkeioti ethouav northodoxos ovoh narkhiepiskopos etaver-shorp nenkot: nai etav-osht evol empisagi ente timethmi khen ousowouten. Ovoh moi nan hon noumeros nem oukliros nem-o-ou. Ekiri on emphmevi nnai eteniri empoumevi: khen paiehoo ente pho-ou.",
                de: "(Still) Gedenke, o Herr, unserer heiligen orthodoxen Väter, der Erzbischöfe, die uns vorausgegangen und entschlafen sind, und all jener, die das Wort der Wahrheit aufrichtig verkünden, und gib uns auch Gewinn und Anteil mit ihnen. Gedenke auch derer, an die wir am heutigen Tag denken.",
                ar: "(سراً) أذْكُر يا رَبُّ آباءَنا القِدِّيسينَ الأرْثوذُكْسِيِّينَ رُؤَساءَ الأساقِفَةِ الَّذينَ سَبَقوا فَرَقَدوا، هؤُلاءِ الَّذينَ فَصَّلوا كَلِمَةَ الحَقِّ باستِقامَةٍ. وأعْطِنا نَحْنُ أيْضاً حَظّاً ونَصيباً مَعَهُم، ذاكِراً أيْضاً هؤُلاءِ الَّذينَ نَذْكُرُهُم في يَومِنا هذا.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲛⲕⲉⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲟⲩⲟϩ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲉ̀ⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲉⲛⲕⲟⲧ: ⲛⲁⲓ ⲉ̀ⲧⲁⲩⲱϣⲧ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ. Ⲟⲩⲟϩ ⲙⲟⲓ ⲛⲁⲛ ϩⲱⲛ ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ ⲛⲉⲙ ⲟⲩⲕ̀ⲗⲏⲣⲟⲥ ⲛⲉⲙⲱⲟⲩ. Ⲉⲕⲓⲣⲓ ⲟⲛ ⲙ̀ⲫⲙⲉⲩⲓ̀ ⲛ̀ⲛⲁⲓ ⲉ̀ⲧⲉⲛⲓⲣⲓ ⲙ̀ⲡⲟⲩⲙⲉⲩⲓ̀: ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲫⲟⲟⲩ.",
                ar_de: "(Serran) ozkor ya rabb aba2ana el qiddisin el orthodoxiyyin ro2asa2 el asaqifa ellazina sabaqou faraqadou, ha2ola2 ellazina fassalou kalemat el haqq bastaqama. Wa a3tena nahnou ayzan hazzan wa nasiban ma3ahom, zakiran ayzan ha2ola2 ellazina nazkorohom fi yawmena haza.",
                cop_ar: "أري إف ميفي إبشويس نين كيه يوتي إثؤواب إن أرثوذكسوس أوفوه إن أرشي إيبي سكوبوس إيتاف إر شيرب إنكوت: ناي إيتاف أوشت إيفول إم بي ساجي إنتيه تي ميثمي خين أو سو أوتين. أوفوه موي نان هون نو ميروس نيم أو إكليروس نيمو أو. إيك إيري أون إم إف ميفي إن ناي إيتين إيري إمبو ميفي: خين باي إيهوؤو إنتيه فوؤو.",
            },
            {
                id: 17.36,
                speaker: "Diakon",
                cop_de: "Tovh egen nenioti nem nens-ni-ou et-av-enkot: av-emton emmo-ou khen eph-nahti em-Pi-khristos is-gen peneh. Nenioti eth-ou-av en-arkhi-episkopos ke nenioti en-episkopos: nenioti en-higo-oumenos ke nenioti em-presvyteros: nem nens-ni-ou en-diakon. Nenioti em-monakhos ke nenioti en-laikos: nem eh-rii egen ti-anapavsis tirs ente ni-khristianos: hina ente Pi-khristos Pennouti ti-emton ennou-yichi tirou: khen pi-paradisos ente p-ou-nof: anon de hon entef-er pinai neman: entef-kha nennovi nan evol.",
                de: "Bittet für unsere Väter und Brüder, die entschlafen und aus dem Leben geschieden sind im Glauben an Christus seit dem Anfang. Unsere heiligen Väter, die Bischofoberhäupter, Bischöfe, Erzpriester, Priester, unsere Brüder, die Diakone. Unsere Mönchsväter und Laienväter und für alle Christen, damit Christus, unser Gott, ihren Seelen im Paradies der Freude ewige Ruhe schenke. Uns möge er Erbarmen erweisen und unsere Sünden vergeben.",
                ar: "أُطْلُبُوا عَنْ آبَائِنَا وَإِخْوَتِنَا الَّذِينَ رَقَدُوا، وَتَنَيَّحُوا فِي الإِيمَانِ بِالْمَسِيحِ مُنْذُ الْبَدْءِ. آبَائِنَا الْقِدِّيسِينَ رُؤَسَاءِ الأَسَاقِفَةِ، وَآبَائِنَا الأَسَاقِفَةِ، وَآبَائِنَا الْقَمَامِصَةِ، وَآبَائِنَا الْقُسُوسِ وَإِخْوَتِنَا الشَّمَامِسَةِ، وَآبَائِنَا الرُّهْبَانِ، وَآبَائِنَا الْعِلْمَانِيِّينَ، وَعَنْ نِيَاحِ كُلِّ الْمَسِيحيينَ. لِكَيْ الْمَسِيحُ إِلَهُنَا يُنِيحَ نُفُوسَهُمْ أَجْمَعِينَ فِي فِرْدَوْسِ النَّعِيمِ، وَنَحْنُ أَيْضاً يَصْنَعُ مَعَنَا رَحْمَةً، وَيَغْفِرُ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ: ⲁⲩⲙ̀ⲧⲟⲛ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲫⲛⲁϩϯ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲓⲥϫⲉⲛ ⲡⲉⲛⲉϩ. Ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ: ⲛⲉⲛⲓⲟϯ ⲛ̀ϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ: ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲛ̀ⲇⲓⲁ̀ⲕⲱⲛ. Ⲛⲉⲛⲓⲟϯ ⲙ̀ⲙⲟⲛⲁⲭⲟⲥ ⲕⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲗⲁⲓ̀ⲕⲟⲥ: ⲛⲉⲙ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ϯⲁ̀ⲛⲁⲡⲁⲩⲥⲓⲥ ⲧⲏⲣⲥ ⲛ̀ⲧⲉ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡⲟⲩⲛⲟϥ: ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲛ̀ⲧⲉϥⲉⲣ ⲡⲓⲛⲁⲓ ⲛⲉⲙⲁⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an aba2ena wa ekhwatena ellazina raqadou, wa tanayya7ou fel iman bel Masih monzo el bad2. Aba2ena el qiddisin ro2asa2 el asaqifa, wa aba2ena el asaqifa, wa aba2ena el qamamisa, wa aba2ena el qosous wa ekhwatena el shamamisa, wa aba2ena el rohbann, wa aba2ena el 3elmaniyyin, wa 3an niyya7 koll el masi7iyyin. Likay el Masih elahona yunayya7 nofosahom agma3in fi firdaws el na3im, wa nahnou ayzan yasna3 ma3ana rahma, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين نين يوتي نيم نين إسنِي إيتاف إنكوت: آف إمتون إممو أو خين إفنا هتي إم بي إخرستوس إسجين بينيه. نين يوتي إثؤواب إن أرشي إيبي سكوبوس كيه نين يوتي إن إيبي سكوبوس: نين يوتي إن هيغومينوس كيه نين يوتي إم بريسفيتيروس: نيم نين إسني إن دياكون. نين يوتي إم موناخوس كيه نين يوتي إن لائيكوس: نيم إهريي إيجين تي أنا بافسيس تيرس إنتيه ني إخرستيانوس: هينا إنتيه بي إخرستوس بينوتي تي إمتون إن نو بـسيشي تيرو: خين بي باراديسوس إنتيه بو نوف: أنون ديه هون إنتيف إير بي ناي نيمان: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.37,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.38,
                speaker: "Priester",
                cop_de: "Ovoh nai nem ouon niven Epchois ne-etantan-ou-o nouran: nem ne-ete empentan-ou-ou. Ne-et khen ph-mevi em-piouai piouai emmon: nem ne-ete ense-khi enkheten an. Etav-enkot av-emton emmo-ou khen ph-nahti em-Pi-khristos. Ari-kata-ksion Epchois ma-emton ennou-yichi tirou: khen kenf en-nenioti ethouav: Avra-am nem Isa-ak nem Iak-ov. Shano-ou-shou khen ouma en-kh-lo-i: higen ph-mo-ou ente pem-ton: khen pi-paradisos ente p-ounof. Pima etaf-phot evol enkhetf: enje pi-kah, en-hit nem ti-lypi nem pi-phi-ahom: khen ph-ou-oini ente ni-ethouav ntak. Ek-e-tounos entou-ke-sarx khen pi-ehoo etak-thashf: kata nek-ep-angelia em-mi ovoh nat-meth-n-oug. Ek-e-er-kharizesthe no-ou enni-agathon ente nek-ep-angelia: ne-ete empe val nav ero-ou: oude empe mash-g soth-mou: oude empou-i eh-rii egen ep-hit en-romi. Ni-et-ak-sevtoto-ou Phnouti en-ni-ethmei em-pek-ran ethouav. Ge emmon mou shop en-neke-eviaik alla ou-ot-o-tev evol pe. Is-ge de ouon ou-met-amelis chi ero-ou : ie ou-met-at-ti-h-thi-ou hos romi : e-av-er-phorin en-ou-sarx ovoh av-shopi khen pai-kosmos. Enthok de hos agathos ovoh em-mai-romi Phnouti ari-kata-ksion kho no-ou evol. Ge emmon h-li ef-ou-av e-tholev oude kan ou-ehoo en-ou-ot pe pef-onkh higen pi-kahi. Entho-ou men ham mi Epchois e-ak-chi en-nou-yichi ma-emton no-ou : ovoh marou-er-p-emp-sha en-ti-met-ouro ente ni-phe-ou-i. Anon de tiren ari-kharizesthe nan : em-pen-gok en-khristianos ef-ranak em-pek-emtho. Ovoh moi no-ou neman en-ou-meros : nem ou-k-li-ros nem ni-ethouav tirou ntak.",
                de: "Gedenke o Herr, aller dieser, deren Namen wir erwähnt haben und derer, die wir nicht erwähnt haben, derer, die in unseren Gedanken sind, und derer, die nicht in unseren Gedanken sind, derer, die entschlafen sind und zur Ruhe gingen im Glauben an Christus. Bitte, o Herr, schenke allen ihren Seelen Ruhe im Schoß unserer heiligen Väter Abraham, Isaak und Jakob. Versorge sie am Ort des Grünen, am Wasser der Ruhe, im Paradies der Freude, an dem Ort, von dem Trauer, Kummer und Seufzen gewichen sind, im Licht deiner Heiligen. Erwecke ihre Körper auf an dem Tag, den du vorherbestimmt hast nach deinen wahren Verheißungen, die nicht trügerisch sind. Schenke ihnen die Güte deines Versprechens: Was kein Auge gesehen, kein Ohr gehört und kein Menschenherz gedacht hat, was du denen bereitet hast, die deinen heiligen Namen lieben. Dann wird deinen Dienern kein Tod, sondern Heimgang zuteil. Ist ihnen Nachlässigkeit oder Faulheit als Menschen widerfahren, die Fleisch angezogen und diese Welt bewohnt haben, so vergib ihnen bitte, Gott, gemäß deiner Güte und Menschenliebe. Denn keiner ist frei von Unreinheit, selbst wenn sein Leben auf Erden nur einen einzigen Tag gedauert hat. Aber jene, Gott, deren Seelen du aufgenommen hast, lass ausruhen, und deines Himmelreiches würdig sein. Uns aber schenke christliche Vollendung, die dir wohlgefällt. Gib ihnen und uns Anteil und Erbschaft mit all deinen Heiligen.",
                ar: "وهؤُلاءِ وكُلُّ أحَدٍ، يا رَبُّ، الَّذينَ ذَكَرْنا أسْماءَهُم، والَّذينَ لَم نَذْكُرْهُم. الَّذينَ في فِكْرِ كُلِّ واحِدٍ مِنَّا والَّذينَ لَيْسوا في فِكْرِنا. الَّذينَ رَقَدوا وتَنَيَّحوا في الإيمانِ بِالمَسيحِ. تَفَضَّل يا رَبُّ نَيِّح نُفوسَهُم أجْمَعينَ، في حِضْنِ آبائِنا القِدِّيسينَ، إبْراهيمَ وإسْحقَ ويَعْقوبَ. عُلْهُم في مَوْضِعِ خُضْرَةٍ عَلى ماءِ الرَّاحَةِ في فِرْدَوْسِ النَّعيمِ. المَوْضِعِ الَّذي هَرَبَ مِنْهُ الحُزْنُ والكَآبَةُ والتَّنَهُدُ في نورِ قِدِّيسيكَ. أقِم أجْسادَهُم أيْضاً في اليَوْمِ الَّذي رَسَمْتَهُ، كَمَواعيدِكَ الحَقيقيَّةِ غَيْرِ الكاذِبَةِ. هَب لَهُم خَيْراتِ مَواعيدِكَ، ما لَم تَرَهُ عَيْنٌ ولَم تَسْمَع بِهِ أُذُنٌ ولَم يَخْطُر عَلى قَلْبِ بَشَرٍ، مَا أَعْدَدْتَهُ يَا الله لِمُحِبِّي اسْمِكَ الْقُدُّوسِ. لأَنَّهُ لاَ يَكُونُ مَوْتٌ لِعَبِيدِكَ بَلْ هُوَ انْتِقَالٌ. وَإِنْ كَانَ لَحِقَهُمْ تَوَانٍ أَوْ تَفْرِيطٌ كَبَشَرٍ، وَقَدْ لَبِسُوا جَسَداً وَسَكَنُوا فِي هَذَا الْعَالَمِ، فَأَنْتَ كَصَالِحٍ وَمُحِبِّ الْبَشَرِ، اَللَّهُمَّ تَفَضَّلْ اغْفِرْ لَهُمْ. فَإِنَّهُ لَيْسَ أَحَدٌ طَاهِراً مِنْ دَنَسٍ، وَلَوْ كَانَتْ حَيَاتُهُ يَوْماً وَاحِداً عَلَى الأَرْضِ. أَمَّا هُمْ يَا رَبُّ الَّذِينَ أَخَذْتَ نُفُوسَهُمْ فَنَيِّحْهُمْ، وَلْيَسْتَحِقُّوا مَلَكُوتَ السَّمَوَاتِ. وَأَمَّا نَحْنُ كُلُّنَا فَهَبْ لَنَا كَمَالَنَا الْمَسِيحِيَّ الَّذِي يُرْضِيكَ أَمَامَكَ. وَأَعْطِهِمْ وَإِيَّانَا نَصِيباً وَمِيرَاثاً، مَعَ كَافَّةِ قِدِّيسِيكَ.",
                cop_cop: "Ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲉⲙ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ Ⲡ̀ϭⲟⲓⲥ ⲛⲏⲉ̀ⲧⲁⲛⲧⲁⲟⲩⲟ̀ ⲛⲟⲩⲣⲁⲛ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲡⲉⲛⲧⲁⲟⲩⲱⲟⲩ. Ⲛⲏⲉⲧ ϧⲉⲛ ⲫⲙⲉⲩⲓ̀ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲟⲛ: ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉ ⲛ̀ⲥⲉⲭⲏ ⲛ̀ϧⲏⲧⲉⲛ ⲁⲛ. Ⲉ̀ⲧⲁⲩⲉⲛⲕⲟⲧ ⲁⲩⲙ̀ⲧⲟⲛ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲫⲛⲁϩϯ ⲙ̀Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲁⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲙⲁⲙ̀ⲧⲟⲛ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲧⲏⲣⲟⲩ: ϧⲉⲛ ⲕⲉⲛϥ ⲛ̀ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ: Ⲁⲃⲣⲁⲁⲙ ⲛⲉⲙ Ⲓⲥⲁⲁⲕ ⲛⲉⲙ Ⲓⲁⲕⲱⲃ. Ϣⲁⲛⲟⲩϣⲟⲩ ϧⲉⲛ ⲟⲩⲙⲁ ⲛ̀ⲭ̀ⲗⲟⲏ̀: ϩⲓϫⲉⲛ ⲫⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲙ̀ⲧⲟⲛ: ϧⲉⲛ ⲡⲓⲡⲁⲣⲁⲇⲓⲥⲟⲥ ⲛ̀ⲧⲉ ⲡⲟⲩⲛⲟϥ. Ⲡⲓⲙⲁ ⲉ̀ⲧⲁϥⲫⲱⲧ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ: ⲛ̀ϫⲉ ⲡⲓⲕⲁϩ, ⲛ̀ϩⲏⲧ ⲛⲉⲙ ϯⲗⲩⲡⲏ ⲛⲉⲙ ⲡⲓϥⲓⲁ̀ϩⲟⲙ: ϧⲉⲛ ⲫⲟⲩⲱⲓⲛⲓ ⲛ̀ⲧⲉ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ. Ⲉⲕⲉ̀ⲧⲟⲩⲛⲟⲥ ⲛ̀ⲧⲟⲩⲕⲉⲥⲁⲣⲝ ϧⲉⲛ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲉ̀ⲧⲁⲕⲑⲁϣϥ: ⲕⲁⲧⲁ ⲛⲉⲕⲉ̀ⲡⲁⲅⲅⲉⲗⲓⲁ̀ ⲙ̀ⲙⲏⲓ ⲟⲩⲟϩ ⲛ̀ⲁⲧⲙⲉⲑⲛⲟⲩϫ. Ⲉⲕⲉ̀ⲉⲣⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲛⲱⲟⲩ ⲛ̀ⲛⲓⲁ̀ⲅⲁⲑⲟⲛ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲡⲁⲅⲅⲉⲗⲓⲁ̀: ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲡⲉ ⲃⲁⲗ ⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉ ⲙⲁϣϫ ⲥⲟⲑⲙⲟⲩ: ⲟⲩⲇⲉ ⲙ̀ⲡⲟⲩⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲡ̀ϩⲏⲧ ⲛ̀ⲣⲱⲙⲓ. Ⲛⲏⲉ̀ⲧⲁⲕⲥⲉⲃⲧⲱⲧⲟⲩ Ⲫⲛⲟⲩϯ ⲛ̀ⲛⲏⲉⲑⲙⲉⲓ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲙ̀ⲙⲟⲛ ⲙⲟⲩ ϣⲟⲡ ⲛ̀ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ ⲁⲗⲗⲁ ⲟⲩⲟ̀ⲧⲱⲧⲉⲃ ⲉ̀ⲃⲟⲗ ⲡⲉ. Ⲓⲥϫⲉ ⲇⲉ ⲟⲩⲟⲛ ⲟⲩⲙⲉⲧⲁ̀ⲙⲉⲗⲏⲥ ϭⲓ ⲉ̀ⲣⲱⲟⲩ : ⲓⲉ ⲟⲩⲙⲉⲧⲁⲧϯϩ̀ⲑⲏⲩ ϩⲱⲥ ⲣⲱⲙⲓ : ⲉ̀ⲁⲩⲉⲣⲫⲟⲣⲓⲛ ⲛ̀ⲟⲩⲥⲁⲣⲝ ⲟⲩⲟϩ ⲁⲩϣⲱⲡⲓ ϧⲉⲛ ⲡⲁⲓⲕⲟⲥⲙⲟⲥ. Ⲛ̀ⲑⲟⲕ ⲇⲉ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ Ⲫⲛⲟⲩϯ ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲭⲱ ⲛⲱⲟⲩ ⲉ̀ⲃⲟⲗ. Ϫⲉ ⲙ̀ⲙⲟⲛ ϩ̀ⲗⲓ ⲉϥⲟⲩⲁⲃ ⲉ̀ⲑⲱⲗⲉⲃ ⲟⲩⲇⲉ ⲕⲁⲛ ⲟⲩⲉ̀ϩⲟⲟⲩ ⲛ̀ⲟⲩⲱⲧ ⲡⲉ ⲡⲉϥⲱⲛϧ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ. Ⲛⲑⲱⲟⲩ ⲙⲉⲛ ϩⲁⲙ ⲙⲏ Ⲡ̀ϭⲟⲓⲥ ⲉ̀ⲁⲕϭⲓ ⲛ̀ⲛⲟⲩⲯⲩⲭⲏ ⲙⲁⲙ̀ⲧⲟⲛ ⲛⲱⲟⲩ : ⲟⲩⲟϩ ⲙⲁⲣⲟⲩⲉⲣⲡ̀ⲉⲙ̀ⲡ̀ϣⲁ ⲛ̀ϯⲙⲉⲧⲟⲩⲣⲟ ⲛ̀ⲧⲉ ⲛⲓⲫⲏⲟⲩⲓ̀. Ⲁ̀ⲛⲟⲛ ⲇⲉ ⲧⲏⲣⲉⲛ ⲁ̀ⲣⲓⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲛⲁⲛ : ⲙ̀ⲡⲉⲛϫⲱⲕ ⲛ̀ⲭ̀ⲣⲓⲥⲧⲓⲁ̀ⲛⲟⲥ ⲉϥⲣⲁⲛⲁⲕ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ. Ⲟⲩⲟϩ ⲙⲟⲓ ⲛⲱⲟⲩ ⲛⲉⲙⲁⲛ ⲛ̀ⲟⲩⲙⲉⲣⲟⲥ : ⲛⲉⲙ ⲟⲩⲕ̀ⲗⲏⲣⲟⲥ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁⲕ.",
                ar_de: "wa ha2ola2 wa kolla a7adin, ya rabb, ellazina zakarna asma2ahom, wallazina lam nazkorhom. ellazina fi fikr kolla wahidin minna wallazina laysou fi fikrena. ellazina raqadou wa tanayya7ou fel iman bel Masih. tafazzal ya rabb nayye7 nofosahom agma3in, fi hidn aba2ena el qiddisin, Ibrahim wa Ishaq wa Ya3qoub. 3ol-hom fi mawde3 khodra 3ala ma2 el raha fi firdaws el na3im. el mawde3 ellazi haraba menho el hozn wal ka2aba wal tanahod fi nour qiddisik. aqem agsadahom ayzan fel yawm ellazi rasamtaho, kamawa3ideka el haqiqqiyya ghayr el kaziba. hab lahom khayrat mawa3ideka, ma lam taraho 3ayn wa lam tasma3 behi ozon wa lam yakhtor 3ala qalb bashar, ma a3dadtaho ya Allah le-mohibbi esmeka el-moqaddas. li-annaho la yakon mowton le-3abidika bal houwa entiqal. wa in kana lahiqahom tawanin aw tafriton ka-basharin, wa qad labisou gasadan wa sakanou fi haza el-3alam. fa-anta ka-salihin wa mohibbi el-bashar, Allahomma tafazzal eghfer lahom. fa-innaho laysa ahadon tahiran min danasin, walow kanat hayataho yawman wahidan 3ala el-ard. amma hom ya rabb ellazina akhazta nofosahom fa-nayyeh-hom, wal-yastahiqqou malakout el-samawat. wa-amma nahnou kollana fa-hab lana kamalana el-masihi ellathi yordika amamaka. wa a3tehom wa iyyana nasiban wa mirasthan, ma3a kaffati qiddisika.",
                cop_ar: "أوفوه ناي نيم أو أون نيفين إبشويس ني إي تان طاؤو نو ران: نيم ني إيتيه إمبين تان أو أو. ني إيت خين إف ميفي إم بي أواي بي أواي إممون: نيم ني إيتيه إن سيه خي إن خيتين آن. إيتاف إنكوت آف إمتون إممو أو خين إفنا هتي إم بي إخرستوس. أري كات أكسيون إبشويس ما إمتون إن نو بـسيشي تيرو: خين كينف إن نين يوتي إثؤواب: إبراهام نيم إيساك نيم ياكوب. شان أو شو خين أو ما إن إخلوي: هيجين إفمو أو إنتيه بيمتون: خين بي باراديسوس إنتيه بو نوف. بيما إيتاف فوت إيفول إن خيتف: إنجيه بي كاه، إن هيت نيم تي ليبي نيم بي فياهوم: خين إف أو أويني إنتيه ني إثؤواب إنتاك. إيكيه تونوس إن تو كيه ساركس خين بي إيهوؤو إيتاك ثاشف: كاتا نيك إيبانجليا إم مي أوفوه إن أت ميث نوج. إيكيه إر خاري زيستيه نو أو إن ني آغاثون إنتيه نيك إيبانجليا: ني إيتيه إمبيه فال ناف إيرو أو: أوديه إمبيه ماشج سوثم أو: أوديه إمبو إي إهريي إيجين إب هيت إن رومي. ني إيتاك سيف طوت أو إفنوتي إن ني إثمي إم بيك ران إثؤواب. جيه إممون مو شوب إن نيكيه إيفيا إيك أللا أو أوتو تيف إيفول بـيه. إس جيه ديه أو أون أو ميت أميليس شي إيرو أو : إيه أو ميت أت تي هيثيو هوس رومي : إي آف إر فورين إن أو ساركس أوفوه آف شوبي خين باي كوزموس. إنثوك ديه هوس آغاثوس أوفوه إم ماي رومي إفنوتي آري كات أكسيون كو نو أو إيفول. جيه إممون إهلي إيف أو آف إي ثوليف أوديه كان أو إيهوؤو إن أو أوت بـيه بيف أونخ هيجين بي كاهي. إنثو أو مين هام مي إبشويس إي آك شي إن نو بـسيشي ما إمتون نو أو : أوفوه مارو إر بـإيمبشا إن تي ميت أورو إنتيه ني في أو إي. أنون ديه تيرين آري خاري زيستيه نان : إم بين جوك إن إخرستيانوس إيف راناك إم بيك إم ثو. أوفوه موي نو أو نيمان إن أو ميروس : نيم أو إكليروس نيم ني إثؤواب تيرو إنتاك.",
            },
            {
                id: 17.39,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.40,
                speaker: "Priester",
                cop_de: "Nithysia niprosphora.",
                de: "Der Opfergaben und Darbringungen.",
                ar: "الصَّعَائِدَ والقَرَابينَ.",
                cop_cop: "Ⲛⲓⲑⲩⲥⲓⲁ̀ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ.",
                ar_de: "Otlobou 3an el sa3a2ed wal qarabinn wa 3an el-lazina qaddamouha.",
                cop_ar: "ني ثيسيا ني بروسفورا.",
            },
            {
                id: 17.41,
                speaker: "Diakon",
                cop_de: "Tovh egen ni-et-fi em-ph-ro-oush : en-ni-thysia ni-prosphora : ni-aparkhi ni-neh : ni-stho-inou-phi ni-skep-asma ni-gom en-osh : ni-ky-allion ente pi-man-er-sho-oushi : hina ente Pi-khristos Pennouti ti-she-vi-o no-ou khen Ierousalim ente t-phe: entef-kha nennovi nan evol.",
                de: "Bittet für diejenigen, die sich um die Opfer kümmern, um die Darbringungen, die Erstlingsgaben, die Öle, den Weihrauch, die Vorhänge, die Lesebücher, die Gefäße des Altars, dass Christus unser Gott sie im himmlischen Jerusalem belohnt und uns unsere Sünden vergibt.",
                ar: "أُطْلُبوا عَنْ المُهْتَمِّينَ بِالصَّعائِدِ، والقَرابينِ، والبُكُورِ، والزُّيُوتِ، والبُخُورِ، والسُّتُورِ، وكُتُبِ القِراءةِ، وأوانِي المَذْبَحِ، لِكَيْ المَسِيحُ إلَهُنا يُكافِئَهُمْ فِي أُورُشَلِيمَ السَّمائِيَّةِ، ويغْفِرَ لنا خَطايانا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧϥⲓ ⲙ̀ⲫ̀ⲣⲱⲟⲩϣ : ⲛ̀ⲛⲓⲑⲩⲥⲓⲁ̀ ⲛⲓⲡ̀ⲣⲟⲥⲫⲟⲣⲁ : ⲛⲓⲁ̀ⲡⲁⲣⲭⲏ ⲛⲓⲛⲉϩ : ⲛⲓⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ ⲛⲓⲥ̀ⲕⲉⲡⲁⲥⲙⲁ ⲛⲓϫⲱⲙ ⲛ̀ⲱϣ : ⲛⲓⲕⲩⲁⲗⲗⲓⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ϯϣⲉⲃⲓⲱ̀ ⲛⲱⲟⲩ ϧⲉⲛ Ⲓⲉⲣⲟⲩⲥⲁⲗⲏⲙ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an el mohtammin bel sa3a2ed, wal qarabinn, wal bokour, wal zoyout, wal bokhour, wal sotour, wa kotob el qera2a, wa awani el mazba7, likay el Masih elahona yokafi2ahom fi Orashalim el samawiyya, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين ني إيت في إم إف رو أوش : إن ني ثيسيا ني بروسفورا : ني أبارشي ني نيه : ني إستوي نويفي ني إسكيبازما ني جوم إن أوش : ني كياللون إنتيه بي مان إرشو أوشي : هينا إنتيه بي إخرستوس بينوتي تي شيفيو نو أو خين ييروزاليم إنتيه إتفيه: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.42,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.43,
                speaker: "Priester",
                cop_de: "Shopou erok egen pek-thysia-stirion ethouav : n-ellogimon ente t-phe : e-ou-sthoi en-sthoi-nouphi : e-khoun etek-met-nishti et-khen ni-phe-oui : evol hiten ep-shemshi ente nek-aggelos nem nek-arkhi-aggelos ethouav. M-ph-riti et-ak-shop erok en-ni-doron ente pi-th-mi Abel : nem ti-thysia ente pen-iot Avra-am : nem ti-levi es-nouti ente ti-khira. Pai-riti on ni-ev-khari-stirion ente nek-eviaik shopou erok : na pi-ou-o nem na pi-kougi : ni et-hip nem ni eth-ou-onh evol. Ni-eth-ou-osh e-ini nak e-khoun ovoh emmon en-to-ou : nem ni et-av-ini nak e-khoun khen pai-ehoo ente pho-ou en-nai-doron nai. Moi no-ou en-ni-at-tako en-t-she-vi-o en-ni eth-na-tako: na ni-phe-ou-i en-t-she-vi-o en-na pi-kahi: ni-sha-eneh en-t-she-vi-o en-ni-pros ou-si-ou. Mouhou nou-tamion mazou evol khen agathon niven. Matakto ero-ou Epchois en-t-gom ente nek-aggelos : nem nek-arkhi-aggelos ethouav. M-ph-riti et-av-er ph-mevi em-pek-ran ethouav higen pi-kahi : ari-ph-mevi en-o-ou Epchois khen tek-met-ouro: ovoh khen pai-ke-eon phai emper-khav en-sok.",
                de: "Nimm sie über deinem heiligen, lebendigen, himmlischen Altar an, als Wohlgeruch von Weihrauch für deine Herrlichkeit in den Himmeln, durch den Dienst deiner heiligen Engel und Erzengel. Wie du die Opfergaben des gerechten Abel, das Schlachtopfer unseres Vaters Abraham und die zwei Münzen der Witwe angenommen hast, so nimm dich ebenfalls aller Gaben deiner Diener an, derer, die viel besitzen und derer, die wenig haben, der verborgenen und der offenbar dargebrachten. Nimm dich auch derer an, die zu dir mit Opfergaben hineinkommen wollen und es nicht können, und derer, die zu dir gekommen sind an diesem Tag mit diesen Opfergaben. Gib ihnen das Unvergängliche als Entgelt für die vergänglichen Dinge, das Himmlische für das Irdische, das Ewige für das Zeitgebundene. Fülle ihre Häuser und Speicher mit allen Gütern. Umgebe sie, o Herr, mit der Kraft deiner reinen Engel und Erzengel. Wie sie deines heiligen Namens auf Erden gedacht haben, so gedenke auch ihrer, o Herr, in deinem Königreich. Und auch in dieser Erdenzeit verlasse sie nicht.",
                ar: "اقْبَلْهَا إِلَيْكَ عَلَى مَذْبَحِكَ المُقَدَّسِ الناطِقِ السَّمائيِّ، رائِحَةَ بَخُورٍ تَدْخُلُ إِلَى عَظَمَتِكَ الَّتي فِي السَّمَوَاتِ، بواسطة خِدْمَةِ ملائِكَتِكَ ورؤَساءِ ملائِكَتِكَ المُقَدَّسِينَ. وكَمَا قَبِلْتَ إِلَيْكَ قَرابِينَ هابِيلَ الصِّدِّيقِ وذَبِيحَةَ أبِينَا إِبْراهِيمَ، وفَلْسَي الأرْمَلَةِ. هكَذَا أيْضاً نُذورَ عَبِيدِكَ اقْبَلْها إلَيْكَ، أصْحابَ الكَثِيرِ وأصْحابَ القَلِيلِ، الخَفِيَّاتِ والظَّاهِراتِ. والَّذِينَ يُرِيدُونَ أنْ يُقَدِّمُوا لَكَ ولَيْسَ لَهُمْ، والَّذِينَ قَدَّمُوا لَكَ في هذَا اليَوْمِ هذِهِ القَرابِينَ. أعْطِهِمُ الباقِياتِ عِوَضاً عَنِ الفانِياتِ، السَّمائِيَّاتِ عِوَضاً عَنِ الأرْضِيَّاتِ، الأبَدِيَّاتِ عِوَضاً عَنِ الزَّمَنِيَّاتِ. املأ بُيُوتَهُمْ ومَخازِنَهُمْ مِنْ كُلِّ الخَيْراتِ. أحِطْهُمْ يا رَبُّ بِقُوَّةِ مَلائِكَتِكَ ورُؤَساءِ مَلائِكَتِكَ الأطْهارِ. وكَمَا ذَكَروا اسْمَكَ القُدُّوسَ عَلَى الأرْضِ، أذْكُرْهُمْ هُمْ أيْضاً يا رَبُّ في مَلَكُوتِكَ، وفي هذَا الدَّهْرِ لا تَتْرُكْهُمْ عَنْكَ.",
                cop_cop: "Ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ : ⲛ̀ⲉⲗⲗⲟⲅⲓⲙⲟⲛ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ⲉ̀ⲟⲩⲥ̀ⲑⲟⲓ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ : ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲧⲉⲕⲙⲉⲧⲛⲓϣϯ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲡ̀ϣⲉⲙϣⲓ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ. Ⲙⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲕϣⲱⲡ ⲉ̀ⲣⲟⲕ ⲛ̀ⲛⲓⲇⲱⲣⲟⲛ ⲛ̀ⲧⲉ ⲡⲓⲑ̀ⲙⲏⲓ Ⲁ̀ⲃⲉⲗ : ⲛⲉⲙ ϯⲑⲩⲥⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲉⲛⲓⲱⲧ Ⲁⲃⲣⲁⲁⲙ : ⲛⲉⲙ ϯⲗⲉⲃⲓ ⲥ̀ⲛⲟⲩϯ ⲛ̀ⲧⲉ ϯⲭⲏⲣⲁ. Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲛⲓⲉⲩⲭⲁⲣⲓⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ : ⲛⲁ ⲡⲓⲟⲩⲟ̀ ⲛⲉⲙ ⲛⲁ ⲡⲓⲕⲟⲩϫⲓ : ⲛⲏ ⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏ ⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲛⲏⲉⲑⲟⲩⲱϣ ⲉ̀ⲓⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ⲟⲩⲟϩ ⲙ̀ⲙⲟⲛ ⲛ̀ⲧⲱⲟⲩ : ⲛⲉⲙ ⲛⲏ ⲉ̀ⲧⲁⲩⲓ̀ⲛⲓ ⲛⲁⲕ ⲉ̀ϧⲟⲩⲛ ϧⲉⲛ ⲡⲁⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲫⲟⲟⲩ ⲛ̀ⲛⲁⲓⲇⲱⲣⲟⲛ ⲛⲁⲓ. Ⲙⲟⲓ ⲛⲱⲟⲩ ⲛ̀ⲛⲓⲁⲧⲧⲁⲕⲟ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲏ ⲉⲑⲛⲁⲧⲁⲕⲟ: ⲛⲁ ⲛⲓⲫⲏⲟⲩⲓ̀ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲁ ⲡⲓⲕⲁϩⲓ: ⲛⲓϣⲁⲉ̀ⲛⲉϩ ⲛ̀ⲧ̀ϣⲉⲃⲓⲱ̀ ⲛ̀ⲛⲓⲡ̀ⲣⲟⲥ ⲟⲩⲥⲏⲟⲩ. Ⲙⲟⲩϩⲟⲩ ⲛⲟⲩⲧⲁⲙⲓⲟⲛ ⲙⲁⲍⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲁ̀ⲅⲁⲑⲟⲛ ⲛⲓⲃⲉⲛ. Ⲙⲁⲧⲁⲕⲧⲟ ⲉ̀ⲣⲱⲟⲩ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲧ̀ϫⲟⲙ ⲛ̀ⲧⲉ ⲛⲉⲕⲁⲅⲅⲉⲗⲟⲥ : ⲛⲉⲙ ⲛⲉⲕⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ. Ⲙ̀ⲫ̀ⲣⲏϯ ⲉ̀ⲧⲁⲩⲉⲣ ⲫ̀ⲙⲉⲩⲓ̀ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ : ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ ⲛ̀ⲱⲟⲩ Ⲡ̀ϭⲟⲓⲥ ϧⲉⲛ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ: ⲟⲩⲟϩ ϧⲉⲛ ⲡⲁⲓⲕⲉⲉ̀ⲱⲛ ⲫⲁⲓ ⲙ̀ⲡⲉⲣⲭⲁⲩ ⲛ̀ⲥⲱⲕ.",
                ar_de: "Eqbalha elayka 3ala mazba7eka el moqaddas el natiq el samawiy, ra2e7at bokhour tadkhol ela 3azamateka ellati fel samawat, bawasitat khedmet mala2eketeka wa ro2asa2 mala2eketeka el moqaddasin. Wa kama qabelta elayka qarabina Habil el-seddiq wa zabihata abina Ibrahim, wa felsey el-armala. Hakaza ayzan nozora 3abidika eqbalha elayka, as-7ab el-kathir wa as-7ab el-qalil, el-khafiyyat wal-z-z-ahirat. Wal-lazina yuridouna an yuqaddimou laka wa laysa lahom, wal-lazina qaddamou laka fi haza el-yawm hazihi el-qarabina. A3tehom el-baqiyat 3iwazan 3an el-faniyat, el-samawiyyat 3iwazan 3an el-ardiyyat, el-abadiyyat 3iwazan 3an el-zamaniyyat. Emla2 buyoutahom wa makhazenahom min kol el-khayrat. A7et-hom ya rabb be-quwwat mala2eketeka wa ro2asa2 mala2eketeka el-at-har. Wa kama zakarou esmaka el-moqaddas 3ala el-ard, ozkorhom hom ayzan ya rabb fi malakoutika, wa fi haza el-dahr la tat-rokhom 3annka.",
                cop_ar: "شوبو إيروك إيجين بيك ثيسيا ستيريون إثؤواب : إن إللوجيمون إنتيه إتفيه : إي أو إستوي إن إستوي نويفي : إيخون إيتيك ميت نيشتي إتخين ني في أوي : إيفول هيتين إبشيمشي إنتيه نيك أنجيلوس نيم نيك آرشي أنجيلوس إثؤواب. إم إف ريتي إيتاك شوب إيروك إن ني دورون إنتيه بي إثمي أبيل : نيم تي ثيسيا إنتيه بين يوت إبراهام : نيم تي ليفي إسنوتي إنتيه تي خيرا. باي ريتي أون ني إيف خاري ستيريون إنتيه نيك إيفيا إيك شوبو إيروك : نا بي أو أو نيم نا بي كوجي : ني إت هيب نيم ني إثؤو أونه إيفول. ني إثؤو أوش إي إيني ناك إيخون أوفوه إممون إن تو أو : نيم ني إيتاف إيني ناك إيخون خين باي إيهوؤو إنتيه فوؤو إن ناي دورون ناي. موي نو أو إن ني أت تاكو إن إت شيفيو إن ني إثنا تاكو : نا ني في أوي إن إت شيفيو إن نا بي كاهي : ني شا إينيه إن إت شيفيو إن ني بروس أو سيو. موهو نو تاميون مازو إيفول خين آغاثون نيفين. ما تاكتو إيرو أو إبشويس إن إت جوم إنتيه نيك أنجيلوس : نيم نيك آرشي أنجيلوس إثؤواب. إم إف ريتي إيتاف إير إف ميفي إم بيك ران إثؤواب هيجين بي كاهي : أري إف ميفي إن أو أو إبشويس خين تيك ميت أورو : أوفوه خين باي كيه إيون فاي إمبير كاو إنسوك.",
            },
            {
                id: 17.44,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.45,
                speaker: "Priester",
                cop_de: "Penpatriarkhis : niot ettaiyout : enarkhieris papa ava Tawadros Pimah snav.",
                de: "(Gedenke) unseres Patriarchen, des ehrwürdigen Vaters, Priesteroberhaupt, Papst Abba Tawadros II.",
                ar: "بَطْرِيَرْكَنَا الأَب المُكَرَّمَ البابا أنبا تواضروس الثاني.",
                cop_cop: "Ⲡⲉⲛⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲛⲓⲱⲧ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲛ̀ⲁⲣⲭⲓⲉ̀ⲣⲉⲩⲥ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲧⲁⲟⲩⲁⲇⲣⲟⲥ ⲡⲓⲙⲁϩ ⲥ̀ⲛⲁⲩ.",
                ar_de: "Batriyarkana el-ab el-mokarram anba Tawadros El-thani.",
                cop_ar: "بين باتري أرشيس : نِيوت إت طاي هو أوت : إن أرشي إيريفس بابا أبڤا تاوادروس بي ماه اسناف",
            },
            {
                id: 17.46,
                speaker: "Diakon",
                cop_de: "Tovh egen ep-onkh nem ep-taho eratf em-pen-iot et-taiyout en-arkhi-erevs ava Tawadros Pimah snav. Hina ente Pi-khristos Pennouti areh epou-onkh nan en-han-mish en-rompi nem han-si-ou en-hirinikon: entef-kha nennovi nan evol.",
                de: "Betet für das Leben und Beständigkeit unseres ehrwürdigen Vaters und Priesteroberhaupt, Papst Abba Tawadros II. Damit Christus, unser Gott sie sicher für uns bewahrt für viele Jahre und für friedliche Zeiten und uns unsere Sünden vergibt.",
                ar: "أطْلُبُوا عَن حياةِ وقِيامِ أبِينا المُكَرَّمِ رئيسِ الكهنةِ البابا أنبا تواضروس الثاني. لِكَي المَسِيحُ إلهُنا يحفَظُ لنا حياتَهُمْ سِنِينَ كثيرةً وأزْمِنَةً سَلاميَّةً، ويغفِرَ لنا خطايانا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡ̀ⲱⲛϧ ⲛⲉⲙ ⲡ̀ⲧⲁϩⲟ ⲉ̀ⲣⲁⲧϥ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲛ̀ⲁⲣⲭⲏⲉ̀ⲣⲉⲩⲥ ⲡⲁⲡⲁ ⲁⲃⲃⲁ Ⲧⲁⲟⲩⲁⲇⲣⲟⲥ ⲡⲓⲙⲁϩ ⲥ̀ⲛⲁⲩ. Ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲣⲉϩ ⲉ̀ⲡⲟⲩⲱⲛϧ ⲛⲁⲛ ⲛ̀ϩⲁⲛⲙⲏϣ ⲛ̀ⲣⲟⲙⲡⲓ ⲛⲉⲙ ϩⲁⲛⲥⲏⲟⲩ ⲛ̀ϩⲓⲣⲏⲛⲓⲕⲟⲛ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an hayati wa qeyami abina el-mokarram ra2is el-kahanati el-papa anba Tawadros El-thani. Likay el-Masih elahona ya7fazo lana hayatahom sinina kathira wa azmina salamiyya, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين إب أونخ نيم إب طاهو إيرات إف إم بين يوت إت طاي هو أوت إن أرشي إيريفس بابا أبڤا تاوادروس بي ماه اسناف. هينا إنتيه بي إخرستوس بينوتي آريه إيبو أونخ نان إن هان ميش إن رومبي نيم هان سيو إن هيرينيكون: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.47,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.48,
                speaker: "Priester",
                cop_de: "Khen ou-areh areh erof (ero-ou) nan: en-han-mish en-rompi nem han-si-ou en-hirinikon. Ev-gok evol enthi eth-ou-av et-ak-ten houtou eros evol hitotk en-met-arkhi-erevs : kata pek-ou-osh eth-ou-av ovoh em-makarion. Ev-shot evol em-pi-sagi ente ti-meth-mi khen ou-sowouten : ev-amoni em-pek-laos khen ou-touvo nem ou-meth-mi. Eke-er-kharizesthe no-ou neman en-ou-hirini nem ou-ougai evol khen mai niven. Nou-prosevkhi de etou-iri emmo-ou ehrii egen egon : nem ehrii egen pek-laos tirf : nem noun hon ehrii egen o-ou. Shopou erok egen pek-thysia-stirion eth-ou-av en-ellogimon ente t-phe : e-ou-sthoi en-sthoi-noufi. Nef-gagi men tirou ni etou-nav ero-ou nem ni-ete ense-nav ero-ou an : khem-khomou ovoh ma-thevi-o-ou sapesit en-nef-valav-g en-kholem. Entho-ou de areh ero-ou khen ou-hirini nem ou-dikeosyni : khen tek-ekklesia eth-ou-av.Eke-er-kharizesthe no-ou neman en-ou-hirini nem ou-ougai evol khen mai niven. Nou-prosevkhi de etou-iri emmo-ou ehrii egen egon : nem ehrii egen pek-laos tirf : nem noun hon ehrii egen o-ou. Shopou erok egen pek-thysia-stirion eth-ou-av en-ellogimon ente t-phe : e-ou-sthoi en-sthoi-noufi. Nef-gagi men tirou ni etou-nav ero-ou nem ni-ete ense-nav ero-ou an : khem-khomou ovoh ma-thevi-o-ou sapesit en-nef-valav-g en-kholem. Entho-ou de areh ero-ou khen ou-hirini nem ou-dikeosyni : khen tek-ekklesia eth-ou-av.",
                de: "Bewahre ihn (sie) sicher für uns für viele Jahre und für friedliche Zeiten. Sie erfüllen das heilige Oberpriestertum, das du ihnen anvertraut hast, nach deinem heiligen gesegneten Willen. Dass sie das Wort der Wahrheit aufrichtig verkünden, und dein Volk in Reinheit und Rechtschaffenheit als Hirten versorgen. Gewähre ihnen und uns den Frieden und das Heil an jedem Ort. Die Gebete, die sie für uns und für dein ganzes Volk empor senden, sowie unsere Gebete für sie. Nimm sie an auf deinem heiligen, himmlischen und geistigen Altar wie Wohlgeruch von Weihrauch. All seine Feinde, die sichtbaren und die unsichtbaren, zerstöre du und unterwirf sie unter seine Füße. Sie selbst aber behüte in Frieden und Gerechtigkeit in deiner heiligen Kirche.",
                ar: "حِفْظاً احْفَظْهُ (احْفَظْهُمْ) لَنا سِنِيناً كَثِيرَةً وأزْمِنَةً سَلاميَّةً. مُكَمِّلِينَ رِئاسَةَ الكَهَنُوتِ المُقَدَّسَةَ الَّتِي ائتَمَنْتَهُمْ عليها مِنْ قِبَلِكَ كإرادَتِكَ المُقَدَّسَةِ الطُوباوِيَّةِ. مُفَصِّلِينَ كَلِمَةَ الحَقِّ باستِقامَةٍ راعِينَ شَعْبَكَ بِطَهارَةٍ وبِرٍّ. أَنْعِمْ عَلَيْهِمْ وعَلَينا بِالسَّلامِ والعافِيَةِ في كُلِّ مَوْضِعٍ. وصَلَواتِهِمُ الَّتِي يَصْنَعُونَها عَنَّا، وعَنْ كُلِّ شَعْبِكَ، وصَلَواتِنا نَحْنُ أَيْضاً عَنْهُمْ. اقْبَلْها إلَيْكَ عَلَى مَذْبَحِكَ المُقَدَّسِ الناطِقِ السَّمائِيِّ، رائِحَةَ بَخُورٍ. وسائِرَ أَعْدائِهِمُ الَّذِينَ يُرَوْنَ والَّذِينَ لا يُرَوْنَ، اسْحَقْهُمْ وأَذِلَّهُمْ تَحْتَ أَقْدامِهِم سَرِيعاً. وأَما هُمْ فَاحْفَظْهُمْ بِسَلامٍ وعَدْلٍ في كَنِيسَتِكَ المُقَدَّسَةِ.",
                cop_cop: "Ϧⲉⲛ ⲟⲩⲁ̀ⲣⲉϩ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟϥ (ⲉ̀ⲣⲱⲟⲩ) ⲛⲁⲛ: ⲛ̀ϩⲁⲛⲙⲏϣ ⲛ̀ⲣⲟⲙⲡⲓ ⲛⲉⲙ ϩⲁⲛⲥⲏⲟⲩ ⲛ̀ϩⲓⲣⲏⲛⲓⲕⲟⲛ. Ⲉⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ⲛ̀ⲑⲏ ⲉⲑⲟⲩⲁⲃ ⲉ̀ⲧⲁⲕⲧⲉⲛ ϩⲟⲩⲧⲟⲩ ⲉ̀ⲣⲟⲥ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲕ ⲛ̀ⲙⲉⲧⲁⲣⲭⲓⲉ̀ⲣⲉⲩⲥ : ⲕⲁⲧⲁ ⲡⲉⲕⲟⲩⲱϣ ⲉⲑⲟⲩⲁⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲕⲁⲣⲓⲟⲛ. Ⲉⲩϣⲱⲧ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲓⲥⲁϫⲓ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ ϧⲉⲛ ⲟⲩⲥⲱⲟⲩⲧⲉⲛ : ⲉⲩⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ ϧⲉⲛ ⲟⲩⲧⲟⲩⲃⲟ ⲛⲉⲙ ⲟⲩⲙⲉⲑⲙⲏⲓ. Ⲉⲕⲉ̀ⲉⲣⲭⲁⲣⲓⲍⲉⲥⲑⲉ ⲛⲱⲟⲩ ⲛⲉⲙⲁⲛ ⲛ̀ⲟⲩϩⲓⲣⲏⲛⲏ ⲛⲉⲙ ⲟⲩⲟⲩϫⲁⲓ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ. Ⲛⲟⲩⲡ̀ⲣⲟⲥⲉⲩⲭⲏ ⲇⲉ ⲉ̀ⲧⲟⲩⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ : ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ : ⲛⲉⲙ ⲛⲟⲩⲛ ϩⲱⲛ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲟⲩ. Ϣⲟⲡⲟⲩ ⲉ̀ⲣⲟⲕ ⲉ̀ϫⲉⲛ ⲡⲉⲕⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲉⲗⲗⲟⲅⲓⲙⲟⲛ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ : ⲉ̀ⲟⲩⲥ̀ⲑⲟⲓ ⲛ̀ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ. Ⲛⲉϥϫⲁϫⲓ ⲙⲉⲛ ⲧⲏⲣⲟⲩ ⲛⲏ ⲉ̀ⲧⲟⲩⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉ ⲛ̀ⲥⲉⲛⲁⲩ ⲉ̀ⲣⲱⲟⲩ ⲁⲛ : ϧⲉⲙϧⲱⲙⲟⲩ ⲟⲩⲟϩ ⲙⲁⲑⲉⲃⲓⲱ̀ⲟⲩ ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉϥⲃⲁⲗⲁⲩϫ ⲛ̀ⲭⲱⲗⲉⲙ. Ⲛⲑⲱⲟⲩ ⲇⲉ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲛⲉⲙ ⲟⲩⲇⲓⲕⲉ̀ⲟⲥⲩⲛⲏ : ϧⲉⲛ ⲧⲉⲕⲉⲕⲕⲗⲏⲥⲓⲁ̀ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "7efzan e7faz-ho (e7faz-hom) lana sinina kathira wa azmina salamiyya. Mokammilina re2asata el-kahanoti el-moqaddasata ellati e2tamantahom 3alayha min qibalika ka-iradatika el-moqaddasati el-toubawiyya. Mofassilina kalimata el-haqqi bastaqama ra3ina sha3baka betahara wa birr. An3em 3alayhom wa 3alayna bel-salam wal-3afiya fi kol mawde3. Wa salawatihom ellati yasna3ounaha 3anna, wa 3an kol sha3beka, wa salawatena nahnou ayzan 3anhom. Eqbalha elayka 3ala mazba7eka el-moqaddas el-natiq el-samawi, ra2e7at bokhour. Wa sa2era a3da2ehom ellazina yorawn wal-lazina la yorawn, es7aqhom wa azellahom ta7ta aqdamihom sari3an. Wa amma hom fa7fazhom be-salam wa 3adl fi kanisateka el-moqaddasa.",
                cop_ar: "خين أو آريه آريه إيروف (إيرو أو) نان: إن هان ميش إن رومبي نيم هان سيو إن هيرينيكون. إيف جوك إيفول إن ثي إثؤواب إيتاك تين هوتو إيروس إيفول هيتوتك إن ميت أرشي إيريفس : كاتا بيك أو أوش إثؤواب أوفوه إم ماكاريون. إيف شوت إيفول إم بي ساجي إنتيه تي ميثمي خين أو سو أوتين : إيف أموني إم بيك لاوس خين أو توبو نيم أو ميثمي. إيكيه إير خاري زيستيه نو أو نيمان إن أو هيريني نيم أو أوجاي إيفول خين ماي نيفين. نو بروسيفشي ديه إيتو إيري إممو أو إهريي إيجين إيجون : نيم إهريي إيجين بيك لاوس تيرف : نيم نون هون إهريي إيجين أو أو. شوبو إيروك إيجين بيك ثيسيا ستيريون إثؤواب إن إللوجيمون إنتيه إتفيه : إي أو إستوي إن إستوي نويفي. نيف جاجي مين تيرو ني إيتو ناف إيرو أو نيم ني إيتيه إنسيه ناف إيرو أو آن : خيم خومو أوفوه ما ثيفيو أو سابيسيت إن نيف فالافج إن خوليم. إنثو أو ديه آريه إيرو أو خين أو هيريني نيم أو ديكايوسيني : خين تيك إيكليسيا إثؤواب.",
            },
            {
                id: 17.49,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.50,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois mpeniot enepiskopos (mitropolitis) abba (..) nem nike-episkopos northodoxos etkhen mai niven.",
                de: "Gedenke, o Herr, unseres Vaters, Bischofs (Erzbischofs) Abba (..) und der orthodoxen Bischöfe an jedem Ort.",
                ar: "أذْكُر يا رَبُّ أبانا الأسْقُف (المُطْران) المُكَرَّم أنبا (..) وسائِر الأساقِفَة الأرْثوذُكْسِيِّينَ الَّذِينَ في كُلِّ مَوْضِع.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ (ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ) ⲁⲃⲃⲁ (..) ⲛⲉⲙ ⲛⲓⲕⲉⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ.",
                ar_de: "Ozkor ya Rabb abana el-osqof (el-motran) el-mokarram anba (..) wa sa2er el-asaqifa el-orthodoxiyyin ellazina fi kol mawde3.",
                cop_ar: "أري فـميفي إبشويس إمبين يوت إن إيبي سكوبوس (ميتروبوليتيس) أببا (..) نيم نيكيه إيبي سكوبوس إن أرثوذكسوس إتخين ماي نيفين.",
            },
            {
                id: 17.51,
                speaker: "Diakon",
                cop_de: "Tovh egen peniot enepiskopos (mitropolitis) abba (..) : nem nenioti enepiskopos northodoxos etkhen mai niven ente ti-oikoumeni tirs : nem nihigoumenos nem nipresvyteros nem nidiakon : nem n-tagma tirf ente ti-ekklesia : hina ente Pi-khristos Pennouti areh ero-ou evolha petho-ou niven : entef-kha nennovi nan evol.",
                de: "Betet für unseren Vater, Bischof (Erzbischof) Abba (..) und unsere orthodoxen Väter, die Bischöfe an jedem Ort auf dem ganzen Erdkreis, für die Erzpriester, Priester, Diakone und alle Weihestufen der Kirche, damit Christus, unser Herr, sie vor jeglichem Bösen bewahrt und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَن أبِينَا الأُسْقُفِ (المُطْرَانِ) أنبَا (..)، وعَن كُلِّ آبائِنَا الأساقِفَةِ الأرثوذكسيينَ الذينَ في كُلِّ مَواضِعِ المَسكونَةِ، والقَمامِصَةِ، والقُسُوسِ، والشمامِسَةِ، وكُلِّ طَغَماتِ الكنيسةِ، لِكَيْ المَسِيحُ إلَهُنا يحفظَهُم مِنْ كُلِّ شرٍّ، ويغفِرَ لنا خطايانا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡⲉⲛⲓⲱⲧ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ (ⲙⲏⲧⲣⲟⲡⲟⲗⲓⲧⲏⲥ) ⲁⲃⲃⲁ (..) : ⲛⲉⲙ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ : ⲛⲉⲙ ⲛⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲁ̀ⲕⲱⲛ : ⲛⲉⲙ ⲛ̀ⲧⲁⲅⲙⲁ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ̀ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲉⲧϩⲱⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an abina el-osqof (el-motran) anba (..), wa 3an kol aba2ena el-asaqifa el-orthodoxiyyin ellazina fi kol mawake3 el-maskouna, wal-qamamisa, wal-qousous, wal-shamamisa, wa kol taghamat el-kanisa, likay el-Masih elahona ya7fazohom min kol sharr, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين بينيوت إن إيبي سكوبوس (ميتروبوليتيس) أببا (..) : نيم نين يوتي إن إيبي سكوبوس إن أرثوذكسوس إتخين ماي نيفين إنتيه تي أو إيكوميني تيرس : نيم ني هيغومينوس نيم ني إبريسفيتيروس نيم ني دياكون : نيم إن تاغما تيرف إنتيه تي إيكليسيا : هينا إنتيه بي إخرستوس بينوتي آريه إيرو أو إيفول ها بيتهو أو نيفين : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.52,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.53,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois en-nike-episkopos northodoxos etkhen mai niven.",
                de: "Gedenke, o Herr, der orthodoxen Bischöfe an jedem Ort.",
                ar: "أذْكُر يا رَبُّ سائر الأساقِفَة الأرْثوذُكْسِيِّينَ الَّذِينَ في كُلِّ مَوْضِع.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲛ̀ⲛⲓⲕⲉⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ.",
                ar_de: "Ozkor ya Rabb sa2er el-asaqifa el-orthodoxiyyin ellazina fi kol mawde3.",
                cop_ar: "أري فـميفي إبشويس إن نيكي إيبي سكوبوس إن أرثوذكسوس إتخين ماي نيفين.",
            },
            {
                id: 17.54,
                speaker: "Diakon",
                cop_de: "Tovh egen nenioti enepiskopos northodoxos etkhen mai niven ente ti-oikoumeni tirs : nem nihigoumenos nem nipresvyteros nem nidiakon : nem n-tagma tirf ente ti-ekklesia : hina ente Pi-khristos Pennouti areh ero-ou evolha petho-ou niven : entef-kha nennovi nan evol.",
                de: "Betet für unsere orthodoxen Väter, die Bischöfe an jedem Ort auf dem ganzen Erdkreis, für die Erzpriester, Priester, Diakone und alle Weihestufen der Kirche, damit Christus, unser Herr, sie vor jeglichem Bösen bewahrt und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَن آبائِنَا الأساقِفَةِ الأرثوذكسيينَ الذينَ في كُلِّ مَواضِعِ المَسكونَةِ، والقَمامِصَةِ، والقُسُوسِ، والشمامِسَةِ، وكُلِّ طَغَماتِ الكنيسةِ، لِكَيْ المَسِيحُ إلَهُنا يحفظَهُم مِنْ كُلِّ شرٍّ، ويغفِرَ لنا خطايانا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲉ̀ⲡⲓⲥⲕⲟⲡⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ : ⲛⲉⲙ ⲛⲓϩⲏⲅⲟⲩⲙⲉⲛⲟⲥ ⲛⲉⲙ ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛⲉⲙ ⲛⲓⲇⲓⲁ̀ⲕⲱⲛ : ⲛⲉⲙ ⲛ̀ⲧⲁⲅⲙⲁ ⲧⲏⲣϥ ⲛ̀ⲧⲉ ϯⲉⲕⲕⲗⲏⲥⲓⲁ̀ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲉⲧϩⲱⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an aba2ena el-asaqifa el-orthodoxiyyin ellazina fi kol mawake3 el-maskouna, wal-qamamisa, wal-qousous, wal-shamamisa, wa kol taghamat el-kanisa, likay el-Masih elahona ya7fazohom min kol sharr, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين نين يوتي إن إيبي سكوبوس إن أرثوذكسوس إتخين ماي نيفين إنتيه تي أو إيكوميني تيرس : نيم ني هيغومينوس نيم ني إبريسفيتيروس نيم ني دياكون : نيم إن تاغما تيرف إنتيه تي إيكليسيا : هينا إنتيه بي إخرستوس بينوتي آريه إيرو أو إيفول ها بيتهو أو نيفين : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.55,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.56,
                speaker: "Priester",
                cop_de: "Nipresvyteros nidiakon: nihypodiakon nianagnostis: nipsaltis nieksorkistis: nimonakhos niparthenos: nikhira niorphanos: niegkratis nilaikos. Ni-et-hotp khen pi-gamos : nem ni-et-shane-sh-shiri. Ni-et-av-khos nan ge ari-pen-mevi : nem ni-ete empou-khos. Ni-eten-sowoun emmo-ou : nem ni-eten-sowoun emmo-ou an. Nen-gagi nem nen-men-rat : Phnouti nai no-ou.",
                de: "Und die Priester, die Diakone, Subdiakone, Vorleser, Sänger, Exorzisten, Mönche, Jungfrauen, Witwen, Waisen, Asketen und die Laien,die Verheirateten und die, die Kinder erziehen, diejenigen, die uns gebeten haben, ihrer zu gedenken, und diejenigen, die uns nicht gebeten haben, diejenigen, die wir kennen, und die wir nicht kennen, unsere Feinde ebenso wie diejenigen, die uns lieben: o Herr, erbarme dich ihrer.",
                ar: "والقُسُوسَ، والشمامِسَةَ، والإِبُودياقونِيينَ، والقُرَّاءَ، والمُرَتِّلِينَ، والأَغُسْطُسِينَ، والرُّهْبانَ، والعَذارى، والأَرامِلَ، والأَيتامَ، والنُّسَّاكَ والعَلْمانِيينَ. والمُقْتَرِنِينَ بالزِّيجةِ، ومُرَبِّي الأَوْلادِ. الَّذِينَ قالوا لَنا أُذْكُرونا، والَّذِينَ لم يقولوا. الَّذِينَ نَعْرِفُهُمْ، والَّذِينَ لا نَعْرِفُهُمْ. أَعْداءَنا وأَحِبَّاءَنا، اللَّهُمَّ ارحَمْهُمْ.",
                cop_cop: "Ⲛⲓⲡ̀ⲣⲉⲥⲃⲩⲧⲉⲣⲟⲥ ⲛⲓⲇⲓⲁ̀ⲕⲱⲛ : ⲛⲓϩⲩⲡⲟⲇⲓⲁ̀ⲕⲱⲛ ⲛⲓⲁ̀ⲛⲁⲅⲛⲱⲥⲧⲏⲥ: ⲛⲓⲯⲁⲗⲧⲏⲥ ⲛⲓⲉⲝⲟⲣⲕⲓⲥⲧⲏⲥ : ⲛⲓⲙⲟⲛⲁⲭⲟⲥ ⲛⲓⲡⲁⲣⲑⲉⲛⲟⲥ : ⲛⲓⲭⲏⲣⲁ ⲛⲓⲟⲣⲫⲁⲛⲟⲥ : ⲛⲓⲉⲅⲕ̀ⲣⲁⲧⲏⲥ ⲛⲓⲗⲁⲓ̀ⲕⲟⲥ. Ⲛⲏⲉⲧϩⲱⲧⲡ ϧⲉⲛ ⲡⲓⲅⲁⲙⲟⲥ : ⲛⲉⲙ ⲛⲏⲉⲧϣⲁⲛⲉϣϣⲏⲣⲓ. Ⲛⲏⲉ̀ⲧⲁⲩⲭⲟⲥ ⲛⲁⲛ ϫⲉ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉ ⲙ̀ⲡⲟⲩⲭⲟⲥ. Ⲛⲏⲉ̀ⲧⲉⲛⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲉⲛⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ ⲁⲛ. Ⲛⲉⲛϫⲁϫⲓ ⲛⲉⲙ ⲛⲉⲛⲙⲉⲛⲣⲁⲧ : Ⲫⲛⲟⲩϯ ⲛⲁⲓ ⲛⲱⲟⲩ.",
                ar_de: "Wal qosous, wal shamamisa, wal epodyaqoniyyin, wal qorra2, wal morattilin, wal aghostosin, wal rohban, wal 3azara, wal aramel, wal aytam, wal nossak wal 3elmaniyyin. Wal-moqtarenina bel-zigati, wa morabbi el-awlad. El-lazina qalou lana ozkorouna, wal-lazina lam yaqoulou. El-lazina na3refohom, wal-lazina la na3refohom. A3da2ana wa a7ebba2ana, Allahomma er7amhom.",
                cop_ar: "ني إبريسفيتيروس ني دياكون: ني هيبودياكون ني أناغنوسطيس: ني بـسالتيس ني إيكزوركيستيس: ني موناخوس ني بارثينوس: ني خيرا ني أورفانوس: ني إين كراتيس ني لائيكوس. ني إيت هوت بـ خين بي غاموس : نيم ني إيت شانيه إش شيري. ني إيتاف خوس نان جيه أري بين ميفي : نيم ني إيتيه إمبو خوس. ني إيتين سو أون إممو أو : نيم ني إيتين سو أون إممو أو آن. نين جاجي نيم نين مين رات : إفنوتي ناي نو أو.",
            },
            {
                id: 17.58,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.59,
                speaker: "Priester",
                cop_de: "Ari-ph-mevi Epchois em-p-sogp en-ni-orthodoxos et-khen mai niven ente ti-oikoumeni.",
                de: "Gedenke, o Herr, auch aller übrigen Orthodoxen an jedem Ort des Erdkreises.",
                ar: "أذْكُر يا رَبُّ باقِي الأرْثُوذُكْسِيِّينَ، الَّذِينَ في كُلِّ مَوْضِعٍ مِنَ المَسْكُونَةِ.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲥⲱϫⲡ ⲛ̀ⲛⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ.",
                ar_de: "Ozkor ya Rabb baqi el-orthodoxiyyin, el-lazina fi kol mawde3 men el-maskouna.",
                cop_ar: "أري فـميفي إبشويس إمبـسوجـب إن ني أرثوذكسوس إتخين ماي نيفين إنتيه تي أوإيكوميني.",
            },
            {
                id: 17.60,
                speaker: "Diakon",
                cop_de: "Tovh egen ep-sogp en-ni-orthodoxos et-khen mai niven ente ti-oikoumeni tirs : hina ente Pi-khristos Pennouti tag-row-ou khen pi-nahti en-orthodoxos : ovoh entef-areh ero-ou evol ha petho-ou niven en-ni-eho-ou tirou ente pou-onkh : entef-kha nennovi nan evol.",
                de: "Betet für alle anderen Orthodoxen an jedem Ort des ganzen Erdkreises, damit Christus, unser Herr, sie im orthodoxen Glauben stärkt und sie vor allem Bösen alle Tage ihres Lebens bewahrt, und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ بَاقِي الأرْثُوذُكْسِيِّينَ الَّذِينَ فِي كُلِّ مَوَاضِعِ المَسْكُونَةِ كُلِّهَا، لِكَي المَسِيحُ إلَهُنَا يُثَبِّتَهُم فِي الإيمَانِ الأرْثُوذُكْسِيِّ، ويَحْفَظَهُم مِنْ كُلِّ شَرٍّ جَمِيعَ أَيَّامِ حَيَاتِهم، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡ̀ⲥⲱϫⲡ ⲛ̀ⲛⲓⲟⲣⲑⲟⲇⲟⲝⲟⲥ ⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲧⲁϫⲣⲱⲟⲩ ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ : ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲉⲧϩⲱⲟⲩ ⲛⲓⲃⲉⲛ ⲛ̀ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲟⲩⲱⲛϧ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an baqi el-orthodoxiyyin ellazina fi kol mawade3 el-maskouna kolleha, likay el-Masih elahona yothabbetahom fel-iman el-orthodoxi, wa ya7fazahom min kol sharr jami3 ayyam hayatihom, wa yaghfer lana khatayana.",
                cop_ar: "توبه إيجين إب سوجب إن ني أرثوذكسوس إتخين ماي نيفين إنتيه تي أو إيكوميني تيرس: هينا إنتيه بي إخرستوس بينوتي تاجرؤو خين بي ناهتي إن أرثوذكسوس: أوفوه إنتيف آريه إيرو أو إيفول ها بيتهو أو نيفين إن ني إيهوؤو تيرو إنتيه بو أونخ: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.61,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.62,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois empaitopos ethouav ntak phai : nem topos niven : nem monastirion niven ente nenioti northodoxos.",
                de: "Gedenke, o Herr, des Heils dieses heiligen Ortes, der dir angehört, und aller Ortschaften und aller Klöster unserer orthodoxen Väter.",
                ar: "أُذْكُرْ يَا رَبُّ هَذَا المَوْضِعَ المُقَدَّسَ الَّذِي لَكَ، وَكُلَّ المَوَاضِعِ وَكُلَّ أَدْيِرَةِ آبائِنَا الأرْثُوذُكْسِيِّينَ.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲁⲓⲧⲟⲡⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ : ⲛⲉⲙ ⲧⲟⲡⲟⲥ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ.",
                ar_de: "Ozkor ya Rabb haza el-mawde3 el-moqaddas ellazi lak, wa kol el-mawade3 wa kol adyerat aba2ena el-orthodoxiyyin.",
                cop_ar: "أري فـميفي إبشويس إمباي توبوس إثؤواب إنتاك فاي : نيم توبوس نيفين : نيم مونا ستيريون نيفين إنتيه نين يوتي إن أرثوذكسوس.",
            },
            {
                id: 17.63,
                speaker: "Diakon",
                cop_de: "Tovh egen ep-semni em-pai-topos eth-ou-av phai : nem topos niven : nem monastirion niven ente nenioti n-orthodoxos : ni-sha-fev nem ni-khelloi et-shop en-khitou : nem ep-semni em-pi-kosmos tirf ev-sop : hina ente Pi-khristos Pennouti areh ero-ou evolha petho-ou niven : entef-kha nennovi nan evol.",
                de: "Betet für die Sicherheit dieses heiligen Ortes und aller Ortschaften, aller Klöster unserer orthodoxen Väter, aller Wüsten und die Ältesten, die in ihnen wohnen und für die Sicherheit der ganzen Welt, damit Christus, unser Herr, sie vor allem Bösen bewahrt, und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ طُمَأْنِينَةِ هَذَا المَوْضِعِ المُقَدَّسِ، وَكُلِّ مَوْضِعٍ، وَكُلِّ دَيْرٍ لِآبَائِنَا الأرْثُوذُكْسِيِّينَ، وَالبَرَارِيِّ، وَالشُّيُوخِ السُّكَّانِ فِيهَا، وَطُمَأْنِينَةِ العَالَمِ أَجْمَعَ مَعاً، لِكَيْ يَحْفَظَهُمُ المَسِيحُ إلَهُنَا مِنْ كُلِّ شَرٍّ، وَيَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡ̀ⲥⲉⲙⲛⲓ ⲙ̀ⲡⲁⲓⲧⲟⲡⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ : ⲛⲉⲙ ⲧⲟⲡⲟⲥ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲙⲟⲛⲁⲥⲧⲏⲣⲓⲟⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲉⲛⲓⲟϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ : ⲛⲓϣⲁϥⲉⲩ ⲛⲉⲙ ⲛⲓϧⲉⲗⲗⲟⲓ ⲉⲧϣⲟⲡ ⲛ̀ϧⲏⲧⲟⲩ : ⲛⲉⲙ ⲡ̀ⲥⲉⲙⲛⲓ ⲙ̀ⲡⲓⲕⲟⲥⲙⲟⲥ ⲧⲏⲣϥ ⲉⲩⲥⲟⲡ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲉⲧϩⲱⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an toma2ninat haza el-mawde3 el-moqaddas, wa kol mawde3, wa kol deir li-aba2ena el-orthodoxiyyin, wal-barari, wal-shoyoukh el-sokkan fiha, wa toma2ninat el-3alam ajma3 ma3an, likay ya7fazahom el-Masih elahona min kol sharr, wa yaghfer lana khatayana.",
                cop_ar: "توبه إيجين إب سـيمني إمباي توبوس إثؤواب فاي : نيم توبوس نيفين : نيم مونا ستيريون نيفين إنتيه نين يوتي إن أرثوذكسوس : ني شافيو نيم ني شيللوي إتشوب إنخيتو : نيم إب سـيمني إمبي كوسموس تيرف إيف سوب : هينا إنتيه بي إخرستوس بينوتي آريه إيرو أو إيفول ها بيتهو أو نيفين : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.64,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.65,
                speaker: "Priester",
                cop_de: "Nem polis niven : nem khora niven : nem ni-timi : nem i niven ente ni-pistos : Areh de eron tiren khen pi-nahti n-orthodoxos sha pi-nifi en-kha-e : phai gar mmavatf pe ten-helpis.",
                de: "Und jeder Stadt, aller Orte, Dörfer und aller Häuser der Gläubigen, und bewahre uns alle im orthodoxen Glauben bis zum letzten Atemzug, denn das ist unsere einzige Hoffnung.",
                ar: "وَكُلِّ مَدِينَةٍ، وَكُلِّ كُورَةٍ، وَالقُرَى، وَكُلِّ بُيُوتِ المُؤْمِنِينَ. وَاحْفَظْنَا كُلَّنَا فِي الإِيمَانِ الأرْثُوذُكْسِيِّ إِلَى النَّفَسِ الأَخِيرِ، لأَنَّ هَذَا وَحْدَهُ هُوَ رَجَاؤُنَا.",
                cop_cop: "Ⲛⲉⲙ ⲡⲟⲗⲓⲥ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲭⲱⲣⲁ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲛⲓϯⲙⲓ : ⲛⲉⲙ ⲏⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲡⲓⲥⲧⲟⲥ : Ⲁ̀ⲣⲉϩ ⲇⲉ ⲉ̀ⲣⲟⲛ ⲧⲏⲣⲉⲛ ϧⲉⲛ ⲡⲓⲛⲁϩϯ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ ϣⲁ ⲡⲓⲛⲓϥⲓ ⲛ̀ϧⲁⲉ̀ : ⲫⲁⲓ ⲅⲁⲣ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲡⲉ ⲧⲉⲛϩⲉⲗⲡⲓⲥ.",
                ar_de: "Wa kol madinah, wa kol kourah, wal qora, wa kol beyout el-mo2menin. Wa7fazna kollana fel iman el-orthodoxi ela el-nafas el-akhir, le2anna haza wa7daho houwa raja2ona.",
                cop_ar: "نيم بوليس نيفين : نيم كورا نيفين : نيم ني تيمي : نيم إي نيفين إنتيه ني بيستوس : آريه ديه إيرون تيرين خين بي ناهتي إن أرثوذكسوس شا بي نيفي إنخاييه : فاي غار إممافات ف بيه تين هيلبيس.",
            },
            {
                id: 17.66,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.67,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois en-ni-et-ohi eratou empaima : ovoh et-oi en-shphir en-tovh neman.",
                de: "Gedenke, o Herr, der hier Anwesenden, die mit uns an diesem Fürbittgebet teilnehmen.",
                ar: "أُذْكُرْ يَا رَبُّ القِيَامَ هَهُنَا، والمُشَارِكِينَ لَنَا فِي الطِّلْبَةِ.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲛ̀ⲛⲏⲉⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲁⲓⲙⲁ : ⲟⲩⲟϩ ⲉⲧⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣ ⲛ̀ⲧⲱⲃϩ ⲛⲉⲙⲁⲛ.",
                ar_de: "Ozkor ya Rabb el-qiyama hahona, wal-mosharikina lana fel-tilbah.",
                cop_ar: "أري فـميفي إبشويس إن ني إيت أوهي إيرات أو إمباي ما : أوفوه إت أو إي إن إشـفير إن توفـه نيمان.",
            },
            {
                id: 17.68,
                speaker: "Diakon",
                cop_de: "Tovh egen ni-et-ohi eratou empaima ovoh et-oi en-shphir en-tovh neman : hina ente Pi-khristos Pennouti areh ero-ou : entef-ro-is ero-ou : entef-shop erof en-nou-tovh : ovoh entef-nai no-ou : entef-kha nennovi nan evol.",
                de: "Betet für die hier an diesem Ort Anwesenden, die mit uns an unseren Fürbitten teilnehmen, damit Christus, unser Herr, sie bewahrt, sie schützt und ihre Bitten annimmt, und sich ihrer erbarmt, und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنِ القِيَامِ فِي هَذَا المَوْضِعِ، والمُشْتَرِكِينَ فِي الطلبة مَعَنَا، لِكَيْ يَحْفَظَهُمُ المَسِيحُ إلَهُنَا ويَحْرُسَهُمْ، ويَقْبَلَ إِلَيْهِ طِلْبَاتِهِم ويَرْحَمَهُمْ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲏⲉⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲁⲓⲙⲁ ⲟⲩⲟϩ ⲉⲧⲟⲓ ⲛ̀ϣ̀ⲫⲏⲣ ⲛ̀ⲧⲱⲃϩ ⲛⲉⲙⲁⲛ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲱⲟⲩ : ⲛ̀ⲧⲉϥⲣⲱⲓⲥ ⲉ̀ⲣⲱⲟⲩ : ⲛ̀ⲧⲉϥϣⲱⲡ ⲉ̀ⲣⲟϥ ⲛ̀ⲛⲟⲩⲧⲱⲃϩ : ⲟⲩⲟϩ ⲛ̀ⲧⲉϥⲛⲁⲓ ⲛⲱⲟⲩ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an el-qiyama fi haza el-mawde3, wal-moshtarikiina fel-tilbah ma3ana, likay ya7fazahom el-Masih elahona wa ya7rosahom, wa yaqbala elayhi tilbatihom wa yar7amahom, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين ني إيت أوهي إيرات أو إمباي ما أوفوه إت أو إي إن إشـفير إن توفـه نيمان : هينا إنتيه بي إخرستوس بينوتي آريه إيرو أو : إنتيف رويس إيرو أو : إنتيف شوب إيروف إن نو توفه : أوفوه إنتيف ناي نو أو : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.69,
                speaker: "Priester",
                cop_de: "Nenioti nem nensniou: nem epsogp ennietkhen mai niven ente tioikoumeni. Areh de eroou neman khen hanparemvoli ente hangom ethouav. Ovoh nahmen evolha nisothnef etvernout enkhrom ente pidiavolos. Nem korgs niven ndiavolikon: nem pifash ente piouaio efshouit.",
                de: "Unsere Väter und unsere Brüder und alle übrigen an jedem Ort des Erdkreises, bewahre sie und uns im Lager deiner heiligen Heerscharen und rette uns vor den Feuerpfeilen des Teufels und allen teuflischen Fallen und vor den Ködern nichtigen Ruhms.",
                ar: "آبَاءَنَا وإخْوَتَنَا، وبَقِيَّةَ الَّذِينَ فِي كُلِّ مَوْضِعٍ مِنَ المَسْكُونَةِ. إحْفَظْهُم وإيَّانَا بِمُعَسْكَرَاتِ القُوَّاتِ المُقَدَّسَةِ. ونَجِّنَا مِنْ سِهَامِ إبْلِيسَ المُلْتَهِّبَةِ نَاراً. وكُلِّ المَصَايِدِ الشَّيْطَانِيَّةِ، ومِنْ فَخِّ التَّزْكِيَةِ الكَاذِبَةِ.",
                cop_cop: "Ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ: ⲛⲉⲙ ⲡ̀ⲥⲱϫⲡ ⲛ̀ⲛⲏⲉⲧϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ. Ⲁ̀ⲣⲉϩ ⲇⲉ ⲉ̀ⲣⲱⲟⲩ ⲛⲉⲙⲁⲛ ϧⲉⲛ ϩⲁⲛⲡⲁⲣⲉⲙⲃⲟⲗⲏ ⲛ̀ⲧⲉ ϩⲁⲛϫⲟⲙ ⲉⲑⲟⲩⲁⲃ. Ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲛⲓⲥⲟⲑⲛⲉϥ ⲉⲧⲃⲉⲣⲛⲟⲩⲧ ⲛ̀ⲭ̀ⲣⲱⲙ ⲛ̀ⲧⲉ ⲡⲓⲇⲓⲁ̀ⲃⲟⲗⲟⲥ. Ⲛⲉⲙ ⲭⲟⲣϫⲥ ⲛⲓⲃⲉⲛ ⲛ̀ⲇⲓⲁ̀ⲃⲟⲗⲓⲕⲟⲛ: ⲛⲉⲙ ⲡⲓⲫⲁϣ ⲛ̀ⲧⲉ ⲡⲓⲟⲩⲁⲓⲟ̀ ⲉϥϣⲟⲩⲓⲧ.",
                ar_de: "Aba2ana wa ekhwatana, wa baqiyyat el-lazina fi kol mawde3 men el-maskouna. E7faz-hom wa eyana be-mo3askarat el-qowat el-moqaddasa. Wa najjina min siham eblis el-moltahiba naran. Wa kol el-masayed el-shaytaniyya, wa men fakh el-tazkiyya el-kaziba.",
                cop_ar: "نين يوتي نيم نين إسنـي أو: نيم إبـسوجـب إن ني إيت خين ماي نيفين إنتيه تي أوإيكوميني. آريه ديه إيرو أو نيمان خين هان باريمفولي إنتيه هان جوم إثؤواب. أوفوه ناهـمين إيفول ها ني سوث نيف إيت فير نوت إن إكروم إنتيه بي ديافولوس. نيم خورس نيفين إن ديافوليكون: نيم بي فاش إنتيه بي أو أي أو إيفـشويت.",
            },
            {
                id: 17.70,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.71,
                speaker: "Priester",
                cop_de: "Ari-ph-mevi Epchois en-ouon niven et-av-hon-hen nan ge ari-pen-mevi.",
                de: "Gedenke, o Herr, derer, die uns gebeten haben, ihrer zu gedenken.",
                ar: "أُذْكُر يَا رَبُّ كُلَّ الَّذِينَ أَوْصَوْنَا أَنْ نَذْكُرَهُمْ.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϩⲟⲛϩⲉⲛ ⲛⲁⲛ ϫⲉ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀.",
                ar_de: "Ozkor ya Rabb kol el-lazina awsouna an nazkorahom.",
                cop_ar: "أري فـميفي إبشويس إن أو أون نيفين إيتاف هون هين نان جيه أري بين ميفي.",
            },
            {
                id: 17.72,
                speaker: "Diakon",
                cop_de: "Tovh egen ouon niven etavhonhen nan eerpoumevi khen nentiho nem nentovh : piouai piouai kata pefran : hina ente Pikhristos Pennouti erpoumevi epiagathon ensiou niven : entefkha nennovi nan evol.",
                de: "Betet für alle, die uns beauftragt haben, ihrer in unseren Gebeten und unserem Flehen zu gedenken, jeder mit seinem Namen, damit Christus, unser Herr, ihrer zu jeder Zeit im Guten gedenkt, und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ كُلِّ الَّذِينَ أَوْصَوْنَا أَنْ نَذْكُرَهُمْ فِي سُؤَالاتِنَا وَطِلْبَاتِنَا، كُلِّ أَحَدٍ بِاسْمِهِ، لِكَيْ المَسِيحُ إلَهُنَا يَذْكُرَهُمْ بِالخَيْرِ فِي كُلِّ حِينٍ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϩⲟⲛϩⲉⲛ ⲛⲁⲛ ⲉ̀ⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀ ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ : ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲡⲉϥⲣⲁⲛ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲉⲣⲡⲟⲩⲙⲉⲩⲓ̀ ⲉ̀ⲡⲓⲁ̀ⲅⲁⲑⲟⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an kol el-lazina awsouna an nazkorahom fi so2alatena wa tilbatena, kol a7ad besmehi, likay el-Masih elahona yazkorahom bel-khayr fi kol 7in, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين أوأون نيفين إيتاف هون هين نان إي إير بو ميفي خين نين تيهو نيم نين توفه: بي أواي بي أواي كاتا بيف ران: هينا إنتيه بي إخرستوس بينوتي إير بو ميفي إي بي آغاثون إن سيو نيفين: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.73,
                speaker: "Priester",
                cop_de: "Khen nentiho nem nentovh : eteniri emmou epshoi harok Epchois Pennouti. Nem kata paisiou phai ente taianaphora ethouav. Niet-en-iri empoumevi ensiou niven : nem niet-khen phmevi mpiouai piouai emmon. Ovoh pou-erphmevi etaf-shopi tinou maref-shopi no-ou entshevio enousovt eftagreyout : ovoh efvreyout evlavi niven ente nidemon : nem epsovni ente niromi ethouou.",
                de: "In unseren Gebeten und unserem Flehen, das wir zu dir, Herr, unser Gott, senden wie jetzt zu dieser Zeit in dieser heiligen Liturgie: derer, deren wir zu jeder Zeit gedenken, und derer, die im Gedenken eines jeden von uns sind. Dieses Gedenken für sie, das jetzt geschah, sei für sie eine feste Mauer des Sieges über alle Angriffe der Dämonen und Verschwörungen böser Menschen.",
                ar: "فِي صَلَوَاتِنَا وطَلَبَاتِنَا الَّتِي نَصْنَعُهَا إِلَيْكَ أَيُّهَا الرَّبُّ إِلَهُنَا. كَهَذَا الوَقْتِ الَّذِي لِهَذَا القُدَّاسِ الطَّاهِرِ. الَّذِينَ نَذْكُرُهُمْ كُلَّ حِينٍ، وَالَّذِينَ فِي فِكْرِ كُلِّ وَاحِدٍ مِنَّا. وتَذْكَارُهُمُ الَّذِي صَارَ الآنَ، فَلْيَكُنْ لَهُمْ مِثْلَ سُورٍ ثَابِتٍ غَالِبٍ لِكُلِّ مَضَرَّاتِ الشَّيَاطِينِ، ومُؤَامَرَةِ النَّاسِ الأَشْرَارِ.",
                cop_cop: "Ϧⲉⲛ ⲛⲉⲛϯϩⲟ ⲛⲉⲙ ⲛⲉⲛⲧⲱⲃϩ : ⲉ̀ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲉ̀ⲡ̀ϣⲱⲓ ϩⲁⲣⲟⲕ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ. Ⲛⲉⲙ ⲕⲁⲧⲁ ⲡⲁⲓⲥⲏⲟⲩ ⲫⲁⲓ ⲛ̀ⲧⲉ ⲧⲁⲓⲁ̀ⲛⲁⲫⲟⲣⲁ ⲉⲑⲟⲩⲁⲃ. Ⲛⲏⲉ̀ⲧⲉⲛⲓ̀ⲣⲓ ⲙ̀ⲡⲟⲩⲙⲉⲩⲓ̀ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲛⲉⲙ ⲛⲏⲉⲧⲧϧⲉⲛ ⲫⲙⲉⲩⲓ̀ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲟⲛ. Ⲟⲩⲟϩ ⲡⲟⲩⲉⲣⲫⲙⲉⲩⲓ̀ ⲉ̀ⲧⲁϥϣⲱⲡⲓ ϯⲛⲟⲩ ⲙⲁⲣⲉϥϣⲱⲡⲓ ⲛⲱⲟⲩ ⲛ̀ⲧϣⲉⲃⲓⲱ̀ ⲛ̀ⲟⲩⲥⲟⲃⲧ ⲉϥⲧⲁϫⲣⲏⲟⲩⲧ : ⲟⲩⲟϩ ⲉϥⲃⲣⲏⲟⲩⲧ ⲉ̀ⲃⲗⲁⲃⲏ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲇⲉⲙⲱⲛ : ⲛⲉⲙ ⲡ̀ⲥⲟⲃⲛⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ ⲉⲧϩⲱⲟⲩ.",
                ar_de: "Fi salawatena wa tilbatena ellati nasna3oha elayka ayyoha el-Rabb elahona. Kahaza el-waqt ellazi lehaza el-qoddas el-taher. El-lazina nazkorahom kol 7in, wal-lazina fi fekr kol wa7ed menna. Wa tazkarohom ellazi sara el-2an, falyakon lahom methla sour thabet ghaleb lekol madarrat el-shayatin, wa mo2amarat el-nas el-ashrar.",
                cop_ar: "خين نين تيهو نيم نين توفـه: إيتين إيري إممو أو إبـشوي هاروك إبشويس بينوتي. نيم كاتا باي سيو فاي إنتيه تاي أنافورا إثؤواب. ني إيتين إيري إمبو ميفي إن سيو نيفين: نيم ني إيت خين إفميفي إمبي أواي بي أواي إممون. أوفوه بو إير فميفي إيتاف شوبي تينو ماريف شوبي نو أو إن إتـشيفيو إن أو سوبت إف تاجرؤوت: أوفوه إف فرؤوت إيف لافي نيفين إنتيه ني ديمون: نيم إب سوبني إنتيه ني رومي إتـهـؤو.",
            },
            {
                id: 17.74,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.75,
                speaker: "Diakon",
                cop_de: "Ou-osht em-Phnouti khen ou-hoti nem ou-stherter.",
                de: "Verbeugt euch vor Gott in Furcht und Zittern.",
                ar: "اسْجُدُوا للهِ بِخَوْفٍ ورِعْدَةٍ.",
                cop_cop: "Ⲟⲩⲱϣⲧ ⲙ̀Ⲫⲛⲟⲩϯ ϧⲉⲛ ⲟⲩϩⲟϯ ⲛⲉⲙ ⲟⲩⲥ̀ⲑⲉⲣⲧⲉⲣ.",
                ar_de: "Osjodou lillah bekhawfen wa re3da.",
                cop_ar: "أوؤوشت إم إفنوتي خين أو هوي نيم أو إسثيرتير.",
            },
            {
                id: 17.76,
                speaker: "Priester",
                cop_de: "(Siga) Ari-ph-mevi Epchois enta-psyche entaleporos ovoh en-govi. Ovoh mi-is ni-i entak-ati ge ou pe ti-met-nishti ente pa-khin-ohi erat em-pek-thysia-stirion eth-ou-av. Ovoh sogi evol-haroi en-hydoni niven ente ti-met-at-emi nem na-ti-met-alou. Hina entef-sh-tem-shopi ni-i enge phai en-ou-etpho : khen ti-apologia ente pi-eho-ou ente pi-hap et-oi en-hoti ete mmav. Ovoh nahmet evol-ha energia niven ente ti-gom en-anti-kimenos. Ovoh emper-takoi nem na-anomia : oude emper-emvon sha eneh : entek-areh en-na-petho-ou ni-i. Alla matamoi ho etek-met-agathos en-khit : ovoh nahmet da pi-at-em-psha : kata pek-nai etosh ehrii egen egoy. Hina entas-mou erok en-si-ou niven : en-ni-eho-ou tirou ente pa-onkh.",
                de: "(Still) Gedenke, o Herr, meiner schwachen, elenden Seele und gewähre mir, dass ich die Größe meines Stehens vor deinem heiligen Altar begreife. Entferne von mir den Reiz der Unwissenheit und Jugend, damit diese nicht schwer auf mir liegen, wenn ich am letzten Tag des furchterregenden Gerichts Rechenschaft ablegen muss, und rette mich vor jedem Einwirken der Mächte des Gegners. Vernichte mich nicht wegen meiner Schuld. Zürne mir nicht in Ewigkeit, damit meine Sünden nicht unvergeben bleiben, sondern zeige mir deine Güte in mir und rette mich, der ich deiner überfließenden Gnade für mich unwürdig bin, damit ich dich jederzeit und alle Tage meines Lebens lobpreise.",
                ar: "أُذْكُرْ يَا رَبُّ نَفْسِي الضَّعِيفَةَ الشَّقِيَّةَ. وَامْنَحْنِي أَنْ أَفْهَمَ مَا هُوَ عِظَمُ قِيَامِي أَمَامَ مَذْبَحِكَ المُقَدَّسِ. وَاقْطَعْ عَنِّي كُلَّ لَذَّاتِ الجَهْلِ وَالصِّبَا. لِكَيْ لَا يَكُونَ لِي هَذَا ثِقْلًا فِي جَوَابِ يَوْمِ الدَّيْنُونَةِ المَرْهُوبِ. وَنَجِّنِي مِنْ كُلِّ أَفْعَالِ القُوَّةِ المُضَادَّةِ. وَلَا تُهْلِكْنِي بِآثَامِي، وَلَا تَغْضَبْ إِلَى الأَبَدِ فَتَحْفَظَ لِي شُرُورِي. بَلْ أَرِنِي أَنَا أَيْضًا صَلَاحَكَ فِيَّ، وَنَجِّنِي أَنَا غَيْرَ المُسْتَحِقِّ، كَكَثْرَةِ رَحْمَتِكَ عَلَيَّ. لِكَيْ أُبَارِكَكَ كُلَّ حِينٍ جَمِيعَ أَيَّامِ حَيَاتِي (سراً)",
                cop_cop: "(ⲥⲓⲅⲁ) Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲛ̀ⲧⲁⲯⲩⲭⲏ ⲛ̀ⲧⲁⲗⲉⲡⲱⲣⲟⲥ ⲟⲩⲟϩ ⲛ̀ϫⲱⲃⲓ. Ⲟⲩⲟϩ ⲙⲏⲓⲥ ⲛⲏⲓ ⲛ̀ⲧⲁⲕⲁϯ ϫⲉ ⲟⲩ ⲡⲉ ϯⲙⲉⲧⲛⲓϣϯ ⲛ̀ⲧⲉ ⲡⲁⲭⲓⲛⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧ ⲙ̀ⲡⲉⲕⲑⲩⲥⲓⲁⲥⲧⲏⲣⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ. Ⲟⲩⲟϩ ⲥⲱϫⲓ ⲉ̀ⲃⲟⲗϩⲁⲣⲟⲓ ⲛ̀ϩⲩⲇⲟⲛⲏ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯⲙⲉⲧⲁⲧⲉ̀ⲙⲓ ⲛⲉⲙ ⲛⲁϯⲙⲉⲧⲁ̀ⲗⲟⲩ. Ϩⲓⲛⲁ ⲛ̀ⲧⲉϥϣ̀ⲧⲉⲙϣⲱⲡⲓ ⲛⲏⲓ ⲛ̀ϫⲉ ⲫⲁⲓ ⲛ̀ⲟⲩⲉⲧⲫⲱ : ϧⲉⲛ ϯⲁ̀ⲡⲟⲗⲟⲅⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛ̀ⲧⲉ ⲡⲓϩⲁⲡ ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ ⲉ̀ⲧⲉ ⲙ̀ⲙⲁⲩ. Ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲧ ⲉ̀ⲃⲟⲗϩⲁ ⲉⲛⲉⲣⲅⲓⲁ̀ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ϯϫⲟⲙ ⲛ̀ⲁⲛⲧⲓⲕⲓⲙⲉⲛⲟⲥ. Ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣⲧⲁⲕⲟⲓ ⲛⲉⲙ ⲛⲁⲁ̀ⲛⲟⲙⲓⲁ̀ : ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣⲙ̀ⲃⲟⲛ ϣⲁ ⲉ̀ⲛⲉϩ : ⲛ̀ⲧⲉⲕⲁ̀ⲣⲉϩ ⲉ̀ⲛⲁⲡⲉⲧϩⲱⲟⲩ ⲛⲏⲓ. Ⲁⲗⲗⲁ ⲙⲁⲧⲁⲙⲟⲓ ϩⲱ ⲉ̀ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ ⲛ̀ϧⲏⲧ : ⲟⲩⲟϩ ⲛⲁϩⲙⲉⲧ ⲇⲁ ⲡⲓⲁ̀ⲧⲙ̀ⲡ̀ϣⲁ : ⲕⲁⲧⲁ ⲡⲉⲕⲛⲁⲓ ⲉⲧⲟϣ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲓ. Ϩⲓⲛⲁ ⲛ̀ⲧⲁⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟⲕ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ : ⲛ̀ⲛⲓⲉ̀ϩⲟⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲉ ⲡⲁⲱⲛϧ. ",
                ar_de: "(Serran) Ozkor ya Rabb nafsi el-za3ifata el-shaqiyya. Wamna7ni an afhama ma houwa 3izamo qiyami amama mazba7eka el-moqaddas. Waqta3 3anni kol lazzat el-jahli wal-siba. Likay la yakouna li haza theqlan fi jawabi yawmi el-daynounati el-marhoub. Wa najjini min kol af3al el-qowwa el-modadda. Wa la tohlekni be-2athami, wa la taghzab ela el-abad fata7fazo li shorouri. Bal areni ana ayzan sala7aka fiyya, wa najjini ana ghayra el-mosta7eq, ka-kathrati ra7mateka 3alayya. Likay obarekaka kol 7in jami3 ayyam hayati.",
                cop_ar: "(سيغا) أري فـميفي إبشويس إن تاي بـسيشي إن طاليبوروس أوفوه إن جوبي. أوفوه مي يس ني إي إنتاك آتي جيه أو بيه تي ميت نيشتي إنتيه با خين أوهي إيرات إمبيك ثيسيا ستيريون إثؤواب. أوفوه سوحي إيفول هاروي إن هيدوني نيفين إنتيه تي ميت أط إيمي نيم نا تي ميت آلو. هينا إنتيف إشتيم شوبي ني إي إنجيه فاي إن أو إيتـفو: خين تي أبولوجيا إنتيه بي إيهوؤو إنتيه بي هاب إت أوي إن هوي إيتيه إمماف. أوفوه ناهـميت إيفول ها إنيرجيا نيفين إنتيه تي جوم إن أنتيكيمينوس. أوفوه إمبير طاكوي نيم نا أنوميا: أوديه إمبير إمفون شا إينيه: إنتيك آريه إن نا بيتهوؤو ني إي. أللا ماطاموي هو إيتيك ميت آغاثوس إنخيت: أوفوه ناهـميت دا بي آت إم إبـشا: كاتا بيك ناي إيتوش إهريي إيجين إيجوي. هينا إنطاسمو إيروك إن سيو نيفين: إن ني إيهوؤو تيرو إنتيه با أونخ.",
            },
            {
                id: 17.77,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.78,
                speaker: "Priester",
                cop_de: "Ariphmevi Epchois empai-ke-ieration ethouav ntak phai.",
                de: "Gedenke, o Herr, dieses deines heiligen Priestertums.",
                ar: "أُذْكُرْ يَا رَبُّ هَذَا الكَهَنُوتَ المُقَدَّسَ الَّذِي لَكَ.",
                cop_cop: "Ⲁⲣⲓⲫⲙⲉⲩⲓ̀ Ⲡϭⲟⲓⲥ ⲙ̀ⲡⲁⲓⲕⲉⲓⲉⲣⲁⲧⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲧⲁⲕ ⲫⲁⲓ.",
                ar_de: "Ozkor ya Rabb haza el-kahanout el-moqaddas ellazi lak.",
                cop_ar: "أري فـميفي إبشويس إمباي كيه إيـراتيون إثؤواب إنتاك فاي.",
            },
            {
                id: 17.79,
                speaker: "Diakon",
                cop_de: "Tovh egen pai-ke-ieration ethouav phai nem tagma niven n-ieratikon n-orthodoxos : hina ente Pi-khristos Pennouti sotem ero-ou : entef-ro-is ero-ou : ovoh entef-ti-gom no-ou : entef-nai no-ou : entef-kha nennovi nan evol.",
                de: "Betet für das heilige Priestertum und für die orthodoxen priesterlichen Ränge, damit Christus, unser Gott, sie erhört, schützt, stärkt und sich über sie erbarmt, und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنْ هَذَا الكَهَنُوتِ المُقَدَّسِ، وكُلِّ الرُّتَبِ الكَهَنُوتِيَّةِ الأرثوذكسيةِ، لِكَيْ يَسْتَجِيبَ لَهُمُ المَسِيحُ إلَهُنا، ويَحْرُسَهُمْ، ويُقَوِّيَهُمْ، ويَرْحَمَهُمْ، ويغْفِرَ لنا خطايانا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡⲁⲓⲕⲉⲓⲉⲣⲁⲧⲓⲟⲛ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ ⲛⲉⲙ ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲓⲉⲣⲁⲧⲓⲕⲟⲛ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ : ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥⲱⲧⲉⲙ ⲉ̀ⲣⲱⲟⲩ : ⲛ̀ⲧⲉϥⲣⲱⲓⲥ ⲉ̀ⲣⲱⲟⲩ : ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϯϫⲟⲙ ⲛⲱⲟⲩ : ⲛ̀ⲧⲉϥⲛⲁⲓ ⲛⲱⲟⲩ : ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an haza el-kahanout el-moqaddas, wa kol el-rotab el-kahanoutiyya el-orthodoxiyya, likay yastajiba lahom el-Masih elahona, wa ya7rosahom, wa yoqawweyahom, wa yar7amahom, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين باي كيه إير اتيون إثؤواب فاي نيم تاغما نيفين إن إيراتيكون إن أرثوذكسوس : هينا إنتيه بي إخرستوس بينوتي سوتم إيرو أو : إنتيف رويس إيرو أو : أوفوه إنتيف تي جوم نو أو : إنتيف ناي نو أو : إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.80,
                speaker: "Priester",
                cop_de: "Nem tagma niven n-ieratikon n-orthodoxos : nem pek-laos tirf et-ohi eratf nahrak. Ari-pen-mevi hon Epchois Epchois khen han-nai nem han-met-shen-hit : ovoh solj n-nen-anomia hos agathos ovoh em-mai-romi. Phnouti ari-sh-phir en-shopi neman : e-shem-shi em-pek-ran eth-ou-av.",
                de: "Und für alle orthodoxen priesterlichen Ränge und dein ganzes Volk, das vor dir steht. Gedenke auch unser, o Herr, mit Erbarmen und Barmherzigkeit und tilge unsere Schuld als Gütiger und Menschliebender. O Gott, wirke mit uns bei dem, was wir bewältigen, damit wir deinem heiligen Namen dienen können.",
                ar: "وكُلِّ الرُّتَبِ الكَهَنُوتِيَّةِ الأرثوذكسيةِ، وكُلِّ شَعْبِكَ الوَاقِفِ أَمَامَكَ. أُذْكُرْنَا نَحْنُ أَيْضاً يَا رَبُّ، يَا رَبُّ بِالمَرَاحِمِ والرَّأَفَاتِ، وامْحُ آثَامَنَا كَصَالِحٍ ومُحِبِّ البَشَرِ. اللَّهُمَّ شَارِكْنَا الحُلُولَ مَعَنَا، لِنَخْدِمَ اسْمَكَ القُدُّوسَ.",
                cop_cop: "Ⲛⲉⲙ ⲧⲁⲅⲙⲁ ⲛⲓⲃⲉⲛ ⲛ̀ⲓⲉⲣⲁⲧⲓⲕⲟⲛ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ : ⲛⲉⲙ ⲡⲉⲕⲗⲁⲟⲥ ⲧⲏⲣϥ ⲉⲧⲟϩⲓ ⲉ̀ⲣⲁⲧϥ ⲛⲁϩⲣⲁⲕ. Ⲁⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ ϩⲱⲛ Ⲡϭⲟⲓⲥ Ⲡϭⲟⲓⲥ ϧⲉⲛ ϩⲁⲛⲛⲁⲓ ⲛⲉⲙ ϩⲁⲛⲙⲉⲧϣⲉⲛϩⲏⲧ : ⲟⲩⲟϩ ⲥⲱⲗϫ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀ ϩⲱⲥ ⲁ̀ⲅⲁⲑⲟⲥ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲓⲣⲱⲙⲓ. Ⲫⲛⲟⲩϯ ⲁ̀ⲣⲓϣ̀ⲫⲏⲣ ⲛ̀ϣⲱⲡⲓ ⲛⲉⲙⲁⲛ : ⲉϣⲉⲙϣⲓ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "Wa kol el-rotab el-kahanoutiyya el-orthodoxiyya, wa kol sha3beka el-waqef amamaka. Ozkorna nahnou ayzan ya Rabb, ya Rabb bel-marahim wal-ra2afat, wam7ou athamana kasale7 wa mo7eb el-bashar. Allahomma sharekna el-houloul ma3ana, lenakhdema esmaka el-qoddous.",
                cop_ar: "نيم تاغما نيفين إن إيراتيكون إن أرثوذكسوس : نيم بيك لاوس تيرف إت أوهي إيرات إف ناهراك. أري بين ميفي هون إبشويس إبشويس خين هان ناي نيم هان ميت شين هـيت : أوفوه سولـج إن نين أنوميا هوس آغاثوس أوفوه إمماي رومي. إفنوتي أري إشـفير إن شوبي نيمان : إي شيم شي إمبيك ران إثؤواب.",
            },
            {
                id: 17.81,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.82,
                speaker: "Priester",
                cop_de: "Nen-gin-thou-outi: esmou ero-ou.",
                de: "Unserer Versammlungen, segne sie.",
                ar: "اجْتِمَاعَاتِنَا، بَارِكْهَا.",
                cop_cop: "Ⲛⲉⲛϫⲓⲛⲑⲱⲟⲩϯ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                ar_de: "Ejtema3atena, barekha.",
                cop_ar: "نين جين ثو أوتي: إسمو إيرو أو.",
            },
            {
                id: 17.83,
                speaker: "Diakon",
                cop_de: "Tovh egen pen-gin-thou-outi ekhoun phai nem gin-thou-outi ekhoun niven ente ni-laos n-orthodoxos: hina ente Pi-khristos Pennouti esmou ero-ou: entef-gokou evol khen ou-hirini: entef-kha nennovi nan evol.",
                de: "Bittet für diese unsere Versammlung und für alle Versammlungen des orthodoxen Volkes, damit Christus, unser Gott, sie segne und in Frieden vollende und uns unsere Sünden vergibt.",
                ar: "أُطْلُبُوا عَنِ اجْتِمَاعِنَا هَذَا، وَعَنْ كُلِّ اجْتِمَاعٍ لِلشُّعُوبِ الأرْثوذُكْسِيِّينَ، لِكَيْ يُبَارِكَهَا المَسِيحُ إلَهُنَا، ويُكَمِّلَهَا بِسَلامٍ، ويَغْفِرَ لَنَا خَطَايَانَا.",
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡⲉⲛϫⲓⲛⲑⲱⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ⲫⲁⲓ ⲛⲉⲙ ϫⲓⲛⲑⲱⲟⲩϯ ⲉ̀ϧⲟⲩⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲧⲉ ⲛⲓⲗⲁⲟⲥ ⲛ̀ⲟⲣⲑⲟⲇⲟⲝⲟⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ: ⲛ̀ⲧⲉϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "Otlobou 3an ejtema3ena haza, wa 3an kol ejtema3 lel-sho3oub el-orthodoxiyyin, likay yobarekaha el-Masih elahona, wa yokammelaha be-salam, wa yaghfer lana khatayana.",
                cop_ar: "توفه إيجين بين جين ثو أوتي إيخون فاي نيم جين ثو أوتي إيخون نيفين إنتيه ني لاؤوس إن أرثوذكسوس: هينا إنتيه بي إخرستوس بينوتي إسمو إيرو أو: إنتيف جوكو إيفول خين أو هيريني: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.84,
                speaker: "Priester",
                cop_de: "Ti-met-sham-she idolon khen ou-gok fogs evol khen pi-kosmos. Pi-satanas nem khom niven et-hou-ou n-taf : khem-khomou ovoh mathevi-o-ou : sapesit en-nen-valav-g en-kholem. Ni-skandalon nem ni-et-iri emmo-ou kor-o-ou : marou-kin enge ni-phorg em-p-tako ente ni-heresis. Ni-gagi ente tek-ekklesia eth-ou-av Epchois : em-ph-riti en-si-ou niven nem tinou mathevi-o-ou. Vol en-tou-met-gasi-hit evol : matamo-ou etou-met-gov en-kholem. Korf en-nou-phthonos nou-epivouli : nou-mankania nou-kakourgia nou-katalalia : etou-iri emmo-ou kharon. Epchois ari-tou tirou n-aprakton : ovoh gor evol em-pou-sovni. Phnouti phi etaf-gor evol em-p-sovni n-Akhitophel.",
                de: "Reiße aus die Anbetung von Götzen aller Arten in der ganzen Welt. Den Satan und all seine bösen Kräfte zermalme. Unterwerfe du ihn schnell unter unsere Füße. Entmachte du alle Zweifel und ihre Verursacher und beseitige alle Spaltungen durch die Verderbnis der Häretiker. Erniedrige du alle Feinde deiner heiligen Kirche, o Herr, wie immer, so auch jetzt. Zerbrich ihre Eitelkeit und lass sie ihre Schwachheit schnell erfahren. Vernichte ihren Neid, ihre Intrigen, ihren Wahnsinn, ihre Bosheit und ihre Verleumdungen gegen uns. Herr, mache sie alle zunichte, zerstreue ihren Rat. O Gott, der du den Rat des Achitophel zerstreut hast.",
                ar: "عِبادةُ الأوْثانِ بالكَمالِ، اقْلَعْها مِنَ العالَمِ. الشَّيْطانَ وكُلَّ قُوَّاتِهِ الشِّرِّيرَةِ اسْحَقْهُمْ وأذِلَّهُمْ، تَحْتَ أقْدامِنا سَرِيعاً. الشكوكَ وفَاعِلِيهَا ابطِلْهُمْ، ولتَنْقَضِ افتِرَاقاتُ فسَادِ البدَعِ. أعداءَ كنيسَتِكَ المُقدَّسَةِ يَا رَبُّ، مِثْلَ كُلِّ زمانٍ والآنَ أذِلَّهُمْ. حُلَّ تَعَاظُمَهُمْ، عرِّفْهُمْ ضعْفَهُمْ سَرِيعاً. أبْطِلْ حسَدَهُمْ وسِعَايَتَهُمْ وجُنُونَهُمْ وشَرَّهُمْ ونمِيمَتَهُمُ الَّتِي يصنعُونَها فينا. يَا رَبُّ اجْعَلْهُمْ كُلَّهُمْ كَلا شَيءٍ، وبدِّدْ مشورَتَهُمْ. يا اللهُ الَّذِي بدَّدَ مشورَةَ أخيِتُوفَلَ.",
                cop_cop: "Ϯⲙⲉⲧϣⲁⲙϣⲉ ⲓ̀ⲇⲱⲗⲟⲛ ϧⲉⲛ ⲟⲩϫⲱⲕ ϥⲟϫⲥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲓⲕⲟⲥⲙⲟⲥ. Ⲡⲥⲁⲧⲁⲛⲁⲥ ⲛⲉⲙ ⲭⲟⲙ ⲛⲓⲃⲉⲛ ⲉⲧϩⲱⲟⲩ ⲛ̀ⲧⲁϥ : ϧⲉⲙϧⲱⲙⲟⲩ ⲟⲩⲟϩ ⲙⲁⲑⲉⲃⲓⲱ̀ⲟⲩ : ⲥⲁⲡⲉⲥⲏⲧ ⲛ̀ⲛⲉⲛⲃⲁⲗⲁⲩϫ ⲛ̀ⲭⲱⲗⲉⲙ. Ⲛⲓⲥⲕⲁⲛⲇⲁⲗⲟⲛ ⲛⲉⲙ ⲛⲏ ⲉⲧⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ⲕⲟⲣⲱⲟⲩ : ⲙⲁⲣⲟⲩⲕⲏⲛ ⲛ̀ϫⲉ ⲛⲓⲫⲱⲣϫ ⲙ̀ⲡ̀ⲧⲁⲕⲟ ⲛ̀ⲧⲉ ⲛⲓϩⲉⲣⲉⲥⲓⲥ. Ⲛⲓϫⲁϫⲓ ⲛ̀ⲧⲉ ⲧⲉⲕⲉⲕⲕⲗⲏⲥⲓⲁ̀ ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ : ⲙ̀ⲫ̀ⲣⲏϯ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϯⲛⲟⲩ ⲙⲁⲑⲉⲃⲓⲱ̀ⲟⲩ. Ⲃⲱⲗ ⲛ̀ⲧⲟⲩⲙⲉⲧϫⲁⲥⲓϩⲏⲧ ⲉ̀ⲃⲟⲗ : ⲙⲁⲧⲁⲙⲱⲟⲩ ⲉ̀ⲧⲟⲩⲙⲉⲧϫⲱⲃ ⲛ̀ⲭⲱⲗⲉⲙ. Ⲕⲱⲣϥ ⲛ̀ⲛⲟⲩⲫⲑⲟⲛⲟⲥ ⲛⲟⲩⲉ̀ⲡⲓⲃⲟⲩⲗⲏ : ⲛⲟⲩⲙⲁⲛⲕⲁⲛⲓⲁ̀ ⲛⲟⲩⲕⲁⲕⲟⲩⲣⲅⲓⲁ̀ ⲛⲟⲩⲕⲁⲧⲁⲗⲁⲗⲓⲁ̀ : ⲉ̀ⲧⲟⲩⲓ̀ⲣⲓ ⲙ̀ⲙⲱⲟⲩ ϧⲁⲣⲟⲛ. Ⲡϭⲟⲓⲥ ⲁ̀ⲣⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲛ̀ⲁⲡⲣⲁⲕⲧⲟⲛ : ⲟⲩⲟϩ ϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡⲟⲩⲥⲟⲃⲛⲓ. Ⲫⲛⲟⲩϯ ⲫⲏ ⲉ̀ⲧⲁϥϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲙ̀ⲡ̀ⲥⲟⲃⲛⲓ ⲛ̀Ⲁ̀ⲭⲓⲧⲟⲫⲉⲗ.",
                ar_de: "3ebadat el-awthan bel-kamal, eqla3ha men el-3alam. El-shaitan wa kol qowwatehi el-sherrera es7aqhom wa azellahom, ta7ta aqdamina sari3an. El-shokouk wa fa3iliha abtelhom, wa letanqade efteraqat fasad el-beda3. A3da2a kanisateka el-moqaddasa ya Rabb, methla kol zaman wal-2an azellahom. 7ol ta3azzomahom, 3arrefhom zo3fahom sari3an. Abtel 7asadahom wa se3ayatahom wa jonounahom wa sharrahom wa namimatahom ellati yasna3ounaha fina. Ya Rabb ej3alhom kollahom kala shay2, wa badded mashwaratahom. Ya Allah ellazi baddada mashwarat Akhitophel.",
                cop_ar: "تي ميت شام شي إيدولون خين أو جوك فوكس إيفول خين بي كوسموس. بي ساتاناس نيم خوم نيفين إت هوؤو إنتاف : خيم خومو أوفوه ماثيفيوؤو : سابيسيت إن نين فالافج إن خوليم. ني سكاندالون نيم ني إت إيري إممو أو كورو أو : مارو كين إنجيه ني فورج إم إب طاكو إنتيه ني هيريسيس. ني جاجي إنتيه تيك إيكليسيا إثؤواب إبشويس : إم إف ريتي إن سيو نيفين نيم تينو ماثيفيوؤو. فول إنتو ميت جاسـي هيت إيفول : ما طامو أو إيتو ميت جوب إن خوليم. كورف إن نو فـثونوس نو إيبي فولي : نو مانكانيا نو كاكورجيا نو كاتالاليا : إيتو إيري إممو أو خارون. إبشويس أري تو تيرو إن أبراكتون : أوفوه جور إيفول إمبو سوبني. إفنوتي في إيتاف جور إيفول إم إب سوبني إن أخي توفيل.",
            },
            {
                id: 17.85,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 17.86,
                speaker: "Priester",
                cop_de: "Tonk Epchois Phnouti: marou-gor evol enge nek-gagi tirou: marou-phot evol khat-hi em-pek-ho enge ouon niven eth-mosti em-pek-ran ethouav. Pek-laos de maref-shopi khen pi-esmou e-han-ansho en-sho: nem han-ouva en-ouva: ev-iri em-pek-ou-osh.",
                de: "Erhebe dich, o Herr Gott, zerstreut sollen alle deine Feinde sein. Alle, die deinen heiligen Namen hassen, lass von deinem Angesicht fliehen. Dein Volk aber soll tausendmal tausendfachen und zehntausendmal zehntausendfachen durch deinen Segen anwachsen und deinen Willen tun.",
                ar: "قُمْ أَيُّهَا الرَّبُّ الإِلَهُ، ولْيَتَفَرَّقْ جَمِيعُ أَعْدَائِكَ، ولْيَهْرُبْ مِنْ قُدَّامِ وجْهِكَ كُلُّ مُبْغِضِي اسْمِكَ القُدُّوسِ. وأَمَّا شَعْبُكَ فَلْيَكُنْ بِالبَرَكَةِ، أُلُوفَ أُلُوفٍ، ورِبْوَاتِ رِبْوَاتٍ، يَصْنَعُونَ إِرَادَتَكَ.",
                cop_cop: "Ⲧⲱⲛⲕ Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ: ⲙⲁⲣⲟⲩϫⲱⲣ ⲉ̀ⲃⲟⲗ ⲛ̀ϫⲉ ⲛⲉⲕϫⲁϫⲓ ⲧⲏⲣⲟⲩ: ⲙⲁⲣⲟⲩⲫⲱⲧ ⲉ̀ⲃⲟⲗ ϧⲁⲧϩⲏ ⲙ̀ⲡⲉⲕϩⲟ ⲛ̀ϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲑⲙⲟⲥϯ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲃ. Ⲡⲉⲕⲗⲁⲟⲥ ⲇⲉ ⲙⲁⲣⲉϥϣⲱⲡⲓ ϧⲉⲛ ⲡⲓⲥ̀ⲙⲟⲩ ⲉ̀ϩⲁⲛⲁⲛϣⲟ ⲛ̀ϣⲟ: ⲛⲉⲙ ϩⲁⲛⲟⲩⲃⲁ ⲛ̀ⲟⲩⲃⲁ: ⲉⲩⲓ̀ⲣⲓ ⲙ̀ⲡⲉⲕⲟⲩⲱϣ.",
                ar_de: "Qom ayyoha el-Rabb el-elah, walyatafarraq jami3 a3da2ek, wal-yahrub min qoddami wajhek kol mobghedi esmeka el-qoddous. Wa amma sha3bok falyakon bel-baraka, aloufa alouf, wa ribwat ribwat, yasna3ouna iradatak.",
                cop_ar: "تونك إبشويس إفنوتي: مارو جور إيفول إنجيه نيك جاجي تيرو: مارو فوت إيفول خات هي إم بيك هو إنجيه أو أون نيفين إثموستي إمبيك ران إثؤواب. بيك لاؤوس ديه ماريف شوبي خين بي إسمو إيهان آنشو إنشو: نيم هان أوفا إن أوفا: إيف إيري إمبيك أوأوش.",
            },
            {
                id: 18,
                speaker: "Diakon",
                cop_de: "I-kathe-meni anastite.",
                de: "Wer sitzt, stehe auf!",
                ar: "أَيُّهَا الجُلُوسُ قِفُوا",
                cop_cop: "Ⲓⲕⲁⲑⲏⲙⲉⲛⲓ ⲁ̀ⲛⲁⲥⲧⲏⲧⲉ.",
                ar_de: "Ayyoha el-jolous qifou.",
                cop_ar: "إي كاثي ميه ني أناسثيتيه",
            },
            {
                id: 18.01,
                speaker: "Priester",
                cop_de: "Vol en-ni-et-sonh evol: nohem en-ni-et-khen ni-anagki.",
                de: "Befreie die Gefangenen, rette, die in Nöten sind.",
                ar: "حُلَّ المَرْبُوطِينَ، خَلِّصِ الَّذِينَ فِي الشَّدَائِدِ.",
                cop_cop: "Ⲃⲱⲗ ⲛ̀ⲛⲏⲉⲧⲥⲱⲛϩ ⲉ̀ⲃⲟⲗ : ⲛⲟϩⲉⲙ ⲛ̀ⲛⲏⲉⲧⲧϧⲉⲛ ⲛⲓⲁ̀ⲛⲁⲅⲕⲏ.",
                ar_de: "7oll el-marboutin, khalles el-lazina fel-shada2ed.",
                cop_ar: "فول إن ني إيت سونه إيفول: نوهم إن ني إيت خين ني أناغكي.",
            },
            {
                id: 18.02,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 18.03,
                speaker: "Priester",
                cop_de: "Ni-et-hoker mat-si-o-ou: ni-et-oi en-kougi en-hit man-om-ti no-ou.",
                de: "Sättige die Hungrigen, tröste die Kleinmütigen.",
                ar: "الجِيَاعَ اشْبِعْهُمْ، صِغِيرِي القُلُوبِ عَزِّهِمْ.",
                cop_cop: "Ⲛⲏⲉⲧϩⲟⲕⲉⲣ ⲙⲁⲧ̀ⲥⲓⲱⲟⲩ : ⲛⲏⲉⲧⲟⲓ ⲛ̀ⲕⲟⲩϫⲓ ⲛ̀ϩⲏⲧ ⲙⲁⲛⲟⲙϯ ⲛⲱⲟⲩ.",
                ar_de: "El-jiya3 eshbe3hom, saghiri el-qoloub 3azzehom.",
                cop_ar: "ني إيت هوكر ماتسـي أو أو: ني إيت أوي إن كوجي إن هيت مان أومتي نو أو.",
            },
            {
                id: 18.04,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 18.05,
                speaker: "Priester",
                cop_de: "Ni-et-av-hei mataho-ou eratou: ni-et-ohi eratou matagrow-ou.",
                de: "Richte auf die Gefallenen. Die Aufrichtigen festige.",
                ar: "السَّاقِطُونَ أَقِمْهُمْ، والقِيَامَ ثَبِّتْهُمْ.",
                cop_cop: "Ⲛⲏⲉ̀ⲧⲁⲩϩⲉⲓ ⲙⲁⲧⲁϩⲱⲟⲩ ⲉ̀ⲣⲁⲧⲟⲩ : ⲛⲏⲉⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙⲁⲧⲁϫⲣⲱⲟⲩ.",
                ar_de: "El-saqetoun aqemhom, wal-qiyama thabbethom.",
                cop_ar: "ني إيتاف هي ماطاهو أو إيرات أو: ني إت أوهي إيرات أو ماطاجرؤو.",
            },
            {
                id: 18.06,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 18.07,
                speaker: "Priester",
                cop_de: "Ni-et-av-sorem matastho-o-ou: ani-tou tirou ekhoun e-ph-moit ente pek-ougai.",
                de: "Hole die Verlorenen zurück und führe sie alle auf den Weg deiner Erlösung.",
                ar: "الضَّالُّونَ رُدَّهُمْ، أَدْخِلْهُمْ جَمِيعاً إِلَى طَرِيقِ خَلاصِكَ.",
                cop_cop: "Ⲛⲏⲉ̀ⲧⲁⲩⲥⲱⲣⲉⲙ ⲙⲁⲧⲁⲥⲑⲟⲱⲟⲩ : ⲁ̀ⲛⲓⲧⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲫ̀ⲙⲱⲓⲧ ⲛ̀ⲧⲉ ⲡⲉⲕⲟⲩϫⲁⲓ.",
                ar_de: "El-zalloun roddahom, adkhelhom jami3an ela tariq khalasak.",
                cop_ar: "ني إيتاف سوريم ماطاسثو أو أو: أني تو تيرو إيخون إي إفمويت إنتيه بيك أوجاي.",
            },
            {
                id: 18.10,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 18.11,
                speaker: "Priester",
                cop_de: "Opou nem pek-laos: anon de hon sotten evol-khen nen-novi.",
                de: "Zähle sie zu deinem Volk und erlöse auch uns von unseren Sünden.",
                ar: "عُدَّهُمْ مَعَ شَعْبِكَ، ونَحْنُ أَيضاً إِنْقِذْنَا مِنْ خَطَايَانَا.",
                cop_cop: "Ⲟⲡⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲗⲁⲟⲥ : ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ ⲥⲟⲧⲧⲉⲛ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ.",
                ar_de: "3oddahom ma3a sha3bek, wa nahnou ayzan enqezna min khatayana.",
                cop_ar: "أوبو نيم بيك لاؤوس: أنون ديه هون صوطين إيفول خين نين نوفي.",
            },
            {
                id: 18.12,
                speaker: "Volk",
                cop_ar: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_de: "Kyrie eleyson",
            },
            {
                id: 18.12,
                speaker: "Priester",
                cop_de: "Ek-oi en-ref-rois nem ref-skepi egon kata hob niven.",
                de: "Sei unser Wächter und unser Beschützer in allem.",
                ar: "صَائِراً حَارِساً وسَاتِراً عَلَيْنَا فِي كُلِّ شَيْءٍ",
                cop_cop: "Ⲉⲕⲟⲓ ⲛ̀ⲣⲉϥⲣⲱⲓⲥ ⲛⲉⲙ ⲣⲉϥⲥⲕⲉⲡⲏ ⲉ̀ϫⲱⲛ ⲕⲁⲧⲁ ϩⲱⲃ ⲛⲓⲃⲉⲛ.",
                ar_de: "Sa2eran haresan wa sateran 3alayna fi kol shay2.",
                cop_ar: "إك أوي إن ريف رويس نيم ريف سكيبـي إيجون كاتا هوب نيفين",
            },
            {
                id: 19,
                speaker: "Diakon",
                cop_de: "Is anatolas vlep sate.",
                de: "Schaut nach Osten!",
                ar: "إلى الشرق أنظروا.",
                cop_cop: "Ⲓⲥ ⲁ̀ⲛⲁⲧⲟⲗⲁⲥ ⲃ̀ⲗⲉⲯⲁⲧⲉ.",
                ar_de: "Ela el-sharq onzorou.",
                cop_ar: "إس أناطولاس إفليب صاتيه",
            },
            {
                id: 20,
                speaker: "Priester",
                cop_ar: "إنثوك غار بـيه إفنوتي إتسابـشوي إن أرشي نيفين: نيم إكسوزيا نيفين نيم جوم نيفين نيم ميت فويس نيفين: نيم ران نيفين إيت أو إير أونومازين إممو أو أومونون خين باي إينيه، أللا نيم خين بـإثني أو. إنثوك غار بـيه إت أوهي إيرات أو ناهراك إنجيه ني آن آنشو إنشو نيم ني آن أنوفا إن أوفا: إنتيه ني أنجيلوس نيم ني أرشي أنجيلوس إثؤواب إيف شيمشي ناك. إنثوك غار بـيه إت أوهي إيرات أو ناهراك إنجيه بيك زوون إسناي إتطايؤوت إيماشـو: نا بي سو أو إنتينه أوفوه إت أوش إمفال: إن سيرافيم أوفوه إن شيروفيم. خين إسناي مين إنتينه إيف هوبس إن نو هو: إثفيه تيك ميت نوتي إن آت هير ثيورين إمموس أوفوه إن آت إشموكميك إيروس: خين إسناي ديه إيف هوبس إن نو فالافج: إيف هيل ديه خين بيكيه إسناي. إن سيو مين غار نيفين سي إير آغيازين إمموك إنجيه أوأون نيفين. أللا نيم أوأون نيفين إيت إير آغيازين إمموك: شيب إمبين آغيازموس إنطوتين هون إبشويس: إنهوس إيروك نيمو أو إنجو إمموس.",
                de: "Denn du bist es, Gott, der über jeder Herrschaft, jeder Macht, jeder Kraft, jeder Hoheit und über jedem Namen steht, der genannt werden wird, nicht nur in dieser Zeit, sondern auch in der zukünftigen Welt. Du bist es, vor dem tausendmal tausend und zehntausendmal zehntausend heilige Engel und Erzengel stehen und dienen. Du bist es, vor dem deine beiden guten Wesen stehen, die sechs Flügel und viele Augen haben, die Seraphim und Cherubim. Mit zwei Flügeln bedecken sie ihre Gesichter wegen deiner Göttlichkeit, die nicht erschaubar und denkbar ist. Mit zwei Flügeln bedecken sie ihre Beine, mit den anderen beiden fliegen sie. Denn zu jeder Zeit heilige dich jeder Mensch. Aber mit jedem, der dich heiligt, nimm unsere Lobpreisung von uns an, o Herr, denn wir loben dich mit ihnen und sprechen:",
                ar: "للأَنَّكَ أَنْتَ هُوَ اللهُ الَّذِي فَوْقَ كُلِّ رِئَاسَةٍ، وكُلِّ سُلْطَانٍ، وكُلِّ قُوَّةٍ، وكُلِّ سِيَادَةٍ، وكُلِّ اسْمٍ يُسَمَّى، ليس فِي هَذا الدَّهْرِ فقط، بل وفي الآتي. أَنْتَ الَّذِي يَقُومُ أَمَامَكَ، أُلُوفُ أُلُوفٍ ورِبْوَاتُ رِبْوَاتِ المَلائِكَةِ، ورُؤَسَاءُ المَلائِكَةِ المُقَدَّسِينَ يَخْدُمُونَكَ. أَنْتَ الَّذِي يَقُومُ امامك مخلوقاتك الحيَّان الكريمان جداً، ذَوَا السِّتَّةِ أَجْنِحَةٍ، الكثيرا الأَعْيُنِ، السِيرافيمُ والشاروبيمُ. فبِجَناحَيْنِ يُغَطُّونَ وجُوهَهُمْ، مِنْ أَجْلِ لاهُوتِكَ الَّذِي لا يُسْتَطَاعُ النَّظَرُ إليهِ ولا التَّفَكُّرُ فيهِ، وبِاثْنَيْنِ يُغَطُّونَ أَرْجُلَهُمْ ويطيرونَ بالاثْنَيْنِ الآخَرَيْنِ. لأَنْ فِي كُلِّ زَمَانٍ يُقَدِّسُكَ كُلُّ أَحَدٍ. لكن مَعَ كُلِّ مَنْ يُقَدِّسُكَ، اقْبَلْ تَقْدِيسَنَا مَنَّا نَحْنُ أَيْضاً يَا رَبُّ، إِذْ نُسَبِّحُكَ مَعَهُمْ قَائِلِينَ:",
                cop_cop: "Ⲛⲑⲟⲕ ⲅⲁⲣ ⲡⲉ Ⲫⲛⲟⲩϯ ⲉⲧⲥⲁⲡ̀ϣⲱⲓ ⲛ̀ⲁⲣⲭⲏ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲉⲝⲟⲩⲥⲓⲁ̀ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ϫⲟⲙ ⲛⲓⲃⲉⲛ ⲛⲉⲙ ⲙⲉⲧⲃⲟⲓⲥ ⲛⲓⲃⲉⲛ: ⲛⲉⲙ ⲣⲁⲛ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲟⲩⲉⲣⲟⲛⲟⲩⲙⲁⲍⲓⲛ ⲙ̀ⲙⲱⲟⲩ ⲟⲩⲙⲟⲛⲟⲛ ϧⲉⲛ ⲡⲁⲓⲉ̀ⲛⲉϩ, ⲁⲗⲗⲁ ⲛⲉⲙ ϧⲉⲛ ⲡⲉⲑⲛⲏⲟⲩ. Ⲛⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲉ̀ⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛⲁϩⲣⲁⲕ ⲛ̀ϫⲉ ⲛⲓⲁ̀ⲛⲁⲛϣⲟ ⲛ̀ϣⲟ ⲛⲉⲙ ⲛⲓⲁ̀ⲛⲁⲛⲟⲩⲃⲁ ⲛ̀ⲟⲩⲃⲁ: ⲛ̀ⲧⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲛⲉⲙ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲩϣⲉⲙϣⲓ ⲛⲁⲕ. Ⲛⲑⲟⲕ ⲅⲁⲣ ⲡⲉ ⲉ̀ⲧⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲛⲁϩⲣⲁⲕ ⲛ̀ϫⲉ ⲡⲉⲕⲍⲱⲟⲛ ⲥ̀ⲛⲁⲩ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲉ̀ⲙⲁϣⲱ: ⲛⲁ ⲡⲓⲥⲟⲟⲩ ⲛ̀ⲧⲉⲛϩ ⲟⲩⲟϩ ⲉⲧⲟϣ ⲙ̀ⲃⲁⲗ: ⲛ̀Ⲥⲉⲣⲁⲫⲓⲙ ⲟⲩⲟϩ ⲛ̀Ⲭⲉⲣⲟⲩⲃⲓⲙ. Ϧⲉⲛ ⲥ̀ⲛⲁⲩ ⲙⲉⲛ ⲛ̀ⲧⲉⲛϩ ⲉⲩϩⲱⲃⲥ ⲛ̀ⲛⲟⲩϩⲟ: ⲉⲑⲃⲉ ⲧⲉⲕⲙⲉⲧⲛⲟⲩϯ ⲛ̀ⲁⲧϩⲉⲣⲑⲉⲱⲣⲓⲛ ⲙ̀ⲙⲟⲥ ⲟⲩⲟϩ ⲛ̀ⲁⲧϣ̀ⲙⲟⲕⲙⲉⲕ ⲉ̀ⲣⲟⲥ: ϧⲉⲛ ⲥ̀ⲛⲁⲩ ⲇⲉ ⲉⲩϩⲱⲃⲥ ⲛ̀ⲛⲟⲩⲃⲁⲗⲁⲩϫ: ⲉⲩϩⲏⲗ ⲇⲉ ϧⲉⲛ ⲡⲓⲕⲉⲥ̀ⲛⲁⲩ. Ⲛⲥⲏⲟⲩ ⲙⲉⲛ ⲅⲁⲣ ⲓⲃⲉⲛ ⲥⲉⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟⲕ ⲛ̀ϫⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ. Ⲁⲗⲗⲁ ⲛⲉⲙ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧⲉⲣⲁ̀ⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟⲕ: ϣⲓⲡ ⲙ̀ⲡⲉⲛⲁ̀ⲅⲓⲁⲥⲙⲟⲥ ⲛ̀ⲧⲟⲧⲉⲛ ϩⲱⲛ Ⲡϭⲟⲓⲥ: ⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ ⲛⲉⲙⲱⲟⲩ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.",
                ar_de: "Le2annaka anta houwa Allah ellazi fawqa kol re2asah, wa kol soltan, wa kol qowwah, wa kol siyadah, wa kol esm yosamma, laysa fi haza el-dahr faqat, bal wa fel ati. Anta ellazi yaqoum amamaka, alouf alouf wa ribwat ribwat el-mala2ekah, wa ro2asa2 el-mala2ekah el-moqaddasin yakhdomounak. Anta ellazi yaqoum amamaka makhluqatak el-hayyan el-kariman jiddan, zawa el-settah ajneha, el-kathira el-a3yon, el-seraphim wal-charouvim. Fabijanahayn yoghattoun wojouhahom, min ajl lahouteka ellazi la yostata3 el-nazar elayhi wala el-tafakkor fihi, wa be-ethnayn yoghattoun arjolahom wa yatiroun bel-ethnayn el-akharayn. Le2an fi kol zaman yoqaddesoka kol ahad. Laken ma3a kol man yoqaddesoka, eqbal taqdisana menna nahnou ayzan ya Rabb, ez nosabbe7oka ma3ahom qa2ilin:",
                cop_de: "Enthok gar pe Phnouti et-sapshoi n-arkhi niven: nem exousia niven nem gom niven nem met-vois niven: nem ran niven et-ou-er-onomazin emmou ou-monon khen pai-eneh, alla nem khen p-eth-ni-ou. Enthok gar pe et-ohi eratou nahrak enge ni-an-ansho en-sho nem ni-an-anouva en-ouva: ente ni-angelos nem ni-arkhi-angelos eth-ou-av ev-shemshi nak. Enthok gar pe et-ohi eratou nahrak enge pek-zo-on en-snay et-taio-out emasho: na pi-so-ou n-tenh ovoh et-osh em-val: en-Seraphim ovoh en-Cherouvim. Khen snay men n-tenh ev-hovs en-nou-ho: ethve tek-met-nouti n-at-her-theorin emmos ovoh n-at-shmokmek eros: khen snay de ev-hovs en-nou-valavg: ev-hil de khen pi-ke-snay. En-si-ou men gar niven se-er-agiazin emmok enge ouon niven. Alla nem ouon niven et-er-agiazin emmok: ship em-pen-agiasmos entoten hon Epchois: en-hos erok nem-o-ou en-go emmos.",
            },
            {
                id: 21,
                speaker: "Diakon",
                cop_ar: "بروسـخومين.",
                de: "Wir hören.",
                ar: "فَلْنُنْصِتْ.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ.",
                ar_de: "Fal-nonsit.",
                cop_de: "Proskhomen.",
            },
            {
                id: 22,
                speaker: "Volk",
                cop_de: "Agios agios agios: Kyrios sabaoth: pliris o ouranos ke i gi: tis agias sou doxis.",
                de: "Heilig, heilig, heilig ist der Herr der Heerscharen, der Himmel und die Erde sind erfüllt von deiner heiligen Herrlichkeit.",
                ar: "قُدُّوسٌ، قُدُّوسٌ، قُدُّوسٌ، رَبُّ الصَّباؤوت، السَّماءُ والأرْضُ مَمْلُوءَتَانِ مِنْ مَجْدِكَ الأقْدَسِ.",
                cop_cop: "Ⲁⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: Ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ: ⲡ̀ⲗⲏⲣⲏⲥ ⲟ̀ ⲟⲩⲣⲁⲛⲟⲥ ⲕⲉ ⲏ̀ ⲅⲏ: ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲥⲟⲩ ⲇⲟⲝⲏⲥ.",
                ar_de: "Qoddous, Qoddous, Qoddous, Rabb el-Saba2out, el-sama2 wal-ard mamlou2atan min majdeka el-aqdas.",
                cop_ar: "آجيوس آجيوس آجيوس: كيريوس صباؤوت: بليريس أو أورانوس كيه إي جي: تيس آجياس سو دوكسيس.",
            },
            {
                id: 22.1,
                speaker: "Priester",
                cop_de: "Ek-enoukh-de egoy em-pek-shen-hysopon eie-touvo: ek-erakht eie-ouvash ehote ou-khion.",
                de: "(Still) Du wirst mich mit Ysop besprengen, und ich werde rein sein, du wirst mich reinwaschen, und ich werde weißer als Schnee sein.",
                ar: "(سرًا) تنضحُ عليَّ بزوفاك فأطهرُ، تغسلني فأبيضُّ أكثرَ مِنَ الثلجِ.",
                cop_cop: "Ⲉⲕⲉ̀ⲛⲟⲩⲭⲇ ⲉ̀ϫⲱⲓ ⲙ̀ⲡⲉⲕϣⲉⲛϩⲩⲥⲱⲡⲟⲛ ⲉⲓⲉ̀ⲧⲟⲩⲃⲟ: ⲉⲕⲉ̀ⲣⲁϧⲧ ⲉⲓⲉ̀ⲟⲩⲃⲁϣ ⲉ̀ϩⲟⲧⲉ ⲟⲩⲭⲓⲱⲛ.",
                ar_de: "(Serran) Tandaho 3alayya be-zofaka fa-at-hor, taghselni fa-abyaddo akthara mena el-thalj.",
                cop_ar: "إكيه نوخد إيجوي إمبيك شين هيسوبون إييه طوفو: إكيه راخت إييه أوفاش إيهوطي أو خيون.",
            },
            {
                id: 22.2,
                speaker: "Priester",
                cop_de: "Ek-ethri-sotem e-ou-thelel nem ou-ounof: eve-thelel emmou enge ni-kas et-thevi-i-out.",
                de: "(Still) Du wirst mich Jubel und Freude hören lassen, die erniedrigten Gebeine werden jubeln.",
                ar: "(سرًا) تُسْمِعُنِي سُرُوراً وفَرَحاً فَتَبْتَهِجُ العِظَامُ المُتَوَاضِعَةُ.",
                cop_cop: "Ⲉⲕⲉ̀ⲑ̀ⲣⲓⲥⲱⲧⲉⲙ ⲉ̀ⲟⲩⲑⲉⲗⲏⲗ ⲛⲉⲙ ⲟⲩⲟⲩⲛⲟϥ: ⲉⲩⲉ̀ⲑⲉⲗⲏⲗ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲛⲓⲕⲁⲥ ⲉⲧⲑⲉⲃⲓⲏⲟⲩⲧ.",
                ar_de: "(Serran) Tosme3oni sorouran wa farahan fatabtahigo el-3ezamo el-motawade3ah.",
                cop_ar: "إيكيه إثريه سوتم إيه أو ثيليل نيم أو أونوف: إيفيه ثيليل إممو إنجيه ني كاس إت ثيفـي إي أوت.",
            },
            {
                id: 22.3,
                speaker: "Priester",
                cop_de: "Tinaia tot evol-khen pethouav: ovoh enta-koti e-pek-man-ersho-oushi Epchois: e-ep-gin-ta-sotem e-ep-es-rou ente pek-esmou: Allelouia.",
                de: "(Still) Unter Unschuldigen will ich meine Hände waschen, und mich um deinen Altar herum aufhalten, Herr, um die Stimme des Lobes zu hören und alle deine Wundertaten zu erzählen. Halleluja.",
                ar: "(سراً) أغْسِلُ يَدَيَّ بالنَّقَاوَةِ، وأطُوفُ بمَذْبَحِكَ يَا رَبُّ، لكَيْمَا أسْمَعَ صَوْتَ تَسْبِيحِكَ، هَلِّليْلُويَا.",
                cop_cop: "Ϯⲛⲁⲓⲁ ⲧⲟⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲑⲟⲩⲁⲃ : ⲟⲩⲟϩ ⲛ̀ⲧⲁⲕⲱϯ ⲉ̀ⲡⲉⲕⲙⲁⲛ̀ⲉⲣϣⲱⲟⲩϣⲓ Ⲡϭⲟⲓⲥ : ⲉ̀ⲡ̀ϫⲓⲛⲧⲁⲥⲱⲧⲉⲙ ⲉ̀ⲡ̀ⲥ̀ⲣⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲕⲥ̀ⲙⲟⲩ : Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ̀.",
                ar_de: "(Serran) Aghselo yadayya bel-naqawah, wa atoufo be-mazba7eka ya Rabb, lakayma asma3a sawta tasbe7aka, Halleluia.",
                cop_ar: "تي نايا طوط إيفول خين بيثؤواب: أوفوه إنطا كوتي إي بيك مان إيرشو أوشي إبشويس: إي إبجين طا سوتم إي إب إيس رو إنتيه بيك إسمو: آلليلويـا.",
            },
            {
                id: 23,
                speaker: "Priester",
                cop_de: "Agios agios agios",
                de: "Heilig Heilig Heilig",
                ar: "قُدُّوسٌ. قُدُّوسٌ. قُدُّوسٌ",
                cop_cop: "Ⲁⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ",
                ar_de: "Qoddous, Qoddous, Qoddous",
                cop_ar: "آجيوس، آجيوس، آجيوس",
            },
            {
                id: 24,
                speaker: "Priester",
                cop_ar: "خؤواب إبشويس صباؤوت : إتفي نيم إبكاهي ميه إيفول خين بيك أو أوؤو إثؤواب إبشويس بينوتي. آليثوس إتفي نيم إبكاهي ميه إيفول خين بيك أو أوؤو إثؤواب. هيتين بيك مونو جينيس إن شيري بينشويس أوفوه بينوتي أوفوه بين سوتير أوفوه بين أورو تيرين إيسوس بي إخرستوس. ماه تاي كيه ثيسيا إنطاك ثاي إبشويس خين بي إسمو. بي إيفول هيطوطك هيتين إبجيني إهريي إيجوس إنتيه بيك إبنيفما إثؤواب.",
                de: "Heilig bist du Herr der Heerscharen, der Himmel und die Erde sind erfüllt von deiner heiligen Herrlichkeit. O Herr, unser Gott, der Himmel und die Erde sind wahrhaftig erfüllt von deiner heiligen Herrlichkeit, durch deinen eingeborenen Sohn, unseren Herrn, Gott, Erlöser und unser aller König Jesus Christus: Erfülle diese Opfergabe, die dir gehört, o Herr, mit dem Segen, der von dir ist. Durch die Herabkunft deines Heiligen Geistes auf sie. ",
                ar: "قُدُّوسٌ رَبُّ الجُنُودِ، السَّمَاءُ والأَرْضُ مَمْلُوءَتَانِ مِنْ مَجْدِكَ الأَقْدَسِ، أَيُّهَا الرَّبُّ إِلَهُنَا. بِالحَقِيقَةِ السَّمَاءُ والأَرْضُ مَمْلُوءَتَانِ مِنْ مَجْدِكَ الأَقْدَسِ. مِنْ قِبَلِ ابْنِكَ الوَحِيدِ رَبِّنَا وَإِلَهِنَا ومُخَلِّصِنَا ومَلِكِنَا كُلِّنَا يَسُوعَ المَسِيحِ. اِمْلأ هَذِهِ الصَّعِيدَةَ الَّتِي لَكَ يَا رَبُّ بِالبَرَكَةِ.الَّتِي مِنْ قِبَلِكَ بِحُلُولِ رُوحِكَ القُدُّوسِ عَلَيْهَا.",
                cop_cop: "Ⲭⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ ⲥⲁⲃⲁⲱⲑ : ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲉⲑⲟⲩⲁⲃ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ. Ⲁⲗⲏⲑⲱⲥ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕⲱ̀ⲟⲩ ⲉⲑⲟⲩⲁⲃ. Ϩⲓⲧⲉⲛ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲉⲛⲟⲩⲣⲟ ⲧⲏⲣⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ⲙⲁϩ ⲧⲁⲓⲕⲉⲑⲩⲥⲓⲁ̀ ⲛ̀ⲧⲁⲕ ⲑⲁⲓ Ⲡϭⲟⲓⲥ ϧⲉⲛ ⲡⲓⲥ̀ⲙⲟⲩ. 1. Ⲡⲓⲉ̀ⲃⲟⲗ ϩⲓⲧⲟⲧⲕ ϩⲓⲧⲉⲛ ⲡ̀ϫⲓⲛⲓ̀ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲥ ⲛ̀ⲧⲉ Ⲡⲉⲕⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "Qoddous Rabb el-Jonoud, el-sama2 wal-ard mamlou2atan min majdeka el-aqdas, ayyoha el-Rabb elahona. Bel-haqiqa el-sama2 wal-ard mamlou2atan min majdeka el-aqdas. Min qibal ebneka el-wahid Rabbena wa elahona wa mokhallisena wa malikena kollena Yasou3 el-Masih. Emla2 hazihi el-sa3ida ellati laka ya Rabb bel-baraka. Ellati min qibaleka be-houloul rouheka el-qoddous 3alayha.",
                cop_de: "Khouav Epchois sabaoth : t-phe nem ep-kahi meh evol khen pek-o-ou ethouav Epchois Pennouti. Alithos t-phe nem ep-kahi meh evol khen pek-o-ou ethouav. Hiten pek-monogenis en-Shiri Penchois ovoh Pennouti ovoh Pen-sotir ovoh pen-ouro tiren Isous Pi-khristos. Mah tai-ke-thysia entak thai Epchois khen pi-esmou. Pi-evol hitotk hiten ep-gini ehrii egos ente Pek-pnevma ethouav.",
            },
            {
                id: 25,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "Ⲁⲙⲏⲛ.",
                ar_de: "Haqan",
                cop_de: "Amyn.",
            },
            {
                id: 26,
                speaker: "Priester",
                cop_ar: "أوفوه خين أو إسمو إيكيه إسمو",
                de: "Mit dem Segen segne sie",
                ar: "وبالبركة بارك",
                cop_cop: "Ⲟⲩⲟϩ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲟⲩ ⲉⲕⲉ̀ⲥ̀ⲙⲟⲩ.",
                ar_de: "Wa bel-baraka barek.",
                cop_de: "Ovoh khen ou-esmou ek-e-esmou.",
            },
            {
                id: 27,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "Ⲁⲙⲏⲛ.",
                ar_de: "Haqan",
                cop_de: "Amyn.",
            },
            {
                id: 28,
                speaker: "Priester",
                cop_ar: "وفوه خين أو طوفو إيكيه طوفو",
                de: "Und mit der Heiligung heilige sie",
                ar: "وبالتقديس قدس",
                cop_cop: "Ⲟⲩⲟϩ ϧⲉⲛ ⲟⲩⲧⲟⲩⲃⲟ ⲉⲕⲉ̀ⲧⲟⲩⲃⲟ.",
                ar_de: "Wa bel-taqdis qaddes.",
                cop_de: "Ovoh khen ou-touvo ek-e-touvo.",
            },
            {
                id: 29,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "Ⲁⲙⲏⲛ.",
                ar_de: "Haqan",
                cop_de: "Amyn.",
            },
            {
                id: 30,
                speaker: "Priester",
                cop_ar: "ناي دورون إنطاك إتطايؤوت : إيتير شورب إنخي إهريي إمبيك إمثو : باي أويك نيم باي آفوط. جيه إنثوف بيك مونو جينيس إن شيري : بينشويس أوفوه بينوتي أوفوه بين سوتير أوفوه بين أورو تيرين إيسوس بي إخرستوس. خين بي إيجوره إيتيف نا تيف إنخيتف إي شيب إمكاه إهريي إيجين نين نوفي. نيم بي مو إيتاف شوبف إيروف إيفول هيطوطف خين بيف أوأوش إممين إمموف إهريي إيجون تيرين.",
                de: "Diese deine heiligen Opfergaben, die wir begonnen haben, vor dich zu legen, dieses Brot und diesen Kelch. Denn dein einziger Sohn, unser Herr, Gott und Erlöser und unser aller König Jesus Christus! In der Nacht, in der er sich selbst hingab, um für unsere Sünden zu leiden und auch den Tod, den er aus sich selbst aus seinem eigenen Willen für uns alle annahm",
                ar: "قَرَابِينَكَ هَذِهِ المُكَرَّمَةُ، السَّابِقُ وَضْعُهَا أَمَامَكَ، هَذَا الخُبْزُ وهَذِهِ الكَأسُ. لأَنَّ ابْنَكَ الوَحِيدَ، رَبَّنَا وإِلَهَنَا ومُخَلِّصَنَا ومَلِكَنَا كُلَّنَا يَسُوعَ المَسِيحَ. فِي اللَّيْلَةِ الَّتِي سَلَّمَ ذَاتَهُ فِيهَا لِيَتَأَلَّمَ عَن خَطَايَانَا. والمَوْتَ الَّذِي قَبِلَهُ بِذَاتِهِ، بِإِرَادَتِهِ وَحدَهُ عَنَّا كُلِّنَا.",
                cop_cop: "Ⲛⲁⲓⲇⲱⲣⲟⲛ ⲛ̀ⲧⲁⲕ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲉ̀ⲧⲉⲣϣⲟⲣⲡ ⲛ̀ⲭⲏ ⲉ̀ϩ̀ⲣⲏⲓ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ : ⲡⲁⲓⲱⲓⲕ ⲛⲉⲙ ⲡⲁⲓⲁ̀ⲫⲟⲧ. Ϫⲉ ⲛ̀ⲑⲟϥ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ : Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲉⲛⲟⲩⲣⲟ ⲧⲏⲣⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ. Ϧⲉⲛ ⲡⲓⲉ̀ϫⲱⲣϩ ⲉ̀ⲧⲉϥⲛⲁⲧⲏⲓϥ ⲛ̀ϧⲏⲧϥ ⲉ̀ϣⲉⲡⲙ̀ⲕⲁϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲛⲟⲃⲓ. Ⲛⲉⲙ ⲡⲓⲙⲟⲩ ⲉ̀ⲧⲁϥϣⲟⲡϥ ⲉ̀ⲣⲟϥ ⲉ̀ⲃⲟⲗϩⲓⲧⲟⲧϥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲧⲏⲣⲉⲛ.",
                ar_de: "Qarabineka hazihi el-mokarramah, el-sabiq wad3oha amamaka, haza el-khobz wa hazihi el-ka2s. : Le2an ebneka el-wahid, Rabbena wa elahona wa mokhallisena wa malikena kollena Yasou3 el-Masih. Fel lailati ellati sallama zataho fiha leyata-allama 3an khatayana. Wal mawta ellazi qabelaho be-zatehi, be-iradatehi wahdaho 3anna kollena.",
                cop_de: "Nai-doron entak et-taio-out : eter-shorp en-khi ehrii em-pek-emtho : pai-oik nem pai-aphot. Ge enthof pe-kmonogenis en-Shiri : Penchois ovoh Pennouti ovoh Pen-sotir ovoh pen-ouro tiren Isous Pi-khristos. Khen pi-e-gorh etef-na-tif enkhitf e-shep-em-kah ehrii egen nen-novi. Nem pi-mou etaf-shopf erof evol-hitotf khen pef-ou-osh mmin mmof ehrii egon tiren.",
            },
            {
                id: 31,
                speaker: "Volk",
                cop_ar: "آليثوس بيستيف أومين",
                de: "Wir glauben.",
                ar: "نؤمن",
                cop_cop: "Ⲁⲗⲏⲑⲱⲥ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ.",
                cop_de: "Alithos pistev-omen.",
                ar_de: "No2men."
            },
            {
                id: 32,
                speaker: "Priester",
                cop_ar: "أفتشي إن أو أويك إيجين نيف جيج إثؤواف إن آتتشنى أووه إن أتثوليف أووه إم مكاريون أووه أنريف تنخو",
                de: "Er nahm Brot in seine reinen, makellosen, unbefleckten, seligen und lebensspendenden Hände.",
                ar: "أخذ خبزاً على يديه الطاهرتين اللتين بلا عيب ولا دنس الطوباويتين المحييتين",
                cop_cop: "Ⲁϥϭⲓ ⲛ̀ⲟⲩⲱⲓⲕ ⲉ̀ϫⲉⲛ ⲛⲉϥϫⲓϫ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲁⲧϭⲛⲁⲩ ⲟⲩⲟϩ ⲛ̀ⲁⲧⲑⲱⲗⲉⲃ ⲟⲩⲟϩ ⲙ̀ⲙⲁⲕⲁⲣⲓⲟⲛ ⲟⲩⲟϩ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ",
                cop_de: "Afchi en ou oik ejen nef jij ethowab en at-achni owoh en at-tholev owoh em makarion owoh en ref tankho.",
                ar_de: "Akhaza khobzan 3ala yadayhi el tahiratayn allatayn bela 3ayb wala danas el tobawiyatayn el mo7yi atayn."
            },

            {
                id: 33,
                speaker: "Volk",
                cop_ar: "تين ناهتى جيه فاى بيه خين أو ميثمى: آمين.",
                de: "Wir glauben, dass dieses in Wahrheit so ist. Amen.",
                ar: "نؤمن أن هذا هو بالحقيقة: آمين.",
                cop_cop: "Ⲧⲉⲛⲛⲁϩϯ ϫⲉ ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ten nahti je fai pe khen ou methmi: Amyn.",
                ar_de: "No2men an haza howa bel 7aqiqa: Amin."
            },

            {
                id: 34,
                speaker: "Priester",
                cop_ar: "أفجوشت إى إبشوى إى إتفى هاروك فيئتيفوف إنيوت إفنوتى أووه إفنيب إنتى أوؤن نيفين",
                de: "Er blickte hinauf zum Himmel zu dir, der sein Vater ist , Gott und Meister eines jeden.",
                ar: "ونظر إلى فوق نحو السماء إليك يالله أباه وسيد كل أحد",
                cop_cop: "Ⲁϥϫⲟⲩϣⲧ ⲉ̀ⲡ̀ϣⲱⲓ ⲉ̀ⲧ̀ⲫⲉ ϩⲁⲣⲟⲕ Ⲫⲏⲉⲧⲉϥⲓⲱⲧ Ⲫⲛⲟⲩϯ ⲟⲩⲟϩ Ⲫⲛⲏⲃ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ.",
                cop_de: "Af-jousht e-epshoi e-etfe harok fi-etef-yot Ef-nouti owoh Ef-nib ente ouon niven.",
                ar_de: "Wa nazara ela fawq na7wa el sama elayka ya Allah abah wa sayed kol a7ad."
            },
            {
                id: 35,
                speaker: "Priester",
                cop_ar: "إيه طاف شيب أهموت",
                de: "Er dankte",
                ar: "وشكر.",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩ̀ⲙⲟⲧ",
                cop_de: "Etaf-shep-hmot.",
                ar_de: "Wa shakar."
            },
            {
                id: 36,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 37,
                speaker: "Priester",
                cop_ar: "أف إسمو إيه روف.",
                de: "Er segnete es",
                ar: "وباركه.",
                cop_cop: "Ⲁϥⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ.",
                cop_de: "Af-esmou ero-f.",
                ar_de: "Wa barakahou."
            },
            {
                id: 38,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 39,
                speaker: "Priester",
                cop_ar: "أف إير آجيا زين إمموف.",
                de: "und heiligte es",
                ar: "وقدسه.",
                cop_cop: "Ⲁϥⲉⲣⲁⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ.",
                cop_de: "Af-er-agiyazin emmof.",
                ar_de: "Wa qaddasahou."
            },
            {
                id: 40,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 41,
                speaker: "Volk",
                cop_ar: "بستيف أومين كيه أومولوغومين كيه ذو كصازومين.",
                de: "Wir glauben, wir bekennen und verherrlichen",
                ar: "نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ.",
                cop_de: "Pistev-omen ke omologoumen ke doxazomen.",
                ar_de: "No2men wa na3taref wa nomaged."
            },
            {
                id: 42,
                speaker: "Priester",
                cop_ar: "أف فشف أفتيف إتنى إيتى نوف إن آجيوس إم ماثيتيس أووه إن أبو سطولوس إثؤواف إفجو إمموس.\nجي تشي أوؤم ايفول انخيتف تيرو فاي غار بي باسوما ايتونا فشف إيجين ثينو نيم هان كي ميش إنسي تيف إي إبكو ايفول.\nإنتي ني نوفى فاي أريتف ايبا إير افميفي.",
                de: "Er teilte es und gab es seinen heiligen Jüngern und reinen Aposteln und sagte:\nNehmt, esset alle davon, Denn dies ist mein Leib, der für euch und für viele gebrochen\nwird und hingegeben zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis.",
                ar: "وقسمه وأعطاه لخواصه التلاميذ القديسين ورسله الأطهار قائلاً:\nخذوا كلوا منه كلكم لأن هذا هو جسدي الذي يقسم عنكم وعن كثيرين\nيعطى لمغفرة الخطايا هذا اصنعوه لذكري.",
                cop_cop: "Ⲁϥⲫⲁϣϥ ⲁϥⲧⲏⲓϥ ⲛ̀ⲛⲏⲉⲧⲉⲛⲟⲩϥ ⲛ̀ⲁⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.\nϬⲓ ⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ: ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲱⲙⲁ: ⲉⲧⲟⲩⲛⲁⲫⲁϣϥ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ ⲛⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ: ⲉⲩⲥⲉⲧⲏⲓϥ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ.\nⲚ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫ̀ⲙⲉⲩⲓ.",
                cop_de: "Af-fash-f af-tif en-ni-ete-nouf en-agios em-mathitis owoh en-apostolos ethowab ev-jo emmos.\nChi ou-om evol enkhetf tirou: fai gar pe pa-soma: etouna-fash-f ejen thynou nem han-ke-mish: ev-se-tif e-ep-ko evol.\nEnte ni-novi: fai ari-tf e-pa-er-pmevi.",
                ar_de: "Wa qasamahou wa a3tahou le-khawasahou el talamiza el qadisin wa rosolahou el athar qa2elan:\nKhodou kolou menhou kollokom le-anna haza howa gasady allazy yoqsam 3ankom wa 3an kathirin\nyo3ta le-maghferat el khataya haza esna3ouhou le-zekry."
            },
            {
                id: 43,
                speaker: "Volk",
                cop_ar: "فاى بيه خين أوميثمى: آمين.",
                de: "Dies ist in Wahrheit. Amen.",
                ar: "هذا هو بالحقيقة: آمين.",
                cop_cop: "Ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Fai pe khen ou methmi: Amyn.",
                ar_de: "Haza howa bel 7aqiqa: Amin."
            },
            {
                id: 44,
                speaker: "Priester",
                cop_ar: "باي ريتى أون بى كى أفوت مينينسا بى ذيبنون أفتؤطف ايفول خين أو إرب نيم أو موؤو",
                de: "Ebenso nahm er nach dem Mahl den Kelch, mischte Wein und Wasser.",
                ar: "وهكذا أيضاً الكأس بعد العشاء مزجها من خمر وماء",
                cop_cop: "Ⲡⲁⲓⲣⲏϯ ⲟⲛ ⲡⲓⲕⲉⲁ̀ⲫⲱⲧ ⲙⲉⲛⲉⲛⲥⲁ ⲡⲓⲇⲓⲡⲛⲟⲛ: ⲁϥⲧⲟⲩⲱⲧϥ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲏⲣⲡ ⲛⲉⲙ ⲟⲩⲙⲱⲟⲩ.",
                cop_de: "Pai-riti on pi-ke-afot menensa pi-dipnon: af-tou-otf evol khen ou-erp nem ou-mo-ou.",
                ar_de: "Wa hakaza aydan el ka2s ba3da el 3asha2 mazagaha men khamr wa ma2."
            },
            {
                id: 45,
                speaker: "Priester",
                cop_ar: "إيه طاف شيب أهموت.",
                de: "Er dankte",
                ar: "وشكر.",
                cop_cop: "Ⲉⲧⲁϥϣⲉⲡϩ̀ⲙⲟⲧ.",
                cop_de: "Etaf-shep-hmot.",
                ar_de: "Wa shakar."
            },
            {
                id: 46,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 47,
                speaker: "Priester",
                cop_ar: "أف إسمو إيه روف.",
                de: "Er segnete ihn",
                ar: "وباركها.",
                cop_cop: "Ⲁϥⲥⲙⲟⲩ ⲉ̀ⲣⲟϥ.",
                cop_de: "Af-esmou ero-f.",
                ar_de: "Wa barakaha."
            },
            {
                id: 48,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 49,
                speaker: "Priester",
                cop_ar: "أف إير آجيا زين إمموف.",
                de: "und heiligte ihn",
                ar: "وقدسها.",
                cop_cop: "Ⲁϥⲉⲣⲁⲅⲓⲁⲍⲓⲛ ⲙ̀ⲙⲟϥ.",
                cop_de: "Af-er-agiyazin emmof.",
                ar_de: "Wa qaddasaha."
            },
            {
                id: 50,
                speaker: "Volk",
                cop_ar: "آمين",
                de: "Amen",
                ar: "آمين",
                cop_cop: "Ⲁ̀ⲙⲏⲛ",
                cop_de: "Amyn.",
                ar_de: "Amin."
            },
            {
                id: 51,
                speaker: "Volk",
                cop_ar: "كيه بالين بستيف أومين كيه أومولوغومين كيه ذوكصازومين.",
                de: "Wiederum glauben, bekennen und verherrlichen wir",
                ar: "وأيضاً نؤمن ونعترف ونمجد.",
                cop_cop: "Ⲕⲉ ⲡⲁⲗⲓⲛ ⲡⲓⲥⲧⲉⲩⲟⲙⲉⲛ ⲕⲉ ⲟ̀ⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ ⲕⲉ ⲇⲟⲝⲁⲍⲟⲙⲉⲛ.",
                cop_de: "Ke palin pistev-omen ke omologoumen ke doxazomen.",
                ar_de: "Wa aydan no2men wa na3taref wa nomaged."
            },
            {
                id: 52,
                speaker: "Priester",
                cop_ar: "أف جيمي تيبى أف تيف أون إني إيتينوف إن آجيوس إم ماثيتيس أووه إن ابسطولوس إثؤواف إفجو إمموس.\nجي تشي سو ايفول انخيتف تيرو فاي غار بي با ايسنوف إنتى تى ذياثيكي إمفيري إيطو نافونف ايفول إيجين ثينو.\nنيم هان كي ميش انسيتيف إي إبكو ايفول إنتى ني نوفى فاي أريتف ايبا إير افميفي.",
                de: "Er kostete davon und gab ihn seinen heiligen Jüngern und reinen Aposteln mit den Worten:\nNehmet, trinket alle davon. Denn dies ist mein Blut des neuen Bundes,\ndas für euch und für viele vergossen wird und hingegeben zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis.",
                ar: "وذاق وأعطاها أيضاً لتلاميذه القديسين ورسله الأطهار قائلاً:\nخذوا اشربوا منها كلكم لأن هذا هو دمي الذي للعهد الجديد\nالذي يسفك عنكم وعن كثيرين يعطى لمغفرة الخطايا هذا اصنعوه لذكري.",
                cop_cop: "Ⲁϥϫⲉⲙϯⲡⲓ ⲁϥⲧⲏⲓϥ ⲟⲛ ⲛ̀ⲛⲏⲉⲧⲉⲛⲟⲩϥ ⲛ̀ⲁⲅⲓⲟⲥ ⲙ̀ⲙⲁⲑⲏⲧⲏⲥ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ ⲉⲑⲟⲩⲁⲃ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ.\nϪⲉ ϭⲓ ⲥⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧϥ ⲧⲏⲣⲟⲩ: ⲫⲁⲓ ⲅⲁⲣ ⲡⲉ ⲡⲁⲥⲛⲟϥ ⲛ̀ⲧⲉ ϯⲇⲓⲁⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ: ⲉⲧⲟⲩⲛⲁⲫⲟⲛϥ ⲉ̀ⲃⲟⲗ ⲉ̀ϫⲉⲛ ⲑⲏⲛⲟⲩ.\nⲚⲉⲙ ϩⲁⲛⲕⲉⲙⲏϣ: ⲉⲩⲥⲉⲧⲏⲓϥ ⲉ̀ⲡ̀ⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲫⲁⲓ ⲁ̀ⲣⲓⲧϥ ⲉ̀ⲡⲁⲉⲣⲫ̀ⲙⲉⲩⲓ.",
                cop_de: "Af-jem-tipi af-tif on en-ni-ete-nouf en-agios em-mathitis owoh en-apostolos ethowab ev-jo emmos.\nJe chi so evol enkhetf tirou: fai gar pe pa-snof ente ti-diathiki em-veri: etouna-fonf evol ejen thynou.\nNem han-ke-mish: ev-se-tif e-ep-ko evol ente ni-novi: fai ari-tf e-pa-er-pmevi.",
                ar_de: "Wa zaqa wa a3taha aydan le-talamizahou el qadisin wa rosolahou el athar qa2elan:\nKhodou eshrabou menha kollokom le-anna haza howa damy allazy lel 3ahd el gadid\nallazy yosfak 3ankom wa 3an kathirin yo3ta le-maghferat el khataya haza esna3ouhou le-zekry."
            },
            {
                id: 53,
                speaker: "Volk",
                cop_ar: "فاى أون بى خين أو ميثمى آمين.",
                de: "Dies ist auch in Wahrheit. Amen.",
                ar: "وهذا هو أيضاً بالحقيقة آمين.",
                cop_cop: "Ⲫⲁⲓ ⲟⲛ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Fai on pe khen ou methmi Amyn.",
                ar_de: "Wa haza howa aydan bel 7aqiqa Amin."
            },
            {
                id: 54,
                speaker: "Priester",
                cop_ar: "صوبين غار إريتيتناؤؤم ايفول خين باى اويك فاى: أووه إنتيتناسو ايفول خين باى أفوت فاى: اريتيتناهي اويش امبا مو: اريتيتناؤؤنح امبا طونس اثؤواف ايريتيتنا اير بوميفي شا انتي أي.",
                de: "Sooft ihr von diesem Brot esst und aus diesem Kelch trinkt, verkündet ihr meinen Tod und bekennt meine heilige Auferstehung und gedenkt meiner, bis ich komme.",
                ar: "لأن كل مرة تأكلون من هذا الخبز، وتشربون من هذه الكأس، تبشرون بموتي، وتعترفون بقيامتي المقدسة، وتذكروني إلى أن أجيء.",
                cop_cop: "Ⲥⲟⲡ ⲛⲓⲃⲉⲛ ⲅⲁⲣ ⲉⲧⲉⲧⲉⲛⲛⲁⲟⲩⲱⲙ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲱⲓⲕ ⲫⲁⲓ: ⲟⲩⲟϩ ⲉⲧⲉⲧⲉⲛⲛⲁⲥⲱ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲁⲓⲁ̀ⲫⲱⲧ ⲫⲁⲓ: ⲉⲧⲉⲧⲉⲛϩⲓⲱⲓϣ ⲙ̀ⲡⲁⲙⲟⲩ: ⲉⲧⲉⲧⲉⲛⲟⲩⲱⲛϩ ⲙ̀ⲧⲁⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉⲑⲟⲩⲁⲃ: ⲉⲧⲉⲧⲉⲛⲉⲣⲡⲁⲙⲉⲩⲓ ϣⲁ ⲉⲧⲉⲓ.",
                cop_de: "Sop niven gar etetenn-a-ouom evol khen pai-oik fai: owoh etetenn-a-so evol khen pai-afot fai: eteten-hioish em-pa-mou: eteten-ouonh em-ta-anastasis ethowab: eteten-er-pa-mevi sha-ete-i.",
                ar_de: "Le-anna kolla marra ta2kolouna men haza el khobz, wa tashrabouna men hazihi el ka2s, tobashirouna be-mawty, wa ta3tarifouna be-qiyamaty el moqaddasa, wa tazkorouny ela an agi2."
            },
            {
                id: 55,
                speaker: "Volk",
                cop_ar: "آمين آمين آمين طون ثاناتون صو كيريه كاطانجيلومين.\nكيه تين أجيان صو أناسطاسين: كيه تين أنا ليبسين صو إنتيس أورانيس سيه أومولوغومين.\nسيه إيه نومين سيه إفلوغومين سيه إفخاريستو مين كيريه: كيه ذيه أو ميه طا سو أوثيه أوس إيمون.",
                de: "Amen, Amen, Amen, deinen Tod, o Herr, verkünden wir,\ndeine heilige Auferstehung und deine Himmelfahrt bekennen wir.\nWir loben dich, wir preisen dich, wir danken dir, o Herr, und wir bitten dich, unser Gott.",
                ar: "آمين آمين آمين بموتك يارب نبشر.\nوبقيامتك المقدسة وصعودك إلى السموات نعترف.\nنسبحك نباركك نشكرك يارب ونتضرع إليك يا إلهنا.",
                cop_cop: "Ⲁⲙⲏⲛ ⲁⲙⲏⲛ ⲁⲙⲏⲛ: ⲧⲟⲛ ⲑⲁⲛⲁⲧⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ ⲕⲁⲧⲁⲅⲅⲉⲗⲗⲟⲙⲉⲛ.\nⲔⲉ ⲧⲏⲛ ⲁⲅⲓⲁⲛ ⲥⲟⲩ ⲁⲛⲁⲥⲧⲁⲥⲓⲛ: ⲕⲉ ⲧⲏⲛ ⲁⲛⲁⲗⲏⲙⲯⲓⲛ ⲥⲟⲩ ⲉⲛⲧⲟⲓⲥ ⲟⲩⲣⲁⲛⲟⲓⲥ ⲥⲉ ⲟⲙⲟⲗⲟⲅⲟⲩⲙⲉⲛ.\nⲤⲉ ⲩⲙⲛⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲗⲟⲅⲟⲩⲙⲉⲛ: ⲥⲉ ⲉⲩⲭⲁⲣⲓⲥⲧⲟⲩⲙⲉⲛ Ⲕⲩⲣⲓⲉ: ⲕⲉ ⲇⲉⲟⲙⲉⲑⲁ ⲥⲟⲩ ⲟ Ⲑⲉⲟⲥ ⲏⲙⲱⲛ.",
                cop_de: "Amyn Amyn Amyn: ton thanaton sou Kyrie kataggellomen.\nKe tyn agian sou anastasin: ke tyn analypsin sou entis ouranis se omologoumen.\nSe ymnoumen: se evlogoumen: se evkharistoumen Kyrie: ke de-ometha sou o Theos imon.",
                ar_de: "Amin Amin Amin: be-mawteka ya Rab nobashir.\nWa be-qiyamateka el moqaddasa wa so3odeka ela el samawat na3taref.\nNosabe7aka nobarikaka nashkoraka ya Rab: wa natadarra3o elayka ya elahona."
            },
            {
                id: 56,
                speaker: "Priester",
                cop_ar: "تينو أون إفنوتي إفيوت بيبانتوكراتور: إن هي أويش إم إفمو إم بيك مونو جينيس إن شيري بين تشويس أووه بين نوتي أووه بين سوتير أووه بين أورو تيرين إيسوس بي إخرستوس. إن إير أومولوجين إنتيف أناستاسيس إثؤواب: نيم بيف جين شي إي إبشوي إي ني في أوي: نيم بيف جين هيمسي ساتيك أوينام إفيوت. إن جوشت إيفول خاتين إنتيف ماه إسنوتي إم باروسيا: إثنيو إيفول خين ني في أوي: إت أوي إن هوتي أووه إثمي إم أو أو: خين تي سينتلييا إنتيه باي إيون. ثاي إيتيف نيو إن خيتس إيت هاب إي تي أو يكوميني خين أو ميث مي. نيم إي تي إم بي أواي بي أواي كاتا نيف هيفي أوي: إيتي أو بيث نانيف إيتي أو بيت هو أو.",
                de: "O Gott, Vater, Allmächtiger, während wir jetzt den Tod deines eingeborenen Sohnes, unseres Herrn, Gottes, Erlösers und unser aller König, Jesus Christus , verkünden und wir seine heilige Auferstehung , seine Auffahrt in den Himmel und sein Sitzen zu deiner Rechten bekennen, Vater, erwarten wir seine zweite Erscheinung, die vom Himmel kommt, furchterregend und voller Herrlichkeit am Ende dieser Zeit, in der er kommt, um den Erdkreis in Gerechtigkeit zu richten und jedem nach seinem Werk zu vergelten , ob es gut war oder böse .",
                ar: "فالآن يا الله الآبُ ضابطُ الكُلِّ، فيما نحنُ نُبشِّرُ بموتِ ابنِكَ الوحيدِ ربِّنا وإلهِنا ومُخَلِّصِنا ومَلِكِنا كُلِّنا يسوع المسيح. , ونعتَرِفُ بقيامَتِهِ المُقَدَّسَةِ، وصُعودِهِ إلى السَّمَواتِ، وجُلوسِهِ عن يَمينِكَ أيُّهَاالآبُ., وننتظرُ ظُهُورَهُ الثَّاني، الآتي مِنَ السَّمَواتِ، المَخوفَ المَملوءَ مجداً، في انقِضاءِ هذا الدَّهْرِ. هذا الَّذي يأتي فيهِ ليدينَ المسكونَةَ بالعدلِ. . ويُعطي كُلَّ واحِدٍ كأعمالِهِ، إن كانَ خيراً وإن كانَ شراً.",
                cop_cop: "Ϯⲛⲟⲩ ⲟⲩⲛ Ⲫⲛⲟⲩϯ Ⲫⲓⲱⲧ Ⲡⲓⲡⲁⲛⲧⲟⲣⲁⲧⲱⲣ : ⲉⲛϩⲓⲱⲓϣ ⲙ̀ⲫⲙⲟⲩ ⲙ̀ⲡⲉⲣⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲉⲛⲟⲩⲣⲟ ⲧⲏⲣⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ. Ⲉⲛⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ⲧⲉϥⲁ̀ⲛⲁⲥⲧⲁⲥⲓⲥ ⲉ̀ⲑⲟⲩⲁⲃ : ⲛⲉⲙ ⲡⲉϥϫⲓⲛϣⲉ ⲉ̀ⲡϣⲱⲓ ⲉ̀ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲛⲉⲙ ⲡⲉϥϫⲓⲛϩⲉⲙⲥⲓ ⲥⲁⲧⲉⲣⲟⲩⲓⲛⲁⲙ Ⲫⲓⲱⲧ. Ⲉⲛϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲁⲧⲏⲛ ⲛ̀ⲧⲉϥⲙⲁϩⲥⲛⲟⲩϯ ⲙ̀ⲡⲁⲣⲟⲩⲥⲓⲁ̀: ⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀ : ⲉⲧⲟⲓ ⲛ̀ϩⲟϯ ⲟⲩⲟϩ ⲉⲑⲙⲉϩ ⲛ̀ⲱⲟⲩ : ϧⲉⲛ ϯⲥⲩⲛⲧⲉⲗⲓⲁ̀ ⲛ̀ⲧⲉ ⲡⲁⲓⲉ̀ⲱⲛ. Ⲑⲁⲓ ⲉ̀ⲧⲉϥⲛⲏⲟⲩ ⲛ̀ϧⲏⲧⲥ ⲉ̀ⲧϩⲁⲡ ⲉ̀ϯⲟⲓⲣⲟⲩⲙⲉⲛⲏ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ. Ⲛⲉⲙ ⲉ̀ϯ ⲙ̀ⲡⲓⲟⲩⲁⲓ ⲡⲓⲟⲩⲁⲓ ⲕⲁⲧⲁ ⲛⲉϥϩ̀ⲃⲏⲟⲩⲓ : ⲓ̀ⲧⲉ ⲟⲩⲡⲉⲑⲛⲁⲛⲉϥ ⲓ̀ⲧⲉ ⲟⲩⲡⲉⲧϩⲱⲟⲩ.",
                ar_de: "fal2an ya allah el ab dabet el kol, fima na7no nobacher bemout ebnek el wa7id rabena wa elahona wa mokalessona wa malekona kolena yasou3 el masi7. wa na3taref bekyamato el moqadasa, wa so3odo ela el samawat, wa jolosouho 3an yaminek ayoha el ab. wa nantazer zohoroho el thani, el ati men el samawat, el makhof el mamlou2 magdan, fi enqeda2 haza el dahr. haza el lazi ya2ti fihi leyadin el maskouna bel 3adl. wa yo3ti kol wa7ed ka 2a3malihi, in kana khayran wa in kana sharran.",
                cop_de: "Tinou oun Efnooti Efiot Pipantokrator : enhioish emefmou empek monogenis enshiri Pencois owoh Pennouti owoh Pensotir owoh penouro tiren Isous Pikhristos Ener omologin entef anastasis ethoowab : nem pef jin she epshoi enifioui : nem pef jin hemsi satek oinam Efiot En jousht evol khatin entef mah esnooti emparousia : ethniou evol khen nifioui : etoi en hoti owoh ethmeh en o-ou : khen ti sintelia ente pai eon. Thai etefniou enkhets ethap et-oikomni khen oumethmi. Nem eti empi-ouai pi-ouai kata nef-hvi-oui : ite oupethnanef ite oupetho-ou",
            },
            {
                id: 57,
                speaker: "Volk",
                cop_ar: "كاتا تو إيليوس سو كيريي: كي مي كاتا تاس أمارتياس إيمون",
                de: "Nach deinem Erbarmen, o Herr, und nicht nach unseren Sünden.",
                ar: "كرحمتِكَ يا رَبُّ، وليس كخطايانا",
                cop_cop: "Ⲕⲁⲧⲁ ⲧⲟ ⲉ̀ⲗⲉⲟⲥ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ̀ : ⲕⲉ ⲙⲏ ⲕⲁⲧⲁ ⲧⲁⲥ ⲁ̀ⲙⲁⲣⲧⲓⲁⲥ ⲏⲙⲱⲛ.",
                ar_de: "kar7matek ya rab, wa laysa kakhatayana.",
                cop_de: "Kata to eleos sou Kyrie: ke mi kata tas amartias imon.",
            },
            {
                id: 58,
                speaker: "Priester",
                cop_ar: "إنثوك بيه إيتانخو إم بيمثو إم بيك أو-أو إثؤواب إنني إيتيه نوك إن ذورون إيفول خين نيه إيتيه نوك بينيوت إثؤواب.",
                de: "Du bist es, vor dessen heiliger Herrlichkeit wir deine Opfergabe dargebracht haben, die dir, o unser heiliger Vater, gebührt.",
                ar: "أنتَ الَّذي وضعنا أمامَ مَجدِكَ القُدُّوسِ، قرابينَكَ مِمَّا لكَ يا أبانا القُدُّوسَ",
                cop_cop: "Ⲛⲑⲟⲕ ⲡⲉ ⲉ̀ⲧⲁⲛⲭⲱ ⲙ̀ⲡⲉⲙⲑⲟ ⲙ̀ⲡⲉⲕⲱⲟⲩ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲕ ⲛ̀ⲇⲱⲣⲟⲛ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲛ̀ⲏⲉ̀ⲧⲉ ⲛⲟⲩⲕ Ⲡⲉⲛⲓⲱⲧ ⲉ̀ⲑⲟⲩⲁⲃ.",
                ar_de: "anta el lazi wa7a3na amama magdeka el qodous, qarabineka memma laka ya abana el qodous.",
                cop_de: "Enthok pe etankho empemtho empek-o-ou ethoowab enni-ete nouk endoron evol khen ni-ete nouk Peniot ethoowab.",
            },
            {
                id: 59,
                speaker: "Volk",
                cop_ar: "كلينا تي ثيؤو ميطا فوفو.",
                de: "Verbeugt euch vor Gott in Ehrfurcht.",
                ar: "أسْجُدُوا للهِ بِخَوْفٍ.",
                cop_cop: "Ⲕⲗⲓⲛⲁⲧⲉ Ⲑⲉⲱ̀ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ.",
                ar_de: "Osjodou lillah be-khof.",
                cop_de: "Klimate Theo meta phovou.",
            },
            {
                id: 60,
                speaker: "Priester",
                cop_ar: "تين تيهو أوفوه تين طوفه إنتيك ميت آغاثوس بي ماي رومي: إمبير تي شيبـي نان خين بي شيبـي إن إينيه: أوديه إمبير هيت تين إيفول خا نيك إيفي آيك.إمبـير فيرفورتين إيفول خا بيك هو: أوديه إمبـير جوس نان جيه تي سوأون إم موتين آن. أللا موي إن أو مو-أو إن نين أفي أوي: نيم هان مومي إن إرمي إن نين فال: هوبوس إنتين ريمي إم بي إيهو-أو نيم بي إيجوره إم بيك إمثو إهري إيجين نين بارابتوماتا. جي أنون بيه بيك لا-أوس نيم ني إيسو-أو إنتيه بيك أوهي: سيني إن نين أنوميا: آري سينخورين إن نين بارابتوماتا. نيه إيتان آيتو خين بين أواوش: نيم نيه إيتان آيتو خين بين أواوش آن: نيه إيتان آيتو خين أوييمي: نيم نيه إيتان آيتو خين أو ميث أت إيمي: نيه إت هيب نيم نيه إثؤون إيفول. نيه إيت اف إير شورب إن أو أونهو إيفول نيم نيه إيتان وبش إيرو-أو: ناي إيتيف سو-أون إم مو-أو إنجيه بيك ران إثؤواب. سوتيم بوتشويس إي ب توبه إنتيه بيك لا-أوس: ماهثيك إي بي أهوم إنتيه نيك إيفيايك. أووه إثفي نا نوفي موي نيم ني سوف إنتيه با هيت: إم بير فيج بيك لا-أوس إم بي هموت إهري إنتيه بيك بنفما إثؤواب.",
                de: "(Still) Wir bitten und beschwören deine Güte, o Menschenliebender, beschäme uns nicht mit ewiger Scham und weise uns, deine Diener, nicht zurück. Sondern gib Wasser auf unsere Häupter und Quellen von Tränen für unsere Augen, damit wir Tag und Nacht wegen unserer Missetaten vor dir weinen, weil wir dein Volk und Schafe deiner Herde sind. Geh vorbei an unseren Sünden, erlasse uns unsere Missetaten, die wir willentlich oder unwillentlich, wissentlich oder unwissentlich begangen haben, die verborgenen und die sichtbaren; die vorher sichtbar waren und die wir vergessen haben, die aber dein heiliger Name kennt. Höre, o Herr, die Bitten deines Volkes und wende dich dem Seufzen deiner Diener zu. Lasse nicht zu, dass durch meine eigenen Sünden und die Greuel meines Herzens dein Volk der Gnade deines Heiligen Geistes beraubt wird.",
                ar: "(سرّاً) نسأَلُ ونطلُبُ مِنْ صلاحِكَ يا مُحِبَّ البشرِ، لا تُخْزِنَا بالخزيِ الأبديِّ، ولا تَطْرَحْنَا نحنُ عبيدَكَ.ولا تَصْرِفْنَا عن وجهِكَ، ولا تَقُل لنا: إنَّني لستُ أعرِفُكُم. بل أعطِ ماءً لرؤوسِنا، وينابيعَ دُموعٍ لأعينِنَا، لِكَيْ نَبكي نهاراً وليلاً أمامَكَ على زلَّاتِنا. لأنَّنا نحنُ شعبُكَ وخِرافُ قطيعِكَ، تجاوزْ عن آثامِنا، واصفحْ عن زلاتِنا. الَّتي صنَعْناها بمشيئَتِنا، والَّتي صنَعْناها بغيرِ مشيئَتِنا، الَّتي صنَعْناها بمعرفَةٍ، والَّتي صنَعْناها بغيرِ معرفَةٍ، الخفيَّةِ والظاهرةِ. الَّتي سَبَقَ إظهارُها والَّتي نَسينَاها، هذهِ هي الَّتي يعرِفُها اسمُكَ القُدُّوسُ. اسمعْ يا رَبُّ طِلبَةَ شعبِكَ، والتفتْ إلى تَنَهُدِ عبيدِكَ. ومِنْ أجلِ خطايايَ خاصةً ونجاساتِ قلبي، لا تحرمْ شعبَكَ مِنْ حُلُولِ روحِكَ القُدُّوسِ",
                cop_cop: "Ⲧⲉⲛϯϩⲟ ⲟⲩⲟϩ ⲧⲉⲛⲧⲱⲃϩ ⲛ̀ⲧⲉⲕⲙⲉⲧⲁⲅⲁⲑⲟⲥ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ: ⲙ̀ⲡⲉⲣϯϣⲓⲡⲓ ⲛⲁⲛ ϧⲉⲛ ⲡⲓϣⲓⲡⲓ ⲛ̀ⲉⲛⲉϩ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣϩⲓⲧⲧⲉⲛ ⲉ̀ⲃⲟⲗ ϧⲁ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ. Ⲙ̀ⲡⲉⲣⲃⲉⲣⲃⲱⲣⲧⲉⲛ ⲉ̀ⲃⲟⲗϩⲁ ⲡⲉⲕϩⲟ: ⲟⲩⲇⲉ ⲙ̀ⲡⲉⲣϫⲟⲥ ⲛⲁⲛ ϫⲉ ϯⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲧⲉⲛ ⲁⲛ. ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ. Ⲭⲉ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉⲕⲗⲁⲟⲥ ⲛⲉⲙ ⲛⲓⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲕⲟ̀ϩⲓ : ⲥⲓⲛⲓ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀ : ⲁ̀ⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ ⲛ̀ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ. Ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ ⲁⲛ : ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲉ̀ⲙⲓ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲉ̀ⲙⲓ : ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲛⲏⲉ̀ⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲟⲩⲟⲛϩⲟⲩ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲱⲃϣ ⲉ̀ⲣⲱⲟⲩ : ⲛⲁⲓ ⲉ̀ⲧⲉϥⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ ⲉ̀ⲑⲟⲩⲁⲃ. Ⲥⲱⲧⲉⲙ Ⲡϭⲟⲓⲥ ⲉ̀ⲡⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ : ⲙⲁϩ̀ⲑⲏⲕ ⲉ̀ⲡⲓⲁ̀ϩⲟⲙ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ. Ⲟⲩⲟϩ ⲉⲑⲃⲉ ⲛⲁⲛⲟⲃⲓ ⲙⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲓⲥⲱϥ ⲛ̀ⲧⲉ ⲡⲁϩⲏⲧ : ⲙ̀ⲡⲉⲣϥⲉϫ ⲡⲉⲕⲗⲁⲟⲥ ⲙ̀ⲡⲓϩⲙⲟⲧ ⲉ̀ϩ̀ⲣⲏⲓ ⲛ̀ⲧⲉ Ⲡⲉⲕⲡⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ.",
                ar_de: "(Serran) Nas2al wa natlob min sala7aka ya mo7eb el-bashar, la tokhzena bel-khozy el-abadi, wala tatrahna nahnou 3abidaka. Wala tasrifna 3an wajhika, wala taqol lana: ennani lasto a3refokom. bal a3ti ma2an lero2osina, wa yanabi3a domou3en le2a3yonina, lekay nabki naharan wa laylan amamaka 3ala zalatena. le2anana na7no sha3boka wa kherafa qati3ek, tajawaz 3an athamena, wa asfa7 3an zalatena. ellati sana3naha be mashi2atina, wa ellati sana3naha be ghayr mashi2atina, ellati sana3naha be ma3refaten, wa ellati sana3naha be ghayr ma3refaten, el khafeyati wa el zahera. ellati sabaqa izharoha wa ellati nasinaha, hazehi hiya ellati ya3rifoha ismoka el qodous. esma3 ya rab telbata sha3beka, waltafet ela tanahode 3abidek. wa men ajle khatayaya khasatan wa najasati qalbi, la ta7rem sha3baka men holouli rou7eka el qodous.",
                cop_de: "Tentího ovoh tentovh ntekmetagathos pimairomi: emper-tishipi nan khen pishipi neneh: oude emper-hitten evol kha nekeviaik. Emper-vervorten evol-ha pek-ho: oude emper-gos nan ge tiswo-oun emmoten an. Alla moi en o-mo-ou en nen afi-oui: nem han moomi en ermi en nen val: hopos enten rimi em pi-eho-ou nem pi-egorh em pek emtho ehri egen nen paraptomata. Je anon pe pek-la-os nem ni-eso-ou ente pek-ohi: sini en nen anomia: ari sinkhorin en nen paraptomata. Ni-etan-aito khen pen-owosh: nem ni-etan-aito khen pen-owosh an: ni-etan-aito khen ou-emi: nem ni-etan-aito khen ou-met-at-emi: ni-et-hip nem ni-etho-onh evol. Ni-et av-er-shorp en-ou-on-hou evol nem ni-etan-obsh ero-ou: nai etef-so-oun em-mo-ou enje pek-ran etho-wab. Sotem Potshois e-p-tovh ente pek-la-os: mahthik e-pi-ahom ente nek-eviaik. Owoh ethve na-novi moi nem ni-sof ente pa-hit: em-per-fej pek-la-os em-pi-hmot ehri ente pek-pnevma etho-wab.",
            },
            {
                id: 61,
                speaker: "Volk",
                cop_ar: "إليسون إيماس أو ثيؤوس أو باتير أو بانتوكراتور.",
                de: "Erbarme dich unser, o Gott, Vater, Allmächtiger.",
                ar: "(ارحمنا يا الله الآب ضابط الكل) 3",
                cop_cop: "ⲉ̀ⲗⲉⲏⲥⲟⲛ ⲏⲙⲁⲥ ⲟ̀ Ⲑⲉⲟⲥ ⲟ̀ Ⲡⲁⲧⲏⲣ ⲟ̀ Ⲡⲁⲛⲧⲟⲣⲁⲧⲱⲣ.",
                ar_de: "er7amna ya allah el ab ya dabet el kol.",
                cop_de: "Eleyson imas O Theos O Pater O Pantokrator.",
            },
            {
                id: 62,
                speaker: "Priester",
                cop_ar: "بيك لا-أوس غار نيم تيك إكليسيا سيتوبه إمموك إيفجو إمموس: (جي ناي نان) إفنوتي إفيوت بيبانتوكراتور.",
                de: "Denn dein Volk und deine Kirche bitten dich und sprechen: ((Erbarme dich unser) 3x, o Gott, Vater , Allmächtiger) 3x.",
                ar: "لأنَّ شعبَكَ وكنيستَكَ يطلبون إليكَ قائلين: (ارحمنا يا الله الآب ضابط الكل) 3.",
                cop_cop: "Ⲡⲉⲕⲗⲁⲟⲥ ⲅⲁⲣ ⲛⲉⲙ ⲧⲉⲕⲉⲕⲕⲗⲏⲥⲓⲁ̀ ⲥⲉⲧⲱⲃϩ ⲙ̀ⲙⲟⲕ ⲉⲩϫⲱ ⲙ̀ⲙⲟⲥ : (Ϫⲉ ⲛⲁⲓ ⲛⲁⲛ) Ⲫⲛⲟⲩϯ Ⲫⲓⲱⲧ Ⲡⲓⲡⲁⲛⲧⲟⲣⲁⲧⲱⲣ.",
                ar_de: "le2anna sha3baka wa kanisataka yatlobouna elayka qa2elin: (er7amna ya allah el ab dabet el kol) 3.",
                cop_de: "Peklaos gar nem tek-ekklesia setovh emmok evjo emmos: (Je nai nan) Efnooti Efiot Pipantokrator.",
            },
            {
                id: 63,
                speaker: "Volk",
                cop_ar: "أواوشت إم إفنوتي إفيوت بيبانتوكراتور.",
                de: "Verbeugt euch vor Gott dem Vater, dem Allmächtigen.",
                ar: "اسجدوا لله الآب ضابط الكل.",
                cop_cop: "Ⲟⲩⲱϣⲧ ⲙ̀Ⲫⲛⲟⲩϯ Ⲫⲓⲱⲧ Ⲡⲓⲡⲁⲛⲧⲟⲣⲁⲧⲱⲣ.",
                ar_de: "osjodo lellah el ab dabet el kol.",
                cop_de: "Owosht em-Efnooti Efiot Pipantokrator.",
            },
            {
                id: 64,
                speaker: "Priester",
                cop_ar: "أووه أو-أورب إي بي سيت إيفول خين بيك بيسي إثؤواب: نيم إيفول خين بيك مان شوبي إت سيبتوت إيفول خين بي أتشورشف إي خون إيكينف إنتاك: إيفول خين بي ثرونوس إنتيه ثي ميت أورو إم بيك أو-أو. إنثوف بي باراكليتوس بيك بنفما إثؤواب في إت شوب خين أو هيبوستاسيس: بي أت فونح بي أت شيبتي: في إت أوي إن تشويس بي ريف تي آنخو. في إيت اف ساجي خين بي نوموس نيم ني بروفيتيس نيم ني أبوسطولوس. في إت شوب خين ماي نيفين أووه إثمي إم ماي نيفين: أووه إم مون ما شوبي إم موف. أووه إيف إير إنير جين أفتي إكسوسيوس خين بيك تي-أتي إم بي توبو إهري إيجين نيه إتيف أواوشو: كاتا أو ميت ريف شيمشي آن. بي أبلون خين تيف فيسيس في إت أوي إن أو ثوميريتي خين تيف إنيرجيا: تي مومي إنتيه ني هموت إن نوتي. في إت أوي إن أومو أوسيوس نيماك: في إثنيو إيفول إن خيتك. بي شفيير إن ثرونوس إنتيه ثي ميت أورو إم بيك أو-أو نيم بيك مونو جينيس إن شيري: بين تشويس أووه بين نوتي أووه بين سوتير أووه بين أورو تيرين إيسوس بي إخرستوس. إهري إيجون خا نيك إيفيايك: نيم إيجين ناي ذورون إنتاك إت طاييهوت: إت اير شورب إن كي إهري إم بيك إمثو. إيجين باي ويك فاي نيم إيجين باي آفوت فاي: هينا إنتو توبو أووه إنتو أو-أو تيب.",
                de: "Sende von deiner heiligen Höhe, von deinem bereiten Wohnsitz und von deinem Schoß, der unermesslich ist, vom Thron des Reiches deiner Herrlichkeit den Beistand, deinen Heiligen Geist, der eine Person Gottes ist, der unwechselbar und ohne Veränderung ist, den Herrn, den Lebensspender, der in den Gesetzen, Propheten und Aposteln spricht, der auf alle Orte herabkommt und alle Orte erfüllt und den doch kein Ort fassen kann; und er wirkt frei in deiner Heiligkeit die Reinigung für die, die er liebt, nicht als Diener, der einfach in seiner Natur ist, der vielfältig ist in seinen Werken, Quelle der göttlichen Gnaden, der dir wesensgleich ist, der von dir ausgeht, Teilhaber am Thron des Königreiches deiner Herrlichkeit und deinem eingeborenen Sohn, unserem Herrn, Gott und Erlöser, unser aller König, Jesus Christus. Sende ihn herab auf uns, deine Diener, und auf diese Opfergaben, die dir gehören, die hoch verehrt sind, die hier schon vor dir liegen, auf dieses Brot und diesen Kelch, damit sie geheiligt und verwandelt werden.",
                ar: "وأرسِل إلى أسفلُ مِنْ عُلُوِّكَ المُقَدَّسِ، ومِنْ مسكنِكَ المُستَعِدِّ، ومِنْ حضنِكَ غَيْرِ المحصورِ، ومِنْ عرشِ مملكَةِ مَجدِكَ. البارقليطَ، روحَكَ القُدُّوسَ، الأقنومَ غَيْرَ المُستَحيلِ، ولا متغيرِ، الرَّبُّ المُحيي. الناطقَ في النَّاموسِ والأنبياءِ والرُّسُلِ. الحالُّ في كُلِّ مكانٍ، المالئُ كُلَّ مكانٍ، ولا يحويهِ مكانٌ. وهو يُجري التقديسَ بسلطةٍ بمسرتِكَ للذينَ يُحِبُّهُمْ، وليسَ على سبيلِ خدمةٍ عبوديةٍ. البسيطُ في طبيعتِهِ، الكثيرُ الأنواعِ في فعلِهِ، ينبوعُ النِّعَمِ الإلهيَّةِ. المُساوي لكَ، المُنبثِقُ مِنْكَ. شريكُ عرشِ مملكةِ مَجدِكَ، وابنِكَ الوحيدِ، رَبِّنا وإلَهنا ومُخَلِّصنا وملِكنا كُلِّنا يسوع المسيح. علينا نحنُ عبيدَكَ وعلى هذهِ القرابينِ التي لكَ المُكرَّمةِ، السابقِ وضعُها أمامَكَ. على هذا الخُبزِ وعلى هذهِ الكأسِ، لكي يتطهَّرا وينتقِلا . ",
                cop_cop: "Ⲟⲩⲟϩ ⲟⲩⲱⲣⲡ ⲉ̀ⲡⲉⲥⲏⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲃⲓⲥⲓ ⲉ̀ⲑⲟⲩⲁⲃ : ⲛⲉⲙ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲉⲕⲙⲁⲛ̀ϣⲱⲡⲓ ⲉⲧⲥⲉⲃⲧⲱⲧ ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲓⲁⲧϣⲟⲣϣϥ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲕⲉⲛϥ ⲛ̀ⲧⲁⲕ : ⲉ̀ⲃⲟⲗϧⲉⲛ ⲡⲓⲑⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲙ̀ⲡⲉⲕⲱⲟⲩ. Ⲛ̀ⲑⲟϥ ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲥ Ⲡⲉⲕⲡⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲟⲩϩⲩⲡⲟⲥⲧⲁⲥⲓⲥ : ⲡⲓⲁⲧⲫⲱⲛϩ ⲡⲓⲁⲧϣⲓⲃϯ : ⲫⲏⲉⲧⲟⲓ ⲛ̀ϭⲟⲓⲥ ⲡⲓⲣⲉϥϯⲁⲛϧⲟ. Ⲫⲏⲉ̀ⲧⲁϥⲥⲁϫⲓ ϧⲉⲛ ⲡⲓⲛⲟⲙⲟⲥ ⲛⲉⲙ ⲛⲓⲡⲣⲟⲫⲏⲧⲏⲥ ⲛⲉⲙ ⲛⲓⲁ̀ⲡⲟⲥⲧⲟⲗⲟⲥ. Ⲫⲏⲉⲧϣⲟⲡ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲟⲩⲟϩ ⲉⲑⲙⲟϩ ⲙ̀ⲙⲁⲓ ⲛⲓⲃⲉⲛ : ⲟⲩⲟϩ ⲙ̀ⲙⲟⲛ ⲙⲁ ϣⲱⲡⲓ ⲙ̀ⲙⲟϥ. Ⲟⲩⲟϩ ⲉϥⲉⲣⲉ̀ⲛⲉⲣⲅⲓⲛ ⲁⲩⲧⲉⲝⲟⲩⲥⲓⲟⲥ ϧⲉⲛ ⲡⲉⲕⲧⲩⲁϯ ⲙ̀ⲡⲓⲧⲟⲩⲃⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲏⲉ̀ⲧⲉϥⲟⲩⲁ̀ϣⲟⲩ : ⲕⲁⲧⲁ ⲟⲩⲙⲉⲧⲣⲉϥϣⲉⲙϣⲓ ⲁⲛ. Ⲡⲓⲁⲡⲗⲟⲩⲛ ϧⲉⲛ ⲧⲉϥⲫⲩⲥⲓⲥ ⲫⲏⲉⲧⲟⲓ ⲛ̀ⲟⲩⲑⲟⲙⲏⲣⲏϯ ϧⲉⲛ ⲧⲉϥⲉⲛⲉⲣⲅⲓⲁ̀ : ϯⲙⲟⲩⲙⲓ ⲛ̀ⲧⲉ ⲛⲓϩ̀ⲙⲟⲧ ⲛ̀ⲛⲟⲩϯ. Ⲫⲏⲉⲧⲟⲓ ⲛ̀ⲟ̀ⲙⲟⲟⲩⲥⲓⲟⲥ ⲛⲉⲙⲁⲕ : ⲫⲏⲉⲑⲛⲏⲟⲩ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲕ. Ⲡⲓϣ̀ⲫⲏⲣ ⲛ̀ⲑ̀ⲣⲟⲛⲟⲥ ⲛ̀ⲧⲉ ⲑ̀ⲙⲉⲧⲟⲩⲣⲟ ⲙ̀ⲡⲉⲕⲱⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ : Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲉⲛⲟⲩⲣⲟ ⲧⲏⲣⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ. Ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ϧⲁ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ : ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲛⲁⲓⲇⲱⲣⲟⲛ ⲛ̀ⲧⲁⲕ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲉ̀ⲧⲉⲣϣⲟⲣⲡ ⲛ̀ⲭⲏ ⲉ̀ϩ̀ⲣⲏⲓ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ. Ⲉ̀ϫⲉⲛ ⲡⲁⲓⲱⲓⲕ ⲫⲁⲓ ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲡⲁⲓⲁ̀ⲫⲟⲧ ⲫⲁاي : ϩⲓⲛⲁ ⲛ̀ⲧⲟⲩⲧⲟⲩⲃⲟ ⲟⲩⲟϩ ⲛ̀ⲧⲟⲩⲟⲩⲱⲧⲉⲃ.",
                ar_de: "wa arsel ela asfalo men 3oloweka el moqadas, wa men maskaneka el mosta3ed, wa men 7edneka ghayr el ma7sour, wa men 3arsh mamlakat magdeka. el baraqlita, rou7aka el qodousa, el oqnouma ghayr el mosta7il, wala motaghayir, el rabbo el mo7yi. el natiqa fil namous wal anbiya2 wal rosol. el 7ala fi kol makan, el mali2o kol makan, wala ya7wihi makan. wa howa yojri el taqdisa besoltaten bemasaratika lillazina yo7ebohom, walaysa 3ala sabili khedmaten 3obodiyatiya. el basito fi tabi3atihi, el kathiro el anwa3 fi fe3lehi, yanbou3o el ne3am el elahiya. el mosawi laka, el monbathiqu menka. shariko 3arsh mamlakat magdeka, wabnika el wa7id, rabbina wa elahina wa mokhalessina wa malekina kollina yasou3 el masi7. 3alayna na7no 3abidaka wa 3ala hazehi el qarabini elati laka el mokarama, el sabiqa wad3oha amamaka. 3ala haza el khobz wa 3ala hazehi el ka2s, likay yatatahara wa yantaqila.",
                cop_de: "Owoh ouorp epesit evol khen pek-bisi etho-wab: nem evol khen pek-man-shopi et-sevtot evol khen pi-at-shorshf ekhoun e-kenf entak: evol khen pi-thronos ente the-met-ouro empek-o-ou. Enthof pi-paraklitos Pek-pnevma etho-wab phi-et-shop khen ou-hypostasis: pi-at-fonh pi-at-shivti: phi-et-oi en-chois pi-ref-ti-ankho. Phi-et-af-saji khen pi-nomos nem ni-profetis nem ni-apostolos. Phi-et-shop khen mai niven owoh ethmeh em-mai niven: owoh emmon ma shopi em-mof. Owoh ef-er-energin av-texousios khen pek-ti-ati empi-touvo ehri egen ni-etef-ou-ashou: kata ou-met-ref-shemshi an. Pi-aploun khen tef-fysis phi-et-oi en-ou-thomiri-ti khen tef-energia: ti-moomi ente ni-hmot en-nooti. Phi-et-oi en-omo-ousios nemak: phi-ethniou evol enkhetk. Pi-sh-phir en-thronos ente the-met-ouro empek-o-ou nem pek-monogenis en-shiri: Pen-chois owoh Pen-nooti owoh Pen-sotir owoh pen-ouro tiren Isous Pi-khristos. Ehri ejon kha nek-eviaik: nem ejen nai-doron entak et-tayie-hout: et-er-shorp en-khi ehri em-pek-emtho. Ejen pai-oik phai nem ejen pai-afot phai: hina entou-touvo owoh entou-ou-o-tev.",
            },
            {
                id: 65,
                speaker: "Diakon",
                cop_ar: "بروسخومين: آمين.",
                de: "Wir hören. Amen.",
                ar: "نُنصِتْ، آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ: ⲁ̀ⲙⲏⲛ.",
                ar_de: "nonsit, amyn.",
                cop_de: "Proskhomen: Amyn",
            },
            {
                id: 66,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "amyn.",
                cop_de: "Amyn.",
            },
            {
                id: 65,
                speaker: "Priester",
                cop_ar: "أووه باي ويك مين إنتيف آيف إن سوما إثؤواب إنتيه بي إخرستوس.",
                de: "Und dieses Brot verwandelt er in den heiligen Leib Christi.",
                ar: "وهذا الخُبزُ يجعلُهُ جسداً مُقدَّساً للمسيح.",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲱⲓⲕ ⲙⲉⲛ ⲛ̀ⲧⲉϥⲁⲓϥ ⲛ̀ⲥⲱⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.",
                ar_de: "wa haza el khobzo yaj3alohu jasadan moqadasan lel masi7.",
                cop_de: "Owoh paioik men entef-aif en-soma etho-wab ente Pi-khristos.",
            },
            {
                id: 66,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "amyn.",
                cop_de: "Amyn.",
            },
            {
                id: 67,
                speaker: "Priester",
                cop_ar: "أووه باي آفوت ذيه أون إن إسنوف إف طاييهوت: إنتيه تي ذياثيكي إم فيري إنتاف.",
                de: "Und auch diesen Kelch in sein kostbares Blut seines neuen Bundes.",
                ar: "وهذهِ الكأسُ أيضاً دماً كريماً للعهدِ الجَدِيدِ الَّذي لَهُ.",
                cop_cop: "Ⲟⲩⲟϩ ⲡⲁⲓⲁ̀ⲫⲟⲧ ⲇⲉ ⲟⲛ ⲛ̀ⲥⲛⲟϥ ⲉϥⲧⲁⲓⲏⲟⲩⲧ : ⲛ̀ⲧⲉ ϯⲇⲓⲁ̀ⲑⲏⲕⲏ ⲙ̀ⲃⲉⲣⲓ ⲛ̀ⲧⲁϥ.",
                ar_de: "wa hazehi el ka2so ay-dan daman kariman lel 3ahdi el jadidi el-lazi laho.",
                cop_de: "Owoh pai-afot de on en-snof ef-tayie-hout: ente ti-diathiki em-veri entaf.",
            },
            {
                id: 68,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "amyn.",
                cop_de: "Amyn.",
            },
            {
                id: 69,
                speaker: "Priester",
                cop_ar: "بين تشويس أووه بين نوتي أووه بين سوتير أووه بين أورو تيرين إيسوس بي إخرستوس.",
                de: "Unser Herr, Gott, Erlöser und unser aller König Jesus Christus.",
                ar: "رَبَّنَا وإلَهَنَا ومُخَلِّصَنَا ومَلِكَنَا كُلَّنَا، يَسُوعُ المَسِيحُ.",
                cop_cop: "Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ ⲟⲩⲟϩ ⲡⲉⲛⲟⲩⲣⲟ ⲧⲏⲣⲉⲛ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.",
                ar_de: "Rabbana wa elahana wa mokhallisana wa malikana kollana, Yasou3 el-Masi7.",
                cop_de: "Pen-chois owoh Pen-nouti owoh Pen-sotir owoh pen-ouro tiren Isous Pi-khristos.",
            },
            {
                id: 70,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "amyn.",
                cop_de: "Amyn.",
            },
            {
                id: 71,
                speaker: "Priester",
                cop_ar: "هينا إنتو شوبي نان تيرو خا ني إثنا شي إيفول إممو أو.",
                de: "Damit sie für uns alle, die daran teilnehmen, werden:",
                ar: "لِكَيْ يَكونا لَنا نَحنُ جَميعاً المُتَناولينَ مِنْهُما:",
                cop_cop: "Ϩⲓⲛⲁ ⲛ̀ⲧⲟⲩϣⲱⲡⲓ ⲛⲁⲛ ⲧⲏⲣⲟⲩ ϧⲁ ⲛⲏⲉⲑⲛⲁϭⲓ ⲉ̀ⲃⲟⲗ ⲙ̀ⲙⲱⲟⲩ:",
                ar_de: "likay yakouna lana nahnou jami3an el motanawilina minhouma:",
                cop_de: "Hina entoushoopi nan teerou kha ne-ethna-chi evol emmo-ou.",
            },
            {
                id: 72,
                speaker: "Priester",
                cop_ar: "إي أونا هتي إن أت خوت خيت: إي أو أغابي إن أت ميت شوفي.",
                de: "Glaube ohne Prüfen und Liebe ohne Heuchelei.",
                ar: "إيماناً بِغَيْرِ فَحصٍ، ومَحَبَّةً بِغَيْرِ رياءٍ.",
                cop_cop: "Ⲉⲟⲩⲛⲁϩϯ ⲛⲁⲧϧⲟⲧϧⲉⲧ: ⲉⲟⲩⲁⲅⲁⲡⲏ ⲛⲁⲧⲙⲉⲧϣⲟⲃⲓ.",
                ar_de: "imanan bighayri fah-sin, wa mahabbatan bighayri riya2in.",
                cop_de: "E-ou-nahti en-at-khot-khet: e-ou-agapi en-at-met-shovi.",
            },
            {
                id: 73,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 74,
                speaker: "Priester",
                cop_ar: "إي أو هيبوموني إس جيك إيفول: إي أو هيلبيس إس تاجري أوت.",
                de: "Vollkommene Geduld und feste Hoffnung.",
                ar: "وصبراً كاملاً، ورجاءً ثابتاً.",
                cop_cop: "Ⲉⲟⲩϩⲩⲡⲟⲙⲟⲛⲏ ⲉⲥϫⲏⲕ ⲉ̀ⲃⲟⲗ: ⲉⲟⲩϩⲉⲗⲡⲓⲥ ⲉⲥⲧⲁϫⲣⲏⲟⲩⲧ.",
                ar_de: "wa sabran kamilan, wa raja2an thabitan.",
                cop_de: "E-ou-hypomoni es-jik evol: e-ou-helpis es-tag-riyout.",
            },
            {
                id: 75,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 76,
                speaker: "Priester",
                cop_ar: "إي أونا هتي: إي أو رويس: إي أو توجو: إي أو أونوف.",
                de: "Glauben und Wachsamsein, Gesundheit und Freude.",
                ar: "وإيماناً، وحراسةً، وعافيةً، وفرحاً.",
                cop_cop: "Ⲉⲟⲩⲛⲁϩϯ: ⲉⲟⲩⲣⲱⲓⲥ: ⲉⲟⲩⲧⲟⲩϫⲟ: ⲉⲟⲩⲟⲩⲛⲟϥ.",
                ar_de: "wa imanan, wa hirasatan, wa 3afiyatan, wa farahan.",
                cop_de: "E-ou-nahti: e-ou-rois: e-ou-tougo: e-ou-ounof.",
            },
            {
                id: 77,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 78,
                speaker: "Priester",
                cop_ar: "إي أو ميت فيري إنتيه تي بسيشي نيم بي سوما نيم بي بنفما: إي أو أو أو إمبيك ران إثؤواب.",
                de: "Erneuerung für Seele, Geist und Leib und Ehre für deinen heiligen Namen.",
                ar: "وتجديداً للنفسِ والجسدِ والرُّوحِ، ومجداً لاسمِكَ القُدُّوسِ.",
                cop_cop: "Ⲉⲟⲩⲙⲉⲧⲃⲉⲣⲓ ⲛ̀ⲧⲉ ϯⲯⲩⲭⲏ ⲛⲉⲙ ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲡⲛⲉⲩⲙⲁ: ⲉⲟⲩⲱⲟⲩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉ̀ⲑⲟⲩⲁⲃ.",
                ar_de: "wa tajdidan lel nafsi wal jasadi wal rou7i, wa majdan lismika el qodous.",
                cop_de: "E-ou-met-veri ente ti-psichi nem pi-soma nem pi-pnevma: e-ou-o-ou empek-ran etho-wab.",
            },
            {
                id: 79,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 80,
                speaker: "Priester",
                cop_ar: "إي أو ميت إشفير إنتيه أو ميت ماكاريوس إنتيه أو أونخ إن إنيه نيم أو ميت أت تاكو: إي أو كو إيفول إنتيه ني نوفي.",
                de: "Gemeinschaft im ewigen Leben, Unverderblichkeit und Vergebung der Sünden.",
                ar: "شِرْكَةَ سعادةِ الحياةِ الأَبديَّةِ وعَدَمِ الفسادِ، وغُفراناً للخَطايا.",
                cop_cop: "Ⲉⲟⲩⲙⲉⲧϣ̀ⲫⲏⲣ ⲛ̀ⲧⲉ ⲟⲩⲙⲉⲧⲙⲁⲕⲁⲣⲓⲟⲥ ⲛ̀ⲧⲉ ⲟⲩⲱⲛϧ ⲛ̀ⲉⲛⲉϩ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧⲧⲁⲕⲟ: ⲉⲟⲩⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ.",
                ar_de: "shir-kata sa3adat el hayati el abadiyyati wa 3adami el fasadi, wa ghofranan lel khataya.",
                cop_de: "E-ou-met-sh-feer ente ou-met-makarios ente ou-onkh en-eneh nem ou-met-at-tako: e-ou-kho evol ente ni-novi.",
            },
            {
                id: 81,
                speaker: "Volk",
                cop_ar: "أوسبـير إين كيه إيسـتين : كيه إيسـتيه : إيس جينياس جينيؤون : كيه إيس توس سيمبانتاس : إيؤوناس طون إيؤونون : آمين.",
                de: "So wie es war und wie es immer ist, so soll es sein, bis zu den Generationen der Generationen und bis in die Ewigkeit der Ewigkeiten. Amen.",
                ar: "كما كانَ فهو كائنٌ وهكذا يكونُ، إلى أجيالِ الأجيالِ، وإلى سائرِ دهورِ الدهورِ، آمينُ.",
                cop_cop: "Ⲱⲥⲡⲉⲣ ⲏⲛ ⲕⲉ ⲉⲥⲧⲓⲛ : ⲕⲉ ⲉⲥⲧⲉ : ⲓⲥ ⲅⲉⲛⲉⲁⲥ ⲅⲉⲛⲉⲱⲛ : ⲕⲉ ⲓⲥ ⲧⲟⲩⲥ ⲥⲩⲙⲡⲁⲛⲧⲁⲥ : ⲉ̀ⲱⲛⲁⲥ ⲧⲱⲛ ⲉ̀ⲱⲛⲱⲛ : ⲁ̀ⲙⲏⲛ.",
                ar_de: "Kama kana faho k2en wahakaza yakoun, ela agyal el-agyal, wa ela sa2er dohour el-dohour, Amin.",
                cop_de: "Osper in ke estin : ke este : is geneas geneon : ke is tous sympantas : eonas ton eonon : amyn.",
            },
            {
                id: 82,
                speaker: "Volk",
                ar: "كما كان وهكذا يكون، من جيل إلى جيل، وإلى دهر الدهور. آمين.",
                de: "So wie es war und wie es sein soll, ist es von Generation zu Generation und bis in die Ewigkeit der Ewigkeiten, Amen.",
                cop_ar: "أوس بيه رين كيه إستيه إيستين أبو جيه نيه ني أس يس جيه ني آن كيه بانضاس طوس إيه أوناس طون إيه أونون آمين.",
                cop_cop: "Ⲱⲥ ⲡⲉⲣⲉⲛ ⲕⲉ ⲉⲥⲧⲉ: ⲉⲥⲧⲓⲛ ⲁ̀ⲡⲟ ⲅⲉⲛⲉⲁⲥ ⲉⲓⲥ ⲅⲉⲛⲉⲁⲛ: ⲕⲉ ⲡⲁⲛⲧⲁⲥ ⲧⲟⲩⲥ ⲉⲓⲱⲛⲁⲥ ⲧⲱⲛ ⲉⲓⲱⲛⲱⲛ: Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Os peren ke este: estin apo geneas is genean: ke pantas tous eonas ton eonon: Amen.",
                ar_de: "Kama kana wa hakaza yakoun, min gilin ila gil, wa ila dahr el-dahour. Amen."
            },
            {
                id: 82.1,
                speaker: "Priester",
                cop_ar: "هينا نيم خين فاي كاطا إفريطي أون خين هوب نيفين : إنتيف چي أو أوؤو أوفوه إنتيف چي إسمو أوفوه إنتيف چي سي : إنجيه بيك نيشتي إن ران إثؤواب : خين هوب نيفين إتطايؤوت أوفوه إت إسمارؤوت : نيم إيسوس بي إخرستوس بيك مينريت إن شيري : نيم بي إبنيفما إثؤواب.",
                de: "Damit dadurch so wie auch in allem verherrlicht, gepriesen und erhöht werde dein heiliger und großer Name, der in allem herrlich und gepriesen ist, zusammen mit Jesus Christus, deinem geliebten Sohn und dem Heiligen Geist.",
                ar: "لكي وبهذا، كما أيضًا في كل شيء، يتمجد ويتبارك، ويرتفع اسمك العظيم القدوس، في كل شيء، كريم ومبارك، مع يسوع المسيح ابنك الحبيب، والروح القدس.",
                cop_cop: "Ϩⲓⲛⲁ ⲛⲉⲙ ϧⲉⲛ ⲫⲁⲓ ⲕⲁⲧⲁ ⲫ̀ⲣⲏϯ ⲟⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ : ⲛ̀ⲧⲉϥϭⲓⲱ̀ⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓⲥ̀ⲙⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϭⲓⲥⲓ : ⲛ̀ϫⲉ ⲡⲉⲕⲛⲓϣϯ ⲛ̀ⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ : ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ ⲟⲩⲟϩ ⲉⲧⲥ̀ⲙⲁⲣⲱⲟⲩⲧ : ⲛⲉⲙ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ ⲡⲉⲕⲙⲉⲛⲣⲓⲧ ⲛ̀Ϣⲏⲣⲓ : ⲛⲉⲙ Ⲡⲓⲡ̀ⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ.",
                ar_de: "Likay wa bi-haza, kama ayzan fi kol shay2, yatamaggad wa yatabarak, wa yartafi3 esmoka el-3azim el-qoddous, fi kol shay2, karim wa mobarak, ma3a Yasou3 el-Masih ebneka el-habib, wal-Rouh el-Qodos.",
                cop_de: "Hina nem khen phai kata phriti on khen hob niven : entef-chi-o-ou ovoh entef-chi-esmou ovoh entef-chi-si : enge pek-nishti en-ran ethouav : khen hob niven et-taio-out ovoh et-esmaro-out : nem Isous Pi-khristos pek-menrit en-shiri : nem Pi-pnevma ethouav.",
            },
            {
                id: 83,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit euch allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲒ.",
                cop_de: "Ireni pasi.",
                ar_de: "Eirene pasi.",
            },
            {
                id: 84,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Ke to pnevmati sou."
            },
            {
                id: 85,
                speaker: "Priester",
                ar: "وأيضاً فلنشكر الله ضابط الكل، أبا ربنا وإلهنا ومخلصنا يسوع المسيح. لأنه جعلنا أهلاً الآن أن نقف في هذا الموضع المقدس ونرفع أيدينا إلى فوق ونخدم اسمه القدوس هو أيضاً فلنسأله أن يجعلنا مستحقين لشركة وصعود أسراره الإلهية غير المائتة.",
                de: "Wiederum lasst uns Dank sagen Gott, dem Allmächtigen, dem Vater unseres Herrn, Gottes und Erlösers Jesus Christus. Denn er machte uns würdig, an diesem heiligen Ort zu stehen, unsere Hände zu erheben und seinem heiligen Namen zu dienen. Ihn bitten wir auch, dass er uns würdig mache der Gemeinschaft und Erhebung Deines göttlichen, unsterblichen Sakramentes.",
                cop_ar: "بالين أون مارين شيب إهموت إنتطاف إم إفنوتى بى بانطوكراتور: إفيوت إم بينتشويس أووه بين نوتى أووه بين سوتير إيسوس بى إخرستوس: جى آفثيرين إبر إبنيمبشا أون تينو إى أوهرى إيراتين خين باى ما إثؤواب فاى أووه إيفاى إن نينجيج إى إبشوى أووه إى شمشي إمبيف ران إثؤواب إنتوف أون مارين تيهو إيروف هوبوس إنتيف آيتين إن إينيمبشا إنتى ميت أشفير نيم تى ميت آليمبسيس إنتى نيف ميستيريون إن نوتى أووه إن آثمو.",
                cop_cop: "Ⲡⲁⲗⲓⲛ ⲟⲛ ⲙⲁⲣⲉⲛϣⲉⲡϩ̀ⲙⲟⲧ ⲛ̀ⲧⲟⲧϥ ⲙ̀Ⲫⲛⲟⲩϯ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: Ⲫ̀ⲓⲱⲧ ⲙ̀ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ϫⲉ ⲁϥⲑ̀ⲣⲉⲛⲉⲣⲉ̀ⲡⲛⲓⲙⲡϣⲁ ⲟⲛ ϯⲛⲟⲩ ⲉ̀ⲟ̀ϩⲓ ⲉ̀ⲣⲁⲧⲉⲛ ϧⲉⲛ ⲡⲁⲓⲙⲁ ⲉⲑⲟⲩⲁⲃ ⲫⲁⲓ: ⲟⲩⲟϩ ⲉ̀ϥⲁⲓ ⲛ̀ⲛⲉⲛϫⲓϫ ⲉ̀ⲉ̀ⲡϣⲱⲓ: ⲟⲩⲟϩ ⲉ̀ϣⲉⲙϣⲓ ⲙ̀ⲡⲉϥⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲑⲟϥ ⲟⲛ ⲙⲁⲣⲉⲛϯϩⲟ ⲉ̀ⲣⲟϥ ϩⲱⲥ ⲛ̀ⲧⲉϥⲁⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲛⲓⲙⲡϣⲁ ⲛ̀ⲧⲉ ⲙⲉⲧⲁϣⲫⲏⲣ ⲛⲉⲙ ϯⲙⲉⲧⲁ̀ⲗⲏⲙⲯⲓⲥ ⲛ̀ⲧⲉ ⲛⲉϥⲙⲩⲥⲧⲏⲣⲓⲟⲛ ⲛ̀ⲛⲟⲩϯ ⲟⲩⲟϩ ⲛ̀ⲁ̀ⲑⲙⲟⲩ.",
                cop_de: "Palin on maren-shephmot entotf em-Phnouti pi-Pantokrator: Phi-iot em-Pen-chois owoh Pen-nouti owoh Pen-sotir Isous Pi-Khristos: je aftheren-er-ep-nimpsha on tinou e-ohi eraten khen pai-ma ethouab phai: owoh e-phai en-nen-gig e-epshoi: owoh e-shemshi em-pef-ran ethouab: enthof on maren-tiho erof hos entef-aiten en-enimpsha ente met-ashphir nem ti-met-alimpsys ente nef-mysterion en-nouti owoh en-athmou.",
                ar_de: "Wa-aydan faly nashkor Allah dabet el-kol, aba Rabbina wa elahina wa mokhallesina Yasou3 el-Masih. Le-annaho ga3alana ahlan el-an an naqif fi haza el-mawda3 el-moqadas wa narfa3 aydiyana ela fawq wa nakhdom esmaho el-qoddous, howa aydan faly nas2alaho an yag3alana mostahiqqin le-sherikat wa so3oud asrarihi el-elahiya ghayr el-ma2ita."
            },
            {
                id: 86,
                speaker: "Volk",
                cop_ar: "آمين.",
                de: "Amen.",
                ar: "حقاً",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                ar_de: "amyn.",
                cop_de: "Amyn.",
            },
            {
                id: 87,
                speaker: "Priester",
                cop_ar: "بي سوما إثؤواب : نيم بي إسنوف إتطايؤوت : إنتيه بيف إخرستوس : إنجيه بي بانتوكراتور إبشويس بينوتي.",
                de: "Der Heilige Leib und das kostbare Blut, die seinem Christus, dem Allmächtigen, unserem Herrn und Gott eigen sind.",
                ar: "الجسد المقدس، والدم الكريم، اللذان لمسيحه، الضابط الكل، الرب إلهنا.",
                cop_cop: "Ⲡⲓⲥⲱⲙⲁ ⲉⲑⲟⲩⲁⲃ : ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲛ̀ⲧⲉ Ⲡⲉϥⲭ̀ⲣⲓⲥⲧⲟⲥ : ⲛ̀ϫⲉ Ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ Ⲡϭⲟⲓⲥ Ⲡⲉⲛⲛⲟⲩϯ.",
                ar_de: "El-gasad el-moqaddas, wal-dam el-karim, ellazan le-masi7ehi, el-dabet el-kol, el-rabb elahona.",
                cop_de: "Pi-soma ethouav : nem pi-esnof et-taio-out : ente Pef-khristos : enge Pi-pantokrator Epchois Pennouti.",
            },
            {
                id: 88,
                speaker: "Diakon",
                cop_ar: "آمين. آمين بروسيف كساتي.",
                de: "Amen. Amen. Betet!",
                ar: "آمين، آمين، صلوا.",
                cop_cop: "Ⲁⲙⲏⲛ. Ⲁⲙⲏⲛ ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ.",
                ar_de: "Amin, Amin, sallou.",
                cop_de: "Amyn. Amyn prosevxasthe.",
            },
            {
                id: 89,
                speaker: "Volk",
                cop_ar: "كيريه ليسون.",
                de: "Herr erbarme Dich",
                ar: "يارب ارحم.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rab er7am.",
                cop_de: "Kyrie eleison.",
            },
            {
                id: 90,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit euch allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲒ.",
                cop_de: "Ireni pasi.",
                ar_de: "Eirene pasi.",
            },
            {
                id: 91,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Ke to pnevmati sou."
            },
            {
                id: 100,
                speaker: "Priester / Volk",
                ar: "اللهم اجعلنا مستحقين أن نقول بشكر: أبانا الذى فى السموات ليتقدس اسمك ليأتى ملكوتك لتكن مشيئتك كما فى السماء كذلك على الأرض خبزنا كفافنا أعطينا اليوم وأغفر لنا ذنوبنا، كما نغفر نحن أيضاً للمذنبين إلينا. ولا تدخلنا في تجربة. لكن نجنا من الشرير. بالمسيح يسوع ربنا، لأن لك الملك والقوة والمجد إلى الأبد. آمين.",
                de: "Mache uns würdig in Dankbarkeit zu sprechen: Vater unser im Himmel, geheiligt werde dein Name. Dein Reich komme, dein Wille geschehe wie im Himmel, so auf Erden. Unser tägliches Brot gib uns heute. Und vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern. Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen. Durch Christus Jesus, unseren Herrn, denn dein ist das Reich und die Kraft und die Herrlichkeit in Ewigkeit. Amen.",
                cop_ar: "أري تين إن إمبشا إيجوس خين أو شيب إهموت: جيه بين يوت إت خين ني فيؤوي: ماريف طوفو إنجيه بيك ران. ماريس إي إنجيه تيك ميت أورو. بيتيه هنا ك ماريف شوبي: إم إفريتي خين إتفي نيم هيجين بي كاهي. بين أويك إنتيه راستي ميف نان إمفو أو. أووه كا ني إت إيرون نان إيفول: إم إفريتي هون إنتين كو إيفول إن ني إتيه أوؤن إنتان إيرو أو. أووه إمبير إنتين إيخون إي بيرازموس: أللا ناهمين إيفول ها بي بيت هو أو. خين بي إخرستوس إيسوس بين شويس. جيه ثوك تيه تي ميت أورو نيم تي جوم نيم بي أو أو شا إينيه. آمين.",
                cop_cop: "Ⲁⲣⲓⲧⲉⲛ ⲛ̀ⲉ̀ⲙⲡϣⲁ ⲉ̀ϫⲟⲥ ϧⲉⲛ ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ: Ϫⲉ Ⲡⲉⲛⲓⲱⲧ ⲉⲧϧⲉⲛ ⲛⲓⲫⲏⲟⲩⲓ̀: ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ. Ⲙⲁⲣⲉⲥⲓ̀ ⲛ̀ϫⲉ ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ. Ⲡⲉⲧⲉϩⲛⲁⲕ ⲙⲁⲣⲉϥϣⲱⲡⲓ: ⲙ̀ⲫ̀ⲣⲏϯ ϧⲉⲛ ⲧ̀ⲫⲉ ⲛⲉⲙ ϩⲓϫⲉⲛ ⲡⲓⲕⲁϩⲓ. Ⲡⲉⲛⲱⲓⲕ ⲛ̀ⲧⲉ ⲣⲁⲥϯ ⲙⲏⲓϥ ⲛⲁⲛ ⲙ̀ⲫⲟⲟⲩ. Ⲟⲩⲟϩ ⲭⲁ ⲛⲏⲉⲧⲉⲣⲟⲛ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ: ⲙ̀ⲫ̀ⲣⲏϯ ϩⲱⲛ ⲛ̀ⲧⲉⲛⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲛⲏⲉⲧⲉ ⲟⲩⲟⲛ ⲛ̀ⲧⲁⲛ ⲉ̀ⲣⲱⲟⲩ. Ⲟⲩⲟϩ ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ: ⲁⲗⲗⲁ ⲛⲁϩⲙⲉⲛ ⲉ̀ⲃⲟⲗ ϩⲁ ⲡⲓⲡⲉⲧϩⲱⲟⲩ. Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ. Ϫⲉ ⲑⲱⲕ ⲧⲉ ϯⲙⲉⲧⲟⲩⲣⲟ ⲛⲉⲙ ϯϫⲟⲙ ⲛⲉⲙ ⲡⲓⲱ̀ⲟⲩ ϣⲁ ⲉ̀ⲛⲉϩ. Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ari-ten en-empsha e-jos khen ou-shephmot: Je Peniot et-khen ni-phi-oui: Maref-touvo enje pek-ran. Mares-i enje tek-met-ouro. Pete-hnak maref-shopi: em-phriti khen et-phe nem hijen pi-kahi. Pen-oik ente rasti mif nan em-pho-ou. Owoh ka ni-et-eron nan evol: em-phriti hon enten-ko evol en-ni-ete ouon entan ero-ou. Owoh emper-enten e-khoun e-pirasmos: alla nahmen evol ha pi-pet-ho-ou. Khen Pi-Khristos Isous Pen-chois. Je thok te ti-met-ouro nem ti-jom nem pi-o-ou sha eneh. Amen.",
                ar_de: "Allahomma eg3alna mostaheqqin an naqoul be-shokr: Abana allazi fi al-samawat, le-yataqaddas esmoka, le-ya2ti malakoutoka, le-takon mashi2atoka, kama fi al-sama2 kazalika 3ala al-ard. Khobzana kafafana a3tina al-yawm, wa aghfir lana zonoubana, kama naghfir nahno aydan lil-moznebin elayna. Wa la todkhilna fi tagriba, laken naggena min al-sherrir. Bel-Masih Yasou3 Rabbina, le-anna laka al-molk wal-qowwa wal-magd ela al-abad. Amen."
            },
            {
                id: 101,
                sectionTitle: {
                    de: "Das Bekenntnis",
                    ar: "الاعتراف"
                },
                speaker: "Volk",
                ar: "بالمسيح يسوع ربنا.",
                de: "Durch Christus Jesus, unsern Herrn.",
                cop_ar: "خين بي إخرستوس إيسوس بين تشويس.",
                cop_cop: "Ϧⲉⲛ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲉⲛϭⲟⲓⲥ.",
                cop_de: "Khen Pi-Khristos Isous Pen-chois.",
                ar_de: "Bel-Masih Yasou3 Rabbina."
            },
            {
                id: 102,
                speaker: "Diakon",
                ar: "احنوا رؤوسكم للرب.",
                de: "Neigt euer Haupt vor dem Herrn!",
                cop_ar: "طاس كيفالاس إيمون طو كيريو كليناتيه.",
                cop_cop: "Ⲧⲁⲥ ⲕⲉⲫⲁⲗⲁⲥ ⲩ̀ⲙⲱⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ ⲕⲗⲓⲛⲁⲧⲉ.",
                cop_de: "Tas kefalas ymon to kyrio klinate.",
                ar_de: "E7nou ro2ousakom lel-Rabb."
            },
            {
                id: 103,
                speaker: "Volk",
                ar: "أمامك يا رب (خاضعين وساجدين).",
                de: "Vor Dir, o Herr. (Wir sind dir ergeben und knien)",
                cop_ar: "إينوبيون صو كيريه.",
                cop_cop: "Ⲉⲛⲱⲡⲓⲟⲛ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ.",
                cop_de: "Enopion so Kyrie.",
                ar_de: "Amamaka ya Rabb."
            },
            {
                id: 104,
                speaker: "Diakon",
                ar: "ننصت بخوف الله آمين.",
                de: "Wir hören in Gottesfurcht zu. Amen.",
                cop_ar: "إبروس خومين ثيه أوميه طافوفو: آمين.",
                cop_cop: "Ⲡⲣⲟⲥⲭⲱⲙⲉⲛ Ⲑⲉⲱ ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ: Ⲁⲙⲏⲛ.",
                cop_de: "Epros khomin thie omieh tafovo: Amen.",
                ar_de: "Nonsit be-khawf Allah. Amen."
            },
            {
                id: 105,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 106,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan."
            },
            {
                id: 107,
                speaker: "Priester",
                ar: "أذكر يارب اجتماعاتنا باركها.",
                de: "Gedenke, o Herr, unserer Versammlung und segne sie.",
                cop_ar: "أرى إفميفئي إبشويس إن نين جينثؤوتى إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲫ̀ⲙⲉⲩⲓ̀ Ⲡ̀ϭⲟⲓⲥ ⲛ̀ⲛⲉⲛϫⲓⲛⲑⲱⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-phmevi Epchois en-nen-jin-thou-ti smou ero-ou.",
                ar_de: "Ozkor ya Rabb igtima3atana barikha."
            },
            {
                id: 108,
                speaker: "Diakon",
                ar: "خلصت حقاً، ومع روحك، ننصت بخوف الله.",
                de: "Amen erlöst. Und mit deinem Geiste. Wir hören in Gottesfurcht zu.",
                cop_ar: "سوتيس آمين كيه طو إبنيفماتي صو: ميه طافوفو ثيه إو بروس خومين.",
                cop_cop: "Ⲥⲱⲑⲏⲥ ⲁ̀ⲙⲏⲛ. Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ. Ⲙⲉⲧⲁ ⲫⲟⲃⲟⲩ Ⲑⲉⲟⲩ ⲡⲣⲟⲥⲭⲱⲙⲉⲛ.",
                cop_de: "Sotis Amen. Ke to pnevmati sou. Meta fovou Theou proschomen.",
                ar_de: "Khollesat haqqan, wa ma3a rouhika, nonsit be-khawf Allah."
            },
            {
                id: 109,
                speaker: "Volk",
                ar: "آمين (يارب ارحم.)3",
                de: "Amen. Herr erbarme Dich.(3)",
                cop_ar: "آمين (كيريه ليسون.)3",
                cop_cop: "Ⲁⲙⲏⲛ (Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) ⲅ̅.",
                cop_de: "Amen (Kyrie eleyson) 3.",
                ar_de: "Amen (Ya Rabb erham) 3."
            },
            {
                id: 110,
                speaker: "Priester",
                ar: "القدسات للقديسين مبارك الرب يسوع المسيح ابن الله وقدوس الروح القدس آمين",
                de: "Das Heilige den Heiligen. Gepriesen sei der Herr Jesus Christus, der Sohn Gottes. Heiligung ist der Heilige Geist.Amen.",
                cop_ar: "طا آجياتيس أجيس إفلوجيطوس كيريوس إيسوس إخرستوس إيوس ثيئو أجياسموس بنيفما أجيون آمين",
                cop_cop: "Ⲧⲁ ⲁ̀ⲅⲓⲁ ⲧⲟⲓⲥ ⲁ̀ⲅⲓⲟⲓⲥ: ⲉⲩⲗⲟⲅⲏⲧⲟⲥ Ⲕⲩⲣⲓⲟⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲩⲓⲟⲥ Ⲑⲉⲟⲩ: ⲁ̀ⲅⲓⲁⲥⲙⲟⲥ Ⲡ̀ⲛⲉⲩⲙⲁ Ⲁ̀ⲅⲓⲟⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Ta agia tois agiois: evlogitos Kyrios Isous Pi-Khristos Yios Theou: agiasmos Pnevma Agion amen.",
                ar_de: "El-qodassat lel-qaddisin mobarak el-Rabb Yasou3 el-Masih ibn Allah wa qoddous el-Rouh el-Qoddous Amen."
            },
            {
                id: 111,
                speaker: "Volk",
                ar: "واحد هو الآب القدوس، واحد هو الابن القدوس، واحد هو الروح القدس: آمين.",
                de: "Amen. Einer ist der Heilige Vater. Einer ist der Heilige Sohn. Einer ist der Heilige Geist. Amen.",
                cop_ar: "إس أو بان آجيوس باتير: إس أو بان آجيوس إيوس: إن طوبان آجيون إبنيفما: آمين.",
                cop_cop: "Ⲉⲓⲥ Ⲡⲁⲧⲏⲣ ⲁ̀ⲅⲓⲟⲥ: ⲉⲓⲥ Ⲩⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: ⲉⲛ Ⲡ̀ⲛⲉⲩⲙⲁ Ⲁ̀ⲅⲓⲟⲛ: ⲁ̀ⲙⲏⲛ.",
                cop_de: "Es ou pan agios patir: es ou pan agios yios: en to pan agion pnevma: amen.",
                ar_de: "Wahed howa al-Ab al-Qoddous, wahed howa al-Ibn al-Qoddous, wahed howa al-Rouh al-Qoddous: Amen."
            },
            {
                id: 112,
                speaker: "Priester",
                ar: "السلام لجميعكم.",
                de: "Friede sei mit allen.",
                cop_ar: "إيريني باسي.",
                cop_cop: "Ⲓⲣⲏⲛⲏ ⲡⲁⲥⲓ.",
                cop_de: "Ireni pasi.",
                ar_de: "El-salam le-gami3okom."
            },
            {
                id: 113,
                speaker: "Volk",
                ar: "ولروحك أيضاً.",
                de: "Und mit deinem Geiste.",
                cop_ar: "كيه طو إبنيفماتي سو.",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ.",
                cop_de: "Ke to pnevmati sou.",
                ar_de: "Wa-le-rouheka aydan."
            },
            {
                id: 114,
                speaker: "Priester",
                ar: "جسد مقدس ودم كريم حقيقي ليسوع المسيح ابن إلهنا آمين",
                de: "Heiliger Leib und kostbares, wahres Blut Jesu Christi, des Sohnes unseres Gottes. Amen.",
                cop_ar: "سوما أجيون كى إيما تيميون آليثينون إيسو خرستو طو إيو طو ثيئو إيمون آمين",
                cop_cop: "Ⲥⲱⲙⲁ ⲁ̀ⲅⲓⲟⲛ ⲕⲉ ⲉ̀ⲙⲁ ⲧⲓⲙⲓⲟⲛ ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲧⲟⲩ Ⲩⲓⲟⲩ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲏ̀ⲙⲱⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Soma agion ke ema timion alithinon Isou Khristou tou yiou tou Theou imon amen.",
                ar_de: "Gasad moqaddas wa dam karim haqiqi le-Yasou3 el-Masih ibn ilahina amen."
            },
            {
                id: 115,
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amen.",
                ar_de: "Amen."
            },
            {
                id: 116,
                speaker: "Priester",
                ar: "مقدس وكريم جسد ودم حقيقي ليسوع المسيح ابن إلهنا آمين",
                de: "Heilig und kostbar sind der Leib und das wahre Blut Jesu Christi, des Sohnes unseres Gottes, Amen.",
                cop_ar: "أجيون تيمون سوما كى إيما اليثينوس إيسو خرستو طو إيو طو ثيئو إيمون آمين",
                cop_cop: "Ⲁ̀ⲅⲓⲟⲛ ⲧⲓⲙⲓⲟⲛ ⲥⲱⲙⲁ ⲕⲉ ⲉ̀ⲙⲁ ⲁ̀ⲗⲏⲑⲓⲛⲟⲛ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲧⲟⲩ Ⲩⲓⲟⲩ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲏ̀ⲙⲱⲛ ⲁ̀ⲙⲏⲛ.",
                cop_de: "Agion timion soma ke ema alithinon Isou Khristou tou Yiou tou Theou imon amen.",
                ar_de: "Moqaddas wa karim gasad wa dam haqiqi le-Yasou3 el-Masih ibn ilahina amen."
            },
            {
                id: 117,
                speaker: "Volk",
                ar: "آمين.",
                de: "Amen.",
                cop_ar: "آمين.",
                cop_cop: "Ⲁ̀ⲙⲏⲛ.",
                cop_de: "Amen.",
                ar_de: "Amen."
            },
            {
                id: 118,
                speaker: "Priester",
                ar: "جسد ودم عمانوئيل إلهنا هذا هو بالحقيقة آمين",
                de: "Der Leib und das Blut Emmanuels, unseres Gottes, dies ist es in Wahrheit. Amen.",
                cop_ar: "بي سوما نيم بي إسنوف إنتي إيمانوئيل بيننوتي فاي بي خين أو ميثمي آمين",
                cop_cop: "Ⲡⲓⲥⲱⲙⲁ ⲛⲉⲙ ⲡⲓⲥ̀ⲛⲟϥ ⲛ̀ⲧⲉ Ⲉⲙⲙⲁⲛⲟⲩⲏⲗ Ⲡⲉⲛⲛⲟⲩϯ: ⲫⲁⲓ ⲡⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ.",
                cop_de: "Pi-soma nem pi-snof ente Emmanouel Pen-nouti phai pe khen ou-methmi amen.",
                ar_de: "Gasad wa dam Emmanuel ilahina haza howa bel-haqiqa amen."
            },
            {
                id: 119,
                speaker: "Volk",
                ar: "حقاً أؤمن.",
                de: "Amen. Ich glaube",
                cop_ar: "آمين. تي ناهتي",
                cop_cop: "Ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ.",
                cop_de: "Amen: ti-nahti.",
                ar_de: "Haqqan O2men."
            },
            {
                id: 120,
                speaker: "Priester",
                // Das vollständige Bekenntnis, zusammengesetzt aus 7 Bildern
                ar: "أمين أمين أمين أومن أومن أومن واعترف إلى النفس الأخير أن هذا هو الجسد المحيي الذي أخذه ابنك الوحيد ربنا وإلهنا ومخلصنا يسوع المسيح من سيدتنا كلنا وملكتنا والدة الإله القديسة الطاهرة مريم وجعله واحد مع لاهوت بغير اختلاط ولا امتزاج ولا تغيير واعترف الاعتراف الحسن أمام بيلاطس البنطي وأسلمه عنا على خشبة الصليب المقدسة بإرادته وحده عنا كلنا بالحقيقة أؤمن أن لاهوته لم يفارق ناسوته لحظة واحدة ولا طرفة عين يعطى عنا خلاصاً وغفراناً للخطايا وحياة أبدية لمن يتناول منه أومن أومن أومن أن هذا هو بالحقيقة آمين.",

                de: "Amen, Amen, Amen. Ich glaube! Ich glaube! Ich glaube und bekenne bis zum letzten Atemzug, dass dies der lebensspendende Leib ist, der deinem eingeborenen Sohn, unserem Herrn, unserem Gott und unserem Erlöser Jesus Christus eigen ist. Er nahm ihn von unserer Herrin und unser aller Königin, der Mutter Gottes, der heiligen, vollkommen reinen Maria. Er machte ihn eins mit seiner Gottheit ohne Vermischung, ohne Verquickung und ohne Veränderung. Er legte das gute Bekenntnis vor Pontius Pilatus ab. Er gab ihn für uns an das Holz des Kreuzes, allein durch seinen eigenen Willen für uns alle. In Wahrheit glaube ich, dass seine Gottheit seine Menschheit keinen Moment lang und keinen einzigen Augenblick verlassen hat. Er wird hingegeben zu unserer Erlösung und zur Vergebung der Sünden und zum ewigen Leben derer, die an ihm Anteil haben. Ich glaube! Ich glaube! Ich glaube, dass dies Wahrheit ist. Amen.",

                cop_ar: "آمين آمين آمين تيناهتى تيناهتى تيناهتى أووه تيئير أومولوجين شابى نيفى إنخائية جى ثاى تى تيساريكس إنريف إيطا بيك مونوجينيس انشيرى بين شويس أووه بيننوتى أووه بينسوتير إيسوس بى اخرستوس تشيتس إيفول خين تينشويس إننيف تيرين تى ثيئوطوكوس إثؤواب تى أجيا ماريا آف أيس أنؤواى نيم تيفميثنوتى خين أوميت أتموجت نيم أوميت أتثوخ نيم أوميت أتشيفتى إى إفئير أومولوجين إنتى تى أومولوجيا إيثنانى ناهرين بونتيوس بيلاطوس أفتيس إى إهرى إيجون هيجين بى شى إثؤواب إنتى بى استافروس خين بيف أووش إممين إمموف إى إهرى إيجون تيرين أليثوس تيناهتى جى امبى تيفميثنوتى فورج إيتيفميت رومى ان أوسوسو انؤواوت أوذى أوريكى امفال إفتى امموس إيجون أن أو سوتى نيم أوكو إيفول إنتى نى نوفى نيم أو أونخ أن إينيه إن نيئثناتشى إيفول انخيتس تيناهتى تيناهتى تيناهتى جى ثاى تى خين أوميثمى آمين.",

                cop_cop: "Ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ ⲟⲩⲟϩ ϯⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ϣⲁ ⲡⲓⲛⲓϥⲓ ⲛ̀ϧⲁⲉ̀: ϫⲉ ⲑⲁⲓ ⲧⲉ ϯⲥⲁⲣⲝ ⲛ̀ⲣⲉϥⲧⲁⲛϧⲟ: ⲑⲏⲉ̀ⲧⲁϥϭⲓⲧⲥ ⲛ̀ϫⲉ ⲡⲉⲕⲙⲟⲛⲟⲅⲉⲛⲏⲥ ⲛ̀Ϣⲏⲣⲓ Ⲡⲉⲛϭⲟⲓⲥ ⲟⲩⲟϩ Ⲡⲉⲛⲛⲟⲩϯ ⲟⲩⲟϩ Ⲡⲉⲛⲥⲱⲧⲏⲣ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ: ϯⲑⲉⲟ̀ⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ ϯⲁ̀ⲅⲓⲁ Ⲙⲁⲣⲓⲁ: ⲁϥⲁⲓⲥ ⲛ̀ⲟⲩⲁⲓ ⲛⲉⲙ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ: ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩϫⲧ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧⲑⲱϧ ⲛⲉⲙ ⲟⲩⲙⲉⲧⲁⲧϣⲓⲃϯ. Ⲁϥⲉⲣⲟ̀ⲙⲟⲗⲟⲅⲓⲛ ⲛ̀ϯⲟ̀ⲙⲟⲗⲟⲅⲓⲁ ⲉⲑⲛⲁⲛⲉⲥ ⲛⲁϩⲣⲉⲛ Ⲡⲟⲛⲧⲓⲟⲥ Ⲡⲓⲗⲁⲧⲟⲥ: ⲁϥⲧⲏⲓⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ϩⲓϫⲉⲛ ⲡⲓϣⲉ ⲉⲑⲟⲩⲁⲃ: ⲛ̀ⲧⲉ ⲡⲓⲥⲧⲁⲩⲣⲟⲥ ϧⲉⲛ ⲡⲉϥⲟⲩⲱϣ ⲙ̀ⲙⲓⲛ ⲙ̀ⲙⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲧⲏⲣⲉⲛ. Ⲁ̀ⲗⲏⲑⲱⲥ ϯⲛⲁϩϯ ϫⲉ ⲙ̀ⲡⲉ ⲧⲉϥⲙⲉⲑⲛⲟⲩϯ ⲫⲱⲣϫ ⲉ̀ⲧⲉϥⲙⲉⲧⲣⲱⲙⲓ: ⲛ̀ⲟⲩⲥⲟⲥⲟⲩ ⲛ̀ⲟⲩⲱⲧ: ⲟⲩⲇⲉ ⲟⲩⲣⲓⲕⲓ ⲛ̀ⲃⲁⲗ. Ⲉϥϯ ⲙ̀ⲙⲟⲥ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲁⲛ ⲟⲩⲥⲱϯ: ⲛⲉⲙ ⲟⲩⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲓⲛⲟⲃⲓ: ⲛⲉⲙ ⲟⲩⲱⲛϧ ⲛ̀ⲉ̀ⲛⲉϩ ⲛ̀ⲛⲏⲉⲑⲛⲁϭⲓ ⲉ̀ⲃⲟⲗ ⲛ̀ϧⲏⲧⲥ. Ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ: ϫⲉ ⲑⲁⲓ ⲧⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ.",

                cop_de: "Amen amen amen ti-nahti ti-nahti ti-nahti owoh ti-er omologin sha-pi nifi en-kha-e-e je thai te ti-sarx en-ref-tan-kho. Pek-monogenis en-shiri pen-chois owoh pen-nouti owoh pen-sotir isous pi-khristos chi-ts evol khen ten-chois en-nib ti-ren. Ti-theotokos ethouab ti-agia maria af-ais en-ouai nem tef-met-nouti khen ou-met-at-moj-t nem ou-met-at-thokh nem ou-met-at-shiv-ti. E-af-er-omologin ente ti-omologia et-nane nahren pontios pilatos af-tis e-ehri egon hijen pi-she ethouab. Ente pi-stavros khen pef-ouosh em-min em-mof e-ehri egon ti-ren alethos ti-nahti je empi-tef-met-nouti forg e-tef-met-romi en-ou-soso en-ou-ot. Oude ou-riki em-val ef-ti emmos egon en-ou-soti nem ou-ko evol ente ni-novi nem ou-onkh en-eneh en-ni-ethna-chi evol en-khits. Ti-nahti ti-nahti ti-nahti je thai te khen ou-methmi amen.",

                ar_de: "Amen Amen Amen O2men O2men O2men wa a3tref ela al-nafas al-akhir anna haza howa al-gasad al-mohyi allazi akhazaho abnok al-wahid rabbuna wa ilahuna wa mokhallesuna Yasou3 el-Masih men sayedatuna kollona wa malikatuna walidat el-ilah al-qadisa al-tahira Maryam wa ga3alaho wahed ma3a lahout be-ghayr ekhtilat wa la emtizag wa la taghyir wa a3taraf al-e3traf al-hasan amam Pilatos al-bonti wa aslamaho 3anna 3ala khashabat al-salib al-moqadasa be-iradathu wahdahu 3anna kollona bel-haqiqa o2men anna lahoutaho lam yofareq nasoutaho lahza wahda wa la tarfata 3ayn yo3ta 3anna khalasan wa ghofranan lel-khataya wa hayah abadiya leman yatanawal menho O2men O2men O2men anna haza howa bel-haqiqa Amen."
            },
            {
                id: 121,
                speaker: "Diakon & Volk",
                // Reihenfolge: Amen -> Bittet -> Friede -> Betet -> Heilige
                ar: "آمين آمين آمين أومن أومن أومن أن هذا هو بالحقيقة آمين. اطلبوا عنا وعن كل المسيحيين الذين قالوا لنا من أجلهم أن نذكرهم في بيت الرب. سلام ومحبة يسوع المسيح معكم، رتلوا بنشيد هلليلويا. صلوا من أجل التناول باستحقاق من الأسرار المقدسة الطاهرة السمائية يارب ارحم.",

                de: "Amen, Amen, Amen. Ich glaube, ich glaube, ich glaube, dass dies wahrhaftig Wahrheit ist. Amen. Bittet für uns und für alle Christen, die uns gebeten haben, ihrer im Hause des Herrn zu gedenken. Der Friede und Liebe Jesu Christi seien mit euch. Singt Lob u Preis. Halleluja. Betet für die würdige Teilhabe an diesem himmlischen heiligen Sakrament. Herr erbarme Dich.",

                cop_ar: "آمين آمين آمين تي ناهتي تي ناهتي تي ناهتي جيه ثاي تيه خين أوميثمي آمين. طوبه إيه إهرى إيه جون نيم إيه جين نى إخرستيانوس نيفين إيه طافجوس نان إثفيتو: جيه آرى بين ميفئي خين إب إي إم إبتشويس. إيريني كيه آغابي إيسو إخرستو ميث إيمون إبصالتيه جو اللليلويا. إبروس إفخصاصتيه إبير تيس أكسياس ميه طالى إبسيه أوس أكرانطون كيه إيه بورانيون طون آجيون ميستيريون: كيريه ليسون.",

                cop_cop: "Ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ ⲁ̀ⲙⲏⲛ: ϯⲛⲁϩϯ ϯⲛⲁϩϯ ϯⲛⲁϩϯ: ϫⲉ ⲑⲁⲓ ⲧⲉ ϧⲉⲛ ⲟⲩⲙⲉⲑⲙⲏⲓ: ⲁ̀ⲙⲏⲛ. Ⲧⲱⲃϩ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲱⲛ ⲛⲉⲙ ⲉ̀ϫⲉⲛ ⲛⲓⲭ̀ⲣⲓⲥⲧⲓⲁⲛⲟⲥ ⲛⲓⲃⲉⲛ ⲉ̀ⲧⲁⲩϫⲟⲥ ⲛⲁⲛ ⲉⲑⲃⲏⲧⲟⲩ: ϫⲉ ⲁ̀ⲣⲓⲡⲉⲛⲙⲉⲩⲓ̀ ϧⲉⲛ ⲡ̀ⲏⲓ ⲙ̀Ⲡ̀ϭⲟⲓⲥ. Ⲓⲣⲏⲛⲏ ⲕⲉ ⲁ̀ⲅⲁⲡⲏ Ⲓⲏⲥⲟⲩ Ⲭ̀ⲣⲓⲥⲧⲟⲩ ⲙⲉⲑ̀ ⲩ̀ⲙⲱⲛ. Ⲩⲁⲗⲁⲧⲉ ϫⲱ Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ. Ⲡ̀ⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩ̀ⲡⲉⲣ ⲧⲏⲥ ⲁ̀ⲝⲓⲁⲥ ⲙⲉⲧⲁⲗⲏⲙⲯⲉⲱⲥ ⲧⲱⲛ ⲁ̀ⲭⲣⲁⲛⲧⲱⲛ ⲕⲉ ⲉ̀ⲡⲟⲩⲣⲁⲛⲓⲱⲛ ⲧⲱⲛ ⲁ̀ⲅⲓⲱⲛ ⲙⲩⲥⲧⲏⲣⲓⲱⲛ: Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.",

                cop_de: "Amen Amen Amen ti-nahti ti-nahti ti-nahti je thai te khen ou-methmi amen. Tobh e-ehri e-gon nem e-jen ni-khristianos niven etav-jos nan ethvitou: je ari-pen-mevi khen ep-i em-p-chois. Ireni ke agapi Isou Khristou meth imon psalate go Allelouia. Prosev-xasthe hyper tis axias meta-lim-pseos ton akhranton ke epouranion ton agion mystirion: Kyrie eleyson.",

                ar_de: "Amen Amen Amen O2men O2men O2men anna haza howa bel-haqiqa Amen. Otlobu 3anna wa 3an kol el-masihiyin allazin qalou lana men aglehom an nazkorohom fi bayt el-rabb. Salam wa mahabbat Yasou3 el-Masih ma3akom, rattilou be-nashid Hallelujah. Sallou men agl el-tanawol be-estehqaq men el-asrar el-moqadasa el-tahira el-sama2eya ya rabb erham."
            },
            {
                id: 122,
                speaker: "Volk",
                ar: "المجد لك يارب المجد لك.",
                de: "Ehre sei Dir, o Herr. Herr, Ehre sei Dir.",
                cop_ar: "ذوكصاصى كيريه ذوكصاصى.",
                cop_cop: "Ⲇⲟⲝⲁ ⲥⲟⲓ Ⲕⲩⲣⲓⲉ ⲇⲟⲝⲁ ⲥⲟⲓ.",
                cop_de: "Doxa si Kyrie doxa si.",
                ar_de: "El-magd laka ya Rabb, el-magd laka."
            },
            {
                id: 123,
                sectionTitle: {
                    de: "Psalm 150",
                    ar: "المزمور 150"
                },
                speaker: "Volk",
                ar: "سبحوا الله، في جميع قديسيه، هليلويا.",
                de: " Lobt Gott in seinem Heiligtum! Halleluja.",
                cop_ar: "إزمو إي إفنوتى خين نى إثؤواب تيرو إنتاف: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲫ̀ⲛⲟⲩϯ ϧⲉⲛ ⲛⲏⲉⲑⲟⲩⲁⲃ ⲧⲏⲣⲟⲩ ⲛ̀ⲧⲁϥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou e-Phnouti khen ni-ethouab tirou entaf: Allelouia.",
                ar_de: "Sabbihou Allah fi gami3 qadissih, Hallelujah."
            },
            {
                id: 124,
                speaker: "Volk",
                ar: "سبحوه في جلد قوته، هليلويا.",
                de: "Lobt ihn in seiner mächtigen Feste! Halleluja.",
                cop_ar: "إزمو إيروف خين بى تاجرو إنتيه تيفجوم: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲡⲓⲧⲁϫⲣⲟ ⲛ̀ⲧⲉ ⲧⲉϥϫⲟⲙ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen pi-tajro ente tef-jom: Allelouia.",
                ar_de: "Sabbihouhou fi galad qowatih, Hallelujah."
            },
            {
                id: 125,
                speaker: "Volk",
                ar: "سبحوه على مقدرته، هليلويا.",
                de: "Lobt ihn für seine großen Taten! Halleluja.",
                cop_ar: "إزمو إيروف إهرى هيجين تيف ميت جوري: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲉ̀ϩ̀ⲣⲏⲓ ϩⲓϫⲉⲛ ⲧⲉϥⲙⲉⲧϫⲱⲣⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof ehri hijen tef-met-jori: Allelouia.",
                ar_de: "Sabbihouhou 3ala maqdaratih, Hallelujah."
            },
            {
                id: 126,
                speaker: "Volk",
                ar: "سبحوه ككثرة عظمته، هليلويا.",
                de: "Lobt ihn in seiner gewaltigen Größe! Halleluja.",
                cop_ar: "إزمو إيروف كاتا إب أوشا إنتيه تيف ميت نيشتى: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ⲕⲁⲧⲁ ⲡ̀ⲁϣⲁⲓ ⲛ̀ⲧⲉ ⲧⲉϥⲙⲉⲧⲛⲓϣϯ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof kata ep-ashai ente tef-met-nishti: Allelouia.",
                ar_de: "Sabbihouhou kata kathrat 3azmatih, Hallelujah."
            },
            {
                id: 127,
                speaker: "Volk",
                ar: "سبحوه بصوت البوق، هليلويا.",
                de: "Lobt ihn mit dem Schall des Horns! Halleluja.",
                cop_ar: "إزمو إيروف خين أو إسمى إن سيلبينغوس: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲥ̀ⲙⲏ ⲛ̀ⲥⲁⲗⲡⲓⲅⲅⲟⲥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen ou-smi en-salpingos: Allelouia.",
                ar_de: "Sabbihouhou be-sawt el-bouq, Hallelujah."
            },
            {
                id: 128,
                speaker: "Volk",
                ar: "سبحوه بمزمار وقيثارة، هليلويا.",
                de: "Lobt ihn mit Harfe und Zither! Halleluja.",
                cop_ar: "إزمو إيروف خين أو إبسالتيريون نيم أو كيثارا: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ⲟⲩⲯⲁⲗⲧⲏⲣⲓⲟⲛ ⲛⲉⲙ ⲟⲩⲕⲓⲑⲁⲣⲁ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen ou-psaltirion nem ou-kithara: Allelouia.",
                ar_de: "Sabbihouhou be-mezmar wa qithara, Hallelujah."
            },
            {
                id: 129,
                speaker: "Volk",
                ar: "سبحوه بدفوف وصفوف، هليلويا.",
                de: " Lobt ihn mit Pauken und Reigen! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيم كيم نيم هان خورس: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲉⲙⲕⲉⲙ ⲛⲉⲙ ϩⲁⲛⲭⲟⲣⲟⲥ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kemkem nem han-khoros: Allelouia.",
                ar_de: "Sabbihouhou be-dofouf wa sofouf, Hallelujah."
            },
            {
                id: 130,
                speaker: "Volk",
                ar: "سبحوه بأوتار وأرغن، هليلويا.",
                de: "Lobt ihn mit Flöten und Saitenspiel! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كاب نيم أو أورغانون: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲁⲡ ⲛⲉⲙ ⲟⲩⲟⲣⲅⲁⲛⲟⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kap nem ou-organon: Allelouia.",
                ar_de: "Sabbihouhou be-awtar wa organ, Hallelujah."
            },
            {
                id: 131,
                speaker: "Volk",
                ar: "سبحوه بصنوج حسنة الصوت، هليلويا.",
                de: " Lobt ihn mit wohlklingenden Zimbeln! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيمفالون إن إيسيتو إيسمى: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲉⲛⲉⲥⲉⲧⲟⲩⲥ̀ⲙⲏ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kimvalon en-esetou-smi: Allelouia.",
                ar_de: "Sabbihouhou be-sonoug hasanat el-sawt, Hallelujah."
            },
            {
                id: 132,
                speaker: "Volk",
                ar: "سبحوه بصنوج التهليل، هليلويا.",
                de: "Lobt ihn mit schallenden Zimbeln! Halleluja.",
                cop_ar: "إزمو إيروف خين هان كيمفالون إنتيه أو إيشميليل: الليلويا.",
                cop_cop: "Ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲟϥ ϧⲉⲛ ϩⲁⲛⲕⲩⲙⲃⲁⲗⲟⲛ ⲛ̀ⲧⲉ ⲟⲩⲉϣⲗⲏⲗⲟⲩⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Smou erof khen han-kimvalon ente ou-eshleloui: Allelouia.",
                ar_de: "Sabbihouhou be-sonoug el-tahlil, Hallelujah."
            },
            {
                id: 133,
                speaker: "Volk",
                ar: "كل نسمة فلتسبح اسم الرب إلهنا، هليلويا.",
                de: " Alles, was atmet, lobe den Namen des Herrn, unseres Gottes! Halleluja.",
                cop_ar: "نيفيفى نيفين مارو إزمو تيرو إي إفران إم إبشويس بين نوتى: الليلويا.",
                cop_cop: "Ⲛⲓϥⲉⲓϥⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲣⲟⲩⲥ̀ⲙⲟⲩ ⲧⲏⲣⲟⲩ ⲉ̀ⲫ̀ⲣⲁⲛ ⲙ̀Ⲡ̀ϭⲟⲓⲥ ⲡⲉⲛⲛⲟⲩϯ: Ⲁ̅Ⲗ̅.",
                cop_de: "Nifeifi niben marousmou tirou e-phran em-Pchois pennouti: Allelouia.",
                ar_de: "Kol nasama feltosabbih ism el-Rabb ilahina, Hallelujah."
            },
            {
                id: 134,
                speaker: "Volk",
                ar: "المجد للآب والابن والروح القدس، هليلويا.",
                de: "Ehre sei dem Vater und dem Sohn und dem Heiligen Geist. Halleluja.",
                cop_ar: "ذوكصا باترى نيم إيو نيم أجيو إبنوماتى: الليلويا.",
                cop_cop: "Ⲇⲟⲝⲁ Ⲡⲁⲧ̀ⲣⲓ ⲕⲉ Ⲩⲓⲱ ⲕⲉ Ⲁⲅⲓⲱ Ⲡ̀ⲛⲉⲩⲙⲁⲧⲓ: Ⲁ̅Ⲗ̅.",
                cop_de: "Doxa Patri ke Yio ke Agio Pnevmati: Allelouia.",
                ar_de: "El-magd lel-Ab wal-Ibn wal-Rouh el-Qodos, Hallelujah."
            },
            {
                id: 135,
                speaker: "Volk",
                ar: "الآن وكل أوان وإلى دهر الدهور آمين، هليلويا.",
                de: " Jetzt und immerdar und in Ewigkeit. Amen. Halleluja.",
                cop_ar: "كى نين كى آ إى كى إيستوس إي أوناس تون إي أونون آمين: الليلويا.",
                cop_cop: "Ⲕⲉ ⲛⲩⲛ ⲕⲉ ⲁ̀ⲉⲓ ⲕⲉ ⲉⲓⲥ ⲧⲟⲩⲥ ⲁⲓⲱⲛⲁⲥ ⲧⲱⲛ ⲁⲓⲱⲛⲱⲛ: Ⲁ̀ⲙⲏⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Ke nin ke ai ke istous e-onas ton e-onon: Amin: Allelouia.",
                ar_de: "Al-an wa kol awan wa ila dahr el-dohour, Amin, Hallelujah."
            },
            {
                id: 136,
                speaker: "Volk",
                ar: "هليلويا، هليلويا، المجد لك يا إلهنا، هليلويا.",
                de: "Halleluja, Halleluja, Ehre sei Dir, unser Gott. Halleluja.",
                cop_ar: "الليلويا، الليلويا، ذوكصاصى أو ثيؤوس إيمون: الليلويا.",
                cop_cop: "Ⲁ̅Ⲗ̅ Ⲁ̅Ⲗ̅: Ⲇⲟⲝⲁ ⲥⲟⲓ ⲟ̔ Ⲑⲉⲟⲥ ⲏ̔ⲙⲱⲛ: Ⲁ̅Ⲗ̅.",
                cop_de: "Allelouia, Allelouia: Doxa si o Theos imon: Allelouia.",
                ar_de: "Hallelujah, Hallelujah, el-magd laka ya ilahina, Hallelujah."
            },
            {
                id: 137,
                speaker: "Volk",
                ar: "هليلويا، هليلويا، المجد لإلهنا، هليلويا.",
                de: " Halleluja, Halleluja, Ehre sei unserem Gott. Halleluja.",
                cop_ar: "الليلويا، الليلويا، بى أواو إن بين نوتى بيه: الليلويا.",
                cop_cop: "Ⲁ̅Ⲗ̅ Ⲁ̅Ⲗ̅: Ⲡⲓⲱⲟⲩ ⲙ̀ⲡⲉⲛⲛⲟⲩϯ ⲡⲉ: Ⲁ̅Ⲗ̅.",
                cop_de: "Allelouia, Allelouia: Pi-o-ou em-pennouti pe: Allelouia.",
                ar_de: "Hallelujah, Hallelujah, el-magd le-ilahina, Hallelujah."
            },




        ],
    },









    // ... nach gregorios, kerollosy, basily ...

    // NEUE SEITE 1: Freu dich Maria
    rejoice_mary: {
        title: {
            de: "Freu dich Maria (Aspasmos Watos)",
            ar: "افرحي يا مريم (أسباسموس واطس)"
        },
        content: [
            // HIER KANNST DU SPÄTER DEN CONTENT EINFÜGEN
            {
                id: 1,
                speaker: "Volk",
                ar: "قريباً...",
                de: "In Kürze...",
                cop_ar: "..."
            }
        ]
    },




    //اللي تحت ده تبعي انا في الباسيلي بس لازم يتكتب هنا 







    // ============================================================
    // 1. Freu dich Maria (Aspasmos Watos)
    // ============================================================
    rejoice_mary: {
        title: {
            de: "Freu dich Maria (Aspasmos Watos)",
            ar: "افرحي يا مريم (أسباسموس واطس)"
        },
        content: [
            {
                id: 1,
                speaker: "Volk",
                cop_ar: "أونوف إم مو ماريا تي فوكي أووه تي ماف: جي في إتخين بي أمير: ني أنجيلوس سيه هوس إيه روف.\nأووه ني شيروبيم: سي أوأوشت إمموف أكسيوس: نيم ني سيرافيم خين أوميت أتمونك.\nإم مون إنطان إن أو باريسيا: خاتين بين تشويس إيسوس بي إخرستوس.\nخوريس نيه طوبه نيم نيه إبريسفيا: أوتين تشويس إن نيب تيرين تي ثيه أوطوكوس.\nهينا إنتين هوس ايه روك: نيم ني شيروبيم نيم ني سيافيم: إن أوش إيفول إنجو إمموس.\nجيه اكؤواب اكؤواب اكؤواب: إبتشويس بي بانطوكراتور: إتفيه نيم إبكاهي ميه إيفول خين بيك أو أو نيم بيك طايو.",
                de: "Freue dich, Maria, Magd und Mutter, denn ihn, der in deinem Schoß ist, loben die Engel.\nDie Cherubim beten ihn würdigend an und die Seraphim ohne Unterlass.\nKeinen Anspruch haben wir bei unserem Herrn Jesus Christus.\naußer Deiner Fürsprache und Deinen Gebeten für uns, o unser aller Herrin, Herrin und Mutter Gottes.\nDamit wir dich loben zusammen mit den Cherubim und den Seraphim, indem wir rufen und sprechen:\nHeilig, heilig, heilig bist du Herr, Allmächtiger. Der Himmel und die Erde sind erfüllt von deiner Ehre und deinem Ruhm.",
                ar: "افرحي يا مريم العبدة والأم لأن الذي في حجرك الملائكة تسبحه.\nوالشاروبيم يسجدون له باستحقاق والسيرافيم بغير فتور.\nليس لنا دالة عند ربنا يسوع المسيح.\nسوى طلباتك وشفاعتك يا سيدتنا كلنا السيدة والدة الإله.\nلكي نسبحك مع الشاروبيم والسيرافيم صارخين قائلين:\nقدوس قدوس قدوس أيها الرب ضابط الكل السماء والأرض مملوءتان من مجدك وكرامتك.",
                cop_cop: "Ⲟⲩⲛⲟϥ ⲙ̀ⲙⲟ Ⲙⲁⲣⲓⲁ ϯⲃⲱⲕⲓ ⲟⲩⲟϩ ϯⲙⲁⲩ: ϫⲉ ⲫⲏⲉⲧϧⲉⲛ ⲡⲉⲁ̀ⲙⲏⲣ: ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ⲥⲉϩⲱⲥ ⲉ̀ⲣⲟϥ.\nⲞⲩⲟϩ ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ: ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟϥ ⲁ̀ⲝⲓⲱⲥ: ⲛⲉⲙ ⲛⲓⲥⲉⲣⲁⲫⲓⲙ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲙⲟⲩⲛⲕ.\nⲘ̀ⲙⲟⲛ ⲛ̀ⲧⲁⲛ ⲛ̀ⲟⲩⲡⲁⲣⲣⲏⲥⲓⲁ: ϧⲁⲧⲉⲛ ⲡⲉⲛϭⲟⲓⲥ Ⲓⲏⲥⲟⲩⲥ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ.\nⲬⲱⲣⲓⲥ ⲛⲓⲧⲱⲃϩ ⲛⲉⲙ ⲛⲓⲡⲣⲉⲥⲃⲓⲁ: ⲱ̀ ⲧⲉⲛϭⲟⲓⲥ ⲛ̀ⲛⲏⲃ ⲧⲏⲣⲉⲛ ϯⲑⲉⲟⲧⲟⲕⲟⲥ.\nϨⲓⲛⲁ ⲛ̀ⲧⲉⲛϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲓⲭⲉⲣⲟⲩⲃⲓⲙ ⲛⲉⲙ ⲛⲓⲥⲉⲣⲁⲫⲓⲙ: ⲉⲛⲱϣ ⲉ̀ⲃⲟⲗ ⲉⲛϫⲱ ⲙ̀ⲙⲟⲥ.\nϪⲉ ⲉⲕⲟⲩⲁⲃ ⲉⲕⲟⲩⲁⲃ ⲉⲕⲟⲩⲁⲃ: Ⲡϭⲟⲓⲥ ⲡⲓⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ: ⲧ̀ⲫⲉ ⲛⲉⲙ ⲡ̀ⲕⲁϩⲓ ⲙⲉϩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲉⲕⲱⲟⲩ ⲛⲉⲙ ⲡⲉⲕⲧⲁⲓⲟ.",
                ar_de: "Ounof emmo Maria ti voki owoh ti mav: je fi et khen pe amir: ni angelos se hos erof. Owoh ni cherubim se osht emmof axios: nem ni seraphim khen ou met at monk. Emmon entan en ou parrisia: khaten pen chois Isous Pkhristos. Khoris ni tovh nem ni presvia: o ten chois en nib tiren ti theotokos. Hina enten hos erok: nem ni cherubim nem ni seraphim: en osh evol en jo emmos: Je ek owab ek owab ek owab: Epchois pi pantokrator: etfe nem epkahi meh evol khen pek o-ou nem pek taio.",

                reconciliation_menu: [
                    // HIER IST DIE ÄNDERUNG: goto_basily_id_5
                    { label_ar: "(ب) الباسيلي", label_de: "(B) Basilius", action: "goto_basily_id_5" },
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_start" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_9" }
                ]
            }
        ]
    },

    // ============================================================
    // 2. Aspasmos Adam (Unsere Väter)
    // ============================================================
    // ============================================================
    // 4. Aspasmos Watos 1 (Pfingsten / Ascension)
    // ============================================================
    // ============================================================
    // 4. Aspasmos Watos 1 (Pfingsten / Ascension)
    // ============================================================
    // ============================================================
    // 4. Aspasmos Watos 1 (Pfingsten / Ascension)
    // ============================================================
    // ============================================================
    // 4. Aspasmos Watos 1 (Pfingsten / Ascension)
    // ============================================================
    // ============================================================
    // 4. Aspasmos Watos 1 (Pfingsten / Ascension)
    // ============================================================
    aspasmos_watos_1: {
        title: {
            de: "Aspasmos Watos (Pfingsten)",
            ar: "أسباسموس واطس (عيد العنصرة)"
        },
        content: [
            {
                id: 1,
                speaker: "Volk",

                // الترتيب: 1. صعد (Af-she naf) | 2. هلليلويا (Alleluia) | 3. قدوس (Je Agios)

                cop_ar: "أفشيه ناف إيه إبشوى إيه إتفيه إنتيه إتفيه صانى ما إنشاى: هينا إنتيف أوأورب نان إمبى باراكليطون بى إبنفما إنتيه تى ميثمى.\nالليلويا الليلويا الليلويا: بخرستوس أفطونف أووه أفشيه ناف: أف أو أورب نان إمبى باراكليطون. سوتى إممون أووه ناي نان.\nجيه آجيوس آجيوس آجيوس: كيريوس صافاؤوت: إبلى ريس أو أورانس كيه إى جى تيس آجياس صوذوكسيس.",

                de: "Er stieg hinauf in den Himmel nach Osten, damit er den Beistand, der Geist der Wahrheit, über uns sendet.\n(Halleluja) 3x, Christus ist auferstanden, und aufgefahren, und sandte uns den Beistand, erlöse uns und erbarme dich unser.\nHeilig, heilig, heilig, Herr der Heerscharen. Himmel und Erde sind erfüllt von deiner heiligen Herrlichkeit.",

                ar: "صعد إلى سماء السموات، ناحية المشارق، لكي يرسل لنا البارقليط، روح الحق.\nهلليلويا (3) المسيح قام ثم صعد، وأرسل لنا البارقليط. خلصنا وإرحمنا.\nقدوس. قدوس. قدوس. رب الصباؤوت. السماء والأرض مملوءتان من مجدك الاقدس.",

                cop_cop: "Ⲁϥϣⲉ ⲛⲁϥ ⲉ̀ⲡϣⲱⲓ ⲉ̀ⲧⲫⲉ ⲛ̀ⲧⲉ ⲧⲫⲉ ⲥⲁⲛⲓⲙⲁⲛ̀ϣⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉϥⲟⲩⲱⲣⲡ ⲛⲁⲛ ⲙ̀ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ ⲡⲓⲡⲛⲉⲩⲙⲁ ⲛ̀ⲧⲉ ϯⲙⲉⲑⲙⲏⲓ.\nⲀⲗⲗⲏⲗⲟⲩⲓⲁ (ⲅ̅). Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ ⲁϥⲧⲱⲛϥ ⲟⲩⲟϩ ⲁϥϣⲉ ⲛⲁϥ: ⲁϥⲟⲩⲱⲣⲡ ⲛⲁⲛ ⲙ̀ⲡⲓⲡⲁⲣⲁⲕⲗⲏⲧⲟⲛ. Ⲥⲱϯ ⲙ̀ⲙⲟⲛ ⲟⲩⲟϩ ⲛⲁⲓ ⲛⲁⲛ.\nϪⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: Ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ: ⲡ̀ⲗⲏⲣⲏⲥ ⲟ̀ ⲟⲩⲣⲁⲛⲟⲥ ⲕⲉ ⲏ̀ ⲅⲏ ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲥⲟⲩ ⲇⲟⲝⲏⲥ.",

                cop_de: "Af-she naf e-epshoi e-etfe ente etfe sa-ni-ma en-shai: hina entef-ouorp nan em-pi-parakliton pi-pnevma ente ti-methmi.\nAlleluia (3). Pkhristos af-tonf owoh af-she naf: af-ouorp nan em-pi-parakliton. Soti emmon owoh nai nan.\nJe Agios Agios Agios Kyrios Savaot: pliris o ouranos ke i gi tis agias sou doxis.",

                ar_de: "Sa3ada ela sama2 el samawat, na7yet el mashareq, lekay yorsel lana el Paraqlit, ro7 el 7aq.\nAlleluia (3). El Masih qam thomma sa3ad, wa arsal lana el Paraqlit. Khallesna war7amna.\nJe Agios Agios Agios, Kyrios Sabaot. El sama wal ard mamlou2atan men magdek el aqdas.",

                // HIER SIND DIE NEUEN KNÖPFE:
                reconciliation_menu: [
                    { label_ar: "(ب) الباسيلي", label_de: "(B) Basilius", action: "goto_basily_id_5" },
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_start" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_23" } // Führt zu ID 23
                ]
            }
        ]
    },
    // ============================================================
    // 3. O Herr, Gott der Heerscharen (Lord of Hosts)
    // ============================================================
    // ============================================================
    // 3. O Herr, Gott der Heerscharen (Lord of Hosts)
    // ============================================================
    // ============================================================
    // 3. O Herr, Gott der Heerscharen (Lord of Hosts)
    // ============================================================
    // ============================================================
    // 3. O Herr, Gott der Heerscharen (Lord of Hosts)
    // ============================================================
    lord_of_hosts: {
        title: {
            de: "O Herr, Gott der Heerscharen",
            ar: "أيها الرب إله القوات",
        },
        content: [
            {
                id: 1,
                speaker: "Priester & Volk",

                // الترتيب: 1. إبتشويس -> 2. أناف -> 3. آجيوس -> 4. ماريه بيك ناي -> 5. الليلويا والبركات

                cop_ar: "إبتشويس إفنوتي إنتيه ني جوم: كوتك أووه جوشت إيفول خين إتفي:\nأناف أووه جيم إبشيني إن طاي فو إن آولي: سيبطوطس أووه سيم نيتس: ثاي إيه طاس إتشوس إنجيه تيك أووي نام.\nجيه آجيوس آجيوس آجيوس: كيريوس صافاؤوت: إبلى ريس أو أورانس: كيه إى جى تيس آجياس صوذوكسيس.\nماريه بيك ناي نيم تيك هيريني: أوي إنصوبت إمبيك لاؤس.\n(الليلويا) 3\n(إسمو إيه ني آتير أنتيه أتفيه) \n(إسمو إيه ني موؤو إم إفيارو) \n(إسمو إيه ني سيتي نيم ني سيم)",

                de: "Herr, Gott der Heerscharen, wende dich doch um, blicke herab vom Himmel.\nUnd sieh und sorge für diesen Weinstock. Und stelle ihn wieder her, den deine Rechte gepflanzt hat.\nHeilig, heilig, heilig, Herr der Heerscharen. Himmel und Erde sind erfüllt von deiner heiligen Herrlichkeit.\nMöge dein Erbarmen und dein Frieden eine Festung für dein Volk sein.\n(Halleluja) 3\n(Segne die Lüfte des Himmels)\n(Segne die Wasser der Flüsse)\n(Segne die Saat und die Kräuter)",

                ar: "أيها الرب إله القوات، إرجع و اطلع من السماء،\nأنظر وتعهد هذه الكرمة، أصلحها و ثبتها، هذه التي غرستها يمينك.\nقدوس. قدوس. قدوس. رب الصباؤوت. السماء والأرض مملوءتان من مجدك الاقدس.\nفلتكن رحمتك و سلامك حصناً لشعبك.\n(هلليلويا) 3\n(بارك أهوية السماء.)\n(بارك مياه الأنهار.)\n(بارك الزرع و العشب.)",

                cop_cop: "Ⲡϭⲟⲓⲥ Ⲫⲛⲟⲩϯ ⲛ̀ⲧⲉ ⲛⲓϫⲟⲙ: ⲕⲟⲧⲕ ⲟⲩⲟϩ ϫⲟⲩϣⲧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲧ̀ⲫⲉ:\nⲀ̀ⲛⲁⲩ ⲟⲩⲟϩ ϫⲉⲙⲡ̀ϣⲓⲛⲓ ⲛ̀ⲧⲁⲓⲃⲱ ⲛ̀ⲁ̀ⲗⲟⲗⲓ: ⲥⲉⲃⲧⲱⲧⲥ ⲟⲩⲟϩ ⲥⲉⲙⲛⲏⲧⲥ: ⲑⲁⲓ ⲉ̀ⲧⲁⲥϭⲟⲥ ⲛ̀ϫⲉ ⲧⲉⲕⲟⲩⲓⲛⲁⲙ.\nϪⲉ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ ⲁ̀ⲅⲓⲟⲥ: Ⲕⲩⲣⲓⲟⲥ ⲥⲁⲃⲁⲱⲑ: ⲡ̀ⲗⲏⲣⲏⲥ ⲟ̀ ⲟⲩⲣⲁⲛⲟⲥ: ⲕⲉ ⲏ̀ ⲅⲏ ⲧⲏⲥ ⲁ̀ⲅⲓⲁⲥ ⲥⲟⲩ ⲇⲟⲝⲏⲥ.\nⲘⲁⲣⲉ ⲡⲉⲕⲛⲁⲓ ⲛⲉⲙ ⲧⲉⲕϩⲓⲣⲏⲛⲏ: ⲟⲓ ⲛ̀ⲥⲟⲃⲧ ⲙ̀ⲡⲉⲕⲗⲁⲟⲥ.\nⲀⲗⲗⲏⲗⲟⲩⲓⲁ (ⲅ̅). \nⲤⲙⲟⲩ ⲉ̀ⲛⲓⲁⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ. \nⲤⲙⲟⲩ ⲉ̀ⲛⲓⲙⲱⲟⲩ ⲙ̀ⲫ̀ⲓⲁⲣⲟ. \nⲤⲙⲟⲩ ⲉ̀ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ.",

                cop_de: "Epchois Efnouti ente ni jom: kotk owoh jousht evol khen etfe:\nAnav owoh jem-epshini en-tai vo en-aloli: sev-tots owoh sem-nits: thai etas-chos enje tek-ouinam.\nJe Agios Agios Agios: Kyrios Savaot: pliris o ouranos: ke i gi tis agias sou doxis.\nMare pek-nai nem tek-hirini: oi en-sovt em-pek-laos.\nAlleluia (3). Esmou e-ni air ente etfe. Esmou e-ni mo-ou em ef-iaro. Esmou e-ni siti nem ni sim.",

                ar_de: "Ayuha el Rab elah el qowat, erga3 wa etale3 men el sama.\nOnzor wa ta3ahad hazihi el karma, asle7ha wa thabetha, hazihi allati gharasatha yaminoka.\nJe Agios Agios Agios, Kyrios Sabaot. El sama wal ard mamlou2atan men magdek el aqdas.\nFaltakon ra7matoka wa salamoka 7esnan le sha3beka.\nAlleluia (3). Barek ahwiyat el sama. Barek meyah el anhar. Barek el zar3 wal 3oshb.",

                // HIER SIND DIE NEUEN KNÖPFE:
                reconciliation_menu: [
                    { label_ar: "(ب) الباسيلي", label_de: "(B) Basilius", action: "goto_basily_id_222" },
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_id_22" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_23" } // Führt zu ID 21
                ]

            }

        ]

    },

    seven_small_litanies: {
        title: {
            ar: "الأواشي السبعة الصغار",
            de: "Die 7 kleinen Gebete"
        },
        content: [
            // ID 1: Bitte für die Kirche (Priester)
            {
                id: 700,
                speaker: "Priester",
                ar: "نعم نسألك أيها المسيح إلهنا ثبت أساس الكنيسة",
                de: "Ja, wir bitten dich, o Christus, unser Gott befestige das Fundament der Kirche.",

                ar_de: "Na3am nas2aloka ayoha el-masi7 elahona thabet asas el-kanisa."
            },

            // ID 2: Herr erbarme Dich (Volk)
            {
                id: 701,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 703: Herzenseintracht (Priester)
            {
                id: 703,
                speaker: "Priester",
                ar: "وحدانية القلب التي للمحبة فلتتأصل فينا.",
                de: "Möge die Herzenseintracht in uns wurzeln fassen.",

                ar_de: "Wahdaniat el-qalb allati lel-mahaba faltata'assal fina."
            },

            // ID 704: Herr erbarme Dich (Volk)
            {
                id: 704,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            {
                id: 705,
                speaker: "Priester",
                ar: "لينمو بر الإيمان. سهل لنا يارب طريق التقوى.",
                de: "Möge die Wahrheit des Glaubens wachsen. Ebne uns den Weg der Frömmigkeit.",

                ar_de: "Liyanmu birr al-iman. Sahhil lana ya Rabb tariq al-taqwa."
            },

            // ID 706: Herr erbarme Dich (Volk)
            {
                id: 706,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 707: Für die Hirten (Priester)
            {
                id: 707,
                speaker: "Priester",
                ar: "الرعاة اضبطهم والذين يرعونهم ثبتهم.",
                de: "Leite die Hirten und stärke die, die durch sie gehütet werden.",

                ar_de: "El-ro3at odbothom wallazina yar3ounahom thabithom."
            },

            // ID 708: Herr erbarme Dich (Volk)
            {
                id: 708,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 709: Für den Klerus (Priester)
            {
                id: 709,
                speaker: "Priester",
                ar: "اعط بهاء للإكليروس. نسكاً للرهبان والراهبات.",
                de: "Gib dem Klerus Glanz, den Mönchen und Nonnen Askese.",
                ar_de: "A3ti baha2an lil-ekliros. Noskan lel-rohban wal-rahibat."
            },

            // ID 710: Herr erbarme Dich (Volk)
            {
                id: 710,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 711: Für Jungfräulichkeit und Ehe (Priester)
            {
                id: 711,
                speaker: "Priester",
                ar: "طهارة للذين في البتولية. حياة صالحة للذين في الزيجة.",
                de: "Reinheit denen, die in die Jungfräulichkeit sind, eine gute Lebensführung denen, die in Ehe leben.",
                ar_de: "Tahara lil-lazina fil batouliya. Hayah saliha lil-lazina fil ziga."
            },

            // ID 712: Herr erbarme Dich (Volk)
            {
                id: 712,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 713: Barmherzigkeit und Güte (Priester)
            {
                id: 713,
                speaker: "Priester",
                ar: "رحمة للتائبين، صلاحاً للأغنياء.",
                de: "Erbarmen den Büßenden, Güte denen, die reich sind,",

                ar_de: "Rahma lel-ta2ebin, salahan lel-aghnia2."
            },

            // ID 714: Herr erbarme Dich (Volk)
            {
                id: 714,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 715: Erfolg und Arbeit (Priester)
            {
                id: 715,
                speaker: "Priester",
                ar: "نجاحاً للطلبة، عملاً للمحتاجين.",
                de: "Erfolg den Studenten, Arbeit für die Bedürftigen.",
                ar_de: "Nagahan lil-talaba, 3amalan lil-mohtagin."
            },

            // ID 716: Herr erbarme Dich (Volk)
            {
                id: 716,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 717: Bescheidenheit und Hilfe (Priester)
            {
                id: 717,
                speaker: "Priester",
                ar: "وداعة للفضلاء ، معونة للمساكين.",
                de: "Bescheidenheit den Frommen, Hilfe den Armen",

                ar_de: "Wada3a lil-fodala2, ma3ouna lil-masakin."
            },

            // ID 718: Herr erbarme Dich (Volk)
            {
                id: 718,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 719: Für Alte und Junge (Priester)
            {
                id: 719,
                speaker: "Priester",
                ar: "الشيوخ قوهم، الذين في الحداثة أدبهم.",
                de: "Stärke die Alten, zügle die Jungen.",
                ar_de: "El-shoyoukh qawwehom, allazina fel hadatha addebhom."
            },

            // ID 720: Herr erbarme Dich (Volk)
            {
                id: 720,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 721: Für die Nichtgläubigen und Einheit (Priester)
            {
                id: 721,
                speaker: "Priester",
                ar: "غير المؤمنين ردهم، لتنقض انقسامات الكنيسة .",
                de: "Bringe die Nichtgläubigen. Mögen die Trennungen der Kirche aufhören.",

                ar_de: "Gheir el-mo'menin roddahom, le-tanqad enqisamat el-kanisa."
            },

            // ID 722: Herr erbarme Dich (Volk)
            {
                id: 722,
                speaker: "Volk",
                ar: "يارب ارحم",
                de: "Herr erbarme Dich.",
                cop_ar: "كيريه ليسون",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ",
                cop_de: "Kyrie eleyson",
                ar_de: "Ya Rab erham."
            },
            // ID 723: Gegen Häresien (Priester)
            {
                id: 723,
                speaker: "Priester",
                ar: "حل تعاظم اهل البدع. ونحن كلنا احسبنا في وحدانية التقوى.",
                de: "Reiße den Hochmut der Häretiker nieder; uns alle aber zähle zur Einheit der Frömmigkeit.",

                ar_de: "Hal ta3azem ahl el-beda3. Wa nahnu kollana ahsebna fi wahdaniat el-taqwa."
            },

            // ID 724: Herr erbarme Dich 3x (Volk)
            // ID 724: Herr erbarme Dich 3x (Volk) + Navigation
            {
                id: 724,
                speaker: "Volk",
                ar: "(يارب ارحم) 3",
                de: "(Herr erbarme Dich) 3.",
                cop_ar: "(كيريه ليسون) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ) ⲅ",
                cop_de: "(Kyrie eleyson) 3",
                ar_de: "(Ya Rab erham) 3.",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 60
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.03
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 1
                    }
                ] // Ende von navigationButtons
            } // Ende von ID 724
        ] // Ende von content (Array)
    },// Ende von seven_small_litanies (Objekt)
    // ============================================================
    // SEITE: Die Gewässer (12. Paoni - 9. Babah)
    // ============================================================
    litany_waters: {
        title: {
            de: "Gebet für die Gewässer",
            ar: "أوشية المياه"
        },
        content: [
            {
                id: 800,
                speaker: "Priester",
                ar: "تفضل يا رب مياه النهر في هذه السنة باركها.",
                de: "Geruhe, o Herr, die Wasser des Flusses in diesem Jahr zu segnen.",
                cop_ar: "آري كاطاكسين إبشويس ني موؤو إنتي إفيارو إتخين طاي رومبي ثاي إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲛ Ⲡ̀ϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫⲓⲁⲣⲟ ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-kataxin P-chois ni-mo-ou ente pi-iaro et-khen tai-rompi thai ezmo ero-ou.",
                ar_de: "Tafaddal ya Rabb miyah el-nahr fi hazihi el-sana barekha."
            },
            // ID 801: Die Gewässer - Diakon (Zusammengefasst)
            {
                id: 801,
                speaker: "Diakon",
                ar: "اطلبوا عن صعود مياه الأنهار في هذا السنة، لكي يباركها المسيح إلهنا،\nويصعدها كمقدارها، ويفرح وجه الأرض، ويعولنا نحن البشر، ويعطي النجاة للبهائم، ويغفر لنا خطايانا.",

                de: "Bittet für den Anstieg der Flusswasser in diesem Jahr, damit Christus, unser Gott, sie segnet, sie nach ihrem Maß ansteigen lässt, dem Antlitz der Erde Freude schenkt, uns Menschen versorgt, dem Vieh Rettung gibt und uns unsere Sünden vergibt.",

                cop_ar: "طوبه إيه جين إبجين موشي إيه إبشوى إنتيه ني يارؤو إم موؤو خين طاي رومبي ثاي: هينا إنتيه بخرستوس بين نوتي إسمو إيه رؤو:\nإنتيف إيه نو إيه إبشوى كاطا نوشي: إنتيف تي إم إبؤنوف إم إبهو إم إبكاهي: إنتيف شانو شتين خا ني شيري إنتيه ني رومي: إنتيف تي إم إفنو هيم إن ني تيف نو أووي: إنتيف كانين نوفي نان إيفول.",

                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲡϫⲓⲛⲙⲟϣⲓ ⲉ̀ⲡϣⲱⲓ ⲛ̀ⲧⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲙ̀ⲙⲱⲟⲩ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅ Ⲡⲉⲛⲛⲟⲩϯ ⲥⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ:\nⲛ̀ⲧⲉϥⲉⲛⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ: ⲛ̀ⲧⲉϥϯ ⲙ̀ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ: ⲛ̀ⲧⲉϥϣⲁⲛⲟⲩϣⲧⲉⲛ ϧⲁ ⲛⲓϣⲏⲣⲓ ⲛ̀ⲧⲉ ⲛⲓⲣⲱⲙⲓ: ⲛ̀ⲧⲉϥϯ ⲙ̀ⲫⲛⲟϩⲉⲙ ⲛ̀ⲛⲓⲧⲉⲃⲛⲱⲟⲩⲓ̀: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Tovh ejen pi-jin-moshi e-epshoi ente ni-iaro em-mo-ou khen tai-rompi thai: hina ente Pi-khristos Pen-nouti esmou ero-ou:\nentef-enou e-epshoi kata nou-shi: entef-ti em-pounof em-peho em-pkahi: entef-shan-oushten kha ni-shiri ente ni-romi: entef-ti em-ef-nohem en-ni-tev-no-oui: entef-ka nen-novi nan evol.",

                ar_de: "Otlobou 3an so3oud meyah el-anhar fi hazehi el-sana, lekay yobarekaha el-Masih elahona, wa yos3idaha ka-meqdariha, wa yofarre7 wagh el-ard, wa ya3oulana nahnou el-bashar, wa yo3ti el-nagat lel-baha2em, wa yaghfer lana khatayana."
            },
            // ID 802: Volk - Kyrie Eleison x3 (Abschluss Gewässer)
            {
                id: 802,
                speaker: "Volk",
                ar: "(يارب ارحم.) 3",
                de: "(Herr erbarme Dich.) 3.",
                cop_ar: "(كيريه ليسون.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.) ⲅ̅",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 75
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 118
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.26
                    }
                ]
            }

            // Hier folgen später Diakon und Volk für Gewässer...
        ]
    },

    // ============================================================
    // SEITE: Die Saat (10. Babah - 10. Tobi)
    // ============================================================

    Bi_nishti_content: {
        title: {
            de: "Bi nishti",
            ar: "بي نيشتي"
        },
        content: [
            {
                id: 2000,
                speaker: "Priester",
                ar: "تفضل يا رب الزروع والعشب، ونبات الحقل في هذه السنة، باركها.",
                de: "Geruhe, o Herr, die Saat, die Kräuter und die Gewächse des Feldes in diesem Jahr zu segnen.",
                cop_ar: "آري كاطاكسين إبشويس نيسيتي نيم ني سيم نيم ني روت إنتي إتكوي إيت خين تاي رومبي ثاي إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-kataxin P-chois ni-siti nem ni-sim nem ni-rot ente et-koi et-khen tai-rompi thai ezmo ero-ou.",
                ar_de: "Tafaddal ya Rabb el-zorou3 wal-3oshb wa nabat el-haql fi hazihi el-sana barekha.",
                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 75
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 118
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.26
                    }
                ]
            }
        ]
    },

    litany_plants: {
        title: {
            de: "Gebet für die Saat",
            ar: "أوشية الزروع"
        },
        content: [
            {
                id: 900,
                speaker: "Priester",
                ar: "تفضل يا رب الزروع والعشب، ونبات الحقل في هذه السنة، باركها.",
                de: "Geruhe, o Herr, die Saat, die Kräuter und die Gewächse des Feldes in diesem Jahr zu segnen.",
                cop_ar: "آري كاطاكسين إبشويس نيسيتي نيم ني سيم نيم ني روت إنتي إتكوي إيت خين تاي رومبي ثاي إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-kataxin P-chois ni-siti nem ni-sim nem ni-rot ente et-koi et-khen tai-rompi thai ezmo ero-ou.",
                ar_de: "Tafaddal ya Rabb el-zorou3 wal-3oshb wa nabat el-haql fi hazihi el-sana barekha."
            },
            // ID 901: Die Saat - Diakon (Zusammengefasst)
            {
                id: 901,
                speaker: "Diakon",

                // Zusammengefügt aus beiden Bildern
                ar: "اطلبوا عن الزروع والعشب، ونبات الحقل في هذه السنة، لكي يباركها المسيح إلهنا:\nلتنمو وتكثر إلى أن تكمل بثمرة عظيمة، ويتحنن على جبلته التي صنعتها يداه، ويغفر لنا خطايانا.",

                de: "Bittet für die Saat, die Kräuter und die Gewächse des Feldes in diesem Jahr, damit Christus, unser Gott, sie segnet:\ndamit sie wachsen und sich vermehren, bis sie vollendet sind in großer Frucht, und er sich seiner Schöpfung erbarmt, die seine Hände gemacht haben, und uns unsere Sünden vergibt.",

                cop_ar: "طوبه إيه جين ني سيتي نيم ني سيم نيم ني روت إنتيه إتكوي خين طاي رومبي ثاي: هينا إنتيه بخرستوس بين نوتي إسمو إيه رؤو:\nإنطو آي آي أووه إنطو آشاي شا إنطو جوك إيفول خين أونشتي إن كاربوس أووه إنتيف شينهيت خا بيف إبلاسما إيه طا نيف جيج ثاميوف: إنتيف كانين نوفي نان إيفول.",

                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲭ̅ⲥ̅ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ:\nⲛ̀ⲧⲟⲩⲁⲓⲁⲓ ⲟⲩⲟϩ ⲛ̀ⲧⲟⲩⲁϣⲁⲓ ϣⲁⲛⲧⲟⲩϫⲱⲕ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩⲛⲓϣϯ ⲛ̀ⲕⲁⲣⲡⲟⲥ: ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲡⲗⲁⲥⲙⲁ ⲉ̀ⲧⲁ ⲛⲉϥϫⲓϫ ⲑⲁⲙⲓⲟϥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Tovh ejen ni-siti nem ni-sim nem ni-rot ente et-koi khen tai-rompi thai: hina ente Pi-khristos Pen-nouti esmou ero-ou:\nentou-aiai owoh entou-ashai sha-ntou-jok evol khen ou-nishti en-karpos: owoh entef-shenhit kha pef-plasma eta nef-jij thamiof: entef-ka nen-novi nan evol.",

                ar_de: "Otlobou 3an el-zorou3 wal-3oshb wa nabat el-haql fi hazehi el-sana, lekay yobarekaha el-Masih elahona:\nle-tanmou wa takthor ela an tokmel be-thamara 3azima, wa yata7anan 3ala jeblatih allati sana3atha yadah, wa yaghfer lana khatayana."
            },
            // ID 902: Volk - Kyrie Eleison x3 (Abschluss Saat)
            {
                id: 902,
                speaker: "Volk",
                ar: "(يارب ارحم.) 3",
                de: "(Herr erbarme Dich.) 3.",
                cop_ar: "(كيريه ليسون.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.) ⲅ̅",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 75
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 118
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.26
                    }
                ]
            }
        ]
    },

    // ============================================================
    // SEITE: Die Lüfte (11. Tobi - 11. Paoni)
    // ============================================================
    litany_airs: {
        title: {
            de: "Gebet für die Lüfte",
            ar: "أوشية الأهوية"
        },
        content: [
            {
                id: 903,
                speaker: "Priester",
                ar: "تفضل يا رب أهوية السماء وثمرات الأرض في هذه السنة باركها.",
                de: "Geruhe, o Herr, die Lüfte des Himmels und die Früchte der Erde in diesem Jahr zu segnen.",
                cop_ar: "آري كاطاسكين إبشويس ني آإير إنتي إتفي نيم ني كاربوس إنتي إبكاهي خين تاي رومبي ثاي إزمو إيروؤو.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",
                cop_de: "Ari-kataxin P-chois ni-a-ir ente et-phe nem ni-karpos ente ep-kahi khen tai-rompi thai ezmo ero-ou.",
                ar_de: "Tafaddal ya Rabb ahwiyat el-sama2 wa thamarat el-ard fi hazihi el-sana barekha."
            },
            // ID 1001: Die Lüfte - Diakon (Zusammengefasst)
            {
                id: 904,
                speaker: "Diakon",

                ar: "أطلبوا عن أهوية السماء وثمرات الأرض والشجر والكروم وكل شجرة مثمرة\nفي كل المسكونة، لكي يباركها المسيح إلهنا ويكملها سالمة بغير آفة: ويغفر لنا خطايانا",

                de: "Bittet für die Lüfte des Himmels, die Früchte der Erde, die Bäume, die Weinberge und jeden fruchttragenden Baum\nauf dem ganzen Erdkreis, damit Christus, unser Gott, sie segnet, sie vollendet in Frieden ohne Schaden, und uns unsere Sünden vergibt.",

                cop_ar: "طوبه إيه جين ني آير إنتيه إتفيه نيم ني كاربوس إنتيه إبكاهي: نيم فاي ني إش شين نيم فا نيما إن آلولي نيم إش شين نيفين إنريف تي كاربوس\nإت خين تي أويكو ميني تيرس: هينا إنتيه بخرستوس بين نوتي إسمو إيه رؤو: إنتيف جوكو إيفول خين أو هيريني أتشنيه إمكاه: إنتيف كانين نوفي نان إيفول.",

                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ: ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲛⲉⲙ ⲫⲁ ⲛⲓϣϣⲏⲛ ⲛⲉⲙ ⲫⲁ ⲛⲓⲙⲁⲛ̀ⲁ̀ⲗⲟⲗⲓ: ⲛⲉⲙ ϣϣⲏⲛ ⲛⲓⲃⲉⲛ ⲛ̀ⲣⲉϥϯⲕⲁⲣⲡⲟⲥ\nⲉⲧϧⲉⲛ ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ⲧⲏⲣⲥ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ ⲛ̀ⲧⲉϥϫⲟⲕⲟⲩ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ ⲁⲃⲛⲉ ⲙ̀ⲕⲁϩ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Tovh ejen ni-air ente et-fe: nem ni-karpos ente ep-kahi: nem fa ni-sh-shin nem fa ni-man-aloli: nem sh-shin niven en-ref-ti-karpos\net-khen ti-oikoumeni tirs: hina ente Pi-khristos Pen-nouti esmou ero-ou: entef-joko evol khen ou-hirini at-shne emkah: entef-ka nen-novi nan evol.",

                ar_de: "Otlobou 3an ahwiyat el-sama2 wa thamarat el-ard wal shagar wal koroum wa kol shagara mothmira\nfi kol el-maskouna, lekay yobarekaha el-Masih elahona wa yokamelaha salima be-ghayr afa: wa yaghfer lana khatayana."
            },
            // ID 1002: Volk - Kyrie Eleison x3 (Abschluss Lüfte)
            {
                id: 904,
                speaker: "Volk",
                ar: "(يارب ارحم.) 3",
                de: "(Herr erbarme Dich.) 3.",
                cop_ar: "(كيريه ليسون.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.) ⲅ̅",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 75
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 118
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.26
                    }
                ]
            }
        ]
    },

    // ============================================================
    // SEITE: Zusammenfassung (Combined)
    // ============================================================
    litany_combined: {
        title: {
            de: "Zusammenfassung (Gewässer, Saat, Lüfte)",
            ar: "أوشية مجمعة"
        },
        content: [
            {
                id: 905,
                speaker: "Priester",
                ar: "تفضل يارب، أهوية السماء وثمرات الأرض و مياه الأنهار والزروع والعشب ونبات الحقل في هذه السنة باركها.",

                de: "Bitte, o Herr, segne die Lüfte des Himmels und die Früchte der Erde, das Wasser des Flusses, die Saaten und die Kräuter und die Gewächse des Feldes in diesem Jahr",

                cop_ar: "آري كاطاكسن ابشويس ني آ إير انتى اتفى نيم ني كاربوس انتى ابكاهى نيم ني موؤو انتى افيارو نيم نيسيتي نيم ني سيم نيم نيروت انتى اتكوى ايت خين تاى رومبى ثاى اسمو ايروؤو.",

                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫⲓⲁⲣⲟ ⲛⲉⲙ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ.",

                cop_de: "Ari-kataxin P-chois ni-a-ir ente et-phe nem ni-karpos ente ep-kahi nem ni-mo-ou ente phi-aro nem ni-siti nem ni-sim nem ni-rot ente et-koi et-khen tai-rompi thai esmou ero-ou.",

                ar_de: "Tafaddal ya Rabb ahwiyat el-sama2 wa thamarat el-ard wa miyah el-anhar wal-zorou3 wal-3oshb wa nabat el-haql fi hazihi el-sana barekha."
            },
            // ID 1101: Zusammenfassung - Diakon
            {
                id: 906,
                speaker: "Diakon",

                // Zusammengefügt aus beiden Bildern
                ar: "اطلبوا عن أهوية السماء وثمرات الأرض وصعود مياه الأنهار وعن الزروع والعشب ونبات الحقل\nلكي يباركها المسيح إلهنا ويتحنن على جبلته التي صنعتها يداه ويغفر لنا خطايانا.",

                de: "Bittet für die Lüfte des Himmels, die Früchte der Erde, für den Anstieg der Gewässer, der Flüsse, für die Saaten, Kräuter und Gewächse des Feldes\ndass Christus, unser Gott, sie segnet, und dass er mit seiner eigenhändigen Schöpfung Erbarmen hat und uns unsere Sünden vergibt.",

                cop_ar: "طوبه إيه جين ني آير إنتيه إتفيه نيم ني كاربوس إنتيه إبكاهي نيم إبجين موشي إيه إبشوي إنتيه ني يارؤو إم موؤو نيم ني سيتي نيم ني سيم نيم ني روت إنتيه إت كوي\nثاي هينا انتى بى اخرستوس بننوتى اسمو ايروؤو اووه انتيف شينهيت خا بيف ابلاسما ايتانيف جيج ثاميوف انتيف كا نين نوفى نان ايفول.",

                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ ⲛⲉⲙ ⲡϫⲓⲛⲙⲟϣⲓ ⲉ̀ⲡϣⲱⲓ ⲛ̀ⲧⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲙ̀ⲙⲱⲟⲩ ⲛⲉⲙ ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ.\nⲐⲁⲓ ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭ̀ⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ ⲟⲩⲟϩ ⲛ̀ⲧⲉϥϣⲉⲛϩⲏⲧ ϧⲁ ⲡⲉϥⲡⲗⲁⲥⲙⲁ ⲉ̀ⲧⲁ ⲛⲉϥϫⲓϫ ⲑⲁⲙⲓⲟϥ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",

                cop_de: "Tovh ejen ni-air ente et-phe nem ni-karpos ente ep-kahi nem pi-jin-moshi e-epshoi ente ni-iaro em-mo-ou nem ni-siti nem ni-sim nem ni-rot ente et-koi.\nThai hina ente Pi-khristos Pen-nouti esmou ero-ou owoh entef-shenhit kha pef-plasma eta nef-jij thamiof: entef-ka nen-novi nan evol.",

                ar_de: "Otlobou 3an ahwiyat el-sama2 wa thamarat el-ard wa so3oud meyah el-anhar wa 3an el-zorou3 wal-3oshb wa nabat el-haql.\nLekay yobarekaha el-Masih elahona wa yata7anan 3ala jeblatih allati sana3atha yadah wa yaghfer lana khatayana."
            },
            // ID 1102: Volk - Kyrie Eleison x3 (Abschluss Zusammenfassung)
            {
                id: 907,
                speaker: "Volk",
                ar: "(يارب ارحم.) 3",
                de: "(Herr erbarme Dich.) 3.",
                cop_ar: "(كيريه ليسون.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉ̀ⲏⲥⲟⲛ.) ⲅ̅",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 75
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 118
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.26
                    }
                ]
            },

        ]
    },
    // ============================================================
    // SEITE: Bi Nishti (Die großen Väter)
    // ============================================================
    bi_nishti: {
        title: {
            de: "Die großen Väter (Bi Nishti)",
            ar: "الآباء العظام (بي نيشتي)"
        },
        content: [
            {
                id: 909,
                speaker: "Diakon",
                // Zusammenfassung aller gesendeten Heiligen-Bilder in korrekter Reihenfolge
                ar: "العظيم أنبا أنطونيوس والبار أنبا بولا والقديسون الثلاثة مقارات. أنبا يحنس القصير أنبا بيشوي أنبا بولا أبوينا القديسان الروميان مكسيموس ودوماديوس. أنبا موسى أنبا يحنس كاما أنبا دانيال أنبا ايسيذوروس أنبا باخوم أنبا شنودة. أنبا بفنوتي أنبا برسوما أنبا رويس وجميع الذين علموا بكلمة الحق باستقامة الأساقفة الأرثوذكسيين والقسوس. والشمامسة والإكليروس والعلمانيون وهؤلاء وجميع الأرثوذكسيين آمين.",

                de: "Des großen Abba Antonius, des rechtschaffenen Abba Paul, der drei heiligen Abba Makari. Abba Johannes des Kleinen, Abba Pischoi, Abba Paul, unsere heiligen Väter, die Römer Maximus und Domadius. Abba Mose, Abba Johannes Kamie, Abba Daniel, Abba Isidorus, Abba Pachom, Abba Schenouda. Abba Paphnotius, Abba Parsooma, Abba Rowes und all derer, die das Wort der Wahrheit aufrichtig lehrten, und all der orthodoxen Bischöfe, der Priester, der Diakone, der Kleriker, der Laien und aller Orthodoxen. Amen.",

                cop_ar: "بي نيشتي آفا أنطوني: نيم بي إثمي آفا بافلي: نيم بي شومت إثؤواب ماكاريوس. آفا يوأنس بي كولوفوس: آفا بيشوي: آفا بافلي: نين يوتي إثؤواب إن روميه أوس: مكسيموس نيم دوميتيوس. آفا موسى: آفا يوأنس كامي: آفا دانيئيل: آفا إيسيذوروس: آفا باخوم: آفا شينوتي. كيه آفا بفنوتي: آفا برسوما آفا تيجي. كيه بان طون طون أورثو ذي ذاكسان طون طون لوغون تيس آليثياس: أورثو ذوكصون آيه بيسكو بون: إبريسفيتيه رون. ذياكونون إكليريكون كيه لا إيكون: كيه بان طون أورثو ذوكسون: آمين.",

                cop_cop: "Ⲡⲓⲛⲓϣϯ ⲁⲃⲃⲁ Ⲁⲛⲧⲱⲛⲓ: ⲛⲉⲙ ⲡⲓⲑ̀ⲙⲏⲓ ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲉⲙ ⲡⲓϣⲟⲙⲧ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲕⲁⲣⲓⲟⲥ. Ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ ⲡⲓⲕⲟⲗⲟⲃⲟⲥ: ⲁⲃⲃⲁ Ⲡⲓϣⲱⲓ: ⲁⲃⲃⲁ Ⲡⲁⲩⲗⲉ: ⲛⲉⲛⲓⲟϯ ⲉⲑⲟⲩⲁⲃ ⲛ̀ⲣⲱⲙⲉⲟⲥ: Ⲙⲁⲝⲓⲙⲟⲥ ⲛⲉⲙ Ⲇⲟⲙⲉⲧⲓⲟⲥ. Ⲁⲃⲃⲁ Ⲙⲱⲥⲏ: ⲁⲃⲃⲁ Ⲓⲱⲁⲛⲛⲏⲥ Ⲕⲁⲙⲉ: ⲁⲃⲃⲁ Ⲇⲁⲛⲓⲏⲗ: ⲁⲃⲃⲁ Ⲓⲥⲓⲇⲱⲣⲟⲥ: ⲁⲃⲃⲁ Ⲡⲁϧⲱⲙ: ⲁⲃⲃⲁ Ϣⲉⲛⲟⲩϯ. Ⲕⲉ ⲁⲃⲃⲁ Ⲡⲁⲫⲛⲟⲩⲧⲓ: ⲁⲃⲃⲁ Ⲃⲁⲣⲥⲟⲩⲙⲁ ⲁⲃⲃⲁ ⲣⲱⲉⲥ. Ⲕⲉ ⲡⲁⲛⲧⲱⲛ ⲧⲱⲛ ⲟⲣⲑⲟⲇⲟⲝⲁⲛⲧⲱⲛ ⲧⲟⲛ ⲗⲟⲅⲟⲛ ⲧⲏⲥ ⲁⲗⲏⲑⲓⲁⲥ: ⲟⲣⲑⲟⲇⲟⲝⲱⲛ ⲉⲡⲓⲥⲕⲟⲡⲱⲛ: ⲡⲣⲉⲥⲃⲩⲧⲉⲣⲱⲛ. Ⲇⲓⲁⲕⲟⲛⲱⲛ ⲉⲕⲕⲗⲏⲣⲓⲕⲱⲛ ⲕⲉ ⲗⲁⲓⲕⲱⲛ: ⲕⲉ ⲡⲁⲛⲧⲱⲛ ⲟⲣⲑⲟⲇⲟⲝⲱⲛ: Ⲁⲙⲏⲛ.",

                cop_de: "Pi-nishti abba Antoni: nem pi-thmi abba Pavle: nem pi-shomt ethouab Makarios. Abba Ioannis pi-kolovos: abba Pishoi: abba Pavle: nenioti ethouab en-romeos: Maximos nem Dometios. Abba Mose: abba Ioannis Kamie: abba Daniel: abba Isidoros: abba Pachom: abba Schenouda. Ke abba Paphnotius: abba Parsooma abba Rowes. Ke pan-ton ton ortho-daxan-ton ton logon tis alithias: ortho-dokson episkopon: presvyteron. Diakonon eklikri-kon ke la-ikon: ke pan-ton ortho-dokson: Amen.",

                ar_de: "El-3azim anba Antonios wal-bar anba Boula wal-qiddisoun el-thalatha Maqarat. Anba Yo7anna el-qasir anba Bishoy anba Boula abawayna el-qiddisayn el-romiyayn Maximos wa Domadios. Anba Moussa anba Yo7anna Kama anba Daniel anba Isidoros anba Bakhom anba Shenouda. Ke anba Paphnotius anba Parsoma anba Rowes. Ke pan-ton ton ortho-daxan-ton ton logon tis alithias: ortho-dokson episkopon: presvyteron. Diakonon eklikrikon ke la-ikon: ke pan-ton ortho-dokson: Amen.",

                navigationButtons: [
                    {
                        label_ar: "(ب) الباسيلي",
                        label_de: "(B) Basilius",
                        action: "jumpToId",
                        targetLiturgy: "basily",
                        targetId: 81
                    },
                    {
                        label_ar: "(غ) الغريغوري",
                        label_de: "(G) Gregorios",
                        action: "jumpToId",
                        targetLiturgy: "gregorios",
                        targetId: 143
                    },
                    {
                        label_ar: "(ك) الكيرلسي",
                        label_de: "(K) Cyrillus",
                        action: "jumpToId",
                        targetLiturgy: "kerollosy",
                        targetId: 17.34 // Direkter Sprung zum Diakon-Teil im Cyrillus
                    }
                ]
            }
        ]
    }
};




export const liturgyHints = {
    // --- BASILIUS ---
    "basily_id_1": {
        roles: {
            priester: {
                de: "✟ Priester: Bereite das Prospharin vor.",
                ar: "✟ الكاهن: استعد لرفع الإبروسفارين."
            },
            diakon: {
                de: "Diakon: Achte auf die Abdeckung des Altars.",
                ar: "الشماس: انتبه لتغطية المذبح."
            },
            volk: {
                de: "Gemeinde: Steht ehrfürchtig.",
                ar: "الشعب: قف بخشوع."
            }
        }
    },

    "basily_id_24": {
        roles: {
            diakon: {
                de: "🕯️ Diakon: Zünde jetzt die Kerzen an!",
                ar: "🕯️ الشماس: أشعل الشموع الآن!"
            }
        }
    },
    "morning_incense_id_30": {
        roles: {
            priester: {
                de: "Das Gebet für die Reisenden wird im ganzen Jahr nach dem Gebet für die Kranken im Morgenweihrauchgebet an jedem Tag gebetet, ausgenommen samstags, sonntags und an Tagen, an denen ein Herrenfest gefeiert wird.",
                ar: "تُقال أوشية المسافرين طوال السنة بعد أوشية المرضى في رفع بخور باكر في كل يوم، ما عدا أيام السبوت والآحاد والأعياد السيديه",
            },
            diakon: {
                de: "Das Gebet für die Reisenden wird im ganzen Jahr nach dem Gebet für die Kranken im Morgenweihrauchgebet an jedem Tag gebetet, ausgenommen samstags, sonntags und an Tagen, an denen ein Herrenfest gefeiert wird.",
                ar: "تُقال أوشية المسافرين طوال السنة بعد أوشية المرضى في رفع بخور باكر في كل يوم، ما عدا أيام السبوت والآحاد والأعياد السيديه",

            },
            Volk: {
                de: "Das Gebet für die Reisenden wird im ganzen Jahr nach dem Gebet für die Kranken im Morgenweihrauchgebet an jedem Tag gebetet, ausgenommen samstags, sonntags und an Tagen, an denen ein Herrenfest gefeiert wird.",
                ar: "تُقال أوشية المسافرين طوال السنة بعد أوشية المرضى في رفع بخور باكر في كل يوم، ما عدا أيام السبوت والآحاد والأعياد السيديه",

            },
        }

    },
    "morning_incense_id_36": {
        roles: {
            priester: {
                ar: "تُقال أوشية القرابين في رفع بخور باكر في أيام الآحاد والأعياد السيدية بدلاً من أوشية المسافرين، وكذلك في أيام الأسبوع إذا كانت القرابين موجودة، وإذا كان القداس الإلهي سيُقام عقب رفع البخور مباشرة. أما إذا لم تُقل في رفع بخور باكر لعدم وجود القرابين، فيصليها الكاهن سراً قبل قراءة الإبركسيس.",
                de: "Das Gebet für die Opfergaben (und die Opfernden) wird im Morgenweihrauchgebet an jedem Sonntag und an Herrenfesten anstelle des Gebets für die Reisenden gebetet, ebenso im Morgenweihrauchgebet an Wochentagen, wenn die Gaben schon vorhanden sind, und wenn direkt nach dem Morgenweihrauchgebet die Liturgie gefeiert wird. Wenn es nicht im Morgenweihrauchgebet gesprochen wird wegen nicht vorhandener Gaben, dann betet man es still vor der Lesung aus der Apostelgeschichte.",
            },
            diakon: {
                ar: "تُقال أوشية القرابين في رفع بخور باكر في أيام الآحاد والأعياد السيدية بدلاً من أوشية المسافرين، وكذلك في أيام الأسبوع إذا كانت القرابين موجودة، وإذا كان القداس الإلهي سيُقام عقب رفع البخور مباشرة. أما إذا لم تُقل في رفع بخور باكر لعدم وجود القرابين، فيصليها الكاهن سراً قبل قراءة الإبركسيس.",
                de: "Das Gebet für die Opfergaben (und die Opfernden) wird im Morgenweihrauchgebet an jedem Sonntag und an Herrenfesten anstelle des Gebets für die Reisenden gebetet, ebenso im Morgenweihrauchgebet an Wochentagen, wenn die Gaben schon vorhanden sind, und wenn direkt nach dem Morgenweihrauchgebet die Liturgie gefeiert wird. Wenn es nicht im Morgenweihrauchgebet gesprochen wird wegen nicht vorhandener Gaben, dann betet man es still vor der Lesung aus der Apostelgeschichte.",

            },
            Volk: {
                ar: "تُقال أوشية القرابين في رفع بخور باكر في أيام الآحاد والأعياد السيدية بدلاً من أوشية المسافرين، وكذلك في أيام الأسبوع إذا كانت القرابين موجودة، وإذا كان القداس الإلهي سيُقام عقب رفع البخور مباشرة. أما إذا لم تُقل في رفع بخور باكر لعدم وجود القرابين، فيصليها الكاهن سراً قبل قراءة الإبركسيس.",
                de: "Das Gebet für die Opfergaben (und die Opfernden) wird im Morgenweihrauchgebet an jedem Sonntag und an Herrenfesten anstelle des Gebets für die Reisenden gebetet, ebenso im Morgenweihrauchgebet an Wochentagen, wenn die Gaben schon vorhanden sind, und wenn direkt nach dem Morgenweihrauchgebet die Liturgie gefeiert wird. Wenn es nicht im Morgenweihrauchgebet gesprochen wird wegen nicht vorhandener Gaben, dann betet man es still vor der Lesung aus der Apostelgeschichte.",

            },
        }

    },

    "basily_id_222": {
        roles: {
            priester: {
                de: "⚠️ Priester: Weihrauchgefäß nicht vergessen!",
                ar: "⚠️ الكاهن: لا تنس الشورية!"
            },
            diakon: {
                de: "⚠️ Diakon: Reiche dem Priester die Schورية.",
                ar: "⚠️ الشماس: قدّم الشورية للكاهن."
            }
        }
    },


    // --- GREGORIOS ---
    "gregorios_id_5": {
        roles: {
            priester: {
                de: "Gregorius – priesterliche Anweisung.",
                ar: "تعليمات كهنوتية للغريغوري."
            }
        }
    }
};

