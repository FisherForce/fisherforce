import "../styles/globals.css";

export const metadata = {
  title: "Fisherforce",
  description: "Le réseau social des pêcheurs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
