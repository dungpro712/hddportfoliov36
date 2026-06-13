import React, { useState, useEffect } from 'react';
import { 
  User, BookOpen, Users, Brain, Briefcase, Trophy, Map, 
  Save, Edit3, Github, Mail, Phone, ExternalLink,
  Cpu, MessageSquare, Code, Menu, X, ChevronDown, ChevronUp, Bot, Image as ImageIcon,
  Camera, RotateCcw, Lightbulb, CheckCircle2, ListChecks, TrendingUp, AlertCircle,
  Target, Compass, LineChart, ArrowRight
} from 'lucide-react';

const initialData = {
  intro: {
    name: "Ho Dai Dung",
    title: "Freshman at Da Nang University of Science and Technology",
    bio: "A dedicated student majoring in Embedded Systems and IoT at Da Nang University of Technology. I possess a strong passion for developing smart hardware solutions and robotics. I am committed to continuous learning and applying technical knowledge to solve real-world challenges through innovative technology.",
    contact: {
      email: "hodaidung16072007@email.com",
      phone: "+84 388068344",
      github: "github.com/dungpro712"
    }
  },
  education: [
    { 
      school: "Da Nang University of Science and Technology", 
      degree: "Embedded Systems and IoT", 
      year: "2025 - Present",
      gpa: "First Year Semester GPA: 3.0/4.0"
    },
    { 
      school: "Hoang Hoa Tham High School", 
      degree: "High School Diploma", 
      year: "2022 - 2024",
      gpa: "Cumulative GPA: 8.7/10"
    },
    { 
      school: "Vietnamese English School (VES)", 
      degree: "IELTS 6.0 English Course", 
      year: "2022 - 2023",
      gpa: "Encouragement Prize - 'Let's Speak Up' Competition"
    }
  ],
  cooperationProgress: [
    {
      stage: "Forming Stage",
      content: "We met and got to know each other, though at first everyone was still shy since we had only known each other for two months and rarely talked outside class. At first we went straight forward to do random jobs like looking for robot components and algorithms. This led to chaos and we argued a lot. As a result, we couldn't achieve anything during the first week."
    },
    {
      stage: "Storming Stage",
      content: "During this stage, our team experienced frequent conflicts as we had not yet fully understood each other's personalities and working styles. But this time, we voted on who was good at which field, elected a team leader, and delegated specific tasks for each member."
    },
    {
      stage: "Norming Stage",
      content: "The team gradually became more organized. At this stage, we didn't have any formal rules; we simply focused on helping each other, working whenever possible (mostly after class), and respecting one another."
    },
    {
      stage: "Performing Stage",
      content: "In the third and fourth week, we continuously tested, adjusted, and made reports. By the fourth week, the team achieved strong results, as evidenced by a perfect score of 10 in the practical assessment. The robot operated smoothly and was able to handle situations where it got stuck in corners of the maze."
    },
    {
      stage: "Adjourning Stage",
      content: "The team held a closing gathering and discussed each member's strengths as well as areas for improvement, and we took a final picture together to commemorate the journey."
    }
  ],
  selfEvaluation: {
    selfAssessment: {
      title: "Self-Assessment",
      subtitle: "Reflecting on current competencies and developmental opportunities",
      strengths: [
        "Strong logical mindset and solid foundations in C/C++ programming.",
        "Fast technical self-learner in IoT devices & Arduino microcontrollers.",
        "High level of meticulousness and patience with circuit wiring and source code debugging."
      ],
      weaknesses: [
        "Public speaking and communication with large crowds.",
        "Struggle to manage time.",
        "Early-stage confidence in voicing opinions in a newly formed team."
      ],
      improvements: [
        "Participate in debate groups and practice presenting technical ideas to friends.",
        "Apply rigid timeboxing methodologies (e.g., Pomodoro) to manage personal study and project time effectively.",
        "Proactively prepare talking points before starting teamwork brainstorms."
      ]
    },
    pdp: {
      title: "Personal Development Planning (PDP)",
      subtitle: "A structured action plan to turn reflections into professional milestones",
      smartObjectives: [
        "Secure an average GPA of 3.2+ for the upcoming academic year by optimizing time allocation.",
        "Engage in at least 2 public speaking opportunities (or project presentations) per semester to build confidence."
      ],
      strategicLearning: [
        "Learn to manage time effectively.",
        "Regularly review modern Presentation and Communication frameworks to improve soft skills."
      ],
      tracking: [
        "Conduct a bi-weekly self-review of personal study metrics and project milestones.",
        "Actively gather peer and professor feedback after every technical presentation.",
        "Continuously push code prototypes to GitHub to build a solid physical developer portfolio."
      ]
    }
  },
  lessonsLearned: [
    { category: "Technical", text: "Gained a deep understanding of how a maze runner robot works and the basis of the Arduino language." },
    { category: "Management", text: "Learned that clear role delegation and having a good team leader is key to solving chaos and unproductivity." },
    { category: "Communication", text: "Discovered that voting is a fair and efficient way to resolve heated technical disagreements." },
    { category: "Adaptability", text: "Realized the importance of continuous testing—success in the 4th week was only possible due to failures in the 1st week." }
  ],
  skills: {
    hard: ["C/C++ Programming", "Vietnamese (Native)", "English (6.0 IELTS)"],
    soft: ["Effective Communication", "Project Management", "Critical Thinking", "Fast Adaptation"]
  },
  project: {
    title: "Maze Runner Robot",
    role: "Team Member",
    duration: "Nov 2025 - Dec 2025",
    shortDesc: "Autonomous robot designed to navigate and solve complex mazes using logic-based pathfinding and sensors.",
    details: [
      "Microcontroller programming using Arduino IDE.",
      "Hardware assembly and electrical circuit wiring for the robot.",
      "Algorithm design for autonomous maze-solving navigation.",
      "Technical report writing and oral exam with supervising professor."
    ]
  },
  secondaryProject: {
    title: "Project Development & Team",
    shortDesc: "Capturing the journey of building the Maze Runner Robot, from hardware integration to team collaboration.",
    images: [
      "598688994_1542882810195192_2398462013545516046_n.jpg", 
      "597612219_820349634159692_4259030030650273561_n.jpg",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800"
    ]
  },
  achievements: [
    { title: "First Prize - School Robocon", year: "2024" },
    { title: "IELTS 6.0 Certificate", year: "2023" }
  ],
  roadmap: [
    { 
      phase: "Senior Year", 
      goal: "Undertake diverse collaborative projects to maximize practical experience in teamwork, conflict resolution, and technical communication." 
    },
    { 
      phase: "Post-Graduation", 
      goal: "Secure a position as a Senior Embedded Engineer at a leading global technology corporation." 
    }
  ]
};

const App = () => {
  const [data, setData] = useState(initialData);
  const [isEditMode, setIsEditMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const savedData = localStorage.getItem('my-portfolio-english-data-v12');
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        setData(initialData);
      }
    } else {
      setData(initialData);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSave = () => {
    localStorage.setItem('my-portfolio-english-data-v12', JSON.stringify(data));
    setIsEditMode(false);
  };

  const handleReset = () => {
    localStorage.removeItem('my-portfolio-english-data-v12');
    setData(initialData);
    setIsEditMode(false);
    window.location.reload();
  };

  const updateField = (path, value) => {
    const newData = { ...data };
    const keys = path.split('.');
    let current = newData;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setData(newData);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const EditableText = ({ value, onUpdate, className = "", multiline = false }) => {
    if (!isEditMode) return <span className={className}>{value}</span>;
    return multiline ? (
      <textarea
        className={`bg-slate-800 border-b border-blue-500 text-blue-100 focus:outline-none w-full p-2 rounded ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
        rows={3}
      />
    ) : (
      <input
        className={`bg-slate-800 border-b border-blue-500 text-blue-100 focus:outline-none p-2 rounded ${className}`}
        value={value}
        onChange={(e) => onUpdate(e.target.value)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 font-black text-xl text-white tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center italic text-sm">HD</div>
            <span>PORTFOLIO</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            <button onClick={() => scrollToSection('education')} className="hover:text-blue-500 transition-colors">Education</button>
            <button onClick={() => scrollToSection('experience-team')} className="hover:text-blue-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('evaluation')} className="hover:text-blue-500 transition-colors">Self-Evaluation</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('roadmap')} className="hover:text-blue-500 transition-colors">Roadmap</button>
          </div>
        </div>
      </nav>

      {/* Floating Control Bar */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2 items-end">
        {isEditMode ? (
          <>
            <button onClick={handleReset} className="flex items-center gap-2 bg-rose-600 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-rose-700 transition-all text-xs">
              <RotateCcw size={16} /> Reset All
            </button>
            <button onClick={handleSave} className="flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-600 transition-all scale-105">
              <Save size={20} /> Save Changes
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditMode(true)} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all">
            <Edit3 size={20} /> Edit Portfolio
          </button>
        )}
      </div>

      <header className="relative max-w-5xl mx-auto pt-40 pb-20 px-6 text-center">
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20"></div>
          <div className="relative w-48 h-48 mx-auto rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl bg-slate-900">
            <img 
              src="profile.jpg" 
              alt="Ho Dai Dung Profile" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"; }}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-600 p-3 rounded-2xl border-4 border-slate-950 text-white shadow-xl">
            <Cpu size={24} />
          </div>
        </div>
        
        <h1 className="text-6xl font-black tracking-tighter mb-4 text-white">
          <EditableText value={data.intro.name} onUpdate={(v) => updateField('intro.name', v)} />
        </h1>
        
        <p className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-8">
          <EditableText value={data.intro.title} onUpdate={(v) => updateField('intro.title', v)} />
        </p>
        
        <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed text-lg font-light mb-12">
          <EditableText value={data.intro.bio} onUpdate={(v) => updateField('intro.bio', v)} multiline />
        </p>
        
        {/* Contact Me Section */}
        <div className="max-w-xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm group">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Github size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.github} onUpdate={(v) => updateField('intro.contact.github', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Phone size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.phone} onUpdate={(v) => updateField('intro.contact.phone', v)} />
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors">
              <Mail size={18} className="text-slate-500" />
              <EditableText value={data.intro.contact.email} onUpdate={(v) => updateField('intro.contact.email', v)} />
            </div>
          </div>
          
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/20">
            Contact Me <ExternalLink size={18} />
          </button>
        </div>
      </header>

      <main className="relative max-w-5xl mx-auto px-6 space-y-32 pb-40">
        
        <section id="education" className="space-y-8 scroll-mt-24">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
            <div className="h-4 w-1 bg-blue-500 rounded-full"></div>
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/30 transition-all flex flex-col justify-between">
                <div>
                  <EditableText className="block font-bold text-xl text-white mb-1" value={edu.school} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].school = v; setData({...data, education: newList});
                  }} />
                  <EditableText className="block text-blue-400/80 font-medium mb-3" value={edu.degree} onUpdate={(v) => {
                    const newList = [...data.education]; newList[idx].degree = v; setData({...data, education: newList});
                  }} />
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-3 inline-block">
                    <EditableText className="block text-sm font-bold text-blue-300" value={edu.gpa} onUpdate={(v) => {
                      const newList = [...data.education]; newList[idx].gpa = v; setData({...data, education: newList});
                    }} />
                  </div>
                </div>
                <EditableText className="block text-xs font-mono text-slate-500 mt-6" value={edu.year} onUpdate={(v) => {
                  const newList = [...data.education]; newList[idx].year = v; setData({...data, education: newList});
                }} />
              </div>
            ))}
          </div>
        </section>

        <section id="experience-team" className="scroll-mt-24">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] pointer-events-none"></div>
            
            <div className="grid lg:grid-cols-5 gap-12 relative z-10">
              {/* Projects Side (Left 2 columns) */}
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
                  <div className="h-4 w-1 bg-indigo-500 rounded-full"></div>
                  Key Projects
                </h2>
                <div className="space-y-6">
                  {/* Robot Project */}
                  <div className={`bg-slate-950/50 border border-slate-800/50 p-8 rounded-3xl group transition-all duration-500 ${isProjectExpanded ? 'border-indigo-500/50 bg-slate-900/50 shadow-2xl' : 'hover:border-indigo-500/30'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                          <Bot size={20} />
                        </div>
                        <EditableText className="block font-bold text-xl text-white" value={data.project.title} onUpdate={(v) => updateField('project.title', v)} />
                      </div>
                      <button 
                        onClick={() => setIsProjectExpanded(!isProjectExpanded)}
                        className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-500 hover:text-white"
                      >
                        {isProjectExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-center mb-4 text-xs">
                      <EditableText className="text-indigo-400 font-medium" value={data.project.role} onUpdate={(v) => updateField('project.role', v)} />
                      <EditableText className="font-mono text-slate-600 uppercase tracking-tighter" value={data.project.duration} onUpdate={(v) => updateField('project.duration', v)} />
                    </div>

                    <EditableText className="block text-sm text-slate-400 leading-relaxed mb-4" value={data.project.shortDesc} onUpdate={(v) => updateField('project.shortDesc', v)} multiline />

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isProjectExpanded ? 'max-h-[500px] opacity-100 mt-6 pt-6 border-t border-slate-800/50' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-4">
                        {data.project.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 text-sm text-slate-300">
                            <div className="mt-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></div>
                            <EditableText value={detail} onUpdate={(v) => {
                              const newList = [...data.project.details]; newList[idx] = v; updateField('project.details', newList);
                            }} multiline />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Showcase Gallery */}
                  <div className="bg-slate-950/50 border border-slate-800/50 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                    <div className="h-48 w-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                      <img 
                        src={data.secondaryProject.images[activeImageIdx]} 
                        alt="Project showcase" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        {data.secondaryProject.images.map((_, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => setActiveImageIdx(idx)}
                            className={`h-1.5 rounded-full transition-all ${activeImageIdx === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <ImageIcon size={16} className="text-blue-500" />
                        <EditableText className="block font-bold text-lg text-white" value={data.secondaryProject.title} onUpdate={(v) => updateField('secondaryProject.title', v)} />
                      </div>
                      <EditableText className="block text-xs text-slate-500 leading-relaxed" value={data.secondaryProject.shortDesc} onUpdate={(v) => updateField('secondaryProject.shortDesc', v)} multiline />
                    </div>
                  </div>

                  {/* Dedicated Lessons Learned */}
                  <div className="bg-slate-950/50 border border-slate-800/50 p-8 rounded-3xl group hover:border-emerald-500/30 transition-all duration-500">
                    <h3 className="text-emerald-400 font-bold flex items-center gap-2 text-sm uppercase tracking-widest mb-6">
                      <Lightbulb size={18} /> Lesson Learned
                    </h3>
                    <ul className="space-y-4">
                      {data.lessonsLearned.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-xs leading-relaxed text-slate-400">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <EditableText className="font-bold text-slate-200" value={item.category} onUpdate={(v) => {
                               const newList = [...data.lessonsLearned]; newList[idx].category = v; updateField('lessonsLearned', newList);
                            }} />
                            <span className="text-slate-200 font-bold">: </span>
                            <EditableText value={item.text} onUpdate={(v) => {
                              const newList = [...data.lessonsLearned]; newList[idx].text = v; updateField('lessonsLearned', newList);
                            }} multiline />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Co-operation Progress Side (Right 3 columns) */}
              <div className="lg:col-span-3 space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white uppercase tracking-widest text-sm">
                  <div className="h-4 w-1 bg-emerald-500 rounded-full"></div>
                  Co-operation Progress
                </h2>
                
                <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-12">
                  {data.cooperationProgress.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-emerald-500 z-10 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                        {idx === data.cooperationProgress.length - 2 ? <CheckCircle2 size={12} className="text-emerald-500" /> : <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>}
                      </div>
                      
                      <div className="bg-slate-950/50 border border-slate-800/50 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                        <EditableText className="block text-emerald-400 font-black uppercase tracking-tighter text-xs mb-2" value={item.stage} onUpdate={(v) => {
                          const newList = [...data.cooperationProgress]; newList[idx].stage = v; updateField('cooperationProgress', newList);
                        }} />
                        <EditableText className="block text-sm text-slate-400 leading-relaxed italic" value={item.content} onUpdate={(v) => {
                          const newList = [...data.cooperationProgress]; newList[idx].content = v; updateField('cooperationProgress', newList);
                        }} multiline />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="evaluation" className="scroll-mt-24 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-black text-white tracking-tight">Self-Evaluation & Planning</h2>
          </div>

          <div className="grid lg:grid-cols-11 gap-4 items-stretch">
            {/* Left Box: Self-Assessment Block (Col Span 5) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-8 space-y-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Brain size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <EditableText value={data.selfEvaluation.selfAssessment.title} onUpdate={(v) => updateField('selfEvaluation.selfAssessment.title', v)} />
                    </h3>
                    <p className="text-xs text-slate-500">
                      <EditableText value={data.selfEvaluation.selfAssessment.subtitle} onUpdate={(v) => updateField('selfEvaluation.selfAssessment.subtitle', v)} />
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* Strengths */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Strengths
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.strengths.map((str, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={str} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.strengths];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.strengths', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Weaknesses
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.weaknesses.map((weak, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={weak} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.weaknesses];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.weaknesses', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Improvements */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span> Improvements Needed
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.selfAssessment.improvements.map((imp, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-sky-500/10 flex items-start gap-2">
                          <Lightbulb size={15} className="text-sky-400 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={imp} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.selfAssessment.improvements];
                            list[idx] = v;
                            updateField('selfEvaluation.selfAssessment.improvements', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Middle Vector: HOW? Transition Arrow (Col Span 1) */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-6 lg:py-0">
              <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl flex flex-row lg:flex-col items-center gap-2 shadow-xl shrink-0">
                <span className="text-[10px] font-mono tracking-widest uppercase text-indigo-400 font-black">How?</span>
                <ArrowRight className="text-indigo-500 animate-pulse hidden lg:block" size={24} />
                <span className="text-indigo-500 font-bold text-lg lg:hidden">↓</span>
              </div>
            </div>

            {/* Right Box: Personal Dev Planning - PDP Block (Col Span 5) */}
            <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-8 space-y-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px] pointer-events-none"></div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
                    <Target size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      <EditableText value={data.selfEvaluation.pdp.title} onUpdate={(v) => updateField('selfEvaluation.pdp.title', v)} />
                    </h3>
                    <p className="text-xs text-slate-500">
                      <EditableText value={data.selfEvaluation.pdp.subtitle} onUpdate={(v) => updateField('selfEvaluation.pdp.subtitle', v)} />
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  {/* SMART Objectives */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> SMART Objectives
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.smartObjectives.map((obj, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <Target size={15} className="text-indigo-400 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={obj} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.pdp.smartObjectives];
                            list[idx] = v;
                            updateField('selfEvaluation.pdp.smartObjectives', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Learning */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Strategic Learning
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.strategicLearning.map((learn, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <Compass size={15} className="text-blue-400 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={learn} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.pdp.strategicLearning];
                            list[idx] = v;
                            updateField('selfEvaluation.pdp.strategicLearning', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tracking */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-black uppercase tracking-widest text-fuchsia-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></span> Progress Tracking
                    </span>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {data.selfEvaluation.pdp.tracking.map((track, idx) => (
                        <li key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-800/50 flex items-start gap-2">
                          <LineChart size={15} className="text-fuchsia-400 shrink-0 mt-0.5" />
                          <EditableText className="text-slate-300 leading-snug" value={track} onUpdate={(v) => {
                            const list = [...data.selfEvaluation.pdp.tracking];
                            list[idx] = v;
                            updateField('selfEvaluation.pdp.tracking', list);
                          }} multiline />
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-12 scroll-mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-black text-white">Professional Skillset</h2>
            <p className="text-slate-500 mt-2 font-mono uppercase tracking-widest text-xs italic">Technical Proficiencies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl group">
              <h3 className="text-xl font-bold text-blue-400 mb-8 flex items-center gap-2">
                <Code size={20} /> Hard Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.hard.map((skill, idx) => (
                  <div key={idx} className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold hover:border-blue-500 transition-all">
                    <EditableText value={skill} onUpdate={(v) => {
                      const newList = [...data.skills.hard]; newList[idx] = v; updateField('skills.hard', newList);
                    }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl group">
              <h3 className="text-xl font-bold text-indigo-400 mb-8 flex items-center gap-2">
                <MessageSquare size={20} /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.soft.map((skill, idx) => (
                  <div key={idx} className="px-5 py-2.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm font-semibold hover:border-indigo-500 transition-all">
                    <EditableText value={skill} onUpdate={(v) => {
                      const newList = [...data.skills.soft]; newList[idx] = v; updateField('skills.soft', newList);
                    }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="bg-slate-900 border border-slate-800 p-16 rounded-[4rem] relative overflow-hidden shadow-2xl scroll-mt-24">
          <div className="absolute top-0 right-0 p-16 text-blue-500/5 -rotate-12 pointer-events-none">
            <Map size={320} />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 text-white tracking-tight">Strategic Roadmap</h2>
            <div className="grid md:grid-cols-2 gap-16">
              {data.roadmap.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="text-6xl font-black text-slate-800 group-hover:text-blue-500/40 transition-colors">0{idx + 1}</div>
                  <div className="pt-2">
                    <EditableText className="block text-blue-500 font-black uppercase tracking-widest text-xs mb-3" value={step.phase} onUpdate={(v) => {
                      const newList = [...data.roadmap]; newList[idx].phase = v; setData({...data, roadmap: newList});
                    }} />
                    <EditableText className="text-2xl font-semibold text-white leading-tight" value={step.goal} onUpdate={(v) => {
                      const newList = [...data.roadmap]; newList[idx].goal = v; setData({...data, roadmap: newList});
                    }} multiline />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer credits */}
      <footer className="text-center py-24 border-t border-slate-900">
        <p className="text-slate-600 text-xs font-bold tracking-[0.4em] uppercase">
          Precision Engineering • Ho Dai Dung Portfolio 2026
        </p>
      </footer>
    </div>
  );
};

export default App;