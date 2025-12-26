import {
  type Skill, type InsertSkill,
  type Project, type InsertProject,
  type Message, type InsertMessage
} from "@shared/schema";

export interface IStorage {
  getSkills(): Promise<Skill[]>;
  getProjects(): Promise<Project[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private skills: Skill[];
  private projects: Project[];
  private messages: Message[];
  private currentId: number;

  constructor() {
    this.messages = [];
    this.currentId = 1;
    
    // 1. Initialize Skills (Hardcoded directly here)
    this.skills = [
      {
        id: 1,
        category: "AI Infrastructure",
        items: ["NVIDIA DGX Servers", "TensorRT", "Triton Inference Server", "NVIDIA NIM"],
      },
      {
        id: 2,
        category: "Computer Vision",
        items: ["Object Detection", "Semantic Segmentation (U-Net/ViT)", "Jetson Nano"],
      },
      {
        id: 3,
        category: "Development Tools",
        items: ["Python (Flask/Django)", "Docker", "Kubeflow", "Vector Databases (RAG)"],
      },
    ];

    // 2. Initialize Projects (Hardcoded directly here)
    this.projects = [
      {
        id: 1,
        title: "Lane Violation Detection",
        description: "End-to-end pipeline with object tracking and automated alerts. Deployed on NVIDIA DGX using Docker.",
        techStack: ["Python", "Object Tracking", "Docker", "NVIDIA DGX"],
        category: "Specialized AI",
        githubUrl: "https://github.com/ashutoshverma/lane-detection",
        imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80", // Added a default tech image
      },
      {
        id: 2,
        title: "Medical Image Segmentation",
        description: "Comparison of CNNs vs. Vision Transformers (ViT/Swin-Unet) using Dice coefficients.",
        techStack: ["PyTorch", "ViT", "U-Net", "Medical Imaging"],
        category: "Specialized AI",
        githubUrl: "https://github.com/ashutoshverma/medical-segmentation",
        imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        title: "AI Data Retrieval (RAG)",
        description: "Speech AI system using Vector Databases and Streamlit. Integrated NVIDIA NIM.",
        techStack: ["RAG", "Vector DB", "NVIDIA NIM", "Streamlit"],
        category: "Specialized AI",
        githubUrl: "https://github.com/ashutoshverma/rag-speech-ai",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        title: "Planify: Event Manager",
        description: "Web platform for college events, registrations, and scheduling.",
        techStack: ["HTML/CSS", "JavaScript", "Python"],
        category: "Full-Stack",
        githubUrl: "https://github.com/ashutoshverma/planify",
        imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
      },
      {
        id: 5,
        title: "Quizomania",
        description: "Academic quiz platform with automated grading and dynamic quiz logic.",
        techStack: ["JavaScript", "Python"],
        category: "Full-Stack",
        githubUrl: "https://github.com/ashutoshverma/quizomania",
        imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80",
      },
    ];
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...insertMessage, id };
    this.messages.push(message);
    return message;
  }
}

export const storage = new MemStorage();