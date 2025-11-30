// Mock data for the application
export const MOCK_LESSONS = [
  {
    id: 1,
    title: "Introduction to Sustainable Living",
    description: "Learn the basics of sustainable practices and their importance",
    content: "Sustainable living involves reducing our environmental impact by making conscious choices about energy consumption, waste production, and resource use. This lesson covers the fundamental principles and why they matter for our planet's future.",
    duration: "15 min",
    category: "foundation",
    level: "beginner"
  },
  {
    id: 2,
    title: "Energy Conservation Techniques",
    description: "Practical ways to save energy at home and work",
    content: "Discover simple changes you can make to reduce your energy consumption and lower your carbon footprint. Learn about energy-efficient appliances, smart home technologies, and behavioral changes that make a difference.",
    duration: "20 min",
    category: "energy",
    level: "beginner"
  },
  {
    id: 3,
    title: "Waste Reduction Strategies",
    description: "Learn to minimize and properly manage waste",
    content: "Explore the 3 R's: Reduce, Reuse, Recycle, and learn about composting and other waste management techniques. Understand how proper waste segregation can significantly reduce landfill impact.",
    duration: "25 min",
    category: "waste",
    level: "intermediate"
  },
  {
    id: 4,
    title: "Water Conservation Methods",
    description: "Efficient water use for sustainable living",
    content: "Learn about water-saving technologies and habits that can significantly reduce your water consumption. Discover rainwater harvesting, greywater systems, and daily practices that conserve this precious resource.",
    duration: "18 min",
    category: "water",
    level: "beginner"
  },
  {
    id: 5,
    title: "Sustainable Transportation",
    description: "Eco-friendly mobility solutions",
    content: "Explore alternatives to conventional transportation that reduce carbon emissions. Learn about electric vehicles, public transit, cycling, walking, and the benefits of remote work for environmental sustainability.",
    duration: "22 min",
    category: "transport",
    level: "intermediate"
  },
  {
    id: 6,
    title: "Green Building and Home Design",
    description: "Sustainable architecture and eco-homes",
    content: "Understand the principles of green building design, including passive solar design, proper insulation, sustainable materials, and energy-efficient systems that create comfortable, low-impact living spaces.",
    duration: "30 min",
    category: "housing",
    level: "advanced"
  }
];

export const ECO_GOAL_CATEGORIES = {
  energy: { name: "Energy Saving", icon: "⚡", color: "#FFD700" },
  waste: { name: "Waste Reduction", icon: "♻️", color: "#4CAF50" },
  water: { name: "Water Conservation", icon: "💧", color: "#2196F3" },
  transport: { name: "Eco Transportation", icon: "🚗", color: "#FF9800" },
  food: { name: "Sustainable Food", icon: "🍎", color: "#8BC34A" },
  general: { name: "General", icon: "🌱", color: "#9C27B0" }
};

export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
  CONTENT_CREATOR: "content-creator"
};

export const APP_CONFIG = {
  name: "Sustainable Living Education",
  version: "1.0.0",
  description: "Protecting our environment for future generations"
};