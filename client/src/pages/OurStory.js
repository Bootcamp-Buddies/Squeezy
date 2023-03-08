import Nav from '../components/Nav/index2.js';
import { useEffect } from 'react';

const OurStory = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container">
      <Nav />
      <div style={{
        backgroundImage: `linear-gradient(white, #e0f79d)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: '',
        height: '130vh'
      }}>
      </div>
      <div>
      <img
            className="portrait"
            src="./images/mr-squeezy.png"
            alt="Mr. Squeezy"
          />

        <div className='story-container'>
          <h2 className='form-header'>The Juice on <img className="brand-logo" src="./icons/squeezy-logo-white.png" alt="Squeezy" />™</h2>
          <p>Welcome to Squeezy, your go-to source for fresh and delicious citrus fruits! We are a family-owned and operated business that has been providing high-quality citrus to customers for many years.</p>
          <p>Our journey started when Mr. Squeezy first planted citrus trees in Citrusland over many years ago. With a passion for growing the best citrus possible, Mr. Squeezy soon became known for their incredible oranges, lemons, limes, and grapefruits.</p>
          <p>Today, we continue to carry on that tradition of excellence by carefully selecting the best citrus from our own orchards and from trusted growers in Citrusland. We handpick our citrus to ensure that only the freshest, juiciest, and most flavorful fruit makes it into your hands.</p>
          <p>At Squeezy, we are committed to sustainability and responsible farming practices. We use natural fertilizers and pest control methods to ensure that our citrus is not only delicious, but also good for you and the environment.</p>
          <p>Whether you're a home cook looking for the perfect ingredient for your recipe, a juice bar owner in need of fresh citrus for your customers, or just a citrus lover who can't get enough of that tangy goodness, we've got you covered. Shop our selection of oranges, lemons, limes, grapefruits, and more, and taste the difference that comes from a passion for quality and freshness.</p>
          <p>Thank you for choosing Squeezy for your citrus needs. We can't wait to share our delicious fruit with you!</p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
