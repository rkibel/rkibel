export const navItems = [
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
    dates: "May → September 2025",
    accent: "cyan",
    summary:
      "Engineered camera ML tooling for a zero-copy, hardware-accelerated graphics pipeline.",
  },
  {
    company: "ServiceNow",
    role: "SWE, AI Search",
    dates: "May → September 2024",
    accent: "emerald",
    summary:
      "Built multimodal retrieval for text-to-image and image-to-image workflows.",
  },
  {
    company: "ServiceNow",
    role: "SWE, Developer Productivity",
    dates: "May 2022 → September 2023",
    accent: "violet",
    summary:
      "Created and deployed static code scan automation for all engineering orgs.",
  },
];

export const projects = [
  {
    title: "POINTER",
    kicker: "Featured",
    summary:
      "A Real-Time Framework for Dynamic, Object-Centered Augmented Reality",
    areas: ["Object-Centered AR", "6DoF Pose", "Vision-Language Models"],
    methods: ["sparse RGB scanning", "real-time tracking", "edge-server architecture"],
    impact:
      "Explores practical interfaces where digital instructions and context stay attached to the physical objects users manipulate.",
    visual: "pointer",
    href: "/projects/pointer-object-centered-ar.pdf",
    featured: true,
  },
  {
    title: "Temporally-Aware Scene Simplification for Bionic Vision",
    summary:
      "Deep learning pipeline for temporally consistent egocentric indoor scene simplification for retinal prostheses.",
    areas: ["Bionic Vision", "Scene Simplification", "Temporal Consistency"],
    methods: ["segmentation refinement", "saliency", "depth estimation", "phosphene simulation"],
    impact:
      "Reduces flicker, fragmentation, and visual overload in low-resolution prosthetic vision settings.",
    visual: "bionic",
    href: "/projects/temporally-aware-bionic-vision.pdf",
  },
  {
    title: "Semantic 3D Reconstruction from Multi-Robot Systems",
    summary:
      "Graph-based multi-robot perception framework for depth prediction and semantic segmentation.",
    areas: ["3D Reconstruction", "Multi-Robot Perception", "Semantic Segmentation"],
    methods: ["graph attention networks", "message passing", "masked attention", "monocular depth"],
    impact:
      "Fuses geometric and semantic cues across robot communication graphs for more robust scene understanding.",
    visual: "robots",
    href: "/projects/semantic-3d-reconstruction-multi-robot.pdf",
  },
  {
    title: "AheadOfItsTime: AOT vs JIT Compilation",
    summary:
      "Benchmark study comparing ahead-of-time and just-in-time compilation strategies across deep learning runtimes.",
    areas: ["Deep Learning Systems", "AOT Compilation", "JIT Compilation"],
    methods: ["CNN/RNN benchmarks", "latency profiling", "memory analysis"],
    impact:
      "Shows that runtime performance is architecture- and batch-size-dependent.",
    visual: "aot",
    href: "/projects/aot-vs-jit-deep-learning.pdf",
  },
  {
    title: "Mitigating Reward Hacking",
    summary:
      "Examining reward design and mitigation strategies for unintended optimization behavior in reinforcement learning.",
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
    dates: "December 2024 → December 2025",
    details: ["4.0 GPA", "Computer Vision", "Deep Learning"],
  },
  {
    degree: "BS, Computer Science",
    school: "UC Santa Barbara",
    dates: "September 2021 → December 2024",
    details: ["4.0 GPA", "Valedictorian, UCSB Class of 2025"],
  },
  {
    degree: "BS, Applied Mathematics",
    school: "UC Santa Barbara",
    dates: "September 2021 → December 2024",
    details: ["4.0 GPA", "Valedictorian, UCSB Class of 2025"],
  },
];
