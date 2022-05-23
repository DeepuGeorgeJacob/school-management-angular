import { Course } from './course';
export interface Root {
  data: Student[]
}

export interface Student {
  id: number
  firstName: string
  lastName: string
  studentDetails: StudentDetails
  performance: Performance,
  courses:Course[]
}

export interface StudentDetails {
  id: number
  age: number
  dateOfBirth: string
  contactNumber: string
}

export interface Performance {
  id: number
  bestPerformance: number
  lastPerformance: number
}
