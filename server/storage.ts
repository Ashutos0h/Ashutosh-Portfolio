import { db } from "./db";
import {
  skills, projects, messages,
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }

  async seedData(): Promise<void> {
    // Seed Skills
    const existingSkills = await this.getSkills();
    if (existingSkills.length === 0) {
      await db.insert(skills).values([
        {
          category: "AI Infrastructure",
          items: ["NVIDIA DGX Servers", "TensorRT", "Triton Inference Server", "NVIDIA NIM"],
        },
        {
          category: "Computer Vision",
          items: ["Object Detection", "Semantic Segmentation (U-Net/ViT)", "Jetson Nano"],
        },
        {
          category: "Development Tools",
          items: ["Python (Flask/Django)", "Docker", "Kubeflow", "Vector Databases (RAG)"],
        },
      ]);
    }

    // Seed Projects
    const existingProjects = await this.getProjects();
    if (existingProjects.length === 0) {
      await db.insert(projects).values([
        {
          title: "Lane Violation Detection",
          description: "End-to-end pipeline with object tracking and automated alerts. Deployed on NVIDIA DGX using Docker.",
          techStack: ["Python", "Object Tracking", "Docker", "NVIDIA DGX"],
          category: "Specialized AI",
          githubUrl: "https://github.com/ashutoshverma/lane-detection", // Placeholder
        },
        {
          title: "Medical Image Segmentation",
          description: "Comparison of CNNs vs. Vision Transformers (ViT/Swin-Unet) using Dice coefficients.",
          techStack: ["PyTorch", "ViT", "U-Net", "Medical Imaging"],
          category: "Specialized AI",
          githubUrl: "https://github.com/ashutoshverma/medical-segmentation", // Placeholder
        },
        {
          title: "AI Data Retrieval (RAG)",
          description: "Speech AI system using Vector Databases and Streamlit. Integrated NVIDIA NIM.",
          techStack: ["RAG", "Vector DB", "NVIDIA NIM", "Streamlit"],
          category: "Specialized AI",
          githubUrl: "https://github.com/ashutoshverma/rag-speech-ai", // Placeholder
        },
        {
          title: "Planify: Event Manager",
          description: "Web platform for college events, registrations, and scheduling.",
          techStack: ["HTML/CSS", "JavaScript", "Python"],
          category: "Full-Stack",
          githubUrl: "https://github.com/ashutoshverma/planify", // Placeholder
        },
        {
          title: "Quizomania",
          description: "Academic quiz platform with automated grading and dynamic quiz logic.",
          techStack: ["JavaScript", "Python"],
          category: "Full-Stack",
          githubUrl: "https://github.com/ashutoshverma/quizomania", // Placeholder
        },
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
