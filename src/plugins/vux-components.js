import Vue from 'vue';

import {
  XHeader,
  Group,
  XInput,
  Search,
  Marquee,
  MarqueeItem,
  Flexbox,
  FlexboxItem,
  Panel,
  Tabbar,
  TabbarItem,
  ViewBox,
  ButtonTab,
  ButtonTabItem,
  Badge,
  Tab,
  TabItem,
  Card,
  ToastPlugin,
  CellBox,
  Cell,
  ConfirmPlugin,
  DatetimeView,
  TransferDom,
  Popup,
  PopupHeader,
  Datetime,
  PopupPicker,
  Checker,
  CheckerItem,
} from 'vux';

Vue.component('xHeader', XHeader);
Vue.component('group', Group);
Vue.component('xInput', XInput);
Vue.component('search', Search);
Vue.component('marquee', Marquee);
Vue.component('marquee-item', MarqueeItem);
Vue.component('flexbox', Flexbox);
Vue.component('flexbox-item', FlexboxItem);
Vue.component('panel', Panel);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
Vue.component('view-box', ViewBox);
Vue.component('button-tab', ButtonTab);
Vue.component('button-tab-item', ButtonTabItem);
Vue.component('badge', Badge);
Vue.component('tab', Tab);
Vue.component('tab-item', TabItem);
Vue.component('card', Card);
Vue.component('cell-box', CellBox);
Vue.component('cell', Cell);
Vue.component('datetime-view', DatetimeView);
Vue.component('popup', Popup);
Vue.component('popup-header', PopupHeader);
Vue.component('datetime', Datetime);
Vue.component('popup-picker', PopupPicker)
Vue.component('checker', Checker)
Vue.component('checker-item', CheckerItem)

Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

Vue.directive('transfer-dom', TransferDom)
