function fetchJsonp(url) {
  return new Promise(resolve => {
    const script = document.createElement('script');
    const name = '_jsonp';

    script.src = `${url}&jsoncallback=${name}`;

    window[name] = (json) => {
      resolve(new Response(JSON.stringify(json)));
      script.outerHTML = '';
      delete window[name];
    };

    if (document.body) {
      document.body.appendChild(script);
    }
  })
}

export default fetchJsonp;