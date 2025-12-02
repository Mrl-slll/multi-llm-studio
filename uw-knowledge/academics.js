// UW-Madison Academic Knowledge Base
module.exports = {
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
      ]
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
        courses: ["CS 200", "CS 300", "MATH 221", "MATH 222", "STAT 240", "CHEM 103/109", "PHYSICS 201/202"],
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
