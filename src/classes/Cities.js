/* Author: Sotiris Konstantis */

export default class Cities{
    constructor()
    {
        this.items = new Map();

        this.addItem("Athens", "Αθήνα", 37.974836, 23.735355, 100);
        this.addItem("Thessaloniki", "Θεσσαλονίκη", 40.626365, 22.948391, 90);
        this.addItem("Istanbul", "Κωνσταντινούπολη", 41.006255, 28.971750, 150);
        this.addItem("Ankara", "Άγκυρα",39.920851, 32.854791, 100);
        this.addItem("Izmir", "Σμύρνη", 38.421644, 27.144454, 90);
        this.addItem("Sofia", "Σόφια", 42.697378, 23.321384, 90);
        this.addItem("Skopje", "Σκόπια", 41.996288, 21.432119 , 85);
        this.addItem("Tirana", "Τίρανα", 41.328799,19.818410, 80);
        this.addItem("Belgrade", "Βελιγράδι", 44.817819, 20.456675 , 93);
        this.addItem("Bucharest", "Βουκουρέστι", 44.435570, 26.102512, 91);        
        this.addItem("Bari", "Μπάρι", 41.125843, 16.861201, 80);
        this.addItem("Catania", "Κατάνια", 37.501638,15.087989, 81);
        this.addItem("Patras", "Πάτρα", 38.245475,21.734204 , 85);        
        this.addItem("Heraklion", "Ηράκλειο", 35.339152, 25.133472, 84);
        this.addItem("Larissa", "Λάρισα", 39.638111, 22.416710 , 82);
        this.addItem("Volos", "Βόλος", 39.363928, 22.937175 , 77);
        this.addItem("Ioannina", "Ιωάννινα", 39.672156, 20.860583 , 78);        
        this.addItem("Trikala", "Τρίκαλα", 39.555950, 21.767854 , 76);
        this.addItem("Chalkida", "Χαλκίδα", 38.462679, 23.589296, 75);
        this.addItem("Serres", "Σέρρες", 41.091074, 23.549921, 74);
        this.addItem("Alexandroupoli", "Αλεξανδρούπολη", 40.845324, 25.878639 , 73);        
        this.addItem("Xanthi", "Ξάνθη", 41.138322, 24.886826, 72);
        this.addItem("Katerini", "Κατερίνη", 40.272445, 22.507410, 71);
        this.addItem("Agrinio", "Αγρίνιο", 38.624901, 21.409422, 70);
        this.addItem("Kalamata", "Καλαμάτα", 37.043266, 22.116112, 69);        
        this.addItem("Kavala", "Καβάλα", 40.934468, 24.415346, 68);
        this.addItem("Chania", "Χανιά", 35.517321, 24.019522, 67);
        this.addItem("Lamia", "Λαμία", 38.899475, 22.433758, 66);
        this.addItem("Komotini", "Κομοτηνή", 41.118976, 25.404611 , 65);        
        this.addItem("Rhodes", "Ρόδος", 36.443681, 28.231685, 64);
        this.addItem("Drama", "Δράμα", 41.150457, 24.146656, 63);
        this.addItem("Veroia", "Βέροια", 40.523505, 22.207563, 62);
        this.addItem("Kozani", "Κοζάνη", 40.300784, 21.788576, 61);        
        this.addItem("Karditsa", "Καρδίτσα", 39.365185, 21.927957, 60);
        this.addItem("Rethymno", "Ρέθυμνο", 35.369263, 24.473485, 59);
        this.addItem("Ptolemaida", "Πτολεμαΐδα", 40.514566, 21.681259, 58);
        this.addItem("Tripoli", "Τρίπολη", 37.510356, 22.372790, 57);
        this.addItem("Corinth", "Κόρινθος", 37.939967, 22.926728, 56);
        this.addItem("Mytiline", "Μυτιλήνη", 39.104510, 26.560690, 55);
        this.addItem("Chios", "Χίος", 38.372696, 26.137630, 54);
        this.addItem("Salamina", "Σαλαμίνα", 37.966023, 23.492980, 53);
        this.addItem("Corfu", "Κέρκυρα", 39.625780, 19.921106, 52);
        this.addItem("Pyrgos", "Πύργος", 37.674021, 21.441641, 51);
        this.addItem("Kilkis", "Κιλκίς", 40.994913, 22.874123, 50);
        this.addItem("Thiva", "Θήβα", 38.320060, 23.317693, 49);        
        this.addItem("Argos", "Άργος", 37.635220, 22.728643, 48);
        this.addItem("Arta", "Άρτα", 39.161230, 20.986111, 47);
        this.addItem("Livadeia", "Λιβαδειά", 38.438153, 22.878491, 46);
        this.addItem("Egio", "Αίγιο", 38.251005, 22.085255, 45);        
        this.addItem("Kos", "Κως", 36.897117, 27.290114, 44);
        this.addItem("Preveza", "Πρέβεζα", 38.957089, 20.751538, 43);
        this.addItem("Sparti", "Σπάρτη", 37.074397, 22.430156, 42);
        this.addItem("Edessa", "Έδεσσα", 40.806582, 22.048348, 41);        
        this.addItem("Florina", "Φλώρινα", 40.783482, 21.413589, 40);
        this.addItem("Nafplio", "Νάυπλιο", 37.567049, 22.806971, 39);
        this.addItem("Nafpaktos", "Ναύπακτος", 38.392548, 21.828103, 38);
        this.addItem("Kastoria", "Καστοριά", 40.521849, 21.263116, 37);        
        this.addItem("Grevena", "Γρεβενά", 40.084368, 21.427905, 36);
        this.addItem("Mesologgi", "Μεσολόγγι", 38.369773, 21.430969, 35);
        this.addItem("Agios Nikolaos", "Άγιος Νικόλαος", 35.191425, 25.718345, 34);
        this.addItem("Ermoupoli", "Ερμούπολη", 37.441806, 24.940654, 33);        
        this.addItem("Kiato", "Κιάτο", 38.009537, 22.750747, 32);
        this.addItem("Zante", "Ζάκυνθος", 37.783418, 20.896167, 31);
        this.addItem("Argostoli", "Αργοστόλι", 38.175845, 20.488253, 30);
        this.addItem("Sitia", "Σητεία", 35.207179, 26.104490, 29);        
        this.addItem("Lefkada", "Λευκάδα", 38.833674, 20.707638, 28);
        this.addItem("Samos", "Σάμος", 37.758815, 26.973467, 27);
        this.addItem("Karpenissi", "Καρπενήσι", 38.914954, 21.793974, 26);
        this.addItem("Naxos", "Νάξος", 37.105943, 25.376546, 25);        
        this.addItem("Egina", "Αίγινα", 37.746910, 23.430466, 24);
        this.addItem("Polygyros", "Πολύγυρος", 40.377985, 23.441902, 23);
        this.addItem("Tinos", "Τήνος", 37.537763, 25.164947, 22);
        this.addItem("Gytheio", "Γύθειο", 36.761699, 22.565859, 21);
        this.addItem("Mykonos", "Μύκονος", 37.446550, 25.327673, 20);
        this.addItem("Igoumenitsa", "Ηγουμενίτσα", 39.504088, 20.264218, 20);
        this.addItem("Piraeus", "Πειραιάς", 37.942641,23.647553, 19);
    }

    addItem(nameEng, nameGr, lat, long, size) {
        this.items.set(nameGr, { nameEng, nameGr, lat, long, size });
    }
}