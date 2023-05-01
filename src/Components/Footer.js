import React from 'react'

export default function Footer() {
  return (
    <div>



        {/* ======= Footer ======= */}
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Pexty_Design</h3>
                <p>
                  20/15 <br />
                  Gagabada Road<br />
                  Badulla, Sri Lanka <br /><br />
                  <strong>Phone:</strong> +94 714557096<br />
                  <strong>Email:</strong> wimalarathna96gmail.com<br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p style={{color: 'white'}}>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-4">
          <div className="copyright">
            © Copyright <strong><span>Pexty_Design</span></strong>. All Rights Reserved
          </div>
          <div className="credits">Designed by <a href="https://Nipun_Wimalarathna.com/">Nipun_Wimalarathna</a>
          </div>
        </div>
      </footer>


      
    </div>
  )
}
