const blogImages = {
    "january": {
        title: "January",
        images: ["pictures/Jan1.jpg", "pictures/Jan2.jpg", "pictures/Jan3.jpg"],
        caption: "The start of a new year always brings a sense of renewal. Though I wasn’t at SEVENTEEN’s concert, experiencing it through my cousin’s stories and videos made it feel almost real. Watching NANA Tour was a comforting escape—sometimes, music is the best form of healing. "
    },
    "february": {
        title: "February",
        images: ["pictures/Feb1.jpg", "pictures/Feb2.jpg", "pictures/Feb3.jpg", "pictures/Feb4.jpg"],
        caption: "This month was a quiet reminder that love comes in many forms. A simple flower from a friend on Valentine’s Day was a small yet meaningful gesture. Moments like these remind me that kindness, no matter how simple, leaves a lasting warmth."
    },
    "march": {
        title: "March",
        images: ["pictures/Mar1.jpg", "pictures/Mar2.jpg", "pictures/Mar3.jpg"],
        caption: "March felt overwhelming in ways I didn’t expect. There were days when my emotions got the best of me—like when I cried over a haircut that didn’t turn out the way I wanted. It may seem trivial, but it made me realize how much I struggle with change, even in small ways. Holy Week at Q-Park gave me a moment to pause, reflect, and reset. Sometimes, life moves too fast, and all we need is a little quiet to find our balance again. "
    },
    "april": {
        title: "April",
        images: ["pictures/Apr2.jpeg", "pictures/Apr11.jpeg"],
        caption: "April was a month of both pressure and accomplishment. Enrolling in TESDA’s Creative Web Design course was a step outside my comfort zone, but it was one of the best decisions I made. At the same time, PE rehearsals were intense—late nights, exhaustion, and endless practice sessions. It felt like too much at times, but performing after all that effort made it worthwhile. This month reminded me that growth often comes from discomfort, and every challenge carries a lesson."
    },
    "may": {
        title: "May",
        images: ["pictures/May1.jpg", "pictures/May2.jpg", "pictures/May3.jpg", "pictures/May5.jpg", "pictures/May4.jpg"],
        caption: "A month filled with milestones and celebrations. We surprised our mother on Mother’s Day, welcomed my father home after his time abroad, and celebrated both my TESDA graduation and my brother’s junior high graduation. These moments reminded me of the importance of family and the joy of witnessing each other’s achievements. "
    },
    "jun": {
        title: "June",
        images: ["pictures/Jun1.jpg", "pictures/Jun2.jpg", "pictures/Jun3.jpg"],
        caption: "The beginning of summer break was a chance to pause, rest, and reconnect. Sleep became a luxury I finally indulged in. Celebrating Father’s Day and spending time with friends made me appreciate the simple joys of slowing down."
    },
    "jul": {
        title: "July",
        images: ["pictures/Jul1.jpg"],
        caption: "Another year, another chapter. Turning a year older always brings a mix of emotions—gratitude for the past, excitement for what’s ahead, and a quiet reflection on the journey so far. This year, I’ve realized that growth isn’t always about big achievements but also about the small, everyday moments that shape who I am. With this new age comes new challenges, new lessons, and new opportunities to become a better version of myself."
    },
    "jul": {
        title: "July",
        images: ["pictures/Jul1.jpg", "pictures/Jul2.jpg"],
        caption: "Another year, another chapter. Turning a year older always brings a mix of emotions—gratitude for the past, excitement for what’s ahead, and a quiet reflection on the journey so far. This year, I’ve realized that growth isn’t always about big achievements but also about the small, everyday moments that shape who I am. With this new age comes new challenges, new lessons, and new opportunities to become a better version of myself."
    },
    "aug": {
        title: "August",
        images: ["pictures/Aug1.jpg", "pictures/Aug2.jpg"],
        caption: "August felt quiet, yet significant. The start of the school year marked another step forward, another chapter in this ongoing journey. Being in my third year of college now feels surreal, but growth often happens in the moments we least expect."
    },
    "sept": {
        title: "September",
        images: ["pictures/September1.jpg", "pictures/Septt1.jpg", "pictures/Sept1.jpg"],
        caption: "We celebrated my mother’s birthday with love and gratitude, but this month also brought loss. Saying goodbye to my uncle was difficult, yet in the midst of grief, family became a source of strength and comfort."
    },
    "oct": {
        title: "October",
        images: ["pictures/Oct1.jpg", "pictures/Oct2.jpg", "pictures/Oct3.jpg"],
        caption: "Grief does not fade overnight, but time allows healing to begin. This month, I found a sense of peace through my confirmation. It was a reminder that even in moments of sadness, faith and love remain constant."
    },
    "nov": {
        title: "November",
        images: ["pictures/Sept1.jpg"],
        caption: "Another farewell, another loss. Losing another uncle in such a short time was painful, but I found solace in knowing that love transcends absence. The memories we shared will always remain. "
    },
    "dec": {
        title: "December",
        images: ["pictures/Dec1.jpg", "pictures/Dec2.jpg", "pictures/Dec3.jpeg", "pictures/Dec4.jpeg", "pictures/Dec5.jpeg", "pictures/Dec6.jpeg", "pictures/Dec7.jpeg"],
        caption: "The end of the year was bittersweet—a time of warmth and celebration, yet also a reminder of those who were no longer with us. Despite the grief, I found comfort in the presence of family and friends. Spending time with loved ones, both old and new, became a quiet reminder that life is meant to be cherished.  "
    },
};

let currentMonth = "";
let currentIndex = 0;

function openModal(month) {
    currentMonth = month;
    currentIndex = 0;

    document.getElementById("modal-title").textContent = blogImages[month].title;
    document.getElementById("modal-caption").textContent = blogImages[month].caption;
    document.getElementById("modal-img").src = blogImages[month].images[currentIndex];

    document.getElementById("imageModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

function changeSlide(direction) {
    const images = blogImages[currentMonth].images;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("modal-img").src = images[currentIndex];
}
