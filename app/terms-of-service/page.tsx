'use client';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #3a6b4a 0%, #2d5a45 100%)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-yellow-50 text-lg">Last Updated: May 27, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-gray-700">

            <div>
              <p className="text-gray-600 leading-relaxed font-semibold mb-4">
                Welcome to Adish Ventures. By accessing or using our website (www.adishventures.com) you agree to comply with and be bound by the following terms. If you disagree with any part of these terms, please do not use our website.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                1. General Provisions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Adish Ventures markets botanical supplements. By placing an order, you confirm that you are at least 18 years of age (or have the consent of a parent/guardian) and are legally capable of entering into binding contracts.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                2. Product Use & Medical Disclaimer
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                <p className="text-red-800 font-semibold mb-2">Important:</p>
                <p className="text-red-700 leading-relaxed">
                  Our products are not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for educational purposes only and should not replace professional medical advice. Always consult with a healthcare professional before starting any new supplement regimen, especially if you are pregnant, nursing, or have a pre-existing medical condition.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                3. Orders & Payments
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All orders placed on this website are subject to acceptance and fulfillment by Adish Ventures. We reserve the right to refuse or cancel any order. Prices are subject to change without notice. Payment must be received before shipment of your order.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                4. Shipping & Delivery
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We will use reasonable efforts to ship orders within the timeframe specified on the order confirmation. However, we are not responsible for delays caused by courier services, weather, or other circumstances beyond our control. Risk of loss transfers to you upon shipment.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                5. Returns & Refunds
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Products must be returned in their original, unopened condition within 30 days of purchase for a full refund. Please contact us at mailus@adishventures.com to initiate a return. Shipping costs are non-refundable unless the return is due to our error.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the fullest extent permitted by law, Adish Ventures and its owners, employees, and agents shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or products.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                7. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website, including text, images, logos, and graphics, is the property of Adish Ventures or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                8. User Conduct
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to use the website for any unlawful purpose or in any way that could damage, disable, or impair the website. Prohibited conduct includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Harassment or abuse of any person</li>
                <li>Posting offensive or defamatory content</li>
                <li>Attempting to gain unauthorized access to the website</li>
                <li>Transmitting viruses or malicious code</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                9. Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold harmless Adish Ventures from any claims, damages, or expenses (including legal fees) arising from your violation of these Terms of Service or your use of the website.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                10. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                11. Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:mailus@adishventures.com" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                  mailus@adishventures.com
                </a>
              </p>
            </div>

            {/* Consent Section */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mt-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 accent-yellow-600"
                />
                <span className="text-gray-700">
                  I agree to the Privacy Policy and Terms of Service.
                </span>
              </label>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
