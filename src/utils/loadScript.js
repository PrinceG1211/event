const loadScript = (src, id) => {
    return new Promise((resolve, reject) => {
        // Check if the script already exists
        if (document.getElementById(id)) {
            resolve();
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.body.appendChild(script);
    });
};

export default loadScript;