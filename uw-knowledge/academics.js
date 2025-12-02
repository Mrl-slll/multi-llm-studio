// UW-Madison Academic Knowledge Base
module.exports = {
  // Course code mapping to ensure correct resource matching
  courseMapping: {
    "CS 200": "Programming I",
    "CS 220": "Data Science Programming I",
    "CS 300": "Programming II",
    "CS 320": "Data Science Programming II",
    "CS 400": "Programming III",
    "MATH 221": "Calculus I",
    "MATH 222": "Calculus II",
    "MATH 234": "Calculus III (Multivariable)",
    "MATH 340": "Linear Algebra",
    "STAT 240": "Data Science Modeling I",
    "ECON 101": "Microeconomics (Intro)",
    "ECON 102": "Macroeconomics (Intro)",
    "ECON 301": "Intermediate Microeconomics",
    "ECON 302": "Intermediate Macroeconomics",
    "ECON 310": "Economic Theory and Data I",
    "CHEM 103": "General Chemistry I",
    "CHEM 104": "General Chemistry II",
    "CHEM 109": "Advanced General Chemistry (Honors)",
    "LSC 251": "Life Sciences Communication",
    "ESL 106": "Academic English I",
    "ESL 107": "Academic English II",
    "ESL 114": "Academic Presentation Skills",
    "ESL 118": "Vocabulary and Grammar"
  },
  
  courses: {
    "STAT 240": {
      name: "Introduction to Data Modeling",
      credits: 3,
      prerequisites: "None",
      description: "Learn R programming, data frames, dplyr, ggplot2, statistical inference, and hypothesis testing",
      topics: [
        "R basics and RStudio",
        "Data frames and tibbles",
        "dplyr: filter, select, mutate, summarize",
        "ggplot2 visualizations",
        "Statistical inference",
        "Hypothesis testing",
        "Confidence intervals",
        "Linear regression basics"
      ],
      difficulty: "Moderate - no prior programming needed but steep learning curve with R",
      workload: "8-10 hours/week including lectures, labs, and assignments",
      tips: [
        "Practice R coding daily - even 15 minutes helps build muscle memory",
        "Start assignments early - debugging takes time, especially with R syntax",
        "Attend TA office hours - they're very helpful for understanding concepts",
        "Use RStudio cheat sheets for dplyr and ggplot2",
        "Form study groups - explaining concepts helps solidify learning",
        "Don't just copy code - understand what each line does",
        "Review lecture notes before starting assignments"
      ],
      common_questions: {
        "Do I need programming experience?": "No, STAT 240 is designed for beginners. You'll learn R from scratch. However, be prepared for a learning curve if you've never coded before.",
        "What's the workload like?": "Expect 8-10 hours per week. Assignments can be time-consuming if you're new to coding, but they get easier as you learn R.",
        "Is it hard?": "Moderate difficulty. The statistical concepts aren't too complex, but R syntax takes practice. Most students find it manageable with consistent effort.",
        "What can I do with this course?": "STAT 240 is great for data science, research, biostatistics, or any field requiring data analysis. It's also a prerequisite for advanced statistics courses."
      },
      professor_tips: "Attend office hours early in semester, participate in discussion sections, and practice coding problems beyond assignments"
    },
    
    "CS 200": {
      name: "Programming I",
      credits: 3,
      prerequisites: "None (concurrent enrollment in MATH 211, 221, or 275 recommended)",
      description: "Foundational Java programming covering variables, loops, conditionals, arrays, methods, and basic object-oriented concepts",
      topics: [
        "Java syntax and basics",
        "Variables and data types (int, double, String, boolean)",
        "Control flow: if-else statements, switch",
        "Loops: for, while, do-while",
        "Methods and functions",
        "Arrays and ArrayLists",
        "Basic object-oriented programming",
        "Debugging and testing",
        "File I/O basics"
      ],
      difficulty: "Beginner-friendly but fast-paced - designed for CS beginners",
      workload: "8-12 hours/week including lectures, labs, and programming assignments",
      tips: [
        "Start homework the day it's assigned - don't wait until the night before",
        "Attend weekly labs - TAs provide invaluable help and clarification",
        "Use online Java tutorials (Oracle docs, W3Schools) for extra practice",
        "Practice coding every day, even just 30 minutes",
        "Don't copy code from others - you'll struggle on exams",
        "Use the Java API documentation - learn to read it early",
        "Test your code with edge cases, not just the examples",
        "Comment your code to understand your logic later"
      ],
      common_questions: {
        "Is CS 200 hard for beginners?": "It's designed for beginners, so no prior experience is needed. The pace is fast, but manageable if you keep up with assignments.",
        "How much math do I need?": "Basic algebra is sufficient. Concurrent math enrollment is recommended but not strictly required.",
        "Can I take this if I've never coded?": "Absolutely! CS 200 assumes no programming background. Many students start here.",
        "What comes after CS 200?": "CS 300 (Programming II) covers data structures and algorithms. CS 200 prepares you well for it."
      },
      professor_tips: "Participate in lab, ask questions early, and don't fall behind - each concept builds on previous ones"
    },
    
    "CS 300": {
      name: "Programming II",
      credits: 3,
      prerequisites: "CS 200 with C or better, or placement exam",
      description: "Data structures and algorithms in Java: LinkedLists, stacks, queues, trees, recursion, sorting, searching, and Big O analysis",
      topics: [
        "Recursion and recursive thinking",
        "LinkedLists (singly-linked, doubly-linked)",
        "Stacks and Queues",
        "Binary Search Trees (BST)",
        "AVL Trees (self-balancing)",
        "Hash tables and hash functions",
        "Sorting algorithms (quicksort, mergesort, heapsort)",
        "Searching algorithms (binary search)",
        "Big O notation and complexity analysis",
        "Iterators and Iterable interface",
        "Generic types in Java"
      ],
      difficulty: "Moderate to challenging - significant step up from CS 200",
      workload: "10-15 hours/week including lectures, assignments, and project work",
      tips: [
        "Draw out data structures on paper - visualizing helps immensely",
        "Master recursion early - it appears in many later topics",
        "Projects get complex - start immediately when assigned",
        "Practice Big O analysis with every algorithm you learn",
        "Form study groups for exam prep and concept discussion",
        "Implement data structures from scratch for practice",
        "Use a debugger to step through recursive calls",
        "Attend office hours when stuck - TAs can guide without giving answers"
      ],
      common_questions: {
        "How much harder is CS 300 than CS 200?": "Significantly harder. CS 300 focuses on abstract thinking and problem-solving, not just syntax. Expect to think more deeply.",
        "Do I need to be good at math?": "Basic algebra and logical thinking are important. Understanding mathematical proofs helps with Big O analysis.",
        "What's the biggest challenge?": "Recursion and understanding pointer-based data structures (LinkedLists, Trees). Practice is key.",
        "Is CS 300 required for CS major?": "Yes, it's a core requirement and prerequisite for most upper-level CS courses (CS 400, 354, 577, etc.)."
      },
      professor_tips: "Practice recursion problems daily, visualize pointer manipulations, and understand WHY each data structure exists"
    },
    
    "CS 400": {
      name: "Programming III",
      credits: 3,
      prerequisites: "CS 300 with C or better",
      description: "Advanced data structures, algorithms, software engineering practices, testing, design patterns, and large-scale project development",
      topics: [
        "Advanced tree structures (Red-Black Trees, B-Trees)",
        "Graph algorithms (BFS, DFS, Dijkstra's, Prim's)",
        "Dynamic programming",
        "Greedy algorithms",
        "Software design patterns (Singleton, Factory, Observer)",
        "Unit testing and JUnit",
        "Version control with Git",
        "Agile development practices",
        "Team collaboration and code reviews",
        "JavaFX for GUI development"
      ],
      difficulty: "Challenging - combines algorithms, design, and teamwork",
      workload: "12-18 hours/week including lectures, assignments, and team project",
      tips: [
        "Team project is major component - communicate well with teammates",
        "Learn Git early - crucial for collaboration",
        "Write tests before code (test-driven development)",
        "Understand design patterns conceptually, not just code",
        "Practice graph algorithms on paper first",
        "Use office hours for project guidance",
        "Start each assignment by reading specs thoroughly",
        "Document your code well - your team will thank you"
      ],
      common_questions: {
        "What's different from CS 300?": "CS 400 focuses on software engineering practices (testing, design, teamwork) in addition to advanced algorithms.",
        "How important is the team project?": "Very important - often 30-40% of your grade. Choose reliable teammates.",
        "Do I need to know JavaFX?": "You'll learn it in class. Prior GUI experience helps but isn't required.",
        "Is CS 400 required?": "Required for CS major. It's a gateway to many upper-level courses."
      },
      professor_tips: "Master Git workflows, practice graph algorithms extensively, and start team project planning early"
    },
    
    "MATH 221": {
      name: "Calculus and Analytic Geometry I",
      credits: 5,
      prerequisites: "Math placement or MATH 112/113/114 with C or better",
      description: "Limits, derivatives, applications of derivatives, integrals, and Fundamental Theorem of Calculus",
      topics: [
        "Limits and continuity",
        "Derivatives and differentiation rules",
        "Chain rule, product rule, quotient rule",
        "Implicit differentiation",
        "Related rates problems",
        "Optimization problems",
        "Mean Value Theorem",
        "Riemann sums and definite integrals",
        "Fundamental Theorem of Calculus",
        "Integration techniques (substitution)"
      ],
      difficulty: "Moderate to challenging - depends on high school calculus background",
      workload: "10-14 hours/week including lectures, discussion, and homework",
      tips: [
        "Attend discussion sections - practice problems are crucial",
        "Do homework early and check answers in back of textbook",
        "MERIT tutoring is excellent for MATH 221",
        "Practice, practice, practice - calculus is a skill",
        "Understand concepts, don't just memorize formulas",
        "Review limits and algebra skills early",
        "Form study groups for difficult problem sets"
      ]
    },
    
    "MATH 222": {
      name: "Calculus and Analytic Geometry II",
      credits: 4,
      prerequisites: "MATH 221 with C or better",
      description: "Integration techniques, sequences, series, polar coordinates, and parametric equations",
      topics: [
        "Integration by parts",
        "Trigonometric substitution",
        "Partial fractions",
        "Improper integrals",
        "Sequences and series",
        "Convergence tests (ratio, root, integral, comparison)",
        "Power series and Taylor series",
        "Polar coordinates",
        "Parametric equations",
        "Arc length and surface area"
      ],
      difficulty: "Challenging - more abstract than MATH 221",
      workload: "10-13 hours/week",
      tips: [
        "Master integration techniques early",
        "Memorize convergence tests - they're testable",
        "Practice series problems extensively",
        "Use online resources (Khan Academy, Paul's Online Math Notes)",
        "Don't fall behind - topics build quickly"
      ],
      common_questions: {
        "Is MATH 222 harder than MATH 221?": "Yes, for most students. The concepts are more abstract (especially series) and integration techniques require more creativity.",
        "What convergence tests should I know?": "Ratio test, root test, integral test, comparison test, limit comparison test, alternating series test, and divergence test.",
        "How important are Taylor series?": "Very important - they appear on exams and are foundational for MATH 234 and engineering courses.",
        "Can I take MATH 234 without MATH 222?": "No, MATH 222 is a prerequisite for MATH 234 (Multivariable Calculus)."
      }
    },
    
    "MATH 234": {
      name: "Calculus—Functions of Several Variables",
      credits: 4,
      prerequisites: "MATH 222 with C or better",
      description: "Multivariable calculus including partial derivatives, multiple integrals, line integrals, surface integrals, and vector calculus",
      topics: [
        "3D coordinate systems and vectors",
        "Vector functions and space curves",
        "Partial derivatives and gradient",
        "Chain rule for multivariable functions",
        "Directional derivatives",
        "Tangent planes and linear approximation",
        "Optimization: critical points, Lagrange multipliers",
        "Double and triple integrals",
        "Change of variables (polar, cylindrical, spherical)",
        "Line integrals and Green's Theorem",
        "Surface integrals",
        "Stokes' Theorem and Divergence Theorem"
      ],
      difficulty: "Challenging - requires strong visualization skills",
      workload: "10-14 hours/week including lectures, discussion, homework",
      tips: [
        "Visualize in 3D - draw sketches for every problem",
        "Master partial derivatives early - they're fundamental",
        "Practice setting up integrals in different coordinate systems",
        "Understand when to use polar/cylindrical/spherical coordinates",
        "Lagrange multipliers take practice - do many problems",
        "Attend discussion sections - practice is crucial",
        "Use online 3D graphing tools (GeoGebra, Desmos 3D)",
        "Review vector calculus identities regularly"
      ],
      common_questions: {
        "Is MATH 234 harder than MATH 222?": "It depends - MATH 234 requires strong spatial visualization but less memorization than MATH 222's series.",
        "Do I need MATH 234 for engineering?": "Yes, it's required for most engineering majors and upper-level physics courses.",
        "What's the hardest topic?": "Most students struggle with line/surface integrals and the big theorems (Green's, Stokes', Divergence).",
        "Can I skip lectures?": "Not recommended - visualization and problem-solving techniques are hard to learn from textbook alone."
      },
      professor_tips: "Draw everything, practice coordinate transformations extensively, and understand the physical meaning of vector operations"
    },
    
    "MATH 340": {
      name: "Elementary Matrix and Linear Algebra",
      credits: 3,
      prerequisites: "MATH 222 or MATH 276 with C or better",
      description: "Systems of linear equations, matrices, determinants, vector spaces, linear transformations, eigenvalues, and eigenvectors",
      topics: [
        "Systems of linear equations and Gaussian elimination",
        "Matrix operations and inverses",
        "Determinants and their properties",
        "Vector spaces and subspaces",
        "Linear independence and basis",
        "Dimension and rank",
        "Linear transformations",
        "Eigenvalues and eigenvectors",
        "Diagonalization",
        "Inner product spaces",
        "Orthogonality and Gram-Schmidt process",
        "Applications: least squares, Markov chains"
      ],
      difficulty: "Moderate to challenging - very abstract and proof-based",
      workload: "9-12 hours/week including lectures, homework, and proof writing",
      tips: [
        "Linear algebra is abstract - focus on understanding concepts, not just computation",
        "Practice writing proofs - many homework problems require formal proofs",
        "Visualize transformations geometrically when possible",
        "Master row reduction (RREF) early - it's used constantly",
        "Understand the relationship between matrices and linear transformations",
        "Do practice problems beyond homework - exams test understanding",
        "Form study groups to discuss abstract concepts",
        "Use online resources like 3Blue1Brown's Essence of Linear Algebra videos"
      ],
      common_questions: {
        "Is MATH 340 proof-based?": "Yes, you'll need to write formal proofs. It's more theoretical than computational.",
        "Do I need MATH 340 for CS?": "Recommended for machine learning, computer graphics, and theoretical CS courses. Required for some upper-level CS electives.",
        "What's the difference between MATH 340 and MATH 341?": "MATH 341 is more advanced and proof-intensive, intended for math majors. MATH 340 covers similar topics with more applications.",
        "Is MATH 340 useful for data science?": "Extremely useful - linear algebra is fundamental to machine learning algorithms, dimensionality reduction, and data analysis."
      },
      professor_tips: "Focus on conceptual understanding over memorization, practice proof techniques, and connect abstract concepts to concrete examples"
    },
    
    "CS 220": {
      name: "Data Science Programming I",
      credits: 3,
      prerequisites: "CS 200 or equivalent programming experience",
      description: "Python programming for data science including NumPy, pandas, data visualization, web scraping, and basic machine learning",
      topics: [
        "Python basics (if coming from Java background)",
        "Jupyter notebooks and data exploration",
        "NumPy arrays and vectorized operations",
        "Pandas DataFrames and data manipulation",
        "Data cleaning and preprocessing",
        "Data visualization with matplotlib",
        "Web scraping with BeautifulSoup",
        "APIs and JSON data",
        "Basic statistical analysis",
        "Introduction to machine learning concepts"
      ],
      difficulty: "Moderate - easier if you have CS 200 background",
      workload: "8-12 hours/week including lectures, labs, and projects",
      tips: [
        "Practice Python daily - syntax is different from Java",
        "Start projects early - data cleaning takes longer than expected",
        "Use Jupyter notebooks for experimentation and testing",
        "Master pandas early - it's the core of data manipulation",
        "Attend lab sections - TAs help with debugging",
        "Read documentation (NumPy, pandas) to learn beyond lectures",
        "Use Stack Overflow wisely - understand solutions, don't just copy",
        "Visualize your data frequently to catch errors"
      ],
      common_questions: {
        "Do I need CS 200 first?": "Recommended but not strictly required if you have programming experience. CS 220 teaches Python from scratch.",
        "Python vs Java - which is harder?": "Python syntax is generally easier, but CS 220 moves fast through data science concepts.",
        "What can I do after CS 220?": "Take CS 320 (Data Science Programming II), STAT 340, or other data science courses. Great for internships.",
        "Is CS 220 required for CS major?": "No, but it's popular among CS students interested in data science and machine learning."
      },
      professor_tips: "Master pandas DataFrames, practice with real datasets, and build a portfolio of data science projects"
    },
    
    "CS 320": {
      name: "Data Science Programming II",
      credits: 3,
      prerequisites: "CS 220 with C or better",
      description: "Advanced data science including machine learning, big data processing, databases, cloud computing, and deployment",
      topics: [
        "Machine learning: regression, classification, clustering",
        "Scikit-learn and ML pipelines",
        "SQL databases and queries",
        "Big data processing with Spark",
        "Cloud computing (AWS, Docker)",
        "Web applications with Flask",
        "Model deployment and APIs",
        "Data ethics and bias",
        "Performance optimization",
        "Reproducible research practices"
      ],
      difficulty: "Challenging - combines many advanced topics",
      workload: "10-15 hours/week including lectures, projects, and exams",
      tips: [
        "Projects are substantial - start immediately when released",
        "Learn SQL thoroughly - it's used in industry constantly",
        "Understand ML concepts, not just library calls",
        "Docker and cloud computing have steep learning curves - practice early",
        "Build a portfolio from your projects for internships",
        "Attend office hours for project guidance",
        "Test your code with various datasets, not just provided ones",
        "Document your code well - you'll need to explain it"
      ],
      common_questions: {
        "Is CS 320 harder than CS 220?": "Yes, significantly. CS 320 covers advanced topics and expects strong programming skills.",
        "Do I need to know machine learning before?": "No, CS 320 teaches ML from basics. But CS 220 background is essential.",
        "What's the final project like?": "Large, multi-week project combining ML, databases, and deployment. Choose a topic you're interested in.",
        "Is CS 320 useful for internships?": "Extremely useful - covers practical data science skills used in industry (SQL, ML, cloud, Docker)."
      },
      professor_tips: "Focus on understanding ML principles, practice SQL queries extensively, and learn Docker/cloud early"
    },
    
    "ECON 301": {
      name: "Intermediate Microeconomic Theory",
      credits: 3,
      prerequisites: "ECON 101 and MATH 211, 221, or 275",
      description: "Advanced microeconomics using calculus: consumer theory, producer theory, market structures, game theory, and welfare economics",
      topics: [
        "Consumer preferences and utility maximization",
        "Budget constraints and demand theory",
        "Income and substitution effects (Slutsky equation)",
        "Producer theory and cost minimization",
        "Profit maximization and supply curves",
        "Perfect competition and market equilibrium",
        "Monopoly and price discrimination",
        "Oligopoly and game theory basics",
        "General equilibrium and welfare theorems",
        "Market failures: externalities, public goods, asymmetric information"
      ],
      difficulty: "Moderate to challenging - requires calculus and graphical analysis",
      workload: "9-12 hours/week including lectures, problem sets, and exam prep",
      tips: [
        "Master constrained optimization (Lagrange multipliers very useful)",
        "Draw graphs for every concept - microeconomics is highly visual",
        "Practice calculus-based problems - exams test mathematical skills",
        "Understand economic intuition behind math - don't just memorize formulas",
        "Review MATH 221/222 optimization if rusty on calculus",
        "Start problem sets early - they're challenging and time-consuming",
        "Attend TA office hours for problem set help",
        "Connect concepts to real-world examples for better retention"
      ],
      common_questions: {
        "How much calculus is in ECON 301?": "Extensive - derivatives for optimization, partial derivatives for comparative statics. Strong calculus skills are essential.",
        "Is ECON 301 required for Econ major?": "Yes, it's a core requirement for the Economics major.",
        "What's different from ECON 101?": "ECON 301 is much more mathematical and theoretical. ECON 101 is conceptual; ECON 301 uses formal models.",
        "Can I take ECON 301 and 302 together?": "Possible but challenging - both are math-heavy. Most students take them sequentially."
      },
      professor_tips: "Practice optimization problems extensively, understand the mathematics behind economic models, and review game theory basics"
    },
    
    "ECON 302": {
      name: "Intermediate Macroeconomic Theory",
      credits: 3,
      prerequisites: "ECON 102 and MATH 211, 221, or 275",
      description: "Macroeconomic models of growth, business cycles, unemployment, inflation, monetary and fiscal policy",
      topics: [
        "National income accounting and GDP measurement",
        "Solow growth model",
        "Labor market and unemployment",
        "Inflation and monetary policy",
        "IS-LM model and aggregate demand",
        "Aggregate supply and Phillips curve",
        "Fiscal policy and government debt",
        "Open economy macroeconomics",
        "Exchange rates and international trade",
        "Business cycle theories",
        "Financial markets and crises"
      ],
      difficulty: "Moderate - less math-intensive than ECON 301 but still rigorous",
      workload: "8-11 hours/week including lectures, problem sets, and readings",
      tips: [
        "Understand the intuition behind models, not just equations",
        "Draw IS-LM and AS-AD diagrams repeatedly until fluent",
        "Follow current economic news (Federal Reserve, inflation data, GDP reports)",
        "Practice comparative statics - how do shocks affect equilibrium?",
        "Memorize key equations and their economic meanings",
        "Work through problem sets with classmates - explaining helps",
        "Use office hours to clarify model assumptions and logic",
        "Review algebra for equation manipulation"
      ],
      common_questions: {
        "Is ECON 302 easier than ECON 301?": "Generally yes - less calculus, more graphical and algebraic analysis. But it's still rigorous.",
        "Do I need ECON 102 first?": "Yes, it's a prerequisite. ECON 302 builds on ECON 102 concepts with formal models.",
        "How math-heavy is ECON 302?": "Moderate - algebra and basic calculus. Less math than ECON 301 but more than ECON 102.",
        "Is ECON 302 useful for finance careers?": "Yes - understanding macroeconomics is crucial for finance, especially monetary policy and interest rates."
      },
      professor_tips: "Master IS-LM and AS-AD frameworks, follow real-world policy debates, and practice model-based problem solving"
    },
    
    "ECON 310": {
      name: "Economic Theory and Data I",
      credits: 3,
      prerequisites: "ECON 301 or consent of instructor; MATH 221 or equivalent",
      description: "Applied econometrics combining economic theory with statistical methods for causal inference and data analysis",
      topics: [
        "Probability and statistics review",
        "Simple and multiple linear regression",
        "Ordinary Least Squares (OLS) estimation",
        "Hypothesis testing and confidence intervals",
        "Model specification and diagnostics",
        "Omitted variable bias",
        "Causality vs correlation",
        "Instrumental variables",
        "Panel data methods",
        "Difference-in-differences",
        "Regression discontinuity design",
        "Introduction to program evaluation"
      ],
      difficulty: "Challenging - combines economic theory, statistics, and programming",
      workload: "10-14 hours/week including lectures, problem sets, and empirical projects",
      tips: [
        "Learn R or Stata early - you'll use it extensively for assignments",
        "Understand the economics behind regression models, not just mechanics",
        "Practice interpreting regression output - exams test this heavily",
        "Start empirical projects early - data cleaning is time-consuming",
        "Review STAT 240 or basic statistics if needed",
        "Attend lab sections for programming help",
        "Read applied economics papers to see methods in practice",
        "Form study groups to discuss conceptual questions"
      ],
      common_questions: {
        "Do I need programming experience?": "Not required but helpful. You'll learn R or Stata in the course.",
        "Is ECON 310 required for Econ major?": "Yes, for the BS in Economics. It's optional for BA.",
        "What's the difference between ECON 310 and STAT 240?": "ECON 310 focuses on causal inference and applied economics; STAT 240 is more general data science.",
        "Is ECON 310 useful for jobs?": "Extremely useful - econometrics skills are in high demand for data analyst, research, and consulting roles."
      },
      professor_tips: "Master OLS regression deeply, understand causal inference frameworks, and practice with real economic datasets"
    },
    
    "CHEM 103": {
      name: "General Chemistry I",
      credits: 4,
      prerequisites: "High school chemistry or placement",
      description: "First semester of general chemistry covering atomic structure, bonding, stoichiometry, thermodynamics, and gas laws",
      topics: [
        "Atomic structure and periodic trends",
        "Chemical bonding (ionic, covalent, metallic)",
        "Molecular geometry and VSEPR theory",
        "Stoichiometry and limiting reagents",
        "Solution chemistry and molarity",
        "Gas laws (ideal gas law, partial pressures)",
        "Thermochemistry and enthalpy",
        "Quantum mechanics basics",
        "Electron configuration and orbital diagrams",
        "Lewis structures and resonance"
      ],
      difficulty: "Moderate - fast-paced with lab component",
      workload: "10-14 hours/week including lectures, lab (3 hours), and homework",
      tips: [
        "Attend every lecture - material builds quickly",
        "Practice stoichiometry problems until automatic",
        "Master dimensional analysis early",
        "Lab reports take time - don't procrastinate",
        "Use MERIT tutoring - very helpful for CHEM 103",
        "Draw Lewis structures for every molecule",
        "Practice, practice, practice - chemistry requires repetition",
        "Form study groups for problem sets and exam prep"
      ],
      common_questions: {
        "Do I need CHEM 103 for pre-med?": "Yes, CHEM 103-104 is required for pre-med and many science majors.",
        "How hard is CHEM 103?": "Moderate difficulty. Challenging if you haven't had high school chemistry, but manageable with consistent effort.",
        "Is lab graded separately?": "Lab is part of your overall grade - typically 20-25%. Don't neglect it.",
        "Can I take CHEM 109 instead?": "CHEM 109 is the honors version - more rigorous. Take it if you have strong chemistry background."
      },
      professor_tips: "Master stoichiometry early, stay on top of lab reports, and use active problem-solving practice"
    },
    
    "CHEM 104": {
      name: "General Chemistry II",
      credits: 4,
      prerequisites: "CHEM 103 with C or better",
      description: "Second semester of general chemistry covering kinetics, equilibrium, acids and bases, thermodynamics, and electrochemistry",
      topics: [
        "Chemical kinetics and reaction rates",
        "Rate laws and reaction mechanisms",
        "Chemical equilibrium and Le Chatelier's principle",
        "Equilibrium constants (Kc, Kp)",
        "Acid-base chemistry (pH, pKa, buffers)",
        "Titrations and indicators",
        "Solubility equilibria (Ksp)",
        "Thermodynamics (entropy, Gibbs free energy)",
        "Electrochemistry (redox reactions, cell potentials)",
        "Nuclear chemistry"
      ],
      difficulty: "Moderate to challenging - more conceptual than CHEM 103",
      workload: "10-14 hours/week including lectures, lab, and homework",
      tips: [
        "Master equilibrium concepts - they appear throughout the course",
        "Practice ICE tables (Initial, Change, Equilibrium) extensively",
        "Understand acid-base chemistry deeply - it's testable heavily",
        "Memorize strong acids and bases",
        "Thermodynamics requires understanding, not just memorization",
        "Lab practical exams - practice lab techniques",
        "Use MERIT tutoring for difficult topics",
        "Connect concepts to real-world applications for better retention"
      ],
      common_questions: {
        "Is CHEM 104 harder than CHEM 103?": "Many students find CHEM 104 more challenging due to abstract concepts (equilibrium, thermodynamics).",
        "Do I need CHEM 104 for organic chemistry?": "Yes, CHEM 104 is a prerequisite for CHEM 343 (Organic Chemistry).",
        "What's the hardest topic?": "Equilibrium and thermodynamics are commonly cited as the most challenging topics.",
        "How important is the lab?": "Very important - lab is 20-25% of grade and includes a practical exam."
      },
      professor_tips: "Master equilibrium calculations, understand thermodynamics conceptually, and practice redox balancing"
    },
    
    "CHEM 109": {
      name: "Advanced General Chemistry",
      credits: 5,
      prerequisites: "High school chemistry and strong math background (concurrent MATH 221 recommended)",
      description: "Honors general chemistry covering one year of material in one semester with deeper theory and problem-solving",
      topics: [
        "Quantum mechanics and atomic structure (deeper than CHEM 103)",
        "Chemical bonding and molecular orbital theory",
        "Thermodynamics (entropy, enthalpy, Gibbs free energy)",
        "Chemical kinetics and mechanisms",
        "Equilibrium (gas, acid-base, solubility)",
        "Electrochemistry and redox reactions",
        "Coordination chemistry",
        "Advanced stoichiometry and problem-solving",
        "Group theory basics",
        "Spectroscopy introduction"
      ],
      difficulty: "Very challenging - accelerated pace and rigorous",
      workload: "14-18 hours/week including lectures, lab, and problem sets",
      tips: [
        "Only take CHEM 109 if you have strong chemistry and math background",
        "Expect a very fast pace - covers CHEM 103 + 104 in one semester",
        "Problem sets are difficult - start early and use office hours",
        "Form study groups with classmates - collaboration is key",
        "Review calculus - thermodynamics uses derivatives and integrals",
        "Don't fall behind - material builds extremely quickly",
        "Use professor office hours - they're experts and love to help motivated students",
        "Lab is intensive - come prepared and manage time well"
      ],
      common_questions: {
        "Should I take CHEM 109 or CHEM 103?": "CHEM 109 if you: (1) have AP Chemistry 5, (2) love chemistry, (3) want rigorous challenge. Otherwise, take CHEM 103-104.",
        "Is CHEM 109 worth it?": "Yes if you're a chemistry major or pre-med with strong background. It's excellent preparation for advanced courses.",
        "How much harder is CHEM 109 than CHEM 103?": "Significantly harder - faster pace, more theory, harder exams. But curves are often generous.",
        "Can I switch to CHEM 103 if struggling?": "Usually yes in first few weeks, but check with advisor quickly."
      },
      professor_tips: "Embrace the challenge, use all available resources, and develop strong problem-solving skills early"
    },
    
    "LSC 251": {
      name: "Life Sciences Communication: Principles and Applications",
      credits: 3,
      prerequisites: "None",
      description: "Science communication for diverse audiences including writing, presentation, and visual communication skills",
      topics: [
        "Science communication principles",
        "Writing for different audiences (experts, public, policymakers)",
        "Visual communication and infographics",
        "Oral presentations and public speaking",
        "Science journalism and storytelling",
        "Social media and digital communication",
        "Ethics in science communication",
        "Communicating uncertainty and risk",
        "Engaging non-expert audiences",
        "Science advocacy and policy communication"
      ],
      difficulty: "Moderate - writing and presentation intensive",
      workload: "8-10 hours/week including class, readings, and writing assignments",
      tips: [
        "Start writing assignments early - drafts improve with revision",
        "Practice presentations before class - reduces anxiety",
        "Read science news regularly (NYT Science, Science News, The Conversation)",
        "Use feedback from peers and instructor to improve",
        "Experiment with different communication formats (blogs, infographics, videos)",
        "Attend optional workshops on writing and presenting",
        "Engage with class discussions - participation matters",
        "Build a portfolio of your work for future applications"
      ],
      common_questions: {
        "Is LSC 251 required for life sciences majors?": "Required for some majors (like Life Sciences Communication), optional for others. Check your degree requirements.",
        "Do I need to be good at writing?": "You'll improve throughout the course. Willingness to learn and revise is more important than initial skill.",
        "What kinds of assignments are there?": "Writing assignments (op-eds, blogs, press releases), presentations, visual communication projects, peer reviews.",
        "Is LSC 251 useful for STEM careers?": "Very useful - communication skills are critical for research, industry, medicine, and public health careers."
      },
      professor_tips: "Practice translating complex science for lay audiences, embrace revision, and develop your unique voice"
    },
    
    "ESL 106": {
      name: "Academic English I: Reading, Writing, and Discussion",
      credits: 3,
      prerequisites: "Placement test or ESL advisor recommendation",
      description: "Academic English skills for multilingual students: reading comprehension, academic writing, and discussion participation",
      topics: [
        "Academic reading strategies",
        "Vocabulary development for academic contexts",
        "Essay structure and organization",
        "Thesis statements and topic sentences",
        "Paragraph development",
        "Summarizing and paraphrasing",
        "Citation and avoiding plagiarism",
        "Grammar for academic writing",
        "Class discussion participation",
        "Critical thinking and analysis"
      ],
      difficulty: "Moderate - depends on English proficiency level",
      workload: "8-10 hours/week including class, readings, and writing",
      tips: [
        "Read academic articles daily to build vocabulary and comprehension",
        "Use the Writing Center for feedback on drafts",
        "Practice speaking in class - participation improves fluency",
        "Keep a vocabulary journal with new academic words",
        "Watch TED talks and academic lectures for listening practice",
        "Form study groups with other ESL students",
        "Use ESL tutoring resources at GUTS",
        "Don't be afraid to ask questions in class"
      ],
      common_questions: {
        "Do I have to take ESL courses?": "Depends on placement test results. Some international students are placed directly into English 100.",
        "Will ESL courses count toward graduation?": "Yes, ESL courses count as elective credits.",
        "How long does it take to complete ESL sequence?": "Varies - some students take one semester, others take multiple ESL courses. Depends on placement.",
        "Can I take other courses while in ESL?": "Yes, ESL courses are in addition to your major courses."
      },
      professor_tips: "Engage actively in all four skills (reading, writing, speaking, listening), use campus resources, and practice daily"
    },
    
    "ESL 107": {
      name: "Academic English II: Advanced Reading and Writing",
      credits: 3,
      prerequisites: "ESL 106 or placement",
      description: "Advanced academic English with focus on research writing, critical reading, and academic discourse",
      topics: [
        "Advanced reading strategies for complex texts",
        "Research paper writing",
        "Literature review and source integration",
        "Argumentation and persuasive writing",
        "Advanced grammar and sentence variety",
        "Academic style and tone",
        "Peer review and revision",
        "Presentation of research",
        "Discipline-specific writing conventions",
        "Critical analysis of sources"
      ],
      difficulty: "Moderate to challenging - prepares for college-level writing",
      workload: "9-12 hours/week including class, research, and writing",
      tips: [
        "Start research papers early - finding sources takes time",
        "Use the library's research guides and ask librarians for help",
        "Practice integrating quotes and paraphrases smoothly",
        "Read examples of academic writing in your field",
        "Attend Writing Center appointments for major papers",
        "Build a personal library of useful academic phrases and transitions",
        "Practice self-editing before submitting drafts",
        "Engage with feedback - revision is how you improve"
      ],
      common_questions: {
        "What's different from ESL 106?": "ESL 107 is more advanced - longer papers, more complex readings, research-based writing.",
        "Does ESL 107 prepare me for English 100?": "Yes, ESL 107 is designed to prepare students for college composition courses.",
        "Can I skip to English 100?": "Only if placement test results allow. ESL 107 provides valuable preparation.",
        "Will this help with papers in other classes?": "Absolutely - you'll learn research and writing skills applicable to all courses."
      },
      professor_tips: "Develop strong research skills, practice academic writing conventions, and build confidence in your voice"
    },
    
    "ESL 114": {
      name: "Academic Presentation Skills",
      credits: 2,
      prerequisites: "Placement or ESL advisor recommendation",
      description: "Oral presentation skills for academic contexts including pronunciation, presentation structure, and visual aids",
      topics: [
        "Pronunciation and intelligibility",
        "Presentation structure and organization",
        "Visual aids and PowerPoint design",
        "Body language and eye contact",
        "Managing presentation anxiety",
        "Responding to questions",
        "Group presentations",
        "Academic discourse markers",
        "Voice projection and pacing",
        "Cultural aspects of presentations"
      ],
      difficulty: "Moderate - requires stepping out of comfort zone",
      workload: "6-8 hours/week including class, preparation, and practice",
      tips: [
        "Practice presentations multiple times before class",
        "Record yourself to identify areas for improvement",
        "Use the mirror technique to practice eye contact",
        "Join Toastmasters (public speaking club) for extra practice",
        "Watch TED talks to learn presentation techniques",
        "Get feedback from classmates and instructor",
        "Focus on clarity over perfection",
        "Prepare for Q&A by anticipating questions"
      ],
      common_questions: {
        "Will this help with class presentations?": "Yes - skills directly transfer to presentations in major courses.",
        "Do I have to present in front of class?": "Yes, practice presentations are core to the course. Start with low-stakes presentations.",
        "What if I'm very nervous about public speaking?": "The course is designed to build confidence gradually. Everyone improves with practice.",
        "Is pronunciation a major focus?": "Pronunciation is covered, but the main focus is effective communication and presentation skills."
      },
      professor_tips: "Practice regularly, embrace feedback, and remember that effective communication is more important than perfect English"
    },
    
    "ESL 118": {
      name: "Vocabulary and Grammar for Academic Writing",
      credits: 2,
      prerequisites: "Placement or ESL advisor recommendation",
      description: "Academic vocabulary and grammar for writing across disciplines with focus on precision and complexity",
      topics: [
        "Academic Word List (AWL) vocabulary",
        "Discipline-specific terminology",
        "Collocations and word partnerships",
        "Complex sentence structures",
        "Verb tenses in academic writing",
        "Articles and prepositions",
        "Hedging and stance markers",
        "Nominalization",
        "Parallel structure",
        "Common grammar errors and corrections"
      ],
      difficulty: "Moderate - detail-oriented",
      workload: "6-8 hours/week including class, exercises, and application",
      tips: [
        "Keep a personal vocabulary journal with example sentences",
        "Use flashcard apps (Anki, Quizlet) for vocabulary review",
        "Read academic articles and notice vocabulary usage",
        "Practice using new vocabulary in your writing immediately",
        "Review grammar rules and then apply in writing",
        "Use corpus tools (COCA, Google Ngram) to check word usage",
        "Do practice exercises beyond homework",
        "Connect grammar study to your actual writing needs"
      ],
      common_questions: {
        "Is this a grammar review course?": "Partly - it covers grammar for academic writing specifically, not general grammar.",
        "How much vocabulary will I learn?": "Hundreds of academic words, with focus on high-frequency academic vocabulary.",
        "Can I take this with other ESL courses?": "Yes, ESL 118 complements ESL 106/107 well.",
        "Will this improve my writing grades?": "Yes - stronger vocabulary and grammar directly improve writing quality."
      },
      professor_tips: "Apply new vocabulary immediately in your writing, review regularly, and notice patterns in academic texts"
    }
  },
  
  study_tips: {
    general: [
      "Use the Pomodoro technique (25 min focus, 5 min break) for studying",
      "Study in groups to discuss concepts, but ensure you understand individually",
      "Attend professor and TA office hours - they want to help you succeed",
      "Start assignments early - Murphy's Law always applies to coding and problem sets",
      "Take breaks and get adequate sleep - cramming is less effective than spaced repetition",
      "Use active recall: quiz yourself instead of passively re-reading notes",
      "Teach concepts to others - it solidifies your own understanding"
    ],
    
    exam_prep: [
      "Review past exams if available (many professors post them)",
      "Create concise study guides summarizing key concepts and formulas",
      "Practice problems > re-reading notes (especially for STEM courses)",
      "Get 7-8 hours of sleep before exams - sleep improves memory retention",
      "Arrive early to exam to settle nerves and review notes",
      "Read each exam question carefully - look for keywords",
      "Budget your time during exams (e.g., 2 minutes per point)"
    ],
    
    coding_tips: [
      "Code every day, even if just for 15-30 minutes",
      "Read documentation - learning to read docs is crucial",
      "Debug systematically - use print statements or debugger",
      "Test edge cases, not just happy path examples",
      "Comment your code to explain complex logic",
      "Use version control (Git) for all projects",
      "Refactor code after it works - make it clean and readable"
    ]
  },
  
  resources: {
    tutoring: {
      "MERIT": {
        description: "Free peer tutoring for STEM courses",
        courses: [
          "CS 200", "CS 220", "CS 300", "CS 320", "CS 400",
          "MATH 221", "MATH 222", "MATH 234", "MATH 340",
          "STAT 240",
          "CHEM 103", "CHEM 104", "CHEM 109",
          "PHYSICS 201", "PHYSICS 202",
          "ECON 101", "ECON 102"
        ],
        location: "Various residence halls (1st floor commons areas)",
        hours: "Sunday-Thursday 7:00 PM - 10:00 PM",
        how_to_use: "Drop in during scheduled hours, bring specific questions or homework",
        website: "https://ls.wisc.edu/merit/"
      },
      
      "Greater University Tutoring Service (GUTS)": {
        description: "Free tutoring for most undergraduate courses",
        coverage: "Wide range of courses beyond STEM",
        location: "Helen C. White Library and online",
        cost: "Free for most services",
        how_to_use: "Schedule appointments via their website",
        website: "https://guts.wisc.edu/"
      },
      
      "Office Hours": {
        description: "Professor and TA office hours",
        tips: [
          "Check course syllabus for professor and TA office hour times",
          "Don't be intimidated - professors want to help",
          "Prepare specific questions beforehand",
          "Go early in the semester to build rapport",
          "Bring your attempted work to show effort"
        ]
      }
    },
    
    study_spaces: {
      "Memorial Library": {
        description: "Main campus library with extensive study spaces",
        features: ["Quiet floors (4-8)", "Group study rooms", "24/7 access during finals", "Computer labs"],
        best_for: "Solo studying, quiet environment",
        booking: "Use LibCal for group study rooms"
      },
      
      "College Library": {
        description: "Engineering-focused library",
        location: "Engineering Hall",
        features: ["Group study rooms", "Whiteboards", "Near engineering classes"],
        best_for: "CS/Engineering students, group projects"
      },
      
      "Helen C. White Library": {
        description: "Humanities library in Memorial Library building",
        features: ["Individual and group study rooms", "Central location"],
        best_for: "Writing, humanities courses, group study"
      },
      
      "Union South": {
        description: "Student union with casual study spaces",
        features: ["Lounges", "Food nearby", "Less formal atmosphere"],
        best_for: "Casual studying, between classes"
      }
    },
    
    online_resources: {
      "MyUW": {
        description: "Student portal for grades, registration, finances",
        url: "https://my.wisc.edu"
      },
      
      "Canvas": {
        description: "Learning management system for course materials",
        url: "https://canvas.wisc.edu"
      },
      
      "LinkedIn Learning": {
        description: "Free online courses for UW students",
        topics: ["Programming", "Data science", "Business skills", "Design"],
        access: "Login with UW NetID at go.wisc.edu/linkedin"
      },
      
      "Khan Academy": {
        description: "Free math and science video tutorials",
        best_for: "Math review, calculus practice"
      }
    }
  }
};
