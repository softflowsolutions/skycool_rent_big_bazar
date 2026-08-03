import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { SITE_CONFIG } from '@/lib/constants';
import { SEO } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata = SEO.privacy;

const sections: Array<{ title: string; body: string[] }> = [
  {
    title: '1. Collection of Personal Information',
    body: [
      'For availing the Services/Products from the Website or to contact AC on Rent Near Me, you may have to sign up by giving the following personal information such as email address, name, phone number, and address. Some of the information provided above is personally sensitive information (“Personal Information”) and is collected for verification of the identity of the user and to ensure due compliance.',
      'We do use your contact information to send you offers based on your previous orders and your interests. In general, you can browse the Website without telling us who you are or revealing any Personal Information about yourself. Additionally, if you browse through this Website, our servers may automatically record information of a certain kind. Such information includes information such as the name of the domain and host from which you access the Internet; the Internet Protocol (IP) address of the computer you are using; the date and time of your access.',
      'We use this information to monitor the usage of our website and also whatever is necessary for our business. This information does not include Personal Information. If you choose to post messages on our message boards, chat rooms, or other message areas or leave feedback, we will collect the information you provide to us. We retain this information as necessary to resolve disputes, provide customer support, and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Website, we may collect such information into a file specific to you.',
    ],
  },
  {
    title: '2. Information collected from the third party',
    body: [
      'We may collect your Personal Information as well as other information from websites like businesses and add the same to our account information.',
    ],
  },
  {
    title: '3. Information placed on your computer',
    body: [
      'We may store some information such as cookies on your computer. Cookies are pieces of information that an application transfers to the hard drive of a visitor’s computer for record-keeping purposes. This information facilitates your use of the Website and ensures that you do not need to re-enter your details every time you visit it. You can erase or choose to block this information from your computer if you want to. Erasing or blocking such information may limit the range of features available to the visitor on the Website. We also use such information to provide visitors with a personalized experience on the Website. We may use such information to allow visitors to use the Website without logging in upon returning.',
    ],
  },
  {
    title: '4. Links',
    body: [
      'Our website may contain links to other sites. Such other sites may use information about your visit to this Website. Our Privacy Policy does not apply to practices of such sites that we do not own or control or to people we do not employ. Therefore, we are not responsible for the privacy practices or the accuracy or integrity of the content included on such other sites. We encourage you to read the individual privacy statements of such websites.',
    ],
  },
  {
    title: '5. Use of Personal Information',
    body: [
      'AC on Rent Near Me collects and uses your Personal Information to provide you better customer experience and also in the administration of our business. We may use your Personal Information to administer this service, personalize the Website services for you, enable your access to and use of Website services, publish information about you on Website to keep you informed or update you on various products and services available from the Website, send you statements and invoices, collect payments from you, send you marketing communications, send you mails or contact you for various customer satisfaction surveys, market research, promotional activities or in connection with certain transactions, make communications necessary to notify you regarding various security, privacy, and administrative issues, respond to your queries, send you information that may be of interest to you, share this information with Services/Products made available through the Website, respond to any legitimate claim, conduct research and perform analysis in order to measure, maintain, protect, develop and improve our services.',
      'AC on Rent Near Me has no operations in other countries and we do not transfer Personal Information to other countries. However, if the server space provider as a matter of backup or other general practices may transfer the server content between any of the countries in which the server provider operates or servers are located to enable the use of the information by this Privacy Policy, you agree to such cross-border transfers of Personal Information and the risk associated with it. Where the Website discloses your Personal Information to any third party for any purpose mentioned above, such third parties are obligated to use that Personal Information by the terms of this Privacy Policy. In addition to the disclosures reasonably necessary for the purposes identified above, the Website may disclose your Personal Information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and to establish, exercise, or defend its legal rights.',
    ],
  },
  {
    title: '6. Personal Information that we share',
    body: [
      'We are committed to protecting the privacy and security of your information. At no time will we sell your Personal Information without your permission unless outlined in this Privacy Policy to third parties.',
      'The information we receive about you or from you may be used by us or shared by us with our corporate affiliates, dealers, agents, vendors, and other third parties.',
      'We do not share, sell, trade, or rent your Personal Information to third parties for unknown reasons. We retain complete anonymity while in all analytics and none of the Personal Information is used, except in a limited set of circumstances as stated below. We safeguard your email addresses. We don’t sell the email addresses provided by you and we use them only as directed by you and following this Policy.',
    ],
  },
  {
    title: '7. We share your Personal Information as described below',
    body: [
      'Business Transfers: If we start up subsidiaries or get involved in mergers or acquisitions. In such case, your Personal Information may be a matter of transfer. And we will provide notice on any such transfer and become subject to different privacy policies.',
    ],
  },
  {
    title: '8. DND Waiver',
    body: [
      'You agree and authorize the Company to use and share your information with its contractors and other third parties, in so far as required for joint marketing purposes/offering various services/report generations and/or similar services to provide you with various value-added services, in association with the Services selected by you or otherwise. You agree to receive communications through emails, telephone, and/or SMS, from the Company including its contractors or its third-party vendors regarding the Services/ancillary services updates, information/promotional emails, and/or product announcements.',
      'In this context, you agree and consent to receive all communications at the mobile number provided, even if this mobile number is registered under the DND/NCPR list under TRAI regulations, and for such purpose, you further authorize the Company to share/disclose the information to its contractors or any third-party service provider.',
    ],
  },
  {
    title: '9. Our commitment to Personal Information security',
    body: [
      'We recognize that your privacy is important to you, and therefore we endeavour to keep your Personal Information confidential. We will take reasonable technical and organizational precautions to prevent the loss, misuse, or alteration of your Personal Information. We assure you of our best effort to protect your Personal Information, however, we do not represent, warrant, or guarantee that your Personal Information will be protected against unauthorized access, loss, misuse, or alterations, and do not accept any liability for the security of the Personal Information submitted to us nor for your or third parties’ use or misuse of Personal Information.',
    ],
  },
  {
    title: '10. Security',
    body: [
      'We safeguard your privacy using known security standards and procedures and comply with applicable privacy laws. Our website combines industry-approved physical, electronic, and procedural safeguards to ensure that your information is well protected through its life cycle in our infrastructure. Personal Information is hashed or encrypted when it is stored in our infrastructure. Personal Information is decrypted, processed, and immediately re-encrypted or discarded when no longer necessary.',
    ],
  },
  {
    title: '11. Opt-Out Policy',
    body: [
      `Please email us at ${SITE_CONFIG.email} if you no longer wish to receive any information from us.`,
    ],
  },
  {
    title: '12. Changes to the Privacy Policy',
    body: [
      'We reserve the right to modify this Privacy Policy and it is subject to change at any time without notice. If we decide to change our Privacy Policy, such changes will be posted on the Website so that you are always aware of the latest amendments in this Privacy Policy and please review this Policy periodically.',
    ],
  },
  {
    title: '13. About this Privacy Policy',
    body: [
      'If you choose to visit our website, your visit and any dispute over privacy are subject to this Privacy Policy and Terms of Use. The terms of this Privacy Policy do not govern Personal Information furnished through any means other than the Website. If you have any questions about this Privacy Policy or our treatment of your Personal Information, please write to us at the email below.',
    ],
  },
  {
    title: '14. Grievances',
    body: [
      `If you have any grievances against the Website’s privacy practices, or you apprehend that your privacy is compromised at the Website, please address your complaint / concerns to ${SITE_CONFIG.email}. We assure we shall proactively address your concerns. All disputes between us and you in this regard are subject to the exclusive jurisdiction of Pune Court.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container-app py-8 lg:py-12">
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
          <div className="max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              We&rsquo;re AC on Rent Near Me (aconrentnearme.com), an online rental
              service for your lifestyle needs. AC on Rent Near Me is a website owned and
              strongly committed to protecting your privacy and has taken all necessary and
              reasonable measures to protect your personal information and handle the same
              safely and responsibly.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Last updated:{' '}
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
                  <li key={i} className="text-sm text-gray-700 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact card */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold mb-2">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              Reach the AC on Rent Near Me privacy team with questions, opt-out requests or
              grievances.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">🌐 Website:</span>
                <a
                  href="https://www.aconrentnearme.com"
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.aconrentnearme.com
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
              <div className="flex items-center gap-2">
                <span className="text-gray-400">📞 Phone:</span>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-white hover:underline"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
