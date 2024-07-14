export default class Locations {
  constructor() {
      this.items = new Map();

      this.addItem(0, 23, 0, "Διδυμοτείχου");
      this.addItem(1, 93, 0, "Σουφλίου");
      this.addItem(2, 7, 0, "Αλεξανδρούπολης");
      this.addItem(3, 88, 1, "Ροδόπης");
      this.addItem(4, 75, 0, "Ξάνθης");
      this.addItem(5, 97, 0, "Σταυρούπολης");
      this.addItem(6, 36, 0, "Καβάλας");
      this.addItem(7, 24, 0, "Δράμας");
      this.addItem(8, 73, 0, "Νευροκοπίου");
      this.addItem(9, 90, 0, "Σερρών");
      this.addItem(10, 91, 0, "Σιδηροκάστρου");
      this.addItem(11, 74, 0, "Νιγρίτας");
      this.addItem(12, 47, 0, "Κιλκίς");
      this.addItem(13, 56, 0, "Λαγκαδά");
      this.addItem(14, 96, 0, "Σταυρού");
      this.addItem(15, 14, 0, "Αρναίας");
      this.addItem(16, 2, 0, "Αγίου Όρους");
      this.addItem(17, 83, 0, "Πολυγύρου");
      this.addItem(18, 43, 0, "Κασσάνδρας");
      this.addItem(19, 32, 0, "Θεσσαλονίκης");
      this.addItem(20, 20, 0, "Γουμένισσας");
      this.addItem(21, 13, 0, "Αριδαίας");
      this.addItem(22, 26, 0, "Έδεσσας");
      this.addItem(23, 71, 0, "Νάουσας");
      this.addItem(24, 17, 0, "Βέροιας");
      this.addItem(25, 82, 1, "Πιερίας");
      this.addItem(26, 101, 1, "Φλώρινας");
      this.addItem(27, 49, 0, "Κοζάνης");
      this.addItem(28, 27, 0, "Ελασσόνας");
      this.addItem(29, 58, 0, "Λάρισας");
      this.addItem(30, 1, 0, "Αγιάς");
      this.addItem(31, 18, 0, "Βόλου");
      this.addItem(32, 44, 1, "Καστοριάς");
      this.addItem(33, 100, 0, "Τσοτυλίου");
      this.addItem(34, 21, 1, "Γρεβενών");
      this.addItem(35, 39, 0, "Καλαμπάκας");
      this.addItem(36, 98, 0, "Τρικάλων");
      this.addItem(37, 41, 0, "Καρδίτσας");
      this.addItem(38, 70, 0, "Μουζακίου");
      this.addItem(39, 42, 0, "Καρπενησίου");
      this.addItem(40, 103, 0, "Φουρνά");
      this.addItem(41, 95, 0, "Σπερχειάδας");
      this.addItem(42, 57, 0, "Λαμίας");
      this.addItem(43, 50, 0, "Κόνιτσας");
      this.addItem(44, 68, 0, "Μετσόβου");
      this.addItem(45, 35, 0, "Ιωαννίνων");
      this.addItem(46, 31, 1, "Θεσπρωτίας");
      this.addItem(47, 85, 1, "Πρέβεζας");
      this.addItem(48, 15, 1, "Άρτας");
      this.addItem(49, 10, 0, "Αμφιλοχίας");
      this.addItem(50, 3, 0, "Αγρινίου");
      this.addItem(51, 67, 0, "Μεσολογγίου");
      this.addItem(52, 72, 0, "Ναυπάκτου");
      this.addItem(53, 64, 0, "Λιδωρικίου");
      this.addItem(54, 11, 0, "Άμφισσας");
      this.addItem(55, 16, 0, "Αταλάντης");
      this.addItem(56, 61, 0, "Λεβαδείας");
      this.addItem(57, 104, 0, "Χαλκίδας");
      this.addItem(58, 33, 0, "Θηβών");
      this.addItem(59, 51, 0, "Κορίνθου");
      this.addItem(60, 66, 0, "Μεγάρων");
      this.addItem(61, 5, 0, "Αιγάλεω");
      this.addItem(62, 78, 0, "Πάρνηθας");
      this.addItem(63, 40, 0, "Καπανδριτίου");
      this.addItem(64, 81, 0, "Πεντέλης");
      this.addItem(65, 4, 1, "Αθηνών");
      this.addItem(66, 80, 0, "Πειραιώς");
      this.addItem(67, 60, 0, "Λαυρίου");
      this.addItem(68, 34, 0, "Ιστιαίας");
      this.addItem(69, 65, 0, "Λίμνης");
      this.addItem(70, 53, 0, "Κύμης");
      this.addItem(71, 76, 0, "Ξυλοκάστρου");
      this.addItem(72, 6, 0, "Αιγίου");
      this.addItem(73, 79, 0, "Πατρών");
      this.addItem(74, 9, 0, "Αμαλιάδας");
      this.addItem(75, 86, 0, "Πύργου");
      this.addItem(76, 37, 0, "Καλαβρύτων");
      this.addItem(77, 19, 0, "Βυτίνας");
      this.addItem(78, 77, 0, "Ολυμπίας");
      this.addItem(79, 55, 0, "Κυπαρισσίας");
      this.addItem(80, 38, 0, "Καλαμάτας");
      this.addItem(81, 99, 0, "Τρίπολης");
      this.addItem(82, 94, 0, "Σπάρτης");
      this.addItem(83, 22, 0, "Γυθείου");
      this.addItem(84, 69, 0, "Μολάων");
      this.addItem(85, 54, 0, "Κυνουρίας");
      this.addItem(86, 12, 1, "Αργολίδας");
      this.addItem(87, 84, 0, "Πόρου");
      this.addItem(88, 105, 1, "Χανίων");
      this.addItem(89, 87, 1, "Ρεθύμνου");
      this.addItem(90, 29, 1, "Ηρακλείου");
      this.addItem(91, 59, 1, "Λασιθίου");
      this.addItem(92, 45, 1, "Κερκύρας");
      this.addItem(93, 63, 1, "Λευκάδας");
      this.addItem(94, 46, 1, "Κεφαλληνίας");
      this.addItem(95, 28, 1, "Ζακύνθου");
      this.addItem(96, 25, 1, "Δωδεκανήσου");
      this.addItem(97, 52, 1, "Κυκλάδων");
      this.addItem(98, 106, 1, "Χίου");
      this.addItem(99, 30, 0, "Θάσου");
      this.addItem(100, 62, 1, "Λέσβου");
      this.addItem(101, 92, 0, "Σκοπέλου");
      this.addItem(102, 8, 0, "Αλμυρού");
      this.addItem(103, 89, 1, "Σάμου");
      this.addItem(104, 102, 0, "Φλώρινας Πρέσπα");
      this.addItem(105, 48, 0, "Κιλκίς Λίμνη");
      this.addItem(106, 107, 0, "Αλεξανδρούπολης"); // Σαμοθράκη
      this.addItem(107, 108, 0, "Λέσβου"); // Λήμνος
      this.addItem(108, 109, 0, "Λέσβου"); // Άγιος Ευστράτιος
      this.addItem(109, 110, 0, "Κύμης"); // Σκύρος
      this.addItem(110, 111, 0, "Σκοπέλου"); // Σκιάθος
      this.addItem(111, 112, 0, "Σκοπέλου"); // Αλόννησος
      this.addItem(112, 113, 1, "Χίου"); // Ψαρά
      this.addItem(113, 114, 1, "Σάμου"); // Άγιος Κήρυκος
      this.addItem(114, 115, 1, "Δωδεκανήσου"); // Κως
      this.addItem(115, 116, 1, "Δωδεκανήσου"); // Ρόδος
      this.addItem(116, 117, 1, "Δωδεκανήσου"); // Κάρπαθος
      this.addItem(117, 118, 0, "Πειραιώς"); // Κύθηρα
  }

  addItem(id, layer, type, name) {
      this.items.set(id, { layer, type, name });
  }
}