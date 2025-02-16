document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.querySelector(".btn-donate");

    donateButton.addEventListener("click", function () {
        alert("Redirecting to donation page...");
    });
});

// Language translations
const translations = {
    en: {
        // Navigation
        findSpecialist: "Find Specialist",
        donate: "Donate",
        aboutAutism: "About Autism",
        support: "Support",
        getInvolved: "Get Involved",
        autismHub: "Autism Hub",
        aboutUs: "About Us",
        
        // Main content
        title: "AUTISM CARE",
        subtitle: "Connect Beyond Barriers",
        description: "We empower adolescent girls with autism through inclusive support, resources, and community.",
        
        // Statistics
        stat1Value: "1 in 165",
        stat1Description: "Girls aged 5–17 in Canada are diagnosed with autism, compared to 1 in 42 boys, highlighting underdiagnosis in females.",
        stat2Value: "$1.2M - $4.7M",
        stat2Description: "The estimated lifetime cost of supporting an individual with ASD in Canada, depending on severity and disability levels.",
        stat3Value: "Higher Camouflaging in Females",
        stat3Description: "Autistic women often mask their traits, leading to increased mental health struggles, making diagnosis and support more challenging.",
    },
    fr: {
        // Navigation
        findSpecialist: "Trouver un Spécialiste",
        donate: "Faire un Don",
        aboutAutism: "À Propos de l'Autisme",
        support: "Soutien",
        getInvolved: "S'Impliquer",
        autismHub: "Centre Autisme",
        aboutUs: "À Propos de Nous",
        
        // Main content
        title: "SOINS DE L'AUTISME",
        subtitle: "Connecter Au-delà des Barrières",
        description: "Nous accompagnons les adolescentes autistes grâce à un soutien inclusif, des ressources et une communauté.",
        
        // Statistics
        stat1Value: "1 sur 165",
        stat1Description: "Les filles âgées de 5 à 17 ans au Canada reçoivent un diagnostic d'autisme, contre 1 sur 42 garçons, soulignant le sous-diagnostic chez les femmes.",
        stat2Value: "1,2M$ - 4,7M$",
        stat2Description: "Le coût estimé à vie pour soutenir une personne atteinte de TSA au Canada, selon la sévérité et les niveaux de handicap.",
        stat3Value: "Camouflage Plus Élevé chez les Femmes",
        stat3Description: "Les femmes autistes masquent souvent leurs traits, ce qui entraîne des difficultés accrues en santé mentale et rend le diagnostic et le soutien plus difficiles.",
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    updatePageContent();
    updateLanguageButton();
}

function updateLanguageButton() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        const lang = option.textContent.toLowerCase();
        if (lang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'fr' : 'en');
}

function updatePageContent() {
    // Update navigation
    document.querySelector('.btn-specialist').textContent = translations[currentLang].findSpecialist;
    document.querySelector('.btn-donate').textContent = translations[currentLang].donate;
    
    // Update nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[currentLang].aboutAutism;
    navLinks[1].textContent = translations[currentLang].support;
    navLinks[2].textContent = translations[currentLang].getInvolved;
    navLinks[3].textContent = translations[currentLang].autismHub;
    navLinks[4].textContent = translations[currentLang].aboutUs;
    
    // Update main content
    document.querySelector('.title').textContent = translations[currentLang].title;
    document.querySelector('.subtitle').textContent = translations[currentLang].subtitle;
    document.querySelector('.description').textContent = translations[currentLang].description;
    
    // Update statistics
    const statBoxes = document.querySelectorAll('.stat-box');
    statBoxes[0].querySelector('.stat-value').textContent = translations[currentLang].stat1Value;
    statBoxes[0].querySelector('.stat-description').textContent = translations[currentLang].stat1Description;
    
    statBoxes[1].querySelector('.stat-value').textContent = translations[currentLang].stat2Value;
    statBoxes[1].querySelector('.stat-description').textContent = translations[currentLang].stat2Description;
    
    statBoxes[2].querySelector('.stat-value').textContent = translations[currentLang].stat3Value;
    statBoxes[2].querySelector('.stat-description').textContent = translations[currentLang].stat3Description;
}

// Initialize the language button state
document.addEventListener('DOMContentLoaded', function() {
    updateLanguageButton();
});

// Chatbot functionality
document.addEventListener("DOMContentLoaded", function () {
    const chatbotContainer = document.getElementById("chatbot-container");
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatBody = document.getElementById("chatBody");
    const userInput = document.getElementById("userInput");
    const sendBtn = document.getElementById("sendBtn");

    // Enhanced Chatbot Responses with keywords
    const responses = {
        greeting: {
            keywords: ["hello", "hi", "hey", "greetings"],
            response: "Hello! How can I assist you with autism-related questions?"
        },
        autism_definition: {
            keywords: ["what is autism", "autism definition", "define autism", "explain autism", "about autism"],
            response: "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social skills. It's characterized by differences in how people interact, communicate, learn, and behave."
        },
        autism_signs: {
            keywords: ["signs", "symptoms", "traits", "characteristics", "how to know", "identify"],
            response: "Common signs of autism include:\n- Difficulty with social interaction\n- Repetitive behaviors\n- Delayed speech or nonverbal communication\n- Sensitivity to sensory input\n- Strong interests in specific topics\n- Difficulty with change in routines"
        },
        diagnosis: {
            keywords: ["diagnosis", "diagnosed", "test", "testing", "assessment", "evaluate", "screening"],
            response: "Autism is diagnosed through comprehensive evaluation by healthcare professionals, including:\n- Behavioral observation\n- Developmental screening\n- Medical tests\n- Parent interviews\n- Cognitive assessments\nEarly diagnosis typically occurs between ages 2-4."
        },
        treatment: {
            keywords: ["treatment", "therapy", "therapies", "help", "intervention", "support", "manage"],
            response: "Common autism treatments include:\n- Applied Behavior Analysis (ABA)\n- Speech Therapy\n- Occupational Therapy\n- Social Skills Training\n- Cognitive Behavioral Therapy\n- Educational Support\n- Sensory Integration Therapy"
        },
        toronto_specialists: {
            keywords: ["toronto", "gta", "ontario"],
            response: "Here are some autism specialists in Toronto:\n1. Surrey Place Centre (2 Surrey Place) - Comprehensive autism services\n2. Geneva Centre for Autism (112 Merton St) - Specialized programs and support\n3. Holland Bloorview Kids Rehabilitation Hospital - Expert pediatric care\n4. Toronto Autism Services (multiple locations)\n\nWould you like specific contact information for any of these centers?"
        },
        vancouver_specialists: {
            keywords: ["vancouver", "bc", "british columbia"],
            response: "Here are some autism specialists in Vancouver:\n1. BC Children's Hospital Autism Program - Comprehensive assessment and treatment\n2. Pacific Autism Family Network (3688 Cessna Drive) - Support services\n3. Vancouver Coastal Health Autism Services\n4. ACT - Autism Community Training\n\nWould you like more information about any of these services?"
        },
        montreal_specialists: {
            keywords: ["montreal", "quebec"],
            response: "Here are some autism specialists in Montreal:\n1. Montreal Children's Hospital Autism Spectrum Disorder Program\n2. Miriam Foundation (8160 Royden Road) - Specialized services\n3. Gold Centre - Expert autism care\n4. McGill University Health Centre Autism Program\n\nNeed specific contact details?"
        },
        support_groups: {
            keywords: ["support group", "community", "connect", "network", "meet"],
            response: "Support groups are available across Canada. They offer:\n- Peer support\n- Parent networking\n- Resource sharing\n- Educational workshops\n- Social activities\n\nWould you like to find support groups in your specific city?"
        },
        costs: {
            keywords: ["cost", "price", "expensive", "funding", "financial", "insurance", "money"],
            response: "Autism support costs in Canada vary:\n- Diagnosis: Often covered by provincial health insurance\n- Therapy: $50-200 per hour\n- Annual costs: Can range from $30,000 to $80,000\n- Government funding available through:\n  * Disability Tax Credit\n  * Provincial programs\n  * Special education funding"
        },
        education: {
            keywords: ["school", "education", "learning", "study", "academic", "classroom"],
            response: "Educational support for autism includes:\n- Individualized Education Plans (IEPs)\n- Special Education Programs\n- Educational Assistants\n- Modified Curriculum\n- Sensory-Friendly Spaces\n- Social Skills Training\n\nWould you like specific information about educational resources?"
        }
    };

    // Toggle chatbot visibility
    function toggleChatbot() {
        if (chatbotContainer.style.display === "none" || chatbotContainer.style.display === "") {
            chatbotContainer.style.display = "flex";
            chatbotIcon.style.display = "none";
        } else {
            chatbotContainer.style.display = "none";
            chatbotIcon.style.display = "flex";
        }
    }

    // Add event listeners
    chatbotIcon.addEventListener("click", toggleChatbot);
    document.querySelector(".chat-header button").addEventListener("click", toggleChatbot);
    sendBtn.addEventListener("click", handleUserInput);
    userInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") handleUserInput();
    });

    function handleUserInput() {
        let message = userInput.value.trim();
        if (message === "") return;

        appendMessage("user", message);
        userInput.value = "";

        // Simulate typing indicator
        const typingIndicator = document.createElement("div");
        typingIndicator.className = "bot-typing";
        typingIndicator.textContent = "Typing...";
        chatBody.appendChild(typingIndicator);

        setTimeout(() => {
            chatBody.removeChild(typingIndicator);
            let response = findResponse(message);
            appendMessage("bot", response);
        }, 1000);
    }

    function findResponse(message) {
        message = message.toLowerCase();
        
        // Check each response category
        for (let category in responses) {
            // Check if any keyword from the category matches the message
            if (responses[category].keywords.some(keyword => 
                message.includes(keyword) || 
                keyword.includes(message) ||
                message.split(' ').some(word => keyword.includes(word))
            )) {
                return responses[category].response;
            }
        }

        // If no match found, provide a helpful default response
        return "I'm here to help with questions about:\n" +
               "- Understanding autism and its signs\n" +
               "- Diagnosis and assessment process\n" +
               "- Treatment options and therapies\n" +
               "- Finding specialists in Canadian cities\n" +
               "- Support groups and resources\n" +
               "- Educational support\n" +
               "- Costs and funding\n\n" +
               "Please try rephrasing your question or ask about one of these topics.";
    }

    function appendMessage(sender, text) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender === "user" ? "user-message" : "bot-message");
        messageDiv.innerText = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Enhanced welcome message
    setTimeout(() => {
        appendMessage("bot", "Hello! I'm your autism support assistant. I can help you with:\n" +
            "- Information about autism\n" +
            "- Finding specialists in Canadian cities\n" +
            "- Treatment options and support services\n" +
            "- Educational resources\n" +
            "- Support groups and community connections\n\n" +
            "What would you like to know about?");
    }, 500);
});