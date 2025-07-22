import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Brain, BarChart3 } from "lucide-react";
import { resumeData } from "@/lib/resume-data";
import { useEffect, useRef, useState } from "react";

const CounterAnimation = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target]);

  return (
    <div ref={ref} className="p-6 text-center">
      <div className="text-4xl font-bold text-primary">{count}</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
};

const AboutSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description: "Expert in SQL, Python, and statistical analysis to uncover meaningful business insights"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Building predictive models with scikit-learn, TensorFlow, and PyTorch for business optimization"
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Creating interactive dashboards with Tableau and Power BI for stakeholder communication"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-secondary mb-4">About Me</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600">
              I'm a data storyteller who believes every dataset has a narrative waiting to be discovered. With a Master's in Data Analytics Engineering from Northeastern University, I combine technical expertise with business acumen to solve complex problems.
            </p>
            <p className="text-lg text-gray-700">
              What drives me? The "aha!" moment when patterns emerge from chaos, when a visualization suddenly makes everything clear, or when a predictive model helps a business make their next strategic move. I thrive on transforming raw data into actionable insights that create real business impact.
            </p>
            <p className="text-lg text-gray-700">
              Beyond the algorithms and dashboards, I'm passionate about making data accessible to everyone. Whether I'm presenting to executives or training team members, I believe in translating complex analytics into clear, compelling stories that drive decision-making.
            </p>
          </div>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-8 bg-gray-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-white text-2xl h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {resumeData.achievements.map((achievement, index) => (
            <CounterAnimation 
              key={index}
              target={achievement.value} 
              label={achievement.label} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
