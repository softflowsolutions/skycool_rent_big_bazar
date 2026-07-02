export const SITE_CONFIG = {
  name: 'SkyCool Solutions',
  shortName: 'SkyCool',
  tagline: 'Stay Cool, Pay Less',
  description:
    'Rent AC and Fridge in India. Affordable monthly rentals starting at ₹599/month with free delivery and installation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://skycool.in',
  email: 'business@skycool.in',
  adminEmail: 'admin@skycool.in',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+919876543210',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
  address: '123 SkyCool Tower, Connaught Place, New Delhi - 110001',
  workingHours: 'Mon - Sun: 8:00 AM - 10:00 PM',
  establishedYear: 2020,
  customerCount: 50000,
  cities: [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Kolkata',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Chandigarh',
    'Indore',
    'Nagpur',
    'Kochi',
    'Coimbatore',
  ],
  socials: {
    instagram: 'https://instagram.com/skycool',
    facebook: 'https://facebook.com/skycool',
    twitter: 'https://twitter.com/skycool',
    youtube: 'https://youtube.com/skycool',
    linkedin: 'https://linkedin.com/company/skycool',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rent', href: '/rent' },
  { label: 'Service', href: '/service' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CITIES = [
  'Delhi NCR',
  'Mumbai',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Lucknow',
  'Chandigarh',
  'Indore',
  'Nagpur',
  'Kochi',
  'Coimbatore',
];

export const DURATIONS = [
  { value: 1, label: '1 Month', savings: 0 },
  { value: 3, label: '3 Months', savings: 8 },
  { value: 6, label: '6 Months', savings: 12 },
  { value: 12, label: '12 Months', savings: 20 },
];

export const TIME_SLOTS = [
  { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
  { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
  { value: 'evening', label: 'Evening (4 PM - 7 PM)' },
];