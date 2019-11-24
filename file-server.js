const express = require('express');
const app = express();
const port = 3110;
const router = express.Router();
const fs = require('fs');
var cors = require('cors');

app.use(cors());

app.use(express.static(`${__dirname}/dist`));

app.use('/', router);

router.get('*', (req, res, next) => {
  // uncomment the line below to see the file requests on the console
  req.url = req.url.replace( '%20', ' ' );
  req.path = req.path.replace( '%20', ' ' );

  console.log(req.url);
  console.log(req.path);

  if (fs.existsSync(`${__dirname}` + req.url+ '.gz')){
    console.log( "SERVIING ZIP" )
    res.set('Content-Encoding', 'gzip');
    res.set('Content-Type', 'application/javascript');
    req.url = req.url + '.gz';
    res.sendFile(`${__dirname}` + req.url);
  } else {
    console.log( "SERVIING FROM PATH" )
    // use req.path, instead of req.url, to discard any any query parameter (like webpack hashes)
    res.sendFile(`${__dirname}` + req.url);
  }
});

app.listen(port);
