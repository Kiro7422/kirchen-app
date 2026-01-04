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
    de: { label: "🇩🇪 Deutsch", default: true },
    ar: { label: "🇪🇬 Arabisch", default: true },

    // Deine neuen Bezeichnungen:
    ar_de: { label: "Franco / فرانكو", default: false },
    cop_ar: { label: "Koptisch (Arabisch) / قبطي معرب", default: true },
    cop_de: { label: "Koptisch Franco / قبطي فرانكو", default: false },
    cop_cop: { label: "Koptisch / قبطي", default: false },
};

export const liturgies = {
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

            // 2. KYRIE (MIT ÜBERSCHRIFT)
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
            // ID 59: Herr erbarme Dich (3) (Volk)
            {
                id: 59,
                speaker: "Volk",
                cop_ar: "(كيريه ليسون.) 3",
                de: "Herr erbarme Dich. (3)",
                ar: "(يا رب ارحم.) 3",
                cop_cop: "(Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏⲥⲟⲛ.) ⲅ",
                cop_de: "(Kyrie eleyson.) 3",
                ar_de: "(Ya Rab erham.) 3"
            }
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
                speaker: "Volk",
                cop_de: "",
                de: "Durch die Fürsprachen der Mutter Gottes, der Heiligen Maria, vergib uns, o Herr, unsere Sünden durch Deine Gnade.Wir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist,denn du bist (auferstanden/gekommen) und hast uns erlöst. Erbarmen des Friedens, Opfer des Lobes ",
                ar: "بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لأنك (أتيت/قُمت) وخلصتنا رحمة السلام ذبيحة التسبيح",
                cop_cop: "",
                ar_de: "",
                cop_ar: "هيتين نيه إبريسفيا إنتيه تى ثيه أوطوكوس إثؤواب ماريا: إبتشويس آرى إهموت نان إمبى كو إيفول إنتيه نين نوفي. تين أوأوشت إمموك أو بخرستوس: نيم بيك يوت إن آغاثوس: جيه (آك إي/أكطونك) أكسوتي إممون: إيه ليه أوس إيرينيس ثي سيا إيه نيه ثيه أوس",
            },
            {
                id: 11,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
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
                id: 18,
                speaker: "Diakon",
                cop_de: "",
                de: "Wer sitzt, stehe auf!",
                ar: "أيها الجلوس قفوا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إي كاثي ميه ني أناسثيتيه",
            },
            {
                id: 19,
                speaker: "Priester",
                cop_ar: "",
                de: "Denn dein Name, o Herr, ist groß vor allen Völkerschaften, und an jedem Ort werden deinem heiligen Namen Räucherwerk und reine Opfer wie diese Opfergabe und Gabe dargebracht. und über jedem Namen, der genannt werden wird, nicht nur in dieser Zeit, sondern auch in der zukünftigen Welt.",
                ar: "لأنك انت هو الذي فوق كل رئاسة وكل سلطان وكل قوة وكل سيادة وكل اسم يسمي ليس في هذا الدهر فقط بل وفي الآتي.",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 20,
                speaker: "Diakon",
                cop_de: "",
                de: "Schaut nach Osten!",
                ar: "وإلى الشرق انظروا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إس أناطولاس إفليب صاتيه",
            },
            {
                id: 21,
                speaker: "Priester",
                cop_ar: "",
                de: "Du bist es, vor dem abertausende und aber zehntausende Engel, Erzengel und die Heiligen stehen und dienen. Du bist es, vor dem deine beiden guten Wesen stehen, die sechs Flügel und viele Augen haben, die Seraphim und Cherubim. ",
                ar: "أنت الذي يقوم أمامك ألوف ألوف وربوات ربوات الملائكة ورؤساء الملائكة المقدسين يخدمونك. انت الذي يقوم أمامك الكائنات الكريمان جداً ذو الستة الأجنحه الكثيرا الاعين السيرافيم والشاروبيم. فبجناحين يغطون وجوههم من اجل لاهوتك الذي لا يستطاع النظر إليه ولا التفكر فيه. وباثنين يغطون أرجلهم ويطيرون بالاثنين الآخرين.لأن في كل زمان يقدسك كل أحد. لكن مع كل من يقدسك اقبل تقديسنا منا نحن أيضاً يارب إذ نسبحك معهم قائلين",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 22,
                speaker: "Volk",
                cop_de: "",
                de: "Heilig, heilig, heilig ist der Herr der Heerscharen , der Himmel und die Erde sind erfüllt von deiner heiligen Herrlichkeit",
                ar: "قدوس قدوس قدوس رب الصاباؤوت السماء والأرض مملوءتان من مجدك الأقدس",
                cop_cop: "",
                ar_de: "",
                cop_ar: "جيه آجيوس آجيوس آجيوس كيريوس صافاؤوت: إبلى ريس أو أورانس كيه إى جى تيس آجياس صوذوكسيس",
            },
            {
                id: 23,
                speaker: "Priester",
                cop_de: "",
                de: "Heilig Heilig Heilig",
                ar: "قدوس، قدوس، قدوس",
                cop_cop: "",
                ar_de: "",
                cop_ar: "آجيوس، آجيوس، آجيوس",
            },
            {
                id: 24,
                speaker: "Priester",
                cop_ar: "",
                de: "Heilig bist du Herr der Heerscharen, der Himmel und die Erde sind erfüllt von deiner heiligen Herrlichkeit. O Herr, unser Gott, der Himmel und die Erde sind wahrhaftig erfüllt von deiner heiligen Herrlichkeit, durch deinen eingeborenen Sohn, unseren Herrn, Gott, Erlöser und unser aller König Jesus Christus: Erfülle diese Opfergabe, die dir gehört, o Herr, mit dem Segen, der von dir ist. Durch die Herabkunft deines Heiligen Geistes auf sie. ",
                ar: "قدوس رب الجنود السماء والأرض مملوءتان من مجدك الأقدس، أيها الرب الهنا بالحقيقه السماء والارض مملوءتان من مجدك الأقدس، من قبل ابنك الوحيد ربنا والهنا ومخلصنا وملكنا يسوع المسيح املأ هذه الصعيدة التي لك يارب بالبركة التي من قبلك. بحلول روحك القدوس عليها",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 25,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حفا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 26,
                speaker: "Priester",
                cop_ar: "",
                de: "Mit dem Segen segne sie",
                ar: "وبالبركة بارك",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 27,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حفا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 28,
                speaker: "Priester",
                cop_ar: "",
                de: "Und mit der Heiligung heilige sie",
                ar: "وبالتقديس قدس",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 29,
                speaker: "Volk",
                cop_ar: "آميــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 30,
                speaker: "Priester",
                cop_ar: "",
                de: "Diese deine heiligen Opfergaben, die wir begonnen haben, vor dich zu legen, dieses Brot und diesen Kelch. Denn dein einziger Sohn, unser Herr, Gott und Erlöser und unser aller König Jesus Christus! In der Nacht, in der er sich selbst hingab, um für unsere Sünden zu leiden und auch den Tod, den er aus sich selbst aus seinem eigenen Willen für uns alle annahm",
                ar: "قرابينك هذه المكرمة التي بدأنا بوضعها أمامك هذا الخبز وهذه الكأس لأن ابنك الوحيد ربنا والهنا ومخلصنا وملكنا كلنا يسوع المسيح. في الليلة التي اسلم ذاته فيها ليتألم عن خطايانا والموت الذي قبله بذاته بإرادته وحده عنا كلنا.",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 31,
                speaker: "Volk",
                cop_de: "",
                de: "Wir glauben",
                ar: "نؤمــــــن",
                cop_cop: "",
                ar_de: "",
                cop_ar: "بيستيف أومين",
            },
            {
                id: 32,
                speaker: "Priester",
                cop_de: "",
                de: "Er nahm Brot in seine reinen, makellosen, unbefleckten, seligen und lebensspendenden Hände.",
                ar: "أخذ خبزاً على يديه الطاهرتين اللتين بلا عيب ولا دنس الطوباويتين المحييتين",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أفتشي إن أو أويك إيجين نيف جيج إثؤواف إن آتتشنى أووه إن أتثوليف أووه إم مكاريون أووه أنريف تنخو",
            },
            {
                id: 33,
                speaker: "Volk",
                cop_de: "",
                de: "Wir glauben, dass dieses in Wahrheit so ist. Amen.",
                ar: "نؤمن أن هذا هو بالحقيقة: أمين.",
                cop_cop: "",
                ar_de: "",
                cop_ar: "تين ناهتى جيه فاى بيه خين أو ميثمى: آمين",
            },
            {
                id: 34,
                speaker: "Priester",
                cop_de: "",
                de: "Er blickte hinauf zum Himmel zu dir, der sein Vater ist, Gott und Meister eines jeden.",
                ar: "ونظر إلى فوق نحو السماء إليك الله أبيك وسيد كل أحد ",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أفجوشت إى إبشوى إى إتفى هاروك فيئتيفوف إنيوت إفنوتى أووه إفنيب إنتى أوؤن نيفين",
            },
            {
                id: 35,
                speaker: "Priester",
                cop_de: "",
                de: "Er dankte",
                ar: "وشكـر",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيه طاف شيب أهموت",
            },
            {
                id: 36,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 37,
                speaker: "Priester",
                cop_de: "",
                de: "Er segnete es",
                ar: "وباركه",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أف إسمو إيه روف",
            },
            {
                id: 38,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 39,
                speaker: "Priester",
                cop_de: "",
                de: "Und heiligte es",
                ar: "وقدسه",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أف إير آجيا زين إمموف",
            },
            {
                id: 40,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 41,
                speaker: "Volk",
                cop_de: "",
                de: "Wir glauben, bekennen und verherrlichen",
                ar: "نؤمن ونعترف ونمجد",
                cop_cop: "",
                ar_de: "",
                cop_ar: "بستيف أومين كيه أومولوغومين كيه ذوكصازومين",
            },
            {
                id: 42,
                speaker: "Priester",
                cop_de: "",
                de: "Er teilte und gab es seinen heiligen, ehrwürdigen Jüngern und reinen Aposteln und sprach: Nehmt, esst alle davon, denn dies ist mein Leib, der für euch und für viele gebrochen wird zur Vergebung der Sünden. Tut dies zu meinem Gedächtnis",
                ar: "وقسمه وأعطاه لتلاميذه المكرمين  القديسين ورسله الأطهار قائلاً: خذوا كلوا منه كلكم، لأن هذا هو جسدي. الذي يقسم عنكم وعن كثيرين يعطى لمغفرة الخطايا  هذا اصنعوه لذكرى",
                cop_cop: "",
                ar_de: "",
                cop_ar: "آف فشف أفتيف إننى إيتي نوف إن أجيوس إم ماثيتيس أووه إن أبو سطولوس إثؤواب إفجو إمموس جى تشى أؤوم إيفول إنخيتف تيرو فاى غار بى باسوما إتونافشف  إيجين ثينو نيم هان كى ميش إنسى تيف إى إبكو إيفول انتى نى نوفى فاى أريتف إيبا إير افميفى",
            },
            {
                id: 43,
                speaker: "Volk",
                cop_de: "",
                de: "Dies ist es in Wahrheit. Amen",
                ar: "هذا هو بالحقيقة: آمين",
                cop_cop: "",
                ar_de: "",
                cop_ar: "فاى بيه خين أوميثمي: آمين",
            },
            {
                id: 44,
                speaker: "Priester",
                cop_de: "",
                de: "Ebenso nahm er nach dem Mahl den Kelch, mischte Wein und Wasser",
                ar: "وهكذا الكأس أيضاً  من بعد العشاء مزجها من ثمرة الكرمة وماء",
                cop_cop: "",
                ar_de: "",
                cop_ar: "باى ريتى أون بى كى أفوت مينينسا بى ذيبنون أفثوطف إيفول خين أو إرب نيم أو موؤو",
            },
            {
                id: 45,
                speaker: "Priester",
                cop_de: "",
                de: "Er dankte",
                ar: "وشكـر",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إيه طاف شيب أهموت",
            },
            {
                id: 46,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 47,
                speaker: "Priester",
                cop_ar: "",
                de: "Er segnete es",
                ar: "وباركه",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أف إسمو إيه روف",
            },
            {
                id: 48,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            },
            {
                id: 49,
                speaker: "Priester",
                cop_de: "",
                de: "Und heiligte es",
                ar: "وقدسه",
                cop_cop: "",
                ar_de: "",
                cop_ar: "أف إير آجيا زين إمموف",
            },
            {
                id: 50,
                speaker: "Volk",
                cop_ar: "آميـــــن",
                de: "Amen",
                ar: "حقا",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 51,
                speaker: "Volk",
                cop_de: "",
                de: "Wiederum glauben, bekennen und verherrlichen wir",
                ar: "وأيضاً نؤمن ونعترف ونمجد",
                cop_cop: "",
                ar_de: "",
                cop_ar: "كيه بالين بستيف أومين كيه أومولوغومين كيه ذوكصازومين",
            },
            {
                id: 52,
                speaker: "Priester",
                cop_de: "",
                de: "Er kostete davon und gab ihn seinen heiligen, ehrwürdigen Jüngern und reinen Aposteln mit den Worten: Nehmt, trinkt alle daraus, denn dies ist mein Blut des neuen Bundes, das für euch und für viele vergossen wird und hingegeben zur Vergebung der Sünden. „Tut dies zu meinem Gedächtnis“.",
                ar: "وذاق وأعطاها أيضاً لتلاميذه المكرمين القديسين ورسله الأطهار قائلاً: خذوا اشربوا منها كلكم لأن هذا هو دمى الذي للعهد الجديد الذى يسفك عنكم وعن كثيرين يعطى لمغفرة الخطايا هذا اصنعوه لذكري",
                cop_cop: "",
                ar_de: "",
                cop_ar: "آف جيمتيبى أف تيف أون إنى إيتينوف إن أجيوس إم ماثيتيس أووه إن ابسطولوس اثؤواف إفجو إمموس جى تشى سو إيفول إنخيتف تيرو فاى غار بى باإسنوف إنتى تى ذياثيكى إمفيري إيطو نافونف إيفول إبجين ثينو نيم هان كى ميش انسيتيف إى إبكو ايفول انتى نى نوفى فاى أريتف إيبا إير افميفئ",
            },
            {
                id: 53,
                speaker: "Volk",
                cop_de: "",
                de: "Dies ist es auch in Wahrheit. Amen",
                ar: "وهذا هو أيضاً بالحقيقة آمين",
                cop_cop: "",
                ar_de: "",
                cop_ar: "فاى أون بى خين أو ميثمي آمين",
            },
            {
                id: 54,
                speaker: "Priester",
                cop_de: "",
                de: "Denn jedes Mal, wenn ihr von diesem Brot esst, und aus diesem Kelch trinkt, verkündet ihr meinen Tod, bekennt meine Auferstehung und erinnert euch meiner, bis ich wieder komme.",
                ar: "لأن كل مرة تأكلون من هذا الخبز وتشربون من هذه الكأس تبشرون بموتي وتعترفون بقيامتي وتذكروني إلى أن أجئ ",
                cop_cop: "",
                ar_de: "",
                cop_ar: "سوب غار نيفين إيتين نا أو أوم إيفول خين باى أو يك فاى أووه إنتى تين سو إيفول خين باى أفوت فاى إيرييتين هى أو يش إمبامو إيرتين إير أمولوجين إنتا أناسطاسيس إيرى تين إيرى إمباميفئي شاتى إى",
            },
            {
                id: 55,
                speaker: "Volk",
                cop_de: "",
                de: "Amen, Amen, Amen, deinen Tod, o Herr, verkünden wir, deine heilige Auferstehung und deine Himmelfahrt bekennen wir. Wir loben dich, wir preisen dich, wir danken dir, o Herr, und wir bitten dich, unser Gott!",
                ar: " امين امين امين بموتك يارب نبشر وبقيامتك المقدسة وصعودك إلى السموات نعترف نسبحُك نباركُك نشكرُك يارب ونتضرعُ إليكَ يا إلَهنا.",
                cop_cop: "",
                ar_de: "",
                cop_ar: "آمين آمين آمين طون ثاناطون صو كيريه كاطانجيه لومين: كيه تين آجيان صو آناسطاسين: كيه تين أناليبسين صو إنتيس أورانيس سيه أومولوغومين: سيه إيه نومين سيه إفلوغومين سيه إفخاريس طومين كيريه: كيه ذيه أو ميه طا سو أوثيه أوس إيمون",
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
                cop_ar: "كاتا تو إيليوس سو كيريي: كي مي كاتا تاس أمارتياس إيمون.",
                de: "Nach deinem Erbarmen, o Herr, und nicht nach unseren Sünden.",
                ar: "كرحمتِكَ يا رَبُّ، وليس كخطايانا.",
                cop_cop: "Ⲕⲁⲧⲁ ⲧⲟ ⲉ̀ⲗⲉⲟⲥ ⲥⲟⲩ Ⲕⲩⲣⲓⲉ̀ : ⲕⲉ ⲙⲏ ⲕⲁⲧⲁ ⲧⲁⲥ ⲁ̀ⲙⲁⲣⲧⲓⲁⲥ ⲏⲙⲱⲛ.",
                ar_de: "kar7matek ya rab, wa laysa kakhatayana.",
                cop_de: "Kata to eleos sou Kyrie: ke mi kata tas amartias imon.",
            },
            {
                id: 60,
                speaker: "Priester",
                cop_ar: "أللا موي إن أو مو-أو إن نين أفي أوي: نيم هان مومي إن إرمي إن نين فال: هوبوس إنتين ريمي إم بي إيهو-أو نيم بي إيجوره إم بيك إمثو إهري إيجين نين بارابتوماتا. جي أنون بيه بيك لا-أوس نيم ني إيسو-أو إنتيه بيك أوهي: سيني إن نين أنوميا: آري سينخورين إن نين بارابتوماتا. نيه إيتان آيتو خين بين أواوش: نيم نيه إيتان آيتو خين بين أواوش آن: نيه إيتان آيتو خين أوييمي: نيم نيه إيتان آيتو خين أو ميث أت إيمي: نيه إت هيب نيم نيه إثؤون إيفول. نيه إيت اف إير شورب إن أو أونهو إيفول نيم نيه إيتان وبش إيرو-أو: ناي إيتيف سو-أون إم مو-أو إنجيه بيك ران إثؤواب. سوتيم بوتشويس إي ب توبه إنتيه بيك لا-أوس: ماهثيك إي بي أهوم إنتيه نيك إيفيايك. أووه إثفي نا نوفي موي نيم ني سوف إنتيه با هيت: إم بير فيج بيك لا-أوس إم بي هموت إهري إنتيه بيك بنفما إثؤواب.",
                de: "Sondern gib Wasser auf unsere Häupter und Quellen von Tränen für unsere Augen, damit wir Tag und Nacht wegen unserer Missetaten vor dir weinen, weil wir dein Volk und Schafe deiner Herde sind. Geh vorbei an unseren Sünden, erlasse uns unsere Missetaten, die wir willentlich oder unwillentlich, wissentlich oder unwissentlich begangen haben, die verborgenen und die sichtbaren; die vorher sichtbar waren und die wir vergessen haben, die aber dein heiliger Name kennt. Höre, o Herr, die Bitten deines Volkes und wende dich dem Seufzen deiner Diener zu. Lasse nicht zu, dass durch meine eigenen Sünden und die Greuel meines Herzens dein Volk der Gnade deines Heiligen Geistes beraubt wird.",
                ar: "بل أعطِ ماءً لرؤوسِنا، وينابيعَ دُموعٍ لأعينِنَا، لِكَيْ نَبكي نهاراً وليلاً أمامَكَ على زلَّاتِنا. لأنَّنا نحنُ شعبُكَ وخِرافُ قطيعِكَ، تجاوزْ عن آثامِنا، واصفحْ عن زلاتِنا. الَّتي صنَعْناها بمشيئَتِنا، والَّتي صنَعْناها بغيرِ مشيئَتِنا، الَّتي صنَعْناها بمعرفَةٍ، والَّتي صنَعْناها بغيرِ معرفَةٍ، الخفيَّةِ والظاهرةِ. الَّتي سَبَقَ إظهارُها والَّتي نَسينَاها، هذهِ هي الَّتي يعرِفُها اسمُكَ القُدُّوسُ. اسمعْ يا رَبُّ طِلبَةَ شعبِكَ، والتفتْ إلى تَنَهُدِ عبيدِكَ. ومِنْ أجلِ خطايايَ خاصةً ونجاساتِ قلبي، لا تحرمْ شعبَكَ مِنْ حُلُولِ روحِكَ القُدُّوسِ.",
                cop_cop: "ⲙ̀ⲡⲓⲉ̀ϩⲟⲟⲩ ⲛⲉⲙ ⲡⲓⲉ̀ϫⲱⲣϩ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ ⲉ̀ϩ̀ⲣⲏⲓ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ. Ⲭⲉ ⲁ̀ⲛⲟⲛ ⲡⲉ ⲡⲉⲕⲗⲁⲟⲥ ⲛⲉⲙ ⲛⲓⲉ̀ⲥⲱⲟⲩ ⲛ̀ⲧⲉ ⲡⲉⲕⲟ̀ϩⲓ : ⲥⲓⲛⲓ ⲛ̀ⲛⲉⲛⲁ̀ⲛⲟⲙⲓⲁ̀ : ⲁ̀ⲣⲓⲥⲩⲛⲭⲱⲣⲓⲛ ⲛ̀ⲛⲉⲛⲡⲁⲣⲁⲡⲧⲱⲙⲁ. Ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲡⲉⲛⲟⲩⲱϣ ⲁⲛ : ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲉ̀ⲙⲓ : ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲁⲓⲧⲟⲩ ϧⲉⲛ ⲟⲩⲙⲉⲧⲁⲧⲉ̀ⲙⲓ : ⲛⲏⲉⲧϩⲏⲡ ⲛⲉⲙ ⲛⲏⲉⲑⲟⲩⲱⲛϩ ⲉ̀ⲃⲟⲗ. Ⲛⲏⲉ̀ⲧⲁⲩⲉⲣϣⲟⲣⲡ ⲛ̀ⲟⲩⲟⲛϩⲟⲩ ⲉ̀ⲃⲟⲗ ⲛⲉⲙ ⲛⲏⲉ̀ⲧⲁⲛⲱⲃϣ ⲉ̀ⲣⲱⲟⲩ : ⲛⲁⲓ ⲉ̀ⲧⲉϥⲥⲱⲟⲩⲛ ⲙ̀ⲙⲱⲟⲩ ⲛ̀ϫⲉ ⲡⲉⲕⲣⲁⲛ ⲉ̀ⲑⲟⲩⲁⲃ. Ⲥⲱⲧⲉⲙ Ⲡϭⲟⲓⲥ ⲉ̀ⲡⲧⲱⲃϩ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ : ⲙⲁϩ̀ⲑⲏⲕ ⲉ̀ⲡⲓⲁ̀ϩⲟⲙ ⲛ̀ⲧⲉ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ. Ⲟⲩⲟϩ ⲉⲑⲃⲉ ⲛⲁⲛⲟⲃⲓ ⲙⲟⲩⲓ̀ ⲛⲉⲙ ⲛⲓⲥⲱϥ ⲛ̀ⲧⲉ ⲡⲁϩⲏⲧ : ⲙ̀ⲡⲉⲣϥⲉϫ ⲡⲉⲕⲗⲁⲟⲥ ⲙ̀ⲡⲓϩⲙⲟⲧ ⲉ̀ϩ̀ⲣⲏⲓ ⲛ̀ⲧⲉ Ⲡⲉⲕⲡⲛⲉⲩⲙⲁ ⲉ̀ⲑⲟⲩⲁⲃ.",
                ar_de: ": bal a3ti ma2an lero2osina, wa yanabi3a domou3en le2a3yonina, lekay nabki naharan wa laylan amamaka 3ala zalatena. le2anana na7no sha3boka wa kherafa qati3ek, tajawaz 3an athamena, wa asfa7 3an zalatena. ellati sana3naha be mashi2atina, wa ellati sana3naha be ghayr mashi2atina, ellati sana3naha be ma3refaten, wa ellati sana3naha be ghayr ma3refaten, el khafeyati wa el zahera. ellati sabaqa izharoha wa ellati nasinaha, hazehi hiya ellati ya3rifoha ismoka el qodous. esma3 ya rab telbata sha3beka, waltafet ela tanahode 3abidek. wa men ajle khatayaya khasatan wa najasati qalbi, la ta7rem sha3baka men holouli rou7eka el qodous.",
                cop_de: "Alla moi en o-mo-ou en nen afi-oui: nem han moomi en ermi en nen val: hopos enten rimi em pi-eho-ou nem pi-egorh em pek emtho ehri egen nen paraptomata. Je anon pe pek-la-os nem ni-eso-ou ente pek-ohi: sini en nen anomia: ari sinkhorin en nen paraptomata. Ni-etan-aito khen pen-owosh: nem ni-etan-aito khen pen-owosh an: ni-etan-aito khen ou-emi: nem ni-etan-aito khen ou-met-at-emi: ni-et-hip nem ni-etho-onh evol. Ni-et av-er-shorp en-ou-on-hou evol nem ni-etan-obsh ero-ou: nai etef-so-oun em-mo-ou enje pek-ran etho-wab. Sotem Potshois e-p-tovh ente pek-la-os: mahthik e-pi-ahom ente nek-eviaik. Owoh ethve na-novi moi nem ni-sof ente pa-hit: em-per-fej pek-la-os em-pi-hmot ehri ente pek-pnevma etho-wab.",
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
                ar: "وأرسِل إلى أسفلُ مِنْ عُلُوِّكَ المُقَدَّسِ، ومِنْ مسكنِكَ المُستَعِدِّ، ومِنْ حضنِكَ غَيْرِ المحصورِ، ومِنْ عرشِ مملكَةِ مَجدِكَ. البارقليطَ، روحَكَ القُدُّوسَ، الأقنومَ غَيْرَ المُستَحيلِ، ولا متغيرِ، الرَّبُّ المُحيي. الناطقَ في النَّاموسِ والأنبياءِ والرُّسُلِ. الحالُّ في كُلِّ مكانٍ، المالئُ كُلَّ مكانٍ، ولا يحويهِ مكانٌ. وهو يُجري التقديسَ بسلطةٍ بمسرتِكَ للذينَ يُحِبُّهُمْ، وليسَ على سبيلِ خدمةٍ عبوديةٍ. البسيطُ في طبيعتِهِ، الكثيرُ الأنواعِ في فعلِهِ، ينبوعُ النِّعَمِ الإلهيَّةِ. المُساوي لكَ، المُنبثِقُ مِنْكَ. شريكُ عرشِ مملكةِ مَجدِكَ، وابنِكَ الوحيدِ، رَبِّنا وإلَهنا ومُخَلِّصنا وملِكنا كُلِّنا يسوع المسيح. علينا نحنُ عبيدَكَ وعلى هذهِ القرابينِ التي لكَ المُكرَّمةِ، السابقِ وضعُها أمامَكَ. على هذا الخُبزِ وعلى هذهِ الكأسِ، لكي يتطهَّرا وينتقِلا.",
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
                    { label_ar: "(غ) الغريغوري", label_de: "(G) Gregorios", action: "goto_gregorios_start" },
                    { label_ar: "(ك) الكيرلسي", label_de: "(K) Cyrillus", action: "goto_cyrillus_id_23" } // Führt zu ID 21
                ]
            },
        ]
    }
    }
    


    

export const liturgyHints = {
    // Syntax: ID_NUMMER: { de: "Text", ar: "Text" }
    
    // Beispiel: Bei ID 27 (Absolution/Weihrauch)
    27: {
        de: "⚠️ Vergiss das Weihrauchgefäß nicht!",
        ar: "⚠️ لا تنس المجمرة (الشورية)!"
    },
    // Beispiel: Bei ID 5
    5: {
        de: "🕯️ Zünde jetzt die Kerzen an!",
        ar: "🕯️ أشعل الشموع الآن!"
    },
    // Beispiel: Basilius ID 1 (Versöhnung)
    1: {
        de: "✟ Bereite das Prospharin vor (Enthüllung).",
        ar: "✟ استعد لرفع الإبروسفارين."
    }
};