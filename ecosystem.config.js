module.exports = {
  apps : [{
    name: 'server-f',
    script: './index.js'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-3-134-99-145.us-east-2.compute.amazonaws.com',
      key : '~/.ssh/f.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/reperez120/server-f.git',
      path : '/home/ubuntu/server-f',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
