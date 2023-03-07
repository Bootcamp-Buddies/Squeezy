import backgroundBlank from "../assets/squeezy-background-blank-opt.jpg";
import Nav from '../components/Nav/index.js';

const OurStory = () => {

  return (
    <div className="container my-1">
      <Nav />
      <div style={{
        backgroundImage: `url(${backgroundBlank})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: '',
        height: '100vh'
      }}>
      </div>
      <div>
        {/* <Link className="navbar-brand" to="/">
          <img
            className="form-logo"
            src="./icons/squeezy-logo-black-upright.png"
            alt="Squeezy Logo"
          />
        </Link> */}
        <div className='story-container'>
          <h2 className='form-header'>The Juice on <img className="brand-logo" src="./icons/squeezy-logo-white.png" alt="Squeezy Logo"/>™</h2>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc sed blandit. Dui ut ornare lectus sit amet est placerat. </p>
          <p>Proin sed libero enim sed faucibus turpis in. Eget nullam non nisi est sit amet facilisis. Tincidunt id aliquet risus feugiat in ante metus dictum. Senectus et netus et malesuada fames ac. </p>
          <p>Lectus magna fringilla urna porttitor rhoncus. Massa placerat duis ultricies lacus. Amet nisl suscipit adipiscing bibendum est. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Nunc eget lorem dolor sed viverra ipsum. Et malesuada fames ac turpis egestas maecenas pharetra convallis.</p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
