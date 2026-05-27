'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #3a6b4a 0%, #2d5a45 100%)' }} className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-yellow-50 text-lg">Last updated: May 27, 2026</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-8 text-gray-700">

            <div>
              <p className="text-gray-600 leading-relaxed">
                At Adish Ventures, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you visit or make a purchase from our website (www.adishventures.com).
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                1. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our site, we automatically collect certain information about your device, including information about your web browser, IP address, and time zone. Additionally, as you browse, we collect information about the individual web pages or products that you view.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you make a purchase or attempt to make a purchase, we collect certain information from you, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Order Information:</strong> Your name, billing address, shipping address, payment information (processed via secure gateways), email address, and phone number.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                2. How We Use Your Personal Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the Order Information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Fulfill any orders placed through the Site (including processing your payment, arranging for shipping, and providing invoices/order confirmations).</li>
                <li>Communicate with you regarding your order.</li>
                <li>Screen our orders for potential risk or fraud.</li>
                <li>Provide you with information or advertising relating to our products or services (if you have opted-in to our marketing).</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                3. Sharing Your Personal Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We share your Personal Information with third parties to help us use your Personal Information, as described above:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li><strong>Payment Processors:</strong> We use secure payment gateways to process transactions. They receive only the information necessary to complete your purchase.</li>
                <li><strong>Logistics Partners:</strong> We share your address and contact details with shipping/courier partners to deliver your products.</li>
                <li><strong>Legal Compliance:</strong> We may share your information to comply with applicable laws and regulations or to respond to a legal request.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                4. Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                5. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you are a resident of India, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise these rights, please contact us through the contact information below.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                6. Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We take reasonable precautions to ensure that your personal information is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                7. Changes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-adish-dark">
                8. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at{' '}
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
