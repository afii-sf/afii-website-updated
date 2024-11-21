import { useEffect } from 'react'; 
 
const ConversionTracking = () => { 
  useEffect(() => { 
    const script = document.createElement('script'); 
    script.innerHTML = ` 
      gtag('event', 'conversion', { 
        'send_to': 'AW-16732711300/fGxfCLnMg94ZEITT46o-', 
        'value': 1.0, 
        'currency': 'USD' 
      }); 
    `; 
    document.body.appendChild(script); 
 
    return () => { 
      document.body.removeChild(script);  
    }; 
  }, []); 
 
  return null;  
}; 
 
export default ConversionTracking;
