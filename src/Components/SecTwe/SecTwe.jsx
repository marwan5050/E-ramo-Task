import React from 'react';

import appel from '../Assets/Images/partners/apple-logo-E3DBF3AE34-seeklogo 5.png';
import samsung from '../Assets/Images/partners/samsung-logo-8A87EDFB33-seeklogo 3.png';
import realme from '../Assets/Images/partners/realme-logo-8D20880530-seeklogo 3.png';
import Nokia from '../Assets/Images/partners/Nokia-logo-71D592538B-seeklogo 3.png';
import oppo from '../Assets/Images/partners/oppo-logo-A372B86002-seeklogo 3.png';
import xiaomi from '../Assets/Images/partners/xiaomi-logo-3867428FC8-seeklogo 3.png';
import lenovo from '../Assets/Images/partners/lenovo-logo-E125AE3250-seeklogo 3.png';
import lg from '../Assets/Images/partners/LG_Electronics-logo-72D5E801F6-seeklogo 3.png';
import infinix from '../Assets/Images/partners/infinix-logo-CDA1C83EE2-seeklogo 3.png';
import htc from '../Assets/Images/partners/htc-logo-7D8A3337A9-seeklogo 3.png';
import tecno from '../Assets/Images/partners/tecno-smartphone-logo-D6AFF06A48-seeklogo 3.png';
import vivo from '../Assets/Images/partners/vivo-logo-9FBC12B0F9-seeklogo 3.png';
import Huawei from '../Assets/Images/partners/Huawei-logo-A8C7CBCAA8-seeklogo 3.png';

export default function SecTwe() {
  return (
   <>
    <div className='container my-5'>
        <h5 className='my-4 text-capitalize fw-bold'>our beloved clients</h5>
        <div className='d-flex justify-content-between align-items-center'>
        <img src={appel} alt='applephoto' />
        <img src={samsung} alt='applephoto' />
        <img src={realme} alt='applephoto' />
        <img src={Nokia} alt='applephoto' />
        <img src={oppo} alt='applephoto' />
        <img src={xiaomi} alt='applephoto' />
        <img src={lg} alt='applephoto' />
        <img src={infinix} alt='applephoto' />
        <img src={htc} alt='applephoto' />
        <img src={tecno} alt='applephoto' />
        <img src={vivo} alt='applephoto' />
        <img src={Huawei} alt='applephoto' />
        
        </div>
    </div>
   </>
  )
}
