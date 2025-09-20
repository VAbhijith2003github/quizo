const initialQuestions = [
  {
    qno: 1,
    question: "What is ILCI?",
    options: [
      {
        key: "A",
        value: "Indian languages corpora development project funded by TDIL",
      },
      {
        key: "B",
        value:
          "Multilingual parallel corpora project funded by European Commission",
      },
      {
        key: "C",
        value:
          "Indian languages Machine Translation project of Indian government",
      },
      {
        key: "D",
        value: "Speech technology initiative of India",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 2,
    question: "TDIL programme of the Government of India supports",
    options: [
      {
        key: "A",
        value: "Corpora development for Indian languages",
      },
      {
        key: "B",
        value: "Technology development for Indian languages",
      },
      {
        key: "C",
        value: "Resource creation for Indian languages",
      },
      {
        key: "D",
        value: "All of the above",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 3,
    question: "Which one of the following is the correct full form of IPA?",
    options: [
      {
        key: "A",
        value: "Innovative Phonetic Alphabet",
      },
      {
        key: "B",
        value: "Interactive Phonetic Alphabet",
      },
      {
        key: "C",
        value: "International Phonetic Alphabet",
      },
      {
        key: "D",
        value: "Internal Phonetic Alphabet",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 4,
    question:
      "In language acquisition studies, Mean Length of Utterance (MLU) is a measure which computes the length of an utterance. MLU was introduced by",
    options: [
      {
        key: "A",
        value: "Victoria Fromkin",
      },
      {
        key: "B",
        value: "Roger Brown",
      },
      {
        key: "C",
        value: "Jean Aitchison",
      },
      {
        key: "D",
        value: "Don Tucker",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 5,
    question:
      "The process that refers to the merging of forms following the loss of inflections is known as",
    options: [
      {
        key: "A",
        value: "Concatenation",
      },
      {
        key: "B",
        value: "Coalescence",
      },
      {
        key: "C",
        value: "Syncretism",
      },
      {
        key: "D",
        value: "Contraction",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 6,
    question:
      "The theory that explains the way a sound change moves through the vocabulary of a language is called",
    options: [
      {
        key: "A",
        value: "Lexical diffusion",
      },
      {
        key: "B",
        value: "Lexical convergence",
      },
      {
        key: "C",
        value: "Lexical overlapping",
      },
      {
        key: "D",
        value: "Lexical divergence",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 7,
    question:
      "The dictionary that provides information about the major stock of vocabulary of a language is called",
    options: [
      {
        key: "A",
        value: "Historical dictionary",
      },
      {
        key: "B",
        value: "Encyclopaedic dictionary",
      },
      {
        key: "C",
        value: "Pedagogic dictionary",
      },
      {
        key: "D",
        value: "Reference dictionary",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 8,
    question: "The art and craft of dictionary making is called as",
    options: [
      {
        key: "A",
        value: "Lexicology",
      },
      {
        key: "B",
        value: "Lexicostatistics",
      },
      {
        key: "C",
        value: "Lexicography",
      },
      {
        key: "D",
        value: "Lexicogrammar",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 9,
    question:
      "Who among the following pioneered the concept of dialect geography?",
    options: [
      {
        key: "A",
        value: "William Laboy and Joshua Fishman",
      },
      {
        key: "B",
        value: "Eugen Dieth and Harold Orton",
      },
      {
        key: "C",
        value: "George Wenker and Ferdinand Wrede",
      },
      {
        key: "D",
        value: "Einar Haugen and Charles Ferguson",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 10,
    question: "Computer processing of textual data is an example of",
    options: [
      {
        key: "A",
        value: "Unimodal processing",
      },
      {
        key: "B",
        value: "Machine Translation",
      },
      {
        key: "C",
        value: "Linguistic transcription",
      },
      {
        key: "D",
        value: "Bidimensional processing",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 11,
    question:
      "For a Context Free Language L defined by a Context Free Grammar G, inherent ambiguity is exemplified when",
    options: [
      {
        key: "A",
        value: "A perfect symbolism",
      },
      {
        key: "B",
        value: "a string in L has >1 parse for atleast one instance of G",
      },
      {
        key: "C",
        value: "G has incorrect rule-ordering",
      },
      {
        key: "D",
        value: "a string in L has 1 parse for every instance of G",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 12,
    question: "EGIDS means",
    options: [
      {
        key: "A",
        value: "Expansion Grade Intergenerational Disruption Scale",
      },
      {
        key: "B",
        value: "Expanded Graded Intergenerational Disturbing Scale",
      },
      {
        key: "C",
        value: "Expanded Graded Intergenerational Disruption Scale",
      },
      {
        key: "D",
        value: "Expansion Graded Intergenerational Distributing Scale",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 13,
    question:
      "In a Nigerian language, the suffix go'/ko' is used to mark pronominal possession as seen in the following data (Kidda 1985) loo-go' tugad-go' bugat-ko' aduk-ko'. Which of the following statements is true about the distribution of go'/ko'?",
    options: [
      {
        key: "A",
        value: "They are allomorphs",
      },
      {
        key: "B",
        value: "They are independent morphemes",
      },
      {
        key: "C",
        value: "They are appearing as free-variations",
      },
      {
        key: "D",
        value: "None of the above",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 14,
    question:
      "Which one of the following statements is a correct explanation of 'sound symbolism' in language?",
    options: [
      {
        key: "A",
        value: "A perfect symbolism",
      },
      {
        key: "B",
        value: "Metaphor in language",
      },
      {
        key: "C",
        value: "The constituent sounds of a word suggest its meaning",
      },
      {
        key: "D",
        value: "A system of symbols that is sound",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 15,
    question: "What do the names Washoe, Koko, Nim and Kanzi refer to?",
    options: [
      {
        key: "A",
        value: "Scripts of endangered languages",
      },
      {
        key: "B",
        value: "Machine Translation programs",
      },
      {
        key: "C",
        value: "Apes who learned sign language",
      },
      {
        key: "D",
        value: "Renowned psycholinguists",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 16,
    question: 'Who was the first to use the term "Indo-European"?',
    options: [
      {
        key: "A",
        value: "William Jones",
      },
      {
        key: "B",
        value: "Thomas Young",
      },
      {
        key: "C",
        value: "Max Mueller",
      },
      {
        key: "D",
        value: "Rudolf Ross",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 17,
    question:
      "Which one of the following is the correct place and manner of articulation of the speech sound /g/?",
    options: [
      {
        key: "A",
        value: "Voiceless aspirated velar stop",
      },
      {
        key: "B",
        value: "Voiced palatal stop",
      },
      {
        key: "C",
        value: "Voiced unaspirated velar stop",
      },
      {
        key: "D",
        value: "Voiceless retroflex stop",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 18,
    question:
      "Which of the following types of formal grammars do not figure in the Chomsky Hierarchy?",
    options: [
      {
        key: "A",
        value: "Unrestricted Phrase structure Grammar",
      },
      {
        key: "B",
        value: "Context Free Grammar",
      },
      {
        key: "C",
        value: "Regular grammar",
      },
      {
        key: "D",
        value: "Transformational Grammar",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 19,
    question:
      "Which one of the following is a correct set of four parts of speech (pada) according to the Sanskrit grammarians?",
    options: [
      {
        key: "A",
        value: "pratipadika, samasa, sandhi, nipata",
      },
      {
        key: "B",
        value: "krta, taddhita, samasa, nipata",
      },
      {
        key: "C",
        value: "nama, akhyata, upasarga, nipata",
      },
      {
        key: "D",
        value: "krta. pratipadika. samasa. sandhi",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 20,
    question: "The concept Zone of Proximal Development (ZPD) was proposed by",
    options: [
      {
        key: "A",
        value: "Lev Vygotsky",
      },
      {
        key: "B",
        value: "Lam Selinker",
      },
      {
        key: "C",
        value: "Robert Lado",
      },
      {
        key: "D",
        value: "Stephen Krashen",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 21,
    question:
      "Which article of Indian Constitution stipulates that the official language of the Union shall be Hindi in Devanagari script?",
    options: [
      {
        key: "A",
        value: "343",
      },
      {
        key: "B",
        value: "344",
      },
      {
        key: "C",
        value: "345",
      },
      {
        key: "D",
        value: "346",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 22,
    question: "The concept 'deixis' refers to",
    options: [
      {
        key: "A",
        value: "Spatial dimension of a situation",
      },
      {
        key: "B",
        value: "Both spatial and temporal aspects",
      },
      {
        key: "C",
        value: "Temporal aspect of an expression",
      },
      {
        key: "D",
        value: "Movement of an object in space and time",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 23,
    question:
      "In dictionary making, the meaning of an entry word is expressed in another single word both of which are non-descriptive. This phenomenon is known as",
    options: [
      {
        key: "A",
        value: "Run-on entry",
      },
      {
        key: "B",
        value: "Circularity",
      },
      {
        key: "C",
        value: "Labeling",
      },
      {
        key: "D",
        value: "Cross-reference",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 24,
    question:
      "The code used in relatively formal, educated situation not to be reliant for its meaningfulness or extralinguistic contexts is referred to as",
    options: [
      {
        key: "A",
        value: "Elaborated code",
      },
      {
        key: "B",
        value: "Restricted code",
      },
      {
        key: "C",
        value: "Langue",
      },
      {
        key: "D",
        value: "Speech repertoire",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 25,
    question: "The linguistic system of an individual speaker is called",
    options: [
      {
        key: "A",
        value: "Familylect",
      },
      {
        key: "B",
        value: "Sociolect",
      },
      {
        key: "C",
        value: "Idiolect",
      },
      {
        key: "D",
        value: "Dialect",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 26,
    question: "Which one of the following is a correct description of abhidha?",
    options: [
      {
        key: "A",
        value: "It is an implied meaning of word",
      },
      {
        key: "B",
        value: "It is a direct meaning of word",
      },
      {
        key: "C",
        value: "It is an intentional meaning of word",
      },
      {
        key: "D",
        value: "It is a suggested meaning of word",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 27,
    question: 'The past tense form "went" is an instance of',
    options: [
      {
        key: "A",
        value: "Zero morpheme",
      },
      {
        key: "B",
        value: "Suppletive morpheme",
      },
      {
        key: "C",
        value: "Portmanteau morpheme",
      },
      {
        key: "D",
        value: "Discontinuous morpheme",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 28,
    question:
      "A form of a verb capable of occurring on its own in a sentence and must be marked for tense is called",
    options: [
      {
        key: "A",
        value: "Auxiliary verb",
      },
      {
        key: "B",
        value: "Finite verb",
      },
      {
        key: "C",
        value: "Infinitives",
      },
      {
        key: "D",
        value: "Non-finite verb",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 29,
    question:
      'The seminal article "Two models of grammatical description" published in 1954 is written by',
    options: [
      {
        key: "A",
        value: "R. Jackendoff",
      },
      {
        key: "B",
        value: "C.F. Hockett",
      },
      {
        key: "C",
        value: "M. Joos",
      },
      {
        key: "D",
        value: "R.H. Robins",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 30,
    question: "The Nihali language spoken in Central India is",
    options: [
      {
        key: "A",
        value: "an artificial language",
      },
      {
        key: "B",
        value: "a pidgin",
      },
      {
        key: "C",
        value: "an isolate",
      },
      {
        key: "D",
        value: "a creole",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 31,
    question:
      'The seminal article published in 1934 titled "The Phonemic Principle" is written by',
    options: [
      {
        key: "A",
        value: "K. Pike",
      },
      {
        key: "B",
        value: "E. Sapir",
      },
      {
        key: "C",
        value: "M. Swadesh",
      },
      {
        key: "D",
        value: "W.F. Twaddell",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 32,
    question: "'ask' 'aks' is an example of",
    options: [
      {
        key: "A",
        value: "Epenthesis",
      },
      {
        key: "B",
        value: "Metathesis",
      },
      {
        key: "C",
        value: "Assimilation",
      },
      {
        key: "D",
        value: "Dissimilation",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 33,
    question: "What is CDS synonymous with?",
    options: [
      {
        key: "A",
        value: "Mother tongue",
      },
      {
        key: "B",
        value: "Communication disorders",
      },
      {
        key: "C",
        value: "Motherese",
      },
      {
        key: "D",
        value: "Speech database",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 34,
    question:
      "What is the capturing of near equivalent sense of Source Text (ST) by Target Text (TT) known as?",
    options: [
      {
        key: "A",
        value: "Transliteration",
      },
      {
        key: "B",
        value: "Fidelity",
      },
      {
        key: "C",
        value: "Transcreation",
      },
      {
        key: "D",
        value: "Intralingual Translation",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 35,
    question:
      "Which of the following examples is the most suitable for laksana?",
    options: [
      {
        key: "A",
        value: "The soldiers are entering with swords",
      },
      {
        key: "B",
        value: "The swords are entering",
      },
      {
        key: "C",
        value: "The swords are shining",
      },
      {
        key: "D",
        value: "The swords are made of metals",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 36,
    question:
      "Which one of the following approaches to language study aims at mapping the change in language?",
    options: [
      {
        key: "A",
        value: "Synchronic study",
      },
      {
        key: "B",
        value: "Diachronic study",
      },
      {
        key: "C",
        value: "Typological study",
      },
      {
        key: "D",
        value: "Areal study",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 37,
    question:
      "In the sentence, 'Raju looked at himself in the mirror', what is the antecedent?",
    options: [
      {
        key: "A",
        value: "Raju",
      },
      {
        key: "B",
        value: "Looked",
      },
      {
        key: "C",
        value: "Himself",
      },
      {
        key: "D",
        value: "Mirror",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 38,
    question:
      "Which one of the following is a common inherent verbal category whose function is to highlight the internal temporal unfolding of the predication?",
    options: [
      {
        key: "A",
        value: "Tense",
      },
      {
        key: "B",
        value: "Aspect",
      },
      {
        key: "C",
        value: "Mood",
      },
      {
        key: "D",
        value: "Gerund",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 39,
    question:
      'The classic research paper titled "Where is morphology"? published in 1982 is written by',
    options: [
      {
        key: "A",
        value: "P.H. Matthews",
      },
      {
        key: "B",
        value: "P. Kiparsky",
      },
      {
        key: "C",
        value: "M. Aronoff",
      },
      {
        key: "D",
        value: "S.R. Anderson",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 40,
    question:
      '"Squish", a term which refers to a continuum along which lexical items can be placed, is introduced by',
    options: [
      {
        key: "A",
        value: "Gregory T. Stump",
      },
      {
        key: "B",
        value: "John Robert Ross",
      },
      {
        key: "C",
        value: "Martin Haspelmath",
      },
      {
        key: "D",
        value: "Ingo Plag",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 41,
    question:
      '"The market boomed\' after the resurgence". In this sentence the word "boomed" is',
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(a) and (c) only",
      },
      {
        key: "C",
        value: "(b) and (d) only",
      },
      {
        key: "D",
        value: "(e) and (a) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 42,
    question:
      "In the pre-machine learning phase of Artificial Intelligence (AI), which of the following programming languages were popularly used",
    options: [
      {
        key: "A",
        value: "(a) and (e) only",
      },
      {
        key: "B",
        value: "(a) and (b) only",
      },
      {
        key: "C",
        value: "(c) and (d) only",
      },
      {
        key: "D",
        value: "(b) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 43,
    question: "Language revitalization involves",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (d) only",
      },
      {
        key: "C",
        value: "(c) and (d) only",
      },
      {
        key: "D",
        value: "(d) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 44,
    question:
      "Some of the demographic variables considered in sociolinguistic studies include",
    options: [
      {
        key: "A",
        value: "(b) and (d) only",
      },
      {
        key: "B",
        value: "(a) and (c) only",
      },
      {
        key: "C",
        value: "(a) and (e) only",
      },
      {
        key: "D",
        value: "(c) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 45,
    question:
      "In Generative Phonology Paul Kiparsky introduced two ordering relations. They are",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(b) and (e) only",
      },
      {
        key: "D",
        value: "(c) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 46,
    question: "Important rubrics of 'SPEAKING' are",
    options: [
      {
        key: "A",
        value: "(a) and (c) only",
      },
      {
        key: "B",
        value: "(c) and (e) only",
      },
      {
        key: "C",
        value: "(b) and (e) only",
      },
      {
        key: "D",
        value: "(c) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 47,
    question:
      'The sentence "The President could not ratify the treaty" can be labelled as',
    options: [
      {
        key: "A",
        value: "(b) and (e) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(a) and (d) only",
      },
      {
        key: "D",
        value: "(c) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 48,
    question:
      "Proto Indo European (PIE) related excavations at Catal Huyuk in Turkey by James Mellart have found evidences of",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(c) and (d) only",
      },
      {
        key: "C",
        value: "(a), (b), (c) and (d) only",
      },
      {
        key: "D",
        value: "(b) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 49,
    question:
      "Difference between a dialect and a language is generally made on the grounds of",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(d) and (e) only",
      },
      {
        key: "C",
        value: "(b) and (c) only",
      },
      {
        key: "D",
        value: "(c) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 50,
    question:
      "Paul Grice outlined four key categories or maxims of conversation. These are:",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (d) only",
      },
      {
        key: "C",
        value: "(b) and (e) only",
      },
      {
        key: "D",
        value: "(a) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 51,
    question:
      "Metaphor is essentially a relation between two conceptual domains. These domains are",
    options: [
      {
        key: "A",
        value: "(a) and (d) only",
      },
      {
        key: "B",
        value: "(b) and (d) only",
      },
      {
        key: "C",
        value: "(a) and (b) only",
      },
      {
        key: "D",
        value: "(c) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 52,
    question:
      "Two of the following words belong to the category of 'function word'. They are",
    options: [
      {
        key: "A",
        value: "(a) and (c) only",
      },
      {
        key: "B",
        value: "(d) and (e) only",
      },
      {
        key: "C",
        value: "(b) and (e) only",
      },
      {
        key: "D",
        value: "(b) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 53,
    question:
      'Identify the correct pair of authors who authored the book "The theory and practice of translation".',
    options: [
      {
        key: "A",
        value: "(a) and (e) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(c) and (a) only",
      },
      {
        key: "D",
        value: "(d) and (a) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 54,
    question: "Read the following statements:",
    options: [
      {
        key: "A",
        value: "(a) and (c) only",
      },
      {
        key: "B",
        value: "(b) and (d) only",
      },
      {
        key: "C",
        value: "(a) and (b) only",
      },
      {
        key: "D",
        value: "(d) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 55,
    question:
      "Binary semantic features are those which come naturally in pairs.",
    options: [
      {
        key: "A",
        value: "(c) and (d) only",
      },
      {
        key: "B",
        value: "(a) and (b) only",
      },
      {
        key: "C",
        value: "(b) and (c) only",
      },
      {
        key: "D",
        value: "(d) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 56,
    question: "The English word 'cook' can be an example of the following:",
    options: [
      {
        key: "A",
        value: "(a) and (c) only",
      },
      {
        key: "B",
        value: "(a) and (d) only",
      },
      {
        key: "C",
        value: "(b) and (e) only",
      },
      {
        key: "D",
        value: "(c) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 57,
    question: "Identify the cases from the options given below:",
    options: [
      {
        key: "A",
        value: "(c) and (e) only",
      },
      {
        key: "B",
        value: "(a) and (e) only",
      },
      {
        key: "C",
        value: "(a) and (d) only",
      },
      {
        key: "D",
        value: "(b) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 58,
    question:
      "The politeness principles, according to Leech, are formulated with the following maxims",
    options: [
      {
        key: "A",
        value: "(a) and (d) only",
      },
      {
        key: "B",
        value: "(b) and (e) only",
      },
      {
        key: "C",
        value: "(c) and (d) only",
      },
      {
        key: "D",
        value: "(c) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 59,
    question: "Two notable dichotomies proposed by F.de. Saussure are",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(c) and (d) only",
      },
      {
        key: "C",
        value: "(b) and (d) only",
      },
      {
        key: "D",
        value: "(d) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 60,
    question: "Which of the following statements are true about dialect?",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(c) and (d) only",
      },
      {
        key: "D",
        value: "(a) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 61,
    question: "A bidirectional bilingual Machine Translation system works for",
    options: [
      {
        key: "A",
        value: "(a) and (e) only",
      },
      {
        key: "B",
        value: "(c) and (d) only",
      },
      {
        key: "C",
        value: "(a) and (b) only",
      },
      {
        key: "D",
        value: "(d) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 62,
    question:
      "As per the Census 2011 report of the Government of India which of the following non-scheduled languages are not listed in Part-B",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(c) and (d) only",
      },
      {
        key: "C",
        value: "(d) and (e) only",
      },
      {
        key: "D",
        value: "(b) and (c) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 63,
    question:
      "What are the typical areal features characteristic of Indian language families?",
    options: [
      {
        key: "A",
        value: "(a), (b) and (d) only",
      },
      {
        key: "B",
        value: "(a), (d) and (e) only",
      },
      {
        key: "C",
        value: "(a), (c) and (d) only",
      },
      {
        key: "D",
        value: "(b), (c) and (e) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 64,
    question:
      "For language acquisition to occur which of the following are needed?",
    options: [
      {
        key: "A",
        value: "(c) and (e) only",
      },
      {
        key: "B",
        value: "(a) and (b) only",
      },
      {
        key: "C",
        value: "(c) and (e) only",
      },
      {
        key: "D",
        value: "(a) and (d) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 65,
    question: "Which of the following holds true for phrase structure?",
    options: [
      {
        key: "A",
        value: "(a), (b) and (c) only",
      },
      {
        key: "B",
        value: "(b) and (e) only",
      },
      {
        key: "C",
        value: "(a) and (d) only",
      },
      {
        key: "D",
        value: "(a) and (c) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 66,
    question: "Match List-I with List-II: Exponents with Theory",
    options: [
      {
        key: "A",
        value: "(a)-I, (b)-II, (c)-IV, (d)-III",
      },
      {
        key: "B",
        value: "(a)-IV, (b)-I, (c)-III, (d)-II",
      },
      {
        key: "C",
        value: "(a)-IV, (b)-I, (c)-II, (d)-III",
      },
      {
        key: "D",
        value: "(a)-II, (b)-I, (c)-IV, (d)-III",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 67,
    question: "Match List-1 with List-II: Author with Name of the Article",
    options: [
      {
        key: "A",
        value: "(a)-I, (b)-IV, (c)-II, (d)-III",
      },
      {
        key: "B",
        value: "(a)-IV, (b)-III, (c)-I, (d)-II",
      },
      {
        key: "C",
        value: "(a)-I, (b)-II, (c)-III, (d)-IV",
      },
      {
        key: "D",
        value: "(a)-IV, (b)-III, (c)-II, (d)-I",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 68,
    question:
      "Match List-I with List-II: Sociolinguistic Studies with Author(s)",
    options: [
      {
        key: "A",
        value: " (a)-III, (b)-IV, (c)-I, (d)-II",
      },
      {
        key: "B",
        value: "(a)-III, (b)-IV, (c)-I, (d)-II",
      },
      {
        key: "C",
        value: "(a)-IV, (b)-I, (c)-II, (d)-III",
      },
      {
        key: "D",
        value: "(a)-IV, (b)-I, (c)-II, (d)-III",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 69,
    question: "Match List-I with List-II: Language Types with Language",
    options: [
      {
        key: "A",
        value: "A. (a)-II, (b)-IV, (c)-I, (d)-III",
      },
      {
        key: "B",
        value: "B. (a)-III, (b)-I, (c)-II, (d)-IV",
      },
      {
        key: "C",
        value: "C. (a)-III, (b)-I, (c)-IV, (d)-II",
      },
      {
        key: "D",
        value: "D. (a)-IV, (b)-I, (c)-III, (d)-II",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 70,
    question: "Match List-I with List-II: Books with Author",
    options: [
      {
        key: "A",
        value: "(a)-IV, (b)-III, (c)-I, (d)-II",
      },
      {
        key: "B",
        value: "(a)-I, (b)-III, (c)-II, (d)-IV",
      },
      {
        key: "C",
        value: "(a)-II, (b)-I, (c)-IV, (d)-III",
      },
      {
        key: "D",
        value: "(a)-I, (b)-I, (c)-III, (d)-IV",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 71,
    question: "Match List-I with List-II: Vowels with Description",
    options: [
      {
        key: "A",
        value: "(I)-(b), (II)-(a), (III)-(d), (IV)-(c)",
      },
      {
        key: "B",
        value: "(I)-(c), (II)-(a), (III)-(b), (IV)-(d)",
      },
      {
        key: "C",
        value: "(I)-(d), (II)-(c), (III)-(b), (IV)-(a)",
      },
      {
        key: "D",
        value: "(I)-(b), (II)-(d), (III)-(a), (IV)-(c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 72,
    question:
      "Match List- with List-II: Types of annotations and the definitions.",
    options: [
      {
        key: "A",
        value: "(a)-IV, (b)-III, (c)-II, (d)-I",
      },
      {
        key: "B",
        value: "(a)-IV, (b)-III, (c)-I, (d)-II",
      },
      {
        key: "C",
        value: "(a)-IV, (b)-I, (c)-IV, (d)-III",
      },
      {
        key: "D",
        value: "(a)-I, (b)-I, (c)-III, (d)-IV",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 73,
    question: "Match List-I with List-II: IPA Symbols with Description",
    options: [
      {
        key: "A",
        value: "(a)-II, (b)-IV, (c)-I, (d)-III",
      },
      {
        key: "B",
        value: "(a)-IV, (b)-III, (c)-I, (d)-II",
      },
      {
        key: "C",
        value: "(a)-III, (b)-IV, (c)-I, (d)-II",
      },
      {
        key: "D",
        value: "(a)-II, (b)-I, (c)-IV, (d)-III",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 74,
    question: "Match List-I with List-II: Languages with Families",
    options: [
      {
        key: "A",
        value: "(d)-III, (c)-IV, (b)-I, (a)-II",
      },
      {
        key: "B",
        value: "(a)-II, (b)-I, (c)-IV, (d)-III",
      },
      {
        key: "C",
        value: "(a)-II, (b)-I, (c)-IV, (d)-III",
      },
      {
        key: "D",
        value: "(a)-IV, (b)-III, (c)-II, (d)-I",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 75,
    question:
      "Match List-I with List-II: Formal Grammars with Types in Chomsky Hierarchy",
    options: [
      {
        key: "A",
        value: "(a)-I, (b)-II, (c)-III, (d)-IV",
      },
      {
        key: "B",
        value: "(a)-IV, (b)-I, (c)-II, (d)-III",
      },
      {
        key: "C",
        value: "(a)-I, (b)-II, (c)-III, (d)-IV",
      },
      {
        key: "D",
        value: "(a)-III, (b)-IV, (c)-I, (d)-II",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 76,
    question:
      "Arrange the places of articulation of consonants in correct sequential order from front to back",
    options: [
      {
        key: "A",
        value: "(a), (d), (b), (c), (e)",
      },
      {
        key: "B",
        value: "(e), (b), (c), (d), (a)",
      },
      {
        key: "C",
        value: "(c), (e), (b), (d), (a)",
      },
      {
        key: "D",
        value: "(b), (a), (d), (e), (c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 77,
    question:
      "Arrange the nasal segments in a sequential order: (front to back direction in place of articulation)",
    options: [
      {
        key: "A",
        value: "(c) (e), (b), (d), (a)",
      },
      {
        key: "B",
        value: "(d), (c), (e), (a), (b)",
      },
      {
        key: "C",
        value: "(a), (b), (c), (d), (e)",
      },
      {
        key: "D",
        value: "(b), (a), (d), (e), (c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 78,
    question:
      "Arrange the levels of representation of concepts in cognitive linguistic framework",
    options: [
      {
        key: "A",
        value: "(a), (c), (b), (e), (d)",
      },
      {
        key: "B",
        value: "(d), (e), (a), (b), (c)",
      },
      {
        key: "C",
        value: "(e), (d), (c), (a), (b)",
      },
      {
        key: "D",
        value: "(b), (a), (e), (c), (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 79,
    question:
      "Arrange the following based on the chronology of diagnostics with regard to language endangerment.",
    options: [
      {
        key: "A",
        value: "(b), (c), (a), (d)",
      },
      {
        key: "B",
        value: "(b), (e), (d), (c)",
      },
      {
        key: "C",
        value: "(d), (c), (a), (b)",
      },
      {
        key: "D",
        value: "(d), (b), (c), (a)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 80,
    question:
      "According to Paul Kiparsky’s Obligatory Contour Principle, which of the following sequences is possible in a word?",
    options: [
      {
        key: "A",
        value: "b. (a) and (d) only",
      },
      {
        key: "B",
        value: "(a) and (b) only",
      },
      {
        key: "C",
        value: "(c) and (d) only",
      },
      {
        key: "D",
        value: " (b) and (c) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 81,
    question:
      "Organize in a sequential order Paul Kiparsky's conception of how the English lexicon is organized",
    options: [
      {
        key: "A",
        value: "(d), (b), (c), (a)",
      },
      {
        key: "B",
        value: "(c), (d), (a), (b)",
      },
      {
        key: "C",
        value: "(a), (c), (d), (b)",
      },
      {
        key: "D",
        value: "(b), (d), (c), (a)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 82,
    question:
      "Arrange the following concepts in sequential order (focal-fugali)",
    options: [
      {
        key: "A",
        value: "(a), (d), (c), (e)",
      },
      {
        key: "B",
        value: "(b), (a), (c), (e)",
      },
      {
        key: "C",
        value: "(c), (d), (b), (e)",
      },
      {
        key: "D",
        value: "b), (a), (c), (e), (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 83,
    question:
      "Arrange the following stages in language acquisition in sequential order.",
    options: [
      {
        key: "A",
        value: "(a), (c), (e), (d), (b)",
      },
      {
        key: "B",
        value: "(b), (c), (d), (a), (e)",
      },
      {
        key: "C",
        value: "(c), (d), (a), (e), (b)",
      },
      {
        key: "D",
        value: "(d), (a), (c), (e), (b)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 84,
    question: "Arrange the following names in chronological order.",
    options: [
      {
        key: "A",
        value: "(b), (a), (d), (c), (e)",
      },
      {
        key: "B",
        value: "(b), (d), (e), (a), (c)",
      },
      {
        key: "C",
        value: "(c), (d), (b), (a), (e)",
      },
      {
        key: "D",
        value: "(d), (e), (c), (a), (b)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 85,
    question:
      "Arrange the following concepts in sequential order (focal-fugali)",
    options: [
      {
        key: "A",
        value: "(a), (c), (e), (d)",
      },
      {
        key: "B",
        value: "(b), (a), (c), (e)",
      },
      {
        key: "C",
        value: "(c), (d), (b), (a)",
      },
      {
        key: "D",
        value: "(d), (b), (a), (c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 86,
    question: "Given below are two statements:",
    options: [
      {
        key: "A",
        value: "Both Statement (I) and Statement (II) are true",
      },
      {
        key: "B",
        value: "Both Statement (I) and Statement (II) are incorrect",
      },
      {
        key: "C",
        value: "Statement (I) is correct, but Statement (II) is incorrect",
      },
      {
        key: "D",
        value: "Statement (I) is incorrect, but Statement (II) is correct",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 87,
    question:
      "Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).",
    options: [
      {
        key: "A",
        value:
          "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      },
      {
        key: "B",
        value:
          "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      },
      {
        key: "C",
        value: "(A) is true, but (R) is false",
      },
      {
        key: "D",
        value: "(A) is false, but (R) is true",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 88,
    question: "Given below are two statements:",
    options: [
      {
        key: "A",
        value: "Both Statement (I) and Statement (II) are true",
      },
      {
        key: "B",
        value: "Both Statement (I) and Statement (II) are incorrect",
      },
      {
        key: "C",
        value: "Statement (I) is true, but Statement (II) is false",
      },
      {
        key: "D",
        value: "Statement (I) is false, but Statement (II) is true",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 89,
    question:
      "Which statements about aksarasamuna are in Panini's grammar is/are correct",
    options: [
      {
        key: "A",
        value: "Both Statement (I) and Statement (II) are correct",
      },
      {
        key: "B",
        value: "Both Statement (I) and Statement (II) are incorrect",
      },
      {
        key: "C",
        value: "Statement (I) is correct, but Statement (II) is incorrect",
      },
      {
        key: "D",
        value: "Statement (I) is incorrect, but Statement (II) is correct",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 90,
    question:
      "Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).",
    options: [
      {
        key: "A",
        value:
          "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      },
      {
        key: "B",
        value:
          "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A)",
      },
      {
        key: "C",
        value: "(A) is true, but (R) is false",
      },
      {
        key: "D",
        value: "(A) is false, but (R) is true",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 91,
    question:
      "Which one of the following is a structural approach to language?",
    options: [
      {
        key: "A",
        value: "Where units are described independent of each other",
      },
      {
        key: "B",
        value:
          "A scientific description of language primarily involves relations between units",
      },
      {
        key: "C",
        value: "A scientific description of language units technology",
      },
      {
        key: "D",
        value: "Study of language on the diachronic axis",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 92,
    question: "What does the linguistic content' refer to in the passage?",
    options: [
      {
        key: "A",
        value: "Sounds of a spoken language",
      },
      {
        key: "B",
        value: "The characters of a written language",
      },
      {
        key: "C",
        value: "Meaning of a linguistic unit",
      },
      {
        key: "D",
        value: "Contextual meaning",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 93,
    question:
      "Which one of the statements correctly describes the Saussurean approach to language study?",
    options: [
      {
        key: "A",
        value:
          "Sound characters and the linguistic content should be studied in terms of phonetics and semantics respectively",
      },
      {
        key: "B",
        value:
          "Both sound and linguistic content should be studied in terms of mutual relations only",
      },
      {
        key: "C",
        value:
          "The real units of language are sounds, written characters and meaning only",
      },
      {
        key: "D",
        value: "Language should always be studied diachronically",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 94,
    question: "What are the real units of language?",
    options: [
      {
        key: "A",
        value: "Parts of speech",
      },
      {
        key: "B",
        value: "Alphabet and lexicon",
      },
      {
        key: "C",
        value: "Independent units of linguistic components",
      },
      {
        key: "D",
        value: "The relations which sounds, characters and meanings represent",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 95,
    question:
      "Which one of the following is the characteristic of a particular language?",
    options: [
      {
        key: "A",
        value:
          "When sounds, characters and meanings change then the system is also affected",
      },
      {
        key: "B",
        value:
          "The system of language - the interior system of a language - does not change but may be controlled with another language",
      },
      {
        key: "C",
        value:
          "The interior system of a language changes when changes take place in another language",
      },
      {
        key: "D",
        value: "Sounds, characters and meaning are relevant to the system",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 96,
    question:
      "The internal force that is often responsible for language endangerment",
    options: [
      {
        key: "A",
        value: "Educational subjugation",
      },
      {
        key: "B",
        value: "Miliary aggression",
      },
      {
        key: "C",
        value: "Negative attitude towards own languages",
      },
      {
        key: "D",
        value: "Economic deprivation",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 97,
    question:
      "The intergenerational transmission of linguistic and cultural traditions is halted due to",
    options: [
      {
        key: "A",
        value: "Internal pressures",
      },
      {
        key: "B",
        value: "External pressures",
      },
      {
        key: "C",
        value: "Political pressures",
      },
      {
        key: "D",
        value: "Both internal and external pressures",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 98,
    question: "The extinction of an endangered language results in the loss of",
    options: [
      {
        key: "A",
        value: "Cultural knowledge",
      },
      {
        key: "B",
        value: "Historical knowledge",
      },
      {
        key: "C",
        value: "Ecological knowledge",
      },
      {
        key: "D",
        value: "All three types of knowledge",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 99,
    question: "What happens when a language becomes extinct?",
    options: [
      {
        key: "A",
        value: "Loss of internal contacts",
      },
      {
        key: "B",
        value: "Loss of patterns of language",
      },
      {
        key: "C",
        value: "Loss of indigenous knowledge",
      },
      {
        key: "D",
        value: "Loss of communication",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 100,
    question: "What needs to be done for sustaining endangered languages?",
    options: [
      {
        key: "A",
        value: "Create awareness",
      },
      {
        key: "B",
        value: "Community's participation in preservation",
      },
      {
        key: "C",
        value: "Collaborative effort from all stakeholders",
      },
      {
        key: "D",
        value: "Teach minority languages in educational institutions",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 101,
    question:
      "Greater the handicap of the students coming to the educational institutions, greater the demand on the:",
    options: [
      {
        key: "A",
        value: "Family",
      },
      {
        key: "B",
        value: "Society",
      },
      {
        key: "C",
        value: "Teacher",
      },
      {
        key: "D",
        value: "State",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 102,
    question:
      "What are the characteristics of Continuous and Comprehensive Evaluation ?\n(a) It increases the workload on students by taking multiple tests.\n(b) It replaces marks with grades.\n(c) It evaluates every aspect of the student.\n(d) It helps in reducing examination phobia.\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a), (b), (c) and (d)",
      },
      {
        key: "B",
        value: "(b) and (d)",
      },
      {
        key: "C",
        value: "(a), (b) and (c)",
      },
      {
        key: "D",
        value: "(b), (c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 103,
    question:
      "Which of the following attributes denote great strengths of teacher?\n(a) Full-time active involvement in the institutional management\n(b) Setting examples\n(c) Willingness to put assumptions to the test\n(d) Acknowledging mistakes\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a), (b) and (d)",
      },
      {
        key: "B",
        value: "(b), (c) and (d)",
      },
      {
        key: "C",
        value: "(a), (c) and (d)",
      },
      {
        key: "D",
        value: "(a), (b), (c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 104,
    question:
      "Which one of the following statements is correct in the context of multiple - choice type questions?",
    options: [
      {
        key: "A",
        value: "They are more objective than true-false type questions.",
      },
      {
        key: "B",
        value: "They are less objective than essay type questions.",
      },
      {
        key: "C",
        value: "They are more subjective than short-answer type questions.",
      },
      {
        key: "D",
        value: "They are more subjective than true-false type questions.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 105,
    question:
      "As Chairman of an independent commission on education, Jacques Delors report to UNESCO was titled",
    options: [
      {
        key: "A",
        value: "International Commission on Education Report",
      },
      {
        key: "B",
        value: "Millennium Development Report",
      },
      {
        key: "C",
        value: "Learning : The Treasure Within",
      },
      {
        key: "D",
        value: "World Declaration on Education for All",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 106,
    question:
      "What are required for good teaching?\n(a) Diagnosis\n(b) Remedy\n(c) Direction\n(d) Feedback\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a), (b), (c) and (d)",
      },
      {
        key: "B",
        value: "(a) and (b)",
      },
      {
        key: "C",
        value: "(b), (c) and (d)",
      },
      {
        key: "D",
        value: "(c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 107,
    question:
      "Which of the following statements is not true in the context of participatory research ?",
    options: [
      {
        key: "A",
        value: "It recognizes knowledge as power.",
      },
      {
        key: "B",
        value: "It emphasises on people as experts.",
      },
      {
        key: "C",
        value: "It is a collective process of enquiry.",
      },
      {
        key: "D",
        value: "Its sole purpose is production of knowledge.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 108,
    question:
      "Which of the following statements is true in the context of the testing of a hypothesis?",
    options: [
      {
        key: "A",
        value: "It is only the alternative hypothesis, that can be tested.",
      },
      {
        key: "B",
        value: "It is only the null hypothesis, that can be tested.",
      },
      {
        key: "C",
        value: "Both, the alternative and the null hypotheses can be tested.",
      },
      {
        key: "D",
        value:
          "Both, the alternative and the null hypotheses cannot be tested.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 109,
    question:
      "Which of the following are the basic rules of APA style of referencing format?\n(a) Italicize titles of shorter works such as journal articles or essays\n(b) Invert authors’ names (last name first)\n(c) Italicize titles of longer works such as books and journals\n(d) Alphabetically index reference list\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a) and (b)",
      },
      {
        key: "B",
        value: "(b), (c) and (d)",
      },
      {
        key: "C",
        value: "(c) and (d)",
      },
      {
        key: "D",
        value: "(a), (b), (c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 110,
    question:
      "Which of the following are the characteristics of a seminar?\n(a) It is a form of academic instruction.\n(b) It involves questioning, discussion and debates.\n(c) It involves large groups of individuals.\n(d) It needs involvement of skilled persons.\nSelect the correct answer from the codes given below",
    options: [
      {
        key: "A",
        value: "(b) and (c)",
      },
      {
        key: "B",
        value: "(b) and (d)",
      },
      {
        key: "C",
        value: "(b), (c) and (d)",
      },
      {
        key: "D",
        value: "(a), (b) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 111,
    question:
      "A researcher is interested in studying the prospects of a particular political party in an urban area. What tool should he prefer for the study?",
    options: [
      {
        key: "A",
        value: "Rating scale",
      },
      {
        key: "B",
        value: "Interview",
      },
      {
        key: "C",
        value: "Questionnaire",
      },
      {
        key: "D",
        value: "Schedule",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 112,
    question: "Ethical norms in research do not involve guidelines for:",
    options: [
      {
        key: "A",
        value: "Thesis format",
      },
      {
        key: "B",
        value: "Copyright",
      },
      {
        key: "C",
        value: "Patenting policy",
      },
      {
        key: "D",
        value: "Data sharing policies",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 113,
    question:
      "When confronted with signing a big card, the author felt like “a rabbit in the headlight”. What does this phrase mean ?",
    options: [
      {
        key: "A",
        value: "A state of confusion",
      },
      {
        key: "B",
        value: "A state of pleasure",
      },
      {
        key: "C",
        value: "A state of anxiety",
      },
      {
        key: "D",
        value: "A state of pain",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 114,
    question:
      "According to the author, which one is not the most creative outlet of pursuit?",
    options: [
      {
        key: "A",
        value: "Handwriting",
      },
      {
        key: "B",
        value: "Photography",
      },
      {
        key: "C",
        value: "Sketching",
      },
      {
        key: "D",
        value: "Reading",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 115,
    question:
      "The entire existence of the author revolves round\n(a) Computer\n(b) Mobile phone\n(c) Typewriter\nIdentify the correct answer from the codes given below",
    options: [
      {
        key: "A",
        value: "(b) only",
      },
      {
        key: "B",
        value: "(a) and (b) only",
      },
      {
        key: "C",
        value: "(a), (b) and (c)",
      },
      {
        key: "D",
        value: "(b) and (c) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 116,
    question: "How many teens, as per the Bic survey, do not own a pen?",
    options: [
      {
        key: "A",
        value: "800",
      },
      {
        key: "B",
        value: "560",
      },
      {
        key: "C",
        value: "500",
      },
      {
        key: "D",
        value: "100",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 117,
    question: "What is the main concern of the author?",
    options: [
      {
        key: "A",
        value: "That the teens use social networks for communication.",
      },
      {
        key: "B",
        value: "That the teens use mobile phones.",
      },
      {
        key: "C",
        value: "That the teens use computer.",
      },
      {
        key: "D",
        value: "That the teens have forgotten the art of handwriting.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 118,
    question:
      "The main objectives of student evaluation of teachers are:\n(a) To gather information about student weaknesses.\n(b) To make teachers take teaching seriously.\n(c) To help teachers adopt innovative methods of teaching.\n(d) To identify the areas of further improvement in teacher traits.\nIdentify the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b), (c) and (d) only",
      },
      {
        key: "C",
        value: "(a), (b) and (c) only",
      },
      {
        key: "D",
        value: "(a) only",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 119,
    question:
      "Using the central point of the classroom communication as the beginning of a dynamic pattern of ideas is referred to as:",
    options: [
      {
        key: "A",
        value: "Systemisation",
      },
      {
        key: "B",
        value: "Problem - orientation",
      },
      {
        key: "C",
        value: "Idea protocol",
      },
      {
        key: "D",
        value: "Mind mapping",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 120,
    question: "Aspects of the voice, other than the speech are known as:",
    options: [
      {
        key: "A",
        value: "Physical language",
      },
      {
        key: "B",
        value: "Personal language",
      },
      {
        key: "C",
        value: "Para language",
      },
      {
        key: "D",
        value: "Delivery language",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 121,
    question: "Every type of communication is affected by its:",
    options: [
      {
        key: "A",
        value: "Reception",
      },
      {
        key: "B",
        value: "Transmission",
      },
      {
        key: "C",
        value: "Non-regulation",
      },
      {
        key: "D",
        value: "Context",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 122,
    question:
      "Attitudes, actions and appearances in the context of classroom communication are considered as:",
    options: [
      {
        key: "A",
        value: "Verbal",
      },
      {
        key: "B",
        value: "Non-verbal",
      },
      {
        key: "C",
        value: "Impersonal",
      },
      {
        key: "D",
        value: "Irrational",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 123,
    question: "Most often, the teacher - student communication is:",
    options: [
      {
        key: "A",
        value: "Spurious",
      },
      {
        key: "B",
        value: "Critical",
      },
      {
        key: "C",
        value: "Utilitarian",
      },
      {
        key: "D",
        value: "Confrontational",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 124,
    question: "In a classroom, a communicator’s trust level is determined by:",
    options: [
      {
        key: "A",
        value: "the use of hyperbole",
      },
      {
        key: "B",
        value: "the change of voice level",
      },
      {
        key: "C",
        value: "the use of abstract concepts",
      },
      {
        key: "D",
        value: "eye contact",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 125,
    question: "The next term in the series 2, 5, 10, 17, 26, 37, ? is:",
    options: [
      {
        key: "A",
        value: "50",
      },
      {
        key: "B",
        value: "57",
      },
      {
        key: "C",
        value: "62",
      },
      {
        key: "D",
        value: "72",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 126,
    question:
      "A group of 210 students appeared in some test. The mean of 1/3rd of students is found to be 60. The mean of the remaining students is found to be 78. The mean of the whole group will be:",
    options: [
      {
        key: "A",
        value: "80",
      },
      {
        key: "B",
        value: "76",
      },
      {
        key: "C",
        value: "74",
      },
      {
        key: "D",
        value: "72",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 127,
    question:
      "Anil after travelling 6 km towards East from his house realized that he has travelled in a wrong direction, he turned and travelled 12 km towards West, turned right and travelled 8 km to reach his office. The straight distance of the office from his house is:",
    options: [
      {
        key: "A",
        value: "20 km",
      },
      {
        key: "B",
        value: "14 km",
      },
      {
        key: "C",
        value: "12 km",
      },
      {
        key: "D",
        value: "10 km",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 128,
    question: "The next term in the series: B2E, D5H, F12K, H27N, ? is:",
    options: [
      {
        key: "A",
        value: "J561",
      },
      {
        key: "B",
        value: "162Q",
      },
      {
        key: "C",
        value: "Q62J",
      },
      {
        key: "D",
        value: "J58Q",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 129,
    question:
      "A party was held in which a grandmother, father, mother, four sons, their wives and one son and two daughters to each of the sons were present. The number of females present in the party is:",
    options: [
      {
        key: "A",
        value: "12",
      },
      {
        key: "B",
        value: "14",
      },
      {
        key: "C",
        value: "18",
      },
      {
        key: "D",
        value: "24",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 130,
    question:
      "P and Q are brothers. R and S are sisters. The son of P is brother of S. Q is related to R as:",
    options: [
      {
        key: "A",
        value: "Son",
      },
      {
        key: "B",
        value: "Brother",
      },
      {
        key: "C",
        value: "Uncle",
      },
      {
        key: "D",
        value: "Father",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 131,
    question:
      "Consider the argument given below: 'Pre - employment testing of teachers is quite fair because doctors, architects and engineers who are now employed had to face such a testing.' What type of argument it is?",
    options: [
      {
        key: "A",
        value: "Deductive",
      },
      {
        key: "B",
        value: "Analogical",
      },
      {
        key: "C",
        value: "Psychological",
      },
      {
        key: "D",
        value: "Biological",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 132,
    question:
      "Among the following propositions two arc related in such a way that they can both be true although they cannot both be false. Which are those propositions? Select the correct code.\nPropositions:\n(a) Some priests are cunning.\n(b) No priest is cunning.\n(c) All priests are cunning.\n(d) Some priests are not cunning.\nCodes:",
    options: [
      {
        key: "A",
        value: "(a) and (b)",
      },
      {
        key: "B",
        value: "(c) and (d)",
      },
      {
        key: "C",
        value: "(a) and (c)",
      },
      {
        key: "D",
        value: "(a) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 133,
    question:
      "A Cluster of propositions with a structure that exhibits some inference is called",
    options: [
      {
        key: "A",
        value: "An inference",
      },
      {
        key: "B",
        value: "An argument",
      },
      {
        key: "C",
        value: "An explanation",
      },
      {
        key: "D",
        value: "A valid argument",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 134,
    question:
      "Consider the following assertion (A) and reason (R) and select the correct code given below:\n(A) : No man is perfect.\n(R): Some men are not perfect.",
    options: [
      {
        key: "A",
        value:
          "Both (A) and (R) are true but (R) does not provide sufficient reason for (A).",
      },
      {
        key: "B",
        value:
          "Both (A) and (R) are true and (R) provides sufficient reason for (A).",
      },
      {
        key: "C",
        value: "(A) is true but (R) is false.",
      },
      {
        key: "D",
        value: "(A) is false but (R) is true.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 135,
    question:
      "A definition that has a meaning that is deliberately assigned to some symbol is called:",
    options: [
      {
        key: "A",
        value: "Lexical",
      },
      {
        key: "B",
        value: "Precising",
      },
      {
        key: "C",
        value: "Stipulative",
      },
      {
        key: "D",
        value: "Persuasive",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 136,
    question:
      "If the proposition ‘No men are honest’ is taken to be false which of the following proposition/propositions can be claimed certainly to be true?",
    options: [
      {
        key: "A",
        value: "All men are honest",
      },
      {
        key: "B",
        value: "Some men are honest",
      },
      {
        key: "C",
        value: "Some men are not honest",
      },
      {
        key: "D",
        value: "No honest person is man",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 137,
    question:
      "Which decade registered the maximum growth rate (%) of population?",
    options: [
      {
        key: "A",
        value: "1961-71",
      },
      {
        key: "B",
        value: "1971-81",
      },
      {
        key: "C",
        value: "1991-2001",
      },
      {
        key: "D",
        value: "2001-2011",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 138,
    question: "Average decadal growth rate (%) of population is:",
    options: [
      {
        key: "A",
        value: "~12.21%",
      },
      {
        key: "B",
        value: "~9.82%",
      },
      {
        key: "C",
        value: "~6.73%",
      },
      {
        key: "D",
        value: "~5%",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 139,
    question:
      "Based on the average decadal growth rate, what will be the population in the year 2021?",
    options: [
      {
        key: "A",
        value: "40.34 million",
      },
      {
        key: "B",
        value: "38.49 million",
      },
      {
        key: "C",
        value: "37.28 million",
      },
      {
        key: "D",
        value: "36.62 million",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 140,
    question: "In the year 1951, what was the power availability per person?",
    options: [
      {
        key: "A",
        value: "100 W",
      },
      {
        key: "B",
        value: "200 W",
      },
      {
        key: "C",
        value: "400 W",
      },
      {
        key: "D",
        value: "500 W",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 141,
    question:
      "In which decade, the average power availability per person was maximum?",
    options: [
      {
        key: "A",
        value: "1981-1991",
      },
      {
        key: "B",
        value: "1991-2001",
      },
      {
        key: "C",
        value: "2001-2011",
      },
      {
        key: "D",
        value: "1971-1981",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 142,
    question:
      "By what percentage (%) the power production increased from 1951 to 2011?",
    options: [
      {
        key: "A",
        value: "100%",
      },
      {
        key: "B",
        value: "300%",
      },
      {
        key: "C",
        value: "600%",
      },
      {
        key: "D",
        value: "900%",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 143,
    question: "NMEICT stands for:",
    options: [
      {
        key: "A",
        value: "National Mission on Education through ICT",
      },
      {
        key: "B",
        value: "National Mission on E-governance through ICT",
      },
      {
        key: "C",
        value: "National Mission on E-commerce through ICT",
      },
      {
        key: "D",
        value: "National Mission on E-learning through ICT",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 144,
    question:
      "Which of the following is an instant messaging application ?\n(a) WhatsApp\n(b) Google Talk\n(c) Viber\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(a) only",
      },
      {
        key: "D",
        value: "(a), (b) and (c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 145,
    question: "In a Computer a byte generally consists of:",
    options: [
      {
        key: "A",
        value: "4 bits",
      },
      {
        key: "B",
        value: "8 bits",
      },
      {
        key: "C",
        value: "16 bits",
      },
      {
        key: "D",
        value: "10 bits",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 146,
    question: "Which of the following is not an input device?",
    options: [
      {
        key: "A",
        value: "Microphone",
      },
      {
        key: "B",
        value: "Keyboard",
      },
      {
        key: "C",
        value: "Joystick",
      },
      {
        key: "D",
        value: "Monitor",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 147,
    question: "Which of the following is an open source software?",
    options: [
      {
        key: "A",
        value: "MS Word",
      },
      {
        key: "B",
        value: "Windows",
      },
      {
        key: "C",
        value: "Mozilla Firefox",
      },
      {
        key: "D",
        value: "Acrobat Reader",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 148,
    question:
      "Which of the following enables us to send the same letter to different persons in MS Word?",
    options: [
      {
        key: "A",
        value: "Mail join",
      },
      {
        key: "B",
        value: "Mail copy",
      },
      {
        key: "C",
        value: "Mail insert",
      },
      {
        key: "D",
        value: "Mail merge",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 149,
    question:
      "Inside rural homes, the source/sources of Nitrogen Oxide Pollution may be:\n(a) Unvented gas stoves\n(b) Wood stoves\n(c) Kerosene heaters\nChoose the correct code:",
    options: [
      {
        key: "A",
        value: "(a) and (b) only",
      },
      {
        key: "B",
        value: "(b) and (c) only",
      },
      {
        key: "C",
        value: "(b) only",
      },
      {
        key: "D",
        value: "(a), (b) and (c)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 150,
    question: "Which of the following pollutants can cause cancer in humans ?",
    options: [
      {
        key: "A",
        value: "Pesticides",
      },
      {
        key: "B",
        value: "Mercury",
      },
      {
        key: "C",
        value: "Lead",
      },
      {
        key: "D",
        value: "Ozone",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 151,
    question:
      "Assertion (A): People population control measures do not necessarily help in checking environmental degradation.\nReason (R): The relationship between population growth and environmental degradation is rather complex.\nChoose the correct answer from the following",
    options: [
      {
        key: "A",
        value:
          "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      },
      {
        key: "B",
        value:
          "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
      },
      {
        key: "C",
        value: "(A) is true but (R) is false.",
      },
      {
        key: "D",
        value: "(A) is false but (R) is true.",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 152,
    question: "Which of the following phenomena is not a natural hazard?",
    options: [
      {
        key: "A",
        value: "Wildfire",
      },
      {
        key: "B",
        value: "Lightning",
      },
      {
        key: "C",
        value: "Landslide",
      },
      {
        key: "D",
        value: "Chemical contamination",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 153,
    question:
      "As part of National Climate Change Policy, Indian government is planning to raise the installed capacity of renewable energy by the year 2030 to",
    options: [
      {
        key: "A",
        value: "175 GW",
      },
      {
        key: "B",
        value: "200 GW",
      },
      {
        key: "C",
        value: "250 GW",
      },
      {
        key: "D",
        value: "350 GW",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 154,
    question:
      "At present, in terms of per capita energy consumption (kWh/year), identify the correct sequence.",
    options: [
      {
        key: "A",
        value: "Brazil > Russia > China > India",
      },
      {
        key: "B",
        value: "Russia > China > India > Brazil",
      },
      {
        key: "C",
        value: "Russia > China > Brazil > India",
      },
      {
        key: "D",
        value: "China > Russia > Brazil > India",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 155,
    question:
      "Which of the following are the objectives of Rashtriya Uchchatar Shiksha Abhiyan (RUSA)?\n(a) To improve the overall quality of state institutions.\n(b) To ensure adequate availability of quality faculty.\n(c) To create new institutions through upgradation of existing autonomous colleges.\n(d) To downgrade universities with poor infrastructure into autonomous colleges.\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a), (b), (c) and (d)",
      },
      {
        key: "B",
        value: "(a), (b) and (c)",
      },
      {
        key: "C",
        value: "(a), (c) and (d)",
      },
      {
        key: "D",
        value: "(a), (b) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 156,
    question:
      "The grounds on which discrimination in admission to educational institutions is constitutionally prohibited are\n(a) Religion\n(b) Sex\n(c) Place of birth\n(d) Nationality\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(b), (c) and (d)",
      },
      {
        key: "B",
        value: "(a), (b) and (c)",
      },
      {
        key: "C",
        value: "(a), (b) and (d)",
      },
      {
        key: "D",
        value: "(a), (b), (c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 157,
    question:
      "Which of the following statements are correct about Lok Sabha?\n(a) The Constitution puts a limit on the size of the Lok Sabha.\n(b) The size and shape of the Parliamentary Constituencies is determined by the Election Commission.\n(c) First - past - the Post electoral system is followed.\n(d) The Speaker of Lok Sabha does not have a casting vote in case of an equality of votes.\nSelect the correct answer from the codes given below:",
    options: [
      {
        key: "A",
        value: "(a) and (c)",
      },
      {
        key: "B",
        value: "(a), b) and (c)",
      },
      {
        key: "C",
        value: "(a), (c) and (d)",
      },
      {
        key: "D",
        value: "(a), (b), (c) and (d)",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 158,
    question: "Public Order as an item in the Constitution figures in",
    options: [
      {
        key: "A",
        value: "the Union List",
      },
      {
        key: "B",
        value: "the State List",
      },
      {
        key: "C",
        value: "the Concurrent List",
      },
      {
        key: "D",
        value: "the Residuary Powers",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 159,
    question: "The term of office of the Advocate General of a State is:",
    options: [
      {
        key: "A",
        value: "4 years",
      },
      {
        key: "B",
        value: "5 years",
      },
      {
        key: "C",
        value: "6 years or 65 years of age whichever is earlier",
      },
      {
        key: "D",
        value: "not fixed",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
  {
    qno: 160,
    question:
      "Which among the following States has the highest number of seats in the Lok Sabha?",
    options: [
      {
        key: "A",
        value: "Maharashtra",
      },
      {
        key: "B",
        value: "Rajasthan",
      },
      {
        key: "C",
        value: "Tamil Nadu",
      },
      {
        key: "D",
        value: "West Bengal",
      },
    ],
    chosenOption: null,
    statusOfQuestion: "unopened",
  },
];

const answerKey = [
  "A",
  "D",
  "C",
  "B",
  "C",
  "A",
  "D",
  "C",
  "C",
  "A",
  "A",
  "C",
  "A",
  "C",
  "C",
  "B",
  "C",
  "D",
  "C",
  "A",
  "A",
  "B",
  "B",
  "A",
  "C",
  "B",
  "B",
  "B",
  "B",
  "C",
  "C",
  "B",
  "C",
  "B",
  "B",
  "B",
  "A",
  "C",
  "D",
  "B",
  "C",
  "C",
  "C",
  "B",
  "B",
  "B",
  "C",
  "C",
  "C",
  "B",
  "C",
  "C",
  "C",
  "C",
  "B",
  "B",
  "B",
  "C",
  "C",
  "C",
  "C",
  "C",
  "B",
  "A",
  "C",
  "C",
  "D",
  "C",
  "B",
  "B",
  "C",
  "D",
  "B",
  "B",
  "B",
  "C",
  "B",
  "B",
  "C",
  "B",
  "B",
  "C",
  "C",
  "B",
  "A",
  "C",
  "C",
  "A",
  "A",
  "B",
  "B",
  "C",
  "B",
  "D",
  "B",
  "C",
  "D",
  "D",
  "C",
  "C",
  "C",
  "D",
  "B",
  "A",
  "C",
  "A",
  "D",
  "B",
  "B",
  "D",
  "C",
  "A",
  "A",
  "D",
  "B",
  "D",
  "D",
  "B",
  "D",
  "C",
  "D",
  "B",
  "C",
  "D",
  "A",
  "D",
  "D",
  "D",
  "B",
  "C",
  "B",
  "D",
  "B",
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "D",
  "C",
  "D",
  "A",
  "D",
  "B",
  "D",
  "C",
  "D",
  "D",
  "A",
  "A",
  "D",
  "D",
  "C",
  "B",
  "B",
  "A",
  "B",
  "D",
  "A",
];

export { initialQuestions, answerKey };
