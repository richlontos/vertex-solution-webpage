const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const juice = require('juice');


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
// Use the PORT from the environment variables if it's available
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port ${port}`));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "Cesarsaldivar88@gmail.com",
    pass: "tfygfhggehiejobi"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const generateEmailTemplate = (formData) => {
  const { firstName, lastName, email, message, phone, companyName, interestedIn } = formData;

  const template = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="email-style.css">
      <style>
      body {
        font-family: 'lato', sans-serif;
      }
      .container {
        max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 10px;
        padding-right: 10px;
      }
      
      h2 {
        font-size: 26px;
        margin: 20px 0;
        text-align: center;
        small {
          font-size: 0.5em;
        }
      }
      
      .responsive-table {
        li {
          border-radius: 3px;
          padding: 25px 30px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;
        }
        .table-header {
          background-color: #95A5A6;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .table-row {
          background-color: #ffffff;
          box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        }
        .col-1 {
          flex-basis: 10%;
        }
        .col-2 {
          flex-basis: 40%;
        }
        .col-3 {
          flex-basis: 25%;
        }
        .col-4 {
          flex-basis: 25%;
        }
        
        @media all and (max-width: 767px) {
          .table-header {
            display: none;
          }
          .table-row{
            
          }
          li {
            display: block;
          }
          .col {
            
            flex-basis: 100%;
            
          }
          .col {
            display: flex;
            padding: 10px 0;
            &:before {
              color: #6C7A89;
              padding-right: 10px;
              content: attr(data-label);
              flex-basis: 50%;
              text-align: right;
            }
          }
        }
      }
      </style>
    </head>
    <body>
    
      <div class="form-container">
        <h2>Contact Form</h2>
        <div class="form-content">
    
          <p>
            <strong>Name:</strong> ${firstName} ${lastName}
          </p>
    
          <p>
            <strong>Email:</strong> ${email}
          </p>
    
          <p>
            <strong>Phone:</strong> ${phone}
          </p>
    
          <p>
            <strong>Company Name:</strong> ${companyName}
          </p>
    
          <p>
            <strong>Interested In:</strong> ${interestedIn}
          </p>
    
          <p>
            <strong>Message:</strong> ${message}
          </p>
    
        </div>
      </div>
    
    </body>
    </html>
    
    `;

  return template;
};

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const companyName = req.body.companyName;
  const interestedIn = req.body.interestedIn;

  const mail = {
    from: name,
    to: "Cesarsaldivar88@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: generateEmailTemplate(req.body),
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});




const generateTable = (title, headerData, bodyData) => `
    <table style="width: 100%; border: 1px solid #000; border-radius: 15px; margin-bottom: 20px;">
        <thead>
            <tr>
                <th colspan="${headerData.length}" style="text-align: center; background-color: #E8E8E8; padding: 10px;">${title}</th>
            </tr>
            <tr style="border-bottom: 1px solid #000;">
                ${headerData.map(header => `<th style="border-bottom: 1px solid #000; text-align: left;">${header}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${bodyData.map(row => `<tr>${row.map(data => `<td style="border-bottom: 1px solid #000; text-align: left;">${data}</td>`).join('')}</tr>`).join('')}
        </tbody>
    </table>
`;

const generateQuoteTemplate = (formData) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    companyEmail,
    subject,
    message,
    pickCity,
    pickState,
    pickZipCode,
    dropCity,
    dropState,
    dropZipCode,
    originType,
    destinationType,
    totalPallets,
    classType,
    dimensions,
    commodity,
    targetRate,
    totalWeight,
    pickupAccesorials,
    pickAdditionalNotes,
    deliveryAccesorials,
    dropAdditionalNotes,
    additionalNotes,
    quoteType
  } = formData;



  const headerData1 = ['First Name', 'Last Name', 'Email', 'Phone No.'];
  const bodyData1 = [[firstName, lastName, email, phone]];
  const table1 = generateTable('Contact Information', headerData1, bodyData1);

  const headerData2 = ['Company Name', 'Company Email', 'Subject', 'Message'];
  const bodyData2 = [[companyName, companyEmail, subject, message]];
  const table2 = generateTable('Company Information', headerData2, bodyData2);

  const headerData3 = ['City', 'State', 'Zip Code', 'Origin type'];
  const bodyData3 = [[pickCity, pickState, pickZipCode, originType]];
  const table3 = generateTable('Pickup Information', headerData3, bodyData3);

  const headerData4 = ['City', 'State', 'Zip Code', 'Destination Type'];
  const bodyData4 = [[dropCity, dropState, dropZipCode, destinationType]];
  const table4 = generateTable('Delivery Information', headerData4, bodyData4);
  

  const headerData5 = ['Accesorials', 'Notes'];
  const bodyData5 = [[pickupAccesorials, pickAdditionalNotes]];
  const table5 = generateTable('Pickup Accesorials', headerData5, bodyData5);

  const headerData6 = ['Accesorials', 'Notes'];
  const bodyData6 = [[deliveryAccesorials, dropAdditionalNotes]];
  const table6 = generateTable('Delivery Accesorials', headerData6, bodyData6);

  const headerData7 = [
    '#',
    'Pieces',
    'Total Weight',
    'Description',
    'Class',
    'Width',
    'Height',
    'Length'
  ];

  const bodyData7 = dimensions.map((dim, index) => [
    index + 1,
    dim.pallets,
    dim.weight,
    dim.commodity,
    dim.class,
    dim.width,
    dim.height,
    dim.length
  ]);

  const table7 = generateTable('Items to Ship', headerData7, bodyData7);


  const headerData8 = ['Notes'];
  const bodyData8 = [[additionalNotes]];
  const table8 = generateTable('Additional Notes', headerData8, bodyData8);

  const headerData9 = ['Target Rate', 'Total Weight', 'Quote Type'];
  const bodyData9 = [[targetRate, totalWeight, quoteType]]
  const table9 = generateTable('Summary', headerData9, bodyData9);

  let dimensionsString = '';
  formData.dimensions.forEach((dim, index) => {
    dimensionsString += `Line ${index + 1}:\n`;
    dimensionsString += `Number of Pallets: ${dim.pallets}\n`;
    dimensionsString += `Weight: ${dim.weight}\n`;
    dimensionsString += `Class: ${dim.class}\n`;
    dimensionsString += `Width: ${dim.width}\n`;
    dimensionsString += `Height: ${dim.height}\n`;
    dimensionsString += `Length: ${dim.length}\n\n`;
    dimensionsString += `commodity${dim.commodity}\n\n`;
  });



  const template = `
  <html>
      <head>
          <!-- Other head elements -->
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      </head>
      <body>
          <h2 style="text-align: center; padding: 20px 0; background-color: #D3D3FA;">Quote Request</h2>
          <table style="width: 100%;">
              <tr>
                  <td style="width: 50%; vertical-align: top; padding: 10px;">
                      ${table1}
                      ${table3}
                      ${table5}
                  </td>
                  <td style="width: 50%; vertical-align: top; padding: 10px;">
                      ${table2}
                      ${table4}
                      ${table6}
                  </td>
              </tr>
              <tr>
                  <td colspan="2" style="padding: 10px;">
                      ${table7}
                  </td>
              </tr>
              <tr>
                   <td style="width: 50%; vertical-align: top; padding: 10px;">
                      ${table8}
                  </td>
                  <td style="width: 50%; vertical-align: top; padding: 10px;">
                      ${table9}
                  </td>
              </tr>
          </table>          
      </body>
  </html>
`;

  const inlined = juice(template); // Here we are using juice to inline the CSS.
  return inlined;
};


// Rest of your code as it is






router.post("/quote", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    companyEmail,
    subject,
    message,
    pickCity,
    pickState,
    pickZipCode,
    dropCity,
    dropState,
    dropZipCode,
    originType,
    destinationType,
    totalPallets,
    classType,
    commodity,
    targetRate,
    totalWeight,
    weight,
    pickupAccesorials,
    pickAdditionalNotes,
    deliveryAccesorials,
    dropAdditionalNotes,
    additionalNotes,
    quoteType
  } = req.body;


  const dimensions = req.body.dimensions.map(dim => {
    const { width, height, length, pallets, weight, class: classType, commodity } = dim;
    return { width, height, length, pallets, weight, class: classType, commodity };
  });


  const mail = {
    from: `${firstName} ${lastName}`,
    to: "Cesarsaldivar88@gmail.com",
    subject: "Quote Form Submission - Portfolio",
    html: generateQuoteTemplate({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      companyEmail,
      subject,
      message,
      pickCity,
      pickState,
      pickZipCode,
      dropCity,
      dropState,
      dropZipCode,
      originType,
      destinationType,
      totalPallets,
      classType,
      dimensions,
      commodity,
      targetRate,
      totalWeight,
      weight,
      pickupAccesorials,
      pickAdditionalNotes,
      deliveryAccesorials,
      dropAdditionalNotes,
      additionalNotes,
      quoteType
    }),
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Quote Sent" });
    }
  });
});
