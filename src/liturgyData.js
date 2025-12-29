// src/data.js

// Hier definieren wir alle 6 Sprachen
export const languages = {
    de: { label: "🇩🇪 Deutsch", default: true },
    ar: { label: "🇪🇬 Arabisch", default: true },
    cop_ar: { label: "Koptisch (Arabische Buchstaben)", default: true },
    cop_cop: { label: "Koptisch (Original)", default: false },
    ar_de: { label: "Arabisch (Deutsche Buchstaben)", default: false },
    cop_de: { label: "Koptisch (Deutsche Buchstaben)", default: false }
};

// Hier ist der Inhalt der Gebete
export const liturgies = {
    basily: {
        title: "Basilius Liturgie",
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
            },
            // Hier kannst du später unendlich viele Zeilen hinzufügen
        ]
    },
    kerollosy: { title: "Cyrillus Liturgie", content: [] },
    gregorios: { title: "Gregorios Liturgie", content: [] },
    habashy: { title: "Äthiopische Liturgie", content: [] }
};