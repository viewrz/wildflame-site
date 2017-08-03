import React from 'react';
import './App.css';
import Logo from './components/logo';
import Retype from './components/retype';

// client logos
import betc from './img/betc.png';
import fdj from './img/fdj.png';
import ffa from './img/ffa.png';
import havana from './img/havana.png';
import mufe from './img/mufe.png';
import rimmel from './img/rimmel.png';
import samsung from './img/samsung.png';
import tbwa from './img/tbwa.png';

export default () =>
  <div>
    <section className="hero is-primary is-bold has-pattern">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="title is-1">
            <Logo />
          </div>
          <div className="subtitle is-6">social discovery & activation</div>
        </div>
      </div>
    </section>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Our mission</h1>
          <h2 className="subtitle">
            To save you time & stress in finding and engaging with individuals
            who matter to your business.
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <ul className="step no-links">
          <li className="step-item">
            <a>Choose target & message</a>
          </li>
          <li className="step-item active">
            <a>Get a quote</a>
          </li>
          <li className="step-item">
            <a>Get results</a>
          </li>
        </ul>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="title is-4">
              <span className="has-text-primary">1.</span> Target
            </div>
            <div>
              Enter how much people you need, their profile, and your message
              for them.
            </div>
          </div>
          <div className="column">
            <div className="title is-4">
              <span className="has-text-primary">2.</span> Quote
            </div>
            <div>
              Our algorithms compute the best price per response depending on
              the profile and message you gave.
            </div>
          </div>
          <div className="column">
            <div className="title is-4">
              <span className="has-text-primary">3.</span> Results
            </div>
            <div>
              Our proprietary tech scans social media and contacts people with
              your message and sends you back the list of responses.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-4 has-text-primary">
          Save time on your next<br />
          <Retype words={['influencer campaign', 'customer feedback', '...']} />
        </h1>
      </div>
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-8">
            <hr />
            <form>
              <div className="field">
                <label htmlFor="name" className="label">
                  Brand / Agency / Name
                </label>
                <div className="control">
                  <input
                    id="name"
                    name="name"
                    className="input"
                    type="text"
                    placeholder="Contacted people will see this"
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Your email
                </label>
                <div className="control">
                  <input
                    id="email"
                    name="email"
                    className="input"
                    type="text"
                    placeholder="Only for us - no spam"
                  />
                </div>
              </div>
              <label htmlFor="size-type" className="label">
                Budget / number of responses
              </label>
              <div className="field has-addons">
                <div className="control">
                  <span className="select">
                    <select name="size-type" id="size-type">
                      <option>Budget (€)</option>
                      <option># of responses</option>
                    </select>
                  </span>
                </div>
                <div className="control is-expanded">
                  <input id="size" name="size" className="input" type="text" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="target" className="label">
                  Target
                </label>
                <textarea
                  name="target"
                  id="target"
                  className="textarea"
                  placeholder="Describe the profile of the people you want to target"
                />
              </div>
              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="textarea"
                  placeholder="Contacted people will see this - pitch here what you expect from them"
                />
              </div>
              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button className="button is-primary is-medium">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <div className="has-text-centered">
              <br />or<br />
              <a
                className="button is-link"
                target="_blank"
                href="mailto:hello@wildflame.co"
                rel="noopener noreferrer"
              >
                contact us for managed services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="section">
      <div className="container has-text-centered">
        <div className="title is-5">Already proudly serving :</div>
        <nav className="level">
          <div className="level-item">
            <figure className="image is-64w">
              <img src={mufe} alt="mufe" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={fdj} alt="fdj" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={havana} alt="havana" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={rimmel} alt="rimmel" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={samsung} alt="samsung" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={ffa} alt="ffa" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={betc} alt="betc" />
            </figure>
          </div>
          <div className="level-item">
            <figure className="image is-64w">
              <img src={tbwa} alt="tbwa" />
            </figure>
          </div>
        </nav>
        <div className="subtitle is-5">
          and more{' '}
          <a
            href="https://vimeo.com/186116478"
            target="_blank"
            rel="noopener noreferrer"
          >
            success stories
          </a>...
        </div>
      </div>
    </section>
    <footer className="footer" style={{ paddingTop: 10, paddingBottom: 10 }}>
      <div className="container">
        <div className="level">
          <div className="has-text-grey is-size-7 level-left">
            Made with<span className="icon is-small" style={{ margin: 4 }}>
              <i className="fa fa-heart" />
            </span>in Paris
          </div>
          <div className="has-text-grey is-size-7 level-left">
            © Viewrz SAS 2017
          </div>
        </div>
      </div>
    </footer>
  </div>;
