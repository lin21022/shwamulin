const PROJECTS = [
  {
    id: "project1",
    role: "PowerAsia R&D",
    title: "Current-Based Motor Belt Fault Detection System",
    description: "PowerAsia developed an AI-powered monitoring system for early motor fault detection. To expand its capabilities, the R&D team extended the system to detect mechanical faults such as belt failures and cooling fan malfunctions. I designed and implemented a current trend–based algorithm for motor belt fault detection and integrated it into the AI monitoring system.",
    skills: [
      "Developed a current trend–based belt fault detection algorithm.",
      "Differentiated belt slippage, belt breakage, VFD speed adjustments, and normal current fluctuations.",
      "Implemented and validated the detection algorithm using C++ (Arduino).",
      "Enhanced the AI monitoring system by expanding predictive maintenance capabilities to mechanical fault detection."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%872_hxc51i.png"
      // 這裡可以再加更多圖片網址，例如流程圖、實測結果截圖
    ],
    demo: null
  },
  {
    id: "project2",
    role: "Fluid Mechanics",
    title: "Pump System Design",
    description: "Designed a pump and piping system to deliver water from a well to a tank while satisfying flow rate, pressure, and cost constraints. The recommended design achieves safe operating pressure, required flow rate, and cost efficiency by operating the pump at 3600 rpm with a 3.25 in impeller and 2.5 in schedule 80 PVC pipe.",
    skills: [
      "Calculated head loss and system curves for water flow.",
      "Analyzed pump curves and operating points.",
      "Estimated pump power, energy use, and costs.",
      "Evaluated designs and selected optimal solution."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%873_hnrv3i.png"
    ],
    demo: null
  },
  {
    id: "project3",
    role: "Thermal Design",
    title: "AHU Load Calculation and Design Optimization",
    description: "This project focuses on heating and cooling load analysis by applying principles of thermodynamics, psychrometric chart and air treatment within an air handling unit (AHU). I evaluated the AHU system in the Rexburg Temple by calculating the thermal loads for both the existing design, which utilizes a steam humidifier, and a proposed design incorporating a pressurized humidifier. I identified the pressurized humidifier as a more efficient alternative and recommended replacing the steam humidifier.",
    skills: [
      "Thermal system process modeling.",
      "Estimated cost and energy use.",
      "Psychrometric analysis and air property evaluation.",
      "Heating and cooling load calculations.",
      "Humidification system analysis.",
      "Mass and energy balance analysis for humid air streams.",
      "HVAC system performance evaluation."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%874_s0phi4.png"
    ],
    demo: null
  },
  {
    id: "project4",
    role: "Thermal Design · Revit",
    title: "Ventilation and Duct System",
    description: "This project demonstrates my understanding of commercial kitchen ventilation and ductwork design using Revit. Based on the provided model of the Happy Teriyaki restaurant, I developed a mechanical ventilation system focused on hood selection, airflow calculation, and duct layout. A complete ductwork system was modeled in Revit, integrating airflow calculations, equipment placement, and 3D system coordination within the architectural space.",
    skills: [
      "Airflow (CFM) and static pressure calculations.",
      "Duct sizing and system layout design.",
      "Hood, exhaust fan, and make-up air unit selection.",
      "Revit modeling of mechanical systems.",
      "Ventilation principle and code compliance."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%875_aghwua.png"
    ],
    demo: null
  },
  {
    id: "project5",
    role: "Numerical Methods",
    title: "Root-Finding Method Comparison",
    description: "This project evaluates the performance of root-finding methods, including Bisection, Secant, and Ridder's methods. The root of the equation x·sin(10x) − x = 1 was determined using each method, with initial guesses of x = 0.6 and x = 1.2.",
    skills: [
      "Implemented Bisection, Secant, and Ridder's methods in Python.",
      "Chose initial guesses to ensure convergence.",
      "Compared iteration counts and approximation errors.",
      "Visualized convergence and solution accuracy.",
      "Developed modular code to compare multiple root-finding methods."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%876_fgfmhp.png"
    ],
    demo: null
  },
  {
    id: "project6",
    role: "Polaris Assembler Internship",
    title: "Assembly Line Quality Assurance",
    description: "I worked on the production line as an assembly operator, running end-of-line security tests to ensure the completion, quality, and security of snowmobiles across multiple models.",
    skills: [
      "Conducted end-of-line security and quality tests on multiple snowmobile models.",
      "Implemented and optimized standard work instructions.",
      "Identified real-time issues and collaborated with engineers and supervisors.",
      "Analyzed and refined assembly procedures, reducing defects and assembly time."
    ],
    results: [
      "Enhanced production efficiency and reduced defect rates through process improvements.",
      "Strengthened teamwork and communication skills through collaboration.",
      "Expanded engineering knowledge and problem-solving abilities."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%878_el7hsv.png"
    ],
    demo: null
  },
  {
    id: "project7",
    role: "Mechatronic System I",
    title: "Arduino Sous Vide Controller",
    description: "Designed and implemented an Arduino-based sous-vide cooking controller that accurately maintains a user-defined water temperature for an extended period using closed-loop feedback control.",
    skills: [
      "Closed-loop control and PID control implementation.",
      "Real-time feedback with C/C++ programming on Arduino.",
      "Designed a complete user interface using LCD and joystick for selecting temperature and duration."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400606/%E6%8A%95%E5%BD%B1%E7%89%879_bksplx.png"
    ],
    demo: "https://youtu.be/zP-fG8snOAE"
  },
  {
    id: "project8",
    role: "Coursework",
    title: "Thermodynamics I",
    description: "This was my first exposure to this area — hard at the beginning, but increasingly intriguing. The course started with fluid properties and moved into the laws of thermodynamics, eventually allowing me to analyze the basic cycles used in the energy industry. Visiting a real heat plant let me apply what I'd learned in real life.",
    skills: [
      "Determined properties of state.",
      "Applied the First Law of Thermodynamics.",
      "Analyzed reversible and irreversible processes.",
      "Implemented the Second Law of Thermodynamics.",
      "Analyzed basic cycles (Otto, Diesel, Brayton, Rankine, refrigeration).",
      "Evaluated engine efficiency and heat pump/refrigerator COP."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400607/%E6%8A%95%E5%BD%B1%E7%89%8710_q2wl7f.png"
    ],
    demo: null
  },
  {
    id: "project9",
    role: "Mechanical Design",
    title: "SolidWorks FEA",
    description: "This project demonstrates my experience using Finite Element Analysis (FEA) to evaluate the structural performance and load distribution of a base subjected to an external remote load, identifying critical regions where failure might occur.",
    skills: [
      "Conducted realistic FEA studies in SolidWorks, including fixtures, loads, and constraints.",
      "Applied remote loads and analyzed load transfer through components.",
      "Improved mesh quality using refinement and adaptive meshing in high-stress regions.",
      "Interpreted von Mises stress, displacement, and factor of safety.",
      "Obtained the SolidWorks Simulation Associate (CSWA–Simulation) certification."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400607/%E6%8A%95%E5%BD%B1%E7%89%8711_c20ysu.png"
    ],
    demo: null
  },
  {
    id: "project10",
    role: "Mechanical Design",
    title: "Planetary Gear Project",
    description: "This project involved designing and building a model planetary gear assembly using SolidWorks and basic fabrication processes. I modeled the sun, planet, and ring gears, designed the supporting components, and prepared technical drawings. The final model combined a CNC-milled HDPE base with a laser-cut acrylic cover and stand.",
    skills: [
      "Calculated and achieved the intended gear ratio.",
      "Created fully parametric CAD models for the gears and carrier.",
      "Applied assembly mates and used a motion study to verify kinematic behavior.",
      "Translated planetary gear theory into a manufacturable prototype."
    ],
    images: [
      "https://res.cloudinary.com/ddib2y7zi/image/upload/v1789400607/%E6%8A%95%E5%BD%B1%E7%89%8712_qx8xky.png"
    ],
    demo: null
  }
];