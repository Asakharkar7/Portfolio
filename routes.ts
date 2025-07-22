import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // In a real application, you would send an email or save to database
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", { name, email, message });
      
      // Simulate email sending or database save
      // await emailService.send({ to: 'aniketsakharkar4@gmail.com', subject: 'Portfolio Contact', ... });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Resume download endpoint
  app.get("/resume.pdf", (req, res) => {
    // In a real application, you would serve the actual resume PDF
    // For now, we'll return a 404 since we don't have the PDF file
    const resumePath = path.join(process.cwd(), "attached_assets", "Aniket Sakharkar Resume_1753136238629.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Aniket_Sakharkar_Resume.pdf"');
      fs.createReadStream(resumePath).pipe(res);
    } else {
      res.status(404).json({ error: "Resume not found" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
