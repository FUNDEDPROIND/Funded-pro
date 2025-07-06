export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', padding: '40px' }}>
      <header style={{ backgroundColor: '#002244', color: 'white', padding: '20px' }}>
        <h1>FundedProInd</h1>
        <p>Empowering Traders Across India</p>
        <div style={{ marginTop: '10px' }}>
          <a href="/auth/login" style={{ margin: '0 10px', color: '#fff' }}>Login</a>
          <a href="/auth/signup" style={{ margin: '0 10px', color: '#fff' }}>Sign Up</a>
        </div>
      </header>

      <main style={{ backgroundColor: '#f3f4f6', padding: '40px' }}>
        <h2 style={{ fontSize: '2em' }}>Get Funded to Trade</h2>
        <p style={{ maxWidth: '600px', margin: '20px auto' }}>
          Join India's most transparent and trader-friendly prop firm. We provide you the capital. You trade, we split the profits.
        </p>
        <a href="/auth/signup" style={{ padding: '10px 20px', backgroundColor: '#2563eb', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
          Get Started
        </a>
      </main>

      <section style={{ backgroundColor: 'white', padding: '30px' }}>
        <h3 style={{ fontSize: '1.2em' }}>Crypto Payment Wallets</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><strong>BTC:</strong> 1AqirbDZwfexCFFLRDWhyULrwbdKwEY7on</li>
          <li><strong>ETH:</strong> 0x89b328ada5012dd1cc08c84cf65c3b1015ee1915</li>
          <li><strong>TRON (TRC20):</strong> TExN2sJT1YhWAztZGPVKenVD4GszwqNMmt</li>
        </ul>
      </section>

      <section style={{ backgroundColor: '#f3f4f6', padding: '30px' }}>
        <h3>Support</h3>
        <p>WhatsApp: <a href="https://wa.me/917428730894" style={{ color: '#2563eb' }}>+91 74287 30894</a></p>
      </section>

      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '20px' }}>
        <p>© {new Date().getFullYear()} FundedProInd. All rights reserved.</p>
      </footer>
    </div>
  );
            }
