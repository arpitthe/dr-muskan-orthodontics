import emailjs from "@emailjs/browser";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  treatment: string;
  message: string;
}

export const sendEmail = async (formData: BookingFormData) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        date: formData.date,
        treatment: formData.treatment,
        message: formData.message,
        to_name: "Dr. Muskan Singh",
      },
      publicKey
    );
    return response;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
