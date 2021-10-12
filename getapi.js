const ewelink = require('ewelink-api');

/* instantiate class */
(async () =>{
    const connection = new ewelink({
        email: 'boonchauy0013@gmail.com',
        password: 'boonchauy0054',
        region: 'as',
      });
      
      /* get all devices */
      const devices = await connection.getDevice('100133361b');
      console.log(devices);
})();

