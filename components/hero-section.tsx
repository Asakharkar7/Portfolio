import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";
import { FaLinkedin, FaGithub, FaKaggle } from "react-icons/fa";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import profilePhoto from "@assets/WhatsApp Image 2025-07-21 at 20.05.36_39d45474_1753142760022.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    // Create a download link for the resume
    const resumeUrl = "/resume.pdf"; // This would be served by the backend
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aniket_Sakharkar_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Data Analyst &
              <span className="text-primary"> Insights Expert</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {resumeData.summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-primary text-white hover:bg-blue-700 transition-colors"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                <Eye className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
            <div className="flex space-x-6">
              <a 
                href={resumeData.personal.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors text-2xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href={resumeData.personal.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors text-2xl"
              >
                <FaGithub />
              </a>
              <a 
                href={resumeData.personal.kaggle} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors text-2xl"
              >
                <FaKaggle />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={profilePhoto}
              alt="Aniket Sakharkar - Data Analyst" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="text-2xl font-bold text-primary">30%</div>
              <div className="text-sm text-gray-600">Reporting Accuracy Improvement</div>
            </motion.div>
            <motion.div 
              className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-2xl font-bold text-primary">{resumeData.education[0].gpa}</div>
              <div className="text-sm text-gray-600">GPA at Northeastern</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
