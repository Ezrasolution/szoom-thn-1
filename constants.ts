import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'bm',
    name: 'Bahasa Melayu',
    icon: 'fa-book-open',
    color: 'bg-red-500',
    description: 'Belajar membaca, menulis dan bercerita dalam Bahasa Kebangsaan.',
    scoreMax: {
      title: 'Ujian scoreMAX Bahasa Melayu',
      description: 'Pilih set soalan di bawah untuk menguji penguasaan anda. Penilaian ini direka khas mengikut format terkini untuk murid Tahun 1.',
      links: [
        { label: 'Keluarga Saya', url: 'https://app.edcafe.ai/quiz/6789a352095fa27a05048225' },
        { label: 'Kehidupan Seharian', url: 'https://app.edcafe.ai/quiz/6789a3aa095fa27a0504828b' },
        { label: 'Sekolah Saya', url: 'https://app.edcafe.ai/quiz/6789a3ff095fa27a050482c3' },
        { label: 'Tempat Tinggal Saya', url: 'https://app.edcafe.ai/quiz/6789a43d095fa27a05048301' },
        { label: 'Kata Tunjuk', url: 'https://app.edcafe.ai/quizzes/67f1e03465338b12db295cce' },
        { label: 'Kata Tanya', url: 'https://app.edcafe.ai/quizzes/67f1e08365338b12db295d1d' },
        { label: 'Imbuhan Awalan', url: 'https://app.edcafe.ai/quizzes/67f1e0ca65338b12db295d79' },
        { label: 'Penanda Huruf Besar', url: 'https://app.edcafe.ai/quizzes/67f1e12265338b12db295ddf' },
        { label: 'Tanda Baca', url: 'https://app.edcafe.ai/quizzes/67f1e17d65338b12db295e45' }
      ]
    },
    topics: [
      { 
        id: 'bm1', 
        title: 'Huruf', 
        description: 'Mengenal abjad A hingga Z.', 
        content: 'Fokus pada bentuk dan sebutan huruf.',
        videoUrl: 'https://youtu.be/ls7rDtyQS3o?si=d1eCr4u4ZBNJzfp_'
      },
      { 
        id: 'bm2', 
        title: 'Mari Belajar 2 Suku Kata', 
        description: 'Membaca perkataan dengan dua suku kata mudah.', 
        content: 'Contoh: bola, buku, lori.',
        videoUrl: 'https://youtu.be/lhL__fGQ1_o'
      },
      { 
        id: 'bm3', 
        title: 'Literasi BM: Tolong Menolong', 
        description: 'Belajar nilai murni melalui pembacaan.', 
        content: 'Membaca teks pendek tentang membantu rakan.',
        videoUrl: 'https://youtu.be/l1EEXFsHzwY'
      },
      { 
        id: 'bm4', 
        title: 'Selamat Dalam Pesawat', 
        description: 'Kosa kata tentang pengangkutan udara.', 
        content: 'Mengenal peralatan dan keselamatan dalam pesawat.',
        videoUrl: 'https://youtu.be/PlhT9lirVqo'
      },
      { 
        id: 'bm5', 
        title: 'Tatabahasa: Kata Kerja', 
        description: 'Mengenal perbuatan dalam ayat.', 
        content: 'Contoh: makan, minum, lari.',
        videoUrl: 'https://youtu.be/WQejTelIrws'
      },
      { 
        id: 'bm6', 
        title: 'Kata Kerja Aktif', 
        description: 'Penggunaan kata kerja aktif dalam ayat.', 
        content: 'Memahami subjek yang melakukan perbuatan.',
        videoUrl: 'https://youtu.be/RSjLjJLd2Jg?si=Xv0pAmrt9rlxexXu'
      },
      { 
        id: 'bm7', 
        title: 'Membina Ayat', 
        description: 'Cara menyusun perkataan menjadi ayat lengkap.', 
        content: 'Subjek + Predikat.',
        videoUrl: 'https://youtu.be/EoTz8cofiIM?si=ZhAnBXrcP_GzHGv3'
      },
      { 
        id: 'bm8', 
        title: 'Kata Hubung', 
        description: 'Menyambung dua ayat tunggal.', 
        content: 'Contoh: dan, atau, tetapi.',
        videoUrl: 'https://youtu.be/LVT3Pox21ks?si=tSmuihZh-OWJdD86'
      },
      { 
        id: 'bm9', 
        title: 'Penjodoh Bilangan', 
        description: 'Kata untuk membilang benda.', 
        content: 'Contoh: buah, ekor, bilah, helai.',
        videoUrl: 'https://youtu.be/wYS5zGDviIM?si=-0hHDd6u7bzTRYAA'
      },
      { 
        id: 'bm10', 
        title: 'Pemahaman', 
        description: 'Teknik menjawab soalan berdasarkan petikan.', 
        content: 'Mencari maklumat dalam teks.',
        videoUrl: 'https://youtu.be/eVMgMrg0VVg?si=l1PwXOII8AV3mR_2'
      },
      { 
        id: 'bm11', 
        title: 'Peribahasa', 
        description: 'Mengenal ungkapan indah dengan makna tersirat.', 
        content: 'Contoh: ulat buku, ringan tulang.',
        videoUrl: 'https://youtu.be/aYAtm3NaXv8?si=ssnt2e92YxHG_VsZ'
      },
      { 
        id: 'bm12', 
        title: 'Imbuhan Awalan', 
        description: 'Mengenal imbuhan di awal kata dasar.', 
        content: 'Contoh: me-, ber-, ter-.',
        videoUrl: 'https://youtu.be/pHucoDjFmvU?si=4qyNEiYoJs3nQj-8'
      },
      { 
        id: 'bm13', 
        title: 'Kata Adjektif', 
        description: 'Menerangkan sifat atau keadaan.', 
        content: 'Contoh: besar, merah, wangi.',
        videoUrl: 'https://youtu.be/kKu3nAKTgW4?si=MtLZKW7A-uiyPGlF'
      },
      { 
        id: 'bm14', 
        title: 'Ayat Tunggal', 
        description: 'Mengenal struktur satu subjek and satu predikat.', 
        content: 'Ayat mudah tanpa kata hubung.',
        videoUrl: 'https://youtu.be/MPXl5_CnB-M?si=VUBVNJTvf2E0YpxP'
      },
      { 
        id: 'bm15', 
        title: 'Kata Nama Khas', 
        description: 'Nama khusus untuk benda, manusia and tempat.', 
        content: 'Contoh: Proton Saga, Ahmad, Muzium Negara.',
        videoUrl: 'https://youtu.be/QJSaEbIRGy0?si=qXksuXie_X-2Lp_k'
      },
      { 
        id: 'bm16', 
        title: 'Kata Sendi Nama', 
        description: 'Kata yang digunakan sebelum kata nama.', 
        content: 'Contoh: di, ke, dari, pada.',
        videoUrl: 'https://youtu.be/BZLHixozaKI?si=opuyCRd2xEKFxCTU'
      },
      { 
        id: 'bm17', 
        title: 'Ayat Majmuk', 
        description: 'Ayat yang mengandungi lebih dari satu ayat tunggal.', 
        content: 'Menggunakan kata hubung.',
        videoUrl: 'https://youtu.be/t3OqAQLsPh4?si=pYJPMog2l2r8P9We'
      },
      { 
        id: 'bm18', 
        title: 'Ayat Penyata', 
        description: 'Ayat yang menceritakan sesuatu.', 
        content: 'Memberi maklumat or keterangan.',
        videoUrl: 'https://youtu.be/uj7-aprGcnA?si=a2F3mMPL0n6aVTS2'
      }
    ]
  },
  {
    id: 'bi',
    name: 'English Language',
    icon: 'fa-language',
    color: 'bg-blue-500',
    description: 'Phonics, vocabulary and simple greetings in English.',
    scoreMax: {
      title: 'English Language scoreMAX Quiz',
      description: 'Practice your English skills with these interactive quiz sets. Improve your phonics, vocabulary, and grammar!',
      links: [
        { label: 'My Family', url: 'https://app.edcafe.ai/quiz/67899bf5310d4d1013c728aa' },
        { label: 'My Body', url: 'https://app.edcafe.ai/quiz/67899c5d310d4d1013c728df' },
        { label: 'Animals', url: 'https://app.edcafe.ai/quiz/67899cad310d4d1013c72915' },
        { label: 'My School', url: 'https://app.edcafe.ai/quiz/67899cf2310d4d1013c7293a' },
        { label: 'My Friends', url: 'https://app.edcafe.ai/quiz/67899d41310d4d1013c72967' },
        { label: 'Colors and Shapes', url: 'https://app.edcafe.ai/quiz/67899d78310d4d1013c72996' },
        { label: 'The Weather', url: 'https://app.edcafe.ai/quiz/67899e0b310d4d1013c729e1' },
        { label: 'Food and Drink', url: 'https://app.edcafe.ai/quiz/67899e76310d4d1013c72a31' },
        { label: 'Places Around Us', url: 'https://app.edcafe.ai/quiz/67899ed7310d4d1013c72a9b' }
      ]
    },
    topics: [
      { 
        id: 'bi1', 
        title: 'Phonics: s, a, t, p', 
        description: 'Learn basic phonemes and blending.', 
        content: 'Introduction to letter sounds and simple CVC words.',
        videoUrl: 'https://youtu.be/BELlZKpi1Zs'
      },
      { 
        id: 'bi2', 
        title: 'Greetings & Introductions', 
        description: 'How to say hello and introduce yourself.', 
        content: 'Hello, my name is... Nice to meet you.',
        videoUrl: 'https://youtu.be/tVlcKp3bWH8'
      },
      { 
        id: 'bi3', 
        title: 'Numbers 1-10', 
        description: 'Count from one to ten in English.', 
        content: 'Spelling and pronouncing numbers 1 to 10.',
        videoUrl: 'https://youtu.be/D0Ajq682yrA'
      },
      {
        id: 'bi4',
        title: 'Colours Around Us',
        description: 'Primary and secondary colours.',
        content: 'Red, blue, green, yellow, orange, purple.',
        videoUrl: 'https://youtu.be/u884wE7Xz4A'
      },
      {
        id: 'bi5',
        title: 'My Body Parts',
        description: 'Naming parts of the human body.',
        content: 'Head, shoulders, knees, toes, eyes, ears, mouth, nose.',
        videoUrl: 'https://youtu.be/j6g_YV3Srd0'
      },
      {
        id: 'bi6',
        title: 'My Family',
        description: 'Members of the family.',
        content: 'Father, mother, brother, sister, grandfather, grandmother.',
        videoUrl: 'https://youtu.be/giWiqvX9yBY'
      },
      {
        id: 'bi7',
        title: 'My School Stationery',
        description: 'Objects we find in the classroom.',
        content: 'Pencil, eraser, ruler, book, bag, chair, desk.',
        videoUrl: 'https://youtu.be/AS5nhK7WBB8'
      },
      {
        id: 'bi8',
        title: 'Action Verbs',
        description: 'Words that show action.',
        content: 'Jump, run, sit, stand, read, write.',
        videoUrl: 'https://youtu.be/hzo9me2f07Y'
      },
      {
        id: 'bi9',
        title: 'Pets & Animals',
        description: 'Common animals we see.',
        content: 'Cat, dog, bird, rabbit, fish, hamster.',
        videoUrl: 'https://youtu.be/wCfWmlnJl-A'
      },
      {
        id: 'bi10',
        title: 'Days of the Week',
        description: 'The seven days in a week.',
        content: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
        videoUrl: 'https://youtu.be/mXMofxtDPUQ'
      },
      {
        id: 'bi11',
        title: 'Feelings & Emotions',
        description: 'How do you feel today?',
        content: 'Happy, sad, angry, scared, hungry, thirsty.',
        videoUrl: 'https://youtu.be/l4WNrvVjiTw'
      },
      {
        id: 'bi12',
        title: 'The Solar System',
        description: 'Introduction to planets.',
        content: 'Earth, Sun, Moon, Stars.',
        videoUrl: 'https://youtu.be/mQrlgH97v94'
      }
    ]
  },
  {
    id: 'mat',
    name: 'Matematik',
    icon: 'fa-calculator',
    color: 'bg-green-500',
    description: 'Dunia nombor, operasi tambah and tolak yang menyeronokkan.',
    scoreMax: {
      title: 'Ujian scoreMAX Matematik',
      description: 'Latih kemahiran mengira and logik anda with set soalan Matematik ScoreMAX. Jom jadi bijak Matematik!',
      links: [
        { label: 'Nombor dan Operasi', url: 'https://app.edcafe.ai/quiz/6786118847a8b525321af1e7' },
        { label: 'Wang', url: 'https://app.edcafe.ai/quiz/6786120547a8b525321af2a4' },
        { label: 'Pengukuran', url: 'https://app.edcafe.ai/quiz/6786127c47a8b525321af323' },
        { label: 'Masa dan Waktu', url: 'https://app.edcafe.ai/quiz/678612f647a8b525321af377' },
        { label: 'Bentuk dan Ruang', url: 'https://app.edcafe.ai/quiz/6786138147a8b525321af422' },
        { label: 'Pola dan Urutan', url: 'https://app.edcafe.ai/quiz/678613fa47a8b525321af4c7' },
        { label: 'Statistik', url: 'https://app.edcafe.ai/quiz/6786143547a8b525321af529' },
        { label: 'Susun dan Banding Nombor', url: 'https://app.edcafe.ai/quizzes/67f78fc5a4bd2ce2530aa41f' },
        { label: 'Nombor Hingga 100', url: 'https://app.edcafe.ai/quizzes/67f78f6ca4bd2ce2530aa353' }
      ]
    },
    topics: [
      { 
        id: 'mat1', 
        title: 'Nombor hingga 10', 
        description: 'Kenali nombor 1 hingga 10 and sifar.', 
        content: 'Menyebut, membilang and menulis nombor.',
        videoUrl: 'https://youtu.be/BVK25_8vwrw?si=bGtwoeYqTKqG6OS9'
      },
      { 
        id: 'mat2', 
        title: 'Nombor hingga 20', 
        description: 'Mengenal nilai nombor belas.', 
        content: 'Membilang secara tertib menaik and menurun.',
        videoUrl: 'https://youtu.be/gpVj83xY8io?si=ZOt72wk6RVW40kQX'
      },
      { 
        id: 'mat3', 
        title: 'Kombinasi Nombor', 
        description: 'Memahami cara nombor digabungkan.', 
        content: 'Contoh: 2 and 3 menjadi 5.',
        videoUrl: 'https://youtu.be/4t-eLlrc-7o?si=ITRtWKs8HmSEoOFm'
      },
      { 
        id: 'mat4', 
        title: 'Kenali Tambah', 
        description: 'Konsep menggabungkan dua kumpulan.', 
        content: 'Simbol + and =.',
        videoUrl: 'https://youtu.be/Xloa6_bLzuw?si=NsRWo9KOLdh7XgS2'
      },
      { 
        id: 'mat5', 
        title: 'Tambah Mudah', 
        description: 'Latihan tambah dalam lingkungan 20.', 
        content: 'Menggunakan garis nombor.',
        videoUrl: 'https://youtu.be/1x9a4v8WtaY?si=lE-Arj8HxYhn9U7q'
      },
      { 
        id: 'mat6', 
        title: 'Kenali Tolak', 
        description: 'Konsep mencari baki or perbezaan.', 
        content: 'Simbol - and =.',
        videoUrl: 'https://youtu.be/OfI0x-la-n0?si=UzNpxYJm0i0fObcZ'
      },
      { 
        id: 'mat7', 
        title: 'Tolak Mudah', 
        description: 'Latihan tolak dalam lingkungan 20.', 
        content: 'Cara pemansuhan or garis nombor.',
        videoUrl: 'https://youtu.be/xWi9kU-jDW0?si=UIh5ohDXUNFbWMd5'
      },
      { 
        id: 'mat8', 
        title: 'Nombor hingga 100', 
        description: 'Kenali puluh and sa.', 
        content: 'Membilang 10-10 sehingga 100.',
        videoUrl: 'https://youtu.be/px917E-jtfY?si=fBqMkW8prScIcuzC'
      },
      { 
        id: 'mat9', 
        title: 'Banding Nombor', 
        description: 'Lebih banyak or lebih sedikit.', 
        content: 'Membandingkan nilai antara dua nombor.',
        videoUrl: 'https://youtu.be/-cgNguI0Ly8?si=LEEMcAEIYyqyNwfS'
      },
      { 
        id: 'mat10', 
        title: 'Pola Nombor', 
        description: 'Mengenal turutan nombor berulang.', 
        content: 'Melengkapkan pola nombor mudah.',
        videoUrl: 'https://youtu.be/pB5i_GPdt9U?si=YeIhREfWFmzV-9XR'
      },
      { 
        id: 'mat11', 
        title: 'Kenali Wang', 
        description: 'Mengenal syiling and wang kertas Malaysia.', 
        content: '5 sen, 10 sen, 20 sen, 50 sen and RM1, RM5, RM10.',
        videoUrl: 'https://youtu.be/8XPuZAOCYNA?si=Z5I6cTvJttmUD9I-'
      },
      { 
        id: 'mat12', 
        title: 'Waktu and Masa', 
        description: 'Kenali pagi, tengah hari, petang and malam.', 
        content: 'Hari dalam seminggu and bulan dalam setahun.',
        videoUrl: 'https://youtu.be/qHTtk-2w6_o?si=Ykdx_X67apPQ4r-J'
      },
      { 
        id: 'mat13', 
        title: 'Muka Jam', 
        description: 'Mengenal jarum jam and jarum minit.', 
        content: 'Menyebut waktu dalam jam and setengah jam.',
        videoUrl: 'https://youtu.be/y7s8t_-FoyU?si=S-TCxrmU6EzR2c-A'
      },
      { 
        id: 'mat14', 
        title: 'Panjang and Jisim', 
        description: 'Ukuran panjang and berat objek.', 
        content: 'Menggunakan unit bukan piawai.',
        videoUrl: 'https://youtu.be/gxOh-B25e8Y?si=3beKOIw9cJ4bQn7w'
      },
      { 
        id: 'mat15', 
        title: 'Isi Padu Cecair', 
        description: 'Membandingkan isi padu dalam bekas.', 
        content: 'Penuh, separuh or kosong.',
        videoUrl: 'https://youtu.be/WekVE6S06pU?si=rgN-yZmTXzcXXcxh'
      },
      { 
        id: 'mat16', 
        title: 'Bentuk 3D', 
        description: 'Mengenal kubus, kuboid, piramid, silinder, kon and sfera.', 
        content: 'Ciri-ciri bentuk ruang.',
        videoUrl: 'https://youtu.be/TvX2htIAq-M?si=p7bwsIr9AFN2T2cZ'
      },
      { 
        id: 'mat17', 
        title: 'Bentuk 2D', 
        description: 'Mengenal segi empat sama, segi empat tepat, segi tiga and bulatan.', 
        content: 'Ciri-ciri bentuk satah.',
        videoUrl: 'https://youtu.be/DrFWIUiKGtk?si=DTg2VpIs5ThSL53Z'
      },
      { 
        id: 'mat18', 
        title: 'Penyelesaian Masalah', 
        description: 'Selesaikan masalah harian matematik.', 
        content: 'Menggunakan kemahiran tambah and tolak.',
        videoUrl: 'https://youtu.be/x-8oIeSLKaI?si=0T2FOsMxpN2eOhcP'
      }
    ]
  },
  {
    id: 'sains',
    name: 'Sains',
    icon: 'fa-flask',
    color: 'bg-purple-500',
    description: 'Terokai alam sekitar, haiwan, and sains fizikal.',
    scoreMax: {
      title: 'Ujian scoreMAX Sains',
      description: 'Cabar diri anda with kuiz Sains ScoreMAX! Terokai keajaiban alam and sains melalui set soalan interaktif ini.',
      links: [
        { label: 'Tubuh Saya dan Deria', url: 'https://app.edcafe.ai/quiz/67899fb1310d4d1013c72b6c' },
        { label: 'Makhluk Hidup dan Bukan Hidup', url: 'https://app.edcafe.ai/quiz/6789a036310d4d1013c72bd0' },
        { label: 'Tumbuhan', url: 'https://app.edcafe.ai/quiz/6789a09b310d4d1013c72bff' },
        { label: 'Haiwan', url: 'https://app.edcafe.ai/quiz/6789a0e2095fa27a0504808c' },
        { label: 'Persekitaran', url: 'https://app.edcafe.ai/quiz/6789a129095fa27a0504809b' },
        { label: 'Air', url: 'https://app.edcafe.ai/quiz/6789a1a6095fa27a050480df' },
        { label: 'Matahari, Bulan dan Bintang', url: 'https://app.edcafe.ai/quiz/6789a273095fa27a05048175' }
      ]
    },
    topics: [
      { 
        id: 'sains1', 
        title: 'Benda Hidup & Bukan Hidup', 
        description: 'Mengenal perbezaan benda hidup and bukan hidup.', 
        content: 'Ciri-ciri: Bernafas, memerlukan air and makanan, bergerak, membesar and membiak.',
        videoUrl: 'https://youtu.be/Gb1KeHk7BsY?si=cW4Hb9uhObM38Bec'
      },
      { 
        id: 'sains2', 
        title: 'Ciri-ciri Benda Hidup', 
        description: 'Memahami keperluan asas benda hidup.', 
        content: 'Manusia, haiwan and tumbuhan memerlukan keperluan asas untuk terus hidup.',
        videoUrl: 'https://youtu.be/U-9crXA6gmA?si=RLN1MoNAFPdsgpBx'
      },
      { 
        id: 'sains3', 
        title: 'Deria Manusia', 
        description: 'Mengenal 5 deria manusia.', 
        content: 'Melihat (mata), Mendengar (telinga), Menghidu (hidung), Merasa (lidah), Menyentuh (kulit).',
        videoUrl: 'https://youtu.be/oBDMW8E1qWM?si=n-t73oS8qZbN_mP0'
      },
      { 
        id: 'sains4', 
        title: 'Bahagian Tubuh Haiwan', 
        description: 'Mengenal bahagian tubuh pelbagai haiwan.', 
        content: 'Contoh: paruh, sisik, berbulu halus, bertanduk.',
        videoUrl: 'https://youtu.be/mKR_MB5Cco0?si=jijQT8RT8t60g6Pk'
      },
      { 
        id: 'sains5', 
        title: 'Bahagian Tumbuhan', 
        description: 'Mengenal akar, batang, daun, bunga and buah.', 
        content: 'Setiap bahagian tumbuhan mempunyai ciri-ciri yang berbeza.',
        videoUrl: 'https://youtu.be/dmOxb7kMEe4?si=U0Hnki1rxBJ6Sv0h'
      },
      { 
        id: 'sains6', 
        title: 'Kepentingan Bahagian Tumbuhan', 
        description: 'Kenapa tumbuhan perlukan daun, batang and akar?', 
        content: 'Memahami fungsi setiap bahagian untuk kelangsungan hidup tumbuhan.',
        videoUrl: 'https://youtu.be/vBKD77Xi6Nw?si=wAX28fzKr9FXfyXE'
      },
      { 
        id: 'sains7', 
        title: 'Mengenal Magnet', 
        description: 'Daya tarikan magnet yang hebat.', 
        content: 'Magnet mempunyai pelbagai bentuk: bar, silinder, ladam, bentuk U, butang and cincin.',
        videoUrl: 'https://youtu.be/ihnLZL-wRRE?si=DcB6JuegxxkNs9hE'
      },
      { 
        id: 'sains8', 
        title: 'Tindakan Magnet', 
        description: 'Objek yang ditarik oleh magnet.', 
        content: 'Magnet boleh menarik objek besi or keluli.',
        videoUrl: 'https://youtu.be/8duJIgCJ4LU?si=vaQrfpH1Y8ezRH-0'
      },
      { 
        id: 'sains9', 
        title: 'Kutub Magnet', 
        description: 'Tarikan and tolakan kutub magnet.', 
        content: 'Kutub sama menolak, kutub berbeza menarik.',
        videoUrl: 'https://youtu.be/VOuUSF1RBMk?si=GINaaMMMJbb0pSuv'
      },
      { 
        id: 'sains10', 
        title: 'Objek Menyerap Air', 
        description: 'Mengenal bahan yang boleh menyerap air.', 
        content: 'Contoh: kain, kertas, span. Bahan tidak menyerap: plastik, logam.',
        videoUrl: 'https://youtu.be/Tpjsv36dUtA?si=mUKdMY_96328wz4F'
      },
      { 
        id: 'sains11', 
        title: 'Kepentingan Penyerapan', 
        description: 'Aplikasi penyerapan dalam kehidupan seharian.', 
        content: 'Kenapa kita gunakan tuala? Kenapa payung tidak menyerap air?',
        videoUrl: 'https://youtu.be/-m5NIku5KI4?si=g6YXw2uU5ticfj8U'
      },
      { 
        id: 'sains12', 
        title: 'Jenis Tanah', 
        description: 'Tanah Kebun, Tanah Liat and Tanah Pasir.', 
        content: 'Setiap jenis tanah mempunyai tekstur and kegunaan yang berbeza.',
        videoUrl: 'https://youtu.be/syQoHCjY9jk?si=hdjJvw4dU_oPTP0a'
      },
      { 
        id: 'sains13', 
        title: 'Kandungan Tanah', 
        description: 'Apa yang ada di dalam tanah?', 
        content: 'Ranting kayu, batu kecil, haiwan kecil, butir pasir.',
        videoUrl: 'https://youtu.be/yX0SIVkbYl8?si=J9-_eZn-MhU49pi0'
      },
      { 
        id: 'sains14', 
        title: 'Asas Teknologi (Bongkoh)', 
        description: 'Membina model menggunakan bongkoh geometri.', 
        content: 'Mengenal bentuk 3D: kubus, kuboid, silinder, kon, sfera, piramid.',
        videoUrl: 'https://youtu.be/__rBQp2u4A4?si=bjd0aOi1xOF9tOUR'
      }
    ]
  },
  {
    id: 'pi',
    name: 'Pendidikan Islam',
    icon: 'fa-star-and-crescent',
    color: 'bg-emerald-600',
    description: 'Mengenal rukun iman, rukun islam, huruf hijaiyyah, and adab harian.',
    scoreMax: {
      title: 'Ujian scoreMAX Pendidikan Islam',
      description: 'Uji pemahaman anda dalam asas fardu ain, rukun Islam, and rukun Iman melalui set soalan ScoreMAX.',
      links: [
        { label: 'Rukun Islam', url: 'https://app.edcafe.ai/quiz/6789a4dd095fa27a0504836e' },
        { label: 'Rukun Iman', url: 'https://app.edcafe.ai/quiz/6789a521095fa27a050483b3' },
        { label: 'Allah (Tuhan Yang Maha Esa)', url: 'https://app.edcafe.ai/quiz/6789a569095fa27a050483f6' },
        { label: 'Rasulullah dan Nabi-nabi', url: 'https://app.edcafe.ai/quiz/6789a5b6095fa27a05048444' },
        { label: 'Solat', url: 'https://app.edcafe.ai/quiz/6789a604095fa27a050484b5' },
        { label: 'Syahadah dan Solat', url: 'https://app.edcafe.ai/quizzes/6794bb584e58bd8b6099df42' },
        { label: 'Adab Berdoa', url: 'https://app.edcafe.ai/quizzes/6794bc2e4e58bd8b6099e066' }
      ]
    },
    topics: [
      {
        id: 'pi1',
        title: 'Rukun Iman dan Rukun Islam',
        description: 'Asas utama kepercayaan and amalan umat Islam.',
        content: 'Mempelajari 6 Rukun Iman and 5 Rukun Islam.',
        videoUrl: 'https://youtu.be/vbQ_Xo-8uwo?si=X0xu0rYx2nm6gHci'
      },
      {
        id: 'pi2',
        title: 'Huruf Hijaiyah Berbaris Fathah',
        description: 'Mengenal sebutan huruf Al-Quran with baris atas.',
        content: 'Latihan menyebut huruf Alif hingga Ya with bunyi "a".',
        videoUrl: 'https://youtu.be/oE94Je_6qLs?si=Q7TZcS1pNQjSIBsX'
      },
      {
        id: 'pi3',
        title: 'Huruf Hijaiyyah Berbaris Kasrah',
        description: 'Mengenal sebutan huruf Al-Quran with baris bawah.',
        content: 'Latihan menyebut huruf Alif hingga Ya with bunyi "i".',
        videoUrl: 'https://youtu.be/Cb7qO1ITC2k?si=_8gf_fXOsTVTO4iz'
      },
      {
        id: 'pi4',
        title: 'Bersih Diri Hiasi Diri',
        description: 'Kepentingan menjaga kebersihan tubuh badan.',
        content: 'Amalan kebersihan harian menurut Islam.',
        videoUrl: 'https://youtu.be/-4lUNGeYulM?si=6h-ZIpxg_zFaamwb'
      },
      {
        id: 'pi5',
        title: 'Al Quran Lafzul Jalalah',
        description: 'Cara menyebut nama Allah with betul.',
        content: 'Memahami makhraj and hukum tajwid Lafzul Jalalah.',
        videoUrl: 'https://youtu.be/N6ekiB9n4ZQ?si=m7Gveiq5DquleK0c'
      },
      {
        id: 'pi6',
        title: 'Istinjak',
        description: 'Cara membersihkan diri selepas membuang air.',
        content: 'Alat-alat and tatacara istinjak yang sempurna.',
        videoUrl: 'https://youtu.be/oMMt_1Ehhzk?si=Gzolv4QLFRnOOJUW'
      },
      {
        id: 'pi7',
        title: 'Jenis-Jenis Air Mutlak',
        description: 'Mengenal sumber air yang suci and menyucikan.',
        content: 'Air hujan, air laut, air sungai, air sumur and lain-lain.',
        videoUrl: 'https://youtu.be/1yLApa6enKI?si=7qqY5lPj94AAvEsM'
      },
      {
        id: 'pi8',
        title: 'Makrifat',
        description: 'Mengenal Allah sebagai pencipta alam.',
        content: 'Memahami kewujudan Allah melalui tanda-tanda kebesaran-Nya.',
        videoUrl: 'https://youtu.be/NBuUdOx_VLM?si=PYKwpuUC34CBdyMw'
      },
      {
        id: 'pi9',
        title: 'Belajar Tasydid (Sabdu)',
        description: 'Mengenal tanda penekanan pada huruf.',
        content: 'Cara membaca huruf yang bertanda sabdu.',
        videoUrl: 'https://youtu.be/7xQ2nJi1aPs?si=2-ovBeZWX122Apj-'
      },
      {
        id: 'pi10',
        title: 'Bacaan Tanwin',
        description: 'Mengenal baris dua di atas, bawah, and depan.',
        content: 'Bunyi "an", "in", and "un" dalam bacaan Al-Quran.',
        videoUrl: 'https://youtu.be/WkYNp4bvbN4?si=9zycyln3zIPJ8KxW'
      },
      {
        id: 'pi11',
        title: 'Taharah and Bahagian Air',
        description: 'Hukum-hukum bersuci and kategori air.',
        content: 'Perbezaan air mutlak, air musta\'mal, and air mutanajis.',
        videoUrl: 'https://youtu.be/pClYoJLtSLQ?si=93C765nt3D_4nyEE'
      },
      {
        id: 'pi12',
        title: 'Huruf Hijaiyyah Baris Tanwin Fathatain',
        description: 'Latihan intensif sebutan tanwin baris atas.',
        content: 'Memantapkan sebutan huruf with baris dua di atas.',
        videoUrl: 'https://youtu.be/k3pksouhroY?si=Gq7GsgcCyCXfrfMW'
      },
      {
        id: 'pi13',
        title: 'Fadhilat Berdoa',
        description: 'Kelebihan memohon pertolongan daripada Allah.',
        content: 'Kenapa kita perlu sentiasa berdoa dalam setiap keadaan.',
        videoUrl: 'https://youtu.be/fJF9LYkO1-0?si=Gj070I5CnwTiLOAL'
      },
      {
        id: 'pi14',
        title: 'Huruf Hijaiyyah Berbaris Dhommah',
        description: 'Mengenal sebutan huruf Al-Quran with baris depan.',
        content: 'Latihan menyebut huruf Alif hingga Ya with bunyi "u".',
        videoUrl: 'https://youtu.be/1-RgKfx2AHw?si=O5EvzWSTqD0w-G__'
      },
      {
        id: 'pi15',
        title: 'Huruf Hijaiyyah Bertanda Sukun (Mati)',
        description: 'Cara membaca huruf yang tiada berbaris.',
        content: 'Memahami fungsi tanda mati dalam penyambungan huruf.',
        videoUrl: 'https://youtu.be/h03uBwkpeZs?si=RdvHsJC9ti9tBZmu'
      },
      {
        id: 'pi16',
        title: 'Adab Sebelum Berdoa',
        description: 'Etika and cara yang betul ketika menghadap Allah.',
        content: 'Langkah-langkah untuk memastikan doa lebih afdal.',
        videoUrl: 'https://youtu.be/AfuthlZdVLo?si=6clhMCjYFn_hyN-k'
      },
      {
        id: 'pi17',
        title: 'Jawi',
        description: 'Mengenal tulisan jawi asas.',
        content: 'Menukar huruf rumi kepada huruf jawi yang mudah.',
        videoUrl: 'https://youtu.be/mEUW2-w27wk?si=u7K__HbGd_uhnbYz'
      },
      {
        id: 'pi18',
        title: 'Cara Berwuduk Kanak-Kanak Lelaki',
        description: 'Langkah-langkah menyucikan diri sebelum solat.',
        content: 'Tutorial lengkap tertib berwuduk untuk kanak-kanak.',
        videoUrl: 'https://youtu.be/puhS4fkW1XY?si=wbmUDU36VpyJdnAU'
      }
    ]
  },
  {
    id: 'ba',
    name: 'Bahasa Arab',
    icon: 'fa-language',
    color: 'bg-orange-500',
    description: 'Belajar kosa kata asas, huruf hijaiyyah, nombor and ucapan harian dalam Bahasa Arab.',
    scoreMax: {
      title: 'Ujian scoreMAX Bahasa Arab',
      description: 'Cabar diri anda with set soalan Bahasa Arab ScoreMAX. Mari uji kosa kata and kefahaman anda dalam perkenalan, keluarga, and sekolah!',
      links: [
        { label: 'Perkenalan Diri', url: 'https://app.edcafe.ai/quizzes/6794bc9c4e58bd8b6099e0ba' },
        { label: 'Keluarga Saya', url: 'https://app.edcafe.ai/quizzes/6794bcd34e58bd8b6099e111' },
        { label: 'Sekolah Saya', url: 'https://app.edcafe.ai/quizzes/6794bd104e58bd8b6099e12e' },
        { label: 'Anggota Badan', url: 'https://app.edcafe.ai/quizzes/6794bd6d4e58bd8b6099e17a' }
      ]
    },
    topics: [
      {
        id: 'ba1',
        title: 'Keluarga',
        description: 'Mengenal nama ahli keluarga dalam Bahasa Arab.',
        content: 'Mempelajari istilah bapa, ibu, abang and adik.',
        videoUrl: 'https://youtu.be/WPpAiGCAltE?si=2TAjy1Z736ldl3rI'
      },
      {
        id: 'ba2',
        title: 'Perbualan Bahasa Arab',
        description: 'Latihan komunikasi mudah untuk harian.',
        content: 'Belajar bertanya khabar and memperkenalkan diri.',
        videoUrl: 'https://youtu.be/7ioBtzP9gEo?si=cslQ2h00rM1GZSNO'
      },
      {
        id: 'ba3',
        title: 'Nama Hari-Hari',
        description: 'Menyebut nama hari dalam seminggu.',
        content: 'Latihan sebutan Ahad hingga Sabtu.',
        videoUrl: 'https://youtu.be/CdqsR4yiSfQ?si=NU4QGEokVGhPODp1'
      },
      {
        id: 'ba4',
        title: 'Tajuk Pertama: Huruf Ba',
        description: 'Mengenal huruf Ba with pelbagai baris.',
        content: 'Cara menulis and menyebut huruf Ba.',
        videoUrl: 'https://youtu.be/k-UcvdwlFP0?si=KYchLZQ8yNj58eDe'
      },
      {
        id: 'ba5',
        title: 'Hayya Nataarof Ilal Huruf: Ta',
        description: 'Mari mengenal huruf Ta.',
        content: 'Latihan menyebut and mengenal bentuk huruf Ta.',
        videoUrl: 'https://youtu.be/kSTY6nqp4bQ?si=u4wcoD3ja87uujEh'
      },
      {
        id: 'ba6',
        title: 'Huruf Zai',
        description: 'Mengenal huruf Zai dalam perkataan.',
        content: 'Sebutan and penulisan huruf Zai.',
        videoUrl: 'https://youtu.be/qhd4fQ5d5vU?si=zuWRPOt9HWwT5l20'
      },
      {
        id: 'ba7',
        title: 'Hari Dalam Seminggu',
        description: 'Nyanyian and sebutan nama-nama hari.',
        content: 'Memantapkan ingatan tentang turutan hari.',
        videoUrl: 'https://youtu.be/K1tOyDZUuNE?si=_hOB9CaSBjVfksWL'
      },
      {
        id: 'ba8',
        title: 'Huruf Alif',
        description: 'Huruf pertama dalam hijaiyyah.',
        content: 'Mengenal bunyi Alif with baris atas, bawah and depan.',
        videoUrl: 'https://youtu.be/wQfe05Vhzis?si=8NGgqH3L8b_FPe_f'
      },
      {
        id: 'ba9',
        title: 'Huruf Jim',
        description: 'Mengenal huruf Jim.',
        content: 'Contoh perkataan yang bermula with huruf Jim.',
        videoUrl: 'https://youtu.be/JhTttwp_xZc?si=QE1zxU7BsTFv8jxe'
      },
      {
        id: 'ba10',
        title: 'Madrasati',
        description: 'Sekolah saya yang tercinta.',
        content: 'Kosa kata berkaitan kawasan and bilik di sekolah.',
        videoUrl: 'https://youtu.be/Qzo4LfuMg7E?si=d5RBneFhiKwkZWMI'
      },
      {
        id: 'ba11',
        title: 'Nombor 1 - 10 Dalam Bahasa Arab',
        description: 'Belajar mengira wahid hingga asyarah.',
        content: 'Mengenal bentuk angka Arab and sebutannya.',
        videoUrl: 'https://youtu.be/zdmOjI-BC4E?si=-7LLASXPlM83lLs9'
      },
      {
        id: 'ba12',
        title: 'Huruf Sod\'',
        description: 'Mengenal huruf Sod\'.',
        content: 'Cara membezakan sebutan Sod with Sin.',
        videoUrl: 'https://youtu.be/wwDOuhDwggU?si=qLg-9pTuRGTouA9q'
      },
      {
        id: 'ba13',
        title: 'Huruf Tho and Zho',
        description: 'Mengenal dua huruf yang hampir sama bentuk.',
        content: 'Latihan menyebut Tho and Zho with makhraj betul.',
        videoUrl: 'https://youtu.be/iNTP3IBXj8I?si=iHkCTs0kr3Qyly7x'
      },
      {
        id: 'ba14',
        title: 'Kelengkapan Di Dalam Kelas',
        description: 'Nama alatan tulis and perabot kelas.',
        content: 'Contoh: meja, kerusi, papan tulis, pensel.',
        videoUrl: 'https://youtu.be/XGfaQ0cwj0k?si=WP4lm8QKgO9qzahr'
      },
      {
        id: 'ba15',
        title: 'Ucapan Harian Di Dalam Bahasa Arab',
        description: 'Selamat pagi, selamat petang and terima kasih.',
        content: 'Mempelajari adab berbicara dalam Bahasa Arab.',
        videoUrl: 'https://youtu.be/YzcojAwRg6I?si=t3FkME9mcjpXwliZ'
      },
      {
        id: 'ba16',
        title: 'ALIF BA TA pelbagai baris',
        description: 'Rumusan sebutan huruf hijaiyyah.',
        content: 'Latihan intensif makhraj huruf.',
        videoUrl: 'https://youtu.be/6RH3yMGv4I0?si=Jj2uktu_bjJax9wO'
      },
      {
        id: 'ba17',
        title: 'Anggota Tubuh',
        description: 'Mengenal bahagian badan manusia.',
        content: 'Sebut mata, telinga, tangan and kaki dalam Arab.',
        videoUrl: 'https://youtu.be/nGKZvQRuCCo?si=oDjRWy3VG8EACPKs'
      },
      {
        id: 'ba18',
        title: 'Ucapan Selamat (Nyanyian)',
        description: 'Belajar ucapan selamat melalui lagu.',
        content: 'Menghafal ucapan with cara yang menyeronokkan.',
        videoUrl: 'https://youtu.be/G6uN3FI09eQ?si=tl8TZBjlgiH6Dgdj'
      }
    ]
  }
];