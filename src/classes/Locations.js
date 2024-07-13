export default class Locations {
    constructor() {
      this.items = new Map();
  
      this.addItem(0, 23, "ΔΙΔΥΜΟΤΕΙΧΟΥ");
      this.addItem(1, 93, "ΣΟΥΦΛΙΟΥ");
      this.addItem(2, 7, "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ");
      this.addItem(3, 88, "ΡΟΔΟΠΗΣ Δ.Δ.");
      this.addItem(4, 75, "ΞΑΝΘΗΣ");
      this.addItem(5, 97, "ΣΤΑΥΡΟΥΠΟΛΗΣ");
      this.addItem(6, 36, "ΚΑΒΑΛΑΣ");
      this.addItem(7, 24, "ΔΡΑΜΑΣ");
      this.addItem(8, 73, "ΝΕΥΡΟΚΟΠΙΟΥ");
      this.addItem(9, 90, "ΣΕΡΡΩΝ");
      this.addItem(10, 91, "ΣΙΔΗΡΟΚΑΣΤΡΟΥ");
      this.addItem(11, 74, "ΝΙΓΡΙΤΑΣ");
      this.addItem(12, 47, "ΚΙΛΚΙΣ");
      this.addItem(13, 56, "ΛΑΓΚΑΔΑ");
      this.addItem(14, 96, "ΣΤΑΥΡΟΥ");
      this.addItem(15, 14, "ΑΡΝΑΙΑΣ");
      this.addItem(16, 2, "ΑΓΙΟΥ ΟΡΟΥΣ");
      this.addItem(17, 83, "ΠΟΛΥΓΥΡΟΥ");
      this.addItem(18, 43, "ΚΑΣΣΑΝΔΡΑΣ");
      this.addItem(19, 32, "ΘΕΣΣΑΛΟΝΙΚΗΣ");
      this.addItem(20, 20, "ΓΟΥΜΕΝΙΣΣΑΣ");
      this.addItem(21, 13, "ΑΡΙΔΑΙΑΣ");
      this.addItem(22, 26, "ΕΔΕΣΣΑΣ");
      this.addItem(23, 71, "ΝΑΟΥΣΑΣ");
      this.addItem(24, 17, "ΒΕΡΟΙΑΣ");
      this.addItem(25, 82, "ΠΙΕΡΙΑΣ Δ.Δ.");
      this.addItem(26, 101, "ΦΛΩΡΙΝΑΣ Δ.Δ.");
      this.addItem(27, 49, "ΚΟΖΑΝΗΣ");
      this.addItem(28, 27, "ΕΛΑΣΣΟΝΑΣ");
      this.addItem(29, 58, "ΛΑΡΙΣΗΣ");
      this.addItem(30, 1, "ΑΓΙΑΣ");
      this.addItem(31, 18, "ΒΟΛΟΥ");
      this.addItem(32, 44, "ΚΑΣΤΟΡΙΑΣ Δ.Δ.");
      this.addItem(33, 100, "ΤΣΟΤΥΛΙΟΥ");
      this.addItem(34, 21, "ΓΡΕΒΕΝΩΝ Δ.Δ.");
      this.addItem(35, 39, "ΚΑΛΑΜΠΑΚΑΣ");
      this.addItem(36, 98, "ΤΡΙΚΑΛΩΝ");
      this.addItem(37, 41, "ΚΑΡΔΙΤΣΑΣ");
      this.addItem(38, 70, "ΜΟΥΖΑΚΙΟΥ");
      this.addItem(39, 42, "ΚΑΡΠΕΝΗΣΙΟΥ");
      this.addItem(40, 103, "ΦΟΥΡΝΑ");
      this.addItem(41, 95, "ΣΠΕΡΧΕΙΑΔΑΣ");
      this.addItem(42, 57, "ΛΑΜΙΑΣ");
      this.addItem(43, 50, "ΚΟΝΙΤΣΑΣ");
      this.addItem(44, 68, "ΜΕΤΣΟΒΟΥ");
      this.addItem(45, 35, "ΙΩΑΝΝΙΝΩΝ");
      this.addItem(46, 31, "ΘΕΣΠΡΩΤΙΑΣ Δ.Δ.");
      this.addItem(47, 85, "ΠΡΕΒΕΖΑΣ Δ.Δ.");
      this.addItem(48, 15, "ΑΡΤΑΣ Δ.Δ.");
      this.addItem(49, 10, "ΑΜΦΙΛΟΧΙΑΣ");
      this.addItem(50, 3, "ΑΓΡΙΝΙΟΥ");
      this.addItem(51, 67, "ΜΕΣΟΛΟΓΓΙΟΥ");
      this.addItem(52, 72, "ΝΑΥΠΑΚΤΟΥ");
      this.addItem(53, 64, "ΛΙΔΟΡΙΚΙΟΥ");
      this.addItem(54, 11, "ΑΜΦΙΣΣΑΣ");
      this.addItem(55, 16, "ΑΤΑΛΑΝΤΗΣ");
      this.addItem(56, 61, "ΛΕΒΑΔΕΙΑΣ");
      this.addItem(57, 104, "ΧΑΛΚΙΔΑΣ");
      this.addItem(58, 33, "ΘΗΒΩΝ");
      this.addItem(59, 51, "ΚΟΡΙΝΘΟΥ");
      this.addItem(60, 66, "ΜΕΓΑΡΩΝ");
      this.addItem(61, 5, "ΑΙΓΑΛΕΩ");
      this.addItem(62, 78, "ΠΑΡΝΗΘΑΣ");
      this.addItem(63, 40, "ΚΑΠΑΝΔΡΙΤΙΟΥ");
      this.addItem(64, 81, "ΠΕΝΤΕΛΗΣ");
      this.addItem(65, 4, "ΑΘΗΝΩΝ Δ.Δ.");
      this.addItem(66, 80, "ΠΕΙΡΑΙΩΣ");
      this.addItem(67, 60, "ΛΑΥΡΙΟΥ");
      this.addItem(68, 34, "ΙΣΤΙΑΙΑΣ");
      this.addItem(69, 65, "ΛΙΜΝΗΣ");
      this.addItem(70, 53, "ΚΥΜΗΣ");
      this.addItem(71, 76, "ΞΥΛΟΚΑΣΤΡΟΥ");
      this.addItem(72, 6, "ΑΙΓΙΟΥ");
      this.addItem(73, 79, "ΠΑΤΡΩΝ");
      this.addItem(74, 9, "ΑΜΑΛΙΑΔΑΣ");
      this.addItem(75, 86, "ΠΥΡΓΟΥ");
      this.addItem(76, 37, "ΚΑΛΑΒΡΥΤΩΝ");
      this.addItem(77, 19, "ΒΥΤΙΝΑΣ");
      this.addItem(78, 77, "ΟΛΥΜΠΙΑΣ");
      this.addItem(79, 55, "ΚΥΠΑΡΙΣΣΙΑΣ");
      this.addItem(80, 38, "ΚΑΛΑΜΑΤΑΣ");
      this.addItem(81, 99, "ΤΡΙΠΟΛΗΣ");
      this.addItem(82, 94, "ΣΠΑΡΤΗΣ");
      this.addItem(83, 22, "ΓΥΘΕΙΟΥ");
      this.addItem(84, 69, "ΜΟΛΑΩΝ");
      this.addItem(85, 54, "ΚΥΝΟΥΡΙΑΣ");
      this.addItem(86, 12, "ΑΡΓΟΛΙΔΑΣ Δ.Δ.");
      this.addItem(87, 84, "ΠΟΡΟΥ");
      this.addItem(88, 105, "ΧΑΝΙΩΝ Δ.Δ");
      this.addItem(89, 87, "ΡΕΘΥΜΝΟΥ Δ.Δ.");
      this.addItem(90, 29, "ΗΡΑΚΛΕΙΟΥ Δ.Δ.");
      this.addItem(91, 59, "ΛΑΣΙΘΙΟΥ Δ.Δ.");
      this.addItem(92, 45, "ΚΕΡΚΥΡΑΣ Δ.Δ.");
      this.addItem(93, 63, "ΛΕΥΚΑΔΑΣ Δ.Δ.");
      this.addItem(94, 46, "ΚΕΦΑΛΛΗΝΙΑΣ Δ.Δ.");
      this.addItem(95, 28, "ΖΑΚΥΝΘΟΥ Δ.Δ.");
      this.addItem(96, 25, "ΔΩΔΕΚΑΝΗΣΟΥ Δ.Δ."); //ΑΣΤΥΠΑΛΑΙΑ
      this.addItem(97, 52, "ΚΥΚΛΑΔΩΝ Δ.Δ.");
      this.addItem(98, 106, "ΧΙΟΥ Δ.Δ.");
      this.addItem(99, 30, "ΘΑΣΟΥ");
      this.addItem(100, 62, "ΛΕΣΒΟΥ Δ.Δ.");
      this.addItem(101, 92, "ΣΚΟΠΕΛΟΥ");
      this.addItem(102, 8, "ΑΛΜΥΡΟΥ");
      this.addItem(103, 89, "ΣΑΜΟΥ Δ.Δ.");
      this.addItem(104, 102, "ΦΛΩΡΙΝΑΣ ΠΡΕΣΠΑ");
      this.addItem(105, 48, "ΚΙΛΚΙΣ ΛΙΜΝΗ");
      this.addItem(106, 107, "ΑΛΕΞΑΝΔΡΟΥΠΟΛΗΣ"); //ΣΑΜΟΘΡΑΚΗ
      this.addItem(107, 108, "ΛΕΣΒΟΥ Δ.Δ."); //ΛΗΜΝΟΣ
      this.addItem(108, 109, "ΛΕΣΒΟΥ Δ.Δ."); //ΑΓΙΟΣ ΕΥΣΤΡΑΤΙΟΣ
      this.addItem(109, 110, "ΚΥΜΗΣ"); //ΣΚΥΡΟΣ
      this.addItem(110, 111, "ΣΚΟΠΕΛΟΥ"); //ΣΚΙΑΘΟΣ
      this.addItem(111, 112, "ΣΚΟΠΕΛΟΥ"); //ΑΛΟΝΝΗΣΟΣ
      this.addItem(112, 113, "ΧΙΟΥ Δ.Δ."); //ΨΑΡΑ
      this.addItem(113, 114, "ΣΑΜΟΥ Δ.Δ."); //ΑΓΙΟΣ ΚΥΡΙΚΟΣ
      this.addItem(114, 115, "ΔΩΔΕΚΑΝΗΣΟΥ Δ.Δ."); //ΚΩΣ
      this.addItem(115, 116, "ΔΩΔΕΚΑΝΗΣΟΥ Δ.Δ."); //ΡΟΔΟΣ
      this.addItem(116, 117, "ΔΩΔΕΚΑΝΗΣΟΥ Δ.Δ."); //ΚΑΡΠΑΘΟΣ
      this.addItem(117, 118, "ΠΕΙΡΑΙΩΣ"); //ΚΥΘΗΡΑ    
    }
  
    addItem(id, layer, name) {
      this.items.set(id, { layer, name });
    }
  }
  