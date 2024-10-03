import { useEffect } from 'react'; 
 
const TallyFormPopup = () => { 
  useEffect(() => { 
    window.TallyConfig = { 
      formId: "w5LN4Q", 
      popup: { 
        emoji: { 
          text: "👋", 
          animation: "wave" 
        }, 
        open: { 
          trigger: "time", 
          ms: 10000 
        } 
      } 
    }; 
     
    const script = document.createElement('script'); 
    script.src = "https://tally.so/widgets/embed.js"; // Assuming this is the script URL for embedding 
    script.async = true; 
    document.body.appendChild(script); 
 
    return () => { 
      document.body.removeChild(script); // Clean up the script on component unmount 
    }; 
  }, []); 
 
  return null; // No visible UI, it's just setting up the popup behavior 
}; 
 
export default TallyFormPopup;
