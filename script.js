// DOM Elements
const langSwitch = document.getElementById('langSwitch');
const langLabel = document.getElementById('langLabel');
const searchInput = document.getElementById('searchInput');
const searchRows = document.querySelectorAll('.search-row');
const modal = document.getElementById('practiceModal');
const modalTitle = document.getElementById('modalTitle');
const modalQuestions = document.getElementById('modalQuestions');

// State
let currentLang = 'en'; // 'en' or 'ml'

// Language Data for Modals
const chapterQuestions = {
    1: [
        {
            en: "Who was the only female judge of Israel?",
            ml: "ഇസ്രായേലിലെ ഏക വനിതാന്യായാധിപൻ ആരായിരുന്നു?",
            answerEn: "Deborah [02:51]",
            answerMl: "ദെബോറ [02:51]"
        },
        {
            en: "Under which tree did Deborah used to sit to judge the people?",
            ml: "ദെബോറ എവിടെ ഇരുന്നാണ് ജനങ്ങൾക്ക് ന്യായവിധി നടത്തിയിരുന്നത്?",
            answerEn: "Under the Palm of Deborah between Ramah and Bethel [03:07]",
            answerMl: "രാമയ്ക്കും ബെഥേലിനും ഇടയിലുള്ള ദെബോറയുടെ ഈന്തപ്പനയുടെ ചുവട്ടിൽ [03:07]"
        },
        {
            en: "Who was the military commander Deborah summoned to lead the battle?",
            ml: "യുദ്ധം നയിക്കാൻ ദെബോറ വിളിച്ച സൈന്യാധിപൻ ആരായിരുന്നു?",
            answerEn: "Barak [03:19]",
            answerMl: "ബാരാക്ക് [03:19]"
        }
    ],
    2: [
        {
            en: "Who was the mother of Samuel?",
            ml: "ശമുവേലിന്റെ അമ്മയുടെ പേര് എന്തായിരുന്നു?",
            answerEn: "Hannah [06:12]",
            answerMl: "ഹന്നാ [06:12]"
        },
        {
            en: "In which temple did Samuel serve as a child?",
            ml: "ശമുവേൽ ബാലനായിരുന്നപ്പോൾ എവിടെയാണ് ശുശ്രൂഷ ചെയ്തിരുന്നത്?",
            answerEn: "The Temple at Shiloh under Eli the priest [10:24]",
            answerMl: "ശീലോവിലെ ദൈവാലയത്തിൽ ഏലി പുരോഹിതന്റെ കീഴിൽ [10:24]"
        },
        {
            en: "Who was the last judge of Israel?",
            ml: "ഇസ്രായേലിലെ അവസാനത്തെ ന്യായാധിപൻ ആരായിരുന്നു?",
            answerEn: "Samuel [08:20]",
            answerMl: "ശമുവേൽ [08:20]"
        },
        {
            en: "How did God call Samuel the first time?",
            ml: "ദൈവം ശമുവേലിനെ എങ്ങനെയാണ് വിളിച്ചത്?",
            answerEn: "God called him by name three times at night while he was sleeping in the temple [09:40]",
            answerMl: "ദൈവം രാത്രിയിൽ ഉറങ്ങുമ്പോൾ ദൈവാലയത്തിൽ വെച്ച് മൂന്ന് തവണ ശമുവേലിനെ പേര് വിളിച്ചു [09:40]"
        }
    ],
    3: [
        { en: "List the seven sacraments of the Church.", ml: "സഭയിലെ ഏഴ് കൂദാശകളുടെ പട്ടിക തയ്യാറാക്കുക." },
        { en: "Why is Holy Baptism considered the foundational sacrament?", ml: "വിശുദ്ധ മാമോദീസ അടിസ്ഥാന കൂദാശയായി കണക്കാക്കപ്പെടുന്നത് എന്തുകൊണ്ട്?" },
        { en: "Explain the significance of the Holy Qurbana.", ml: "വിശുദ്ധ കുർബാനയുടെ പ്രാധാന്യം വിശദീകരിക്കുക." }
    ],
    6: [
        // --- Section I: Objective ---
        { type: 'section', en: 'I. One-Word / Objective Questions', ml: 'I. ഒറ്റ വാക്ക് / ഒബ്ജക്ടീവ് ചോദ്യങ്ങൾ' },
        {
            en: "Who appeared to the disciples while they were hiding behind locked doors?",
            ml: "ശിഷ്യന്മാർ അടഞ്ഞ വാതിലുകൾക്ക് പിറകിൽ ഒളിച്ചിരിക്കുമ്പോൾ ആർ പ്രത്യക്ഷനായി?",
            answerEn: "The Risen Lord (Jesus Christ)",
            answerMl: "ഉയിർത്തെഴുന്നേറ്റ കർത്താവ് (യേശുക്രിസ്തു)"
        },
        {
            en: "What was the primary reason the disciples were hiding in fear and insecurity?",
            ml: "ശിഷ്യന്മാർ ഭയത്തോടും അരക്ഷിതത്വത്തോടും ഒളിച്ചിരുന്നതിന്റെ പ്രധാന കാരണം എന്ത്?",
            answerEn: "Due to the crucifixion of the Lord",
            answerMl: "കർത്താവിന്റെ ക്രൂശീകരണം നിമിത്തം"
        },
        {
            en: 'Complete the verse: "As my Father hath sent me, even so ___ I ___"',
            ml: 'വാക്യം പൂർത്തിയാക്കുക: "എന്റെ പിതാവ് എന്നെ അയച്ചതുപോലെ ഞാനും ___ ___ അയക്കുന്നു"',
            answerEn: '"...send I you"',
            answerMl: '"...നിങ്ങളെ അയക്കുന്നു"'
        },
        {
            en: "What was the first spiritual gift the Risen Lord gave to His disciples?",
            ml: "ഉയിർത്തെഴുന്നേറ്റ കർത്താവ് ശിഷ്യന്മാർക്ക് നൽകിയ ആദ്യ ആത്മീയ ദാനം എന്ത്?",
            answerEn: "The Holy Spirit and the authority to forgive sins",
            answerMl: "പരിശുദ്ധാത്മാവും പാപങ്ങൾ മോചിക്കാനുള്ള അധികാരവും"
        },
        {
            en: "Whose presence is described as a healing touch for the hopeless and the poor?",
            ml: "ആശയറ്റവർക്കും ദരിദ്രർക്കും സൗഖ്യത്തിന്റെ സ്പർശം ആരുടെ സാന്നിദ്ധ്യം?",
            answerEn: "Jesus Christ",
            answerMl: "യേശുക്രിസ്തു"
        },
        {
            en: "According to the lesson, what is an inseparable part of human life?",
            ml: "ഈ പാഠം അനുസരിച്ച്, മനുഷ്യജീവിതത്തിന്റെ അവിഭാജ്യ ഘടകം എന്ത്?",
            answerEn: "The Cross",
            answerMl: "കുരിശ്"
        },
        {
            en: "What was the disciples' reaction when they finally saw and recognized the Lord?",
            ml: "കർത്താവിനെ കണ്ടു തിരിച്ചറിഞ്ഞപ്പോൾ ശിഷ്യന്മാർ എങ്ങനെ പ്രതികരിച്ചു?",
            answerEn: "They were glad (they rejoiced)",
            answerMl: "അവർ സന്തോഷിച്ചു"
        },
        // --- Section II: Short Answer ---
        { type: 'section', en: 'II. Short Answer Questions', ml: 'II. ഹ്രസ്വ ഉത്തര ചോദ്യങ്ങൾ' },
        {
            en: "Describe the commission Jesus gave to His disciples during His first appearance.",
            ml: "ആദ്യ ദർശനത്തിൽ യേശു ശിഷ്യന്മാർക്ക് നൽകിയ ദൗത്യം വിവരിക്കുക.",
            answerEn: 'Jesus commissioned them: "As my Father hath sent me, even so send I you." He breathed on them, saying "Receive the Holy Spirit," giving them authority to forgive or retain sins.',
            answerMl: '"പിതാവ് എന്നെ അയച്ചതുപോലെ ഞാനും നിങ്ങളെ അയക്കുന്നു" എന്ന് യേശു പറഞ്ഞു. അവരുടെ മേൽ ഊതി "പരിശുദ്ധാത്മാവിനെ കൈക്കൊള്ളുവിൻ; ആരുടെ പാപങ്ങൾ നിങ്ങൾ മോചിക്കുന്നുവോ അവ മോചിക്കപ്പെട്ടിരിക്കുന്നു" എന്ന് കല്പിച്ചു.'
        },
        {
            en: "What is the significance of the 'Breath of Christ' in this chapter?",
            ml: "ഈ അധ്യായത്തിൽ 'ക്രിസ്തുവിന്റെ ശ്വാസ'ത്തിന്റെ പ്രാധാന്യം എന്ത്?",
            answerEn: "The act of Jesus breathing on the disciples symbolizes the bestowing of the Holy Spirit, empowering them for their future ministry and the mission of the Church.",
            answerMl: "യേശു ശിഷ്യന്മാരുടെ മേൽ ഊതിയത് പരിശുദ്ധാത്മാവ് നൽകുന്നതിന്റെ പ്രതീകമാണ്. ഇത് സഭയുടെ ദൗത്യത്തിനായി അവരെ പ്രാപ്തരാക്കി."
        },
        {
            en: "How does the lesson describe the Cross in relation to human life?",
            ml: "മനുഷ്യജീവിതവുമായി ബന്ധപ്പെട്ട് കുരിശിനെ ഈ പാഠം എങ്ങനെ വിവരിക്കുന്നു?",
            answerEn: "The Cross is an inseparable part of human life, representing both the suffering and the ultimate victory and solace found in Christ.",
            answerMl: "കുരിശ് മനുഷ്യജീവിതത്തിന്റെ അവിഭാജ്യ ഘടകമാണ്. ഇത് ക്രിസ്തുവിലൂടെയുള്ള ആശ്വാസത്തെയും വിജയത്തെയും സൂചിപ്പിക്കുന്നു."
        },
        // --- Section III: Fill in the Blanks ---
        { type: 'section', en: 'III. Fill in the Blanks', ml: 'III. ശൂന്യസ്ഥാനം പൂരിപ്പിക്കുക' },
        {
            en: "The disciples were gathered in a room with the doors _______ for fear of the Jews.",
            ml: "ശിഷ്യന്മാർ യഹൂദരെ ഭയന്ന് വാതിലുകൾ _______ ഒരു മുറിയിൽ ഒന്നിച്ചിരിക്കുന്നു.",
            answerEn: "Locked / Shut",
            answerMl: "അടഞ്ഞ"
        },
        {
            en: 'Jesus stood in the midst of them and said, "_______ be unto you."',
            ml: 'യേശു അവരുടെ നടുവിൽ നിന്ന് "നിങ്ങൾക്ക് _______ ഉണ്ടാകട്ടെ" എന്ന് പറഞ്ഞു.',
            answerEn: "Peace",
            answerMl: "സമാധാനം"
        },
        {
            en: "When he had so said, he shewed unto them his _______ and his side.",
            ml: "ഇത് പറഞ്ഞ ശേഷം അവൻ തന്റെ _______ ഉം വിലാവും അവർക്ക് കാണിച്ചു.",
            answerEn: "Hands",
            answerMl: "കൈകൾ"
        },
        {
            en: "Jesus is the _______ for the hopeless and the sad.",
            ml: "ആശയറ്റവർക്കും ദുഃഖിതർക്കും യേശു _______ ആണ്.",
            answerEn: "Solace / Healing",
            answerMl: "ആശ്വാസം / സൗഖ്യം"
        }
    ],
    18: [
        {
            en: "What is the significance of Promeyon-Sedra prayers in Orthodox worship?",
            ml: "ഓർത്തഡോക്സ് ആരാധനയിൽ പ്രൊമിയോൺ-സെദറ പ്രാർത്ഥനകളുടെ പ്രാധാന്യം എന്താണ്?",
            answerEn: "These prayers serve as a transition where the congregation repents for their sins and prepares to receive the holy body and blood of Jesus Christ.",
            answerMl: "വിശ്വാസികൾ തങ്ങളുടെ പാപങ്ങളെക്കുറിച്ച് അനുതപിക്കാനും വിശുദ്ധ കുർബാന സ്വീകരിക്കാനായി ഒരുങ്ങാനും ഈ പ്രാർത്ഥനകൾ സഹായിക്കുന്നു."
        },
        {
            en: "What is the meaning of the word ‘Hoosoyo?’",
            ml: "‘ഹൂസോയോ’ എന്ന വാക്കിന്റെ അർത്ഥമെന്താണ്?",
            answerEn: "The word 'Hoosoyo' means a 'prayer of expiation' or a 'prayer for the forgiveness of sins'.",
            answerMl: "‘ഹൂസോയോ’ എന്നാൽ 'പാപപരിഹാര പ്രാർത്ഥന' എന്നാണ് അർത്ഥം."
        },
        {
            en: "What is the relevance of reciting the Hoosoyo prayer in between the ‘Promeyon-Sedra’ prayers?",
            ml: "പ്രൊമിയോൺ-സെദറ പ്രാർത്ഥനകൾക്കിടയിൽ ഹൂസോയോ പ്രാർത്ഥന ചൊല്ലുന്നതിന്റെ പ്രസക്തി എന്താണ്?",
            answerEn: "It emphasizes the need for purification and seeking God's mercy before the solemn sacrifice.",
            answerMl: "വിശുദ്ധ ബലിക്ക് മുൻപായി ദൈവകൃപയ്ക്കും ശുദ്ധീകരണത്തിനുമുള്ള ആവശ്യകതയെ ഇത് ഓർമ്മിപ്പിക്കുന്നു."
        },
        {
            en: "Why should the congregation 'stand well' during the recital of these prayers?",
            ml: "ഈ പ്രാർത്ഥനകൾക്കിടയിൽ വിശ്വാസികൾ 'മര്യാദയോടും ഭക്തിയോടും കൂടി നിൽക്കണം' (സ്തൗമെൻ കാലോസ്) എന്ന് പറയുന്നത് എന്തുകൊണ്ട്?",
            answerEn: "It signals that the Promeyon is about to be read and calls for reverence and attention.",
            answerMl: "പ്രൊമിയോൻ വായന ആരംഭിക്കുന്നു എന്ന് സൂചിപ്പിക്കാനും, വിശ്വാസികൾ അതീവ ശ്രദ്ധയോടും ഭക്തിയോടും കൂടി നിൽക്കാനുമുള്ള ആഹ്വാനമാണിത്."
        },
        {
            en: "What does the priest say at the concluding part of the Promeyon-Sedra prayers?",
            ml: "പ്രൊമിയോൺ-സെദറ പ്രാർത്ഥനകളുടെ അവസാന ഭാഗത്ത് പുരോഹിതൻ എന്താണ് പ്രാർത്ഥിക്കുന്നത്?",
            answerEn: "The priest asks the Lord to purify the incense and to show tender mercy upon the souls of the faithful and the departed souls.",
            answerMl: "സമർപ്പിച്ച ധൂപത്തെ കർത്താവ് ശുദ്ധീകരിക്കണമെന്നും, വിശ്വാസികളോടും വാങ്ങിപ്പോയവരോടും കരുണ കാണിക്കണമെന്നും പുരോഹിതൻ പ്രാർത്ഥിക്കുന്നു."
        }
    ]
};

// Event Listeners
langSwitch.addEventListener('change', (e) => {
    currentLang = e.target.checked ? 'ml' : 'en';
    langLabel.textContent = e.target.checked ? 'മലയാളം' : 'English';
    updateLanguage();
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    searchRows.forEach(row => {
        // Look at the visible text within the element
        const textContent = row.textContent.toLowerCase();
        if (textContent.includes(query)) {
            row.classList.remove('d-none');
        } else {
            row.classList.add('d-none');
        }
    });

    // Handle empty state (optional: showing/hiding parent sections if empty could be added here)
});

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Functions
function updateLanguage() {
    const englishElements = document.querySelectorAll('.lang-en');
    const malayalamElements = document.querySelectorAll('.lang-ml');

    if (currentLang === 'en') {
        englishElements.forEach(el => el.style.display = '');
        malayalamElements.forEach(el => el.style.display = 'none');
    } else {
        englishElements.forEach(el => el.style.display = 'none');
        malayalamElements.forEach(el => el.style.display = '');
    }
}

function openModal(chapterNum) {
    // Populate Modal Title
    const titleEn = `Chapter ${chapterNum} - Practice Questions`;
    const titleMl = `അധ്യായം ${chapterNum} - പരിശീലന ചോദ്യങ്ങൾ`;
    modalTitle.innerHTML = `<span class="lang-en">${titleEn}</span><span class="lang-ml" style="display: none;">${titleMl}</span>`;
    
    // Populate Modal Questions
    const questions = chapterQuestions[chapterNum] || [];
    modalQuestions.innerHTML = ''; // clear

    if (questions.length === 0) {
        modalQuestions.innerHTML = '<li><span class="lang-en">No questions available.</span><span class="lang-ml" style="display: none;">ചോദ്യങ്ങളൊന്നും ലഭ്യമല്ല.</span></li>';
    } else {
        questions.forEach((q, idx) => {
            // Section header
            if (q.type === 'section') {
                const header = document.createElement('li');
                header.className = 'question-section-header';
                header.innerHTML = `<span class="lang-en">${q.en}</span><span class="lang-ml" style="display: none;">${q.ml}</span>`;
                modalQuestions.appendChild(header);
                return;
            }
            // Regular question
            const li = document.createElement('li');
            const hasAnswer = q.answerEn || q.answerMl;
            const answerId = `answer-${chapterNum}-${idx}`;
            li.innerHTML = `
                <span class="lang-en">${q.en}</span>
                <span class="lang-ml" style="display: none;">${q.ml}</span>
                ${hasAnswer ? `
                <div style="margin-top: 6px;">
                    <button class="btn-reveal" onclick="toggleAnswer('${answerId}')">
                        <span class="lang-en">▸ Show Answer</span>
                        <span class="lang-ml" style="display: none;">▸ ഉത്തരം കാണുക</span>
                    </button>
                    <div id="${answerId}" class="answer-block" style="display:none;">
                        <span class="lang-en">✅ ${q.answerEn || ''}</span>
                        <span class="lang-ml" style="display: none;">✅ ${q.answerMl || ''}</span>
                    </div>
                </div>` : ''}
            `;
            modalQuestions.appendChild(li);
        });
    }

    // Update visibility based on current lang
    updateLanguage();

    // Show modal
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function toggleAnswer(id) {
    const block = document.getElementById(id);
    if (!block) return;
    const isHidden = block.style.display === 'none';
    block.style.display = isHidden ? 'block' : 'none';

    // Flip the arrow on the button
    const btn = block.previousElementSibling;
    if (btn) {
        const enSpan = btn.querySelector('.lang-en');
        const mlSpan = btn.querySelector('.lang-ml');
        if (enSpan) enSpan.textContent = isHidden ? '▾ Hide Answer' : '▸ Show Answer';
        if (mlSpan) mlSpan.textContent = isHidden ? '▾ ഉത്തരം മറയ്ക്കുക' : '▸ ഉത്തരം കാണുക';
    }
}

// Initialization triggers
updateLanguage();
