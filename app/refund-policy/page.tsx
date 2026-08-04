import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata = SEO.refund;

const sections: Array<{ title: string; body: string[] }> = [
  {
    title: '1. Order Modification',
    body: [
      'Customers may request modifications to their order up to one (1) day before the scheduled delivery date by contacting our Customer Support through Phone, WhatsApp, Live Chat, or Email.',
      'Please note:',
      '• Delivery date and time may change based on product availability and the requested modifications.',
      '• Rental charges, security deposit, and other applicable charges will be recalculated according to the prevailing rates at the time the modification request is confirmed.',
      '• The revised monthly rental amount will apply after successful confirmation of the modified order.',
    ],
  },
  {
    title: '2. Order Cancellation',
    body: [
      'Customers may cancel an order up to one (1) day before the scheduled delivery date without any cancellation charges.',
      'Once the products have been delivered and accepted by the customer, the order cannot be cancelled.',
    ],
  },
  {
    title: '3. Product Acceptance at Delivery',
    body: [
      'All products delivered by Rent BigBazar undergo quality inspection before dispatch.',
      'At the time of delivery, customers are requested to inspect the products carefully.',
      'If a product is found to be defective, damaged during transit, non-functional, or different from the confirmed order, the customer should immediately inform the delivery team before installation or before the delivery personnel leave the premises.',
      'Once the delivery has been successfully completed and acknowledged, product rejection at the time of delivery will no longer be accepted.',
      'Customers are also advised to verify product dimensions before placing an order. Returns due to incorrect measurements or space constraints are not considered valid grounds for rejection.',
    ],
  },
  {
    title: '4. Rental Plans',
    body: [
      'Rent BigBazar offers flexible rental plans, including:',
      '• 1 Month',
      '• 3 Months',
      '• 6 Months',
      '• 12 Months',
      'Customers are expected to complete the selected rental tenure.',
    ],
  },
  {
    title: '5. Early Subscription Closure & Cancellation',
    body: [
      'Customers may request closure of one or more rented products by informing Rent BigBazar at least 7 days before the preferred pickup date.',
      'However, if the subscription is terminated before completion of the selected rental tenure:',
      '• The rental agreement will be considered an early closure.',
      '• Rental amounts already paid are strictly non-refundable.',
      '• The customer shall not be entitled to any refund of prepaid rental charges for the remaining rental period.',
      '• Any applicable early closure charges, if specified in the rental agreement, must be cleared before pickup.',
      '• The refundable security deposit, after adjustment of outstanding dues, damages, relocation charges (if any), and other applicable charges, will be processed as per the Refund Policy.',
    ],
  },
  {
    title: '6. Relocation Policy',
    body: [
      'Customers must not relocate rented products without prior written approval from Rent BigBazar.',
      'If relocation is required:',
      '• Customers must inform us at least 14 days in advance.',
      '• Relocation is subject to service availability at the new address.',
      '• Transportation, dismantling, shifting, reinstallation, and service charges will be applicable.',
      '• Charges will be calculated based on distance, product type, and installation requirements.',
      'Unauthorized relocation may result in additional charges and may void warranty or service support.',
    ],
  },
  {
    title: '7. Installation & Reinstallation Charges',
    body: [
      'Standard installation is included only where specifically mentioned at the time of booking.',
      'If installation is required due to relocation, reinstallation, or customer-requested shifting:',
      '• Installation and technician visit charges will apply.',
      '• Any additional accessories, piping, brackets, wiring, stands, or materials required during installation will be charged separately.',
      '• Customers are responsible for providing a safe and suitable installation location.',
    ],
  },
  {
    title: '8. Product Care & Customer Responsibility',
    body: [
      'Customers are responsible for maintaining rented products in clean and good working condition throughout the rental period.',
      'Products must be used only for their intended purpose and in accordance with the manufacturer’s instructions.',
      'Customers shall not:',
      '• Attempt unauthorized repairs.',
      '• Modify or alter the product.',
      '• Remove serial number labels.',
      '• Sublet or transfer products without written approval from Rent BigBazar.',
    ],
  },
  {
    title: '9. Damage & Loss Policy',
    body: [
      'Customers are fully responsible for the safety and proper use of rented products during the rental period.',
      'If any rented product suffers physical damage, accidental damage, water damage, fire damage, electrical damage caused by improper usage, missing accessories / remote controls / cables / parts, breakage due to mishandling, or unauthorized repairs / modifications, the customer shall be liable to pay the repair or replacement cost as determined by Rent BigBazar based on the prevailing market rates.',
      'If a product is damaged beyond economical repair or is lost, stolen, or cannot be recovered, the customer shall be liable to pay the full replacement value of the product after adjustment of any available refundable security deposit.',
      'The technical assessment conducted by Rent BigBazar’ service team shall be considered final.',
    ],
  },
  {
    title: '10. Security Deposit Refund',
    body: [
      'After the rented products are returned, they will undergo a quality inspection.',
      'The refundable security deposit will be processed only after:',
      '• Successful quality inspection.',
      '• Clearance of all pending rental dues.',
      '• Adjustment of repair, damage, relocation, installation, or any other applicable charges.',
      'Refunds will generally be credited to the customer’s registered bank account within 7 working days after completion of inspection and settlement.',
      'The bank account must belong to the customer who placed the order. Requests for refund to another account may require additional verification.',
    ],
  },
  {
    title: '11. Service Availability',
    body: [
      'Delivery, installation, relocation, repairs, and pickup services are subject to operational availability in the customer’s location.',
      'Rent BigBazar reserves the right to reschedule services due to unforeseen circumstances such as weather conditions, transportation issues, public holidays, or operational constraints.',
    ],
  },
  {
    title: '12. Right to Refuse Service',
    body: [
      'Rent BigBazar reserves the right to refuse, suspend, or terminate any rental service in cases of:',
      '• Fraudulent activity.',
      '• Misrepresentation of customer information.',
      '• Non-payment of dues.',
      '• Repeated policy violations.',
      '• Misuse or intentional damage to rented products.',
    ],
  },
  {
    title: '13. Changes to This Policy',
    body: [
      'Rent BigBazar reserves the right to modify or update these Terms & Conditions at any time without prior notice.',
      'The latest version published on www.rentbigbazar.com shall always prevail.',
    ],
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Rental Terms, Cancellation & Refund Policy' }]} />
          <div className="max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Rental Terms, Cancellation &amp; Refund Policy
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to Rent BigBazar. By placing an order with us, you agree to the
              following Rental Terms &amp; Conditions. These policies are designed to ensure a
              transparent, fair, and hassle-free rental experience for all customers.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Effective Date: July 20, 2026 · Last updated:{' '}
              {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="container-app py-8 lg:py-12">
        <div className="max-w-4xl mx-auto space-y-5">
          {sections.map((section, idx) => (
            <div
              key={section.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7"
            >
              <h2 className="font-display text-lg sm:text-xl font-extrabold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white text-xs font-bold">
                  {idx + 1}
                </span>
                <span>{section.title.replace(/^\d+\.\s*/, '')}</span>
              </h2>
              <ul className="space-y-2 pl-2">
                {section.body.map((line, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-700 leading-relaxed"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact card */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold mb-2">
              Need Help?
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Reach out to the Rent BigBazar team. We respond across Phone, WhatsApp,
              Live Chat and Email.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🌐 Website:</span>
                <a
                  href="https://www.rentbigbazar.com"
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.rentbigbazar.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📞 Phone:</span>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-white hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">✉️ Email:</span>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white hover:underline"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400 leading-relaxed">
              Our team is committed to providing reliable products, timely service, and a
              transparent rental experience for every customer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
