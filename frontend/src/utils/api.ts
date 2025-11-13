// src/utils/api.ts

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export type RegistrationType = 'etudiant' | 'partenaire' | 'sponsor';

export interface RegistrationData {
  name: string;
  email: string;
  phone: string;
  institution?: string;
  registration_type: RegistrationType;
}

export interface RegistrationResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  institution: string | null;
  registration_type: RegistrationType;
  created_at: string;
  updated_at: string;
}

class ApiError extends Error {
  constructor(public status: number, message: string, public errors?: any) {
    super(message);
    this.name = 'ApiError';
  }
}

export const api = {
  /**
   * Create a new registration
   */
  async createRegistration(data: RegistrationData): Promise<RegistrationResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/registrations/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new ApiError(
          response.status,
          'Failed to create registration',
          responseData
        );
      }

      return responseData.data || responseData;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'Network error. Please check your connection.');
    }
  },

  /**
   * Get all registrations (optional - if you need to display them)
   */
  async getRegistrations(): Promise<RegistrationResponse[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/registrations/`);

      if (!response.ok) {
        throw new ApiError(response.status, 'Failed to fetch registrations');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'Network error. Please check your connection.');
    }
  },

  /**
   * Get a single registration by ID (optional)
   */
  async getRegistration(id: string): Promise<RegistrationResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/registrations/${id}/`);

      if (!response.ok) {
        throw new ApiError(response.status, 'Registration not found');
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(0, 'Network error. Please check your connection.');
    }
  },
};