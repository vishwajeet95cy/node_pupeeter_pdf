const htmlContent = `
<html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
            <style>
            .pdfviewer .date-wrapper {
                margin-top: 20px;
           }
            .pdfviewer .date-wrapper .date-box {
                font-size: 16px;
                margin-bottom: 2px;
           }
            .pdfviewer .pdf-txt {
                margin-top: 30px;
           }
            .pdfviewer .address-box {
                margin-top: 30px;
           }
            .pdfviewer .address-wrapper {
                position: relative;
                width: 30%;
           }
            .pdfviewer .address-wrapper .addrees-line {
                margin-bottom: 2px;
           }
            .pdfviewer .detail-deading {
                margin-top: 30px;
                margin-bottom: 5px;
           }
            .pdfviewer .consignment-aw-details {
                width: 100%;
                min-height: 100px;
                border: 1px solid #1a1a1a;
           }
            .pdfviewer .pdf-aw-image-box {
                width: 30%;
                padding: 20px;
                border-right: 1px solid #1a1a1a;
                border-bottom: 1px solid #1a1a1a;
           }
            .pdfviewer .pdf-aw-image-box img {
                max-width: 100%;
                border-radius: 8px;
           }
            .pdfviewer .pdf-aw-detail-box {
                width: 70%;
                border-bottom: 1px solid #1a1a1a;
                padding: 20px;
           }
            .pdfviewer .pdf-aw-detail-box .aw-detail-text {
                margin-bottom: 5px;
           }
            .pdfviewer .consignment-aw-details .aw-list:nth-last-child(1) .pdf-aw-image-box {
                border-bottom: none;
           }
            .pdfviewer .consignment-aw-details .aw-list:nth-last-child(1) .pdf-aw-detail-box {
                border-bottom: none;
           }
            
            </style>
        </head>
        <body>
        <div class="d-flex flex-column align-items-center pdfviewer">
        <div class="col-12 col-lg-7 addbs pt16 pr64 pb16 pl64" [style.background]="theme.activeTheme.theme === 'dark' ? theme.activeTheme.dark.pureWhite : ''">
          <app-card-title [title]="'Consignment Report'" [class]="'fw500 fs20'"></app-card-title>
          <div class="date-wrapper w100 d-flex flex-column align-items-end">
            <div class="date-box">Date</div>
            <div class="date-box">{{today | date: 'M/d/yyyy'}}</div>
            <div class="date-box">{{user.city}}</div>
          </div>
          <div class="pdf-txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
          <div class="address-box d-flex justify-content-between">
            <div class="address-wrapper d-flex flex-column">
              <div class="addrees-line fw600">To</div>
              <div class="addrees-line fw600">{{selectedContact.full_name}}</div>
              <div class="addrees-line fw600">{{selectedContact.city}}, {{selectedContact.state}}, {{selectedContact.country}}, {{selectedContact.zipcode}}</div>
            </div>
            <div class="address-wrapper d-flex flex-column">
              <div class="addrees-line fw600">From</div>
              <div class="addrees-line fw600">{{user.full_name}}</div>
              <div class="addrees-line fw600">{{user.city}}</div>
            </div>
          </div>
          <div class="detail-deading fs18 fw700">Details</div>
          <div class="consignment-aw-details df">
            <div class="aw-list d-flex" *ngFor="let a of consignmentFormGroup.get('artwork')?.value">
              <div class="pdf-aw-image-box">
                <img [src]="a.artwork_thumbnail" alt="">
              </div>
              <div class="pdf-aw-detail-box">
                <div class="aw-detail-text fw500">{{a.title}}</div> 
                <div class="aw-detail-text fw500">{{a.artist.full_name}}</div>
                <div class="aw-detail-text fw500">{{a.medium.name}}</div>
                <div class="aw-detail-text fw500">{{a.create_date | date : 'y'}}</div>
                <div class="aw-detail-text fw500">{{a.dimension.height}}x{{a.dimension.width}}x{{a.dimension.depth}}</div>
                <div class="aw-detail-text fw500">{{a.price | currency: 'INR'}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </body>
        </html>
`;

const newContent = (image, data) => {
  let test = "";

  const main = data?.artwork?.map((item, i) => {
    test += `
      <tr>
        <td>
          <article class="invoice_fourth_section_table_container_first">
            <aside>
              <img src=${item.image} alt="Hllo" />
            </aside>
            <aside>
              <p>Hello Main Text</p>
              <p>64 x 64 in</p>
            </aside>
          </article>
        </td>
        <td>Francisco Chang</td>
        <td>Germany</td>
        <td>Germany</td>
        <td>Mexico</td>
      </tr>`;
  });
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: column;
          padding-inline: 1rem;
          padding-block: 1rem;
          gap: 1rem;
        }
        .invoice_first_section img {
          width: 100%;
          height: 25vh;
        }
        .invoice_second_section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .invoice_second_section_title {
          margin: 0;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .invoice_second_section_detail span {
          text-transform: uppercase;
        }
        .invoice_third_section {
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
        }
        .invoice_third_section_right {
          justify-self: center;
        }
        .invoice_address {
          font-weight: 500;
          font-size: 1rem;
        }
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
  
        td,
        th {
          border-bottom: 1px solid #dddddd;
          text-align: left;
          padding-block: 8px;
        }
        .invoice_fourth_section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .invoice_fourth_section_table_container_first {
          display: flex;
          gap: 0.8rem;
          align-items: center;
        }
        .invoice_fourth_section_table_container_first img {
          width: 40px;
          height: 40px;
        }
        .invoice_fourth_section_table_container_first p {
          margin: 0;
        }
      </style>
    </head>
    <body>
      <main>
        <section class="invoice_first_section">
          <img src=${image} alt="banner" />
        </section>
        <section class="invoice_second_section">
          <h1 class="invoice_second_section_title">Invoice #15</h1>
          <aside class="invoice_second_section_detail">
            <aside><span>Invoice Date:</span> February 14, 2024</aside>
            <aside><span>Due Date:</span> February 29, 2024</aside>
          </aside>
        </section>
        <section class="invoice_third_section">
          <article class="invoice_third_section_left">
            <aside class="invoice_address">FROM:</aside>
            <aside class="invoice_address">Vishal Kumar</aside>
            <aside class="invoice_address">tetshjl, bbbd</aside>
            <aside class="invoice_address">7894561232</aside>
            <aside class="invoice_address">main@gmail.com</aside>
          </article>
          <article class="invoice_third_section_right">
            <aside class="invoice_address">TO:</aside>
            <aside class="invoice_address">Vishwa</aside>
            <aside class="invoice_address">test@gmail.com</aside>
          </article>
        </section>
        <section class="invoice_fourth_section">
          <h1 class="invoice_fourth_section_title">Invoice Items:</h1>
          <article class="invoice_fourth_section_table_container">
            <table>
              <tr>
                <th>Artwork</th>
                <th>Original Price</th>
                <th>Discount</th>
                <th>Sale Price</th>
                <th>Tax</th>
              </tr>
            </table>
          </article>
        </section>
        <section class="invoice_fifth_section"></section>
      </main>
    </body>
  </html>
  `;
};

const textContext = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Artwork Label</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: row;
          padding-inline: 1rem;
          padding-block: 1rem;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
  
        .main_chip {
          flex: 0 0 350px;
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          justify-content: space-between;
        }
        .main_chip_left {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .main_chip_left :first-child {
          font-weight: 600;
        }
        .main_chip_right img {
          width: 100px;
          height: 100px;
        }
      </style>
    </head>
    <body>
      <main class="main">
        <section class="main_chip">
          <article class="main_chip_left">
            <aside class="main_chip_left_item">ArtworkName, Year</aside>
            <aside class="main_chip_left_item">Artist Name</aside>
            <aside class="main_chip_left_item">Medium</aside>
            <aside class="main_chip_left_item">Size</aside>
          </article>
          <article class="main_chip_right">
            <img src="http://localhost:5200/banner.jpg" alt="Qrcode" />
          </article>
        </section>
        <section class="main_chip">
          <article class="main_chip_left">
            <aside class="main_chip_left_item">ArtworkName, Year</aside>
            <aside class="main_chip_left_item">Artist Name</aside>
            <aside class="main_chip_left_item">Medium</aside>
            <aside class="main_chip_left_item">Size</aside>
          </article>
          <article class="main_chip_right">
            <img src="http://localhost:5200/banner.jpg" alt="Qrcode" />
          </article>
        </section>
        <section class="main_chip">
          <article class="main_chip_left">
            <aside class="main_chip_left_item">ArtworkName, Year</aside>
            <aside class="main_chip_left_item">Artist Name</aside>
            <aside class="main_chip_left_item">Medium</aside>
            <aside class="main_chip_left_item">Size</aside>
          </article>
          <article class="main_chip_right">
            <img src="http://localhost:5200/banner.jpg" alt="Qrcode" />
          </article>
        </section>
      </main>
    </body>
  </html>
  `;
};

const authenticityContect = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Authenticity Certificate</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: column;
          padding-inline: 1rem;
          padding-block: 1rem;
          gap: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }
        .section_first {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          gap: 0.2rem;
        }
        .section_first h2,
        .section_first p {
          margin: 0;
        }
        .section_first h2 {
          font-weight: 600;
          font-size: 1.8rem;
        }
        .section_second {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section_second img {
          width: 400px;
          height: 400px;
          object-fit: unset;
        }
        .section_third {
          display: flex;
          gap: 0.2rem;
          flex-direction: column;
        }
        .section_fourth {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .section_fourth h3 {
          text-align: center;
          margin: 0;
          text-transform: uppercase;
          font-weight: 500;
        }
        .section_fourth_item {
          display: flex;
          justify-content: space-between;
        }
        .section_fourth_item_qrcode img {
          width: 100px;
          height: 100px;
        }
      </style>
    </head>
    <body>
      <main class="main">
        <section class="section_first">
          <h2>Certificate of Authencity</h2>
          <p>This artwork is one-of-a-kind authentic, original artwork.</p>
          <p>All copyright and reproduction rights are reserved by the artist.</p>
        </section>
        <section class="section_second">
          <img src="http://localhost:5200/test.jpg" alt="Artwork" />
        </section>
        <section class="section_third">
          <aside class="section_third_item">Title</aside>
          <aside class="section_third_item">Artist Name</aside>
          <aside class="section_third_item">Medium</aside>
          <aside class="section_third_item">Year</aside>
          <aside class="section_third_item">Dimension</aside>
          <aside class="section_third_item">Edition</aside>
          <aside class="section_third_item">Signature Position</aside>
          <aside class="section_third_item">Certificate No.</aside>
        </section>
        <section class="section_fourth">
          <h3>Special Instructions</h3>
          <aside class="section_fourth_item">
            <p>
              If you special hanging or display instructions, you can include
              this.
            </p>
            <aside class="section_fourth_item_qrcode">
              <img src="http://localhost:5200/banner.jpg" alt="QrCode" />
            </aside>
          </aside>
        </section>
      </main>
    </body>
  </html>
  `;
};

const priceList = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>PriceList</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: row;
          padding-inline: 1rem;
          padding-block: 1rem;
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }
  
        .main_card {
          flex: 0 0 175px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .main_card_image img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <main class="main">
        <section class="main_card">
          <article class="main_card_image">
            <img src="http://localhost:5200/test.jpg" alt="Main" />
          </article>
          <article class="main_card_detail">
            <aside class="main_card_detail_item">Artist Name / Title hello Workld With Value</aside>
            <aside class="main_card_detail_item">Medium</aside>
            <aside class="main_card_detail_item">Size</aside>
            <aside class="main_card_detail_item">Price</aside>
          </article>
        </section>
        <section class="main_card">
          <article class="main_card_image">
            <img src="http://localhost:5200/test.jpg" alt="Main" />
          </article>
          <article class="main_card_detail">
            <aside class="main_card_detail_item">Artist Name / Title hello Workld With Value</aside>
            <aside class="main_card_detail_item">Medium</aside>
            <aside class="main_card_detail_item">Size</aside>
            <aside class="main_card_detail_item">Price</aside>
          </article>
        </section>
        <section class="main_card">
          <article class="main_card_image">
            <img src="http://localhost:5200/test.jpg" alt="Main" />
          </article>
          <article class="main_card_detail">
            <aside class="main_card_detail_item">Artist Name / Title hello Workld With Value</aside>
            <aside class="main_card_detail_item">Medium</aside>
            <aside class="main_card_detail_item">Size</aside>
            <aside class="main_card_detail_item">Price</aside>
          </article>
        </section>
        <section class="main_card">
          <article class="main_card_image">
            <img src="http://localhost:5200/test.jpg" alt="Main" />
          </article>
          <article class="main_card_detail">
            <aside class="main_card_detail_item">Artist Name / Title hello Workld With Value</aside>
            <aside class="main_card_detail_item">Medium</aside>
            <aside class="main_card_detail_item">Size</aside>
            <aside class="main_card_detail_item">Price</aside>
          </article>
        </section>
      </main>
    </body>
  </html>
  `;
};

const reportArtwork = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Report Catalog</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: column;
          padding-inline: 2.5rem;
          padding-block: 2.5rem;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }
  
        .image_section img {
          width: 100%;
          height: 500px;
          object-fit: unset;
        }
        .description_section {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .description_section p {
          margin: 0;
          font-size: 1rem;
          text-align: center;
        }
        .detail_section {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          flex-direction: column;
        }
      </style>
    </head>
    <body>
      <main class="main">
        <section class="image_section">
          <img src="http://localhost:5200/test.jpg" alt="Big" />
        </section>
        <section class="detail_section">
          <aside class="detail_section_item">Artwork, year</aside>
          <aside class="detail_section_item">Artist</aside>
          <aside class="detail_section_item">Medium</aside>
          <aside class="detail_section_item">Dimension</aside>
          <aside class="detail_section_item">Price</aside>
        </section>
        <section class="description_section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eum
            accusamus animi praesentium error. Ad quam fugiat fugit odit earum
            quibusdam ex delectus rem aliquam facilis, eum temporibus et ea nihil
            aspernatur! Asperiores, nisi temporibus pariatur saepe ducimus
            recusandae. Quod possimus veniam odit saepe veritatis ad! Laborum
            vitae sed ex?
          </p>
        </section>
      </main>
    </body>
  </html>
  `;
};

const tearSheet = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Tear Sheet</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        main {
          display: flex;
          flex-direction: column;
          padding-inline: 1rem;
          padding-block: 1rem;
          gap: 1rem;
        }
        .section_first {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .section_first h2,
        .section_first p {
          margin: 0;
          line-height: 1;
        }
        .section_first h2 {
          font-size: 3rem;
          font-weight: 500;
        }
        .section_first p {
          font-size: 1.5rem;
        }
        .section_second {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .section_second_item {
          display: flex;
          gap: 1rem;
        }
        .section_second_item_image img {
          width: 100%;
          height: 100%;
          object-fit: inherit;
        }
      </style>
    </head>
    <body>
      <main class="main">
        <section class="section_first">
          <h2>Inventory Sheet Name</h2>
          <p>1 Artworks</p>
        </section>
        <section class="section_second">
          <article class="section_second_item">
            <aside class="section_second_item_image">
              <img src="http://localhost:5200/test.jpg" alt="Test" />
            </aside>
            <aside class="section_second_item_detail">
              <div class="section_second_item_detail_item">Title of Artwork</div>
              <div class="section_second_item_detail_item">Artist Name, Year</div>
              <div class="section_second_item_detail_item">Dimension</div>
              <div class="section_second_item_detail_item">Medium</div>
              <div class="section_second_item_detail_item">Price</div>
              <div class="section_second_item_detail_item">Inventory No</div>
            </aside>
          </article>
          <article class="section_second_item">
            <aside class="section_second_item_image">
              <img src="http://localhost:5200/test.jpg" alt="Test" />
            </aside>
            <aside class="section_second_item_detail">
              <div class="section_second_item_detail_item">Title of Artwork</div>
              <div class="section_second_item_detail_item">Artist Name, Year</div>
              <div class="section_second_item_detail_item">Dimension</div>
              <div class="section_second_item_detail_item">Medium</div>
              <div class="section_second_item_detail_item">Price</div>
              <div class="section_second_item_detail_item">Inventory No</div>
            </aside>
          </article>
          <article class="section_second_item">
            <aside class="section_second_item_image">
              <img src="http://localhost:5200/banner.jpg" alt="Test" />
            </aside>
            <aside class="section_second_item_detail">
              <div class="section_second_item_detail_item">Title of Artwork</div>
              <div class="section_second_item_detail_item">Artist Name, Year</div>
              <div class="section_second_item_detail_item">Dimension</div>
              <div class="section_second_item_detail_item">Medium</div>
              <div class="section_second_item_detail_item">Price</div>
              <div class="section_second_item_detail_item">Inventory No</div>
            </aside>
          </article>
          <article class="section_second_item">
            <aside class="section_second_item_image">
              <img src="http://localhost:5200/test.jpg" alt="Test" />
            </aside>
            <aside class="section_second_item_detail">
              <div class="section_second_item_detail_item">Title of Artwork</div>
              <div class="section_second_item_detail_item">Artist Name, Year</div>
              <div class="section_second_item_detail_item">Dimension</div>
              <div class="section_second_item_detail_item">Medium</div>
              <div class="section_second_item_detail_item">Price</div>
              <div class="section_second_item_detail_item">Inventory No</div>
            </aside>
          </article>
        </section>
      </main>
    </body>
  </html>
  `;
};

const contactLabelSheet = (size) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact Label</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      main {
        display: flex;
        flex-direction: row;
        padding-inline: 1rem;
        padding-block: 1rem;
        gap: 1rem;
        max-width: 1200px;
        margin: 0 auto;
        flex-wrap: wrap;
      }

      .main_card {
        flex: 0 0 ${size}0px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border: 1px dotted #000;
        padding: 1rem;
      }
      .main_card_detail_item {
        font-size: ${size}px;
      }
    </style>
  </head>
  <body>
    <main class="main">
      <section class="main_card">
        <article class="main_card_detail">
          <aside class="main_card_detail_item">To</aside>
          <aside class="main_card_detail_item">Contact Name</aside>
          <aside class="main_card_detail_item">Address Line One</aside>
          <aside class="main_card_detail_item">Street Name</aside>
          <aside class="main_card_detail_item">City, State</aside>
          <aside class="main_card_detail_item">Country- code</aside>
          <aside class="main_card_detail_item">Ph: 7894561239</aside>
          <aside class="main_card_detail_item">7485963214</aside>
        </article>
      </section>
      <section class="main_card">
        <article class="main_card_detail">
          <aside class="main_card_detail_item">To</aside>
          <aside class="main_card_detail_item">Contact Name</aside>
          <aside class="main_card_detail_item">Address Line One</aside>
          <aside class="main_card_detail_item">Street Name</aside>
          <aside class="main_card_detail_item">City, State</aside>
          <aside class="main_card_detail_item">Country- code</aside>
          <aside class="main_card_detail_item">Ph: 7894561239,</aside>
          <aside class="main_card_detail_item">7485963214</aside>
        </article>
      </section>
      <section class="main_card">
        <article class="main_card_detail">
          <aside class="main_card_detail_item">To</aside>
          <aside class="main_card_detail_item">Contact Name</aside>
          <aside class="main_card_detail_item">Address Line One</aside>
          <aside class="main_card_detail_item">Street Name</aside>
          <aside class="main_card_detail_item">City, State</aside>
          <aside class="main_card_detail_item">Country- code</aside>
          <aside class="main_card_detail_item">Ph: 7894561239,</aside>
          <aside class="main_card_detail_item">7485963214</aside>
        </article>
      </section>
      <section class="main_card">
        <article class="main_card_detail">
          <aside class="main_card_detail_item">To</aside>
          <aside class="main_card_detail_item">Contact Name</aside>
          <aside class="main_card_detail_item">Address Line One</aside>
          <aside class="main_card_detail_item">Street Name</aside>
          <aside class="main_card_detail_item">City, State</aside>
          <aside class="main_card_detail_item">Country- code</aside>
          <aside class="main_card_detail_item">Ph: 7894561239,</aside>
          <aside class="main_card_detail_item">7485963214</aside>
        </article>
      </section>
    </main>
  </body>
</html>
`;
};

export {
  htmlContent,
  newContent,
  textContext,
  authenticityContect,
  priceList,
  reportArtwork,
  tearSheet,
  contactLabelSheet,
};
