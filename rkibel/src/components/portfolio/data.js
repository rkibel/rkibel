export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "Email", href: "mailto:ron.kibel1@gmail.com" },
  { label: "GitHub", href: "https://github.com/rkibel" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rkibel/" },
];

export const experiences = [
  {
    company: "Google Beam",
    role: "Student Researcher",
    dates: "05/2025 - 09/2025",
    location: "Mountain View, CA",
    accent: "cyan",
    summary:
      "Built camera visualization and diagnostics tooling for a zero-copy, hardware-accelerated graphics pipeline.",
    bullets: [
      "Developed a ChromeOS camera visualization tool around OpenGL, VA-API, and DRM.",
      "Supported diagnostics for hardware ML face detection, triangulation, and multi-camera debugging.",
      "Worked close to real-time camera and graphics systems where latency, copies, and observability matter.",
    ],
    tags: ["OpenGL", "VA-API", "DRM", "ChromeOS", "Hardware ML", "Multi-camera"],
  },
  {
    company: "ServiceNow",
    role: "Software Engineering Intern, AI Search",
    dates: "05/2024 - 09/2024",
    location: "Santa Clara, CA",
    accent: "emerald",
    summary:
      "Extended AI Search with multimodal retrieval across text-to-image and image-to-image workflows.",
    bullets: [
      "Integrated mixed-media indexing using Apache Tika, OpenCV, and CLIP embeddings.",
      "Built retrieval paths for text-to-image and image-to-image search experiences.",
      "Connected document extraction, visual features, and embedding search into production-oriented systems.",
    ],
    tags: ["Apache Tika", "OpenCV", "CLIP", "Embeddings", "Multimodal Search"],
  },
  {
    company: "ServiceNow",
    role: "Software Engineering Intern, Developer Productivity",
    dates: "05/2022 - 09/2023",
    location: "Santa Clara, CA",
    accent: "violet",
    summary:
      "Created and deployed static code scan automation for developer productivity teams.",
    bullets: [
      "Reduced analyzer turnaround from roughly 3 months to days through automation.",
      "Supported creation and deployment workflows for 1000+ static code scan analyzers.",
      "Built with Java, Maven, and Jenkins CI/CD in a large engineering organization.",
    ],
    tags: ["Java", "Maven", "Jenkins", "CI/CD", "Static Analysis"],
  },
];

export const projects = [
  {
    title: "POINTER",
    kicker: "Featured",
    summary:
      "Real-time AR framework that combines 6DoF pose estimation and vision-language models to anchor digital content to dynamic physical objects.",
    areas: ["AR", "6DoF Pose", "Vision-Language Models", "Object Anchors"],
    methods: ["real-time perception", "pose axes", "object-centric interaction", "spatial grounding"],
    impact:
      "Explores practical interfaces where digital instructions and context stay attached to the physical objects users manipulate.",
    visual: "pointer",
    featured: true,
  },
  {
    title: "Temporal Scene Simplification for Bionic Vision Prostheses",
    summary:
      "Scene simplification pipeline using saliency mapping, instance segmentation, and depth estimation for prosthetic vision research.",
    areas: ["Bionic Vision", "Segmentation", "Depth", "Saliency"],
    methods: ["saliency maps", "instance masks", "depth cues", "temporal filtering"],
    impact:
      "Targets visual overload by prioritizing scene information that could matter most to prosthetic vision users.",
    visual: "bionic",
  },
  {
    title: "Semantic 3D Reconstruction from Multi-Robot Systems",
    summary:
      "Drone-swarm reconstruction project focused on communication graphs, robustness to noise, and semantic 3D mapping.",
    areas: ["3D Reconstruction", "Multi-Robot Systems", "Sensor Fusion"],
    methods: ["point clouds", "communication graph", "noise robustness", "multi-view geometry"],
    impact:
      "Studies how teams of robots can reconstruct shared environments under realistic sensing and communication constraints.",
    visual: "robots",
  },
  {
    title: "Mitigating Reward Hacking",
    summary:
      "Reinforcement learning project examining reward design and mitigation strategies for unintended optimization behavior.",
    areas: ["Reinforcement Learning", "Reward Design", "AI Safety"],
    methods: ["reward curves", "agent behavior", "failure analysis", "mitigation strategies"],
    impact:
      "Focuses on making learned behavior better aligned with intended task outcomes instead of proxy rewards.",
    visual: "reward",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Computer Vision / ML",
    items: ["PyTorch", "TensorFlow/Keras", "OpenCV", "CLIP", "CUDA", "ONNX"],
  },
  {
    title: "Graphics / Systems",
    items: ["OpenGL", "VA-API", "DRM", "Real-time pipelines", "Hardware acceleration"],
  },
  {
    title: "Infrastructure / Tools",
    items: ["Docker", "GCP", "Git", "DVC", "Maven", "Jenkins CI/CD"],
  },
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "UC Santa Barbara",
    dates: "12/2024 - 12/2025",
    details: ["4.0 GPA", "Computer Vision", "Deep Learning"],
  },
  {
    degree: "BS, Computer Science",
    school: "UC Santa Barbara",
    dates: "09/2021 - 12/2024",
    details: ["4.0 GPA", "Valedictorian, UCSB Class of 2025"],
  },
  {
    degree: "BS, Applied Mathematics",
    school: "UC Santa Barbara",
    dates: "09/2021 - 12/2024",
    details: ["4.0 GPA", "Valedictorian, UCSB Class of 2025"],
  },
];
