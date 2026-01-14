import formbackground from "../Assets/formbackground.jpg";

export default function WorkOrderForm() {
  return (
    <div className="form-page-contain">
      <form className="form-contain">
        <div className="form-top">
          <span>Submit a Work Order </span>
          <p>Have an issue? Fill out the form and i can help!</p>
        </div>

        <div className="form-info-container">
          <div className="form-info-left">
            <div className="form-info-type">
              <span>Select Issue Type</span>
              <select className="issue-type-dropdown">
                <optgroup label="Network & Internet">
                  <option value="wifi">Wi-Fi Connectivity</option>
                  <option value="ethernet">Ethernet/LAN</option>
                  <option value="modem">Modem/ISP Issues</option>
                  <option value="network-setup">Network Setup</option>
                </optgroup>

                <optgroup label="Hardware">
                  <option value="printer">Printer Issues</option>
                  <option value="computer">Computer/Laptop</option>
                </optgroup>

                <optgroup label="Software">
                  <option value="os">OS Issues</option>
                  <option value="virus">Virus/Malware</option>
                  <option value="application">System/Application Errors</option>
                  <option value="performance">Performance Issues</option>
                </optgroup>

                <optgroup label="Other">
                  <option value="other">Other (Specify Below)</option>
                </optgroup>
              </select>
            </div>

            <div className="form-info-description">
              <span>Describe your issue</span>
              <textarea
                className="issue-description"
                placeholder="Please provide a detailed description of the issue you are facing..."
              ></textarea>
            </div>
          </div>
          <div className="form-info-right">
            <span>Upload any images</span>
            <input type="file" className="image-upload" multiple />
          </div>
        </div>

        <div className="form-contact">
          <div className="form-contact-top">
            <span>Contact Info</span>
          </div>
          <div className="form-contact-bottom">

            <div className="form-name"> 
              <p>First Name</p>
            <input
              type="text"
              className="contact-info"
              placeholder="First Name"
            />
            </div>
            <div className="form-name"> 
              <p>Last Name</p>
            <input
              type="text"
              className="contact-info"
              placeholder="Last Name"
            />
            </div>
          
           <div className="form-name"> 
            <p>Email Address</p>
            <input
              type="email"
              className="contact-info"
              placeholder="Email Address"
            />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
