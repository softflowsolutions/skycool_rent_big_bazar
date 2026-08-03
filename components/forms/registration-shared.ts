/**
 * Shared registration fields used by both the Technician and Vendor
 * registration forms. Kept in one file so the two forms stay aligned
 * and the API routes can validate against a single shape.
 */
export interface RegistrationFields {
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  serviceType: string;
  experienceYears: string;
  certifications: string;
  availability: string;
  notes: string;
}
