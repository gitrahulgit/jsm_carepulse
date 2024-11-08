// TypeScript type for search parameters used in a request, consisting of a params object and searchParams object.
// params: an object where keys are strings and values are strings.
// searchParams: an object where keys are strings and values can be strings, arrays of strings, or undefined.
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// TypeScript type for gender options.
declare type Gender = "male" | "female" | "other";

// TypeScript type for appointment status options.
declare type Status = "pending" | "scheduled" | "cancelled";

// Interface for creating a new user, including name, email, and phone.
declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

// Interface for a user, extending CreateUserParams and adding a unique identifier.
declare interface User extends CreateUserParams {
  $id: string;
}

// Interface for registering a user, extending CreateUserParams and adding additional personal and medical details.
declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

// TypeScript type for creating an appointment, including user and patient information, schedule, status, and optional note.
declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

// TypeScript type for updating an appointment, including appointment ID, user ID, appointment details, and a type string.
declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: Appointment;
  type: string;
};