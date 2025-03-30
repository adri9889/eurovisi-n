const songs = {
    "Finland": { title: "Cha Cha Cha", artist: "Käärijä", spotify: "5RX8T3EoTuXcybAxe6oPAw", img: "./artists/finland.jpg", code: "FI" },
    "Sweden": { title: "Tattoo", artist: "Loreen", spotify: "1DmW5Ep6ywYwxc2HMT5BG6", img: "./artists/sweden.jpg", code: "SE" },
    "Norway": { title: "Queen of Kings", artist: "Alessandra", spotify: "14LdhxElpZS0rKVV4nxtdA", img: "./artists/norway.jpg", code: "NO" },
    "Poland": { title: "Solo", artist: "Blanka", spotify: "3xxjYOFR1y7By2wNDS51XV", img: "./artists/poland.jpg", code: "PL" },
    "Cyprus": { title: "Break a Broken Heart", artist: "Andrew Lambrou", spotify: "5dRAJ9UsR0qyMMKnonWewz", img: "./artists/cyprus.jpg", code: "CY" },
    "Greece": { title: "What They Say", artist: "Victor Vernicos", spotify: "7DYkoGwnTbEMGiNuoiB1gs", img: "./artists/greece.jpg", code: "GR" },
    "Israel": { title: "Unicorn", artist: "Noa Kirel", spotify: "6dUregFbvUNqHP5nphqesK", img: "./artists/israel.jpg", code: "IL" },
    "Czechia": { title: "My Sister's Crown", artist: "Vesna", spotify: "59md7R7fW5LjSbZITzzn3n", img: "./artists/czechia.jpg", code: "CZ" },
    "France": { title: "Évidemment", artist: "La Zarra", spotify: "18ZX6YaDSOopXPRvfIh8DM", img: "./artists/france.jpg", code: "FR" },
    "Malta": { title: "Dance (Our Own Party)", artist: "The Busker", spotify: "3natKRDYwMSPsLO9nX8y02", img: "./artists/malta.jpg", code: "MT" },
    "Ireland": { title: "We Are One", artist: "Wild Youth", spotify: "5AkEgrj433NMHrJvn7oASj", img: "./artists/ireland.jpg", code: "IE" },
    "Switzerland": { title: "Watergun", artist: "Remo Forrer", spotify: "4ih4oGbMt9b6PbKhTPbAmw", img: "./artists/switzerland.jpg", code: "CH" },
    "Croatia": { title: "Mama ŠČ!", artist: "Let 3", spotify: "7hcPebUUvJDRH6BhjZ5xEZ", img: "./artists/croatia.jpg", code: "HR" },
    "Netherlands": { title: "Burning Daylight", artist: "Mia Nicolai & Dion Cooper", spotify: "5pjp1jN7hitQTuSlT2jOep", img: "./artists/netherlands.jpg", code: "NL" },
    "Serbia": { title: "Samo Mi Se Spava", artist: "Luke Black", spotify: "7wLxoyWoClSUAlKGjaefQn", img: "./artists/serbia.jpg", code: "RS" },
    "Slovenia": { title: "Carpe Diem", artist: "Joker Out", spotify: "14ibwN44PVKuvEqLiaNkKu", img: "./artists/slovenia.jpg", code: "SI" },
    "Austria": { title: "Who the Hell Is Edgar?", artist: "Teya & Salena", spotify: "3gUC7tGDPVLOq42vvTUVdI", img: "./artists/austria.jpg", code: "AT" },
    "Iceland": { title: "Power", artist: "Diljá", spotify: "7wD30C4OrUzpj8ycl4PeSt", img: "./artists/iceland.jpg", code: "IS" },
    "Georgia": { title: "Echo", artist: "Iru", spotify: "6Dw7BShqIiGPq69VEQ2hpd", img: "./artists/georgia.jpg", code: "GE" },
    "Australia": { title: "Promise", artist: "Voyager", spotify: "0LeK6Ol47og0WdGwKegNUL", img: "./artists/australia.jpg", code: "AU" },
    "Albania": { title: "Duje", artist: "Albina & Familja Kelmendi", spotify: "2odhCHmCk14Plv4CFbEjRJ", img: "./artists/albania.jpg", code: "AL" },
    "Belgium": { title: "Because of You", artist: "Gustaph", spotify: "320jqrATpl9762bCQkmLDf", img: "./artists/belgium.jpg", code: "BE" },
    "Armenia": { title: "Future Lover", artist: "Brunette", spotify: "3MKTciJfDAJjO0SjFZQsVx", img: "./artists/armenia.jpg", code: "AM" },
    "San Marino": { title: "Like an Animal", artist: "Piqued Jacks", spotify: "7nHxIAj5achKMZnYNcbzfe", img: "./artists/san_marino.jpg", code: "SM" },
    "Moldova": { title: "Soarele și Luna", artist: "Pasha Parfeni", spotify: "6SO3p9lb1qiPMN1e7iHAjv", img: "./artists/moldova.jpg", code: "MD" },
    "Latvia": { title: "Aijā", artist: "Sudden Lights", spotify: "2XhLiOVoMTWR0LNkvVEYA5", img: "./artists/latvia.jpg", code: "LV" },
    "Ukraine": { title: "Heart of Steel", artist: "TVORCHI", spotify: "155yInH5aDNEI1MkcX6NNk", img: "./artists/ukraine.jpg", code: "UA" },
    "Estonia": { title: "Bridges", artist: "Alika", spotify: "3pvzk44kwy8u46wtglCKzd", img: "./artists/estonia.jpg", code: "EE" },
    "Portugal": { title: "Ai Coração", artist: "Mimicat", spotify: "2i2L1439P8JJRqp1jiKfUR", img: "./artists/portugal.jpg", code: "PT" },
    "UK": { title: "I Wrote a Song", artist: "Mae Muller", spotify: "0rO1zf0e7l8s7PRjchQpyn", img: "./artists/uk.jpg", code: "GB" },
    "Italy": { title: "Due Vite", artist: "Marco Mengoni", spotify: "5htUUUBlgHZ9fztWTTDEFm", img: "./artists/italy.jpg", code: "IT" },
    "Lithuania": { title: "Stay", artist: "Monika Linkytė", spotify: "6ouoSKOsxFa7wV6wMJHAOy", img: "./artists/lithuania.jpg", code: "LT" },
    "Spain": { title: "Eaea", artist: "Blanca Paloma", spotify: "1NzoDUn5bLqpS36GD00Smi", img: "./artists/spain.jpg", code: "ES" },
    "Germany": { title: "Blood & Glitter", artist: "Lord of the Lost", spotify: "4ZAqNhkOEi32zzrY5ybilV", img: "./artists/germany.jpg", code: "DE" },
    "Denmark": { title: "Breaking My Heart", artist: "Reiley", spotify: "0Bz7sidJkrYTnEQoYSxU0C", img: "./artists/denmark.jpg", code: "DK" },
    "Romania": { title: "D.G.T. (Off and On)", artist: "Theodor Andrei", spotify: "3gv3bOnIkZfyBVze4qKsUK", img: "./artists/romania.jpg", code: "RO" },
    "Azerbaijan": { title: "Tell Me More", artist: "TuralTuranX", spotify: "2pXSRhFrsoG57v4tZ36ogu", img: "./artists/azerbaijan.jpg", code: "AZ" }
};

let activeSongs = [...Object.keys(songs)];
let comparisonQueue = [];
let finalRanking = [];
let scores = new Map();
let totalBattles = 0;
const TARGET_BATTLES = 100;
const K_FACTOR = 32;
const flagCache = new Map();
const imageCache = new Map();

// Fallback online images
const fallbackImages = {
    "Finland": "https://via.placeholder.com/400x400?text=Finland Artist",
    "Sweden": "https://via.placeholder.com/400x400?text=Sweden Artist",
    "Norway": "https://via.placeholder.com/400x400?text=Norway Artist",
    "Poland": "https://via.placeholder.com/400x400?text=Poland Artist",
    "Cyprus": "https://via.placeholder.com/400x400?text=Cyprus Artist",
    "Greece": "https://via.placeholder.com/400x400?text=Greece Artist",
    "Israel": "https://via.placeholder.com/400x400?text=Israel Artist",
    "Czechia": "https://via.placeholder.com/400x400?text=Czechia Artist",
    "France": "https://via.placeholder.com/400x400?text=France Artist",
    "Malta": "https://via.placeholder.com/400x400?text=Malta Artist",
    "Ireland": "https://via.placeholder.com/400x400?text=Ireland Artist",
    "Switzerland": "https://via.placeholder.com/400x400?text=Switzerland Artist",
    "Croatia": "https://via.placeholder.com/400x400?text=Croatia Artist",
    "Netherlands": "https://via.placeholder.com/400x400?text=Netherlands Artist",
    "Serbia": "https://via.placeholder.com/400x400?text=Serbia Artist",
    "Slovenia": "https://via.placeholder.com/400x400?text=Slovenia Artist",
    "Austria": "https://via.placeholder.com/400x400?text=Austria Artist",
    "Iceland": "https://via.placeholder.com/400x400?text=Iceland Artist",
    "Georgia": "https://via.placeholder.com/400x400?text=Georgia Artist",
    "Australia": "https://via.placeholder.com/400x400?text=Australia Artist",
    "Albania": "https://via.placeholder.com/400x400?text=Albania Artist",
    "Belgium": "https://via.placeholder.com/400x400?text=Belgium Artist",
    "Armenia": "https://via.placeholder.com/400x400?text=Armenia Artist",
    "San Marino": "https://via.placeholder.com/400x400?text=San Marino Artist",
    "Moldova": "https://via.placeholder.com/400x400?text=Moldova Artist",
    "Latvia": "https://via.placeholder.com/400x400?text=Latvia Artist",
    "Ukraine": "https://via.placeholder.com/400x400?text=Ukraine Artist",
    "Estonia": "https://via.placeholder.com/400x400?text=Estonia Artist",
    "Portugal": "https://via.placeholder.com/400x400?text=Portugal Artist",
    "UK": "https://via.placeholder.com/400x400?text=UK Artist",
    "Italy": "https://via.placeholder.com/400x400?text=Italy Artist",
    "Lithuania": "https://via.placeholder.com/400x400?text=Lithuania Artist",
    "Spain": "https://via.placeholder.com/400x400?text=Spain Artist",
    "Germany": "https://via.placeholder.com/400x400?text=Germany Artist",
    "Denmark": "https://via.placeholder.com/400x400?text=Denmark Artist",
    "Romania": "https://via.placeholder.com/400x400?text=Romania Artist",
    "Azerbaijan": "https://via.placeholder.com/400x400?text=Azerbaijan Artist"
};

async function preloadFlagsAndImages() {
    console.log("Starting preload of flags and images...");
    const promises = Object.keys(songs).map(async (country) => {
        try {
            // Preload flags from flagicons.lipis.dev
            const flagUrl = `https://flagicons.lipis.dev/flags/4x3/${songs[country].code.toLowerCase()}.svg`;
            const flagImg = new Image();
            flagImg.crossOrigin = "anonymous";
            flagImg.src = flagUrl;
            await new Promise((resolve, reject) => {
                flagImg.onload = () => {
                    flagCache.set(country, flagUrl);
                    console.log(`Flag loaded successfully for ${country}: ${flagUrl}`);
                    resolve();
                };
                flagImg.onerror = (e) => {
                    const fallbackUrl = `https://via.placeholder.com/64x64?text=NO FLAG:${country}`;
                    flagCache.set(country, fallbackUrl);
                    console.error(`Flag failed for ${country}, error: ${e.message}, using fallback: ${fallbackUrl}`);
                    resolve();
                };
            });

            // Preload artist images from local folder with fallback to online
            const localImgUrl = songs[country].img;
            const artistImg = new Image();
            artistImg.src = localImgUrl;
            await new Promise((resolve, reject) => {
                artistImg.onload = () => {
                    imageCache.set(country, localImgUrl);
                    console.log(`Artist image loaded successfully for ${country}: ${localImgUrl}`);
                    resolve();
                };
                artistImg.onerror = (e) => {
                    const fallbackUrl = fallbackImages[country] || `https://via.placeholder.com/400x400?text=${country} Artist`;
                    imageCache.set(country, fallbackUrl);
                    console.error(`Local artist image failed for ${country}, error: ${e.message}, using fallback: ${fallbackUrl}`);
                    resolve();
                };
            });
        } catch (error) {
            console.error(`Error preloading assets for ${country}:`, error);
        }
    });
    await Promise.all(promises).catch(err => console.error("Preloading error:", err));
    console.log("Preloading complete. Flag cache:", Array.from(flagCache.entries()));
}

function generateTournament() {
    activeSongs = [...Object.keys(songs)];
    comparisonQueue = [];
    finalRanking = [];
    scores.clear();
    activeSongs.forEach(country => scores.set(country, 1500));
    createComparisonQueue();
    totalBattles = 0;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createComparisonQueue() {
    let allPairs = [];
    for (let i = 0; i < activeSongs.length - 1; i++) {
        for (let j = i + 1; j < activeSongs.length; j++) {
            allPairs.push([activeSongs[i], activeSongs[j]]);
        }
    }
    shuffleArray(allPairs);
    comparisonQueue = allPairs.slice(0, TARGET_BATTLES);
}

function showComparison() {
    if (comparisonQueue.length === 0 || totalBattles >= TARGET_BATTLES) {
        showRanking();
        return;
    }

    const [left, right] = comparisonQueue.shift();
    const leftImg = document.getElementById("left-img");
    const rightImg = document.getElementById("right-img");

    // Set image sources with fallback and debug
    leftImg.src = imageCache.get(left) || songs[left].img || `https://via.placeholder.com/400x400?text=${left} Artist`;
    console.log(`Left image source set to: ${leftImg.src} for ${left}`);
    document.getElementById("left-country").textContent = left.toUpperCase();
    document.getElementById("left-flag").src = flagCache.get(left) || `https://flagicons.lipis.dev/flags/4x3/${songs[left].code.toLowerCase()}.svg`;

    rightImg.src = imageCache.get(right) || songs[right].img || `https://via.placeholder.com/400x400?text=${right} Artist`;
    console.log(`Right image source set to: ${rightImg.src} for ${right}`);
    document.getElementById("right-country").textContent = right.toUpperCase();
    document.getElementById("right-flag").src = flagCache.get(right) || `https://flagicons.lipis.dev/flags/4x3/${songs[right].code.toLowerCase()}.svg`;

    // Ensure click events are assigned
    leftImg.onclick = () => selectWinner(left, right);
    rightImg.onclick = () => selectWinner(right, left);

    // Update song information with Spotify embeds
    document.getElementById("left-info").innerHTML = `
        <div>${songs[left].title} by ${songs[left].artist}</div>
        <iframe style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${songs[left].spotify}?utm_source=generator" 
                width="100%" height="80" frameBorder="0" 
                allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
    `;
    document.getElementById("right-info").innerHTML = `
        <div>${songs[right].title} by ${songs[right].artist}</div>
        <iframe style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${songs[right].spotify}?utm_source=generator" 
                width="100%" height="80" frameBorder="0" 
                allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
    `;

    const progress = Math.round((totalBattles / TARGET_BATTLES) * 100);
    document.getElementById("progress").textContent = `Progress: ${progress}%`;
}

function selectWinner(winner, loser) {
    const winnerScore = scores.get(winner);
    const loserScore = scores.get(loser);
    const expectedWinner = 1 / (1 + Math.pow(10, (loserScore - winnerScore) / 400));
    scores.set(winner, winnerScore + K_FACTOR * (1 - expectedWinner));
    scores.set(loser, loserScore + K_FACTOR * (0 - expectedWinner));
    totalBattles++;
    showComparison();
}

function showRanking() {
    const gameContainer = document.getElementById("game-container");
    const rankingContainer = document.getElementById("ranking-container");
    const list = document.getElementById("ranking-list");

    gameContainer.style.display = "none";
    rankingContainer.style.display = "block";
    list.innerHTML = "";

    Object.keys(songs).forEach(country => {
        if (!scores.has(country)) scores.set(country, 1500);
    });

    finalRanking = [...Object.keys(songs)].sort((a, b) => scores.get(b) - scores.get(a));

    finalRanking.forEach((country, index) => {
        const listItem = document.createElement("li");
        listItem.className = `ranking-item rank-${index + 1}`;
        listItem.innerHTML = `
            <span class="position">${String(index + 1).padStart(2, '0')}</span>
            <div class="country-name-container">
                <span class="country-name">${country.toUpperCase()}</span>
            </div>
            <img src="${flagCache.get(country) || `https://flagicons.lipis.dev/flags/4x3/${songs[country].code.toLowerCase()}.svg`}" alt="${country} flag" class="flag">
            <img src="${imageCache.get(country) || songs[country].img || `https://via.placeholder.com/400x400?text=${country} Artist`}" alt="${country} artist" class="country-img">
        `;
        list.appendChild(listItem);
    });

    // Add save functionality
    document.getElementById("save-ranking-btn").onclick = () => {
        html2canvas(document.querySelector("#ranking-container")).then(canvas => {
            const link = document.createElement("a");
            link.download = "eurovision-ranking.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };
}

window.onload = async () => {
    console.log("Window loaded, starting preloading...");
    await preloadFlagsAndImages();
    generateTournament();
    showComparison();

    document.getElementById("restart-btn").addEventListener("click", () => {
        generateTournament();
        showComparison();
    });

    document.getElementById("play-again-btn").addEventListener("click", () => {
        document.getElementById("ranking-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        generateTournament();
        showComparison();
    });
};