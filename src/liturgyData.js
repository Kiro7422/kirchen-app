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
                counter: 41


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
                    {
                        label_ar: "اصعدها كمقدارها", // Oblations
                        label_de: "Nach ihrem Maß",
                        action: "navigatePage",
                        targetPage: "litany_oblations"
                    }
                ]
            },
            // ID 75: Die Gewässer - Priester (Start)

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
                cop_de: "Hiten ni-presvia ente ti-theotokos eth-ouab Maria: Ep-schois ari-hmot nan em-pi-ko ewol ente nen-novi. Ten-u-oscht emmok o Pi-Christos: nem Pek-yot en-agathos: nem Pi-pnevma eth-ouab: dsche (ak-i / ak-tonk) ak-soti emmon. Eleos irinis thisia eneseos.",
                de: "Durch die Fürsprachen der Mutter Gottes, der Heiligen Maria, vergib uns, o Herr, unsere Sünden durch Deine Gnade. Wir beten dich an, o Christus, zusammen mit deinem guten Vater, und dem Heiligen Geist, denn du bist (auferstanden/gekommen) und hast uns erlöst. Erbarmen des Friedens, Opfer des Lobes.",
                ar: "بشفاعات والدة الإله القديسة مريم يارب انعم لنا بمغفرة خطايانا نسجد لك أيها المسيح مع أبيك الصالح والروح القدس لأنك (أتيت/قُمت) وخلصتنا رحمة السلام ذبيحة التسبيح",
                cop_cop: "Ϩⲓⲧⲉⲛ ⲛⲓⲡⲣⲉⲥⲃⲓⲁ ⲛ̀ⲧⲉ ϯⲑⲉⲟⲧⲟⲕⲟⲥ ⲉⲑⲟⲩⲁⲃ Ⲙⲁⲣⲓⲁ: Ⲡϭⲟⲓⲥ ⲁⲣⲓϩⲙⲟⲧ ⲛⲁⲛ ⲙ̀ⲡⲓⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ. Ⲧⲉⲛⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ ⲱ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ: ⲛⲉⲙ Ⲡⲉⲕⲓⲱⲧ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲥ: ⲛⲉⲙ Ⲡⲓⲡⲛⲉⲩⲙⲁ ⲉⲑⲟⲩⲁⲃ: ϫⲉ (ⲁⲕⲓ̀ / ⲁⲕⲧⲱⲛⲕ) ⲁⲕⲥⲱϯ ⲙ̀ⲙⲟⲛ. Ⲉⲗⲉⲟⲥ ⲓⲣⲓⲛⲏⲥ ⲑⲩⲥⲓⲁ ⲉⲛⲉⲥⲉⲱⲥ.",
                ar_de: "Bi-schafa-at walidat el-ilah el-kiddisa Mariam, ya Rab anam lana bi-maghfiret chatayana. Nasgud laka ayuha el-Massih, ma abika el-saleh, wa-ruh el-kudus, lianaka (atayta / kumta) wa challastana. Rahmatu es-salam, sabichat et-tasbih.",
                cop_ar: "هيتين نيه إبريسفيا إنتيه تى ثيه أوطوكوس إثؤواب ماريا: إبتشويس آرى إهموت نان إمبى كو إيفول إنتيه نين نوفي. تين أوأوشت إمموك أو بخرستوس: نيم بيك يوت إن آغاثوس: جيه (آك إي/أكطونك) أكسوتي إممون: إيه ليه أوس إيرينيس ثي سيا إيه نيه ثيه أوس",
            },
            {
                id: 11,
                speaker: "",
                cop_de: "",
                de: "Die Liebe Gottes des Vaters und die Gande seines einzig geborenen Sohnes ",
                ar: "محبة الله الآب ونعمة الابن الوحيد الجنس",
                cop_cop: "",
                ar_de: "",
                cop_ar: "إى أغابى تو ثيئو كى باتروس كى إيخاريس  تو مونوجينيس",
            },
            {
                id: 12,
                speaker: "Priester",
                cop_de: "I agapi tu Theu ke Patros: ke i charis tu Monogenus. Iu Kiriu de ke Theu: ke Sotiros imon Isu Christu. Ke i kinonia: ke i dorea tu Agiu Pnevmatos: i i meta panton imon.",
                de: "Die Liebe Gottes des Vaters und die Gnade seines einzig geborenen Sohnes, unseres Herrn und Gottes und Erlösers Jesus Christus. Und die Gemeinschaft und die Gabe des Heiligen Geistes sei mit euch allen.",
                ar: "محبة الله الآب ونعمة الابن الوحيد الجنس ربنا وإلهنا ومخلصنا يسوع المسيح وشركة وموهبة الروح القدس تكون مع جميعكم",
                cop_cop: "Ⲏ̀ⲁ̀ⲅⲁⲡⲏ ⲧⲟⲩ Ⲑⲉⲟⲩ ⲕⲉ Ⲡⲁⲧⲣⲟⲥ: ⲕⲉ ⲏ̀ⲭⲁⲣⲓⲥ ⲧⲟⲩ Ⲙⲟⲛⲟⲅⲉⲛⲟⲩⲥ. Ⲩⲓⲟⲩ: Ⲕⲩⲣⲓⲟⲩ ⲇⲉ ⲕⲉ Ⲑⲉⲟⲩ: ⲕⲉ Ⲥⲱⲧⲏⲣⲟⲥ ⲏ̀ⲙⲱⲛ Ⲓⲏⲥⲟⲩ Ⲭⲣⲓⲥⲧⲟⲩ. Ⲕⲉ ⲏ̀ⲕⲟⲓⲛⲱⲛⲓⲁ: ⲕⲉ ⲏ̀ⲇⲱⲣⲉⲁ̀ ⲧⲟⲩ Ⲁ̀ⲅⲓⲟⲩ Ⲡⲛⲉⲩⲙⲁⲧⲟⲥ: ⲏ̀ⲏ̀ ⲙⲉⲧⲁ ⲡⲁⲛⲧⲱⲛ ⲩ̀ⲙⲱⲛ.",
                ar_de: "Mahabat Allah el-Ab wa ni3mat el-Ibn el-wahid el-ghens. Rabuna wa Ilahuna wa Muchallisuna Yasu el-Massih. Wa sharikat wa mauhibat er-Ruh el-Kudus takun ma3a gami3ikum.",
                cop_ar: "إي أغابي تو ثيئو كي باتروس كي إيخاريس تو مونوجينيس. إيو كيرِيو ذي كي ثيئو كي سوتيروس إيمون إيسو خريستو. كي إي كينونيا كي إي ذوريئا تو أجيو بنيڤماتوس، إي إي ميتا بانطون إيمون",
            },
            {
                id: 13,
                speaker: "Volk",
                cop_de: "Ke meta tu pnevmatos su.",
                de: "Und mit deinem Geiste.",
                ar: "ومع روحك أيضاً",
                cop_cop: "Ⲕⲉ ⲙⲉⲧⲁ ⲧⲟⲩ ⲡⲛⲉⲩⲙⲁⲧⲟⲥ ⲥⲟⲩ.",
                ar_de: "Wa ma3a ruhika aydan.",
                cop_ar: "كيه ميه طا طو إبنفما طوسو",
            },
            {
                id: 14,
                speaker: "Priester",
                cop_de: "Ano imon tas kardias.",
                de: "Erhebt Eure Herzen !",
                ar: "إرفعوا قلوبكم.",
                cop_cop: "Ⲁⲛⲱ ⲏ̀ⲙⲱⲛ ⲧⲁⲥ ⲕⲁⲣⲇⲓⲁⲥ.",
                ar_de: "Irfa3u kulubakum.",
                cop_ar: "آنو إيمون طاذكارذِياس.",
            },
            {
                id: 15,
                speaker: "Volk",
                cop_de: "Echomen pros ton Kirion.",
                de: "Wir haben sie beim Herrn.",
                ar: "هي عند الرب.",
                cop_cop: "Ⲉⲭⲟⲙⲉⲛ ⲡⲣⲟⲥ ⲧⲟⲛ Ⲕⲩⲣⲓⲟⲛ.",
                ar_de: "Hiya 3inda er-Rab.",
                cop_ar: "إيه خومين إبروس طون كيريون.",
            },
            {
                id: 16,
                speaker: "Priester",
                cop_de: "Efcharistisomen to Kirio.",
                de: "Lasst uns dem Herrn danken.",
                ar: "فلنشكر الرب.",
                cop_cop: "Ⲉⲩⲭⲁⲣⲓⲥⲧⲏⲥⲱⲙⲉⲛ ⲧⲱ Ⲕⲩⲣⲓⲱ.",
                ar_de: "Fal-nashkur er-Rab.",
                cop_ar: "إيفخاريستى صومين طو كيريو.",
            },
            {
                id: 17,
                speaker: "Volk",
                cop_de: "Axion ke dikeon.",
                de: "Würdig und recht.",
                ar: "مستحق وعادل.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ.",
                ar_de: "Mustahakk wa 3adel.",
                cop_ar: "أكسيون كيه ذى كيه أون.",
            },
            {
                i: 18,
                speaker: "Priester",
                cop_de: "Axion ke dikeon: axion ke dikeon: axion ke dikeon. Alithos gar axion ke dikeon. E-hos erok: e-smo erok: e-schemschi mmok: e-u-oscht mmok: e-ti-o-u nak. Pi-uai em-mauats en-alithinos: Pi-nuti pi-mai-romi. Pi-at-schadschi em-pef: pi-ath-nau e-rof: pi-at-amoni em-mof: pi-at-archesthe entotf: pi-scha eneh: pi-at-sibti: pi-at-schi em-mof: pi-at-khotkhetf: pi-at-schibti. Pi-ref-sont ente ep-tirf: pi-sotir ente u-on niben: pi-ref-ko e-bol ente nen-nobi. Pi-ref-nohem ente pen-onkh e-bol khen ep-tako: pi-ref-ti-klom e-jen khen ni-met-schen-hit nem ni-met-ref-schen-hit. Enthok gar etere ni-angelos hos erok: nem ni-archi-angelos se-u-osht mmok. Enthok etere ni-archi smo erok: u-oh se-osch e-hri harok endsche ni-kyriotis: enthok etere ni-exusia sadji em-pek-o-u. Enthok etere ni-thronos u-orp nak e-ep-schoi en-pi-taio. Han-an-scho en-scho se-ohi e-ratu em-pek-emtho: nem han-an-thba en-thba se-schemschi mmok. Enthok etere ni-et-hip smo erok: nem ni-et-u-onh e-bol se-u-oscht mmok: ev-iri tiru em-pek-sadji Pen-chois.",
                de: "Würdig und recht, würdig und recht, Es ist in Wahrheit Würdig und recht . dich zu Loben, dir zu huldigen, dir zu dienen, dich anzubeten, dich zu verherrlichen, du Einziger, allein Wahrhaftiger, Gott, Menschenliebender. Der du Unausspechlicher Unsichtbarer , Unbeschränkbarer, ohne Anfang, Ewiger, Zeitloser, Unmeßbarer, Unerforschlicher, Unwandelbarer, Schöpfer des Alls, Retter eines jeden bist. Der du unsere Sünden vergibst, der unser Leben Vor dem Untergang rettet ,der uns mit Erbarmen und Barmherzigkeit Krönt Du bist der , dem die Engel Lobsingen und den die Erzengel anbeten. Du bist der ,den die Mächt preisen und dem die Herrscharen zurufen. Du bist der , dessen Ehre die Gewalten Verkünden. Du bist der , dem die Throne die Ruhm emporsenden Tausende und Abertausende stellen sich vor dir auf, Zehntausende und die Aberzehntausende dienen dir. Du bist der, den die Unsichtbaren preisen. Du bist der ,den die sichtbaren anbeten. Indem sie alle deine Befehle ausführen, unser Herr.",
                ar: "مستحق وعادل. مستحق وعادل. مستحق وعادل. مستحق بالحقيقة وعادل. أن نسبحك ونباركك ونخدمك ونسجد لك ونمجدك. أيها الواحد وحده الحقيقي الله محب البشر الذي لا ينطق به، غير المرئي، غير المحوى، غير المبتدئ، الأبدي، غير الزمني، الذي لا يُحد غير المفحوص، غير المستحيل، خالق الكل، مخلص الجميع، غافر خطايانا. مُنقذ حياتنا من الفساد، مُكللنا بالمراحم والرأفات. أنت الذي تُسبحك الملائكة، وتسجد لك رؤساء الملائكة. أنت الذي تباركك الرؤساء، وتصرخ نحوك الأرباب، أنت الذي تنطق السلاطين بمجدك. أنت الذي ترسل لك الكراسي الكرامة. ألوف ألوف وقوفٌ قدامك، وربوات ربوات يقدمون لك الخدمة. أنت الذي يباركك غير المرئيين، وأنت الذي يسجدون لك الظاهرون، ويصنعون كلهم كلمتك يا سيدنا.",
                cop_cop: "Ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ: ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ. Ⲁⲗⲏⲑⲱⲥ ⲅⲁⲣ ⲁⲝⲓⲟⲛ ⲕⲉ ⲇⲓⲕⲉⲟⲛ. Ⲉϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲉ̀ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲉ̀ϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ: ⲉ̀ⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ: ⲉ̀ϯⲱⲟⲩ ⲛⲁⲕ. Ⲡⲓⲟⲩⲁⲓ ⲙ̀ⲙⲁⲩⲁⲧϥ ⲛ̀ⲁ̀ⲗⲏⲑⲓⲛⲟⲥ: Ⲡⲛⲟⲩϯ ⲡⲓⲙⲁⲓⲣⲱⲙⲓ. Ⲡⲓⲁⲧϣⲁϫⲓ ⲙ̀ⲡⲉϥ: ⲡⲓⲁⲑⲛⲁⲩ ⲉ̀ⲣⲟϥ: ⲡⲓⲁⲧⲁ̀ⲙⲟⲛⲓ ⲙ̀ⲙⲟϥ: ⲡⲓⲁⲧⲁⲣⲭⲉⲥⲑⲉ ⲛ̀ⲧⲟⲧϥ: ⲡⲓϣⲁ ⲉ̀ⲛⲉϩ: ⲡⲓⲁⲧⲥⲓⲃϯ: ⲡⲓⲁⲧϣⲓ ⲙ̀ⲙⲟϥ: ⲡⲓⲁⲧϧⲟⲧϧⲉⲧϥ: ⲡⲓⲁⲧϣⲓⲃϯ. Ⲡⲓⲣⲉϥⲥⲱⲛⲧ ⲛ̀ⲧⲉ ⲡⲧⲏⲣϥ: ⲡⲓⲥⲱⲧⲏⲣ ⲛ̀ⲧⲉ ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ: ⲡⲓⲣⲉϥⲭⲱ ⲉ̀ⲃⲟⲗ ⲛ̀ⲧⲉ ⲛⲉⲛⲛⲟⲃⲓ. Ⲡⲓⲣⲉϥⲛⲟϩⲉⲙ ⲛ̀ⲧⲉ ⲡⲉⲛⲱⲛϧ ⲉ̀ⲃⲟⲗ ϧⲉⲛ ⲡⲧⲁⲕⲟ: ⲡⲓⲣⲉϥϯⲕⲗⲟⲙ ⲉ̀ϫⲱⲛ ϧⲉⲛ ⲛⲓⲙⲉⲧϣⲉⲛϩⲏⲧ ⲛⲉⲙ ⲛⲓⲙⲉⲧⲣⲉϥϣⲉⲛϩⲏⲧ. Ⲛ̀ⲑⲟⲕ ⲅⲁⲣ ⲉⲧⲉⲣⲉ ⲛⲓⲁⲅⲅⲉⲗⲟⲥ ϩⲱⲥ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲓⲁⲣⲭⲏⲁⲅⲅⲉⲗⲟⲥ ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ. Ⲛ̀ⲑⲟⲕ ⲉⲧⲉⲣⲉ ⲛⲓⲁⲣⲭⲏ ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲥⲉⲱϣ ⲉ̀ϩⲣⲏⲓ ϩⲁⲣⲟⲕ ⲛ̀ϫⲉ ⲛⲓⲕⲩⲣⲓⲟⲧⲏⲥ: ⲛ̀ⲑⲟⲕ ⲉⲧⲉⲣⲉ ⲛⲓⲉⲝⲟⲩⲥⲓⲁ ⲥⲁϫⲓ ⲙ̀ⲡⲉⲕⲱⲟⲩ. Ⲛ̀ⲑⲟⲕ ⲉⲧⲉⲣⲉ ⲛⲓⲑⲣⲟⲛⲟⲥ ⲟⲩⲱⲣⲡ ⲛⲁⲕ ⲉ̀ⲡϣⲱⲓ ⲙ̀ⲡⲓⲧⲁⲓⲟ. Ϩⲁⲛⲁⲛ ϣⲟ ⲛ̀ϣⲟ ⲥⲉⲟϩⲓ ⲉ̀ⲣⲁⲧⲟⲩ ⲙ̀ⲡⲉⲕⲙ̀ⲑⲟ: ⲛⲉⲙ ϩⲁⲛⲁⲛ ⲑⲃⲁ ⲛ̀ⲑⲃⲁ ⲥⲉϣⲉⲙϣⲓ ⲙ̀ⲙⲟⲕ. Ⲛ̀ⲑⲟⲕ ⲉⲧⲉⲣⲉ ⲛⲏⲉⲧϩⲏⲡ ⲥⲙⲟⲩ ⲉ̀ⲣⲟⲕ: ⲛⲉⲙ ⲛⲏⲉⲧⲟⲩⲟⲛϩ ⲉ̀ⲃⲟⲗ ⲥⲉⲟⲩⲱϣⲧ ⲙ̀ⲙⲟⲕ: ⲉⲩⲓⲣⲓ ⲧⲏⲣⲟⲩ ⲙ̀ⲡⲉⲕⲥⲁϫⲓ Ⲡⲉⲛϭⲟⲓⲥ.",
                ar_de: "Axion ke dikeon: axion ke dikeon: axion ke dikeon. Alithos gar axion ke dikeon. An nusabbihaka wa nubarikaka wa nachdimaka wa nasgud laka wa numaggidak. Ayuha el-wahed wahdahu el-hakiki Allah muhib el-bashar, allazi la yuntak bihi, gheir el-mar-i, gheir el-muhwa, gheir el-mubtadi, el-abadi, gheir el-zamani, allazi la yuhad, gheir el-mafhous, gheir el-mustahil, chalik el-kol, muchallis el-gamie, ghafer chatayana. Munkiz hayatina min el-fasad, mukalliluna bil-marahim wal-ra'afat. Anta allazi tusabbihuka el-malaika, wa tasgud laka ro'asa el-malaika. Anta allazi tubarikuka el-ro'asa, wa tasruch nahwaka el-arbab, anta allazi tantik el-salatin bi-magdik. Anta allazi tursil laka el-karasi el-karama. Olof olof wokuf kuddamak, wa ribawat ribawat yukaddimuna laka el-chidma. Anta allazi yubarikuka gheir el-mar-ieen, wa anta allazi yasgudoun laka el-zahiroun, wa yasnaoun kullahum kalimatak ya sayidana.",
                cop_ar: "أكسيون كي ديكاؤون: أكسيون كي ديكاؤون: أكسيون كي ديكاؤون. أليثوس غار أكسيون كي ديكاؤون. إيه هوس إيروك: إيه إسمو إيروك: إيه شيمشي إمموك: إيه أوأوشت إمموك: إيه تي أو أو ناك. بي أوواي إممافاتس إن أليثينوس: بي نوتي بي ماي رومي. بي أت شاجي إمبيف: بي أثناف إيروف: بي أت أموني إمموف: بي أت أرخيسثيه إنتوتف: بي شا إينيه: بي أت سيبتي: بي أت شي إمموف: بي أت خوتخيتف: بي أت شيبتي. بي ريف سونت إنتيه إبتيرف: بي سوتير إنتيه أوأون نيفين: بي ريف كو إيفول إنتيه نين نوفي. بي ريف نوهم إنتيه بين أونخ إيفول خين إبتاكو: بي ريف تي كلوم إيجين خين ني ميت شينهيت نيم ني ميت ريف شينهيت. إنثوك غار إتيريه ني أنجيلوس هوس إيروك: نيم ني أرشي أنجيلوس سي أوأوشت إمموك. إنثوك إتيريه ني أرشي إسمو إيروك: أووه سي أوش إي إهري هاروك إنجيه ني كيريوتيس: إنثوك إتيريه ني إكسوسيا ساجي إمبيك أو أو. إنثوك إتيريه ني ثرونوس أوأورب ناك إي إبشوي إمبي طايو. هان أن شو إن شو سي أوهي إيرات إمبيك إمثو: نيم هان أن ثفا إن ثفا سي شيمشي إمموك. إنثوك إتيريه ني إت هيب إسمو إيروك: نيم ني إت أوأونه إيفول سي أوأوشت إمموك: إيف إيري تيرو إمبيك ساجي بين شويس.",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_cop: "Ⲧⲱⲃϩ ⲉ̀ϫⲉⲛ ⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡϣⲉⲙⲙⲟ: ⲓⲉ ⲛⲏⲉⲑⲙⲉⲩⲓ̀ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ⲥⲟⲩⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ: ⲓⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ: ⲓⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ ⲓⲉ ⲛⲓⲗⲩⲙⲛⲏ ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲓ̀ⲙⲟϣⲓ (ⲓⲉ ⲡⲓⲁ̀ⲏⲣ): ⲓⲉ ⲉⲧⲓⲣⲓ ⲛ̀ⲛⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ: ϩⲓⲛⲁ ⲛ̀ⲧⲉ Ⲡⲓⲭⲣⲓⲥⲧⲟⲥ Ⲡⲉⲛⲛⲟⲩϯ ⲧⲁⲥⲑⲱⲟⲩ ⲉ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲟⲩ ⲙ̀ⲙⲁⲛ̀ϣⲱⲡⲓ ϧⲉⲛ ⲟⲩϩⲓⲣⲏⲛⲏ: ⲛ̀ⲧⲉϥⲭⲁ ⲛⲉⲛⲛⲟⲃⲓ ⲛⲁⲛ ⲉ̀ⲃⲟⲗ.",
                ar_de: "otlobou 3an aba2ina wa ikhwatina el-mosafirina, wal-lazina yodmirouna el-safara fi kolli mawdi3in, sahhil toroqahom ajma3ina, en kana fel-bahri aw el-anhari aw el-bohayrati aw el-toroqi el-masloukati, [aw el-jaw], likay el-Masi7 elahona yaroddahom ila masakinahom salimina, wa yaghfira lana khatayana.",
                cop_ar: "توفه إيجين نين يوتي نيم نين إسنِي إيتاف شي إيبشيمو: إيه ني إيثميفي إيشي خين ماي نيفين: سوتون نو مويت تيرو: إيتيه إيفول هيتين في أوم: إيه ني يارو إيه ني ليمني إيه ني مويت إي موشي (إيه بي أير): إيه إتيري إن نو جين موشي إن ريتي نيفين: هينا إنتيه بي إخرستوس بين نوتي تاسثو أو إيه ني إيتيه نو أو إممان شوبي خين أو هيريني: إنتيف كا نين نوفي نان إيفول.",
            },
            {
                id: 17.14,
                speaker: "Volk",
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
            },
            {
                id: 17.15,
                speaker: "Priester",
                cop_de: "Thai etshop isgen avrikhs enti-oikomene sha avrikhs. Nenioti nem nensniv et-avshe ep-shemmo. Ie ni-ethmevi eshe khen mai niven: souton noumoit tirou: ite evol hiten phiom: ie ni-iarou: ie ni-limni: ie ni-moit imoshi: ie pia-ir: ie etiri ennou-ginmoshi enriti niven: ouon niven etven mai niven matasthoo e-khoun e-oulimin engamit e-oulimin ente piougai. Ari-kataxioin arish-phir en-sh-phir nem sh-phir moshi nemoo. Mas-thoo eni-ete nou-ou khen ourashi evrashi: khen ou-ougai ev-oug-nout. Arish-phir en-erhov nem nek-eviaik: khen hov niven en-agathon. Anon de hon P-chois ten-met-rem-eng-oili etkhen pai-vios phai: areh eros en-at-evlavi en-at-khimon en-at-shthorter sha evol.",
                de: "Sie besteht von einem Ende des Erdkreises bis zum anderen Ende. Unserer Väter und Brüder, die auf Reisen sind. Und aller, die eine Reise irgendwohin vorhaben. Ebne ihnen allen ihre Wege, sei es auf Meeren, Flüssen, Seen, Landwegen, (in der Luft) oder auf anderen Reisewegen, jedem zu jedem Ort. Bringe sie zurück in einen ruhigen Hafen, zum Hafen des Heils. Bitte, sei ihnen ein Segelgefährte und Wegbegleiter. Und geleite sie nach Hause zurück zu den Ihren, von Freude erfüllt und mit Gesundheit gestärkt. Nimm Anteil an der Arbeit deiner Diener in jedem guten Werk. Was uns selbst betrifft, o Herr, bewahre unser Fremdsein in dieser Lebenszeit ohne Schaden, ohne Stürme und Sorgen bis ans Ende.",
                ar: "هَذِهِ الكائِنَةُ مِنْ أَقْصَى المَسْكُونَةِ إِلَى أَقْصَاهَا. آبائِنَا وإِخْوَتِنَا المُسَافِرِينَ. والَّذِينَ يُضْمِرُونَ السَّفَرَ فِي كُلِّ مَكَانٍ، سَهِّلْ طُرُقَهُمْ أَجْمَعِينَ، إِنْ كَانَ فِي البَحْرِ، أَوْ الأَنْهَارِ، أَوْ البُحَيْرَاتِ، أَوْ الطُّرُقِ المَسْلُوكَةِ، [أَوْ الجَوِّ]، أَوِ السَّالِكِينَ بِكُلِّ نَوْعٍ، كُلَّ أَحَدٍ بِكُلِّ مَوْضِعٍ، رُدَّهُمْ إِلَى مِينَاءٍ هَادِئٍ، مِينَاءُ الخَلاصِ. تَفَضَّلْ اصْحَبْهُمْ فِي الإِقْلاعِ، واصْحَبْهُمْ فِي المَسِيرِ. رُدَّهُمْ إِلَى ذَوِيهِمْ بِالفَرَحِ فَرِحِينَ، وبالعَافِيَةِ مُعَافِينَ. اشْتَرِكْ فِي العَمَلِ مَعَ عَبِيدِكَ فِي كُلِّ عَمَلٍ صَالِحٍ. ونَحْنُ أَيْضاً يَا رَبُّ غُرْبَتَنَا فِي هَذَا العُمْرِ، احْفَظْهَا بِغَيْرِ مَضَرَّةٍ ولا عَاصِفٍ ولا قَلَقٍ إِلَى الانْقِضَاءِ.",
                cop_cop: "Ⲑⲁⲓ ⲉⲧϣⲟⲡ ⲓⲥϫⲉⲛ ⲁⲩⲣⲏⲭⲥ ⲛ̀ϯⲟⲓⲕⲟⲩⲙⲉⲛⲏ ϣⲁ ⲁⲩⲣⲏⲭⲥ. Ⲛⲛⲉⲛⲓⲟϯ ⲛⲉⲙ ⲛⲉⲛⲥ̀ⲛⲏⲟⲩ ⲉ̀ⲧⲁⲩϣⲉ ⲉ̀ⲡϣⲉⲙⲙⲟ. Ⲓⲉ ⲛⲏⲉⲑⲙⲉⲩⲓ̀ ⲉ̀ϣⲉ ϧⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ: ⲥⲟⲩⲧⲱⲛ ⲛⲟⲩⲙⲱⲓⲧ ⲧⲏⲣⲟⲩ: ⲓⲧⲉ ⲉ̀ⲃⲟⲗ ϩⲓⲧⲉⲛ ⲫⲓⲟⲙ: ⲓⲉ ⲛⲓⲓⲁⲣⲱⲟⲩ: ⲓⲉ ⲛⲓⲗⲩⲙⲛⲏ: ⲓⲉ ⲛⲓⲙⲱⲓⲧ ⲓ̀ⲙⲟϣⲓ: ⲓⲉ ⲡⲓⲁ̀ⲏⲣ: ⲓⲉ ⲉⲧⲓⲣⲓ ⲛ̀ⲛⲟⲩϫⲓⲛⲙⲟϣⲓ ⲛ̀ⲣⲏϯ ⲛⲓⲃⲉⲛ: ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲉⲧⲃⲉⲛ ⲙⲁⲓ ⲛⲓⲃⲉⲛ ⲙⲁⲧⲁⲥⲑⲱⲟⲩ ⲉ̀ϧⲟⲩⲛ ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ϫⲁⲙⲏⲧ ⲉ̀ⲟⲩⲗⲩⲙⲏⲛ ⲛ̀ⲧⲉ ⲡⲓⲟⲩϫⲁⲓ. Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ ⲁ̀ⲣⲓϣⲫⲏⲣ ⲛ̀ϣ̀ⲫⲏⲣ ⲛⲉⲙ ϣ̀ⲫⲏⲣ ⲙⲟϣⲓ ⲛⲉⲙⲱⲟⲩ. Ⲙⲁⲥⲑⲱⲟⲩ ⲉ̀ⲛⲏⲉ̀ⲧⲉ ⲛⲟⲩⲟⲩ ϧⲉⲛ ⲟⲩⲣⲁϣⲓ ⲉⲩⲣⲁϣⲓ: ϧⲉⲛ ⲟⲩⲟⲩϫⲁⲓ ⲉⲩⲟⲩⲟϫⲛⲟⲩⲧ. Ⲁ̀ⲣⲓϣ̀ⲫⲏⲣ ⲛ̀ⲉⲣϩⲱⲃ ⲛⲉⲙ ⲛⲉⲕⲉ̀ⲃⲓⲁⲓⲕ: ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ. Ⲁ̀ⲛⲟⲛ ⲇⲉ ϩⲱⲛ Ⲡϭⲟⲓⲥ ⲧⲉⲛⲙⲉⲧⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ ⲉⲧϧⲉⲛ ⲡⲁⲓⲃⲓⲟⲥ ⲫⲁⲓ: ⲁ̀ⲣⲉϩ ⲉ̀ⲣⲟⲥ ⲛ̀ⲁⲧⲉⲃⲗⲁⲃⲏ ⲛ̀ⲁⲧⲭⲓⲙⲱⲛ ⲛ̀ⲁⲧϣⲑⲟⲣⲧⲉⲣ ϣⲁ ⲉ̀ⲃⲟⲗ.",
                ar_de: "hazihi el-ka2inato min aqsa el-maskounati ila aqsaha. aba2ina wa ikhwatina el-mosafirina. wal-lazina yodmirouna el-safara fi kolli makan, sahhil toroqahom ajma3in, en kana fel-bahri, aw el-anhari, aw el-bohayrati, aw el-toroqi el-masloukati, [aw el-jaw], aw el-salikina bi-kolli naw3in, kolla ahadin bi-kolli mawdi3in, roddahom ila mina2in hadi2in, mina2 el-khalas. tafaddal as-habhom fel-eqla3i, wa as-habhom fel-masiri. roddahom ila zawihim bel-farahi farihina, wal-3afiyati mo3afina. esh-tarik fel-3amali ma3a 3abidika fi kolli 3amalin salihin. wa nahnou aydan ya rabu ghorbatana fi haza el-3omri, ehfaz-ha be-ghayri madarratin wala 3asifin wala qalaqin ela el-enqida2i.",
                cop_ar: "ثاي إتشوب إسجين أفريخس إنتي أويكوميني شا أفريخس. نين يوتي نيم نين إسنِي إيتاف شي إيبشيمو. إيه ني إيثميفي إيشي خين ماي نيفين: سوتون نو مويت تيرو: إيتيه إيفول هيتين فيوم: إيه ني يارو: إيه ني ليمني: إيه ني مويت إيموشي: إيه بِي أير: إيه إتيري إن نو جين موشي إن ريتي نيفين: أوون نيفين إتفين ماي نيفين ماتا ستو أو إيخون إي أوليمين إنجاميت إي أوليمين إنتيه بي أوجاي. آري كاتاكسيوين آري إشفير إن إشفير نيم إشفير موشي نيمو أو. ماسثو أو إينيه إيتيه نو أو خين أوراشي إفراشي: خين أو أوجاي إف أوج نوت. آري إشفير إن إيرهوف نيم نيك إيفيايك: خين هوف نيفين إن أغاثون. أنون ديه هون إبشويس تين ميت ريم إنجويلي إتخين باي فيوس فاي: آريه إيروس إن آت إيفلافي إن آت خيمون إن آت إشثورتير شا إيفول.",
            },
            {
                id: 17.16,
                speaker: "Volk",
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                id: 17.26,
                speaker: "Priester",
                cop_de: "Ari-kataxioin P-chois ni-mo-ou ente phi-aro: ni-siti nem ni-sim nem ni-rot ente t-koi: ni-a-ir ente t-phe nem ni-karpos ente p-kahi: etkhen tai-rompi thai: es-mou ero-ou. Anitou epshoi kata noushi: kata phe-ete phok en-hmot: ma pounof em-p-ho em-p-kahi: maroteikhi enge nef-ethloh: marotashai enge nef-outah. Sevtotf e-ou-khrog nem ouoshkh: owoh ari-oikonomin em-pen-gin-onkh kata peter-nofri. Esmou e-pi-khlom ente ti-rompi hiten tek-met-khristos: ethve ni-hiki ente pek-laos: ethve ti-khira nem pi-orphanos nem pi-shemmo nem pi-rem-eng-oili: nem ethveten tiren kha ni eter-helpis erok: owoh et-tovh em-pek-ran ethouav. Ge nen-val en-ouon niven se-er-helpis erok: ge enthok et-ti en-tou-tre no-ou khen ou-se-ou e-nanef. Ari-ou-i neman kata tek-met-agathos: phe-et-ti khre en-sarx niven: moh en-nen-hit en-rashi nem ou-ounof: hina anon hon ere eph-roshi entoten khen hov niven en-se-ou niven: nenten-er-hou-o khen hov niven en-agathon.",
                de: "Bitte, o Herr, segne das Wasser des Flusses, die Saaten und die Kräuter und die Gewächse des Feldes, die Luft des Himmels und die Früchte der Erde في هَذِهِ السَّنَةِ. Lass sie ansteigen nach ihrem Maß und gemäß deiner Gnade. Gib dem Antlitz der Erde Freude, dass ihre Furchen bewässert werden und sich ihre Früchte mehren. Bereite den Boden zum Säen und Ernten. Regle unser Leben in geeigneter Weise. Segne den Kranz des Jahres mit deiner Güte, wegen der Armen deines Volkes, wegen der Witwen und Waisen, der Fremden und der Gäste, wegen uns allen, die wir auf dich hoffen und deinen heiligen Namen anrufen. Denn aller Augen hoffen auf dich, dass du ihnen ihre Speise zur rechten Zeit gibst. Handle mit uns nach deiner Güte, der du Nahrung allem Fleisch gibst. Erfülle unsere Herzen mit Freude und Wonne, damit wir in allem alle Zeit genug haben und in jedem guten Werk wachsen.",
                ar: "تَفَضَّلْ يَا رَبُّ مِيَاهَ النَّهْرِ، والزُّرُوعَ والعُشْبَ، ونَبَاتَ الحَقْلِ، وأَهْوِيَةَ السَّمَاءِ، وثَمَرَاتِ الأَرْضِ، بَارِكْهَا فِي هَذِهِ السَّنَةِ. أَصْعِدْهَا كَمِقْدَارِهَا كَنِعْمَتِكَ. فَرِّحْ وَجْهَ الأَرْضِ، لِيُرْوَ حَرْثُهَا، ولِتَكْثُرَ أَثْمَارُهَا. أَعِدَّهَا لِلزَّرْعِ والحَصَادِ، ودَبِّرْ حَيَاتَنَا كَمَا يَلِيقُ. بَارِكْ إِكْلِيلَ السَّنَةِ بِصَلاحِكَ، مِنْ أَجْلِ فُقَرَاءِ شَعْبِكَ، مِنْ أَجْلِ الأَرْمَلَةِ واليَتِيمِ والغَرِيبِ والضَّيْفِ، ومِنْ أَجْلِنَا كُلِّنَا نَحْنُ الَّذِينَ نَرْجُوكَ ونَطْلُبُ اسْمَكَ القُدُّوسَ. لأَنَّ أَعْيُنَ الكُلِّ تَتَرَّجَاكَ، لأَنَّكَ أَنْتَ الَّذِي تُعْطِيهِمْ طَعَامَهُمْ فِي حِينٍ حَسَنٍ. اصْنَعْ مَعَنَا حَسَبَ صَلاحِكَ، يَا مُعْطِياً طَعَاماً لِكُلِّ جَسَدٍ. امْلأْ قُلُوبَنَا فَرَحاً ونَعِيماً، لِكَيْ نَحْنُ أَيْضاً إِذْ يَكُونُ لَنَا الكَفَافُ فِي كُلِّ شَيْءٍ كُلَّ حِينٍ، نَزْدَادُ فِي كُلِّ عَمَلٍ صَالِحٍ.",
                cop_cop: "Ⲁ̀ⲣⲓⲕⲁⲧⲁⲝⲓⲟⲓⲛ Ⲡϭⲟⲓⲥ ⲛⲓⲙⲱⲟⲩ ⲛ̀ⲧⲉ ⲫⲓⲁⲣⲟ: ⲛⲓⲥⲓϯ ⲛⲉⲙ ⲛⲓⲥⲓⲙ ⲛⲉⲙ ⲛⲓⲣⲱⲧ ⲛ̀ⲧⲉ ⲧ̀ⲕⲟⲓ: ⲛⲓⲁ̀ⲏⲣ ⲛ̀ⲧⲉ ⲧ̀ⲫⲉ ⲛⲉⲙ ⲛⲓⲕⲁⲣⲡⲟⲥ ⲛ̀ⲧⲉ ⲡ̀ⲕⲁϩⲓ: ⲉⲧϧⲉⲛ ⲧⲁⲓⲣⲟⲙⲡⲓ ⲑⲁⲓ: ⲥ̀ⲙⲟⲩ ⲉ̀ⲣⲱⲟⲩ. Ⲁ̀ⲛⲓⲧⲟⲩ ⲉ̀ⲡϣⲱⲓ ⲕⲁⲧⲁ ⲛⲟⲩϣⲓ: ⲕⲁⲧⲁ ⲫⲏⲉ̀ⲧⲉ ⲫⲱⲕ ⲛ̀ϩ̀ⲙⲟⲧ: ⲙⲁ ⲡⲟⲩⲛⲟϥ ⲙ̀ⲡϩⲟ ⲙ̀ⲡⲕⲁϩⲓ: ⲙⲁⲣⲟⲧⲉⲓϧⲓ ⲛ̀ϫⲉ ⲛⲉϥⲉ̀ⲑⲗⲱϩ: ⲙⲁⲣⲟⲧⲁϣⲁⲓ ⲛ̀ϫⲉ ⲛⲉϥⲟⲩⲧⲁϩ. Ⲥⲉⲃⲧⲱⲧϥ ⲉ̀ⲟⲩⲭ̀ⲣⲟϫ ⲛⲉⲙ ⲟⲩⲱⲥϧ: ⲟⲩⲟϩ ⲁ̀ⲣⲓⲟⲓⲕⲟⲛⲟⲙⲓⲛ ⲙ̀ⲡⲉⲛϫⲓⲛⲱⲛϧ ⲕⲁⲧⲁ ⲡⲉⲧⲉⲣⲛⲟϥⲣⲓ. Ⲥ̀ⲙⲟⲩ ⲉ̀ⲡⲓⲭ̀ⲗⲟⲙ ⲛ̀ⲧⲉ ϯⲣⲟⲙⲡⲓ ϩⲓⲧⲉⲛ ⲧⲉⲕⲙⲉⲧⲭ̀ⲣⲓⲥⲧⲟⲥ: ⲉⲑⲃⲉ ⲛⲓϩⲏⲕⲓ ⲛ̀ⲧⲉ ⲡⲉⲕⲗⲁⲟⲥ: ⲉⲑⲃⲉ ϯⲭⲏⲣⲁ ⲛⲉⲙ ⲡⲓⲟⲣⲫⲁⲛⲟⲥ ⲛⲉⲙ ⲡⲓϣⲉⲙⲙⲟ ⲛⲉⲙ ⲡⲓⲣⲉⲙⲛ̀ϫⲱⲓⲗⲓ: ⲛⲉⲙ ⲉⲑⲃⲏⲧⲉⲛ ⲧⲏⲣⲉⲛ ϧⲁ ⲛⲏ ⲉ̀ⲧⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ⲟⲩⲟϩ ⲉⲧⲧⲱⲃϩ ⲙ̀ⲡⲉⲕⲣⲁⲛ ⲉⲑⲟⲩⲁⲃ. Ϫⲉ ⲛⲉⲛⲃⲁⲗ ⲛ̀ⲟⲩⲟⲛ ⲛⲓⲃⲉⲛ ⲥⲉⲉⲣϩⲉⲗⲡⲓⲥ ⲉ̀ⲣⲟⲕ: ϫⲉ ⲛ̀ⲑⲟⲕ ⲉⲧϯ ⲛ̀ⲧⲟⲩⲧ̀ⲣⲉ ⲛⲱⲟⲩ ϧⲉⲛ ⲟⲩⲥⲏⲟⲩ ⲉ̀ⲛⲁⲛⲉϥ. Ⲁ̀ⲣⲓⲟⲩⲓ̀ ⲛⲉⲙⲁⲛ ⲕⲁⲧⲁ ⲧⲉⲕⲙⲉⲧⲁ̀ⲅⲁⲑⲟⲥ: ⲫⲏⲉⲧϯ ϧ̀ⲣⲉ ⲛ̀ⲥⲁⲣⲝ ⲛⲓⲃⲉⲛ: ⲙⲟϩ ⲛ̀ⲛⲉⲛϩⲏⲧ ⲛ̀ⲣⲁϣⲓ ⲛⲉⲙ ⲟⲩⲟⲩⲛⲟϥ: ϩⲓⲛⲁ ⲁ̀ⲛⲟⲛ ϩⲱⲛ ⲉ̀ⲣⲉ ⲫ̀ⲣⲱϣⲓ ⲛ̀ⲧⲟⲧⲉⲛ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲥⲏⲟⲩ ⲛⲓⲃⲉⲛ: ⲛ̀ⲧⲉⲛⲉⲣϩⲟⲩⲟ̀ ϧⲉⲛ ϩⲱⲃ ⲛⲓⲃⲉⲛ ⲛ̀ⲁ̀ⲅⲁⲑⲟⲛ.",
                ar_de: "tafaddal ya rabu miyaha el-nahri, wal-zorou3a wal-3oshba, wa nabata el-haqli, wa ahwiyata el-sama2i, wa thamarat el-ardi, barik-ha fi hazihi el-sanati. as-3idha kamidariha ka-ni3matik. farrih wajha el-ardi, liyorwa harthouha, walitakthora athmarouha. a3iddaha lel-zar3i wal-hasadi, wa dabbir hayathana kama yaliq. barik eklila el-sanati bisalahika, min ajli foqara2i sha3bika, min ajli el-armalati wal-yatimi wal-gharibi wal-dayfi, wa min ajlina kollina nahnou el-lazina narjouka wa natlobou esmaka el-qoddousa. le2anna a3yona el-kolli tatarragaka, le2annaka anta el-lazi to3tihim ta3amahom fi hinin hasanin. esna3 ma3ana hasaba salahika, ya mo3tiyan ta3aman likolli jasadin. emla2 qoloubana farahan wa na3iman, likay nahnou aydan ez yakounou lana el-kafafu fi kolli shay2in kolla hinin, nazdadu fi kolli 3amalin salihin.",
                cop_ar: "آري كاتاكسيوين إبشويس ني مو أو إنتيه في آرو: ني سيتي نيم ني سيم نيم ني روت إنتيه إت كوي: ني أير إنتيه إت فيه نيم ني كاربوس إنتيه إب كاهي: إتخين تاي رومبي ثاي: إسمو إيرو أو. آنيتو إيبشوي كاتا نوشي: كاتا فيه إيتيه فوك إن إهموت: ما بونوف إمب هو إمب كاهي: ماروتِيخي إنجيه نيف إيثلوه: مارو تاشاي إنجيه نيف أوتاه. سِفتوتف إي أو خروج نيم أوشخ: أووه آري أويكونومين إمبين جين أونخ كاتا بيتير نوفري. إسمو إي بي إخلوم إنتيه تي رومبي هيتين تيك ميت إخرستوس: إثفيه ني هيكي إنتيه بيك لاوس: إثفيه تي خيرا نيم بي أورفانوس نيم بي شيمو نيم بي ريم إنجويلي: نيم إثفيتين تيرين خا ني إيتير هيلبيس إيروك: أووه إت توفه إمبيك ران إثوآف. جيه نين فال إن أوون نيفين سيه إير هيلبيس إيروك: جيه إنثوك إت تي إن تو تري نو أو خين أو سيو إي نانيف. آري أوي نيمان كاتا تيك ميت أغاثوس: في إت تي إخري إن ساركس نيفين: موه إن نين هيت إن راشي نيم أو أونوف: هينا أنون هون إيريه إف روشي إنتوتين خين هوف نيفين إن سيو نيفين: نين تين إير هو أوه خين هوف نيفين إن أغاثون.",
            },
            {
                id: 17.27,
                speaker: "Volk",
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
            },
            {
                id: 17.28,
                speaker: "Priester",
                cop_de: "Pi-ouro [pi-pro-edros - pi-an-khokh] ente pen-kahi pek-vok.",
                de: "Des Königs [Präsidenten] unseres Landes, deines Dieners.",
                ar: "مَلِكَ (رئيس) أَرْضِنَا عَبْدَكَ.",
                cop_cop: "Ⲡⲓⲟⲩⲣⲟ [ⲡⲓⲡⲣⲟⲉⲇⲣⲟⲥ - ⲡⲓⲁⲛⲭⲱⲭ] ⲛ̀ⲧⲉ ⲡⲉⲛⲕⲁϩⲓ ⲡⲉⲕⲃⲱⲕ.",
                ar_de: "malika (Ra2ees) ardina 3abdaka.",
                cop_ar: "بي أورو [بي بروأيدروس - بي أنخوخ] إنتيه بين كاهي بيك فوك.",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
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
                cop_de: "كيرياليسون.",
                de: "Herr erbarme dich",
                ar: "يَا رَبُّ ارْحَمْ.",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉ̀ⲗⲉⲏ̀ⲥⲟⲛ",
                ar_de: "ya rabbu arham",
                cop_ar: "Kyrie eleyson",
            },
            {
                id: 17.45,
                speaker: "Priester",
                cop_de: "Penpatriarkhis : niot ettaiyout : enarkhieris papa ava Tawadros Pimah snav.",
                de: "(Gedenke) unseres Patriarchen, des ehrwürdigen Vaters, Priesteroberhaupt, Papst Abba Tawadros II.",
                ar: "بَطْرِيَرْكَنَا الأَب المُكَرَّمَ أَنْبَا البابا أنبا تواضروس الثاني.",
                cop_cop: "Ⲡⲉⲛⲡⲁⲧⲣⲓⲁⲣⲭⲏⲥ : ⲛⲓⲱⲧ ⲉⲧⲧⲁⲓⲏⲟⲩⲧ : ⲛ̀ⲁⲣⲭⲓⲉ̀ⲣⲉⲩⲥ Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ Ⲧⲁⲟⲩⲁⲇⲣⲟⲥ ⲡⲓⲙⲁϩ ⲥ̀ⲛⲁⲩ.",
                ar_de: "Batriyarkana el-ab el-mokarram anba Tawadros El-thani.",
                cop_ar: "بين باتري أرشيس : نِيوت إت طاي هو أوت : إن أرشي إيريفس بابا أبڤا تاوادروس بي ماه اسناف",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
            },
            {
                id: 17.33,
                speaker: "",
                cop_de: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_ar: "",
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
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
                id: 65,
                speaker: "",
                cop_ar: "",
                de: "",
                ar: "",
                cop_cop: "",
                ar_de: "",
                cop_de: "",
            }, {
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
                        targetId: 1 // Platzhalter, da keine spezifische ID genannt wurde
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
                        targetId: 1
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
                        targetId: 1
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
                        targetId: 1
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
    // SEITE: Nach ihrem Maß (Oblations/Schluss)
    // ============================================================
    litany_oblations: {
        title: {
            de: "Erhebe sie nach ihrem Maß",
            ar: "أصعدها كمقدارها"
        },
        content: [
            {
                id: 1,
                speaker: "Info",
                de: "Inhalt folgt...",
                ar: "يتبع..."
            }
        ]
    },

};




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
    },
}