import ChatDOM from './ChatDOM';
import ChatControl from './ChatControl';
import ChatWS from './ChatWS';
import ChatAPI from './ChatAPI';

const domainUrl = 'ahj-hw8-1.onrender.com';

const hw = document.querySelector('#hw');

const chatDOM = new ChatDOM();
chatDOM.bindToDOM(hw);

const chatWS = new ChatWS(domainUrl);
const chatAPI = new ChatAPI(domainUrl);

const chatControl = new ChatControl(chatDOM, chatWS, chatAPI);
chatControl.init();

console.log('app started');