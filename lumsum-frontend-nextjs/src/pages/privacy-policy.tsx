import Head from 'next/head'
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../layouts/Footer';
import styles from '../styles/privacy-policy.module.scss'

export default function Home() {
      return (
            <>
                  <Head>
                        <title>Privacy Policy | Lumsum  </title>
                        <link rel="icon" href="/lumsum.png" type="image/png" />
                  </Head>
                  <main>
                        <BreadCrumb title="Privacy Policy">
                              <BreadCrumb.ItemLink href="/">Home</BreadCrumb.ItemLink>
                              <BreadCrumb.Item>Privacy Policy</BreadCrumb.Item>
                        </BreadCrumb>
                        <div className={styles.container}>
                              <div className={styles.inner}>
                                    <h1 className={styles.title}>Privacy Policy</h1>
                                    <div className={styles.content}>
                                          <p className={styles.paragraph}>This privacy policy ("Policy") describes how we collect, protect and use the identifiable personal
                                          or business information ("Personal Information", ‘’Business Information’’ or ‘’Personal and Business Information’’)
                                          you ("User", "you" or "your") provide on the www.lumsum.io website and any of its products or
                                          services (collectively, "Website" or "Services") owned and operated by Lumsum services FZ LLC
                                          ("Lumsum", "us", "we" or "our"). Personal information means information or an opinion about an identified individual,
                                          or an individual who is reasonably identifiable. This Policy applies to personal information collected and/or held by
                                          Lumsum.It also describes the choices available to you regarding our use of your personal information and how you can access
                                          and update this information. This Policy does not apply to the practices of companies that we do not own or
                                          control, or to individuals that we do not employ or manage.We will review this policy regularly, and we may
                    update it from time to time.</p>

                                          <h2 className={styles.subTitle}>COLLECTION OF PERSONAL AND BUSINESS INFORMATION:</h2>
                                          <p className={styles.paragraph}>We collect, receive and store any Personal and Business information you knowingly provide to us when you
                                          create an account, publish content, submit review, fill any online form on the Website. When required this
                                          information may include your email address, name, phone number, address, Business Information and other Personal
                                          Information. You can choose not to provide us with certain information, but then you may not be able to take
                                          advantage of some of the Website's features. However, once you provide the information, it is deemed that you
                    have given Lumsum right to publish the provided business and personal information.</p>

                                          <h2 className={styles.subTitle}>COLLECTION OF INFORMATION ON USAGE STATISTICS:</h2>
                                          <p className={styles.paragraph}>When you visit the Website our servers automatically record information that your browser sends.
                                          This data may include information such as your computer's IP address, browser type and version, operating
                                          system type and version, language preferences or the webpage you were visiting before you came to our Website,
                                          pages of our Website that you visit, the time spent on those pages, information you search for on our Website,
                    access times and dates, and other statistics.</p>

                                          <h2 className={styles.subTitle}>Managing Personal and Business Information:</h2>
                                          <p className={styles.paragraph}>You are able to access, add to, update and delete certain Personal and Business Information about you or
                                          your business. The information you can view, update, and delete may change as the Website or Services change.
                                          When you update information, however, we may maintain a copy of the unrevised information in our records.
                                          We will retain your information for as long as your account is active or as needed to provide you Services.
                                          Some information may remain in our private records after your deletion of such information from your account.
                                          We will retain and use your information as necessary to comply with our legal obligations, resolve disputes,
                                          and enforce our agreements. We may use any aggregated data derived from or incorporate your Personal and
                    Business Information after you update or delete it, but not in a manner that would identify you personally.</p>

                                          <h2 className={styles.subTitle}>USE OF COLLECTED PERSONAL AND BUSINESS INFORMATION:</h2>
                                          <p className={styles.paragraph}>Any of the information we collect from you or public information may be used to:</p>
                                          <ul className={styles.listItem}>
                                                <li>personalize your experience;</li>
                                                <li>improve our Website;</li>
                                                <li>improve customer service, technical or other support to you and respond to queries and emails of our customers;</li>
                                                <li>process transactions;</li>
                                                <li>send notification emails such as password reminders, updates, etc.;</li>
                                                <li>run and operate our Website and Services.</li>
                                                <li>to provide the service or product you have requested;</li>
                                                <li>to answer enquiries about our services, or to respond to a complaint;</li>
                                                <li>to promote our other programs, products or services which may be of interest to you (unless you have opted out from such communications);</li>
                                                <li>to allow for debugging, testing and otherwise operate our platforms;</li>
                                                <li>to conduct data analysis, research and otherwise build and improve our platforms;</li>
                                                <li>to comply with legal and regulatory obligations;</li>
                                                <li>for other purposes with your consent, unless you withdraw your consent for these purposes.</li>
                                                <li>Business Information is used to display your business listing and service offering details to maximise user’s business opportunities.</li>
                                          </ul>

                                          <h2 className={styles.subTitle}>OUR THIRD-PARTY SERVICE PROVIDERS:</h2>
                                          <p className={styles.paragraph}>We may contract with other companies to provide certain products and services. These third-party service
                                          providers are bound by contract to only use your personal information on our behalf and not authorized to
                                          use or disclose the information except as necessary to perform services on our behalf or comply with legal requirements.
                                          Our service providers are given the information they need to perform their designated functions, and we do not authorize
                    them to use or disclose Personal Information for their own marketing or other purposes.Our third-party service providers include:</p>
                                          <ul className={styles.listItem}>
                                                <li>Cloud hosting, storage, networking and related providers;</li>
                                                <li>SMS providers;</li>
                                                <li>Payment And banking providers;</li>
                                                <li>if necessary to provide the service or product you have requested;</li>
                                                <li>if otherwise permitted or required by law;</li>
                                                <li>for other purposes with your consent;</li>
                                                <li>Marketing and analytics providers; and</li>
                                                <li>Security providers.</li>
                                          </ul>

                                          <h2 className={styles.subTitle}>MINIMUM AGE:</h2>
                                          <p className={styles.paragraph}>You must be an individual of at least 18 years of age.</p>

                                          <h2 className={styles.subTitle}>Community:</h2>
                                          <p className={styles.paragraph}>We offer electronic newsletters, Social media posts, emails, audiovisuals to which you may voluntarily subscribe at any time.
                                          You may choose to stop receiving some of them by following the unsubscribe instructions or by contacting us. However, you will
                    continue to receive essential transactional emails.</p>

                                          <h2 className={styles.subTitle}>COOKIES:</h2>
                                          <p className={styles.paragraph}>The Website uses "cookies" to help personalize your online experience. A cookie is a text file that is placed on
                                          your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer.
                                          Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
                                          We may use cookies to collect, store, and track information for statistical purposes to operate our Website and Services.
                                          You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually
                                          modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to
                    fully experience the features of the Website and Services.</p>

                                          <h2 className={styles.subTitle}>ADVERTISEMENT:</h2>
                                          <p className={styles.paragraph}>We may display online advertisements and we may share aggregated and non-identifying information about
                                          our customers that we collect through the registration process or through online surveys and promotions
                                          with certain advertisers. We do not share personally identifiable information about individual customers with advertisers.
                                          In some instances, we may use this aggregated and non-identifying information to deliver tailored advertisements to
                    the intended audience.</p>

                                          <h2 className={styles.subTitle}>AFFILIATES:</h2>
                                          <p className={styles.paragraph}>We may disclose information about you to our affiliates for the purpose of being able to offer you
                                          related or additional products and services. Any information relating to you that we provide to our
                    affiliates will be treated by those affiliates in accordance with the terms of this Privacy Policy.</p>

                                          <h2 className={styles.subTitle}>LINKS TO OTHER WEBSITES:</h2>
                                          <p className={styles.paragraph}>Our Website contains links to other websites that are not owned or controlled by us. Please be aware
                                          that we are not responsible for the privacy practices of such other websites or third parties.
                                          We encourage you to be aware when you leave our Website and to read the privacy statements of each
                    and every website that may collect personal information.</p>

                                          <h2 className={styles.subTitle}>INFORMATION SECURITY:</h2>
                                          <p className={styles.paragraph}>We secure information you provide on computer servers in a controlled, secure environment,
                                          protected from unauthorized access, use, or disclosure. We maintain reasonable administrative,
                                          technical, and physical safeguards in an effort to protect against unauthorized access, use,
                                          modification, and disclosure of personal information in its control and custody. However,
                                          no data transmission over the Internet or wireless network can be guaranteed. Therefore,
                    while we strive to protect your personal information, you acknowledge that</p>
                                          <p className={styles.paragraph}>(i) there are security and privacy limitations of the Internet which are beyond our control;</p>
                                          <p className={styles.paragraph}>(ii) the security, integrity, and privacy of any and all information and data exchanged between you and our Website cannot be guaranteed; and</p>
                                          <p className={styles.paragraph}>(iii) any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.</p>

                                          <h2 className={styles.subTitle}>DATA BREACH:</h2>
                                          <p className={styles.paragraph}>In the event we become aware that the security of the Website has been compromised or users Personal or Business Information has
                                          been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks
                                          or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and
                                          reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach,
                                          we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm
                                          to the user as a result of the breach or if notice is otherwise required by law. When we do we will post a notice on the
                    Website, send you an email.</p>

                                          <h2 className={styles.subTitle}>BILLING AND PAYMENTS:</h2>
                                          <p className={styles.paragraph}>We use third party payment processors to assist us in processing your payment information securely. Such third-party
                                          processors' use of your Personal Information is governed by their respective privacy policies which may or may not
                                          contain privacy protections as protective as this Privacy Policy. We suggest that you review their respective
                    privacy policies.</p>

                                          <h2 className={styles.subTitle}>LEGAL DISCLOSURE:</h2>
                                          <p className={styles.paragraph}>We will disclose any information we collect, use or receive if required or permitted by law and when we believe
                                          in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others,
                    investigate fraud, or respond to a government request.</p>

                                          <h2 className={styles.subTitle}>CHANGES AND AMENDMENTS</h2>
                                          <p className={styles.paragraph}>We reserve the right to modify this privacy policy relating to the Website or Services at any time, effective
                                          upon posting of an updated version of this privacy policy on the Website. When we do we will revise the updated
                                          date at the bottom of this page. Continued use of the Website after any such changes shall constitute your
                    consent to such changes.</p>

                                          <h2 className={styles.subTitle}>ACCEPTANCE OF THIS POLICY:</h2>
                                          <p className={styles.paragraph}>You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website
                                          or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy,
                    you are not authorized to use or access the Website and its Services.</p>
                                    </div>
                              </div>
                        </div>
                  </main>
                  <Footer />
            </>
      )
}
