// Predefined constant pinpoints with text and pin_icon1 
const PINPOINTS = [
    // Platform 1 markers
    { id: 'Platform 1 ', lat: 19.947730239875234, lng: 73.8421970006081, title: { en: 'Platform 1', hi: 'प्लेटफार्म १', mr: 'प्लॅटफॉर्म १' }, category: "Platform 1", icon: "./static/img/pin_icon/platform.png" },
    { id: 'Platform 1 Point 2', lat: 19.949073868898434, lng: 73.84239788165445, title: { en: 'Lift and Stairs Bhusval end', hi: 'लिफ्ट और सीढ़ियाँ भुसावल छोर', mr: 'लिफ्ट आणि जिने भुसावळ शेवट' }, category: "Platform 1", icon: "./static/img/pin_icon/stairs.png" },
    { id: 'Platform 1 Point 3', lat: 19.947196, lng: 73.842069, title: { en: 'Passenger Lift', hi: 'यात्री लिफ्ट', mr: 'प्रवासी लिफ्ट' }, category: "Platform 1", icon: "./static/img/pin_icon/lift.png" },
    { id: 'Platform 1 Point 4', lat: 19.9485667622535, lng: 73.8422558012047, title: { en: 'Pay and Use toilet near parcel office', hi: 'पार्सल कार्यालय के पास पे एंड यूज शौचालय', mr: 'पार्सल ऑफिसजवळचे पैसे आणि वापर शौचालय' }, category: "Platform 1", icon: "./static/img/pin_icon/washroom.png" },
    { id: 'Platform 1 Point 5', lat: 19.948881622227113, lng: 73.84214240124673, title: { en: 'Parcel Office', hi: 'पार्सल कार्यालय', mr: 'पार्सल ऑफिस' }, category: "Platform 1", icon: "./static/img/pin_icon/office.png" },
    { id: 'Platform 1 Point 7', lat: 19.948378860511262, lng: 73.84231771855413, title: { en: 'DYSS Office', hi: 'डीवायएसएस कार्यालय', mr: 'डीवायएसएस ऑफिस' }, category: "Platform 1", icon: "./static/img/pin_icon/office.png" },
    { id: 'Platform 1 Point 11', lat: 19.94745544178198, lng: 73.84204121281842, title: { en: 'ATM', hi: 'एटीएम', mr: 'एटीएम' }, category: "Platform 1", icon: "./static/img/pin_icon/atm.png" },
    { id: 'Platform 1 Point 12', lat: 19.947468872817097, lng: 73.84185339909355, title: { en: 'AC Retiring Hall (Godavari Waiting Hall)', hi: 'एसी रिटायरिंग हॉल (गोदावरी वेटिंग हॉल)', mr: 'एसी रिटायरिंग हॉल (गोदावरी वेटिंग हॉल)' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },
    { id: 'Platform 1 Point 14', lat: 19.94737791202757, lng: 73.84201774349071, title: { en: 'Waiting Room and Cloak Room Paid', hi: 'वेटिंग रूम और क्लोक रूम भुगतान', mr: 'वेटिंग रूम आणि क्लोक रूम पेड' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },
    { id: 'Platform 1 Point 15', lat: 19.94875366774617, lng: 73.84240592828107, title: { en: 'Water Stand PF at Middle', hi: 'बीच में जल स्टैंड पीएफ', mr: 'मधला वॉटर स्टँड पीएफ' }, category: "Platform 1", icon: "./static/img/pin_icon/water.png" },
    { id: 'Platform 1 Point 16', lat: 19.94837037997832, lng: 73.8415192857732, title: { en: 'Nashik Road Bus Stop', hi: 'नासिक रोड बस स्टॉप', mr: 'नाशिक रोड बस स्टॉप' }, category: "Platform 1", icon: "./static/img/pin_icon/auto.png" },
    { id: 'Platform 1 Point 17', lat: 19.94796, lng: 73.842213, title: { en: 'Drinking Water', hi: 'पीने का पानी', mr: 'पिण्याचे पाणी' }, category: "Platform 1", icon: "./static/img/pin_icon/water.png" },
    { id: 'Platform 1 Point 18', lat: 19.947403, lng: 73.841755, title: { en: 'Escalator', hi: 'एस्केलेटर', mr: 'चलती जिने' }, category: "Platform 1", icon: "./static/img/pin_icon/escalator.png" },
    { id: 'Platform 1 Point 19', lat: 19.948078, lng: 73.841949, title: { en: 'Gift Shop', hi: 'उपहार की दुकान', mr: 'भेटवस्तू दुकान' }, category: "Platform 1", icon: "./static/img/pin_icon/store.png" },
    { id: 'Platform 1 Point 20', lat: 19.947048, lng: 73.842045, title: { en: 'RPF Station', hi: 'आरपीएफ स्टेशन', mr: 'आरपीएफ स्टेशन' }, category: "Platform 1", icon: "./static/img/pin_icon/police_station.png" },
    { id: 'Platform 1 Point 21', lat: 19.947766, lng: 73.841839, title: { en: 'M. Dinshaw & Ranjit AC Dormitory, Deluxe Rooms', hi: 'एम. दिनशॉ और रणजीत एसी डॉरमेटरी, डीलक्स रूम', mr: 'एम. दिनशॉ आणि रणजीत एसी डॉर्मिटरी, डिलक्स रूम' }, category: "Platform 1", icon: "./static/img/pin_icon/sleeping_pod.png" },
    { id: 'Platform 1 Point 23', lat: 19.948437, lng: 73.84187, title: { en: 'Emergency Medical Facility', hi: 'आपातकालीन चिकित्सा सुविधा', mr: 'आपत्कालीन वैद्यकीय सुविधा' }, category: "Platform 1", icon: "./static/img/pin_icon/medical.png" },
    { id: 'Platform 1 Point 24', lat: 19.948534, lng: 73.84199, title: { en: 'Ticket Counter', hi: 'टिकट काउंटर', mr: 'तिकीट काउंटर' }, category: "Platform 1", icon: "./static/img/pin_icon/ticket_counter.png" },
    { id: 'Platform 1 Point 25', lat: 19.947580, lng: 73.84193, title: { en: 'Cafeteria', hi: 'कैफेटेरिया', mr: 'कॅफेटेरिया' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 27', lat: 19.946823, lng: 73.841875, title: { en: 'Pay & Use Toilet', hi: 'पे एंड यूज शौचालय', mr: 'पे अँड यूज शौचालय' }, category: "Platform 1", icon: "./static/img/pin_icon/washroom.png" },
    { id: 'Platform 1 Point 28', lat: 19.94861, lng: 73.842431, title: { en: 'Water Stand PF-1', hi: 'पानी स्टैंड पीएफ-1', mr: 'पाणी स्टँड पीएफ-1' }, category: "Platform 1", icon: "./static/img/pin_icon/water.png" },
    { id: 'Platform 1 Point 29', lat: 19.94692, lng: 73.84154, title: { en: 'Deluxe Toilet (M/F)', hi: 'डीलक्स शौचालय (पुरुष/महिला)', mr: 'डिलक्स शौचालय (पुरुष/महिला)' }, category: "Platform 1", icon: "./static/img/pin_icon/washroom.png" },
    { id: 'Platform 1 Point 30', lat: 19.946848, lng: 73.841893, title: { en: 'Divyangjan Toilet', hi: 'दिव्यांगजन शौचालय', mr: 'दिव्यांगजन शौचालय' }, category: "Platform 1", icon: "./static/img/pin_icon/washroom.png" },
    { id: 'Platform 1 Point 31', lat: 19.948059, lng: 73.84199, title: { en: 'Khadi Garments Store', hi: 'खादी वस्त्र भंडार', mr: 'खादी वस्त्र स्टोअर' }, category: "Platform 1", icon: "./static/img/pin_icon/store.png" },
    { id: 'Platform 1 Point 32', lat: 19.948305, lng: 73.841933, title: { en: 'PF 1 Auto Stand', hi: 'पीएफ 1 ऑटो स्टैंड', mr: 'पीएफ 1 ऑटो स्टँड' }, category: "Platform 1", icon: "./static/img/pin_icon/auto.png" },
    { id: 'Platform 1 Point 33', lat: 19.94665, lng: 73.841403, title: { en: 'Pay & Park Parking', hi: 'पे एंड पार्क पार्किंग', mr: 'पे अँड पार्क पार्किंग' }, category: "Platform 1", icon: "./static/img/pin_icon/pay_park.png" },

    { id: 'Platform 1 Point 34', lat: 19.9480189955569, lng: 73.8421796201009, title: { en: 'Platform 1 Entrance', hi: 'प्लेटफार्म १ प्रवेश', mr: 'प्लॅटफॉर्म १ प्रवेश' }, category: "Platform 1", icon: "./static/img/pin_icon/Entryexit.png" },
    { id: 'Platform 1 Point 35', lat: 19.9479258110046, lng: 73.8422304943829, title: { en: 'Station Manager', hi: 'स्टेशन प्रबंधक', mr: 'स्टेशन मॅनेजर' }, category: "Platform 1", icon: "./static/img/pin_icon/station_manager.png" },
    { id: 'Platform 1 Point 38', lat: 19.9477949362633, lng: 73.8421749061679, title: { en: 'Irctc Food Track', hi: 'आईआरसीटीसी फूड ट्रैक', mr: 'आयआरसीटीसी फूड ट्रॅक' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 39', lat: 19.9476854516116, lng: 73.8418588942186, title: { en: 'Irctc Dormitory & Deluxe Room', hi: 'आईआरसीटीसी डॉर्मिटरी और डीलक्स रूम', mr: 'आयआरसीटीसी डॉर्मिटरी आणि डीलक्स रूम' }, category: "Platform 1", icon: "./static/img/pin_icon/sleeping_pod.png" },
    { id: 'Platform 1 Point 40', lat: 19.9475138912436, lng: 73.8419460051485, title: { en: 'Pay & Use Toilet(M/F)', hi: 'पे एंड यूज शौचालय (पुरुष/महिला)', mr: 'पे अँड यूज शौचालय (पुरुष/महिला)' }, category: "Platform 1", icon: "./static/img/pin_icon/washroom.png" },
    { id: 'Platform 1 Point 41', lat: 19.9475796157185, lng: 73.8419527715279, title: { en: 'Relax Zone', hi: 'विश्राम क्षेत्र', mr: 'विश्रांती क्षेत्र' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },
    { id: 'Platform 1 Point 42', lat: 19.9475539155125, lng: 73.8418786083123, title: { en: 'Vastyalyam Sleeping Pod', hi: 'वस्ताल्यम स्लीपिंग पॉड', mr: 'वस्ताल्यम स्लीपिंग पॉड' }, category: "Platform 1", icon: "./static/img/pin_icon/sleeping_pod.png" },
    { id: 'Platform 1 Point 43', lat: 19.9472754710607, lng: 73.8416707951445, title: { en: 'Offtrack Rail Coach Restaurant', hi: 'ऑफट्रैक रेल कोच रेस्टोरंट', mr: 'ऑफट्रॅक रेल कोच रेस्टॉरंट' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 44', lat: 19.948129339158, lng: 73.8421446919026, title: { en: 'Osop Stall', hi: 'ओसोप स्टॉल', mr: 'ओसोप स्टॉल' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 45', lat: 19.948143067654, lng: 73.8421064781602, title: { en: 'Gift Shop', hi: 'गिफ्ट शॉप', mr: 'गिफ्ट शॉप' }, category: "Platform 1", icon: "./static/img/pin_icon/store.png" },
    { id: 'Platform 1 Point 46', lat: 19.9481698293033, lng: 73.8422593972415, title: { en: 'TCI Office', hi: 'टीसीआई ऑफिस', mr: 'टीसीआय ऑफिस' }, category: "Platform 1", icon: "./static/img/pin_icon/office.png" },
    { id: 'Platform 1 Point 47', lat: 19.9485308902095, lng: 73.8423358285154, title: { en: 'Multi Purpose Stall Food', hi: 'मल्टी पर्पस स्टॉल फूड', mr: 'मल्टी पर्पस स्टॉल फूड' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 48', lat: 19.9484980281734, lng: 73.8422879214036, title: { en: 'Rail Ahar (tea)', hi: 'रेल आहार (चहा)', mr: 'रेल आहार (चहा)' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 49', lat: 19.9482496775167, lng: 73.842275675835, title: { en: 'Upper Class Waiting Room(Female)', hi: 'अपर क्लास वेटिंग रूम (महिला)', mr: 'अपर क्लास वेटिंग रूम (महिला)' }, category: "Platform 1", icon: "./static/img/pin_icon/sleeping_pod.png" },
    { id: 'Platform 1 Point 50', lat: 19.9482820506708, lng: 73.8422826237955, title: { en: 'Waiting Room', hi: 'वेटिंग रूम', mr: 'वेटिंग रूम' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },
    { id: 'Platform 1 Point 52', lat: 19.9483313103336, lng: 73.842295280183, title: { en: 'Kitab Ghar', hi: 'किताब घर', mr: 'किताब घर' }, category: "Platform 1", icon: "./static/img/pin_icon/fruit_stall.png" },
    { id: 'Platform 1 Point 53', lat: 19.9484636071821, lng: 73.8423238682215, title: { en: 'Maa Tara Ac Waiting & Cloak Room', hi: 'माँ तारा एसी वेटिंग और क्लोक रूम', mr: 'माँ तारा एसी वेटिंग आणि क्लोक रूम' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },
    { id: 'Platform 1 Point 54', lat: 19.9484832502068, lng: 73.8423302994909, title: { en: 'Sleeper Class Waiting Room', hi: 'स्लीपर क्लास वेटिंग रूम', mr: 'स्लीपर क्लास वेटिंग रूम' }, category: "Platform 1", icon: "./static/img/pin_icon/waiting.png" },



    // Platform 2 markers
    {
        id: 'Platform 2',
        lat: 19.948403,
        lng: 73.8425432,
        title: { en: 'Platform 2/3', hi: 'प्लेटफार्म 2/3', mr: 'प्लॅटफॉर्म 2/3' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/platform.png"
    },
    {
        id: 'Platform 2 Point 2',
        lat: 19.9449908,
        lng: 73.8419853,
        title: { en: 'Drinking Water', hi: 'पेयजल', mr: 'पाणी' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/water.png"
    },
    {
        id: 'Platform 2 Point 3',
        lat: 19.9459933,
        lng: 73.8419712,
        title: { en: 'Tea Snacks Stall', hi: 'चहा स्नॅक्स स्टॉल', mr: 'चहा स्नॅक्स स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/tea_stall.png"
    },
    {
        id: 'Platform 2 Point 4',
        lat: 19.9462599,
        lng: 73.8420426,
        title: { en: 'Oxygen Parlour', hi: 'ऑक्सिजन पार्लर', mr: 'ऑक्सिजन पार्लर' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/store.png"
    },
    {
        id: 'Platform 2 Point 5',
        lat: 19.9463788,
        lng: 73.8420705,
        title: { en: 'Drinking Water', hi: 'पेयजल', mr: 'पाणी' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/water.png"
    },
    {
        id: 'Platform 2 Point 6',
        lat: 19.9466785,
        lng: 73.8421422,
        title: { en: 'Mahanand Milk Stall', hi: 'महानंद दूध स्टॉल', mr: 'महानंद दूध स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/milk.png"
    },
    {
        id: 'Platform 2 Point 7',
        lat: 19.9469073,
        lng: 73.8421788,
        title: { en: 'Tea Stall', hi: 'चहा स्टॉल', mr: 'चहा स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/tea_stall.png"
    },
    {
        id: 'Platform 2 Point 8',
        lat: 19.9493372,
        lng: 73.842735,
        title: { en: 'Snacks Corner', hi: 'नाश्ता कोपरा', mr: 'नाश्ता कोपरा' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/fruit_stall.png"
    },
    {
        id: 'Platform 2 Point 9',
        lat: 19.9492029,
        lng: 73.8426984,
        title: { en: 'Toilet(M/F)', hi: 'शौचालय(पुरुष/महिला)', mr: 'टॉयलेट(पुरुष/महिला)' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/washroom.png"
    },
    {
        id: 'Platform 2 Point 10',
        lat: 19.9486886,
        lng: 73.8425563,
        title: { en: 'Drinking Water', hi: 'पेयजल', mr: 'पाणी' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/water.png"
    },
    {
        id: 'Platform 2 Point 11',
        lat: 19.9482395,
        lng: 73.8424611,
        title: { en: 'Fruit & Juice Stall', hi: 'फळ आणि ज्यूस स्टॉल', mr: 'फळ आणि ज्यूस स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/fruit_stall.png"
    },
    {
        id: 'Platform 2 Point 12',
        lat: 19.9481556,
        lng: 73.8424396,
        title: { en: 'Multipurpose Stall', hi: 'बहुउद्देशीय स्टॉल', mr: 'बहुउद्देशीय स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/fruit_stall.png"
    },
    {
        id: 'Platform 2 Point 13',
        lat: 19.9479139,
        lng: 73.8424121,
        title: { en: 'Drinking Water', hi: 'पेयजल', mr: 'पाणी' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/water.png"
    },
    {
        id: 'Platform 2 Point 14',
        lat: 19.9478792,
        lng: 73.8423712,
        title: { en: 'Fruit & Juice Stall', hi: 'फळ आणि ज्यूस स्टॉल', mr: 'फळ आणि ज्यूस स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/fruit_stall.png"
    },
    {
        id: 'Platform 2 Point 15',
        lat: 19.9477258,
        lng: 73.8423635,
        title: { en: 'Railahar Tea Stall', hi: 'रेलाहर चहा स्टॉल', mr: 'रेलाहर चहा स्टॉल' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/tea_stall.png"
    },
    {
        id: 'Platform 2 Point 16',
        lat: 19.94893508,
        lng: 73.84257904,
        title: { en: 'Stair Bhusawal End', hi: 'स्टेयर भुसावल छोर', mr: 'स्टेयर भुसावल अंत' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/stairs.png"
    },
    {
        id: 'Platform 2 Point 17',
        lat: 19.94904434,
        lng: 73.84262655,
        title: { en: 'Lift Bhusawal End', hi: 'लिफ्ट भुसावल छोर', mr: 'लिफ्ट भुसावल अंत' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/lift.png"
    },
    {
        id: 'Platform 2 Point 18',
        lat: 19.94761333,
        lng: 73.84233439,
        title: { en: 'Excelerator Mumbai End', hi: 'एक्सेलरेटर मुंबई छोर', mr: 'एक्सेलरेटर मुंबई अंत' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/escalator.png"
    },
    {
        id: 'Platform 2 Point 19',
        lat: 19.94739521,
        lng: 73.84223735,
        title: { en: 'Lift Mumbai End', hi: 'लिफ्ट मुंबई छोर', mr: 'लिफ्ट मुंबई अंत' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/lift.png"
    },
    {
        id: 'Platform 2 Point 20',
        lat: 19.94718233,
        lng: 73.84222358,
        title: { en: 'Stair Mumbai End', hi: 'स्टेयर मुंबई छोर', mr: 'स्टेयर मुंबई अंत' },
        category: "Platform 2",
        icon: "./static/img/pin_icon/stairs.png"
    },


    {
        id: 'Platform 4',
        lat: 19.947206897269872,
        lng: 73.84249036809372,
        title: { en: 'Platform 4', hi: 'प्लेटफार्म 4', mr: 'प्लॅटफॉर्म 4' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/platform.png"
    },
    {
        id: 'Platform 4 Point 2',
        lat: 19.9462262,
        lng: 73.8422562,
        title: { en: 'Tea Stall', hi: 'चहा स्टॉल', mr: 'चहा स्टॉल' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/tea_stall.png"
    },
    {
        id: 'Platform 4 Point 3',
        lat: 19.9448597,
        lng: 73.8419789,
        title: { en: 'Toilet(M/L)', hi: 'शौचालय(पुरुष/महिला)', mr: 'टॉयलेट(पुरुष/महिला)' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/washroom.png"
    },
    {
        id: 'Platform 4 Point 4',
        lat: 19.9469949,
        lng: 73.8424349,
        title: { en: 'Escalator & Stair', hi: 'एस्कलेटर आणि सिडी', mr: 'एस्केलेटर आणि जिना' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/escalator.png"
    },
    {
        id: 'Platform 4 Point 5',
        lat: 19.9473715,
        lng: 73.8425412,
        title: { en: 'Child Help Desk', hi: 'बाल सहाय्य कक्ष', mr: 'बाल सहाय्य कक्ष' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/help.png"
    },
    {
        id: 'Platform 4 Point 6',
        lat: 19.9488988,
        lng: 73.8429194,
        title: { en: 'Toilet(M/L)', hi: 'शौचालय(पुरुष/महिला)', mr: 'टॉयलेट(पुरुष/महिला)' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/washroom.png"
    },
    {
        id: 'Platform 4 Point 7',
        lat: 19.9489224,
        lng: 73.8428393,
        title: { en: 'Lift & Stair', hi: 'लिफ्ट आणि सिडी', mr: 'लिफ्ट आणि जिना' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/lift.png"
    },
    {
        id: 'Platform 4 Point 8',
        lat: 19.9487459,
        lng: 73.8428979,
        title: { en: 'Divyangjan Toilet', hi: 'दिव्यांगजन शौचालय', mr: 'दिव्यांगजन शौचालय' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/washroom.png"
    },
    {
        id: 'Platform 4 Point 9',
        lat: 19.948225,
        lng: 73.8427105,
        title: { en: 'Multipurpose Stall', hi: 'बहुउद्देशीय स्टॉल', mr: 'बहुउद्देशीय स्टॉल' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/fruit_stall.png"
    },
    {
        id: 'Platform 4 Point 10',
        lat: 19.948364,
        lng: 73.8427803,
        title: { en: 'Pf 4 Entry Exit', hi: 'पीएफ ४ प्रवेश बाहेर', mr: 'पीएफ ४ प्रवेश बाहेर' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/Entryexit.png"
    },
    {
        id: 'Platform 4 Point 11',
        lat: 19.9484613,
        lng: 73.8429938,
        title: { en: 'Reservation Center', hi: 'आरक्षण केंद्र', mr: 'आरक्षण केंद्र' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/reservation.png"
    },
    {
        id: 'Platform 4 Point 12',
        lat: 19.9485354,
        lng: 73.8429546,
        title: { en: 'Pay Parking', hi: 'पार्किंग शुल्क', mr: 'पार्किंग शुल्क' },
        category: "Platform 4",
        icon: "./static/img/pin_icon/pay_park.png"
    }



];


let isDirectionsVisible = false;

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


// function toggleList(listId) {
//     const list = document.getElementById(listId);
//     list.classList.toggle("open");  // Toggle 'open' class to show/hide the list
// }
function toggleList(listId) {
    // Get all dropdown lists
    const dropdownLists = document.querySelectorAll("ul");

    // Close any open dropdowns except the one being toggled
    dropdownLists.forEach(list => {
        if (list.id !== listId && list.classList.contains("open")) {
            list.classList.remove("open");
        }
    });

    // Toggle the selected dropdown
    const list = document.getElementById(listId);
    list.classList.toggle("open");

    // Add click event to handle sublist visibility
    const items = list.querySelectorAll("li");
    items.forEach(item => {
        const subList = item.querySelector("ul"); // Check if the item has a sublist
        if (subList) {
            item.addEventListener("click", (event) => {
                event.stopPropagation(); // Prevent parent list toggling
                subList.classList.toggle("open"); // Toggle the sublist
            });
        }

        // Close the parent list when an item is clicked, if it doesn't have a sublist
        item.addEventListener("click", () => {
            if (!subList) {
                list.classList.remove("open");
            }
        });
    });
}



// Sidebar Toggle
const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");

menuIcon.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuIcon.classList.toggle("right"); // Shift the icon to the right

    // Toggle the icon visibility when the sidebar is open
    menuIcon.classList.toggle("hidden"); // Hide the icon when sidebar is open

    // Close all submenus when the sidebar is closed   
    if (!sidebar.classList.contains("open")) {
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none'; // Hide all submenus
        });
    }

});

// Close sidebar when clicking outside
document.addEventListener("click", (event) => {
    // isZoomingProgrammatically = false;

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("open");
        menuIcon.classList.remove("right");
        menuIcon.classList.remove("hidden"); // Reset icon visibility when clicking outside

        // Close all submenus when the sidebar is closed
        document.querySelectorAll('.submenu').forEach(submenu => {
            submenu.style.display = 'none'; // Hide all submenus
        });
    }
});

// Close sidebar when clicking any submenu item inside it
sidebar.querySelectorAll('.menu-list li').forEach(submenuItem => {
    submenuItem.addEventListener('click', (event) => {
        const hasNestedSubmenu = submenuItem.querySelector('.submenu');
        // isZoomingProgrammatically = false;
        isDirectionsVisible = false;

        shouldDrawDottedLine = false;



        if (!hasNestedSubmenu) {
            sidebar.classList.remove("open");
            menuIcon.classList.remove("right");
            menuIcon.classList.remove("hidden"); // Reset icon visibility

            // Close all submenus
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.style.display = 'none'; // Hide all submenus
            });
        }
    });
});

// Close sidebar when clicking main menu items without submenus
sidebar.querySelectorAll('.menu-item > button').forEach(menuButton => {
    menuButton.addEventListener('click', (event) => {
        const hasSubmenu = menuButton.nextElementSibling && menuButton.nextElementSibling.classList.contains('menu-list');
        isDirectionsVisible = false;

        shouldDrawDottedLine = false;

        // console.log("here each selecred value uis ", hasSubmenu)

        if (!hasSubmenu) {
            sidebar.classList.remove("open");
            menuIcon.classList.remove("right");
            menuIcon.classList.remove("hidden"); // Reset icon visibility
        }
    });
});





// LOCATION AND SUBMENU CODE
let map;
let markers = [];
let directionsService;
let directionsRenderer;
let userLocation = null; // User's current location
let userLocationMarker = null;
let isMapCentered = false;
let closestMarker = null; // Track the selected destination marker
let distanceBox = null; // New box for displaying the distance on the path

let shouldDrawDottedLine = true;
let dottedLinesArray = [];

let selectedMarkers = []; // To track selected markers
let isZoomingProgrammatically = false;
let iconChoose = '';

function initMap() {
    const customStyle = [
        { "featureType": "water", "stylers": [{ "color": "#50B6FF" }] },
        { "featureType": "landscape", "stylers": [{ "color": "#F1F9FF" }] },
        { "featureType": "road", "stylers": [{ "color": "#ffffff" }] },
        { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
        // { "featureType": "landscape.natural", "stylers": [{ "color": "#BBFF9B" }] },
        { "featureType": "road.highway", "stylers": [{ "color": "#FFEBDE" }] },
        {
            featureType: "transit.line", // Targets railway tracks
            elementType: "geometry",
            stylers: [
                { color: "#FFC74E" }, // Change to your desired color
                { visibility: "simplified" }, // Simplify the line
                { weight: 4 }, // Adjust thickness
            ],
        },
        {
            featureType: "transit.line", // Targets railway tracks
            elementType: "labels",
            stylers: [{ visibility: "off" }], // Remove railway labels (optional)
        },
    ];



    const mapOptions = {
        zoomControl: false,
        zoom: 18,
        center: { lat: 19.9482, lng: 73.8421 }, // Default center
        styles: customStyle,
        mapTypeControl: false,
        streetViewControl: false,


        fullscreenControl: false, // Disable fullscreen control (fullscreen button)

    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const railwayLine = new google.maps.Polyline({
        path: [
            { lat: 19.946810167998795, lng: 73.84199274218622 }, // Starting point , 
            { lat: 19.94985046657326, lng: 73.84263706196272 }, // Ending point  , 
            { lat: 19.946513449638726, lng: 73.84194493518378 }, // Starting point , 
            { lat: 19.94905780688094, lng: 73.84250658274564 }, 
        ],
        geodesic: true,
        strokeColor: '#FFC74E', // Color of the line
        strokeOpacity: 1.0,
        strokeWeight: 4,
        icons: [{
            icon: {
                path: "M 0,0 L 2,0",  // Horizontal line (start to end in X direction)
                strokeColor: '#FFC74E', // Color of the horizontal dash
                strokeWeight: 4,
            },
            offset: '0',
            repeat: '20px', // Adjust the gap between dashes (20px here)
        }],
    });

    railwayLine.setMap(map);

    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
        polylineOptions: {
            strokeColor: "#004DBC", // Highlighted route in blue
            strokeOpacity: 0.9,
            strokeWeight: 6,
        },
        suppressMarkers: true, // Suppress default markers from directions
    });

    // Display user's location and add predefined markers
    displayUserLocation();
    PINPOINTS.forEach((pin) => {
        addCustomMarker({ lat: pin.lat, lng: pin.lng }, pin.title, pin.icon);
    });

    map.addListener('zoom_changed', handleZoomChanged);
    // Call handleZoomChanged immediately after the map is loaded to apply the right marker visibility
    handleZoomChanged();

    let polygon = null; // Variable to store the polygon object
    let platformLabel = null; // Variable to store the label object

    // Coordinates for highlighting the areas (Nashik region)
    const platformCoordinates = {
        platform1: [
            { lat: 19.94651232696333, lng: 73.84195008739192 },
            { lat: 19.946557206782217, lng: 73.84163827255864 },
            { lat: 19.94967212368754, lng: 73.84257638314101 },
            { lat: 19.949656996145993, lng: 73.84263405062848 },
        ],
        platform2: [
            { lat: 19.945917044530635, lng: 73.84201509462258 },
            { lat: 19.945947028206277, lng: 73.84188431685314 },
            { lat: 19.94980431114777, lng: 73.84275299314311 },
            { lat: 19.94978332308824, lng: 73.84287260695663 },
        ],
        platform3: [
            { lat: 19.945917044530635, lng: 73.84201509462258 },
            { lat: 19.945947028206277, lng: 73.84188431685314 },
            { lat: 19.94980431114777, lng: 73.84275299314311 },
            { lat: 19.94978332308824, lng: 73.84287260695663 },
        ],
        platform4: [
            { lat: 19.9436202071113, lng: 73.8417142930895 },
            { lat: 19.943654156095327, lng: 73.84161908124462 },
            { lat: 19.94912395531475, lng: 73.84286265635902 },
            { lat: 19.949101493390923, lng: 73.84294151237617 },
        ]
    };

    // Function to create the polygon, zoom, and add label
    function togglePolygon(platform) {
        if (polygon) {
            // Remove previous polygon and label if any
            polygon.setMap(null);
            polygon = null;
            platformLabel.close(); // Close the label
            platformLabel = null;
        }

        // Create the polygon for the selected platform
        const polygonCoords = platformCoordinates[platform];

        // Create the polygon using the selected coordinates
        polygon = new google.maps.Polygon({
            paths: polygonCoords,
            strokeColor: '#FF8031',  // Border color (Orange)
            strokeOpacity: 0.8,      // Border opacity
            strokeWeight: 0,         // Border weight
            fillColor: '#FF8031',    // Fill color (Orange)
            fillOpacity: 0.35,       // Fill opacity
        });

        // Add the polygon to the map
        polygon.setMap(map);

        // Add label (Platform name)
        platformLabel = new google.maps.InfoWindow({
            content: platform.charAt(0).toUpperCase() + platform.slice(1), // Capitalize the first letter of the platform name
            position: { lat: polygonCoords[0].lat, lng: polygonCoords[0].lng }, // Position the label near the polygon
        });
        platformLabel.open(map);

        // Zoom into the polygon area
        const bounds = new google.maps.LatLngBounds();
        polygon.getPath().forEach(function (latLng) {
            bounds.extend(latLng);
        });
        map.fitBounds(bounds); // Zoom to the bounds of the polygon

        // Optionally, add a listener to change the polygon's style on click
        google.maps.event.addListener(polygon, 'click', function () {
            polygon.setOptions({
                fillColor: '#ff0000', // Red color on click
                strokeColor: '#ff0000'
            });
        });
    }

    // Event listeners for each platform in the menu
    document.querySelectorAll('#platforms li').forEach(item => {
        item.addEventListener('click', function () {
            const platformId = this.innerText.trim().toLowerCase().replace(' ', ''); // Extract platform name (e.g., "platform1")
            togglePolygon(platformId);
        });
    });

    createDistanceBox(); // Create the new box for showing distance

    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.value;
    updateMarkersLanguage(selectedLanguage);
    updateLanguage(selectedLanguage);
}


// Function to show a certain number of markers, removing equally from the start and end
function showMarkersEvenly(count) {
    const halfCount = Math.floor(count / 2);
    const markersToShow = [
        ...markers.slice(0, halfCount), // Start part of markers
        ...markers.slice(-halfCount)    // End part of markers
    ];

    // Show only the selected markers
    markersToShow.forEach(marker => marker.setMap(map));

    // console.log("selected MARKERS", selectedMarkers)

    if (!isDirectionsVisible) {
        // Hide markers that are not in the markersToShow array
        markers.forEach(marker => {
            if (!markersToShow.includes(marker) && marker.title !== selectedMarkers[0]) {
                marker.setMap(null);
            }
        });
    } else {
        markers.forEach(marker => {
            if (marker.title !== iconChoose) {
                marker.setMap(null);
            }
        });

    }

}

// Handle zoom level changes
function handleZoomChanged() {

    const zoomLevel = map.getZoom();

    if (isZoomingProgrammatically) {
        return;
    }

    if (zoomLevel >= 21) {
        // Show all markers at zoom level 21 and above
        markers.forEach(marker => marker.setMap(map));
    } else if (zoomLevel >= 20 && zoomLevel < 21) {
        // Show 50 markers at zoom level 20
        showMarkersEvenly(50);
    } else if (zoomLevel >= 19 && zoomLevel < 20) {
        // Show 40 markers at zoom level 19
        showMarkersEvenly(40);
    } else if (zoomLevel >= 18 && zoomLevel < 19) {
        // Show 35 markers at zoom level 18
        showMarkersEvenly(25);
    } else if (zoomLevel >= 15 && zoomLevel < 18) {
        // Show 30 markers at zoom level 15
        showMarkersEvenly(15);
    } else {
        // Hide all markers for zoom levels below 15
        markers.forEach(marker => marker.setMap(null));
    }
}

// Display the user's location and create a marker for it
function displayUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
            (position) => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    // lat: 19.948237975349134,
                    // lng: 73.8419811704629
                };

                // Create or update the marker for the user's location
                if (userLocationMarker) {
                    userLocationMarker.setPosition(userLocation);
                } else {
                    userLocationMarker = new google.maps.Marker({
                        position: userLocation,
                        map: map,
                        label: {
                            color: "#ffffff",
                            fontSize: "12px",
                            fontWeight: "bold",
                        },
                        icon: {
                            url: "./static/img/street-view.png", // Custom marker for user
                            scaledSize: new google.maps.Size(45, 45),
                        },
                    });
                }

                // Zoom and center the map on the user's location
                if (!isMapCentered) {
                    map.setCenter(userLocation);
                    map.setZoom(28); // Zoom level 28 for street-level precision
                    isMapCentered = true; // Prevent recentering after this
                }

                // If there's a closest marker, recalculate the route dynamically
                if (closestMarker) {
                    // console.log("here call update route")
                    if (isDirectionsVisible || !shouldDrawDottedLine) return;
                    updateRoute(userLocation, closestMarker.position); // Recalculate the route
                    displayLiveDistance(userLocation, closestMarker.position); // Update live distance
                }
            },
            (error) => {
                alert("Error: Unable to fetch your location.");
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Listen for the button click to show the user's location
document.getElementById('userLocationButton').addEventListener('click', function () {
    displayUserLocation();  // Call the function to show the user's location
});


// Function to add a custom marker with text (title) and icon
function addCustomMarker(location, title, icon) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: icon
            ? {
                url: icon, // URL of the custom icon
                scaledSize: new google.maps.Size(30, 30), // Custom icon size
                labelOrigin: new google.maps.Point(15, 40), // Position of label relative to icon
            }
            : undefined,
        label: {
            text: title, // Show the title directly on the map
            color: "#526581", // Label text color
            fontSize: "10px",
            fontWeight: "bold",
        },
    });

    marker.title = title;
    // Add a click listener to calculate the route and show distance
    marker.addListener("click", () => {
        if (!userLocation) {
            alert("Your location is not available yet. Please wait.");
            return;
        }

        closestMarker = marker; // Update the closest marker
        updateRoute(userLocation, marker.position); // Recalculate the route
        iconChoose = marker.title
        displayLiveDistance(userLocation, marker.position); // Update live distance

        // Hide other markers when one is selected
        hideOtherMarkers(marker);
    });

    markers.push(marker); // Store the marker in the array
}

// Function to detect deviation and add a dotted line
function checkDeviationAndDrawDottedLine(routePolyline) {
    if (!userLocation || !routePolyline || !shouldDrawDottedLine) return;

    const userPoint = new google.maps.LatLng(userLocation.lat, userLocation.lng);
    const routePath = routePolyline.getPath();
    let closestPoint = null;
    let minDistance = Infinity;

    // Find the closest point on the route to the user's location
    routePath.forEach((point) => {
        const distance = google.maps.geometry.spherical.computeDistanceBetween(
            userPoint,
            point
        );
        if (distance < minDistance) {
            minDistance = distance;
            closestPoint = point;
        }
    });

    // If deviation exceeds 20 meters, draw a dotted line
    if (minDistance > 20) {
        const dottedLine = new google.maps.Polyline({
            path: [userPoint, closestPoint],
            map: map,
            strokeColor: "#526581",
            strokeOpacity: 0.7,
            strokeWeight: 3,
            icons: [
                {
                    icon: {
                        path: "M 0,-1 0,1",
                        strokeOpacity: 1,
                        scale: 2,
                    },
                    offset: "0",
                    repeat: "10px",
                },
            ],
        });

        // Add the newly created dotted line to the array
        dottedLinesArray.push(dottedLine);
    }
}


function updateRoute(start, end) {
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING,
    };


    directionsService.route(request, (result, status) => {
        if (status === "OK") {
            // Render the route
            directionsRenderer.setDirections(result);
            directionsRenderer.setMap(map);

            isDirectionsVisible = true;

            // Get the route's path
            const routePath = result.routes[0].overview_path;

            // Find the last point of the route
            const firstRouteablePoint = routePath[0];

            // Find the last point of the route
            const lastRouteablePoint = routePath[routePath.length - 1];

            hideDottedLines();

            drawDottedLine(start, firstRouteablePoint);
            // Draw a dotted line from the last point to the destination
            drawDottedLine(lastRouteablePoint, end);

            // Display total route distance
            calculateAndDisplayRouteDistance(result.routes[0].legs[0]);
        } else {
            console.warn("No route found. Drawing a direct dotted line.");
            drawDottedLine(start, end); // Draw dotted line directly if no route
        }
    });
}

// Function to draw a dotted line
function drawDottedLine(startPoint, endPoint) {
    const dottedLine = new google.maps.Polyline({
        path: [startPoint, endPoint],
        strokeOpacity: 0, // Make the solid line invisible
        map: map,
        icons: [
            {
                icon: {
                    path: google.maps.SymbolPath.CIRCLE, // Dotted line as circles
                    fillOpacity: 1,
                    fillColor: "#74ACFF", // Black dots
                    strokeOpacity: 1,
                    strokeColor: "#526581",
                    scale: 2, // Size of dots
                },
                offset: "0",
                repeat: "10px", // Distance between dots
            },
        ],
    });

    // Add the newly created dotted line to the array
    dottedLinesArray.push(dottedLine);
}


// Function to hide the dotted line when highlighting a marker
function hideDottedLines() {
    dottedLinesArray.forEach((line) => {
        line.setMap(null); // Remove the dotted line from the map
    });
    dottedLinesArray = []; // Clear the array
}


// Function to calculate and display the total route distance
function calculateAndDisplayRouteDistance(routeLeg) {
    const totalDistance = routeLeg.distance.text; // The distance is provided in the response
    updateDistanceDisplay(`Total route distance: ${totalDistance}`);
}

// Function to update live distance dynamically
function displayLiveDistance(start, end) {
    const distance = haversineDistance(start, end);
    let distanceMessage = "";

    if (!isNaN(distance)) {
        if (distance < 1000) {
            // Display distance in meters if less than 1 km
            distanceMessage = `Distance: ${distance.toFixed(0)} meters`;
        } else {
            // Display distance in kilometers if 1 km or more
            distanceMessage = `Distance: ${distance.toFixed(2)} km`;
        }
    }

    updateDistanceDisplay(distanceMessage);
}

// Function to hide all markers except the selected one
function hideOtherMarkers(selectedMarker) {
    markers.forEach((marker) => {
        if (marker !== selectedMarker) {
            marker.setMap(null); // Hide the marker
        }
    });
}

// Function to show all markers (for back button)
function showAllMarkers() {
    markers.forEach((marker) => {
        marker.setMap(map); // Show the marker again
    });
}
// Function to update distance display on the map
function updateDistanceDisplay(message) {
    const distanceDisplay = document.getElementById("distanceDisplay");
    if (distanceDisplay) {
        distanceDisplay.innerText = message;
    }
}



// Function to calculate the Haversine distance
function haversineDistance(coords1, coords2) {
    if (!coords1 || !coords2) return NaN;

    const R = 6371; // Radius of the Earth in kilometers
    const toRad = (value) => (value * Math.PI) / 180;

    const dLat = toRad(coords2.lat - coords1.lat);
    const dLng = toRad(coords2.lng - coords1.lng);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coords1.lat)) *
        Math.cos(toRad(coords2.lat)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceKm = R * c; // Distance in kilometers

    if (distanceKm < 1) {
        return distanceKm * 1000; // Convert to meters if distance is less than 1 km
    } else {
        return distanceKm; // Return distance in kilometers
    }
}

// Create a distance box for showing live distance
function createDistanceBox() {
    distanceBox = document.createElement("div");
    distanceBox.id = "distanceBox";
    distanceBox.style.position = "absolute";
    distanceBox.style.top = "50px";
    distanceBox.style.left = "50%";
    distanceBox.style.transform = "translateX(-50%)";
    distanceBox.style.padding = "10px";
    distanceBox.style.backgroundColor = "white";
    distanceBox.style.border = "1px solid #ccc";
    distanceBox.style.borderRadius = "5px";
    distanceBox.style.zIndex = "1000";
    distanceBox.innerText = "Click a marker to calculate route to Point B";

    document.body.appendChild(distanceBox);
}

// Function to update the distance display box
function updateDistanceDisplay(text) {
    if (distanceBox) {
        distanceBox.textContent = text;
    }
}



function bounceAllPins(category) {
    isZoomingProgrammatically = true;
    markers.forEach((marker) => marker.setMap(null));
    const selectedLanguage = document.getElementById('language-select').value;
    document.querySelectorAll('.menu-list li').forEach((li) => li.classList.remove('highlight'));

    const selectedItem = Array.from(document.querySelectorAll('.menu-list li')).find(
        (li) => li.textContent.trim() === category
    );

    if (selectedItem) selectedItem.classList.add('highlight');
    const selectedPins = PINPOINTS.filter((pin) => pin.category === category);
    const bounds = new google.maps.LatLngBounds();
    selectedPins.forEach((pin) => {
        const marker = markers.find(
            (m) => m.getPosition().lat() === pin.lat && m.getPosition().lng() === pin.lng
        );
        if (marker) {
            marker.setMap(map);
            marker.setAnimation(google.maps.Animation.BOUNCE);
            marker.setLabel({
                text: pin.title[selectedLanguage],
                fontSize: '10px',
            });
            bounds.extend(marker.getPosition());
        }
    });

    if (!bounds.isEmpty()) {
        map.fitBounds(bounds);
    }

    if (!isDirectionsVisible) {
        // Only clear directions if necessary
        directionsRenderer.setMap(null);
        directionsRenderer.setDirections({});
        isDirectionsVisible = false;
        shouldDrawDottedLine = false;
        hideDottedLines();
    }
    // isZoomingProgrammatically = false;

}

function highlightPinpoints(pointId) {
    markers.forEach((marker) => marker.setAnimation(null)); // Remove bounce from all markers
    const selectedLanguage = document.getElementById('language-select').value;

    const location = PINPOINTS.find((point) => point.id === pointId);

    if (location && map) {
        map.setCenter({ lat: location.lat, lng: location.lng });
        map.setZoom(28);

        const marker = markers.find(
            (m) => m.getPosition().lat() === location.lat && m.getPosition().lng() === location.lng
        );

        if (marker) {
            marker.setLabel({
                text: location.title[selectedLanguage],
                color: "#526581",
                fontSize: "10px",
                fontWeight: "bold",
                marginBottom: "10px"
            });
            marker.setAnimation(google.maps.Animation.BOUNCE); // Bounce animation
            isZoomingProgrammatically = false;
            selectedMarkers.push(marker.title); // Add this marker to the selected markers list

            if (isDirectionsVisible) {
                // Only clear directions if necessary
                directionsRenderer.setMap(null);
                directionsRenderer.setDirections({});
                isDirectionsVisible = false;
                shouldDrawDottedLine = false;
                hideDottedLines();
            }

            marker.setMap(map); // Ensure it stays visible even with zoom changes

            setTimeout(() => {
                marker.setAnimation(null); // Stop bouncing after 2 seconds
            }, 2000);
        }
    }
}

// Function to reload the page
function showAllPlatforms() {
    location.reload();  // This will reload the page when called
}

// Add event listener to the span inside the <li> for showing all platforms
document.querySelector('span[data-en="All Platform"]').addEventListener('click', function () {
    showAllPlatforms();  // Call showAllPlatforms when clicked
});


// MENU BUTTONS CODE

// NASHIK MAP CODE

// Variable to store the Nashik marker
let nashikMarker = null;

// Function to show Nashik map and add a marker
function showNashikMap() {
    const nashikCenter = { lat: 19.9975, lng: 73.7898 }; // Nashik's approximate center

    // Center and zoom to Nashik
    map.setCenter(nashikCenter);
    map.setZoom(14);

    // Add marker for Nashik if it doesn't exist
    if (!nashikMarker) {
        nashikMarker = new google.maps.Marker({
            position: nashikCenter,
            map: map,
            title: "Nashik Center",
            icon: {
                url: "./static/img/menu_img/placeholder.png", // Path to your custom marker icon
                scaledSize: new google.maps.Size(40, 40),
            },
        });
    }
}

// Add event listener to "Nashik map" button
document.getElementById("nashikMapBtn").addEventListener("click", showNashikMap);



// TOURIST CODE

// Function to display all tourist places and pinpoints                                                                                                                                            
function displayAllPinpoints() {
    // Add all tourist places and platform pinpoints to the map
    [...TOURIST_PLACES, ...PINPOINTS].forEach(place => {
        const location = { lat: place.lat, lng: place.lng };
        addMarker(location, place.title, place.icon);
    });
}

// Function to search and show specific pinpoints based on the transcript
function searchAndShowPinpoints(transcript) {

    // Filter the tourist places and pinpoints based on the search term
    const allLocations = [...TOURIST_PLACES, ...PINPOINTS];
    const filteredLocations = allLocations.filter(location =>
        location.title.toLowerCase().includes(transcript) ||
        location.name.toLowerCase().includes(transcript)
    );

    if (filteredLocations.length > 0) {
        filteredLocations.forEach(place => {
            const location = { lat: place.lat, lng: place.lng };
            addMarker(location, place.title, place.icon);
        });
    } else {
        alert(`No location found for: "${transcript}"`);
    }
}

// Function to add marker on the map
function addMarker(location, title, icon) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: title,
        icon: icon,
    });
}


const TOURIST_PLACES = [
    { name: 'Trimbakeshwar', lat: 19.93453011425969, lng: 73.52842423653824, title: { en: 'Trimbakeshwar Temple', hi: 'त्र्यंबकेश्वर मंदिर', mr: 'त्र्यंबकेश्वर मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Mukti Dham Mandir', lat: 19.953828048064583, lng: 73.83737826265069, title: { en: 'Mukti Dham Mandir', hi: 'मुक्ति धाम मंदिर', mr: 'मुक्तीधाम मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Pandav Leni', lat: 19.94463047693236, lng: 73.7463977372903, title: { en: 'Pandav Leni', hi: 'पांडव लेनी', mr: 'पांडव लेणी' }, icon: './static/img/temple.png' },
    { name: 'Panchvati', lat: 20.010315331401916, lng: 73.79150030377282, title: { en: 'Panchvati', hi: 'पंचवटी', mr: 'पंचवटी' }, icon: './static/img/temple.png' },
    { name: 'Saptashrungi Devi Mandir', lat: 20.00744084120391, lng: 73.79929304059421, title: { en: 'Saptashrungi Devi Mandir', hi: 'सप्तश्रृंगी देवी मंदिर', mr: 'सप्तश्रृंगी देवी मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Sula Wine Yard', lat: 20.00583355051259, lng: 73.68834345884471, title: { en: 'Sula Wine Yard', hi: 'सुला वाइन यार्ड', mr: 'सुला वाइन यार्ड' }, icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Jain Mandir', lat: 19.950409617723597, lng: 73.5853031983178, title: { en: 'Jain Mandir', hi: 'जैन मंदिर', mr: 'जैन मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Anjaneri (Hanuman Temple)', lat: 19.952427945637567, lng: 73.58617831673308, title: { en: 'Anjaneri Hanuman Temple', hi: 'अंजनेरी हनुमान मंदिर', mr: 'अंजनेरी हनुमान मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Ramkund', lat: 20.008363233800278, lng: 73.792539081843, title: { en: 'Ramkund', hi: 'रामकुंड', mr: 'रामकुंड' }, icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Kalaram Mandir', lat: 20.007435753945348, lng: 73.79522129074769, title: { en: 'Kalaram Mandir', hi: 'काळाराम मंदिर', mr: 'काळाराम मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Sita Gufa', lat: 20.007919657116876, lng: 73.79599376690547, title: { en: 'Sita Gufa', hi: 'सीता गुफा', mr: 'सीता गुहा' }, icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Someshwar Mandir', lat: 20.004587365702832, lng: 73.79132816733286, title: { en: 'Someshwar Mandir', hi: 'सोमेश्वर मंदिर', mr: 'सोमेश्वर मंदिर' }, icon: './static/img/temple.png' },
    { name: 'Coin Museum', lat: 19.958324062485083, lng: 73.61125273880573, title: { en: 'Coin Museum', hi: 'सिक्का संग्रहालय', mr: 'नाणे संग्रहालय' }, icon: './static/img/photo-camera-interface-symbol-for-button.png' },
    { name: 'Gondeshwar Mandir Sinnar', lat: 19.85149481194432, lng: 74.00206217901264, title: { en: 'Gondeshwar Mandir Sinnar', hi: 'गोंदेश्वर मंदिर, सिन्नर', mr: 'गोंदेश्वर मंदिर, सिन्नर' }, icon: './static/img/temple.png' },
    { name: 'Tapowan', lat: 19.9872720045505, lng: 73.81093044681361, title: { en: 'Tapowan', hi: 'तपोवन', mr: 'तपोवन' }, icon: './static/img/temple.png' },
];

function addTouristPinpoints(placeName, language = 'en') {
    // Find the corresponding tourist place
    const place = TOURIST_PLACES.find((p) => p.name === placeName);

    if (!place) {
        console.error('Place not found:', placeName);
        return;
    }

    // Add a custom marker for the place
    addCustomMarker({ lat: place.lat, lng: place.lng }, place.title[language], place.icon);

    // Center the map on the added marker
    map.setCenter({ lat: place.lat, lng: place.lng });
    map.setZoom(28); // Adjust zoom level
}

// Function to update markers with the selected language
function updateMarkersLanguage(language) {
    // Clear existing markers
    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    PINPOINTS.forEach((pin) => {
        addCustomMarker({ lat: pin.lat, lng: pin.lng }, pin.title[language], pin.icon);
    });

    TOURIST_PLACES.forEach((place) => {
        addCustomMarker({ lat: place.lat, lng: place.lng }, place.title[language], place.icon);
    });
    handleZoomChanged();
}


function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (el.tagName === 'INPUT' && el.type === 'text') {
            el.setAttribute('placeholder', el.getAttribute(`data-${language}`));
        } else {
            el.textContent = el.getAttribute(`data-${language}`);
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('language-select').value = selectedLanguage;
    updateLanguage(selectedLanguage);
});

// Listen for changes in the language dropdown
document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    updateMarkersLanguage(selectedLanguage);
    updateLanguage(selectedLanguage);
});

// BACK BUTON CODE

function handleBackButtonClick() {
    // Reload the page to reset everything
    location.reload();
}

// Back button event listener
document.getElementById("backButton").addEventListener("click", handleBackButtonClick);

function clearDynamicMarkers() {
    markers.forEach((marker) => marker.setMap(null));
    markers = []; // Reset the array
}

// Handle submenu toggle with click (without hover)
document.querySelectorAll('.menu-list > li').forEach((menuItem) => {
    menuItem.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent event bubbling
        const submenu = this.querySelector('.submenu');

        // Close the search suggestions (empty the <ul> that holds them)
        const searchSuggestions = document.querySelector(".search-suggestions");
        if (searchSuggestions) {
            searchSuggestions.innerHTML = ""; // Clear suggestions
        }

        const searchInput = document.querySelector(".search-bar input");
        searchInput.innerHTML = ""; // Clear input content

        // Close all other submenus
        document.querySelectorAll('.submenu').forEach(otherSubmenu => {
            if (otherSubmenu !== submenu) {
                otherSubmenu.style.display = 'none';
            }
        });

        // If the current submenu exists, toggle its display
        if (submenu) {
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }

        // Close all submenus when the sidebar is closed   
        if (!sidebar.classList.contains("open")) {
            document.querySelectorAll('.submenu').forEach(submenu => {
                submenu.style.display = 'none'; // Hide all submenus
            });
        }
    });
});

// search bar code 

// -------------Search Logic Start-----
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");
    const searchSuggestions = document.createElement("ul");
    searchSuggestions.classList.add("search-suggestions");
    document.querySelector(".search-bar").appendChild(searchSuggestions);

    // Sidebar elements
    const sidebarItems = document.querySelectorAll("#sidebar .submenu li");

    // Get all tourist places from the "Tourist Places" menu
    const touristPlaces = Array.from(
        document.querySelectorAll("#tourist-list li")
    ).map(item => ({
        title: item.textContent.trim(),
        element: item,
    }));

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchSuggestions.innerHTML = ""; // Clear previous suggestions

        if (query) {
            // console.log("searchInput");

            // Search in Tourist Places
            const matchingTouristPlaces = touristPlaces.filter(place =>
                place.title.toLowerCase().includes(query)
            );

            matchingTouristPlaces.forEach(place => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = place.title;
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.addEventListener("click", () => {
                    searchInput.value = place.title; // Set the clicked value in the input
                    place.element.click(); // Trigger the place's click functionality
                    searchSuggestions.innerHTML = ""; // Clear suggestions
                    searchInput.classList.remove("with-border"); // Remove border after selection
                });
                searchSuggestions.appendChild(suggestionItem);
            });

            // Search in Sidebar
            sidebarItems.forEach(item => {
                if (item.textContent.toLowerCase().includes(query)) {
                    const suggestionItem = document.createElement("li");

                    // Trim the text content to remove leading/trailing spaces
                    suggestionItem.textContent = item.textContent.trim(); // Apply trim() here
                    suggestionItem.classList.add("suggestion-item");

                    suggestionItem.addEventListener("click", () => {
                        // Trim the clicked value as well before setting it to the search input
                        searchInput.value = suggestionItem.textContent.trim(); // Apply trim() here as well
                        item.click(); // Trigger the sidebar item's functionality
                        searchSuggestions.innerHTML = ""; // Clear suggestions
                        searchInput.classList.remove("with-border"); // Remove border after selection
                    });

                    searchSuggestions.appendChild(suggestionItem);
                }
            });

            // If there are suggestions, add the border to the input
            if (searchSuggestions.children.length > 0) {
                searchInput.classList.add("with-border");
            } else {
                searchInput.classList.remove("with-border");
            }

        } else {
            // If the input is empty, remove the border
            searchInput.classList.remove("with-border");
        }
    });

    // Function to zoom to a specific pin
    function zoomToPin(pin) {
        const marker = markers.find(
            m => m.getPosition().lat() === pin.lat && m.getPosition().lng() === pin.lng
        );
        if (marker) {
            map.setCenter(marker.getPosition()); // Center the map to the marker
            map.setZoom(28); // Adjust zoom level
            marker.setAnimation(google.maps.Animation.BOUNCE); // Make the marker bounce
            setTimeout(() => marker.setAnimation(null), 1500); // Stop bouncing after 1.5s
        }
    }
});



//  
// -------------Search Logic End-----


// Load the map
window.initMap = initMap;
let position;
let cooords = '';
// console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);