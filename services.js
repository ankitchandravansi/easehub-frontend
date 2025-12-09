// services.js
// Exposes Services namespace with helpers for stay/meals/laundry pages.
// Logic: Static data (30 PGs, 25 Flats), with Section Headers.

const Services = (function(){
  
  // --- 1. DATASETS (Static Data) ---
  
  const STAY_DATA = [
    // --- 30 PGs ---
    { type: 'pg', title: 'PG 1 • Student Home', price: 5500, location: 'North Gate', dist: '1.2', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jan/20/Photo_h400_w540/GR2-267087-2370725_400_540.jpeg', desc: 'Shared rooms, mess available, WiFi included.' },
    { type: 'pg', title: 'PG 2 • Scholastic Stay', price: 6200, location: 'East Colony', dist: '2.5', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Oct/07/Photo_h400_w540/GR2-400161-1908473_400_540.jpeg', desc: 'Single rooms with AC options available.' },
    { type: 'pg', title: 'PG 3 • Campus View', price: 4800, location: 'Demo Campus', dist: '0.8', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Apr/30/Photo_h400_w540/GR2-400575-2119179_400_540.jpeg', desc: 'Budget friendly, walking distance to college.' },
    { type: 'pg', title: 'PG 4 • Elite Living', price: 7500, location: 'City Center', dist: '3.0', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Apr/20/Photo_h400_w540/GR2-365301-1725253_400_540.jpeg', desc: 'Premium amenities, gym access, laundry service.' },
    { type: 'pg', title: 'PG 5 • Study Haven', price: 5100, location: 'North Gate', dist: '1.5', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2025/Jul/28/Photo_h400_w540/GR2-502507-2540943_400_540.jpeg', desc: 'Quiet environment, 24/7 power backup.' },
    { type: 'pg', title: 'PG 6 • Blue Sky Hostel', price: 4500, location: 'South Gate', dist: '1.8', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/Jun/11/Photo_h400_w540/GR2-45917-1777387_400_540.jpg', desc: 'Affordable shared living with common room.' },
    { type: 'pg', title: 'PG 7 • The Scholar', price: 6800, location: 'East Colony', dist: '2.2', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2024/Nov/13/Photo_h400_w540/GR2-471613-2308051_400_540.jpeg', desc: 'Modern rooms, high-speed internet included.' },
    { type: 'pg', title: 'PG 8 • Green Leaf PG', price: 5300, location: 'Green Park', dist: '2.0', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2020/Jul/31/Photo_h400_w540/GR2-97350-436312_400_540.jpeg', desc: 'Garden area, homemade meals provided.' },
    { type: 'pg', title: 'PG 9 • Sunrise Stay', price: 4900, location: 'North Gate', dist: '1.3', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2020/Nov/10/Photo_h400_w540/GR2-122661-577297_400_540.jpg', desc: 'Morning breakfast included, close to library.' },
    { type: 'pg', title: 'PG 10 • Urban Nest', price: 7200, location: 'City Center', dist: '3.5', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2021/Apr/20/Photo_h400_w540/GR2-174047-856973_400_540.jpg', desc: 'Luxury PG with single occupancy options.' },
    { type: 'pg', title: 'PG 11 • Happy Home', price: 5000, location: 'West End', dist: '2.8', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2021/Sep/24/Photo_h400_w540/GR2-237225-1118207_400_540.jpeg', desc: 'Friendly atmosphere, weekly cleaning.' },
    { type: 'pg', title: 'PG 12 • Focus Point', price: 5600, location: 'Campus Edge', dist: '0.5', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2021/Oct/09/Photo_h400_w540/GR2-241519-1137721_400_540.jpeg', desc: 'Nearest to campus, strictly for students.' },
    { type: 'pg', title: 'PG 13 • Comfort Zone', price: 6000, location: 'East Colony', dist: '2.4', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2021/Nov/24/Photo_h400_w540/GR2-252943-1186495_400_540.jpeg', desc: 'Spacious rooms with attached balconies.' },
    { type: 'pg', title: 'PG 14 • The Backpackers', price: 4200, location: 'Old Market', dist: '4.0', img: 'https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2021/Dec/02/Photo_h400_w540/GR2-255133-1195767_400_540.jpg', desc: 'Budget bunk beds, vibrant community.' },
    { type: 'pg', title: 'PG 15 • Safe Haven', price: 6500, location: 'Green Park', dist: '2.1', img: 'https://gsh-cdn.sgp1.cdn.digitaloceanspaces.com/assets/img/no-broker-indore/PRT840/room-on-rent-in-indore/pg-in-new-gayatri-nagar_1713338948.jpg', desc: 'CCTV security, biometric entry.' },
    { type: 'pg', title: 'PG 16 • Bright Future', price: 5200, location: 'North Gate', dist: '1.4', img: 'https://housing-images.n7net.in/01c16c28/33b9ba3f32985da6090561a86868faa0/v0/medium/3_rk_-for-rent-vijay_nagar_4-Indore-bedroom.jpg', desc: 'Study tables in every room, quiet zone.' },
    { type: 'pg', title: 'PG 17 • Metro View', price: 7000, location: 'Station Road', dist: '5.0', img: 'https://housing-images.n7net.in/01c16c28/1788380dc7e1fed72c097cb893ae418b/v0/medium/3_rk_-for-rent-vijay_nagar_4-Indore-bedroom.jpg', desc: 'Close to metro, AC rooms available.' },
    { type: 'pg', title: 'PG 18 • Olive Tree', price: 5800, location: 'Garden Lane', dist: '1.9', img: 'https://housing-images.n7net.in/01c16c28/6ec8cf29b452e2aecc3253e522802b42/v0/medium/3_rk_-for-rent-vijay_nagar_4-Indore-bedroom.jpg', desc: 'Healthy meals, rooftop dining area.' },
    { type: 'pg', title: 'PG 19 • Pioneer PG', price: 4700, location: 'Demo Campus', dist: '0.9', img: 'https://housing-images.n7net.in/01c16c28/9dd496afbcd8b62660c78c4b15baa38c/v0/medium/3_rk_-for-rent-vijay_nagar_4-Indore-bedroom.jpg', desc: 'Basic amenities, very close to labs.' },
    { type: 'pg', title: 'PG 20 • Galaxy Stay', price: 6300, location: 'City Center', dist: '3.2', img: 'https://housing-images.n7net.in/01c16c28/d1758869889ef09f81f35c0db0e43f33/v0/medium/3_rk_-for-rent-vijay_nagar_4-Indore-bedroom.jpg', desc: 'Modern fittings, recreational area.' },
    { type: 'pg', title: 'PG 21 • Serenity House', price: 5400, location: 'Quiet Lane', dist: '2.6', img: 'https://housing-images.n7net.in/01c16c28/19c7b08d0551b45d1f252e89b25be356/v0/medium/3_rk_-for-rent-scheme_no_54_1-Indore-bedroom.jpg', desc: 'Peaceful location ideal for exam prep.' },
    { type: 'pg', title: 'PG 22 • Friends Corner', price: 4600, location: 'South Gate', dist: '1.7', img: 'https://housing-images.n7net.in/01c16c28/1ebe05054fd7532c31ee0116ee480ba4/v0/medium/3_rk_-for-rent-scheme_no_54_1-Indore-bedroom.jpg', desc: 'Double sharing, friendly owner.' },
    { type: 'pg', title: 'PG 23 • Ivy League', price: 7800, location: 'Elite Block', dist: '2.3', img: 'https://housing-images.n7net.in/01c16c28/8f931b2f87c21f53105b2a3a795f1495/v0/medium/3_rk_-for-rent-barfani-Indore-bedroom.jpg', desc: 'Premium furniture, attached washrooms.' },
    { type: 'pg', title: 'PG 24 • Cornerstone', price: 5100, location: 'North Gate', dist: '1.6', img: 'https://housing-images.n7net.in/01c16c28/ec63f5e590795b22b03edffbcfc8d7a1/v0/medium/3_rk_-for-rent-barfani-Indore-bedroom.jpg', desc: 'Reliable water and electricity.' },
    { type: 'pg', title: 'PG 25 • The Hub', price: 5900, location: 'Market St', dist: '1.0', img: 'https://housing-images.n7net.in/01c16c28/2e54dd1f25ca03d638f5da77ea4c1f1d/v0/medium/3_rk_-for-rent-scheme_no_114-Indore-others.jpg', desc: 'Located in the heart of the student market.' },
    { type: 'pg', title: 'PG 26 • Alpha House', price: 6100, location: 'East Colony', dist: '2.5', img: 'https://housing-images.n7net.in/01c16c28/41cd2f2f85d8db47b73967642925566f/v0/medium/3_rk_-for-rent-sukhliya-Indore-triple_sharing_room.jpg', desc: 'Newly painted, clean surroundings.' },
    { type: 'pg', title: 'PG 27 • Beta Residency', price: 4850, location: 'West End', dist: '3.0', img: 'https://housing-images.n7net.in/01c16c28/32e164cbd52187a3e1da37bad953c46d/v0/medium/3_rk_-for-rent-tilak_nagar_1-Indore-bedroom.jpg', desc: 'Reasonable rates for long term stay.' },
    { type: 'pg', title: 'PG 28 • Gamma Stay', price: 5550, location: 'North Gate', dist: '1.2', img: 'https://www.flatmate.in/_next/image?url=https%3A%2F%2Fwww.flatmate.in%2Fapi%2Franbasera%2Fapp%2Fimages%2Fpg%2F3478%2F3478.jpg&w=1920&q=60', desc: 'RO water, fridge in common area.' },
    { type: 'pg', title: 'PG 29 • Delta Dorms', price: 4400, location: 'Old Town', dist: '4.5', img: 'https://www.flatmate.in/_next/image?url=https%3A%2F%2Fwww.flatmate.in%2Fapi%2Franbasera%2Fapp%2Fimages%2Fpg%2F1619%2F9826081517.jpg&w=1920&q=60', desc: 'Dormitory style, very economical.' },
    { type: 'pg', title: 'PG 30 • Omega Living', price: 7400, location: 'Green Park', dist: '2.2', img: 'https://www.flatmate.in/_next/image?url=https%3A%2F%2Fwww.flatmate.in%2Fapi%2Franbasera%2Fapp%2Fimages%2Fpg%2F2870%2F8109628642.jpg&w=1920&q=60', desc: 'High-end facilities with meal subscription.' },

    // --- 25 Flats ---
    { type: 'flat', title: 'Flat 1 • Cozy Apartment', price: 12000, location: 'Lake View', dist: '4.2', img: 'https://imagecdn.99acres.com/media1/33541/16/670836775O-1762768811106.jpg', desc: '1 BHK, semi-furnished, lake facing balcony.' },
    { type: 'flat', title: 'Flat 2 • Green Heights', price: 15500, location: 'Green Park', dist: '2.0', img: 'https://imagecdn.99acres.com/media1/33875/19/677519269O-1764057528025.jpg', desc: '2 BHK, fully furnished, gated society.' },
    { type: 'flat', title: 'Flat 3 • Urban Flat', price: 9500, location: 'Old Town', dist: '5.5', img: 'https://imagecdn.99acres.com/media1/33875/19/677519553O-1764057560799.jpg', desc: '1 RK studio, modern interiors, newly built.' },
    { type: 'flat', title: 'Flat 4 • University Square', price: 11000, location: 'Near University', dist: '1.0', img: 'https://imagecdn.99acres.com/media1/33876/0/677520919O-1764057664720.jpg', desc: '2 BHK shared flat, strictly for students.' },
    { type: 'flat', title: 'Flat 5 • Lakeside View', price: 12500, location: 'Lake View', dist: '4.3', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Nov/28/Photo_h300_w450/82338795_3_1764273618925-832_300_450.jpg', desc: 'Spacious 1 BHK with modular kitchen.' },
    { type: 'flat', title: 'Flat 6 • The Towers', price: 18000, location: 'City Center', dist: '3.0', img: 'https://imagecdn.99acres.com/media1/33492/16/669856607O-1762546242407.jpg', desc: '3 BHK for groups, swimming pool access.' },
    { type: 'flat', title: 'Flat 7 • Garden Home', price: 10500, location: 'Green Park', dist: '2.1', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Oct/05/Photo_h470_w1080/81649851_4_1759662922985-60724_470_1080.jpg', desc: 'Ground floor 1 BHK with small garden.' },
    { type: 'flat', title: 'Flat 8 • Student Villa', price: 20000, location: 'East Colony', dist: '2.6', img: 'https://imagecdn.99acres.com/media1/33541/16/670836775M-1762768810446.jpg', desc: 'Entire floor, 3 bedrooms, no landlord interference.' },
    { type: 'flat', title: 'Flat 9 • Budget Flat', price: 8500, location: 'Old Town', dist: '5.2', img: 'https://imagecdn.99acres.com/media1/23583/8/471668086O-1762405846777.jpg', desc: 'Unfurnished 1 BHK, very low rent.' },
    { type: 'flat', title: 'Flat 10 • Modern Living', price: 14000, location: 'New City', dist: '3.8', img: 'https://dyimg2.realestateindia.com/prop_images/3898649/1424077_3.jpg', desc: '2 BHK with covered parking.' },
    { type: 'flat', title: 'Flat 11 • Campus Residency', price: 11500, location: 'Near University', dist: '0.9', img: 'https://dyimg1.realestateindia.com/prop_images/3314444/1402036_2.jpg', desc: '1.5 BHK, walking distance to class.' },
    { type: 'flat', title: 'Flat 12 • Sky High', price: 16000, location: 'City Center', dist: '3.1', img: 'https://imagecdn.99acres.com/media1/33876/5/677525529O-1764058347560.jpg', desc: '10th floor apartment, great view.' },
    { type: 'flat', title: 'Flat 13 • Quiet Corner', price: 9800, location: 'West End', dist: '4.0', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Sep/05/Photo_h470_w1080/72679479_9_HOTO2025090418313310_470_1080.jpg', desc: '1 BHK in a peaceful residential colony.' },
    { type: 'flat', title: 'Flat 14 • The Loft', price: 13000, location: 'Art District', dist: '3.5', img: 'https://imagecdn.99acres.com/media1/33492/16/669856607O-1762546242407.jpg', desc: 'Industrial style loft, open floor plan.' },
    { type: 'flat', title: 'Flat 15 • Family & Friends', price: 15000, location: 'Green Park', dist: '2.2', img: 'https://imagecdn.99acres.com/media1/33650/3/673003337O-1763155273870.jpg', desc: '2 BHK suitable for 4 students sharing.' },
    { type: 'flat', title: 'Flat 16 • Compact Studio', price: 9000, location: 'Metro Stn', dist: '4.8', img: 'https://imagecdn.99acres.com/media1/26710/17/534217595O-1755302972732.jpg', desc: 'Furnished studio, ideal for solo stay.' },
    { type: 'flat', title: 'Flat 17 • River Side', price: 11200, location: 'River Road', dist: '5.0', img: 'https://imagecdn.99acres.com/media1/33788/10/675770977O-1763706588404.jpg', desc: 'Cool breeze, 1 BHK, airy rooms.' },
    { type: 'flat', title: 'Flat 18 • Elite Apartments', price: 17500, location: 'Elite Block', dist: '2.4', img: 'https://imagecdn.99acres.com/media1/33788/10/675770919O-1763706571532.jpg', desc: '2 BHK with power backup and lift.' },
    { type: 'flat', title: 'Flat 19 • Sunshine Flats', price: 10000, location: 'East Colony', dist: '2.8', img: 'https://imagecdn.99acres.com/media1/33541/16/670836775O-1762768811106.jpg', desc: 'Affordable 1 BHK, east facing.' },
    { type: 'flat', title: 'Flat 20 • Central Point', price: 14500, location: 'Market St', dist: '1.2', img: 'https://imagecdn.99acres.com/media1/33875/19/677519269O-1764057528025.jpg', desc: '2 BHK right above the market.' },
    { type: 'flat', title: 'Flat 21 • Scholar Home', price: 11800, location: 'North Gate', dist: '1.5', img: 'https://imagecdn.99acres.com/media1/33875/19/677519553O-1764057560799.jpg', desc: 'Renovated 1 BHK near coaching centers.' },
    { type: 'flat', title: 'Flat 22 • The Duplex', price: 22000, location: 'Green Park', dist: '2.0', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Nov/28/Photo_h300_w450/82338795_3_1764273618925-832_300_450.jpg', desc: 'Fancy duplex flat for large groups.' },
    { type: 'flat', title: 'Flat 23 • Old World Charm', price: 9200, location: 'Old Town', dist: '5.3', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Nov/28/Photo_h300_w450/82338795_3_1764273618925-832_300_450.jpg', desc: 'High ceilings, thick walls, cool in summer.' },
    { type: 'flat', title: 'Flat 24 • Tech Park View', price: 13500, location: 'IT Zone', dist: '6.0', img: 'https://img.staticmb.com/mbphoto/property/cropped_images/2025/Oct/05/Photo_h470_w1080/81649851_4_1759662922985-60724_470_1080.jpg', desc: 'Modern 1 BHK, close to internships.' },
    { type: 'flat', title: 'Flat 25 • Final Stop', price: 12200, location: 'South Gate', dist: '1.9', img: 'https://dyimg2.realestateindia.com/prop_images/3898649/1424077_3.jpg', desc: 'Well maintained 1 BHK, secure society.' }
  ];

  const MEAL_DATA = [
    { title:'Weekly Veg Plan A', price:1400, tag:'Veg', img: 'https://picsum.photos/seed/veg1/900/600' },
    { title:'Weekly Veg Plan B', price:1250, tag:'Veg', img: 'https://picsum.photos/seed/veg2/900/600' },
    { title:'Weekly Non-Veg Plan A', price:1600, tag:'Non-Veg', img: 'https://picsum.photos/seed/nonveg1/900/600' },
    { title:'Weekly Non-Veg Plan B', price:1750, tag:'Non-Veg', img: 'https://picsum.photos/seed/nonveg2/900/600' },
    { title:'Monthly Combo (Student)', price:5200, tag:'Combo', img: 'https://picsum.photos/seed/combo1/900/600' },
    { title:'Budget Veg', price:1000, tag:'Veg', img: 'https://picsum.photos/seed/veg3/900/600' }
  ];

  const LAUNDRY_DATA = [
    { title:'Quick Wash', price:99, desc:'24-hour turnaround • Per kg', img: 'https://picsum.photos/seed/laundry1/900/600' },
    { title:'Economy', price:69, desc:'48-hour • Budget friendly', img: 'https://picsum.photos/seed/laundry2/900/600' },
    { title:'Premium Care', price:149, desc:'Stain treatment + express', img: 'https://picsum.photos/seed/laundry3/900/600' }
  ];

  // --- 2. HELPERS ---

  // reveal animation
  function watchReveal(containerSelector){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    
    const targets = document.querySelectorAll(containerSelector + ' > *');
    if(targets.length > 0){
        targets.forEach(el=> observer.observe(el));
    }
  }

  // Generic card element for stay (PG/Flat)
  function createStayCard(item){
    const div = document.createElement('article');
    div.className = 'stay-card';
    
    // UPDATED LAYOUT: Removed "Book Demo". Adjusted buttons to match image format.
    div.innerHTML = `
      <img class="stay-thumb" src="${item.img}" alt="${item.title}">
      <div style="display: flex; flex-direction: column; height: 100%;">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
          <h3 style="margin:0;font-size:16px">${item.title}</h3>
          <div class="pill">₹${item.price.toLocaleString()}/mo</div>
        </div>
        <p class="muted" style="margin:8px 0">${item.location} • ${item.dist} km from campus</p>
        <p style="font-weight:600;margin:8px 0 12px">${item.desc}</p>
        
        <div style="display:flex;gap:10px;margin-top:auto;">
            <button class="btn btn-whatsapp small-whatsapp" style="flex:1;">WhatsApp</button>
            <button class="btn btn-ghost small-more" style="flex:1;">Details</button>
        </div>

        <div style="margin-top:12px; text-align:center;">
             <span class="small-map" style="color:#555; cursor:pointer; font-size:14px; font-weight:500;">View on Map</span>
        </div>
      </div>
    `;

    // Handler: Details Modal
    div.querySelector('.small-more').addEventListener('click', ()=>{
      // Removed "Request Demo" button from modal as well
      showModal(item.title, `<p><b>Price:</b> ₹${item.price.toLocaleString()} / month</p>
        <p><b>Location:</b> ${item.location} • ${item.dist} km from campus</p>
        <p style="margin-top:8px">${item.desc}</p>
        <img src="${item.img}" style="width:100%;border-radius:10px;margin-top:10px;">`);
    });

    // Handler: Map Link
    div.querySelector('.small-map').addEventListener('click', ()=>{
        const mapQuery = encodeURIComponent(item.location + ' Indore');
        window.open(`https://www.google.com/maps/search/?api=1&query=${mapQuery}`, '_blank');
    });
    
    // Handler: WhatsApp
    div.querySelector('.small-whatsapp').addEventListener('click', () => {
        const message = `Hi, I am interested in ${item.title}. Can you please provide more details?`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    return div;
  }

  // --- 3. RENDER FUNCTIONS ---

  function renderStay(containerId){
    const cont = document.getElementById(containerId);
    if(!cont) return;
    cont.innerHTML = '';

    let currentSection = null;

    STAY_DATA.forEach(it=>{
      if(it.type !== currentSection){
        currentSection = it.type;
        const header = document.createElement('h2');
        header.innerText = (it.type === 'pg') ? 'Student PGs' : 'Flats & Apartments';
        header.style.gridColumn = '1 / -1'; 
        header.style.width = '100%';
        header.style.margin = '25px 0 15px 0';
        header.style.paddingBottom = '8px';
        header.style.borderBottom = '2px solid #eee';
        header.style.color = '#333';
        header.style.fontSize = '22px';
        cont.appendChild(header);
      }
      cont.appendChild(createStayCard(it));
    });
    window.setTimeout(()=> watchReveal('#'+containerId), 120);
  }

  function renderMeals(containerId){
    const cont = document.getElementById(containerId);
    if(!cont) return;
    cont.innerHTML = '';
    MEAL_DATA.forEach((m)=>{
      const d = document.createElement('div');
      d.className = 'meal-card';
      // Removed Order (Demo) button
      d.innerHTML = `
        <img class="meal-img" src="${m.img}" alt="${m.title}">
        <h3 style="margin:0;font-size:18px">${m.title}</h3>
        <p class="muted" style="margin:6px 0">Fresh home-cooked style</p>
        <div class="meal-tags">
          <div class="tag-pill">${m.tag}</div>
          <div style="font-weight:700;margin-left:auto">₹${m.price}</div>
        </div>
        <div style="margin-top:10px;display:flex;gap:8px">
          <button class="btn btn-ghost meal-details" style="width:100%">View Menu</button>
        </div>
      `;
      d.querySelector('.meal-details').addEventListener('click', ()=>{
        showModal(m.title, `<p><b>Price:</b> ₹${m.price}</p><p>Sample menu: Dal, Sabji, Roti, Rice, Salad.</p>
          <img src="${m.img}" style="width:100%;border-radius:10px;margin-top:8px;">`, 'Order Now', ()=>alert('Order placed (demo)!'));
      });
      cont.appendChild(d);
    });
    window.setTimeout(()=> watchReveal('#'+containerId), 100);
  }

  function renderLaundry(containerId){
    const cont = document.getElementById(containerId);
    if(!cont) return;
    cont.innerHTML = '';
    LAUNDRY_DATA.forEach(p=>{
      const e = document.createElement('div');
      e.className = 'laundry-card';
      e.innerHTML = `
        <img class="laundry-img" src="${p.img}" alt="${p.title}">
        <h3 style="margin:0;font-size:18px">${p.title}</h3>
        <p class="muted" style="margin:6px 0">${p.desc}</p>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
          <div style="font-weight:800">₹${p.price}/kg</div>
          <button class="btn btn-ghost details">Details</button>
        </div>
      `;
      e.querySelector('.details').addEventListener('click', ()=> {
        showModal(p.title, `<p><b>Price:</b> ₹${p.price}/kg</p><p>${p.desc}</p>`, 'Schedule Pickup', ()=>alert('Pickup scheduled (demo)'));
      });
      cont.appendChild(e);
    });
    window.setTimeout(()=> watchReveal('#'+containerId), 100);
  }

  // --- 4. PUBLIC API ---
  return {
    initStayPage: function(opts){
      opts = Object.assign({containerId:'listGrid'}, opts || {});
      renderStay(opts.containerId);
    },
    initMealsPage: function(opts){
      renderMeals((opts || {}).containerId || 'mealGrid');
    },
    initLaundryPage: function(opts){
      renderLaundry((opts || {}).containerId || 'laundryGrid');
    }
  };
})();
