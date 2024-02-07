
import { useState, useEffect } from 'react';

// Custom hook for loading an external script
const useScript = (src) => {
    const [status, setStatus] = useState(src ? 'loading' : 'idle');

    useEffect(() => {
        // If there's no source or the script is already loaded, do nothing
        if (!src) {
            setStatus('idle');
            return;
        }

        // Check if the script is already in the document
        let script = document.querySelector(`script[src = "${src}"]`);
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
    }, [src]); // Re-run effect if src changes

    return status;
};


export default useScript;