import { headerMenu, createDropdownMenu, rotetedArrow } from './header-menu.js';
import './render.js';
import './taskBlock.js';
import '../style/style.css';
import '../index.html';

headerMenu.addEventListener('click', createDropdownMenu);
headerMenu.addEventListener('click', rotetedArrow);
