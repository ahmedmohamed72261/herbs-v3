"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Button, GlassCard } from "@/src/shared/ui";
import { fadeUp } from "@/src/shared/animations";
import { contactSchema, type ContactSchemaType } from "@/src/shared/lib/validation/contact-schema";
import { contactService } from "@/src/shared/services";
import { useLanguage } from "@/src/shared/providers/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchemaType) => {
    try {
      await contactService.submit(data);
      setSubmitted(true);
      reset();
    } catch {
      // handled
    }
  };

  if (submitted) {
    return (
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center py-16"
      >
        <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h3 className="font-heading text-2xl font-semibold text-charcoal mb-3">
          {t("contact.thanks")}
        </h3>
        <p className="text-charcoal-light mb-8 max-w-md mx-auto">
          {t("contact.thanks.desc")}
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          {t("contact.another")}
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            {t("contact.name")}
          </label>
          <input
            id="name"
            {...register("name")}
            className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder={lang === "ar" ? "جون دو" : "John Doe"}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            {t("contact.email")}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
            {t("contact.company")}
          </label>
          <input
            id="company"
            {...register("company")}
            className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder={lang === "ar" ? "شركتك المحدودة" : "Your Company Ltd."}
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            {t("contact.phone")}
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="+1 555 123 4567"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
          {t("contact.subject")}
        </label>
        <input
          id="subject"
          {...register("subject")}
          className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          placeholder={lang === "ar" ? "استفسار عن منتج" : "Product Inquiry"}
        />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          {t("contact.message")}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3.5 rounded-2xl glass text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y"
          placeholder={lang === "ar" ? "أخبرنا عن متطلباتك..." : "Tell us about your requirements..."}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" loading={isSubmitting}>
        <Send className="h-5 w-5" />
        {t("contact.send")}
      </Button>
    </motion.form>
  );
}
