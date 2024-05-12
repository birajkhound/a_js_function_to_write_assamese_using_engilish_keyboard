function writeassamese(letter) {

    // vowel and symbol
    letter = letter.replace(/a/g, "অ");
    letter = letter.replace(/aa/g, "আ");
    letter = letter.replace(/i/g, "ই");
    letter = letter.replace(/ii/g, "ঈ");
    letter = letter.replace(/u/g, "উ");
    letter = letter.replace(/uu/g, "ঊ");
    letter = letter.replace(/wr/g, "ঋ");
    letter = letter.replace(/e/g, "এ");
    letter = letter.replace(/oi/g, "ঐ");
    letter = letter.replace(/o/g, "ও");
    letter = letter.replace(/ow/g, "ঔ");
    letter = letter.replace(/ওw/g, "ঔ");
    
    letter = letter.replace(/অঅ/g, "আ");
    letter = letter.replace(/ইই/g, "ঈ");
    letter = letter.replace(/উউ/g, "ঊ");
    
    letter = letter.replace(/ওই/g, "ঐ");
    letter = letter.replace(/ওউ/g, "ঔ"); 
    
    // ponctuation mark
    letter = letter.replace(/\|/g, "।");
    letter = letter.replace(/\//g, "।");
    letter = letter.replace(/।।/g, "॥");    
    
    //CONSONANTS WITH VOWEL
    letter = letter.replace(/ka/g, "ক");
    letter = letter.replace(/kঅ/g, "ক");
    letter = letter.replace(/kha/g, "খ");
    letter = letter.replace(/khঅ/g, "খ");
    letter = letter.replace(/ga/g, "গ");
    letter = letter.replace(/gঅ/g, "গ");
    letter = letter.replace(/ghঅ/g, "ঘ");
    letter = letter.replace(/nগ/g, "ঙ");
    letter = letter.replace(/chঅ/g, "চ");;
    letter = letter.replace(/sও/g, "ছ");
    letter = letter.replace(/jও/g, "জ");
    letter = letter.replace(/jhও/g, "ঝ");
    letter = letter.replace(/nyঅ/g, "ঞ");
    letter = letter.replace(/tও/g, "ট");
    letter = letter.replace(/thও/g, "ঠ");
    letter = letter.replace(/dও/g, "ড");
    letter = letter.replace(/dhও/g, "ঢ");
    letter = letter.replace(/nও/g, "ণ");
    letter = letter.replace(/tঅ/g, "ত");
    letter = letter.replace(/thঅ/g, "থ");
    letter = letter.replace(/dঅ/g, "দ");
    letter = letter.replace(/dhঅ/g, "ধ");
    letter = letter.replace(/nঅ/g, "ন");
    letter = letter.replace(/pও/g, "প");
    letter = letter.replace(/fও/g, "ফ");
    letter = letter.replace(/bও/g, "ব");
    letter = letter.replace(/vও/g, "ভ");
    letter = letter.replace(/mও/g, "ম");
    letter = letter.replace(/zও/g, "য");
    letter = letter.replace(/rও/g, "ৰ");
    letter = letter.replace(/lও/g, "ল");
    letter = letter.replace(/wb/g, "ৱ");
    letter = letter.replace(/xhঅ/g, "শ");
    letter = letter.replace(/xঅ/g, "ষ");
    letter = letter.replace(/sঅ/g, "স");
    letter = letter.replace(/hও/g, "হ");
    letter = letter.replace(/khy/g, "ক্ষ");
    letter = letter.replace(/dr/g, "ঢ়");
    letter = letter.replace(/dhr/g, "ড়");
    letter = letter.replace(/yও/g, "য়");

 // vowel pronounciation symbol
    letter = letter.replace(/A/g, "া"); 
    letter = letter.replace(/I/g, "ি");
    letter = letter.replace(/II/g, "ী");
    letter = letter.replace(/U/g, "ু");
    letter = letter.replace(/UU/g, "ূ");
    letter = letter.replace(/িি/g, "ী");
    letter = letter.replace(/ুু/g, "ূ");
    letter = letter.replace(/OI/g, "ৈ");
    letter = letter.replace(/োি/g, "ৈ");
    letter = letter.replace(/OW/g, "ৌ");
    letter = letter.replace(/োW/g, "ৌ");
    letter = letter.replace(/WR/g, "ৃ");
    letter = letter.replace(/Wড়্/g, "ৃ");
    letter = letter.replace(/E/g, "ে");
    letter = letter.replace(/O/g, "ো");
    letter = letter.replace(/`/g,"্");
    
    // anusvara and khandatta
    letter = letter.replace(/ht/g, "ৎ");

    //Anusvara
    letter = letter.replace(/nউ/g, "ং");
    
    // candrabindu 
    letter = letter.replace(/cn/g, "ঁ");

    // visarga
    letter = letter.replace(/bkh/g, "ঃ");

    // assamese number system
    letter = letter.replace(/0/g, "০");
    letter = letter.replace(/1/g, "১");
    letter = letter.replace(/2/g, "২");
    letter = letter.replace(/3/g, "৩");
    letter = letter.replace(/4/g, "৪");
    letter = letter.replace(/5/g, "৫");
    letter = letter.replace(/6/g, "৬");
    letter = letter.replace(/7/g, "৭");
    letter = letter.replace(/8/g, "৮");
    letter = letter.replace(/9/g, "৯");
    
    return letter;
    }
    let letter ="aamoI asamoIIyoA";
    console.log(writeassamese(letter));