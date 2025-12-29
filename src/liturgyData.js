// src/liturgyData.js

export const languages = {
    de: { label: "🇩🇪 Deutsch", default: true },
    ar: { label: "🇪🇬 Arabisch", default: true },
    cop_ar: { label: "Koptisch (Arabische Buchstaben)", default: true },
    cop_cop: { label: "Koptisch (Original)", default: false },
    ar_de: { label: "Arabisch (Deutsche Buchstaben)", default: false },
    cop_de: { label: "Koptisch (Deutsche Buchstaben)", default: false }
};

export const liturgies = {
    // --- BASILIUS LITURGIE ---
    basily: {
        title: "Die Göttliche Liturgie des Hl. Basilius",
        content: [
            {
                id: 1,
                speaker: "Priester",
                cop_ar: "Eporo...",
                de: "Der Herr sei mit euch allen.",
                ar: "الرب مع جميعكم",
                cop_cop: "Ⲡϭⲟⲓⲥ...",
                ar_de: "Al-Rabb ma'a jami'ikum",
                cop_de: "Ep-chois..."
            },
            {
                id: 2,
                speaker: "Volk",
                cop_ar: "Ke to pnevmati so...",
                de: "Und mit deinem Geiste.",
                ar: "ولروحك أيضاً",
                cop_cop: "Ⲕⲉ ⲧⲱ ⲡⲛⲉⲩⲙⲁⲧⲓ ⲥⲟⲩ",
                ar_de: "Wa li-ruhika aydan",
                cop_de: "Ke to pnewmati su..."
            }
        ]
    },

    // --- GREGORIOS LITURGIE (8ere8orios) ---
    gregorios: {
        title: "Die Liturgie des Hl. Gregorios",
        content: [
            {
                id: 1,
                speaker: "Priester",
                cop_ar: "Eine Aghapi to Theo...",
                de: "Die Liebe Gottes des Vaters...",
                ar: "محبة الله الآب",
                cop_cop: "Ⲏⲁⲅⲁⲡⲏ ⲧⲟⲩ Ⲑⲉⲟⲩ...",
                ar_de: "Mahabbat Allah al-Ab",
                cop_de: "I agapi tu theu..."
            },
            {
                id: 2,
                speaker: "Priester",
                cop_ar: "Ke i charis to monogenis...",
                de: "Und die Gnade seines eingeborenen Sohnes...",
                ar: "ونعمة الابن الوحيد",
                cop_cop: "Ⲕⲉ ⲏ ⲭⲁⲣⲓⲥ ⲧⲟⲩ ⲙⲟⲛⲟⲅⲉⲛⲟⲩⲥ...",
                ar_de: "Wa ni'mat al-ibn al-wahid",
                cop_de: "Ke i charis tu monogenus..."
            }
        ]
    },

    // --- CYRILLUS LITURGIE (Kerollosy) ---
    kerollosy: {
        title: "Die Liturgie des Hl. Cyrillus",
        content: [
            {
                id: 1,
                speaker: "Diakon",
                cop_ar: "Prosevxaste yper tis irinis...",
                de: "Betet für den vollkommenen Frieden...",
                ar: "صلوا من أجل السلام الكامل",
                cop_cop: "Ⲡⲣⲟⲥⲉⲩⲝⲁⲥⲑⲉ ⲩⲡⲉⲣ ⲧⲏⲥ ⲉⲓⲣⲏⲛⲏⲥ...",
                ar_de: "Sallu min ajl al-salam al-kamel",
                cop_de: "Prosewxsasthe yper tis irinis..."
            },
            {
                id: 2,
                speaker: "Volk",
                cop_ar: "Kyrie Eleison",
                de: "Herr erbarme dich.",
                ar: "يا رب ارحم",
                cop_cop: "Ⲕⲩⲣⲓⲉ ⲉⲗⲉⲏⲥⲟⲛ",
                ar_de: "Ya Rabb irham",
                cop_de: "Kirie eleison"
            }
        ]
    },

    // --- ÄTHIOPISCHE LITURGIE (Habashy) ---
    habashy: {
        title: "Äthiopische Liturgie",
        content: [
            {
                id: 1,
                speaker: "Priester",
                cop_ar: "Egziabher mesle klykmu",
                de: "Der Herr sei mit euch allen (Ge'ez).",
                ar: "الرب مع جميعكم (بالجعزية)",
                cop_cop: "Egziabher...",
                ar_de: "Egziabher...",
                cop_de: "Egziabher..."
            },
            {
                id: 2,
                speaker: "Volk",
                cop_ar: "Mesle menfeseke",
                de: "Und mit deinem Geiste.",
                ar: "ومع روحك",
                cop_cop: "Mesle menfeseke",
                ar_de: "Mesle menfeseke",
                cop_de: "Mesle menfeseke"
            }
        ]
    }
};