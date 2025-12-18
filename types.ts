
export enum CourseStatus {
  UPCOMING = 'Em Breve',
  OPEN = 'Inscrições Abertas',
  FINISHED = 'Encerrado'
}

export enum CourseLevel {
  BEGINNER = 'Iniciante',
  INTERMEDIATE = 'Intermediário',
  ADVANCED = 'Avançado'
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  photo: string;
  socials: {
    linkedin?: string;
    instagram?: string;
    portfolio?: string;
  };
  featuredCourses: string[];
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  level: CourseLevel;
  status: CourseStatus;
  thumbnail: string;
  price: number;
  duration: string;
  teacherId: string;
  description: string;
  objectives: string[];
  program: CourseModule[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}
