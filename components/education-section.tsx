import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic foundation and continuous learning</p>
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-secondary mb-2">{edu.degree}</h3>
                      <div className="text-lg text-gray-600 mb-2">{edu.school}</div>
                      <div className="text-primary font-semibold mb-4">{edu.period}</div>
                      <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold mb-6">
                        GPA: {edu.gpa}
                      </div>
                      
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-secondary mb-4">Key Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge key={courseIndex} variant="secondary" className="bg-gray-100 text-gray-800">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
