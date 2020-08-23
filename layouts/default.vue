<template>
  <v-app dark>
    <v-navigation-drawer
     v-model="drawer "
     :mini-variant="miniVariant"
     :clipped="clipped"
     right
     fixed
     disable-resize-watcher
     app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="primary" dark fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items class="d-none d-sm-block">
        <v-btn
         v-for="(item, i) in items"
         :key="i"
         :to="item.to" 
         router
         color="primary"
         depressed
         >{{item.title}}</v-btn>
      </v-toolbar-items>
      <v-btn icon @click.stop="drawer = !drawer" class="d-block d-sm-none">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/login"
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Geocache Network"
    };
  },
};
</script>
