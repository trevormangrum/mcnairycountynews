import SectionHeader from "components/SectionHeader";
import Layout from "components/Layout";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <SectionHeader text="Privacy Policy" />
      <p>
        The following is the McNairy County News, LLC privacy policy. "McNairy
        County News," or "we" or "us" refers to McNairy County News, LLC. This
        Privacy Policy applies whenever you access our website or any other
        domains owned by McNairy County News. This Privacy Policy describes:
      </p>
      <ul>
        <li>
          What information we collect, how it is collected, and why it is
          collected
        </li>
        <li>How your information is used and with whom it is shared</li>
        <li>
          What choices you can make about how we collect, use and share your
          information
        </li>
        <li>How we protect the information we store about you</li>
      </ul>
      <SectionHeader text="Children Under 13" />
      <p>
        McNairy County News does not knowingly collect personal information from
        children under 13. If you are under 13, please do not provide any
        information on this Website.
      </p>
      <SectionHeader text="Information that we collect" />
      <h2>Information Collected Automatically</h2>
      <h3>Google Analytics</h3>
      <p>
        When you interact with our Site, we receive and store information using
        a technology called Google Analytics. Google Analytics is a tool created
        by Google that is used to monitor and analyze website traffic. Google
        Analytics works by using a technology known as cookies, which are small
        documents that contain information and are stored on the user's browser.
        Google Analytics places a cookie in your browser and collects
        information such as:
      </p>
      <ul>
        <li>Usage data regarding the pages you visit on our Website</li>
        <li>Your IP address</li>
        <li>The device you access our Site on</li>
        <li>The browser type and version you access our Site on</li>
        <li>The amount of time you spent on each webpage on our Site</li>
      </ul>
      <p>
        We will never sell your information to any third party or use it for any
        other purposes than those listed above.
      </p>
      <SectionHeader text="Your Choices Regarding Your Data" />
      <p>If you would like to opt-out of Google Analytics, you can do so by installing the <a href='https://tools.google.com/dlpage/gaoptout'>Google Analytics Opt-out Browser Extension</a>.</p>
      <p>All other data we collect is voluntarily submitted. To use our contact form and subscription purchasing services, you must voluntarily provide your data.</p>
      <SectionHeader text="Changes to our Privacy Policy" />
      <p>This Privacy Policy may be revised over time as new features are added to the Terrific Tans website. We may change this Privacy Policy at any time by posting a revised version to our Website.</p>
    </Layout>
  );
}
