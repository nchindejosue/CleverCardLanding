import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone, Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadPopup: React.FC<DownloadPopupProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hardcoded Google Drive link for APK download
  const APK_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1234567890abcdefghijklmnopqrstuvwxyz';

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Adding to waitlist:', email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        onClose();
      }, 2000);
    }
  };

  const handleApkDownload = () => {
    window.open(APK_DOWNLOAD_URL, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900">
                {t('download.popup.title')}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5 text-neutral-600" />
              </button>
            </div>

            {!isSubmitted ? (
              <>
                <p className="text-neutral-600 mb-6">
                  {t('download.popup.subtitle')}
                </p>

                {/* Waitlist Form */}
                <form onSubmit={handleWaitlistSubmit} className="mb-6">
                  <div className="flex flex-col space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('download.popup.emailPlaceholder')}
                      className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                      required
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                    >
                      <Mail className="h-4 w-4" />
                      <span>{t('download.popup.joinWaitlist')}</span>
                    </motion.button>
                  </div>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                  <div className="flex-1 border-t border-neutral-300"></div>
                  <span className="px-4 text-neutral-500 text-sm">or</span>
                  <div className="flex-1 border-t border-neutral-300"></div>
                </div>

                {/* Direct APK Download */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleApkDownload}
                  className="w-full bg-neutral-100 text-neutral-700 px-6 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-neutral-200 transition-all duration-300"
                >
                  <Download className="h-4 w-4" />
                  <span>{t('download.popup.downloadApk')}</span>
                </motion.button>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <CheckCircle className="h-16 w-16 text-success-500 mx-auto mb-4" />
                <p className="text-success-700 font-medium">
                  {t('download.popup.waitlistSuccess')}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DownloadPopup;