export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'ac' | 'fridge';
  subCategory: string;
  brand: string;
  images: string[];
  description: string;
  longDescription: string;
  specifications: Record<string, string>;
  pricing: {
    monthly: number;
    quarterly: number;
    halfYearly: number;
    yearly: number;
  };
  deposit: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
  features: string[];
  energyRating: string;
  warranty: string;
  capacity: string;
  type: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  category: 'ac' | 'fridge';
  subCategory: string;
  description: string;
  longDescription: string;
  startingPrice: number;
  images: string[];
  features: string[];
  duration: string;
  warranty: string;
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  avatar?: string;
  product?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'rental' | 'service' | 'payments' | 'general';
}

export interface Enquiry {
  name: string;
  phone: string;
  email: string;
  address: string;
  category: 'rent' | 'service';
  subCategory: string;
  parentCategory?: string;
  product: string;
  quantity?: number;
  duration?: string;
  preferredDate?: string;
  preferredTime?: string;
  message?: string;
  city?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  parent: string | null;
  icon: string;
  description?: string;
  image?: string;
}