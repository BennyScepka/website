export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export type FeatureType = 'meeting-calculator' | 'aws-checker';

export interface MeetingData {
  numAttendees: number;
  hourlyRate: number;
  durationMinutes: number;
}
