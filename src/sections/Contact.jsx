  import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const text = document.querySelector('#text');
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const ele = document.querySelectorAll('#text span');

    for (let i = 1; i < ele.length; i++) {
      ele[i].style.transform = "rotate(" + i * 16.5 + "deg)";
    }
  }, []);

  const emailAddress = '13viga@gmail.com';

  return (
      <div className="contactContainer">
        <div id="contact" className="contact">
          <div className="contact-content">
            <div className="mail">
              <div className="cercle">
                <h1 id="text">TRAVAILLONS-ENSEMBLE-</h1>
              </div>

              <div className="networks">
                <a href="https://linkedin.com/in/virgil-garcia-b58796222"><img src="/assets/linkedin.png" alt="network"/> Linkedin</a>
                <a href="https://github.com/VirgilGarcia"><img src="/assets/github.png" alt="network"/> GitHub</a>
                <a href={`mailto:${emailAddress}`}><img src="/assets/mail.png" alt="network"/> EMail</a>
                <a href="https://www.malt.fr/profile/virgilgarcia1"><img src="/assets/malt.png" alt="network"/> Malt</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;