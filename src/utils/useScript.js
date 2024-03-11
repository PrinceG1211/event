const { useEffect, useState } = require("react");

const useScript = (src, dependsOnStatus = 'ready') => {
    const [status, setStatus] = useState(src ? 'loading' : 'idle');
  
    useEffect(() => {
      // Do not load the script until the dependency script is ready
      if (dependsOnStatus !== 'ready') {
        setStatus('waiting');
        return;
      }
  
      if (!src) {
        setStatus('idle');
        return;
      }
  
      // Check if the script is already in the document
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        // Create script
        script = document.createElement('script');
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
  
        // Script event handlers
        const onLoad = () => setStatus('ready');
        const onError = () => setStatus('error');
  
        script.addEventListener('load', onLoad);
        script.addEventListener('error', onError);
  
        // Cleanup function
        return () => {
          script.removeEventListener('load', onLoad);
          script.removeEventListener('error', onError);
        };
      } else {
        // Script already loaded
        setStatus('ready');
      }
    }, [src, dependsOnStatus]); // Re-run effect if src or dependency status changes
  
    return status;
  };

  export default useScript;