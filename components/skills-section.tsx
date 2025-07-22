import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/lib/resume-data";
import { useEffect, useRef, useState } from "react";
import { FaPython, FaDatabase, FaChartBar, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTableau } from "react-icons/si";

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setWidth(level), 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, level]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-primary h-3 rounded-full transition-all duration-2000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const TechIcon = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-all duration-300"
  >
    <Icon className="text-3xl text-primary mb-2 mx-auto" />
    <div className="text-sm font-medium">{name}</div>
  </motion.div>
);

const SkillsSection = () => {
  const techIcons = [
    { icon: FaPython, name: "Python" },
    { icon: FaDatabase, name: "SQL" },
    { icon: SiTableau, name: "Tableau" },
    { icon: FaAws, name: "AWS" },
    { icon: FaDocker, name: "Docker" },
    { icon: FaGitAlt, name: "Git" }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600">Comprehensive toolkit for data analysis and engineering</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-secondary">Programming & Databases</h3>
            <div className="space-y-6">
              {[...resumeData.skills.programming, ...resumeData.skills.databases].map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-secondary">Visualization & Cloud</h3>
            <div className="space-y-6">
              {[...resumeData.skills.visualization, ...resumeData.skills.cloud].map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-secondary">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => (
              <TechIcon key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
