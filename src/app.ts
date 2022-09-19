// import { core } from './app-core'

// core.register('module1', function(sandbox) { console.log('module1') })
// core.register('module2', function(sandbox) { console.log('module2') })
// core.register('module3', function(sandbox) { console.log('module3') })
// core.register('module4', function(sandbox) { console.log('module4') })
// core.register('module5', function(sandbox) { console.log('module5') })

// core.startAll()
import { Weather } from './modules/weather';

window.onload = () => {
  Weather().start();
};
