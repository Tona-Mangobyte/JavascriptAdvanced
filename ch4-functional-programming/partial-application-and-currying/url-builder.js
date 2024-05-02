const apiUrl = 'https://www.googleapis.com/books/volumes?q=12345';

function url(protocol, subdomain, domain, pathSegment) {
  return `${protocol}://${subdomain}.${domain}/${pathSegment.join('/')}`;
}

// Step 1
// const partialUrl = url.bind(null, 'https', 'www', 'googleapis.com');
// const fullUrl = partialUrl(['books', 'volumes', 'q=12345']);
// const fullUrl = url.call(null, 'https', 'www', 'googleapis.com', ['books', 'volumes', 'q=12345']);
const fullUrl = url.apply(null, ['https', 'www', 'googleapis.com', ['books', 'volumes', 'q=12345']]);
console.log(fullUrl); // Outputs: https://www.googleapis.com/books/volumes/q=12345

// Step 2
function partial(func, ...args) {
  return function(...newArgs) {
    return func(...args, ...newArgs);
  }
}
const partialUrl = partial(url, 'https', 'www', 'googleapis.com');
const fullUrl2 = partialUrl(['books', 'volumes', 'q=12345']);
console.log(fullUrl2); // Outputs: https://www.googleapis.com/books/volumes/q=12345
