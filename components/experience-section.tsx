import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resumeData } from "@/lib/resume-data";
import kgsLogo from "@assets/image_1753142277881.png";
import rebeccaLogo from "@assets/image_1753142324009.png";
import stateFarmLogo from "@assets/image_1753142350839.png";
import northeasternLogo from "@assets/image_1753142418351.png";
import allianzLogo from "@assets/image_1753142573378.png";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">Building impactful solutions across diverse industries</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 w-1 h-full bg-gray-200 hidden md:block" />
          
          <div className="space-y-12">
            {resumeData.experience.map((job, index) => (
              <motion.div
                key={index}
                className="relative flex items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
                
                {/* Content */}
                <div className="md:ml-16 w-full">
                  <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={
                            index === 0 ? kgsLogo :
                            index === 1 ? rebeccaLogo :
                            index === 2 ? stateFarmLogo :
                            index === 3 ? northeasternLogo :
                            allianzLogo
                          }
                          alt={`${job.company} logo`}
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <div className="text-sm text-primary font-semibold">{job.period}</div>
                          <h3 className="text-xl font-bold text-secondary">{job.title}</h3>
                          <div className="text-gray-600">{job.company}</div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-2 mb-4">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>• {achievement}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
