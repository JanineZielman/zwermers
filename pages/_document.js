import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LW5YSZF1JP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LW5YSZF1JP', { 'anonymize_ip': true });
            `,
          }}
        />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <script async src="https://eocampaign1.com/form/579d6956-b0c8-11ee-a43a-a320057deaf3.js" data-form="579d6956-b0c8-11ee-a43a-a320057deaf3"></script>
      </Head>
      <body className="overflow-x-hidden antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
