import "./AboutPenang.css";

function AboutPenang() {
  return (
    <main className="about-penang">
        <section className="welcome-section">
        <h2>Welcome to Penang</h2>
        <h3>The Pearl of the Orient</h3>
        <p>
          Penang is renowned for its captivating mix of old-world heritage and
          modern dynamism. Known as the "Pearl of the Orient," this enchanting
          state is where history, culture, and innovation come together. 
          Established in the late 18th century as a strategic trading hub under 
          British colonial rule, Penang attracted traders from China, India, Arabia, 
          and Europe. This rich fusion of trade, migration, and cultural exchange 
          continues to define Penang’s vibrant character today.
        </p>
      </section>

      <section className="flag-section">
        <h2>The Penang Flag</h2>
        <img
          src="/images/Flag_of_Penang.jpg"
          alt="Penang Flag"
          className="penang-flag"
        />
        <p className="flag-caption">
          The official flag of Penang symbolizes its beauty, heritage, and progress.
        </p>
        <p className="">
          Introduced in 1949, the flag of Penang is a powerful symbol of the
          state’s identity. It features three vertical stripes: blue, white, and
          yellow. The blue stripe represents the sea surrounding the island, the
          white stripe symbolizes peace and harmony, and the yellow stripe signifies
          prosperity. In the center of the white stripe, the flag depicts a green 
          areca palm tree growing on a gold embankment, representing Penang’s rich 
          natural and cultural heritage.
        </p>
      </section>

      <section className="history-section">
        <h2>Historical Significance</h2>
        <p>
          Penang’s journey began in 1786 when Captain Francis Light of the British 
          East India Company established it as a trading port on Penang Island. 
          Over time, the island became a melting pot of cultures, with communities 
          from Malay, Chinese, Indian, and European backgrounds contributing to its 
          distinctive character. As part of the Straits Settlements, Penang thrived 
          as a center for trade, culture, and education.
        </p>
        <p>
          George Town, the capital city, stands as a testament to Penang’s historical 
          legacy. Recognized as a UNESCO World Heritage Site in 2008, its streets are 
          lined with well-preserved colonial-era buildings, temples, mosques, and clan 
          houses, offering visitors a glimpse into the past.
        </p>
      </section>

      <section className="current-section">
        <h2>Discover Penang Today</h2>
        <p>
          Penang today is a thriving state that balances heritage preservation with
          modern development. It comprises Penang Island and Seberang Perai on the
          mainland, covering a total area of 1,048 square kilometers. Visitors are
          drawn to its rich culture, diverse attractions, and world-renowned street
          food. Penang’s multicultural spirit is reflected in its festivals, art
          scenes, and cuisines, offering a truly unique experience.
        </p>
        <p>
          From exploring centuries-old temples and colonial architecture to hiking
          lush trails and relaxing on pristine beaches, Penang is a destination
          that offers something for everyone. Its harmonious blend of culture,
          heritage, and innovation continues to captivate travelers from around
          the globe.
        </p>
      </section>
    </main>
  );
}

export default AboutPenang;
