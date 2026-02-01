// Monthly Newsletter Data and Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeBirthdays();
    initializeAuxiliary();
    initializeReminders();
    setupEventListeners();
    updateCurrentDate();
    setupPrintOptimizations();
});

// Birthday data in ascending order (by date)
const birthdays = [
    { date: "3 Feb", name: "Rangwanasha, Matshidiso Hendrica", auxiliary: "Relief Society" },
    { date: "11 Feb", name: "Van Tonder, Nthabiseng Masamoele Melita", auxiliary: "Relief Society" },
    { date: "13 Feb", name: "Swelihle Khumoetsile, Sithole", auxiliary: "Primary" },
    { date: "13 Feb", name: "Mahlangu, Eve", auxiliary: "Relief Society" },
    { date: "13 Feb", name: "Matwoane, Tshwanelo Christen", auxiliary: "Young Women" },
    { date: "13 Feb", name: "Chauke, Busisiwe Ellen", auxiliary: "Young Women" },
    { date: "14 Feb", name: "Kebede, Rita", auxiliary: "Relief Society" },
    { date: "15 Feb", name: "Mbangi, Charmanie", auxiliary: "Relief Society" },
    { date: "16 Feb", name: "Khupiso, Vuyisile Thando", auxiliary: "Elders Quorum" },
    { date: "20 Feb", name: "Mokaba, Kaelo", auxiliary: "Primary" },
    { date: "21 Feb", name: "Mofoka, Mapula", auxiliary: "Relief Society" },
    { date: "25 Feb", name: "Mokaba, George", auxiliary: "Elders Quorum" },
    { date: "26 Feb", name: "Tlhapane, Pamela Portia", auxiliary: "Relief Society" }
];

// Initialize birthdays section
function initializeBirthdays() {
    const container = document.getElementById('birthday-container');
    
    birthdays.forEach(birthday => {
        const card = document.createElement('div');
        card.className = 'birthday-card';
        card.innerHTML = `
            <div class="birthday-icon">
                <i class="fas fa-gift"></i>
            </div>
            <div>
                <div class="birthday-date">${birthday.date}</div>
                <div class="birthday-name">${birthday.name}</div>
                <div class="birthday-auxiliary">${birthday.auxiliary}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Auxiliary data with correct meeting times
const auxiliaryData = [
    {
        name: "Sunday School",
        icon: "fas fa-book-bible",
        message: "We meet on 1st & 3rd Sundays at 10:15 AM - 11:00 AM. This year (2026) we are studying the <strong>Old Testament</strong>. Join us as we learn from the foundational scriptures that testify of Christ."
    },
    {
        name: "Relief Society",
        icon: "fas fa-hands-helping",
        message: "Sisters, we meet on 2nd & 4th Sundays at 10:15 AM - 11:00 AM. We encourage all sisters to attend regularly for spiritual upliftment and sisterhood."
    },
    {
        name: "Elders Quorum",
        icon: "fas fa-users",
        message: "Brethren, we meet on 2nd & 4th Sundays at 10:15 AM - 11:00 AM. Join us for meaningful discussions on applying gospel principles in our daily lives."
    },
    {
        name: "Young Men",
        icon: "fas fa-hiking",
        message: "Young Men! We meet on 2nd & 4th Sundays at 10:15 AM - 11:00 AM. Come strengthen your testimony and build friendships with other young men."
    },
    {
        name: "Young Women",
        icon: "fas fa-heart",
        message: "Young Women! We meet on 2nd & 4th Sundays at 10:15 AM - 11:00 AM. Join us as we grow together in faith and prepare for our divine roles."
    },
    {
        name: "Primary",
        icon: "fas fa-child",
        message: "Primary meets every Sunday during the 2nd hour (10:15 AM - 11:00 AM). Children, we learn about Jesus through songs, stories, and activities!"
    }
];

// Initialize auxiliary section
function initializeAuxiliary() {
    const container = document.getElementById('auxiliary-container');
    
    auxiliaryData.forEach(aux => {
        const card = document.createElement('div');
        card.className = 'auxiliary-card';
        card.innerHTML = `
            <div class="auxiliary-name">
                <i class="${aux.icon} auxiliary-icon"></i>
                ${aux.name}
            </div>
            <p>${aux.message}</p>
        `;
        container.appendChild(card);
    });
}

// Reminders data with updated information
const reminders = [
    {
        title: "Budget Submission Deadline",
        icon: "fas fa-file-invoice-dollar",
        details: "All auxiliary 2026 budgets due to Bishopric by February 15th."
    },
    {
        title: "Mission Farewell",
        icon: "fas fa-globe-africa",
        details: "Simphiwe Mbhele called to Kenya Nairobi Mission. Farewell details to be announced."
    },
    {
        title: "Temple Trip Savings",
        icon: "fas fa-piggy-bank",
        details: "Start saving for May 9th temple trip. Small amounts regularly add up!"
    },
    {
        title: "Stake Conference",
        icon: "fas fa-users",
        details: "February 14-15 at Pimville Chapel. No regular services on Feb 15th."
    },
    {
        title: "Seminary Schedule",
        icon: "fas fa-graduation-cap",
        details: "Tuesday: 4:30 PM, Saturday: 12:00 PM. Youth ages 14-18."
    },
    {
        title: "Sunday Time Reminder",
        icon: "fas fa-clock",
        details: "2nd hour classes: 10:15 AM - 11:00 AM (45 minutes)"
    }
];

// Initialize reminders section
function initializeReminders() {
    const container = document.getElementById('reminders-container');
    
    reminders.forEach(reminder => {
        const card = document.createElement('div');
        card.className = 'reminder-card';
        card.innerHTML = `
            <div class="reminder-title">
                <i class="${reminder.icon}"></i>
                ${reminder.title}
            </div>
            <div class="reminder-details">${reminder.details}</div>
        `;
        container.appendChild(card);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Email button
    document.getElementById('email-btn').addEventListener('click', () => {
        const subject = encodeURIComponent(`Soweto Ward Newsletter - ${document.getElementById('current-month').textContent}`);
        const body = encodeURIComponent(`Please find attached the monthly newsletter for Soweto Ward.\n\nDownload link: [INSERT DOWNLOAD LINK HERE]`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    });
    
    // WhatsApp button
    document.getElementById('whatsapp-btn').addEventListener('click', () => {
        const text = encodeURIComponent(`Soweto Ward Newsletter for ${document.getElementById('current-month').textContent} is now available!`);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    });
    
    // Print button - add confirmation
    document.querySelector('[onclick="window.print()"]').addEventListener('click', function(e) {
        if (!confirm('Ready to print the newsletter? Make sure your printer is ready.')) {
            e.preventDefault();
        }
    });
    
    // Highlight current Sunday
    highlightCurrentSunday();
}

// Setup print optimizations
function setupPrintOptimizations() {
    // Update print header date
    const printDateElement = document.getElementById('print-current-date');
    if (printDateElement) {
        printDateElement.textContent = document.getElementById('current-month').textContent;
    }
    
    // Add print-specific classes before printing
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
        document.querySelectorAll('.section').forEach(el => {
            el.classList.add('print-section');
        });
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
        document.querySelectorAll('.section').forEach(el => {
            el.classList.remove('print-section');
        });
    });
}

// Update current date automatically
function updateCurrentDate() {
    const now = new Date();
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    
    // Update month display
    document.getElementById('current-month').textContent = `${currentMonth} ${currentYear}`;
    
    // Update print header
    const printDateElement = document.getElementById('print-current-date');
    if (printDateElement) {
        printDateElement.textContent = `${currentMonth} ${currentYear}`;
    }
}

// Highlight current Sunday in schedule
function highlightCurrentSunday() {
    const now = new Date();
    const currentDate = now.getDate();
    const currentDay = now.getDay(); // 0 = Sunday
    
    // If today is Sunday, highlight it
    if (currentDay === 0) {
        setTimeout(() => {
            document.querySelectorAll('.sunday-date').forEach(dateElement => {
                if (dateElement.textContent.includes(currentDate.toString())) {
                    dateElement.style.background = 'linear-gradient(135deg, var(--secondary-color), #e63946)';
                    dateElement.style.boxShadow = '0 4px 6px rgba(0,0,0,0.2)';
                }
            });
        }, 100);
    }
}

// Theme of the month
const monthlyThemes = [
    "For where two or three are gathered together in my name, there am I in the midst of them.",
    "Charity is the pure love of Christ, and it endureth forever.",
    "If ye have faith ye hope for things which are not seen, which are true.",
    "Let us cheerfully do all things that lie in our power.",
    "When ye are in the service of your fellow beings ye are only in the service of your God.",
    "I can do all things through Christ which strengtheneth me."
];

// Function to update theme (could be used for monthly rotation)
function updateMonthlyTheme(monthIndex) {
    const themeElement = document.getElementById('monthly-theme');
    if (themeElement) {
        themeElement.textContent = monthlyThemes[monthIndex % monthlyThemes.length];
    }
}

// Initialize with February theme (index 1 since arrays are 0-based)
updateMonthlyTheme(1);