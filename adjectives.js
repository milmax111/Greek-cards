// adjectives.js
// Список распространенных греческих прилагательных с переводом и формами по родам

export const adjectives = [
  { greek: 'μεγάλος', feminine: 'μεγάλη', neuter: 'μεγάλο', translation: 'большой' },
  { greek: 'μικρός', feminine: 'μικρή', neuter: 'μικρό', translation: 'маленький' },
  { greek: 'καλός', feminine: 'καλή', neuter: 'καλό', translation: 'хороший, добрый' },
  { greek: 'κακός', feminine: 'κακιά', neuter: 'κακό', translation: 'плохой, злой' }, // также κακή
  { greek: 'νέος', feminine: 'νέα', neuter: 'νέο', translation: 'новый, молодой' },
  { greek: 'παλιός', feminine: 'παλιά', neuter: 'παλιό', translation: 'старый (о вещах)' }, // также παλαιός
  { greek: 'γέρος', feminine: 'γριά', neuter: 'γέρικο', translation: 'старый (о людях)' }, // мн.ч. γέροι, γριές, γέρικα
  { greek: 'όμορφος', feminine: 'όμορφη', neuter: 'όμορφο', translation: 'красивый' },
  { greek: 'άσχημος', feminine: 'άσχημη', neuter: 'άσχημο', translation: 'некрасивый, уродливый' },
  { greek: 'εύκολος', feminine: 'εύκολη', neuter: 'εύκολο', translation: 'легкий, простой' },
  { greek: 'δύσκολος', feminine: 'δύσκολη', neuter: 'δύσκολο', translation: 'трудный, сложный' },
  { greek: 'πλούσιος', feminine: 'πλούσια', neuter: 'πλούσιο', translation: 'богатый' },
  { greek: 'φτωχός', feminine: 'φτωχή', neuter: 'φτωχό', translation: 'бедный' },
  { greek: 'ψηλός', feminine: 'ψηλή', neuter: 'ψηλό', translation: 'высокий' },
  { greek: 'κοντός', feminine: 'κοντή', neuter: 'κοντό', translation: 'низкий, короткий' },
  { greek: 'μακρύς', feminine: 'μακριά', neuter: 'μακρύ', translation: 'длинный, далекий' },
  { greek: 'χοντρός', feminine: 'χοντρή', neuter: 'χοντρό', translation: 'толстый' },
  { greek: 'λεπτός', feminine: 'λεπτή', neuter: 'λεπτό', translation: 'тонкий, худой' },
  { greek: 'ζεστός', feminine: 'ζεστή', neuter: 'ζεστό', translation: 'теплый, горячий' },
  { greek: 'κρύος', feminine: 'κρύα', neuter: 'κρύο', translation: 'холодный' },
  { greek: 'γεμάτος', feminine: 'γεμάτη', neuter: 'γεμάτο', translation: 'полный, наполненный' },
  { greek: 'άδειος', feminine: 'άδεια', neuter: 'άδειο', translation: 'пустой' },
  { greek: 'καθαρός', feminine: 'καθαρή', neuter: 'καθαρό', translation: 'чистый' },
  { greek: 'βρώμικος', feminine: 'βρώμικη', neuter: 'βρώμικο', translation: 'грязный' }, // также βρόμικος
  { greek: 'γρήγορος', feminine: 'γρήγορη', neuter: 'γρήγορο', translation: 'быстрый' },
  { greek: 'αργός', feminine: 'αργή', neuter: 'αργό', translation: 'медленный' },
  { greek: 'δυνατός', feminine: 'δυνατή', neuter: 'δυνατό', translation: 'сильный, громкий' },
  { greek: 'αδύναμος', feminine: 'αδύναμη', neuter: 'αδύναμο', translation: 'слабый' }, // также αδύνατος
  { greek: 'σοβαρός', feminine: 'σοβαρή', neuter: 'σοβαρό', translation: 'серьезный' },
  { greek: 'αστείος', feminine: 'αστεία', neuter: 'αστείο', translation: 'смешной, забавный' },
  { greek: 'σημαντικός', feminine: 'σημαντική', neuter: 'σημαντικό', translation: 'важный, значительный' },
  { greek: 'ακριβός', feminine: 'ακριβή', neuter: 'ακριβό', translation: 'дорогой (о цене)' },
  { greek: 'φτηνός', feminine: 'φτηνή', neuter: 'φτηνό', translation: 'дешевый' },
  { greek: 'γλυκός', feminine: 'γλυκιά', neuter: 'γλυκό', translation: 'сладкий' }, // также γλυκερός
  { greek: 'πικρός', feminine: 'πικρή', neuter: 'πικρό', translation: 'горький' },
  { greek: 'ξινός', feminine: 'ξινή', neuter: 'ξινό', translation: 'кислый' },
  { greek: 'αλμυρός', feminine: 'αλμυρή', neuter: 'αλμυρό', translation: 'соленый' },
  { greek: 'ανοιχτός', feminine: 'ανοιχτή', neuter: 'ανοιχτό', translation: 'открытый, светлый (о цвете)' },
  { greek: 'κλειστός', feminine: 'κλειστή', neuter: 'κλειστό', translation: 'закрытый' },
  { greek: 'σκοτεινός', feminine: 'σκοτεινή', neuter: 'σκοτεινό', translation: 'темный' },
  { greek: 'φωτεινός', feminine: 'φωτεινή', neuter: 'φωτεινό', translation: 'светлый, яркий' },
  { greek: 'ήσυχος', feminine: 'ήσυχη', neuter: 'ήσυχο', translation: 'тихий, спокойный' },
  { greek: 'δίκαιος', feminine: 'δίκαιη', neuter: 'δίκαιο', translation: 'справедливый' },
  { greek: 'άδικος', feminine: 'άδικη', neuter: 'άδικο', translation: 'несправедливый' },
  { greek: 'ελεύθερος', feminine: 'ελεύθερη', neuter: 'ελεύθερο', translation: 'свободный' },
  { greek: 'απασχολημένος', feminine: 'απασχολημένη', neuter: 'απασχολημένο', translation: 'занятой' },
  { greek: 'έτοιμος', feminine: 'έτοιμη', neuter: 'έτοιμο', translation: 'готовый' },
  { greek: 'άρρωστος', feminine: 'άρρωστη', neuter: 'άρρωστο', translation: 'больной' },
  { greek: 'υγιής', feminine: 'υγιής', neuter: 'υγιές', translation: 'здоровый' },
  { greek: 'κουρασμένος', feminine: 'κουρασμένη', neuter: 'κουρασμένο', translation: 'уставший' },
  { greek: 'χαρούμενος', feminine: 'χαρούμενη', neuter: 'χαρούμενο', translation: 'радостный, веселый' },
  { greek: 'λυπημένος', feminine: 'λυπημένη', neuter: 'λυπημένο', translation: 'печальный, огорченный' },
  { greek: 'ξανθός', feminine: 'ξανθιά', neuter: 'ξανθό', translation: 'светловолосый, блондин(ка)' }, // также ξανθός, ξανθή, ξανθόν
  { greek: 'μελαχρινός', feminine: 'μελαχρινή', neuter: 'μελαχρινό', translation: 'темноволосый, брюнет(ка)' },
  { greek: 'άσπρος', feminine: 'άσπρη', neuter: 'άσπρο', translation: 'белый' },
  { greek: 'μαύρος', feminine: 'μαύρη', neuter: 'μαύρο', translation: 'черный' },
  { greek: 'κόκκινος', feminine: 'κόκκινη', neuter: 'κόκκινο', translation: 'красный' },
  { greek: 'πράσινος', feminine: 'πράσινη', neuter: 'πράσινο', translation: 'зеленый' },
  { greek: 'μπλε', feminine: 'μπλε', neuter: 'μπλε', translation: 'синий, голубой' }, // несклоняемое
  { greek: 'κίτρινος', feminine: 'κίτρινη', neuter: 'κίτρινο', translation: 'желтый' },
  { greek: 'πορτοκαλί', feminine: 'πορτοκαλιά', neuter: 'πορτοκαλί', translation: 'оранжевый' }, // πορτοκαλής, πορτοκαλιά, πορτοκαλί
  { greek: 'καφέ', feminine: 'καφέ', neuter: 'καφέ', translation: 'коричневый' }, // несклоняемое
  { greek: 'γκρι', feminine: 'γκρι', neuter: 'γκρι', translation: 'серый' }, // несклоняемое, также γκρίζος, γκρίζα, γκρίζο
  { greek: 'ροζ', feminine: 'ροζ', neuter: 'ροζ', translation: 'розовый' }, // несклоняемое
  { greek: 'μωβ', feminine: 'μωβ', neuter: 'μωβ', translation: 'фиолетовый' }, // несклоняемое, также μωβής, μωβιά, μωβί
  { greek: 'αληθινός', feminine: 'αληθινή', neuter: 'αληθινό', translation: 'настоящий, истинный' },
  { greek: 'ψεύτικος', feminine: 'ψεύτικη', neuter: 'ψεύτικο', translation: 'фальшивый, ложный' },
  { greek: 'διάσημος', feminine: 'διάσημη', neuter: 'διάσημο', translation: 'знаменитый, известный' },
  { greek: 'άγνωστος', feminine: 'άγνωστη', neuter: 'άγνωστο', translation: 'неизвестный' },
  { greek: 'επιτυχής', feminine: 'επιτυχής', neuter: 'επιτυχές', translation: 'успешный' }, // также επιτυχημένος
  { greek: 'αποτυχής', feminine: 'αποτυχής', neuter: 'αποτυχές', translation: 'неудачный' }, // также αποτυχημένος
  { greek: 'απαραίτητος', feminine: 'απαραίτητη', neuter: 'απαραίτητο', translation: 'необходимый' },
  { greek: 'περιττός', feminine: 'περιττή', neuter: 'περιττό', translation: 'лишний, избыточный' },
  { greek: 'εξαιρετικός', feminine: 'εξαιρετική', neuter: 'εξαιρετικό', translation: 'исключительный, превосходный' },
  { greek: 'φοβερός', feminine: 'φοβερή', neuter: 'φοβερό', translation: 'ужасный, потрясающий (разг.)' },
  { greek: 'υπέροχος', feminine: 'υπέροχη', neuter: 'υπέροχο', translation: 'прекрасный, великолепный' },
  { greek: 'βαρετός', feminine: 'βαρετή', neuter: 'βαρετό', translation: 'скучный' },
  { greek: 'ενδιαφέρων', feminine: 'ενδιαφέρουσα', neuter: 'ενδιαφέρον', translation: 'интересный' },
  { greek: 'πολύς', feminine: 'πολλή', neuter: 'πολύ', translation: 'много (числ.), очень (нар.)' },
  { greek: 'λίγος', feminine: 'λίγη', neuter: 'λίγο', translation: 'мало, немного' },
  { greek: 'ίδιος', feminine: 'ίδια', neuter: 'ίδιο', translation: 'одинаковый, тот же самый' },
  { greek: 'διαφορετικός', feminine: 'διαφορετική', neuter: 'διαφορετικό', translation: 'разный, другой' },
  { greek: 'επόμενος', feminine: 'επόμενη', neuter: 'επόμενο', translation: 'следующий' },
  { greek: 'προηγούμενος', feminine: 'προηγούμενη', neuter: 'προηγούμενο', translation: 'предыдущий' },
  { greek: 'τελευταίος', feminine: 'τελευταία', neuter: 'τελευταίο', translation: 'последний' },
  { greek: 'πρώτος', feminine: 'πρώτη', neuter: 'πρώτο', translation: 'первый' },
  { greek: 'δεύτερος', feminine: 'δεύτερη', neuter: 'δεύτερο', translation: 'второй' },
  { greek: 'τρίτος', feminine: 'τρίτη', neuter: 'τρίτο', translation: 'третий' },
  { greek: 'άλλος', feminine: 'άλλη', neuter: 'άλλο', translation: 'другой, иной' },
  { greek: 'κάθε', feminine: 'κάθε', neuter: 'κάθε', translation: 'каждый, всякий' }, // несклоняемое перед сущ.
  { greek: 'όλος', feminine: 'όλη', neuter: 'όλο', translation: 'весь, целый' },
  { greek: 'μόνος', feminine: 'μόνη', neuter: 'μόνο', translation: 'один, единственный, одинокий' },
  { greek: 'διεθνής', feminine: 'διεθνής', neuter: 'διεθνές', translation: 'международный' },
  { greek: 'εθνικός', feminine: 'εθνική', neuter: 'εθνικό', translation: 'национальный' },
  { greek: 'τοπικός', feminine: 'τοπική', neuter: 'τοπικό', translation: 'местный' },
  { greek: 'ιδιωτικός', feminine: 'ιδιωτική', neuter: 'ιδιωτικό', translation: 'частный' },
  { greek: 'δημόσιος', feminine: 'δημόσια', neuter: 'δημόσιο', translation: 'общественный, государственный' },
  { greek: 'επίσημος', feminine: 'επίσημη', neuter: 'επίσημο', translation: 'официальный' },
  { greek: 'περίεργος', feminine: 'περίεργη', neuter: 'περίεργο', translation: 'странный, любопытный' },
  { greek: 'απλός', feminine: 'απλή', neuter: 'απλό', translation: 'простой' },
  { greek: 'σύνθετος', feminine: 'σύνθετη', neuter: 'σύνθετο', translation: 'сложный (составной)' },
  { greek: 'γελαστός', feminine: 'γελαστή', neuter: 'γελαστό', translation: 'улыбчивый, веселый' },
  { greek: 'θυμωμένος', feminine: 'θυμωμένη', neuter: 'θυμωμένο', translation: 'сердитый, рассерженный' },
  { greek: 'αγαπημένος', feminine: 'αγαπημένη', neuter: 'αγαπημένο', translation: 'любимый' },
  { greek: 'επικίνδυνος', feminine: 'επικίνδυνη', neuter: 'επικίνδυνο', translation: 'опасный' },
  { greek: 'ασφαλής', feminine: 'ασφαλής', neuter: 'ασφαλές', translation: 'безопасный' },
  { greek: 'σύγχρονος', feminine: 'σύγχρονη', neuter: 'σύγχρονο', translation: 'современный' },
  { greek: 'παραδοσιακός', feminine: 'παραδοσιακή', neuter: 'παραδοσιακό', translation: 'традиционный' },
  { greek: 'ξένος', feminine: 'ξένη', neuter: 'ξένο', translation: 'иностранный, чужой' },
  { greek: 'ντόπιος', feminine: 'ντόπια', neuter: 'ντόπιο', translation: 'местный (житель)' },
  { greek: 'γελοίος', feminine: 'γελοία', neuter: 'γελοίο', translation: 'смехотворный, нелепый' },
];

// Примечание:
// - Некоторые прилагательные имеют альтернативные формы (особенно женский род на -ος -> -η/-α).
// - Несклоняемые прилагательные (обычно заимствованные, как 'μπλε', 'καφέ') указаны с одинаковыми формами.
// - Прилагательные на -ής, -ής, -ές (например, υγιής, διεθνής, ασφαλής, επιτυχής) имеют одинаковую форму для мужского и женского рода в им.п. ед.ч.
// - Прилагательное 'πολύς' имеет нерегулярное склонение.
// Этот список включает около 100 прилагательных, которые часто используются.