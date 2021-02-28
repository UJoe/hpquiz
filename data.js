window.score = [0, 0, 0, 0, 0];
window.houses = ["Mugli", "Griffendél", "Mardekár", "Hollóhát", "Hugrabug"];
window.colors = ["black", "red", "green", "skyblue", "yellow"];

window.quiz = [
  {
    q: "Az alábbiak közül ki lenne a legjobb barátod?",
    s: 1,
    a: [
      ["Hermione Granger", 1],
      ["Pansy Parkinson", 2],
      ["Luna Lovegood", 3],
      ["Hannah Abbott", 4],
      ["Ron Weasley", 1],
      ["Draco Malfoy", 2],
      ["Michael Corner", 3],
      ["Cedric Diggory", 4],
    ],
  },
  {
    q: "Melyik tantárgyat szereted a legjobban?",
    s: 2,
    a: [
      ["Sötét Varázslatok Kivédése", 1],
      ["Gyógynövénytan", 3],
      ["Legendás Lények Gondozása", 2],
      ["Mugliismeret", 4],
    ],
  },
  {
    q: "Mi lenne a foglalkozásod a varázslók világában?",
    s: 5,
    a: [
      ["mágiaügyi miniszter", 3],
      ["árus az Abszol Úton", 4],
      ["auror", 1],
      ["jós", 2],
    ],
  },
  {
    q: "Milyen állatot szeretnél a legjobban?",
    s: 3,
    a: [
      ["törpegolymók", 4],
      ["hippogriff", 3],
      ["főnix", 1],
      ["kígyó", 2],
    ],
  },
  {
    q: "Ki a példaképed?",
    s: 6,
    a: [
      ["Albus Dumbledore", 1],
      ["Harry Potter", 1],
      ["Perselus Piton", 2],
      ["Cedric Diggory", 4],
      ["Voldemort", 2],
      ["Kingsley Shacklebolt", 3],
    ],
  },
  {
    q: "Ha egy valami létezhetne a valóságban is, mit választanál?",
    s: 7,
    a: [
      ["láthatatlanná tévő köpeny", 1],
      ["bodzapálca", 2],
      ["Hollóháti diadémja", 3],
      ["csokibéka / Bogoly Berti-féle Mindenízű Drazsé", 4],
    ],
  },
  {
    q:
      "Az igazgató puskázáson kapta rajta az osztálytársadat dolgozatírás közben. Hogyan reagálsz?",
    s: 7,
    a: [
      ["Ő baja, miért puskázik, ha nem tud?", 2],
      ["Nagyon sajnáod, de nem mersz ellentmondani az igazagatónak.", 4],
      [
        "A dolgozat után megkérdezed, mi az, ami nem ment neki, és megpróbálod elnagyarázni neki, amit nem ért.",
        3,
      ],
      [
        "Amikor az igazagató szidni kezdi őt, te is felállsz a helyedről és a tanár szemébe nézve megvéded az osztálytársadat.",
        1,
      ],
    ],
  },
  {
    q:
      "Muglik között éltél eddig, de most levelet kaptál a Roxfortból, amiben az áll, hogy varázsló/boszorkány vagy és felvettek a varázslóiskolába! Hogyan reagálsz?",
    s: 10,
    a: [
      ["Tudtam, hogy menőbb vagyok, mint a többiek!", 2],
      ["Vajon mit lehet egy varázslóiskolában tanulni?", 3],
      ["Remélem, sok új barátot szerzek majd.", 4],
      ["Annyira várom, hogy varázsolhassak!", 1],
    ],
  },
  {
    q: "Miről szeretnéd, hogy az emberek emlékezzenek rád?",
    s: 10,
    a: [
      ["Bármilyen nehézséggel szembenézek, soha nem adom fel.", 1],
      ["Megértő és segítőkész vagyok, ezért rengeteg igaz barátom van.", 4],
      ["Okos és intelligens vagyok, nagy jövő vár rám.", 3],
      [
        "Mindig van társaságom és a jó ötletekért sem kell a szomszédba mennem.",
        2,
      ],
    ],
  },
  {
    q: "Melyik házba kerülnél legszívesebben?",
    s: 8,
    a: [
      ["Griffendél", 1],
      ["Mardekár", 2],
      ["Hollóhát", 3],
      ["Hugrabug", 4],
      ["Majd a Teszlek Süveg eldönti, hova való vagyok!", 0],
    ],
  },
];

/* 1.  Az alábbiak közül ki lenne a legjobb barátod? (1 p)
a) Hermione Granger (Griffendél)
b) Pansy Parkinson (Mardekár)
c) Luna Lovegood (Hollóhát)
d) Hannah Abbott (Hugrabug)
e) Ron Weasley (Griffendél)
f) Draco Malfoy (Mardekár)
g) Michael Corner (Hollóhát)
h) Cedric Diggory (Hugrabug)

2. Melyik tantárgyat szereted a legjobban? (2 p)
a) Sötét Varázslatok Kivédése (Griffendél)
b) Gyógynövénytan (Hollóhát)
c) Legendás Lények Gondozása (Mardekár)
d) Mugliismeret (Hugrabug)

3. Mi lenne a foglalkozásod a varáslók világában? (5 p)
a) mágiaügyi miniszter (Hollóhát)
b) árus az Abszol Úton (Hugrabug)
c) auror (Griffendél)
d) jós (Mardekár)

4. Milyen állatot szeretnél a legjobban? (3 p)
a) törpegolymók (Hugrabug)
b) hippogriff (Hollóhát)
c) főnix (Griffendél)
d) kígyó (Mardekár)

5. Ki a példaképed? (6 p)
a) Albus Dumbledore (Griffendél)
b) Harry Potter (Griffendél)
c) Perselus Piton (Mardekár)
d) Cedric Diggory (Hugrabug)
e) Voldemort (Mardekár)
f) Kingsley Shacklebolt (Hollóhá)

6. Ha egy valami létezhetne a valóságban is, mit választanál? (7 p)
a) láthatatlanná tévő köpeny (Griffendél)
b) bodzapálca (Mardekár)
c) Hollóháti diadémja (Hollóhát)
d) csokibéka/Bogoly Berti-féle Mindenízű Drazsé (Hugrabug)

7. Az igazgató puskázáson kapta rajta az osztálytársadat dolgotatírás közben. Hogyan reagálsz? (7 p)
a) Ő baja, miért puskázik, ha nem tud? (Mardekár)
b) Nagyon sajnáod, de nem mersz ellentmondani az igazagatónak. (Hugrabug)
c) A dolgozat után megkérdezed, mi az, ami nem ment neki, és megpróbálod elnagyarázni neki, amit nem ért. (Hollóhát)
d) Amikor az igazagató szidni kezdi őt, te is felállsz a helyedről és a tanár szemébe nézve megvéded az osztálytársadat. (Griffendél)

8. Muglik között éltél eddig, de most levelet kaptál a Roxfortból, amiben az áll, hogy varázsló/boszorkány vagy és felvettek a varázslóiskolába! Hogyan reagálsz? (10 p)
a) Tudtam, hogy menőbb vagyok, mint a többiek! (Mardekár)
b) Vajon mit lehet egy varázslóiskolában tanulni? (Hollóhát)
c) Remélem, sok új barátot szerzek majd. (Hugarbug)
d) Annyira várom, hogy varázsolhassak! (Griffendél)

9. Miről szeretnéd, hogy az emberek emlékezzenek rád? (10 p)
a) Bármilyen nehézséggel szembenézek, soha nem adom fel. (Griffendél)
b) Megértő és segítőkész vagyok, ezért rengeteg igaz barátom van. (Hugrabug)
c) Okos és intelligens vagyok, nagy jövő vár rám. (Hollóhát)
d) Mindig van társaságom és a jó ötletekért sem kell a szomszédba mennem. (Mardekár)

10. Melyik hába kerülnél legszívesebben? (8 p)
a) Griffendél
b) Mardekár
c) Hollóhát
d) Hugrabug
e) Majd a Teszlek Süveg eldönti, hova való vagyok! (0 p) */
