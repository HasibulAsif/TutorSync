import { Tutor } from '../types/tutor';

export const sampleTutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    subject: 'Mathematics',
    hourlyRate: 75,
    rating: 4.9,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    expertise: ['Calculus', 'Linear Algebra', 'Statistics']
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    subject: 'Physics',
    hourlyRate: 80,
    rating: 4.8,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    expertise: ['Quantum Mechanics', 'Electromagnetics', 'Classical Mechanics']
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    subject: 'Computer Science',
    hourlyRate: 90,
    rating: 5.0,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    expertise: ['Python', 'Machine Learning', 'Web Development']
  },
  {
    id: '4',
    name: 'Dr. Michael Chang',
    subject: 'Chemistry',
    hourlyRate: 70,
    rating: 4.7,
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    expertise: ['Organic Chemistry', 'Biochemistry', 'Physical Chemistry']
  }
];
