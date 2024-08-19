import { ContactForm } from "@/app/types/contactForm";
import { CONTACT_FORM_API } from "@/lib/constants";
import axios from "axios";

export const contactForm = async (payload: ContactForm) =>
  axios.post(CONTACT_FORM_API, payload);
