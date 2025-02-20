import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  name: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  createdAt: string;
  subscriptionPlan: string;
}

export interface Content {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  type: string;
  genre: string;
  releaseYear: number;
  maturityRating: string;
  contentUrl: string;
  director: string;
  cast: string;
  durationMinutes: number;
  averageRating: number;
  requiredPlan: string;
}

export const authService = {
  async login(data: LoginData): Promise<User> {
    const response = await api.post('/auth/login', data);
    return response.data;
  },

  async register(data: RegisterData): Promise<User> {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
};

export const contentService = {
  async getContents(): Promise<Content[]> {
    const response = await api.get('/content');
    return response.data;
  },

  async getFeaturedContents(): Promise<Content[]> {
    const response = await api.get('/content/featured');
    return response.data;
  },

  async searchContents(query: string): Promise<Content[]> {
    const response = await api.get(`/content/search?query=${encodeURIComponent(query)}`);
    return response.data;
  },

  async getContent(id: number): Promise<Content> {
    const response = await api.get(`/content/${id}`);
    return response.data;
  },
};

export default api; 