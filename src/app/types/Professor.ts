export interface Professor {
  classInstructorId: string | number;
  name: string;
  email: string | null;
  phone: string | null;
  experience: any;
  education: any;
  email_notification: boolean;
  phone_notification: boolean;
  instructor_schedule: any;
}
