const pages = ['pages/index/index','pages/test/index'];
const color = '#282c34';

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from '@/utils/web';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: '我的书架',
  },
  tabBar: {
    color:'#333333',
    selectedColor:'#93b5cf',
    backgroundColor:'#ffffff',
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "书库",
        "iconPath": "images/no-select-book.png",
        "selectedIconPath": "images/select-book.png"
      },
      {
        "pagePath": "pages/test/index",
        "text": "我的",
        "iconPath": "images/no-select-my.png",
        "selectedIconPath": "images/select-my.png"
      }
    ]
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: 'Remax One Ali',
    titleBarColor: color,
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: 'Remax One Toutiao',
    navigationBarBackgroundColor: color,
  },
};

export const web: WebAppConfig = {
  pages,
  title: 'Remax One Web',
};
