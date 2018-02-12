import riot from 'riot';

const Renderable = riot.tag('renderable', '<html></html>', function(...args) {
   return true;
});

export default Renderable;
