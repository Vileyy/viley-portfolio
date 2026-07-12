import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail, SiGooglemaps } from 'react-icons/si';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Sending message:', data);
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-border-custom relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-50/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-cyan-50/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
            Get In Touch
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Info Card Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-3xl font-extrabold text-text-primary">Contact Info</h4>
              <p className="text-text-secondary leading-relaxed text-base">
                Looking for a developer, need technical advice, or just want to say hi? Feel free to contact me.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              {/* Email Card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border-custom bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-[#EA4335]/10 text-[#EA4335]">
                  <SiGmail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold">Direct Email</div>
                  <a href="mailto:doanquochieu2104@gmail.com" className="text-sm font-bold text-text-primary hover:text-primary transition-colors">
                    doanquochieu2104@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn Card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border-custom bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2]">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold">LinkedIn Profile</div>
                  <a 
                    href="https://www.linkedin.com/in/doanhieu21/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-bold text-text-primary hover:text-primary transition-colors"
                  >
                    linkedin.com/in/doanhieu21
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border-custom bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
              >
                <div className="p-3.5 rounded-xl bg-[#34A853]/10 text-[#34A853]">
                  <SiGooglemaps className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-text-secondary font-semibold">Location</div>
                  <span className="text-sm font-bold text-text-primary">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form Column wrapped in a modern glass panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-border-custom shadow-[0_20px_50px_rgba(59,130,246,0.04)]"
            >
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-10 flex flex-col items-center gap-4"
                >
                  <div className="p-4 rounded-full bg-green-50 text-green-500">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-text-primary">Message Sent Successfully!</h4>
                  <p className="text-text-secondary max-w-sm">
                    Thank you for reaching out. I will reply to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-secondary">Full Name</label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Enter your name"
                      className="px-4.5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-text-primary text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                    />
                    {errors.name && <span className="text-xs font-medium text-red-500">{errors.name.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-secondary">Your Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="email@example.com"
                      className="px-4.5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-text-primary text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300"
                    />
                    {errors.email && <span className="text-xs font-medium text-red-500">{errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-text-secondary">Message</label>
                    <textarea
                      rows={5}
                      {...register('message')}
                      placeholder="Hi Hieu, I want to talk about..."
                      className="px-4.5 py-3.5 rounded-xl border border-slate-200 bg-slate-50/30 text-text-primary text-sm focus:border-primary focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none resize-none transition-all duration-300"
                    />
                    {errors.message && <span className="text-xs font-medium text-red-500">{errors.message.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-blue-500/20 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
