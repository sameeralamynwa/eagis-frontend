export const routes = {
  // auth
  login: () => "/auth/login",
  register: () => "/auth/register",
  forgotPassword: () => "/auth/forgot-password",
  resetPassword: () => "/auth/reset-password",
  resendVerifyEmail: () => "/auth/resend-verification-email",
  // web
  home: () => "/",
  faq: () => "/faq",
  about: () => "/about",
  healthTips: () => "/health-tips",
  healthTipDetail: (slug: string) => `/health-tips/${slug}`,
  contact: () => "/contact",
  privacy: () => "/terms-policy",
  symptomChecker: () => "/symptom-checker",
  bookAppontments: () => "/book-appointment",
  bookAppontmentsDetail: (doctorId: string) => `/book-appointment/${doctorId}`,
  findDoctor: () => "/find-doctor",
  doctorDetail: (doctorId: string) => `/find-doctor/${doctorId}`,
  //dashboard
  dashboardHealthSummary: () => "/dashboard/health-summary",
  dashboardAppointments: () => "/dashboard/appointments",
  dashboardMeicalRecords: () => "/dashboard/medical-records",
  dashboardSymptomChecker: () => "/dashboard/symptom-checker",
  dashboardBookAppointment: () => "/dashboard/appointment-schedular",
  dashboardProfileSettings: () => "/dashboard/profile-settings",
  dashboardNotifications: () => "/dashboard/notifications",
  dashboarSearchDoctors: () => "/dashboard/search-doctors",

  // default error page
  error: () => `/error`,
};
