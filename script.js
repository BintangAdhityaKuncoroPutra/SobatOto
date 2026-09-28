const chatbox = document.getElementById("chatbox");
const answerArea = document.getElementById("answer-area");

let currentQuestion = 0;
let userFacts = [];


// =================================
// QUESTIONS
// =================================

const questions = [

    // {
    //     text: "Mari kita mulai. Manakah model motor yang Anda gunakan?",

    //     answers: [
    //         {
    //             text: "Honda BeAT",
    //             fact: "honda_beat"
    //         },
    //         {
    //             text: "Honda Vario",
    //             fact: "honda_vario"
    //         },
    //         {
    //             text: "Honda Scoopy",
    //             fact: "honda_scoopy"
    //         },
    //         {
    //             text: "Honda PCX 160",
    //             fact: "honda_pcx"
    //         },
    //         {
    //             text: "Yamaha NMAX",
    //             fact: "yamaha_nmax"
    //         },
    //         {
    //             text: "Yamaha Mio",
    //             fact: "yamaha_mio"
    //         },
    //         {
    //             text: "Lainnya",
    //             fact: "motor_lain"
    //         },
    //     ]
    // },

    {
        text: "Mari kita mulai. Apakah panel motor menyala?",

        images: [],

        answers: [

            {
                text: "Menyala",
                fact: "panel_menyala"
            },

            {
                text: "Menyala redup",
                fact: "panel_redup"
            },

            {
                text: "Tidak menyala",
                fact: "panel_mati"
            }

        ]
    },

    {
        text: "Cek tangki bensin secara langsung. Apakah terdapat bensin yang cukup?",

        images: [],

        answers: [

            {
                text: "Ya",
                fact: "ada_bensin"
            },

            {
                text: "Tidak",
                fact: "tidak_ada_bensin"
            }

        ]
    },

    {
        text: "Apakah starter motor berbunyi ketika ditekan?",

        images: [],

        answers: [

            {
                text: "Iya",
                fact: "starter_berbunyi"
            },

            {
                text: "Ya, mesin berputar tetapi tidak hidup",
                fact: "starter_memutar_tapi_mesin_tidak_hidup"
            },

            {
                text: "Tidak",
                fact: "starter_tidak_berbunyi"
            }

        ]
    },

    {
        text: "Apakah standar samping sudah dinaikkan?",

        images: [],

        answers: [

            {
                text: "Sudah",
                fact: "standar_samping_naik"
            },

            {
                text: "Belum",
                fact: "standar_samping_turun"
            }

        ]
    },

    {
        text: "Apakah klakson motor berfungsi?",

        images: [],

        answers: [

            {
                text: "Berbunyi",
                fact: "klakson_berbunyi"
            },

            {
                text: "Berbunyi lemah",
                fact: "klakson_lemah"
            },

            {
                text: "Tidak berbunyi",
                fact: "klakson_tidak_berbunyi"
            }

        ]
    },

    // {
    //     text: "Apakah mesin mati tiba-tiba mendadak saat berjalan?",

    //     images: [],

    //     answers: [

    //         {
    //             text: "Iya",
    //             fact: "mesin_mati_mendadak"
    //         },

    //         {
    //             text: "Tidak",
    //             fact: "mesin_tidak_mati_mendadak"
    //         }

    //     ]
    // },

    {
        text: "Apakah ada di antara lampu indikator ini yang menyala?",

        images: [
            "images/indikator.jpg"
        ],

        answers: [

            {
                text: "Nomor 1",
                fact: "indikator_mil"
            },

            {
                text: "Nomor 2",
                fact: "indikator_suhu"
            },

            {
                text: "Nomor 3",
                fact: "indikator_baterai"
            },

            {
                text: "Tidak ada",
                fact: "tidak_ada_indikator"
            }

        ]
    },

    {
        text: "Apakah rem responsif (langsung berhenti ketika ditekan)?",

        images: [],

        answers: [

            {
                text: "Iya",
                fact: "rem_responsif"
            },

            {
                text: "Tidak",
                fact: "rem_tidak_responsif"
            },

            {
                text: "Tidak ada tuas rem",
                fact: "tuas_rem_kosong"
            },

            {
                text: "Tuas terasa lembek",
                fact: "tuas_rem_lembek"
            }

        ]
    },

    {
        text: "Apakah ban terlihat kempis, retak, tertusuk, atau aus?",

        images: [],

        answers: [

            {
                text: "Ya, ada kerusakan atau keausan",
                fact: "ban_bermasalah"
            },

            {
                text: "Tidak",
                fact: "ban_tidak_bermasalah"
            }

        ]
    },

    {
        text: "Periksa kotak sekring di bawah pijakan kaki motor. Apakah sekring putus?",

        images: [
            "images/sekring.webp"
        ],

        answers: [

            {
                text: "Iya",
                fact: "sekring_putus"
            },

            {
                text: "Tidak",
                fact: "sekring_tidak_putus"
            }

        ]
    },

    {
        text: "Bagaimana kondisi motor sebelumnya saat dijalankan?",

        images: [],

        answers: [

            {
                text: "Stabil dan mudah dikendalikan",
                fact: "motor_stabil"
            },

            {
                text: "Stabil tetapi lambat",
                fact: "motor_lambat"
            },

            {
                text: "Tidak stabil",
                fact: "motor_tidak_stabil"
            },

        ]
    },

    {
        text: "Jika indikator mesin menyala, apakah indikator tetap menyala setelah mesin hidup?",
        images: [],
        answers: [
            {
                text: "Ya, tetap menyala",
                fact: "indikator_tetap_setelah_mesin_hidup"
            },
            {
                text: "Tidak atau saya tidak melihatnya",
                fact: "indikator_tidak_tetap"
            }
        ]
    },

    {
        text: "Apakah tombol starter pernah ditekan lebih dari sekitar 10 detik dalam satu percobaan?",
        images: [],
        answers: [
            {
                text: "Ya",
                fact: "starter_ditekan_terlalu_lama"
            },
            {
                text: "Tidak",
                fact: "starter_ditekan_normal"
            }
        ]
    },

    {
        text: "Saat indikator suhu menyala, apakah terlihat cairan pendingin bocor?",
        images: [],
        answers: [
            {
                text: "Ya, terlihat bocor",
                fact: "kebocoran_cairan_pendingin"
            },
            {
                text: "Tidak terlihat bocor atau tidak tahu",
                fact: "tidak_terlihat_kebocoran_pendingin"
            }
        ]
    },

    {
        text: "Apakah level oli mesin terlihat kurang saat diperiksa sesuai petunjuk manual?",
        images: [],
        answers: [
            {
                text: "Ya, kurang",
                fact: "oli_mesin_kurang"
            },
            {
                text: "Tidak atau belum tahu",
                fact: "oli_mesin_cukup_atau_tidak_diketahui"
            }
        ]
    },

    {
        text: "Apakah lampu rem menyala ketika tuas rem ditekan?",
        images: [],
        answers: [
            {
                text: "Ya, menyala",
                fact: "lampu_rem_menyala"
            },
            {
                text: "Tidak menyala",
                fact: "lampu_rem_tidak_menyala"
            }
        ]
    },

    {
        text: "Setelah standar samping dinaikkan, tuas rem ditarik, dan bahan bakar tersedia, apakah prosedur start sudah dilakukan tetapi mesin tetap tidak hidup?",
        images: [],
        answers: [
            {
                text: "Ya",
                fact: "prosedur_start_sudah_benar"
            },
            {
                text: "Belum atau tidak yakin",
                fact: "prosedur_start_belum_pasti"
            }
        ]
    }

];


// =================================
// START
// =================================

async function start() {

    await loadRules();

    addBotMessage(
        "Halo! Aku Oto"
    );

    addBotMessage(
        "Aku akan membantu mencari kemungkinan masalah pada motor kamu."
    );

    // addBotMessage(
    //     "Mari kita mulai. Apa yang terjadi dengan motor kamu?"
    // );

    showQuestion();
}


// =================================
// SHOW QUESTION
// =================================

function showQuestion() {

    if (currentQuestion >= questions.length) {
        diagnose();
        return;
    }

    const question = questions[currentQuestion];

    addBotMessage(
        question.text,
        question.images || []
    );

    answerArea.innerHTML = "";

    question.answers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = answer.text;

        button.onclick = () => {
            selectAnswer(answer);
        };

        answerArea.appendChild(button);
    });
}


// =================================
// USER ANSWER
// =================================

function selectAnswer(answer) {

    /*
       Add user's response to chat.
    */

    addUserMessage(answer.text);


    /*
       Add fact to knowledge base.
    */

    if (answer.fact) {

        userFacts.push(answer.fact);

    }


    currentQuestion++;


    /*
       Small delay makes it feel
       more like a chatbot.
    */

    answerArea.innerHTML = "";


    setTimeout(() => {

        showQuestion();

    }, 400);
}


// =================================
// BOT MESSAGE
// =================================

function addBotMessage(text, images = []) {

    const row = document.createElement("div");
    row.className = "message-row bot";

    const avatar = document.createElement("div");
    avatar.className = "bot-avatar";
    avatar.innerHTML = `
        <img src="images/oto-3d.png" alt="Maskot Oto">
    `;

    const message = document.createElement("div");
    message.className = "message";

    // Create image HTML
    let imageHTML = "";

    if (images.length > 0) {

        imageHTML = `
            <div class="question-images">
                ${images.slice(0, 2).map(image => `
                    <img
                        src="${image}"
                        class="question-image"
                        alt="Ilustrasi pertanyaan"
                    >
                `).join("")}
            </div>
        `;
    }

    message.innerHTML = `
        ${imageHTML}

        <div class="message-text">
            ${text}
        </div>

        <div class="message-time">
            ${getTime()}
        </div>
    `;

    row.appendChild(avatar);
    row.appendChild(message);

    chatbox.appendChild(row);

    scrollChat();
}


// =================================
// USER MESSAGE
// =================================

function addUserMessage(text) {

    const row =
        document.createElement("div");

    row.className =
        "message-row user";


    const message =
        document.createElement("div");

    message.className =
        "message";


    message.innerHTML = `
        ${text}

        <div class="message-time">
            ${getTime()}
        </div>
    `;


    row.appendChild(message);


    chatbox.appendChild(row);


    scrollChat();
}


// =================================
// DIAGNOSIS
// =================================

function diagnose() {

    const result = forwardChain(userFacts);
    const matchedRules = (result.matchedRules || [])
        .slice()
        .sort((a, b) => (b.priority || 0) - (a.priority || 0));
    const rule = matchedRules[0];

    if (!rule) {
        addBotMessage("Belum ada rule yang cocok dengan kombinasi jawaban ini.");
        addBotMessage(
            "Coba ulangi pemeriksaan dengan memastikan kondisi panel, bahan bakar, standar samping, dan suara starter diamati saat motor berada di tempat aman."
        );
        showRestartButton();
        return;
    }


    addBotMessage(
        "Terima kasih. Saya sudah menganalisis jawaban kamu."
    );


    setTimeout(() => {

        addBotMessage(
            `Kemungkinan masalahnya adalah <strong>${formatDiagnosis(rule.conclusion)}</strong>.`
        );

    }, 500);


    setTimeout(() => {

        addBotMessage(`<strong>Kenapa:</strong> ${rule.explanation}`);

        addBotMessage(
            `<strong>Langkah yang bisa dilakukan:</strong><ul>${rule.actions
                .map(action => `<li>${action}</li>`)
                .join("")}</ul>`
        );

        if (rule.source) {
            addBotMessage(`<small><strong>Dasar panduan:</strong> ${rule.source}</small>`);
        }

        showRestartButton();

    }, 1000);
}


// =================================
// RESTART
// =================================

function showRestartButton() {

    answerArea.innerHTML = "";


    const button =
        document.createElement("button");


    button.className =
        "answer-button";


    button.textContent =
        "Mulai pemeriksaan lagi";


    button.onclick =
        restart;


    answerArea.appendChild(button);
}


function restart() {

    currentQuestion = 0;

    userFacts = [];


    chatbox.innerHTML = "";


    addBotMessage(
        "Baik! Kita mulai pemeriksaan baru."
    );


    showQuestion();
}


// =================================
// UTILITIES
// =================================

function formatDiagnosis(text) {

    return text
        .replaceAll("_", " ")
        .replace(/\b\w/g, char =>
            char.toUpperCase()
        );
}


function getTime() {

    const now = new Date();

    return now.toLocaleTimeString(
        "id-ID",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


function scrollChat() {

    setTimeout(() => {

        chatbox.scrollTop =
            chatbox.scrollHeight;

    }, 50);
}


start();
