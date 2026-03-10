const students = {
    "B210250": { rank: 1, name: "MUHAMMAD FAIZ", m1: 86, m2: 54, m3: 74, total: 214 },
    "B210228": { rank: 2, name: "MUHAMMED SHAHAL", m1: 86, m2: 41, m3: 75, total: 202 },
    "B210232": { rank: 3, name: "MUHAMMED SALMAN", m1: 79, m2: 43, m3: 73, total: 195 },
    "B210104": { rank: 4, name: "AJHAD. P", m1: 83, m2: 39, m3: 64, total: 186 },
    "B210111": { rank: 5, name: "MUHAMMED UVAIS. VM", m1: 69, m2: 46, m3: 68, total: 183 },
    "B210103": { rank: 6, name: "MUHAMMED JIYAD", m1: 60, m2: 52, m3: 69, total: 181 },
    "B210239": { rank: 7, name: "MUHAMMED YASIR", m1: 62, m2: 43, m3: 70, total: 175 },
    "B210105": { rank: 8, name: "MUHAMMED RAEES. TT", m1: 56, m2: 44, m3: 65, total: 165 },
    "B210110": { rank: 9, name: "MUHAMMED SWALIH", m1: 60, m2: 37, m3: 65, total: 162 },
    "B210236": { rank: 10, name: "MUHAMMED JUNAID", m1: 61, m2: 37, m3: 63, total: 161 },
    "B210241": { rank: 11, name: "MUHAMMED PP", m1: 50, m2: 44, m3: 61, total: 155 },
    "B210230": { rank: 12, name: "MUHAMMED SHAFI", m1: 54, m2: 42, m3: 56, total: 152 },
    "B210237": { rank: 13, name: "MUHAMMED AFSAL", m1: 65, m2: 45, m3: 40, total: 150 },
    "B210224": { rank: 14, name: "MUHAMMED FAHRUDHEEN RAZI", m1: 52, m2: 37, m3: 60, total: 149 },
    "B210112": { rank: 15, name: "MUHAMMED AMEEN. KP", m1: 38, m2: 37, m3: 65, total: 140 },
    "B210100": { rank: 16, name: "ABDUNNOOR. TV", m1: 40, m2: 41, m3: 50, total: 131 },
    "B210251": { rank: 17, name: "MUHAMMED SHAMIL OP", m1: 40, m2: 40, m3: 50, total: 130 },
    "B210062": { rank: 18, name: "MUHAMMED UWAIS TH", m1: 39, m2: 41, m3: 46, total: 126 },
    "B210234": { rank: 19, name: "SHAMMAS KC", m1: 36, m2: 35, m3: 54, total: 125 },
    "B210227": { rank: 20, name: "MUHAMMED ABDULLA RABEEH", m1: 37, m2: 35, m3: 53, total: 125 },
    "B210108": { rank: 21, name: "MUHAMMED ZIYAD. KV", m1: 35, m2: 38, m3: 38, total: 111 },
    "B210107": { rank: 22, name: "MUEENUDHEEN. K", m1: 36, m2: 35, m3: 39, total: 110 }
};

function findResult() {
    const inputField = document.getElementById("studentID");
    const id = inputField.value.trim().toUpperCase();
    const card = document.getElementById("resultCard");
    const error = document.getElementById("errorMsg");

    if (students[id]) {
        document.getElementById("resName").innerText = students[id].name;
        document.getElementById("resID").innerText = id;
        document.getElementById("resRank").innerText = students[id].rank;
        document.getElementById("m1").innerText = students[id].m1;
        document.getElementById("m2").innerText = students[id].m2;
        document.getElementById("m3").innerText = students[id].m3;
        document.getElementById("resTotal").innerText = students[id].total;
        
        card.style.display = "block";
        error.style.display = "none";
    } else {
        card.style.display = "none";
        error.style.display = "block";
    }
}