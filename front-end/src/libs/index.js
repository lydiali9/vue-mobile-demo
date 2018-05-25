import Vue from 'vue'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VToolbar from 'vuetify/es5/components/VToolbar'
import VGrid from 'vuetify/es5/components/VGrid'
import VCard from 'vuetify/es5/components/VCard'
import VTextField from 'vuetify/es5/components/VTextField'
import VForm from 'vuetify/es5/components/VForm'
import VBtn from 'vuetify/es5/components/VBtn'
import VSnackbar from 'vuetify/es5/components/VSnackbar'
import VProgressCircular from 'vuetify/es5/components/VProgressCircular'
import VList from 'vuetify/es5/components/VList'
import transitions from 'vuetify/es5/components/transitions'
import ripple from 'vuetify/es5/directives/ripple'

import VIcon from 'vuetify/es5/components/VIcon'
import VDialog from 'vuetify/es5/components/VDialog'
import VDataTable from 'vuetify/es5/components/VDataTable'


import VueScroller from 'vue-scroller'

Vue.use(VueScroller);
Vue.use(Vuetify, {
  theme: {
    primary: "#729fe8",
    secondary: "#e57373",
    accent: "#4ab184",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#4ab184",
    success: "#00dc86",
    botton: "#00dc86",
    textLightGray: '#bfbfbf',
    sidebarBg: '#f5f8fe',
    appBg: '#f6f9fb',
    tableHeader: "#d9ece9",
    cardTitleBack: "#f8f9fb",
    textColor: "#4a5864",
    detailText: "#638ca6"
  },
  components: {
    VApp,
    VToolbar,
    VNavigationDrawer,
    VGrid,
    VCard,
    VTextField,
    VForm,
    VBtn,
    VSnackbar,
    VIcon,
    VDialog,
    VProgressCircular,
    VList,
    VDataTable,
  },
  directives: {
    ripple
  },
  transitions,
});
